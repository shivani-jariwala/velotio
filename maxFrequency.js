const maxFrequent = (arr) => {
    const Obj = {};
    //creating an Object to map elements with their frequency
    for (let i = 0; i < arr.length; i++) {
        const currentNumber = arr[i];
        if (Obj[currentNumber]) {
            Obj[currentNumber] ++;
        } else {
            Obj[currentNumber] = 1;
        }
    }
    const arrValues = Object.values(Obj);
    const arrKeys = Object.keys(Obj);
    // finding the index of highest frequency value in the values array
    let maxValueIndex = arrValues.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0); 
    // if two elements have same frequency then return the larger one
    const x = arrValues[maxValueIndex];
    
    let finalValue = arrKeys[maxValueIndex];
    for (const property in Obj) {
        if (Obj[property] == x) {
            if (property > arrKeys[maxValueIndex]) {
                finalValue = property;
            }
        }
    }
    return finalValue;
}
console.log("max occuring number is", maxFrequent([20,10,40,20,30,50,30,10,50,50]));