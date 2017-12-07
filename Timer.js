'use strict';

function Timer() {
    var TIMER_STATES = ['NONE', 'START', 'STOP', 'RESET'],
        state = TIMER_STATES[0],
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
        if (state !== TIMER_STATES[3]) {
            state = TIMER_STATES[3];
            dt = 0;
        }
    };

    function start() {
        if (state !== TIMER_STATES[1]) {
            state = TIMER_STATES[1];
            now = t();
            if (!intervalId) {
                start = now - dt;
                intervalId = setInterval(function() {
                    if (state === TIMER_STATES[1]) { // state === 'START'
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
        if (state === TIMER_STATES[1]) {
            state = TIMER_STATES[2];
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
