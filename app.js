
function generateMadlib(){
    //noun 1
    const noun1Input = document.getElementById('noun1-input');
    const noun1 = noun1Input.value;
    
    const noun1span = document.getElementById('noun1');
    noun1span.textContent = noun1;

    //console.log('noun1');

    //verb
    const verbInput = document.getElementById('verb-input');
    const verb = verbInput.value;
    
    const verbspan = document.getElementById('verb');
    verbspan.textContent = verb;



    //adjective
    const adjInput = document.getElementById('adj-input');
    const adj = adjInput.value;
    
    const adjspan = document.getElementById('adj');
    adjspan.textContent = adj;



    //noun 2
    const noun2Input = document.getElementById('noun2-input');
    const noun2 = noun2Input.value;
    
    const noun2span = document.getElementById('noun2');
    noun2span.textContent = noun2;

    //from JBJ's
    const showStory = document.getElementById('story');
    showStory.classList.remove('hidden');
}

