
var quesOne = {
    question:'What is the most sustainable milk alternative?',
    answer: 'oat'
}

var optsOne = {
    a: 'coconut',
    b: 'almond',
    c: 'oat',
    d: 'soy'
}

function begin(){
    document.querySelector("body").innerHTML = quesOne.question;
    console.log(quesOne.question);
    console.log(optsOne);
}