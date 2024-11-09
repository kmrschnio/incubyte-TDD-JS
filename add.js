const add = (numString) => {
    if(numString==='') return 0;
    let numbersArray = numString.split(',').map(Number);

    return numbersArray.reduce((sum,number)=>sum+number,0);
}
module.exports = add;