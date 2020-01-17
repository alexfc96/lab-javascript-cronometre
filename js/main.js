console.clear()

class Timer {
    constructor(myTimer, contTimer, seconds, minutes, hours){
        this.myTimer = 0;  
        this.contTimer = contTimer;
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
    }
    start(){
            this.contTimer = setInterval(function(){
            this.myTimer++;
            this.seconds++;
            this.showTime()
            //console.log(this.myTimer)
            //return this.myTimer
        }.bind(this), 1000);
        //return contTimer
        }

    stop(){
        clearInterval(this.contTimer); 
        //clearInterval(this.start.contTimer); 
    }
  
    reset(){
        this.myTimer = 0
    }   
    showTime(){
        console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
        if(this.seconds % 59 === 0){
            this.seconds = 0
            this.minutes++;
            console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
            if(this.minutes % 59 === 0){
                this.minutes = 0
                this.hours++;
            }
            
        }

    }
}

    
const timer1 = new Timer()
console.log(timer1)