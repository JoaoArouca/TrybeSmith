import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

type MyToken = {
  userId: string,
  data: string,
};

const Decode = (req: Request, res: Response, next: NextFunction) => {
  const secretKey = 'secret';
  const token = req.headers.authorization;

  if (!token || !secretKey) {
    return res
      .status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, secretKey) as MyToken;
    req.body.user = decoded.userId;
    next();
  } catch {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default Decode;
