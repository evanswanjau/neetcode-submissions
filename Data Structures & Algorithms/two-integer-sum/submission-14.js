class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let store = {};

        for(let i = 0; i < nums.length; i++){
            let diff = target - nums[i];

            if(diff in store){
                return [store[diff], i]
            } else{
                store[nums[i]] = i
            }
        }

        return [1,1]
    }
}
