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

function log(message) {
    var text = vsprintf(message, _slice.call(arguments, 1));
    $log.prepend(makeTag(capitalize(text)));
}

function debug(level, message) {
    if (level <= DEBUG) {
        var text = vsprintf(message, _slice.call(arguments, 2));
        $log.prepend(makeTag(text, 'debug'));
    }
}
