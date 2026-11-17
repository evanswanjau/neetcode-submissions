class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let left = 0;
        let right = 1;

        while(right < prices.length){
            if(prices[left] < prices[right]){
                let diff = prices[right] - prices[left];
                if(diff > maxProfit){
                    maxProfit = diff;
                }                
            } else {
                left = right
            }
            right += 1;
        }

        return maxProfit;
    }
}
