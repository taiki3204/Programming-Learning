//STEP9
const hobbies = ["Game", "Bike", "Programming"];

console.log(hobbies[0]);
console.log(hobbies[1]);
console.log(hobbies[2]);

console.log(hobbies.length);

for (let i = 0; i < hobbies.length; i++) {
    console.log(hobbies[i]);
}

const foods = ["Sushi","Ramen","Curry","Yakiniku"];

for(let i=0;i<foods.length;i++){
    console.log("My favorite food is "+foods[i]+" !");
}


//STEP10
const users = [
    {
        name: "Taiki",
        age: 25
    },
    {
        name: "Taro",
        age: 30
    },
    {
        name: "Hanako",
        age: 22
    }
];
function introduce(user) {
    console.log("名前：" + user.name);
    console.log("年齢：" + user.age);
}

introduce(users[0]);
