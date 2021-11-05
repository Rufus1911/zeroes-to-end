
const ary = [4, 0, 3, 7, 0, 5, 3, 3, 0, 1, 9, 0, 4, 4];

function zeroesToEnd(ary){
    let counter = 0; //the number of 0s in the array
    const tempAry = []; //temporary array to hold ary contents
    for (let i = 0; i < ary.length; i++){
        if (ary[i] != 0){
            tempAry.push(ary[i]); 
        }
        else {
            counter++;
        }
    }
    for (let i = 0; i < counter; i++){
        tempAry.push(0);
    }
    ary.splice(0, ary.length);
    ary = ary.concat(tempAry);
    return ary;
}

console.log(zeroesToEnd(ary))