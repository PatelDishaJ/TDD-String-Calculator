function add(numbers){
    numbers=numbers.trim();// Handles "", "   ", "\n"
    if(numbers==="") 
        return 0;
    let delimiter=/,|\n/;
    if(numbers.startsWith("//"))
    {
        const partition=numbers.split("\n");
        const customDelimiter=partition[0].substring(2);
        const escapedDelimiter = customDelimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');//Replaces any RegExp-special character with an escaped version so it matches literally.
        delimiter = new RegExp(escapedDelimiter);
        numbers=partition.slice(1).join("\n");
    }
    const numList=numbers.split(delimiter).map(n=>n.trim()).filter(n=>n!=="");
    const negativeNumbers = numList.filter(n => parseInt(n) < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed ${negativeNumbers.join(",")}`);
    }

    return numList.reduce((sum,num)=>sum+parseInt(num),0);
}

module.exports = {add};
