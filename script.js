const questions=[
    {
        'que':'which of the following is a markup language?',
        'a':'HTML',
        'b':'CSS',
        'c':'JAVASCRIPT',
        'd':'PHP',
        'correct':'a'
    },
    {
        'que':'Which of the following element is responsible for making the text bold in HTML?',
        'a':'<pre>',
        'b':'<a>',
        'c':'<b>',
        'd':'<br>',
        'correct':'c'
    },
    {
        'que':'How to create an unordered list (a list with the list items in bullets) in HTML?',
        'a':'<ul>',
        'b':'<ol>',
        'c':'<li>',
        'd':'<i>',
        'correct':'a'
    },
]
let index=0;
let total=questions.length;
let right=0,
wrong=0;
const queBox=document.getElementById("queBox")
const optionInputs=document.querySelectorAll('.option')
const loadQuestion=()=>{
    if(index===total){
        return endQuiz()
    }
    reset();
    const data=questions[index]
    queBox.innerText=`${index+1} ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}
const submitQuiz=()=>{
    const data=questions[index];
    const ans=getAnswer()
    if(ans===data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer=()=>{
    let answer;
 optionInputs.forEach(
    (input)=>{
        if(input.checked){
            answer= input.value;
        }
    }
 )
 return answer;
}
const reset=()=>{
    optionInputs.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}
const endQuiz=()=>{
    document.getElementById("box").innerHTML=`
    <h3>Thank you for playing the quiz</h3>
    <h2>${right}/${total}are correct</h2>
    `
}
//inital call
loadQuestion();