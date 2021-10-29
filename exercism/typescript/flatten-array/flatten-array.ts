// https://exercism.org/tracks/typescript/exercises/flatten-array/solutions/monishski
// original answer, thanks

interface DeepArray<T> extends Array<T | DeepArray<T>> {}

export function flatten<T>(nums: DeepArray<T>) {
  const res: number[] = [];

  unpack(nums, res);

  return res;
}

function unpack<T>(nums: DeepArray<T>, res: number[]) {
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    if (typeof element === "number") {
      res.push(element);
    } else if (Array.isArray(element)) {
      unpack(element as DeepArray<T>, res);
    }
  }

  return res;
}
