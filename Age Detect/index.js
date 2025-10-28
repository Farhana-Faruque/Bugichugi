const mytext = document.getElementById("myText");
const mysubmit = document.getElementById("mySubmit");
const result = document.getElementById("result");

let age;

mysubmit.onclick = function(){
    age = mytext.value;
    age = Number(age);

    if(age >= 100){
        result.textContent = "You are TOO OLD to enter this site.";
    }
    else if(age == 0){
        result.textContent = "You can't enter. You were just born";
    }
    else if(age >= 18){
        result.textContent = "You are old enough to enter this site.";
    }
    else if(age < 0){
        result.textContent = "Your age can't be below 0.";
    }
    else{
        result.textContent = "You must be 18+ to enter this site.";
    }
}