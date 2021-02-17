//Assignment 1
function cap(){
var text = prompt("Type Scentence");
var lc = text.toLowerCase();
var str = lc.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());
  return str
}

console.log(cap());

//Assignment 2
function factorialize(n){
n = Number(prompt("Input"))
var result = 1
for (var i=1; i <=n ; i++){
result*=i;
}
return result;
}
console.log(factorialize());