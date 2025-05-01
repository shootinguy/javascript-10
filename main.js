for (let i=1; i<=5; i++) {
    console.log(i);
}

for (let i=2; i<=10; i+=2) {
    console.log(i);
}

for (let i=5; i>=1; i--) {
    console.log(i);
}

for (let i=0; i<3; i++) {
    console.log("Kenneth");
}

const loop_fruits = ["apple", "banana", "cherry"];
for (let i=0; i<loop_fruits.length; i++) {
    console.log(loop_fruits[i]);
}

const nums = [2, 4, 6];
let total = 0;
for (let i=0; i<nums.length; i++) {
    total += nums[i];
}
console.log(total);

const original = [1, 2, 3];
const doubled = [];
for (let i=0; i<original.length; i++) {
    doubled.push(original[i] * 2);
}
console.log(doubled);

for (let i=10; i<=15; i++) {
    if (i === 13) {continue;}
    console.log(i);
}

for (let i=1; i<=10; i++) {
    if (i === 6) {break;}
    console.log(i);
}

for (let i=1; i<=10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


const fruits = ["apple", "banana", "guava"];
for (let i=0; i<fruits.length; i++) {
    const li = document.createElement("li");
    li.textContent = fruits[i];
    document.querySelector("#fruits").appendChild(li);
}

for (let i=1; i<=5; i++) {
    const button = document.createElement("button");
    button.textContent = "Button " + i;
    document.querySelector("#buttons").appendChild(button);
}

const paragraphs = document.querySelectorAll(".change_me");
for (let i=0; i<paragraphs.length; i++) {
    paragraphs[i].textContent = `New Text ${i + 1}`;
}

const color_boxes = document.querySelectorAll(".color_box");
const colors = ["red", "green", "blue"];
for (let i=0; i<color_boxes.length; i++) {
    color_boxes[i].style.backgroundColor = colors[i];
}

const languages = ["HTML", "CSS", "JavaScript"];
let html = "";
for (let i=0; i<languages.length; i++) {
    html += `<li>${languages[i]}</li>`;
}
document.querySelector("#languages").innerHTML = html;
