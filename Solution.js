function pairElement(str) {
var pairs = str.split("");    
var arr = [];
var arr1 = [];
  
for(var i = 0; i < pairs.length; i++){

if(pairs[i] === "A"){
     arr.push(pairs[i],"T");
    
   }
   if(pairs[i] === "T"){
     arr.push(pairs[i],"A");
   }
  if(pairs[i] === "C"){
    arr.push(pairs[i],"G");
  }
  if(pairs[i] === "G"){
    arr.push(pairs[i],"C");
  }
}
for(var v = 0; v < 5; v++)  {
arr1.push(arr.splice(0,2));
  
}
  return arr1;
}


pairElement("ATCGA");
