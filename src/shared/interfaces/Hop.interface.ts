import Amount from './Amount.interface';

export default interface Hop {
  name: string;
  amount: Amount;
  add: string;
  attribute: string;
}
