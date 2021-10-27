function removeDuplicates(nums: number[]): number {
  const len = nums.length;

  if (len === 0) return 0;

  let forward = 1,
    location = 0;

  while (forward < len) {
    if (nums[forward] !== nums[location]) {
      location++;

      if (location !== forward) {
        nums[location] = nums[forward];
      }
    }

    forward++;
  }

  return location + 1;
}
