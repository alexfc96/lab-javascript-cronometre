
class Timer {
    constructor(myTimer){
        this.myTimer = 0
    }
    start(){
        setInterval(function(){
            this.myTimer++;
            console.log(this.myTimer)
        }.bind(this), 1000)
        return this.myTimer
        
    }
}



    
const timer1 = new Timer()
console.log(timer1)