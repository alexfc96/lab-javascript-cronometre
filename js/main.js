
class Timer {
    constructor(myTimer, contTimer){
        this.myTimer = 0
        this.contTimer = contTimer;
    }


    start(){
        this.contTimer = setInterval(function(){
            this.myTimer++;
            console.log(this.myTimer)
            //return this.myTimer
        }.bind(this), 1000);
        //return contTimer
        }

    stop(){
        clearInterval(this.contTimer);

    }
    reset(){
        this.myTimer = 0
    }
    /*
    showTime(){
        //const hms = [[][][]]
        //this.constTimer;
        const minutes = 0
        if(this.myTimer === 60){
            minutes = minutes++
            console.log("Mins:{$minutes} : Seconds{$myTimer}")
        }

    }
    */
}

    
const timer1 = new Timer()
console.log(timer1)