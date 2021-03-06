/**
 * Exports: log
 */

var DEBUG = Infinity;
var _slice = Array.prototype.slice;

var $log = $('#log');

function makeTag(text) {
    var $tag = $('<span/>').attr({'class': 'message'}).text(text);
    for (var i = 1; i < arguments.length; i++) {
        $tag.addClass(arguments[i]);
    }
    return $tag;
}

function lograw(message) {
    var text = vsprintf(message, _slice.call(arguments, 1));
    var $tag = $('<span/>').attr({'class': 'message'}).html(text);
    $log.prepend($tag);
    return $tag;
}

function log(message) {
    var text = vsprintf(message, _slice.call(arguments, 1));
    $log.prepend(makeTag(capitalize(text)));
}

function unimportant(message) {
    var text = vsprintf(message, _slice.call(arguments, 1));
    $log.prepend(makeTag(capitalize(text), 'unimportant'));
}

function important(message) {
    var text = vsprintf(message, _slice.call(arguments, 1));
    $log.prepend(makeTag(capitalize(text), 'important'));
}

function corrupt() {
    var junk = [];
    for (var i = 0; i < R.random(6, 12); i++) {
        junk.push(makeJunk(R.random(2, 8)));
    }
    $log.prepend(makeTag(junk.join(' '), 'corrupt'));
    for (var key in display) {
        if (key[0] === '$') {
            display[key].corrupt();
        }
    }
}

function debug(level, message) {
    if (level <= DEBUG) {
        var text = vsprintf(message, _slice.call(arguments, 2));
        $log.prepend(makeTag(text, 'debug'));
    }
}
