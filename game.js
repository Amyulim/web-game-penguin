var fish1 = document.getElementById("good-fish1"),
    fish2 = document.getElementById("good-fish2"),
    fish3 = document.getElementById("good-fish3"),
    fish4 = document.getElementById("good-fish4"),
    fish5 = document.getElementById("good-fish5"),
    myPenguin = document.getElementById("ch"),
    progress = document.getElementById("progress"),
    wrapper = document.getElementById("game-background");
    
    
var x = 20,
    y = 0,
    num = 0,
    num2 = 0;
var number = 1 + Math.floor(Math.random() * 100);
var fishes =["good-fish1","good-fish2","good-fish3","good-fish4","good-fish5"];
var ateFishes = [];

var ChosenCh = [];

ChosenCh = localStorage.getItem("ChosenCh");

//console.log(ChosenCh);

setTimeout(function(){
    document.getElementById("filter").remove();
    document.getElementById("instruction").remove();
},3000)

if(ChosenCh=="ch2"){
    document.getElementById("myPenguin").src = "SVG/ch2-front.svg";
}

function goodFishRemove(fishnum,fishName){
    fishnum.remove();

    if(ateFishes.indexOf(fishName) == -1){
        ateFishes.push(fishName);
        num+= 10;
        num2+=100;
        myPenguin.style.width = 100 + num + "px";
        
        var newNumDiv = document.createElement("div");
        newNumDiv.className="progressNum";
        newNumDiv.innerHTML="+10";
        myPenguin.appendChild(newNumDiv);
        
        progress.style.width = num2 + "px"

        setTimeout(function() { newNumDiv.remove()},1500);
       
    
}
    if(num2 == 500){
        setTimeout(function(){
            
            var filter = document.createElement("div");
            filter.id="filter"
            wrapper.appendChild(filter);

            var resultDiv = document.createElement("div");
            resultDiv.id="instruction";
            resultDiv.innerHTML="<h1><span id='over'>GREAT JOB!</span></br><img id='crown-getting' src='SVG/crown.svg'></h1><br/><p>Now your Penguin is big enough to go to the next level</p><br><a href='game2.html'><button class='button' id='next'>Next</button></a>";
            wrapper.appendChild(resultDiv);

        },1000)
        
        
}
}


$(document).ready(function() {
  
        
    
    $(document).keydown(function(e) {
        if(num2 <500){
        if(!$('#ch').is(':animated')){
            switch(e.keyCode)
            {
                case 37:
                    $('#ch').css('left', '-=30px');
                    if(ChosenCh == "ch2"){
                       $('#myPenguin').attr("src", "SVG/ch2-left.svg"); 
                    } else{
                        $('#myPenguin').attr("src", "SVG/ch1-left.svg");
                    }
                    
                    break;
                case 38:
                    $('#ch').css('top', '-=30px');
                   
                    if(ChosenCh == "ch2"){
                        $('#myPenguin').attr("src", "SVG/ch2-back.svg"); 
                    } else{
                        $('#myPenguin').attr("src", "SVG/ch1-back.svg");
                    }
            
                    break;
                case 39:
                    $('#ch').css('left', '+=30px');
                     
                    if(ChosenCh == "ch2"){
                        $('#myPenguin').attr("src", "SVG/ch2-right.svg"); 
                    } else{
                        $('#myPenguin').attr("src", "SVG/ch1-right.svg");
                    }
                    break;
                case 40:
                    $('#ch').css('top', '+=30px');
            
                    if(ChosenCh == "ch2"){
                        $('#myPenguin').attr("src", "SVG/ch2-front.svg"); 
                    } else{
                        $('#myPenguin').attr("src", "SVG/ch1-front.svg");
                    }
            
                    break;
                    
            
            }
            
            var ch1 = $("#ch").position();
//            var fish1P = $("#good-fish1").position();
//            console.log("My Character- Top:"+ch1.top,"LEft:"+ch1.left);
//            console.log(fish1.style.position);
            
            console.log(num);
            console.log(ateFishes)
            
            if( parseInt(ch1.top)>= 230 && parseInt(ch1.top) <=300 && -10 <= parseInt(ch1.left) && parseInt(ch1.left) <=50 ){
                
                goodFishRemove(fish1,"good-fish1")
                        
            } else if(parseInt(ch1.top)>= 270  && parseInt(ch1.top) <=330 && 690 <= parseInt(ch1.left) && parseInt(ch1.left) <=750 ){
               
                goodFishRemove(fish2,"good-fish2")
                
            } else if(parseInt(ch1.top)>= 7 && parseInt(ch1.top) <= 40 && 440 <= parseInt(ch1.left) && parseInt(ch1.left) <= 490 ){

                goodFishRemove(fish3,"good-fish3")
                
            } else if(parseInt(ch1.top)>= 140  && parseInt(ch1.top) <= 180 && 210 <= parseInt(ch1.left) && parseInt(ch1.left) <= 260 ){
                
                goodFishRemove(fish4,"good-fish4")
                
            } else if(parseInt(ch1.top)>= 420  && parseInt(ch1.top) <= 480 && 420 <= parseInt(ch1.left) && parseInt(ch1.left) <= 470 ){

                goodFishRemove(fish5,"good-fish5")

            }
                
                
    };
        }
    });
 
});


    
