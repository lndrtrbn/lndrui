'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/**
 * Just a simple Button component
 */
function Button(_a) {
    var children = _a.children, _b = _a.style, style = _b === void 0 ? "default" : _b, onClick = _a.onClick;
    var className = "lndrui lndrui__btn";
    if (style !== "default")
        className += " lndrui__btn--" + style;
    return (jsxRuntime.jsx("button", __assign({ className: className, onClick: onClick }, { children: children }), void 0));
}

/**
 * Just a simple text input component
 */
function InputText(_a) {
    var placeholder = _a.placeholder, value = _a.value, _b = _a.style, style = _b === void 0 ? "default" : _b, _c = _a.inError, inError = _c === void 0 ? false : _c, onChange = _a.onChange;
    var className = "lndrui lndrui__input";
    if (style !== "default")
        className += " lndrui__input--" + style;
    if (inError)
        className += " lndrui__input--error";
    function handleChanges(event) {
        onChange(event.target.value);
    }
    return (jsxRuntime.jsx("input", { className: className, type: "text", placeholder: placeholder, value: value, onChange: handleChanges }, void 0));
}

/**
 * Just a simple Checkbox component
 */
function Checkbox(_a) {
    var checked = _a.checked, children = _a.children, onChange = _a.onChange;
    var className = "lndrui lndrui__checkbox";
    if (checked)
        className += " checked";
    function check() {
        onChange(!checked);
    }
    return (jsxRuntime.jsxs("div", __assign({ className: className, onClick: check }, { children: [jsxRuntime.jsx("span", { className: "lndrui__checkbox--checkmark" }, void 0),
            jsxRuntime.jsx("label", __assign({ className: "lndrui__checkbox--label" }, { children: children }), void 0),
            jsxRuntime.jsx("input", { type: "checkbox", checked: checked }, void 0)] }), void 0));
}

/**
 * Just a simple Textarea component
 */
function Textarea(_a) {
    var value = _a.value, _b = _a.style, style = _b === void 0 ? "default" : _b, _c = _a.inError, inError = _c === void 0 ? false : _c, onChange = _a.onChange;
    var className = "lndrui lndrui__textarea";
    if (style !== "default")
        className += " lndrui__textarea--" + style;
    if (inError)
        className += " lndrui__textarea--error";
    function handleChanges(event) {
        onChange(event.target.value);
    }
    return (jsxRuntime.jsx("textarea", __assign({ className: className, rows: 6, onChange: handleChanges }, { children: value }), void 0));
}

/**
 * Simple title component
 */
function Title(_a) {
    var value = _a.value, _b = _a.level, level = _b === void 0 ? "1" : _b;
    var titles = new Map()
        .set("1", jsxRuntime.jsx("h1", __assign({ className: "lndrui lndrui__title" }, { children: value }), void 0))
        .set("2", jsxRuntime.jsx("h2", __assign({ className: "lndrui lndrui__title" }, { children: value }), void 0))
        .set("3", jsxRuntime.jsx("h3", __assign({ className: "lndrui lndrui__title" }, { children: value }), void 0))
        .set("4", jsxRuntime.jsx("h4", __assign({ className: "lndrui lndrui__title" }, { children: value }), void 0));
    return titles.get(level);
}

exports.Button = Button;
exports.Checkbox = Checkbox;
exports.InputText = InputText;
exports.Textarea = Textarea;
exports.Title = Title;
