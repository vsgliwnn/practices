function plusOne(digits: number[]): number[] {
  let add = false;

  for (let i = digits.length - 1; i > -1; i--) {
    if (digits[i] < 9) {
      digits[i] += 1;
      add = false;
      break;
    } else {
      digits[i] %= 1;
      add = true;
    }
  }

  if (add) {
    digits.unshift(1);
  }

  return digits;
}
