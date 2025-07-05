function add(numbers){
    numbers=numbers.trim();// Handles "", "   ", "\n"
    if(numbers==="") 
        return 0;

    let delimiter=/,|\n/;
    let customDelimiter=null;

    //check for custom delimiter
    if(numbers.startsWith("//"))
    {
        const [customDel,...numbers]=numbers.split("\n");
        customDelimiter=customDel.slice(2);

        if (!customDelimiter) {
            throw new Error("Invalid custom delimiter definition");
        }
        //Replaces any RegExp-special character with an escaped version so it matches literally.
        const escapedDelimiter = customDelimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        delimiter = new RegExp(escapedDelimiter);
        numbers=numbers.join("\n");
    }

    //parse number parts
    const numList=numbers
        .split(delimiter)
        .map(n=>n.trim())
        .filter(n=>n!=="");
    
    //check for negative numbers
    const negativeNumbers = numList.filter(n => parseInt(n) < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed ${negativeNumbers.join(",")}`);
    }
    
    //check for no custom delimeter
    if (!customDelimiter) {
        const invalidCharPresent = numbers
            .split(/,|\n/)
            .some(part => part && /[^0-9]/.test(part));
        if (invalidCharPresent) {
            throw new Error("Unexpected delimiter");
        }
    }
    
    //final sum
    return numList.reduce((sum,num)=>sum+parseInt(num),0);
}

module.exports = {add};
