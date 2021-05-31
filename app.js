// 35-37 Q.2

// var date = new Date();
// console.log(date);

// var month = date.getMonth() + 1;
// console.log(month);

// var day = date.getDate();
// console.log(day);

// var year = date.getFullYear();
// console.log(year);

// function currentDate(){
//     document.write(day + "-" + month + "-" + year);
// }
// currentDate();

// 35-37 Q.3

// function fullName(fName, lName){
//     document.write(fName + " " + lName);
// }
// fullName("Faizna", "Siddiqui");

// 35-37 Q.4

// var user1Value = +prompt("Enter a 1st Number");
// var user2Value = +prompt("Enter a 2nd Number");

// function sum(){
//     document.write(user1Value +" + "+user2Value+" = " + (user1Value + user2Value) );
// }
// sum();

// 35-37 Q.5

// var u1stValue = +prompt("Enter a 1st Number");
// var u2stValue = +prompt("Enter a 2nd Number");
// var uOptr = prompt("Enter the operator you want to calculate");
// function sum(value1, value2, optr) {
//     if (uOptr === "+") {
//         document.write(value1 + " " + optr + " " + value2 + " " + "=" + " " + (value1 + value2));
//     }
//     else if (uOptr === "-") {
//         document.write(value1 + " " + optr + " " + value2 + " " + "=" + " " + (value1 - value2));
//     }
//     else if (uOptr === "*") {
//         document.write(value1 + " " + optr + " " + value2 + " " + "=" + " " + (value1 * value2));
//     }
//     else if (uOptr === "/") {
//         document.write(value1 + " " + optr + " " + value2 + " " + "=" + " " + (value1 / value2));
//     }
//     else{
//         document.write("Oppss.. Invalid Oprator!")
//     }
// }
// var outPut = sum(u1stValue, u2stValue, uOptr);

// 35-37 Q.6

// var user = prompt("Enter the value you want to get square");
// function square() {
//   document.write(user + " Square is " + user * user);
// }
// square();

// 35-37 Q.7

// var user = prompt("Enter the value you want to get factorial");
// var fact = 1;
// function factorial() {
//   for (var i = user; i >= 1; i--) {
//     fact = fact * i;
//     document.write("<br>" + fact + "!");
//   }
// }
// factorial();

// 35-37 Q.8

// var start = parseInt(prompt("Enter start value"));
// var end = parseInt(prompt("Enter end value"));
// for (var i = start; i <= end; i++) {
//     document.write("<br>" + i);
// }

// 35-37 Q.10

// var width = +prompt("Enter width to calculates the area of a rectangle (inches)")
// var height = +prompt("Enter height to calculates the area of a rectangle (inches)")

// function calculate(vOfWidth, vofHeight){
//     document.write("Area of a rectangle is" + " " + (vOfWidth * vofHeight) + " inches")
// }
// calculate(width, height);

// 35-37 Q.11

// var uString = prompt("Enter a word to check Palindrome");
// console.log(uString);

// var sArr = uString.split("");
// console.log(sArr);

// var reversArr = sArr.reverse();
// console.log(reversArr);

// var stringRevers = reversArr.join("");
// console.log(stringRevers);

// if (uString === stringRevers){
//     document.write(uString + " is Palindrome.")
// }
// else{
//     document.write(uString + " is not Palindrome.")
// }

// 35-37 Q.12

// var user = prompt("Enter a string")

// function strCap(peragraph) {
//     var str = peragraph.toLocaleLowerCase().split(" ");
//     for (var i = 0; i < str.length; i++) {
//         str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);
//     }
//     return str.join(" ");
// }
// document.write(strCap(user));

// owais bhai task

// reverse counting....
// var num = +prompt("enter a number")
// for (var i = num; i >= 1; i--) {
//     console.log(i)
// }

//replace word in peragraph..
// var uName = "my name is owais"
// var a = uName.replace("owais","faizan");
// document.write(a)

// replace a to globly...
// var uName = "my name is owais"
// var a = uName.replace(/a/g,"b")
// document.write(a)

// time + 10 days....
// var date = new Date()
// console.log(date);
// date.setDate(date.getDate() + 10)
// console.log(date);

// 35-37 Q.13

// var user = prompt("enter string");

// document.write(user);

// function longestWord(str) {
//     var words = str.split(" ");
//     // console.log(words);
//     var maxLength = 0;
//     for (var i = 0; i < words.length; i++) {
//         if (words[i].length > maxLength) {
//             maxLength = words[i].length
//         }
//     }
//     return maxLength;
// }
// var fun = longestWord(user)
// document.write("<br>",fun);
