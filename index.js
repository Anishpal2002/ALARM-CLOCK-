let start = document.getElementById("start");
let reset = document.getElementById("reset");

let h = document.getElementById("hour");
let m = document.getElementById("minute");
let s = document.getElementById("second");

var startTimer = null;

start.addEventListener('click',function(){
        function startInterval() {
            startTimer = setInterval(function() {
                       timer();               
            }, 1000);
        }
        startInterval();
})

reset.addEventListener('click',function () {

     h.value = 0;
        m.value = 0;
        s.value = 0;
    
        stopInterval();
})

function timer(){

    if ( h.value == 0 && m.value == 0 && s.value == 0) {
        h.value = 0;
        m.value = 0;
        s.value = 0;
    }
    else if( s.value != 0 ){
               s.value--;
    }
    else if( m.value != 0 && s.value == 0){
         s.value = 60;
         m.value--;
    }
    else if( h.value != 0 && m.value == 0 ){
        
          m.value = 60;
          h.value--;
    }
       return;


}

function stopInterval(params) {
    clearInterval(startTimer);
}