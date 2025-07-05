function add(numbers){
    numbers=numbers.trim();// Handles "", "   ", "\n"
    if(numbers==="") 
        return 0;
    let delimiter=/,|\n/;
    let customDelimiter=null;
    if(numbers.startsWith("//"))
    {
        const partition=numbers.split("\n");
        if (partition.length < 2) {
            throw new Error("Invalid custom delimiter definition");
        }
        customDelimiter=partition[0].substring(2);
        if (customDelimiter === "") {
            throw new Error("Invalid custom delimiter definition");
        }
        const escapedDelimiter = customDelimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');//Replaces any RegExp-special character with an escaped version so it matches literally.
        delimiter = new RegExp(escapedDelimiter);
        numbers=partition.slice(1).join("\n");
    }
    const numList=numbers.split(delimiter).map(n=>n.trim()).filter(n=>n!=="");
    
    const negativeNumbers = numList.filter(n => parseInt(n) < 0);
    
    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed ${negativeNumbers.join(",")}`);
    }
     if (!customDelimiter) {
        const invalid = numbers.split(/,|\n/).some(part => part && /[^0-9]/.test(part));
        if (invalid) {
            throw new Error("Unexpected delimiter");
        }
    }
    
    return numList.reduce((sum,num)=>sum+parseInt(num),0);
}

module.exports = {add};
