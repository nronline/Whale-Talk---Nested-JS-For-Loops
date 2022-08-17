let input = 'turpentine and turtles';
const vowels = ['a','e','i','o','u'];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  //log the numerical value of i
  //console.log(i);
  // log the character too
  //console.log(input[i]);

     //if the characters from the two variables are either an e or u then push those characters to the resultsArray
  if(input[i] === 'e' || input[i] === 'u' ){
    resultArray.push(input[i]);
  }

    //iterate through the vowels array
  for (let j = 0; j < vowels.length; j++){
    //console.log(j);
    //console.log(vowels[j]);

      //If the characters from both arrays match push the charracter to the resultsArray
    if(input[i] === vowels[j]){
      resultArray.push(input[i]);
    }
  }
  
}

// join the array into a string and transform to upper case
console.log(resultArray.join('').toUpperCase());
