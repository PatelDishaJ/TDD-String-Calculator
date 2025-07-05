function add(numbers){
    numbers=numbers.trim();// Handles "", "   ", "\n"
    if(numbers==="") 
        return 0;
    const numList=numbers.split(",");
    return numList.reduce((sum,num)=>sum+parseInt(num),0);
}

module.exports = {add};
