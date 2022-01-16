module.exports.sum = (num1, num2) => {
  const [int1, int2] = [parseInt(num1), parseInt(num2)];
  if (Number.isNaN(int1) || Number.isNaN(int2))
    throw new Error('Invalid Parameters');
  return int1 + int2;
};
