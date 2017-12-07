'use strict';

function Timer() {
    const TIMER_STATES = {
        NONE: 0,
        START: 1,
        STOP: 2,
        RESET: 3
    };
    var state = TIMER_STATES.NONE,
        dt = 0,
        start,
        now,
        intervalId;

    function t() {
        return new Date().getTime();
    };

    function getTime() {
        return now - start;
    };

    function reset() {
        if (state !== TIMER_STATES.RESET) {
            state = TIMER_STATES.RESET;
            dt = 0;
        }
    };

    function start() {
        if (state !== TIMER_STATES.START) {
            state = TIMER_STATES.START;
            now = t();
            if (!intervalId) {
                start = now - dt;
                intervalId = setInterval(function() {
                    if (state === TIMER_STATES.START) { // state === 'START'
                        now = t();
                    } else {
                        clearInterval(intervalId);
                        intervalId = undefined;
                    }
                }, 0);
            }
        }
    };

    function stop() {
        if (state === TIMER_STATES.START) {
            state = TIMER_STATES.STOP;
            dt = now - start;
        }
    };

    return {
        start: start,
        stop: stop,
        reset: reset,
        getTime: getTime
    };
};

module.exports = Timer;
