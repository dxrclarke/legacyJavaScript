function rot13(str) {
  let oldStr = str;
  let ciphered = "";
  for(let i = 0; i < oldStr.length; i ++) {
    if (parseInt(oldStr.charCodeAt([i])) >=65 && parseInt(oldStr.charCodeAt([i])) <=90)
      {let int = parseInt(`${oldStr.charCodeAt([i])}`)+13;
    if (int > 90) {
        int -= 26;
        } if (int > 64 && int < 91){
    ciphered += String.fromCharCode(int);
      }
    }  else ciphered += oldStr[i];
  }   
  return ciphered;
}

rot13("SERR YBIR?");
