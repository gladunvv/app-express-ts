import { Request, Response } from 'express';

export const getLogin = (req: Request, res: Response) => {
  res.render('account/login', {
    title: 'login',
  });
};
