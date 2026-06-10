function range(start,end) {
    if(end === undefined){
        return function(definedEnd){
            return rangeHelper(start, definedEnd);
        }
    }else{
        return rangeHelper(start, end);
    }
}

function rangeHelper(start, end){
    const output = [];
    for(let i = start; i <= end; i++){
        output.push(i);
    }
    console.log(output);
    return output;
}

range(3,3);    // [3]
range(3,8);    // [3,4,5,6,7,8]
range(3,0);    // []

const start3 = range(3);
const start4 = range(4);

start3(3);     // [3]
start3(8);     // [3,4,5,6,7,8]
start3(0);     // []

start4(6);     // [4,5,6]