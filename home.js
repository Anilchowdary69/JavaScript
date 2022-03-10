console.log('hii there')
//alert('hey you')

//writing a variable
var a = 10
console.log(a)

var a ='anil kumbley'
console.log(a)

document.getElementById('Text').innerHTML ="hello everyone"

//var age=prompt("What is your age?")
//document.getElementById('anilText').innerHTML =age


//numbers
var a =69;
console.log(a *3);
console.log(a / 2);
console.log(a %2);
console.log(a - 86);

a++;
console.log(a)
a--;
console.log(a);

a += 3
console.log(a);
 a -= 6
 console.log(a);

/* functions
//create a function
//calling a function

*/
function myfunction(yourName){
    var result = 'Hello '+ yourName;
    console.log(result);
}
//var Name =  prompt("What is your name");
//myfunction(Name);

function sumNumbers(a,b){
    var add = a  +" "+ b;
    console.log(add);
}
sumNumbers('hey' ,'pora');



/* var num = 1;
while(num < 100){
    console.log(num);
    num += 3
} */
for (let num1 =0;num1<100;num1++){
    console.log(num1);
}
//data types
let yourAge = 20 //number
let yourName = 'anil' // string
let name = { first:'anil',last:'poka'};//object
let fruits = ['apple','banana','orange'] // array
console.log(fruits[1].toUpperCase())
console.log(fruits[0].toLowerCase())



// string methods
let name1 = 'chowdary'
console.log(name1)
let names ='chowdary,poka,anil'
console.log(names);
console.log(name1.length);
console.log(name1.indexOf('d'));
console.log(name1.slice(1,));
console.log(name1.replace('dary','poka'));
console.log(name1[3]);
console.log(names.split(','));
console.log(names);
document.getElementById('1122').innerHTML="Hello Anil Chowdary.This is the time";
  
//array
//array also known as a list in python
let fruits11 = ['orange','pineapple','apple','banana'];
fruits11 = new Array('orange','pineapple','apple','banana');
//alert(fruits11[1])

console.log(fruits11[2])
//alert("get your fucking work done")

for (let i=0;i<fruits11.length;i++){
    console.log(fruits11[i])
        
}
fruits11[1] = 'silk';
console.log(fruits11);

//array methods
console.log("toString",fruits11.toString());
console.log(fruits11.join('-'));
console.log(fruits11.pop(),fruits11);
console.log(fruits11.push('grape'),fruits11);
console.log(fruits11);
console.log(fruits11[4]="anil");
console.log(fruits11)

/* if you want to DELETE an element from the beginning you need to use shift() function.
* if you want to ADD the element from the beginning ,you need to use the unshift()function.
*if you wnat ADD and DELETE the elements from the ending ,you cna use the pop,push method as well
*/ 
fruits11.shift();
console.log(fruits11);
fruits11.unshift("venkat");
console.log(fruits11);

let vegetables = ['tomato','broccoli','potato'];
let allGroceries = fruits11.concat(vegetables);
console.log(allGroceries)
console.log(allGroceries.slice(1,4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());//sorting the aplabets

/* to sort the elements you need to write a function(a,b) with two parameters
and you need to return the value 
* if you return a value with a-b it will be a ascending order
* if you return a value with b-a it will be a descending order
*/


let someNumbers = [1,2,44,5,6,7,69];
console.log(someNumbers.sort(function(a,b) {return a-b}));//sorting in ascending order

console.log(someNumbers.sort(function(a,b){return b-a}));//sorting in descending order

/*
let emptyArray = []//can also write like this */
let emptyArray = new Array();
for (let num =0;num<10;num++){
    emptyArray.push(num);
}
console.log(emptyArray);


 
//objects
//objects also known as dictionary in python
let someObjects = {
    first:"anil",
    last:"venkat",
    age:20;
    studentInfo:function(){
        return this.first + '\n'+ this.last;34
    
    }
}
console.log(someObjects.last)

console.log(someObjects.first)
console.log(someObjects.studentInfo());


//conditional ,control flow statements

var age = 45

if ((age >= 18) && (age<=35)){
    note = "target reached";
    console.log(note);

} else {
    note = " target failed";
    console.log(note);
}

switch(6){
    case 0:
        text = "weekend";
        break;
    case 1:
        text = "weekend";
        break;

    case 2:
        text = "weekend"
        break;
    default:
        text ="weekday";
}
console.log(text);

 






