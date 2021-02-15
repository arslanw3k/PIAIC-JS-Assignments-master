var text = prompt("Type Scentence");
var lc = text.toLowerCase();
var str = lc.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());
console.log(str);