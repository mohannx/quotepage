const quoteText = document.querySelector(".quotes"),
quoteBtr = document.querySelector("button"),
soundBtr = document.querySelector(".sound"),
copyBtr = document.querySelector(".copy"),
instagramBtr = document.querySelector(".instagram");
//Constant values
//random quote function
function randomQuotes(){
    quoteBtr.innerText= "Loading Quotes..."
    // fetching random quote from API and parsing it
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        console.log(result);
        quoteText.innerText = result.content;
        quoteBtr.innerText= "New Quotes"
    });
}
soundBtr.addEventListener("click", ()=>{
    //the speechsynthesisutterance is a web speech api that represents a speech request
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText}`);
    speechSynthesis.speak(utterance);
});
copyBtr.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText);
});

quoteBtr.addEventListener("click",randomQuotes);
