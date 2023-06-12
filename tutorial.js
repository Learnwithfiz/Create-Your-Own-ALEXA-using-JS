var recognition = new webkitSpeechRecognition();

recognition.onresult = function(event){
    var text =  event.results[0][0].transcript;
   var output = document.getElementById("output").innerHTML=text;
   
    read(text);

}

function read(text){
   var speech = new SpeechSynthesisUtterance();
   speech.text = text;
     if(text=='hello'){
        speech.text="bye";
     }
     else if(text=="what is your name"){
         speech.text="my name is khan, i am your assistants";
     }
     else if(text=="what is your favourite player name"){
        speech.text="my favourite player name shakib al hasan, he is allrounder";
    }
else if(text=="Google"){
        speech.text=window.open("https://www.w3schools.com");
    }
else if(text=="close"){
        speech.text=window.close("https://www.w3schools.com");
    }
     else{
        speech.text="please try again";
     }

     document.getElementById("res").innerHTML=speech.text;
   window.speechSynthesis.speak(speech);
}