var async = require('async');

async.waterfall(
    [
        function(callback) {
            setTimeout(() => {
                callback(null, 'Yes', 'it')
                }, 2);
         
        },
        function(arg1, arg2, callback) {
            var caption = arg1 +' and '+ arg2;
            callback(null, caption);
        },
        function(caption, callback) {
            caption += ' works!';
            callback(null, caption);
        }
    ],
    function (err, caption) {
        console.log(caption);
        }
);