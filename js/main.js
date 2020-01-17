
class Timer {
    constructor(myTimer){
        this.myTimer = 0
    }
    start(){
        const startCount = setInterval(function(){
            this.myTimer++;
            console.log(this.myTimer)
        }.bind(this), 1000)
        //return startCount
    }

    stop(){
        clearInterval(this.startCount); //no entiendo porque no funciona!!!!!!!!
    }
    reset(){
        this.myTimer = 0
    }
}



    
const timer1 = new Timer()
console.log(timer1)