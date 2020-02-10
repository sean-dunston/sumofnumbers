const test = [1, 2, 3, 4];

function sumFor(nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

console.log(sumFor(test));

function sumWhile(nums) {
  let total = 0;
  let i = 0;
  while (i < nums.length) {
    total += nums[i];
    i++;
  }
  return total;
}

console.log(sumWhile(test));

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function(memo, num){ return memo + num; }, 0);
}

console.log(sumTheSimpleWay(test));

function sumRecursion(nums) {
  if (nums.length == 1) {
    return nums[0];
  }
  return nums.pop() + sumRecursion(nums);
}

console.log(sumRecursion(test));

