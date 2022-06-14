/* import { sign, SignOptions } from 'jsonwebtoken';

const generateToken = (payload: string) => {
  const secret = 'SenhaSuperSecreta';
  const jwtConfig: SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = sign(payload, secret, jwtConfig);

  return token;
};

export default generateToken;  */
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG
9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`;

export default token;