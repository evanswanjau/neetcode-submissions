
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let start = 0;
        let end = nums.length - 1;

        while (start <= end) {
            let med = Math.floor((start + end) / 2);

            if (target === nums[med]) {
                return med;
            } else if (target > nums[med]) {
                start = med + 1;
            } else {
                end = med - 1;
            }
        }

        return -1;
    }
}
