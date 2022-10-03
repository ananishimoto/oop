// Stopwatch exercise

function Stopwatch() {
    
    this.duration = 0;
    
    this.start = function() {
        const startTime = new Date().getTime();
        console.log('start', startTime);
    }

    this.stop = function() {
        const finishTime = new Date().getTime();
        console.log('stop', finishTime)
    }

    this.reset = function() {
        this.duration = 0;
    }
}