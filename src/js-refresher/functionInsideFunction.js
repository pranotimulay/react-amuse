

export function mean(nums, n) {

    function sum() {
        return nums.reduce((acc,currentVal) => acc + currentVal, 0);
    }

    return sum() / n;

}



