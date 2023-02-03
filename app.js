//console.log("hello world");
//alert("k cha bhai ??");
//let response = prompt("what is your name?");
//console.log(response);
//alert("hello " + response);
//let output = document.querySelector("#output");
//console.log(output);
//output.innerText = response;

let yourName = document.querySelector("#yourName");
let theirName = document.querySelector("#theirName");
let output = document.querySelector("#output");
let singlePeople = ['rupesh', 'shyam', 'hari']
function calculate() {
    let name1 = yourName.value;
    let name2 = theirName.value;

    //console.log("Button clicked");
    //console.log(name1, name2);
    if (name1.length == 0 || name2.length == 0) {
        output.innerText = "please enter the name";
    }
    else {
        if (singlePeople.includes(name1.toLowerCase())) {
            output.innerText = "Single forever";
        }
        if ((name1.toLowerCase() == "prajeena" || name2.toLowerCase() == "prajeena") && (name1.toLowerCase() == "aayush" || name2.toLowerCase() == "aayush")) {
            output.innerText = "katti ramrooooo "
        }
        else {
            let lovePercent = parseInt(Math.random() * 100);
            output.innerText = name1 + " " + name2 + " are " + lovePercent + "% in love";
            yourName.value = " "
            theirName.value = " "
        }
    }
}