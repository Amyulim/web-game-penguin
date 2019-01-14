
var wrapper = document.getElementById("game-background2"),
    instruction = document.getElementById("instruction"),
    fishArea = document.getElementById("fish-area"),
    clock = document.getElementById("clock");
var num = 0;
var ChosenCh = [];

var ChosenCh = localStorage.getItem("ChosenCh");
if(ChosenCh == "ch1"){
    document.getElementById("ch-back").src = "SVG/ch1-back-crown.svg";
} else{
    document.getElementById("ch-back").src = "SVG/ch2-back-crown.svg";
}
window.onload = function () {
    
    var timer = 15,
        display = document.querySelector('#time');
    setTimeout(function(){startTimer(timer, display);},2000)
    
};

setTimeout(function(){
    instruction.remove();
    filter.remove();
    make3GoodFishes()
    makeBadFishes()
    makeBadFishes()

    setTimeout(function(){
        makeFishes()},1000)
    setTimeout(function(){
        makeBadFishes(),makeFishes()},2000)
    setTimeout(function(){
        makeBadFishes(),make3GoodFishes()},3000)
    setTimeout(function(){
        makeBadFishes(),makeFishes()},4000)
    setTimeout(function(){
        makeFishes()},6000)
    setTimeout(function(){
        makeBadFishes(),make3GoodFishes()},8000)
    setTimeout(function(){
        makeFishes(),makeFishes()},10000)
    setTimeout(function(){
        makeBadFishes(),makeFishes()},12000)
    setTimeout(function(){
        make3GoodFishes()},13000)
    document.getElementById("clock-progress").style.height="0";   
    },3000)
function make3GoodFishes(){
    makeFishes()
    makeFishes()
    makeFishes()
}
function makeFishes(){
    var NewF = document.createElement("img");
    var mtop = Math.round(Math.random()*80+20)
    var mleft = Math.round(Math.random()*95);
    var mrotate = Math.round(Math.random()*30);
    NewF.src ="SVG/good-fish.svg";
    NewF.id="good-fishes"
    NewF.className = "fish";
    NewF.style.left = mleft + "%";
    NewF.style.top = mtop +"%";
    NewF.style.transform = "rotate" + "(" +mrotate+"deg)";
    fishArea.appendChild(NewF)
    
    if(mleft >30){
        NewF.style.transition = "top 3s";
    }else if(mleft>60){
        NewF.style.transition = "top 5s";
    }else if(mleft>80){
        NewF.style.transition = "top 6s";
    } else {
        NewF.style.transition = "top 4s";
    }
    setTimeout(function(){wrapper.removeChild(NewF);},60000);
    animateDiv(NewF)
    
    NewF.addEventListener("click", function(){
        NewF.remove();
        num +=10;
        document.getElementById("score").innerHTML = " Score: "+ num;
        numbers("+10");
        
        
    })

};
function numbers(type){
//    document.getElementById("number").innerHTML = type;
//    document.getElementById("number").style.animation = "floating 1s infinite"
    var newNumDiv = document.createElement("div");
        newNumDiv.className="number";
        newNumDiv.innerHTML=type;
        wrapper.appendChild(newNumDiv);
        setTimeout(function() { newNumDiv.remove()},1000);
}
function makeBadFishes(){
    var NewF = document.createElement("img");
    var mtop = Math.round(Math.random()*80+25)
    var mleft = Math.round(Math.random()*95);
    var mrotate = Math.round(Math.random()*30);
    NewF.src ="SVG/bad-fish.svg";
    NewF.id="good-fishes"
    NewF.className = "fish";
    NewF.style.left = mleft + "%";
    NewF.style.top = mtop +"%";
    NewF.style.transform = "rotate" + "(" +mrotate+"deg)";
    fishArea.appendChild(NewF)
    
    if(mleft >30){
        NewF.style.transition = "top 4s";
    }else if(mleft>60){
        NewF.style.transition = "top 3s";
    }else if(mleft>80){
        NewF.style.transition = "top 2s";
    } else {
        NewF.style.transition = "top 4s";
    }
    
    setTimeout(function(){wrapper.removeChild(NewF);},50000);
    animateDiv(NewF)
    
    NewF.addEventListener("click", function(){
        NewF.remove();
        num -=10;
        document.getElementById("score").innerHTML = " Score: "+num;
        numbers("-10");
    })

    
};

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(".wrapper").height() - 10;
    var w = $(".wrapper").width() - 10;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}
function animateDiv(myclass){
    var newq = makeNewPosition();
    $(myclass).animate({ top: newq[1], left: newq[1] }, 4000,   function(){
      animateDiv(myclass);        
    });
    
};

function startTimer(duration, display) {
    var timer = duration, seconds;
    
    setInterval(function () {
        
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent =  seconds;

        if (--timer == -1) {
            duration == 0;
            document.getElementById("time").remove();
            
            var filter = document.createElement("div");
            filter.id="filter"
            wrapper.appendChild(filter);
            
            var resultDiv = document.createElement("div");
            resultDiv.id="instruction";
            resultDiv.innerHTML="<h1><span id='over'>GAME OVER!</span> <br/>Your score: <br/>" +num+"</h1>";
            wrapper.appendChild(resultDiv);
            fishArea.remove();
            clock.remove();
            
            
        }
        
    
    }, 1000);
    
}


