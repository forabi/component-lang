var choose = function(requested, supported) {
    for (var i = 0, len = requested.length; i < len; i++) {
        var c = requested[i];
        if (supported.indexOf(c) > -1) {
            return c;
        }
    }
}

module.exports = function(supported, fallback) {
    if ('string' == typeof supported) {
        supported = [supported];
    }
    if (!supported.length) {
        throw new Error('A list of supported languages is required');
    }
    var preferred = navigator.languages || [ navigator.language ];

    return choose(preferred, supported) || fallback;
}