// Assignment code here
var generateBtn = document.querySelector("#generate");

// Get references to the #generate element
var lowerCase=[a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];
var UpperCase=[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z];
var symbol=["1","@","#","$","%","^","&","(",")","?","<",">"];
var interger=[1,2,3,4,5,6,7,8,9,0];


function passwordSetup() {
  var isValid = false;
  do {
    var totalCharacters = prompt("Select a whole number between 8 and 128 characters.");
    var confirmNumbers = confirm("Confirm if you would like numbers in your password.");
    var confirmLowerCase = confirm("Confirm if you would like lowercase letters in your password.");
    var confirmUpperCase  = confirm("Confirm if you would like uppercase letter in your password");
    var confrimSymbol = confirm("Confirm if you would like special symbols in your password.");
    var selections = {
      totalCharacters: totalCharacters,
      confirmNumbers: confirmNumbers,
      confirmLowerCase: confirmLowerCase,
      confirmUpperCase: confirmUpperCase,
      confrimSymbol: confrimSymbol
    }

  if((totalCharacters < 8)||(totalCharacters > 128))
  window.alert("You must choose a number between 8 and 128");
  else if ((!confirmNumbers)&&(!confirmLowerCase)&&(!confirmUpperCase)&&(confrimSymbol))
  window.alert("Your password must contain at least one charcter option");
  else 
  isValid=true;

} while(!isValid);
return selections;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
l