console.clear()

class Timer {
    constructor(myTimer, contTimer, seconds, minutes, hours){
        this.myTimer = 0;  //total count about the numbers of seconds during the cronometre in start mode()
        this.contTimer = contTimer; //setInterval(function())
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
    }
    start(){
            this.contTimer = setInterval(function(){
            this.myTimer++;
            this.seconds++;
            this.showTime() //call the method for show the state
            //console.log(this.myTimer) total number of seconds even restarting the crono
            //return this.myTimer
        }.bind(this), 1000);
        //return contTimer
        }

    stop(){
        clearInterval(this.contTimer); 
        //clearInterval(this.start.contTimer); 
    }
  
    reset(){
        //this.myTimer = 0
        this.seconds = 0
        this.minutes = 0;
        this.hours = 0;
    }   
    showTime(){
        console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
        if(this.seconds % 59 === 0){  
            this.minutes++;          
            if(this.minutes % 59 === 0){
                this.minutes = 0
                this.hours++;
            }
            this.seconds = 0
            console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
        }

    }
}

    
const timer1 = new Timer()
//const timer2 = new Timer()
//console.log(timer1)