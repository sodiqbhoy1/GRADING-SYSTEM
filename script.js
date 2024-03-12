
var A = new Audio("audio/A.mp3") 
var B = new Audio("audio/B.mp3") 
var C = new Audio("audio/C.mp3") 
var D = new Audio("audio/D.mp3") 
var E = new Audio("audio/E.mp3") 
var F = new Audio("audio/F.mp3") 
function checkScore(){
    
    if(document.getElementById("score").value >= 70 && document.getElementById("score").value <=100){
        
        result.innerHTML ="Excellent"
        A.play();

    }
    else if(score.value >=60 && score.value <=69){
        
        result.innerHTML ="B"
        B.play();
    }

    else if (score.value >=50 && score.value <=59){
        
        result.innerHTML ="C"
        C.play();
        
    }

    else if (score.value >=45 && score.value <=49){
        
        result.innerHTML ="D"
        D.play();
        
    }

    else if (score.value >=40 && score.value <=44){
    
        result.innerHTML ="E"
        E.play();
    
            }

    else if(score.value == ""){
        alert("Inputfield cannot be empty")
    }

    else if(score.value >=0 && score.value <=39){
        
        
        result.innerHTML ="F"
        F.play();

    }

    else{
    alert("You've entered a wrong input, please check again!!!")
        
    }
}