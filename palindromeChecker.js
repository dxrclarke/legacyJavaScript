function palindrome(str) {
  let fillerStr = str.toLowerCase();
  let noFiller = /[A-Za-z0-9]/gi;
  let filteredStr = fillerStr.match(noFiller);
  
 
  let inverse = [];
  for (let i = filteredStr.length-1; i > -1; i--) {
    inverse.push(filteredStr[i]);
    }
    
  let j=0;
 for (let i = 0; i < filteredStr.length; i++) {
   console.log(inverse[i], filteredStr[j])
 if (inverse[i] !== filteredStr[j]) {
   return false;
 }
 j++;
 }
  
  
  
  return true;
}

palindrome("A man, a plan, a canal. Panama");

/* 
regex = remove periods, commas, white space, underscores
split string into array
reverse array via iteration
join and compare



*/
