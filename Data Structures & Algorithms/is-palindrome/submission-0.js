class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let alphaNum = 'abcdefghijklmnopqrstivwxyz0123456789';
        s = s.replaceAll(" ", "").toLowerCase();
        let newStr = '';

        for(let i = 0; i < s.length; i++){
            if(alphaNum.includes(s[i])){
                newStr += s[i]
            }
        }

        let revStr = newStr.split("").reverse().join("");

        return newStr == revStr;
    
    }
}
