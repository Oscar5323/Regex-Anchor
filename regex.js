let ls ='Monday'
console.log(/^M/.test(ls))
console.log(/^m/.test(ls))
console.log(/y$/.test(ls));
console.log(/a$/.test(ls));


let isValid = /^\d\d:\d\d$/.test('10:25');
console.log(isValid);
let isvalid = /^\d\d:\d\d$/.test('12:700');
console.log(isvalid);