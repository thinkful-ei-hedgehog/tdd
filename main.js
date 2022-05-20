function addNumbers(a=0, b=0){
    a = Number(a);
    b = Number(b);
    if(isNaN(a) || isNaN(b)){
        return 'Incorrect types entered';
    }
    return a+b;
}
console.log(typeof true)

//Use Cases/Requirements
//
console.log(`function should always return one number value`,typeof addNumbers(9,3) ==='number');
//what to do if param is undefined && is the correct datatype being passed through && what to do if params are missing?
console.log(`should return error if params are undefined or the incorrect type`, addNumbers('the','dog')==='Incorrect types entered')
console.log(`should return error if params are undefined or the incorrect type`, typeof addNumbers('the','dog')==='object')
// should not return a negative number/are nums negatives?
console.log(`should add negative numbers`, addNumbers(-2,-3)===-5);
//should add stringified numbers
console.log(`should add stringified numbers`, addNumbers('3','3')===6);

function xyz(){}
let obj ={};
let arr=[]
console.log(typeof obj)
console.log(typeof arr)