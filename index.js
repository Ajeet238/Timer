setInterval(displayClock, 500);
function displayClock() {
    let d = new Date();
    // let h = d.getHours();
    // let m = d.getMinutes();
    // let s = d.getSeconds();
    let t = d.toLocaleTimeString();
    // document.getElementById("time").innerHTML = `${h}:${m}:${s}`;
    document.getElementById("displayTime").innerHTML = `Time is - ${t}`;
}

setInterval(displaydate, 500);
function displaydate() {
    let t = new Date();
    // let d = t.getDate();
    // let m = t.getMonth() + 1;
    // let y = t.getFullYear();
    // document.getElementById("date").innerHTML = `${d}:${m}:${y}`;
    let d = t.toLocaleDateString();
    document.getElementById("displayDate").innerHTML = `Date is - ${d}`;
}
// timer starting
let starts;
let initial;
//let int =5
 let flag = 1;
function start() {
    if(flag==1){
        starts =  setInterval(timer,1000);
    }
    flag =0;
  
        
}

let sec = 00;
let min = 00;
let hr = 00;
function timer() {

    sec++;
    if (sec == 60) {
        sec = 00;
        min++;
    }
    if (min == 60) {
        min = 00;
        hr++;
    }
    document.getElementById("showTimer").innerHTML = `${hr}:${min}:${sec}`;
}
// timer pause
function stop() {
    
        clearInterval(starts);
        flag=1;
    
   
}

// timer reset
function reset() {
    hr = 00;
    min = 00;
    sec = 00;
    
    clearInterval(starts);
    document.getElementById("showTimer").innerHTML = `${hr}:${min}:${sec}`;
    flag=1;
}
