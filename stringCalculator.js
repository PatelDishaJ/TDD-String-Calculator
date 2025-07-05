function add(numbers){
    numbers=numbers.trim();// Handles "", "   ", "\n"
    if(numbers==="") 
        return 0;
    const numList=numbers.split(",").map(n=>n.trim()).filter(n=>n!=="");
    return numList.reduce((sum,num)=>sum+parseInt(num),0);
}

module.exports = {add};
