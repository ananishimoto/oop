// Stopwatch exercise

// Made with duration as an attribute

function Stopwatch() {

    const startTimer = {
        state: false,
        value: 0,
    }

    const stopTimer = {
        state: false,
        value: 0,
    }

    this.duration = '0 seconds';
    
    this.start = function() {

        if(startTimer.state) {
            console.error('The timer is already running')
            return;
        } 

        if(stopTimer.state) {
            stopTimer.state = false;
        }

        startTimer.state = true;
        startTimer.value = new Date().getTime()/1000;
    }

    this.stop = function() {
        
        if(stopTimer.state){
            console.error('You already stopped the timer')
            return
        }

        if(!startTimer.state){
            console.error('You need to start the timer before stopping it')
            return
        }

        if(startTimer.state) {
            startTimer.state = false;
        }

        stopTimer.state = true;
        stopTimer.value = new Date().getTime()/1000;
        this.duration = `${Math.round(stopTimer.value - startTimer.value)} seconds`;
    }

    this.reset = function() {
        this.duration = '0 seconds';
    }
}

// Made with duration a method

function Timerwatch() {

    const startTimer = {
        state: false,
        value: 0,
    }

    const stopTimer = {
        state: false,
        value: 0,
    }

    this.getDuration = function() {
        return `${Math.round(stopTimer.value - startTimer.value)} seconds`
    }
    
    this.start = function() {

        if(startTimer.state) {
            console.error('The timer is already running')
            return;
        } 

        if(stopTimer.state) {
            stopTimer.state = false;
        }

        startTimer.state = true;
        startTimer.value = new Date().getTime()/1000;
    }

    this.stop = function() {
        
        if(stopTimer.state){
            console.error('You already stopped the timer')
            return
        }

        if(!startTimer.state){
            console.error('You need to start the timer before stopping it')
            return
        }

        if(startTimer.state) {
            startTimer.state = false;
        }

        stopTimer.state = true;
        stopTimer.value = new Date().getTime()/1000;
    }

    this.reset = function() {
        startTimer.value = 0;
        stopTimer.value = 0;
        this.duration;
    }
}