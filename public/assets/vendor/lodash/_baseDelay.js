var FUNC_ERROR_TEXT="Expected a function";function baseDelay(e,o,t){if("function"!=typeof e)throw new TypeError(FUNC_ERROR_TEXT);return setTimeout(function(){e.apply(void 0,t)},o)}module.exports=baseDelay;