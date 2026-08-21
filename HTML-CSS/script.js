const name = "Taiki";
const age = 25;
const favoriteFood = "Sushi";
const score = 82;
const isStudent = false;
const day = "Sunday";
const isLoggedIn = false;
const price = 1200;
const quantity = 3;


//STEP6
if (score >=80) {
    console.log("合格");
} else {
    console.log("不合格");
}



if (age >= 20 && age < 30) {
    console.log("20代です");
}


if (day === "Saturday" || day === "Sunday") {
    console.log("休日です");
}


if (!isLoggedIn) {
    console.log("ログインしてください");
}

if(score>=60 && score<90){
    console.log("Clear")
}

//STEP7
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 1; i <= 10; i++) {

    if (i % 2 === 0) {
        console.log(i);
    }

}
for(let i=1;i<=20;i++){
    if(i%3===0){
        console.log(i);
    }
}

//STEP8
function sayHello() {
    console.log("Hello!");
}
sayHello();


function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Taiki");
greet("Taro");


function add(a,b) {
    return a+b;
}
const result = add(10, 20);
console.log(result);



