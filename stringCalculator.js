function add(numbers){
    numbers=numbers.trim();// Handles "", "   ", "\n"
    if(numbers==="") 
        return 0;
    return parseInt(numbers);
}

module.exports = {add};
