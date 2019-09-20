

function generateMadlib(){

    const nounspan = document.getElementById('noun1Value');
    const verbspan = document.getElementById('verb1Value');
    const adjspan = document.getElementById('adj1Value');
    const noun2span = document.getElementById('noun2Value');
 
const noun1 = document.getElementById('noun1');
const verb1 = document.getElementById('verb1');
const adj1 = document.getElementById('adj1');
const noun2 = document.getElementById('noun2');
    
const noun1Value = noun1.value;
//console.log(noun1Value);
nounspan.textContent = noun1.value;

const verb1Value = verb1.value;
verbspan.textContent = verb1Value;

const adjValue = adj1.value;
adjspan.textContent = adj1.value;

const noun2Value = noun2.value;
noun2span.textContent = noun2.value;
}