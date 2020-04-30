import { Request, Response } from 'express';

export const getLogin = (req: Request, res: Response) => {
  res.render('account/login', {
    title: 'login',
  });
};

export const postLogin = (req: Request, res: Response) => {
  const { email, password } = req.body;
};

export const getRegistration = (req: Request, res: Response) => {
  res.render('account/registration', {
    title: 'registration'
  })
}

export const postRegistration = (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  console.log('username :>> ', username);
  console.log('email :>> ', email);
};