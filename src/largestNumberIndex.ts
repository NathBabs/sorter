/* console.log(123);

const logSomething = () => {
    console.log('something');
}

logSomething(); */
const findLargestIndex = (arr: number[]): number => {
    let index: number = 0;
    let largestValue: number = arr[0];
    for (let i  = 0; i  < arr.length; ++i) {
        if (arr[i] > largestValue) {
            index = i
            largestValue = arr[i];
        }
        
    }
    return index;
}

const numbers = [12, 156, 78, 100, 500]
console.log(findLargestIndex(numbers));