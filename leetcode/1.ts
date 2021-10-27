function twoSum(nums: number[], target: number): number[] {
  const dist = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const difference = target - num;

    if (dist.has(difference)) return [dist.get(difference) as number, i];

    dist.set(num, i);
  }

  return [];
}
