import { sign } from 'jsonwebtoken';

class Token {
  secret;

  token;

  constructor() {
    this.secret = 'secret';

    this.token = '';
  }

  public generateToken(userId: string) {
    const { secret } = this;
    this.token = sign({ userId }, secret, {
      expiresIn: '7d',
      algorithm: 'HS256',
    });
    return this.token;
  }
}

export default Token;
