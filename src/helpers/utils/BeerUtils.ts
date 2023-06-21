export type Range = 'low' | 'mid' | 'high';

export const checkRange = (
  firstThreshold: number,
  secondThreshold: number,
  value: number
): Range => {
  if (value < firstThreshold) {
    return 'low';
  } else if (value > secondThreshold) {
    return 'high';
  } else {
    return 'mid';
  }
};
