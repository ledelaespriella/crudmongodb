import UserModel from './../model/user.model';
import { hashSync, compareSync } from 'bcrypt';
import { createTransport } from 'nodemailer';
import { sign } from 'jsonwebtoken';

const register = async (req, res) => {
  try {
    const body = req.body;
    body.password = hashSync(body.password, 10);
    const user = new UserModel(body);
    await user.save();
    await sendEmail(user);
    return res.json({ status: true });
  } catch (e) {
    return res.json({ status: false, errors: e.message });
  }
};

const sendEmail = async (user) => {
  // create reusable transporter object using the default SMTP transport
  const transporter = createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.MAIL_USER, // generated ethereal user
      pass: process.env.MAIL_PASS, // generated ethereal password
    },
  });

  await transporter.sendMail({
    from: '"Fred Foo 👻" <s3na2021@gmail.com>', // sender address
    to: user.email, // list of receivers
    subject: 'Hello ✔', // Subject line
    html: `<b>Confirm Email <a href='http://localhost:3001/api/confirm/email/${user._id}'>Click here</a></b>`, // html body
  });
};

const login = async (req, res) => {
  try {
    const body = req.body;
    const verify = await UserModel.findOne({ email: body.email, state: true });
    if (verify) {
      if (compareSync(body.password, verify.password)) {
        const token = sign(
          {
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
            data: { id: verify._id, nombre: verify.name, email: verify.email },
          },
          process.env.JWT_SECRET
        );

        return res.json({ status: true, token });
      } else {
        return res.json({
          status: false,
          errors: 'Email and password incorrect',
        });
      }
    } else {
      return res.json({
        status: false,
        errors: 'Email and password incorrect',
      });
    }
  } catch (e) {
    return res.json({ status: false, errors: e.message });
  }
};

const getUser = async (req, res) => {
  try {
    const user = req.user;
    return res.json({ status: true, item: user });
  } catch (err) {
    return res.json({ status: false, errors: err.message });
  }
};

export { register, login, getUser };
