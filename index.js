var ch1clicked = 0;
var myCH = [];
var Cha1 = document.getElementById("Cha1"),
    Cha2 = document.getElementById("Cha2");
function border(x,y) {
    x.style.border= "10px solid #FFF";
    x.style.filter="none"
    y.style.border = "10px solid #D3E2E2";
    y.style.filter="grayscale(100%)"
}
Cha1.addEventListener("click", function () {
    ch1clicked= 1;
    border(Cha1,Cha2);
});
Cha2.addEventListener("click", function() {
    ch1clicked = 2;
    border(Cha2,Cha1);
});
document.getElementById("start").addEventListener("click", function() {
    console.log(ch1clicked)
    console.log(myCH);
    if(ch1clicked ==1){
       myCH.push("ch1");
        
    }else if(ch1clicked ==2){
       myCH.push("ch2");
        
    }
    localStorage.setItem("ChosenCh",myCH);
})