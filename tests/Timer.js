var Timer = require('../Timer'),
    timer = new Timer();

setTimeout(() => {
    timer.start();
    console.log('start', timer.getTime());
    setTimeout(() => {
        timer.stop();
        console.log('stop', timer.getTime());
        setTimeout(() => {
            timer.start();
            console.log('start', timer.getTime());
            setTimeout(() => {
                timer.reset();
                console.log('reset', timer.getTime());
                setTimeout(() => {
                    timer.start();
                    console.log('start', timer.getTime());
                    setTimeout(() => {
                        timer.stop();
                        console.log('stop', timer.getTime());
                    }, 15000);
                }, 500);
            }, 5000);
        }, 500);
    }, 5000);
}, 1000);
