function maxSubArray(nums: number[]): number {
  let maxSum = nums[0];
  let curSum = maxSum;

  for (let i = 1; i < nums.length; i++) {
    if (curSum < 0) {
      curSum = nums[i];
    } else {
      curSum += nums[i];
    }

    if (curSum > maxSum) {
      maxSum = curSum;
    }
  }

  return maxSum;
}
