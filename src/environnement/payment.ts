import { registerAs } from '@nestjs/config';

export default registerAs('payment', () => ({
  account: process.env.STRIPE_ACCOUNT,
  key: process.env.STRIPE_ACCOUNT_KEY,
}));
