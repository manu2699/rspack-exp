(function() {
var __webpack_modules__ = {
"4448": (function (__unused_webpack_module, exports, __webpack_require__) {
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/ 'use strict';
var aa = __webpack_require__(/*! react */"7294"), ca = __webpack_require__(/*! scheduler */"3840");
function p(a) {
    for(var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)b += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = new Set, ea = {};
function fa(a, b) {
    ha(a, b);
    ha(a + "Capture", b);
}
function ha(a, b) {
    ea[a] = b;
    for(a = 0; a < b.length; a++)da.add(b[a]);
}
var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
function oa(a) {
    if (ja.call(ma, a)) return !0;
    if (ja.call(la, a)) return !1;
    if (ka.test(a)) return ma[a] = !0;
    la[a] = !0;
    return !1;
}
function pa(a, b, c, d) {
    if (null !== c && 0 === c.type) return !1;
    switch(typeof b){
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            if (d) return !1;
            if (null !== c) return !c.acceptsBooleans;
            a = a.toLowerCase().slice(0, 5);
            return "data-" !== a && "aria-" !== a;
        default:
            return !1;
    }
}
function qa(a, b, c, d) {
    if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return !0;
    if (d) return !1;
    if (null !== c) switch(c.type){
        case 3:
            return !b;
        case 4:
            return !1 === b;
        case 5:
            return isNaN(b);
        case 6:
            return isNaN(b) || 1 > b;
    }
    return !1;
}
function v(a, b, c, d, e, f, g) {
    this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
    this.attributeName = d;
    this.attributeNamespace = e;
    this.mustUseProperty = c;
    this.propertyName = a;
    this.type = b;
    this.sanitizeURL = f;
    this.removeEmptyString = g;
}
var z = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    z[a] = new v(a, 0, !1, a, null, !1, !1);
});
[
    [
        "acceptCharset",
        "accept-charset"
    ],
    [
        "className",
        "class"
    ],
    [
        "htmlFor",
        "for"
    ],
    [
        "httpEquiv",
        "http-equiv"
    ]
].forEach(function(a) {
    var b = a[0];
    z[b] = new v(b, 1, !1, a[1], null, !1, !1);
});
[
    "contentEditable",
    "draggable",
    "spellCheck",
    "value"
].forEach(function(a) {
    z[a] = new v(a, 2, !1, a.toLowerCase(), null, !1, !1);
});
[
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha"
].forEach(function(a) {
    z[a] = new v(a, 2, !1, a, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    z[a] = new v(a, 3, !1, a.toLowerCase(), null, !1, !1);
});
[
    "checked",
    "multiple",
    "muted",
    "selected"
].forEach(function(a) {
    z[a] = new v(a, 3, !0, a, null, !1, !1);
});
[
    "capture",
    "download"
].forEach(function(a) {
    z[a] = new v(a, 4, !1, a, null, !1, !1);
});
[
    "cols",
    "rows",
    "size",
    "span"
].forEach(function(a) {
    z[a] = new v(a, 6, !1, a, null, !1, !1);
});
[
    "rowSpan",
    "start"
].forEach(function(a) {
    z[a] = new v(a, 5, !1, a.toLowerCase(), null, !1, !1);
});
var ra = /[\-:]([a-z])/g;
function sa(a) {
    return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var b = a.replace(ra, sa);
    z[b] = new v(b, 1, !1, a, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var b = a.replace(ra, sa);
    z[b] = new v(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
});
[
    "xml:base",
    "xml:lang",
    "xml:space"
].forEach(function(a) {
    var b = a.replace(ra, sa);
    z[b] = new v(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
[
    "tabIndex",
    "crossOrigin"
].forEach(function(a) {
    z[a] = new v(a, 1, !1, a.toLowerCase(), null, !1, !1);
});
z.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
[
    "src",
    "href",
    "action",
    "formAction"
].forEach(function(a) {
    z[a] = new v(a, 1, !1, a.toLowerCase(), null, !0, !0);
});
function ta(a, b, c, d) {
    var e = z.hasOwnProperty(b) ? z[b] : null;
    if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
Symbol.for("react.scope");
Symbol.for("react.debug_trace_mode");
var Ia = Symbol.for("react.offscreen");
Symbol.for("react.legacy_hidden");
Symbol.for("react.cache");
Symbol.for("react.tracing_marker");
var Ja = Symbol.iterator;
function Ka(a) {
    if (null === a || "object" !== typeof a) return null;
    a = Ja && a[Ja] || a["@@iterator"];
    return "function" === typeof a ? a : null;
}
var A = Object.assign, La;
function Ma(a) {
    if (void 0 === La) try {
        throw Error();
    } catch (c) {
        var b = c.stack.trim().match(/\n( *(at )?)/);
        La = b && b[1] || "";
    }
    return "\n" + La + a;
}
var Na = !1;
function Oa(a, b) {
    if (!a || Na) return "";
    Na = !0;
    var c = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (b) {
            if (b = function() {
                throw Error();
            }, Object.defineProperty(b.prototype, "props", {
                set: function() {
                    throw Error();
                }
            }), "object" === typeof Reflect && Reflect.construct) {
                try {
                    Reflect.construct(b, []);
                } catch (l) {
                    var d = l;
                }
                Reflect.construct(a, [], b);
            } else {
                try {
                    b.call();
                } catch (l) {
                    d = l;
                }
                a.call(b.prototype);
            }
        } else {
            try {
                throw Error();
            } catch (l) {
                d = l;
            }
            a();
        }
    } catch (l) {
        if (l && d && "string" === typeof l.stack) {
            for(var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h];)h--;
            for(; 1 <= g && 0 <= h; g--, h--)if (e[g] !== f[h]) {
                if (1 !== g || 1 !== h) {
                    do if (g--, h--, 0 > h || e[g] !== f[h]) {
                        var k = "\n" + e[g].replace(" at new ", " at ");
                        a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
                        return k;
                    }
                    while (1 <= g && 0 <= h)
                }
                break;
            }
        }
    } finally{
        Na = !1, Error.prepareStackTrace = c;
    }
    return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
}
function Pa(a) {
    switch(a.tag){
        case 5:
            return Ma(a.type);
        case 16:
            return Ma("Lazy");
        case 13:
            return Ma("Suspense");
        case 19:
            return Ma("SuspenseList");
        case 0:
        case 2:
        case 15:
            return a = Oa(a.type, !1), a;
        case 11:
            return a = Oa(a.type.render, !1), a;
        case 1:
            return a = Oa(a.type, !0), a;
        default:
            return "";
    }
}
function Qa(a) {
    if (null == a) return null;
    if ("function" === typeof a) return a.displayName || a.name || null;
    if ("string" === typeof a) return a;
    switch(a){
        case ya:
            return "Fragment";
        case wa:
            return "Portal";
        case Aa:
            return "Profiler";
        case za:
            return "StrictMode";
        case Ea:
            return "Suspense";
        case Fa:
            return "SuspenseList";
    }
    if ("object" === typeof a) switch(a.$$typeof){
        case Ca:
            return (a.displayName || "Context") + ".Consumer";
        case Ba:
            return (a._context.displayName || "Context") + ".Provider";
        case Da:
            var b = a.render;
            a = a.displayName;
            a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
            return a;
        case Ga:
            return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
        case Ha:
            b = a._payload;
            a = a._init;
            try {
                return Qa(a(b));
            } catch (c) {}
    }
    return null;
}
function Ra(a) {
    var b = a.type;
    switch(a.tag){
        case 24:
            return "Cache";
        case 9:
            return (b.displayName || "Context") + ".Consumer";
        case 10:
            return (b._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return b;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Qa(b);
        case 8:
            return b === za ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if ("function" === typeof b) return b.displayName || b.name || null;
            if ("string" === typeof b) return b;
    }
    return null;
}
function Sa(a) {
    switch(typeof a){
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return a;
        case "object":
            return a;
        default:
            return "";
    }
}
function Ta(a) {
    var b = a.type;
    return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
}
function Ua(a) {
    var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
    if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
        var e = c.get, f = c.set;
        Object.defineProperty(a, b, {
            configurable: !0,
            get: function() {
                return e.call(this);
            },
            set: function(a) {
                d = "" + a;
                f.call(this, a);
            }
        });
        Object.defineProperty(a, b, {
            enumerable: c.enumerable
        });
        return {
            getValue: function() {
                return d;
            },
            setValue: function(a) {
                d = "" + a;
            },
            stopTracking: function() {
                a._valueTracker = null;
                delete a[b];
            }
        };
    }
}
function Va(a) {
    a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
    if (!a) return !1;
    var b = a._valueTracker;
    if (!b) return !0;
    var c = b.getValue();
    var d = "";
    a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
    a = d;
    return a !== c ? (b.setValue(a), !0) : !1;
}
function Xa(a) {
    a = a || ("undefined" !== typeof document ? document : void 0);
    if ("undefined" === typeof a) return null;
    try {
        return a.activeElement || a.body;
    } catch (b) {
        return a.body;
    }
}
function Ya(a, b) {
    var c = b.checked;
    return A({}, b, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != c ? c : a._wrapperState.initialChecked
    });
}
function Za(a, b) {
    var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
    c = Sa(null != b.value ? b.value : c);
    a._wrapperState = {
        initialChecked: d,
        initialValue: c,
        controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
    };
}
function ab(a, b) {
    b = b.checked;
    null != b && ta(a, "checked", b, !1);
}
function bb(a, b) {
    ab(a, b);
    var c = Sa(b.value), d = b.type;
    if (null != c) {
        if ("number" === d) {
            if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
        } else a.value !== "" + c && (a.value = "" + c);
    } else if ("submit" === d || "reset" === d) {
        a.removeAttribute("value");
        return;
    }
    b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
    null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
}
function db(a, b, c) {
    if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
        var d = b.type;
        if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
        b = "" + a._wrapperState.initialValue;
        c || b === a.value || (a.value = b);
        a.defaultValue = b;
    }
    c = a.name;
    "" !== c && (a.name = "");
    a.defaultChecked = !!a._wrapperState.initialChecked;
    "" !== c && (a.name = c);
}
function cb(a, b, c) {
    if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
var eb = Array.isArray;
function fb(a, b, c, d) {
    a = a.options;
    if (b) {
        b = {};
        for(var e = 0; e < c.length; e++)b["$" + c[e]] = !0;
        for(c = 0; c < a.length; c++)e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0);
    } else {
        c = "" + Sa(c);
        b = null;
        for(e = 0; e < a.length; e++){
            if (a[e].value === c) {
                a[e].selected = !0;
                d && (a[e].defaultSelected = !0);
                return;
            }
            null !== b || a[e].disabled || (b = a[e]);
        }
        null !== b && (b.selected = !0);
    }
}
function gb(a, b) {
    if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
    return A({}, b, {
        value: void 0,
        defaultValue: void 0,
        children: "" + a._wrapperState.initialValue
    });
}
function hb(a, b) {
    var c = b.value;
    if (null == c) {
        c = b.children;
        b = b.defaultValue;
        if (null != c) {
            if (null != b) throw Error(p(92));
            if (eb(c)) {
                if (1 < c.length) throw Error(p(93));
                c = c[0];
            }
            b = c;
        }
        null == b && (b = "");
        c = b;
    }
    a._wrapperState = {
        initialValue: Sa(c)
    };
}
function ib(a, b) {
    var c = Sa(b.value), d = Sa(b.defaultValue);
    null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
    null != d && (a.defaultValue = "" + d);
}
function jb(a) {
    var b = a.textContent;
    b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
}
function kb(a) {
    switch(a){
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function lb(a, b) {
    return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
}
var mb, nb = function(a) {
    return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
        MSApp.execUnsafeLocalFunction(function() {
            return a(b, c, d, e);
        });
    } : a;
}(function(a, b) {
    if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;
    else {
        mb = mb || document.createElement("div");
        mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
        for(b = mb.firstChild; a.firstChild;)a.removeChild(a.firstChild);
        for(; b.firstChild;)a.appendChild(b.firstChild);
    }
});
function ob(a, b) {
    if (b) {
        var c = a.firstChild;
        if (c && c === a.lastChild && 3 === c.nodeType) {
            c.nodeValue = b;
            return;
        }
    }
    a.textContent = b;
}
var pb = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}, qb = [
    "Webkit",
    "ms",
    "Moz",
    "O"
];
Object.keys(pb).forEach(function(a) {
    qb.forEach(function(b) {
        b = b + a.charAt(0).toUpperCase() + a.substring(1);
        pb[b] = pb[a];
    });
});
function rb(a, b, c) {
    return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
}
function sb(a, b) {
    a = a.style;
    for(var c in b)if (b.hasOwnProperty(c)) {
        var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
        "float" === c && (c = "cssFloat");
        d ? a.setProperty(c, e) : a[c] = e;
    }
}
var tb = A({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function ub(a, b) {
    if (b) {
        if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
        if (null != b.dangerouslySetInnerHTML) {
            if (null != b.children) throw Error(p(60));
            if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
        }
        if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
    }
}
function vb(a, b) {
    if (-1 === a.indexOf("-")) return "string" === typeof b.is;
    switch(a){
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0;
    }
}
var wb = null;
function xb(a) {
    a = a.target || a.srcElement || window;
    a.correspondingUseElement && (a = a.correspondingUseElement);
    return 3 === a.nodeType ? a.parentNode : a;
}
var yb = null, zb = null, Ab = null;
function Bb(a) {
    if (a = Cb(a)) {
        if ("function" !== typeof yb) throw Error(p(280));
        var b = a.stateNode;
        b && (b = Db(b), yb(a.stateNode, a.type, b));
    }
}
function Eb(a) {
    zb ? Ab ? Ab.push(a) : Ab = [
        a
    ] : zb = a;
}
function Fb() {
    if (zb) {
        var a = zb, b = Ab;
        Ab = zb = null;
        Bb(a);
        if (b) for(a = 0; a < b.length; a++)Bb(b[a]);
    }
}
function Gb(a, b) {
    return a(b);
}
function Hb() {}
var Ib = !1;
function Jb(a, b, c) {
    if (Ib) return a(b, c);
    Ib = !0;
    try {
        return Gb(a, b, c);
    } finally{
        if (Ib = !1, null !== zb || null !== Ab) Hb(), Fb();
    }
}
function Kb(a, b) {
    var c = a.stateNode;
    if (null === c) return null;
    var d = Db(c);
    if (null === d) return null;
    c = d[b];
    a: switch(b){
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
            a = !d;
            break a;
        default:
            a = !1;
    }
    if (a) return null;
    if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
    return c;
}
var Lb = !1;
if (ia) try {
    var Mb = {};
    Object.defineProperty(Mb, "passive", {
        get: function() {
            Lb = !0;
        }
    });
    window.addEventListener("test", Mb, Mb);
    window.removeEventListener("test", Mb, Mb);
} catch (a) {
    Lb = !1;
}
function Nb(a, b, c, d, e, f, g, h, k) {
    var l = Array.prototype.slice.call(arguments, 3);
    try {
        b.apply(c, l);
    } catch (m) {
        this.onError(m);
    }
}
var Ob = !1, Pb = null, Qb = !1, Rb = null, Sb = {
    onError: function(a) {
        Ob = !0;
        Pb = a;
    }
};
function Tb(a, b, c, d, e, f, g, h, k) {
    Ob = !1;
    Pb = null;
    Nb.apply(Sb, arguments);
}
function Ub(a, b, c, d, e, f, g, h, k) {
    Tb.apply(this, arguments);
    if (Ob) {
        if (Ob) {
            var l = Pb;
            Ob = !1;
            Pb = null;
        } else throw Error(p(198));
        Qb || (Qb = !0, Rb = l);
    }
}
function Vb(a) {
    var b = a, c = a;
    if (a.alternate) for(; b.return;)b = b.return;
    else {
        a = b;
        do b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
        while (a)
    }
    return 3 === b.tag ? c : null;
}
function Wb(a) {
    if (13 === a.tag) {
        var b = a.memoizedState;
        null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
        if (null !== b) return b.dehydrated;
    }
    return null;
}
function Xb(a) {
    if (Vb(a) !== a) throw Error(p(188));
}
function Yb(a) {
    var b = a.alternate;
    if (!b) {
        b = Vb(a);
        if (null === b) throw Error(p(188));
        return b !== a ? null : a;
    }
    for(var c = a, d = b;;){
        var e = c.return;
        if (null === e) break;
        var f = e.alternate;
        if (null === f) {
            d = e.return;
            if (null !== d) {
                c = d;
                continue;
            }
            break;
        }
        if (e.child === f.child) {
            for(f = e.child; f;){
                if (f === c) return Xb(e), a;
                if (f === d) return Xb(e), b;
                f = f.sibling;
            }
            throw Error(p(188));
        }
        if (c.return !== d.return) c = e, d = f;
        else {
            for(var g = !1, h = e.child; h;){
                if (h === c) {
                    g = !0;
                    c = e;
                    d = f;
                    break;
                }
                if (h === d) {
                    g = !0;
                    d = e;
                    c = f;
                    break;
                }
                h = h.sibling;
            }
            if (!g) {
                for(h = f.child; h;){
                    if (h === c) {
                        g = !0;
                        c = f;
                        d = e;
                        break;
                    }
                    if (h === d) {
                        g = !0;
                        d = f;
                        c = e;
                        break;
                    }
                    h = h.sibling;
                }
                if (!g) throw Error(p(189));
            }
        }
        if (c.alternate !== d) throw Error(p(190));
    }
    if (3 !== c.tag) throw Error(p(188));
    return c.stateNode.current === c ? a : b;
}
function Zb(a) {
    a = Yb(a);
    return null !== a ? $b(a) : null;
}
function $b(a) {
    if (5 === a.tag || 6 === a.tag) return a;
    for(a = a.child; null !== a;){
        var b = $b(a);
        if (null !== b) return b;
        a = a.sibling;
    }
    return null;
}
var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
function mc(a) {
    if (lc && "function" === typeof lc.onCommitFiberRoot) try {
        lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
    } catch (b) {}
}
var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
function nc(a) {
    a >>>= 0;
    return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
}
var rc = 64, sc = 4194304;
function tc(a) {
    switch(a & -a){
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return a & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return a & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return a;
    }
}
function uc(a, b) {
    var c = a.pendingLanes;
    if (0 === c) return 0;
    var d = 0, e = a.suspendedLanes, f = a.pingedLanes, g = c & 268435455;
    if (0 !== g) {
        var h = g & ~e;
        0 !== h ? d = tc(h) : (f &= g, 0 !== f && (d = tc(f)));
    } else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f && (d = tc(f));
    if (0 === d) return 0;
    if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
    0 !== (d & 4) && (d |= c & 16);
    b = a.entangledLanes;
    if (0 !== b) for(a = a.entanglements, b &= d; 0 < b;)c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
    return d;
}
function vc(a, b) {
    switch(a){
        case 1:
        case 2:
        case 4:
            return b + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return b + 5E3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}
function wc(a, b) {
    for(var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f;){
        var g = 31 - oc(f), h = 1 << g, k = e[g];
        if (-1 === k) {
            if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
        } else k <= b && (a.expiredLanes |= h);
        f &= ~h;
    }
}
function xc(a) {
    a = a.pendingLanes & -1073741825;
    return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
}
function yc() {
    var a = rc;
    rc <<= 1;
    0 === (rc & 4194240) && (rc = 64);
    return a;
}
function zc(a) {
    for(var b = [], c = 0; 31 > c; c++)b.push(a);
    return b;
}
function Ac(a, b, c) {
    a.pendingLanes |= b;
    536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
    a = a.eventTimes;
    b = 31 - oc(b);
    a[b] = c;
}
function Bc(a, b) {
    var c = a.pendingLanes & ~b;
    a.pendingLanes = b;
    a.suspendedLanes = 0;
    a.pingedLanes = 0;
    a.expiredLanes &= b;
    a.mutableReadLanes &= b;
    a.entangledLanes &= b;
    b = a.entanglements;
    var d = a.eventTimes;
    for(a = a.expirationTimes; 0 < c;){
        var e = 31 - oc(c), f = 1 << e;
        b[e] = 0;
        d[e] = -1;
        a[e] = -1;
        c &= ~f;
    }
}
function Cc(a, b) {
    var c = a.entangledLanes |= b;
    for(a = a.entanglements; c;){
        var d = 31 - oc(c), e = 1 << d;
        e & b | a[d] & b && (a[d] |= b);
        c &= ~e;
    }
}
var C = 0;
function Dc(a) {
    a &= -a;
    return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
}
var Ec, Fc, Gc, Hc, Ic, Jc = !1, Kc = [], Lc = null, Mc = null, Nc = null, Oc = new Map, Pc = new Map, Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a, b) {
    switch(a){
        case "focusin":
        case "focusout":
            Lc = null;
            break;
        case "dragenter":
        case "dragleave":
            Mc = null;
            break;
        case "mouseover":
        case "mouseout":
            Nc = null;
            break;
        case "pointerover":
        case "pointerout":
            Oc.delete(b.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Pc.delete(b.pointerId);
    }
}
function Tc(a, b, c, d, e, f) {
    if (null === a || a.nativeEvent !== f) return a = {
        blockedOn: b,
        domEventName: c,
        eventSystemFlags: d,
        nativeEvent: f,
        targetContainers: [
            e
        ]
    }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
    a.eventSystemFlags |= d;
    b = a.targetContainers;
    null !== e && -1 === b.indexOf(e) && b.push(e);
    return a;
}
function Uc(a, b, c, d, e) {
    switch(b){
        case "focusin":
            return Lc = Tc(Lc, a, b, c, d, e), !0;
        case "dragenter":
            return Mc = Tc(Mc, a, b, c, d, e), !0;
        case "mouseover":
            return Nc = Tc(Nc, a, b, c, d, e), !0;
        case "pointerover":
            var f = e.pointerId;
            Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
            return !0;
        case "gotpointercapture":
            return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), !0;
    }
    return !1;
}
function Vc(a) {
    var b = Wc(a.target);
    if (null !== b) {
        var c = Vb(b);
        if (null !== c) {
            if (b = c.tag, 13 === b) {
                if (b = Wb(c), null !== b) {
                    a.blockedOn = b;
                    Ic(a.priority, function() {
                        Gc(c);
                    });
                    return;
                }
            } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
                a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
                return;
            }
        }
    }
    a.blockedOn = null;
}
function Xc(a) {
    if (null !== a.blockedOn) return !1;
    for(var b = a.targetContainers; 0 < b.length;){
        var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
        if (null === c) {
            c = a.nativeEvent;
            var d = new c.constructor(c.type, c);
            wb = d;
            c.target.dispatchEvent(d);
            wb = null;
        } else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, !1;
        b.shift();
    }
    return !0;
}
function Zc(a, b, c) {
    Xc(a) && c.delete(b);
}
function $c() {
    Jc = !1;
    null !== Lc && Xc(Lc) && (Lc = null);
    null !== Mc && Xc(Mc) && (Mc = null);
    null !== Nc && Xc(Nc) && (Nc = null);
    Oc.forEach(Zc);
    Pc.forEach(Zc);
}
function ad(a, b) {
    a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = !0, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd(a) {
    function b(b) {
        return ad(b, a);
    }
    if (0 < Kc.length) {
        ad(Kc[0], a);
        for(var c = 1; c < Kc.length; c++){
            var d = Kc[c];
            d.blockedOn === a && (d.blockedOn = null);
        }
    }
    null !== Lc && ad(Lc, a);
    null !== Mc && ad(Mc, a);
    null !== Nc && ad(Nc, a);
    Oc.forEach(b);
    Pc.forEach(b);
    for(c = 0; c < Qc.length; c++)d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
    for(; 0 < Qc.length && (c = Qc[0], null === c.blockedOn);)Vc(c), null === c.blockedOn && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig, dd = !0;
function ed(a, b, c, d) {
    var e = C, f = cd.transition;
    cd.transition = null;
    try {
        C = 1, fd(a, b, c, d);
    } finally{
        C = e, cd.transition = f;
    }
}
function gd(a, b, c, d) {
    var e = C, f = cd.transition;
    cd.transition = null;
    try {
        C = 4, fd(a, b, c, d);
    } finally{
        C = e, cd.transition = f;
    }
}
function fd(a, b, c, d) {
    if (dd) {
        var e = Yc(a, b, c, d);
        if (null === e) hd(a, b, d, id, c), Sc(a, d);
        else if (Uc(e, a, b, c, d)) d.stopPropagation();
        else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
            for(; null !== e;){
                var f = Cb(e);
                null !== f && Ec(f);
                f = Yc(a, b, c, d);
                null === f && hd(a, b, d, id, c);
                if (f === e) break;
                e = f;
            }
            null !== e && d.stopPropagation();
        } else hd(a, b, d, null, c);
    }
}
var id = null;
function Yc(a, b, c, d) {
    id = null;
    a = xb(d);
    a = Wc(a);
    if (null !== a) {
        if (b = Vb(a), null === b) a = null;
        else if (c = b.tag, 13 === c) {
            a = Wb(b);
            if (null !== a) return a;
            a = null;
        } else if (3 === c) {
            if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
            a = null;
        } else b !== a && (a = null);
    }
    id = a;
    return null;
}
function jd(a) {
    switch(a){
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch(ec()){
                case fc:
                    return 1;
                case gc:
                    return 4;
                case hc:
                case ic:
                    return 16;
                case jc:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var kd = null, ld = null, md = null;
function nd() {
    if (md) return md;
    var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
    for(a = 0; a < c && b[a] === e[a]; a++);
    var g = c - a;
    for(d = 1; d <= g && b[c - d] === e[f - d]; d++);
    return md = e.slice(a, 1 < d ? 1 - d : void 0);
}
function od(a) {
    var b = a.keyCode;
    "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
    10 === a && (a = 13);
    return 32 <= a || 13 === a ? a : 0;
}
function pd() {
    return !0;
}
function qd() {
    return !1;
}
function rd(a) {
    function b(b, d, e, f, g) {
        this._reactName = b;
        this._targetInst = e;
        this.type = d;
        this.nativeEvent = f;
        this.target = g;
        this.currentTarget = null;
        for(var c in a)a.hasOwnProperty(c) && (b = a[c], this[c] = b ? b(f) : f[c]);
        this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : !1 === f.returnValue) ? pd : qd;
        this.isPropagationStopped = qd;
        return this;
    }
    A(b.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var a = this.nativeEvent;
            a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = pd);
        },
        stopPropagation: function() {
            var a = this.nativeEvent;
            a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = pd);
        },
        persist: function() {},
        isPersistent: pd
    });
    return b;
}
var sd = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(a) {
        return a.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
}, td = rd(sd), ud = A({}, sd, {
    view: 0,
    detail: 0
}), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: zd,
    button: 0,
    buttons: 0,
    relatedTarget: function(a) {
        return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
    },
    movementX: function(a) {
        if ("movementX" in a) return a.movementX;
        a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
        return wd;
    },
    movementY: function(a) {
        return "movementY" in a ? a.movementY : xd;
    }
}), Bd = rd(Ad), Cd = A({}, Ad, {
    dataTransfer: 0
}), Dd = rd(Cd), Ed = A({}, ud, {
    relatedTarget: 0
}), Fd = rd(Ed), Gd = A({}, sd, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Hd = rd(Gd), Id = A({}, sd, {
    clipboardData: function(a) {
        return "clipboardData" in a ? a.clipboardData : window.clipboardData;
    }
}), Jd = rd(Id), Kd = A({}, sd, {
    data: 0
}), Ld = rd(Kd), Md = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, Nd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, Od = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Pd(a) {
    var b = this.nativeEvent;
    return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : !1;
}
function zd() {
    return Pd;
}
var Qd = A({}, ud, {
    key: function(a) {
        if (a.key) {
            var b = Md[a.key] || a.key;
            if ("Unidentified" !== b) return b;
        }
        return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: zd,
    charCode: function(a) {
        return "keypress" === a.type ? od(a) : 0;
    },
    keyCode: function(a) {
        return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    },
    which: function(a) {
        return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    }
}), Rd = rd(Qd), Sd = A({}, Ad, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
}), Td = rd(Sd), Ud = A({}, ud, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: zd
}), Vd = rd(Ud), Wd = A({}, sd, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Xd = rd(Wd), Yd = A({}, Ad, {
    deltaX: function(a) {
        return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
    },
    deltaY: function(a) {
        return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
}), Zd = rd(Yd), $d = [
    9,
    13,
    27,
    32
], ae = ia && "CompositionEvent" in window, be = null;
ia && "documentMode" in document && (be = document.documentMode);
var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = !1;
function ge(a, b) {
    switch(a){
        case "keyup":
            return -1 !== $d.indexOf(b.keyCode);
        case "keydown":
            return 229 !== b.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function he(a) {
    a = a.detail;
    return "object" === typeof a && "data" in a ? a.data : null;
}
var ie = !1;
function je(a, b) {
    switch(a){
        case "compositionend":
            return he(b);
        case "keypress":
            if (32 !== b.which) return null;
            fe = !0;
            return ee;
        case "textInput":
            return a = b.data, a === ee && fe ? null : a;
        default:
            return null;
    }
}
function ke(a, b) {
    if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = !1, a) : null;
    switch(a){
        case "paste":
            return null;
        case "keypress":
            if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
                if (b.char && 1 < b.char.length) return b.char;
                if (b.which) return String.fromCharCode(b.which);
            }
            return null;
        case "compositionend":
            return de && "ko" !== b.locale ? null : b.data;
        default:
            return null;
    }
}
var le = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function me(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return "input" === b ? !!le[a.type] : "textarea" === b ? !0 : !1;
}
function ne(a, b, c, d) {
    Eb(d);
    b = oe(b, "onChange");
    0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({
        event: c,
        listeners: b
    }));
}
var pe = null, qe = null;
function re(a) {
    se(a, 0);
}
function te(a) {
    var b = ue(a);
    if (Wa(b)) return a;
}
function ve(a, b) {
    if ("change" === a) return b;
}
var we = !1;
if (ia) {
    var xe;
    if (ia) {
        var ye = "oninput" in document;
        if (!ye) {
            var ze = document.createElement("div");
            ze.setAttribute("oninput", "return;");
            ye = "function" === typeof ze.oninput;
        }
        xe = ye;
    } else xe = !1;
    we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
    pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a) {
    if ("value" === a.propertyName && te(qe)) {
        var b = [];
        ne(b, qe, a, xb(a));
        Jb(re, b);
    }
}
function Ce(a, b, c) {
    "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
}
function De(a) {
    if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
}
function Ee(a, b) {
    if ("click" === a) return te(b);
}
function Fe(a, b) {
    if ("input" === a || "change" === a) return te(b);
}
function Ge(a, b) {
    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var He = "function" === typeof Object.is ? Object.is : Ge;
function Ie(a, b) {
    if (He(a, b)) return !0;
    if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
    var c = Object.keys(a), d = Object.keys(b);
    if (c.length !== d.length) return !1;
    for(d = 0; d < c.length; d++){
        var e = c[d];
        if (!ja.call(b, e) || !He(a[e], b[e])) return !1;
    }
    return !0;
}
function Je(a) {
    for(; a && a.firstChild;)a = a.firstChild;
    return a;
}
function Ke(a, b) {
    var c = Je(a);
    a = 0;
    for(var d; c;){
        if (3 === c.nodeType) {
            d = a + c.textContent.length;
            if (a <= b && d >= b) return {
                node: c,
                offset: b - a
            };
            a = d;
        }
        a: {
            for(; c;){
                if (c.nextSibling) {
                    c = c.nextSibling;
                    break a;
                }
                c = c.parentNode;
            }
            c = void 0;
        }
        c = Je(c);
    }
}
function Le(a, b) {
    return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
}
function Me() {
    for(var a = window, b = Xa(); b instanceof a.HTMLIFrameElement;){
        try {
            var c = "string" === typeof b.contentWindow.location.href;
        } catch (d) {
            c = !1;
        }
        if (c) a = b.contentWindow;
        else break;
        b = Xa(a.document);
    }
    return b;
}
function Ne(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
}
function Oe(a) {
    var b = Me(), c = a.focusedElem, d = a.selectionRange;
    if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
        if (null !== d && Ne(c)) {
            if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
            else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
                a = a.getSelection();
                var e = c.textContent.length, f = Math.min(d.start, e);
                d = void 0 === d.end ? f : Math.min(d.end, e);
                !a.extend && f > d && (e = d, d = f, f = e);
                e = Ke(c, f);
                var g = Ke(c, d);
                e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
            }
        }
        b = [];
        for(a = c; a = a.parentNode;)1 === a.nodeType && b.push({
            element: a,
            left: a.scrollLeft,
            top: a.scrollTop
        });
        "function" === typeof c.focus && c.focus();
        for(c = 0; c < b.length; c++)a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
    }
}
var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = !1;
function Ue(a, b, c) {
    var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
    Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = {
        start: d.selectionStart,
        end: d.selectionEnd
    } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = {
        anchorNode: d.anchorNode,
        anchorOffset: d.anchorOffset,
        focusNode: d.focusNode,
        focusOffset: d.focusOffset
    }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({
        event: b,
        listeners: d
    }), b.target = Qe)));
}
function Ve(a, b) {
    var c = {};
    c[a.toLowerCase()] = b.toLowerCase();
    c["Webkit" + a] = "webkit" + b;
    c["Moz" + a] = "moz" + b;
    return c;
}
var We = {
    animationend: Ve("Animation", "AnimationEnd"),
    animationiteration: Ve("Animation", "AnimationIteration"),
    animationstart: Ve("Animation", "AnimationStart"),
    transitionend: Ve("Transition", "TransitionEnd")
}, Xe = {}, Ye = {};
ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
function Ze(a) {
    if (Xe[a]) return Xe[a];
    if (!We[a]) return a;
    var b = We[a], c;
    for(c in b)if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
    return a;
}
var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = new Map, ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a, b) {
    df.set(a, b);
    fa(b, [
        a
    ]);
}
for(var gf = 0; gf < ef.length; gf++){
    var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
    ff(jf, "on" + kf);
}
ff($e, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha("onMouseEnter", [
    "mouseout",
    "mouseover"
]);
ha("onMouseLeave", [
    "mouseout",
    "mouseover"
]);
ha("onPointerEnter", [
    "pointerout",
    "pointerover"
]);
ha("onPointerLeave", [
    "pointerout",
    "pointerover"
]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a, b, c) {
    var d = a.type || "unknown-event";
    a.currentTarget = c;
    Ub(d, b, void 0, a);
    a.currentTarget = null;
}
function se(a, b) {
    b = 0 !== (b & 4);
    for(var c = 0; c < a.length; c++){
        var d = a[c], e = d.event;
        d = d.listeners;
        a: {
            var f = void 0;
            if (b) for(var g = d.length - 1; 0 <= g; g--){
                var h = d[g], k = h.instance, l = h.currentTarget;
                h = h.listener;
                if (k !== f && e.isPropagationStopped()) break a;
                nf(e, h, l);
                f = k;
            }
            else for(g = 0; g < d.length; g++){
                h = d[g];
                k = h.instance;
                l = h.currentTarget;
                h = h.listener;
                if (k !== f && e.isPropagationStopped()) break a;
                nf(e, h, l);
                f = k;
            }
        }
    }
    if (Qb) throw a = Rb, Qb = !1, Rb = null, a;
}
function D(a, b) {
    var c = b[of];
    void 0 === c && (c = b[of] = new Set);
    var d = a + "__bubble";
    c.has(d) || (pf(b, a, 2, !1), c.add(d));
}
function qf(a, b, c) {
    var d = 0;
    b && (d |= 4);
    pf(c, a, d, b);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a) {
    if (!a[rf]) {
        a[rf] = !0;
        da.forEach(function(b) {
            "selectionchange" !== b && (mf.has(b) || qf(b, !1, a), qf(b, !0, a));
        });
        var b = 9 === a.nodeType ? a : a.ownerDocument;
        null === b || b[rf] || (b[rf] = !0, qf("selectionchange", !1, b));
    }
}
function pf(a, b, c, d) {
    switch(jd(b)){
        case 1:
            var e = ed;
            break;
        case 4:
            e = gd;
            break;
        default:
            e = fd;
    }
    c = e.bind(null, b, c, a);
    e = void 0;
    !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = !0);
    d ? void 0 !== e ? a.addEventListener(b, c, {
        capture: !0,
        passive: e
    }) : a.addEventListener(b, c, !0) : void 0 !== e ? a.addEventListener(b, c, {
        passive: e
    }) : a.addEventListener(b, c, !1);
}
function hd(a, b, c, d, e) {
    var f = d;
    if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for(;;){
        if (null === d) return;
        var g = d.tag;
        if (3 === g || 4 === g) {
            var h = d.stateNode.containerInfo;
            if (h === e || 8 === h.nodeType && h.parentNode === e) break;
            if (4 === g) for(g = d.return; null !== g;){
                var k = g.tag;
                if (3 === k || 4 === k) {
                    if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
                }
                g = g.return;
            }
            for(; null !== h;){
                g = Wc(h);
                if (null === g) return;
                k = g.tag;
                if (5 === k || 6 === k) {
                    d = f = g;
                    continue a;
                }
                h = h.parentNode;
            }
        }
        d = d.return;
    }
    Jb(function() {
        var d = f, e = xb(c), g = [];
        a: {
            var h = df.get(a);
            if (void 0 !== h) {
                var k = td, n = a;
                switch(a){
                    case "keypress":
                        if (0 === od(c)) break a;
                    case "keydown":
                    case "keyup":
                        k = Rd;
                        break;
                    case "focusin":
                        n = "focus";
                        k = Fd;
                        break;
                    case "focusout":
                        n = "blur";
                        k = Fd;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        k = Fd;
                        break;
                    case "click":
                        if (2 === c.button) break a;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        k = Bd;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        k = Dd;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        k = Vd;
                        break;
                    case $e:
                    case af:
                    case bf:
                        k = Hd;
                        break;
                    case cf:
                        k = Xd;
                        break;
                    case "scroll":
                        k = vd;
                        break;
                    case "wheel":
                        k = Zd;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        k = Jd;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        k = Td;
                }
                var t = 0 !== (b & 4), J = !t && "scroll" === a, x = t ? null !== h ? h + "Capture" : null : h;
                t = [];
                for(var w = d, u; null !== w;){
                    u = w;
                    var F = u.stateNode;
                    5 === u.tag && null !== F && (u = F, null !== x && (F = Kb(w, x), null != F && t.push(tf(w, F, u))));
                    if (J) break;
                    w = w.return;
                }
                0 < t.length && (h = new k(h, n, null, c, e), g.push({
                    event: h,
                    listeners: t
                }));
            }
        }
        if (0 === (b & 7)) {
            a: {
                h = "mouseover" === a || "pointerover" === a;
                k = "mouseout" === a || "pointerout" === a;
                if (h && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf])) break a;
                if (k || h) {
                    h = e.window === e ? e : (h = e.ownerDocument) ? h.defaultView || h.parentWindow : window;
                    if (k) {
                        if (n = c.relatedTarget || c.toElement, k = d, n = n ? Wc(n) : null, null !== n && (J = Vb(n), n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
                    } else k = null, n = d;
                    if (k !== n) {
                        t = Bd;
                        F = "onMouseLeave";
                        x = "onMouseEnter";
                        w = "mouse";
                        if ("pointerout" === a || "pointerover" === a) t = Td, F = "onPointerLeave", x = "onPointerEnter", w = "pointer";
                        J = null == k ? h : ue(k);
                        u = null == n ? h : ue(n);
                        h = new t(F, w + "leave", k, c, e);
                        h.target = J;
                        h.relatedTarget = u;
                        F = null;
                        Wc(e) === d && (t = new t(x, w + "enter", n, c, e), t.target = u, t.relatedTarget = J, F = t);
                        J = F;
                        if (k && n) b: {
                            t = k;
                            x = n;
                            w = 0;
                            for(u = t; u; u = vf(u))w++;
                            u = 0;
                            for(F = x; F; F = vf(F))u++;
                            for(; 0 < w - u;)t = vf(t), w--;
                            for(; 0 < u - w;)x = vf(x), u--;
                            for(; w--;){
                                if (t === x || null !== x && t === x.alternate) break b;
                                t = vf(t);
                                x = vf(x);
                            }
                            t = null;
                        }
                        else t = null;
                        null !== k && wf(g, h, k, t, !1);
                        null !== n && null !== J && wf(g, J, n, t, !0);
                    }
                }
            }
            a: {
                h = d ? ue(d) : window;
                k = h.nodeName && h.nodeName.toLowerCase();
                if ("select" === k || "input" === k && "file" === h.type) var na = ve;
                else if (me(h)) {
                    if (we) na = Fe;
                    else {
                        na = De;
                        var xa = Ce;
                    }
                } else (k = h.nodeName) && "input" === k.toLowerCase() && ("checkbox" === h.type || "radio" === h.type) && (na = Ee);
                if (na && (na = na(a, d))) {
                    ne(g, na, c, e);
                    break a;
                }
                xa && xa(a, h, d);
                "focusout" === a && (xa = h._wrapperState) && xa.controlled && "number" === h.type && cb(h, "number", h.value);
            }
            xa = d ? ue(d) : window;
            switch(a){
                case "focusin":
                    if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d, Se = null;
                    break;
                case "focusout":
                    Se = Re = Qe = null;
                    break;
                case "mousedown":
                    Te = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Te = !1;
                    Ue(g, c, e);
                    break;
                case "selectionchange":
                    if (Pe) break;
                case "keydown":
                case "keyup":
                    Ue(g, c, e);
            }
            var $a;
            if (ae) b: {
                switch(a){
                    case "compositionstart":
                        var ba = "onCompositionStart";
                        break b;
                    case "compositionend":
                        ba = "onCompositionEnd";
                        break b;
                    case "compositionupdate":
                        ba = "onCompositionUpdate";
                        break b;
                }
                ba = void 0;
            }
            else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
            ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e, ld = "value" in kd ? kd.value : kd.textContent, ie = !0)), xa = oe(d, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e), g.push({
                event: ba,
                listeners: xa
            }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
            if ($a = ce ? je(a, c) : ke(a, c)) d = oe(d, "onBeforeInput"), 0 < d.length && (e = new Ld("onBeforeInput", "beforeinput", null, c, e), g.push({
                event: e,
                listeners: d
            }), e.data = $a);
        }
        se(g, b);
    });
}
function tf(a, b, c) {
    return {
        instance: a,
        listener: b,
        currentTarget: c
    };
}
function oe(a, b) {
    for(var c = b + "Capture", d = []; null !== a;){
        var e = a, f = e.stateNode;
        5 === e.tag && null !== f && (e = f, f = Kb(a, c), null != f && d.unshift(tf(a, f, e)), f = Kb(a, b), null != f && d.push(tf(a, f, e)));
        a = a.return;
    }
    return d;
}
function vf(a) {
    if (null === a) return null;
    do a = a.return;
    while (a && 5 !== a.tag)
    return a ? a : null;
}
function wf(a, b, c, d, e) {
    for(var f = b._reactName, g = []; null !== c && c !== d;){
        var h = c, k = h.alternate, l = h.stateNode;
        if (null !== k && k === d) break;
        5 === h.tag && null !== l && (h = l, e ? (k = Kb(c, f), null != k && g.unshift(tf(c, k, h))) : e || (k = Kb(c, f), null != k && g.push(tf(c, k, h))));
        c = c.return;
    }
    0 !== g.length && a.push({
        event: b,
        listeners: g
    });
}
var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
function zf(a) {
    return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
}
function Af(a, b, c) {
    b = zf(b);
    if (zf(a) !== b && c) throw Error(p(425));
}
function Bf() {}
var Cf = null, Df = null;
function Ef(a, b) {
    return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
}
var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
    return Hf.resolve(null).then(a).catch(If);
} : Ff;
function If(a) {
    setTimeout(function() {
        throw a;
    });
}
function Kf(a, b) {
    var c = b, d = 0;
    do {
        var e = c.nextSibling;
        a.removeChild(c);
        if (e && 8 === e.nodeType) {
            if (c = e.data, "/$" === c) {
                if (0 === d) {
                    a.removeChild(e);
                    bd(b);
                    return;
                }
                d--;
            } else "$" !== c && "$?" !== c && "$!" !== c || d++;
        }
        c = e;
    }while (c)
    bd(b);
}
function Lf(a) {
    for(; null != a; a = a.nextSibling){
        var b = a.nodeType;
        if (1 === b || 3 === b) break;
        if (8 === b) {
            b = a.data;
            if ("$" === b || "$!" === b || "$?" === b) break;
            if ("/$" === b) return null;
        }
    }
    return a;
}
function Mf(a) {
    a = a.previousSibling;
    for(var b = 0; a;){
        if (8 === a.nodeType) {
            var c = a.data;
            if ("$" === c || "$!" === c || "$?" === c) {
                if (0 === b) return a;
                b--;
            } else "/$" === c && b++;
        }
        a = a.previousSibling;
    }
    return null;
}
var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
function Wc(a) {
    var b = a[Of];
    if (b) return b;
    for(var c = a.parentNode; c;){
        if (b = c[uf] || c[Of]) {
            c = b.alternate;
            if (null !== b.child || null !== c && null !== c.child) for(a = Mf(a); null !== a;){
                if (c = a[Of]) return c;
                a = Mf(a);
            }
            return b;
        }
        a = c;
        c = a.parentNode;
    }
    return null;
}
function Cb(a) {
    a = a[Of] || a[uf];
    return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
}
function ue(a) {
    if (5 === a.tag || 6 === a.tag) return a.stateNode;
    throw Error(p(33));
}
function Db(a) {
    return a[Pf] || null;
}
var Sf = [], Tf = -1;
function Uf(a) {
    return {
        current: a
    };
}
function E(a) {
    0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G(a, b) {
    Tf++;
    Sf[Tf] = a.current;
    a.current = b;
}
var Vf = {}, H = Uf(Vf), Wf = Uf(!1), Xf = Vf;
function Yf(a, b) {
    var c = a.type.contextTypes;
    if (!c) return Vf;
    var d = a.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
    var e = {}, f;
    for(f in c)e[f] = b[f];
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
    return e;
}
function Zf(a) {
    a = a.childContextTypes;
    return null !== a && void 0 !== a;
}
function $f() {
    E(Wf);
    E(H);
}
function ag(a, b, c) {
    if (H.current !== Vf) throw Error(p(168));
    G(H, b);
    G(Wf, c);
}
function bg(a, b, c) {
    var d = a.stateNode;
    b = b.childContextTypes;
    if ("function" !== typeof d.getChildContext) return c;
    d = d.getChildContext();
    for(var e in d)if (!(e in b)) throw Error(p(108, Ra(a) || "Unknown", e));
    return A({}, c, d);
}
function cg(a) {
    a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
    Xf = H.current;
    G(H, a);
    G(Wf, Wf.current);
    return !0;
}
function dg(a, b, c) {
    var d = a.stateNode;
    if (!d) throw Error(p(169));
    c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
    G(Wf, c);
}
var eg = null, fg = !1, gg = !1;
function hg(a) {
    null === eg ? eg = [
        a
    ] : eg.push(a);
}
function ig(a) {
    fg = !0;
    hg(a);
}
function jg() {
    if (!gg && null !== eg) {
        gg = !0;
        var a = 0, b = C;
        try {
            var c = eg;
            for(C = 1; a < c.length; a++){
                var d = c[a];
                do d = d(!0);
                while (null !== d)
            }
            eg = null;
            fg = !1;
        } catch (e) {
            throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
        } finally{
            C = b, gg = !1;
        }
    }
    return null;
}
var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
function tg(a, b) {
    kg[lg++] = ng;
    kg[lg++] = mg;
    mg = a;
    ng = b;
}
function ug(a, b, c) {
    og[pg++] = rg;
    og[pg++] = sg;
    og[pg++] = qg;
    qg = a;
    var d = rg;
    a = sg;
    var e = 32 - oc(d) - 1;
    d &= ~(1 << e);
    c += 1;
    var f = 32 - oc(b) + e;
    if (30 < f) {
        var g = e - e % 5;
        f = (d & (1 << g) - 1).toString(32);
        d >>= g;
        e -= g;
        rg = 1 << 32 - oc(b) + e | c << e | d;
        sg = f + a;
    } else rg = 1 << f | c << e | d, sg = a;
}
function vg(a) {
    null !== a.return && (tg(a, 1), ug(a, 1, 0));
}
function wg(a) {
    for(; a === mg;)mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
    for(; a === qg;)qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null, yg = null, I = !1, zg = null;
function Ag(a, b) {
    var c = Bg(5, null, null, 0);
    c.elementType = "DELETED";
    c.stateNode = b;
    c.return = a;
    b = a.deletions;
    null === b ? (a.deletions = [
        c
    ], a.flags |= 16) : b.push(c);
}
function Cg(a, b) {
    switch(a.tag){
        case 5:
            var c = a.type;
            b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
            return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), !0) : !1;
        case 6:
            return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, !0) : !1;
        case 13:
            return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? {
                id: rg,
                overflow: sg
            } : null, a.memoizedState = {
                dehydrated: b,
                treeContext: c,
                retryLane: 1073741824
            }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, !0) : !1;
        default:
            return !1;
    }
}
function Dg(a) {
    return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
}
function Eg(a) {
    if (I) {
        var b = yg;
        if (b) {
            var c = b;
            if (!Cg(a, b)) {
                if (Dg(a)) throw Error(p(418));
                b = Lf(c.nextSibling);
                var d = xg;
                b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = !1, xg = a);
            }
        } else {
            if (Dg(a)) throw Error(p(418));
            a.flags = a.flags & -4097 | 2;
            I = !1;
            xg = a;
        }
    }
}
function Fg(a) {
    for(a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;)a = a.return;
    xg = a;
}
function Gg(a) {
    if (a !== xg) return !1;
    if (!I) return Fg(a), I = !0, !1;
    var b;
    (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
    if (b && (b = yg)) {
        if (Dg(a)) throw Hg(), Error(p(418));
        for(; b;)Ag(a, b), b = Lf(b.nextSibling);
    }
    Fg(a);
    if (13 === a.tag) {
        a = a.memoizedState;
        a = null !== a ? a.dehydrated : null;
        if (!a) throw Error(p(317));
        a: {
            a = a.nextSibling;
            for(b = 0; a;){
                if (8 === a.nodeType) {
                    var c = a.data;
                    if ("/$" === c) {
                        if (0 === b) {
                            yg = Lf(a.nextSibling);
                            break a;
                        }
                        b--;
                    } else "$" !== c && "$!" !== c && "$?" !== c || b++;
                }
                a = a.nextSibling;
            }
            yg = null;
        }
    } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
    return !0;
}
function Hg() {
    for(var a = yg; a;)a = Lf(a.nextSibling);
}
function Ig() {
    yg = xg = null;
    I = !1;
}
function Jg(a) {
    null === zg ? zg = [
        a
    ] : zg.push(a);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(a, b) {
    if (a && a.defaultProps) {
        b = A({}, b);
        a = a.defaultProps;
        for(var c in a)void 0 === b[c] && (b[c] = a[c]);
        return b;
    }
    return b;
}
var Mg = Uf(null), Ng = null, Og = null, Pg = null;
function Qg() {
    Pg = Og = Ng = null;
}
function Rg(a) {
    var b = Mg.current;
    E(Mg);
    a._currentValue = b;
}
function Sg(a, b, c) {
    for(; null !== a;){
        var d = a.alternate;
        (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
        if (a === c) break;
        a = a.return;
    }
}
function Tg(a, b) {
    Ng = a;
    Pg = Og = null;
    a = a.dependencies;
    null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (Ug = !0), a.firstContext = null);
}
function Vg(a) {
    var b = a._currentValue;
    if (Pg !== a) {
        if (a = {
            context: a,
            memoizedValue: b,
            next: null
        }, null === Og) {
            if (null === Ng) throw Error(p(308));
            Og = a;
            Ng.dependencies = {
                lanes: 0,
                firstContext: a
            };
        } else Og = Og.next = a;
    }
    return b;
}
var Wg = null;
function Xg(a) {
    null === Wg ? Wg = [
        a
    ] : Wg.push(a);
}
function Yg(a, b, c, d) {
    var e = b.interleaved;
    null === e ? (c.next = c, Xg(b)) : (c.next = e.next, e.next = c);
    b.interleaved = c;
    return Zg(a, d);
}
function Zg(a, b) {
    a.lanes |= b;
    var c = a.alternate;
    null !== c && (c.lanes |= b);
    c = a;
    for(a = a.return; null !== a;)a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
    return 3 === c.tag ? c.stateNode : null;
}
var $g = !1;
function ah(a) {
    a.updateQueue = {
        baseState: a.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    };
}
function bh(a, b) {
    a = a.updateQueue;
    b.updateQueue === a && (b.updateQueue = {
        baseState: a.baseState,
        firstBaseUpdate: a.firstBaseUpdate,
        lastBaseUpdate: a.lastBaseUpdate,
        shared: a.shared,
        effects: a.effects
    });
}
function ch(a, b) {
    return {
        eventTime: a,
        lane: b,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    };
}
function dh(a, b, c) {
    var d = a.updateQueue;
    if (null === d) return null;
    d = d.shared;
    if (0 !== (K & 2)) {
        var e = d.pending;
        null === e ? b.next = b : (b.next = e.next, e.next = b);
        d.pending = b;
        return Zg(a, c);
    }
    e = d.interleaved;
    null === e ? (b.next = b, Xg(d)) : (b.next = e.next, e.next = b);
    d.interleaved = b;
    return Zg(a, c);
}
function eh(a, b, c) {
    b = b.updateQueue;
    if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
        var d = b.lanes;
        d &= a.pendingLanes;
        c |= d;
        b.lanes = c;
        Cc(a, c);
    }
}
function fh(a, b) {
    var c = a.updateQueue, d = a.alternate;
    if (null !== d && (d = d.updateQueue, c === d)) {
        var e = null, f = null;
        c = c.firstBaseUpdate;
        if (null !== c) {
            do {
                var g = {
                    eventTime: c.eventTime,
                    lane: c.lane,
                    tag: c.tag,
                    payload: c.payload,
                    callback: c.callback,
                    next: null
                };
                null === f ? e = f = g : f = f.next = g;
                c = c.next;
            }while (null !== c)
            null === f ? e = f = b : f = f.next = b;
        } else e = f = b;
        c = {
            baseState: d.baseState,
            firstBaseUpdate: e,
            lastBaseUpdate: f,
            shared: d.shared,
            effects: d.effects
        };
        a.updateQueue = c;
        return;
    }
    a = c.lastBaseUpdate;
    null === a ? c.firstBaseUpdate = b : a.next = b;
    c.lastBaseUpdate = b;
}
function gh(a, b, c, d) {
    var e = a.updateQueue;
    $g = !1;
    var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
    if (null !== h) {
        e.shared.pending = null;
        var k = h, l = k.next;
        k.next = null;
        null === g ? f = l : g.next = l;
        g = k;
        var m = a.alternate;
        null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, m.lastBaseUpdate = k));
    }
    if (null !== f) {
        var q = e.baseState;
        g = 0;
        m = l = k = null;
        h = f;
        do {
            var r = h.lane, y = h.eventTime;
            if ((d & r) === r) {
                null !== m && (m = m.next = {
                    eventTime: y,
                    lane: 0,
                    tag: h.tag,
                    payload: h.payload,
                    callback: h.callback,
                    next: null
                });
                a: {
                    var n = a, t = h;
                    r = b;
                    y = c;
                    switch(t.tag){
                        case 1:
                            n = t.payload;
                            if ("function" === typeof n) {
                                q = n.call(y, q, r);
                                break a;
                            }
                            q = n;
                            break a;
                        case 3:
                            n.flags = n.flags & -65537 | 128;
                        case 0:
                            n = t.payload;
                            r = "function" === typeof n ? n.call(y, q, r) : n;
                            if (null === r || void 0 === r) break a;
                            q = A({}, q, r);
                            break a;
                        case 2:
                            $g = !0;
                    }
                }
                null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [
                    h
                ] : r.push(h));
            } else y = {
                eventTime: y,
                lane: r,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null
            }, null === m ? (l = m = y, k = q) : m = m.next = y, g |= r;
            h = h.next;
            if (null === h) {
                if (h = e.shared.pending, null === h) break;
                else r = h, h = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
            }
        }while (1)
        null === m && (k = q);
        e.baseState = k;
        e.firstBaseUpdate = l;
        e.lastBaseUpdate = m;
        b = e.shared.interleaved;
        if (null !== b) {
            e = b;
            do g |= e.lane, e = e.next;
            while (e !== b)
        } else null === f && (e.shared.lanes = 0);
        hh |= g;
        a.lanes = g;
        a.memoizedState = q;
    }
}
function ih(a, b, c) {
    a = b.effects;
    b.effects = null;
    if (null !== a) for(b = 0; b < a.length; b++){
        var d = a[b], e = d.callback;
        if (null !== e) {
            d.callback = null;
            d = c;
            if ("function" !== typeof e) throw Error(p(191, e));
            e.call(d);
        }
    }
}
var jh = (new aa.Component).refs;
function kh(a, b, c, d) {
    b = a.memoizedState;
    c = c(d, b);
    c = null === c || void 0 === c ? b : A({}, b, c);
    a.memoizedState = c;
    0 === a.lanes && (a.updateQueue.baseState = c);
}
var nh = {
    isMounted: function(a) {
        return (a = a._reactInternals) ? Vb(a) === a : !1;
    },
    enqueueSetState: function(a, b, c) {
        a = a._reactInternals;
        var d = L(), e = lh(a), f = ch(d, e);
        f.payload = b;
        void 0 !== c && null !== c && (f.callback = c);
        b = dh(a, f, e);
        null !== b && (mh(b, a, e, d), eh(b, a, e));
    },
    enqueueReplaceState: function(a, b, c) {
        a = a._reactInternals;
        var d = L(), e = lh(a), f = ch(d, e);
        f.tag = 1;
        f.payload = b;
        void 0 !== c && null !== c && (f.callback = c);
        b = dh(a, f, e);
        null !== b && (mh(b, a, e, d), eh(b, a, e));
    },
    enqueueForceUpdate: function(a, b) {
        a = a._reactInternals;
        var c = L(), d = lh(a), e = ch(c, d);
        e.tag = 2;
        void 0 !== b && null !== b && (e.callback = b);
        b = dh(a, e, d);
        null !== b && (mh(b, a, d, c), eh(b, a, d));
    }
};
function oh(a, b, c, d, e, f, g) {
    a = a.stateNode;
    return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f) : !0;
}
function ph(a, b, c) {
    var d = !1, e = Vf;
    var f = b.contextType;
    "object" === typeof f && null !== f ? f = Vg(f) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
    b = new b(c, f);
    a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
    b.updater = nh;
    a.stateNode = b;
    b._reactInternals = a;
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
    return b;
}
function qh(a, b, c, d) {
    a = b.state;
    "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
    "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
    b.state !== a && nh.enqueueReplaceState(b, b.state, null);
}
function rh(a, b, c, d) {
    var e = a.stateNode;
    e.props = c;
    e.state = a.memoizedState;
    e.refs = jh;
    ah(a);
    var f = b.contextType;
    "object" === typeof f && null !== f ? e.context = Vg(f) : (f = Zf(b) ? Xf : H.current, e.context = Yf(a, f));
    e.state = a.memoizedState;
    f = b.getDerivedStateFromProps;
    "function" === typeof f && (kh(a, b, f, c), e.state = a.memoizedState);
    "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && nh.enqueueReplaceState(e, e.state, null), gh(a, c, e, d), e.state = a.memoizedState);
    "function" === typeof e.componentDidMount && (a.flags |= 4194308);
}
function sh(a, b, c) {
    a = c.ref;
    if (null !== a && "function" !== typeof a && "object" !== typeof a) {
        if (c._owner) {
            c = c._owner;
            if (c) {
                if (1 !== c.tag) throw Error(p(309));
                var d = c.stateNode;
            }
            if (!d) throw Error(p(147, a));
            var e = d, f = "" + a;
            if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
            b = function(a) {
                var b = e.refs;
                b === jh && (b = e.refs = {});
                null === a ? delete b[f] : b[f] = a;
            };
            b._stringRef = f;
            return b;
        }
        if ("string" !== typeof a) throw Error(p(284));
        if (!c._owner) throw Error(p(290, a));
    }
    return a;
}
function th(a, b) {
    a = Object.prototype.toString.call(b);
    throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
}
function uh(a) {
    var b = a._init;
    return b(a._payload);
}
function vh(a) {
    function b(b, c) {
        if (a) {
            var d = b.deletions;
            null === d ? (b.deletions = [
                c
            ], b.flags |= 16) : d.push(c);
        }
    }
    function c(c, d) {
        if (!a) return null;
        for(; null !== d;)b(c, d), d = d.sibling;
        return null;
    }
    function d(a, b) {
        for(a = new Map; null !== b;)null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
        return a;
    }
    function e(a, b) {
        a = wh(a, b);
        a.index = 0;
        a.sibling = null;
        return a;
    }
    function f(b, c, d) {
        b.index = d;
        if (!a) return b.flags |= 1048576, c;
        d = b.alternate;
        if (null !== d) return d = d.index, d < c ? (b.flags |= 2, c) : d;
        b.flags |= 2;
        return c;
    }
    function g(b) {
        a && null === b.alternate && (b.flags |= 2);
        return b;
    }
    function h(a, b, c, d) {
        if (null === b || 6 !== b.tag) return b = xh(c, a.mode, d), b.return = a, b;
        b = e(b, c);
        b.return = a;
        return b;
    }
    function k(a, b, c, d) {
        var f = c.type;
        if (f === ya) return m(a, b, c.props.children, d, c.key);
        if (null !== b && (b.elementType === f || "object" === typeof f && null !== f && f.$$typeof === Ha && uh(f) === b.type)) return d = e(b, c.props), d.ref = sh(a, b, c), d.return = a, d;
        d = yh(c.type, c.key, c.props, null, a.mode, d);
        d.ref = sh(a, b, c);
        d.return = a;
        return d;
    }
    function l(a, b, c, d) {
        if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = zh(c, a.mode, d), b.return = a, b;
        b = e(b, c.children || []);
        b.return = a;
        return b;
    }
    function m(a, b, c, d, f) {
        if (null === b || 7 !== b.tag) return b = Ah(c, a.mode, d, f), b.return = a, b;
        b = e(b, c);
        b.return = a;
        return b;
    }
    function q(a, b, c) {
        if ("string" === typeof b && "" !== b || "number" === typeof b) return b = xh("" + b, a.mode, c), b.return = a, b;
        if ("object" === typeof b && null !== b) {
            switch(b.$$typeof){
                case va:
                    return c = yh(b.type, b.key, b.props, null, a.mode, c), c.ref = sh(a, null, b), c.return = a, c;
                case wa:
                    return b = zh(b, a.mode, c), b.return = a, b;
                case Ha:
                    var d = b._init;
                    return q(a, d(b._payload), c);
            }
            if (eb(b) || Ka(b)) return b = Ah(b, a.mode, c, null), b.return = a, b;
            th(a, b);
        }
        return null;
    }
    function r(a, b, c, d) {
        var e = null !== b ? b.key : null;
        if ("string" === typeof c && "" !== c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);
        if ("object" === typeof c && null !== c) {
            switch(c.$$typeof){
                case va:
                    return c.key === e ? k(a, b, c, d) : null;
                case wa:
                    return c.key === e ? l(a, b, c, d) : null;
                case Ha:
                    return e = c._init, r(a, b, e(c._payload), d);
            }
            if (eb(c) || Ka(c)) return null !== e ? null : m(a, b, c, d, null);
            th(a, c);
        }
        return null;
    }
    function y(a, b, c, d, e) {
        if ("string" === typeof d && "" !== d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);
        if ("object" === typeof d && null !== d) {
            switch(d.$$typeof){
                case va:
                    return a = a.get(null === d.key ? c : d.key) || null, k(b, a, d, e);
                case wa:
                    return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);
                case Ha:
                    var f = d._init;
                    return y(a, b, c, f(d._payload), e);
            }
            if (eb(d) || Ka(d)) return a = a.get(c) || null, m(b, a, d, e, null);
            th(b, d);
        }
        return null;
    }
    function n(e, g, h, k) {
        for(var l = null, m = null, u = g, w = g = 0, x = null; null !== u && w < h.length; w++){
            u.index > w ? (x = u, u = null) : x = u.sibling;
            var n = r(e, u, h[w], k);
            if (null === n) {
                null === u && (u = x);
                break;
            }
            a && u && null === n.alternate && b(e, u);
            g = f(n, g, w);
            null === m ? l = n : m.sibling = n;
            m = n;
            u = x;
        }
        if (w === h.length) return c(e, u), I && tg(e, w), l;
        if (null === u) {
            for(; w < h.length; w++)u = q(e, h[w], k), null !== u && (g = f(u, g, w), null === m ? l = u : m.sibling = u, m = u);
            I && tg(e, w);
            return l;
        }
        for(u = d(e, u); w < h.length; w++)x = y(u, e, w, h[w], k), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w : x.key), g = f(x, g, w), null === m ? l = x : m.sibling = x, m = x);
        a && u.forEach(function(a) {
            return b(e, a);
        });
        I && tg(e, w);
        return l;
    }
    function t(e, g, h, k) {
        var l = Ka(h);
        if ("function" !== typeof l) throw Error(p(150));
        h = l.call(h);
        if (null == h) throw Error(p(151));
        for(var u = l = null, m = g, w = g = 0, x = null, n = h.next(); null !== m && !n.done; w++, n = h.next()){
            m.index > w ? (x = m, m = null) : x = m.sibling;
            var t = r(e, m, n.value, k);
            if (null === t) {
                null === m && (m = x);
                break;
            }
            a && m && null === t.alternate && b(e, m);
            g = f(t, g, w);
            null === u ? l = t : u.sibling = t;
            u = t;
            m = x;
        }
        if (n.done) return c(e, m), I && tg(e, w), l;
        if (null === m) {
            for(; !n.done; w++, n = h.next())n = q(e, n.value, k), null !== n && (g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
            I && tg(e, w);
            return l;
        }
        for(m = d(e, m); !n.done; w++, n = h.next())n = y(m, e, w, n.value, k), null !== n && (a && null !== n.alternate && m.delete(null === n.key ? w : n.key), g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
        a && m.forEach(function(a) {
            return b(e, a);
        });
        I && tg(e, w);
        return l;
    }
    function J(a, d, f, h) {
        "object" === typeof f && null !== f && f.type === ya && null === f.key && (f = f.props.children);
        if ("object" === typeof f && null !== f) {
            switch(f.$$typeof){
                case va:
                    a: {
                        for(var k = f.key, l = d; null !== l;){
                            if (l.key === k) {
                                k = f.type;
                                if (k === ya) {
                                    if (7 === l.tag) {
                                        c(a, l.sibling);
                                        d = e(l, f.props.children);
                                        d.return = a;
                                        a = d;
                                        break a;
                                    }
                                } else if (l.elementType === k || "object" === typeof k && null !== k && k.$$typeof === Ha && uh(k) === l.type) {
                                    c(a, l.sibling);
                                    d = e(l, f.props);
                                    d.ref = sh(a, l, f);
                                    d.return = a;
                                    a = d;
                                    break a;
                                }
                                c(a, l);
                                break;
                            } else b(a, l);
                            l = l.sibling;
                        }
                        f.type === ya ? (d = Ah(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = yh(f.type, f.key, f.props, null, a.mode, h), h.ref = sh(a, d, f), h.return = a, a = h);
                    }
                    return g(a);
                case wa:
                    a: {
                        for(l = f.key; null !== d;){
                            if (d.key === l) {
                                if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                                    c(a, d.sibling);
                                    d = e(d, f.children || []);
                                    d.return = a;
                                    a = d;
                                    break a;
                                } else {
                                    c(a, d);
                                    break;
                                }
                            } else b(a, d);
                            d = d.sibling;
                        }
                        d = zh(f, a.mode, h);
                        d.return = a;
                        a = d;
                    }
                    return g(a);
                case Ha:
                    return l = f._init, J(a, d, l(f._payload), h);
            }
            if (eb(f)) return n(a, d, f, h);
            if (Ka(f)) return t(a, d, f, h);
            th(a, f);
        }
        return "string" === typeof f && "" !== f || "number" === typeof f ? (f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = xh(f, a.mode, h), d.return = a, a = d), g(a)) : c(a, d);
    }
    return J;
}
var Bh = vh(!0), Ch = vh(!1), Dh = {}, Eh = Uf(Dh), Fh = Uf(Dh), Gh = Uf(Dh);
function Hh(a) {
    if (a === Dh) throw Error(p(174));
    return a;
}
function Ih(a, b) {
    G(Gh, b);
    G(Fh, a);
    G(Eh, Dh);
    a = b.nodeType;
    switch(a){
        case 9:
        case 11:
            b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
            break;
        default:
            a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
    }
    E(Eh);
    G(Eh, b);
}
function Jh() {
    E(Eh);
    E(Fh);
    E(Gh);
}
function Kh(a) {
    Hh(Gh.current);
    var b = Hh(Eh.current);
    var c = lb(b, a.type);
    b !== c && (G(Fh, a), G(Eh, c));
}
function Lh(a) {
    Fh.current === a && (E(Eh), E(Fh));
}
var M = Uf(0);
function Mh(a) {
    for(var b = a; null !== b;){
        if (13 === b.tag) {
            var c = b.memoizedState;
            if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
        } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
            if (0 !== (b.flags & 128)) return b;
        } else if (null !== b.child) {
            b.child.return = b;
            b = b.child;
            continue;
        }
        if (b === a) break;
        for(; null === b.sibling;){
            if (null === b.return || b.return === a) return null;
            b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
    }
    return null;
}
var Nh = [];
function Oh() {
    for(var a = 0; a < Nh.length; a++)Nh[a]._workInProgressVersionPrimary = null;
    Nh.length = 0;
}
var Ph = ua.ReactCurrentDispatcher, Qh = ua.ReactCurrentBatchConfig, Rh = 0, N = null, O = null, P = null, Sh = !1, Th = !1, Uh = 0, Vh = 0;
function Q() {
    throw Error(p(321));
}
function Wh(a, b) {
    if (null === b) return !1;
    for(var c = 0; c < b.length && c < a.length; c++)if (!He(a[c], b[c])) return !1;
    return !0;
}
function Xh(a, b, c, d, e, f) {
    Rh = f;
    N = b;
    b.memoizedState = null;
    b.updateQueue = null;
    b.lanes = 0;
    Ph.current = null === a || null === a.memoizedState ? Yh : Zh;
    a = c(d, e);
    if (Th) {
        f = 0;
        do {
            Th = !1;
            Uh = 0;
            if (25 <= f) throw Error(p(301));
            f += 1;
            P = O = null;
            b.updateQueue = null;
            Ph.current = $h;
            a = c(d, e);
        }while (Th)
    }
    Ph.current = ai;
    b = null !== O && null !== O.next;
    Rh = 0;
    P = O = N = null;
    Sh = !1;
    if (b) throw Error(p(300));
    return a;
}
function bi() {
    var a = 0 !== Uh;
    Uh = 0;
    return a;
}
function ci() {
    var a = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    null === P ? N.memoizedState = P = a : P = P.next = a;
    return P;
}
function di() {
    if (null === O) {
        var a = N.alternate;
        a = null !== a ? a.memoizedState : null;
    } else a = O.next;
    var b = null === P ? N.memoizedState : P.next;
    if (null !== b) P = b, O = a;
    else {
        if (null === a) throw Error(p(310));
        O = a;
        a = {
            memoizedState: O.memoizedState,
            baseState: O.baseState,
            baseQueue: O.baseQueue,
            queue: O.queue,
            next: null
        };
        null === P ? N.memoizedState = P = a : P = P.next = a;
    }
    return P;
}
function ei(a, b) {
    return "function" === typeof b ? b(a) : b;
}
function fi(a) {
    var b = di(), c = b.queue;
    if (null === c) throw Error(p(311));
    c.lastRenderedReducer = a;
    var d = O, e = d.baseQueue, f = c.pending;
    if (null !== f) {
        if (null !== e) {
            var g = e.next;
            e.next = f.next;
            f.next = g;
        }
        d.baseQueue = e = f;
        c.pending = null;
    }
    if (null !== e) {
        f = e.next;
        d = d.baseState;
        var h = g = null, k = null, l = f;
        do {
            var m = l.lane;
            if ((Rh & m) === m) null !== k && (k = k.next = {
                lane: 0,
                action: l.action,
                hasEagerState: l.hasEagerState,
                eagerState: l.eagerState,
                next: null
            }), d = l.hasEagerState ? l.eagerState : a(d, l.action);
            else {
                var q = {
                    lane: m,
                    action: l.action,
                    hasEagerState: l.hasEagerState,
                    eagerState: l.eagerState,
                    next: null
                };
                null === k ? (h = k = q, g = d) : k = k.next = q;
                N.lanes |= m;
                hh |= m;
            }
            l = l.next;
        }while (null !== l && l !== f)
        null === k ? g = d : k.next = h;
        He(d, b.memoizedState) || (Ug = !0);
        b.memoizedState = d;
        b.baseState = g;
        b.baseQueue = k;
        c.lastRenderedState = d;
    }
    a = c.interleaved;
    if (null !== a) {
        e = a;
        do f = e.lane, N.lanes |= f, hh |= f, e = e.next;
        while (e !== a)
    } else null === e && (c.lanes = 0);
    return [
        b.memoizedState,
        c.dispatch
    ];
}
function gi(a) {
    var b = di(), c = b.queue;
    if (null === c) throw Error(p(311));
    c.lastRenderedReducer = a;
    var d = c.dispatch, e = c.pending, f = b.memoizedState;
    if (null !== e) {
        c.pending = null;
        var g = e = e.next;
        do f = a(f, g.action), g = g.next;
        while (g !== e)
        He(f, b.memoizedState) || (Ug = !0);
        b.memoizedState = f;
        null === b.baseQueue && (b.baseState = f);
        c.lastRenderedState = f;
    }
    return [
        f,
        d
    ];
}
function hi() {}
function ii(a, b) {
    var c = N, d = di(), e = b(), f = !He(d.memoizedState, e);
    f && (d.memoizedState = e, Ug = !0);
    d = d.queue;
    ji(ki.bind(null, c, d, a), [
        a
    ]);
    if (d.getSnapshot !== b || f || null !== P && P.memoizedState.tag & 1) {
        c.flags |= 2048;
        li(9, mi.bind(null, c, d, e, b), void 0, null);
        if (null === R) throw Error(p(349));
        0 !== (Rh & 30) || ni(c, b, e);
    }
    return e;
}
function ni(a, b, c) {
    a.flags |= 16384;
    a = {
        getSnapshot: b,
        value: c
    };
    b = N.updateQueue;
    null === b ? (b = {
        lastEffect: null,
        stores: null
    }, N.updateQueue = b, b.stores = [
        a
    ]) : (c = b.stores, null === c ? b.stores = [
        a
    ] : c.push(a));
}
function mi(a, b, c, d) {
    b.value = c;
    b.getSnapshot = d;
    oi(b) && pi(a);
}
function ki(a, b, c) {
    return c(function() {
        oi(b) && pi(a);
    });
}
function oi(a) {
    var b = a.getSnapshot;
    a = a.value;
    try {
        var c = b();
        return !He(a, c);
    } catch (d) {
        return !0;
    }
}
function pi(a) {
    var b = Zg(a, 1);
    null !== b && mh(b, a, 1, -1);
}
function qi(a) {
    var b = ci();
    "function" === typeof a && (a = a());
    b.memoizedState = b.baseState = a;
    a = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ei,
        lastRenderedState: a
    };
    b.queue = a;
    a = a.dispatch = ri.bind(null, N, a);
    return [
        b.memoizedState,
        a
    ];
}
function li(a, b, c, d) {
    a = {
        tag: a,
        create: b,
        destroy: c,
        deps: d,
        next: null
    };
    b = N.updateQueue;
    null === b ? (b = {
        lastEffect: null,
        stores: null
    }, N.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
    return a;
}
function si() {
    return di().memoizedState;
}
function ti(a, b, c, d) {
    var e = ci();
    N.flags |= a;
    e.memoizedState = li(1 | b, c, void 0, void 0 === d ? null : d);
}
function ui(a, b, c, d) {
    var e = di();
    d = void 0 === d ? null : d;
    var f = void 0;
    if (null !== O) {
        var g = O.memoizedState;
        f = g.destroy;
        if (null !== d && Wh(d, g.deps)) {
            e.memoizedState = li(b, c, f, d);
            return;
        }
    }
    N.flags |= a;
    e.memoizedState = li(1 | b, c, f, d);
}
function vi(a, b) {
    return ti(8390656, 8, a, b);
}
function ji(a, b) {
    return ui(2048, 8, a, b);
}
function wi(a, b) {
    return ui(4, 2, a, b);
}
function xi(a, b) {
    return ui(4, 4, a, b);
}
function yi(a, b) {
    if ("function" === typeof b) return a = a(), b(a), function() {
        b(null);
    };
    if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
        b.current = null;
    };
}
function zi(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([
        a
    ]) : null;
    return ui(4, 4, yi.bind(null, b, a), c);
}
function Ai() {}
function Bi(a, b) {
    var c = di();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && Wh(b, d[1])) return d[0];
    c.memoizedState = [
        a,
        b
    ];
    return a;
}
function Ci(a, b) {
    var c = di();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && Wh(b, d[1])) return d[0];
    a = a();
    c.memoizedState = [
        a,
        b
    ];
    return a;
}
function Di(a, b, c) {
    if (0 === (Rh & 21)) return a.baseState && (a.baseState = !1, Ug = !0), a.memoizedState = c;
    He(c, b) || (c = yc(), N.lanes |= c, hh |= c, a.baseState = !0);
    return b;
}
function Ei(a, b) {
    var c = C;
    C = 0 !== c && 4 > c ? c : 4;
    a(!0);
    var d = Qh.transition;
    Qh.transition = {};
    try {
        a(!1), b();
    } finally{
        C = c, Qh.transition = d;
    }
}
function Fi() {
    return di().memoizedState;
}
function Gi(a, b, c) {
    var d = lh(a);
    c = {
        lane: d,
        action: c,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Hi(a)) Ii(b, c);
    else if (c = Yg(a, b, c, d), null !== c) {
        var e = L();
        mh(c, a, d, e);
        Ji(c, b, d);
    }
}
function ri(a, b, c) {
    var d = lh(a), e = {
        lane: d,
        action: c,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Hi(a)) Ii(b, e);
    else {
        var f = a.alternate;
        if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
            var g = b.lastRenderedState, h = f(g, c);
            e.hasEagerState = !0;
            e.eagerState = h;
            if (He(h, g)) {
                var k = b.interleaved;
                null === k ? (e.next = e, Xg(b)) : (e.next = k.next, k.next = e);
                b.interleaved = e;
                return;
            }
        } catch (l) {} finally{}
        c = Yg(a, b, e, d);
        null !== c && (e = L(), mh(c, a, d, e), Ji(c, b, d));
    }
}
function Hi(a) {
    var b = a.alternate;
    return a === N || null !== b && b === N;
}
function Ii(a, b) {
    Th = Sh = !0;
    var c = a.pending;
    null === c ? b.next = b : (b.next = c.next, c.next = b);
    a.pending = b;
}
function Ji(a, b, c) {
    if (0 !== (c & 4194240)) {
        var d = b.lanes;
        d &= a.pendingLanes;
        c |= d;
        b.lanes = c;
        Cc(a, c);
    }
}
var ai = {
    readContext: Vg,
    useCallback: Q,
    useContext: Q,
    useEffect: Q,
    useImperativeHandle: Q,
    useInsertionEffect: Q,
    useLayoutEffect: Q,
    useMemo: Q,
    useReducer: Q,
    useRef: Q,
    useState: Q,
    useDebugValue: Q,
    useDeferredValue: Q,
    useTransition: Q,
    useMutableSource: Q,
    useSyncExternalStore: Q,
    useId: Q,
    unstable_isNewReconciler: !1
}, Yh = {
    readContext: Vg,
    useCallback: function(a, b) {
        ci().memoizedState = [
            a,
            void 0 === b ? null : b
        ];
        return a;
    },
    useContext: Vg,
    useEffect: vi,
    useImperativeHandle: function(a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([
            a
        ]) : null;
        return ti(4194308, 4, yi.bind(null, b, a), c);
    },
    useLayoutEffect: function(a, b) {
        return ti(4194308, 4, a, b);
    },
    useInsertionEffect: function(a, b) {
        return ti(4, 2, a, b);
    },
    useMemo: function(a, b) {
        var c = ci();
        b = void 0 === b ? null : b;
        a = a();
        c.memoizedState = [
            a,
            b
        ];
        return a;
    },
    useReducer: function(a, b, c) {
        var d = ci();
        b = void 0 !== c ? c(b) : b;
        d.memoizedState = d.baseState = b;
        a = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: a,
            lastRenderedState: b
        };
        d.queue = a;
        a = a.dispatch = Gi.bind(null, N, a);
        return [
            d.memoizedState,
            a
        ];
    },
    useRef: function(a) {
        var b = ci();
        a = {
            current: a
        };
        return b.memoizedState = a;
    },
    useState: qi,
    useDebugValue: Ai,
    useDeferredValue: function(a) {
        return ci().memoizedState = a;
    },
    useTransition: function() {
        var a = qi(!1), b = a[0];
        a = Ei.bind(null, a[1]);
        ci().memoizedState = a;
        return [
            b,
            a
        ];
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(a, b, c) {
        var d = N, e = ci();
        if (I) {
            if (void 0 === c) throw Error(p(407));
            c = c();
        } else {
            c = b();
            if (null === R) throw Error(p(349));
            0 !== (Rh & 30) || ni(d, b, c);
        }
        e.memoizedState = c;
        var f = {
            value: c,
            getSnapshot: b
        };
        e.queue = f;
        vi(ki.bind(null, d, f, a), [
            a
        ]);
        d.flags |= 2048;
        li(9, mi.bind(null, d, f, c, b), void 0, null);
        return c;
    },
    useId: function() {
        var a = ci(), b = R.identifierPrefix;
        if (I) {
            var c = sg;
            var d = rg;
            c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
            b = ":" + b + "R" + c;
            c = Uh++;
            0 < c && (b += "H" + c.toString(32));
            b += ":";
        } else c = Vh++, b = ":" + b + "r" + c.toString(32) + ":";
        return a.memoizedState = b;
    },
    unstable_isNewReconciler: !1
}, Zh = {
    readContext: Vg,
    useCallback: Bi,
    useContext: Vg,
    useEffect: ji,
    useImperativeHandle: zi,
    useInsertionEffect: wi,
    useLayoutEffect: xi,
    useMemo: Ci,
    useReducer: fi,
    useRef: si,
    useState: function() {
        return fi(ei);
    },
    useDebugValue: Ai,
    useDeferredValue: function(a) {
        var b = di();
        return Di(b, O.memoizedState, a);
    },
    useTransition: function() {
        var a = fi(ei)[0], b = di().memoizedState;
        return [
            a,
            b
        ];
    },
    useMutableSource: hi,
    useSyncExternalStore: ii,
    useId: Fi,
    unstable_isNewReconciler: !1
}, $h = {
    readContext: Vg,
    useCallback: Bi,
    useContext: Vg,
    useEffect: ji,
    useImperativeHandle: zi,
    useInsertionEffect: wi,
    useLayoutEffect: xi,
    useMemo: Ci,
    useReducer: gi,
    useRef: si,
    useState: function() {
        return gi(ei);
    },
    useDebugValue: Ai,
    useDeferredValue: function(a) {
        var b = di();
        return null === O ? b.memoizedState = a : Di(b, O.memoizedState, a);
    },
    useTransition: function() {
        var a = gi(ei)[0], b = di().memoizedState;
        return [
            a,
            b
        ];
    },
    useMutableSource: hi,
    useSyncExternalStore: ii,
    useId: Fi,
    unstable_isNewReconciler: !1
};
function Ki(a, b) {
    try {
        var c = "", d = b;
        do c += Pa(d), d = d.return;
        while (d)
        var e = c;
    } catch (f) {
        e = "\nError generating stack: " + f.message + "\n" + f.stack;
    }
    return {
        value: a,
        source: b,
        stack: e,
        digest: null
    };
}
function Li(a, b, c) {
    return {
        value: a,
        source: null,
        stack: null != c ? c : null,
        digest: null != b ? b : null
    };
}
function Mi(a, b) {
    try {
        console.error(b.value);
    } catch (c) {
        setTimeout(function() {
            throw c;
        });
    }
}
var Ni = "function" === typeof WeakMap ? WeakMap : Map;
function Oi(a, b, c) {
    c = ch(-1, c);
    c.tag = 3;
    c.payload = {
        element: null
    };
    var d = b.value;
    c.callback = function() {
        Pi || (Pi = !0, Qi = d);
        Mi(a, b);
    };
    return c;
}
function Ri(a, b, c) {
    c = ch(-1, c);
    c.tag = 3;
    var d = a.type.getDerivedStateFromError;
    if ("function" === typeof d) {
        var e = b.value;
        c.payload = function() {
            return d(e);
        };
        c.callback = function() {
            Mi(a, b);
        };
    }
    var f = a.stateNode;
    null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
        Mi(a, b);
        "function" !== typeof d && (null === Si ? Si = new Set([
            this
        ]) : Si.add(this));
        var c = b.stack;
        this.componentDidCatch(b.value, {
            componentStack: null !== c ? c : ""
        });
    });
    return c;
}
function Ti(a, b, c) {
    var d = a.pingCache;
    if (null === d) {
        d = a.pingCache = new Ni;
        var e = new Set;
        d.set(b, e);
    } else e = d.get(b), void 0 === e && (e = new Set, d.set(b, e));
    e.has(c) || (e.add(c), a = Ui.bind(null, a, b, c), b.then(a, a));
}
function Vi(a) {
    do {
        var b;
        if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? !0 : !1 : !0;
        if (b) return a;
        a = a.return;
    }while (null !== a)
    return null;
}
function Wi(a, b, c, d, e) {
    if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = ch(-1, 1), b.tag = 2, dh(c, b, 1))), c.lanes |= 1), a;
    a.flags |= 65536;
    a.lanes = e;
    return a;
}
var Xi = ua.ReactCurrentOwner, Ug = !1;
function Yi(a, b, c, d) {
    b.child = null === a ? Ch(b, null, c, d) : Bh(b, a.child, c, d);
}
function Zi(a, b, c, d, e) {
    c = c.render;
    var f = b.ref;
    Tg(b, e);
    d = Xh(a, b, c, d, f, e);
    c = bi();
    if (null !== a && !Ug) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
    I && c && vg(b);
    b.flags |= 1;
    Yi(a, b, d, e);
    return b.child;
}
function aj(a, b, c, d, e) {
    if (null === a) {
        var f = c.type;
        if ("function" === typeof f && !bj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, cj(a, b, f, d, e);
        a = yh(c.type, null, d, b, b.mode, e);
        a.ref = b.ref;
        a.return = b;
        return b.child = a;
    }
    f = a.child;
    if (0 === (a.lanes & e)) {
        var g = f.memoizedProps;
        c = c.compare;
        c = null !== c ? c : Ie;
        if (c(g, d) && a.ref === b.ref) return $i(a, b, e);
    }
    b.flags |= 1;
    a = wh(f, d);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
}
function cj(a, b, c, d, e) {
    if (null !== a) {
        var f = a.memoizedProps;
        if (Ie(f, d) && a.ref === b.ref) {
            if (Ug = !1, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (Ug = !0);
            else return b.lanes = a.lanes, $i(a, b, e);
        }
    }
    return dj(a, b, c, d, e);
}
function ej(a, b, c) {
    var d = b.pendingProps, e = d.children, f = null !== a ? a.memoizedState : null;
    if ("hidden" === d.mode) {
        if (0 === (b.mode & 1)) b.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, G(fj, gj), gj |= c;
        else {
            if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
                baseLanes: a,
                cachePool: null,
                transitions: null
            }, b.updateQueue = null, G(fj, gj), gj |= a, null;
            b.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            };
            d = null !== f ? f.baseLanes : c;
            G(fj, gj);
            gj |= d;
        }
    } else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G(fj, gj), gj |= d;
    Yi(a, b, e, c);
    return b.child;
}
function hj(a, b) {
    var c = b.ref;
    if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
}
function dj(a, b, c, d, e) {
    var f = Zf(c) ? Xf : H.current;
    f = Yf(b, f);
    Tg(b, e);
    c = Xh(a, b, c, d, f, e);
    d = bi();
    if (null !== a && !Ug) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
    I && d && vg(b);
    b.flags |= 1;
    Yi(a, b, c, e);
    return b.child;
}
function ij(a, b, c, d, e) {
    if (Zf(c)) {
        var f = !0;
        cg(b);
    } else f = !1;
    Tg(b, e);
    if (null === b.stateNode) jj(a, b), ph(b, c, d), rh(b, c, d, e), d = !0;
    else if (null === a) {
        var g = b.stateNode, h = b.memoizedProps;
        g.props = h;
        var k = g.context, l = c.contextType;
        "object" === typeof l && null !== l ? l = Vg(l) : (l = Zf(c) ? Xf : H.current, l = Yf(b, l));
        var m = c.getDerivedStateFromProps, q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
        q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && qh(b, g, d, l);
        $g = !1;
        var r = b.memoizedState;
        g.state = r;
        gh(b, d, g, e);
        k = b.memoizedState;
        h !== d || r !== k || Wf.current || $g ? ("function" === typeof m && (kh(b, c, m, d), k = b.memoizedState), (h = $g || oh(b, c, h, d, r, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = !1);
    } else {
        g = b.stateNode;
        bh(a, b);
        h = b.memoizedProps;
        l = b.type === b.elementType ? h : Lg(b.type, h);
        g.props = l;
        q = b.pendingProps;
        r = g.context;
        k = c.contextType;
        "object" === typeof k && null !== k ? k = Vg(k) : (k = Zf(c) ? Xf : H.current, k = Yf(b, k));
        var y = c.getDerivedStateFromProps;
        (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k) && qh(b, g, d, k);
        $g = !1;
        r = b.memoizedState;
        g.state = r;
        gh(b, d, g, e);
        var n = b.memoizedState;
        h !== q || r !== n || Wf.current || $g ? ("function" === typeof y && (kh(b, c, y, d), n = b.memoizedState), (l = $g || oh(b, c, l, d, r, n, k) || !1) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d = !1);
    }
    return kj(a, b, c, d, f, e);
}
function kj(a, b, c, d, e, f) {
    hj(a, b);
    var g = 0 !== (b.flags & 128);
    if (!d && !g) return e && dg(b, c, !1), $i(a, b, f);
    d = b.stateNode;
    Xi.current = b;
    var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
    b.flags |= 1;
    null !== a && g ? (b.child = Bh(b, a.child, null, f), b.child = Bh(b, null, h, f)) : Yi(a, b, h, f);
    b.memoizedState = d.state;
    e && dg(b, c, !0);
    return b.child;
}
function lj(a) {
    var b = a.stateNode;
    b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, !1);
    Ih(a, b.containerInfo);
}
function mj(a, b, c, d, e) {
    Ig();
    Jg(e);
    b.flags |= 256;
    Yi(a, b, c, d);
    return b.child;
}
var nj = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function oj(a) {
    return {
        baseLanes: a,
        cachePool: null,
        transitions: null
    };
}
function pj(a, b, c) {
    var d = b.pendingProps, e = M.current, f = !1, g = 0 !== (b.flags & 128), h;
    (h = g) || (h = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
    if (h) f = !0, b.flags &= -129;
    else if (null === a || null !== a.memoizedState) e |= 1;
    G(M, e & 1);
    if (null === a) {
        Eg(b);
        a = b.memoizedState;
        if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
        g = d.children;
        a = d.fallback;
        return f ? (d = b.mode, f = b.child, g = {
            mode: "hidden",
            children: g
        }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = qj(g, d, 0, null), a = Ah(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = oj(c), b.memoizedState = nj, a) : rj(b, g);
    }
    e = a.memoizedState;
    if (null !== e && (h = e.dehydrated, null !== h)) return sj(a, b, g, d, h, e, c);
    if (f) {
        f = d.fallback;
        g = b.mode;
        e = a.child;
        h = e.sibling;
        var k = {
            mode: "hidden",
            children: d.children
        };
        0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = wh(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
        null !== h ? f = wh(h, f) : (f = Ah(f, g, c, null), f.flags |= 2);
        f.return = b;
        d.return = b;
        d.sibling = f;
        b.child = d;
        d = f;
        f = b.child;
        g = a.child.memoizedState;
        g = null === g ? oj(c) : {
            baseLanes: g.baseLanes | c,
            cachePool: null,
            transitions: g.transitions
        };
        f.memoizedState = g;
        f.childLanes = a.childLanes & ~c;
        b.memoizedState = nj;
        return d;
    }
    f = a.child;
    a = f.sibling;
    d = wh(f, {
        mode: "visible",
        children: d.children
    });
    0 === (b.mode & 1) && (d.lanes = c);
    d.return = b;
    d.sibling = null;
    null !== a && (c = b.deletions, null === c ? (b.deletions = [
        a
    ], b.flags |= 16) : c.push(a));
    b.child = d;
    b.memoizedState = null;
    return d;
}
function rj(a, b) {
    b = qj({
        mode: "visible",
        children: b
    }, a.mode, 0, null);
    b.return = a;
    return a.child = b;
}
function tj(a, b, c, d) {
    null !== d && Jg(d);
    Bh(b, a.child, null, c);
    a = rj(b, b.pendingProps.children);
    a.flags |= 2;
    b.memoizedState = null;
    return a;
}
function sj(a, b, c, d, e, f, g) {
    if (c) {
        if (b.flags & 256) return b.flags &= -257, d = Li(Error(p(422))), tj(a, b, g, d);
        if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
        f = d.fallback;
        e = b.mode;
        d = qj({
            mode: "visible",
            children: d.children
        }, e, 0, null);
        f = Ah(f, e, g, null);
        f.flags |= 2;
        d.return = b;
        f.return = b;
        d.sibling = f;
        b.child = d;
        0 !== (b.mode & 1) && Bh(b, a.child, null, g);
        b.child.memoizedState = oj(g);
        b.memoizedState = nj;
        return f;
    }
    if (0 === (b.mode & 1)) return tj(a, b, g, null);
    if ("$!" === e.data) {
        d = e.nextSibling && e.nextSibling.dataset;
        if (d) var h = d.dgst;
        d = h;
        f = Error(p(419));
        d = Li(f, d, void 0);
        return tj(a, b, g, d);
    }
    h = 0 !== (g & a.childLanes);
    if (Ug || h) {
        d = R;
        if (null !== d) {
            switch(g & -g){
                case 4:
                    e = 2;
                    break;
                case 16:
                    e = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    e = 32;
                    break;
                case 536870912:
                    e = 268435456;
                    break;
                default:
                    e = 0;
            }
            e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
            0 !== e && e !== f.retryLane && (f.retryLane = e, Zg(a, e), mh(d, a, e, -1));
        }
        uj();
        d = Li(Error(p(421)));
        return tj(a, b, g, d);
    }
    if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = vj.bind(null, a), e._reactRetry = b, null;
    a = f.treeContext;
    yg = Lf(e.nextSibling);
    xg = b;
    I = !0;
    zg = null;
    null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
    b = rj(b, d.children);
    b.flags |= 4096;
    return b;
}
function wj(a, b, c) {
    a.lanes |= b;
    var d = a.alternate;
    null !== d && (d.lanes |= b);
    Sg(a.return, b, c);
}
function xj(a, b, c, d, e) {
    var f = a.memoizedState;
    null === f ? a.memoizedState = {
        isBackwards: b,
        rendering: null,
        renderingStartTime: 0,
        last: d,
        tail: c,
        tailMode: e
    } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
}
function yj(a, b, c) {
    var d = b.pendingProps, e = d.revealOrder, f = d.tail;
    Yi(a, b, d.children, c);
    d = M.current;
    if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
    else {
        if (null !== a && 0 !== (a.flags & 128)) a: for(a = b.child; null !== a;){
            if (13 === a.tag) null !== a.memoizedState && wj(a, c, b);
            else if (19 === a.tag) wj(a, c, b);
            else if (null !== a.child) {
                a.child.return = a;
                a = a.child;
                continue;
            }
            if (a === b) break a;
            for(; null === a.sibling;){
                if (null === a.return || a.return === b) break a;
                a = a.return;
            }
            a.sibling.return = a.return;
            a = a.sibling;
        }
        d &= 1;
    }
    G(M, d);
    if (0 === (b.mode & 1)) b.memoizedState = null;
    else switch(e){
        case "forwards":
            c = b.child;
            for(e = null; null !== c;)a = c.alternate, null !== a && null === Mh(a) && (e = c), c = c.sibling;
            c = e;
            null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
            xj(b, !1, e, c, f);
            break;
        case "backwards":
            c = null;
            e = b.child;
            for(b.child = null; null !== e;){
                a = e.alternate;
                if (null !== a && null === Mh(a)) {
                    b.child = e;
                    break;
                }
                a = e.sibling;
                e.sibling = c;
                c = e;
                e = a;
            }
            xj(b, !0, c, null, f);
            break;
        case "together":
            xj(b, !1, null, null, void 0);
            break;
        default:
            b.memoizedState = null;
    }
    return b.child;
}
function jj(a, b) {
    0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
}
function $i(a, b, c) {
    null !== a && (b.dependencies = a.dependencies);
    hh |= b.lanes;
    if (0 === (c & b.childLanes)) return null;
    if (null !== a && b.child !== a.child) throw Error(p(153));
    if (null !== b.child) {
        a = b.child;
        c = wh(a, a.pendingProps);
        b.child = c;
        for(c.return = b; null !== a.sibling;)a = a.sibling, c = c.sibling = wh(a, a.pendingProps), c.return = b;
        c.sibling = null;
    }
    return b.child;
}
function zj(a, b, c) {
    switch(b.tag){
        case 3:
            lj(b);
            Ig();
            break;
        case 5:
            Kh(b);
            break;
        case 1:
            Zf(b.type) && cg(b);
            break;
        case 4:
            Ih(b, b.stateNode.containerInfo);
            break;
        case 10:
            var d = b.type._context, e = b.memoizedProps.value;
            G(Mg, d._currentValue);
            d._currentValue = e;
            break;
        case 13:
            d = b.memoizedState;
            if (null !== d) {
                if (null !== d.dehydrated) return G(M, M.current & 1), b.flags |= 128, null;
                if (0 !== (c & b.child.childLanes)) return pj(a, b, c);
                G(M, M.current & 1);
                a = $i(a, b, c);
                return null !== a ? a.sibling : null;
            }
            G(M, M.current & 1);
            break;
        case 19:
            d = 0 !== (c & b.childLanes);
            if (0 !== (a.flags & 128)) {
                if (d) return yj(a, b, c);
                b.flags |= 128;
            }
            e = b.memoizedState;
            null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
            G(M, M.current);
            if (d) break;
            else return null;
        case 22:
        case 23:
            return b.lanes = 0, ej(a, b, c);
    }
    return $i(a, b, c);
}
var Aj, Bj, Cj, Dj;
Aj = function(a, b) {
    for(var c = b.child; null !== c;){
        if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
        else if (4 !== c.tag && null !== c.child) {
            c.child.return = c;
            c = c.child;
            continue;
        }
        if (c === b) break;
        for(; null === c.sibling;){
            if (null === c.return || c.return === b) return;
            c = c.return;
        }
        c.sibling.return = c.return;
        c = c.sibling;
    }
};
Bj = function() {};
Cj = function(a, b, c, d) {
    var e = a.memoizedProps;
    if (e !== d) {
        a = b.stateNode;
        Hh(Eh.current);
        var f = null;
        switch(c){
            case "input":
                e = Ya(a, e);
                d = Ya(a, d);
                f = [];
                break;
            case "select":
                e = A({}, e, {
                    value: void 0
                });
                d = A({}, d, {
                    value: void 0
                });
                f = [];
                break;
            case "textarea":
                e = gb(a, e);
                d = gb(a, d);
                f = [];
                break;
            default:
                "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
        }
        ub(c, d);
        var g;
        c = null;
        for(l in e)if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) {
            if ("style" === l) {
                var h = e[l];
                for(g in h)h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
            } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
        }
        for(l in d){
            var k = d[l];
            h = null != e ? e[l] : void 0;
            if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) {
                if ("style" === l) {
                    if (h) {
                        for(g in h)!h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
                        for(g in k)k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
                    } else c || (f || (f = []), f.push(l, c)), c = k;
                } else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && D("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l, k));
            }
        }
        c && (f = f || []).push("style", c);
        var l = f;
        if (b.updateQueue = l) b.flags |= 4;
    }
};
Dj = function(a, b, c, d) {
    c !== d && (b.flags |= 4);
};
function Ej(a, b) {
    if (!I) switch(a.tailMode){
        case "hidden":
            b = a.tail;
            for(var c = null; null !== b;)null !== b.alternate && (c = b), b = b.sibling;
            null === c ? a.tail = null : c.sibling = null;
            break;
        case "collapsed":
            c = a.tail;
            for(var d = null; null !== c;)null !== c.alternate && (d = c), c = c.sibling;
            null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
}
function S(a) {
    var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
    if (b) for(var e = a.child; null !== e;)c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
    else for(e = a.child; null !== e;)c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
    a.subtreeFlags |= d;
    a.childLanes = c;
    return b;
}
function Fj(a, b, c) {
    var d = b.pendingProps;
    wg(b);
    switch(b.tag){
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return S(b), null;
        case 1:
            return Zf(b.type) && $f(), S(b), null;
        case 3:
            d = b.stateNode;
            Jh();
            E(Wf);
            E(H);
            Oh();
            d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
            if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Gj(zg), zg = null));
            Bj(a, b);
            S(b);
            return null;
        case 5:
            Lh(b);
            var e = Hh(Gh.current);
            c = b.type;
            if (null !== a && null != b.stateNode) Cj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            else {
                if (!d) {
                    if (null === b.stateNode) throw Error(p(166));
                    S(b);
                    return null;
                }
                a = Hh(Eh.current);
                if (Gg(b)) {
                    d = b.stateNode;
                    c = b.type;
                    var f = b.memoizedProps;
                    d[Of] = b;
                    d[Pf] = f;
                    a = 0 !== (b.mode & 1);
                    switch(c){
                        case "dialog":
                            D("cancel", d);
                            D("close", d);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            D("load", d);
                            break;
                        case "video":
                        case "audio":
                            for(e = 0; e < lf.length; e++)D(lf[e], d);
                            break;
                        case "source":
                            D("error", d);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            D("error", d);
                            D("load", d);
                            break;
                        case "details":
                            D("toggle", d);
                            break;
                        case "input":
                            Za(d, f);
                            D("invalid", d);
                            break;
                        case "select":
                            d._wrapperState = {
                                wasMultiple: !!f.multiple
                            };
                            D("invalid", d);
                            break;
                        case "textarea":
                            hb(d, f), D("invalid", d);
                    }
                    ub(c, f);
                    e = null;
                    for(var g in f)if (f.hasOwnProperty(g)) {
                        var h = f[g];
                        "children" === g ? "string" === typeof h ? d.textContent !== h && (!0 !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = [
                            "children",
                            h
                        ]) : "number" === typeof h && d.textContent !== "" + h && (!0 !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = [
                            "children",
                            "" + h
                        ]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
                    }
                    switch(c){
                        case "input":
                            Va(d);
                            db(d, f, !0);
                            break;
                        case "textarea":
                            Va(d);
                            jb(d);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            "function" === typeof f.onClick && (d.onclick = Bf);
                    }
                    d = e;
                    b.updateQueue = d;
                    null !== d && (b.flags |= 4);
                } else {
                    g = 9 === e.nodeType ? e : e.ownerDocument;
                    "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
                    "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script>\x3c/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, {
                        is: d.is
                    }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = !0 : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
                    a[Of] = b;
                    a[Pf] = d;
                    Aj(a, b, !1, !1);
                    b.stateNode = a;
                    a: {
                        g = vb(c, d);
                        switch(c){
                            case "dialog":
                                D("cancel", a);
                                D("close", a);
                                e = d;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                D("load", a);
                                e = d;
                                break;
                            case "video":
                            case "audio":
                                for(e = 0; e < lf.length; e++)D(lf[e], a);
                                e = d;
                                break;
                            case "source":
                                D("error", a);
                                e = d;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                D("error", a);
                                D("load", a);
                                e = d;
                                break;
                            case "details":
                                D("toggle", a);
                                e = d;
                                break;
                            case "input":
                                Za(a, d);
                                e = Ya(a, d);
                                D("invalid", a);
                                break;
                            case "option":
                                e = d;
                                break;
                            case "select":
                                a._wrapperState = {
                                    wasMultiple: !!d.multiple
                                };
                                e = A({}, d, {
                                    value: void 0
                                });
                                D("invalid", a);
                                break;
                            case "textarea":
                                hb(a, d);
                                e = gb(a, d);
                                D("invalid", a);
                                break;
                            default:
                                e = d;
                        }
                        ub(c, e);
                        h = e;
                        for(f in h)if (h.hasOwnProperty(f)) {
                            var k = h[f];
                            "style" === f ? sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && ob(a, k) : "number" === typeof k && ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea.hasOwnProperty(f) ? null != k && "onScroll" === f && D("scroll", a) : null != k && ta(a, f, k, g));
                        }
                        switch(c){
                            case "input":
                                Va(a);
                                db(a, d, !1);
                                break;
                            case "textarea":
                                Va(a);
                                jb(a);
                                break;
                            case "option":
                                null != d.value && a.setAttribute("value", "" + Sa(d.value));
                                break;
                            case "select":
                                a.multiple = !!d.multiple;
                                f = d.value;
                                null != f ? fb(a, !!d.multiple, f, !1) : null != d.defaultValue && fb(a, !!d.multiple, d.defaultValue, !0);
                                break;
                            default:
                                "function" === typeof e.onClick && (a.onclick = Bf);
                        }
                        switch(c){
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                d = !!d.autoFocus;
                                break a;
                            case "img":
                                d = !0;
                                break a;
                            default:
                                d = !1;
                        }
                    }
                    d && (b.flags |= 4);
                }
                null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            }
            S(b);
            return null;
        case 6:
            if (a && null != b.stateNode) Dj(a, b, a.memoizedProps, d);
            else {
                if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
                c = Hh(Gh.current);
                Hh(Eh.current);
                if (Gg(b)) {
                    d = b.stateNode;
                    c = b.memoizedProps;
                    d[Of] = b;
                    if (f = d.nodeValue !== c) {
                        if (a = xg, null !== a) switch(a.tag){
                            case 3:
                                Af(d.nodeValue, c, 0 !== (a.mode & 1));
                                break;
                            case 5:
                                !0 !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
                        }
                    }
                    f && (b.flags |= 4);
                } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
            }
            S(b);
            return null;
        case 13:
            E(M);
            d = b.memoizedState;
            if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
                if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f = !1;
                else if (f = Gg(b), null !== d && null !== d.dehydrated) {
                    if (null === a) {
                        if (!f) throw Error(p(318));
                        f = b.memoizedState;
                        f = null !== f ? f.dehydrated : null;
                        if (!f) throw Error(p(317));
                        f[Of] = b;
                    } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
                    S(b);
                    f = !1;
                } else null !== zg && (Gj(zg), zg = null), f = !0;
                if (!f) return b.flags & 65536 ? b : null;
            }
            if (0 !== (b.flags & 128)) return b.lanes = c, b;
            d = null !== d;
            d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (M.current & 1) ? 0 === T && (T = 3) : uj()));
            null !== b.updateQueue && (b.flags |= 4);
            S(b);
            return null;
        case 4:
            return Jh(), Bj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
        case 10:
            return Rg(b.type._context), S(b), null;
        case 17:
            return Zf(b.type) && $f(), S(b), null;
        case 19:
            E(M);
            f = b.memoizedState;
            if (null === f) return S(b), null;
            d = 0 !== (b.flags & 128);
            g = f.rendering;
            if (null === g) {
                if (d) Ej(f, !1);
                else {
                    if (0 !== T || null !== a && 0 !== (a.flags & 128)) for(a = b.child; null !== a;){
                        g = Mh(a);
                        if (null !== g) {
                            b.flags |= 128;
                            Ej(f, !1);
                            d = g.updateQueue;
                            null !== d && (b.updateQueue = d, b.flags |= 4);
                            b.subtreeFlags = 0;
                            d = c;
                            for(c = b.child; null !== c;)f = c, a = d, f.flags &= 14680066, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : {
                                lanes: a.lanes,
                                firstContext: a.firstContext
                            }), c = c.sibling;
                            G(M, M.current & 1 | 2);
                            return b.child;
                        }
                        a = a.sibling;
                    }
                    null !== f.tail && B() > Hj && (b.flags |= 128, d = !0, Ej(f, !1), b.lanes = 4194304);
                }
            } else {
                if (!d) {
                    if (a = Mh(g), null !== a) {
                        if (b.flags |= 128, d = !0, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Ej(f, !0), null === f.tail && "hidden" === f.tailMode && !g.alternate && !I) return S(b), null;
                    } else 2 * B() - f.renderingStartTime > Hj && 1073741824 !== c && (b.flags |= 128, d = !0, Ej(f, !1), b.lanes = 4194304);
                }
                f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, f.last = g);
            }
            if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B(), b.sibling = null, c = M.current, G(M, d ? c & 1 | 2 : c & 1), b;
            S(b);
            return null;
        case 22:
        case 23:
            return Ij(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (gj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(p(156, b.tag));
}
function Jj(a, b) {
    wg(b);
    switch(b.tag){
        case 1:
            return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
        case 3:
            return Jh(), E(Wf), E(H), Oh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
        case 5:
            return Lh(b), null;
        case 13:
            E(M);
            a = b.memoizedState;
            if (null !== a && null !== a.dehydrated) {
                if (null === b.alternate) throw Error(p(340));
                Ig();
            }
            a = b.flags;
            return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
        case 19:
            return E(M), null;
        case 4:
            return Jh(), null;
        case 10:
            return Rg(b.type._context), null;
        case 22:
        case 23:
            return Ij(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var Kj = !1, U = !1, Lj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
function Mj(a, b) {
    var c = a.ref;
    if (null !== c) {
        if ("function" === typeof c) try {
            c(null);
        } catch (d) {
            W(a, b, d);
        }
        else c.current = null;
    }
}
function Nj(a, b, c) {
    try {
        c();
    } catch (d) {
        W(a, b, d);
    }
}
var Oj = !1;
function Pj(a, b) {
    Cf = dd;
    a = Me();
    if (Ne(a)) {
        if ("selectionStart" in a) var c = {
            start: a.selectionStart,
            end: a.selectionEnd
        };
        else a: {
            c = (c = a.ownerDocument) && c.defaultView || window;
            var d = c.getSelection && c.getSelection();
            if (d && 0 !== d.rangeCount) {
                c = d.anchorNode;
                var e = d.anchorOffset, f = d.focusNode;
                d = d.focusOffset;
                try {
                    c.nodeType, f.nodeType;
                } catch (F) {
                    c = null;
                    break a;
                }
                var g = 0, h = -1, k = -1, l = 0, m = 0, q = a, r = null;
                b: for(;;){
                    for(var y;;){
                        q !== c || 0 !== e && 3 !== q.nodeType || (h = g + e);
                        q !== f || 0 !== d && 3 !== q.nodeType || (k = g + d);
                        3 === q.nodeType && (g += q.nodeValue.length);
                        if (null === (y = q.firstChild)) break;
                        r = q;
                        q = y;
                    }
                    for(;;){
                        if (q === a) break b;
                        r === c && ++l === e && (h = g);
                        r === f && ++m === d && (k = g);
                        if (null !== (y = q.nextSibling)) break;
                        q = r;
                        r = q.parentNode;
                    }
                    q = y;
                }
                c = -1 === h || -1 === k ? null : {
                    start: h,
                    end: k
                };
            } else c = null;
        }
        c = c || {
            start: 0,
            end: 0
        };
    } else c = null;
    Df = {
        focusedElem: a,
        selectionRange: c
    };
    dd = !1;
    for(V = b; null !== V;)if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V = a;
    else for(; null !== V;){
        b = V;
        try {
            var n = b.alternate;
            if (0 !== (b.flags & 1024)) switch(b.tag){
                case 0:
                case 11:
                case 15:
                    break;
                case 1:
                    if (null !== n) {
                        var t = n.memoizedProps, J = n.memoizedState, x = b.stateNode, w = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Lg(b.type, t), J);
                        x.__reactInternalSnapshotBeforeUpdate = w;
                    }
                    break;
                case 3:
                    var u = b.stateNode.containerInfo;
                    1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
                    break;
                case 5:
                case 6:
                case 4:
                case 17:
                    break;
                default:
                    throw Error(p(163));
            }
        } catch (F) {
            W(b, b.return, F);
        }
        a = b.sibling;
        if (null !== a) {
            a.return = b.return;
            V = a;
            break;
        }
        V = b.return;
    }
    n = Oj;
    Oj = !1;
    return n;
}
function Qj(a, b, c) {
    var d = b.updateQueue;
    d = null !== d ? d.lastEffect : null;
    if (null !== d) {
        var e = d = d.next;
        do {
            if ((e.tag & a) === a) {
                var f = e.destroy;
                e.destroy = void 0;
                void 0 !== f && Nj(b, c, f);
            }
            e = e.next;
        }while (e !== d)
    }
}
function Rj(a, b) {
    b = b.updateQueue;
    b = null !== b ? b.lastEffect : null;
    if (null !== b) {
        var c = b = b.next;
        do {
            if ((c.tag & a) === a) {
                var d = c.create;
                c.destroy = d();
            }
            c = c.next;
        }while (c !== b)
    }
}
function Sj(a) {
    var b = a.ref;
    if (null !== b) {
        var c = a.stateNode;
        switch(a.tag){
            case 5:
                a = c;
                break;
            default:
                a = c;
        }
        "function" === typeof b ? b(a) : b.current = a;
    }
}
function Tj(a) {
    var b = a.alternate;
    null !== b && (a.alternate = null, Tj(b));
    a.child = null;
    a.deletions = null;
    a.sibling = null;
    5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
    a.stateNode = null;
    a.return = null;
    a.dependencies = null;
    a.memoizedProps = null;
    a.memoizedState = null;
    a.pendingProps = null;
    a.stateNode = null;
    a.updateQueue = null;
}
function Uj(a) {
    return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}
function Vj(a) {
    a: for(;;){
        for(; null === a.sibling;){
            if (null === a.return || Uj(a.return)) return null;
            a = a.return;
        }
        a.sibling.return = a.return;
        for(a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag;){
            if (a.flags & 2) continue a;
            if (null === a.child || 4 === a.tag) continue a;
            else a.child.return = a, a = a.child;
        }
        if (!(a.flags & 2)) return a.stateNode;
    }
}
function Wj(a, b, c) {
    var d = a.tag;
    if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
    else if (4 !== d && (a = a.child, null !== a)) for(Wj(a, b, c), a = a.sibling; null !== a;)Wj(a, b, c), a = a.sibling;
}
function Xj(a, b, c) {
    var d = a.tag;
    if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
    else if (4 !== d && (a = a.child, null !== a)) for(Xj(a, b, c), a = a.sibling; null !== a;)Xj(a, b, c), a = a.sibling;
}
var X = null, Yj = !1;
function Zj(a, b, c) {
    for(c = c.child; null !== c;)ak(a, b, c), c = c.sibling;
}
function ak(a, b, c) {
    if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
        lc.onCommitFiberUnmount(kc, c);
    } catch (h) {}
    switch(c.tag){
        case 5:
            U || Mj(c, b);
        case 6:
            var d = X, e = Yj;
            X = null;
            Zj(a, b, c);
            X = d;
            Yj = e;
            null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
            break;
        case 18:
            null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
            break;
        case 4:
            d = X;
            e = Yj;
            X = c.stateNode.containerInfo;
            Yj = !0;
            Zj(a, b, c);
            X = d;
            Yj = e;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
                e = d = d.next;
                do {
                    var f = e, g = f.destroy;
                    f = f.tag;
                    void 0 !== g && (0 !== (f & 2) ? Nj(c, b, g) : 0 !== (f & 4) && Nj(c, b, g));
                    e = e.next;
                }while (e !== d)
            }
            Zj(a, b, c);
            break;
        case 1:
            if (!U && (Mj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
                d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
            } catch (h1) {
                W(c, b, h1);
            }
            Zj(a, b, c);
            break;
        case 21:
            Zj(a, b, c);
            break;
        case 22:
            c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Zj(a, b, c), U = d) : Zj(a, b, c);
            break;
        default:
            Zj(a, b, c);
    }
}
function bk(a) {
    var b = a.updateQueue;
    if (null !== b) {
        a.updateQueue = null;
        var c = a.stateNode;
        null === c && (c = a.stateNode = new Lj);
        b.forEach(function(b) {
            var d = ck.bind(null, a, b);
            c.has(b) || (c.add(b), b.then(d, d));
        });
    }
}
function dk(a, b) {
    var c = b.deletions;
    if (null !== c) for(var d = 0; d < c.length; d++){
        var e = c[d];
        try {
            var f = a, g = b, h = g;
            a: for(; null !== h;){
                switch(h.tag){
                    case 5:
                        X = h.stateNode;
                        Yj = !1;
                        break a;
                    case 3:
                        X = h.stateNode.containerInfo;
                        Yj = !0;
                        break a;
                    case 4:
                        X = h.stateNode.containerInfo;
                        Yj = !0;
                        break a;
                }
                h = h.return;
            }
            if (null === X) throw Error(p(160));
            ak(f, g, e);
            X = null;
            Yj = !1;
            var k = e.alternate;
            null !== k && (k.return = null);
            e.return = null;
        } catch (l) {
            W(e, b, l);
        }
    }
    if (b.subtreeFlags & 12854) for(b = b.child; null !== b;)ek(b, a), b = b.sibling;
}
function ek(a, b) {
    var c = a.alternate, d = a.flags;
    switch(a.tag){
        case 0:
        case 11:
        case 14:
        case 15:
            dk(b, a);
            fk(a);
            if (d & 4) {
                try {
                    Qj(3, a, a.return), Rj(3, a);
                } catch (t) {
                    W(a, a.return, t);
                }
                try {
                    Qj(5, a, a.return);
                } catch (t1) {
                    W(a, a.return, t1);
                }
            }
            break;
        case 1:
            dk(b, a);
            fk(a);
            d & 512 && null !== c && Mj(c, c.return);
            break;
        case 5:
            dk(b, a);
            fk(a);
            d & 512 && null !== c && Mj(c, c.return);
            if (a.flags & 32) {
                var e = a.stateNode;
                try {
                    ob(e, "");
                } catch (t) {
                    W(a, a.return, t);
                }
            }
            if (d & 4 && (e = a.stateNode, null != e)) {
                var f = a.memoizedProps, g = null !== c ? c.memoizedProps : f, h = a.type, k = a.updateQueue;
                a.updateQueue = null;
                if (null !== k) try {
                    "input" === h && "radio" === f.type && null != f.name && ab(e, f);
                    vb(h, g);
                    var l = vb(h, f);
                    for(g = 0; g < k.length; g += 2){
                        var m = k[g], q = k[g + 1];
                        "style" === m ? sb(e, q) : "dangerouslySetInnerHTML" === m ? nb(e, q) : "children" === m ? ob(e, q) : ta(e, m, q, l);
                    }
                    switch(h){
                        case "input":
                            bb(e, f);
                            break;
                        case "textarea":
                            ib(e, f);
                            break;
                        case "select":
                            var r = e._wrapperState.wasMultiple;
                            e._wrapperState.wasMultiple = !!f.multiple;
                            var y = f.value;
                            null != y ? fb(e, !!f.multiple, y, !1) : r !== !!f.multiple && (null != f.defaultValue ? fb(e, !!f.multiple, f.defaultValue, !0) : fb(e, !!f.multiple, f.multiple ? [] : "", !1));
                    }
                    e[Pf] = f;
                } catch (t) {
                    W(a, a.return, t);
                }
            }
            break;
        case 6:
            dk(b, a);
            fk(a);
            if (d & 4) {
                if (null === a.stateNode) throw Error(p(162));
                e = a.stateNode;
                f = a.memoizedProps;
                try {
                    e.nodeValue = f;
                } catch (t) {
                    W(a, a.return, t);
                }
            }
            break;
        case 3:
            dk(b, a);
            fk(a);
            if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
                bd(b.containerInfo);
            } catch (t) {
                W(a, a.return, t);
            }
            break;
        case 4:
            dk(b, a);
            fk(a);
            break;
        case 13:
            dk(b, a);
            fk(a);
            e = a.child;
            e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (gk = B()));
            d & 4 && bk(a);
            break;
        case 22:
            m = null !== c && null !== c.memoizedState;
            a.mode & 1 ? (U = (l = U) || m, dk(b, a), U = l) : dk(b, a);
            fk(a);
            if (d & 8192) {
                l = null !== a.memoizedState;
                if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1)) for(V = a, m = a.child; null !== m;){
                    for(q = V = m; null !== V;){
                        r = V;
                        y = r.child;
                        switch(r.tag){
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                Qj(4, r, r.return);
                                break;
                            case 1:
                                Mj(r, r.return);
                                var n = r.stateNode;
                                if ("function" === typeof n.componentWillUnmount) {
                                    d = r;
                                    c = r.return;
                                    try {
                                        b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
                                    } catch (t) {
                                        W(d, c, t);
                                    }
                                }
                                break;
                            case 5:
                                Mj(r, r.return);
                                break;
                            case 22:
                                if (null !== r.memoizedState) {
                                    hk(q);
                                    continue;
                                }
                        }
                        null !== y ? (y.return = r, V = y) : hk(q);
                    }
                    m = m.sibling;
                }
                a: for(m = null, q = a;;){
                    if (5 === q.tag) {
                        if (null === m) {
                            m = q;
                            try {
                                e = q.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = rb("display", g));
                            } catch (t) {
                                W(a, a.return, t);
                            }
                        }
                    } else if (6 === q.tag) {
                        if (null === m) try {
                            q.stateNode.nodeValue = l ? "" : q.memoizedProps;
                        } catch (t) {
                            W(a, a.return, t);
                        }
                    } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
                        q.child.return = q;
                        q = q.child;
                        continue;
                    }
                    if (q === a) break a;
                    for(; null === q.sibling;){
                        if (null === q.return || q.return === a) break a;
                        m === q && (m = null);
                        q = q.return;
                    }
                    m === q && (m = null);
                    q.sibling.return = q.return;
                    q = q.sibling;
                }
            }
            break;
        case 19:
            dk(b, a);
            fk(a);
            d & 4 && bk(a);
            break;
        case 21:
            break;
        default:
            dk(b, a), fk(a);
    }
}
function fk(a) {
    var b = a.flags;
    if (b & 2) {
        try {
            a: {
                for(var c = a.return; null !== c;){
                    if (Uj(c)) {
                        var d = c;
                        break a;
                    }
                    c = c.return;
                }
                throw Error(p(160));
            }
            switch(d.tag){
                case 5:
                    var e = d.stateNode;
                    d.flags & 32 && (ob(e, ""), d.flags &= -33);
                    var f = Vj(a);
                    Xj(a, f, e);
                    break;
                case 3:
                case 4:
                    var g = d.stateNode.containerInfo, h = Vj(a);
                    Wj(a, h, g);
                    break;
                default:
                    throw Error(p(161));
            }
        } catch (k) {
            W(a, a.return, k);
        }
        a.flags &= -3;
    }
    b & 4096 && (a.flags &= -4097);
}
function ik(a, b, c) {
    V = a;
    jk(a, b, c);
}
function jk(a, b, c) {
    for(var d = 0 !== (a.mode & 1); null !== V;){
        var e = V, f = e.child;
        if (22 === e.tag && d) {
            var g = null !== e.memoizedState || Kj;
            if (!g) {
                var h = e.alternate, k = null !== h && null !== h.memoizedState || U;
                h = Kj;
                var l = U;
                Kj = g;
                if ((U = k) && !l) for(V = e; null !== V;)g = V, k = g.child, 22 === g.tag && null !== g.memoizedState ? kk(e) : null !== k ? (k.return = g, V = k) : kk(e);
                for(; null !== f;)V = f, jk(f, b, c), f = f.sibling;
                V = e;
                Kj = h;
                U = l;
            }
            lk(a, b, c);
        } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, V = f) : lk(a, b, c);
    }
}
function lk(a) {
    for(; null !== V;){
        var b = V;
        if (0 !== (b.flags & 8772)) {
            var c = b.alternate;
            try {
                if (0 !== (b.flags & 8772)) switch(b.tag){
                    case 0:
                    case 11:
                    case 15:
                        U || Rj(5, b);
                        break;
                    case 1:
                        var d = b.stateNode;
                        if (b.flags & 4 && !U) {
                            if (null === c) d.componentDidMount();
                            else {
                                var e = b.elementType === b.type ? c.memoizedProps : Lg(b.type, c.memoizedProps);
                                d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                            }
                        }
                        var f = b.updateQueue;
                        null !== f && ih(b, f, d);
                        break;
                    case 3:
                        var g = b.updateQueue;
                        if (null !== g) {
                            c = null;
                            if (null !== b.child) switch(b.child.tag){
                                case 5:
                                    c = b.child.stateNode;
                                    break;
                                case 1:
                                    c = b.child.stateNode;
                            }
                            ih(b, g, c);
                        }
                        break;
                    case 5:
                        var h = b.stateNode;
                        if (null === c && b.flags & 4) {
                            c = h;
                            var k = b.memoizedProps;
                            switch(b.type){
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    k.autoFocus && c.focus();
                                    break;
                                case "img":
                                    k.src && (c.src = k.src);
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (null === b.memoizedState) {
                            var l = b.alternate;
                            if (null !== l) {
                                var m = l.memoizedState;
                                if (null !== m) {
                                    var q = m.dehydrated;
                                    null !== q && bd(q);
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(p(163));
                }
                U || b.flags & 512 && Sj(b);
            } catch (r) {
                W(b, b.return, r);
            }
        }
        if (b === a) {
            V = null;
            break;
        }
        c = b.sibling;
        if (null !== c) {
            c.return = b.return;
            V = c;
            break;
        }
        V = b.return;
    }
}
function hk(a) {
    for(; null !== V;){
        var b = V;
        if (b === a) {
            V = null;
            break;
        }
        var c = b.sibling;
        if (null !== c) {
            c.return = b.return;
            V = c;
            break;
        }
        V = b.return;
    }
}
function kk(a) {
    for(; null !== V;){
        var b = V;
        try {
            switch(b.tag){
                case 0:
                case 11:
                case 15:
                    var c = b.return;
                    try {
                        Rj(4, b);
                    } catch (k) {
                        W(b, c, k);
                    }
                    break;
                case 1:
                    var d = b.stateNode;
                    if ("function" === typeof d.componentDidMount) {
                        var e = b.return;
                        try {
                            d.componentDidMount();
                        } catch (k) {
                            W(b, e, k);
                        }
                    }
                    var f = b.return;
                    try {
                        Sj(b);
                    } catch (k1) {
                        W(b, f, k1);
                    }
                    break;
                case 5:
                    var g = b.return;
                    try {
                        Sj(b);
                    } catch (k2) {
                        W(b, g, k2);
                    }
            }
        } catch (k) {
            W(b, b.return, k);
        }
        if (b === a) {
            V = null;
            break;
        }
        var h = b.sibling;
        if (null !== h) {
            h.return = b.return;
            V = h;
            break;
        }
        V = b.return;
    }
}
var mk = Math.ceil, nk = ua.ReactCurrentDispatcher, ok = ua.ReactCurrentOwner, pk = ua.ReactCurrentBatchConfig, K = 0, R = null, Y = null, Z = 0, gj = 0, fj = Uf(0), T = 0, qk = null, hh = 0, rk = 0, sk = 0, tk = null, uk = null, gk = 0, Hj = Infinity, vk = null, Pi = !1, Qi = null, Si = null, wk = !1, xk = null, yk = 0, zk = 0, Ak = null, Bk = -1, Ck = 0;
function L() {
    return 0 !== (K & 6) ? B() : -1 !== Bk ? Bk : Bk = B();
}
function lh(a) {
    if (0 === (a.mode & 1)) return 1;
    if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
    if (null !== Kg.transition) return 0 === Ck && (Ck = yc()), Ck;
    a = C;
    if (0 !== a) return a;
    a = window.event;
    a = void 0 === a ? 16 : jd(a.type);
    return a;
}
function mh(a, b, c, d) {
    if (50 < zk) throw zk = 0, Ak = null, Error(p(185));
    Ac(a, c, d);
    if (0 === (K & 2) || a !== R) a === R && (0 === (K & 2) && (rk |= c), 4 === T && Dk(a, Z)), Ek(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Hj = B() + 500, fg && jg());
}
function Ek(a, b) {
    var c = a.callbackNode;
    wc(a, b);
    var d = uc(a, a === R ? Z : 0);
    if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
    else if (b = d & -d, a.callbackPriority !== b) {
        null != c && bc(c);
        if (1 === b) 0 === a.tag ? ig(Fk.bind(null, a)) : hg(Fk.bind(null, a)), Jf(function() {
            0 === (K & 6) && jg();
        }), c = null;
        else {
            switch(Dc(d)){
                case 1:
                    c = fc;
                    break;
                case 4:
                    c = gc;
                    break;
                case 16:
                    c = hc;
                    break;
                case 536870912:
                    c = jc;
                    break;
                default:
                    c = hc;
            }
            c = Gk(c, Hk.bind(null, a));
        }
        a.callbackPriority = b;
        a.callbackNode = c;
    }
}
function Hk(a, b) {
    Bk = -1;
    Ck = 0;
    if (0 !== (K & 6)) throw Error(p(327));
    var c = a.callbackNode;
    if (Ik() && a.callbackNode !== c) return null;
    var d = uc(a, a === R ? Z : 0);
    if (0 === d) return null;
    if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Jk(a, d);
    else {
        b = d;
        var e = K;
        K |= 2;
        var f = Kk();
        if (R !== a || Z !== b) vk = null, Hj = B() + 500, Lk(a, b);
        for(;;)try {
            Mk();
            break;
        } catch (h) {
            Nk(a, h);
        }
        Qg();
        nk.current = f;
        K = e;
        null !== Y ? b = 0 : (R = null, Z = 0, b = T);
    }
    if (0 !== b) {
        2 === b && (e = xc(a), 0 !== e && (d = e, b = Ok(a, e)));
        if (1 === b) throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
        if (6 === b) Dk(a, d);
        else {
            e = a.current.alternate;
            if (0 === (d & 30) && !Pk(e) && (b = Jk(a, d), 2 === b && (f = xc(a), 0 !== f && (d = f, b = Ok(a, f))), 1 === b)) throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
            a.finishedWork = e;
            a.finishedLanes = d;
            switch(b){
                case 0:
                case 1:
                    throw Error(p(345));
                case 2:
                    Qk(a, uk, vk);
                    break;
                case 3:
                    Dk(a, d);
                    if ((d & 130023424) === d && (b = gk + 500 - B(), 10 < b)) {
                        if (0 !== uc(a, 0)) break;
                        e = a.suspendedLanes;
                        if ((e & d) !== d) {
                            L();
                            a.pingedLanes |= a.suspendedLanes & e;
                            break;
                        }
                        a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), b);
                        break;
                    }
                    Qk(a, uk, vk);
                    break;
                case 4:
                    Dk(a, d);
                    if ((d & 4194240) === d) break;
                    b = a.eventTimes;
                    for(e = -1; 0 < d;){
                        var g = 31 - oc(d);
                        f = 1 << g;
                        g = b[g];
                        g > e && (e = g);
                        d &= ~f;
                    }
                    d = e;
                    d = B() - d;
                    d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3E3 > d ? 3E3 : 4320 > d ? 4320 : 1960 * mk(d / 1960)) - d;
                    if (10 < d) {
                        a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), d);
                        break;
                    }
                    Qk(a, uk, vk);
                    break;
                case 5:
                    Qk(a, uk, vk);
                    break;
                default:
                    throw Error(p(329));
            }
        }
    }
    Ek(a, B());
    return a.callbackNode === c ? Hk.bind(null, a) : null;
}
function Ok(a, b) {
    var c = tk;
    a.current.memoizedState.isDehydrated && (Lk(a, b).flags |= 256);
    a = Jk(a, b);
    2 !== a && (b = uk, uk = c, null !== b && Gj(b));
    return a;
}
function Gj(a) {
    null === uk ? uk = a : uk.push.apply(uk, a);
}
function Pk(a) {
    for(var b = a;;){
        if (b.flags & 16384) {
            var c = b.updateQueue;
            if (null !== c && (c = c.stores, null !== c)) for(var d = 0; d < c.length; d++){
                var e = c[d], f = e.getSnapshot;
                e = e.value;
                try {
                    if (!He(f(), e)) return !1;
                } catch (g) {
                    return !1;
                }
            }
        }
        c = b.child;
        if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
        else {
            if (b === a) break;
            for(; null === b.sibling;){
                if (null === b.return || b.return === a) return !0;
                b = b.return;
            }
            b.sibling.return = b.return;
            b = b.sibling;
        }
    }
    return !0;
}
function Dk(a, b) {
    b &= ~sk;
    b &= ~rk;
    a.suspendedLanes |= b;
    a.pingedLanes &= ~b;
    for(a = a.expirationTimes; 0 < b;){
        var c = 31 - oc(b), d = 1 << c;
        a[c] = -1;
        b &= ~d;
    }
}
function Fk(a) {
    if (0 !== (K & 6)) throw Error(p(327));
    Ik();
    var b = uc(a, 0);
    if (0 === (b & 1)) return Ek(a, B()), null;
    var c = Jk(a, b);
    if (0 !== a.tag && 2 === c) {
        var d = xc(a);
        0 !== d && (b = d, c = Ok(a, d));
    }
    if (1 === c) throw c = qk, Lk(a, 0), Dk(a, b), Ek(a, B()), c;
    if (6 === c) throw Error(p(345));
    a.finishedWork = a.current.alternate;
    a.finishedLanes = b;
    Qk(a, uk, vk);
    Ek(a, B());
    return null;
}
function Rk(a, b) {
    var c = K;
    K |= 1;
    try {
        return a(b);
    } finally{
        K = c, 0 === K && (Hj = B() + 500, fg && jg());
    }
}
function Sk(a) {
    null !== xk && 0 === xk.tag && 0 === (K & 6) && Ik();
    var b = K;
    K |= 1;
    var c = pk.transition, d = C;
    try {
        if (pk.transition = null, C = 1, a) return a();
    } finally{
        C = d, pk.transition = c, K = b, 0 === (K & 6) && jg();
    }
}
function Ij() {
    gj = fj.current;
    E(fj);
}
function Lk(a, b) {
    a.finishedWork = null;
    a.finishedLanes = 0;
    var c = a.timeoutHandle;
    -1 !== c && (a.timeoutHandle = -1, Gf(c));
    if (null !== Y) for(c = Y.return; null !== c;){
        var d = c;
        wg(d);
        switch(d.tag){
            case 1:
                d = d.type.childContextTypes;
                null !== d && void 0 !== d && $f();
                break;
            case 3:
                Jh();
                E(Wf);
                E(H);
                Oh();
                break;
            case 5:
                Lh(d);
                break;
            case 4:
                Jh();
                break;
            case 13:
                E(M);
                break;
            case 19:
                E(M);
                break;
            case 10:
                Rg(d.type._context);
                break;
            case 22:
            case 23:
                Ij();
        }
        c = c.return;
    }
    R = a;
    Y = a = wh(a.current, null);
    Z = gj = b;
    T = 0;
    qk = null;
    sk = rk = hh = 0;
    uk = tk = null;
    if (null !== Wg) {
        for(b = 0; b < Wg.length; b++)if (c = Wg[b], d = c.interleaved, null !== d) {
            c.interleaved = null;
            var e = d.next, f = c.pending;
            if (null !== f) {
                var g = f.next;
                f.next = e;
                d.next = g;
            }
            c.pending = d;
        }
        Wg = null;
    }
    return a;
}
function Nk(a, b) {
    do {
        var c = Y;
        try {
            Qg();
            Ph.current = ai;
            if (Sh) {
                for(var d = N.memoizedState; null !== d;){
                    var e = d.queue;
                    null !== e && (e.pending = null);
                    d = d.next;
                }
                Sh = !1;
            }
            Rh = 0;
            P = O = N = null;
            Th = !1;
            Uh = 0;
            ok.current = null;
            if (null === c || null === c.return) {
                T = 1;
                qk = b;
                Y = null;
                break;
            }
            a: {
                var f = a, g = c.return, h = c, k = b;
                b = Z;
                h.flags |= 32768;
                if (null !== k && "object" === typeof k && "function" === typeof k.then) {
                    var l = k, m = h, q = m.tag;
                    if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
                        var r = m.alternate;
                        r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
                    }
                    var y = Vi(g);
                    if (null !== y) {
                        y.flags &= -257;
                        Wi(y, g, h, f, b);
                        y.mode & 1 && Ti(f, l, b);
                        b = y;
                        k = l;
                        var n = b.updateQueue;
                        if (null === n) {
                            var t = new Set;
                            t.add(k);
                            b.updateQueue = t;
                        } else n.add(k);
                        break a;
                    } else {
                        if (0 === (b & 1)) {
                            Ti(f, l, b);
                            uj();
                            break a;
                        }
                        k = Error(p(426));
                    }
                } else if (I && h.mode & 1) {
                    var J = Vi(g);
                    if (null !== J) {
                        0 === (J.flags & 65536) && (J.flags |= 256);
                        Wi(J, g, h, f, b);
                        Jg(Ki(k, h));
                        break a;
                    }
                }
                f = k = Ki(k, h);
                4 !== T && (T = 2);
                null === tk ? tk = [
                    f
                ] : tk.push(f);
                f = g;
                do {
                    switch(f.tag){
                        case 3:
                            f.flags |= 65536;
                            b &= -b;
                            f.lanes |= b;
                            var x = Oi(f, k, b);
                            fh(f, x);
                            break a;
                        case 1:
                            h = k;
                            var w = f.type, u = f.stateNode;
                            if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Si || !Si.has(u)))) {
                                f.flags |= 65536;
                                b &= -b;
                                f.lanes |= b;
                                var F = Ri(f, h, b);
                                fh(f, F);
                                break a;
                            }
                    }
                    f = f.return;
                }while (null !== f)
            }
            Tk(c);
        } catch (na) {
            b = na;
            Y === c && null !== c && (Y = c = c.return);
            continue;
        }
        break;
    }while (1)
}
function Kk() {
    var a = nk.current;
    nk.current = ai;
    return null === a ? ai : a;
}
function uj() {
    if (0 === T || 3 === T || 2 === T) T = 4;
    null === R || 0 === (hh & 268435455) && 0 === (rk & 268435455) || Dk(R, Z);
}
function Jk(a, b) {
    var c = K;
    K |= 2;
    var d = Kk();
    if (R !== a || Z !== b) vk = null, Lk(a, b);
    for(;;)try {
        Uk();
        break;
    } catch (e) {
        Nk(a, e);
    }
    Qg();
    K = c;
    nk.current = d;
    if (null !== Y) throw Error(p(261));
    R = null;
    Z = 0;
    return T;
}
function Uk() {
    for(; null !== Y;)Vk(Y);
}
function Mk() {
    for(; null !== Y && !cc();)Vk(Y);
}
function Vk(a) {
    var b = Wk(a.alternate, a, gj);
    a.memoizedProps = a.pendingProps;
    null === b ? Tk(a) : Y = b;
    ok.current = null;
}
function Tk(a) {
    var b = a;
    do {
        var c = b.alternate;
        a = b.return;
        if (0 === (b.flags & 32768)) {
            if (c = Fj(c, b, gj), null !== c) {
                Y = c;
                return;
            }
        } else {
            c = Jj(c, b);
            if (null !== c) {
                c.flags &= 32767;
                Y = c;
                return;
            }
            if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
            else {
                T = 6;
                Y = null;
                return;
            }
        }
        b = b.sibling;
        if (null !== b) {
            Y = b;
            return;
        }
        Y = b = a;
    }while (null !== b)
    0 === T && (T = 5);
}
function Qk(a, b, c) {
    var d = C, e = pk.transition;
    try {
        pk.transition = null, C = 1, Xk(a, b, c, d);
    } finally{
        pk.transition = e, C = d;
    }
    return null;
}
function Xk(a, b, c, d) {
    do Ik();
    while (null !== xk)
    if (0 !== (K & 6)) throw Error(p(327));
    c = a.finishedWork;
    var e = a.finishedLanes;
    if (null === c) return null;
    a.finishedWork = null;
    a.finishedLanes = 0;
    if (c === a.current) throw Error(p(177));
    a.callbackNode = null;
    a.callbackPriority = 0;
    var f = c.lanes | c.childLanes;
    Bc(a, f);
    a === R && (Y = R = null, Z = 0);
    0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || wk || (wk = !0, Gk(hc, function() {
        Ik();
        return null;
    }));
    f = 0 !== (c.flags & 15990);
    if (0 !== (c.subtreeFlags & 15990) || f) {
        f = pk.transition;
        pk.transition = null;
        var g = C;
        C = 1;
        var h = K;
        K |= 4;
        ok.current = null;
        Pj(a, c);
        ek(c, a);
        Oe(Df);
        dd = !!Cf;
        Df = Cf = null;
        a.current = c;
        ik(c, a, e);
        dc();
        K = h;
        C = g;
        pk.transition = f;
    } else a.current = c;
    wk && (wk = !1, xk = a, yk = e);
    f = a.pendingLanes;
    0 === f && (Si = null);
    mc(c.stateNode, d);
    Ek(a, B());
    if (null !== b) for(d = a.onRecoverableError, c = 0; c < b.length; c++)e = b[c], d(e.value, {
        componentStack: e.stack,
        digest: e.digest
    });
    if (Pi) throw Pi = !1, a = Qi, Qi = null, a;
    0 !== (yk & 1) && 0 !== a.tag && Ik();
    f = a.pendingLanes;
    0 !== (f & 1) ? a === Ak ? zk++ : (zk = 0, Ak = a) : zk = 0;
    jg();
    return null;
}
function Ik() {
    if (null !== xk) {
        var a = Dc(yk), b = pk.transition, c = C;
        try {
            pk.transition = null;
            C = 16 > a ? 16 : a;
            if (null === xk) var d = !1;
            else {
                a = xk;
                xk = null;
                yk = 0;
                if (0 !== (K & 6)) throw Error(p(331));
                var e = K;
                K |= 4;
                for(V = a.current; null !== V;){
                    var f = V, g = f.child;
                    if (0 !== (V.flags & 16)) {
                        var h = f.deletions;
                        if (null !== h) {
                            for(var k = 0; k < h.length; k++){
                                var l = h[k];
                                for(V = l; null !== V;){
                                    var m = V;
                                    switch(m.tag){
                                        case 0:
                                        case 11:
                                        case 15:
                                            Qj(8, m, f);
                                    }
                                    var q = m.child;
                                    if (null !== q) q.return = m, V = q;
                                    else for(; null !== V;){
                                        m = V;
                                        var r = m.sibling, y = m.return;
                                        Tj(m);
                                        if (m === l) {
                                            V = null;
                                            break;
                                        }
                                        if (null !== r) {
                                            r.return = y;
                                            V = r;
                                            break;
                                        }
                                        V = y;
                                    }
                                }
                            }
                            var n = f.alternate;
                            if (null !== n) {
                                var t = n.child;
                                if (null !== t) {
                                    n.child = null;
                                    do {
                                        var J = t.sibling;
                                        t.sibling = null;
                                        t = J;
                                    }while (null !== t)
                                }
                            }
                            V = f;
                        }
                    }
                    if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, V = g;
                    else b: for(; null !== V;){
                        f = V;
                        if (0 !== (f.flags & 2048)) switch(f.tag){
                            case 0:
                            case 11:
                            case 15:
                                Qj(9, f, f.return);
                        }
                        var x = f.sibling;
                        if (null !== x) {
                            x.return = f.return;
                            V = x;
                            break b;
                        }
                        V = f.return;
                    }
                }
                var w = a.current;
                for(V = w; null !== V;){
                    g = V;
                    var u = g.child;
                    if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V = u;
                    else b: for(g = w; null !== V;){
                        h = V;
                        if (0 !== (h.flags & 2048)) try {
                            switch(h.tag){
                                case 0:
                                case 11:
                                case 15:
                                    Rj(9, h);
                            }
                        } catch (na) {
                            W(h, h.return, na);
                        }
                        if (h === g) {
                            V = null;
                            break b;
                        }
                        var F = h.sibling;
                        if (null !== F) {
                            F.return = h.return;
                            V = F;
                            break b;
                        }
                        V = h.return;
                    }
                }
                K = e;
                jg();
                if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
                    lc.onPostCommitFiberRoot(kc, a);
                } catch (na) {}
                d = !0;
            }
            return d;
        } finally{
            C = c, pk.transition = b;
        }
    }
    return !1;
}
function Yk(a, b, c) {
    b = Ki(c, b);
    b = Oi(a, b, 1);
    a = dh(a, b, 1);
    b = L();
    null !== a && (Ac(a, 1, b), Ek(a, b));
}
function W(a, b, c) {
    if (3 === a.tag) Yk(a, a, c);
    else for(; null !== b;){
        if (3 === b.tag) {
            Yk(b, a, c);
            break;
        } else if (1 === b.tag) {
            var d = b.stateNode;
            if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Si || !Si.has(d))) {
                a = Ki(c, a);
                a = Ri(b, a, 1);
                b = dh(b, a, 1);
                a = L();
                null !== b && (Ac(b, 1, a), Ek(b, a));
                break;
            }
        }
        b = b.return;
    }
}
function Ui(a, b, c) {
    var d = a.pingCache;
    null !== d && d.delete(b);
    b = L();
    a.pingedLanes |= a.suspendedLanes & c;
    R === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - gk ? Lk(a, 0) : sk |= c);
    Ek(a, b);
}
function Zk(a, b) {
    0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
    var c = L();
    a = Zg(a, b);
    null !== a && (Ac(a, b, c), Ek(a, c));
}
function vj(a) {
    var b = a.memoizedState, c = 0;
    null !== b && (c = b.retryLane);
    Zk(a, c);
}
function ck(a, b) {
    var c = 0;
    switch(a.tag){
        case 13:
            var d = a.stateNode;
            var e = a.memoizedState;
            null !== e && (c = e.retryLane);
            break;
        case 19:
            d = a.stateNode;
            break;
        default:
            throw Error(p(314));
    }
    null !== d && d.delete(b);
    Zk(a, c);
}
var Wk;
Wk = function(a, b, c) {
    if (null !== a) {
        if (a.memoizedProps !== b.pendingProps || Wf.current) Ug = !0;
        else {
            if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return Ug = !1, zj(a, b, c);
            Ug = 0 !== (a.flags & 131072) ? !0 : !1;
        }
    } else Ug = !1, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
    b.lanes = 0;
    switch(b.tag){
        case 2:
            var d = b.type;
            jj(a, b);
            a = b.pendingProps;
            var e = Yf(b, H.current);
            Tg(b, c);
            e = Xh(null, b, d, a, e, c);
            var f = bi();
            b.flags |= 1;
            "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = !0, cg(b)) : f = !1, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, ah(b), e.updater = nh, b.stateNode = e, e._reactInternals = b, rh(b, d, a, c), b = kj(null, b, d, !0, f, c)) : (b.tag = 0, I && f && vg(b), Yi(null, b, e, c), b = b.child);
            return b;
        case 16:
            d = b.elementType;
            a: {
                jj(a, b);
                a = b.pendingProps;
                e = d._init;
                d = e(d._payload);
                b.type = d;
                e = b.tag = $k(d);
                a = Lg(d, a);
                switch(e){
                    case 0:
                        b = dj(null, b, d, a, c);
                        break a;
                    case 1:
                        b = ij(null, b, d, a, c);
                        break a;
                    case 11:
                        b = Zi(null, b, d, a, c);
                        break a;
                    case 14:
                        b = aj(null, b, d, Lg(d.type, a), c);
                        break a;
                }
                throw Error(p(306, d, ""));
            }
            return b;
        case 0:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), dj(a, b, d, e, c);
        case 1:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), ij(a, b, d, e, c);
        case 3:
            a: {
                lj(b);
                if (null === a) throw Error(p(387));
                d = b.pendingProps;
                f = b.memoizedState;
                e = f.element;
                bh(a, b);
                gh(b, d, null, c);
                var g = b.memoizedState;
                d = g.element;
                if (f.isDehydrated) {
                    if (f = {
                        element: d,
                        isDehydrated: !1,
                        cache: g.cache,
                        pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
                        transitions: g.transitions
                    }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
                        e = Ki(Error(p(423)), b);
                        b = mj(a, b, d, c, e);
                        break a;
                    } else if (d !== e) {
                        e = Ki(Error(p(424)), b);
                        b = mj(a, b, d, c, e);
                        break a;
                    } else for(yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = !0, zg = null, c = Ch(b, null, d, c), b.child = c; c;)c.flags = c.flags & -3 | 4096, c = c.sibling;
                } else {
                    Ig();
                    if (d === e) {
                        b = $i(a, b, c);
                        break a;
                    }
                    Yi(a, b, d, c);
                }
                b = b.child;
            }
            return b;
        case 5:
            return Kh(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f && Ef(d, f) && (b.flags |= 32), hj(a, b), Yi(a, b, g, c), b.child;
        case 6:
            return null === a && Eg(b), null;
        case 13:
            return pj(a, b, c);
        case 4:
            return Ih(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Bh(b, null, d, c) : Yi(a, b, d, c), b.child;
        case 11:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), Zi(a, b, d, e, c);
        case 7:
            return Yi(a, b, b.pendingProps, c), b.child;
        case 8:
            return Yi(a, b, b.pendingProps.children, c), b.child;
        case 12:
            return Yi(a, b, b.pendingProps.children, c), b.child;
        case 10:
            a: {
                d = b.type._context;
                e = b.pendingProps;
                f = b.memoizedProps;
                g = e.value;
                G(Mg, d._currentValue);
                d._currentValue = g;
                if (null !== f) {
                    if (He(f.value, g)) {
                        if (f.children === e.children && !Wf.current) {
                            b = $i(a, b, c);
                            break a;
                        }
                    } else for(f = b.child, null !== f && (f.return = b); null !== f;){
                        var h = f.dependencies;
                        if (null !== h) {
                            g = f.child;
                            for(var k = h.firstContext; null !== k;){
                                if (k.context === d) {
                                    if (1 === f.tag) {
                                        k = ch(-1, c & -c);
                                        k.tag = 2;
                                        var l = f.updateQueue;
                                        if (null !== l) {
                                            l = l.shared;
                                            var m = l.pending;
                                            null === m ? k.next = k : (k.next = m.next, m.next = k);
                                            l.pending = k;
                                        }
                                    }
                                    f.lanes |= c;
                                    k = f.alternate;
                                    null !== k && (k.lanes |= c);
                                    Sg(f.return, c, b);
                                    h.lanes |= c;
                                    break;
                                }
                                k = k.next;
                            }
                        } else if (10 === f.tag) g = f.type === b.type ? null : f.child;
                        else if (18 === f.tag) {
                            g = f.return;
                            if (null === g) throw Error(p(341));
                            g.lanes |= c;
                            h = g.alternate;
                            null !== h && (h.lanes |= c);
                            Sg(g, c, b);
                            g = f.sibling;
                        } else g = f.child;
                        if (null !== g) g.return = f;
                        else for(g = f; null !== g;){
                            if (g === b) {
                                g = null;
                                break;
                            }
                            f = g.sibling;
                            if (null !== f) {
                                f.return = g.return;
                                g = f;
                                break;
                            }
                            g = g.return;
                        }
                        f = g;
                    }
                }
                Yi(a, b, e.children, c);
                b = b.child;
            }
            return b;
        case 9:
            return e = b.type, d = b.pendingProps.children, Tg(b, c), e = Vg(e), d = d(e), b.flags |= 1, Yi(a, b, d, c), b.child;
        case 14:
            return d = b.type, e = Lg(d, b.pendingProps), e = Lg(d.type, e), aj(a, b, d, e, c);
        case 15:
            return cj(a, b, b.type, b.pendingProps, c);
        case 17:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), jj(a, b), b.tag = 1, Zf(d) ? (a = !0, cg(b)) : a = !1, Tg(b, c), ph(b, d, e), rh(b, d, e, c), kj(null, b, d, !0, a, c);
        case 19:
            return yj(a, b, c);
        case 22:
            return ej(a, b, c);
    }
    throw Error(p(156, b.tag));
};
function Gk(a, b) {
    return ac(a, b);
}
function al(a, b, c, d) {
    this.tag = a;
    this.key = c;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = d;
    this.subtreeFlags = this.flags = 0;
    this.deletions = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
}
function Bg(a, b, c, d) {
    return new al(a, b, c, d);
}
function bj(a) {
    a = a.prototype;
    return !(!a || !a.isReactComponent);
}
function $k(a) {
    if ("function" === typeof a) return bj(a) ? 1 : 0;
    if (void 0 !== a && null !== a) {
        a = a.$$typeof;
        if (a === Da) return 11;
        if (a === Ga) return 14;
    }
    return 2;
}
function wh(a, b) {
    var c = a.alternate;
    null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
    c.flags = a.flags & 14680064;
    c.childLanes = a.childLanes;
    c.lanes = a.lanes;
    c.child = a.child;
    c.memoizedProps = a.memoizedProps;
    c.memoizedState = a.memoizedState;
    c.updateQueue = a.updateQueue;
    b = a.dependencies;
    c.dependencies = null === b ? null : {
        lanes: b.lanes,
        firstContext: b.firstContext
    };
    c.sibling = a.sibling;
    c.index = a.index;
    c.ref = a.ref;
    return c;
}
function yh(a, b, c, d, e, f) {
    var g = 2;
    d = a;
    if ("function" === typeof a) bj(a) && (g = 1);
    else if ("string" === typeof a) g = 5;
    else a: switch(a){
        case ya:
            return Ah(c.children, e, f, b);
        case za:
            g = 8;
            e |= 8;
            break;
        case Aa:
            return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f, a;
        case Ea:
            return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f, a;
        case Fa:
            return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f, a;
        case Ia:
            return qj(c, e, f, b);
        default:
            if ("object" === typeof a && null !== a) switch(a.$$typeof){
                case Ba:
                    g = 10;
                    break a;
                case Ca:
                    g = 9;
                    break a;
                case Da:
                    g = 11;
                    break a;
                case Ga:
                    g = 14;
                    break a;
                case Ha:
                    g = 16;
                    d = null;
                    break a;
            }
            throw Error(p(130, null == a ? a : typeof a, ""));
    }
    b = Bg(g, c, b, e);
    b.elementType = a;
    b.type = d;
    b.lanes = f;
    return b;
}
function Ah(a, b, c, d) {
    a = Bg(7, a, d, b);
    a.lanes = c;
    return a;
}
function qj(a, b, c, d) {
    a = Bg(22, a, d, b);
    a.elementType = Ia;
    a.lanes = c;
    a.stateNode = {
        isHidden: !1
    };
    return a;
}
function xh(a, b, c) {
    a = Bg(6, a, null, b);
    a.lanes = c;
    return a;
}
function zh(a, b, c) {
    b = Bg(4, null !== a.children ? a.children : [], a.key, b);
    b.lanes = c;
    b.stateNode = {
        containerInfo: a.containerInfo,
        pendingChildren: null,
        implementation: a.implementation
    };
    return b;
}
function bl(a, b, c, d, e) {
    this.tag = b;
    this.containerInfo = a;
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = -1;
    this.callbackNode = this.pendingContext = this.context = null;
    this.callbackPriority = 0;
    this.eventTimes = zc(0);
    this.expirationTimes = zc(-1);
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = zc(0);
    this.identifierPrefix = d;
    this.onRecoverableError = e;
    this.mutableSourceEagerHydrationData = null;
}
function cl(a, b, c, d, e, f, g, h, k) {
    a = new bl(a, b, c, h, k);
    1 === b ? (b = 1, !0 === f && (b |= 8)) : b = 0;
    f = Bg(3, null, null, b);
    a.current = f;
    f.stateNode = a;
    f.memoizedState = {
        element: d,
        isDehydrated: c,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    };
    ah(f);
    return a;
}
function dl(a, b, c) {
    var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return {
        $$typeof: wa,
        key: null == d ? null : "" + d,
        children: a,
        containerInfo: b,
        implementation: c
    };
}
function el(a) {
    if (!a) return Vf;
    a = a._reactInternals;
    a: {
        if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
        var b = a;
        do {
            switch(b.tag){
                case 3:
                    b = b.stateNode.context;
                    break a;
                case 1:
                    if (Zf(b.type)) {
                        b = b.stateNode.__reactInternalMemoizedMergedChildContext;
                        break a;
                    }
            }
            b = b.return;
        }while (null !== b)
        throw Error(p(171));
    }
    if (1 === a.tag) {
        var c = a.type;
        if (Zf(c)) return bg(a, c, b);
    }
    return b;
}
function fl(a, b, c, d, e, f, g, h, k) {
    a = cl(c, d, !0, a, e, f, g, h, k);
    a.context = el(null);
    c = a.current;
    d = L();
    e = lh(c);
    f = ch(d, e);
    f.callback = void 0 !== b && null !== b ? b : null;
    dh(c, f, e);
    a.current.lanes = e;
    Ac(a, e, d);
    Ek(a, d);
    return a;
}
function gl(a, b, c, d) {
    var e = b.current, f = L(), g = lh(e);
    c = el(c);
    null === b.context ? b.context = c : b.pendingContext = c;
    b = ch(f, g);
    b.payload = {
        element: a
    };
    d = void 0 === d ? null : d;
    null !== d && (b.callback = d);
    a = dh(e, b, g);
    null !== a && (mh(a, e, g, f), eh(a, e, g));
    return g;
}
function hl(a) {
    a = a.current;
    if (!a.child) return null;
    switch(a.child.tag){
        case 5:
            return a.child.stateNode;
        default:
            return a.child.stateNode;
    }
}
function il(a, b) {
    a = a.memoizedState;
    if (null !== a && null !== a.dehydrated) {
        var c = a.retryLane;
        a.retryLane = 0 !== c && c < b ? c : b;
    }
}
function jl(a, b) {
    il(a, b);
    (a = a.alternate) && il(a, b);
}
function kl() {
    return null;
}
var ll = "function" === typeof reportError ? reportError : function(a) {
    console.error(a);
};
function ml(a) {
    this._internalRoot = a;
}
nl.prototype.render = ml.prototype.render = function(a) {
    var b = this._internalRoot;
    if (null === b) throw Error(p(409));
    gl(a, b, null, null);
};
nl.prototype.unmount = ml.prototype.unmount = function() {
    var a = this._internalRoot;
    if (null !== a) {
        this._internalRoot = null;
        var b = a.containerInfo;
        Sk(function() {
            gl(null, a, null, null);
        });
        b[uf] = null;
    }
};
function nl(a) {
    this._internalRoot = a;
}
nl.prototype.unstable_scheduleHydration = function(a) {
    if (a) {
        var b = Hc();
        a = {
            blockedOn: null,
            target: a,
            priority: b
        };
        for(var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++);
        Qc.splice(c, 0, a);
        0 === c && Vc(a);
    }
};
function ol(a) {
    return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
}
function pl(a) {
    return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}
function ql() {}
function rl(a, b, c, d, e) {
    if (e) {
        if ("function" === typeof d) {
            var f = d;
            d = function() {
                var a = hl(g);
                f.call(a);
            };
        }
        var g = fl(b, d, a, 0, null, !1, !1, "", ql);
        a._reactRootContainer = g;
        a[uf] = g.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        Sk();
        return g;
    }
    for(; e = a.lastChild;)a.removeChild(e);
    if ("function" === typeof d) {
        var h = d;
        d = function() {
            var a = hl(k);
            h.call(a);
        };
    }
    var k = cl(a, 0, !1, null, null, !1, !1, "", ql);
    a._reactRootContainer = k;
    a[uf] = k.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    Sk(function() {
        gl(b, k, c, d);
    });
    return k;
}
function sl(a, b, c, d, e) {
    var f = c._reactRootContainer;
    if (f) {
        var g = f;
        if ("function" === typeof e) {
            var h = e;
            e = function() {
                var a = hl(g);
                h.call(a);
            };
        }
        gl(b, g, a, e);
    } else g = rl(c, b, a, e, d);
    return hl(g);
}
Ec = function(a) {
    switch(a.tag){
        case 3:
            var b = a.stateNode;
            if (b.current.memoizedState.isDehydrated) {
                var c = tc(b.pendingLanes);
                0 !== c && (Cc(b, c | 1), Ek(b, B()), 0 === (K & 6) && (Hj = B() + 500, jg()));
            }
            break;
        case 13:
            Sk(function() {
                var b = Zg(a, 1);
                if (null !== b) {
                    var c = L();
                    mh(b, a, 1, c);
                }
            }), jl(a, 1);
    }
};
Fc = function(a) {
    if (13 === a.tag) {
        var b = Zg(a, 134217728);
        if (null !== b) {
            var c = L();
            mh(b, a, 134217728, c);
        }
        jl(a, 134217728);
    }
};
Gc = function(a) {
    if (13 === a.tag) {
        var b = lh(a), c = Zg(a, b);
        if (null !== c) {
            var d = L();
            mh(c, a, b, d);
        }
        jl(a, b);
    }
};
Hc = function() {
    return C;
};
Ic = function(a, b) {
    var c = C;
    try {
        return C = a, b();
    } finally{
        C = c;
    }
};
yb = function(a, b, c) {
    switch(b){
        case "input":
            bb(a, c);
            b = c.name;
            if ("radio" === c.type && null != b) {
                for(c = a; c.parentNode;)c = c.parentNode;
                c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
                for(b = 0; b < c.length; b++){
                    var d = c[b];
                    if (d !== a && d.form === a.form) {
                        var e = Db(d);
                        if (!e) throw Error(p(90));
                        Wa(d);
                        bb(d, e);
                    }
                }
            }
            break;
        case "textarea":
            ib(a, c);
            break;
        case "select":
            b = c.value, null != b && fb(a, !!c.multiple, b, !1);
    }
};
Gb = Rk;
Hb = Sk;
var tl = {
    usingClientEntryPoint: !1,
    Events: [
        Cb,
        ue,
        Db,
        Eb,
        Fb,
        Rk
    ]
}, ul = {
    findFiberByHostInstance: Wc,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom"
};
var vl = {
    bundleType: ul.bundleType,
    version: ul.version,
    rendererPackageName: ul.rendererPackageName,
    rendererConfig: ul.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ua.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(a) {
        a = Zb(a);
        return null === a ? null : a.stateNode;
    },
    findFiberByHostInstance: ul.findFiberByHostInstance || kl,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
};
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
    var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!wl.isDisabled && wl.supportsFiber) try {
        kc = wl.inject(vl), lc = wl;
    } catch (a) {}
}
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
exports.createPortal = function(a, b) {
    var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!ol(b)) throw Error(p(200));
    return dl(a, b, null, c);
};
exports.createRoot = function(a, b) {
    if (!ol(a)) throw Error(p(299));
    var c = !1, d = "", e = ll;
    null !== b && void 0 !== b && (!0 === b.unstable_strictMode && (c = !0), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
    b = cl(a, 1, !1, null, null, c, !1, d, e);
    a[uf] = b.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    return new ml(b);
};
exports.findDOMNode = function(a) {
    if (null == a) return null;
    if (1 === a.nodeType) return a;
    var b = a._reactInternals;
    if (void 0 === b) {
        if ("function" === typeof a.render) throw Error(p(188));
        a = Object.keys(a).join(",");
        throw Error(p(268, a));
    }
    a = Zb(b);
    a = null === a ? null : a.stateNode;
    return a;
};
exports.flushSync = function(a) {
    return Sk(a);
};
exports.hydrate = function(a, b, c) {
    if (!pl(b)) throw Error(p(200));
    return sl(null, a, b, !0, c);
};
exports.hydrateRoot = function(a, b, c) {
    if (!ol(a)) throw Error(p(405));
    var d = null != c && c.hydratedSources || null, e = !1, f = "", g = ll;
    null !== c && void 0 !== c && (!0 === c.unstable_strictMode && (e = !0), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
    b = fl(b, null, a, 1, null != c ? c : null, e, !1, f, g);
    a[uf] = b.current;
    sf(a);
    if (d) for(a = 0; a < d.length; a++)c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [
        c,
        e
    ] : b.mutableSourceEagerHydrationData.push(c, e);
    return new nl(b);
};
exports.render = function(a, b, c) {
    if (!pl(b)) throw Error(p(200));
    return sl(null, a, b, !1, c);
};
exports.unmountComponentAtNode = function(a) {
    if (!pl(a)) throw Error(p(40));
    return a._reactRootContainer ? (Sk(function() {
        sl(null, null, a, !1, function() {
            a._reactRootContainer = null;
            a[uf] = null;
        });
    }), !0) : !1;
};
exports.unstable_batchedUpdates = Rk;
exports.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
    if (!pl(c)) throw Error(p(200));
    if (null == a || void 0 === a._reactInternals) throw Error(p(38));
    return sl(a, b, c, !1, d);
};
exports.version = "18.2.0-next-9e3b772b8-20220608";
}),
"745": (function (__unused_webpack_module, exports, __webpack_require__) {
'use strict';
var m = __webpack_require__(/*! react-dom */"3935");
var i;
exports.createRoot = m.createRoot;
exports.hydrateRoot = m.hydrateRoot;
}),
"3935": (function (module, __unused_webpack_exports, __webpack_require__) {
'use strict';
function checkDCE() {
    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') return;
    try {
        // Verify that the code above has been dead code eliminated (DCE'd).
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
        // DevTools shouldn't crash React, no matter what.
        // We should still report in case we break this code.
        console.error(err);
    }
}
// DCE check should happen before ReactDOM bundle executes so that
// DevTools can report bad minification during injection.
checkDCE();
module.exports = __webpack_require__(/*! ./cjs/react-dom.production.min.js */"4448");
}),
"5251": (function (__unused_webpack_module, exports, __webpack_require__) {
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
var f = __webpack_require__(/*! react */"7294"), k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for(b in a)m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps) for(b in a = c.defaultProps, a)void 0 === d[b] && (d[b] = a[b]);
    return {
        $$typeof: k,
        type: c,
        key: e,
        ref: h,
        props: d,
        _owner: n.current
    };
}
exports.Fragment = l;
exports.jsx = q;
exports.jsxs = q;
}),
"2408": (function (__unused_webpack_module, exports) {
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
var l = Symbol.for("react.element"), n = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z = Symbol.iterator;
function A(a) {
    if (null === a || "object" !== typeof a) return null;
    a = z && a[z] || a["@@iterator"];
    return "function" === typeof a ? a : null;
}
var B = {
    isMounted: function() {
        return !1;
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}, C = Object.assign, D = {};
function E(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = D;
    this.updater = e || B;
}
E.prototype.isReactComponent = {};
E.prototype.setState = function(a, b) {
    if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a, b, "setState");
};
E.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F() {}
F.prototype = E.prototype;
function G(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = D;
    this.updater = e || B;
}
var H = G.prototype = new F;
H.constructor = G;
C(H, E.prototype);
H.isPureReactComponent = !0;
var I = Array.isArray, J = Object.prototype.hasOwnProperty, K = {
    current: null
}, L = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function M(a, b, e) {
    var d, c = {}, k = null, h = null;
    if (null != b) for(d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b)J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
    var g = arguments.length - 2;
    if (1 === g) c.children = e;
    else if (1 < g) {
        for(var f = Array(g), m = 0; m < g; m++)f[m] = arguments[m + 2];
        c.children = f;
    }
    if (a && a.defaultProps) for(d in g = a.defaultProps, g)void 0 === c[d] && (c[d] = g[d]);
    return {
        $$typeof: l,
        type: a,
        key: k,
        ref: h,
        props: c,
        _owner: K.current
    };
}
function N(a, b) {
    return {
        $$typeof: l,
        type: a.type,
        key: b,
        ref: a.ref,
        props: a.props,
        _owner: a._owner
    };
}
function O(a) {
    return "object" === typeof a && null !== a && a.$$typeof === l;
}
function escape(a) {
    var b = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + a.replace(/[=:]/g, function(a) {
        return b[a];
    });
}
var P = /\/+/g;
function Q(a, b) {
    return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function R(a, b, e, d, c) {
    var k = typeof a;
    if ("undefined" === k || "boolean" === k) a = null;
    var h = !1;
    if (null === a) h = !0;
    else switch(k){
        case "string":
        case "number":
            h = !0;
            break;
        case "object":
            switch(a.$$typeof){
                case l:
                case n:
                    h = !0;
            }
    }
    if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a) {
        return a;
    })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
    h = 0;
    d = "" === d ? "." : d + ":";
    if (I(a)) for(var g = 0; g < a.length; g++){
        k = a[g];
        var f = d + Q(k, g);
        h += R(k, b, e, f, c);
    }
    else if (f = A(a), "function" === typeof f) for(a = f.call(a), g = 0; !(k = a.next()).done;)k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
    else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
    return h;
}
function S(a, b, e) {
    if (null == a) return a;
    var d = [], c = 0;
    R(a, d, "", "", function(a) {
        return b.call(e, a, c++);
    });
    return d;
}
function T(a) {
    if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(b) {
            if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
        }, function(b) {
            if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
        });
        -1 === a._status && (a._status = 0, a._result = b);
    }
    if (1 === a._status) return a._result.default;
    throw a._result;
}
var U = {
    current: null
}, V = {
    transition: null
}, W = {
    ReactCurrentDispatcher: U,
    ReactCurrentBatchConfig: V,
    ReactCurrentOwner: K
};
exports.Children = {
    map: S,
    forEach: function(a, b, e) {
        S(a, function() {
            b.apply(this, arguments);
        }, e);
    },
    count: function(a) {
        var b = 0;
        S(a, function() {
            b++;
        });
        return b;
    },
    toArray: function(a) {
        return S(a, function(a) {
            return a;
        }) || [];
    },
    only: function(a) {
        if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
        return a;
    }
};
exports.Component = E;
exports.Fragment = p;
exports.Profiler = r;
exports.PureComponent = G;
exports.StrictMode = q;
exports.Suspense = w;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
exports.cloneElement = function(a, b, e) {
    if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
    var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
    if (null != b) {
        void 0 !== b.ref && (k = b.ref, h = K.current);
        void 0 !== b.key && (c = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for(f in b)J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
    }
    var f = arguments.length - 2;
    if (1 === f) d.children = e;
    else if (1 < f) {
        g = Array(f);
        for(var m = 0; m < f; m++)g[m] = arguments[m + 2];
        d.children = g;
    }
    return {
        $$typeof: l,
        type: a.type,
        key: c,
        ref: k,
        props: d,
        _owner: h
    };
};
exports.createContext = function(a) {
    a = {
        $$typeof: u,
        _currentValue: a,
        _currentValue2: a,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    };
    a.Provider = {
        $$typeof: t,
        _context: a
    };
    return a.Consumer = a;
};
exports.createElement = M;
exports.createFactory = function(a) {
    var b = M.bind(null, a);
    b.type = a;
    return b;
};
exports.createRef = function() {
    return {
        current: null
    };
};
exports.forwardRef = function(a) {
    return {
        $$typeof: v,
        render: a
    };
};
exports.isValidElement = O;
exports.lazy = function(a) {
    return {
        $$typeof: y,
        _payload: {
            _status: -1,
            _result: a
        },
        _init: T
    };
};
exports.memo = function(a, b) {
    return {
        $$typeof: x,
        type: a,
        compare: void 0 === b ? null : b
    };
};
exports.startTransition = function(a) {
    var b = V.transition;
    V.transition = {};
    try {
        a();
    } finally{
        V.transition = b;
    }
};
exports.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
};
exports.useCallback = function(a, b) {
    return U.current.useCallback(a, b);
};
exports.useContext = function(a) {
    return U.current.useContext(a);
};
exports.useDebugValue = function() {};
exports.useDeferredValue = function(a) {
    return U.current.useDeferredValue(a);
};
exports.useEffect = function(a, b) {
    return U.current.useEffect(a, b);
};
exports.useId = function() {
    return U.current.useId();
};
exports.useImperativeHandle = function(a, b, e) {
    return U.current.useImperativeHandle(a, b, e);
};
exports.useInsertionEffect = function(a, b) {
    return U.current.useInsertionEffect(a, b);
};
exports.useLayoutEffect = function(a, b) {
    return U.current.useLayoutEffect(a, b);
};
exports.useMemo = function(a, b) {
    return U.current.useMemo(a, b);
};
exports.useReducer = function(a, b, e) {
    return U.current.useReducer(a, b, e);
};
exports.useRef = function(a) {
    return U.current.useRef(a);
};
exports.useState = function(a) {
    return U.current.useState(a);
};
exports.useSyncExternalStore = function(a, b, e) {
    return U.current.useSyncExternalStore(a, b, e);
};
exports.useTransition = function() {
    return U.current.useTransition();
};
exports.version = "18.2.0";
}),
"7294": (function (module, __unused_webpack_exports, __webpack_require__) {
'use strict';
module.exports = __webpack_require__(/*! ./cjs/react.production.min.js */"2408");
}),
"5893": (function (module, __unused_webpack_exports, __webpack_require__) {
'use strict';
module.exports = __webpack_require__(/*! ./cjs/react-jsx-runtime.production.min.js */"5251");
}),
"53": (function (__unused_webpack_module, exports) {
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
function f(a, b) {
    var c = a.length;
    a.push(b);
    a: for(; 0 < c;){
        var d = c - 1 >>> 1, e = a[d];
        if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;
        else break a;
    }
}
function h(a) {
    return 0 === a.length ? null : a[0];
}
function k(a) {
    if (0 === a.length) return null;
    var b = a[0], c = a.pop();
    if (c !== b) {
        a[0] = c;
        a: for(var d = 0, e = a.length, w = e >>> 1; d < w;){
            var m = 2 * (d + 1) - 1, C = a[m], n = m + 1, x = a[n];
            if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);
            else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n;
            else break a;
        }
    }
    return b;
}
function g(a, b) {
    var c = a.sortIndex - b.sortIndex;
    return 0 !== c ? c : a.id - b.id;
}
if ("object" === typeof performance && "function" === typeof performance.now) {
    var l = performance;
    exports.unstable_now = function() {
        return l.now();
    };
} else {
    var p = Date, q = p.now();
    exports.unstable_now = function() {
        return p.now() - q;
    };
}
var r = [], t = [], u = 1, v = null, y = 3, z = !1, A = !1, B = !1, D = "function" === typeof setTimeout ? setTimeout : null, E = "function" === typeof clearTimeout ? clearTimeout : null, F = "undefined" !== typeof setImmediate ? setImmediate : null;
"undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
function G(a) {
    for(var b = h(t); null !== b;){
        if (null === b.callback) k(t);
        else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, f(r, b);
        else break;
        b = h(t);
    }
}
function H(a) {
    B = !1;
    G(a);
    if (!A) {
        if (null !== h(r)) A = !0, I(J);
        else {
            var b = h(t);
            null !== b && K(H, b.startTime - a);
        }
    }
}
function J(a, b) {
    A = !1;
    B && (B = !1, E(L), L = -1);
    z = !0;
    var c = y;
    try {
        G(b);
        for(v = h(r); null !== v && (!(v.expirationTime > b) || a && !M());){
            var d = v.callback;
            if ("function" === typeof d) {
                v.callback = null;
                y = v.priorityLevel;
                var e = d(v.expirationTime <= b);
                b = exports.unstable_now();
                "function" === typeof e ? v.callback = e : v === h(r) && k(r);
                G(b);
            } else k(r);
            v = h(r);
        }
        if (null !== v) var w = !0;
        else {
            var m = h(t);
            null !== m && K(H, m.startTime - b);
            w = !1;
        }
        return w;
    } finally{
        v = null, y = c, z = !1;
    }
}
var N = !1, O = null, L = -1, P = 5, Q = -1;
function M() {
    return exports.unstable_now() - Q < P ? !1 : !0;
}
function R() {
    if (null !== O) {
        var a = exports.unstable_now();
        Q = a;
        var b = !0;
        try {
            b = O(!0, a);
        } finally{
            b ? S() : (N = !1, O = null);
        }
    } else N = !1;
}
var S;
if ("function" === typeof F) S = function() {
    F(R);
};
else if ("undefined" !== typeof MessageChannel) {
    var T = new MessageChannel, U = T.port2;
    T.port1.onmessage = R;
    S = function() {
        U.postMessage(null);
    };
} else S = function() {
    D(R, 0);
};
function I(a) {
    O = a;
    N || (N = !0, S());
}
function K(a, b) {
    L = D(function() {
        a(exports.unstable_now());
    }, b);
}
exports.unstable_IdlePriority = 5;
exports.unstable_ImmediatePriority = 1;
exports.unstable_LowPriority = 4;
exports.unstable_NormalPriority = 3;
exports.unstable_Profiling = null;
exports.unstable_UserBlockingPriority = 2;
exports.unstable_cancelCallback = function(a) {
    a.callback = null;
};
exports.unstable_continueExecution = function() {
    A || z || (A = !0, I(J));
};
exports.unstable_forceFrameRate = function(a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1E3 / a) : 5;
};
exports.unstable_getCurrentPriorityLevel = function() {
    return y;
};
exports.unstable_getFirstCallbackNode = function() {
    return h(r);
};
exports.unstable_next = function(a) {
    switch(y){
        case 1:
        case 2:
        case 3:
            var b = 3;
            break;
        default:
            b = y;
    }
    var c = y;
    y = b;
    try {
        return a();
    } finally{
        y = c;
    }
};
exports.unstable_pauseExecution = function() {};
exports.unstable_requestPaint = function() {};
exports.unstable_runWithPriority = function(a, b) {
    switch(a){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            a = 3;
    }
    var c = y;
    y = a;
    try {
        return b();
    } finally{
        y = c;
    }
};
exports.unstable_scheduleCallback = function(a, b, c) {
    var d = exports.unstable_now();
    "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
    switch(a){
        case 1:
            var e = -1;
            break;
        case 2:
            e = 250;
            break;
        case 5:
            e = 1073741823;
            break;
        case 4:
            e = 1E4;
            break;
        default:
            e = 5E3;
    }
    e = c + e;
    a = {
        id: u++,
        callback: b,
        priorityLevel: a,
        startTime: c,
        expirationTime: e,
        sortIndex: -1
    };
    c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = !0, K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = !0, I(J)));
    return a;
};
exports.unstable_shouldYield = M;
exports.unstable_wrapCallback = function(a) {
    var b = y;
    return function() {
        var c = y;
        y = b;
        try {
            return a.apply(this, arguments);
        } finally{
            y = c;
        }
    };
};
}),
"3840": (function (module, __unused_webpack_exports, __webpack_require__) {
'use strict';
module.exports = __webpack_require__(/*! ./cjs/scheduler.production.min.js */"53");
}),
"6239": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2020 JiHong Lee.
 * MIT license.
 */ 'use strict';
var __WEBPACK_DEFAULT_EXPORT__ = {
    // rtl icon
    rtl: {
        italic: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.5 15.8" xml:space="preserve"><g><path d="M0.3,0.1c0.3,0,0.5,0,0.7,0c1,0.1,1.7,0.1,2.2,0.1H4L7.2,0l0.2,1.1H7c-0.5,0-1,0.1-1.5,0.3v0.4l0.3,1.9L6,4.4L6.3,6 l0.1,0.4l0.1,0.5c0.1,0.2,0.1,0.4,0.2,0.7s0.1,0.6,0.2,0.9L7,9.1l0.6,2.8l0.3,1.4c0.1,0.4,0.2,0.7,0.4,1c0.4,0.2,0.8,0.3,1.2,0.4 l0.8,0.2l0.2,0.9l-1.1,0c-0.9-0.1-1.5-0.1-1.8-0.1h-2c-0.9,0.1-1.4,0.2-1.5,0.2c-0.1,0-0.2,0-0.3,0H3.4c-0.1,0-0.2,0-0.2,0 l-0.1-0.4c0-0.2-0.1-0.4-0.1-0.6l0.7-0.1c0.4,0,0.8-0.1,1.2-0.2c0-0.1,0-0.2,0-0.3l-0.1-0.5l-0.4-2.4L4,9.6L3.4,6.4 C3.2,5.7,3,4.7,2.7,3.3c0-0.3-0.1-0.5-0.1-0.8C2.5,2.1,2.4,1.9,2.3,1.6C2,1.4,1.6,1.3,1.3,1.2C0.9,1.2,0.5,1.1,0.2,0.9L0,0.4L0,0 L0.3,0.1L0.3,0.1z"/></g></svg>',
        indent: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.7 12.4" xml:space="preserve"><g><g><path d="M15.5,10.1L15.5,10.1c0.1,0,0.3,0.1,0.3,0.3v1.7c0,0.1,0,0.1-0.1,0.2c-0.1,0.1-0.1,0.1-0.2,0.1l-15.2,0 c-0.1,0-0.1,0-0.2-0.1C0,12.2,0,12.2,0,12.1l0-1.7c0-0.1,0-0.1,0.1-0.2c0.1-0.1,0.1-0.1,0.2-0.1C0.3,10.1,15.5,10.1,15.5,10.1z M9.8,6.7c0.1,0,0.1,0,0.2,0.1C10.1,6.9,10.1,7,10.1,7v1.7c0,0.1,0,0.2-0.1,0.2C10,9,9.9,9,9.8,9L0.3,9C0.2,9,0.1,9,0.1,8.9 C0,8.9,0,8.8,0,8.7V7C0,7,0,6.9,0.1,6.8c0.1-0.1,0.1-0.1,0.2-0.1C0.3,6.7,9.8,6.7,9.8,6.7z M0.3,3.4h9.6h0c0.1,0,0.3,0.1,0.3,0.3 v1.7v0c0,0.1-0.1,0.3-0.3,0.3H0.3c-0.1,0-0.1,0-0.2-0.1C0,5.5,0,5.4,0,5.3V3.6c0-0.1,0-0.1,0.1-0.2C0.1,3.4,0.2,3.4,0.3,3.4 L0.3,3.4z M0.3,0l15.2,0c0.1,0,0.1,0,0.2,0.1c0.1,0.1,0.1,0.1,0.1,0.2V2c0,0.1,0,0.2-0.1,0.2c-0.1,0.1-0.1,0.1-0.2,0.1H0.3 c-0.1,0-0.1,0-0.2-0.1C0,2.1,0,2,0,2l0-1.7c0-0.1,0-0.1,0.1-0.2C0.1,0,0.2,0,0.3,0z"/></g><path d="M13.1,3.5L15.7,6c0.1,0.1,0.1,0.3,0,0.4l-2.5,2.5C13.1,9,13,9,12.9,9c-0.1,0-0.1,0-0.2-0.1c-0.1-0.1-0.1-0.1-0.1-0.2V3.7 c0-0.1,0-0.2,0.1-0.2c0.1-0.1,0.1-0.1,0.2-0.1C13,3.4,13.1,3.4,13.1,3.5z"/></g></svg>',
        outdent: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.7 12.4" xml:space="preserve"><g><g><path d="M15.5,10.1L15.5,10.1c0.1,0,0.3,0.1,0.3,0.3v1.7c0,0.1,0,0.1-0.1,0.2c-0.1,0.1-0.1,0.1-0.2,0.1l-15.2,0 c-0.1,0-0.1,0-0.2-0.1C0,12.2,0,12.2,0,12.1l0-1.7c0-0.1,0-0.1,0.1-0.2c0.1-0.1,0.1-0.1,0.2-0.1C0.3,10.1,15.5,10.1,15.5,10.1z M9.8,6.7c0.1,0,0.1,0,0.2,0.1C10.1,6.9,10.1,7,10.1,7v1.7c0,0.1,0,0.2-0.1,0.2C10,9,9.9,9,9.8,9L0.3,9C0.2,9,0.1,9,0.1,8.9 C0,8.9,0,8.8,0,8.7V7C0,7,0,6.9,0.1,6.8c0.1-0.1,0.1-0.1,0.2-0.1C0.3,6.7,9.8,6.7,9.8,6.7z M0.3,3.4h9.6h0c0.1,0,0.3,0.1,0.3,0.3 v1.7v0c0,0.1-0.1,0.3-0.3,0.3H0.3c-0.1,0-0.1,0-0.2-0.1C0,5.5,0,5.4,0,5.3V3.6c0-0.1,0-0.1,0.1-0.2C0.1,3.4,0.2,3.4,0.3,3.4 L0.3,3.4z M0.3,0l15.2,0c0.1,0,0.1,0,0.2,0.1c0.1,0.1,0.1,0.1,0.1,0.2V2c0,0.1,0,0.2-0.1,0.2c-0.1,0.1-0.1,0.1-0.2,0.1H0.3 c-0.1,0-0.1,0-0.2-0.1C0,2.1,0,2,0,2l0-1.7c0-0.1,0-0.1,0.1-0.2C0.1,0,0.2,0,0.3,0z"/></g><path d="M15.5,3.4c0.1,0,0.1,0,0.2,0.1c0.1,0.1,0.1,0.1,0.1,0.2v5.1c0,0.1,0,0.1-0.1,0.2C15.6,9,15.5,9,15.5,9 c-0.1,0-0.1,0-0.2-0.1l-2.5-2.5c-0.1-0.1-0.1-0.3,0-0.4l2.5-2.5C15.3,3.4,15.4,3.4,15.5,3.4z"/></g></svg>',
        list_bullets: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.7 12.4" xml:space="preserve"><g><path d="M12.4,10.7c0,0.9,0.8,1.7,1.7,1.7c0.9,0,1.7-0.8,1.7-1.7C15.7,9.8,15,9,14.1,9c-0.4,0-0.9,0.2-1.2,0.5 C12.5,9.8,12.4,10.2,12.4,10.7C12.4,10.7,12.4,10.7,12.4,10.7z M12.4,6.2c0,0.9,0.8,1.7,1.7,1.7c0.4,0,0.9-0.2,1.2-0.5 c0.3-0.3,0.4-0.7,0.4-1.1c0-0.9-0.7-1.7-1.6-1.7C13.1,4.6,12.4,5.3,12.4,6.2C12.4,6.2,12.4,6.2,12.4,6.2z M0,9.8v1.7 c0,0.1,0,0.1,0.1,0.2c0.1,0.1,0.1,0.1,0.2,0.1l10.7,0c0,0,0,0,0,0c0.1,0,0.3-0.1,0.3-0.3V9.8c0-0.1,0-0.1-0.1-0.2 C11.1,9.6,11,9.6,11,9.6l-10.7,0c-0.1,0-0.1,0-0.2,0.1C0,9.7,0,9.8,0,9.8L0,9.8z M12.9,2.9c0.3,0.3,0.7,0.5,1.2,0.5 c0.4,0,0.9-0.2,1.2-0.5c0.7-0.7,0.7-1.7,0-2.4C14.9,0.2,14.5,0,14.1,0c-0.4,0-0.9,0.2-1.2,0.5c-0.3,0.3-0.5,0.7-0.5,1.2 C12.4,2.1,12.5,2.6,12.9,2.9z M0,5.3V7c0,0.1,0,0.1,0.1,0.2c0.1,0.1,0.1,0.1,0.2,0.1H11c0.1,0,0.1,0,0.2-0.1 c0.1-0.1,0.1-0.1,0.1-0.2V5.3c0,0,0,0,0,0c0-0.1-0.1-0.3-0.3-0.3H0.3c-0.1,0-0.1,0-0.2,0.1C0,5.2,0,5.3,0,5.3L0,5.3z M0,0.8v1.7 c0,0.1,0,0.1,0.1,0.2c0.1,0.1,0.1,0.1,0.2,0.1h10.7c0.1,0,0.1,0,0.2-0.1c0,0,0.1-0.1,0.1-0.2V0.8c0-0.1,0-0.1-0.1-0.2 c0-0.1-0.1-0.1-0.2-0.1H0.3c-0.1,0-0.1,0-0.2,0.1C0,0.7,0,0.8,0,0.8L0,0.8z"/></g></svg>',
        list_number: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.7 15.7" xml:space="preserve"><g><path d="M0,11.5l0,1.7c0,0.1,0,0.1,0.1,0.2c0.1,0.1,0.1,0.1,0.2,0.1H11c0.1,0,0.2,0,0.2-0.1c0.1-0.1,0.1-0.1,0.1-0.2v-1.7 c0-0.1,0-0.1-0.1-0.2c-0.1-0.1-0.1-0.1-0.2-0.1H0.3c-0.1,0-0.2,0-0.2,0.1C0,11.4,0,11.4,0,11.5L0,11.5z M0,8.7c0,0.1,0,0.1,0.1,0.2 C0.1,8.9,0.2,9,0.3,9H11c0.1,0,0.2,0,0.2-0.1c0.1-0.1,0.1-0.1,0.1-0.2V7c0-0.1,0-0.1-0.1-0.2c-0.1-0.1-0.1-0.1-0.2-0.1l-10.7,0 c-0.1,0-0.2,0-0.2,0.1C0,6.8,0,6.9,0,7C0,7,0,8.7,0,8.7z M0,2.5v1.7c0,0.1,0,0.1,0.1,0.2c0,0,0.1,0.1,0.2,0.1l10.7,0 c0.1,0,0.2,0,0.2-0.1c0.1-0.1,0.1-0.1,0.1-0.2V2.4c0-0.1,0-0.1-0.1-0.2c-0.1,0-0.1,0-0.2,0H0.3c-0.1,0-0.1,0-0.2,0 C0,2.3,0,2.4,0,2.5L0,2.5z"/></g><path d="M15.6,14.2c0-0.3-0.1-0.6-0.3-0.8c-0.2-0.2-0.4-0.4-0.7-0.4l0.9-1v-0.8h-2.9v1.3h0.9v-0.5h0.9l0,0c-0.1,0.1-0.2,0.2-0.3,0.3 s-0.2,0.3-0.4,0.5l-0.3,0.3l0.2,0.5c0.6,0,0.9,0.1,0.9,0.5c0,0.1-0.1,0.3-0.2,0.4c-0.1,0.1-0.3,0.1-0.4,0.1c-0.3,0-0.7-0.1-0.9-0.3 l-0.5,0.8c0.4,0.4,0.9,0.6,1.5,0.6c0.4,0,0.9-0.1,1.2-0.4C15.5,15.1,15.6,14.7,15.6,14.2z"/><path d="M15.6,8.7h-0.9v0.5h-1.1c0-0.2,0.2-0.4,0.4-0.5c0.2-0.2,0.4-0.3,0.7-0.4c0.3-0.2,0.5-0.3,0.7-0.6c0.2-0.2,0.3-0.5,0.3-0.8 c0-0.4-0.2-0.8-0.5-1c-0.6-0.4-1.4-0.5-2-0.1c-0.3,0.2-0.5,0.4-0.6,0.7L13.3,7c0.1-0.3,0.4-0.5,0.7-0.5c0.1,0,0.3,0,0.3,0.1 c0.1,0.1,0.1,0.2,0.1,0.3c0,0.2-0.1,0.3-0.2,0.4c-0.2,0.1-0.3,0.3-0.5,0.4c-0.2,0.1-0.4,0.3-0.6,0.4c-0.2,0.2-0.4,0.4-0.5,0.6 c-0.1,0.2-0.2,0.5-0.2,0.8c0,0.2,0,0.3,0,0.5h3.2L15.6,8.7L15.6,8.7z"/><path d="M15.6,3.6h-1V0h-0.9l-1.2,1.1l0.6,0.7c0.2-0.1,0.3-0.3,0.4-0.5l0,0v2.2h-0.9v0.9h3L15.6,3.6L15.6,3.6z"/></svg>',
        link: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.7 15.7" xml:space="preserve"><g><path d="M7.4,9.9l3.1,3.1c0.3,0.3,0.8,0.5,1.3,0.5c0.5,0,0.9-0.2,1.3-0.5c0,0,0,0,0,0c0.7-0.7,0.7-1.9,0-2.6L9.9,7.3 c0-0.1,0-0.2,0-0.3C9.9,7,10,7,10.1,7l2.2-0.2c0.1,0,0.1,0,0.2,0.1l2.1,2.1c0.4,0.4,0.7,0.8,0.9,1.3c0.2,0.5,0.3,1,0.3,1.5 c0,0.5-0.1,1-0.3,1.5c-0.8,2-3.2,3-5.2,2.2c-0.5-0.2-0.9-0.5-1.3-0.9l-2.1-2.1c-0.1,0-0.1-0.1-0.1-0.2L7,10.1C7,10,7,9.9,7.1,9.9 C7.2,9.8,7.3,9.9,7.4,9.9z M1.2,1.1C1.6,0.7,2,0.4,2.5,0.3c1-0.4,2.1-0.4,3.1,0C6,0.4,6.5,0.7,6.8,1.1L9,3.2C9,3.3,9.1,3.3,9,3.4 L8.8,5.6c0,0.1-0.1,0.2-0.2,0.2c-0.1,0.1-0.2,0.1-0.3,0L5.3,2.7C5,2.3,4.5,2.1,4,2.1c-0.5,0-0.9,0.2-1.3,0.5c0,0,0,0,0,0 C2,3.4,2,4.5,2.7,5.2l3.1,3.2c0.1,0.1,0.1,0.2,0,0.3c0,0.1-0.1,0.1-0.2,0.1L3.5,9C3.4,9,3.4,9,3.3,8.9L1.2,6.8c0,0,0,0,0,0 C-0.4,5.2-0.4,2.7,1.2,1.1L1.2,1.1z M14.3,6h-2.6c0,0,0,0,0,0c-0.1,0-0.2-0.1-0.2-0.2c0-0.1,0-0.2,0.1-0.3l2.5-0.7 c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0.1,0.1,0.2l0.1,0.8c0,0.1,0,0.1-0.1,0.2C14.5,6,14.4,6,14.3,6L14.3,6z M10.2,4.1 c0,0.1-0.1,0.2-0.2,0.2l0,0c0,0,0,0,0,0C9.8,4.2,9.7,4.1,9.8,4L9.7,1.4c0-0.1,0-0.1,0.1-0.2c0.1,0,0.1,0,0.2,0h0.8 c0.1,0,0.1,0,0.2,0.1c0,0.1,0,0.1,0,0.2L10.2,4.1L10.2,4.1z M1.5,9.7h1.3h1.3c0.1,0,0.2,0.1,0.2,0.2c0,0.1,0,0.2-0.1,0.3l-2.5,0.6 H1.6c0,0-0.1,0-0.1,0c-0.1,0-0.1-0.1-0.1-0.2L1.2,9.9c0-0.1,0-0.1,0.1-0.2c0-0.1,0.1-0.1,0.2-0.1L1.5,9.7z M5.6,11.6 C5.6,11.6,5.6,11.6,5.6,11.6c0-0.1,0.1-0.2,0.3-0.1c0,0,0,0,0,0c0.1,0,0.2,0.1,0.2,0.2v2.6c0,0.1,0,0.1-0.1,0.2 c0,0-0.1,0.1-0.2,0.1L5,14.5c-0.1,0-0.1,0-0.2-0.1c0-0.1,0-0.1,0-0.2L5.6,11.6L5.6,11.6z"/></g></svg>',
        unlink: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.7 15.7" xml:space="preserve"><g><path d="M14.6,14.6c1.6-1.6,1.6-4.1,0-5.7l0,0l-3.1-3.1l-1.2,1.6l2.9,2.9c0.4,0.4,0.6,0.9,0.6,1.5c0,1.1-0.9,2.1-2.1,2.1l0,0 c-0.6,0-1.1-0.2-1.5-0.6l-0.4-0.4l-1.7,1l0.8,0.8C10.4,16.2,13,16.2,14.6,14.6L14.6,14.6L14.6,14.6z M3.6,6C3,5.9,2.6,5.5,2.3,5 S1.9,4,2.1,3.4C2.3,2.9,2.6,2.5,3,2.2C3.5,2,4.1,1.9,4.6,2l3.3,1.4l0.5-2L5.1,0.1C4-0.1,2.9,0,2,0.5C1.1,1.1,0.4,1.9,0.2,3 C-0.1,4,0,5.1,0.6,6C1.1,6.9,1.9,7.6,3,7.8l5.4,2l0.5-2L6.2,6.9L3.6,6z"/></g></svg>'
    },
    // common, ltr icon
    redo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.59 14.18"><g><path d="M11.58,18.48a6.84,6.84,0,1,1,6.85-6.85s0,.26,0,.67a8,8,0,0,1-.22,1.44l.91-.55a.51.51,0,0,1,.36,0,.45.45,0,0,1,.29.22.47.47,0,0,1,.06.36.45.45,0,0,1-.22.29L17.42,15.3l-.12,0h-.25l-.12-.06-.09-.09-.06-.07,0-.06-.87-2.12a.43.43,0,0,1,0-.37.49.49,0,0,1,.27-.26.41.41,0,0,1,.36,0,.53.53,0,0,1,.27.26l.44,1.09a6.51,6.51,0,0,0,.24-1.36,4.58,4.58,0,0,0,0-.64,5.83,5.83,0,0,0-1.73-4.17,5.88,5.88,0,0,0-8.34,0,5.9,5.9,0,0,0,4.17,10.06.51.51,0,0,1,.33.15.48.48,0,0,1,0,.68.53.53,0,0,1-.33.12Z" transform="translate(-4.48 -4.54)"/></g></svg>',
    undo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.59 14.18"><g><path d="M5,14a.43.43,0,0,1-.22-.29.46.46,0,0,1,.06-.36.43.43,0,0,1,.29-.22.56.56,0,0,1,.36,0l.91.55a8.27,8.27,0,0,1-.22-1.45,5.07,5.07,0,0,1,0-.67A6.85,6.85,0,1,1,13,18.47a.44.44,0,0,1-.33-.13.48.48,0,0,1,0-.68.51.51,0,0,1,.33-.15A5.89,5.89,0,0,0,17.15,7.45a5.88,5.88,0,0,0-8.33,0,5.84,5.84,0,0,0-1.73,4.17s0,.25,0,.65a6.49,6.49,0,0,0,.24,1.37l.44-1.09a.57.57,0,0,1,.27-.26.41.41,0,0,1,.36,0,.53.53,0,0,1,.27.26.43.43,0,0,1,0,.37L7.82,15l0,.09-.09.09-.1.07-.06,0H7.28l-.13,0-1.09-.63c-.65-.36-1-.57-1.1-.63Z" transform="translate(-4.49 -4.53)"/></g></svg>',
    bold: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.76 15.75"><g><path d="M6.4,3.76V19.5h6.76a5.55,5.55,0,0,0,2-.32,4.93,4.93,0,0,0,1.52-1,4.27,4.27,0,0,0,1.48-3.34,3.87,3.87,0,0,0-.69-2.37,5.74,5.74,0,0,0-.71-.83,3.44,3.44,0,0,0-1.1-.65,3.6,3.6,0,0,0,1.58-1.36,3.66,3.66,0,0,0,.53-1.93,3.7,3.7,0,0,0-1.21-2.87,4.65,4.65,0,0,0-3.25-1.1H6.4Zm2.46,6.65V5.57h3.52a4.91,4.91,0,0,1,1.36.15,2.3,2.3,0,0,1,.85.45,2.06,2.06,0,0,1,.74,1.71,2.3,2.3,0,0,1-.78,1.92,2.54,2.54,0,0,1-.86.46,4.7,4.7,0,0,1-1.32.15H8.86Zm0,7.27V12.15H12.7a4.56,4.56,0,0,1,1.38.17,3.43,3.43,0,0,1,.95.49,2.29,2.29,0,0,1,.92,2,2.73,2.73,0,0,1-.83,2.1,2.66,2.66,0,0,1-.83.58,3.25,3.25,0,0,1-1.26.2H8.86Z" transform="translate(-6.4 -3.75)"/></g></svg>',
    underline: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.78 15.74"><g><path d="M14.64,3.76h2.52v7.72a4.51,4.51,0,0,1-.59,2.31,3.76,3.76,0,0,1-1.71,1.53,6.12,6.12,0,0,1-2.64.53,5,5,0,0,1-3.57-1.18,4.17,4.17,0,0,1-1.27-3.24V3.76H9.9v7.3a3,3,0,0,0,.55,2,2.3,2.3,0,0,0,1.83.65,2.26,2.26,0,0,0,1.8-.65,3.09,3.09,0,0,0,.55-2V3.76Zm2.52,13.31V19.5H7.39V17.08h9.77Z" transform="translate(-7.38 -3.76)"/></g></svg>',
    italic: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.49 15.76"><g><path d="M17.16,3.79l.37,0-.06.38-.14.52A10,10,0,0,1,16.21,5a9.37,9.37,0,0,0-1,.32,6.68,6.68,0,0,0-.25.89c-.06.31-.11.59-.14.85-.3,1.36-.52,2.41-.68,3.14l-.61,3.18L13.1,15l-.43,2.4-.12.46a.62.62,0,0,0,0,.28c.44.1.85.17,1.23.22l.68.11a4.51,4.51,0,0,1-.08.6l-.09.42a.92.92,0,0,0-.23,0l-.43,0a1.37,1.37,0,0,1-.29,0c-.13,0-.63-.08-1.49-.16l-2,0c-.28,0-.87,0-1.78.12L7,19.5l.17-.88.8-.2A6.61,6.61,0,0,0,9.19,18,2.62,2.62,0,0,0,9.61,17l.28-1.41.58-2.75.12-.66c.05-.3.11-.58.17-.86s.12-.51.17-.69l.12-.48.12-.43.31-1.6.15-.65.31-1.91V5.14a3.86,3.86,0,0,0-1.48-.29l-.38,0,.2-1.06,3.24.14.75,0c.45,0,1.18,0,2.18-.09.23,0,.46,0,.71,0Z" transform="translate(-7.04 -3.76)"/></g></svg>',
    strike: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 14.9"><g><path d="M12.94,13a4.27,4.27,0,0,1,1.32.58,1.46,1.46,0,0,1,.55,1.2,1.87,1.87,0,0,1-.88,1.64,4.17,4.17,0,0,1-2.35.59,4.44,4.44,0,0,1-2.74-.71,2.72,2.72,0,0,1-1-2.17H5.57a4.56,4.56,0,0,0,1.55,3.7,7,7,0,0,0,4.47,1.23,6,6,0,0,0,4.07-1.3,4.24,4.24,0,0,0,1.52-3.37,4,4,0,0,0-.26-1.4h-4ZM6.37,10.24A3.27,3.27,0,0,1,6,8.68a4,4,0,0,1,1.48-3.3,5.92,5.92,0,0,1,3.88-1.21,5.58,5.58,0,0,1,3.91,1.24,4.36,4.36,0,0,1,1.45,3.17H14.44a2.12,2.12,0,0,0-.91-1.81,4.45,4.45,0,0,0-2.44-.55,3.69,3.69,0,0,0-2,.51A1.64,1.64,0,0,0,8.3,8.22a1.3,1.3,0,0,0,.48,1.11,7,7,0,0,0,2.1.78l.28.06.28.08H6.37Zm13.09.68a.73.73,0,0,1,.49.21.66.66,0,0,1,.2.48.64.64,0,0,1-.2.48.71.71,0,0,1-.49.19H5.1a.67.67,0,0,1-.49-.19.66.66,0,0,1-.2-.48.64.64,0,0,1,.2-.48.73.73,0,0,1,.49-.21H19.46Z" transform="translate(-4.41 -4.17)"/></g></svg>',
    subscript: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 14.61"><g><path d="M15.38,4.33H12.74L11.19,7c-.28.46-.51.87-.69,1.21L10.07,9h0l-.44-.8c-.22-.4-.45-.81-.71-1.23L7.34,4.33H4.68L8.26,10,4.4,16.08H7.1l1.69-2.83c.38-.63.72-1.22,1-1.78l.25-.46h0l.49.92c.24.45.48.89.74,1.32L13,16.08h2.61L11.84,10l1.77-2.84,1.77-2.85Zm4.77,13.75H17v-.15c0-.4.05-.64.16-.72a4.42,4.42,0,0,1,1.16-.31,3.3,3.3,0,0,0,1.54-.56A1.84,1.84,0,0,0,20.15,15a1.78,1.78,0,0,0-.44-1.41A2.8,2.8,0,0,0,18,13.25a2.71,2.71,0,0,0-1.69.37,1.83,1.83,0,0,0-.44,1.43v.23H17v-.23q0-.63.18-.78a1.62,1.62,0,0,1,.88-.15,1.59,1.59,0,0,1,.88.15q.18.15.18.75t-.18.75a3.58,3.58,0,0,1-1.18.33,3.33,3.33,0,0,0-1.52.51,1.57,1.57,0,0,0-.32,1.18v1.15h4.27v-.86Z" transform="translate(-4.4 -4.33)"/></g></svg>',
    superscript: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 15.42"><g><path d="M12,13.14l3.61-5.81H12.94L11.33,10c-.28.46-.51.88-.69,1.25l-.45.83h0l-.45-.85c-.22-.41-.45-.82-.71-1.24L7.4,7.33H4.68l3.66,5.81L4.4,19.33H7.14l1.74-2.87q.58-1,1-1.83l.25-.48h0l.51.94.75,1.37,1.72,2.87h2.67l-1.92-3.09c-1.12-1.8-1.76-2.83-1.92-3.1Zm4.84-4.41h0l0,.15h3.27v.86H15.77V8.58a1.66,1.66,0,0,1,.33-1.22,3.51,3.51,0,0,1,1.56-.51,3.68,3.68,0,0,0,1.21-.34c.13-.1.19-.36.19-.77S19,5.07,18.87,5A1.63,1.63,0,0,0,18,4.8a1.58,1.58,0,0,0-.91.17c-.13.11-.19.38-.19.8V6H15.78V5.76a1.87,1.87,0,0,1,.45-1.47A2.84,2.84,0,0,1,18,3.91a2.8,2.8,0,0,1,1.72.38,1.84,1.84,0,0,1,.45,1.44,1.91,1.91,0,0,1-.34,1.35,3.24,3.24,0,0,1-1.58.57A3.69,3.69,0,0,0,17,8c-.12.1-.17.35-.17.76Z" transform="translate(-4.4 -3.91)"/></g></svg>',
    erase: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 13.76"><g><path d="M13.69,17.2h6.46v1.31H8.56L4.41,14.37,14,4.75l6.06,6.06L16.89,14l-3.2,3.19Zm-4.61,0h2.77L14.09,15,9.88,10.75,6.25,14.38l1.41,1.41c.84.82,1.31,1.29,1.42,1.41Z" transform="translate(-4.41 -4.75)"/></g></svg>',
    indent: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 12.36"><g><path d="M4.68,14.45a.27.27,0,0,1-.19-.08.3.3,0,0,1-.08-.21V9.1a.27.27,0,0,1,.08-.19.28.28,0,0,1,.2-.08.25.25,0,0,1,.19.07l2.54,2.54a.29.29,0,0,1,0,.4L4.88,14.36a.24.24,0,0,1-.2.09Zm15.19,1.12a.27.27,0,0,1,.19.08.25.25,0,0,1,.08.19v1.69a.27.27,0,0,1-.08.19.25.25,0,0,1-.19.08H4.68a.27.27,0,0,1-.19-.08.25.25,0,0,1-.08-.19V15.84a.27.27,0,0,1,.27-.27H19.87Zm0-3.38a.27.27,0,0,1,.19.08.28.28,0,0,1,.08.21v1.68a.32.32,0,0,1-.08.21.25.25,0,0,1-.19.08H10.31a.27.27,0,0,1-.19-.08.3.3,0,0,1-.08-.21V12.48a.32.32,0,0,1,.08-.21.24.24,0,0,1,.19-.08h9.56Zm0-3.37a.27.27,0,0,1,.19.08.25.25,0,0,1,.08.19v1.69a.27.27,0,0,1-.08.19.25.25,0,0,1-.19.08H10.31a.27.27,0,0,1-.27-.27V9.1a.27.27,0,0,1,.27-.27h9.56Zm.2-3.29a.28.28,0,0,1,.08.2V7.41a.32.32,0,0,1-.08.21.25.25,0,0,1-.19.08H4.68a.27.27,0,0,1-.19-.08.3.3,0,0,1-.08-.21V5.73a.32.32,0,0,1,.08-.21.25.25,0,0,1,.19-.08H19.87a.28.28,0,0,1,.2.09Z" transform="translate(-4.41 -5.44)"/></g></svg>',
    outdent: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 12.36"><g><path d="M19.87,15.57a.27.27,0,0,1,.19.08.25.25,0,0,1,.08.19v1.69a.27.27,0,0,1-.08.19.25.25,0,0,1-.19.08H4.68a.27.27,0,0,1-.19-.08.25.25,0,0,1-.08-.19V15.84a.27.27,0,0,1,.27-.27H19.87ZM7.5,14.45a.25.25,0,0,1-.2-.09L4.76,11.84a.29.29,0,0,1,0-.4L7.3,8.9a.29.29,0,0,1,.4,0,.31.31,0,0,1,.07.2v5.06a.32.32,0,0,1-.08.21.26.26,0,0,1-.19.08ZM19.87,8.82a.27.27,0,0,1,.19.08.25.25,0,0,1,.08.19v1.69a.27.27,0,0,1-.08.19.25.25,0,0,1-.19.08H10.31a.27.27,0,0,1-.27-.27V9.1a.27.27,0,0,1,.27-.27h9.56Zm0,3.37a.27.27,0,0,1,.19.08.28.28,0,0,1,.08.21v1.68a.32.32,0,0,1-.08.21.25.25,0,0,1-.19.08H10.31a.27.27,0,0,1-.19-.08.3.3,0,0,1-.08-.21V12.48a.32.32,0,0,1,.08-.21.24.24,0,0,1,.19-.08h9.56Zm.2-6.66a.28.28,0,0,1,.08.2V7.41a.32.32,0,0,1-.08.21.25.25,0,0,1-.19.08H4.68a.27.27,0,0,1-.19-.08.3.3,0,0,1-.08-.21V5.73a.32.32,0,0,1,.08-.21.25.25,0,0,1,.19-.08H19.87a.28.28,0,0,1,.2.09Z" transform="translate(-4.41 -5.44)"/></g></svg>',
    expansion: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.74"><g><path d="M11.8,13.06l-5.1,5.1H9.51V19.5H4.41V14.4H5.75v2.81L8.3,14.66q2.25-2.23,2.55-2.55Zm8.35-9.3v5.1H18.81V6.05l-5.1,5.1-1-1,5.1-5.1H15.05V3.76Z" transform="translate(-4.41 -3.76)"/></g></svg>',
    reduction: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.74"><g><path d="M14.91,10h2.87v1.38H12.55V6.12h1.38V9l5.24-5.24.48.49.49.48ZM6.77,11.92H12v5.23H10.62V14.26L5.37,19.5l-1-1L9.63,13.3H6.77Z" transform="translate(-4.4 -3.76)"/></g></svg>',
    code_view: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.73 11.8"><g><path d="M8.09,7.94a.76.76,0,0,1,.53.22.72.72,0,0,1,.21.52.76.76,0,0,1-.22.54L6.18,11.63l2.43,2.44a.69.69,0,0,1,.2.51.66.66,0,0,1-.21.51.75.75,0,0,1-.51.22.63.63,0,0,1-.51-.21h0L4.63,12.15a.7.7,0,0,1-.22-.53.67.67,0,0,1,.25-.55L7.57,8.16a.82.82,0,0,1,.52-.22Zm12.05,3.69a.7.7,0,0,1-.23.52L17,15.1h0a.66.66,0,0,1-.51.21.73.73,0,0,1-.51-.22.75.75,0,0,1-.22-.51.63.63,0,0,1,.21-.51l2.43-2.44L15.92,9.22a.73.73,0,0,1-.22-.53A.74.74,0,0,1,17,8.18h0l2.91,2.91a.67.67,0,0,1,.27.54Zm-5.9-5.9a.73.73,0,0,1,.61.32.71.71,0,0,1,.07.68L11,17a1,1,0,0,1-.22.32.6.6,0,0,1-.35.16.75.75,0,0,1-.69-.26.69.69,0,0,1-.12-.72L13.56,6.23a.75.75,0,0,1,.26-.35.74.74,0,0,1,.42-.15Z" transform="translate(-4.41 -5.73)"/></g></svg>',
    preview: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.65 15.66"><g><path d="M16.19,14.43l2.49,2.49a.73.73,0,0,1,.21.52.67.67,0,0,1-.22.51.7.7,0,0,1-.52.22.69.69,0,0,1-.51-.21l-2.49-2.48a5.17,5.17,0,0,1-1.34.69,4.64,4.64,0,0,1-1.48.24,4.78,4.78,0,1,1,0-9.56,4.79,4.79,0,0,1,1.84.36,4.9,4.9,0,0,1,1.56,1,4.77,4.77,0,0,1,.46,6.18ZM10,14a3.3,3.3,0,0,0,2.34.93A3.37,3.37,0,0,0,14.7,14a3.3,3.3,0,0,0-1.08-5.41,3.47,3.47,0,0,0-2.56,0A3,3,0,0,0,10,9.28,3.31,3.31,0,0,0,10,14ZM16,4a3.86,3.86,0,0,1,2.77,1.14A3.9,3.9,0,0,1,20,7.85v4a.77.77,0,0,1-.22.53.7.7,0,0,1-.52.21.72.72,0,0,1-.74-.74v-4a2.46,2.46,0,0,0-.72-1.73A2.37,2.37,0,0,0,16,5.45H8.53A2.42,2.42,0,0,0,6.08,7.89v7.52a2.41,2.41,0,0,0,.71,1.73,2.46,2.46,0,0,0,1.74.72h4.08a.73.73,0,0,1,0,1.46H8.53a3.85,3.85,0,0,1-2.78-1.14A3.93,3.93,0,0,1,4.6,15.4V7.87A3.94,3.94,0,0,1,5.76,5.09,3.88,3.88,0,0,1,8.54,4H16Z" transform="translate(-4.45 -3.8)"/></g></svg>',
    print: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.05 16.04"><g><path d="M19.76,15.84a1.29,1.29,0,0,0,.39-.92V8.35A2.05,2.05,0,0,0,19.57,7a1.93,1.93,0,0,0-1.38-.57H6.37a1.95,1.95,0,0,0-2,2v6.56a1.23,1.23,0,0,0,.38.92,1.35,1.35,0,0,0,.93.38h2V14.9l-2,0V8.35a.67.67,0,0,1,.18-.47.62.62,0,0,1,.48-.19H18.18a.6.6,0,0,1,.46.19.66.66,0,0,1,.18.47V14.9h-2v1.32h2A1.35,1.35,0,0,0,19.76,15.84ZM17.52,7.69V5.06a1.31,1.31,0,0,0-.38-.92,1.34,1.34,0,0,0-.94-.38H8.34A1.3,1.3,0,0,0,7,5.06V7.69H8.34V5.06h7.87V7.69h1.31ZM8.34,12.93h7.87l0,5.26H8.34V12.93Zm7.87,5.26v0Zm.65,1.31a.6.6,0,0,0,.46-.19.72.72,0,0,0,.2-.47V12.29a.74.74,0,0,0-.2-.47.6.6,0,0,0-.46-.19H7.68a.6.6,0,0,0-.46.19.72.72,0,0,0-.2.47v6.55a.74.74,0,0,0,.2.47.6.6,0,0,0,.46.19h9.18ZM16.67,9.28a.7.7,0,0,0-.94,0,.63.63,0,0,0-.18.46.67.67,0,0,0,.18.47.68.68,0,0,0,.94,0,.66.66,0,0,0,.18-.47A.58.58,0,0,0,16.67,9.28Z" transform="translate(-4.25 -3.61)"/></g></svg>',
    template: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.27 15.64"><g><path d="M18.18,19.16a1,1,0,0,0,1-1V5.73a1,1,0,0,0-1-1h-2v1h2V18.19H6.37V5.73h2v-1h-2A.94.94,0,0,0,5.68,5a1,1,0,0,0-.29.7V18.18a.94.94,0,0,0,.29.69,1,1,0,0,0,.69.29H18.18ZM9.82,10.31h4.92a.49.49,0,0,0,.35-.15.47.47,0,0,0,.15-.35.49.49,0,0,0-.15-.35.47.47,0,0,0-.35-.15H9.82a.49.49,0,0,0-.35.15.47.47,0,0,0-.15.35.49.49,0,0,0,.15.35.47.47,0,0,0,.35.15Zm5.9,4.92H8.83a.49.49,0,0,0-.35.15.47.47,0,0,0-.15.35.49.49,0,0,0,.15.35.47.47,0,0,0,.35.15h6.89a.49.49,0,0,0,.35-.15.47.47,0,0,0,.15-.35.51.51,0,0,0-.5-.5ZM7.36,12.77a.49.49,0,0,0,.15.35.47.47,0,0,0,.35.15h8.85a.49.49,0,0,0,.35-.15.47.47,0,0,0,.15-.35.49.49,0,0,0-.15-.35.47.47,0,0,0-.35-.15H7.85a.49.49,0,0,0-.35.15.52.52,0,0,0-.14.35Z" transform="translate(-5.14 -3.77)"/><path d="M14.24,6.71a1,1,0,0,0,1-1,1,1,0,0,0-1-1,1,1,0,0,0-1-1h-2a.94.94,0,0,0-.69.28,1,1,0,0,0-.29.7A.94.94,0,0,0,9.62,5a.91.91,0,0,0-.29.69,1,1,0,0,0,.29.7,1,1,0,0,0,.69.29h3.93Z" transform="translate(-5.14 -3.77)"/></g></svg>',
    line_height: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.76 13.56"><g><path d="M4.4,4.88V8.26a2,2,0,0,0,.5.39s.1,0,.18-.12a.62.62,0,0,0,.17-.28c.06-.19.13-.44.21-.74s.14-.52.19-.66a.58.58,0,0,1,.21-.3,2.41,2.41,0,0,1,.63-.21,3.83,3.83,0,0,1,.88-.12,9.15,9.15,0,0,1,1.31.06.16.16,0,0,1,.11,0,.26.26,0,0,1,.06.14,4,4,0,0,1,0,.49v2l.05,3.77c0,1.41,0,2.68-.05,3.81a1.79,1.79,0,0,1-.11.49,10.68,10.68,0,0,1-1.4.45,1.12,1.12,0,0,0-.69.43v.31l0,.22.61,0c.85-.08,1.54-.12,2.06-.12a19.76,19.76,0,0,1,2.09.08,15.08,15.08,0,0,0,1.64.08,1.4,1.4,0,0,0,.29,0,1.58,1.58,0,0,0,0-.26l-.05-.43a2.26,2.26,0,0,0-.43-.17l-.77-.22-.15,0a2.55,2.55,0,0,1-.78-.28,2.56,2.56,0,0,1-.11-.75l0-1.29,0-3.15V7.53a10.51,10.51,0,0,1,.06-1.2,3.83,3.83,0,0,1,.6,0l1.88,0a2.18,2.18,0,0,1,.38,0,.45.45,0,0,1,.23.17.9.9,0,0,1,.05.25c0,.16.06.35.1.58a3.33,3.33,0,0,0,.14.55A6.39,6.39,0,0,0,15,9a2.91,2.91,0,0,0,.6-.15,2.77,2.77,0,0,0,0-.46l0-.51,0-2.95-.25,0-.38,0L15,4.94a.71.71,0,0,1-.18.15.45.45,0,0,1-.25.07l-.29,0H8.75l-.15,0H7.45a17,17,0,0,1-1.86,0L5.36,5l-.25-.13ZM19.75,16.14h-.69v-9h.69A.4.4,0,0,0,20.13,7c.06-.11,0-.24-.1-.39L18.92,5.15a.52.52,0,0,0-.86,0L17,6.58c-.12.15-.16.28-.1.39s.18.16.38.16h.69v9h-.69a.4.4,0,0,0-.38.16c-.06.11,0,.24.1.39l1.11,1.43a.52.52,0,0,0,.86,0L20,16.69c.12-.15.16-.28.1-.39a.4.4,0,0,0-.38-.16Z" transform="translate(-4.4 -4.86)"/></g></svg>',
    paragraph_style: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.81 15.74"><g><path d="M18.18,3.76v2h-2V19.5h-2V5.73h-2V19.5h-2V11.63a3.94,3.94,0,0,1,0-7.87h7.87Z" transform="translate(-6.37 -3.76)"/></g></svg>',
    text_style: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.76 15.74"><g><path d="M17.68,6.71a2.22,2.22,0,0,0,1.06-.22.74.74,0,0,0,.42-.7.73.73,0,0,0-.08-.33.67.67,0,0,0-.17-.22,1,1,0,0,0-.31-.15L18.26,5l-.45-.09A15.27,15.27,0,0,0,13.26,5V4.74c0-.66-.63-1-1.92-1-.24,0-.43.15-.59.46a4,4,0,0,0-.36,1.14h0v0a26.45,26.45,0,0,1-3.5.35A2,2,0,0,0,5.77,6a.84.84,0,0,0-.37.79,2.14,2.14,0,0,0,.41,1.29,1.23,1.23,0,0,0,1.05.63,16.62,16.62,0,0,0,3.29-.45l-.34,3.35c-.16,1.61-.29,2.9-.37,3.86s-.12,1.66-.12,2.09l0,.65a5.15,5.15,0,0,0,.05.6,1.28,1.28,0,0,0,.16.54.34.34,0,0,0,.28.18,1.16,1.16,0,0,0,.79-.46,3.66,3.66,0,0,0,.68-1,22.08,22.08,0,0,0,1-4.33q.49-3.1.78-6.15a24.69,24.69,0,0,1,4.62-.84Z" transform="translate(-5.4 -3.76)"/></g></svg>',
    save: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.74"><g><path d="M18.53,19.5l.2-.05A1.78,1.78,0,0,0,20.13,18l0-.09V7.14a2,2,0,0,0-.28-.64A3.18,3.18,0,0,0,19.43,6c-.5-.52-1-1-1.55-1.54A2.59,2.59,0,0,0,17.37,4a1.83,1.83,0,0,0-.61-.25H6l-.21,0a1.78,1.78,0,0,0-1.4,1.49l0,.1V17.87a2.49,2.49,0,0,0,.09.37,1.79,1.79,0,0,0,1.44,1.23l.09,0Zm-6.25-.6H6.92a.61.61,0,0,1-.68-.48.78.78,0,0,1,0-.22V12.3a.62.62,0,0,1,.69-.68H17.64a.62.62,0,0,1,.69.69V18.2a.64.64,0,0,1-.71.69H12.28ZM12,9.81H8.15a.63.63,0,0,1-.72-.71v-4a.64.64,0,0,1,.72-.72h7.66a.64.64,0,0,1,.72.72v4a.65.65,0,0,1-.74.72ZM13.5,5V9.18h1.78V5Z" transform="translate(-4.41 -3.76)"/></g></svg>',
    blockquote: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 475.082 475.081"><g><path d="M164.45,219.27h-63.954c-7.614,0-14.087-2.664-19.417-7.994c-5.327-5.33-7.994-11.801-7.994-19.417v-9.132c0-20.177,7.139-37.401,21.416-51.678c14.276-14.272,31.503-21.411,51.678-21.411h18.271c4.948,0,9.229-1.809,12.847-5.424c3.616-3.617,5.424-7.898,5.424-12.847V54.819c0-4.948-1.809-9.233-5.424-12.85c-3.617-3.612-7.898-5.424-12.847-5.424h-18.271c-19.797,0-38.684,3.858-56.673,11.563c-17.987,7.71-33.545,18.132-46.68,31.267c-13.134,13.129-23.553,28.688-31.262,46.677C3.855,144.039,0,162.931,0,182.726v200.991c0,15.235,5.327,28.171,15.986,38.834c10.66,10.657,23.606,15.985,38.832,15.985h109.639c15.225,0,28.167-5.328,38.828-15.985c10.657-10.663,15.987-23.599,15.987-38.834V274.088c0-15.232-5.33-28.168-15.994-38.832C192.622,224.6,179.675,219.27,164.45,219.27z"/><path d="M459.103,235.256c-10.656-10.656-23.599-15.986-38.828-15.986h-63.953c-7.61,0-14.089-2.664-19.41-7.994c-5.332-5.33-7.994-11.801-7.994-19.417v-9.132c0-20.177,7.139-37.401,21.409-51.678c14.271-14.272,31.497-21.411,51.682-21.411h18.267c4.949,0,9.233-1.809,12.848-5.424c3.613-3.617,5.428-7.898,5.428-12.847V54.819c0-4.948-1.814-9.233-5.428-12.85c-3.614-3.612-7.898-5.424-12.848-5.424h-18.267c-19.808,0-38.691,3.858-56.685,11.563c-17.984,7.71-33.537,18.132-46.672,31.267c-13.135,13.129-23.559,28.688-31.265,46.677c-7.707,17.987-11.567,36.879-11.567,56.674v200.991c0,15.235,5.332,28.171,15.988,38.834c10.657,10.657,23.6,15.985,38.828,15.985h109.633c15.229,0,28.171-5.328,38.827-15.985c10.664-10.663,15.985-23.599,15.985-38.834V274.088C475.082,258.855,469.76,245.92,459.103,235.256z"/></g></svg>',
    arrow_down: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.73 8.67"><g><path d="M18.79,7.52a.8.8,0,0,1,.56-.23.82.82,0,0,1,.79.79.8.8,0,0,1-.23.56l-7.07,7.07a.79.79,0,0,1-.57.25.77.77,0,0,1-.57-.25h0L4.64,8.65a.8.8,0,0,1-.23-.57.82.82,0,0,1,.79-.79.8.8,0,0,1,.56.23L12.28,14l3.26-3.26,3.25-3.26Z" transform="translate(-4.41 -7.29)"/></g></svg>',
    align_justify: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 13.77"><g><path d="M4.41,4.74v2H20.15v-2H4.41Zm0,5.9H20.15v-2H4.41v2Zm0,3.94H20.15v-2H4.41v2Zm0,3.93h7.87v-2H4.41v2Z" transform="translate(-4.41 -4.74)"/></g></svg>',
    align_left: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 13.77"><g><path d="M4.41,4.74v2H20.15v-2H4.41Zm11.8,3.94H4.41v2H16.22v-2Zm-11.8,5.9H18.18v-2H4.41v2Zm0,3.93h9.84v-2H4.41v2Z" transform="translate(-4.41 -4.74)"/></g></svg>',
    align_right: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 13.77"><g><path d="M4.41,4.74v2H20.15v-2H4.41Zm3.93,5.9H20.15v-2H8.34v2Zm-2,3.94H20.14v-2H6.37v2Zm3.94,3.93h9.84v-2H10.31v2Z" transform="translate(-4.41 -4.74)"/></g></svg>',
    align_center: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 13.77"><g><path d="M4.41,4.74v2H20.15v-2H4.41Zm2,3.94v2H18.18v-2H6.37Zm-1,5.9H19.16v-2H5.39v2Zm2,3.93H17.2v-2H7.36v2Z" transform="translate(-4.41 -4.74)"/></g></svg>',
    font_color: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 14.61"><g><path d="M18.5,15.57,14.28,4.32h-3.4L6.65,15.57h3l.8-2.26h4.23l.8,2.26h3ZM14,11.07H11.14L12.54,7,13.25,9c.41,1.18.64,1.86.7,2ZM4.41,16.69v2.24H20.15V16.69H4.41Z" transform="translate(-4.41 -4.32)"/></g></svg>',
    highlight_color: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.66 15.74"><g><path d="M12.32,9.31,13.38,13H11.21l.52-1.83q.46-1.61.54-1.83ZM4.44,3.76H20.1V19.5H4.44V3.76ZM14.71,17.32h2.63L13.7,6H10.89L7.26,17.32H9.89l.63-2.24h3.55l.32,1.12c.18.65.29,1,.32,1.12Z" transform="translate(-4.44 -3.76)"/></g></svg>',
    list_bullets: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 12.37"><g><path d="M7.77,16.12a1.59,1.59,0,0,0-.49-1.18,1.62,1.62,0,0,0-1.19-.49,1.68,1.68,0,1,0,0,3.36,1.67,1.67,0,0,0,1.68-1.69Zm0-4.48A1.67,1.67,0,0,0,6.09,10,1.68,1.68,0,0,0,4.9,12.82a1.62,1.62,0,0,0,1.19.49,1.67,1.67,0,0,0,1.68-1.67Zm12.38,3.64a.27.27,0,0,0-.08-.19.28.28,0,0,0-.2-.09H9.19a.28.28,0,0,0-.2.08.29.29,0,0,0-.08.19V17a.27.27,0,0,0,.28.28H19.87a.27.27,0,0,0,.19-.08.24.24,0,0,0,.08-.2V15.28ZM7.77,7.13a1.63,1.63,0,0,0-.49-1.2,1.61,1.61,0,0,0-1.19-.49,1.61,1.61,0,0,0-1.19.49,1.71,1.71,0,0,0,0,2.4,1.62,1.62,0,0,0,1.19.49,1.61,1.61,0,0,0,1.19-.49,1.63,1.63,0,0,0,.49-1.2Zm12.38,3.66a.28.28,0,0,0-.08-.2.29.29,0,0,0-.19-.08H9.19a.27.27,0,0,0-.28.28v1.69a.27.27,0,0,0,.08.19.24.24,0,0,0,.2.08H19.87a.27.27,0,0,0,.19-.08.25.25,0,0,0,.08-.19V10.79Zm0-4.5a.27.27,0,0,0-.08-.19A.25.25,0,0,0,19.88,6H9.19A.28.28,0,0,0,9,6.1a.26.26,0,0,0-.08.19V8A.27.27,0,0,0,9,8.17a.24.24,0,0,0,.2.08H19.87a.27.27,0,0,0,.19-.08A.25.25,0,0,0,20.14,8V6.29Z" transform="translate(-4.41 -5.44)"/></g></svg>',
    list_number: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.69 15.74"><g><path d="M7.66,18a1.24,1.24,0,0,0-.26-.78,1.17,1.17,0,0,0-.72-.42l.85-1V15H4.58v1.34h.94v-.46l.85,0h0c-.11.11-.22.23-.32.35s-.23.27-.37.47L5.39,17l.23.51c.61-.05.92.11.92.49a.42.42,0,0,1-.18.37.79.79,0,0,1-.45.12A1.41,1.41,0,0,1,5,18.15l-.51.77A2.06,2.06,0,0,0,6,19.5a1.8,1.8,0,0,0,1.2-.41A1.38,1.38,0,0,0,7.66,18Zm0-5.54H6.75V13H5.63A.72.72,0,0,1,6,12.51a5.45,5.45,0,0,1,.66-.45,2.71,2.71,0,0,0,.67-.57,1.19,1.19,0,0,0,.31-.81,1.29,1.29,0,0,0-.45-1,1.86,1.86,0,0,0-2-.11,1.51,1.51,0,0,0-.62.7l.74.52A.87.87,0,0,1,6,10.28a.51.51,0,0,1,.35.12.42.42,0,0,1,.13.33.55.55,0,0,1-.21.4,3,3,0,0,1-.5.38c-.19.13-.39.27-.58.42a2,2,0,0,0-.5.6,1.63,1.63,0,0,0-.21.81,3.89,3.89,0,0,0,.05.48h3.2V12.44Zm12.45,2.82a.27.27,0,0,0-.08-.19.28.28,0,0,0-.21-.08H9.1a.32.32,0,0,0-.21.08.24.24,0,0,0-.08.2V17a.27.27,0,0,0,.08.19.3.3,0,0,0,.21.08H19.83a.32.32,0,0,0,.21-.08.25.25,0,0,0,.08-.19V15.26ZM7.69,7.32h-1V3.76H5.8L4.6,4.88l.63.68a1.85,1.85,0,0,0,.43-.48h0l0,2.24H4.74V8.2h3V7.32Zm12.43,3.42a.27.27,0,0,0-.08-.19.28.28,0,0,0-.21-.08H9.1a.32.32,0,0,0-.21.08.24.24,0,0,0-.08.2v1.71a.27.27,0,0,0,.08.19.3.3,0,0,0,.21.08H19.83a.32.32,0,0,0,.21-.08.25.25,0,0,0,.08-.19V10.74Zm0-4.52A.27.27,0,0,0,20,6,.28.28,0,0,0,19.83,6H9.1A.32.32,0,0,0,8.89,6a.24.24,0,0,0-.08.19V7.93a.27.27,0,0,0,.08.19.32.32,0,0,0,.21.08H19.83A.32.32,0,0,0,20,8.12a.26.26,0,0,0,.08-.2V6.22Z" transform="translate(-4.43 -3.76)"/></g></svg>',
    table: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.74"><g><path d="M4.41,8.05V3.76H8.7V8.05H4.41Zm5.71,0V3.76h4.3V8.05h-4.3Zm5.74-4.29h4.29V8.05H15.86V3.76Zm-11.45,10V9.48H8.7v4.3H4.41Zm5.71,0V9.48h4.3v4.3h-4.3Zm5.74,0V9.48h4.29v4.3H15.86ZM4.41,19.5V15.21H8.7V19.5H4.41Zm5.71,0V15.21h4.3V19.5h-4.3Zm5.74,0V15.21h4.29V19.5H15.86Z" transform="translate(-4.41 -3.76)"/></g></svg>',
    horizontal_rule: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 2.24"><g><path d="M20.15,12.75V10.51H4.41v2.24H20.15Z" transform="translate(-4.41 -10.51)"/></g></svg>',
    show_blocks: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.66 15.67"><g><path d="M19.72,5.58a1.64,1.64,0,0,0-1.64-1.64H6.23a1.62,1.62,0,0,0-1.16.48,1.63,1.63,0,0,0-.48,1.16V9.63a1.6,1.6,0,0,0,.48,1.16,1.62,1.62,0,0,0,1.16.47H18.09a1.67,1.67,0,0,0,1.16-.47,1.62,1.62,0,0,0,.48-1.16V5.58Zm-.94,4.05a.68.68,0,0,1-.7.7H6.23a.66.66,0,0,1-.48-.2.74.74,0,0,1-.21-.5V5.58a.66.66,0,0,1,.2-.48.71.71,0,0,1,.48-.21H18.08a.74.74,0,0,1,.5.21.66.66,0,0,1,.2.48ZM6.48,7.72a.21.21,0,0,0,.17-.07.22.22,0,0,0,.07-.17V7.06a1.27,1.27,0,0,1,.11-.52.37.37,0,0,1,.36-.23H8.77A.25.25,0,0,0,9,6.17a.19.19,0,0,0,0-.23.27.27,0,0,0-.2-.12H7.19a.88.88,0,0,0-.72.39,1.51,1.51,0,0,0-.23.85v.42a.24.24,0,0,0,.24.24Zm-.19.81a.21.21,0,0,0,.17-.07.26.26,0,0,0,.07-.17.24.24,0,0,0-.24-.24.2.2,0,0,0-.16.09.2.2,0,0,0-.07.16.22.22,0,0,0,.07.17.23.23,0,0,0,.16.06Zm8.46,5.1a1.63,1.63,0,0,0-.47-1.16A1.61,1.61,0,0,0,13.12,12H6.23a1.6,1.6,0,0,0-1.16.46,1.62,1.62,0,0,0-.48,1.16v4.05a1.64,1.64,0,0,0,1.64,1.64h6.89a1.6,1.6,0,0,0,1.16-.48,1.62,1.62,0,0,0,.47-1.16Zm-.94,4a.7.7,0,0,1-.2.49.65.65,0,0,1-.5.2H6.23a.66.66,0,0,1-.48-.2.75.75,0,0,1-.21-.49v-4a.74.74,0,0,1,.21-.5.66.66,0,0,1,.48-.2h6.89a.68.68,0,0,1,.7.7v4Zm6.15,0v-4a1.6,1.6,0,0,0-.48-1.16A1.67,1.67,0,0,0,18.32,12H17.1a1.63,1.63,0,0,0-1.16.47,1.61,1.61,0,0,0-.47,1.16v4a1.67,1.67,0,0,0,.47,1.16,1.62,1.62,0,0,0,1.16.48h1.22A1.64,1.64,0,0,0,20,17.68Zm-.94-4v4a.75.75,0,0,1-.21.49.62.62,0,0,1-.48.2H17.11a.69.69,0,0,1-.5-.2.7.7,0,0,1-.2-.49v-4a.68.68,0,0,1,.7-.7h1.22a.66.66,0,0,1,.48.2.72.72,0,0,1,.21.5Z" transform="translate(-4.44 -3.79)"/></g></svg>',
    cancel: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.74"><g><path d="M14.15,11.63l5.61,5.61a1.29,1.29,0,0,1,.38.93,1.27,1.27,0,0,1-.4.93,1.25,1.25,0,0,1-.92.4,1.31,1.31,0,0,1-.94-.4l-5.61-5.61L6.67,19.1a1.31,1.31,0,0,1-.94.4,1.24,1.24,0,0,1-.92-.4,1.27,1.27,0,0,1-.4-.93,1.33,1.33,0,0,1,.38-.93l5.61-5.63L4.79,6a1.26,1.26,0,0,1-.38-.93,1.22,1.22,0,0,1,.4-.92,1.28,1.28,0,0,1,.92-.39,1.38,1.38,0,0,1,.94.38l5.61,5.61,5.61-5.61a1.33,1.33,0,0,1,.94-.38,1.26,1.26,0,0,1,.92.39,1.24,1.24,0,0,1,.4.92,1.29,1.29,0,0,1-.39.93L17,8.81l-2.8,2.82Z" transform="translate(-4.41 -3.76)"/></g></svg>',
    image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 15.77"><g><path d="M8.77,8.72a.88.88,0,0,1-.61-.27.82.82,0,0,1-.25-.61.89.89,0,0,1,.25-.62A.82.82,0,0,1,8.77,7a.81.81,0,0,1,.61.25.83.83,0,0,1,.27.62.81.81,0,0,1-.25.61.91.91,0,0,1-.63.27Zm9.62-5a1.74,1.74,0,0,1,1.76,1.76V17.76a1.74,1.74,0,0,1-1.76,1.76H6.16A1.74,1.74,0,0,1,4.4,17.76V5.51A1.74,1.74,0,0,1,6.16,3.75H18.39Zm0,1.75H6.16v8L8.53,11.8a.94.94,0,0,1,.54-.17.86.86,0,0,1,.54.2L11.09,13l3.64-4.55a.78.78,0,0,1,.34-.25.85.85,0,0,1,.42-.07.89.89,0,0,1,.39.12.78.78,0,0,1,.28.29l2.24,3.67V5.51Zm0,12.24V15.6L15.3,10.53,11.89,14.8a.89.89,0,0,1-.59.32.82.82,0,0,1-.64-.18L9,13.62,6.16,15.74v2Z" transform="translate(-4.4 -3.75)"/></g></svg>',
    video: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 14.55"><g><path d="M20.15,10.26V18.9l-3.94-1.57v1.2H4.41V10.66H16.22v1.23l2-.81,2-.82ZM14.64,17h0V12.54h0v-.31H6V17h8.67Zm3.94-.37v-4l-2.37,1v2l1.18.48,1.19.48ZM7.94,9.86A2.77,2.77,0,0,1,5.19,7.11a2.76,2.76,0,0,1,5.51,0A2.78,2.78,0,0,1,7.94,9.86Zm0-3.93a1.21,1.21,0,0,0-.83.35,1.15,1.15,0,0,0-.34.84A1.09,1.09,0,0,0,7.11,8,1.15,1.15,0,0,0,8,8.28,1.13,1.13,0,0,0,9.11,7.12,1.16,1.16,0,0,0,7.94,5.93Zm5.9,3.93a2.34,2.34,0,0,1-1.67-.68,2.3,2.3,0,0,1-.68-1.67,2.35,2.35,0,0,1,4-1.67,2.37,2.37,0,0,1,0,3.34,2.33,2.33,0,0,1-1.68.68Zm0-3.14a.75.75,0,1,0,.55.22.73.73,0,0,0-.55-.22Z" transform="translate(-4.41 -4.35)"/></g></svg>',
    link: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.72"><g><path d="M13.05,13.63a.24.24,0,0,1,.15.22L13.42,16a.19.19,0,0,1-.08.18l-2.12,2.14a4.08,4.08,0,0,1-1.29.85A4,4,0,0,1,4.71,17a3.92,3.92,0,0,1-.3-1.52A4,4,0,0,1,4.71,14a3.91,3.91,0,0,1,.87-1.3L7.7,10.56a.25.25,0,0,1,.2-.06l2.17.22a.21.21,0,0,1,.19.15.24.24,0,0,1,0,.25L7.12,14.23a1.81,1.81,0,0,0,0,2.58,1.78,1.78,0,0,0,1.29.52,1.74,1.74,0,0,0,1.28-.52L12.8,13.7a.24.24,0,0,1,.25-.07ZM19,4.92a4,4,0,0,1,0,5.66L16.86,12.7a.25.25,0,0,1-.17.08l-2.2-.23a.21.21,0,0,1-.19-.15.22.22,0,0,1,0-.25L17.44,9a1.81,1.81,0,0,0,0-2.58,1.78,1.78,0,0,0-1.29-.52,1.74,1.74,0,0,0-1.28.52L11.76,9.57a.21.21,0,0,1-.25,0,.24.24,0,0,1-.16-.21l-.22-2.17a.19.19,0,0,1,.08-.18l2.12-2.14a4.08,4.08,0,0,1,1.29-.85,4.05,4.05,0,0,1,3.06,0,3.85,3.85,0,0,1,1.3.85ZM5.84,9.82a.25.25,0,0,1-.18-.08.19.19,0,0,1-.07-.19l.11-.77a.2.2,0,0,1,.11-.17.24.24,0,0,1,.2,0l2.5.72a.25.25,0,0,1,.15.27.22.22,0,0,1-.23.21l-2.59,0Zm4.12-2-.73-2.5a.27.27,0,0,1,0-.2A.21.21,0,0,1,9.41,5L10.19,5a.25.25,0,0,1,.19,0,.23.23,0,0,1,.08.18l-.05,2.61a.2.2,0,0,1-.19.23h0A.22.22,0,0,1,10,7.85Zm8.76,5.58a.25.25,0,0,1,.18.08.23.23,0,0,1,.06.2l-.11.77a.25.25,0,0,1-.11.17.21.21,0,0,1-.12,0l-.08,0L16,14a.25.25,0,0,1-.15-.27.22.22,0,0,1,.22-.21l1.29,0,1.33,0Zm-4.12,2,.74,2.51a.28.28,0,0,1,0,.2.23.23,0,0,1-.18.11l-.8.11a.23.23,0,0,1-.17-.07.25.25,0,0,1-.08-.18l0-2.61a.22.22,0,0,1,.22-.22.21.21,0,0,1,.26.15Z" transform="translate(-4.41 -3.77)"/></g></svg>',
    math: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.81 15.73"><g><path d="M17.19,5.73a1,1,0,0,0,.71-.29,1,1,0,0,0,.28-.7,1,1,0,0,0-1-1H7.35a1,1,0,0,0-1,1,.77.77,0,0,0,.13.47h0l4.58,6.43L6.68,17.81a1.25,1.25,0,0,0-.29.71.94.94,0,0,0,.28.7.92.92,0,0,0,.69.28H17.2a1,1,0,0,0,.71-.28,1,1,0,0,0,0-1.39.92.92,0,0,0-.71-.29H9.26l3.87-5.43a.86.86,0,0,0,0-.95L9.26,5.73h7.93Z" transform="translate(-6.38 -3.77)"/></g></svg>',
    unlink: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.72"><g><path d="M19,18.32a4,4,0,0,0,0-5.68L15.85,9.5l-1.17,1.55L17.57,14a2,2,0,0,1,.61,1.47,2.08,2.08,0,0,1-2.09,2.09,2,2,0,0,1-1.47-.61l-.38-.37-1.74,1,.8.78a4,4,0,0,0,5.68,0ZM8,9.77a2,2,0,0,1-1.27-1,1.89,1.89,0,0,1-.21-1.57A2.1,2.1,0,0,1,7.45,6,2,2,0,0,1,9,5.76L12.27,7.2l.49-2L9.48,3.9a4,4,0,0,0-3.06.41A3.82,3.82,0,0,0,4.56,6.73a3.8,3.8,0,0,0,.4,3A3.78,3.78,0,0,0,7.39,11.6l5.38,2,.49-2-2.64-.94L8,9.77Z" transform="translate(-4.41 -3.76)"/></g></svg>',
    table_header: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 15.74"><g><path d="M17,19.5v-.78H15.5v.78H17Zm-3,0v-.78H12.5v.78H14Zm-3,0v-.78H9.53v.78H11Zm-3,0v-.78H6.53v.78H8Zm10.55,0a1.73,1.73,0,0,0,.85-.35,1.67,1.67,0,0,0,.56-.76l-.71-.31a1.21,1.21,0,0,1-.35.4,1.34,1.34,0,0,1-.53.23l.08.38c.06.24.09.38.1.41Zm-13.7-.63.55-.55A.77.77,0,0,1,5.25,18a1.31,1.31,0,0,1-.06-.38v-.38H4.41v.38a2,2,0,0,0,.12.68,1.6,1.6,0,0,0,.35.57Zm15.27-2.12V15.26h-.78v1.49h.78Zm-15-1V14.23H4.41v1.49h.78Zm15-2V12.26h-.78v1.49h.78Zm-15-1V11.22H4.41v1.51h.78Zm15-2V9.26h-.78v1.51h.78Zm-15-1V8.17H4.41V9.74h.78Zm15-2V6.28h-.78V7.77h.78Zm-15-1.11V5.33L4.48,5.1a.77.77,0,0,0-.07.27,2.72,2.72,0,0,0,0,.28v1h.79ZM19.21,5l.63-.4A1.62,1.62,0,0,0,19.16,4a1.94,1.94,0,0,0-.91-.22v.78a1.31,1.31,0,0,1,.56.12.88.88,0,0,1,.4.36ZM6,4.54H7.78V3.76H6a.82.82,0,0,0-.28.06l.12.35c.07.21.1.33.11.36Zm10.8,0V3.76H15.28v.78h1.49Zm-3,0V3.76H12.28v.78h1.49Zm-3,0V3.76H9.28v.78h1.51ZM6,10.84h12.6V6.91H6Z" transform="translate(-4.4 -3.76)"/></g></svg>',
    merge_cell: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.76 15.74"><g><path d="M18.92,13.5h1.23v4.15A1.84,1.84,0,0,1,18.3,19.5H14V18.27H18.3a.6.6,0,0,0,.44-.18.59.59,0,0,0,.18-.44V13.5ZM18.3,3.76a1.84,1.84,0,0,1,1.85,1.85V9.82H18.92V5.6a.6.6,0,0,0-.18-.44A.59.59,0,0,0,18.3,5H14V3.76H18.3Zm1.85,8.51H15.6L17.26,14l-.86.86-3.14-3.17L16.4,8.51l.86.86L15.62,11h4.54v1.24Zm-13.9,6h4.27V19.5H6.25A1.84,1.84,0,0,1,4.4,17.65V13.5H5.63v4.15a.61.61,0,0,0,.62.62Zm0-14.51h4.27V5H6.25a.6.6,0,0,0-.44.18.57.57,0,0,0-.17.43V9.81H4.41V5.6A1.83,1.83,0,0,1,6.25,3.76Zm5,7.9L8.15,14.83,7.3,14,9,12.27H4.41V11H8.94L7.3,9.38,7.73,9l.43-.43Z" transform="translate(-4.4 -3.76)"/></g></svg>',
    split_cell: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 15.74"><g><path d="M10.37,12.25H6.74L8.4,13.94l-.87.86L4.41,11.63,7.53,8.5l.87.86L6.74,11h3.62v1.23Zm9.78-.61L17,14.81,16.13,14l1.66-1.69H14.16V11h3.63L16.13,9.37l.43-.43A5.24,5.24,0,0,1,17,8.51ZM18.9,8.22V5.61a.57.57,0,0,0-.18-.43A.65.65,0,0,0,18.29,5H12.88V18.28h5.41a.7.7,0,0,0,.44-.18.57.57,0,0,0,.18-.43V15h1.23v2.64a1.84,1.84,0,0,1-1.85,1.83h-12A1.84,1.84,0,0,1,4.94,19a1.81,1.81,0,0,1-.54-1.29V15H5.63v2.64a.57.57,0,0,0,.18.43.67.67,0,0,0,.44.18h5.41V5H6.25a.7.7,0,0,0-.44.18.56.56,0,0,0-.17.43V8.22H4.41V5.61A1.8,1.8,0,0,1,5,4.31a1.91,1.91,0,0,1,1.31-.55h12a1.89,1.89,0,0,1,1.31.55,1.8,1.8,0,0,1,.54,1.3V8.23H18.9Z" transform="translate(-4.4 -3.76)"/></g></svg>',
    caption: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 13.79"><g><path d="M4.41,18.52H20.15v-2H4.41ZM20,4.73H18.07V6h.65v.65H20V4.73ZM17,6V4.73H14.55V6H17ZM13.49,6V4.73H11V6h2.47ZM10,6V4.73H7.5V6H10ZM5.79,6h.65V4.73H4.5V6.67H5.8V6ZM4.5,11.34H5.79V8.48H4.5ZM6.44,13.8H5.79v-.65H4.5v1.94H6.44ZM17,15.09V13.8H14.55v1.29H17Zm-3.52,0V13.8H11v1.29h2.47Zm-3.53,0V13.8H7.5v1.29H10ZM20,13.16H18.72v.65h-.65V15.1H20Zm-1.29-1.82H20V8.48h-1.3v2.86Z" transform="translate(-4.41 -4.73)"/></g></svg>',
    edit: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.73"><g><path d="M7.51,5.68h6l1.52-1.57H6.94a2.4,2.4,0,0,0-1.79.82A2.8,2.8,0,0,0,4.41,6.8V17a2.55,2.55,0,0,0,.75,1.8A2.48,2.48,0,0,0,7,19.5H17.22a2.57,2.57,0,0,0,1.83-.74,2.52,2.52,0,0,0,.77-1.8V8.83l-1.58,1.54v6a1.54,1.54,0,0,1-1.53,1.53H7.51A1.54,1.54,0,0,1,6,16.41V7.21A1.52,1.52,0,0,1,7.51,5.68Zm5.63,7.47h0L10.7,10.74l-1,3.38,1.71-.48,1.7-.49Zm.34-.34h0l5.36-5.32L16.4,5.08,11,10.4l1.23,1.21,1.21,1.2ZM19.93,6.4a.82.82,0,0,0,.22-.48A.54.54,0,0,0,20,5.47L18.45,4A.67.67,0,0,0,18,3.77a.7.7,0,0,0-.48.21l-.74.72,2.44,2.43.37-.37.35-.36Z" transform="translate(-4.41 -3.77)"/></g></svg>',
    delete: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.73 15.74"><g><path d="M19.16,6.71a.94.94,0,0,0,.69-.28.91.91,0,0,0,.29-.68A1,1,0,0,0,19.85,5a.93.93,0,0,0-.69-.3H14.24A.94.94,0,0,0,14,4.06a.92.92,0,0,0-.7-.3h-2a1,1,0,0,0-.7.3.93.93,0,0,0-.28.68H5.39A.92.92,0,0,0,4.7,5a1,1,0,0,0-.29.71.91.91,0,0,0,.29.68,1,1,0,0,0,.69.28H19.16Zm-12.79,1a1,1,0,0,0-.7.3.94.94,0,0,0-.28.69v8.85A1.88,1.88,0,0,0,6,18.93a1.9,1.9,0,0,0,1.39.57H17.2a1.87,1.87,0,0,0,1.39-.58,1.91,1.91,0,0,0,.58-1.39V8.68A1,1,0,0,0,18.88,8a.89.89,0,0,0-.7-.29,1,1,0,0,0-.69.29.92.92,0,0,0-.29.68v7.87a1,1,0,0,1-1,1H8.34a.94.94,0,0,1-.69-.28,1,1,0,0,1-.29-.71V8.68a1,1,0,0,0-1-1Z" transform="translate(-4.41 -3.76)"/></g></svg>',
    modify: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.7 15.74"><g><path d="M19.79,15.23a.66.66,0,0,1,.3.38.59.59,0,0,1-.07.48l-.8,1.38a.66.66,0,0,1-.38.3.59.59,0,0,1-.48-.07l-.68-.38a4.55,4.55,0,0,1-1.34.77v.78a.64.64,0,0,1-.18.45.61.61,0,0,1-.45.18h-1.6a.6.6,0,0,1-.44-.18.66.66,0,0,1-.19-.45v-.78a4.36,4.36,0,0,1-1.32-.77l-.69.38a.58.58,0,0,1-.48.07.66.66,0,0,1-.38-.3l-.38-.66h.83a1.77,1.77,0,0,0,1.23-.52,1.72,1.72,0,0,0,.51-1.23v-.18a3,3,0,0,0,.49-.28l.15.09a1.83,1.83,0,0,0,.88.23A1.75,1.75,0,0,0,15.84,14l.88-1.52a1.7,1.7,0,0,0,.17-1.32,1.66,1.66,0,0,0-.3-.61,1.84,1.84,0,0,0-.51-.45l-.15-.09,0-.29,0-.28.15-.09a1,1,0,0,0,.26-.18l0,.06v.78a4.34,4.34,0,0,1,1.34.77l.68-.38a.68.68,0,0,1,.48-.06.64.64,0,0,1,.38.29l.8,1.38a.58.58,0,0,1,.07.48.63.63,0,0,1-.3.38l-.68.4a3.84,3.84,0,0,1,.08.76,4.13,4.13,0,0,1-.08.78l.34.18.32.2ZM10.17,7.86a1.9,1.9,0,0,1,1.35,3.23,1.85,1.85,0,0,1-1.35.55A1.9,1.9,0,0,1,8.83,8.41a1.92,1.92,0,0,1,1.34-.55Zm1.58,7.2a.73.73,0,0,1-.21.49.66.66,0,0,1-.48.2H9.29a.68.68,0,0,1-.69-.69V14.2a4.75,4.75,0,0,1-1.48-.86l-.75.45a.73.73,0,0,1-.7,0,.63.63,0,0,1-.25-.26L4.54,12a.67.67,0,0,1-.08-.53.71.71,0,0,1,.32-.42l.75-.43a4.8,4.8,0,0,1-.08-.85,4.71,4.71,0,0,1,.08-.85l-.74-.44a.71.71,0,0,1-.32-.42.65.65,0,0,1,.07-.54L5.42,6a.66.66,0,0,1,.42-.32l.18,0a.73.73,0,0,1,.35.09l.75.43A4.68,4.68,0,0,1,8.6,5.33V4.45a.68.68,0,0,1,.69-.69h1.77a.64.64,0,0,1,.48.2.73.73,0,0,1,.21.49v.88a4.75,4.75,0,0,1,1.48.85L14,5.75a.67.67,0,0,1,.34-.09l.18,0a.71.71,0,0,1,.42.32l.89,1.54a.67.67,0,0,1,.06.52.73.73,0,0,1-.32.43l-.75.42a4.8,4.8,0,0,1,.08.85,4.71,4.71,0,0,1-.08.85l.75.43a.66.66,0,0,1,.32.42.73.73,0,0,1-.06.54l-.89,1.52a.69.69,0,0,1-.25.26.7.7,0,0,1-.35.09.64.64,0,0,1-.34-.09l-.75-.45a4.87,4.87,0,0,1-1.48.86v.87ZM7.23,9.75a3,3,0,0,0,.86,2.08,2.94,2.94,0,1,0,4.16-4.16,3,3,0,0,0-2.08-.85A2.94,2.94,0,0,0,7.23,9.75Z" transform="translate(-4.44 -3.76)"/></g></svg>',
    revert: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.76 14.69"><g><path d="M18.26,15V12.3l1.89-2V15a2.58,2.58,0,0,1-.24,1c-.2.58-.75.92-1.65,1H7.56v2L4.41,15.63,7.56,13v2h10.7ZM6.3,8.28V11L4.41,13V8.28a2.58,2.58,0,0,1,.24-1c.2-.58.75-.92,1.65-1H17v-2l3.15,3.34L17,10.3v-2H6.3Z" transform="translate(-4.4 -4.28)"/></g></svg>',
    auto_size: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.74"><g><path d="M6.71,17.19,6.89,16l1.21-.15A6,6,0,0,1,6.81,13.9a5.78,5.78,0,0,1-.45-2.27A6,6,0,0,1,8.1,7.45a5.83,5.83,0,0,1,4.17-1.73l1-1-1-1A7.89,7.89,0,0,0,5,14.64a7.73,7.73,0,0,0,1.71,2.55Zm5.57,2.31h0A7.86,7.86,0,0,0,17.85,6.07L17.67,7.3l-1.21.15a5.9,5.9,0,0,1,1.29,1.92,5.81,5.81,0,0,1,.45,2.26,5.91,5.91,0,0,1-5.9,5.9l-1,1,.49.49.47.5Z" transform="translate(-4.41 -3.76)"/></g></svg>',
    insert_row_below: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.8 15.8"><g><path d="M15.7,1.3c-0.1-0.1-0.1-0.2-0.2-0.2L15.3,1H0.4L0.3,1.1c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1L0,1.4v7.7l0.1,0.1c0,0.1,0.1,0.1,0.2,0.2l0.1,0.1h2.3V9.3l0.1-0.5L3,8.5l0.1-0.2c-0.1,0-0.2,0-0.3,0H1.2v-6h13.3v6h-1.6c-0.1,0-0.2,0-0.3,0l0.1,0.2l0.2,0.4C12.9,9,13,9.2,13,9.3v0.1h2.3l0.2-0.1c0.1,0,0.1-0.1,0.2-0.2l0.1-0.1V1.4L15.7,1.3z"/><path d="M10.5,7.5C9.9,7.1,9.3,6.8,8.6,6.7c-0.2,0-0.5-0.1-0.7,0c-0.2,0-0.5,0-0.7,0C6.6,6.7,6.1,6.9,5.6,7.3C5.2,7.6,4.7,8,4.4,8.4C4.3,8.6,4.2,8.8,4.2,8.9C4.1,9.1,4,9.3,3.9,9.4C3.9,9.6,3.8,9.7,3.8,9.9c0,0.2-0.1,0.3-0.1,0.5v-0.1c-0.1,0.8,0.1,1.6,0.5,2.4c0.4,0.7,1,1.3,1.7,1.7c0.3,0.2,0.6,0.3,0.9,0.3c0.3,0.1,0.7,0.1,1,0.1c0.3,0,0.7,0,1-0.1c0.3-0.1,0.6-0.2,0.9-0.3c0.5-0.3,0.9-0.6,1.3-1c0.3-0.4,0.6-0.8,0.8-1.3c0.1-0.4,0.2-0.9,0.2-1.4c0-0.5-0.1-1-0.3-1.4C11.5,8.6,11.1,8,10.5,7.5z M10.1,11.3H8.5v1.6H8H7.9H7.3v0v-0.1v-1.4H5.7v-0.4v-0.2v-0.6h0h1.5V8.5h1.2v1.6h1.6V11.3z"/></g></svg>',
    insert_row_above: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.8 15.8"><g><path d="M0.1,14.5c0.1,0.1,0.1,0.2,0.2,0.2l0.1,0.1h14.9l0.1-0.1c0,0,0.1-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1l0.1-0.1V6.7l-0.1-0.1c0-0.1-0.1-0.1-0.2-0.2l-0.1-0.1h-2.3v0.1l-0.1,0.5l-0.2,0.4l-0.1,0.2c0.1,0,0.2,0,0.3,0h1.6v6H1.3v-6h1.6c0.1,0,0.2,0,0.3,0L3.1,7.3L2.9,6.9C2.8,6.8,2.8,6.6,2.7,6.5V6.3H0.4L0.3,6.4c-0.1,0-0.1,0.1-0.2,0.2L0,6.7v7.7L0.1,14.5z"/><path d="M5.3,8.3c0.6,0.5,1.2,0.8,1.9,0.9c0.2,0,0.5,0.1,0.7,0c0.2,0,0.5,0,0.7,0c0.6-0.1,1.1-0.3,1.6-0.6c0.5-0.3,0.9-0.7,1.2-1.2c0.1-0.2,0.2-0.3,0.3-0.5c0.1-0.2,0.2-0.4,0.2-0.5c0.1-0.1,0.1-0.3,0.1-0.4C12,5.8,12,5.6,12,5.4v0.1c0.1-0.8-0.1-1.6-0.5-2.4c-0.4-0.7-1-1.3-1.7-1.7C9.5,1.3,9.2,1.2,8.9,1.1C8.5,1,8.2,1,7.9,1c-0.3,0-0.7,0-1,0.1C6.6,1.2,6.3,1.3,6,1.4C5.5,1.7,5.1,2,4.7,2.4C4.4,2.8,4.1,3.3,3.9,3.8C3.8,4.2,3.7,4.7,3.7,5.2c0,0.5,0.1,1,0.3,1.4C4.3,7.2,4.7,7.8,5.3,8.3z M5.7,4.5h1.6V2.9h0.5h0.1h0.6v0v0.1v1.4H10v0.4v0.2v0.6h0H8.5v1.6H7.3V5.7H5.7V4.5z"/></g></svg>',
    insert_column_left: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.8 15.8"><g><path d="M14.5,15.7c0.1-0.1,0.2-0.1,0.2-0.2l0.1-0.1V0.4l-0.1-0.1c0,0-0.1-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1L14.4,0H6.7L6.6,0.1c-0.1,0-0.1,0.1-0.2,0.2L6.3,0.4v2.3h0.1l0.5,0.1L7.3,3l0.2,0.1c0-0.1,0-0.2,0-0.3V1.2h6v13.3h-6v-1.6c0-0.1,0-0.2,0-0.3l-0.2,0.1l-0.4,0.2C6.7,12.9,6.6,13,6.4,13H6.3v2.3l0.1,0.2c0,0.1,0.1,0.1,0.2,0.2l0.1,0.1h7.7L14.5,15.7z"/><path d="M8.3,10.5C8.7,10,9,9.3,9.1,8.6c0-0.2,0.1-0.5,0-0.7c0-0.2,0-0.5,0-0.7C9,6.7,8.8,6.1,8.5,5.7C8.2,5.2,7.8,4.8,7.3,4.5C7.2,4.4,7,4.3,6.9,4.2C6.7,4.1,6.5,4,6.4,4C6.2,3.9,6.1,3.9,5.9,3.8c-0.2,0-0.3-0.1-0.5-0.1h0.1C4.7,3.7,3.8,3.9,3.1,4.3C2.4,4.7,1.8,5.3,1.4,6C1.3,6.3,1.2,6.6,1.1,6.9C1,7.2,1,7.6,1,7.9c0,0.3,0,0.7,0.1,1c0.1,0.3,0.2,0.6,0.3,0.9c0.3,0.5,0.6,0.9,1,1.3c0.4,0.3,0.8,0.6,1.3,0.8C4.2,12,4.7,12.1,5.1,12c0.5,0,1-0.1,1.4-0.3C7.2,11.5,7.8,11.1,8.3,10.5zM4.5,10.1V8.5H2.9V8V7.9V7.3h0H3h1.4V5.7h0.4h0.2h0.6v0v1.5h1.6v1.2H5.7v1.6H4.5z"/></g></svg>',
    insert_column_right: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.8 15.8"><g><path d="M1.3,0.1C1.2,0.2,1.1,0.2,1.1,0.3L1,0.4v14.9l0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1l0.1,0.1h7.7l0.1-0.1c0.1,0,0.1-0.1,0.2-0.2l0.1-0.1v-2.3H9.3l-0.5-0.1l-0.4-0.2l-0.2-0.1c0,0.1,0,0.2,0,0.3v1.6h-6V1.3h6v1.6c0,0.1,0,0.2,0,0.3l0.2-0.1l0.4-0.2C9,2.9,9.2,2.8,9.3,2.8h0.1V0.5L9.4,0.3c0-0.1-0.1-0.1-0.2-0.2L9.1,0H1.4L1.3,0.1z"/><path d="M7.5,5.3C7,5.8,6.7,6.5,6.6,7.2c0,0.2-0.1,0.5,0,0.7c0,0.2,0,0.5,0,0.7c0.1,0.6,0.3,1.1,0.6,1.6c0.3,0.5,0.7,0.9,1.2,1.2c0.2,0.1,0.3,0.2,0.5,0.3c0.2,0.1,0.4,0.2,0.5,0.2c0.1,0.1,0.3,0.1,0.4,0.1c0.2,0,0.3,0.1,0.5,0.1h-0.1c0.8,0.1,1.6-0.1,2.4-0.5c0.7-0.4,1.3-1,1.7-1.7c0.2-0.3,0.3-0.6,0.3-0.9c0.1-0.3,0.1-0.7,0.1-1c0-0.3,0-0.7-0.1-1c-0.1-0.3-0.2-0.6-0.3-0.9c-0.3-0.5-0.6-0.9-1-1.3C13,4.4,12.5,4.2,12,4c-0.4-0.1-0.9-0.2-1.4-0.2c-0.5,0-1,0.1-1.4,0.2C8.5,4.3,7.9,4.7,7.5,5.3z M11.3,5.7v1.6h1.6v0.5v0.1v0.6h0h-0.1h-1.4v1.6h-0.4h-0.2h-0.6v0V8.5H8.5V7.3h1.6V5.7H11.3z"/></g></svg>',
    delete_row: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 13.83"><g><path d="M4.7,18.46l.12.08H19.73l.12-.08a.58.58,0,0,0,.22-.22l.08-.12,0-7.69-.08-.11a.77.77,0,0,0-.18-.18l-.11-.08-2.31,0-.08.28-.1.29a1.58,1.58,0,0,1-.12.29l-.14.34s0,0,.18,0H18.9v6H5.64v-6H7.35c.14,0,.2,0,.18,0l-.14-.34a2.85,2.85,0,0,1-.12-.29l-.1-.29-.07-.27-2.31,0-.11.08a.77.77,0,0,0-.18.18l-.08.11,0,7.69.08.12a.47.47,0,0,0,.09.12l.13.09ZM12.11,13a4,4,0,0,0,1.46-.21,4.51,4.51,0,0,0,1.31-.71A4,4,0,0,0,16.26,10a4.32,4.32,0,0,0-.08-2.54,4.34,4.34,0,0,0-1-1.52,4.15,4.15,0,0,0-1.54-1,4.34,4.34,0,0,0-1.35-.22A4.07,4.07,0,0,0,11,4.93,3.94,3.94,0,0,0,9.24,6.07,3.92,3.92,0,0,0,8.15,8.88a3.91,3.91,0,0,0,.12.95A4.16,4.16,0,0,0,12.11,13Zm2.35-4.14v.58H10.09V8.27h4.37v.58Z" transform="translate(-4.4 -4.71)"/></g></svg>',
    delete_column: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.81 15.74"><g><path d="M5.66,19.42l.12.08,7.69,0,.11-.08a.77.77,0,0,0,.18-.18l.08-.11,0-2.32-.15,0-.45-.15-.42-.18-.17-.07a1,1,0,0,0,0,.27v1.63h-6V5h6V6.62a.9.9,0,0,0,0,.26l.17-.07.42-.17a3.91,3.91,0,0,1,.45-.15l.15,0,0-2.32L13.75,4a.77.77,0,0,0-.18-.18l-.11-.08H5.79l-.13.07a.63.63,0,0,0-.21.22l-.08.12V19.08l.08.12a.47.47,0,0,0,.09.12.35.35,0,0,0,.12.1Zm9-3.67a4.16,4.16,0,0,0,2.36-.51,4.08,4.08,0,0,0,1.67-1.72,4,4,0,0,0,.35-.91,3.79,3.79,0,0,0,.1-1,4.71,4.71,0,0,0-.11-1,5,5,0,0,0-.3-.87,4.25,4.25,0,0,0-1-1.25,4.49,4.49,0,0,0-1.34-.81A4.26,4.26,0,0,0,15,7.48a3.88,3.88,0,0,0-1.41.25A4.32,4.32,0,0,0,11.86,9,4,4,0,0,0,11,10.94a4.4,4.4,0,0,0-.05.68,4.5,4.5,0,0,0,.05.68,3.93,3.93,0,0,0,.61,1.57,4.22,4.22,0,0,0,1.18,1.2,4.59,4.59,0,0,0,.48.27c.2.1.37.17.5.22a2.44,2.44,0,0,0,.45.12,4.61,4.61,0,0,0,.5.07Zm2.54-4.12v.58H12.87V11h4.37v.59Z" transform="translate(-5.37 -3.76)"/></g></svg>',
    fixed_column_width: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6,5H18A1,1 0 0,1 19,6A1,1 0 0,1 18,7H6A1,1 0 0,1 5,6A1,1 0 0,1 6,5M21,2V4H3V2H21M15,8H17V22H15V8M7,8H9V22H7V8M11,8H13V22H11V8Z" /></svg>',
    rotate_left: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.8 15.8"><g><path d="M0.5,10.2c0,0.1,0,0.2,0,0.3v0.2l0,0c0.1,0.3,0.3,0.6,0.4,0.9l0,0C1,11.8,1.3,12,1.5,11.9h0.1h0.2h0.1c0.1-0.1,0.3-0.3,0.4-0.5v-0.2c0-0.1,0-0.2-0.1-0.3l0,0c-0.2-0.2-0.3-0.4-0.3-0.7l0,0C1.8,10,1.7,9.9,1.5,9.8c-0.1,0-0.2,0-0.3,0H0.9C0.7,9.9,0.6,10,0.5,10.2L0.5,10.2z"/><path d="M2.2,11.5L2.2,11.5L2.2,11.5z"/><path d="M5.9,3.6L5.9,3.6L5.9,3.6z"/><path d="M0.1,7.9c0,0.3,0,0.6,0,0.9l0,0l0,0l0,0l0,0c0,0.2,0.1,0.3,0.2,0.4l0,0c0.2,0.1,0.3,0.2,0.5,0.2l0,0l0,0c0.2,0,0.4-0.1,0.5-0.3l0,0c0-0.1,0.1-0.3,0.1-0.4V8.6l0,0c0-0.2,0-0.5,0-0.7l0,0c0-0.2-0.1-0.4-0.2-0.5C1.1,7.3,0.9,7.2,0.7,7.2S0.3,7.3,0.2,7.4C0.1,7.5,0,7.7,0.1,7.9z"/><path d="M1.9,12.7L1.9,12.7c0,0.2,0,0.4,0.2,0.5l0,0l0.2,0.3l0,0c0.2,0.1,0.3,0.2,0.5,0.4l0,0l0,0l0,0l0,0C2.9,14,3,14.1,3.2,14.1s0.4-0.1,0.5-0.2c0.1-0.2,0.2-0.3,0.2-0.5v-0.1c0-0.2-0.1-0.4-0.2-0.5l0,0l-0.4-0.4l-0.2-0.2l0,0C3,12.1,2.8,12,2.6,12l0,0c-0.2,0-0.4,0.1-0.5,0.2l0,0C2,12.3,1.9,12.5,1.9,12.7z"/><path d="M6.6,15c0,0.2,0.1,0.4,0.2,0.5c0.1,0.1,0.2,0.2,0.4,0.3l0,0c0.3,0,0.5,0,0.7,0h0.3l0,0c0.2,0,0.4-0.1,0.5-0.2c0.1-0.2,0.2-0.3,0.2-0.5l0,0l0,0c0-0.2-0.1-0.4-0.2-0.5l0,0c-0.1-0.1-0.3-0.2-0.5-0.2l0,0H7.9c-0.1,0-0.3,0-0.5,0l0,0H7.3c-0.2-0.1-0.3,0-0.5,0.1l0,0C6.7,14.6,6.6,14.8,6.6,15L6.6,15L6.6,15L6.6,15z"/><path d="M4.2,7.4C4,7.5,4,7.7,4,7.9c0,0.2,0,0.4,0.2,0.5l0,0l3.2,3.2l0,0c0.1,0.1,0.3,0.2,0.5,0.2s0.3-0.1,0.5-0.2l0,0l3.2-3.2l0,0c0.1-0.1,0.2-0.3,0.2-0.5c0-0.2-0.1-0.4-0.2-0.5l0,0C11.5,7.3,11,6.7,10,5.8l0,0L8.4,4.2l0,0C8.3,4.1,8.1,4,7.9,4S7.5,4.1,7.4,4.2L4.2,7.4L4.2,7.4z M6.8,9L5.7,7.9l2.2-2.2l2.3,2.2l-2.3,2.2C7.7,9.9,7.3,9.5,6.8,9L6.8,9z"/><path d="M4.1,14.1C4,14.2,4,14.3,4,14.4v0.2l0,0c0.1,0.1,0.2,0.3,0.4,0.4l0,0c0.3,0.1,0.6,0.2,0.9,0.4h0.1h0.1l0,0c0.2,0,0.3-0.1,0.5-0.1l0,0c0.2-0.1,0.3-0.3,0.3-0.4l0,0l0,0l0,0l0,0v-0.2c0-0.1-0.1-0.2-0.1-0.3l0,0C6.1,14.2,6,14.1,5.8,14l0,0c-0.3-0.1-0.5-0.2-0.8-0.2l0,0c-0.1-0.1-0.2-0.1-0.3-0.1H4.5C4.3,13.7,4.2,13.9,4.1,14.1z"/><path d="M9.3,14.4c0,0.1-0.1,0.3,0,0.4V15l0,0c0,0.1,0.1,0.3,0.5,0.4c0.1,0.1,0.3,0.1,0.4,0.1l0,0h0.1l0,0c0.3-0.1,0.6-0.2,0.9-0.3l0,0c0.1-0.1,0.2-0.2,0.3-0.4l0.1-0.3c0-0.1-0.1-0.2-0.1-0.3l0,0c-0.1-0.2-0.2-0.3-0.4-0.4l0,0h-0.3c-0.1,0-0.2,0-0.3,0l0,0c-0.2,0.1-0.5,0.2-0.8,0.3l0,0C9.5,14.1,9.4,14.2,9.3,14.4L9.3,14.4z"/><path d="M11.4,14.7L11.4,14.7L11.4,14.7z"/><path d="M9.5,15.3L9.5,15.3L9.5,15.3z"/><path d="M15.9,7.9c0-1-0.2-2-0.6-3l0,0c-0.4-1-1-1.9-1.7-2.6C12.8,1.6,12,1,11,0.6l0,0C10.1,0.2,9,0,8,0C7.3,0,6.5,0.1,5.8,0.3l0,0C5.2,0.5,4.6,0.8,4,1.1L3.1,0.2l0,0C2.9,0.1,2.8,0,2.6,0H2.4l0,0C2.2,0,2,0.2,1.9,0.4l0,0L0.1,4.9l0,0C0,5,0,5.1,0,5.2c0,0.2,0.1,0.4,0.2,0.5l0,0c0.2,0.1,0.3,0.2,0.5,0.2h0.1H1l0,0l4.7-1.8l0,0C5.9,4,6.1,3.8,6.1,3.6V3.4C6.1,3.2,6,3,5.9,2.9l0,0L5.1,2.1c0.4-0.2,0.8-0.4,1.3-0.5c0.5-0.1,1.1-0.2,1.7-0.2c0.9,0,1.7,0.2,2.5,0.5l0,0c0.8,0.3,1.5,0.8,2.1,1.4c0.6,0.6,1.1,1.3,1.4,2.1l0,0c0.3,0.8,0.5,1.6,0.5,2.5s-0.2,1.7-0.5,2.5l0,0c-0.3,0.8-0.8,1.5-1.4,2.1c-0.2,0.2-0.4,0.3-0.6,0.5l0,0c-0.2,0.1-0.3,0.3-0.3,0.5v0.1c0,0.1,0,0.3,0.1,0.4l0,0c0.1,0.2,0.3,0.3,0.5,0.3l0,0c0.1,0,0.3-0.1,0.4-0.2l0,0l0,0l0,0l0,0c0.2-0.2,0.5-0.4,0.7-0.6l0,0l0,0l0,0l0,0c0.7-0.8,1.3-1.6,1.7-2.6C15.6,10,15.8,9,15.9,7.9z M1.9,4C2,3.8,2.1,3.5,2.3,3.1l0,0L2.7,2l1.2,1.2L1.9,4z"/><path d="M6.8,15.5L6.8,15.5L6.8,15.5z"/></g></svg>',
    rotate_right: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.8 15.8"><g><path d="M9.9,15.3L9.9,15.3L9.9,15.3z"/><path d="M6.9,15.1L6.9,15.1c0,0.1,0.1,0.3,0.2,0.4l0,0c0.1,0.2,0.3,0.3,0.5,0.3l0,0h0.3c0.2,0,0.4,0,0.7,0l0,0c0.2-0.1,0.3-0.2,0.4-0.3c0.1-0.1,0.2-0.2,0.2-0.4V15c0-0.2-0.1-0.4-0.2-0.4c-0.2-0.1-0.3-0.2-0.5-0.2H8.4l0,0c-0.1,0-0.3,0-0.5,0H7.6l0,0c-0.2,0-0.4,0.1-0.5,0.2C7,14.7,6.9,14.9,6.9,15.1z"/><path d="M6.5,14.4L6.5,14.4L6.5,14.4z"/><path d="M5.8,5.8L5.8,5.8c-1,0.9-1.5,1.5-1.7,1.6l0,0C4,7.5,4,7.7,4,7.9c0,0.2,0,0.4,0.2,0.5l0,0l3.2,3.2l0,0c0.2,0.1,0.3,0.2,0.5,0.2s0.4-0.1,0.5-0.2l0,0l3.2-3.2l0,0c0.1-0.1,0.2-0.3,0.2-0.5c0-0.2-0.1-0.4-0.2-0.5l0,0L8.4,4.2C8.3,4.1,8.1,4,7.9,4C7.7,4,7.5,4.1,7.4,4.2l0,0L5.8,5.8z M5.6,7.9l2.3-2.2l2.2,2.2L9,9l0,0l0,0l0,0l0,0c-0.5,0.6-0.9,0.9-1.1,1.1L5.6,7.9z"/><path d="M9,15.5L9,15.5L9,15.5z"/><path d="M9.6,14.7v0.2l0,0l0,0l0,0l0,0c0.1,0.2,0.1,0.3,0.3,0.3c0.1,0.1,0.3,0.1,0.4,0.1l0,0h0.1h0.1c0.3-0.1,0.6-0.3,0.9-0.4l0,0c0.1-0.1,0.2-0.2,0.3-0.4l0,0v-0.2c0-0.1,0-0.2-0.1-0.3c-0.1-0.2-0.2-0.3-0.4-0.4H11c-0.1,0-0.2,0.1-0.3,0.1l0,0c-0.2,0.1-0.4,0.2-0.7,0.3l0,0l0,0c-0.1,0.1-0.3,0.2-0.4,0.4C9.6,14.5,9.6,14.6,9.6,14.7z"/><path d="M9,14.5L9,14.5L9,14.5z"/><path d="M9.6,14.4L9.6,14.4L9.6,14.4z"/><path d="M11.7,14L11.7,14L11.7,14z"/><path d="M15.6,7.4L15.6,7.4L15.6,7.4z"/><path d="M15,9.4c0.2,0,0.4,0,0.6-0.2l0,0c0.1-0.1,0.2-0.2,0.2-0.4l0,0l0,0l0,0l0,0c0-0.3,0-0.6,0-0.9c0-0.2-0.1-0.4-0.2-0.5c-0.1-0.1-0.3-0.2-0.5-0.2s-0.4,0.1-0.5,0.2c-0.1,0.1-0.2,0.3-0.2,0.5l0,0c0,0.2,0,0.4,0,0.7l0,0v0.1c0,0.1,0,0.3,0.1,0.4l0,0C14.6,9.3,14.8,9.4,15,9.4L15,9.4L15,9.4z"/><path d="M14,12h0.1h0.2h0.1c0.2,0,0.5-0.2,0.6-0.4l0,0c0.2-0.3,0.3-0.6,0.4-0.9l0,0v-0.2c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.2-0.2-0.3-0.4-0.4h-0.3c-0.1,0-0.2,0-0.3,0C14.2,9.9,14,10,14,10.3l0,0c-0.1,0.2-0.2,0.5-0.3,0.7l0,0c-0.1,0.1-0.1,0.2-0.1,0.3v0.2l0,0l0,0C13.6,11.6,13.8,11.8,14,12z"/><path d="M14.6,7.4L14.6,7.4L14.6,7.4z"/><path d="M4.4,14.2c-0.1,0.1-0.1,0.2-0.1,0.3l0.1,0.2c0,0.2,0.2,0.3,0.3,0.4l0,0c0.3,0.1,0.6,0.3,1.1,0.4l0,0h0.1l0,0c0.1,0,0.2-0.1,0.4-0.2c0.1,0,0.2-0.2,0.3-0.3l0,0v-0.2c0-0.1-0.1-0.3-0.2-0.4c-0.1-0.1-0.2-0.2-0.4-0.3l0,0c-0.2-0.1-0.5-0.2-0.7-0.3l0,0c-0.1,0-0.2,0-0.3,0H4.7l0,0C4.6,13.9,4.4,14,4.4,14.2L4.4,14.2z"/><path d="M11.9,13.3c0,0.2,0.1,0.4,0.2,0.6c0.1,0.1,0.3,0.2,0.5,0.2s0.4-0.1,0.5-0.2l0,0l0,0l0,0l0,0c0.1-0.1,0.3-0.3,0.4-0.4l0,0l0.2-0.3l0,0c0.1-0.2,0.2-0.3,0.2-0.5l0,0c0-0.2-0.1-0.4-0.2-0.5l0,0c-0.1-0.1-0.3-0.2-0.5-0.2l0,0c-0.2,0-0.4,0.1-0.5,0.2l0,0l-0.2,0.2l-0.4,0.4l0,0C12,13,11.9,13.1,11.9,13.3L11.9,13.3z"/><path d="M12.1,13.8L12.1,13.8L12.1,13.8z"/><path d="M11.9,13.3L11.9,13.3L11.9,13.3z"/><path d="M15.9,5.2c0-0.1-0.1-0.2-0.1-0.3l0,0L14,0.4l0,0C13.9,0.2,13.7,0,13.5,0l0,0l0,0h-0.2c-0.2,0-0.4,0.1-0.5,0.2l0,0l-0.9,0.9c-0.5-0.3-1.1-0.6-1.8-0.8l0,0C9.4,0.1,8.7,0,7.9,0c-1,0-2,0.2-3,0.6S3,1.6,2.3,2.3C1.6,3.1,1,3.9,0.6,4.9l0,0C0.2,5.8,0,6.8,0,7.9c0,1,0.2,2,0.6,3s0.9,1.8,1.7,2.6l0,0l0,0l0,0l0,0c0.2,0.2,0.5,0.4,0.7,0.6l0,0l0,0l0,0l0,0c0.2,0.1,0.3,0.2,0.5,0.2l0,0c0.2,0,0.4-0.1,0.6-0.3l0,0c0.1-0.1,0.1-0.3,0.1-0.4v-0.1l0,0C4.1,13.3,4,13.1,3.9,13l0,0c-0.2-0.1-0.4-0.3-0.6-0.5c-0.6-0.6-1.1-1.3-1.4-2.1l0,0C1.6,9.6,1.4,8.8,1.4,7.9s0.2-1.7,0.5-2.5l0,0c0.3-0.8,0.8-1.5,1.4-2.1c0.6-0.6,1.3-1.1,2.1-1.4l0,0C6.2,1.6,7,1.4,7.9,1.4c0.6,0,1.1,0.1,1.7,0.2c0.5,0.1,0.9,0.3,1.3,0.5l-0.8,0.8l0,0C10,3.1,9.9,3.2,9.9,3.4v0.2l0,0l0,0c0,0.2,0.2,0.4,0.4,0.5l0,0l4.5,1.8l0,0H15h0.1c0.2,0,0.4-0.1,0.5-0.2l0,0C15.7,5.6,15.8,5.4,15.9,5.2z M11.8,3.2L13,2l0.4,1.1l0,0c0.2,0.4,0.3,0.7,0.4,0.9L11.8,3.2z"/></g></svg>',
    mirror_horizontal: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.75 15.74"><g><path d="M13.75,3.76l5.9,15.74h-5.9V3.76ZM4.9,19.5,10.8,3.76V19.5H4.9Z" transform="translate(-4.9 -3.76)"/></g></svg>',
    mirror_vertical: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 14.75"><g><path d="M20.15,13.1,4.41,19V13.1H20.15ZM4.41,4.25l15.74,5.9H4.41V4.25Z" transform="translate(-4.41 -4.25)"/></g></svg>',
    checked: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 12.1"><g><path d="M4.59,12.23l.12.18L9.43,17.5a.58.58,0,0,0,.84,0L20,7.45h0a.58.58,0,0,0,0-.84l-.85-.85a.58.58,0,0,0-.84,0H18.2l-8.12,8.41a.29.29,0,0,1-.42,0l-3.4-3.63a.58.58,0,0,0-.84,0l-.85.85a.6.6,0,0,0-.14.21.51.51,0,0,0,0,.44c.05.06.1.13.16.19Z" transform="translate(-4.38 -5.58)"/></g></svg>',
    line_break: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,6a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H7.41l1.3-1.29A1,1,0,0,0,7.29,9.29l-3,3a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l3,3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L7.41,14H17a3,3,0,0,0,3-3V7A1,1,0,0,0,19,6Z"/></svg>',
    audio: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" /></svg>',
    image_gallery: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="30 30 150 150"><g><path d="M152.775,120.548V51.651c0-12.271-9.984-22.254-22.254-22.254H43.727c-12.271,0-22.254,9.983-22.254,22.254v68.896c0,12.27,9.983,22.254,22.254,22.254h86.795C142.791,142.802,152.775,132.817,152.775,120.548z M36.394,51.651c0-4.042,3.291-7.333,7.333-7.333h86.795c4.042,0,7.332,3.291,7.332,7.333v23.917l-14.938-17.767c-1.41-1.678-3.487-2.649-5.68-2.658h-0.029c-2.184,0-4.255,0.954-5.674,2.613L76.709,98.519l-9.096-9.398c-1.427-1.474-3.392-2.291-5.448-2.273c-2.052,0.025-4.004,0.893-5.396,2.4L36.394,111.32V51.651z M41.684,127.585l20.697-22.416l9.312,9.622c1.461,1.511,3.489,2.334,5.592,2.27c2.101-0.066,4.075-1.013,5.44-2.612l34.436-40.308l20.693,24.613v21.794c0,4.042-3.29,7.332-7.332,7.332H43.727C43.018,127.88,42.334,127.775,41.684,127.585z M182.616,152.5V75.657c0-4.12-3.34-7.46-7.461-7.46c-4.119,0-7.46,3.34-7.46,7.46V152.5c0,4.112-3.347,7.46-7.461,7.46h-94c-4.119,0-7.46,3.339-7.46,7.459c0,4.123,3.341,7.462,7.46,7.462h94C172.576,174.881,182.616,164.841,182.616,152.5z"/></g></svg>',
    bookmark: '<svg viewBox="0 0 24 24"><path d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z" /></svg>',
    download: '<svg viewBox="0 0 24 24"><path d="M2 12H4V17H20V12H22V17C22 18.11 21.11 19 20 19H4C2.9 19 2 18.11 2 17V12M12 15L17.55 9.54L16.13 8.13L13 11.25V2H11V11.25L7.88 8.13L6.46 9.55L12 15Z" /></svg>',
    dir_ltr: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 4v4c-1.1 0-2-.9-2-2s.9-2 2-2m8-2H9C6.79 2 5 3.79 5 6s1.79 4 4 4v5h2V4h2v11h2V4h2V2zm0 12v3H5v2h12v3l4-4-4-4z"/></svg>',
    dir_rtl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 4v4c-1.1 0-2-.9-2-2s.9-2 2-2m8-2h-8C7.79 2 6 3.79 6 6s1.79 4 4 4v5h2V4h2v11h2V4h2V2zM8 14l-4 4 4 4v-3h12v-2H8v-3z"/></svg>',
    // Error
    alert_outline: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" /></svg>',
    // More icons
    more_text: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 180 180"><g><path d="M49.711,142.188h49.027c2.328,0.002,4.394,1.492,5.129,3.699l9.742,29.252c0.363,1.092,1.385,1.828,2.537,1.83l15.883,0.01c0.859,0,1.667-0.412,2.17-1.109s0.641-1.594,0.37-2.41l-16.625-50.045L86.503,28.953c-0.36-1.097-1.383-1.839-2.537-1.842H64.532c-1.153-0.001-2.178,0.736-2.542,1.831L13.847,173.457c-0.271,0.816-0.135,1.713,0.369,2.412c0.503,0.697,1.311,1.109,2.171,1.109h15.872c1.151,0,2.173-0.736,2.537-1.828l9.793-29.287C45.325,143.66,47.39,142.18,49.711,142.188L49.711,142.188z M53.493,119.098l15.607-46.9c0.744-2.196,2.806-3.674,5.125-3.674s4.381,1.478,5.125,3.674l15.607,46.904c0.537,1.621,0.263,3.402-0.736,4.789c-1.018,1.408-2.649,2.24-4.386,2.24H58.615c-1.736,0-3.368-0.832-4.386-2.24C53.23,122.504,52.956,120.721,53.493,119.098L53.493,119.098z M190.465,63.32c0-2.919-1.015-5.396-3.059-7.428c-2.029-2.031-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.016-7.388,3.047c-2.029,2.032-3.056,4.498-3.056,7.386c0,2.889,1.026,5.354,3.056,7.385c2.032,2.032,4.499,3.059,7.388,3.059c2.887,0,5.354-1.026,7.383-3.059C189.45,68.633,190.465,66.178,190.465,63.32L190.465,63.32z M190.465,101.994c0-2.858-1.015-5.313-3.059-7.333c-2.029-2.042-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.005-7.388,3.047c-2.029,2.021-3.056,4.486-3.056,7.376c0,2.887,1.026,5.352,3.056,7.395c2.032,2.021,4.499,3.047,7.388,3.047c2.887,0,5.354-1.025,7.383-3.047C189.45,107.389,190.465,104.914,190.465,101.994L190.465,101.994z M190.465,140.76c0-2.918-1.015-5.395-3.059-7.438c-2.029-2.041-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.006-7.388,3.047c-2.029,2.043-3.056,4.52-3.056,7.438c0,2.922,1.026,5.398,3.056,7.439c2.032,2.021,4.499,3.047,7.388,3.047c2.887,0,5.354-1.025,7.383-3.047C189.45,146.158,190.465,143.682,190.465,140.76L190.465,140.76z"/></g></svg>',
    more_paragraph: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 180 180"><g><path d="M128.39,28.499H63.493c-25.558,0-46.354,20.796-46.354,46.354c0,25.559,20.796,46.353,46.354,46.353h9.271v55.625h18.542V47.04h9.271V176.83h18.543V47.04h9.271V28.499z M72.764,102.664h-9.271c-15.337,0-27.813-12.475-27.813-27.812c0-15.336,12.476-27.813,27.813-27.813h9.271V102.664z M190.465,63.32c0-2.919-1.015-5.396-3.059-7.428c-2.029-2.031-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.016-7.388,3.047c-2.029,2.032-3.056,4.498-3.056,7.386c0,2.889,1.026,5.354,3.056,7.385c2.032,2.032,4.499,3.059,7.388,3.059c2.887,0,5.354-1.026,7.383-3.059C189.45,68.633,190.465,66.178,190.465,63.32L190.465,63.32z M190.465,101.994c0-2.858-1.015-5.313-3.059-7.333c-2.029-2.042-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.005-7.388,3.047c-2.029,2.021-3.056,4.486-3.056,7.376c0,2.887,1.026,5.352,3.056,7.395c2.032,2.021,4.499,3.047,7.388,3.047c2.887,0,5.354-1.025,7.383-3.047C189.45,107.389,190.465,104.914,190.465,101.994L190.465,101.994z M190.465,140.76c0-2.918-1.015-5.395-3.059-7.438c-2.029-2.041-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.006-7.388,3.047c-2.029,2.043-3.056,4.52-3.056,7.438c0,2.922,1.026,5.398,3.056,7.439c2.032,2.021,4.499,3.047,7.388,3.047c2.887,0,5.354-1.025,7.383-3.047C189.45,146.158,190.465,143.682,190.465,140.76L190.465,140.76z"/></g></svg>',
    more_plus: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="35 30 140 140"><g><path d="M137.215,102.045c0,3.498-2.835,6.332-6.333,6.332H24.549c-3.498,0-6.334-2.834-6.334-6.332l0,0c0-3.498,2.836-6.333,6.334-6.333h106.333C134.38,95.711,137.215,98.547,137.215,102.045L137.215,102.045z M77.715,161.545c-3.498,0-6.333-2.836-6.333-6.334V48.878c0-3.498,2.836-6.333,6.333-6.333l0,0c3.498,0,6.334,2.835,6.334,6.333v106.333C84.049,158.709,81.213,161.545,77.715,161.545L77.715,161.545z M190.465,63.32c0-2.919-1.015-5.396-3.059-7.428c-2.029-2.031-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.016-7.388,3.047c-2.029,2.032-3.056,4.498-3.056,7.386c0,2.889,1.026,5.354,3.056,7.385c2.032,2.032,4.499,3.059,7.388,3.059c2.887,0,5.354-1.026,7.383-3.059C189.45,68.632,190.465,66.177,190.465,63.32L190.465,63.32z M190.465,101.993c0-2.858-1.015-5.313-3.059-7.333c-2.029-2.042-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.005-7.388,3.047c-2.029,2.021-3.056,4.486-3.056,7.376c0,2.888,1.026,5.353,3.056,7.396c2.032,2.021,4.499,3.047,7.388,3.047c2.887,0,5.354-1.025,7.383-3.047C189.45,107.389,190.465,104.914,190.465,101.993L190.465,101.993z M190.465,140.76c0-2.918-1.015-5.395-3.059-7.438c-2.029-2.041-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.006-7.388,3.047c-2.029,2.043-3.056,4.52-3.056,7.438c0,2.922,1.026,5.398,3.056,7.439c2.032,2.021,4.499,3.047,7.388,3.047c2.887,0,5.354-1.025,7.383-3.047C189.45,146.158,190.465,143.682,190.465,140.76L190.465,140.76z"/></g></svg>',
    more_horizontal: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.76 3.58"><g><path d="M4.64,10.73a1.84,1.84,0,0,1,.65-.65,1.76,1.76,0,0,1,1.79,0A1.79,1.79,0,0,1,8,11.63a1.84,1.84,0,0,1-.25.9,1.69,1.69,0,0,1-.65.65,1.8,1.8,0,0,1-2.69-1.55A2.08,2.08,0,0,1,4.64,10.73Zm6.09,0a1.84,1.84,0,0,1,.65-.65,1.78,1.78,0,0,1,2.67,1.55,1.73,1.73,0,0,1-.24.9,1.84,1.84,0,0,1-.65.65,1.76,1.76,0,0,1-1.79,0,1.79,1.79,0,0,1-.64-2.44Zm6.08,0a1.69,1.69,0,0,1,.65-.65,1.76,1.76,0,0,1,1.79,0,1.79,1.79,0,0,1,.9,1.54,1.73,1.73,0,0,1-.24.9,1.84,1.84,0,0,1-.65.65,1.8,1.8,0,0,1-2.69-1.55A2,2,0,0,1,16.81,10.73Z" transform="translate(-4.39 -9.84)"/></g></svg>',
    more_vertical: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3.94 15.75"><g><path d="M12.28,7.69a1.92,1.92,0,0,1-1.39-.58,2,2,0,0,1-.58-1.39,1.92,1.92,0,0,1,.58-1.39,2,2,0,0,1,1.39-.58,1.92,1.92,0,0,1,1.39.58,2,2,0,0,1,.58,1.39,1.92,1.92,0,0,1-.58,1.39,2,2,0,0,1-1.39.58Zm0,2a1.92,1.92,0,0,1,1.39.58,2,2,0,0,1,.58,1.39A1.92,1.92,0,0,1,13.67,13a2,2,0,0,1-1.39.58A1.92,1.92,0,0,1,10.89,13a2,2,0,0,1-.58-1.39,2,2,0,0,1,2-2Zm0,5.9a1.92,1.92,0,0,1,1.39.58,2,2,0,0,1,.58,1.39,1.92,1.92,0,0,1-.58,1.39,2,2,0,0,1-1.39.58,1.92,1.92,0,0,1-1.39-.58,2,2,0,0,1-.58-1.39,1.92,1.92,0,0,1,.58-1.39,1.94,1.94,0,0,1,1.39-.58Z" transform="translate(-10.31 -3.75)"/></g></svg>',
    // Not currently used
    attachment: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.38 15.68"><g><path d="M15.23,6h1v9.78a3.88,3.88,0,0,1-1.31,2.45,4,4,0,0,1-6.57-2.45V7A3,3,0,0,1,9.2,4.89a3,3,0,0,1,5,2.09v8.31a1.92,1.92,0,0,1-.58,1.39,2,2,0,0,1-1.39.58,1.92,1.92,0,0,1-1.39-.58,2,2,0,0,1-.58-1.39V8h1v7.32a1,1,0,0,0,.29.69,1,1,0,0,0,.69.28A.9.9,0,0,0,13,16a1,1,0,0,0,.29-.69V7a1.92,1.92,0,0,0-.58-1.39A2,2,0,0,0,11.27,5a1.92,1.92,0,0,0-1.39.58A2,2,0,0,0,9.33,7v8.31a3,3,0,1,0,5.9,0V6Z" transform="translate(-8.08 -3.78)"/></g></svg>',
    map: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.7 15.62"><g><path d="M12.05,12.42a2.93,2.93,0,1,1,2.07-5A2.88,2.88,0,0,1,15,9.49a3,3,0,0,1-.86,2.07,2.89,2.89,0,0,1-2.07.86Zm0-5.36a2.43,2.43,0,0,0-1.72,4.16,2.48,2.48,0,0,0,1.72.72,2.44,2.44,0,0,0,0-4.88Zm0-3.3A5.84,5.84,0,0,1,17.9,9.62a9.94,9.94,0,0,1-1.73,5A33.59,33.59,0,0,1,12.84,19a1.52,1.52,0,0,1-.23.2,1,1,0,0,1-.55.2h0a1,1,0,0,1-.55-.2,1.52,1.52,0,0,1-.23-.2,33.59,33.59,0,0,1-3.33-4.32,9.93,9.93,0,0,1-1.72-5,5.84,5.84,0,0,1,5.85-5.86ZM12,18.34l.08.05.06-.06a35.58,35.58,0,0,0,3.06-3.93,9.35,9.35,0,0,0,1.74-4.77,4.88,4.88,0,0,0-4.88-4.88A4.79,4.79,0,0,0,8.6,6.17,4.84,4.84,0,0,0,7.17,9.62,9.29,9.29,0,0,0,8.91,14.4,36,36,0,0,0,12,18.34Z" transform="translate(-6.2 -3.76)"/></g></svg>',
    magic_stick: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.73 15.75"><g><path d="M19.86,19.21a1,1,0,0,0,.28-.68,1,1,0,0,0-.28-.7L13,10.93a1,1,0,0,0-.7-.28,1,1,0,0,0-.68,1.65l6.9,6.9a1,1,0,0,0,.69.29.93.93,0,0,0,.69-.28ZM9.19,8.55a3,3,0,0,0,1.68,0,14.12,14.12,0,0,0,1.41-.32A11.26,11.26,0,0,0,10.8,7.06c-.56-.36-.86-.56-.91-.58S10,5.91,10,5.11s0-1.26-.15-1.37a4.35,4.35,0,0,0-1.19.71c-.53.4-.81.62-.87.68a9,9,0,0,0-2-.6,6.84,6.84,0,0,0-.76-.09s0,.27.08.77a8.6,8.6,0,0,0,.61,2q-.09.09-.69.87a3.59,3.59,0,0,0-.68,1.17c.12.17.57.23,1.36.15S7,9.26,7.15,9.23s.21.36.57.91a10.49,10.49,0,0,0,1.14,1.48c0-.1.14-.57.31-1.4a3,3,0,0,0,0-1.67Z" transform="translate(-4.41 -3.74)"/></g></svg>',
    empty_file: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.78 15.75"><g><path d="M14.73,3.76,18.67,7.7v9.84a2,2,0,0,1-2,2H7.84a1.89,1.89,0,0,1-1.38-.58,2,2,0,0,1-.57-1.39V5.73a1.93,1.93,0,0,1,.57-1.38,2,2,0,0,1,1.38-.58h6.62l.26,0v0Zm2.95,4.92h-2a1.93,1.93,0,0,1-1.38-.57,2,2,0,0,1-.58-1.4V6.17c0-.36,0-.84,0-1.43H7.85a1,1,0,0,0-.7.29,1,1,0,0,0-.29.7V17.54a1,1,0,0,0,.29.69,1,1,0,0,0,.69.29h8.85a1,1,0,0,0,.71-.29.92.92,0,0,0,.28-.69Zm0-1L14.73,4.74v2A1,1,0,0,0,15,7.4a1,1,0,0,0,.69.29Z" transform="translate(-5.89 -3.76)"/></g></svg>'
};
}),
"4225": (function (module, __unused_webpack_exports, __webpack_require__) {
/* module decorator */ module = __webpack_require__.nmd(module);
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */ 'use strict';
(function(global, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') module.exports = global.document ? factory(global, true) : function(w) {
        if (!w.document) throw new Error('SUNEDITOR_LANG a window with a document');
        return factory(w);
    };
    else factory(global);
})(typeof window !== 'undefined' ? window : this, function(window1, noGlobal) {
    const lang = {
        code: 'en',
        toolbar: {
            default: 'Default',
            save: 'Save',
            font: 'Font',
            formats: 'Formats',
            fontSize: 'Size',
            bold: 'Bold',
            underline: 'Underline',
            italic: 'Italic',
            strike: 'Strike',
            subscript: 'Subscript',
            superscript: 'Superscript',
            removeFormat: 'Remove Format',
            fontColor: 'Font Color',
            hiliteColor: 'Highlight Color',
            indent: 'Indent',
            outdent: 'Outdent',
            align: 'Align',
            alignLeft: 'Align left',
            alignRight: 'Align right',
            alignCenter: 'Align center',
            alignJustify: 'Align justify',
            list: 'List',
            orderList: 'Ordered list',
            unorderList: 'Unordered list',
            horizontalRule: 'Horizontal line',
            hr_solid: 'Solid',
            hr_dotted: 'Dotted',
            hr_dashed: 'Dashed',
            table: 'Table',
            link: 'Link',
            math: 'Math',
            image: 'Image',
            video: 'Video',
            audio: 'Audio',
            fullScreen: 'Full screen',
            showBlocks: 'Show blocks',
            codeView: 'Code view',
            undo: 'Undo',
            redo: 'Redo',
            preview: 'Preview',
            print: 'print',
            tag_p: 'Paragraph',
            tag_div: 'Normal (DIV)',
            tag_h: 'Header',
            tag_blockquote: 'Quote',
            tag_pre: 'Code',
            template: 'Template',
            lineHeight: 'Line height',
            paragraphStyle: 'Paragraph style',
            textStyle: 'Text style',
            imageGallery: 'Image gallery',
            dir_ltr: 'Left to right',
            dir_rtl: 'Right to left',
            mention: 'Mention'
        },
        dialogBox: {
            linkBox: {
                title: 'Insert Link',
                url: 'URL to link',
                text: 'Text to display',
                newWindowCheck: 'Open in new window',
                downloadLinkCheck: 'Download link',
                bookmark: 'Bookmark'
            },
            mathBox: {
                title: 'Math',
                inputLabel: 'Mathematical Notation',
                fontSizeLabel: 'Font Size',
                previewLabel: 'Preview'
            },
            imageBox: {
                title: 'Insert image',
                file: 'Select from files',
                url: 'Image URL',
                altText: 'Alternative text'
            },
            videoBox: {
                title: 'Insert Video',
                file: 'Select from files',
                url: 'Media embed URL, YouTube/Vimeo'
            },
            audioBox: {
                title: 'Insert Audio',
                file: 'Select from files',
                url: 'Audio URL'
            },
            browser: {
                tags: 'Tags',
                search: 'Search'
            },
            caption: 'Insert description',
            close: 'Close',
            submitButton: 'Submit',
            revertButton: 'Revert',
            proportion: 'Constrain proportions',
            basic: 'Basic',
            left: 'Left',
            right: 'Right',
            center: 'Center',
            width: 'Width',
            height: 'Height',
            size: 'Size',
            ratio: 'Ratio'
        },
        controller: {
            edit: 'Edit',
            unlink: 'Unlink',
            remove: 'Remove',
            insertRowAbove: 'Insert row above',
            insertRowBelow: 'Insert row below',
            deleteRow: 'Delete row',
            insertColumnBefore: 'Insert column before',
            insertColumnAfter: 'Insert column after',
            deleteColumn: 'Delete column',
            fixedColumnWidth: 'Fixed column width',
            resize100: 'Resize 100%',
            resize75: 'Resize 75%',
            resize50: 'Resize 50%',
            resize25: 'Resize 25%',
            autoSize: 'Auto size',
            mirrorHorizontal: 'Mirror, Horizontal',
            mirrorVertical: 'Mirror, Vertical',
            rotateLeft: 'Rotate left',
            rotateRight: 'Rotate right',
            maxSize: 'Max size',
            minSize: 'Min size',
            tableHeader: 'Table header',
            mergeCells: 'Merge cells',
            splitCells: 'Split Cells',
            HorizontalSplit: 'Horizontal split',
            VerticalSplit: 'Vertical split'
        },
        menu: {
            spaced: 'Spaced',
            bordered: 'Bordered',
            neon: 'Neon',
            translucent: 'Translucent',
            shadow: 'Shadow',
            code: 'Code'
        }
    };
    if (typeof noGlobal === "undefined") {
        if (!window1.SUNEDITOR_LANG) Object.defineProperty(window1, 'SUNEDITOR_LANG', {
            enumerable: true,
            writable: false,
            configurable: false,
            value: {}
        });
        Object.defineProperty(window1.SUNEDITOR_LANG, 'en', {
            enumerable: true,
            writable: true,
            configurable: true,
            value: lang
        });
    }
    return lang;
});
}),
"3463": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* harmony import */var _assets_defaultIcons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/defaultIcons */"6239");
/* harmony import */var _lang_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lang/en */"4225");
/* harmony import */var _lang_en__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lang_en__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */"3051");
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */ 'use strict';



var __WEBPACK_DEFAULT_EXPORT__ = {
    /**
     * @description document create
     * @param {Element} element Textarea
     * @param {Object} options Options
     * @returns {Object}
     */ init: function(element, options) {
        if (typeof options !== 'object') options = {};
        const doc = document;
        /** --- init options --- */ this._initOptions(element, options);
        // suneditor div
        const top_div = doc.createElement('DIV');
        top_div.className = 'sun-editor' + (options.rtl ? ' se-rtl' : '');
        if (element.id) top_div.id = 'suneditor_' + element.id;
        // relative div
        const relative = doc.createElement('DIV');
        relative.className = 'se-container';
        // toolbar
        const tool_bar = this._createToolBar(doc, options.buttonList, options.plugins, options);
        const toolbarShadow = tool_bar.element.cloneNode(false);
        toolbarShadow.className += ' se-toolbar-shadow';
        tool_bar.element.style.visibility = 'hidden';
        if (tool_bar.pluginCallButtons.math) this._checkKatexMath(options.katex);
        const arrow = doc.createElement('DIV');
        arrow.className = 'se-arrow';
        // sticky toolbar dummy
        const sticky_dummy = doc.createElement('DIV');
        sticky_dummy.className = 'se-toolbar-sticky-dummy';
        // inner editor div
        const editor_div = doc.createElement('DIV');
        editor_div.className = 'se-wrapper';
        /** --- init elements and create bottom bar --- */ const initElements = this._initElements(options, top_div, tool_bar.element, arrow);
        const bottomBar = initElements.bottomBar;
        const wysiwyg_div = initElements.wysiwygFrame;
        const placeholder_span = initElements.placeholder;
        let textarea = initElements.codeView;
        // resizing bar
        const resizing_bar = bottomBar.resizingBar;
        const navigation = bottomBar.navigation;
        const char_wrapper = bottomBar.charWrapper;
        const char_counter = bottomBar.charCounter;
        // loading box
        const loading_box = doc.createElement('DIV');
        loading_box.className = 'se-loading-box sun-editor-common';
        loading_box.innerHTML = '<div class="se-loading-effect"></div>';
        // enter line
        const line_breaker = doc.createElement('DIV');
        line_breaker.className = 'se-line-breaker';
        line_breaker.innerHTML = '<button class="se-btn">' + options.icons.line_break + '</button>';
        const line_breaker_t = doc.createElement('DIV');
        line_breaker_t.className += 'se-line-breaker-component';
        const line_breaker_b = line_breaker_t.cloneNode(true);
        line_breaker_t.innerHTML = line_breaker_b.innerHTML = options.icons.line_break;
        // resize operation background
        const resize_back = doc.createElement('DIV');
        resize_back.className = 'se-resizing-back';
        // toolbar container
        const toolbarContainer = options.toolbarContainer;
        if (toolbarContainer) {
            toolbarContainer.appendChild(tool_bar.element);
            toolbarContainer.appendChild(toolbarShadow);
        }
        // resizingbar
        const resizingBarContainer = options.resizingBarContainer;
        if (resizing_bar && resizingBarContainer) resizingBarContainer.appendChild(resizing_bar);
        /** append html */ editor_div.appendChild(textarea);
        if (placeholder_span) editor_div.appendChild(placeholder_span);
        if (!toolbarContainer) {
            relative.appendChild(tool_bar.element);
            relative.appendChild(toolbarShadow);
        }
        relative.appendChild(sticky_dummy);
        relative.appendChild(editor_div);
        relative.appendChild(resize_back);
        relative.appendChild(loading_box);
        relative.appendChild(line_breaker);
        relative.appendChild(line_breaker_t);
        relative.appendChild(line_breaker_b);
        if (resizing_bar && !resizingBarContainer) relative.appendChild(resizing_bar);
        top_div.appendChild(relative);
        textarea = this._checkCodeMirror(options, textarea);
        return {
            constructed: {
                _top: top_div,
                _relative: relative,
                _toolBar: tool_bar.element,
                _toolbarShadow: toolbarShadow,
                _menuTray: tool_bar._menuTray,
                _editorArea: editor_div,
                _wysiwygArea: wysiwyg_div,
                _codeArea: textarea,
                _placeholder: placeholder_span,
                _resizingBar: resizing_bar,
                _navigation: navigation,
                _charWrapper: char_wrapper,
                _charCounter: char_counter,
                _loading: loading_box,
                _lineBreaker: line_breaker,
                _lineBreaker_t: line_breaker_t,
                _lineBreaker_b: line_breaker_b,
                _resizeBack: resize_back,
                _stickyDummy: sticky_dummy,
                _arrow: arrow
            },
            options: options,
            plugins: tool_bar.plugins,
            pluginCallButtons: tool_bar.pluginCallButtons,
            _responsiveButtons: tool_bar.responsiveButtons
        };
    },
    /**
     * @description Check the CodeMirror option to apply the CodeMirror and return the CodeMirror element.
     * @param {Object} options options
     * @param {Element} textarea textarea element
     * @private
     */ _checkCodeMirror: function(options, textarea) {
        if (options.codeMirror) {
            const cmOptions = [
                {
                    mode: 'htmlmixed',
                    htmlMode: true,
                    lineNumbers: true,
                    lineWrapping: true
                },
                options.codeMirror.options || {}
            ].reduce(function(init, option) {
                for(let key in option)if (_util__WEBPACK_IMPORTED_MODULE_2__["default"].hasOwn(option, key)) init[key] = option[key];
                return init;
            }, {});
            if (options.height === 'auto') {
                cmOptions.viewportMargin = Infinity;
                cmOptions.height = 'auto';
            }
            const cm = options.codeMirror.src.fromTextArea(textarea, cmOptions);
            cm.display.wrapper.style.cssText = textarea.style.cssText;
            options.codeMirrorEditor = cm;
            textarea = cm.display.wrapper;
            textarea.className += ' se-wrapper-code-mirror';
        }
        return textarea;
    },
    /**
     * @description Check for a katex object.
     * @param {Object} katex katex object
     * @private
     */ _checkKatexMath: function(katex) {
        if (!katex) throw Error('[SUNEDITOR.create.fail] To use the math button you need to add a "katex" object to the options.');
        const katexOptions = [
            {
                throwOnError: false
            },
            katex.options || {}
        ].reduce(function(init, option) {
            for(let key in option)if (_util__WEBPACK_IMPORTED_MODULE_2__["default"].hasOwn(option, key)) init[key] = option[key];
            return init;
        }, {});
        katex.options = katexOptions;
    },
    /**
     * @description Add or reset options
     * @param {Object} mergeOptions New options property
     * @param {Object} context Context object of core
     * @param {Object} originOptions Origin options
     * @returns {Object} pluginCallButtons
     * @private
     */ _setOptions: function(mergeOptions, context, originOptions) {
        this._initOptions(context.element.originElement, mergeOptions);
        const el = context.element;
        const relative = el.relative;
        const editorArea = el.editorArea;
        const isNewToolbarContainer = mergeOptions.toolbarContainer && mergeOptions.toolbarContainer !== originOptions.toolbarContainer;
        const isNewToolbar = mergeOptions.lang !== originOptions.lang || mergeOptions.buttonList !== originOptions.buttonList || mergeOptions.mode !== originOptions.mode || isNewToolbarContainer;
        const tool_bar = this._createToolBar(document, isNewToolbar ? mergeOptions.buttonList : originOptions.buttonList, mergeOptions.plugins, mergeOptions);
        if (tool_bar.pluginCallButtons.math) this._checkKatexMath(mergeOptions.katex);
        const arrow = document.createElement('DIV');
        arrow.className = 'se-arrow';
        if (isNewToolbar) {
            tool_bar.element.style.visibility = 'hidden';
            // toolbar container
            if (isNewToolbarContainer) {
                mergeOptions.toolbarContainer.appendChild(tool_bar.element);
                el.toolbar.parentElement.removeChild(el.toolbar);
            } else el.toolbar.parentElement.replaceChild(tool_bar.element, el.toolbar);
            el.toolbar = tool_bar.element;
            el._menuTray = tool_bar._menuTray;
            el._arrow = arrow;
        }
        const initElements = this._initElements(mergeOptions, el.topArea, isNewToolbar ? tool_bar.element : el.toolbar, arrow);
        const bottomBar = initElements.bottomBar;
        const wysiwygFrame = initElements.wysiwygFrame;
        const placeholder_span = initElements.placeholder;
        let code = initElements.codeView;
        if (el.resizingBar) _util__WEBPACK_IMPORTED_MODULE_2__["default"].removeItem(el.resizingBar);
        if (bottomBar.resizingBar) {
            if (mergeOptions.resizingBarContainer && mergeOptions.resizingBarContainer !== originOptions.resizingBarContainer) mergeOptions.resizingBarContainer.appendChild(bottomBar.resizingBar);
            else relative.appendChild(bottomBar.resizingBar);
        }
        editorArea.innerHTML = '';
        editorArea.appendChild(code);
        if (placeholder_span) editorArea.appendChild(placeholder_span);
        code = this._checkCodeMirror(mergeOptions, code);
        el.resizingBar = bottomBar.resizingBar;
        el.navigation = bottomBar.navigation;
        el.charWrapper = bottomBar.charWrapper;
        el.charCounter = bottomBar.charCounter;
        el.wysiwygFrame = wysiwygFrame;
        el.code = code;
        el.placeholder = placeholder_span;
        if (mergeOptions.rtl) _util__WEBPACK_IMPORTED_MODULE_2__["default"].addClass(el.topArea, 'se-rtl');
        else _util__WEBPACK_IMPORTED_MODULE_2__["default"].removeClass(el.topArea, 'se-rtl');
        return {
            callButtons: tool_bar.pluginCallButtons,
            plugins: tool_bar.plugins,
            toolbar: tool_bar
        };
    },
    /**
     * @description Initialize property of suneditor elements
     * @param {Object} options Options
     * @param {Element} topDiv Suneditor top div
     * @param {Element} toolBar Tool bar
     * @param {Element} toolBarArrow Tool bar arrow (balloon editor)
     * @returns {Object} Bottom bar elements (resizingBar, navigation, charWrapper, charCounter)
     * @private
     */ _initElements: function(options, topDiv, toolBar, toolBarArrow) {
        /** top div */ topDiv.style.cssText = options._editorStyles.top;
        /** toolbar */ if (/inline/i.test(options.mode)) {
            toolBar.className += ' se-toolbar-inline';
            toolBar.style.width = options.toolbarWidth;
        } else if (/balloon/i.test(options.mode)) {
            toolBar.className += ' se-toolbar-balloon';
            toolBar.style.width = options.toolbarWidth;
            toolBar.appendChild(toolBarArrow);
        }
        /** editor */ // wysiwyg div or iframe
        const wysiwygDiv = document.createElement(!options.iframe ? 'DIV' : 'IFRAME');
        wysiwygDiv.className = 'se-wrapper-inner se-wrapper-wysiwyg';
        if (!options.iframe) {
            wysiwygDiv.setAttribute('contenteditable', true);
            wysiwygDiv.setAttribute('scrolling', 'auto');
            for(let key in options.iframeAttributes)wysiwygDiv.setAttribute(key, options.iframeAttributes[key]);
            wysiwygDiv.className += ' ' + options._editableClass;
            wysiwygDiv.style.cssText = options._editorStyles.frame + options._editorStyles.editor;
            wysiwygDiv.className += options.className;
        } else {
            wysiwygDiv.allowFullscreen = true;
            wysiwygDiv.frameBorder = 0;
            wysiwygDiv.style.cssText = options._editorStyles.frame;
            wysiwygDiv.className += options.className;
        }
        // textarea for code view
        const textarea = document.createElement('TEXTAREA');
        textarea.className = 'se-wrapper-inner se-wrapper-code' + options.className;
        textarea.style.cssText = options._editorStyles.frame;
        textarea.style.display = 'none';
        if (options.height === 'auto') textarea.style.overflow = 'hidden';
        /** resize bar */ let resizingBar = null;
        let navigation = null;
        let charWrapper = null;
        let charCounter = null;
        if (options.resizingBar) {
            resizingBar = document.createElement('DIV');
            resizingBar.className = 'se-resizing-bar sun-editor-common';
            /** navigation */ navigation = document.createElement('DIV');
            navigation.className = 'se-navigation sun-editor-common';
            resizingBar.appendChild(navigation);
            /** char counter */ if (options.charCounter) {
                charWrapper = document.createElement('DIV');
                charWrapper.className = 'se-char-counter-wrapper';
                if (options.charCounterLabel) {
                    const charLabel = document.createElement('SPAN');
                    charLabel.className = 'se-char-label';
                    charLabel.textContent = options.charCounterLabel;
                    charWrapper.appendChild(charLabel);
                }
                charCounter = document.createElement('SPAN');
                charCounter.className = 'se-char-counter';
                charCounter.textContent = '0';
                charWrapper.appendChild(charCounter);
                if (options.maxCharCount > 0) {
                    const char_max = document.createElement('SPAN');
                    char_max.textContent = ' / ' + options.maxCharCount;
                    charWrapper.appendChild(char_max);
                }
                resizingBar.appendChild(charWrapper);
            }
        }
        let placeholder = null;
        if (options.placeholder) {
            placeholder = document.createElement('SPAN');
            placeholder.className = 'se-placeholder';
            placeholder.innerText = options.placeholder;
        }
        return {
            bottomBar: {
                resizingBar: resizingBar,
                navigation: navigation,
                charWrapper: charWrapper,
                charCounter: charCounter
            },
            wysiwygFrame: wysiwygDiv,
            codeView: textarea,
            placeholder: placeholder
        };
    },
    /**
     * @description Initialize options
     * @param {Element} element Options object
     * @param {Object} options Options object
     * @private
     */ _initOptions: function(element, options) {
        const plugins = {};
        if (options.plugins) {
            const _plugins = options.plugins;
            const pluginsValues = _plugins.length ? _plugins : Object.keys(_plugins).map(function(name) {
                return _plugins[name];
            });
            for(let i = 0, len = pluginsValues.length, p; i < len; i++){
                p = pluginsValues[i].default || pluginsValues[i];
                plugins[p.name] = p;
            }
        }
        options.plugins = plugins;
        /** Values */ options.lang = options.lang || (_lang_en__WEBPACK_IMPORTED_MODULE_1___default());
        options.value = typeof options.value === 'string' ? options.value : null;
        options.allowedClassNames = new _util__WEBPACK_IMPORTED_MODULE_2__["default"]._w.RegExp((options.allowedClassNames && typeof options.allowedClassNames === 'string' ? options.allowedClassNames + '|' : '') + '^__se__|se-|katex');
        options.historyStackDelayTime = typeof options.historyStackDelayTime === 'number' ? options.historyStackDelayTime : 400;
        options.frameAttrbutes = options.frameAttrbutes || {};
        // tag style
        options.defaultTag = typeof options.defaultTag === 'string' && options.defaultTag.length > 0 ? options.defaultTag : 'p';
        const textTags = options.textTags = [
            {
                bold: 'STRONG',
                underline: 'U',
                italic: 'EM',
                strike: 'DEL',
                sub: 'SUB',
                sup: 'SUP'
            },
            options.textTags || {}
        ].reduce(function(_default, _new) {
            for(let key in _new)_default[key] = _new[key];
            return _default;
        }, {});
        options._textTagsMap = {
            'strong': textTags.bold.toLowerCase(),
            'b': textTags.bold.toLowerCase(),
            'u': textTags.underline.toLowerCase(),
            'ins': textTags.underline.toLowerCase(),
            'em': textTags.italic.toLowerCase(),
            'i': textTags.italic.toLowerCase(),
            'del': textTags.strike.toLowerCase(),
            'strike': textTags.strike.toLowerCase(),
            's': textTags.strike.toLowerCase(),
            'sub': textTags.sub.toLowerCase(),
            'sup': textTags.sup.toLowerCase()
        };
        options._defaultCommand = {
            bold: options.textTags.bold,
            underline: options.textTags.underline,
            italic: options.textTags.italic,
            strike: options.textTags.strike,
            subscript: options.textTags.sub,
            superscript: options.textTags.sup
        };
        /** Whitelist, Blacklist */ options.__allowedScriptTag = options.__allowedScriptTag === true;
        const whitelist = 'br|p|div|pre|blockquote|h1|h2|h3|h4|h5|h6|ol|ul|li|hr|figure|figcaption|img|iframe|audio|video|source|table|thead|tbody|tr|th|td|a|b|strong|var|i|em|u|ins|s|span|strike|del|sub|sup|code|svg|path|details|summary';
        // tags
        options.tagsBlacklist = options.tagsBlacklist || '';
        options._defaultTagsWhitelist = (typeof options._defaultTagsWhitelist === 'string' ? options._defaultTagsWhitelist : whitelist) + (options.__allowedScriptTag ? '|script' : '');
        options._editorTagsWhitelist = options.addTagsWhitelist === '*' ? '*' : this._setWhitelist(options._defaultTagsWhitelist + (typeof options.addTagsWhitelist === 'string' && options.addTagsWhitelist.length > 0 ? '|' + options.addTagsWhitelist : ''), options.tagsBlacklist);
        // paste tags
        options.pasteTagsBlacklist = options.tagsBlacklist + (options.tagsBlacklist && options.pasteTagsBlacklist ? '|' + options.pasteTagsBlacklist : options.pasteTagsBlacklist || '');
        options.pasteTagsWhitelist = options.pasteTagsWhitelist === '*' ? '*' : this._setWhitelist(typeof options.pasteTagsWhitelist === 'string' ? options.pasteTagsWhitelist : options._editorTagsWhitelist, options.pasteTagsBlacklist);
        // tag attributes
        options.attributesWhitelist = !options.attributesWhitelist || typeof options.attributesWhitelist !== 'object' ? null : options.attributesWhitelist;
        options.attributesBlacklist = !options.attributesBlacklist || typeof options.attributesBlacklist !== 'object' ? null : options.attributesBlacklist;
        /** Layout */ options.mode = options.mode || 'classic'; // classic, inline, balloon, balloon-always
        options.rtl = !!options.rtl;
        options.lineAttrReset = [
            'id'
        ].concat(options.lineAttrReset && typeof options.lineAttrReset === 'string' ? options.lineAttrReset.toLowerCase().split('|') : []);
        options._editableClass = 'sun-editor-editable' + (options.rtl ? ' se-rtl' : '');
        options._printClass = typeof options._printClass === 'string' ? options._printClass : null;
        options.toolbarWidth = options.toolbarWidth ? _util__WEBPACK_IMPORTED_MODULE_2__["default"].isNumber(options.toolbarWidth) ? options.toolbarWidth + 'px' : options.toolbarWidth : 'auto';
        options.toolbarContainer = typeof options.toolbarContainer === 'string' ? document.querySelector(options.toolbarContainer) : options.toolbarContainer;
        options.stickyToolbar = /balloon/i.test(options.mode) || !!options.toolbarContainer ? -1 : options.stickyToolbar === undefined ? 0 : /^\d+/.test(options.stickyToolbar) ? _util__WEBPACK_IMPORTED_MODULE_2__["default"].getNumber(options.stickyToolbar, 0) : -1;
        options.hideToolbar = !!options.hideToolbar;
        options.fullScreenOffset = options.fullScreenOffset === undefined ? 0 : /^\d+/.test(options.fullScreenOffset) ? _util__WEBPACK_IMPORTED_MODULE_2__["default"].getNumber(options.fullScreenOffset, 0) : 0;
        options.fullPage = !!options.fullPage;
        options.iframe = options.fullPage || !!options.iframe;
        options.iframeAttributes = options.iframeAttributes || {};
        options.iframeCSSFileName = options.iframe ? typeof options.iframeCSSFileName === 'string' ? [
            options.iframeCSSFileName
        ] : options.iframeCSSFileName || [
            'suneditor'
        ] : null;
        options.previewTemplate = typeof options.previewTemplate === 'string' ? options.previewTemplate : null;
        options.printTemplate = typeof options.printTemplate === 'string' ? options.printTemplate : null;
        /** CodeMirror object */ options.codeMirror = options.codeMirror ? options.codeMirror.src ? options.codeMirror : {
            src: options.codeMirror
        } : null;
        /** katex object (Math plugin) */ options.katex = options.katex ? options.katex.src ? options.katex : {
            src: options.katex
        } : null;
        options.mathFontSize = !!options.mathFontSize ? options.mathFontSize : [
            {
                text: '1',
                value: '1em'
            },
            {
                text: '1.5',
                value: '1.5em'
            },
            {
                text: '2',
                value: '2em'
            },
            {
                text: '2.5',
                value: '2.5em'
            }
        ];
        /** Display */ options.position = typeof options.position === 'string' ? options.position : null;
        options.display = options.display || (element.style.display === 'none' || !element.style.display ? 'block' : element.style.display);
        options.popupDisplay = options.popupDisplay || 'full';
        /** Bottom resizing bar */ options.resizingBar = options.resizingBar === undefined ? /inline|balloon/i.test(options.mode) ? false : true : options.resizingBar;
        options.showPathLabel = !options.resizingBar ? false : typeof options.showPathLabel === 'boolean' ? options.showPathLabel : true;
        options.resizeEnable = options.resizeEnable === undefined ? true : !!options.resizeEnable;
        options.resizingBarContainer = typeof options.resizingBarContainer === 'string' ? document.querySelector(options.resizingBarContainer) : options.resizingBarContainer;
        /** Character count */ options.charCounter = options.maxCharCount > 0 ? true : typeof options.charCounter === 'boolean' ? options.charCounter : false;
        options.charCounterType = typeof options.charCounterType === 'string' ? options.charCounterType : 'char';
        options.charCounterLabel = typeof options.charCounterLabel === 'string' ? options.charCounterLabel.trim() : null;
        options.maxCharCount = _util__WEBPACK_IMPORTED_MODULE_2__["default"].isNumber(options.maxCharCount) && options.maxCharCount > -1 ? options.maxCharCount * 1 : null;
        /** Width size */ options.width = options.width ? _util__WEBPACK_IMPORTED_MODULE_2__["default"].isNumber(options.width) ? options.width + 'px' : options.width : element.clientWidth ? element.clientWidth + 'px' : '100%';
        options.minWidth = (_util__WEBPACK_IMPORTED_MODULE_2__["default"].isNumber(options.minWidth) ? options.minWidth + 'px' : options.minWidth) || '';
        options.maxWidth = (_util__WEBPACK_IMPORTED_MODULE_2__["default"].isNumber(options.maxWidth) ? options.maxWidth + 'px' : options.maxWidth) || '';
        /** Height size */ options.height = options.height ? _util__WEBPACK_IMPORTED_MODULE_2__["default"].isNumber(options.height) ? options.height + 'px' : options.height : element.clientHeight ? element.clientHeight + 'px' : 'auto';
        options.minHeight = (_util__WEBPACK_IMPORTED_MODULE_2__["default"].isNumber(options.minHeight) ? options.minHeight + 'px' : options.minHeight) || '';
        options.maxHeight = (_util__WEBPACK_IMPORTED_MODULE_2__["default"].isNumber(options.maxHeight) ? options.maxHeight + 'px' : options.maxHeight) || '';
        /** Editing area */ options.className = typeof options.className === 'string' && options.className.length > 0 ? ' ' + options.className : '';
        options.defaultStyle = typeof options.defaultStyle === 'string' ? options.defaultStyle : '';
        /** Defining menu items */ options.font = !options.font ? [
            'Arial',
            'Comic Sans MS',
            'Courier New',
            'Impact',
            'Georgia',
            'tahoma',
            'Trebuchet MS',
            'Verdana'
        ] : options.font;
        options.fontSize = !options.fontSize ? null : options.fontSize;
        options.formats = !options.formats ? null : options.formats;
        options.colorList = !options.colorList ? null : options.colorList;
        options.lineHeights = !options.lineHeights ? null : options.lineHeights;
        options.paragraphStyles = !options.paragraphStyles ? null : options.paragraphStyles;
        options.textStyles = !options.textStyles ? null : options.textStyles;
        options.fontSizeUnit = typeof options.fontSizeUnit === 'string' ? options.fontSizeUnit.trim().toLowerCase() || 'px' : 'px';
        options.alignItems = typeof options.alignItems === 'object' ? options.alignItems : options.rtl ? [
            'right',
            'center',
            'left',
            'justify'
        ] : [
            'left',
            'center',
            'right',
            'justify'
        ];
        /** Image */ options.imageResizing = options.imageResizing === undefined ? true : options.imageResizing;
        options.imageHeightShow = options.imageHeightShow === undefined ? true : !!options.imageHeightShow;
        options.imageAlignShow = options.imageAlignShow === undefined ? true : !!options.imageAlignShow;
        options.imageWidth = !options.imageWidth ? 'auto' : _util__WEBPACK_IMPORTED_MODULE_2__["default"].isNumber(options.imageWidth) ? options.imageWidth + 'px' : options.imageWidth;
        options.imageHeight = !options.imageHeight ? 'auto' : _util__WEBPACK_IMPORTED_MODULE_2__["default"].isNumber(options.imageHeight) ? options.imageHeight + 'px' : options.imageHeight;
        options.imageSizeOnlyPercentage = !!options.imageSizeOnlyPercentage;
        options._imageSizeUnit = options.imageSizeOnlyPercentage ? '%' : 'px';
        options.imageRotation = options.imageRotation !== undefined ? options.imageRotation : !(options.imageSizeOnlyPercentage || !options.imageHeightShow);
        options.imageFileInput = options.imageFileInput === undefined ? true : options.imageFileInput;
        options.imageUrlInput = options.imageUrlInput === undefined || !options.imageFileInput ? true : options.imageUrlInput;
        options.imageUploadHeader = options.imageUploadHeader || null;
        options.imageUploadUrl = typeof options.imageUploadUrl === 'string' ? options.imageUploadUrl : null;
        options.imageUploadSizeLimit = /\d+/.test(options.imageUploadSizeLimit) ? _util__WEBPACK_IMPORTED_MODULE_2__["default"].getNumber(options.imageUploadSizeLimit, 0) : null;
        options.imageMultipleFile = !!options.imageMultipleFile;
        options.imageAccept = typeof options.imageAccept !== 'string' || options.imageAccept.trim() === "*" ? 'image/*' : options.imageAccept.trim() || 'image/*';
        /** Image - image gallery */ options.imageGalleryUrl = typeof options.imageGalleryUrl === 'string' ? options.imageGalleryUrl : null;
        options.imageGalleryHeader = options.imageGalleryHeader || null;
        /** Video */ options.videoResizing = options.videoResizing === undefined ? true : options.videoResizing;
        options.videoHeightShow = options.videoHeightShow === undefined ? true : !!options.videoHeightShow;
        options.videoAlignShow = options.videoAlignShow === undefined ? true : !!options.videoAlignShow;
        options.videoRatioShow = options.videoRatioShow === undefined ? true : !!options.videoRatioShow;
        options.videoWidth = !options.videoWidth || !_util__WEBPACK_IMPORTED_MODULE_2__["default"].getNumber(options.videoWidth, 0) ? '' : _util__WEBPACK_IMPORTED_MODULE_2__["default"].isNumber(options.videoWidth) ? options.videoWidth + 'px' : options.videoWidth;
        options.videoHeight = !options.videoHeight || !_util__WEBPACK_IMPORTED_MODULE_2__["default"].getNumber(options.videoHeight, 0) ? '' : _util__WEBPACK_IMPORTED_MODULE_2__["default"].isNumber(options.videoHeight) ? options.videoHeight + 'px' : options.videoHeight;
        options.videoSizeOnlyPercentage = !!options.videoSizeOnlyPercentage;
        options._videoSizeUnit = options.videoSizeOnlyPercentage ? '%' : 'px';
        options.videoRotation = options.videoRotation !== undefined ? options.videoRotation : !(options.videoSizeOnlyPercentage || !options.videoHeightShow);
        options.videoRatio = _util__WEBPACK_IMPORTED_MODULE_2__["default"].getNumber(options.videoRatio, 4) || 0.5625;
        options.videoRatioList = !options.videoRatioList ? null : options.videoRatioList;
        options.youtubeQuery = (options.youtubeQuery || '').replace('?', '');
        options.videoFileInput = !!options.videoFileInput;
        options.videoUrlInput = options.videoUrlInput === undefined || !options.videoFileInput ? true : options.videoUrlInput;
        options.videoUploadHeader = options.videoUploadHeader || null;
        options.videoUploadUrl = typeof options.videoUploadUrl === 'string' ? options.videoUploadUrl : null;
        options.videoUploadSizeLimit = /\d+/.test(options.videoUploadSizeLimit) ? _util__WEBPACK_IMPORTED_MODULE_2__["default"].getNumber(options.videoUploadSizeLimit, 0) : null;
        options.videoMultipleFile = !!options.videoMultipleFile;
        options.videoTagAttrs = options.videoTagAttrs || null;
        options.videoIframeAttrs = options.videoIframeAttrs || null;
        options.videoAccept = typeof options.videoAccept !== 'string' || options.videoAccept.trim() === "*" ? 'video/*' : options.videoAccept.trim() || 'video/*';
        /** Audio */ options.audioWidth = !options.audioWidth ? '' : _util__WEBPACK_IMPORTED_MODULE_2__["default"].isNumber(options.audioWidth) ? options.audioWidth + 'px' : options.audioWidth;
        options.audioHeight = !options.audioHeight ? '' : _util__WEBPACK_IMPORTED_MODULE_2__["default"].isNumber(options.audioHeight) ? options.audioHeight + 'px' : options.audioHeight;
        options.audioFileInput = !!options.audioFileInput;
        options.audioUrlInput = options.audioUrlInput === undefined || !options.audioFileInput ? true : options.audioUrlInput;
        options.audioUploadHeader = options.audioUploadHeader || null;
        options.audioUploadUrl = typeof options.audioUploadUrl === 'string' ? options.audioUploadUrl : null;
        options.audioUploadSizeLimit = /\d+/.test(options.audioUploadSizeLimit) ? _util__WEBPACK_IMPORTED_MODULE_2__["default"].getNumber(options.audioUploadSizeLimit, 0) : null;
        options.audioMultipleFile = !!options.audioMultipleFile;
        options.audioTagAttrs = options.audioTagAttrs || null;
        options.audioAccept = typeof options.audioAccept !== 'string' || options.audioAccept.trim() === "*" ? 'audio/*' : options.audioAccept.trim() || 'audio/*';
        /** Table */ options.tableCellControllerPosition = typeof options.tableCellControllerPosition === 'string' ? options.tableCellControllerPosition.toLowerCase() : 'cell';
        /** Link */ options.linkTargetNewWindow = !!options.linkTargetNewWindow;
        options.linkProtocol = typeof options.linkProtocol === 'string' ? options.linkProtocol : null;
        options.linkRel = Array.isArray(options.linkRel) ? options.linkRel : [];
        options.linkRelDefault = options.linkRelDefault || {};
        /** HR */ // options.hrItems = options.hrItems;
        /** Key actions */ options.tabDisable = !!options.tabDisable;
        options.shortcutsDisable = Array.isArray(options.shortcutsDisable) ? options.shortcutsDisable : [];
        options.shortcutsHint = options.shortcutsHint === undefined ? true : !!options.shortcutsHint;
        /** Defining save button */ options.callBackSave = !options.callBackSave ? null : options.callBackSave;
        /** Templates Array */ options.templates = !options.templates ? null : options.templates;
        /** ETC */ options.placeholder = typeof options.placeholder === 'string' ? options.placeholder : null;
        options.mediaAutoSelect = options.mediaAutoSelect === undefined ? true : !!options.mediaAutoSelect;
        /** Buttons */ options.buttonList = !!options.buttonList ? options.buttonList : [
            [
                'undo',
                'redo'
            ],
            [
                'bold',
                'underline',
                'italic',
                'strike',
                'subscript',
                'superscript'
            ],
            [
                'removeFormat'
            ],
            [
                'outdent',
                'indent'
            ],
            [
                'fullScreen',
                'showBlocks',
                'codeView'
            ],
            [
                'preview',
                'print'
            ]
        ];
        /** RTL - buttons */ if (options.rtl) options.buttonList = options.buttonList.reverse();
        /** --- Define icons --- */ // custom icons
        options.icons = !options.icons || typeof options.icons !== 'object' ? _assets_defaultIcons__WEBPACK_IMPORTED_MODULE_0__["default"] : [
            (0, _assets_defaultIcons__WEBPACK_IMPORTED_MODULE_0__["default"]),
            options.icons
        ].reduce(function(_default, _new) {
            for(let key in _new)if (_util__WEBPACK_IMPORTED_MODULE_2__["default"].hasOwn(_new, key)) _default[key] = _new[key];
            return _default;
        }, {});
        // rtl icons
        options.icons = !options.rtl ? options.icons : [
            options.icons,
            options.icons.rtl
        ].reduce(function(_default, _new) {
            for(let key in _new)if (_util__WEBPACK_IMPORTED_MODULE_2__["default"].hasOwn(_new, key)) _default[key] = _new[key];
            return _default;
        }, {});
        /** Private options */ options.__listCommonStyle = options.__listCommonStyle || [
            'fontSize',
            'color',
            'fontFamily',
            'fontWeight',
            'fontStyle'
        ];
        /** _init options */ options._editorStyles = _util__WEBPACK_IMPORTED_MODULE_2__["default"]._setDefaultOptionStyle(options, options.defaultStyle);
    },
    _setWhitelist: function(whitelist, blacklist) {
        if (typeof blacklist !== 'string') return whitelist;
        blacklist = blacklist.split('|');
        whitelist = whitelist.split('|');
        for(let i = 0, len = blacklist.length, index; i < len; i++){
            index = whitelist.indexOf(blacklist[i]);
            if (index > -1) whitelist.splice(index, 1);
        }
        return whitelist.join('|');
    },
    /**
     * @description Suneditor's Default button list
     * @param {Object} options options
     * @private
     */ _defaultButtons: function(options) {
        const icons = options.icons;
        const lang = options.lang;
        const cmd = _util__WEBPACK_IMPORTED_MODULE_2__["default"].isOSX_IOS ? '⌘' : 'CTRL';
        const addShift = _util__WEBPACK_IMPORTED_MODULE_2__["default"].isOSX_IOS ? '⇧' : '+SHIFT';
        const shortcutsDisable = !options.shortcutsHint ? [
            'bold',
            'strike',
            'underline',
            'italic',
            'undo',
            'indent',
            'save'
        ] : options.shortcutsDisable;
        const indentKey = options.rtl ? [
            '[',
            ']'
        ] : [
            ']',
            '['
        ];
        const indentIcon = options.rtl ? [
            icons.outdent,
            icons.indent
        ] : [
            icons.indent,
            icons.outdent
        ];
        return {
            /** default command */ bold: [
                '',
                lang.toolbar.bold + '<span class="se-shortcut">' + (shortcutsDisable.indexOf('bold') > -1 ? '' : cmd + '+<span class="se-shortcut-key">B</span>') + '</span>',
                'bold',
                '',
                icons.bold
            ],
            underline: [
                '',
                lang.toolbar.underline + '<span class="se-shortcut">' + (shortcutsDisable.indexOf('underline') > -1 ? '' : cmd + '+<span class="se-shortcut-key">U</span>') + '</span>',
                'underline',
                '',
                icons.underline
            ],
            italic: [
                '',
                lang.toolbar.italic + '<span class="se-shortcut">' + (shortcutsDisable.indexOf('italic') > -1 ? '' : cmd + '+<span class="se-shortcut-key">I</span>') + '</span>',
                'italic',
                '',
                icons.italic
            ],
            strike: [
                '',
                lang.toolbar.strike + '<span class="se-shortcut">' + (shortcutsDisable.indexOf('strike') > -1 ? '' : cmd + addShift + '+<span class="se-shortcut-key">S</span>') + '</span>',
                'strike',
                '',
                icons.strike
            ],
            subscript: [
                '',
                lang.toolbar.subscript,
                'SUB',
                '',
                icons.subscript
            ],
            superscript: [
                '',
                lang.toolbar.superscript,
                'SUP',
                '',
                icons.superscript
            ],
            removeFormat: [
                '',
                lang.toolbar.removeFormat,
                'removeFormat',
                '',
                icons.erase
            ],
            indent: [
                '',
                lang.toolbar.indent + '<span class="se-shortcut">' + (shortcutsDisable.indexOf('indent') > -1 ? '' : cmd + '+<span class="se-shortcut-key">' + indentKey[0] + '</span>') + '</span>',
                'indent',
                '',
                indentIcon[0]
            ],
            outdent: [
                '',
                lang.toolbar.outdent + '<span class="se-shortcut">' + (shortcutsDisable.indexOf('indent') > -1 ? '' : cmd + '+<span class="se-shortcut-key">' + indentKey[1] + '</span>') + '</span>',
                'outdent',
                '',
                indentIcon[1]
            ],
            fullScreen: [
                'se-code-view-enabled se-resizing-enabled',
                lang.toolbar.fullScreen,
                'fullScreen',
                '',
                icons.expansion
            ],
            showBlocks: [
                '',
                lang.toolbar.showBlocks,
                'showBlocks',
                '',
                icons.show_blocks
            ],
            codeView: [
                'se-code-view-enabled se-resizing-enabled',
                lang.toolbar.codeView,
                'codeView',
                '',
                icons.code_view
            ],
            undo: [
                '',
                lang.toolbar.undo + '<span class="se-shortcut">' + (shortcutsDisable.indexOf('undo') > -1 ? '' : cmd + '+<span class="se-shortcut-key">Z</span>') + '</span>',
                'undo',
                '',
                icons.undo
            ],
            redo: [
                '',
                lang.toolbar.redo + '<span class="se-shortcut">' + (shortcutsDisable.indexOf('undo') > -1 ? '' : cmd + '+<span class="se-shortcut-key">Y</span> / ' + cmd + addShift + '+<span class="se-shortcut-key">Z</span>') + '</span>',
                'redo',
                '',
                icons.redo
            ],
            preview: [
                'se-resizing-enabled',
                lang.toolbar.preview,
                'preview',
                '',
                icons.preview
            ],
            print: [
                'se-resizing-enabled',
                lang.toolbar.print,
                'print',
                '',
                icons.print
            ],
            dir: [
                '',
                lang.toolbar[options.rtl ? 'dir_ltr' : 'dir_rtl'],
                'dir',
                '',
                icons[options.rtl ? 'dir_ltr' : 'dir_rtl']
            ],
            dir_ltr: [
                '',
                lang.toolbar.dir_ltr,
                'dir_ltr',
                '',
                icons.dir_ltr
            ],
            dir_rtl: [
                '',
                lang.toolbar.dir_rtl,
                'dir_rtl',
                '',
                icons.dir_rtl
            ],
            save: [
                'se-resizing-enabled',
                lang.toolbar.save + '<span class="se-shortcut">' + (shortcutsDisable.indexOf('save') > -1 ? '' : cmd + '+<span class="se-shortcut-key">S</span>') + '</span>',
                'save',
                '',
                icons.save
            ],
            /** plugins - command */ blockquote: [
                '',
                lang.toolbar.tag_blockquote,
                'blockquote',
                'command',
                icons.blockquote
            ],
            /** plugins - submenu */ font: [
                'se-btn-select se-btn-tool-font',
                lang.toolbar.font,
                'font',
                'submenu',
                '<span class="txt">' + lang.toolbar.font + '</span>' + icons.arrow_down
            ],
            formatBlock: [
                'se-btn-select se-btn-tool-format',
                lang.toolbar.formats,
                'formatBlock',
                'submenu',
                '<span class="txt">' + lang.toolbar.formats + '</span>' + icons.arrow_down
            ],
            fontSize: [
                'se-btn-select se-btn-tool-size',
                lang.toolbar.fontSize,
                'fontSize',
                'submenu',
                '<span class="txt">' + lang.toolbar.fontSize + '</span>' + icons.arrow_down
            ],
            fontColor: [
                '',
                lang.toolbar.fontColor,
                'fontColor',
                'submenu',
                icons.font_color
            ],
            hiliteColor: [
                '',
                lang.toolbar.hiliteColor,
                'hiliteColor',
                'submenu',
                icons.highlight_color
            ],
            align: [
                'se-btn-align',
                lang.toolbar.align,
                'align',
                'submenu',
                options.rtl ? icons.align_right : icons.align_left
            ],
            list: [
                '',
                lang.toolbar.list,
                'list',
                'submenu',
                icons.list_number
            ],
            horizontalRule: [
                'btn_line',
                lang.toolbar.horizontalRule,
                'horizontalRule',
                'submenu',
                icons.horizontal_rule
            ],
            table: [
                '',
                lang.toolbar.table,
                'table',
                'submenu',
                icons.table
            ],
            lineHeight: [
                '',
                lang.toolbar.lineHeight,
                'lineHeight',
                'submenu',
                icons.line_height
            ],
            template: [
                '',
                lang.toolbar.template,
                'template',
                'submenu',
                icons.template
            ],
            paragraphStyle: [
                '',
                lang.toolbar.paragraphStyle,
                'paragraphStyle',
                'submenu',
                icons.paragraph_style
            ],
            textStyle: [
                '',
                lang.toolbar.textStyle,
                'textStyle',
                'submenu',
                icons.text_style
            ],
            /** plugins - dialog */ link: [
                '',
                lang.toolbar.link,
                'link',
                'dialog',
                icons.link
            ],
            image: [
                '',
                lang.toolbar.image,
                'image',
                'dialog',
                icons.image
            ],
            video: [
                '',
                lang.toolbar.video,
                'video',
                'dialog',
                icons.video
            ],
            audio: [
                '',
                lang.toolbar.audio,
                'audio',
                'dialog',
                icons.audio
            ],
            math: [
                '',
                lang.toolbar.math,
                'math',
                'dialog',
                icons.math
            ],
            /** plugins - fileBrowser */ imageGallery: [
                '',
                lang.toolbar.imageGallery,
                'imageGallery',
                'fileBrowser',
                icons.image_gallery
            ]
        };
    },
    /**
     * @description Create a group div containing each module
     * @returns {Object}
     * @private
     */ _createModuleGroup: function() {
        const oDiv = _util__WEBPACK_IMPORTED_MODULE_2__["default"].createElement('DIV');
        oDiv.className = 'se-btn-module se-btn-module-border';
        const oUl = _util__WEBPACK_IMPORTED_MODULE_2__["default"].createElement('UL');
        oUl.className = 'se-menu-list';
        oDiv.appendChild(oUl);
        return {
            'div': oDiv,
            'ul': oUl
        };
    },
    /**
     * @description Create a button element
     * @param {string} buttonClass className in button
     * @param {string} title Title in button
     * @param {string} dataCommand The data-command property of the button
     * @param {string} dataDisplay The data-display property of the button ('dialog', 'submenu', 'command')
     * @param {string} innerHTML Html in button
     * @param {string} _disabled Button disabled
     * @param {Object} _icons Icons
     * @returns {Object}
     * @private
     */ _createButton: function(buttonClass, title, dataCommand, dataDisplay, innerHTML, _disabled, _icons) {
        const oLi = _util__WEBPACK_IMPORTED_MODULE_2__["default"].createElement('LI');
        const oButton = _util__WEBPACK_IMPORTED_MODULE_2__["default"].createElement('BUTTON');
        const label = title || dataCommand;
        oButton.setAttribute('type', 'button');
        oButton.setAttribute('class', 'se-btn' + (buttonClass ? ' ' + buttonClass : '') + ' se-tooltip');
        oButton.setAttribute('data-command', dataCommand);
        oButton.setAttribute('data-display', dataDisplay);
        oButton.setAttribute('aria-label', label.replace(/<span .+<\/span>/, ''));
        oButton.setAttribute('tabindex', '-1');
        if (!innerHTML) innerHTML = '<span class="se-icon-text">!</span>';
        if (/^default\./i.test(innerHTML)) innerHTML = _icons[innerHTML.replace(/^default\./i, '')];
        if (/^text\./i.test(innerHTML)) {
            innerHTML = innerHTML.replace(/^text\./i, '');
            oButton.className += ' se-btn-more-text';
        }
        innerHTML += '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + label + '</span></span>';
        if (_disabled) oButton.setAttribute('disabled', true);
        oButton.innerHTML = innerHTML;
        oLi.appendChild(oButton);
        return {
            'li': oLi,
            'button': oButton
        };
    },
    /**
     * @description Create editor HTML
     * @param {Array} doc document object
     * @param {Array} buttonList option.buttonList
     * @param {Object|null} plugins Plugins
     * @param {Array} options options
     * @returns {Object} { element: (Element) Toolbar element, plugins: (Array|null) Plugins Array, pluginCallButtons: (Object), responsiveButtons: (Array) }
     * @private
     */ _createToolBar: function(doc, buttonList, plugins, options) {
        const separator_vertical = doc.createElement('DIV');
        separator_vertical.className = 'se-toolbar-separator-vertical';
        const tool_bar = doc.createElement('DIV');
        tool_bar.className = 'se-toolbar sun-editor-common';
        const _buttonTray = doc.createElement('DIV');
        _buttonTray.className = 'se-btn-tray';
        tool_bar.appendChild(_buttonTray);
        /** create button list */ buttonList = JSON.parse(JSON.stringify(buttonList));
        const icons = options.icons;
        const defaultButtonList = this._defaultButtons(options);
        const pluginCallButtons = {};
        const responsiveButtons = [];
        let module = null;
        let button = null;
        let moduleElement = null;
        let buttonElement = null;
        let pluginName = '';
        let vertical = false;
        const moreLayer = _util__WEBPACK_IMPORTED_MODULE_2__["default"].createElement('DIV');
        moreLayer.className = 'se-toolbar-more-layer';
        buttonGroupLoop: for(let i = 0, more, moreContainer, moreCommand, buttonGroup, align; i < buttonList.length; i++){
            more = false;
            align = '';
            buttonGroup = buttonList[i];
            moduleElement = this._createModuleGroup();
            // button object
            if (typeof buttonGroup === 'object') {
                // buttons loop
                for(let j = 0, moreButton; j < buttonGroup.length; j++){
                    button = buttonGroup[j];
                    moreButton = false;
                    if (/^\%\d+/.test(button) && j === 0) {
                        buttonGroup[0] = button.replace(/[^\d]/g, '');
                        responsiveButtons.push(buttonGroup);
                        buttonList.splice(i--, 1);
                        continue buttonGroupLoop;
                    }
                    if (typeof button === 'object') {
                        if (typeof button.add === 'function') {
                            pluginName = button.name;
                            module = defaultButtonList[pluginName];
                            plugins[pluginName] = button;
                        } else {
                            pluginName = button.name;
                            module = [
                                button.buttonClass,
                                button.title,
                                button.name,
                                button.dataDisplay,
                                button.innerHTML,
                                button._disabled
                            ];
                        }
                    } else {
                        // align
                        if (/^\-/.test(button)) {
                            align = button.substr(1);
                            moduleElement.div.className += ' module-float-' + align;
                            continue;
                        }
                        // rtl fix
                        if (/^\#/.test(button)) {
                            const option = button.substr(1);
                            if (option === 'fix') moduleElement.ul.className += ' se-menu-dir-fix';
                            continue;
                        }
                        // more button
                        if (/^\:/.test(button)) {
                            moreButton = true;
                            const matched = button.match(/^\:([^\-]+)\-([^\-]+)\-([^\-]+)/);
                            moreCommand = '__se__' + matched[1].trim();
                            const title = matched[2].trim();
                            const innerHTML = matched[3].trim();
                            module = [
                                'se-btn-more',
                                title,
                                moreCommand,
                                'MORE',
                                innerHTML
                            ];
                        } else module = defaultButtonList[button];
                        pluginName = button;
                        if (!module) {
                            const custom = plugins[pluginName];
                            if (!custom) throw Error('[SUNEDITOR.create.toolbar.fail] The button name of a plugin that does not exist. [' + pluginName + ']');
                            module = [
                                custom.buttonClass,
                                custom.title,
                                custom.name,
                                custom.display,
                                custom.innerHTML,
                                custom._disabled
                            ];
                        }
                    }
                    buttonElement = this._createButton(module[0], module[1], module[2], module[3], module[4], module[5], icons);
                    (more ? moreContainer : moduleElement.ul).appendChild(buttonElement.li);
                    if (plugins[pluginName]) pluginCallButtons[pluginName] = buttonElement.button;
                    // more button
                    if (moreButton) {
                        more = true;
                        moreContainer = _util__WEBPACK_IMPORTED_MODULE_2__["default"].createElement('DIV');
                        moreContainer.className = 'se-more-layer ' + moreCommand;
                        moreContainer.innerHTML = '<div class="se-more-form"><ul class="se-menu-list"' + (align ? ' style="float: ' + align + ';"' : '') + '></ul></div>';
                        moreLayer.appendChild(moreContainer);
                        moreContainer = moreContainer.firstElementChild.firstElementChild;
                    }
                }
                if (vertical) {
                    const sv = separator_vertical.cloneNode(false);
                    _buttonTray.appendChild(sv);
                }
                _buttonTray.appendChild(moduleElement.div);
                vertical = true;
            } else if (/^\/$/.test(buttonGroup)) {
                const enterDiv = doc.createElement('DIV');
                enterDiv.className = 'se-btn-module-enter';
                _buttonTray.appendChild(enterDiv);
                vertical = false;
            }
        }
        switch(_buttonTray.children.length){
            case 0:
                _buttonTray.style.display = 'none';
                break;
            case 1:
                _util__WEBPACK_IMPORTED_MODULE_2__["default"].removeClass(_buttonTray.firstElementChild, 'se-btn-module-border');
                break;
            default:
                if (options.rtl) {
                    const sv = separator_vertical.cloneNode(false);
                    sv.style.float = _buttonTray.lastElementChild.style.float;
                    _buttonTray.appendChild(sv);
                }
        }
        if (responsiveButtons.length > 0) responsiveButtons.unshift(buttonList);
        if (moreLayer.children.length > 0) _buttonTray.appendChild(moreLayer);
        // menu tray
        const _menuTray = doc.createElement('DIV');
        _menuTray.className = 'se-menu-tray';
        tool_bar.appendChild(_menuTray);
        // cover
        const tool_cover = doc.createElement('DIV');
        tool_cover.className = 'se-toolbar-cover';
        tool_bar.appendChild(tool_cover);
        if (options.hideToolbar) tool_bar.style.display = 'none';
        return {
            'element': tool_bar,
            'plugins': plugins,
            'pluginCallButtons': pluginCallButtons,
            'responsiveButtons': responsiveButtons,
            '_menuTray': _menuTray,
            '_buttonTray': _buttonTray
        };
    }
};
}),
"2358": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */ 'use strict';
/**
 * @description Elements and variables you should have
 * @param {Element} element textarea element
 * @param {object} cons Toolbar element you created
 * @param {JSON|Object} options Inserted options
 * @returns {Object} {Elements, variables of the editor, option}
 * @private
 */ const _Context = function(element, cons, options) {
    return {
        element: {
            originElement: element,
            topArea: cons._top,
            relative: cons._relative,
            toolbar: cons._toolBar,
            _toolbarShadow: cons._toolbarShadow,
            _buttonTray: cons._toolBar.querySelector('.se-btn-tray'),
            _menuTray: cons._menuTray,
            resizingBar: cons._resizingBar,
            navigation: cons._navigation,
            charWrapper: cons._charWrapper,
            charCounter: cons._charCounter,
            editorArea: cons._editorArea,
            wysiwygFrame: cons._wysiwygArea,
            wysiwyg: cons._wysiwygArea,
            code: cons._codeArea,
            placeholder: cons._placeholder,
            loading: cons._loading,
            lineBreaker: cons._lineBreaker,
            lineBreaker_t: cons._lineBreaker_t,
            lineBreaker_b: cons._lineBreaker_b,
            resizeBackground: cons._resizeBack,
            _stickyDummy: cons._stickyDummy,
            _arrow: cons._arrow
        },
        tool: {
            cover: cons._toolBar.querySelector('.se-toolbar-cover'),
            bold: cons._toolBar.querySelector('[data-command="bold"]'),
            underline: cons._toolBar.querySelector('[data-command="underline"]'),
            italic: cons._toolBar.querySelector('[data-command="italic"]'),
            strike: cons._toolBar.querySelector('[data-command="strike"]'),
            sub: cons._toolBar.querySelector('[data-command="SUB"]'),
            sup: cons._toolBar.querySelector('[data-command="SUP"]'),
            undo: cons._toolBar.querySelector('[data-command="undo"]'),
            redo: cons._toolBar.querySelector('[data-command="redo"]'),
            save: cons._toolBar.querySelector('[data-command="save"]'),
            outdent: cons._toolBar.querySelector('[data-command="outdent"]'),
            indent: cons._toolBar.querySelector('[data-command="indent"]'),
            fullScreen: cons._toolBar.querySelector('[data-command="fullScreen"]'),
            showBlocks: cons._toolBar.querySelector('[data-command="showBlocks"]'),
            codeView: cons._toolBar.querySelector('[data-command="codeView"]'),
            dir: cons._toolBar.querySelector('[data-command="dir"]'),
            dir_ltr: cons._toolBar.querySelector('[data-command="dir_ltr"]'),
            dir_rtl: cons._toolBar.querySelector('[data-command="dir_rtl"]')
        },
        options: options,
        option: options
    };
};
var __WEBPACK_DEFAULT_EXPORT__ = _Context;
}),
"9794": (function () {
throw new Error("\u001b[31mModuleParseError\u001b[0m\n\n  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error\n\u001b[31m      \u001b[0m      ╭─[1163:1]\n\u001b[31m      \u001b[0m \u001b[2m1163\u001b[0m │          */\n\u001b[31m      \u001b[0m \u001b[2m1164\u001b[0m │         getSelectionNode: function () {\n\u001b[31m      \u001b[0m \u001b[2m1165\u001b[0m │             if (!context.element.wysiwyg.contains(this._variable._selectionNode)) this._editorRange();\n\u001b[31m      \u001b[0m      · \u001b[35;1m                                                                                  ──┬─\u001b[0m\n\u001b[31m      \u001b[0m      ·                                                                                     \u001b[35;1m╰── \u001b[35;1mExpected ';', '}' or <eof>\u001b[0m\u001b[0m\n\u001b[31m      \u001b[0m \u001b[2m1166\u001b[0m │             if (!this._variable._selectionNode) {\n\u001b[31m      \u001b[0m \u001b[2m1167\u001b[0m │                 const selectionNode = util.getChildElement(context.element.wysiwyg.firstChild, function (current) { return current.childNodes.length === 0 || current.nodeType === 3; },\n\u001b[31m      \u001b[0mfalse);\n\u001b[31m      \u001b[0m      ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");
}),
"3051": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */ 'use strict';
/**
 * @description utility function
 */ const util = {
    _d: null,
    _w: null,
    isIE: null,
    isIE_Edge: null,
    isOSX_IOS: null,
    isChromium: null,
    isResizeObserverSupported: null,
    _propertiesInit: function() {
        if (this._d) return;
        this._d = document;
        this._w = window;
        this.isIE = navigator.userAgent.indexOf('Trident') > -1;
        this.isIE_Edge = navigator.userAgent.indexOf('Trident') > -1 || navigator.appVersion.indexOf('Edge') > -1;
        this.isOSX_IOS = /(Mac|iPhone|iPod|iPad)/.test(navigator.platform);
        this.isChromium = !!window.chrome;
        this.isResizeObserverSupported = typeof ResizeObserver === 'function';
    },
    _allowedEmptyNodeList: '.se-component, pre, blockquote, hr, li, table, img, iframe, video, audio, canvas',
    /**
     * @description HTML Reserved Word Converter.
     * @param {String} contents 
     * @returns {String} HTML string
     * @private
     */ _HTMLConvertor: function(contents) {
        const ec = {
            '&': '&amp;',
            '\u00A0': '&nbsp;',
            '\'': '&apos;',
            '"': '&quot;',
            '<': '&lt;',
            '>': '&gt;'
        };
        return contents.replace(/&|\u00A0|'|"|<|>/g, function(m) {
            return typeof ec[m] === 'string' ? ec[m] : m;
        });
    },
    /**
     * @description Unicode Character 'ZERO WIDTH SPACE' (\u200B)
     */ zeroWidthSpace: String.fromCharCode(8203),
    /**
     * @description Regular expression to find 'zero width space' (/\u200B/g)
     */ zeroWidthRegExp: new RegExp(String.fromCharCode(8203), 'g'),
    /**
     * @description Regular expression to find only 'zero width space' (/^\u200B+$/)
     */ onlyZeroWidthRegExp: new RegExp('^' + String.fromCharCode(8203) + '+$'),
    fontValueMap: {
        'xx-small': 1,
        'x-small': 2,
        'small': 3,
        'medium': 4,
        'large': 5,
        'x-large': 6,
        'xx-large': 7
    },
    /**
     * @description A method that checks If the text is blank or to see if it contains 'ZERO WIDTH SPACE' or empty (util.zeroWidthSpace)
     * @param {String|Node} text String value or Node
     * @returns {Boolean}
     */ onlyZeroWidthSpace: function(text) {
        if (text === null || text === undefined) return false;
        if (typeof text !== 'string') text = text.textContent;
        return text === '' || this.onlyZeroWidthRegExp.test(text);
    },
    /**
     * @description Gets XMLHttpRequest object
     * @returns {XMLHttpRequest|ActiveXObject}
     */ getXMLHttpRequest: function() {
        /** IE */ if (this._w.ActiveXObject) try {
            return new ActiveXObject('Msxml2.XMLHTTP');
        } catch (e) {
            try {
                return new ActiveXObject('Microsoft.XMLHTTP');
            } catch (e1) {
                return null;
            }
        }
        else if (this._w.XMLHttpRequest) return new XMLHttpRequest();
        else return null;
    },
    /**
     * @description Object.values
     * @param {Object|null} obj Object parameter.
     * @returns {Array}
     */ getValues: function(obj) {
        return !obj ? [] : this._w.Object.keys(obj).map(function(i) {
            return obj[i];
        });
    },
    /**
     * @description Convert the CamelCase To the KebabCase.
     * @param {String|Array} param [Camel string]
     * @returns {String|Array}
     */ camelToKebabCase: function(param) {
        if (typeof param === 'string') return param.replace(/[A-Z]/g, function(letter) {
            return "-" + letter.toLowerCase();
        });
        else return param.map(function(str) {
            return util.camelToKebabCase(str);
        });
    },
    /**
     * @description Convert the KebabCase To the CamelCase.
     * @param {String|Array} param [KebabCase string]
     * @returns {String|Array}
     */ kebabToCamelCase: function(param) {
        if (typeof param === 'string') return param.replace(/-[a-zA-Z]/g, function(letter) {
            return letter.replace('-', '').toUpperCase();
        });
        else return param.map(function(str) {
            return util.camelToKebabCase(str);
        });
    },
    /**
     * @description Create Element node
     * @param {String} elementName Element name
     * @returns {Element}
     */ createElement: function(elementName) {
        return this._d.createElement(elementName);
    },
    /**
     * @description Create text node
     * @param {String} text text contents
     * @returns {Node}
     */ createTextNode: function(text) {
        return this._d.createTextNode(text || '');
    },
    /**
     * @description The editor checks tags by string.
     * If there is "<" or ">" in the attribute of tag, HTML is broken when checking the tag.
     * When using an attribute with "<" or ">", use "HTMLEncoder" to save. (ex: math(katex))
     * @param {String} contents HTML or Text string
     * @returns {String}
     */ HTMLEncoder: function(contents) {
        const ec = {
            '<': '$lt;',
            '>': '$gt;'
        };
        return contents.replace(/<|>/g, function(m) {
            return typeof ec[m] === 'string' ? ec[m] : m;
        });
    },
    /**
     * @description The editor checks tags by string.
     * If there is "<" or ">" in the attribute of tag, HTML is broken when checking the tag.
     * Decoder of data stored as "HTMLEncoder" (ex: math(katex))
     * @param {String} contents HTML or Text string
     * @returns {String}
     */ HTMLDecoder: function(contents) {
        const ec = {
            '$lt;': '<',
            '$gt;': '>'
        };
        return contents.replace(/\$lt;|\$gt;/g, function(m) {
            return typeof ec[m] === 'string' ? ec[m] : m;
        });
    },
    /**
     * @description This method run Object.prototype.hasOwnProperty.call(obj, key)
     * @param {Object} obj Object
     * @param {String} key obj.key
     * @returns {Boolean}
     */ hasOwn: function(obj, key) {
        return this._hasOwn.call(obj, key);
    },
    _hasOwn: Object.prototype.hasOwnProperty,
    /**
     * @deprecated
     * @description Get the the tag path of the arguments value
     * If not found, return the first found value
     * @param {Array} nameArray File name array
     * @param {String} extension js, css
     * @returns {String}
     */ getIncludePath: function(nameArray, extension) {
        let path = '';
        const pathList = [];
        const tagName = extension === 'js' ? 'script' : 'link';
        const src = extension === 'js' ? 'src' : 'href';
        let fileName = '(?:';
        for(let i = 0, len = nameArray.length; i < len; i++)fileName += nameArray[i] + (i < len - 1 ? '|' : ')');
        const regExp = new this._w.RegExp('(^|.*[\\/])' + fileName + '(\\.[^\\/]+)?\.' + extension + '(?:\\?.*|;.*)?$', 'i');
        const extRegExp = new this._w.RegExp('.+\\.' + extension + '(?:\\?.*|;.*)?$', 'i');
        for(let c = this._d.getElementsByTagName(tagName), i = 0; i < c.length; i++)if (extRegExp.test(c[i][src])) pathList.push(c[i]);
        for(let i = 0; i < pathList.length; i++){
            let editorTag = pathList[i][src].match(regExp);
            if (editorTag) {
                path = editorTag[0];
                break;
            }
        }
        if (path === '') path = pathList.length > 0 ? pathList[0][src] : '';
        -1 === path.indexOf(':/') && '//' !== path.slice(0, 2) && (path = 0 === path.indexOf('/') ? location.href.match(/^.*?:\/\/[^\/]*/)[0] + path : location.href.match(/^[^\?]*\/(?:)/)[0] + path);
        if (!path) throw '[SUNEDITOR.util.getIncludePath.fail] The SUNEDITOR installation path could not be automatically detected. (name: +' + name + ', extension: ' + extension + ')';
        return path;
    },
    /**
     * @deprecated
     * @description Returns the CSS text that has been applied to the current page.
     * @param {Document|null} doc To get the CSS text of an document(core._wd). If null get the current document.
     * @returns {String} Styles string
     */ getPageStyle: function(doc) {
        let cssText = '';
        const sheets = (doc || this._d).styleSheets;
        for(let i = 0, len = sheets.length, rules; i < len; i++){
            try {
                rules = sheets[i].cssRules;
            } catch (e) {
                continue;
            }
            if (rules) for(let c = 0, cLen = rules.length; c < cLen; c++)cssText += rules[c].cssText;
        }
        return cssText;
    },
    /**
     * @description Get the argument iframe's document object
     * @param {Element} iframe Iframe element (context.element.wysiwygFrame)
     * @returns {Document}
     */ getIframeDocument: function(iframe) {
        let wDocument = iframe.contentWindow || iframe.contentDocument;
        if (wDocument.document) wDocument = wDocument.document;
        return wDocument;
    },
    /**
     * @description Get attributes of argument element to string ('class="---" name="---" ')
     * @param {Element} element Element object
     * @param {Array|null} exceptAttrs Array of attribute names to exclude from the result
     * @returns {String}
     */ getAttributesToString: function(element, exceptAttrs) {
        if (!element.attributes) return '';
        const attrs = element.attributes;
        let attrString = '';
        for(let i = 0, len = attrs.length; i < len; i++){
            if (exceptAttrs && exceptAttrs.indexOf(attrs[i].name) > -1) continue;
            attrString += attrs[i].name + '="' + attrs[i].value + '" ';
        }
        return attrString;
    },
    /**
     * @descriptionGets Get the length in bytes of a string.
     * referencing code: "https://github.com/shaan1974/myrdin/blob/master/expressions/string.js#L11"
     * @param {String} text String text
     * @returns {Number}
     */ getByteLength: function(text) {
        if (!text || !text.toString) return 0;
        text = text.toString();
        const encoder = this._w.encodeURIComponent;
        let cr, cl;
        if (this.isIE_Edge) {
            cl = this._w.unescape(encoder(text)).length;
            cr = 0;
            if (encoder(text).match(/(%0A|%0D)/gi) !== null) cr = encoder(text).match(/(%0A|%0D)/gi).length;
            return cl + cr;
        } else {
            cl = new this._w.TextEncoder('utf-8').encode(text).length;
            cr = 0;
            if (encoder(text).match(/(%0A|%0D)/gi) !== null) cr = encoder(text).match(/(%0A|%0D)/gi).length;
            return cl + cr;
        }
    },
    /**
     * @description It is judged whether it is the edit region top div element or iframe's body tag.
     * @param {Node} element The node to check
     * @returns {Boolean}
     */ isWysiwygDiv: function(element) {
        return element && element.nodeType === 1 && (this.hasClass(element, 'se-wrapper-wysiwyg') || /^BODY$/i.test(element.nodeName));
    },
    /**
     * @description It is judged whether it is the contenteditable property is false.
     * @param {Node} element The node to check
     * @returns {Boolean}
     */ isNonEditable: function(element) {
        return element && element.nodeType === 1 && element.getAttribute('contenteditable') === 'false';
    },
    /**
     * @description It is judged whether it is a node related to the text style.
     * (strong|span|font|b|var|i|em|u|ins|s|strike|del|sub|sup|mark|a|label|code)
     * @param {Node} element The node to check
     * @returns {Boolean}
     */ isTextStyleElement: function(element) {
        return element && element.nodeType !== 3 && /^(strong|span|font|b|var|i|em|u|ins|s|strike|del|sub|sup|mark|a|label|code|summary)$/i.test(element.nodeName);
    },
    /**
     * @description It is judged whether it is the input element (INPUT, TEXTAREA)
     * @param {Node} element The node to check
     * @returns 
     */ isInputElement: function(element) {
        return element && element.nodeType === 1 && /^(INPUT|TEXTAREA)$/i.test(element.nodeName);
    },
    /**
     * @description It is judged whether it is the format element (P, DIV, H[1-6], PRE, LI | class="__se__format__replace_xxx")
     * Format element also contain "free format Element"
     * @param {Node} element The node to check
     * @returns {Boolean}
     */ isFormatElement: function(element) {
        return element && element.nodeType === 1 && (/^(P|DIV|H[1-6]|PRE|LI|TH|TD|DETAILS)$/i.test(element.nodeName) || this.hasClass(element, '(\\s|^)__se__format__replace_.+(\\s|$)|(\\s|^)__se__format__free_.+(\\s|$)')) && !this.isComponent(element) && !this.isWysiwygDiv(element);
    },
    /**
     * @description It is judged whether it is the range format element. (BLOCKQUOTE, OL, UL, FIGCAPTION, TABLE, THEAD, TBODY, TR, TH, TD | class="__se__format__range_xxx")
     * Range format element is wrap the "format element" and "component"
     * @param {Node} element The node to check
     * @returns {Boolean}
     */ isRangeFormatElement: function(element) {
        return element && element.nodeType === 1 && (/^(BLOCKQUOTE|OL|UL|FIGCAPTION|TABLE|THEAD|TBODY|TR|TH|TD|DETAILS)$/i.test(element.nodeName) || this.hasClass(element, '(\\s|^)__se__format__range_.+(\\s|$)'));
    },
    /**
     * @description It is judged whether it is the closure range format element. (TH, TD | class="__se__format__range__closure_xxx")
     * Closure range format elements is included in the range format element.
     *  - Closure range format element is wrap the "format element" and "component"
     * ※ You cannot exit this format with the Enter key or Backspace key.
     * ※ Use it only in special cases. ([ex] format of table cells)
     * @param {Node} element The node to check
     * @returns {Boolean}
     */ isClosureRangeFormatElement: function(element) {
        return element && element.nodeType === 1 && (/^(TH|TD)$/i.test(element.nodeName) || this.hasClass(element, '(\\s|^)__se__format__range__closure_.+(\\s|$)'));
    },
    /**
     * @description It is judged whether it is the free format element. (PRE | class="__se__format__free_xxx")
     * Free format elements is included in the format element.
     * Free format elements's line break is "BR" tag.
     * ※ Entering the Enter key in the space on the last line ends "Free Format" and appends "Format".
     * @param {Node} element The node to check
     * @returns {Boolean}
     */ isFreeFormatElement: function(element) {
        return element && element.nodeType === 1 && (/^PRE$/i.test(element.nodeName) || this.hasClass(element, '(\\s|^)__se__format__free_.+(\\s|$)')) && !this.isComponent(element) && !this.isWysiwygDiv(element);
    },
    /**
     * @description It is judged whether it is the closure free format element. (class="__se__format__free__closure_xxx")
     * Closure free format elements is included in the free format element.
     *  - Closure free format elements's line break is "BR" tag.
     * ※ You cannot exit this format with the Enter key or Backspace key.
     * ※ Use it only in special cases. ([ex] format of table cells)
     * @param {Node} element The node to check
     * @returns {Boolean}
     */ isClosureFreeFormatElement: function(element) {
        return element && element.nodeType === 1 && this.hasClass(element, '(\\s|^)__se__format__free__closure_.+(\\s|$)');
    },
    /**
     * @description It is judged whether it is the component[img, iframe, video, audio, table] cover(class="se-component") and table, hr
     * @param {Node} element The node to check
     * @returns {Boolean}
     */ isComponent: function(element) {
        return element && (/se-component/.test(element.className) || /^(TABLE|HR)$/.test(element.nodeName));
    },
    /**
     * @description Checks for "__se__uneditable" in the class list.
     * Components with class "__se__uneditable" cannot be modified.
     * @param {Element} element The element to check
     * @returns {Boolean}
     */ isUneditableComponent: function(element) {
        return element && this.hasClass(element, '__se__uneditable');
    },
    /**
     * @description It is judged whether it is the component [img, iframe] cover(class="se-component")
     * @param {Node} element The node to check
     * @returns {Boolean}
     */ isMediaComponent: function(element) {
        return element && /se-component/.test(element.className);
    },
    /**
     * @description It is judged whether it is the not checking node. (class="katex", "__se__tag")
     * @param {Node} element The node to check
     * @returns {Boolean}
     */ isNotCheckingNode: function(element) {
        return element && /katex|__se__tag/.test(element.className);
    },
    /**
     * @description If a parent node that contains an argument node finds a format node (util.isFormatElement), it returns that node.
     * @param {Node} element Reference node.
     * @param {Function|null} validation Additional validation function.
     * @returns {Element|null}
     */ getFormatElement: function(element, validation) {
        if (!element) return null;
        if (!validation) validation = function() {
            return true;
        };
        while(element){
            if (this.isWysiwygDiv(element)) return null;
            if (this.isRangeFormatElement(element)) element.firstElementChild;
            if (this.isFormatElement(element) && validation(element)) return element;
            element = element.parentNode;
        }
        return null;
    },
    /**
     * @description If a parent node that contains an argument node finds a format node (util.isRangeFormatElement), it returns that node.
     * @param {Node} element Reference node.
     * @param {Function|null} validation Additional validation function.
     * @returns {Element|null}
     */ getRangeFormatElement: function(element, validation) {
        if (!element) return null;
        if (!validation) validation = function() {
            return true;
        };
        while(element){
            if (this.isWysiwygDiv(element)) return null;
            if (this.isRangeFormatElement(element) && !/^(THEAD|TBODY|TR)$/i.test(element.nodeName) && validation(element)) return element;
            element = element.parentNode;
        }
        return null;
    },
    /**
     * @description If a parent node that contains an argument node finds a free format node (util.isFreeFormatElement), it returns that node.
     * @param {Node} element Reference node.
     * @param {Function|null} validation Additional validation function.
     * @returns {Element|null}
     */ getFreeFormatElement: function(element, validation) {
        if (!element) return null;
        if (!validation) validation = function() {
            return true;
        };
        while(element){
            if (this.isWysiwygDiv(element)) return null;
            if (this.isFreeFormatElement(element) && validation(element)) return element;
            element = element.parentNode;
        }
        return null;
    },
    /**
     * @description If a parent node that contains an argument node finds a closure free format node (util.isClosureFreeFormatElement), it returns that node.
     * @param {Node} element Reference node.
     * @param {Function|null} validation Additional validation function.
     * @returns {Element|null}
     */ getClosureFreeFormatElement: function(element, validation) {
        if (!element) return null;
        if (!validation) validation = function() {
            return true;
        };
        while(element){
            if (this.isWysiwygDiv(element)) return null;
            if (this.isClosureFreeFormatElement(element) && validation(element)) return element;
            element = element.parentNode;
        }
        return null;
    },
    /**
     * @description Add style and className of copyEl to originEl
     * @param {Element} originEl Origin element
     * @param {Element} copyEl Element to copy
     * @param {Array|null} blacklist Blacklist array(LowerCase)
     */ copyTagAttributes: function(originEl, copyEl, blacklist) {
        if (copyEl.style.cssText) {
            const copyStyles = copyEl.style;
            for(let i = 0, len = copyStyles.length; i < len; i++)originEl.style[copyStyles[i]] = copyStyles[copyStyles[i]];
        }
        const attrs = copyEl.attributes;
        for(let i = 0, len = attrs.length, name1; i < len; i++){
            name1 = attrs[i].name.toLowerCase();
            if (blacklist && blacklist.indexOf(name1) > -1 || !attrs[i].value) originEl.removeAttribute(name1);
            else if (name1 !== 'style') originEl.setAttribute(attrs[i].name, attrs[i].value);
        }
    },
    /**
     * @description Copy and apply attributes of format tag that should be maintained. (style, class) Ignore "__se__format__" class
     * @param {Element} originEl Origin element
     * @param {Element} copyEl Element to copy
     */ copyFormatAttributes: function(originEl, copyEl) {
        copyEl = copyEl.cloneNode(false);
        copyEl.className = copyEl.className.replace(/(\s|^)__se__format__[^\s]+/g, '');
        this.copyTagAttributes(originEl, copyEl);
    },
    /**
     * @description Get the item from the array that matches the condition.
     * @param {Array|HTMLCollection|NodeList} array Array to get item
     * @param {Function|null} validation Conditional function
     * @param {Boolean} multi If true, returns all items that meet the criteria otherwise, returns an empty array.
     * If false, returns only one item that meet the criteria otherwise return null.
     * @returns {Array|Node|null}
     */ getArrayItem: function(array, validation, multi) {
        if (!array || array.length === 0) return null;
        validation = validation || function() {
            return true;
        };
        const arr = [];
        for(let i = 0, len = array.length, a; i < len; i++){
            a = array[i];
            if (validation(a)) {
                if (!multi) return a;
                else arr.push(a);
            }
        }
        return !multi ? null : arr;
    },
    /**
     * @description Check if an array contains an element 
     * @param {Array|HTMLCollection|NodeList} array element array
     * @param {Node} element The element to check for
     * @returns {Boolean}
     */ arrayIncludes: function(array, element) {
        for(let i = 0; i < array.length; i++){
            if (array[i] === element) return true;
        }
        return false;
    },
    /**
     * @description Get the index of the argument value in the element array
     * @param {Array|HTMLCollection|NodeList} array element array
     * @param {Node} element The element to find index
     * @returns {Number}
     */ getArrayIndex: function(array, element) {
        let idx = -1;
        for(let i = 0, len = array.length; i < len; i++)if (array[i] === element) {
            idx = i;
            break;
        }
        return idx;
    },
    /**
     * @description Get the next index of the argument value in the element array
     * @param {Array|HTMLCollection|NodeList} array element array
     * @param {Node} item The element to find index
     * @returns {Number}
     */ nextIdx: function(array, item) {
        let idx = this.getArrayIndex(array, item);
        if (idx === -1) return -1;
        return idx + 1;
    },
    /**
     * @description Get the previous index of the argument value in the element array
     * @param {Array|HTMLCollection|NodeList} array Element array
     * @param {Node} item The element to find index
     * @returns {Number}
     */ prevIdx: function(array, item) {
        let idx = this.getArrayIndex(array, item);
        if (idx === -1) return -1;
        return idx - 1;
    },
    /**
     * @description Returns the index compared to other sibling nodes.
     * @param {Node} node The Node to find index
     * @returns {Number}
     */ getPositionIndex: function(node) {
        let idx = 0;
        while(node = node.previousSibling)idx += 1;
        return idx;
    },
    /**
     * @description Returns the position of the "node" in the "parentNode" in a numerical array.
     * ex) <p><span>aa</span><span>bb</span></p> : getNodePath(node: "bb", parentNode: "<P>") -> [1, 0]
     * @param {Node} node The Node to find position path
     * @param {Node|null} parentNode Parent node. If null, wysiwyg div area
     * @param {Object|null} _newOffsets If you send an object of the form "{s: 0, e: 0}", the text nodes that are attached together are merged into one, centered on the "node" argument.
     * "_newOffsets.s" stores the length of the combined characters after "node" and "_newOffsets.e" stores the length of the combined characters before "node".
     * Do not use unless absolutely necessary.
     * @returns {Array}
     */ getNodePath: function(node, parentNode, _newOffsets) {
        const path = [];
        let finds = true;
        this.getParentElement(node, (function(el) {
            if (el === parentNode) finds = false;
            if (finds && !this.isWysiwygDiv(el)) {
                // merge text nodes
                if (_newOffsets && el.nodeType === 3) {
                    let temp = null, tempText = null;
                    _newOffsets.s = _newOffsets.e = 0;
                    let previous = el.previousSibling;
                    while(previous && previous.nodeType === 3){
                        tempText = previous.textContent.replace(this.zeroWidthRegExp, '');
                        _newOffsets.s += tempText.length;
                        el.textContent = tempText + el.textContent;
                        temp = previous;
                        previous = previous.previousSibling;
                        this.removeItem(temp);
                    }
                    let next = el.nextSibling;
                    while(next && next.nodeType === 3){
                        tempText = next.textContent.replace(this.zeroWidthRegExp, '');
                        _newOffsets.e += tempText.length;
                        el.textContent += tempText;
                        temp = next;
                        next = next.nextSibling;
                        this.removeItem(temp);
                    }
                }
                // index push
                path.push(el);
            }
            return false;
        }).bind(this));
        return path.map(this.getPositionIndex).reverse();
    },
    /**
     * @description Returns the node in the location of the path array obtained from "util.getNodePath".
     * @param {Array} offsets Position array, array obtained from "util.getNodePath"
     * @param {Node} parentNode Base parent element
     * @returns {Node}
     */ getNodeFromPath: function(offsets, parentNode) {
        let current = parentNode;
        let nodes;
        for(let i = 0, len = offsets.length; i < len; i++){
            nodes = current.childNodes;
            if (nodes.length === 0) break;
            if (nodes.length <= offsets[i]) current = nodes[nodes.length - 1];
            else current = nodes[offsets[i]];
        }
        return current;
    },
    /**
     * @description Compares the style and class for equal values.
     * Returns true if both are text nodes.
     * @param {Node} a Node to compare
     * @param {Node} b Node to compare
     * @returns {Boolean}
     */ isSameAttributes: function(a, b) {
        if (a.nodeType === 3 && b.nodeType === 3) return true;
        if (a.nodeType === 3 || b.nodeType === 3) return false;
        const style_a = a.style;
        const style_b = b.style;
        let compStyle = 0;
        for(let i = 0, len = style_a.length; i < len; i++)if (style_a[style_a[i]] === style_b[style_a[i]]) compStyle++;
        const class_a = a.classList;
        const class_b = b.classList;
        const reg = this._w.RegExp;
        let compClass = 0;
        for(let i = 0, len = class_a.length; i < len; i++)if (reg('(\s|^)' + class_a[i] + '(\s|$)').test(class_b.value)) compClass++;
        return compStyle === style_b.length && compStyle === style_a.length && compClass === class_b.length && compClass === class_a.length;
    },
    /**
     * @description Check the line element(util.isFormatElement) is empty.
     * @param {Element} element Format element node
     * @returns {Boolean}
     */ isEmptyLine: function(element) {
        return !element || !element.parentNode || !element.querySelector('IMG, IFRAME, AUDIO, VIDEO, CANVAS, TABLE') && element.children.length === 0 && this.onlyZeroWidthSpace(element.textContent);
    },
    /**
     * @description Check the span's attributes are empty.
     * @param {Element|null} element Element node
     * @returns {Boolean}
     */ isSpanWithoutAttr: function(element) {
        return !!element && element.nodeType === 1 && /^SPAN$/i.test(element.nodeName) && !element.className && !element.style.cssText;
    },
    /**
     * @description Check the node is a list (ol, ul)
     * @param {Node|String} node The element or element name to check
     * @returns {Boolean}
     */ isList: function(node) {
        return node && /^(OL|UL)$/i.test(typeof node === 'string' ? node : node.nodeName);
    },
    /**
     * @description Check the node is a list cell (li)
     * @param {Node|String} node The element or element name to check
     * @returns {Boolean}
     */ isListCell: function(node) {
        return node && /^LI$/i.test(typeof node === 'string' ? node : node.nodeName);
    },
    /**
     * @description Check the node is a table (table, thead, tbody, tr, th, td)
     * @param {Node|String} node The element or element name to check
     * @returns {Boolean}
     */ isTable: function(node) {
        return node && /^(TABLE|THEAD|TBODY|TR|TH|TD)$/i.test(typeof node === 'string' ? node : node.nodeName);
    },
    /**
     * @description Check the node is a table cell (td, th)
     * @param {Node|String} node The element or element name to check
     * @returns {Boolean}
     */ isCell: function(node) {
        return node && /^(TD|TH)$/i.test(typeof node === 'string' ? node : node.nodeName);
    },
    /**
     * @description Check the node is a break node (BR)
     * @param {Node|String} node The element or element name to check
     * @returns {Boolean}
     */ isBreak: function(node) {
        return node && /^BR$/i.test(typeof node === 'string' ? node : node.nodeName);
    },
    /**
     * @description Check the node is a anchor node (A)
     * @param {Node|String} node The element or element name to check
     * @returns {Boolean}
     */ isAnchor: function(node) {
        return node && /^A$/i.test(typeof node === 'string' ? node : node.nodeName);
    },
    /**
     * @description Check the node is a media node (img, iframe, audio, video, canvas)
     * @param {Node|String} node The element or element name to check
     * @returns {Boolean}
     */ isMedia: function(node) {
        return node && /^(IMG|IFRAME|AUDIO|VIDEO|CANVAS)$/i.test(typeof node === 'string' ? node : node.nodeName);
    },
    /**
     * @description Check the node is a figure tag or util.isMedia()
     * @param {Node|String} node The element or element name to check
     * @returns {Boolean}
     */ isFigures: function(node) {
        return node && (this.isMedia(node) || /^(FIGURE)$/i.test(typeof node === 'string' ? node : node.nodeName));
    },
    /**
     * @description Checks for numeric (with decimal point).
     * @param {String|Number} text Text string or number
     * @returns {Boolean}
     */ isNumber: function(text) {
        return !!text && /^-?\d+(\.\d+)?$/.test(text + '');
    },
    /**
     * @description Get a number.
     * @param {String|Number} text Text string or number
     * @param {Number} maxDec Maximum number of decimal places (-1 : Infinity)
     * @returns {Number}
     */ getNumber: function(text, maxDec) {
        if (!text) return 0;
        let number = (text + '').match(/-?\d+(\.\d+)?/);
        if (!number || !number[0]) return 0;
        number = number[0];
        return maxDec < 0 ? number * 1 : maxDec === 0 ? this._w.Math.round(number * 1) : (number * 1).toFixed(maxDec) * 1;
    },
    /**
     * @description Get all "children" of the argument value element (Without text nodes)
     * @param {Element} element element to get child node
     * @param {Function|null} validation Conditional function
     * @returns {Array}
     */ getListChildren: function(element, validation) {
        const children = [];
        if (!element || !element.children || element.children.length === 0) return children;
        validation = validation || function() {
            return true;
        };
        (function recursionFunc(current) {
            if (element !== current && validation(current)) children.push(current);
            if (!!current.children) for(let i = 0, len = current.children.length; i < len; i++)recursionFunc(current.children[i]);
        })(element);
        return children;
    },
    /**
     * @description Get all "childNodes" of the argument value element (Include text nodes)
     * @param {Node} element element to get child node
     * @param {Function|null} validation Conditional function
     * @returns {Array}
     */ getListChildNodes: function(element, validation) {
        const children = [];
        if (!element || element.childNodes.length === 0) return children;
        validation = validation || function() {
            return true;
        };
        (function recursionFunc(current) {
            if (element !== current && validation(current)) children.push(current);
            for(let i = 0, len = current.childNodes.length; i < len; i++)recursionFunc(current.childNodes[i]);
        })(element);
        return children;
    },
    /**
     * @description Returns the number of parents nodes.
     * "0" when the parent node is the WYSIWYG area.
     * "-1" when the element argument is the WYSIWYG area.
     * @param {Node} element The element to check
     * @returns {Number}
     */ getElementDepth: function(element) {
        if (!element || this.isWysiwygDiv(element)) return -1;
        let depth = 0;
        element = element.parentNode;
        while(element && !this.isWysiwygDiv(element)){
            depth += 1;
            element = element.parentNode;
        }
        return depth;
    },
    /**
     * @description Compares two elements to find a common ancestor, and returns the order of the two elements.
     * @param {Node} a Node to compare.
     * @param {Node} b Node to compare.
     * @returns {Object} { ancesstor, a, b, result: (a > b ? 1 : a < b ? -1 : 0) };
     */ compareElements: function(a, b) {
        let aNode = a, bNode = b;
        while(aNode && bNode && aNode.parentNode !== bNode.parentNode){
            aNode = aNode.parentNode;
            bNode = bNode.parentNode;
        }
        if (!aNode || !bNode) return {
            ancestor: null,
            a: a,
            b: b,
            result: 0
        };
        const children = aNode.parentNode.childNodes;
        const aIndex = this.getArrayIndex(children, aNode);
        const bIndex = this.getArrayIndex(children, bNode);
        return {
            ancestor: aNode.parentNode,
            a: aNode,
            b: bNode,
            result: aIndex > bIndex ? 1 : aIndex < bIndex ? -1 : 0
        };
    },
    /**
     * @description Get the parent element of the argument value.
     * A tag that satisfies the query condition is imported.
     * Returns null if not found.
     * @param {Node} element Reference element
     * @param {String|Function} query Query String (nodeName, .className, #ID, :name) or validation function.
     * Not use it like jquery.
     * Only one condition can be entered at a time.
     * @returns {Element|null}
     */ getParentElement: function(element, query) {
        let check;
        if (typeof query === 'function') check = query;
        else {
            let attr;
            if (/^\./.test(query)) {
                attr = 'className';
                query = query.split('.')[1];
            } else if (/^#/.test(query)) {
                attr = 'id';
                query = '^' + query.split('#')[1] + '$';
            } else if (/^:/.test(query)) {
                attr = 'name';
                query = '^' + query.split(':')[1] + '$';
            } else {
                attr = 'nodeName';
                query = '^' + query + '$';
            }
            const regExp = new this._w.RegExp(query, 'i');
            check = function(el) {
                return regExp.test(el[attr]);
            };
        }
        while(element && !check(element)){
            if (this.isWysiwygDiv(element)) return null;
            element = element.parentNode;
        }
        return element;
    },
    /**
     * @description Get the child element of the argument value.
     * A tag that satisfies the query condition is imported.
     * Returns null if not found.
     * @param {Node} element Reference element
     * @param {String|Function} query Query String (nodeName, .className, #ID, :name) or validation function.
     * @param {Boolean} last If true returns the last node among the found child nodes. (default: first node)
     * Not use it like jquery.
     * Only one condition can be entered at a time.
     * @returns {Element|null}
     */ getChildElement: function(element, query, last) {
        let check;
        if (typeof query === 'function') check = query;
        else {
            let attr;
            if (/^\./.test(query)) {
                attr = 'className';
                query = query.split('.')[1];
            } else if (/^#/.test(query)) {
                attr = 'id';
                query = '^' + query.split('#')[1] + '$';
            } else if (/^:/.test(query)) {
                attr = 'name';
                query = '^' + query.split(':')[1] + '$';
            } else {
                attr = 'nodeName';
                query = '^' + (query === 'text' ? '#' + query : query) + '$';
            }
            const regExp = new this._w.RegExp(query, 'i');
            check = function(el) {
                return regExp.test(el[attr]);
            };
        }
        const childList = this.getListChildNodes(element, function(current) {
            return check(current);
        });
        return childList[last ? childList.length - 1 : 0];
    },
    /**
     * @description 1. The first node of all the child nodes of the "first" element is returned.
     * 2. The last node of all the child nodes of the "last" element is returned.
     * 3. When there is no "last" element, the first and last nodes of all the children of the "first" element are returned.
     * { sc: "first", ec: "last" }
     * @param {Node} first First element
     * @param {Node|null} last Last element
     * @returns {Object}
     */ getEdgeChildNodes: function(first, last) {
        if (!first) return;
        if (!last) last = first;
        while(first && first.nodeType === 1 && first.childNodes.length > 0 && !this.isBreak(first))first = first.firstChild;
        while(last && last.nodeType === 1 && last.childNodes.length > 0 && !this.isBreak(last))last = last.lastChild;
        return {
            sc: first,
            ec: last || first
        };
    },
    /**
     * @description Returns the position of the left and top of argument. {left:0, top:0}
     * @param {Node} element Target node
     * @param {Element|null} wysiwygFrame When use iframe option, iframe object should be sent (context.element.wysiwygFrame)
     * @returns {Object}
     */ getOffset: function(element, wysiwygFrame) {
        let offsetLeft = 0;
        let offsetTop = 0;
        let offsetElement = element.nodeType === 3 ? element.parentElement : element;
        const wysiwyg = this.getParentElement(element, this.isWysiwygDiv.bind(this));
        while(offsetElement && !this.hasClass(offsetElement, 'se-container') && offsetElement !== wysiwyg){
            offsetLeft += offsetElement.offsetLeft;
            offsetTop += offsetElement.offsetTop;
            offsetElement = offsetElement.offsetParent;
        }
        const iframe = wysiwygFrame && /iframe/i.test(wysiwygFrame.nodeName);
        return {
            left: offsetLeft + (iframe ? wysiwygFrame.parentElement.offsetLeft : 0),
            top: offsetTop - (wysiwyg ? wysiwyg.scrollTop : 0) + (iframe ? wysiwygFrame.parentElement.offsetTop : 0)
        };
    },
    /**
     * @description It compares the start and end indexes of "a" and "b" and returns the number of overlapping indexes in the range.
     * ex) 1, 5, 4, 6 => "2" (4 ~ 5)
     * @param {Number} aStart Start index of "a"
     * @param {Number} aEnd End index of "a"
     * @param {Number} bStart Start index of "b"
     * @param {Number} bEnd Start index of "b"
     * @returns {Number}
     */ getOverlapRangeAtIndex: function(aStart, aEnd, bStart, bEnd) {
        if (aStart <= bEnd ? aEnd < bStart : aEnd > bStart) return 0;
        const overlap = (aStart > bStart ? aStart : bStart) - (aEnd < bEnd ? aEnd : bEnd);
        return (overlap < 0 ? overlap * -1 : overlap) + 1;
    },
    /**
     * @description Set the text content value of the argument value element
     * @param {Node} element Element to replace text content
     * @param {String} txt Text to be applied
     */ changeTxt: function(element, txt) {
        if (!element || !txt) return;
        element.textContent = txt;
    },
    /**
     * @description Replace element
     * @param {Element} element Target element
     * @param {String|Element} newElement String or element of the new element to apply
     */ changeElement: function(element, newElement) {
        if (typeof newElement === 'string') {
            if (element.outerHTML) element.outerHTML = newElement;
            else {
                const doc = this.createElement('DIV');
                doc.innerHTML = newElement;
                newElement = doc.firstChild;
                element.parentNode.replaceChild(newElement, element);
            }
        } else if (newElement.nodeType === 1) element.parentNode.replaceChild(newElement, element);
    },
    /**
     * @description Set style, if all styles are deleted, the style properties are deleted.
     * @param {Element} element Element to set style
     * @param {String} styleName Style attribute name (marginLeft, textAlign...)
     * @param {String|Number} value Style value
     */ setStyle: function(element, styleName, value) {
        element.style[styleName] = value;
        if (!value && !element.style.cssText) element.removeAttribute('style');
    },
    /**
     * @description Determine whether any of the matched elements are assigned the given class
     * @param {Element} element Elements to search class name
     * @param {String} className Class name to search for
     * @returns {Boolean}
     */ hasClass: function(element, className) {
        if (!element) return;
        return new this._w.RegExp(className).test(element.className);
    },
    /**
     * @description Append the className value of the argument value element
     * @param {Element} element Elements to add class name
     * @param {String} className Class name to be add
     */ addClass: function(element, className) {
        if (!element) return;
        const check = new this._w.RegExp('(\\s|^)' + className + '(\\s|$)');
        if (check.test(element.className)) return;
        element.className += (element.className.length > 0 ? ' ' : '') + className;
    },
    /**
     * @description Delete the className value of the argument value element
     * @param {Element} element Elements to remove class name
     * @param {String} className Class name to be remove
     */ removeClass: function(element, className) {
        if (!element) return;
        const check = new this._w.RegExp('(\\s|^)' + className + '(\\s|$)');
        element.className = element.className.replace(check, ' ').trim();
        if (!element.className.trim()) element.removeAttribute('class');
    },
    /**
     * @description Argument value If there is no class name, insert it and delete the class name if it exists
     * @param {Element} element Elements to replace class name
     * @param {String} className Class name to be change
     * @returns {Boolean|undefined}
     */ toggleClass: function(element, className) {
        if (!element) return;
        let result = false;
        const check = new this._w.RegExp('(\\s|^)' + className + '(\\s|$)');
        if (check.test(element.className)) element.className = element.className.replace(check, ' ').trim();
        else {
            element.className += ' ' + className;
            result = true;
        }
        if (!element.className.trim()) element.removeAttribute('class');
        return result;
    },
    /**
     * @description Checks if element can't be easily enabled
     * @param {Element} element Element to check for
     */ isImportantDisabled: function(element) {
        return element.hasAttribute('data-important-disabled');
    },
    /**
     * @description In the predefined code view mode, the buttons except the executable button are changed to the 'disabled' state.
     * core.codeViewDisabledButtons (An array of buttons whose class name is not "se-code-view-enabled")
     * core.resizingDisabledButtons (An array of buttons whose class name is not "se-resizing-enabled")
     * @param {Boolean} disabled Disabled value
     * @param {Array|HTMLCollection|NodeList} buttonList Button array
     * @param {Boolean} important If priveleged mode should be used (Necessary to switch importantDisabled buttons)
     */ setDisabledButtons: function(disabled, buttonList, important) {
        for(let i = 0, len = buttonList.length; i < len; i++){
            let button = buttonList[i];
            if (important || !this.isImportantDisabled(button)) button.disabled = disabled;
            if (important) {
                if (disabled) button.setAttribute('data-important-disabled', '');
                else button.removeAttribute('data-important-disabled');
            }
        }
    },
    /**
     * @description Delete argumenu value element
     * @param {Node} item Node to be remove
     */ removeItem: function(item) {
        if (!item) return;
        if (typeof item.remove === 'function') item.remove();
        else if (item.parentNode) item.parentNode.removeChild(item);
    },
    /**
     * @description Delete all parent nodes that match the condition.
     * Returns an {sc: previousSibling, ec: nextSibling}(the deleted node reference) or null.
     * @param {Node} item Node to be remove
     * @param {Function|null} validation Validation function. default(Deleted if it only have breakLine and blanks)
     * @param {Element|null} stopParent Stop when the parent node reaches stopParent
     * @returns {Object|null} {sc: previousSibling, ec: nextSibling}
     */ removeItemAllParents: function(item, validation, stopParent) {
        if (!item) return null;
        let cc = null;
        if (!validation) validation = (function(current) {
            if (current === stopParent || this.isComponent(current)) return false;
            const text = current.textContent.trim();
            return text.length === 0 || /^(\n|\u200B)+$/.test(text);
        }).bind(this);
        (function recursionFunc(element) {
            if (!util.isWysiwygDiv(element)) {
                const parent = element.parentNode;
                if (parent && validation(element)) {
                    cc = {
                        sc: element.previousElementSibling,
                        ec: element.nextElementSibling
                    };
                    util.removeItem(element);
                    recursionFunc(parent);
                }
            }
        })(item);
        return cc;
    },
    /**
     * @description Detach Nested all nested lists under the "baseNode".
     * Returns a list with nested removed.
     * @param {Node} baseNode Element on which to base.
     * @param {Boolean} all If true, it also detach all nested lists of a returned list.
     * @returns {Element}
     */ detachNestedList: function(baseNode, all) {
        const rNode = this._deleteNestedList(baseNode);
        let rangeElement, cNodes;
        if (rNode) {
            rangeElement = rNode.cloneNode(false);
            cNodes = rNode.childNodes;
            const index = this.getPositionIndex(baseNode);
            while(cNodes[index])rangeElement.appendChild(cNodes[index]);
        } else rangeElement = baseNode;
        let rChildren;
        if (!all) {
            const depth = this.getElementDepth(baseNode) + 2;
            rChildren = this.getListChildren(baseNode, (function(current) {
                return this.isListCell(current) && !current.previousElementSibling && this.getElementDepth(current) === depth;
            }).bind(this));
        } else rChildren = this.getListChildren(rangeElement, (function(current) {
            return this.isListCell(current) && !current.previousElementSibling;
        }).bind(this));
        for(let i = 0, len = rChildren.length; i < len; i++)this._deleteNestedList(rChildren[i]);
        if (rNode) {
            rNode.parentNode.insertBefore(rangeElement, rNode.nextSibling);
            if (cNodes && cNodes.length === 0) this.removeItem(rNode);
        }
        return rangeElement === baseNode ? rangeElement.parentNode : rangeElement;
    },
    /**
     * @description Sub function of util.detachNestedList method.
     * @private
     */ _deleteNestedList: function(baseNode) {
        const baseParent = baseNode.parentNode;
        let sibling = baseParent;
        let parent = sibling.parentNode;
        let liSibling, liParent, child, index, c;
        while(this.isListCell(parent)){
            index = this.getPositionIndex(baseNode);
            liSibling = parent.nextElementSibling;
            liParent = parent.parentNode;
            child = sibling;
            while(child){
                sibling = sibling.nextSibling;
                if (this.isList(child)) {
                    c = child.childNodes;
                    while(c[index])liParent.insertBefore(c[index], liSibling);
                    if (c.length === 0) this.removeItem(child);
                } else liParent.appendChild(child);
                child = sibling;
            }
            sibling = liParent;
            parent = liParent.parentNode;
        }
        if (baseParent.children.length === 0) this.removeItem(baseParent);
        return liParent;
    },
    /**
     * @description Split all tags based on "baseNode"
     * Returns the last element of the splited tag.
     * @param {Node} baseNode Element or text node on which to base
     * @param {Number|Node|null} offset Text offset of "baseNode" (Only valid when "baseNode" is a text node)
     * @param {Number} depth The nesting depth of the element being split. (default: 0)
     * @returns {Element}
     */ splitElement: function(baseNode, offset, depth) {
        if (this.isWysiwygDiv(baseNode)) return baseNode;
        if (offset && !this.isNumber(offset)) {
            const children = baseNode.childNodes;
            let index = this.getPositionIndex(offset);
            const prev = baseNode.cloneNode(false);
            const next = baseNode.cloneNode(false);
            for(let i = 0, len = children.length; i < len; i++){
                if (i < index) prev.appendChild(children[i]);
                else if (i > index) next.appendChild(children[i]);
                else continue;
                i--;
                len--;
                index--;
            }
            if (prev.childNodes.length > 0) baseNode.parentNode.insertBefore(prev, baseNode);
            if (next.childNodes.length > 0) baseNode.parentNode.insertBefore(next, baseNode.nextElementSibling);
            return baseNode;
        }
        const bp = baseNode.parentNode;
        let index = 0;
        let suffixIndex = 1;
        let next = true;
        let newEl, children, temp;
        if (!depth || depth < 0) depth = 0;
        if (baseNode.nodeType === 3) {
            index = this.getPositionIndex(baseNode);
            if (offset >= 0 && baseNode.length !== offset) {
                baseNode.splitText(offset);
                const after = this.getNodeFromPath([
                    index + 1
                ], bp);
                if (this.onlyZeroWidthSpace(after)) after.data = this.zeroWidthSpace;
            }
        } else if (baseNode.nodeType === 1) {
            if (offset === 0) {
                while(baseNode.firstChild)baseNode = baseNode.firstChild;
                if (baseNode.nodeType === 3) {
                    const after = this.createTextNode(this.zeroWidthSpace);
                    baseNode.parentNode.insertBefore(after, baseNode);
                    baseNode = after;
                }
            }
            if (!baseNode.previousSibling) {
                if (this.getElementDepth(baseNode) === depth) next = false;
            } else baseNode = baseNode.previousSibling;
        }
        if (baseNode.nodeType === 1) suffixIndex = 0;
        let depthEl = baseNode;
        while(this.getElementDepth(depthEl) > depth){
            index = this.getPositionIndex(depthEl) + suffixIndex;
            depthEl = depthEl.parentNode;
            temp = newEl;
            newEl = depthEl.cloneNode(false);
            children = depthEl.childNodes;
            if (temp) {
                if (this.isListCell(newEl) && this.isList(temp) && temp.firstElementChild) {
                    newEl.innerHTML = temp.firstElementChild.innerHTML;
                    util.removeItem(temp.firstElementChild);
                    if (temp.children.length > 0) newEl.appendChild(temp);
                } else newEl.appendChild(temp);
            }
            while(children[index])newEl.appendChild(children[index]);
        }
        if (depthEl.childNodes.length <= 1 && (!depthEl.firstChild || depthEl.firstChild.textContent.length === 0)) depthEl.innerHTML = '<br>';
        const pElement = depthEl.parentNode;
        if (next) depthEl = depthEl.nextSibling;
        if (!newEl) return depthEl;
        this.mergeSameTags(newEl, null, false);
        this.mergeNestedTags(newEl, (function(current) {
            return this.isList(current);
        }).bind(this));
        if (newEl.childNodes.length > 0) pElement.insertBefore(newEl, depthEl);
        else newEl = depthEl;
        if (this.isListCell(newEl) && newEl.children && this.isList(newEl.children[0])) newEl.insertBefore(this.createElement('BR'), newEl.children[0]);
        if (bp.childNodes.length === 0) this.removeItem(bp);
        return newEl;
    },
    /**
     * @description Use with "npdePath (util.getNodePath)" to merge the same attributes and tags if they are present and modify the nodepath.
     * If "offset" has been changed, it will return as much "offset" as it has been modified.
     * An array containing change offsets is returned in the order of the "nodePathArray" array.
     * @param {Element} element Element
     * @param {Array|null} nodePathArray Array of NodePath object ([util.getNodePath(), ..])
     * @param {Boolean} onlyText If true, non-text nodes(!util._isIgnoreNodeChange) like 'span', 'strong'.. are ignored.
     * @returns {Array} [offset, ..]
     */ mergeSameTags: function(element, nodePathArray, onlyText) {
        const inst = this;
        const nodePathLen = nodePathArray ? nodePathArray.length : 0;
        let offsets = null;
        if (nodePathLen) offsets = this._w.Array.apply(null, new this._w.Array(nodePathLen)).map(this._w.Number.prototype.valueOf, 0);
        (function recursionFunc(current, depth, depthIndex) {
            const children = current.childNodes;
            for(let i = 0, len = children.length, child, next; i < len; i++){
                child = children[i];
                next = children[i + 1];
                if (!child) break;
                if (onlyText && inst._isIgnoreNodeChange(child) || !onlyText && (inst.isTable(child) || inst.isListCell(child) || inst.isFormatElement(child) && !inst.isFreeFormatElement(child))) {
                    if (inst.isTable(child) || inst.isListCell(child)) recursionFunc(child, depth + 1, i);
                    continue;
                }
                if (len === 1 && current.nodeName === child.nodeName && current.parentNode) {
                    // update nodePath
                    if (nodePathLen) {
                        let path, c, p, cDepth, spliceDepth;
                        for(let n = 0; n < nodePathLen; n++){
                            path = nodePathArray[n];
                            if (path && path[depth] === i) {
                                c = child, p = current, cDepth = depth, spliceDepth = true;
                                while(cDepth >= 0){
                                    if (inst.getArrayIndex(p.childNodes, c) !== path[cDepth]) {
                                        spliceDepth = false;
                                        break;
                                    }
                                    c = child.parentNode;
                                    p = c.parentNode;
                                    cDepth--;
                                }
                                if (spliceDepth) {
                                    path.splice(depth, 1);
                                    path[depth] = i;
                                }
                            }
                        }
                    }
                    // merge tag
                    inst.copyTagAttributes(child, current);
                    current.parentNode.insertBefore(child, current);
                    inst.removeItem(current);
                }
                if (!next) {
                    if (child.nodeType === 1) recursionFunc(child, depth + 1, i);
                    break;
                }
                if (child.nodeName === next.nodeName && inst.isSameAttributes(child, next) && child.href === next.href) {
                    const childs = child.childNodes;
                    let childLength = 0;
                    for(let n = 0, nLen = childs.length; n < nLen; n++)if (childs[n].textContent.length > 0) childLength++;
                    const l = child.lastChild;
                    const r = next.firstChild;
                    let addOffset = 0;
                    if (l && r) {
                        const textOffset = l.nodeType === 3 && r.nodeType === 3;
                        addOffset = l.textContent.length;
                        let tempL = l.previousSibling;
                        while(tempL && tempL.nodeType === 3){
                            addOffset += tempL.textContent.length;
                            tempL = tempL.previousSibling;
                        }
                        if (childLength > 0 && l.nodeType === 3 && r.nodeType === 3 && (l.textContent.length > 0 || r.textContent.length > 0)) childLength--;
                        if (nodePathLen) {
                            let path = null;
                            for(let n = 0; n < nodePathLen; n++){
                                path = nodePathArray[n];
                                if (path && path[depth] > i) {
                                    if (depth > 0 && path[depth - 1] !== depthIndex) continue;
                                    path[depth] -= 1;
                                    if (path[depth + 1] >= 0 && path[depth] === i) {
                                        path[depth + 1] += childLength;
                                        if (textOffset) {
                                            if (l && l.nodeType === 3 && r && r.nodeType === 3) offsets[n] += addOffset;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (child.nodeType === 3) {
                        addOffset = child.textContent.length;
                        child.textContent += next.textContent;
                        if (nodePathLen) {
                            let path = null;
                            for(let n = 0; n < nodePathLen; n++){
                                path = nodePathArray[n];
                                if (path && path[depth] > i) {
                                    if (depth > 0 && path[depth - 1] !== depthIndex) continue;
                                    path[depth] -= 1;
                                    if (path[depth + 1] >= 0 && path[depth] === i) {
                                        path[depth + 1] += childLength;
                                        offsets[n] += addOffset;
                                    }
                                }
                            }
                        }
                    } else child.innerHTML += next.innerHTML;
                    inst.removeItem(next);
                    i--;
                } else if (child.nodeType === 1) recursionFunc(child, depth + 1, i);
            }
        })(element, 0, 0);
        return offsets;
    },
    /**
     * @description Remove nested tags without other child nodes.
     * @param {Element} element Element object
     * @param {Function|String|null} validation Validation function / String("tag1|tag2..") / If null, all tags are applicable.
     */ mergeNestedTags: function(element, validation) {
        if (typeof validation === 'string') validation = (function(current) {
            return this.test(current.tagName);
        }).bind(new this._w.RegExp('^(' + (validation ? validation : '.+') + ')$', 'i'));
        else if (typeof validation !== 'function') validation = function() {
            return true;
        };
        (function recursionFunc(current) {
            let children = current.children;
            if (children.length === 1 && children[0].nodeName === current.nodeName && validation(current)) {
                const temp = children[0];
                children = temp.children;
                while(children[0])current.appendChild(children[0]);
                current.removeChild(temp);
            }
            for(let i = 0, len = current.children.length; i < len; i++)recursionFunc(current.children[i]);
        })(element);
    },
    /**
     * @description Delete a empty child node of argument element.
     * @param {Element} element Element node
     * @param {Node|null} notRemoveNode Do not remove node
     * @param {boolean} forceDelete When all child nodes are deleted, the parent node is also deleted.
     */ removeEmptyNode: function(element, notRemoveNode, forceDelete) {
        const inst = this;
        if (notRemoveNode) notRemoveNode = inst.getParentElement(notRemoveNode, function(current) {
            return element === current.parentElement;
        });
        (function recursionFunc(current) {
            if (inst._notTextNode(current) || current === notRemoveNode || inst.isNonEditable(current)) return 0;
            if (current !== element && inst.onlyZeroWidthSpace(current.textContent) && (!current.firstChild || !inst.isBreak(current.firstChild)) && !current.querySelector(inst._allowedEmptyNodeList)) {
                if (current.parentNode) {
                    current.parentNode.removeChild(current);
                    return -1;
                }
            } else {
                const children = current.children;
                for(let i = 0, len = children.length, r = 0; i < len; i++){
                    if (!children[i + r] || inst.isComponent(children[i + r])) continue;
                    r += recursionFunc(children[i + r]);
                }
            }
            return 0;
        })(element);
        if (element.childNodes.length === 0) {
            if (forceDelete) this.removeItem(element);
            else element.innerHTML = '<br>';
        }
    },
    /**
     * @description Remove whitespace between tags in HTML string.
     * @param {String} html HTML string
     * @returns {String}
     */ htmlRemoveWhiteSpace: function(html) {
        if (!html) return '';
        return html.trim().replace(/<\/?(?!strong|span|font|b|var|i|em|u|ins|s|strike|del|sub|sup|mark|a|label|code|summary)[^>^<]+>\s+(?=<)/ig, function(m) {
            return m.replace(/\n/g, '').replace(/\s+/, ' ');
        });
    },
    /**
	 * @description HTML code compression
	 * @param {string} html HTML string
	 * @returns {string} HTML string
	 */ htmlCompress: function(html) {
        return html.replace(/\n/g, '').replace(/(>)(?:\s+)(<)/g, '$1$2');
    },
    /**
     * @description Sort a element array by depth of element.
     * @param {Array} array Array object
     * @param {Boolean} des true: descending order / false: ascending order
     */ sortByDepth: function(array, des) {
        const t = !des ? -1 : 1;
        const f = t * -1;
        array.sort((function(a, b) {
            if (!this.isListCell(a) || !this.isListCell(b)) return 0;
            a = this.getElementDepth(a);
            b = this.getElementDepth(b);
            return a > b ? t : a < b ? f : 0;
        }).bind(this));
    },
    _isExcludeSelectionElement: function(element) {
        return !/FIGCAPTION/i.test(element.nodeName) && (this.isComponent(element) || /FIGURE/i.test(element.nodeName));
    },
    /**
     * @description Nodes that need to be added without modification when changing text nodes
     * @param {Node} element Element to check
     * @returns {Boolean}
     * @private
     */ _isIgnoreNodeChange: function(element) {
        return element && element.nodeType !== 3 && (this.isNonEditable(element) || !this.isTextStyleElement(element));
    },
    /**
     * @description Nodes that must remain undetached when changing text nodes (A, Label, Code, Span:font-size)
     * @param {Node|String} element Element to check
     * @returns {Boolean}
     * @private
     */ _isMaintainedNode: function(element) {
        return element && element.nodeType !== 3 && /^(a|label|code|summary)$/i.test(typeof element === 'string' ? element : element.nodeName);
    },
    /**
     * @description Node with font-size style
     * @param {Node} element Element to check
     * @returns {Boolean}
     * @private
     */ _isSizeNode: function(element) {
        return element && element.nodeType !== 3 && this.isTextStyleElement(element) && !!element.style.fontSize;
    },
    /**
     * @description Nodes without text
     * @param {Node} element Element to check
     * @returns {Boolean}
     * @private
     */ _notTextNode: function(element) {
        return element && element.nodeType !== 3 && (this.isComponent(element) || /^(br|input|select|canvas|img|iframe|audio|video)$/i.test(typeof element === 'string' ? element : element.nodeName));
    },
    /**
     * @deprecated
     * @description Check disallowed tags
     * @param {Node} element Element to check
     * @returns {Boolean}
     * @private
     */ _disallowedTags: function(element) {
        return /^(meta|script|link|style|[a-z]+\:[a-z]+)$/i.test(element.nodeName);
    },
    /**
     * @description Create whitelist RegExp object.
     * Return RegExp format: new RegExp("<\\/?\\b(?!" + list + ")\\b[^>^<]*+>", "gi")
     * @param {String} list Tags list ("br|p|div|pre...")
     * @returns {RegExp}
     */ createTagsWhitelist: function(list) {
        return new RegExp('<\\/?\\b(?!\\b' + (list || '').replace(/\|/g, '\\b|\\b') + '\\b)[^>]*>', 'gi');
    },
    /**
     * @description Create blacklist RegExp object.
     * Return RegExp format: new RegExp("<\\/?\\b(?:" + list + ")\\b[^>^<]*+>", "gi")
     * @param {String} list Tags list ("br|p|div|pre...")
     * @returns {RegExp}
     */ createTagsBlacklist: function(list) {
        return new RegExp('<\\/?\\b(?:\\b' + (list || '^').replace(/\|/g, '\\b|\\b') + '\\b)[^>]*>', 'gi');
    },
    /**
     * @description Fix tags that do not fit the editor format.
     * @param {Element} documentFragment Document fragment "DOCUMENT_FRAGMENT_NODE" (nodeType === 11)
     * @param {RegExp} htmlCheckWhitelistRegExp Editor tags whitelist (core._htmlCheckWhitelistRegExp)
     * @param {RegExp} htmlCheckBlacklistRegExp Editor tags blacklist (core._htmlCheckBlacklistRegExp)
     * @param {Function} classNameFilter Class name filter function
     * @private
     */ _consistencyCheckOfHTML: function(documentFragment, htmlCheckWhitelistRegExp, htmlCheckBlacklistRegExp, classNameFilter) {
        /**
         * It is can use ".children(util.getListChildren)" to exclude text nodes, but "documentFragment.children" is not supported in IE.
         * So check the node type and exclude the text no (current.nodeType !== 1)
         */ const removeTags = [], emptyTags = [], wrongList = [], withoutFormatCells = [];
        // wrong position
        const wrongTags = this.getListChildNodes(documentFragment, (function(current) {
            if (current.nodeType !== 1) {
                if (this.isList(current.parentElement)) removeTags.push(current);
                return false;
            }
            // white list
            if (htmlCheckBlacklistRegExp.test(current.nodeName) || !htmlCheckWhitelistRegExp.test(current.nodeName) && current.childNodes.length === 0 && this.isNotCheckingNode(current)) {
                removeTags.push(current);
                return false;
            }
            // empty tags
            const nrtag = !this.getParentElement(current, this.isNotCheckingNode);
            if (!this.isTable(current) && !this.isListCell(current) && !this.isAnchor(current) && (this.isFormatElement(current) || this.isRangeFormatElement(current) || this.isTextStyleElement(current)) && current.childNodes.length === 0 && nrtag) {
                emptyTags.push(current);
                return false;
            }
            // wrong list
            if (this.isList(current.parentNode) && !this.isList(current) && !this.isListCell(current)) {
                wrongList.push(current);
                return false;
            }
            // table cells
            if (this.isCell(current)) {
                const fel = current.firstElementChild;
                if (!this.isFormatElement(fel) && !this.isRangeFormatElement(fel) && !this.isComponent(fel)) {
                    withoutFormatCells.push(current);
                    return false;
                }
            }
            // class filter
            if (nrtag && current.className) {
                const className = new this._w.Array(current.classList).map(classNameFilter).join(' ').trim();
                if (className) current.className = className;
                else current.removeAttribute('class');
            }
            const result = current.parentNode !== documentFragment && nrtag && (this.isListCell(current) && !this.isList(current.parentNode) || (this.isFormatElement(current) || this.isComponent(current)) && !this.isRangeFormatElement(current.parentNode) && !this.getParentElement(current, this.isComponent));
            return result;
        }).bind(this));
        for(let i = 0, len = removeTags.length; i < len; i++)this.removeItem(removeTags[i]);
        const checkTags = [];
        for(let i = 0, len = wrongTags.length, t, p; i < len; i++){
            t = wrongTags[i];
            p = t.parentNode;
            if (!p || !p.parentNode) continue;
            if (this.getParentElement(t, this.isListCell)) {
                const cellChildren = t.childNodes;
                for(let j = cellChildren.length - 1; len >= 0; j--)p.insertBefore(t, cellChildren[j]);
                checkTags.push(t);
            } else {
                p.parentNode.insertBefore(t, p);
                checkTags.push(p);
            }
        }
        for(let i = 0, len = checkTags.length, t; i < len; i++){
            t = checkTags[i];
            if (this.onlyZeroWidthSpace(t.textContent.trim())) this.removeItem(t);
        }
        for(let i = 0, len = emptyTags.length; i < len; i++)this.removeItem(emptyTags[i]);
        for(let i = 0, len = wrongList.length, t, tp, children, p; i < len; i++){
            t = wrongList[i];
            p = t.parentNode;
            if (!p) continue;
            tp = this.createElement('LI');
            if (this.isFormatElement(t)) {
                children = t.childNodes;
                while(children[0])tp.appendChild(children[0]);
                p.insertBefore(tp, t);
                this.removeItem(t);
            } else {
                t = t.nextSibling;
                tp.appendChild(wrongList[i]);
                p.insertBefore(tp, t);
            }
        }
        for(let i = 0, len = withoutFormatCells.length, t, f; i < len; i++){
            t = withoutFormatCells[i];
            f = this.createElement('DIV');
            f.innerHTML = t.textContent.trim().length === 0 && t.children.length === 0 ? '<br>' : t.innerHTML;
            t.innerHTML = f.outerHTML;
        }
    },
    _setDefaultOptionStyle: function(options, defaultStyle) {
        let optionStyle = '';
        if (options.height) optionStyle += 'height:' + options.height + ';';
        if (options.minHeight) optionStyle += 'min-height:' + options.minHeight + ';';
        if (options.maxHeight) optionStyle += 'max-height:' + options.maxHeight + ';';
        if (options.position) optionStyle += 'position:' + options.position + ';';
        if (options.width) optionStyle += 'width:' + options.width + ';';
        if (options.minWidth) optionStyle += 'min-width:' + options.minWidth + ';';
        if (options.maxWidth) optionStyle += 'max-width:' + options.maxWidth + ';';
        let top = '', frame = '', editor = '';
        defaultStyle = optionStyle + defaultStyle;
        const styleArr = defaultStyle.split(';');
        for(let i = 0, len = styleArr.length, s; i < len; i++){
            s = styleArr[i].trim();
            if (!s) continue;
            if (/^(min-|max-)?width\s*:/.test(s) || /^(z-index|position)\s*:/.test(s)) {
                top += s + ';';
                continue;
            }
            if (/^(min-|max-)?height\s*:/.test(s)) {
                if (/^height/.test(s) && s.split(':')[1].trim() === 'auto') options.height = 'auto';
                frame += s + ';';
                continue;
            }
            editor += s + ';';
        }
        return {
            top: top,
            frame: frame,
            editor: editor
        };
    },
    _setIframeDocument: function(frame, options) {
        frame.setAttribute('scrolling', 'auto');
        frame.contentDocument.head.innerHTML = '<meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">' + this._setIframeCssTags(options);
        frame.contentDocument.body.className = options._editableClass;
        frame.contentDocument.body.setAttribute('contenteditable', true);
    },
    _setIframeCssTags: function(options) {
        const linkNames = options.iframeCSSFileName;
        const wRegExp = this._w.RegExp;
        let tagString = '';
        for(let f = 0, len = linkNames.length, path; f < len; f++){
            path = [];
            if (/(^https?:\/\/)|(^data:text\/css,)/.test(linkNames[f])) path.push(linkNames[f]);
            else {
                const CSSFileName = new wRegExp('(^|.*[\\/])' + linkNames[f] + '(\\..+)?\\.css(?:\\?.*|;.*)?$', 'i');
                for(let c = document.getElementsByTagName('link'), i = 0, len = c.length, styleTag; i < len; i++){
                    styleTag = c[i].href.match(CSSFileName);
                    if (styleTag) path.push(styleTag[0]);
                }
            }
            if (!path || path.length === 0) throw '[SUNEDITOR.constructor.iframe.fail] The suneditor CSS files installation path could not be automatically detected. Please set the option property "iframeCSSFileName" before creating editor instances.';
            for(let i = 0, len = path.length; i < len; i++)tagString += '<link href="' + path[i] + '" rel="stylesheet">';
        }
        return tagString + (options.height === 'auto' ? '<style>\n/** Iframe height auto */\nbody{height: min-content; overflow: hidden;}\n</style>' : '');
    }
};
var __WEBPACK_DEFAULT_EXPORT__ = util;
}),
"1574": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */ 'use strict';
var __WEBPACK_DEFAULT_EXPORT__ = {
    name: 'blockquote',
    display: 'command',
    add: function(core, targetElement) {
        const context = core.context;
        context.blockquote = {
            targetButton: targetElement,
            tag: core.util.createElement('BLOCKQUOTE')
        };
    },
    /**
     * @Override core
     */ active: function(element) {
        if (!element) this.util.removeClass(this.context.blockquote.targetButton, 'active');
        else if (/blockquote/i.test(element.nodeName)) {
            this.util.addClass(this.context.blockquote.targetButton, 'active');
            return true;
        }
        return false;
    },
    /**
     * @Override core
     */ action: function() {
        const currentBlockquote = this.util.getParentElement(this.getSelectionNode(), 'blockquote');
        if (currentBlockquote) this.detachRangeFormatElement(currentBlockquote, null, null, false, false);
        else this.applyRangeFormatElement(this.context.blockquote.tag.cloneNode(false));
    }
};
}),
"9420": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* harmony import */var _modules_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/dialog */"8784");
/* harmony import */var _modules_dialog__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_dialog__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */var _modules_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/component */"2204");
/* harmony import */var _modules_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */var _modules_fileManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/fileManager */"2527");
/* harmony import */var _modules_fileManager__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_fileManager__WEBPACK_IMPORTED_MODULE_2__);
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */ 'use strict';



var __WEBPACK_DEFAULT_EXPORT__ = {
    name: 'audio',
    display: 'dialog',
    add: function(core) {
        core.addModule([
            (_modules_dialog__WEBPACK_IMPORTED_MODULE_0___default()),
            (_modules_component__WEBPACK_IMPORTED_MODULE_1___default()),
            (_modules_fileManager__WEBPACK_IMPORTED_MODULE_2___default())
        ]);
        const context = core.context;
        const contextAudio = context.audio = {
            _infoList: [],
            _infoIndex: 0,
            _uploadFileLength: 0,
            focusElement: null,
            targetSelect: null,
            _origin_w: core.options.audioWidth,
            _origin_h: core.options.audioHeight,
            _linkValue: '',
            // @require @Override component
            _element: null,
            _cover: null,
            _container: null
        };
        /** dialog */ let audio_dialog = this.setDialog(core);
        contextAudio.modal = audio_dialog;
        contextAudio.audioInputFile = audio_dialog.querySelector('._se_audio_files');
        contextAudio.audioUrlFile = audio_dialog.querySelector('.se-input-url');
        contextAudio.focusElement = contextAudio.audioInputFile || contextAudio.audioUrlFile;
        contextAudio.preview = audio_dialog.querySelector('.se-link-preview');
        /** controller */ let audio_controller = this.setController(core);
        contextAudio.controller = audio_controller;
        /** add event listeners */ audio_dialog.querySelector('form').addEventListener('submit', this.submit.bind(core));
        if (contextAudio.audioInputFile) audio_dialog.querySelector('.se-dialog-files-edge-button').addEventListener('click', this._removeSelectedFiles.bind(contextAudio.audioInputFile, contextAudio.audioUrlFile, contextAudio.preview));
        if (contextAudio.audioInputFile && contextAudio.audioUrlFile) contextAudio.audioInputFile.addEventListener('change', this._fileInputChange.bind(contextAudio));
        audio_controller.addEventListener('click', this.onClick_controller.bind(core));
        if (contextAudio.audioUrlFile) contextAudio.audioUrlFile.addEventListener('input', this._onLinkPreview.bind(contextAudio.preview, contextAudio, core.options.linkProtocol));
        /** append html */ context.dialog.modal.appendChild(audio_dialog);
        /** append controller */ context.element.relative.appendChild(audio_controller);
        /** empty memory */ audio_dialog = null, audio_controller = null;
    },
    /** HTML - dialog */ setDialog: function(core) {
        const option = core.options;
        const lang = core.lang;
        const dialog = core.util.createElement('DIV');
        dialog.className = 'se-dialog-content';
        dialog.style.display = 'none';
        let html = '<form method="post" enctype="multipart/form-data"><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + lang.dialogBox.close + '" aria-label="' + lang.dialogBox.close + '">' + core.icons.cancel + '</button>' + '<span class="se-modal-title">' + lang.dialogBox.audioBox.title + '</span>' + '</div>' + '<div class="se-dialog-body">';
        if (option.audioFileInput) html += '<div class="se-dialog-form"><label>' + lang.dialogBox.audioBox.file + '</label>' + '<div class="se-dialog-form-files">' + '<input class="se-input-form _se_audio_files" type="file" accept="' + option.audioAccept + '"' + (option.audioMultipleFile ? ' multiple="multiple"' : '') + '/>' + '<button type="button" data-command="filesRemove" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + lang.controller.remove + '" aria-label="' + lang.controller.remove + '">' + core.icons.cancel + '</button>' + '</div>' + '</div>';
        if (option.audioUrlInput) html += '<div class="se-dialog-form"><label>' + lang.dialogBox.audioBox.url + '</label>' + '<input class="se-input-form se-input-url" type="text" />' + '<pre class="se-link-preview"></pre>' + '</div>';
        html += '</div><div class="se-dialog-footer"><button type="submit" class="se-btn-primary" title="' + lang.dialogBox.submitButton + '" aria-label="' + lang.dialogBox.submitButton + '"><span>' + lang.dialogBox.submitButton + '</span></button>' + '</div>' + '</form>';
        dialog.innerHTML = html;
        return dialog;
    },
    /** HTML - controller */ setController: function(core) {
        const lang = core.lang;
        const icons = core.icons;
        const link_btn = core.util.createElement('DIV');
        link_btn.className = 'se-controller se-controller-link';
        link_btn.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="link-content"><div class="se-btn-group"><button type="button" data-command="update" tabindex="-1" class="se-tooltip">' + icons.edit + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.edit + '</span></span>' + '</button>' + '<button type="button" data-command="delete" tabindex="-1" class="se-tooltip">' + icons.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.remove + '</span></span>' + '</button>' + '</div>' + '</div>';
        return link_btn;
    },
    // Disable url input when uploading files
    _fileInputChange: function() {
        if (!this.audioInputFile.value) {
            this.audioUrlFile.removeAttribute('disabled');
            this.preview.style.textDecoration = '';
        } else {
            this.audioUrlFile.setAttribute('disabled', true);
            this.preview.style.textDecoration = 'line-through';
        }
    },
    // Disable url input when uploading files
    _removeSelectedFiles: function(urlInput, preview) {
        this.value = '';
        if (urlInput) {
            urlInput.removeAttribute('disabled');
            preview.style.textDecoration = '';
        }
    },
    // create new audio tag
    _createAudioTag: function() {
        const oAudio = this.util.createElement('AUDIO');
        this.plugins.audio._setTagAttrs.call(this, oAudio);
        const w = this.context.audio._origin_w;
        const h = this.context.audio._origin_h;
        oAudio.setAttribute('origin-size', w + ',' + h);
        oAudio.style.cssText = (w ? 'width:' + w + '; ' : '') + (h ? 'height:' + h + ';' : '');
        return oAudio;
    },
    _setTagAttrs: function(element) {
        element.setAttribute('controls', true);
        const attrs = this.options.audioTagAttrs;
        if (!attrs) return;
        for(let key in attrs){
            if (!this.util.hasOwn(attrs, key)) continue;
            element.setAttribute(key, attrs[key]);
        }
    },
    _onLinkPreview: function(context, protocol, e) {
        const value = e.target.value.trim();
        context._linkValue = this.textContent = !value ? '' : protocol && value.indexOf('://') === -1 && value.indexOf('#') !== 0 ? protocol + value : value.indexOf('://') === -1 ? '/' + value : value;
    },
    /**
     * @Required @Override fileManager
     */ fileTags: [
        'audio'
    ],
    /**
     * @Override core, fileManager, resizing
     * @description It is called from core.selectComponent.
     * @param {Element} element Target element
     */ select: function(element) {
        this.plugins.audio.onModifyMode.call(this, element);
    },
    /**
     * @Override fileManager, resizing 
     */ destroy: function(element) {
        element = element || this.context.audio._element;
        const container = this.util.getParentElement(element, this.util.isComponent) || element;
        const dataIndex = element.getAttribute('data-index') * 1;
        const focusEl = container.previousElementSibling || container.nextElementSibling;
        const emptyDiv = container.parentNode;
        this.util.removeItem(container);
        this.plugins.audio.init.call(this);
        this.controllersOff();
        if (emptyDiv !== this.context.element.wysiwyg) this.util.removeItemAllParents(emptyDiv, function(current) {
            return current.childNodes.length === 0;
        }, null);
        // focus
        this.focusEdge(focusEl);
        // fileManager event
        this.plugins.fileManager.deleteInfo.call(this, 'audio', dataIndex, this.functions.onAudioUpload);
        // history stack
        this.history.push(false);
    },
    /**
     * @Override fileManager
     */ checkFileInfo: function() {
        this.plugins.fileManager.checkInfo.call(this, 'audio', [
            'audio'
        ], this.functions.onAudioUpload, this.plugins.audio.updateCover.bind(this), false);
    },
    /**
     * @Override fileManager
     */ resetFileInfo: function() {
        this.plugins.fileManager.resetInfo.call(this, 'audio', this.functions.onAudioUpload);
    },
    /**
     * @Required @Override dialog
     */ on: function(update) {
        const contextAudio = this.context.audio;
        if (!update) {
            this.plugins.audio.init.call(this);
            if (contextAudio.audioInputFile && this.options.audioMultipleFile) contextAudio.audioInputFile.setAttribute('multiple', 'multiple');
        } else if (contextAudio._element) {
            this.context.dialog.updateModal = true;
            contextAudio._linkValue = contextAudio.preview.textContent = contextAudio.audioUrlFile.value = contextAudio._element.src;
            if (contextAudio.audioInputFile && this.options.audioMultipleFile) contextAudio.audioInputFile.removeAttribute('multiple');
        } else if (contextAudio.audioInputFile && this.options.audioMultipleFile) contextAudio.audioInputFile.removeAttribute('multiple');
    },
    /**
     * @Required @Override dialog
     */ open: function() {
        this.plugins.dialog.open.call(this, 'audio', 'audio' === this.currentControllerName);
    },
    submit: function(e) {
        const contextAudio = this.context.audio;
        e.preventDefault();
        e.stopPropagation();
        try {
            if (contextAudio.audioInputFile && contextAudio.audioInputFile.files.length > 0) {
                this.showLoading();
                this.plugins.audio.submitAction.call(this, contextAudio.audioInputFile.files);
            } else if (contextAudio.audioUrlFile && contextAudio._linkValue.length > 0) {
                this.showLoading();
                this.plugins.audio.setupUrl.call(this, contextAudio._linkValue);
            }
        } catch (error) {
            this.closeLoading();
            throw Error('[SUNEDITOR.audio.submit.fail] cause : "' + error.message + '"');
        } finally{
            this.plugins.dialog.close.call(this);
        }
        return false;
    },
    submitAction: function(fileList) {
        if (fileList.length === 0) return;
        let fileSize = 0;
        let files = [];
        for(let i = 0, len = fileList.length; i < len; i++)if (/audio/i.test(fileList[i].type)) {
            files.push(fileList[i]);
            fileSize += fileList[i].size;
        }
        const limitSize = this.options.audioUploadSizeLimit;
        if (limitSize > 0) {
            let infoSize = 0;
            const audiosInfo = this.context.audio._infoList;
            for(let i = 0, len = audiosInfo.length; i < len; i++)infoSize += audiosInfo[i].size * 1;
            if (fileSize + infoSize > limitSize) {
                this.closeLoading();
                const err = '[SUNEDITOR.audioUpload.fail] Size of uploadable total audios: ' + limitSize / 1000 + 'KB';
                if (typeof this.functions.onAudioUploadError !== 'function' || this.functions.onAudioUploadError(err, {
                    'limitSize': limitSize,
                    'currentSize': infoSize,
                    'uploadSize': fileSize
                }, this)) this.functions.noticeOpen(err);
                return;
            }
        }
        const contextAudio = this.context.audio;
        contextAudio._uploadFileLength = files.length;
        const info = {
            isUpdate: this.context.dialog.updateModal,
            element: contextAudio._element
        };
        if (typeof this.functions.onAudioUploadBefore === 'function') {
            const result = this.functions.onAudioUploadBefore(files, info, this, (function(data) {
                if (data && this._w.Array.isArray(data.result)) this.plugins.audio.register.call(this, info, data);
                else this.plugins.audio.upload.call(this, info, data);
            }).bind(this));
            if (typeof result === 'undefined') return;
            if (!result) {
                this.closeLoading();
                return;
            }
            if (typeof result === 'object' && result.length > 0) files = result;
        }
        this.plugins.audio.upload.call(this, info, files);
    },
    error: function(message, response) {
        this.closeLoading();
        if (typeof this.functions.onAudioUploadError !== 'function' || this.functions.onAudioUploadError(message, response, this)) {
            this.functions.noticeOpen(message);
            throw Error('[SUNEDITOR.plugin.audio.exception] response: ' + message);
        }
    },
    upload: function(info, files) {
        if (!files) {
            this.closeLoading();
            return;
        }
        if (typeof files === 'string') {
            this.plugins.audio.error.call(this, files, null);
            return;
        }
        const audioUploadUrl = this.options.audioUploadUrl;
        const filesLen = this.context.dialog.updateModal ? 1 : files.length;
        // create formData
        const formData = new FormData();
        for(let i = 0; i < filesLen; i++)formData.append('file-' + i, files[i]);
        // server upload
        this.plugins.fileManager.upload.call(this, audioUploadUrl, this.options.audioUploadHeader, formData, this.plugins.audio.callBack_upload.bind(this, info), this.functions.onAudioUploadError);
    },
    callBack_upload: function(info, xmlHttp) {
        if (typeof this.functions.audioUploadHandler === 'function') this.functions.audioUploadHandler(xmlHttp, info, this);
        else {
            const response = JSON.parse(xmlHttp.responseText);
            if (response.errorMessage) this.plugins.audio.error.call(this, response.errorMessage, response);
            else this.plugins.audio.register.call(this, info, response);
        }
    },
    register: function(info, response) {
        const fileList = response.result;
        for(let i = 0, len = fileList.length, file, oAudio; i < len; i++){
            if (info.isUpdate) oAudio = info.element;
            else oAudio = this.plugins.audio._createAudioTag.call(this);
            file = {
                name: fileList[i].name,
                size: fileList[i].size
            };
            this.plugins.audio.create_audio.call(this, oAudio, fileList[i].url, file, info.isUpdate);
        }
        this.closeLoading();
    },
    setupUrl: function(src) {
        try {
            if (src.length === 0) return false;
            this.plugins.audio.create_audio.call(this, this.plugins.audio._createAudioTag.call(this), src, null, this.context.dialog.updateModal);
        } catch (error) {
            throw Error('[SUNEDITOR.audio.audio.fail] cause : "' + error.message + '"');
        } finally{
            this.closeLoading();
        }
    },
    create_audio: function(element, src, file, isUpdate) {
        const contextAudio = this.context.audio;
        // create new tag
        if (!isUpdate) {
            element.src = src;
            const cover = this.plugins.component.set_cover.call(this, element);
            const container = this.plugins.component.set_container.call(this, cover, '');
            if (!this.insertComponent(container, false, true, !this.options.mediaAutoSelect)) {
                this.focus();
                return;
            }
            if (!this.options.mediaAutoSelect) {
                const line = this.appendFormatTag(container, null);
                if (line) this.setRange(line, 0, line, 0);
            }
        } else {
            if (contextAudio._element) element = contextAudio._element;
            if (element && element.src !== src) {
                element.src = src;
                this.selectComponent(element, 'audio');
            } else {
                this.selectComponent(element, 'audio');
                return;
            }
        }
        this.plugins.fileManager.setInfo.call(this, 'audio', element, this.functions.onAudioUpload, file, false);
        if (isUpdate) this.history.push(false);
    },
    updateCover: function(element) {
        const contextAudio = this.context.audio;
        this.plugins.audio._setTagAttrs.call(this, element);
        // find component element
        let existElement = this.util.isRangeFormatElement(element.parentNode) || this.util.isWysiwygDiv(element.parentNode) ? element : this.util.getFormatElement(element) || element;
        // clone element
        const prevElement = element;
        contextAudio._element = element = element.cloneNode(false);
        const cover = this.plugins.component.set_cover.call(this, element);
        const container = this.plugins.component.set_container.call(this, cover, 'se-audio-container');
        try {
            if (this.util.getParentElement(prevElement, this.util.isNotCheckingNode)) prevElement.parentNode.replaceChild(container, prevElement);
            else if (this.util.isListCell(existElement)) {
                const refer = this.util.getParentElement(prevElement, function(current) {
                    return current.parentNode === existElement;
                });
                existElement.insertBefore(container, refer);
                this.util.removeItem(prevElement);
                this.util.removeEmptyNode(refer, null, true);
            } else if (this.util.isFormatElement(existElement)) {
                const refer = this.util.getParentElement(prevElement, function(current) {
                    return current.parentNode === existElement;
                });
                existElement = this.util.splitElement(existElement, refer);
                existElement.parentNode.insertBefore(container, existElement);
                this.util.removeItem(prevElement);
                this.util.removeEmptyNode(existElement, null, true);
                if (existElement.children.length === 0) existElement.innerHTML = this.util.htmlRemoveWhiteSpace(existElement.innerHTML);
            } else existElement.parentNode.replaceChild(container, existElement);
        } catch (error) {
            console.warn('[SUNEDITOR.audio.error] Maybe the audio tag is nested.', error);
        }
        this.plugins.fileManager.setInfo.call(this, 'audio', element, this.functions.onAudioUpload, null, false);
        this.plugins.audio.init.call(this);
    },
    /**
     * @Required @Override fileManager, resizing
     */ onModifyMode: function(selectionTag) {
        const contextAudio = this.context.audio;
        this.setControllerPosition(contextAudio.controller, selectionTag, 'bottom', {
            left: 0,
            top: 0
        });
        this.controllersOn(contextAudio.controller, selectionTag, this.plugins.audio.onControllerOff.bind(this, selectionTag), 'audio');
        this.util.addClass(selectionTag, 'active');
        contextAudio._element = selectionTag;
        contextAudio._cover = this.util.getParentElement(selectionTag, 'FIGURE');
        contextAudio._container = this.util.getParentElement(selectionTag, this.util.isComponent);
    },
    /**
     * @Required @Override fileManager, resizing
     */ openModify: function(notOpen) {
        if (this.context.audio.audioUrlFile) {
            const contextAudio = this.context.audio;
            contextAudio._linkValue = contextAudio.preview.textContent = contextAudio.audioUrlFile.value = contextAudio._element.src;
        }
        if (!notOpen) this.plugins.dialog.open.call(this, 'audio', true);
    },
    onClick_controller: function(e) {
        e.stopPropagation();
        const command = e.target.getAttribute('data-command');
        if (!command) return;
        e.preventDefault();
        if (/update/.test(command)) this.plugins.audio.openModify.call(this, false);
        else this.plugins.audio.destroy.call(this, this.context.audio._element);
        this.controllersOff();
    },
    onControllerOff: function(selectionTag) {
        this.util.removeClass(selectionTag, 'active');
        this.context.audio.controller.style.display = 'none';
    },
    /**
     * @Required @Override dialog
     */ init: function() {
        if (this.context.dialog.updateModal) return;
        const contextAudio = this.context.audio;
        if (contextAudio.audioInputFile) contextAudio.audioInputFile.value = '';
        if (contextAudio.audioUrlFile) contextAudio._linkValue = contextAudio.preview.textContent = contextAudio.audioUrlFile.value = '';
        if (contextAudio.audioInputFile && contextAudio.audioUrlFile) {
            contextAudio.audioUrlFile.removeAttribute('disabled');
            contextAudio.preview.style.textDecoration = '';
        }
        contextAudio._element = null;
    }
};
}),
"1968": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* harmony import */var _modules_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/dialog */"8784");
/* harmony import */var _modules_dialog__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_dialog__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */var _modules_anchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/_anchor */"4559");
/* harmony import */var _modules_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/component */"2204");
/* harmony import */var _modules_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */var _modules_resizing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/resizing */"5076");
/* harmony import */var _modules_resizing__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_resizing__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */var _modules_fileManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/fileManager */"2527");
/* harmony import */var _modules_fileManager__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_fileManager__WEBPACK_IMPORTED_MODULE_4__);
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */ 'use strict';





var __WEBPACK_DEFAULT_EXPORT__ = {
    name: 'image',
    display: 'dialog',
    add: function(core) {
        core.addModule([
            (_modules_dialog__WEBPACK_IMPORTED_MODULE_0___default()),
            _modules_anchor__WEBPACK_IMPORTED_MODULE_1__["default"],
            (_modules_component__WEBPACK_IMPORTED_MODULE_2___default()),
            (_modules_resizing__WEBPACK_IMPORTED_MODULE_3___default()),
            (_modules_fileManager__WEBPACK_IMPORTED_MODULE_4___default())
        ]);
        const options = core.options;
        const context = core.context;
        const contextImage = context.image = {
            _infoList: [],
            _infoIndex: 0,
            _uploadFileLength: 0,
            focusElement: null,
            sizeUnit: options._imageSizeUnit,
            _linkElement: '',
            _altText: '',
            _align: 'none',
            _floatClassRegExp: '__se__float\\-[a-z]+',
            _v_src: {
                _linkValue: ''
            },
            svgDefaultSize: '30%',
            base64RenderIndex: 0,
            // @require @Override component
            _element: null,
            _cover: null,
            _container: null,
            // @Override resizing properties
            inputX: null,
            inputY: null,
            _element_w: 1,
            _element_h: 1,
            _element_l: 0,
            _element_t: 0,
            _defaultSizeX: 'auto',
            _defaultSizeY: 'auto',
            _origin_w: options.imageWidth === 'auto' ? '' : options.imageWidth,
            _origin_h: options.imageHeight === 'auto' ? '' : options.imageHeight,
            _proportionChecked: true,
            _resizing: options.imageResizing,
            _resizeDotHide: !options.imageHeightShow,
            _rotation: options.imageRotation,
            _alignHide: !options.imageAlignShow,
            _onlyPercentage: options.imageSizeOnlyPercentage,
            _ratio: false,
            _ratioX: 1,
            _ratioY: 1,
            _captionShow: true,
            _captionChecked: false,
            _caption: null,
            captionCheckEl: null
        };
        /** image dialog */ let image_dialog = this.setDialog(core);
        contextImage.modal = image_dialog;
        contextImage.imgInputFile = image_dialog.querySelector('._se_image_file');
        contextImage.imgUrlFile = image_dialog.querySelector('._se_image_url');
        contextImage.focusElement = contextImage.imgInputFile || contextImage.imgUrlFile;
        contextImage.altText = image_dialog.querySelector('._se_image_alt');
        contextImage.captionCheckEl = image_dialog.querySelector('._se_image_check_caption');
        contextImage.previewSrc = image_dialog.querySelector('._se_tab_content_image .se-link-preview');
        /** add event listeners */ image_dialog.querySelector('.se-dialog-tabs').addEventListener('click', this.openTab.bind(core));
        image_dialog.querySelector('form').addEventListener('submit', this.submit.bind(core));
        if (contextImage.imgInputFile) image_dialog.querySelector('.se-file-remove').addEventListener('click', this._removeSelectedFiles.bind(contextImage.imgInputFile, contextImage.imgUrlFile, contextImage.previewSrc));
        if (contextImage.imgUrlFile) contextImage.imgUrlFile.addEventListener('input', this._onLinkPreview.bind(contextImage.previewSrc, contextImage._v_src, options.linkProtocol));
        if (contextImage.imgInputFile && contextImage.imgUrlFile) contextImage.imgInputFile.addEventListener('change', this._fileInputChange.bind(contextImage));
        const imageGalleryButton = image_dialog.querySelector('.__se__gallery');
        if (imageGalleryButton) imageGalleryButton.addEventListener('click', this._openGallery.bind(core));
        contextImage.proportion = {};
        contextImage.inputX = {};
        contextImage.inputY = {};
        if (options.imageResizing) {
            contextImage.proportion = image_dialog.querySelector('._se_image_check_proportion');
            contextImage.inputX = image_dialog.querySelector('._se_image_size_x');
            contextImage.inputY = image_dialog.querySelector('._se_image_size_y');
            contextImage.inputX.value = options.imageWidth;
            contextImage.inputY.value = options.imageHeight;
            contextImage.inputX.addEventListener('keyup', this.setInputSize.bind(core, 'x'));
            contextImage.inputY.addEventListener('keyup', this.setInputSize.bind(core, 'y'));
            contextImage.inputX.addEventListener('change', this.setRatio.bind(core));
            contextImage.inputY.addEventListener('change', this.setRatio.bind(core));
            contextImage.proportion.addEventListener('change', this.setRatio.bind(core));
            image_dialog.querySelector('.se-dialog-btn-revert').addEventListener('click', this.sizeRevert.bind(core));
        }
        /** append html */ context.dialog.modal.appendChild(image_dialog);
        /** link event */ core.plugins.anchor.initEvent.call(core, 'image', image_dialog.querySelector('._se_tab_content_url'));
        contextImage.anchorCtx = core.context.anchor.caller.image;
        /** empty memory */ image_dialog = null;
    },
    /** dialog */ setDialog: function(core) {
        const option = core.options;
        const lang = core.lang;
        const dialog = core.util.createElement('DIV');
        dialog.className = 'se-dialog-content se-dialog-image';
        dialog.style.display = 'none';
        let html = '<div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" class="close" title="' + lang.dialogBox.close + '" aria-label="' + lang.dialogBox.close + '">' + core.icons.cancel + '</button>' + '<span class="se-modal-title">' + lang.dialogBox.imageBox.title + '</span>' + '</div>' + '<div class="se-dialog-tabs">' + '<button type="button" class="_se_tab_link active" data-tab-link="image">' + lang.toolbar.image + '</button>' + '<button type="button" class="_se_tab_link" data-tab-link="url">' + lang.toolbar.link + '</button>' + '</div>' + '<form method="post" enctype="multipart/form-data">' + '<div class="_se_tab_content _se_tab_content_image">' + '<div class="se-dialog-body"><div style="border-bottom: 1px dashed #ccc;">';
        if (option.imageFileInput) html += '<div class="se-dialog-form"><label>' + lang.dialogBox.imageBox.file + '</label>' + '<div class="se-dialog-form-files">' + '<input class="se-input-form _se_image_file" type="file" accept="' + option.imageAccept + '"' + (option.imageMultipleFile ? ' multiple="multiple"' : '') + '/>' + '<button type="button" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + lang.controller.remove + '" aria-label="' + lang.controller.remove + '">' + core.icons.cancel + '</button>' + '</div>' + '</div>';
        if (option.imageUrlInput) html += '<div class="se-dialog-form"><label>' + lang.dialogBox.imageBox.url + '</label>' + '<div class="se-dialog-form-files">' + '<input class="se-input-form se-input-url _se_image_url" type="text" />' + (option.imageGalleryUrl && core.plugins.imageGallery ? '<button type="button" class="se-btn se-dialog-files-edge-button __se__gallery" title="' + lang.toolbar.imageGallery + '" aria-label="' + lang.toolbar.imageGallery + '">' + core.icons.image_gallery + '</button>' : '') + '</div>' + '<pre class="se-link-preview"></pre>' + '</div>';
        html += '</div><div class="se-dialog-form"><label>' + lang.dialogBox.imageBox.altText + '</label><input class="se-input-form _se_image_alt" type="text" />' + '</div>';
        if (option.imageResizing) {
            const onlyPercentage = option.imageSizeOnlyPercentage;
            const onlyPercentDisplay = onlyPercentage ? ' style="display: none !important;"' : '';
            const heightDisplay = !option.imageHeightShow ? ' style="display: none !important;"' : '';
            html += '<div class="se-dialog-form">';
            if (onlyPercentage || !option.imageHeightShow) html += '<div class="se-dialog-size-text"><label class="size-w">' + lang.dialogBox.size + '</label>' + '</div>';
            else html += '<div class="se-dialog-size-text"><label class="size-w">' + lang.dialogBox.width + '</label>' + '<label class="se-dialog-size-x">&nbsp;</label>' + '<label class="size-h">' + lang.dialogBox.height + '</label>' + '</div>';
            html += '<input class="se-input-control _se_image_size_x" placeholder="auto"' + (onlyPercentage ? ' type="number" min="1"' : 'type="text"') + (onlyPercentage ? ' max="100"' : '') + ' />' + '<label class="se-dialog-size-x"' + heightDisplay + '>' + (onlyPercentage ? '%' : 'x') + '</label>' + '<input type="text" class="se-input-control _se_image_size_y" placeholder="auto"' + onlyPercentDisplay + (onlyPercentage ? ' max="100"' : '') + heightDisplay + '/>' + '<label' + onlyPercentDisplay + heightDisplay + '><input type="checkbox" class="se-dialog-btn-check _se_image_check_proportion" checked/>&nbsp;' + lang.dialogBox.proportion + '</label>' + '<button type="button" title="' + lang.dialogBox.revertButton + '" aria-label="' + lang.dialogBox.revertButton + '" class="se-btn se-dialog-btn-revert" style="float: right;">' + core.icons.revert + '</button>' + '</div>';
        }
        html += '<div class="se-dialog-form se-dialog-form-footer"><label><input type="checkbox" class="se-dialog-btn-check _se_image_check_caption" />&nbsp;' + lang.dialogBox.caption + '</label>' + '</div>' + '</div>' + '</div>' + '<div class="_se_tab_content _se_tab_content_url" style="display: none">' + core.context.anchor.forms.innerHTML + '</div>' + '<div class="se-dialog-footer">' + '<div' + (option.imageAlignShow ? '' : ' style="display: none"') + '>' + '<label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="none" checked>' + lang.dialogBox.basic + '</label>' + '<label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="left">' + lang.dialogBox.left + '</label>' + '<label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="center">' + lang.dialogBox.center + '</label>' + '<label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="right">' + lang.dialogBox.right + '</label>' + '</div>' + '<button type="submit" class="se-btn-primary" title="' + lang.dialogBox.submitButton + '" aria-label="' + lang.dialogBox.submitButton + '"><span>' + lang.dialogBox.submitButton + '</span></button>' + '</div>' + '</form>';
        dialog.innerHTML = html;
        return dialog;
    },
    _fileInputChange: function() {
        if (!this.imgInputFile.value) {
            this.imgUrlFile.removeAttribute('disabled');
            this.previewSrc.style.textDecoration = '';
        } else {
            this.imgUrlFile.setAttribute('disabled', true);
            this.previewSrc.style.textDecoration = 'line-through';
        }
    },
    _removeSelectedFiles: function(urlInput, previewSrc) {
        this.value = '';
        if (urlInput) {
            urlInput.removeAttribute('disabled');
            previewSrc.style.textDecoration = '';
        }
    },
    _openGallery: function() {
        this.callPlugin('imageGallery', this.plugins.imageGallery.open.bind(this, this.plugins.image._setUrlInput.bind(this.context.image)), null);
    },
    _setUrlInput: function(target) {
        this.altText.value = target.alt;
        this._v_src._linkValue = this.previewSrc.textContent = this.imgUrlFile.value = target.src;
        this.imgUrlFile.focus();
    },
    _onLinkPreview: function(context, protocol, e) {
        const value = e.target.value.trim();
        context._linkValue = this.textContent = !value ? '' : protocol && value.indexOf('://') === -1 && value.indexOf('#') !== 0 ? protocol + value : value.indexOf('://') === -1 ? '/' + value : value;
    },
    /**
     * @Override @Required fileManager
     */ fileTags: [
        'img'
    ],
    /**
     * @Override core, fileManager, resizing
     * @description It is called from core.selectComponent.
     * @param {Element} element Target element
     */ select: function(element) {
        this.plugins.image.onModifyMode.call(this, element, this.plugins.resizing.call_controller_resize.call(this, element, 'image'));
    },
    /**
     * @Override fileManager, resizing
     */ destroy: function(element) {
        const imageEl = element || this.context.image._element;
        const imageContainer = this.util.getParentElement(imageEl, this.util.isMediaComponent) || imageEl;
        const dataIndex = imageEl.getAttribute('data-index') * 1;
        let focusEl = imageContainer.previousElementSibling || imageContainer.nextElementSibling;
        const emptyDiv = imageContainer.parentNode;
        this.util.removeItem(imageContainer);
        this.plugins.image.init.call(this);
        this.controllersOff();
        if (emptyDiv !== this.context.element.wysiwyg) this.util.removeItemAllParents(emptyDiv, function(current) {
            return current.childNodes.length === 0;
        }, null);
        // focus
        this.focusEdge(focusEl);
        // event
        this.plugins.fileManager.deleteInfo.call(this, 'image', dataIndex, this.functions.onImageUpload);
        // history stack
        this.history.push(false);
    },
    /**
     * @Required @Override dialog
     */ on: function(update) {
        const contextImage = this.context.image;
        if (!update) {
            contextImage.inputX.value = contextImage._origin_w = this.options.imageWidth === contextImage._defaultSizeX ? '' : this.options.imageWidth;
            contextImage.inputY.value = contextImage._origin_h = this.options.imageHeight === contextImage._defaultSizeY ? '' : this.options.imageHeight;
            if (contextImage.imgInputFile && this.options.imageMultipleFile) contextImage.imgInputFile.setAttribute('multiple', 'multiple');
        } else if (contextImage.imgInputFile && this.options.imageMultipleFile) contextImage.imgInputFile.removeAttribute('multiple');
        this.plugins.anchor.on.call(this, contextImage.anchorCtx, update);
    },
    /**
     * @Required @Override dialog
     */ open: function() {
        this.plugins.dialog.open.call(this, 'image', 'image' === this.currentControllerName);
    },
    openTab: function(e) {
        const modal = this.context.image.modal;
        const targetElement = e === 'init' ? modal.querySelector('._se_tab_link') : e.target;
        if (!/^BUTTON$/i.test(targetElement.tagName)) return false;
        // Declare all variables
        const tabName = targetElement.getAttribute('data-tab-link');
        const contentClassName = '_se_tab_content';
        let i, tabContent, tabLinks;
        // Get all elements with class="tabcontent" and hide them
        tabContent = modal.getElementsByClassName(contentClassName);
        for(i = 0; i < tabContent.length; i++)tabContent[i].style.display = 'none';
        // Get all elements with class="tablinks" and remove the class "active"
        tabLinks = modal.getElementsByClassName('_se_tab_link');
        for(i = 0; i < tabLinks.length; i++)this.util.removeClass(tabLinks[i], 'active');
        // Show the current tab, and add an "active" class to the button that opened the tab
        modal.querySelector('.' + contentClassName + '_' + tabName).style.display = 'block';
        this.util.addClass(targetElement, 'active');
        // focus
        if (tabName === 'image' && this.context.image.focusElement) this.context.image.focusElement.focus();
        else if (tabName === 'url') this.context.anchor.caller.image.urlInput.focus();
        return false;
    },
    submit: function(e) {
        const contextImage = this.context.image;
        const imagePlugin = this.plugins.image;
        e.preventDefault();
        e.stopPropagation();
        contextImage._altText = contextImage.altText.value;
        contextImage._align = contextImage.modal.querySelector('input[name="suneditor_image_radio"]:checked').value;
        contextImage._captionChecked = contextImage.captionCheckEl.checked;
        if (contextImage._resizing) contextImage._proportionChecked = contextImage.proportion.checked;
        try {
            if (this.context.dialog.updateModal) imagePlugin.update_image.call(this, false, true, false);
            if (contextImage.imgInputFile && contextImage.imgInputFile.files.length > 0) {
                this.showLoading();
                imagePlugin.submitAction.call(this, this.context.image.imgInputFile.files);
            } else if (contextImage.imgUrlFile && contextImage._v_src._linkValue.length > 0) {
                this.showLoading();
                imagePlugin.onRender_imgUrl.call(this, contextImage._v_src._linkValue);
            }
        } catch (error) {
            this.closeLoading();
            throw Error('[SUNEDITOR.image.submit.fail] cause : "' + error.message + '"');
        } finally{
            this.plugins.dialog.close.call(this);
        }
        return false;
    },
    submitAction: function(fileList) {
        if (fileList.length === 0) return;
        let fileSize = 0;
        let files = [];
        for(let i = 0, len = fileList.length; i < len; i++)if (/image/i.test(fileList[i].type)) {
            files.push(fileList[i]);
            fileSize += fileList[i].size;
        }
        const limitSize = this.options.imageUploadSizeLimit;
        if (limitSize > 0) {
            let infoSize = 0;
            const imagesInfo = this.context.image._infoList;
            for(let i = 0, len = imagesInfo.length; i < len; i++)infoSize += imagesInfo[i].size * 1;
            if (fileSize + infoSize > limitSize) {
                this.closeLoading();
                const err = '[SUNEDITOR.imageUpload.fail] Size of uploadable total images: ' + limitSize / 1000 + 'KB';
                if (typeof this.functions.onImageUploadError !== 'function' || this.functions.onImageUploadError(err, {
                    'limitSize': limitSize,
                    'currentSize': infoSize,
                    'uploadSize': fileSize
                }, this)) this.functions.noticeOpen(err);
                return;
            }
        }
        const contextImage = this.context.image;
        contextImage._uploadFileLength = files.length;
        const anchor = this.plugins.anchor.createAnchor.call(this, contextImage.anchorCtx, true);
        const info = {
            anchor: anchor,
            inputWidth: contextImage.inputX.value,
            inputHeight: contextImage.inputY.value,
            align: contextImage._align,
            isUpdate: this.context.dialog.updateModal,
            alt: contextImage._altText,
            element: contextImage._element
        };
        if (typeof this.functions.onImageUploadBefore === 'function') {
            const result = this.functions.onImageUploadBefore(files, info, this, (function(data) {
                if (data && this._w.Array.isArray(data.result)) this.plugins.image.register.call(this, info, data);
                else this.plugins.image.upload.call(this, info, data);
            }).bind(this));
            if (typeof result === 'undefined') return;
            if (!result) {
                this.closeLoading();
                return;
            }
            if (this._w.Array.isArray(result) && result.length > 0) files = result;
        }
        this.plugins.image.upload.call(this, info, files);
    },
    error: function(message, response) {
        this.closeLoading();
        if (typeof this.functions.onImageUploadError !== 'function' || this.functions.onImageUploadError(message, response, this)) {
            this.functions.noticeOpen(message);
            throw Error('[SUNEDITOR.plugin.image.error] response: ' + message);
        }
    },
    upload: function(info, files) {
        if (!files) {
            this.closeLoading();
            return;
        }
        if (typeof files === 'string') {
            this.plugins.image.error.call(this, files, null);
            return;
        }
        const imageUploadUrl = this.options.imageUploadUrl;
        const filesLen = this.context.dialog.updateModal ? 1 : files.length;
        // server upload
        if (typeof imageUploadUrl === 'string' && imageUploadUrl.length > 0) {
            const formData = new FormData();
            for(let i = 0; i < filesLen; i++)formData.append('file-' + i, files[i]);
            this.plugins.fileManager.upload.call(this, imageUploadUrl, this.options.imageUploadHeader, formData, this.plugins.image.callBack_imgUpload.bind(this, info), this.functions.onImageUploadError);
        } else this.plugins.image.setup_reader.call(this, files, info.anchor, info.inputWidth, info.inputHeight, info.align, info.alt, filesLen, info.isUpdate);
    },
    callBack_imgUpload: function(info, xmlHttp) {
        if (typeof this.functions.imageUploadHandler === 'function') this.functions.imageUploadHandler(xmlHttp, info, this);
        else {
            const response = JSON.parse(xmlHttp.responseText);
            if (response.errorMessage) this.plugins.image.error.call(this, response.errorMessage, response);
            else this.plugins.image.register.call(this, info, response);
        }
    },
    register: function(info, response) {
        const fileList = response.result;
        for(let i = 0, len = fileList.length, file; i < len; i++){
            file = {
                name: fileList[i].name,
                size: fileList[i].size
            };
            if (info.isUpdate) {
                this.plugins.image.update_src.call(this, fileList[i].url, info.element, file);
                break;
            } else this.plugins.image.create_image.call(this, fileList[i].url, info.anchor, info.inputWidth, info.inputHeight, info.align, file, info.alt);
        }
        this.closeLoading();
    },
    setup_reader: function(files, anchor, width, height, align, alt, filesLen, isUpdate) {
        try {
            this.context.image.base64RenderIndex = filesLen;
            const wFileReader = this._w.FileReader;
            const filesStack = [
                filesLen
            ];
            this.context.image.inputX.value = width;
            this.context.image.inputY.value = height;
            for(let i = 0, reader, file; i < filesLen; i++){
                reader = new wFileReader();
                file = files[i];
                reader.onload = (function(reader, update, updateElement, file, index) {
                    filesStack[index] = {
                        result: reader.result,
                        file: file
                    };
                    if (--this.context.image.base64RenderIndex === 0) {
                        this.plugins.image.onRender_imgBase64.call(this, update, filesStack, updateElement, anchor, width, height, align, alt);
                        this.closeLoading();
                    }
                }).bind(this, reader, isUpdate, this.context.image._element, file, i);
                reader.readAsDataURL(file);
            }
        } catch (e) {
            this.closeLoading();
            throw Error('[SUNEDITOR.image.setup_reader.fail] cause : "' + e.message + '"');
        }
    },
    onRender_imgBase64: function(update, filesStack, updateElement, anchor, width, height, align, alt) {
        const updateMethod = this.plugins.image.update_src;
        const createMethod = this.plugins.image.create_image;
        for(let i = 0, len = filesStack.length; i < len; i++)if (update) {
            this.context.image._element.setAttribute('data-file-name', filesStack[i].file.name);
            this.context.image._element.setAttribute('data-file-size', filesStack[i].file.size);
            updateMethod.call(this, filesStack[i].result, updateElement, filesStack[i].file);
        } else createMethod.call(this, filesStack[i].result, anchor, width, height, align, filesStack[i].file, alt);
    },
    onRender_imgUrl: function(url) {
        if (!url) url = this.context.image._v_src._linkValue;
        if (!url) return false;
        const contextImage = this.context.image;
        try {
            const file = {
                name: url.split('/').pop(),
                size: 0
            };
            if (this.context.dialog.updateModal) this.plugins.image.update_src.call(this, url, contextImage._element, file);
            else this.plugins.image.create_image.call(this, url, this.plugins.anchor.createAnchor.call(this, contextImage.anchorCtx, true), contextImage.inputX.value, contextImage.inputY.value, contextImage._align, file, contextImage._altText);
        } catch (e) {
            throw Error('[SUNEDITOR.image.URLRendering.fail] cause : "' + e.message + '"');
        } finally{
            this.closeLoading();
        }
    },
    onRender_link: function(imgTag, anchor) {
        if (anchor) {
            anchor.setAttribute('data-image-link', 'image');
            imgTag.setAttribute('data-image-link', anchor.href);
            anchor.appendChild(imgTag);
            return anchor;
        }
        return imgTag;
    },
    /**
     * @Override resizing
     * @param {String} xy 'x': width, 'y': height
     * @param {KeyboardEvent} e Event object
     */ setInputSize: function(xy, e) {
        if (e && e.keyCode === 32) {
            e.preventDefault();
            return;
        }
        this.plugins.resizing._module_setInputSize.call(this, this.context.image, xy);
    },
    /**
     * @Override resizing
     */ setRatio: function() {
        this.plugins.resizing._module_setRatio.call(this, this.context.image);
    },
    /**
     * @Override fileManager
     */ checkFileInfo: function() {
        const imagePlugin = this.plugins.image;
        const contextImage = this.context.image;
        const modifyHandler = (function(tag) {
            imagePlugin.onModifyMode.call(this, tag, null);
            imagePlugin.openModify.call(this, true);
            // get size
            contextImage.inputX.value = contextImage._origin_w;
            contextImage.inputY.value = contextImage._origin_h;
            // get align
            const format = this.util.getFormatElement(tag);
            if (format) contextImage._align = format.style.textAlign || format.style.float;
            // link
            if (this.util.isAnchor(tag.parentNode) && !contextImage.anchorCtx.linkValue) contextImage.anchorCtx.linkValue = ' ';
            imagePlugin.update_image.call(this, true, false, true);
            imagePlugin.init.call(this);
        }).bind(this);
        this.plugins.fileManager.checkInfo.call(this, 'image', [
            'img'
        ], this.functions.onImageUpload, modifyHandler, true);
    },
    /**
     * @Override fileManager
     */ resetFileInfo: function() {
        this.plugins.fileManager.resetInfo.call(this, 'image', this.functions.onImageUpload);
    },
    create_image: function(src, anchor, width, height, align, file, alt) {
        const imagePlugin = this.plugins.image;
        const contextImage = this.context.image;
        this.context.resizing._resize_plugin = 'image';
        let oImg = this.util.createElement('IMG');
        oImg.src = src;
        oImg.alt = alt;
        oImg.setAttribute('data-rotate', '0');
        anchor = imagePlugin.onRender_link.call(this, oImg, anchor ? anchor.cloneNode(false) : null);
        if (contextImage._resizing) oImg.setAttribute('data-proportion', contextImage._proportionChecked);
        const cover = this.plugins.component.set_cover.call(this, anchor);
        const container = this.plugins.component.set_container.call(this, cover, 'se-image-container');
        // caption
        if (contextImage._captionChecked) {
            contextImage._caption = this.plugins.component.create_caption.call(this);
            cover.appendChild(contextImage._caption);
        }
        contextImage._element = oImg;
        contextImage._cover = cover;
        contextImage._container = container;
        // set size
        imagePlugin.applySize.call(this, width, height);
        // align
        imagePlugin.setAlign.call(this, align, oImg, cover, container);
        oImg.onload = imagePlugin._image_create_onload.bind(this, oImg, contextImage.svgDefaultSize, container);
        if (this.insertComponent(container, true, true, true)) this.plugins.fileManager.setInfo.call(this, 'image', oImg, this.functions.onImageUpload, file, true);
        this.context.resizing._resize_plugin = '';
    },
    _image_create_onload: function(oImg, svgDefaultSize, container) {
        // svg exception handling
        if (oImg.offsetWidth === 0) this.plugins.image.applySize.call(this, svgDefaultSize, '');
        if (this.options.mediaAutoSelect) this.selectComponent(oImg, 'image');
        else {
            const line = this.appendFormatTag(container, null);
            if (line) this.setRange(line, 0, line, 0);
        }
    },
    update_image: function(init, openController, notHistoryPush) {
        const contextImage = this.context.image;
        let imageEl = contextImage._element;
        let cover = contextImage._cover;
        let container = contextImage._container;
        let isNewContainer = false;
        if (cover === null) {
            isNewContainer = true;
            imageEl = contextImage._element.cloneNode(true);
            cover = this.plugins.component.set_cover.call(this, imageEl);
        }
        if (container === null) {
            cover = cover.cloneNode(true);
            imageEl = cover.querySelector('img');
            isNewContainer = true;
            container = this.plugins.component.set_container.call(this, cover, 'se-image-container');
        } else if (isNewContainer) {
            container.innerHTML = '';
            container.appendChild(cover);
            contextImage._cover = cover;
            contextImage._element = imageEl;
            isNewContainer = false;
        }
        // check size
        let changeSize;
        const x = this.util.isNumber(contextImage.inputX.value) ? contextImage.inputX.value + contextImage.sizeUnit : contextImage.inputX.value;
        const y = this.util.isNumber(contextImage.inputY.value) ? contextImage.inputY.value + contextImage.sizeUnit : contextImage.inputY.value;
        if (/%$/.test(imageEl.style.width)) changeSize = x !== container.style.width || y !== container.style.height;
        else changeSize = x !== imageEl.style.width || y !== imageEl.style.height;
        // alt
        imageEl.alt = contextImage._altText;
        // caption
        let modifiedCaption = false;
        if (contextImage._captionChecked) {
            if (!contextImage._caption) {
                contextImage._caption = this.plugins.component.create_caption.call(this);
                cover.appendChild(contextImage._caption);
                modifiedCaption = true;
            }
        } else if (contextImage._caption) {
            this.util.removeItem(contextImage._caption);
            contextImage._caption = null;
            modifiedCaption = true;
        }
        // link
        let isNewAnchor = null;
        const anchor = this.plugins.anchor.createAnchor.call(this, contextImage.anchorCtx, true);
        if (anchor) {
            if (contextImage._linkElement !== anchor || isNewContainer && !container.contains(anchor)) {
                contextImage._linkElement = anchor.cloneNode(false);
                cover.insertBefore(this.plugins.image.onRender_link.call(this, imageEl, contextImage._linkElement), contextImage._caption);
                isNewAnchor = contextImage._element;
            } else contextImage._linkElement.setAttribute('data-image-link', 'image');
        } else if (contextImage._linkElement !== null) {
            const imageElement = imageEl;
            imageElement.setAttribute('data-image-link', '');
            if (cover.contains(contextImage._linkElement)) {
                const newEl = imageElement.cloneNode(true);
                cover.removeChild(contextImage._linkElement);
                cover.insertBefore(newEl, contextImage._caption);
                contextImage._element = imageEl = newEl;
            }
        }
        let existElement = null;
        if (isNewContainer) {
            existElement = this.util.isRangeFormatElement(contextImage._element.parentNode) || this.util.isWysiwygDiv(contextImage._element.parentNode) ? contextImage._element : this.util.isAnchor(contextImage._element.parentNode) ? contextImage._element.parentNode : this.util.getFormatElement(contextImage._element) || contextImage._element;
            if (this.util.getParentElement(contextImage._element, this.util.isNotCheckingNode)) {
                existElement = isNewAnchor ? anchor : contextImage._element;
                existElement.parentNode.replaceChild(container, existElement);
            } else if (this.util.isListCell(existElement)) {
                const refer = this.util.getParentElement(contextImage._element, function(current) {
                    return current.parentNode === existElement;
                });
                existElement.insertBefore(container, refer);
                this.util.removeItem(contextImage._element);
                this.util.removeEmptyNode(refer, null, true);
            } else if (this.util.isFormatElement(existElement)) {
                const refer = this.util.getParentElement(contextImage._element, function(current) {
                    return current.parentNode === existElement;
                });
                existElement = this.util.splitElement(existElement, refer);
                existElement.parentNode.insertBefore(container, existElement);
                this.util.removeItem(contextImage._element);
                this.util.removeEmptyNode(existElement, null, true);
                if (existElement.children.length === 0) existElement.innerHTML = this.util.htmlRemoveWhiteSpace(existElement.innerHTML);
            } else if (this.util.isFormatElement(existElement.parentNode)) {
                const formats = existElement.parentNode;
                formats.parentNode.insertBefore(container, existElement.previousSibling ? formats.nextElementSibling : formats);
                if (contextImage.__updateTags.map(function(current) {
                    return existElement.contains(current);
                }).length === 0) this.util.removeItem(existElement);
            } else existElement.parentNode.replaceChild(container, existElement);
            imageEl = container.querySelector('img');
            contextImage._element = imageEl;
            contextImage._cover = cover;
            contextImage._container = container;
        }
        if (isNewAnchor) {
            if (!isNewContainer) this.util.removeItem(anchor);
            else {
                this.util.removeItem(isNewAnchor);
                if (this.util.getListChildren(anchor, function(current) {
                    return /IMG/i.test(current.tagName);
                }).length === 0) this.util.removeItem(anchor);
            }
        }
        // transform
        if (modifiedCaption || !contextImage._onlyPercentage && changeSize) {
            if (!init && (/\d+/.test(imageEl.style.height) || this.context.resizing._rotateVertical && contextImage._captionChecked)) {
                if (/%$/.test(contextImage.inputX.value) || /%$/.test(contextImage.inputY.value)) this.plugins.resizing.resetTransform.call(this, imageEl);
                else this.plugins.resizing.setTransformSize.call(this, imageEl, this.util.getNumber(contextImage.inputX.value, 0), this.util.getNumber(contextImage.inputY.value, 0));
            }
        }
        // size
        if (contextImage._resizing) {
            imageEl.setAttribute('data-proportion', contextImage._proportionChecked);
            if (changeSize) this.plugins.image.applySize.call(this);
        }
        // align
        this.plugins.image.setAlign.call(this, null, imageEl, null, null);
        // set imagesInfo
        if (init) this.plugins.fileManager.setInfo.call(this, 'image', imageEl, this.functions.onImageUpload, null, true);
        if (openController) this.selectComponent(imageEl, 'image');
        // history stack
        if (!notHistoryPush) this.history.push(false);
    },
    update_src: function(src, element, file) {
        element.src = src;
        this._w.setTimeout(this.plugins.fileManager.setInfo.bind(this, 'image', element, this.functions.onImageUpload, file, true));
        this.selectComponent(element, 'image');
    },
    /**
     * @Required @Override fileManager, resizing
     */ onModifyMode: function(element, size) {
        if (!element) return;
        const contextImage = this.context.image;
        contextImage._linkElement = contextImage.anchorCtx.linkAnchor = this.util.isAnchor(element.parentNode) ? element.parentNode : null;
        contextImage._element = element;
        contextImage._cover = this.util.getParentElement(element, 'FIGURE');
        contextImage._container = this.util.getParentElement(element, this.util.isMediaComponent);
        contextImage._caption = this.util.getChildElement(contextImage._cover, 'FIGCAPTION');
        contextImage._align = element.getAttribute('data-align') || element.style.float || 'none';
        element.style.float = '';
        this.plugins.anchor.setCtx(contextImage._linkElement, contextImage.anchorCtx);
        if (size) {
            contextImage._element_w = size.w;
            contextImage._element_h = size.h;
            contextImage._element_t = size.t;
            contextImage._element_l = size.l;
        }
        let userSize = contextImage._element.getAttribute('data-size') || contextImage._element.getAttribute('data-origin');
        let w, h;
        if (userSize) {
            userSize = userSize.split(',');
            w = userSize[0];
            h = userSize[1];
        } else if (size) {
            w = size.w;
            h = size.h;
        }
        contextImage._origin_w = w || element.style.width || element.width || '';
        contextImage._origin_h = h || element.style.height || element.height || '';
    },
    /**
     * @Required @Override fileManager, resizing
     */ openModify: function(notOpen) {
        const contextImage = this.context.image;
        if (contextImage.imgUrlFile) contextImage._v_src._linkValue = contextImage.previewSrc.textContent = contextImage.imgUrlFile.value = contextImage._element.src;
        contextImage._altText = contextImage.altText.value = contextImage._element.alt;
        (contextImage.modal.querySelector('input[name="suneditor_image_radio"][value="' + contextImage._align + '"]') || contextImage.modal.querySelector('input[name="suneditor_image_radio"][value="none"]')).checked = true;
        contextImage._align = contextImage.modal.querySelector('input[name="suneditor_image_radio"]:checked').value;
        contextImage._captionChecked = contextImage.captionCheckEl.checked = !!contextImage._caption;
        if (contextImage._resizing) this.plugins.resizing._module_setModifyInputSize.call(this, contextImage, this.plugins.image);
        if (!notOpen) this.plugins.dialog.open.call(this, 'image', true);
    },
    /**
     * @Override fileManager
     */ applySize: function(w, h) {
        const contextImage = this.context.image;
        if (!w) w = contextImage.inputX.value || this.options.imageWidth;
        if (!h) h = contextImage.inputY.value || this.options.imageHeight;
        if (contextImage._onlyPercentage && !!w || /%$/.test(w)) {
            this.plugins.image.setPercentSize.call(this, w, h);
            return true;
        } else if ((!w || w === 'auto') && (!h || h === 'auto')) this.plugins.image.setAutoSize.call(this);
        else this.plugins.image.setSize.call(this, w, h, false);
        return false;
    },
    /**
     * @Override resizing
     */ sizeRevert: function() {
        this.plugins.resizing._module_sizeRevert.call(this, this.context.image);
    },
    /**
     * @Override resizing
     */ setSize: function(w, h, notResetPercentage, direction) {
        const contextImage = this.context.image;
        const onlyW = /^(rw|lw)$/.test(direction) && /\d+/.test(contextImage._element.style.height);
        const onlyH = /^(th|bh)$/.test(direction) && /\d+/.test(contextImage._element.style.width);
        if (!onlyH) {
            contextImage._element.style.width = this.util.isNumber(w) ? w + contextImage.sizeUnit : w;
            this.plugins.image.cancelPercentAttr.call(this);
        }
        if (!onlyW) contextImage._element.style.height = this.util.isNumber(h) ? h + contextImage.sizeUnit : /%$/.test(h) ? '' : h;
        if (contextImage._align === 'center') this.plugins.image.setAlign.call(this, null, null, null, null);
        if (!notResetPercentage) contextImage._element.removeAttribute('data-percentage');
        // save current size
        this.plugins.resizing._module_saveCurrentSize.call(this, contextImage);
    },
    /**
     * @Override resizing
     */ setAutoSize: function() {
        const contextImage = this.context.image;
        if (contextImage._caption) contextImage._caption.style.marginTop = '';
        this.plugins.resizing.resetTransform.call(this, contextImage._element);
        this.plugins.image.cancelPercentAttr.call(this);
        contextImage._element.style.maxWidth = '';
        contextImage._element.style.width = '';
        contextImage._element.style.height = '';
        contextImage._cover.style.width = '';
        contextImage._cover.style.height = '';
        this.plugins.image.setAlign.call(this, null, null, null, null);
        contextImage._element.setAttribute('data-percentage', 'auto,auto');
        // save current size
        this.plugins.resizing._module_saveCurrentSize.call(this, contextImage);
    },
    /**
     * @Override resizing
     */ setOriginSize: function() {
        const contextImage = this.context.image;
        contextImage._element.removeAttribute('data-percentage');
        this.plugins.resizing.resetTransform.call(this, contextImage._element);
        this.plugins.image.cancelPercentAttr.call(this);
        const originSize = (contextImage._element.getAttribute('data-origin') || '').split(',');
        const w = originSize[0];
        const h = originSize[1];
        if (originSize) {
            if (contextImage._onlyPercentage || /%$/.test(w) && (/%$/.test(h) || !/\d/.test(h))) this.plugins.image.setPercentSize.call(this, w, h);
            else this.plugins.image.setSize.call(this, w, h);
            // save current size
            this.plugins.resizing._module_saveCurrentSize.call(this, contextImage);
        }
    },
    /**
     * @Override resizing
     */ setPercentSize: function(w, h) {
        const contextImage = this.context.image;
        h = !!h && !/%$/.test(h) && !this.util.getNumber(h, 0) ? this.util.isNumber(h) ? h + '%' : h : this.util.isNumber(h) ? h + contextImage.sizeUnit : h || '';
        const heightPercentage = /%$/.test(h);
        contextImage._container.style.width = this.util.isNumber(w) ? w + '%' : w;
        contextImage._container.style.height = '';
        contextImage._cover.style.width = '100%';
        contextImage._cover.style.height = !heightPercentage ? '' : h;
        contextImage._element.style.width = '100%';
        contextImage._element.style.height = heightPercentage ? '' : h;
        contextImage._element.style.maxWidth = '';
        if (contextImage._align === 'center') this.plugins.image.setAlign.call(this, null, null, null, null);
        contextImage._element.setAttribute('data-percentage', w + ',' + h);
        this.plugins.resizing.setCaptionPosition.call(this, contextImage._element);
        // save current size
        this.plugins.resizing._module_saveCurrentSize.call(this, contextImage);
    },
    /**
     * @Override resizing
     */ cancelPercentAttr: function() {
        const contextImage = this.context.image;
        contextImage._cover.style.width = '';
        contextImage._cover.style.height = '';
        contextImage._container.style.width = '';
        contextImage._container.style.height = '';
        this.util.removeClass(contextImage._container, this.context.image._floatClassRegExp);
        this.util.addClass(contextImage._container, '__se__float-' + contextImage._align);
        if (contextImage._align === 'center') this.plugins.image.setAlign.call(this, null, null, null, null);
    },
    /**
     * @Override resizing
     */ setAlign: function(align, element, cover, container) {
        const contextImage = this.context.image;
        if (!align) align = contextImage._align;
        if (!element) element = contextImage._element;
        if (!cover) cover = contextImage._cover;
        if (!container) container = contextImage._container;
        if (/%$/.test(element.style.width) && align === 'center') {
            container.style.minWidth = '100%';
            cover.style.width = container.style.width;
        } else {
            container.style.minWidth = '';
            cover.style.width = this.context.resizing._rotateVertical ? element.style.height || element.offsetHeight : !element.style.width || element.style.width === 'auto' ? '' : element.style.width || '100%';
        }
        if (!this.util.hasClass(container, '__se__float-' + align)) {
            this.util.removeClass(container, contextImage._floatClassRegExp);
            this.util.addClass(container, '__se__float-' + align);
        }
        element.setAttribute('data-align', align);
    },
    /**
     * @Override dialog
     */ init: function() {
        const contextImage = this.context.image;
        if (contextImage.imgInputFile) contextImage.imgInputFile.value = '';
        if (contextImage.imgUrlFile) contextImage._v_src._linkValue = contextImage.previewSrc.textContent = contextImage.imgUrlFile.value = '';
        if (contextImage.imgInputFile && contextImage.imgUrlFile) {
            contextImage.imgUrlFile.removeAttribute('disabled');
            contextImage.previewSrc.style.textDecoration = '';
        }
        contextImage.altText.value = '';
        contextImage.modal.querySelector('input[name="suneditor_image_radio"][value="none"]').checked = true;
        contextImage.captionCheckEl.checked = false;
        contextImage._element = null;
        this.plugins.image.openTab.call(this, 'init');
        if (contextImage._resizing) {
            contextImage.inputX.value = this.options.imageWidth === contextImage._defaultSizeX ? '' : this.options.imageWidth;
            contextImage.inputY.value = this.options.imageHeight === contextImage._defaultSizeY ? '' : this.options.imageHeight;
            contextImage.proportion.checked = true;
            contextImage._ratio = false;
            contextImage._ratioX = 1;
            contextImage._ratioY = 1;
        }
        this.plugins.anchor.init.call(this, contextImage.anchorCtx);
    }
};
}),
"9361": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* harmony import */var _modules_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/dialog */"8784");
/* harmony import */var _modules_dialog__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_dialog__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */var _modules_anchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/_anchor */"4559");
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */ 'use strict';


var __WEBPACK_DEFAULT_EXPORT__ = {
    name: 'link',
    display: 'dialog',
    add: function(core) {
        core.addModule([
            (_modules_dialog__WEBPACK_IMPORTED_MODULE_0___default()),
            _modules_anchor__WEBPACK_IMPORTED_MODULE_1__["default"]
        ]);
        const context = core.context;
        const contextLink = context.link = {
            focusElement: null,
            _linkAnchor: null,
            anchorCtx: null
        };
        /** link dialog */ let link_dialog = this.setDialog(core);
        contextLink.modal = link_dialog;
        /** link controller */ let link_controller = this.setController_LinkButton(core);
        contextLink.linkController = link_controller;
        link_dialog.querySelector('form').addEventListener('submit', this.submit.bind(core));
        link_controller.addEventListener('click', this.onClick_linkController.bind(core));
        /** append html */ context.dialog.modal.appendChild(link_dialog);
        /** append controller */ context.element.relative.appendChild(link_controller);
        /** link event */ core.plugins.anchor.initEvent.call(core, 'link', link_dialog);
        contextLink.focusElement = context.anchor.caller.link.urlInput;
        /** empty memory */ link_dialog = null, link_controller = null;
    },
    /** dialog */ setDialog: function(core) {
        const lang = core.lang;
        const dialog = core.util.createElement('DIV');
        const icons = core.icons;
        dialog.className = 'se-dialog-content';
        dialog.style.display = 'none';
        let html = '<form><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + lang.dialogBox.close + '" aria-label="' + lang.dialogBox.close + '">' + icons.cancel + '</button>' + '<span class="se-modal-title">' + lang.dialogBox.linkBox.title + '</span>' + '</div>' + core.context.anchor.forms.innerHTML + '<div class="se-dialog-footer">' + '<button type="submit" class="se-btn-primary" title="' + lang.dialogBox.submitButton + '" aria-label="' + lang.dialogBox.submitButton + '"><span>' + lang.dialogBox.submitButton + '</span></button>' + '</div>' + '</form>';
        dialog.innerHTML = html;
        return dialog;
    },
    /** modify controller button */ setController_LinkButton: function(core) {
        const lang = core.lang;
        const icons = core.icons;
        const link_btn = core.util.createElement('DIV');
        link_btn.className = 'se-controller se-controller-link';
        link_btn.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="link-content"><span><a target="_blank" href=""></a>&nbsp;</span><div class="se-btn-group"><button type="button" data-command="update" tabindex="-1" class="se-btn se-tooltip">' + icons.edit + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.edit + '</span></span>' + '</button>' + '<button type="button" data-command="unlink" tabindex="-1" class="se-btn se-tooltip">' + icons.unlink + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.unlink + '</span></span>' + '</button>' + '<button type="button" data-command="delete" tabindex="-1" class="se-btn se-tooltip">' + icons.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.remove + '</span></span>' + '</button>' + '</div>' + '</div>';
        return link_btn;
    },
    /**
     * @Override dialog
     */ open: function() {
        this.plugins.dialog.open.call(this, 'link', 'link' === this.currentControllerName);
    },
    submit: function(e) {
        this.showLoading();
        e.preventDefault();
        e.stopPropagation();
        try {
            const oA = this.plugins.anchor.createAnchor.call(this, this.context.anchor.caller.link, false);
            if (oA === null) return;
            if (!this.context.dialog.updateModal) {
                const selectedFormats = this.getSelectedElements();
                if (selectedFormats.length > 1) {
                    const oFormat = this.util.createElement(selectedFormats[0].nodeName);
                    oFormat.appendChild(oA);
                    if (!this.insertNode(oFormat, null, true)) return;
                } else {
                    if (!this.insertNode(oA, null, true)) return;
                }
                this.setRange(oA.childNodes[0], 0, oA.childNodes[0], oA.textContent.length);
            } else {
                // set range
                const textNode = this.context.link._linkAnchor.childNodes[0];
                this.setRange(textNode, 0, textNode, textNode.textContent.length);
            }
        } finally{
            this.plugins.dialog.close.call(this);
            this.closeLoading();
            // history stack
            this.history.push(false);
        }
        return false;
    },
    /**
     * @Override core
     */ active: function(element) {
        if (!element) {
            if (this.controllerArray.indexOf(this.context.link.linkController) > -1) this.controllersOff();
        } else if (this.util.isAnchor(element) && element.getAttribute('data-image-link') === null) {
            if (this.controllerArray.indexOf(this.context.link.linkController) < 0) this.plugins.link.call_controller.call(this, element);
            return true;
        }
        return false;
    },
    /**
     * @Override dialog
     */ on: function(update) {
        this.plugins.anchor.on.call(this, this.context.anchor.caller.link, update);
    },
    call_controller: function(selectionATag) {
        this.editLink = this.context.link._linkAnchor = this.context.anchor.caller.link.linkAnchor = selectionATag;
        const linkBtn = this.context.link.linkController;
        const link = linkBtn.querySelector('a');
        link.href = selectionATag.href;
        link.title = selectionATag.textContent;
        link.textContent = selectionATag.textContent;
        this.util.addClass(selectionATag, 'on');
        this.setControllerPosition(linkBtn, selectionATag, 'bottom', {
            left: 0,
            top: 0
        });
        this.controllersOn(linkBtn, selectionATag, 'link', this.util.removeClass.bind(this.util, this.context.link._linkAnchor, 'on'));
    },
    onClick_linkController: function(e) {
        e.stopPropagation();
        const command = e.target.getAttribute('data-command') || e.target.parentNode.getAttribute('data-command');
        if (!command) return;
        e.preventDefault();
        if (/update/.test(command)) this.plugins.dialog.open.call(this, 'link', true);
        else if (/unlink/.test(command)) {
            const sc = this.util.getChildElement(this.context.link._linkAnchor, function(current) {
                return current.childNodes.length === 0 || current.nodeType === 3;
            }, false);
            const ec = this.util.getChildElement(this.context.link._linkAnchor, function(current) {
                return current.childNodes.length === 0 || current.nodeType === 3;
            }, true);
            this.setRange(sc, 0, ec, ec.textContent.length);
            this.nodeChange(null, null, [
                'A'
            ], false);
        } else {
            /** delete */ this.util.removeItem(this.context.link._linkAnchor);
            this.context.anchor.caller.link.linkAnchor = null;
            this.focus();
            // history stack
            this.history.push(false);
        }
        this.controllersOff();
    },
    /**
     * @Override dialog
     */ init: function() {
        this.context.link.linkController.style.display = 'none';
        this.plugins.anchor.init.call(this, this.context.anchor.caller.link);
    }
};
}),
"2377": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* harmony import */var _modules_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/dialog */"8784");
/* harmony import */var _modules_dialog__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_dialog__WEBPACK_IMPORTED_MODULE_0__);
'use strict';

const KATEX_WEBSITE = "https://katex.org/docs/supported.html";
var __WEBPACK_DEFAULT_EXPORT__ = {
    name: 'math',
    display: 'dialog',
    add: function(core) {
        core.addModule([
            (_modules_dialog__WEBPACK_IMPORTED_MODULE_0___default())
        ]);
        const context = core.context;
        context.math = {
            focusElement: null,
            previewElement: null,
            fontSizeElement: null,
            defaultFontSize: '',
            _mathExp: null
        };
        /** math dialog */ let math_dialog = this.setDialog(core);
        context.math.modal = math_dialog;
        context.math.focusElement = math_dialog.querySelector('.se-math-exp');
        context.math.previewElement = math_dialog.querySelector('.se-math-preview');
        context.math.fontSizeElement = math_dialog.querySelector('.se-math-size');
        context.math.focusElement.addEventListener(core.util.isIE ? 'textinput' : 'input', this._renderMathExp.bind(core, context.math), false);
        context.math.fontSizeElement.addEventListener('change', (function(e) {
            this.fontSize = e.target.value;
        }).bind(context.math.previewElement.style), false);
        /** math controller */ let math_controller = this.setController_MathButton(core);
        context.math.mathController = math_controller;
        context.math._mathExp = null;
        /** add event listeners */ math_dialog.querySelector('form').addEventListener('submit', this.submit.bind(core), false);
        math_controller.addEventListener('click', this.onClick_mathController.bind(core));
        context.math.previewElement.style.fontSize = context.math.defaultFontSize;
        /** append html */ context.dialog.modal.appendChild(math_dialog);
        context.element.relative.appendChild(math_controller);
        /** empty memory */ math_dialog = null, math_controller = null;
    },
    /** dialog */ setDialog: function(core) {
        const lang = core.lang;
        const dialog = core.util.createElement('DIV');
        const fontSize = core.options.mathFontSize;
        let defaultFontSize = fontSize[0].value;
        dialog.className = 'se-dialog-content';
        dialog.style.display = 'none';
        let html = '<form><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + lang.dialogBox.close + '" aria-label="' + lang.dialogBox.close + '">' + core.icons.cancel + '</button>' + '<span class="se-modal-title">' + lang.dialogBox.mathBox.title + '</span>' + '</div>' + '<div class="se-dialog-body">' + '<div class="se-dialog-form">' + '<label>' + lang.dialogBox.mathBox.inputLabel + ' (<a href="' + KATEX_WEBSITE + '" target="_blank">KaTeX</a>)</label>' + '<textarea class="se-input-form se-math-exp" type="text"></textarea>' + '</div>' + '<div class="se-dialog-form">' + '<label>' + lang.dialogBox.mathBox.fontSizeLabel + '</label>' + '<select class="se-input-select se-math-size">';
        for(let i = 0, len = fontSize.length, f; i < len; i++){
            f = fontSize[i];
            if (f.default) defaultFontSize = f.value;
            html += '<option value="' + f.value + '"' + (f.default ? ' selected' : '') + '>' + f.text + '</option>';
        }
        html += '</select></div><div class="se-dialog-form"><label>' + lang.dialogBox.mathBox.previewLabel + '</label>' + '<p class="se-math-preview"></p>' + '</div>' + '</div>' + '<div class="se-dialog-footer">' + '<button type="submit" class="se-btn-primary" title="' + lang.dialogBox.submitButton + '" aria-label="' + lang.dialogBox.submitButton + '"><span>' + lang.dialogBox.submitButton + '</span></button>' + '</div>' + '</form>';
        core.context.math.defaultFontSize = defaultFontSize;
        dialog.innerHTML = html;
        return dialog;
    },
    /** modify controller button */ setController_MathButton: function(core) {
        const lang = core.lang;
        const math_btn = core.util.createElement('DIV');
        math_btn.className = 'se-controller se-controller-link';
        math_btn.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="link-content"><div class="se-btn-group"><button type="button" data-command="update" tabindex="-1" class="se-btn se-tooltip">' + core.icons.edit + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.edit + '</span></span>' + '</button>' + '<button type="button" data-command="delete" tabindex="-1" class="se-btn se-tooltip">' + core.icons.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.remove + '</span></span>' + '</button>' + '</div>' + '</div>' + '';
        return math_btn;
    },
    /**
     * @Required @Override dialog
     */ open: function() {
        this.plugins.dialog.open.call(this, 'math', 'math' === this.currentControllerName);
    },
    /**
     * @Override core - managedTagsInfo
     */ managedTags: function() {
        return {
            className: 'katex',
            method: function(element) {
                if (!element.getAttribute('data-exp') || !this.options.katex) return;
                const dom = this._d.createRange().createContextualFragment(this.plugins.math._renderer.call(this, this.util.HTMLDecoder(element.getAttribute('data-exp'))));
                element.innerHTML = dom.querySelector('.katex').innerHTML;
                element.setAttribute('contenteditable', false);
            }
        };
    },
    _renderer: function(exp) {
        let result = '';
        try {
            this.util.removeClass(this.context.math.focusElement, 'se-error');
            result = this.options.katex.src.renderToString(exp, {
                throwOnError: true,
                displayMode: true
            });
        } catch (error) {
            this.util.addClass(this.context.math.focusElement, 'se-error');
            result = '<span class="se-math-katex-error">Katex syntax error. (Refer <a href="' + KATEX_WEBSITE + '" target="_blank">KaTeX</a>)</span>';
            console.warn('[SUNEDITOR.math.Katex.error] ', error);
        }
        return result;
    },
    _renderMathExp: function(contextMath, e) {
        contextMath.previewElement.innerHTML = this.plugins.math._renderer.call(this, e.target.value);
    },
    submit: function(e) {
        this.showLoading();
        e.preventDefault();
        e.stopPropagation();
        const submitAction = (function() {
            if (this.context.math.focusElement.value.trim().length === 0) return false;
            const contextMath = this.context.math;
            const mathExp = contextMath.focusElement.value;
            const katexEl = contextMath.previewElement.querySelector('.katex');
            if (!katexEl) return false;
            katexEl.className = '__se__katex ' + katexEl.className;
            katexEl.setAttribute('contenteditable', false);
            katexEl.setAttribute('data-exp', this.util.HTMLEncoder(mathExp));
            katexEl.setAttribute('data-font-size', contextMath.fontSizeElement.value);
            katexEl.style.fontSize = contextMath.fontSizeElement.value;
            if (!this.context.dialog.updateModal) {
                const selectedFormats = this.getSelectedElements();
                if (selectedFormats.length > 1) {
                    const oFormat = this.util.createElement(selectedFormats[0].nodeName);
                    oFormat.appendChild(katexEl);
                    if (!this.insertNode(oFormat, null, true)) return false;
                } else {
                    if (!this.insertNode(katexEl, null, true)) return false;
                }
                const empty = this.util.createTextNode(this.util.zeroWidthSpace);
                katexEl.parentNode.insertBefore(empty, katexEl.nextSibling);
                this.setRange(katexEl, 0, katexEl, 1);
            } else {
                const containerEl = this.util.getParentElement(contextMath._mathExp, '.katex');
                containerEl.parentNode.replaceChild(katexEl, containerEl);
                this.setRange(katexEl, 0, katexEl, 1);
            }
            contextMath.focusElement.value = '';
            contextMath.fontSizeElement.value = '1em';
            contextMath.previewElement.style.fontSize = '1em';
            contextMath.previewElement.innerHTML = '';
            return true;
        }).bind(this);
        try {
            if (submitAction()) {
                this.plugins.dialog.close.call(this);
                // history stack
                this.history.push(false);
            }
        } catch (e1) {
            this.plugins.dialog.close.call(this);
        } finally{
            this.closeLoading();
        }
        return false;
    },
    active: function(element) {
        if (!element) {
            if (this.controllerArray.indexOf(this.context.math.mathController) > -1) this.controllersOff();
        } else if (element.getAttribute('data-exp')) {
            if (this.controllerArray.indexOf(this.context.math.mathController) < 0) {
                this.setRange(element, 0, element, 1);
                this.plugins.math.call_controller.call(this, element);
            }
            return true;
        }
        return false;
    },
    on: function(update) {
        if (!update) this.plugins.math.init.call(this);
        else {
            const contextMath = this.context.math;
            if (contextMath._mathExp) {
                const exp = this.util.HTMLDecoder(contextMath._mathExp.getAttribute('data-exp'));
                const fontSize = contextMath._mathExp.getAttribute('data-font-size') || '1em';
                this.context.dialog.updateModal = true;
                contextMath.focusElement.value = exp;
                contextMath.fontSizeElement.value = fontSize;
                contextMath.previewElement.innerHTML = this.plugins.math._renderer.call(this, exp);
                contextMath.previewElement.style.fontSize = fontSize;
            }
        }
    },
    call_controller: function(mathTag) {
        this.context.math._mathExp = mathTag;
        const mathBtn = this.context.math.mathController;
        this.setControllerPosition(mathBtn, mathTag, 'bottom', {
            left: 0,
            top: 0
        });
        this.controllersOn(mathBtn, mathTag, 'math');
    },
    onClick_mathController: function(e) {
        e.stopPropagation();
        const command = e.target.getAttribute('data-command') || e.target.parentNode.getAttribute('data-command');
        if (!command) return;
        e.preventDefault();
        if (/update/.test(command)) {
            this.context.math.focusElement.value = this.util.HTMLDecoder(this.context.math._mathExp.getAttribute('data-exp'));
            this.plugins.dialog.open.call(this, 'math', true);
        } else {
            /** delete */ this.util.removeItem(this.context.math._mathExp);
            this.context.math._mathExp = null;
            this.focus();
            // history stack
            this.history.push(false);
        }
        this.controllersOff();
    },
    init: function() {
        const contextMath = this.context.math;
        contextMath.mathController.style.display = 'none';
        contextMath._mathExp = null;
        contextMath.focusElement.value = '';
        contextMath.previewElement.innerHTML = '';
    }
};
}),
"1490": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* harmony import */var _modules_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/dialog */"8784");
/* harmony import */var _modules_dialog__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_dialog__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */var _modules_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/component */"2204");
/* harmony import */var _modules_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */var _modules_resizing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/resizing */"5076");
/* harmony import */var _modules_resizing__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_resizing__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */var _modules_fileManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/fileManager */"2527");
/* harmony import */var _modules_fileManager__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_fileManager__WEBPACK_IMPORTED_MODULE_3__);
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */ 'use strict';




var __WEBPACK_DEFAULT_EXPORT__ = {
    name: 'video',
    display: 'dialog',
    add: function(core) {
        core.addModule([
            (_modules_dialog__WEBPACK_IMPORTED_MODULE_0___default()),
            (_modules_component__WEBPACK_IMPORTED_MODULE_1___default()),
            (_modules_resizing__WEBPACK_IMPORTED_MODULE_2___default()),
            (_modules_fileManager__WEBPACK_IMPORTED_MODULE_3___default())
        ]);
        const options = core.options;
        const context = core.context;
        const contextVideo = context.video = {
            _infoList: [],
            _infoIndex: 0,
            _uploadFileLength: 0,
            focusElement: null,
            sizeUnit: options._videoSizeUnit,
            _align: 'none',
            _floatClassRegExp: '__se__float\\-[a-z]+',
            _youtubeQuery: options.youtubeQuery,
            _videoRatio: options.videoRatio * 100 + '%',
            _defaultRatio: options.videoRatio * 100 + '%',
            _linkValue: '',
            // @require @Override component
            _element: null,
            _cover: null,
            _container: null,
            // @Override resizing properties
            inputX: null,
            inputY: null,
            _element_w: 1,
            _element_h: 1,
            _element_l: 0,
            _element_t: 0,
            _defaultSizeX: '100%',
            _defaultSizeY: options.videoRatio * 100 + '%',
            _origin_w: options.videoWidth === '100%' ? '' : options.videoWidth,
            _origin_h: options.videoHeight === '56.25%' ? '' : options.videoHeight,
            _proportionChecked: true,
            _resizing: options.videoResizing,
            _resizeDotHide: !options.videoHeightShow,
            _rotation: options.videoRotation,
            _alignHide: !options.videoAlignShow,
            _onlyPercentage: options.videoSizeOnlyPercentage,
            _ratio: false,
            _ratioX: 1,
            _ratioY: 1,
            _captionShow: false
        };
        /** video dialog */ let video_dialog = this.setDialog(core);
        contextVideo.modal = video_dialog;
        contextVideo.videoInputFile = video_dialog.querySelector('._se_video_file');
        contextVideo.videoUrlFile = video_dialog.querySelector('.se-input-url');
        contextVideo.focusElement = contextVideo.videoUrlFile || contextVideo.videoInputFile;
        contextVideo.preview = video_dialog.querySelector('.se-link-preview');
        /** add event listeners */ video_dialog.querySelector('form').addEventListener('submit', this.submit.bind(core));
        if (contextVideo.videoInputFile) video_dialog.querySelector('.se-dialog-files-edge-button').addEventListener('click', this._removeSelectedFiles.bind(contextVideo.videoInputFile, contextVideo.videoUrlFile, contextVideo.preview));
        if (contextVideo.videoInputFile && contextVideo.videoUrlFile) contextVideo.videoInputFile.addEventListener('change', this._fileInputChange.bind(contextVideo));
        if (contextVideo.videoUrlFile) contextVideo.videoUrlFile.addEventListener('input', this._onLinkPreview.bind(contextVideo.preview, contextVideo, options.linkProtocol));
        contextVideo.proportion = {};
        contextVideo.videoRatioOption = {};
        contextVideo.inputX = {};
        contextVideo.inputY = {};
        if (options.videoResizing) {
            contextVideo.proportion = video_dialog.querySelector('._se_video_check_proportion');
            contextVideo.videoRatioOption = video_dialog.querySelector('.se-video-ratio');
            contextVideo.inputX = video_dialog.querySelector('._se_video_size_x');
            contextVideo.inputY = video_dialog.querySelector('._se_video_size_y');
            contextVideo.inputX.value = options.videoWidth;
            contextVideo.inputY.value = options.videoHeight;
            contextVideo.inputX.addEventListener('keyup', this.setInputSize.bind(core, 'x'));
            contextVideo.inputY.addEventListener('keyup', this.setInputSize.bind(core, 'y'));
            contextVideo.inputX.addEventListener('change', this.setRatio.bind(core));
            contextVideo.inputY.addEventListener('change', this.setRatio.bind(core));
            contextVideo.proportion.addEventListener('change', this.setRatio.bind(core));
            contextVideo.videoRatioOption.addEventListener('change', this.setVideoRatio.bind(core));
            video_dialog.querySelector('.se-dialog-btn-revert').addEventListener('click', this.sizeRevert.bind(core));
        }
        /** append html */ context.dialog.modal.appendChild(video_dialog);
        /** empty memory */ video_dialog = null;
    },
    /** dialog */ setDialog: function(core) {
        const option = core.options;
        const lang = core.lang;
        const dialog = core.util.createElement('DIV');
        dialog.className = 'se-dialog-content';
        dialog.style.display = 'none';
        let html = '<form method="post" enctype="multipart/form-data"><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + lang.dialogBox.close + '" aria-label="' + lang.dialogBox.close + '">' + core.icons.cancel + '</button>' + '<span class="se-modal-title">' + lang.dialogBox.videoBox.title + '</span>' + '</div>' + '<div class="se-dialog-body">';
        if (option.videoFileInput) html += '<div class="se-dialog-form"><label>' + lang.dialogBox.videoBox.file + '</label>' + '<div class="se-dialog-form-files">' + '<input class="se-input-form _se_video_file" type="file" accept="' + option.videoAccept + '"' + (option.videoMultipleFile ? ' multiple="multiple"' : '') + '/>' + '<button type="button" data-command="filesRemove" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + lang.controller.remove + '" aria-label="' + lang.controller.remove + '">' + core.icons.cancel + '</button>' + '</div>' + '</div>';
        if (option.videoUrlInput) html += '<div class="se-dialog-form"><label>' + lang.dialogBox.videoBox.url + '</label>' + '<input class="se-input-form se-input-url" type="text" />' + '<pre class="se-link-preview"></pre>' + '</div>';
        if (option.videoResizing) {
            const ratioList = option.videoRatioList || [
                {
                    name: '16:9',
                    value: 0.5625
                },
                {
                    name: '4:3',
                    value: 0.75
                },
                {
                    name: '21:9',
                    value: 0.4285
                }
            ];
            const ratio = option.videoRatio;
            const onlyPercentage = option.videoSizeOnlyPercentage;
            const onlyPercentDisplay = onlyPercentage ? ' style="display: none !important;"' : '';
            const heightDisplay = !option.videoHeightShow ? ' style="display: none !important;"' : '';
            const ratioDisplay = !option.videoRatioShow ? ' style="display: none !important;"' : '';
            const onlyWidthDisplay = !onlyPercentage && !option.videoHeightShow && !option.videoRatioShow ? ' style="display: none !important;"' : '';
            html += '<div class="se-dialog-form"><div class="se-dialog-size-text"><label class="size-w">' + lang.dialogBox.width + '</label>' + '<label class="se-dialog-size-x">&nbsp;</label>' + '<label class="size-h"' + heightDisplay + '>' + lang.dialogBox.height + '</label>' + '<label class="size-h"' + ratioDisplay + '>(' + lang.dialogBox.ratio + ')</label>' + '</div>' + '<input class="se-input-control _se_video_size_x" placeholder="100%"' + (onlyPercentage ? ' type="number" min="1"' : 'type="text"') + (onlyPercentage ? ' max="100"' : '') + '/>' + '<label class="se-dialog-size-x"' + onlyWidthDisplay + '>' + (onlyPercentage ? '%' : 'x') + '</label>' + '<input class="se-input-control _se_video_size_y" placeholder="' + option.videoRatio * 100 + '%"' + (onlyPercentage ? ' type="number" min="1"' : 'type="text"') + (onlyPercentage ? ' max="100"' : '') + heightDisplay + '/>' + '<select class="se-input-select se-video-ratio" title="' + lang.dialogBox.ratio + '" aria-label="' + lang.dialogBox.ratio + '"' + ratioDisplay + '>';
            if (!heightDisplay) html += '<option value=""> - </option>';
            for(let i = 0, len = ratioList.length; i < len; i++)html += '<option value="' + ratioList[i].value + '"' + (ratio.toString() === ratioList[i].value.toString() ? ' selected' : '') + '>' + ratioList[i].name + '</option>';
            html += '</select><button type="button" title="' + lang.dialogBox.revertButton + '" aria-label="' + lang.dialogBox.revertButton + '" class="se-btn se-dialog-btn-revert" style="float: right;">' + core.icons.revert + '</button>' + '</div>' + '<div class="se-dialog-form se-dialog-form-footer"' + onlyPercentDisplay + onlyWidthDisplay + '>' + '<label><input type="checkbox" class="se-dialog-btn-check _se_video_check_proportion" checked/>&nbsp;' + lang.dialogBox.proportion + '</label>' + '</div>';
        }
        html += '</div><div class="se-dialog-footer"><div' + (option.videoAlignShow ? '' : ' style="display: none"') + '>' + '<label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="none" checked>' + lang.dialogBox.basic + '</label>' + '<label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="left">' + lang.dialogBox.left + '</label>' + '<label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="center">' + lang.dialogBox.center + '</label>' + '<label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="right">' + lang.dialogBox.right + '</label>' + '</div>' + '<button type="submit" class="se-btn-primary" title="' + lang.dialogBox.submitButton + '" aria-label="' + lang.dialogBox.submitButton + '"><span>' + lang.dialogBox.submitButton + '</span></button>' + '</div>' + '</form>';
        dialog.innerHTML = html;
        return dialog;
    },
    _fileInputChange: function() {
        if (!this.videoInputFile.value) {
            this.videoUrlFile.removeAttribute('disabled');
            this.preview.style.textDecoration = '';
        } else {
            this.videoUrlFile.setAttribute('disabled', true);
            this.preview.style.textDecoration = 'line-through';
        }
    },
    _removeSelectedFiles: function(urlInput, preview) {
        this.value = '';
        if (urlInput) {
            urlInput.removeAttribute('disabled');
            preview.style.textDecoration = '';
        }
    },
    _onLinkPreview: function(context, protocol, e) {
        const value = e.target.value.trim();
        if (/^<iframe.*\/iframe>$/.test(value)) {
            context._linkValue = value;
            this.textContent = '<IFrame :src=".."></IFrame>';
        } else context._linkValue = this.textContent = !value ? '' : protocol && value.indexOf('://') === -1 && value.indexOf('#') !== 0 ? protocol + value : value.indexOf('://') === -1 ? '/' + value : value;
    },
    _setTagAttrs: function(element) {
        element.setAttribute('controls', true);
        const attrs = this.options.videoTagAttrs;
        if (!attrs) return;
        for(let key in attrs){
            if (!this.util.hasOwn(attrs, key)) continue;
            element.setAttribute(key, attrs[key]);
        }
    },
    createVideoTag: function() {
        const videoTag = this.util.createElement('VIDEO');
        this.plugins.video._setTagAttrs.call(this, videoTag);
        return videoTag;
    },
    _setIframeAttrs: function(element) {
        element.frameBorder = '0';
        element.allowFullscreen = true;
        const attrs = this.options.videoIframeAttrs;
        if (!attrs) return;
        for(let key in attrs){
            if (!this.util.hasOwn(attrs, key)) continue;
            element.setAttribute(key, attrs[key]);
        }
    },
    createIframeTag: function() {
        const iframeTag = this.util.createElement('IFRAME');
        this.plugins.video._setIframeAttrs.call(this, iframeTag);
        return iframeTag;
    },
    /**
     * @Override @Required fileManager
     */ fileTags: [
        'iframe',
        'video'
    ],
    /**
     * @Override core, resizing, fileManager
     * @description It is called from core.selectComponent.
     * @param {Element} element Target element
     */ select: function(element) {
        this.plugins.video.onModifyMode.call(this, element, this.plugins.resizing.call_controller_resize.call(this, element, 'video'));
    },
    /**
     * @Override fileManager, resizing
     */ destroy: function(element) {
        const frame = element || this.context.video._element;
        const container = this.context.video._container;
        const dataIndex = frame.getAttribute('data-index') * 1;
        let focusEl = container.previousElementSibling || container.nextElementSibling;
        const emptyDiv = container.parentNode;
        this.util.removeItem(container);
        this.plugins.video.init.call(this);
        this.controllersOff();
        if (emptyDiv !== this.context.element.wysiwyg) this.util.removeItemAllParents(emptyDiv, function(current) {
            return current.childNodes.length === 0;
        }, null);
        // focus
        this.focusEdge(focusEl);
        // event
        this.plugins.fileManager.deleteInfo.call(this, 'video', dataIndex, this.functions.onVideoUpload);
        // history stack
        this.history.push(false);
    },
    /**
     * @Required @Override dialog
     */ on: function(update) {
        const contextVideo = this.context.video;
        if (!update) {
            contextVideo.inputX.value = contextVideo._origin_w = this.options.videoWidth === contextVideo._defaultSizeX ? '' : this.options.videoWidth;
            contextVideo.inputY.value = contextVideo._origin_h = this.options.videoHeight === contextVideo._defaultSizeY ? '' : this.options.videoHeight;
            contextVideo.proportion.disabled = true;
            if (contextVideo.videoInputFile && this.options.videoMultipleFile) contextVideo.videoInputFile.setAttribute('multiple', 'multiple');
        } else if (contextVideo.videoInputFile && this.options.videoMultipleFile) contextVideo.videoInputFile.removeAttribute('multiple');
        if (contextVideo._resizing) this.plugins.video.setVideoRatioSelect.call(this, contextVideo._origin_h || contextVideo._defaultRatio);
    },
    /**
     * @Required @Override dialog
     */ open: function() {
        this.plugins.dialog.open.call(this, 'video', 'video' === this.currentControllerName);
    },
    setVideoRatio: function(e) {
        const contextVideo = this.context.video;
        const value = e.target.options[e.target.selectedIndex].value;
        contextVideo._defaultSizeY = contextVideo._videoRatio = !value ? contextVideo._defaultSizeY : value * 100 + '%';
        contextVideo.inputY.placeholder = !value ? '' : value * 100 + '%';
        contextVideo.inputY.value = '';
    },
    /**
     * @Override resizing
     * @param {String} xy 'x': width, 'y': height
     * @param {KeyboardEvent} e Event object
     */ setInputSize: function(xy, e) {
        if (e && e.keyCode === 32) {
            e.preventDefault();
            return;
        }
        const contextVideo = this.context.video;
        this.plugins.resizing._module_setInputSize.call(this, contextVideo, xy);
        if (xy === 'y') this.plugins.video.setVideoRatioSelect.call(this, e.target.value || contextVideo._defaultRatio);
    },
    /**
     * @Override resizing
     */ setRatio: function() {
        this.plugins.resizing._module_setRatio.call(this, this.context.video);
    },
    submit: function(e) {
        const contextVideo = this.context.video;
        const videoPlugin = this.plugins.video;
        e.preventDefault();
        e.stopPropagation();
        contextVideo._align = contextVideo.modal.querySelector('input[name="suneditor_video_radio"]:checked').value;
        try {
            if (contextVideo.videoInputFile && contextVideo.videoInputFile.files.length > 0) {
                this.showLoading();
                videoPlugin.submitAction.call(this, this.context.video.videoInputFile.files);
            } else if (contextVideo.videoUrlFile && contextVideo._linkValue.length > 0) {
                this.showLoading();
                videoPlugin.setup_url.call(this, contextVideo._linkValue);
            }
        } catch (error) {
            this.closeLoading();
            throw Error('[SUNEDITOR.video.submit.fail] cause : "' + error.message + '"');
        } finally{
            this.plugins.dialog.close.call(this);
        }
        return false;
    },
    submitAction: function(fileList) {
        if (fileList.length === 0) return;
        let fileSize = 0;
        let files = [];
        for(let i = 0, len = fileList.length; i < len; i++)if (/video/i.test(fileList[i].type)) {
            files.push(fileList[i]);
            fileSize += fileList[i].size;
        }
        const limitSize = this.options.videoUploadSizeLimit;
        if (limitSize > 0) {
            let infoSize = 0;
            const videosInfo = this.context.video._infoList;
            for(let i = 0, len = videosInfo.length; i < len; i++)infoSize += videosInfo[i].size * 1;
            if (fileSize + infoSize > limitSize) {
                this.closeLoading();
                const err = '[SUNEDITOR.videoUpload.fail] Size of uploadable total videos: ' + limitSize / 1000 + 'KB';
                if (typeof this.functions.onVideoUploadError !== 'function' || this.functions.onVideoUploadError(err, {
                    'limitSize': limitSize,
                    'currentSize': infoSize,
                    'uploadSize': fileSize
                }, this)) this.functions.noticeOpen(err);
                return;
            }
        }
        const contextVideo = this.context.video;
        contextVideo._uploadFileLength = files.length;
        const info = {
            inputWidth: contextVideo.inputX.value,
            inputHeight: contextVideo.inputY.value,
            align: contextVideo._align,
            isUpdate: this.context.dialog.updateModal,
            element: contextVideo._element
        };
        if (typeof this.functions.onVideoUploadBefore === 'function') {
            const result = this.functions.onVideoUploadBefore(files, info, this, (function(data) {
                if (data && this._w.Array.isArray(data.result)) this.plugins.video.register.call(this, info, data);
                else this.plugins.video.upload.call(this, info, data);
            }).bind(this));
            if (typeof result === 'undefined') return;
            if (!result) {
                this.closeLoading();
                return;
            }
            if (typeof result === 'object' && result.length > 0) files = result;
        }
        this.plugins.video.upload.call(this, info, files);
    },
    error: function(message, response) {
        this.closeLoading();
        if (typeof this.functions.onVideoUploadError !== 'function' || this.functions.onVideoUploadError(message, response, this)) {
            this.functions.noticeOpen(message);
            throw Error('[SUNEDITOR.plugin.video.error] response: ' + message);
        }
    },
    upload: function(info, files) {
        if (!files) {
            this.closeLoading();
            return;
        }
        if (typeof files === 'string') {
            this.plugins.video.error.call(this, files, null);
            return;
        }
        const videoUploadUrl = this.options.videoUploadUrl;
        const filesLen = this.context.dialog.updateModal ? 1 : files.length;
        // server upload
        if (typeof videoUploadUrl === 'string' && videoUploadUrl.length > 0) {
            const formData = new FormData();
            for(let i = 0; i < filesLen; i++)formData.append('file-' + i, files[i]);
            this.plugins.fileManager.upload.call(this, videoUploadUrl, this.options.videoUploadHeader, formData, this.plugins.video.callBack_videoUpload.bind(this, info), this.functions.onVideoUploadError);
        } else throw Error('[SUNEDITOR.videoUpload.fail] cause : There is no "videoUploadUrl" option.');
    },
    callBack_videoUpload: function(info, xmlHttp) {
        if (typeof this.functions.videoUploadHandler === 'function') this.functions.videoUploadHandler(xmlHttp, info, this);
        else {
            const response = JSON.parse(xmlHttp.responseText);
            if (response.errorMessage) this.plugins.video.error.call(this, response.errorMessage, response);
            else this.plugins.video.register.call(this, info, response);
        }
    },
    register: function(info, response) {
        const fileList = response.result;
        const videoTag = this.plugins.video.createVideoTag.call(this);
        for(let i = 0, len = fileList.length, file; i < len; i++){
            file = {
                name: fileList[i].name,
                size: fileList[i].size
            };
            this.plugins.video.create_video.call(this, info.isUpdate ? info.element : videoTag.cloneNode(false), fileList[i].url, info.inputWidth, info.inputHeight, info.align, file, info.isUpdate);
        }
        this.closeLoading();
    },
    setup_url: function(url) {
        try {
            const contextVideo = this.context.video;
            if (!url) url = contextVideo._linkValue;
            if (!url) return false;
            /** iframe source */ if (/^<iframe.*\/iframe>$/.test(url)) {
                const oIframe = new this._w.DOMParser().parseFromString(url, 'text/html').querySelector('iframe');
                url = oIframe.src;
                if (url.length === 0) return false;
            }
            /** youtube */ if (/youtu\.?be/.test(url)) {
                if (!/^http/.test(url)) url = 'https://' + url;
                url = url.replace('watch?v=', '');
                if (!/^\/\/.+\/embed\//.test(url)) url = url.replace(url.match(/\/\/.+\//)[0], '//www.youtube.com/embed/').replace('&', '?&');
                if (contextVideo._youtubeQuery.length > 0) {
                    if (/\?/.test(url)) {
                        const splitUrl = url.split('?');
                        url = splitUrl[0] + '?' + contextVideo._youtubeQuery + '&' + splitUrl[1];
                    } else url += '?' + contextVideo._youtubeQuery;
                }
            } else if (/vimeo\.com/.test(url)) {
                if (url.endsWith('/')) url = url.slice(0, -1);
                url = 'https://player.vimeo.com/video/' + url.slice(url.lastIndexOf('/') + 1);
            }
            this.plugins.video.create_video.call(this, this.plugins.video[!/embed|iframe|player|\/e\/|\.php|\.html?/.test(url) && !/vimeo\.com/.test(url) ? "createVideoTag" : "createIframeTag"].call(this), url, contextVideo.inputX.value, contextVideo.inputY.value, contextVideo._align, null, this.context.dialog.updateModal);
        } catch (error) {
            throw Error('[SUNEDITOR.video.upload.fail] cause : "' + error.message + '"');
        } finally{
            this.closeLoading();
        }
    },
    create_video: function(oFrame, src, width, height, align, file, isUpdate) {
        this.context.resizing._resize_plugin = 'video';
        const contextVideo = this.context.video;
        let cover = null;
        let container = null;
        let init = false;
        /** update */ if (isUpdate) {
            oFrame = contextVideo._element;
            if (oFrame.src !== src) {
                init = true;
                const isYoutube = /youtu\.?be/.test(src);
                const isVimeo = /vimeo\.com/.test(src);
                if ((isYoutube || isVimeo) && !/^iframe$/i.test(oFrame.nodeName)) {
                    const newTag = this.plugins.video.createIframeTag.call(this);
                    newTag.src = src;
                    oFrame.parentNode.replaceChild(newTag, oFrame);
                    contextVideo._element = oFrame = newTag;
                } else if (!isYoutube && !isVimeo && !/^videoo$/i.test(oFrame.nodeName)) {
                    const newTag = this.plugins.video.createVideoTag.call(this);
                    newTag.src = src;
                    oFrame.parentNode.replaceChild(newTag, oFrame);
                    contextVideo._element = oFrame = newTag;
                } else oFrame.src = src;
            }
            container = contextVideo._container;
            cover = this.util.getParentElement(oFrame, 'FIGURE');
        } else {
            init = true;
            oFrame.src = src;
            contextVideo._element = oFrame;
            cover = this.plugins.component.set_cover.call(this, oFrame);
            container = this.plugins.component.set_container.call(this, cover, 'se-video-container');
        }
        /** rendering */ contextVideo._cover = cover;
        contextVideo._container = container;
        const inputUpdate = this.plugins.resizing._module_getSizeX.call(this, contextVideo) !== (width || contextVideo._defaultSizeX) || this.plugins.resizing._module_getSizeY.call(this, contextVideo) !== (height || contextVideo._videoRatio);
        const changeSize = !isUpdate || inputUpdate;
        if (contextVideo._resizing) {
            this.context.video._proportionChecked = contextVideo.proportion.checked;
            oFrame.setAttribute('data-proportion', contextVideo._proportionChecked);
        }
        // size
        let isPercent = false;
        if (changeSize) isPercent = this.plugins.video.applySize.call(this);
        // align
        if (!(isPercent && align === 'center')) this.plugins.video.setAlign.call(this, null, oFrame, cover, container);
        let changed = true;
        if (!isUpdate) {
            changed = this.insertComponent(container, false, true, !this.options.mediaAutoSelect);
            if (!this.options.mediaAutoSelect) {
                const line = this.appendFormatTag(container, null);
                if (line) this.setRange(line, 0, line, 0);
            }
        } else if (contextVideo._resizing && this.context.resizing._rotateVertical && changeSize) this.plugins.resizing.setTransformSize.call(this, oFrame, null, null);
        if (changed) {
            if (init) this.plugins.fileManager.setInfo.call(this, 'video', oFrame, this.functions.onVideoUpload, file, true);
            if (isUpdate) {
                this.selectComponent(oFrame, 'video');
                // history stack
                this.history.push(false);
            }
        }
        this.context.resizing._resize_plugin = '';
    },
    _update_videoCover: function(oFrame) {
        if (!oFrame) return;
        const contextVideo = this.context.video;
        if (/^video$/i.test(oFrame.nodeName)) this.plugins.video._setTagAttrs.call(this, oFrame);
        else this.plugins.video._setIframeAttrs.call(this, oFrame);
        let existElement = this.util.isRangeFormatElement(oFrame.parentNode) || this.util.isWysiwygDiv(oFrame.parentNode) ? oFrame : this.util.getFormatElement(oFrame) || oFrame;
        const prevFrame = oFrame;
        contextVideo._element = oFrame = oFrame.cloneNode(true);
        const cover = contextVideo._cover = this.plugins.component.set_cover.call(this, oFrame);
        const container = contextVideo._container = this.plugins.component.set_container.call(this, cover, 'se-video-container');
        try {
            const figcaption = existElement.querySelector('figcaption');
            let caption = null;
            if (!!figcaption) {
                caption = this.util.createElement('DIV');
                caption.innerHTML = figcaption.innerHTML;
                this.util.removeItem(figcaption);
            }
            // size
            const size = (oFrame.getAttribute('data-size') || oFrame.getAttribute('data-origin') || '').split(',');
            this.plugins.video.applySize.call(this, size[0] || prevFrame.style.width || prevFrame.width || '', size[1] || prevFrame.style.height || prevFrame.height || '');
            // align
            const format = this.util.getFormatElement(prevFrame);
            if (format) contextVideo._align = format.style.textAlign || format.style.float;
            this.plugins.video.setAlign.call(this, null, oFrame, cover, container);
            if (this.util.getParentElement(prevFrame, this.util.isNotCheckingNode)) prevFrame.parentNode.replaceChild(container, prevFrame);
            else if (this.util.isListCell(existElement)) {
                const refer = this.util.getParentElement(prevFrame, function(current) {
                    return current.parentNode === existElement;
                });
                existElement.insertBefore(container, refer);
                this.util.removeItem(prevFrame);
                this.util.removeEmptyNode(refer, null, true);
            } else if (this.util.isFormatElement(existElement)) {
                const refer = this.util.getParentElement(prevFrame, function(current) {
                    return current.parentNode === existElement;
                });
                existElement = this.util.splitElement(existElement, refer);
                existElement.parentNode.insertBefore(container, existElement);
                this.util.removeItem(prevFrame);
                this.util.removeEmptyNode(existElement, null, true);
                if (existElement.children.length === 0) existElement.innerHTML = this.util.htmlRemoveWhiteSpace(existElement.innerHTML);
            } else existElement.parentNode.replaceChild(container, existElement);
            if (!!caption) existElement.parentNode.insertBefore(caption, container.nextElementSibling);
        } catch (error) {
            console.warn('[SUNEDITOR.video.error] Maybe the video tag is nested.', error);
        }
        this.plugins.fileManager.setInfo.call(this, 'video', oFrame, this.functions.onVideoUpload, null, true);
        this.plugins.video.init.call(this);
    },
    /**
     * @Required @Override fileManager, resizing
     */ onModifyMode: function(element, size) {
        const contextVideo = this.context.video;
        contextVideo._element = element;
        contextVideo._cover = this.util.getParentElement(element, 'FIGURE');
        contextVideo._container = this.util.getParentElement(element, this.util.isMediaComponent);
        contextVideo._align = element.style.float || element.getAttribute('data-align') || 'none';
        element.style.float = '';
        if (size) {
            contextVideo._element_w = size.w;
            contextVideo._element_h = size.h;
            contextVideo._element_t = size.t;
            contextVideo._element_l = size.l;
        }
        let origin = contextVideo._element.getAttribute('data-size') || contextVideo._element.getAttribute('data-origin');
        let w, h;
        if (origin) {
            origin = origin.split(',');
            w = origin[0];
            h = origin[1];
        } else if (size) {
            w = size.w;
            h = size.h;
        }
        contextVideo._origin_w = w || element.style.width || element.width || '';
        contextVideo._origin_h = h || element.style.height || element.height || '';
    },
    /**
     * @Required @Override fileManager, resizing
     */ openModify: function(notOpen) {
        const contextVideo = this.context.video;
        if (contextVideo.videoUrlFile) contextVideo._linkValue = contextVideo.preview.textContent = contextVideo.videoUrlFile.value = contextVideo._element.src || (contextVideo._element.querySelector('source') || '').src || '';
        (contextVideo.modal.querySelector('input[name="suneditor_video_radio"][value="' + contextVideo._align + '"]') || contextVideo.modal.querySelector('input[name="suneditor_video_radio"][value="none"]')).checked = true;
        if (contextVideo._resizing) {
            this.plugins.resizing._module_setModifyInputSize.call(this, contextVideo, this.plugins.video);
            const y = contextVideo._videoRatio = this.plugins.resizing._module_getSizeY.call(this, contextVideo);
            const ratioSelected = this.plugins.video.setVideoRatioSelect.call(this, y);
            if (!ratioSelected) contextVideo.inputY.value = contextVideo._onlyPercentage ? this.util.getNumber(y, 2) : y;
        }
        if (!notOpen) this.plugins.dialog.open.call(this, 'video', true);
    },
    setVideoRatioSelect: function(value) {
        let ratioSelected = false;
        const contextVideo = this.context.video;
        const ratioOptions = contextVideo.videoRatioOption.options;
        if (/%$/.test(value) || contextVideo._onlyPercentage) value = this.util.getNumber(value, 2) / 100 + '';
        else if (!this.util.isNumber(value) || value * 1 >= 1) value = '';
        contextVideo.inputY.placeholder = '';
        for(let i = 0, len = ratioOptions.length; i < len; i++)if (ratioOptions[i].value === value) {
            ratioSelected = ratioOptions[i].selected = true;
            contextVideo.inputY.placeholder = !value ? '' : value * 100 + '%';
        } else ratioOptions[i].selected = false;
        return ratioSelected;
    },
    /**
     * @Override fileManager
     */ checkFileInfo: function() {
        this.plugins.fileManager.checkInfo.call(this, 'video', [
            'iframe',
            'video'
        ], this.functions.onVideoUpload, this.plugins.video._update_videoCover.bind(this), true);
    },
    /**
     * @Override fileManager
     */ resetFileInfo: function() {
        this.plugins.fileManager.resetInfo.call(this, 'video', this.functions.onVideoUpload);
    },
    /**
     * @Override fileManager
     */ applySize: function(w, h) {
        const contextVideo = this.context.video;
        if (!w) w = contextVideo.inputX.value || this.options.videoWidth;
        if (!h) h = contextVideo.inputY.value || this.options.videoHeight;
        if (contextVideo._onlyPercentage || /%$/.test(w) || !w) {
            this.plugins.video.setPercentSize.call(this, w || '100%', h || (/%$/.test(contextVideo._videoRatio) ? contextVideo._videoRatio : contextVideo._defaultRatio));
            return true;
        } else if ((!w || w === 'auto') && (!h || h === 'auto')) this.plugins.video.setAutoSize.call(this);
        else this.plugins.video.setSize.call(this, w, h || contextVideo._videoRatio || contextVideo._defaultRatio, false);
        return false;
    },
    /**
     * @Override resizing
     */ sizeRevert: function() {
        this.plugins.resizing._module_sizeRevert.call(this, this.context.video);
    },
    /**
     * @Override resizing
     */ setSize: function(w, h, notResetPercentage, direction) {
        const contextVideo = this.context.video;
        const onlyW = /^(rw|lw)$/.test(direction);
        const onlyH = /^(th|bh)$/.test(direction);
        if (!onlyH) w = this.util.getNumber(w, 0);
        if (!onlyW) h = this.util.isNumber(h) ? h + contextVideo.sizeUnit : !h ? '' : h;
        w = w ? w + contextVideo.sizeUnit : '';
        if (!onlyH) contextVideo._element.style.width = w;
        if (!onlyW) contextVideo._cover.style.paddingBottom = contextVideo._cover.style.height = h;
        if (!onlyH && !/%$/.test(w)) {
            contextVideo._cover.style.width = w;
            contextVideo._container.style.width = '';
        }
        if (!onlyW && !/%$/.test(h)) contextVideo._element.style.height = h;
        else contextVideo._element.style.height = '';
        if (!notResetPercentage) contextVideo._element.removeAttribute('data-percentage');
        // save current size
        this.plugins.resizing._module_saveCurrentSize.call(this, contextVideo);
    },
    /**
     * @Override resizing
     */ setAutoSize: function() {
        this.plugins.video.setPercentSize.call(this, 100, this.context.video._defaultRatio);
    },
    /**
     * @Override resizing
     */ setOriginSize: function(dataSize) {
        const contextVideo = this.context.video;
        contextVideo._element.removeAttribute('data-percentage');
        this.plugins.resizing.resetTransform.call(this, contextVideo._element);
        this.plugins.video.cancelPercentAttr.call(this);
        const originSize = ((dataSize ? contextVideo._element.getAttribute('data-size') : '') || contextVideo._element.getAttribute('data-origin') || '').split(',');
        if (originSize) {
            const w = originSize[0];
            const h = originSize[1];
            if (contextVideo._onlyPercentage || /%$/.test(w) && (/%$/.test(h) || !/\d/.test(h))) this.plugins.video.setPercentSize.call(this, w, h);
            else this.plugins.video.setSize.call(this, w, h);
            // save current size
            this.plugins.resizing._module_saveCurrentSize.call(this, contextVideo);
        }
    },
    /**
     * @Override resizing
     */ setPercentSize: function(w, h) {
        const contextVideo = this.context.video;
        h = !!h && !/%$/.test(h) && !this.util.getNumber(h, 0) ? this.util.isNumber(h) ? h + '%' : h : this.util.isNumber(h) ? h + contextVideo.sizeUnit : h || contextVideo._defaultRatio;
        contextVideo._container.style.width = this.util.isNumber(w) ? w + '%' : w;
        contextVideo._container.style.height = '';
        contextVideo._cover.style.width = '100%';
        contextVideo._cover.style.height = h;
        contextVideo._cover.style.paddingBottom = h;
        contextVideo._element.style.width = '100%';
        contextVideo._element.style.height = '100%';
        contextVideo._element.style.maxWidth = '';
        if (contextVideo._align === 'center') this.plugins.video.setAlign.call(this, null, null, null, null);
        contextVideo._element.setAttribute('data-percentage', w + ',' + h);
        // save current size
        this.plugins.resizing._module_saveCurrentSize.call(this, contextVideo);
    },
    /**
     * @Override resizing
     */ cancelPercentAttr: function() {
        const contextVideo = this.context.video;
        contextVideo._cover.style.width = '';
        contextVideo._cover.style.height = '';
        contextVideo._cover.style.paddingBottom = '';
        contextVideo._container.style.width = '';
        contextVideo._container.style.height = '';
        this.util.removeClass(contextVideo._container, this.context.video._floatClassRegExp);
        this.util.addClass(contextVideo._container, '__se__float-' + contextVideo._align);
        if (contextVideo._align === 'center') this.plugins.video.setAlign.call(this, null, null, null, null);
    },
    /**
     * @Override resizing
     */ setAlign: function(align, element, cover, container) {
        const contextVideo = this.context.video;
        if (!align) align = contextVideo._align;
        if (!element) element = contextVideo._element;
        if (!cover) cover = contextVideo._cover;
        if (!container) container = contextVideo._container;
        if (/%$/.test(element.style.width) && align === 'center') {
            container.style.minWidth = '100%';
            cover.style.width = container.style.width;
            cover.style.height = cover.style.height;
            cover.style.paddingBottom = !/%$/.test(cover.style.height) ? cover.style.height : this.util.getNumber(this.util.getNumber(cover.style.height, 2) / 100 * this.util.getNumber(cover.style.width, 2), 2) + '%';
        } else {
            container.style.minWidth = '';
            cover.style.width = this.context.resizing._rotateVertical ? element.style.height || element.offsetHeight : element.style.width || '100%';
            cover.style.paddingBottom = cover.style.height;
        }
        if (!this.util.hasClass(container, '__se__float-' + align)) {
            this.util.removeClass(container, contextVideo._floatClassRegExp);
            this.util.addClass(container, '__se__float-' + align);
        }
        element.setAttribute('data-align', align);
    },
    /**
     * @Override dialog
     */ init: function() {
        const contextVideo = this.context.video;
        if (contextVideo.videoInputFile) contextVideo.videoInputFile.value = '';
        if (contextVideo.videoUrlFile) contextVideo._linkValue = contextVideo.preview.textContent = contextVideo.videoUrlFile.value = '';
        if (contextVideo.videoInputFile && contextVideo.videoUrlFile) {
            contextVideo.videoUrlFile.removeAttribute('disabled');
            contextVideo.preview.style.textDecoration = '';
        }
        contextVideo._origin_w = this.options.videoWidth;
        contextVideo._origin_h = this.options.videoHeight;
        contextVideo.modal.querySelector('input[name="suneditor_video_radio"][value="none"]').checked = true;
        if (contextVideo._resizing) {
            contextVideo.inputX.value = this.options.videoWidth === contextVideo._defaultSizeX ? '' : this.options.videoWidth;
            contextVideo.inputY.value = this.options.videoHeight === contextVideo._defaultSizeY ? '' : this.options.videoHeight;
            contextVideo.proportion.checked = true;
            contextVideo.proportion.disabled = true;
            this.plugins.video.setVideoRatioSelect.call(this, contextVideo._defaultRatio);
        }
    }
};
}),
"7793": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* harmony import */var _modules_fileBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/fileBrowser */"1665");
/* harmony import */var _modules_fileBrowser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_fileBrowser__WEBPACK_IMPORTED_MODULE_0__);
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */ 'use strict';

var __WEBPACK_DEFAULT_EXPORT__ = {
    name: 'imageGallery',
    /**
     * @description Constructor
     * @param {Object} core Core object 
     */ add: function(core) {
        core.addModule([
            (_modules_fileBrowser__WEBPACK_IMPORTED_MODULE_0___default())
        ]);
        const context = core.context;
        context.imageGallery = {
            title: core.lang.toolbar.imageGallery,
            url: core.options.imageGalleryUrl,
            header: core.options.imageGalleryHeader,
            listClass: 'se-image-list',
            itemTemplateHandler: this.drawItems,
            selectorHandler: this.setImage.bind(core),
            columnSize: 4 // @Option @Override fileBrowser - Number of "div.se-file-item-column" to be created (default: 4)
        };
    },
    /**
     * @Required @Override fileBrowser
     * @description Open a file browser.
     * @param {Function|null} selectorHandler When the function comes as an argument value, it substitutes "context.selectorHandler".
     */ open: function(selectorHandler) {
        this.plugins.fileBrowser.open.call(this, 'imageGallery', selectorHandler);
    },
    /**
     * @Required @Override fileBrowser
     * @description Define the HTML of the item to be put in "div.se-file-item-column".
     * Format: [
     *      { src: "image src", name: "name(@option)", alt: "image alt(@option)", tag: "tag name(@option)" }
     * ]
     * @param {Object} item Item of the response data's array
     */ drawItems: function(item) {
        const srcName = item.src.split('/').pop();
        return '<div class="se-file-item-img"><img src="' + (item.thumbnail || item.src) + '" alt="' + (item.alt || srcName) + '" data-command="pick" data-value="' + (item.src || item.thumbnail) + '">' + '<div class="se-file-img-name se-file-name-back"></div>' + '<div class="se-file-img-name __se__img_name">' + (item.name || srcName) + '</div>' + '</div>';
    },
    setImage: function(target, fileName) {
        this.callPlugin('image', (function() {
            const file = {
                name: fileName,
                size: 0
            };
            this.plugins.image.create_image.call(this, target.getAttribute('data-value'), null, this.context.image._origin_w, this.context.image._origin_h, 'none', file, target.alt);
        }).bind(this), null);
    }
};
}),
"3978": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  align: function() { return _submenu_align__WEBPACK_IMPORTED_MODULE_1__["default"]; }
});
/* harmony import */var _command_blockquote__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./command/blockquote */"1574");
/* harmony import */var _submenu_align__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submenu/align */"1206");
/* harmony import */var _submenu_font__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./submenu/font */"3309");
/* harmony import */var _submenu_fontSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./submenu/fontSize */"6674");
/* harmony import */var _submenu_fontColor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./submenu/fontColor */"4801");
/* harmony import */var _submenu_hiliteColor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./submenu/hiliteColor */"6599");
/* harmony import */var _submenu_horizontalRule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./submenu/horizontalRule */"4867");
/* harmony import */var _submenu_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./submenu/list */"851");
/* harmony import */var _submenu_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./submenu/table */"9392");
/* harmony import */var _submenu_formatBlock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./submenu/formatBlock */"7759");
/* harmony import */var _submenu_lineHeight__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./submenu/lineHeight */"8157");
/* harmony import */var _submenu_template__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./submenu/template */"6982");
/* harmony import */var _submenu_paragraphStyle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./submenu/paragraphStyle */"7938");
/* harmony import */var _submenu_textStyle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./submenu/textStyle */"1038");
/* harmony import */var _dialog_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dialog/link */"9361");
/* harmony import */var _dialog_image__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dialog/image */"1968");
/* harmony import */var _dialog_video__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dialog/video */"1490");
/* harmony import */var _dialog_audio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dialog/audio */"9420");
/* harmony import */var _dialog_math__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dialog/math */"2377");
/* harmony import */var _fileBrowser_imageGallery__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./fileBrowser/imageGallery */"7793");
'use strict';
// command

// submenu













// dialog





// file browser


var __WEBPACK_DEFAULT_EXPORT__ = {
    blockquote: _command_blockquote__WEBPACK_IMPORTED_MODULE_0__["default"],
    align: _submenu_align__WEBPACK_IMPORTED_MODULE_1__["default"],
    font: _submenu_font__WEBPACK_IMPORTED_MODULE_2__["default"],
    fontSize: _submenu_fontSize__WEBPACK_IMPORTED_MODULE_3__["default"],
    fontColor: _submenu_fontColor__WEBPACK_IMPORTED_MODULE_4__["default"],
    hiliteColor: _submenu_hiliteColor__WEBPACK_IMPORTED_MODULE_5__["default"],
    horizontalRule: _submenu_horizontalRule__WEBPACK_IMPORTED_MODULE_6__["default"],
    list: _submenu_list__WEBPACK_IMPORTED_MODULE_7__["default"],
    table: _submenu_table__WEBPACK_IMPORTED_MODULE_8__["default"],
    formatBlock: _submenu_formatBlock__WEBPACK_IMPORTED_MODULE_9__["default"],
    lineHeight: _submenu_lineHeight__WEBPACK_IMPORTED_MODULE_10__["default"],
    template: _submenu_template__WEBPACK_IMPORTED_MODULE_11__["default"],
    paragraphStyle: _submenu_paragraphStyle__WEBPACK_IMPORTED_MODULE_12__["default"],
    textStyle: _submenu_textStyle__WEBPACK_IMPORTED_MODULE_13__["default"],
    link: _dialog_link__WEBPACK_IMPORTED_MODULE_14__["default"],
    image: _dialog_image__WEBPACK_IMPORTED_MODULE_15__["default"],
    video: _dialog_video__WEBPACK_IMPORTED_MODULE_16__["default"],
    audio: _dialog_audio__WEBPACK_IMPORTED_MODULE_17__["default"],
    math: _dialog_math__WEBPACK_IMPORTED_MODULE_18__["default"],
    imageGallery: _fileBrowser_imageGallery__WEBPACK_IMPORTED_MODULE_19__["default"]
};
}),
"4559": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* harmony import */var _selectMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_selectMenu */"8034");
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */ 'use strict';

var __WEBPACK_DEFAULT_EXPORT__ = {
    name: 'anchor',
    add: function(core) {
        core.addModule([
            _selectMenu__WEBPACK_IMPORTED_MODULE_0__["default"]
        ]);
        core.context.anchor = {
            caller: {},
            forms: this.setDialogForm(core),
            host: (core._w.location.origin + core._w.location.pathname).replace(/\/$/, ''),
            callerContext: null
        };
    },
    /** dialog */ setDialogForm: function(core) {
        const lang = core.lang;
        const relList = core.options.linkRel;
        const defaultRel = (core.options.linkRelDefault.default || '').split(' ');
        const icons = core.icons;
        const forms = core.util.createElement('DIV');
        let html = '<div class="se-dialog-body"><div class="se-dialog-form"><label>' + lang.dialogBox.linkBox.url + '</label>' + '<div class="se-dialog-form-files">' + '<input class="se-input-form se-input-url" type="text" placeholder="' + (core.options.protocol || '') + '" />' + '<button type="button" class="se-btn se-dialog-files-edge-button _se_bookmark_button" title="' + lang.dialogBox.linkBox.bookmark + '" aria-label="' + lang.dialogBox.linkBox.bookmark + '">' + icons.bookmark + '</button>' + core.plugins.selectMenu.setForm() + '</div>' + '<div class="se-anchor-preview-form">' + '<span class="se-svg se-anchor-preview-icon _se_anchor_bookmark_icon">' + icons.bookmark + '</span>' + '<span class="se-svg se-anchor-preview-icon _se_anchor_download_icon">' + icons.download + '</span>' + '<pre class="se-link-preview"></pre>' + '</div>' + '</div>' + '<div class="se-dialog-form">' + '<label>' + lang.dialogBox.linkBox.text + '</label><input class="se-input-form _se_anchor_text" type="text" />' + '</div>' + '<div class="se-dialog-form-footer">' + '<label><input type="checkbox" class="se-dialog-btn-check _se_anchor_check" />&nbsp;' + lang.dialogBox.linkBox.newWindowCheck + '</label>' + '<label><input type="checkbox" class="se-dialog-btn-check _se_anchor_download" />&nbsp;' + lang.dialogBox.linkBox.downloadLinkCheck + '</label>';
        if (relList.length > 0) {
            html += '<div class="se-anchor-rel"><button type="button" class="se-btn se-btn-select se-anchor-rel-btn">&lt;rel&gt;</button><div class="se-anchor-rel-wrapper"><pre class="se-link-preview se-anchor-rel-preview"></pre></div><div class="se-list-layer"><div class="se-list-inner"><ul class="se-list-basic se-list-checked">';
            for(let i = 0, len = relList.length, rel; i < len; i++){
                rel = relList[i];
                html += '<li><button type="button" class="se-btn-list' + (defaultRel.indexOf(rel) > -1 ? ' se-checked' : '') + '" data-command="' + rel + '" title="' + rel + '" aria-label="' + rel + '"><span class="se-svg">' + icons.checked + '</span>' + rel + '</button></li>';
            }
            html += '</ul></div></div></div>';
        }
        html += '</div></div>';
        forms.innerHTML = html;
        return forms;
    },
    initEvent: function(pluginName, forms) {
        const anchorPlugin = this.plugins.anchor;
        const context = this.context.anchor.caller[pluginName] = {
            modal: forms,
            urlInput: null,
            linkDefaultRel: this.options.linkRelDefault,
            defaultRel: this.options.linkRelDefault.default || '',
            currentRel: [],
            linkAnchor: null,
            linkValue: '',
            _change: false,
            callerName: pluginName
        };
        if (typeof context.linkDefaultRel.default === 'string') context.linkDefaultRel.default = context.linkDefaultRel.default.trim();
        if (typeof context.linkDefaultRel.check_new_window === 'string') context.linkDefaultRel.check_new_window = context.linkDefaultRel.check_new_window.trim();
        if (typeof context.linkDefaultRel.check_bookmark === 'string') context.linkDefaultRel.check_bookmark = context.linkDefaultRel.check_bookmark.trim();
        context.urlInput = forms.querySelector('.se-input-url');
        context.anchorText = forms.querySelector('._se_anchor_text');
        context.newWindowCheck = forms.querySelector('._se_anchor_check');
        context.downloadCheck = forms.querySelector('._se_anchor_download');
        context.download = forms.querySelector('._se_anchor_download_icon');
        context.preview = forms.querySelector('.se-link-preview');
        context.bookmark = forms.querySelector('._se_anchor_bookmark_icon');
        context.bookmarkButton = forms.querySelector('._se_bookmark_button');
        this.plugins.selectMenu.initEvent.call(this, pluginName, forms);
        const listContext = this.context.selectMenu.caller[pluginName];
        /** rel */ if (this.options.linkRel.length > 0) {
            context.relButton = forms.querySelector('.se-anchor-rel-btn');
            context.relList = forms.querySelector('.se-list-layer');
            context.relPreview = forms.querySelector('.se-anchor-rel-preview');
            context.relButton.addEventListener('click', anchorPlugin.onClick_relButton.bind(this, context));
            context.relList.addEventListener('click', anchorPlugin.onClick_relList.bind(this, context));
        }
        context.newWindowCheck.addEventListener('change', anchorPlugin.onChange_newWindowCheck.bind(this, context));
        context.downloadCheck.addEventListener('change', anchorPlugin.onChange_downloadCheck.bind(this, context));
        context.anchorText.addEventListener('input', anchorPlugin.onChangeAnchorText.bind(this, context));
        context.urlInput.addEventListener('input', anchorPlugin.onChangeUrlInput.bind(this, context));
        context.urlInput.addEventListener('keydown', anchorPlugin.onKeyDownUrlInput.bind(this, listContext));
        context.urlInput.addEventListener('focus', anchorPlugin.onFocusUrlInput.bind(this, context, listContext));
        context.urlInput.addEventListener('blur', anchorPlugin.onBlurUrlInput.bind(this, listContext));
        context.bookmarkButton.addEventListener('click', anchorPlugin.onClick_bookmarkButton.bind(this, context));
    },
    on: function(contextAnchor, update) {
        const anchorPlugin = this.plugins.anchor;
        if (!update) {
            anchorPlugin.init.call(this, contextAnchor);
            contextAnchor.anchorText.value = this.getSelection().toString().trim();
            contextAnchor.newWindowCheck.checked = this.options.linkTargetNewWindow;
        } else if (contextAnchor.linkAnchor) {
            this.context.dialog.updateModal = true;
            const href = contextAnchor.linkAnchor.getAttribute('href');
            contextAnchor.linkValue = contextAnchor.preview.textContent = contextAnchor.urlInput.value = anchorPlugin.selfPathBookmark.call(this, href) ? href.substr(href.lastIndexOf('#')) : href;
            contextAnchor.anchorText.value = contextAnchor.linkAnchor.textContent;
            contextAnchor.newWindowCheck.checked = /_blank/i.test(contextAnchor.linkAnchor.target) ? true : false;
            contextAnchor.downloadCheck.checked = contextAnchor.linkAnchor.download;
        }
        this.context.anchor.callerContext = contextAnchor;
        anchorPlugin.setRel.call(this, contextAnchor, update && contextAnchor.linkAnchor ? contextAnchor.linkAnchor.rel : contextAnchor.defaultRel);
        anchorPlugin.setLinkPreview.call(this, contextAnchor, contextAnchor.linkValue);
        this.plugins.selectMenu.on.call(this, contextAnchor.callerName, this.plugins.anchor.setHeaderBookmark);
    },
    selfPathBookmark: function(path) {
        const href = this._w.location.href.replace(/\/$/, '');
        return path.indexOf('#') === 0 || path.indexOf(href) === 0 && path.indexOf('#') === (href.indexOf("#") === -1 ? href.length : href.substr(0, href.indexOf("#")).length);
    },
    _closeRelMenu: null,
    toggleRelList: function(contextAnchor, show) {
        if (!show) {
            if (this.plugins.anchor._closeRelMenu) this.plugins.anchor._closeRelMenu();
        } else {
            const target = contextAnchor.relButton;
            const relList = contextAnchor.relList;
            this.util.addClass(target, 'active');
            relList.style.visibility = 'hidden';
            relList.style.display = 'block';
            if (!this.options.rtl) relList.style.left = target.offsetLeft + target.offsetWidth + 1 + 'px';
            else relList.style.left = target.offsetLeft - relList.offsetWidth - 1 + 'px';
            relList.style.top = target.offsetTop + target.offsetHeight / 2 - relList.offsetHeight / 2 + 'px';
            relList.style.visibility = '';
            this.plugins.anchor._closeRelMenu = (function(context, target, e) {
                if (e && (context.relButton.contains(e.target) || context.relList.contains(e.target))) return;
                this.util.removeClass(target, 'active');
                context.relList.style.display = 'none';
                this.modalForm.removeEventListener('click', this.plugins.anchor._closeRelMenu);
                this.plugins.anchor._closeRelMenu = null;
            }).bind(this, contextAnchor, target);
            this.modalForm.addEventListener('click', this.plugins.anchor._closeRelMenu);
        }
    },
    onClick_relButton: function(contextAnchor, e) {
        this.plugins.anchor.toggleRelList.call(this, contextAnchor, !this.util.hasClass(e.target, 'active'));
    },
    onClick_relList: function(contextAnchor, e) {
        const target = e.target;
        const cmd = target.getAttribute('data-command');
        if (!cmd) return;
        const current = contextAnchor.currentRel;
        const checked = this.util.toggleClass(target, 'se-checked');
        const index = current.indexOf(cmd);
        if (checked) {
            if (index === -1) current.push(cmd);
        } else if (index > -1) current.splice(index, 1);
        contextAnchor.relPreview.title = contextAnchor.relPreview.textContent = current.join(' ');
    },
    setRel: function(contextAnchor, relAttr) {
        const relListEl = contextAnchor.relList;
        const rels = contextAnchor.currentRel = !relAttr ? [] : relAttr.split(' ');
        if (!relListEl) return;
        const checkedRel = relListEl.querySelectorAll('button');
        for(let i = 0, len = checkedRel.length, cmd; i < len; i++){
            cmd = checkedRel[i].getAttribute('data-command');
            if (rels.indexOf(cmd) > -1) this.util.addClass(checkedRel[i], 'se-checked');
            else this.util.removeClass(checkedRel[i], 'se-checked');
        }
        contextAnchor.relPreview.title = contextAnchor.relPreview.textContent = rels.join(' ');
    },
    createHeaderList: function(contextAnchor, contextList, urlValue) {
        const headers = this.util.getListChildren(this.context.element.wysiwyg, function(current) {
            return /h[1-6]/i.test(current.nodeName);
        });
        if (headers.length === 0) return;
        const valueRegExp = new this._w.RegExp('^' + urlValue.replace(/^#/, ''), 'i');
        const list = [];
        let html = '';
        for(let i = 0, len = headers.length, h; i < len; i++){
            h = headers[i];
            if (!valueRegExp.test(h.textContent)) continue;
            list.push(h);
            html += '<li class="se-select-item" data-index="' + i + '">' + h.textContent + '</li>';
        }
        if (list.length === 0) this.plugins.selectMenu.close.call(this, contextList);
        else {
            this.plugins.selectMenu.createList(contextList, list, html);
            this.plugins.selectMenu.open.call(this, contextList, this.plugins.anchor._setMenuListPosition.bind(this, contextAnchor));
        }
    },
    _setMenuListPosition: function(contextAnchor, list) {
        list.style.top = contextAnchor.urlInput.offsetHeight + 1 + 'px';
    },
    onKeyDownUrlInput: function(contextList, e) {
        const keyCode = e.keyCode;
        switch(keyCode){
            case 38:
                e.preventDefault();
                e.stopPropagation();
                this.plugins.selectMenu.moveItem.call(this, contextList, -1);
                break;
            case 40:
                e.preventDefault();
                e.stopPropagation();
                this.plugins.selectMenu.moveItem.call(this, contextList, 1);
                break;
            case 13:
                if (contextList.index > -1) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.plugins.anchor.setHeaderBookmark.call(this, this.plugins.selectMenu.getItem(contextList, null));
                }
                break;
        }
    },
    setHeaderBookmark: function(header) {
        const contextAnchor = this.context.anchor.callerContext;
        const id = header.id || 'h_' + this._w.Math.random().toString().replace(/.+\./, '');
        header.id = id;
        contextAnchor.urlInput.value = '#' + id;
        if (!contextAnchor.anchorText.value.trim() || !contextAnchor._change) contextAnchor.anchorText.value = header.textContent;
        this.plugins.anchor.setLinkPreview.call(this, contextAnchor, contextAnchor.urlInput.value);
        this.plugins.selectMenu.close.call(this, this.context.selectMenu.callerContext);
        this.context.anchor.callerContext.urlInput.focus();
    },
    onChangeAnchorText: function(contextAnchor, e) {
        contextAnchor._change = !!e.target.value.trim();
    },
    onChangeUrlInput: function(contextAnchor, e) {
        const value = e.target.value.trim();
        this.plugins.anchor.setLinkPreview.call(this, contextAnchor, value);
        if (this.plugins.anchor.selfPathBookmark.call(this, value)) this.plugins.anchor.createHeaderList.call(this, contextAnchor, this.context.selectMenu.callerContext, value);
        else this.plugins.selectMenu.close.call(this, this.context.selectMenu.callerContext);
    },
    onFocusUrlInput: function(contextAnchor, contextLink) {
        const value = contextAnchor.urlInput.value;
        if (this.plugins.anchor.selfPathBookmark.call(this, value)) this.plugins.anchor.createHeaderList.call(this, contextAnchor, contextLink, value);
    },
    onBlurUrlInput: function(contextList) {
        this.plugins.selectMenu.close.call(this, contextList);
    },
    setLinkPreview: function(context, value) {
        const preview = context.preview;
        const protocol = this.options.linkProtocol;
        const noPrefix = this.options.linkNoPrefix;
        const reservedProtocol = /^(mailto\:|tel\:|sms\:|https*\:\/\/|#)/.test(value) || value.indexOf(protocol) === 0;
        const sameProtocol = !protocol ? false : this._w.RegExp('^' + value.substr(0, protocol.length)).test(protocol);
        value = context.linkValue = preview.textContent = !value ? '' : noPrefix ? value : protocol && !reservedProtocol && !sameProtocol ? protocol + value : reservedProtocol ? value : /^www\./.test(value) ? 'http://' + value : this.context.anchor.host + (/^\//.test(value) ? '' : '/') + value;
        if (this.plugins.anchor.selfPathBookmark.call(this, value)) {
            context.bookmark.style.display = 'block';
            this.util.addClass(context.bookmarkButton, 'active');
        } else {
            context.bookmark.style.display = 'none';
            this.util.removeClass(context.bookmarkButton, 'active');
        }
        if (!this.plugins.anchor.selfPathBookmark.call(this, value) && context.downloadCheck.checked) context.download.style.display = 'block';
        else context.download.style.display = 'none';
    },
    setCtx: function(anchor, contextAnchor) {
        if (!anchor) return;
        contextAnchor.linkAnchor = anchor;
        contextAnchor.linkValue = anchor.href;
        contextAnchor.currentRel = anchor.rel.split(" ");
    },
    updateAnchor: function(anchor, url, displayText, contextAnchor, notText) {
        // download
        if (!this.plugins.anchor.selfPathBookmark.call(this, url) && contextAnchor.downloadCheck.checked) anchor.setAttribute('download', displayText || url);
        else anchor.removeAttribute('download');
        // new window
        if (contextAnchor.newWindowCheck.checked) anchor.target = '_blank';
        else anchor.removeAttribute('target');
        // rel
        const rel = contextAnchor.currentRel.join(' ');
        if (!rel) anchor.removeAttribute('rel');
        else anchor.rel = rel;
        // set url
        anchor.href = url;
        if (notText) {
            if (anchor.children.length === 0) anchor.textContent = '';
        } else anchor.textContent = displayText;
    },
    createAnchor: function(contextAnchor, notText) {
        if (contextAnchor.linkValue.length === 0) return null;
        const url = contextAnchor.linkValue;
        const anchor = contextAnchor.anchorText;
        const displayText = anchor.value.length === 0 ? url : anchor.value;
        const oA = contextAnchor.linkAnchor || this.util.createElement('A');
        this.plugins.anchor.updateAnchor.call(this, oA, url, displayText, contextAnchor, notText);
        contextAnchor.linkValue = contextAnchor.preview.textContent = contextAnchor.urlInput.value = contextAnchor.anchorText.value = '';
        return oA;
    },
    onClick_bookmarkButton: function(contextAnchor) {
        let url = contextAnchor.urlInput.value;
        if (this.plugins.anchor.selfPathBookmark.call(this, url)) {
            url = url.substr(1);
            contextAnchor.bookmark.style.display = 'none';
            this.util.removeClass(contextAnchor.bookmarkButton, 'active');
            this.plugins.selectMenu.close.call(this, this.context.selectMenu.callerContext);
        } else {
            url = '#' + url;
            contextAnchor.bookmark.style.display = 'block';
            this.util.addClass(contextAnchor.bookmarkButton, 'active');
            contextAnchor.downloadCheck.checked = false;
            contextAnchor.download.style.display = 'none';
            this.plugins.anchor.createHeaderList.call(this, contextAnchor, this.context.selectMenu.callerContext, url);
        }
        contextAnchor.urlInput.value = url;
        this.plugins.anchor.setLinkPreview.call(this, contextAnchor, url);
        contextAnchor.urlInput.focus();
    },
    onChange_newWindowCheck: function(contextAnchor, e) {
        if (typeof contextAnchor.linkDefaultRel.check_new_window !== 'string') return;
        if (e.target.checked) this.plugins.anchor.setRel.call(this, contextAnchor, this.plugins.anchor._relMerge.call(this, contextAnchor, contextAnchor.linkDefaultRel.check_new_window));
        else this.plugins.anchor.setRel.call(this, contextAnchor, this.plugins.anchor._relDelete.call(this, contextAnchor, contextAnchor.linkDefaultRel.check_new_window));
    },
    onChange_downloadCheck: function(contextAnchor, e) {
        if (e.target.checked) {
            contextAnchor.download.style.display = 'block';
            contextAnchor.bookmark.style.display = 'none';
            this.util.removeClass(contextAnchor.bookmarkButton, 'active');
            contextAnchor.linkValue = contextAnchor.preview.textContent = contextAnchor.urlInput.value = contextAnchor.urlInput.value.replace(/^\#+/, '');
            if (typeof contextAnchor.linkDefaultRel.check_bookmark === 'string') this.plugins.anchor.setRel.call(this, contextAnchor, this.plugins.anchor._relMerge.call(this, contextAnchor, contextAnchor.linkDefaultRel.check_bookmark));
        } else {
            contextAnchor.download.style.display = 'none';
            if (typeof contextAnchor.linkDefaultRel.check_bookmark === 'string') this.plugins.anchor.setRel.call(this, contextAnchor, this.plugins.anchor._relDelete.call(this, contextAnchor, contextAnchor.linkDefaultRel.check_bookmark));
        }
    },
    _relMerge: function(contextAnchor, relAttr) {
        const current = contextAnchor.currentRel;
        if (!relAttr) return current.join(' ');
        if (/^only\:/.test(relAttr)) {
            relAttr = relAttr.replace(/^only\:/, '').trim();
            contextAnchor.currentRel = relAttr.split(' ');
            return relAttr;
        }
        const rels = relAttr.split(' ');
        for(let i = 0, len = rels.length, index; i < len; i++){
            index = current.indexOf(rels[i]);
            if (index === -1) current.push(rels[i]);
        }
        return current.join(' ');
    },
    _relDelete: function(contextAnchor, relAttr) {
        if (!relAttr) return contextAnchor.currentRel.join(' ');
        if (/^only\:/.test(relAttr)) relAttr = relAttr.replace(/^only\:/, '').trim();
        const rels = contextAnchor.currentRel.join(' ').replace(this._w.RegExp(relAttr + '\\s*'), '');
        contextAnchor.currentRel = rels.split(' ');
        return rels;
    },
    init: function(contextAnchor) {
        contextAnchor.linkAnchor = null;
        contextAnchor.linkValue = contextAnchor.preview.textContent = contextAnchor.urlInput.value = '';
        contextAnchor.anchorText.value = '';
        contextAnchor.newWindowCheck.checked = false;
        contextAnchor.downloadCheck.checked = false;
        contextAnchor._change = false;
        this.plugins.anchor.setRel.call(this, contextAnchor, contextAnchor.defaultRel);
        if (contextAnchor.relList) this.plugins.anchor.toggleRelList.call(this, contextAnchor, false);
        this.context.anchor.callerContext = null;
        this.plugins.selectMenu.init.call(this, this.context.selectMenu.callerContext);
    }
};
}),
"5461": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2018 JiHong Lee.
 * MIT license.
 */ 'use strict';
var __WEBPACK_DEFAULT_EXPORT__ = {
    name: 'colorPicker',
    /**
     * @description Constructor
     * @param {Object} core Core object 
     */ add: function(core) {
        const context = core.context;
        context.colorPicker = {
            colorListHTML: '',
            _colorInput: '',
            _defaultColor: '#000',
            _styleProperty: 'color',
            _currentColor: '',
            _colorList: []
        };
        /** set submenu */ context.colorPicker.colorListHTML = this.createColorList(core, this._makeColorList);
    },
    /**
     * @description Create color list
     * @param {Object} core Core object 
     * @param {Function} makeColor this._makeColorList
     * @returns {String} HTML string
     */ createColorList: function(core, makeColor) {
        const option = core.options;
        const lang = core.lang;
        const colorList = !option.colorList || option.colorList.length === 0 ? [
            '#ff0000',
            '#ff5e00',
            '#ffe400',
            '#abf200',
            '#00d8ff',
            '#0055ff',
            '#6600ff',
            '#ff00dd',
            '#000000',
            '#ffd8d8',
            '#fae0d4',
            '#faf4c0',
            '#e4f7ba',
            '#d4f4fa',
            '#d9e5ff',
            '#e8d9ff',
            '#ffd9fa',
            '#f1f1f1',
            '#ffa7a7',
            '#ffc19e',
            '#faed7d',
            '#cef279',
            '#b2ebf4',
            '#b2ccff',
            '#d1b2ff',
            '#ffb2f5',
            '#bdbdbd',
            '#f15f5f',
            '#f29661',
            '#e5d85c',
            '#bce55c',
            '#5cd1e5',
            '#6699ff',
            '#a366ff',
            '#f261df',
            '#8c8c8c',
            '#980000',
            '#993800',
            '#998a00',
            '#6b9900',
            '#008299',
            '#003399',
            '#3d0099',
            '#990085',
            '#353535',
            '#670000',
            '#662500',
            '#665c00',
            '#476600',
            '#005766',
            '#002266',
            '#290066',
            '#660058',
            '#222222'
        ] : option.colorList;
        let colorArr = [];
        let list = '<div class="se-list-inner">';
        for(let i = 0, len = colorList.length, color; i < len; i++){
            color = colorList[i];
            if (!color) continue;
            if (typeof color === 'string') {
                colorArr.push(color);
                if (i < len - 1) continue;
            }
            if (colorArr.length > 0) {
                list += '<div class="se-selector-color">' + makeColor(colorArr) + '</div>';
                colorArr = [];
            }
            if (typeof color === 'object') list += '<div class="se-selector-color">' + makeColor(color) + '</div>';
        }
        list += '<form class="se-form-group"><input type="text" maxlength="9" class="_se_color_picker_input se-color-input"/><button type="submit" class="se-btn-primary _se_color_picker_submit" title="' + lang.dialogBox.submitButton + '" aria-label="' + lang.dialogBox.submitButton + '">' + core.icons.checked + '</button>' + '<button type="button" class="se-btn _se_color_picker_remove" title="' + lang.toolbar.removeFormat + '" aria-label="' + lang.toolbar.removeFormat + '">' + core.icons.erase + '</button>' + '</form>' + '</div>';
        return list;
    },
    /**
     * @description Internal function used by this.createColorList
     * @param {Array} colorList Color list
     * @private
     */ _makeColorList: function(colorList) {
        let list = '';
        list += '<ul class="se-color-pallet">';
        for(let i = 0, len = colorList.length, color; i < len; i++){
            color = colorList[i];
            if (typeof color === 'string') list += '<li><button type="button" data-value="' + color + '" title="' + color + '" aria-label="' + color + '" style="background-color:' + color + ';"></button>' + '</li>';
        }
        list += '</ul>';
        return list;
    },
    /**
     * @description Displays or resets the currently selected color at color list.
     * @param {Node} node Current Selected node
     * @param {String|null} color Color value
     */ init: function(node, color) {
        const colorPicker = this.plugins.colorPicker;
        let fillColor = color ? color : colorPicker.getColorInNode.call(this, node) || this.context.colorPicker._defaultColor;
        fillColor = colorPicker.isHexColor(fillColor) ? fillColor : colorPicker.rgb2hex(fillColor) || fillColor;
        const colorList = this.context.colorPicker._colorList;
        if (colorList) {
            for(let i = 0, len = colorList.length; i < len; i++)if (fillColor.toLowerCase() === colorList[i].getAttribute('data-value').toLowerCase()) this.util.addClass(colorList[i], 'active');
            else this.util.removeClass(colorList[i], 'active');
        }
        colorPicker.setInputText.call(this, colorPicker.colorName2hex.call(this, fillColor));
    },
    /**
     * @description Store color values
     * @param {String} hexColorStr Hax color value
     */ setCurrentColor: function(hexColorStr) {
        this.context.colorPicker._currentColor = hexColorStr;
        this.context.colorPicker._colorInput.style.borderColor = hexColorStr;
    },
    /**
     * @description Set color at input element
     * @param {String} hexColorStr Hax color value
     */ setInputText: function(hexColorStr) {
        hexColorStr = /^#/.test(hexColorStr) ? hexColorStr : '#' + hexColorStr;
        this.context.colorPicker._colorInput.value = hexColorStr;
        this.plugins.colorPicker.setCurrentColor.call(this, hexColorStr);
    },
    /**
     * @description Gets color value at color property of node
     * @param {Node} node Selected node 
     * @returns {String}
     */ getColorInNode: function(node) {
        let findColor = '';
        const styleProperty = this.context.colorPicker._styleProperty;
        while(node && !this.util.isWysiwygDiv(node) && findColor.length === 0){
            if (node.nodeType === 1 && node.style[styleProperty]) findColor = node.style[styleProperty];
            node = node.parentNode;
        }
        return findColor;
    },
    /**
     * @description Function to check hex format color
     * @param {String} str Color value
     */ isHexColor: function(str) {
        return /^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/i.test(str);
    },
    /**
     * @description Function to convert hex format to a rgb color
     * @param {String} rgb RGB color format
     * @returns {String}
     */ rgb2hex: function(rgb) {
        const rgbMatch = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
        return rgbMatch && rgbMatch.length === 4 ? "#" + ("0" + parseInt(rgbMatch[1], 10).toString(16)).slice(-2) + ("0" + parseInt(rgbMatch[2], 10).toString(16)).slice(-2) + ("0" + parseInt(rgbMatch[3], 10).toString(16)).slice(-2) : '';
    },
    /**
     * @description Converts color values of other formats to hex color values and returns.
     * @param {String} colorName Color value
     * @returns {String}
     */ colorName2hex: function(colorName) {
        if (/^#/.test(colorName)) return colorName;
        var temp = this.util.createElement('div');
        temp.style.display = 'none';
        temp.style.color = colorName;
        var colors = this._w.getComputedStyle(this._d.body.appendChild(temp)).color.match(/\d+/g).map(function(a) {
            return parseInt(a, 10);
        });
        this.util.removeItem(temp);
        return colors.length >= 3 ? '#' + (16777216 + (colors[0] << 16) + (colors[1] << 8) + colors[2]).toString(16).substr(1) : false;
    }
};
}),
"8034": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2018 JiHong Lee.
 * MIT license.
 */ 'use strict';
var __WEBPACK_DEFAULT_EXPORT__ = {
    name: 'selectMenu',
    add: function(core) {
        core.context.selectMenu = {
            caller: {},
            callerContext: null
        };
    },
    setForm: function() {
        return '<div class="se-select-list"></div>';
    },
    createList: function(listContext, items, html) {
        listContext.form.innerHTML = '<ul>' + html + '</ul>';
        listContext.items = items;
        listContext.menus = listContext.form.querySelectorAll('li');
    },
    initEvent: function(pluginName, forms) {
        const form = forms.querySelector('.se-select-list');
        const context = this.context.selectMenu.caller[pluginName] = {
            form: form,
            items: [],
            menus: [],
            index: -1,
            item: null,
            clickMethod: null,
            callerName: pluginName
        };
        form.addEventListener('mousedown', this.plugins.selectMenu.onMousedown_list);
        form.addEventListener('mousemove', this.plugins.selectMenu.onMouseMove_list.bind(this, context));
        form.addEventListener('click', this.plugins.selectMenu.onClick_list.bind(this, context));
    },
    onMousedown_list: function(e) {
        e.preventDefault();
        e.stopPropagation();
    },
    onMouseMove_list: function(context, e) {
        this.util.addClass(context.form, '__se_select-menu-mouse-move');
        const index = e.target.getAttribute('data-index');
        if (!index) return;
        context.index = index * 1;
    },
    onClick_list: function(context, e) {
        const index = e.target.getAttribute('data-index');
        if (!index) return;
        context.clickMethod.call(this, context.items[index]);
    },
    moveItem: function(listContext, num) {
        this.util.removeClass(listContext.form, '__se_select-menu-mouse-move');
        num = listContext.index + num;
        const menus = listContext.menus;
        const len = menus.length;
        const selectIndex = listContext.index = num >= len ? 0 : num < 0 ? len - 1 : num;
        for(let i = 0; i < len; i++)if (i === selectIndex) this.util.addClass(menus[i], 'active');
        else this.util.removeClass(menus[i], 'active');
        listContext.item = listContext.items[selectIndex];
    },
    getItem: function(listContext, index) {
        index = !index || index < 0 ? listContext.index : index;
        return listContext.items[index];
    },
    on: function(callerName, clickMethod) {
        const listContext = this.context.selectMenu.caller[callerName];
        this.context.selectMenu.callerContext = listContext;
        listContext.clickMethod = clickMethod;
        listContext.callerName = callerName;
    },
    open: function(listContext, positionHandler) {
        const form = listContext.form;
        form.style.visibility = 'hidden';
        form.style.display = 'block';
        positionHandler(form);
        form.style.visibility = '';
    },
    close: function(listContext) {
        listContext.form.style.display = 'none';
        listContext.items = [];
        listContext.menus = [];
        listContext.index = -1;
        listContext.item = null;
    },
    init: function(listContext) {
        if (!listContext) return;
        listContext.items = [];
        listContext.menus = [];
        listContext.index = -1;
        listContext.item = null;
        listContext.callerName = '';
        this.context.selectMenu.callerContext = null;
    }
};
}),
"2204": (function (module, __unused_webpack_exports, __webpack_require__) {
/* module decorator */ module = __webpack_require__.nmd(module);
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */ 'use strict';
(function(global, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') module.exports = global.document ? factory(global, true) : function(w) {
        if (!w.document) throw new Error('SUNEDITOR_MODULES a window with a document');
        return factory(w);
    };
    else factory(global);
})(typeof window !== 'undefined' ? window : this, function(window1, noGlobal) {
    const component = {
        name: 'component',
        /**
         * @description Create a container for the resizing component and insert the element.
         * @param {Element} cover Cover element (FIGURE)
         * @param {String} className Class name of container (fixed: se-component)
         * @returns {Element} Created container element
         */ set_container: function(cover, className) {
            const container = this.util.createElement('DIV');
            container.className = 'se-component ' + className;
            container.appendChild(cover);
            return container;
        },
        /**
         * @description Cover the target element with a FIGURE element.
         * @param {Element} element Target element
         */ set_cover: function(element) {
            const cover = this.util.createElement('FIGURE');
            cover.appendChild(element);
            return cover;
        },
        /**
         * @description Return HTML string of caption(FIGCAPTION) element
         * @returns {String}
         */ create_caption: function() {
            const caption = this.util.createElement('FIGCAPTION');
            caption.innerHTML = '<div>' + this.lang.dialogBox.caption + '</div>';
            return caption;
        }
    };
    if (typeof noGlobal === "undefined") {
        if (!window1.SUNEDITOR_MODULES) Object.defineProperty(window1, 'SUNEDITOR_MODULES', {
            enumerable: true,
            writable: false,
            configurable: false,
            value: {}
        });
        Object.defineProperty(window1.SUNEDITOR_MODULES, 'component', {
            enumerable: true,
            writable: false,
            configurable: false,
            value: component
        });
    }
    return component;
});
}),
"8784": (function (module, __unused_webpack_exports, __webpack_require__) {
/* module decorator */ module = __webpack_require__.nmd(module);
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */ 'use strict';
(function(global, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') module.exports = global.document ? factory(global, true) : function(w) {
        if (!w.document) throw new Error('SUNEDITOR_MODULES a window with a document');
        return factory(w);
    };
    else factory(global);
})(typeof window !== 'undefined' ? window : this, function(window1, noGlobal) {
    const dialog = {
        name: 'dialog',
        /**
         * @description Constructor
         * @param {Object} core Core object 
         */ add: function(core) {
            const context = core.context;
            context.dialog = {
                kind: '',
                updateModal: false,
                _closeSignal: false
            };
            /** dialog */ let dialog_div = core.util.createElement('DIV');
            dialog_div.className = 'se-dialog sun-editor-common';
            let dialog_back = core.util.createElement('DIV');
            dialog_back.className = 'se-dialog-back';
            dialog_back.style.display = 'none';
            let dialog_area = core.util.createElement('DIV');
            dialog_area.className = 'se-dialog-inner';
            dialog_area.style.display = 'none';
            dialog_div.appendChild(dialog_back);
            dialog_div.appendChild(dialog_area);
            context.dialog.modalArea = dialog_div;
            context.dialog.back = dialog_back;
            context.dialog.modal = dialog_area;
            /** add event listeners */ context.dialog.modal.addEventListener('mousedown', this._onMouseDown_dialog.bind(core));
            context.dialog.modal.addEventListener('click', this._onClick_dialog.bind(core));
            /** append html */ context.element.relative.appendChild(dialog_div);
            /** empty memory */ dialog_div = null, dialog_back = null, dialog_area = null;
        },
        /**
         * @description Event to control the behavior of closing the dialog
         * @param {MouseEvent} e Event object
         * @private
         */ _onMouseDown_dialog: function(e) {
            if (/se-dialog-inner/.test(e.target.className)) this.context.dialog._closeSignal = true;
            else this.context.dialog._closeSignal = false;
        },
        /**
         * @description Event to close the window when the outside area of the dialog or close button is click
         * @param {MouseEvent} e Event object
         * @private
         */ _onClick_dialog: function(e) {
            if (/close/.test(e.target.getAttribute('data-command')) || this.context.dialog._closeSignal) this.plugins.dialog.close.call(this);
        },
        /**
         * @description Open a Dialog plugin
         * @param {String} kind Dialog plugin name
         * @param {Boolean} update Whether it will open for update ('image' === this.currentControllerName)
         */ open: function(kind, update) {
            if (this.modalForm) return false;
            if (this.plugins.dialog._bindClose) {
                this._d.removeEventListener('keydown', this.plugins.dialog._bindClose);
                this.plugins.dialog._bindClose = null;
            }
            this.plugins.dialog._bindClose = (function(e) {
                if (!/27/.test(e.keyCode)) return;
                this.plugins.dialog.close.call(this);
            }).bind(this);
            this._d.addEventListener('keydown', this.plugins.dialog._bindClose);
            this.context.dialog.updateModal = update;
            if (this.options.popupDisplay === 'full') this.context.dialog.modalArea.style.position = 'fixed';
            else this.context.dialog.modalArea.style.position = 'absolute';
            this.context.dialog.kind = kind;
            this.modalForm = this.context[kind].modal;
            const focusElement = this.context[kind].focusElement;
            if (typeof this.plugins[kind].on === 'function') this.plugins[kind].on.call(this, update);
            this.context.dialog.modalArea.style.display = 'block';
            this.context.dialog.back.style.display = 'block';
            this.context.dialog.modal.style.display = 'block';
            this.modalForm.style.display = 'block';
            if (focusElement) focusElement.focus();
        },
        _bindClose: null,
        /**
         * @description Close a Dialog plugin
         * The plugin's "init" method is called.
         */ close: function() {
            if (this.plugins.dialog._bindClose) {
                this._d.removeEventListener('keydown', this.plugins.dialog._bindClose);
                this.plugins.dialog._bindClose = null;
            }
            const kind = this.context.dialog.kind;
            this.modalForm.style.display = 'none';
            this.context.dialog.back.style.display = 'none';
            this.context.dialog.modalArea.style.display = 'none';
            this.context.dialog.updateModal = false;
            if (typeof this.plugins[kind].init === 'function') this.plugins[kind].init.call(this);
            this.context.dialog.kind = '';
            this.modalForm = null;
            this.focus();
        }
    };
    if (typeof noGlobal === "undefined") {
        if (!window1.SUNEDITOR_MODULES) Object.defineProperty(window1, 'SUNEDITOR_MODULES', {
            enumerable: true,
            writable: false,
            configurable: false,
            value: {}
        });
        Object.defineProperty(window1.SUNEDITOR_MODULES, 'dialog', {
            enumerable: true,
            writable: false,
            configurable: false,
            value: dialog
        });
    }
    return dialog;
});
}),
"1665": (function (module, __unused_webpack_exports, __webpack_require__) {
/* module decorator */ module = __webpack_require__.nmd(module);
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */ 'use strict';
(function(global, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') module.exports = global.document ? factory(global, true) : function(w) {
        if (!w.document) throw new Error('SUNEDITOR_MODULES a window with a document');
        return factory(w);
    };
    else factory(global);
})(typeof window !== 'undefined' ? window : this, function(window1, noGlobal) {
    const fileBrowser = {
        name: 'fileBrowser',
        _xmlHttp: null,
        _loading: null,
        /**
         * @description Constructor
         * @param {Object} core Core object 
         */ add: function(core) {
            const context = core.context;
            context.fileBrowser = {
                _closeSignal: false,
                area: null,
                header: null,
                tagArea: null,
                body: null,
                list: null,
                tagElements: null,
                items: [],
                selectedTags: [],
                selectorHandler: null,
                contextPlugin: '',
                columnSize: 4
            };
            /** fileBrowser */ let browser_div = core.util.createElement('DIV');
            browser_div.className = 'se-file-browser sun-editor-common';
            let back = core.util.createElement('DIV');
            back.className = 'se-file-browser-back';
            let content = core.util.createElement('DIV');
            content.className = 'se-file-browser-inner';
            content.innerHTML = this.set_browser(core);
            browser_div.appendChild(back);
            browser_div.appendChild(content);
            this._loading = browser_div.querySelector('.se-loading-box');
            context.fileBrowser.area = browser_div;
            context.fileBrowser.header = content.querySelector('.se-file-browser-header');
            context.fileBrowser.titleArea = content.querySelector('.se-file-browser-title');
            context.fileBrowser.tagArea = content.querySelector('.se-file-browser-tags');
            context.fileBrowser.body = content.querySelector('.se-file-browser-body');
            context.fileBrowser.list = content.querySelector('.se-file-browser-list');
            /** add event listeners */ context.fileBrowser.tagArea.addEventListener('click', this.onClickTag.bind(core));
            context.fileBrowser.list.addEventListener('click', this.onClickFile.bind(core));
            content.addEventListener('mousedown', this._onMouseDown_browser.bind(core));
            content.addEventListener('click', this._onClick_browser.bind(core));
            /** append html */ context.element.relative.appendChild(browser_div);
            /** empty memory */ browser_div = null, back = null, content = null;
        },
        set_browser: function(core) {
            const lang = core.lang;
            return '<div class="se-file-browser-content"><div class="se-file-browser-header"><button type="button" data-command="close" class="se-btn se-file-browser-close" class="close" title="' + lang.dialogBox.close + '" aria-label="' + lang.dialogBox.close + '">' + core.icons.cancel + '</button>' + '<span class="se-file-browser-title"></span>' + '<div class="se-file-browser-tags"></div>' + '</div>' + '<div class="se-file-browser-body">' + '<div class="se-loading-box sun-editor-common"><div class="se-loading-effect"></div></div>' + '<div class="se-file-browser-list"></div>' + '</div>' + '</div>';
        },
        /**
         * @description Event to control the behavior of closing the browser
         * @param {MouseEvent} e Event object
         * @private
         */ _onMouseDown_browser: function(e) {
            if (/se-file-browser-inner/.test(e.target.className)) this.context.fileBrowser._closeSignal = true;
            else this.context.fileBrowser._closeSignal = false;
        },
        /**
         * @description Event to close the window when the outside area of the browser or close button is click
         * @param {MouseEvent} e Event object
         * @private
         */ _onClick_browser: function(e) {
            e.stopPropagation();
            if (/close/.test(e.target.getAttribute('data-command')) || this.context.fileBrowser._closeSignal) this.plugins.fileBrowser.close.call(this);
        },
        /**
         * @description Open a file browser plugin
         * @param {String} pluginName Plugin name using the file browser
         * @param {Function|null} selectorHandler When the function comes as an argument value, it substitutes "context.selectorHandler".
         */ open: function(pluginName, selectorHandler) {
            if (this.plugins.fileBrowser._bindClose) {
                this._d.removeEventListener('keydown', this.plugins.fileBrowser._bindClose);
                this.plugins.fileBrowser._bindClose = null;
            }
            this.plugins.fileBrowser._bindClose = (function(e) {
                if (!/27/.test(e.keyCode)) return;
                this.plugins.fileBrowser.close.call(this);
            }).bind(this);
            this._d.addEventListener('keydown', this.plugins.fileBrowser._bindClose);
            const fileBrowserContext = this.context.fileBrowser;
            fileBrowserContext.contextPlugin = pluginName;
            fileBrowserContext.selectorHandler = selectorHandler;
            const pluginContext = this.context[pluginName];
            const listClassName = pluginContext.listClass;
            if (!this.util.hasClass(fileBrowserContext.list, listClassName)) fileBrowserContext.list.className = 'se-file-browser-list ' + listClassName;
            if (this.options.popupDisplay === 'full') fileBrowserContext.area.style.position = 'fixed';
            else fileBrowserContext.area.style.position = 'absolute';
            fileBrowserContext.titleArea.textContent = pluginContext.title;
            fileBrowserContext.area.style.display = 'block';
            this.plugins.fileBrowser._drawFileList.call(this, this.context[pluginName].url, this.context[pluginName].header);
        },
        _bindClose: null,
        /**
         * @description Close a fileBrowser plugin
         * The plugin's "init" method is called.
         */ close: function() {
            const fileBrowserPlugin = this.plugins.fileBrowser;
            if (fileBrowserPlugin._xmlHttp) fileBrowserPlugin._xmlHttp.abort();
            if (fileBrowserPlugin._bindClose) {
                this._d.removeEventListener('keydown', fileBrowserPlugin._bindClose);
                fileBrowserPlugin._bindClose = null;
            }
            const fileBrowserContext = this.context.fileBrowser;
            fileBrowserContext.area.style.display = 'none';
            fileBrowserContext.selectorHandler = null;
            fileBrowserContext.selectedTags = [];
            fileBrowserContext.items = [];
            fileBrowserContext.list.innerHTML = fileBrowserContext.tagArea.innerHTML = fileBrowserContext.titleArea.textContent = '';
            if (typeof this.plugins[fileBrowserContext.contextPlugin].init === 'function') this.plugins[fileBrowserContext.contextPlugin].init.call(this);
            fileBrowserContext.contextPlugin = '';
        },
        /**
         * @description Show file browser loading box
         */ showBrowserLoading: function() {
            this._loading.style.display = 'block';
        },
        /**
         * @description Close file browser loading box
         */ closeBrowserLoading: function() {
            this._loading.style.display = 'none';
        },
        _drawFileList: function(url, browserHeader) {
            const fileBrowserPlugin = this.plugins.fileBrowser;
            const xmlHttp = fileBrowserPlugin._xmlHttp = this.util.getXMLHttpRequest();
            xmlHttp.onreadystatechange = fileBrowserPlugin._callBackGet.bind(this, xmlHttp);
            xmlHttp.open('get', url, true);
            if (browserHeader !== null && typeof browserHeader === 'object' && this._w.Object.keys(browserHeader).length > 0) for(let key in browserHeader)xmlHttp.setRequestHeader(key, browserHeader[key]);
            xmlHttp.send(null);
            this.plugins.fileBrowser.showBrowserLoading();
        },
        _callBackGet: function(xmlHttp) {
            if (xmlHttp.readyState === 4) {
                this.plugins.fileBrowser._xmlHttp = null;
                if (xmlHttp.status === 200) try {
                    const res = JSON.parse(xmlHttp.responseText);
                    if (res.result.length > 0) this.plugins.fileBrowser._drawListItem.call(this, res.result, true);
                    else if (res.nullMessage) this.context.fileBrowser.list.innerHTML = res.nullMessage;
                } catch (e) {
                    throw Error('[SUNEDITOR.fileBrowser.drawList.fail] cause : "' + e.message + '"');
                } finally{
                    this.plugins.fileBrowser.closeBrowserLoading();
                    this.context.fileBrowser.body.style.maxHeight = this._w.innerHeight - this.context.fileBrowser.header.offsetHeight - 50 + 'px';
                }
                else {
                    this.plugins.fileBrowser.closeBrowserLoading();
                    if (xmlHttp.status !== 0) {
                        const res = !xmlHttp.responseText ? xmlHttp : JSON.parse(xmlHttp.responseText);
                        const err = '[SUNEDITOR.fileBrowser.get.serverException] status: ' + xmlHttp.status + ', response: ' + (res.errorMessage || xmlHttp.responseText);
                        throw Error(err);
                    }
                }
            }
        },
        _drawListItem: function(items, update) {
            const fileBrowserContext = this.context.fileBrowser;
            const pluginContext = this.context[fileBrowserContext.contextPlugin];
            const _tags = [];
            const len = items.length;
            const columnSize = pluginContext.columnSize || fileBrowserContext.columnSize;
            const splitSize = columnSize <= 1 ? 1 : Math.round(len / columnSize) || 1;
            const drawItemHandler = pluginContext.itemTemplateHandler;
            let tagsHTML = '';
            let listHTML = '<div class="se-file-item-column">';
            let columns = 1;
            for(let i = 0, item, tags; i < len; i++){
                item = items[i];
                tags = !item.tag ? [] : typeof item.tag === 'string' ? item.tag.split(',') : item.tag;
                tags = item.tag = tags.map(function(v) {
                    return v.trim();
                });
                listHTML += drawItemHandler(item);
                if ((i + 1) % splitSize === 0 && columns < columnSize && i + 1 < len) {
                    columns++;
                    listHTML += '</div><div class="se-file-item-column">';
                }
                if (update && tags.length > 0) for(let t = 0, tLen = tags.length, tag; t < tLen; t++){
                    tag = tags[t];
                    if (tag && _tags.indexOf(tag) === -1) {
                        _tags.push(tag);
                        tagsHTML += '<a title="' + tag + '" aria-label="' + tag + '">' + tag + '</a>';
                    }
                }
            }
            listHTML += '</div>';
            fileBrowserContext.list.innerHTML = listHTML;
            if (update) {
                fileBrowserContext.items = items;
                fileBrowserContext.tagArea.innerHTML = tagsHTML;
                fileBrowserContext.tagElements = fileBrowserContext.tagArea.querySelectorAll('A');
            }
        },
        onClickTag: function(e) {
            const target = e.target;
            if (!this.util.isAnchor(target)) return;
            const tagName = target.textContent;
            const fileBrowserPlugin = this.plugins.fileBrowser;
            const fileBrowserContext = this.context.fileBrowser;
            const selectTag = fileBrowserContext.tagArea.querySelector('a[title="' + tagName + '"]');
            const selectedTags = fileBrowserContext.selectedTags;
            const sTagIndex = selectedTags.indexOf(tagName);
            if (sTagIndex > -1) {
                selectedTags.splice(sTagIndex, 1);
                this.util.removeClass(selectTag, 'on');
            } else {
                selectedTags.push(tagName);
                this.util.addClass(selectTag, 'on');
            }
            fileBrowserPlugin._drawListItem.call(this, selectedTags.length === 0 ? fileBrowserContext.items : fileBrowserContext.items.filter(function(item) {
                return item.tag.some(function(tag) {
                    return selectedTags.indexOf(tag) > -1;
                });
            }), false);
        },
        onClickFile: function(e) {
            e.preventDefault();
            e.stopPropagation();
            const fileBrowserContext = this.context.fileBrowser;
            const listEl = fileBrowserContext.list;
            let target = e.target;
            let command = null;
            if (target === listEl) return;
            while(listEl !== target.parentNode){
                command = target.getAttribute('data-command');
                if (command) break;
                target = target.parentNode;
            }
            if (!command) return;
            const handler = fileBrowserContext.selectorHandler || this.context[fileBrowserContext.contextPlugin].selectorHandler;
            handler(target, target.parentNode.querySelector('.__se__img_name').textContent);
            this.plugins.fileBrowser.close.call(this);
        }
    };
    if (typeof noGlobal === "undefined") {
        if (!window1.SUNEDITOR_MODULES) Object.defineProperty(window1, 'SUNEDITOR_MODULES', {
            enumerable: true,
            writable: false,
            configurable: false,
            value: {}
        });
        Object.defineProperty(window1.SUNEDITOR_MODULES, 'fileBrowser', {
            enumerable: true,
            writable: false,
            configurable: false,
            value: fileBrowser
        });
    }
    return fileBrowser;
});
}),
"2527": (function (module, __unused_webpack_exports, __webpack_require__) {
/* module decorator */ module = __webpack_require__.nmd(module);
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */ 'use strict';
(function(global, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') module.exports = global.document ? factory(global, true) : function(w) {
        if (!w.document) throw new Error('SUNEDITOR_MODULES a window with a document');
        return factory(w);
    };
    else factory(global);
})(typeof window !== 'undefined' ? window : this, function(window1, noGlobal) {
    const fileManager = {
        name: 'fileManager',
        _xmlHttp: null,
        _checkMediaComponent: function(tag) {
            if (/IMG/i.test(tag)) return !/FIGURE/i.test(tag.parentElement.nodeName) || !/FIGURE/i.test(tag.parentElement.parentElement.nodeName);
            return true;
        },
        /**
         * @description Upload the file to the server.
         * @param {String} uploadUrl Upload server url
         * @param {Object|null} uploadHeader Request header
         * @param {FormData} formData FormData in body
         * @param {Function|null} callBack Success call back function
         * @param {Function|null} errorCallBack Error call back function
         * @example this.plugins.fileManager.upload.call(this, imageUploadUrl, this.options.imageUploadHeader, formData, this.plugins.image.callBack_imgUpload.bind(this, info), this.functions.onImageUploadError);
         */ upload: function(uploadUrl, uploadHeader, formData, callBack, errorCallBack) {
            this.showLoading();
            const filePlugin = this.plugins.fileManager;
            const xmlHttp = filePlugin._xmlHttp = this.util.getXMLHttpRequest();
            xmlHttp.onreadystatechange = filePlugin._callBackUpload.bind(this, xmlHttp, callBack, errorCallBack);
            xmlHttp.open('post', uploadUrl, true);
            if (uploadHeader !== null && typeof uploadHeader === 'object' && this._w.Object.keys(uploadHeader).length > 0) for(let key in uploadHeader)xmlHttp.setRequestHeader(key, uploadHeader[key]);
            xmlHttp.send(formData);
        },
        _callBackUpload: function(xmlHttp, callBack, errorCallBack) {
            if (xmlHttp.readyState === 4) {
                if (xmlHttp.status === 200) try {
                    callBack(xmlHttp);
                } catch (e) {
                    throw Error('[SUNEDITOR.fileManager.upload.callBack.fail] cause : "' + e.message + '"');
                } finally{
                    this.closeLoading();
                }
                else {
                    this.closeLoading();
                    const res = !xmlHttp.responseText ? xmlHttp : JSON.parse(xmlHttp.responseText);
                    if (typeof errorCallBack !== 'function' || errorCallBack('', res, this)) {
                        const err = '[SUNEDITOR.fileManager.upload.serverException] status: ' + xmlHttp.status + ', response: ' + (res.errorMessage || xmlHttp.responseText);
                        this.functions.noticeOpen(err);
                        throw Error(err);
                    }
                }
            }
        },
        /**
         * @description Checke the file's information and modify the tag that does not fit the format.
         * @param {String} pluginName Plugin name
         * @param {Array} tagNames Tag array to check
         * @param {Function|null} uploadEventHandler Event handler to process updated file info after checking (used in "setInfo")
         * @param {Function} modifyHandler A function to modify a tag that does not fit the format (Argument value: Tag element)
         * @param {Boolean} resizing True if the plugin is using a resizing module
         * @example 
         * const modifyHandler = function (tag) {
         *      imagePlugin.onModifyMode.call(this, tag, null);
         *      imagePlugin.openModify.call(this, true);
         *      imagePlugin.update_image.call(this, true, false, true);
         *  }.bind(this);
         *  this.plugins.fileManager.checkInfo.call(this, 'image', ['img'], this.functions.onImageUpload, modifyHandler, true);
         */ checkInfo: function(pluginName, tagNames, uploadEventHandler, modifyHandler, resizing) {
            let tags = [];
            for(let i = 0, len = tagNames.length; i < len; i++)tags = tags.concat([].slice.call(this.context.element.wysiwyg.querySelectorAll(tagNames[i] + ':not([data-se-embed="true"])')));
            const fileManagerPlugin = this.plugins.fileManager;
            const context = this.context[pluginName];
            const infoList = context._infoList;
            const setFileInfo = fileManagerPlugin.setInfo.bind(this);
            if (tags.length === infoList.length) {
                // reset
                if (this._componentsInfoReset) {
                    for(let i = 0, len = tags.length; i < len; i++)setFileInfo(pluginName, tags[i], uploadEventHandler, null, resizing);
                    return;
                } else {
                    let infoUpdate = false;
                    for(let i = 0, len = infoList.length, info; i < len; i++){
                        info = infoList[i];
                        if (tags.filter(function(t) {
                            return info.src === t.src && info.index.toString() === t.getAttribute('data-index');
                        }).length === 0) {
                            infoUpdate = true;
                            break;
                        }
                    }
                    // pass
                    if (!infoUpdate) return;
                }
            }
            // check
            const _resize_plugin = resizing ? this.context.resizing._resize_plugin : '';
            if (resizing) this.context.resizing._resize_plugin = pluginName;
            const currentTags = [];
            const infoIndex = [];
            for(let i = 0, len = infoList.length; i < len; i++)infoIndex[i] = infoList[i].index;
            context.__updateTags = tags;
            while(tags.length > 0){
                const tag = tags.shift();
                if (!this.util.getParentElement(tag, this.util.isMediaComponent) || !fileManagerPlugin._checkMediaComponent(tag)) {
                    currentTags.push(context._infoIndex);
                    modifyHandler(tag);
                } else if (!tag.getAttribute('data-index') || infoIndex.indexOf(tag.getAttribute('data-index') * 1) < 0) {
                    currentTags.push(context._infoIndex);
                    tag.removeAttribute('data-index');
                    setFileInfo(pluginName, tag, uploadEventHandler, null, resizing);
                } else currentTags.push(tag.getAttribute('data-index') * 1);
            }
            for(let i = 0, dataIndex; i < infoList.length; i++){
                dataIndex = infoList[i].index;
                if (currentTags.indexOf(dataIndex) > -1) continue;
                infoList.splice(i, 1);
                if (typeof uploadEventHandler === 'function') uploadEventHandler(null, dataIndex, 'delete', null, 0, this);
                i--;
            }
            if (resizing) this.context.resizing._resize_plugin = _resize_plugin;
        },
        /**
         * @description Create info object of file and add it to "_infoList" (this.context[pluginName]._infoList[])
         * @param {String} pluginName Plugin name 
         * @param {Element} element 
         * @param {Function|null} uploadEventHandler Event handler to process updated file info (created in setInfo)
         * @param {Object|null} file 
         * @param {Boolean} resizing True if the plugin is using a resizing module
         * @example 
         * uploadCallBack {.. file = { name: fileList[i].name, size: fileList[i].size };
         * this.plugins.fileManager.setInfo.call(this, 'image', oImg, this.functions.onImageUpload, file, true);
         */ setInfo: function(pluginName, element, uploadEventHandler, file, resizing) {
            const _resize_plugin = resizing ? this.context.resizing._resize_plugin : '';
            if (resizing) this.context.resizing._resize_plugin = pluginName;
            const plguin = this.plugins[pluginName];
            const context = this.context[pluginName];
            const infoList = context._infoList;
            let dataIndex = element.getAttribute('data-index');
            let info = null;
            let state = '';
            if (!file) file = {
                'name': element.getAttribute('data-file-name') || (typeof element.src === 'string' ? element.src.split('/').pop() : ''),
                'size': element.getAttribute('data-file-size') || 0
            };
            // create
            if (!dataIndex || this._componentsInfoInit) {
                state = 'create';
                dataIndex = context._infoIndex++;
                element.setAttribute('data-index', dataIndex);
                element.setAttribute('data-file-name', file.name);
                element.setAttribute('data-file-size', file.size);
                info = {
                    src: element.src,
                    index: dataIndex * 1,
                    name: file.name,
                    size: file.size
                };
                infoList.push(info);
            } else {
                state = 'update';
                dataIndex *= 1;
                for(let i = 0, len = infoList.length; i < len; i++)if (dataIndex === infoList[i].index) {
                    info = infoList[i];
                    break;
                }
                if (!info) {
                    dataIndex = context._infoIndex++;
                    info = {
                        index: dataIndex
                    };
                    infoList.push(info);
                }
                info.src = element.src;
                info.name = element.getAttribute("data-file-name");
                info.size = element.getAttribute("data-file-size") * 1;
            }
            // method bind
            info.element = element;
            info.delete = plguin.destroy.bind(this, element);
            info.select = (function(element) {
                element.scrollIntoView(true);
                this._w.setTimeout(plguin.select.bind(this, element));
            }).bind(this, element);
            if (resizing) {
                if (!element.getAttribute('origin-size') && element.naturalWidth) element.setAttribute('origin-size', element.naturalWidth + ',' + element.naturalHeight);
                if (!element.getAttribute('data-origin')) {
                    const container = this.util.getParentElement(element, this.util.isMediaComponent);
                    const cover = this.util.getParentElement(element, 'FIGURE');
                    const w = this.plugins.resizing._module_getSizeX.call(this, context, element, cover, container);
                    const h = this.plugins.resizing._module_getSizeY.call(this, context, element, cover, container);
                    element.setAttribute('data-origin', w + ',' + h);
                    element.setAttribute('data-size', w + ',' + h);
                }
                if (!element.style.width) {
                    const size = (element.getAttribute('data-size') || element.getAttribute('data-origin') || '').split(',');
                    plguin.onModifyMode.call(this, element, null);
                    plguin.applySize.call(this, size[0], size[1]);
                }
                this.context.resizing._resize_plugin = _resize_plugin;
            }
            if (typeof uploadEventHandler === 'function') uploadEventHandler(element, dataIndex, state, info, --context._uploadFileLength < 0 ? 0 : context._uploadFileLength, this);
        },
        /**
         * @description Delete info object at "_infoList"
         * @param {String} pluginName Plugin name 
         * @param {Number} index index of info object (this.context[pluginName]._infoList[].index)
         * @param {Function|null} uploadEventHandler Event handler to process updated file info (created in setInfo)
         */ deleteInfo: function(pluginName, index, uploadEventHandler) {
            if (index >= 0) {
                const infoList = this.context[pluginName]._infoList;
                for(let i = 0, len = infoList.length; i < len; i++)if (index === infoList[i].index) {
                    infoList.splice(i, 1);
                    if (typeof uploadEventHandler === 'function') uploadEventHandler(null, index, 'delete', null, 0, this);
                    return;
                }
            }
        },
        /**
         * @description Reset info object and "_infoList = []", "_infoIndex = 0"
         * @param {String} pluginName Plugin name 
         * @param {Function|null} uploadEventHandler Event handler to process updated file info (created in setInfo)
         */ resetInfo: function(pluginName, uploadEventHandler) {
            const context = this.context[pluginName];
            if (typeof uploadEventHandler === 'function') {
                const infoList = context._infoList;
                for(let i = 0, len = infoList.length; i < len; i++)uploadEventHandler(null, infoList[i].index, 'delete', null, 0, this);
            }
            context._infoList = [];
            context._infoIndex = 0;
        }
    };
    if (typeof noGlobal === "undefined") {
        if (!window1.SUNEDITOR_MODULES) Object.defineProperty(window1, 'SUNEDITOR_MODULES', {
            enumerable: true,
            writable: false,
            configurable: false,
            value: {}
        });
        Object.defineProperty(window1.SUNEDITOR_MODULES, 'fileManager', {
            enumerable: true,
            writable: false,
            configurable: false,
            value: fileManager
        });
    }
    return fileManager;
});
}),
"5076": (function (module, __unused_webpack_exports, __webpack_require__) {
/* module decorator */ module = __webpack_require__.nmd(module);
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */ 'use strict';
(function(global, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') module.exports = global.document ? factory(global, true) : function(w) {
        if (!w.document) throw new Error('SUNEDITOR_MODULES a window with a document');
        return factory(w);
    };
    else factory(global);
})(typeof window !== 'undefined' ? window : this, function(window1, noGlobal) {
    const resizing = {
        name: 'resizing',
        /**
         * @description Constructor
         * Require context properties when resizing module
            inputX: Element,
            inputY: Element,
            _container: null,
            _cover: null,
            _element: null,
            _element_w: 1,
            _element_h: 1,
            _element_l: 0,
            _element_t: 0,
            _defaultSizeX: 'auto',
            _defaultSizeY: 'auto',
            _origin_w: core.options.imageWidth === 'auto' ? '' : core.options.imageWidth,
            _origin_h: core.options.imageHeight === 'auto' ? '' : core.options.imageHeight,
            _proportionChecked: true,
            // -- select function --
            _resizing: core.options.imageResizing,
            _resizeDotHide: !core.options.imageHeightShow,
            _rotation: core.options.imageRotation,
            _onlyPercentage: core.options.imageSizeOnlyPercentage,
            _ratio: false,
            _ratioX: 1,
            _ratioY: 1
            _captionShow: true,
            // -- when used caption (_captionShow: true) --
            _caption: null,
            _captionChecked: false,
            captionCheckEl: null,
         * @param {Object} core Core object 
         */ add: function(core) {
            const icons = core.icons;
            const context = core.context;
            context.resizing = {
                _resizeClientX: 0,
                _resizeClientY: 0,
                _resize_plugin: '',
                _resize_w: 0,
                _resize_h: 0,
                _origin_w: 0,
                _origin_h: 0,
                _rotateVertical: false,
                _resize_direction: '',
                _move_path: null,
                _isChange: false,
                alignIcons: {
                    basic: icons.align_justify,
                    left: icons.align_left,
                    right: icons.align_right,
                    center: icons.align_center
                }
            };
            /** resize controller, button */ let resize_div_container = this.setController_resize(core);
            context.resizing.resizeContainer = resize_div_container;
            context.resizing.resizeDiv = resize_div_container.querySelector('.se-modal-resize');
            context.resizing.resizeDot = resize_div_container.querySelector('.se-resize-dot');
            context.resizing.resizeDisplay = resize_div_container.querySelector('.se-resize-display');
            let resize_button = this.setController_button(core);
            context.resizing.resizeButton = resize_button;
            let resize_handles = context.resizing.resizeHandles = context.resizing.resizeDot.querySelectorAll('span');
            context.resizing.resizeButtonGroup = resize_button.querySelector('._se_resizing_btn_group');
            context.resizing.rotationButtons = resize_button.querySelectorAll('._se_resizing_btn_group ._se_rotation');
            context.resizing.percentageButtons = resize_button.querySelectorAll('._se_resizing_btn_group ._se_percentage');
            context.resizing.alignMenu = resize_button.querySelector('.se-resizing-align-list');
            context.resizing.alignMenuList = context.resizing.alignMenu.querySelectorAll('button');
            context.resizing.alignButton = resize_button.querySelector('._se_resizing_align_button');
            context.resizing.autoSizeButton = resize_button.querySelector('._se_resizing_btn_group ._se_auto_size');
            context.resizing.captionButton = resize_button.querySelector('._se_resizing_caption_button');
            /** add event listeners */ resize_div_container.addEventListener('mousedown', function(e) {
                e.preventDefault();
            });
            resize_handles[0].addEventListener('mousedown', this.onMouseDown_resize_handle.bind(core));
            resize_handles[1].addEventListener('mousedown', this.onMouseDown_resize_handle.bind(core));
            resize_handles[2].addEventListener('mousedown', this.onMouseDown_resize_handle.bind(core));
            resize_handles[3].addEventListener('mousedown', this.onMouseDown_resize_handle.bind(core));
            resize_handles[4].addEventListener('mousedown', this.onMouseDown_resize_handle.bind(core));
            resize_handles[5].addEventListener('mousedown', this.onMouseDown_resize_handle.bind(core));
            resize_handles[6].addEventListener('mousedown', this.onMouseDown_resize_handle.bind(core));
            resize_handles[7].addEventListener('mousedown', this.onMouseDown_resize_handle.bind(core));
            resize_button.addEventListener('click', this.onClick_resizeButton.bind(core));
            /** append html */ context.element.relative.appendChild(resize_div_container);
            context.element.relative.appendChild(resize_button);
            /** empty memory */ resize_div_container = null, resize_button = null, resize_handles = null;
        },
        /** resize controller, button (image, iframe, video) */ setController_resize: function(core) {
            const resize_container = core.util.createElement('DIV');
            resize_container.className = 'se-controller se-resizing-container';
            resize_container.style.display = 'none';
            resize_container.innerHTML = '<div class="se-modal-resize"></div><div class="se-resize-dot"><span class="tl"></span><span class="tr"></span><span class="bl"></span><span class="br"></span><span class="lw"></span><span class="th"></span><span class="rw"></span><span class="bh"></span><div class="se-resize-display"></div></div>';
            return resize_container;
        },
        setController_button: function(core) {
            const lang = core.lang;
            const icons = core.icons;
            const resize_button = core.util.createElement("DIV");
            resize_button.className = "se-controller se-controller-resizing";
            resize_button.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="se-btn-group _se_resizing_btn_group"><button type="button" data-command="percent" data-value="1" class="se-tooltip _se_percentage"><span>100%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.resize100 + '</span></span>' + '</button>' + '<button type="button" data-command="percent" data-value="0.75" class="se-tooltip _se_percentage">' + '<span>75%</span>' + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.resize75 + '</span></span>' + '</button>' + '<button type="button" data-command="percent" data-value="0.5" class="se-tooltip _se_percentage">' + '<span>50%</span>' + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.resize50 + '</span></span>' + '</button>' + '<button type="button" data-command="auto" class="se-btn se-tooltip _se_auto_size">' + icons.auto_size + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.autoSize + '</span></span>' + '</button>' + '<button type="button" data-command="rotate" data-value="-90" class="se-btn se-tooltip _se_rotation">' + icons.rotate_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.rotateLeft + '</span></span>' + '</button>' + '<button type="button" data-command="rotate" data-value="90" class="se-btn se-tooltip _se_rotation">' + icons.rotate_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.rotateRight + '</span></span>' + '</button>' + '</div>' + '<div class="se-btn-group" style="padding-top: 0;">' + '<button type="button" data-command="mirror" data-value="h" class="se-btn se-tooltip">' + icons.mirror_horizontal + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.mirrorHorizontal + '</span></span>' + '</button>' + '<button type="button" data-command="mirror" data-value="v" class="se-btn se-tooltip">' + icons.mirror_vertical + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.mirrorVertical + '</span></span>' + '</button>' + '<button type="button" data-command="onalign" class="se-btn se-tooltip _se_resizing_align_button">' + icons.align_justify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.toolbar.align + '</span></span>' + '</button>' + '<div class="se-btn-group-sub sun-editor-common se-list-layer se-resizing-align-list">' + '<div class="se-list-inner">' + '<ul class="se-list-basic">' + '<li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="basic">' + icons.align_justify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.dialogBox.basic + '</span></span>' + '</button></li>' + '<li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="left">' + icons.align_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.dialogBox.left + '</span></span>' + '</button></li>' + '<li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="center">' + icons.align_center + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.dialogBox.center + '</span></span>' + '</button></li>' + '<li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="right">' + icons.align_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.dialogBox.right + '</span></span>' + '</button></li>' + '</ul>' + '</div>' + '</div>' + '<button type="button" data-command="caption" class="se-btn se-tooltip _se_resizing_caption_button">' + icons.caption + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.dialogBox.caption + '</span></span>' + '</button>' + '<button type="button" data-command="revert" class="se-btn se-tooltip">' + icons.revert + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.dialogBox.revertButton + '</span></span>' + '</button>' + '<button type="button" data-command="update" class="se-btn se-tooltip">' + icons.modify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.edit + '</span></span>' + '</button>' + '<button type="button" data-command="delete" class="se-btn se-tooltip">' + icons.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.remove + '</span></span>' + '</button>' + '</div>';
            return resize_button;
        },
        /**
         * @description Gets the width size
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         * @param {Element} element Target element
         * @param {Element} cover Cover element (FIGURE)
         * @param {Element} container Container element (DIV.se-component)
         * @returns {String}
         */ _module_getSizeX: function(contextPlugin, element, cover, container) {
            if (!element) element = contextPlugin._element;
            if (!cover) cover = contextPlugin._cover;
            if (!container) container = contextPlugin._container;
            if (!element) return '';
            return !/%$/.test(element.style.width) ? element.style.width : (container && this.util.getNumber(container.style.width, 2) || 100) + '%';
        },
        /**
         * @description Gets the height size
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         * @param {Element} element Target element
         * @param {Element} cover Cover element (FIGURE)
         * @param {Element} container Container element (DIV.se-component)
         * @returns {String}
         */ _module_getSizeY: function(contextPlugin, element, cover, container) {
            if (!element) element = contextPlugin._element;
            if (!cover) cover = contextPlugin._cover;
            if (!container) container = contextPlugin._container;
            if (!container || !cover) return element && element.style.height || '';
            return this.util.getNumber(cover.style.paddingBottom, 0) > 0 && !this.context.resizing._rotateVertical ? cover.style.height : !/%$/.test(element.style.height) || !/%$/.test(element.style.width) ? element.style.height : (container && this.util.getNumber(container.style.height, 2) || 100) + '%';
        },
        /**
         * @description Called at the "openModify" to put the size of the current target into the size input element.
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         * @param {Object} pluginObj Plugin object
         */ _module_setModifyInputSize: function(contextPlugin, pluginObj) {
            const percentageRotation = contextPlugin._onlyPercentage && this.context.resizing._rotateVertical;
            contextPlugin.proportion.checked = contextPlugin._proportionChecked = contextPlugin._element.getAttribute('data-proportion') !== 'false';
            let x = percentageRotation ? '' : this.plugins.resizing._module_getSizeX.call(this, contextPlugin);
            if (x === contextPlugin._defaultSizeX) x = '';
            if (contextPlugin._onlyPercentage) x = this.util.getNumber(x, 2);
            contextPlugin.inputX.value = x;
            pluginObj.setInputSize.call(this, 'x');
            if (!contextPlugin._onlyPercentage) {
                let y = percentageRotation ? '' : this.plugins.resizing._module_getSizeY.call(this, contextPlugin);
                if (y === contextPlugin._defaultSizeY) y = '';
                if (contextPlugin._onlyPercentage) y = this.util.getNumber(y, 2);
                contextPlugin.inputY.value = y;
            }
            contextPlugin.inputX.disabled = percentageRotation ? true : false;
            contextPlugin.inputY.disabled = percentageRotation ? true : false;
            contextPlugin.proportion.disabled = percentageRotation ? true : false;
            pluginObj.setRatio.call(this);
        },
        /**
         * @description It is called in "setInputSize" (input tag keyupEvent), 
         * checks the value entered in the input tag, 
         * calculates the ratio, and sets the calculated value in the input tag of the opposite size.
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         * @param {String} xy 'x': width, 'y': height
         */ _module_setInputSize: function(contextPlugin, xy) {
            if (contextPlugin._onlyPercentage) {
                if (xy === 'x' && contextPlugin.inputX.value > 100) contextPlugin.inputX.value = 100;
                return;
            }
            if (contextPlugin.proportion.checked && contextPlugin._ratio && /\d/.test(contextPlugin.inputX.value) && /\d/.test(contextPlugin.inputY.value)) {
                const xUnit = contextPlugin.inputX.value.replace(/\d+|\./g, '') || contextPlugin.sizeUnit;
                const yUnit = contextPlugin.inputY.value.replace(/\d+|\./g, '') || contextPlugin.sizeUnit;
                if (xUnit !== yUnit) return;
                const dec = xUnit === '%' ? 2 : 0;
                if (xy === 'x') contextPlugin.inputY.value = this.util.getNumber(contextPlugin._ratioY * this.util.getNumber(contextPlugin.inputX.value, dec), dec) + yUnit;
                else contextPlugin.inputX.value = this.util.getNumber(contextPlugin._ratioX * this.util.getNumber(contextPlugin.inputY.value, dec), dec) + xUnit;
            }
        },
        /**
         * @description It is called in "setRatio" (input and proportionCheck tags changeEvent), 
         * checks the value of the input tag, calculates the ratio, and resets it in the input tag.
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         */ _module_setRatio: function(contextPlugin) {
            const xValue = contextPlugin.inputX.value;
            const yValue = contextPlugin.inputY.value;
            if (contextPlugin.proportion.checked && /\d+/.test(xValue) && /\d+/.test(yValue)) {
                const xUnit = xValue.replace(/\d+|\./g, '') || contextPlugin.sizeUnit;
                const yUnit = yValue.replace(/\d+|\./g, '') || contextPlugin.sizeUnit;
                if (xUnit !== yUnit) contextPlugin._ratio = false;
                else if (!contextPlugin._ratio) {
                    const x = this.util.getNumber(xValue, 0);
                    const y = this.util.getNumber(yValue, 0);
                    contextPlugin._ratio = true;
                    contextPlugin._ratioX = x / y;
                    contextPlugin._ratioY = y / x;
                }
            } else contextPlugin._ratio = false;
        },
        /**
         * @description Revert size of element to origin size (plugin._origin_w, plugin._origin_h)
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         */ _module_sizeRevert: function(contextPlugin) {
            if (contextPlugin._onlyPercentage) contextPlugin.inputX.value = contextPlugin._origin_w > 100 ? 100 : contextPlugin._origin_w;
            else {
                contextPlugin.inputX.value = contextPlugin._origin_w;
                contextPlugin.inputY.value = contextPlugin._origin_h;
            }
        },
        /**
         * @description Save the size data (element.setAttribute("data-size"))
         * Used at the "setSize" method
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         */ _module_saveCurrentSize: function(contextPlugin) {
            const x = this.plugins.resizing._module_getSizeX.call(this, contextPlugin);
            const y = this.plugins.resizing._module_getSizeY.call(this, contextPlugin);
            contextPlugin._element.setAttribute('data-size', x + ',' + y);
            if (!!contextPlugin._videoRatio) contextPlugin._videoRatio = y;
        },
        /**
         * @description Call the resizing module
         * @param {Element} targetElement Resizing target element
         * @param {string} plugin Plugin name
         * @returns {Object} Size of resizing div {w, h, t, l}
         */ call_controller_resize: function(targetElement, plugin) {
            const contextResizing = this.context.resizing;
            const contextPlugin = this.context[plugin];
            contextResizing._resize_plugin = plugin;
            const resizeContainer = contextResizing.resizeContainer;
            const resizeDiv = contextResizing.resizeDiv;
            const offset = this.util.getOffset(targetElement, this.context.element.wysiwygFrame);
            const isVertical = contextResizing._rotateVertical = /^(90|270)$/.test(Math.abs(targetElement.getAttribute('data-rotate')).toString());
            const w = isVertical ? targetElement.offsetHeight : targetElement.offsetWidth;
            const h = isVertical ? targetElement.offsetWidth : targetElement.offsetHeight;
            const t = offset.top;
            const l = offset.left - this.context.element.wysiwygFrame.scrollLeft;
            resizeContainer.style.top = t + 'px';
            resizeContainer.style.left = l + 'px';
            resizeContainer.style.width = w + 'px';
            resizeContainer.style.height = h + 'px';
            resizeDiv.style.top = '0px';
            resizeDiv.style.left = '0px';
            resizeDiv.style.width = w + 'px';
            resizeDiv.style.height = h + 'px';
            let align = targetElement.getAttribute('data-align') || 'basic';
            align = align === 'none' ? 'basic' : align;
            // text
            const container = this.util.getParentElement(targetElement, this.util.isComponent);
            const cover = this.util.getParentElement(targetElement, 'FIGURE');
            const displayX = this.plugins.resizing._module_getSizeX.call(this, contextPlugin, targetElement, cover, container) || 'auto';
            const displayY = contextPlugin._onlyPercentage && plugin === 'image' ? '' : ', ' + (this.plugins.resizing._module_getSizeY.call(this, contextPlugin, targetElement, cover, container) || 'auto');
            this.util.changeTxt(contextResizing.resizeDisplay, this.lang.dialogBox[align] + ' (' + displayX + displayY + ')');
            // resizing display
            contextResizing.resizeButtonGroup.style.display = contextPlugin._resizing ? '' : 'none';
            const resizeDotShow = contextPlugin._resizing && !contextPlugin._resizeDotHide && !contextPlugin._onlyPercentage ? 'flex' : 'none';
            const resizeHandles = contextResizing.resizeHandles;
            for(let i = 0, len = resizeHandles.length; i < len; i++)resizeHandles[i].style.display = resizeDotShow;
            if (contextPlugin._resizing) {
                const rotations = contextResizing.rotationButtons;
                rotations[0].style.display = rotations[1].style.display = contextPlugin._rotation ? '' : 'none';
            }
            // align icon
            if (contextPlugin._alignHide) contextResizing.alignButton.style.display = 'none';
            else {
                contextResizing.alignButton.style.display = '';
                const alignList = contextResizing.alignMenuList;
                this.util.changeElement(contextResizing.alignButton.firstElementChild, contextResizing.alignIcons[align]);
                for(let i = 0, len = alignList.length; i < len; i++)if (alignList[i].getAttribute('data-value') === align) this.util.addClass(alignList[i], 'on');
                else this.util.removeClass(alignList[i], 'on');
            }
            // percentage active
            const pButtons = contextResizing.percentageButtons;
            const value = /%$/.test(targetElement.style.width) && /%$/.test(container.style.width) ? this.util.getNumber(container.style.width, 0) / 100 + '' : '';
            for(let i = 0, len = pButtons.length; i < len; i++)if (pButtons[i].getAttribute('data-value') === value) this.util.addClass(pButtons[i], 'active');
            else this.util.removeClass(pButtons[i], 'active');
            // caption display, active
            if (!contextPlugin._captionShow) contextResizing.captionButton.style.display = 'none';
            else {
                contextResizing.captionButton.style.display = '';
                if (this.util.getChildElement(targetElement.parentNode, 'figcaption')) {
                    this.util.addClass(contextResizing.captionButton, 'active');
                    contextPlugin._captionChecked = true;
                } else {
                    this.util.removeClass(contextResizing.captionButton, 'active');
                    contextPlugin._captionChecked = false;
                }
            }
            resizeContainer.style.display = 'block';
            const addOffset = {
                left: 0,
                top: 50
            };
            if (this.options.iframe) {
                addOffset.left -= this.context.element.wysiwygFrame.parentElement.offsetLeft;
                addOffset.top -= this.context.element.wysiwygFrame.parentElement.offsetTop;
            }
            this.setControllerPosition(contextResizing.resizeButton, resizeContainer, 'bottom', addOffset);
            this.controllersOn(resizeContainer, contextResizing.resizeButton, this.util.setDisabledButtons.bind(this.util, false, this.resizingDisabledButtons), targetElement, plugin);
            this.util.setDisabledButtons(true, this.resizingDisabledButtons);
            contextResizing._resize_w = w;
            contextResizing._resize_h = h;
            const originSize = (targetElement.getAttribute('origin-size') || '').split(',');
            contextResizing._origin_w = originSize[0] || targetElement.naturalWidth;
            contextResizing._origin_h = originSize[1] || targetElement.naturalHeight;
            return {
                w: w,
                h: h,
                t: t,
                l: l
            };
        },
        _closeAlignMenu: null,
        /**
         * @description Open align submenu of module
         */ openAlignMenu: function() {
            const alignButton = this.context.resizing.alignButton;
            this.util.addClass(alignButton, 'on');
            this.context.resizing.alignMenu.style.top = alignButton.offsetTop + alignButton.offsetHeight + 'px';
            this.context.resizing.alignMenu.style.left = alignButton.offsetLeft - alignButton.offsetWidth / 2 + 'px';
            this.context.resizing.alignMenu.style.display = 'block';
            this.plugins.resizing._closeAlignMenu = (function() {
                this.util.removeClass(this.context.resizing.alignButton, 'on');
                this.context.resizing.alignMenu.style.display = 'none';
                this.removeDocEvent('click', this.plugins.resizing._closeAlignMenu);
                this.plugins.resizing._closeAlignMenu = null;
            }).bind(this);
            this.addDocEvent('click', this.plugins.resizing._closeAlignMenu);
        },
        /**
         * @description Click event of resizing toolbar
         * Performs the action of the clicked toolbar button.
         * @param {MouseEvent} e Event object
         */ onClick_resizeButton: function(e) {
            e.stopPropagation();
            const target = e.target;
            const command = target.getAttribute('data-command') || target.parentNode.getAttribute('data-command');
            if (!command) return;
            const value = target.getAttribute('data-value') || target.parentNode.getAttribute('data-value');
            const pluginName = this.context.resizing._resize_plugin;
            const currentContext = this.context[pluginName];
            const contextEl = currentContext._element;
            const currentModule = this.plugins[pluginName];
            e.preventDefault();
            if (typeof this.plugins.resizing._closeAlignMenu === 'function') {
                this.plugins.resizing._closeAlignMenu();
                if (command === 'onalign') return;
            }
            switch(command){
                case 'auto':
                    this.plugins.resizing.resetTransform.call(this, contextEl);
                    currentModule.setAutoSize.call(this);
                    this.selectComponent(contextEl, pluginName);
                    break;
                case 'percent':
                    let percentY = this.plugins.resizing._module_getSizeY.call(this, currentContext);
                    if (this.context.resizing._rotateVertical) {
                        const percentage = contextEl.getAttribute('data-percentage');
                        if (percentage) percentY = percentage.split(',')[1];
                    }
                    this.plugins.resizing.resetTransform.call(this, contextEl);
                    currentModule.setPercentSize.call(this, value * 100, this.util.getNumber(percentY, 0) === null || !/%$/.test(percentY) ? '' : percentY);
                    this.selectComponent(contextEl, pluginName);
                    break;
                case 'mirror':
                    const r = contextEl.getAttribute('data-rotate') || '0';
                    let x = contextEl.getAttribute('data-rotateX') || '';
                    let y = contextEl.getAttribute('data-rotateY') || '';
                    if (value === 'h' && !this.context.resizing._rotateVertical || value === 'v' && this.context.resizing._rotateVertical) y = y ? '' : '180';
                    else x = x ? '' : '180';
                    contextEl.setAttribute('data-rotateX', x);
                    contextEl.setAttribute('data-rotateY', y);
                    this.plugins.resizing._setTransForm(contextEl, r, x, y);
                    break;
                case 'rotate':
                    const contextResizing = this.context.resizing;
                    const slope = contextEl.getAttribute('data-rotate') * 1 + value * 1;
                    const deg = this._w.Math.abs(slope) >= 360 ? 0 : slope;
                    contextEl.setAttribute('data-rotate', deg);
                    contextResizing._rotateVertical = /^(90|270)$/.test(this._w.Math.abs(deg).toString());
                    this.plugins.resizing.setTransformSize.call(this, contextEl, null, null);
                    this.selectComponent(contextEl, pluginName);
                    break;
                case 'onalign':
                    this.plugins.resizing.openAlignMenu.call(this);
                    return;
                case 'align':
                    const alignValue = value === 'basic' ? 'none' : value;
                    currentModule.setAlign.call(this, alignValue, null, null, null);
                    this.selectComponent(contextEl, pluginName);
                    break;
                case 'caption':
                    const caption = !currentContext._captionChecked;
                    currentModule.openModify.call(this, true);
                    currentContext._captionChecked = currentContext.captionCheckEl.checked = caption;
                    currentModule.update_image.call(this, false, false, false);
                    if (caption) {
                        const captionText = this.util.getChildElement(currentContext._caption, function(current) {
                            return current.nodeType === 3;
                        });
                        if (!captionText) currentContext._caption.focus();
                        else this.setRange(captionText, 0, captionText, captionText.textContent.length);
                        this.controllersOff();
                    } else {
                        this.selectComponent(contextEl, pluginName);
                        currentModule.openModify.call(this, true);
                    }
                    break;
                case 'revert':
                    currentModule.setOriginSize.call(this);
                    this.selectComponent(contextEl, pluginName);
                    break;
                case 'update':
                    currentModule.openModify.call(this);
                    this.controllersOff();
                    break;
                case 'delete':
                    currentModule.destroy.call(this);
                    break;
            }
            // history stack
            this.history.push(false);
        },
        /**
         * @description Initialize the transform style (rotation) of the element.
         * @param {Element} element Target element
         */ resetTransform: function(element) {
            const size = (element.getAttribute('data-size') || element.getAttribute('data-origin') || '').split(',');
            this.context.resizing._rotateVertical = false;
            element.style.maxWidth = '';
            element.style.transform = '';
            element.style.transformOrigin = '';
            element.setAttribute('data-rotate', '');
            element.setAttribute('data-rotateX', '');
            element.setAttribute('data-rotateY', '');
            this.plugins[this.context.resizing._resize_plugin].setSize.call(this, size[0] ? size[0] : 'auto', size[1] ? size[1] : '', true);
        },
        /**
         * @description Set the transform style (rotation) of the element.
         * @param {Element} element Target element
         * @param {Number|null} width Element's width size
         * @param {Number|null} height Element's height size
         */ setTransformSize: function(element, width, height) {
            let percentage = element.getAttribute('data-percentage');
            const isVertical = this.context.resizing._rotateVertical;
            const deg = element.getAttribute('data-rotate') * 1;
            let transOrigin = '';
            if (percentage && !isVertical) {
                percentage = percentage.split(',');
                if (percentage[0] === 'auto' && percentage[1] === 'auto') this.plugins[this.context.resizing._resize_plugin].setAutoSize.call(this);
                else this.plugins[this.context.resizing._resize_plugin].setPercentSize.call(this, percentage[0], percentage[1]);
            } else {
                const cover = this.util.getParentElement(element, 'FIGURE');
                const offsetW = width || element.offsetWidth;
                const offsetH = height || element.offsetHeight;
                const w = (isVertical ? offsetH : offsetW) + 'px';
                const h = (isVertical ? offsetW : offsetH) + 'px';
                this.plugins[this.context.resizing._resize_plugin].cancelPercentAttr.call(this);
                this.plugins[this.context.resizing._resize_plugin].setSize.call(this, offsetW + 'px', offsetH + 'px', true);
                cover.style.width = w;
                cover.style.height = !!this.context[this.context.resizing._resize_plugin]._caption ? '' : h;
                if (isVertical) {
                    let transW = offsetW / 2 + 'px ' + offsetW / 2 + 'px 0';
                    let transH = offsetH / 2 + 'px ' + offsetH / 2 + 'px 0';
                    transOrigin = deg === 90 || deg === -270 ? transH : transW;
                }
            }
            element.style.transformOrigin = transOrigin;
            this.plugins.resizing._setTransForm(element, deg.toString(), element.getAttribute('data-rotateX') || '', element.getAttribute('data-rotateY') || '');
            if (isVertical) element.style.maxWidth = 'none';
            else element.style.maxWidth = '';
            this.plugins.resizing.setCaptionPosition.call(this, element);
        },
        _setTransForm: function(element, r, x, y) {
            let width = (element.offsetWidth - element.offsetHeight) * (/-/.test(r) ? 1 : -1);
            let translate = '';
            if (/[1-9]/.test(r) && (x || y)) {
                translate = x ? 'Y' : 'X';
                switch(r){
                    case '90':
                        translate = x && y ? 'X' : y ? translate : '';
                        break;
                    case '270':
                        width *= -1;
                        translate = x && y ? 'Y' : x ? translate : '';
                        break;
                    case '-90':
                        translate = x && y ? 'Y' : x ? translate : '';
                        break;
                    case '-270':
                        width *= -1;
                        translate = x && y ? 'X' : y ? translate : '';
                        break;
                    default:
                        translate = '';
                }
            }
            if (r % 180 === 0) element.style.maxWidth = '';
            element.style.transform = 'rotate(' + r + 'deg)' + (x ? ' rotateX(' + x + 'deg)' : '') + (y ? ' rotateY(' + y + 'deg)' : '') + (translate ? ' translate' + translate + '(' + width + 'px)' : '');
        },
        /**
         * @description The position of the caption is set automatically.
         * @param {Element} element Target element (not caption element)
         */ setCaptionPosition: function(element) {
            const figcaption = this.util.getChildElement(this.util.getParentElement(element, 'FIGURE'), 'FIGCAPTION');
            if (figcaption) figcaption.style.marginTop = (this.context.resizing._rotateVertical ? element.offsetWidth - element.offsetHeight : 0) + 'px';
        },
        /**
         * @description Mouse down event of resize handles
         * @param {MouseEvent} e Event object 
         */ onMouseDown_resize_handle: function(e) {
            e.stopPropagation();
            e.preventDefault();
            const contextResizing = this.context.resizing;
            const direction = contextResizing._resize_direction = e.target.classList[0];
            contextResizing._resizeClientX = e.clientX;
            contextResizing._resizeClientY = e.clientY;
            this.context.element.resizeBackground.style.display = 'block';
            contextResizing.resizeButton.style.display = 'none';
            contextResizing.resizeDiv.style.float = /l/.test(direction) ? 'right' : /r/.test(direction) ? 'left' : 'none';
            const closureFunc_bind = (function closureFunc(e) {
                if (e.type === 'keydown' && e.keyCode !== 27) return;
                const change = contextResizing._isChange;
                contextResizing._isChange = false;
                this.removeDocEvent('mousemove', resizing_element_bind);
                this.removeDocEvent('mouseup', closureFunc_bind);
                this.removeDocEvent('keydown', closureFunc_bind);
                if (e.type === 'keydown') {
                    this.controllersOff();
                    this.context.element.resizeBackground.style.display = 'none';
                    this.plugins[this.context.resizing._resize_plugin].init.call(this);
                } else {
                    // element resize
                    this.plugins.resizing.cancel_controller_resize.call(this, direction);
                    // history stack
                    if (change) this.history.push(false);
                }
            }).bind(this);
            const resizing_element_bind = this.plugins.resizing.resizing_element.bind(this, contextResizing, direction, this.context[contextResizing._resize_plugin]);
            this.addDocEvent('mousemove', resizing_element_bind);
            this.addDocEvent('mouseup', closureFunc_bind);
            this.addDocEvent('keydown', closureFunc_bind);
        },
        /**
         * @description Mouse move event after call "onMouseDown_resize_handle" of resize handles
         * The size of the module's "div" is adjusted according to the mouse move event.
         * @param {Object} contextResizing "core.context.resizing" object (binding argument)
         * @param {String} direction Direction ("tl", "tr", "bl", "br", "lw", "th", "rw", "bh") (binding argument)
         * @param {Object} plugin "core.context[currentPlugin]" object (binding argument)
         * @param {MouseEvent} e Event object
         */ resizing_element: function(contextResizing, direction, plugin, e) {
            const clientX = e.clientX;
            const clientY = e.clientY;
            let resultW = plugin._element_w;
            let resultH = plugin._element_h;
            const w = plugin._element_w + (/r/.test(direction) ? clientX - contextResizing._resizeClientX : contextResizing._resizeClientX - clientX);
            const h = plugin._element_h + (/b/.test(direction) ? clientY - contextResizing._resizeClientY : contextResizing._resizeClientY - clientY);
            const wh = plugin._element_h / plugin._element_w * w;
            if (/t/.test(direction)) contextResizing.resizeDiv.style.top = plugin._element_h - (/h/.test(direction) ? h : wh) + 'px';
            if (/l/.test(direction)) contextResizing.resizeDiv.style.left = plugin._element_w - w + 'px';
            if (/r|l/.test(direction)) {
                contextResizing.resizeDiv.style.width = w + 'px';
                resultW = w;
            }
            if (/^(t|b)[^h]$/.test(direction)) {
                contextResizing.resizeDiv.style.height = wh + 'px';
                resultH = wh;
            } else if (/^(t|b)h$/.test(direction)) {
                contextResizing.resizeDiv.style.height = h + 'px';
                resultH = h;
            }
            contextResizing._resize_w = resultW;
            contextResizing._resize_h = resultH;
            this.util.changeTxt(contextResizing.resizeDisplay, this._w.Math.round(resultW) + ' x ' + this._w.Math.round(resultH));
            contextResizing._isChange = true;
        },
        /**
         * @description Resize the element to the size of the "div" adjusted in the "resizing_element" method.
         * Called at the mouse-up event registered in "onMouseDown_resize_handle".
         * @param {String} direction Direction ("tl", "tr", "bl", "br", "lw", "th", "rw", "bh")
         */ cancel_controller_resize: function(direction) {
            const isVertical = this.context.resizing._rotateVertical;
            this.controllersOff();
            this.context.element.resizeBackground.style.display = 'none';
            let w = this._w.Math.round(isVertical ? this.context.resizing._resize_h : this.context.resizing._resize_w);
            let h = this._w.Math.round(isVertical ? this.context.resizing._resize_w : this.context.resizing._resize_h);
            if (!isVertical && !/%$/.test(w)) {
                const padding = 16;
                const limit = this.context.element.wysiwygFrame.clientWidth - padding * 2 - 2;
                if (this.util.getNumber(w, 0) > limit) {
                    h = this._w.Math.round(h / w * limit);
                    w = limit;
                }
            }
            const pluginName = this.context.resizing._resize_plugin;
            this.plugins[pluginName].setSize.call(this, w, h, false, direction);
            if (isVertical) this.plugins.resizing.setTransformSize.call(this, this.context[this.context.resizing._resize_plugin]._element, w, h);
            this.selectComponent(this.context[pluginName]._element, pluginName);
        }
    };
    if (typeof noGlobal === "undefined") {
        if (!window1.SUNEDITOR_MODULES) Object.defineProperty(window1, 'SUNEDITOR_MODULES', {
            enumerable: true,
            writable: false,
            configurable: false,
            value: {}
        });
        Object.defineProperty(window1.SUNEDITOR_MODULES, 'resizing', {
            enumerable: true,
            writable: false,
            configurable: false,
            value: resizing
        });
    }
    return resizing;
});
}),
"1206": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */ 'use strict';
var __WEBPACK_DEFAULT_EXPORT__ = {
    name: 'align',
    display: 'submenu',
    add: function(core, targetElement) {
        const icons = core.icons;
        const context = core.context;
        context.align = {
            targetButton: targetElement,
            _itemMenu: null,
            _alignList: null,
            currentAlign: '',
            defaultDir: core.options.rtl ? 'right' : 'left',
            icons: {
                justify: icons.align_justify,
                left: icons.align_left,
                right: icons.align_right,
                center: icons.align_center
            }
        };
        /** set submenu */ let listDiv = this.setSubmenu(core);
        let listUl = context.align._itemMenu = listDiv.querySelector('ul');
        /** add event listeners */ listUl.addEventListener('click', this.pickup.bind(core));
        context.align._alignList = listUl.querySelectorAll('li button');
        /** append target button menu */ core.initMenuTarget(this.name, targetElement, listDiv);
        /** empty memory */ listDiv = null, listUl = null;
    },
    setSubmenu: function(core) {
        const lang = core.lang;
        const icons = core.icons;
        const listDiv = core.util.createElement('DIV');
        const alignItems = core.options.alignItems;
        let html = '';
        for(let i = 0, item, text; i < alignItems.length; i++){
            item = alignItems[i];
            text = lang.toolbar['align' + item.charAt(0).toUpperCase() + item.slice(1)];
            html += '<li><button type="button" class="se-btn-list se-btn-align" data-value="' + item + '" title="' + text + '" aria-label="' + text + '">' + '<span class="se-list-icon">' + icons['align_' + item] + '</span>' + text + '</button>' + '</li>';
        }
        listDiv.className = 'se-submenu se-list-layer se-list-align';
        listDiv.innerHTML = '<div class="se-list-inner"><ul class="se-list-basic">' + html + '</ul>' + '</div>';
        return listDiv;
    },
    /**
     * @Override core
     */ active: function(element) {
        const alignContext = this.context.align;
        const targetButton = alignContext.targetButton;
        const target = targetButton.firstElementChild;
        if (!element) {
            this.util.changeElement(target, alignContext.icons[alignContext.defaultDir]);
            targetButton.removeAttribute('data-focus');
        } else if (this.util.isFormatElement(element)) {
            const textAlign = element.style.textAlign;
            if (textAlign) {
                this.util.changeElement(target, alignContext.icons[textAlign] || alignContext.icons[alignContext.defaultDir]);
                targetButton.setAttribute('data-focus', textAlign);
                return true;
            }
        }
        return false;
    },
    /**
     * @Override submenu
     */ on: function() {
        const alignContext = this.context.align;
        const alignList = alignContext._alignList;
        const currentAlign = alignContext.targetButton.getAttribute('data-focus') || alignContext.defaultDir;
        if (currentAlign !== alignContext.currentAlign) {
            for(let i = 0, len = alignList.length; i < len; i++)if (currentAlign === alignList[i].getAttribute('data-value')) this.util.addClass(alignList[i], 'active');
            else this.util.removeClass(alignList[i], 'active');
            alignContext.currentAlign = currentAlign;
        }
    },
    exchangeDir: function() {
        const dir = this.options.rtl ? 'right' : 'left';
        if (!this.context.align || this.context.align.defaultDir === dir) return;
        this.context.align.defaultDir = dir;
        let menu = this.context.align._itemMenu;
        let leftBtn = menu.querySelector('[data-value="left"]');
        let rightBtn = menu.querySelector('[data-value="right"]');
        if (leftBtn && rightBtn) {
            const lp = leftBtn.parentElement;
            const rp = rightBtn.parentElement;
            lp.appendChild(rightBtn);
            rp.appendChild(leftBtn);
        }
    },
    pickup: function(e) {
        e.preventDefault();
        e.stopPropagation();
        let target = e.target;
        let value = null;
        while(!value && !/UL/i.test(target.tagName)){
            value = target.getAttribute('data-value');
            target = target.parentNode;
        }
        if (!value) return;
        const defaultDir = this.context.align.defaultDir;
        const selectedFormsts = this.getSelectedElements();
        for(let i = 0, len = selectedFormsts.length; i < len; i++)this.util.setStyle(selectedFormsts[i], 'textAlign', value === defaultDir ? '' : value);
        this.effectNode = null;
        this.submenuOff();
        this.focus();
        // history stack
        this.history.push(false);
    }
};
}),
"3309": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */ 'use strict';
var __WEBPACK_DEFAULT_EXPORT__ = {
    name: 'font',
    display: 'submenu',
    add: function(core, targetElement) {
        const context = core.context;
        context.font = {
            targetText: targetElement.querySelector('.txt'),
            targetTooltip: targetElement.parentNode.querySelector('.se-tooltip-text'),
            _fontList: null,
            currentFont: ''
        };
        /** set submenu */ let listDiv = this.setSubmenu(core);
        /** add event listeners */ listDiv.querySelector('.se-list-inner').addEventListener('click', this.pickup.bind(core));
        context.font._fontList = listDiv.querySelectorAll('ul li button');
        /** append target button menu */ core.initMenuTarget(this.name, targetElement, listDiv);
        /** empty memory */ listDiv = null;
    },
    setSubmenu: function(core) {
        const lang = core.lang;
        const listDiv = core.util.createElement('DIV');
        listDiv.className = 'se-submenu se-list-layer se-list-font-family';
        let font, text, i, len;
        let fontList = core.options.font;
        let list = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + lang.toolbar.default + '" aria-label="' + lang.toolbar.default + '">(' + lang.toolbar.default + ')</button></li>';
        for(i = 0, len = fontList.length; i < len; i++){
            font = fontList[i];
            text = font.split(',')[0];
            list += '<li><button type="button" class="se-btn-list" data-value="' + font + '" data-txt="' + text + '" title="' + text + '" aria-label="' + text + '" style="font-family:' + font + ';">' + text + '</button></li>';
        }
        list += '</ul></div>';
        listDiv.innerHTML = list;
        return listDiv;
    },
    /**
     * @Override core
     */ active: function(element) {
        const target = this.context.font.targetText;
        const tooltip = this.context.font.targetTooltip;
        if (!element) {
            const font = this.hasFocus ? this.wwComputedStyle.fontFamily : this.lang.toolbar.font;
            this.util.changeTxt(target, font);
            this.util.changeTxt(tooltip, this.hasFocus ? this.lang.toolbar.font + (font ? ' (' + font + ')' : '') : font);
        } else if (element.style && element.style.fontFamily.length > 0) {
            const selectFont = element.style.fontFamily.replace(/["']/g, '');
            this.util.changeTxt(target, selectFont);
            this.util.changeTxt(tooltip, this.lang.toolbar.font + ' (' + selectFont + ')');
            return true;
        }
        return false;
    },
    /**
     * @Override submenu
     */ on: function() {
        const fontContext = this.context.font;
        const fontList = fontContext._fontList;
        const currentFont = fontContext.targetText.textContent;
        if (currentFont !== fontContext.currentFont) {
            for(let i = 0, len = fontList.length; i < len; i++)if (currentFont === fontList[i].getAttribute('data-value')) this.util.addClass(fontList[i], 'active');
            else this.util.removeClass(fontList[i], 'active');
            fontContext.currentFont = currentFont;
        }
    },
    pickup: function(e) {
        if (!/^BUTTON$/i.test(e.target.tagName)) return false;
        e.preventDefault();
        e.stopPropagation();
        const value = e.target.getAttribute('data-value');
        if (value) {
            const newNode = this.util.createElement('SPAN');
            newNode.style.fontFamily = value;
            this.nodeChange(newNode, [
                'font-family'
            ], null, null);
        } else this.nodeChange(null, [
            'font-family'
        ], [
            'span'
        ], true);
        this.submenuOff();
    }
};
}),
"4801": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* harmony import */var _modules_colorPicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/_colorPicker */"5461");
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */ 'use strict';

var __WEBPACK_DEFAULT_EXPORT__ = {
    name: 'fontColor',
    display: 'submenu',
    add: function(core, targetElement) {
        core.addModule([
            _modules_colorPicker__WEBPACK_IMPORTED_MODULE_0__["default"]
        ]);
        const context = core.context;
        context.fontColor = {
            previewEl: null,
            colorInput: null,
            colorList: null
        };
        /** set submenu */ let listDiv = this.setSubmenu(core);
        context.fontColor.colorInput = listDiv.querySelector('._se_color_picker_input');
        /** add event listeners */ context.fontColor.colorInput.addEventListener('keyup', this.onChangeInput.bind(core));
        listDiv.querySelector('._se_color_picker_submit').addEventListener('click', this.submit.bind(core));
        listDiv.querySelector('._se_color_picker_remove').addEventListener('click', this.remove.bind(core));
        listDiv.addEventListener('click', this.pickup.bind(core));
        context.fontColor.colorList = listDiv.querySelectorAll('li button');
        /** append target button menu */ core.initMenuTarget(this.name, targetElement, listDiv);
        /** empty memory */ listDiv = null;
    },
    setSubmenu: function(core) {
        const colorArea = core.context.colorPicker.colorListHTML;
        const listDiv = core.util.createElement('DIV');
        listDiv.className = 'se-submenu se-list-layer';
        listDiv.innerHTML = colorArea;
        return listDiv;
    },
    /**
     * @Override submenu
     */ on: function() {
        const contextPicker = this.context.colorPicker;
        const contextFontColor = this.context.fontColor;
        contextPicker._colorInput = contextFontColor.colorInput;
        const color = this.wwComputedStyle.color;
        contextPicker._defaultColor = color ? this.plugins.colorPicker.isHexColor(color) ? color : this.plugins.colorPicker.rgb2hex(color) : "#333333";
        contextPicker._styleProperty = 'color';
        contextPicker._colorList = contextFontColor.colorList;
        this.plugins.colorPicker.init.call(this, this.getSelectionNode(), null);
    },
    /**
     * @Override _colorPicker
     */ onChangeInput: function(e) {
        this.plugins.colorPicker.setCurrentColor.call(this, e.target.value);
    },
    submit: function() {
        this.plugins.fontColor.applyColor.call(this, this.context.colorPicker._currentColor);
    },
    pickup: function(e) {
        e.preventDefault();
        e.stopPropagation();
        this.plugins.fontColor.applyColor.call(this, e.target.getAttribute('data-value'));
    },
    remove: function() {
        this.nodeChange(null, [
            'color'
        ], [
            'span'
        ], true);
        this.submenuOff();
    },
    applyColor: function(color) {
        if (!color) return;
        const newNode = this.util.createElement('SPAN');
        newNode.style.color = color;
        this.nodeChange(newNode, [
            'color'
        ], null, null);
        this.submenuOff();
    }
};
}),
"6674": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */ 'use strict';
var __WEBPACK_DEFAULT_EXPORT__ = {
    name: 'fontSize',
    display: 'submenu',
    add: function(core, targetElement) {
        const context = core.context;
        context.fontSize = {
            targetText: targetElement.querySelector('.txt'),
            _sizeList: null,
            currentSize: ''
        };
        /** set submenu */ let listDiv = this.setSubmenu(core);
        let listUl = listDiv.querySelector('ul');
        /** add event listeners */ listUl.addEventListener('click', this.pickup.bind(core));
        context.fontSize._sizeList = listUl.querySelectorAll('li button');
        /** append target button menu */ core.initMenuTarget(this.name, targetElement, listDiv);
        /** empty memory */ listDiv = null, listUl = null;
    },
    setSubmenu: function(core) {
        const option = core.options;
        const lang = core.lang;
        const listDiv = core.util.createElement('DIV');
        listDiv.className = 'se-submenu se-list-layer se-list-font-size';
        const sizeList = !option.fontSize ? [
            8,
            9,
            10,
            11,
            12,
            14,
            16,
            18,
            20,
            22,
            24,
            26,
            28,
            36,
            48,
            72
        ] : option.fontSize;
        let list = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + lang.toolbar.default + '" aria-label="' + lang.toolbar.default + '">(' + lang.toolbar.default + ')</button></li>';
        for(let i = 0, unit = option.fontSizeUnit, len = sizeList.length, size; i < len; i++){
            size = sizeList[i];
            list += '<li><button type="button" class="se-btn-list" data-value="' + size + unit + '" title="' + size + unit + '" aria-label="' + size + unit + '" style="font-size:' + size + unit + ';">' + size + '</button></li>';
        }
        list += '</ul></div>';
        listDiv.innerHTML = list;
        return listDiv;
    },
    /**
     * @Override core
     */ active: function(element) {
        if (!element) this.util.changeTxt(this.context.fontSize.targetText, this.hasFocus ? this._convertFontSize.call(this, this.options.fontSizeUnit, this.wwComputedStyle.fontSize) : this.lang.toolbar.fontSize);
        else if (element.style && element.style.fontSize.length > 0) {
            this.util.changeTxt(this.context.fontSize.targetText, this._convertFontSize.call(this, this.options.fontSizeUnit, element.style.fontSize));
            return true;
        }
        return false;
    },
    /**
     * @Override submenu
     */ on: function() {
        const fontSizeContext = this.context.fontSize;
        const sizeList = fontSizeContext._sizeList;
        const currentSize = fontSizeContext.targetText.textContent;
        if (currentSize !== fontSizeContext.currentSize) {
            for(let i = 0, len = sizeList.length; i < len; i++)if (currentSize === sizeList[i].getAttribute('data-value')) this.util.addClass(sizeList[i], 'active');
            else this.util.removeClass(sizeList[i], 'active');
            fontSizeContext.currentSize = currentSize;
        }
    },
    pickup: function(e) {
        if (!/^BUTTON$/i.test(e.target.tagName)) return false;
        e.preventDefault();
        e.stopPropagation();
        const value = e.target.getAttribute('data-value');
        if (value) {
            const newNode = this.util.createElement('SPAN');
            newNode.style.fontSize = value;
            this.nodeChange(newNode, [
                'font-size'
            ], null, null);
        } else this.nodeChange(null, [
            'font-size'
        ], [
            'span'
        ], true);
        this.submenuOff();
    }
};
}),
"7759": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */ 'use strict';
var __WEBPACK_DEFAULT_EXPORT__ = {
    name: 'formatBlock',
    display: 'submenu',
    add: function(core, targetElement) {
        const context = core.context;
        context.formatBlock = {
            targetText: targetElement.querySelector('.txt'),
            targetTooltip: targetElement.parentNode.querySelector('.se-tooltip-text'),
            _formatList: null,
            currentFormat: ''
        };
        /** set submenu */ let listDiv = this.setSubmenu(core);
        /** add event listeners */ listDiv.querySelector('ul').addEventListener('click', this.pickUp.bind(core));
        context.formatBlock._formatList = listDiv.querySelectorAll('li button');
        /** append target button menu */ core.initMenuTarget(this.name, targetElement, listDiv);
        /** empty memory */ listDiv = null;
    },
    setSubmenu: function(core) {
        const option = core.options;
        const lang_toolbar = core.lang.toolbar;
        const listDiv = core.util.createElement('DIV');
        listDiv.className = 'se-submenu se-list-layer se-list-format';
        const defaultFormats = [
            'p',
            'div',
            'blockquote',
            'pre',
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6'
        ];
        const formatList = !option.formats || option.formats.length === 0 ? defaultFormats : option.formats;
        let list = '<div class="se-list-inner"><ul class="se-list-basic">';
        for(let i = 0, len = formatList.length, format, tagName, command, name, h, attrs, className; i < len; i++){
            format = formatList[i];
            if (typeof format === 'string' && defaultFormats.indexOf(format) > -1) {
                tagName = format.toLowerCase();
                command = tagName === 'blockquote' ? 'range' : tagName === 'pre' ? 'free' : 'replace';
                h = /^h/.test(tagName) ? tagName.match(/\d+/)[0] : '';
                name = lang_toolbar['tag_' + (h ? 'h' : tagName)] + h;
                className = '';
                attrs = '';
            } else {
                tagName = format.tag.toLowerCase();
                command = format.command;
                name = format.name || tagName;
                className = format.class;
                attrs = className ? ' class="' + className + '"' : '';
            }
            list += '<li><button type="button" class="se-btn-list" data-command="' + command + '" data-value="' + tagName + '" data-class="' + className + '" title="' + name + '" aria-label="' + name + '">' + '<' + tagName + attrs + '>' + name + '</' + tagName + '>' + '</button></li>';
        }
        list += '</ul></div>';
        listDiv.innerHTML = list;
        return listDiv;
    },
    /**
     * @Override core
     */ active: function(element) {
        let formatTitle = this.lang.toolbar.formats;
        const target = this.context.formatBlock.targetText;
        if (!element) this.util.changeTxt(target, formatTitle);
        else if (this.util.isFormatElement(element)) {
            const formatContext = this.context.formatBlock;
            const formatList = formatContext._formatList;
            const nodeName = element.nodeName.toLowerCase();
            const className = (element.className.match(/(\s|^)__se__format__[^\s]+/) || [
                ''
            ])[0].trim();
            for(let i = 0, len = formatList.length, f; i < len; i++){
                f = formatList[i];
                if (nodeName === f.getAttribute('data-value') && className === f.getAttribute('data-class')) {
                    formatTitle = f.title;
                    break;
                }
            }
            this.util.changeTxt(target, formatTitle);
            target.setAttribute('data-value', nodeName);
            target.setAttribute('data-class', className);
            return true;
        }
        return false;
    },
    /**
     * @Override submenu
     */ on: function() {
        const formatContext = this.context.formatBlock;
        const formatList = formatContext._formatList;
        const target = formatContext.targetText;
        const currentFormat = (target.getAttribute('data-value') || '') + (target.getAttribute('data-class') || '');
        if (currentFormat !== formatContext.currentFormat) {
            for(let i = 0, len = formatList.length, f; i < len; i++){
                f = formatList[i];
                if (currentFormat === f.getAttribute('data-value') + f.getAttribute('data-class')) this.util.addClass(f, 'active');
                else this.util.removeClass(f, 'active');
            }
            formatContext.currentFormat = currentFormat;
        }
    },
    pickUp: function(e) {
        e.preventDefault();
        e.stopPropagation();
        let target = e.target;
        let command = null, value = null, tag = null, className = '';
        while(!command && !/UL/i.test(target.tagName)){
            command = target.getAttribute('data-command');
            value = target.getAttribute('data-value');
            className = target.getAttribute('data-class');
            if (command) {
                tag = target.firstChild;
                break;
            }
            target = target.parentNode;
        }
        if (!command) return;
        // blockquote
        if (command === 'range') {
            const rangeElement = tag.cloneNode(false);
            this.applyRangeFormatElement(rangeElement);
        } else {
            let range = this.getRange();
            let selectedFormsts = this.getSelectedElementsAndComponents(false);
            if (selectedFormsts.length === 0) {
                range = this.getRange_addLine(range, null);
                selectedFormsts = this.getSelectedElementsAndComponents(false);
                if (selectedFormsts.length === 0) return;
            }
            const startOffset = range.startOffset;
            const endOffset = range.endOffset;
            const util = this.util;
            let first = selectedFormsts[0];
            let last = selectedFormsts[selectedFormsts.length - 1];
            const firstPath = util.getNodePath(range.startContainer, first, null, null);
            const lastPath = util.getNodePath(range.endContainer, last, null, null);
            // remove selected list
            const rlist = this.detachList(selectedFormsts, false);
            if (rlist.sc) first = rlist.sc;
            if (rlist.ec) last = rlist.ec;
            // change format tag
            this.setRange(util.getNodeFromPath(firstPath, first), startOffset, util.getNodeFromPath(lastPath, last), endOffset);
            const modifiedFormsts = this.getSelectedElementsAndComponents(false);
            // free format
            if (command === 'free') {
                const len = modifiedFormsts.length - 1;
                let parentNode = modifiedFormsts[len].parentNode;
                let freeElement = tag.cloneNode(false);
                const focusElement = freeElement;
                for(let i = len, f, html, before, next, inner, isComp, first = true; i >= 0; i--){
                    f = modifiedFormsts[i];
                    if (f === (!modifiedFormsts[i + 1] ? null : modifiedFormsts[i + 1].parentNode)) continue;
                    isComp = util.isComponent(f);
                    html = isComp ? '' : f.innerHTML.replace(/(?!>)\s+(?=<)|\n/g, ' ');
                    before = util.getParentElement(f, function(current) {
                        return current.parentNode === parentNode;
                    });
                    if (parentNode !== f.parentNode || isComp) {
                        if (util.isFormatElement(parentNode)) {
                            parentNode.parentNode.insertBefore(freeElement, parentNode.nextSibling);
                            parentNode = parentNode.parentNode;
                        } else {
                            parentNode.insertBefore(freeElement, before ? before.nextSibling : null);
                            parentNode = f.parentNode;
                        }
                        next = freeElement.nextSibling;
                        if (next && freeElement.nodeName === next.nodeName && util.isSameAttributes(freeElement, next)) {
                            freeElement.innerHTML += '<BR>' + next.innerHTML;
                            util.removeItem(next);
                        }
                        freeElement = tag.cloneNode(false);
                        first = true;
                    }
                    inner = freeElement.innerHTML;
                    freeElement.innerHTML = (first || !html || !inner || /<br>$/i.test(html) ? html : html + '<BR>') + inner;
                    if (i === 0) {
                        parentNode.insertBefore(freeElement, f);
                        next = f.nextSibling;
                        if (next && freeElement.nodeName === next.nodeName && util.isSameAttributes(freeElement, next)) {
                            freeElement.innerHTML += '<BR>' + next.innerHTML;
                            util.removeItem(next);
                        }
                        const prev = freeElement.previousSibling;
                        if (prev && freeElement.nodeName === prev.nodeName && util.isSameAttributes(freeElement, prev)) {
                            prev.innerHTML += '<BR>' + freeElement.innerHTML;
                            util.removeItem(freeElement);
                        }
                    }
                    if (!isComp) util.removeItem(f);
                    if (!!html) first = false;
                }
                this.setRange(focusElement, 0, focusElement, 0);
            } else {
                for(let i = 0, len = modifiedFormsts.length, node, newFormat; i < len; i++){
                    node = modifiedFormsts[i];
                    if ((node.nodeName.toLowerCase() !== value.toLowerCase() || (node.className.match(/(\s|^)__se__format__[^\s]+/) || [
                        ''
                    ])[0].trim() !== className) && !util.isComponent(node)) {
                        newFormat = tag.cloneNode(false);
                        util.copyFormatAttributes(newFormat, node);
                        newFormat.innerHTML = node.innerHTML;
                        node.parentNode.replaceChild(newFormat, node);
                    }
                    if (i === 0) first = newFormat || node;
                    if (i === len - 1) last = newFormat || node;
                    newFormat = null;
                }
                this.setRange(util.getNodeFromPath(firstPath, first), startOffset, util.getNodeFromPath(lastPath, last), endOffset);
            }
            // history stack
            this.history.push(false);
        }
        this.submenuOff();
    }
};
}),
"6599": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* harmony import */var _modules_colorPicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/_colorPicker */"5461");
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */ 'use strict';

var __WEBPACK_DEFAULT_EXPORT__ = {
    name: 'hiliteColor',
    display: 'submenu',
    add: function(core, targetElement) {
        core.addModule([
            _modules_colorPicker__WEBPACK_IMPORTED_MODULE_0__["default"]
        ]);
        const context = core.context;
        context.hiliteColor = {
            previewEl: null,
            colorInput: null,
            colorList: null
        };
        /** set submenu */ let listDiv = this.setSubmenu(core);
        context.hiliteColor.colorInput = listDiv.querySelector('._se_color_picker_input');
        /** add event listeners */ context.hiliteColor.colorInput.addEventListener('keyup', this.onChangeInput.bind(core));
        listDiv.querySelector('._se_color_picker_submit').addEventListener('click', this.submit.bind(core));
        listDiv.querySelector('._se_color_picker_remove').addEventListener('click', this.remove.bind(core));
        listDiv.addEventListener('click', this.pickup.bind(core));
        context.hiliteColor.colorList = listDiv.querySelectorAll('li button');
        /** append target button menu */ core.initMenuTarget(this.name, targetElement, listDiv);
        /** empty memory */ listDiv = null;
    },
    setSubmenu: function(core) {
        const colorArea = core.context.colorPicker.colorListHTML;
        const listDiv = core.util.createElement('DIV');
        listDiv.className = 'se-submenu se-list-layer';
        listDiv.innerHTML = colorArea;
        return listDiv;
    },
    /**
     * @Override submenu
     */ on: function() {
        const contextPicker = this.context.colorPicker;
        const contextHiliteColor = this.context.hiliteColor;
        contextPicker._colorInput = contextHiliteColor.colorInput;
        const color = this.wwComputedStyle.backgroundColor;
        contextPicker._defaultColor = color ? this.plugins.colorPicker.isHexColor(color) ? color : this.plugins.colorPicker.rgb2hex(color) : "#ffffff";
        contextPicker._styleProperty = 'backgroundColor';
        contextPicker._colorList = contextHiliteColor.colorList;
        this.plugins.colorPicker.init.call(this, this.getSelectionNode(), null);
    },
    /**
     * @Override _colorPicker
     */ onChangeInput: function(e) {
        this.plugins.colorPicker.setCurrentColor.call(this, e.target.value);
    },
    submit: function() {
        this.plugins.hiliteColor.applyColor.call(this, this.context.colorPicker._currentColor);
    },
    pickup: function(e) {
        e.preventDefault();
        e.stopPropagation();
        this.plugins.hiliteColor.applyColor.call(this, e.target.getAttribute('data-value'));
    },
    remove: function() {
        this.nodeChange(null, [
            'background-color'
        ], [
            'span'
        ], true);
        this.submenuOff();
    },
    applyColor: function(color) {
        if (!color) return;
        const newNode = this.util.createElement('SPAN');
        newNode.style.backgroundColor = color;
        this.nodeChange(newNode, [
            'background-color'
        ], null, null);
        this.submenuOff();
    }
};
}),
"4867": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */ 'use strict';
var __WEBPACK_DEFAULT_EXPORT__ = {
    name: 'horizontalRule',
    display: 'submenu',
    add: function(core, targetElement) {
        core.context.horizontalRule = {
            currentHR: null
        };
        /** set submenu */ let listDiv = this.setSubmenu(core);
        /** add event listeners */ listDiv.querySelector('ul').addEventListener('click', this.horizontalRulePick.bind(core));
        /** append target button menu */ core.initMenuTarget(this.name, targetElement, listDiv);
        /** empty memory */ listDiv = null;
    },
    setSubmenu: function(core) {
        const lang = core.lang;
        const listDiv = core.util.createElement('DIV');
        const items = core.options.hrItems || [
            {
                name: lang.toolbar.hr_solid,
                class: '__se__solid'
            },
            {
                name: lang.toolbar.hr_dashed,
                class: '__se__dashed'
            },
            {
                name: lang.toolbar.hr_dotted,
                class: '__se__dotted'
            }
        ];
        let list = '';
        for(let i = 0, len = items.length; i < len; i++)list += '<li><button type="button" class="se-btn-list btn_line" data-command="horizontalRule" data-value="' + items[i].class + '" title="' + items[i].name + '" aria-label="' + items[i].name + '">' + '<hr' + (items[i].class ? ' class="' + items[i].class + '"' : '') + (items[i].style ? ' style="' + items[i].style + '"' : '') + '/>' + '</button>' + '</li>';
        listDiv.className = 'se-submenu se-list-layer se-list-line';
        listDiv.innerHTML = '<div class="se-list-inner"><ul class="se-list-basic">' + list + '</ul>' + '</div>';
        return listDiv;
    },
    active: function(element) {
        if (!element) {
            if (this.util.hasClass(this.context.horizontalRule.currentHR, 'on')) this.controllersOff();
        } else if (/HR/i.test(element.nodeName)) {
            this.context.horizontalRule.currentHR = element;
            if (!this.util.hasClass(element, 'on')) {
                this.util.addClass(element, 'on');
                this.controllersOn('hr', this.util.removeClass.bind(this.util, element, 'on'));
            }
            return true;
        }
        return false;
    },
    appendHr: function(hrTemp) {
        this.focus();
        return this.insertComponent(hrTemp.cloneNode(false), false, true, false);
    },
    horizontalRulePick: function(e) {
        e.preventDefault();
        e.stopPropagation();
        let target = e.target;
        let command = target.getAttribute('data-command');
        while(!command && !/UL/i.test(target.tagName)){
            target = target.parentNode;
            command = target.getAttribute('data-command');
        }
        if (!command) return;
        const oNode = this.plugins.horizontalRule.appendHr.call(this, target.firstElementChild);
        if (oNode) {
            this.setRange(oNode, 0, oNode, 0);
            this.submenuOff();
        }
    }
};
}),
"8157": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 20197 JiHong Lee.
 * MIT license.
 */ 'use strict';
var __WEBPACK_DEFAULT_EXPORT__ = {
    name: 'lineHeight',
    display: 'submenu',
    add: function(core, targetElement) {
        const context = core.context;
        context.lineHeight = {
            _sizeList: null,
            currentSize: -1
        };
        /** set submenu */ let listDiv = this.setSubmenu(core);
        let listUl = listDiv.querySelector('ul');
        /** add event listeners */ listUl.addEventListener('click', this.pickup.bind(core));
        context.lineHeight._sizeList = listUl.querySelectorAll('li button');
        /** append target button menu */ core.initMenuTarget(this.name, targetElement, listDiv);
        /** empty memory */ listDiv = null, listUl = null;
    },
    setSubmenu: function(core) {
        const option = core.options;
        const lang = core.lang;
        const listDiv = core.util.createElement('DIV');
        listDiv.className = 'se-submenu se-list-layer';
        const sizeList = !option.lineHeights ? [
            {
                text: '1',
                value: 1
            },
            {
                text: '1.15',
                value: 1.15
            },
            {
                text: '1.5',
                value: 1.5
            },
            {
                text: '2',
                value: 2
            }
        ] : option.lineHeights;
        let list = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + lang.toolbar.default + '" aria-label="' + lang.toolbar.default + '">(' + lang.toolbar.default + ')</button></li>';
        for(let i = 0, len = sizeList.length, size; i < len; i++){
            size = sizeList[i];
            list += '<li><button type="button" class="se-btn-list" data-value="' + size.value + '" title="' + size.text + '" aria-label="' + size.text + '">' + size.text + '</button></li>';
        }
        list += '</ul></div>';
        listDiv.innerHTML = list;
        return listDiv;
    },
    /**
     * @Override submenu
     */ on: function() {
        const lineHeightContext = this.context.lineHeight;
        const sizeList = lineHeightContext._sizeList;
        const format = this.util.getFormatElement(this.getSelectionNode());
        const currentSize = !format ? '' : format.style.lineHeight + '';
        if (currentSize !== lineHeightContext.currentSize) {
            for(let i = 0, len = sizeList.length; i < len; i++)if (currentSize === sizeList[i].getAttribute('data-value')) this.util.addClass(sizeList[i], 'active');
            else this.util.removeClass(sizeList[i], 'active');
            lineHeightContext.currentSize = currentSize;
        }
    },
    pickup: function(e) {
        if (!/^BUTTON$/i.test(e.target.tagName)) return false;
        e.preventDefault();
        e.stopPropagation();
        const value = e.target.getAttribute('data-value') || '';
        const formats = this.getSelectedElements();
        for(let i = 0, len = formats.length; i < len; i++)formats[i].style.lineHeight = value;
        this.submenuOff();
        // history stack
        this.history.push(false);
    }
};
}),
"851": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */ 'use strict';
var __WEBPACK_DEFAULT_EXPORT__ = {
    name: 'list',
    display: 'submenu',
    add: function(core, targetElement) {
        const context = core.context;
        context.list = {
            targetButton: targetElement,
            _list: null,
            currentList: '',
            icons: {
                bullets: core.icons.list_bullets,
                number: core.icons.list_number
            }
        };
        /** set submenu */ let listDiv = this.setSubmenu(core);
        let listUl = listDiv.querySelector('ul');
        /** add event listeners */ listUl.addEventListener('click', this.pickup.bind(core));
        context.list._list = listUl.querySelectorAll('li button');
        /** append target button menu */ core.initMenuTarget(this.name, targetElement, listDiv);
        /** empty memory */ listDiv = null, listUl = null;
    },
    setSubmenu: function(core) {
        const lang = core.lang;
        const listDiv = core.util.createElement('DIV');
        listDiv.className = 'se-submenu se-list-layer';
        listDiv.innerHTML = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="se-btn-list se-tooltip" data-command="OL" title="' + lang.toolbar.orderList + '" aria-label="' + lang.toolbar.orderList + '">' + core.icons.list_number + '</button></li>' + '<li><button type="button" class="se-btn-list se-tooltip" data-command="UL" title="' + lang.toolbar.unorderList + '" aria-label="' + lang.toolbar.unorderList + '">' + core.icons.list_bullets + '</button></li>' + '</ul>' + '</div>';
        return listDiv;
    },
    /**
     * @Override core
     */ active: function(element) {
        const button = this.context.list.targetButton;
        const icon = button.firstElementChild;
        const util = this.util;
        if (util.isList(element)) {
            const nodeName = element.nodeName;
            button.setAttribute('data-focus', nodeName);
            util.addClass(button, 'active');
            if (/UL/i.test(nodeName)) util.changeElement(icon, this.context.list.icons.bullets);
            else util.changeElement(icon, this.context.list.icons.number);
            return true;
        } else {
            button.removeAttribute('data-focus');
            util.changeElement(icon, this.context.list.icons.number);
            util.removeClass(button, 'active');
        }
        return false;
    },
    /**
     * @Override submenu
     */ on: function() {
        const listContext = this.context.list;
        const list = listContext._list;
        const currentList = listContext.targetButton.getAttribute('data-focus') || '';
        if (currentList !== listContext.currentList) {
            for(let i = 0, len = list.length; i < len; i++)if (currentList === list[i].getAttribute('data-command')) this.util.addClass(list[i], 'active');
            else this.util.removeClass(list[i], 'active');
            listContext.currentList = currentList;
        }
    },
    editList: function(command, selectedCells, detach) {
        let range = this.getRange();
        let selectedFormats = !selectedCells ? this.getSelectedElementsAndComponents(false) : selectedCells;
        if (selectedFormats.length === 0) {
            if (selectedCells) return;
            range = this.getRange_addLine(range, null);
            selectedFormats = this.getSelectedElementsAndComponents(false);
            if (selectedFormats.length === 0) return;
        }
        const util = this.util;
        util.sortByDepth(selectedFormats, true);
        // merge
        let firstSel = selectedFormats[0];
        let lastSel = selectedFormats[selectedFormats.length - 1];
        let topEl = (util.isListCell(firstSel) || util.isComponent(firstSel)) && !firstSel.previousElementSibling ? firstSel.parentNode.previousElementSibling : firstSel.previousElementSibling;
        let bottomEl = (util.isListCell(lastSel) || util.isComponent(lastSel)) && !lastSel.nextElementSibling ? lastSel.parentNode.nextElementSibling : lastSel.nextElementSibling;
        const isCollapsed = range.collapsed;
        const originRange = {
            sc: range.startContainer,
            so: range.startContainer === range.endContainer && util.onlyZeroWidthSpace(range.startContainer) && range.startOffset === 0 && range.endOffset === 1 ? range.endOffset : range.startOffset,
            ec: range.endContainer,
            eo: range.endOffset
        };
        let afterRange = null;
        let isRemove = true;
        for(let i = 0, len = selectedFormats.length; i < len; i++)if (!util.isList(util.getRangeFormatElement(selectedFormats[i], (function(current) {
            return this.getRangeFormatElement(current) && current !== selectedFormats[i];
        }).bind(util)))) {
            isRemove = false;
            break;
        }
        if (isRemove && (!topEl || firstSel.tagName !== topEl.tagName || command !== topEl.tagName.toUpperCase()) && (!bottomEl || lastSel.tagName !== bottomEl.tagName || command !== bottomEl.tagName.toUpperCase())) {
            if (detach) for(let i = 0, len = selectedFormats.length; i < len; i++){
                for(let j = i - 1; j >= 0; j--)if (selectedFormats[j].contains(selectedFormats[i])) {
                    selectedFormats.splice(i, 1);
                    i--;
                    len--;
                    break;
                }
            }
            const currentFormat = util.getRangeFormatElement(firstSel);
            const cancel = currentFormat && currentFormat.tagName === command;
            let rangeArr, tempList;
            const passComponent = (function(current) {
                return !this.isComponent(current);
            }).bind(util);
            if (!cancel) tempList = util.createElement(command);
            for(let i = 0, len = selectedFormats.length, r, o; i < len; i++){
                o = util.getRangeFormatElement(selectedFormats[i], passComponent);
                if (!o || !util.isList(o)) continue;
                if (!r) {
                    r = o;
                    rangeArr = {
                        r: r,
                        f: [
                            util.getParentElement(selectedFormats[i], 'LI')
                        ]
                    };
                } else if (r !== o) {
                    if (detach && util.isListCell(o.parentNode)) this.plugins.list._detachNested.call(this, rangeArr.f);
                    else afterRange = this.detachRangeFormatElement(rangeArr.f[0].parentNode, rangeArr.f, tempList, false, true);
                    o = selectedFormats[i].parentNode;
                    if (!cancel) tempList = util.createElement(command);
                    r = o;
                    rangeArr = {
                        r: r,
                        f: [
                            util.getParentElement(selectedFormats[i], 'LI')
                        ]
                    };
                } else rangeArr.f.push(util.getParentElement(selectedFormats[i], 'LI'));
                if (i === len - 1) {
                    if (detach && util.isListCell(o.parentNode)) this.plugins.list._detachNested.call(this, rangeArr.f);
                    else afterRange = this.detachRangeFormatElement(rangeArr.f[0].parentNode, rangeArr.f, tempList, false, true);
                }
            }
        } else {
            const topElParent = topEl ? topEl.parentNode : topEl;
            const bottomElParent = bottomEl ? bottomEl.parentNode : bottomEl;
            topEl = topElParent && !util.isWysiwygDiv(topElParent) && topElParent.nodeName === command ? topElParent : topEl;
            bottomEl = bottomElParent && !util.isWysiwygDiv(bottomElParent) && bottomElParent.nodeName === command ? bottomElParent : bottomEl;
            const mergeTop = topEl && topEl.tagName === command;
            const mergeBottom = bottomEl && bottomEl.tagName === command;
            let list = mergeTop ? topEl : util.createElement(command);
            let firstList = null;
            let lastList = null;
            let topNumber = null;
            let bottomNumber = null;
            const passComponent = (function(current) {
                return !this.isComponent(current) && !this.isList(current);
            }).bind(util);
            for(let i = 0, len = selectedFormats.length, newCell, fTag, isCell, next, originParent, nextParent, parentTag, siblingTag, rangeTag; i < len; i++){
                fTag = selectedFormats[i];
                if (fTag.childNodes.length === 0 && !util._isIgnoreNodeChange(fTag)) {
                    util.removeItem(fTag);
                    continue;
                }
                next = selectedFormats[i + 1];
                originParent = fTag.parentNode;
                nextParent = next ? next.parentNode : null;
                isCell = util.isListCell(fTag);
                rangeTag = util.isRangeFormatElement(originParent) ? originParent : null;
                parentTag = isCell && !util.isWysiwygDiv(originParent) ? originParent.parentNode : originParent;
                siblingTag = isCell && !util.isWysiwygDiv(originParent) ? !next || util.isListCell(parentTag) ? originParent : originParent.nextSibling : fTag.nextSibling;
                newCell = util.createElement('LI');
                util.copyFormatAttributes(newCell, fTag);
                if (i === 0 && originRange.sc === fTag) originRange.sc = newCell;
                if (i === len - 1 && originRange.ec === fTag) originRange.ec = newCell;
                if (util.isComponent(fTag)) {
                    const isHR = /^HR$/i.test(fTag.nodeName);
                    if (!isHR) newCell.innerHTML = '<br>';
                    newCell.innerHTML += fTag.outerHTML;
                    if (isHR) newCell.innerHTML += '<br>';
                } else {
                    const fChildren = fTag.childNodes;
                    while(fChildren[0])newCell.appendChild(fChildren[0]);
                }
                list.appendChild(newCell);
                if (!next) lastList = list;
                if (!next || parentTag !== nextParent || util.isRangeFormatElement(siblingTag)) {
                    if (!firstList) firstList = list;
                    if ((!mergeTop || !next || parentTag !== nextParent) && !(next && util.isList(nextParent) && nextParent === originParent)) {
                        if (list.parentNode !== parentTag) parentTag.insertBefore(list, siblingTag);
                    }
                }
                util.removeItem(fTag);
                if (mergeTop && topNumber === null) topNumber = list.children.length - 1;
                if (next && (util.getRangeFormatElement(nextParent, passComponent) !== util.getRangeFormatElement(originParent, passComponent) || util.isList(nextParent) && util.isList(originParent) && util.getElementDepth(nextParent) !== util.getElementDepth(originParent))) list = util.createElement(command);
                if (rangeTag && rangeTag.children.length === 0) util.removeItem(rangeTag);
            }
            if (topNumber) firstList = firstList.children[topNumber];
            if (mergeBottom) {
                bottomNumber = list.children.length - 1;
                list.innerHTML += bottomEl.innerHTML;
                lastList = list.children[bottomNumber];
                util.removeItem(bottomEl);
            }
        }
        this.effectNode = null;
        return !isCollapsed ? originRange : afterRange;
    },
    _detachNested: function(cells) {
        const first = cells[0];
        const last = cells[cells.length - 1];
        const next = last.nextElementSibling;
        const originList = first.parentNode;
        const sibling = originList.parentNode.nextElementSibling;
        const parentNode = originList.parentNode.parentNode;
        for(let c = 0, cLen = cells.length; c < cLen; c++)parentNode.insertBefore(cells[c], sibling);
        if (next && originList.children.length > 0) {
            const newList = originList.cloneNode(false);
            const children = originList.childNodes;
            const index = this.util.getPositionIndex(next);
            while(children[index])newList.appendChild(children[index]);
            last.appendChild(newList);
        }
        if (originList.children.length === 0) this.util.removeItem(originList);
        this.util.mergeSameTags(parentNode);
        const edge = this.util.getEdgeChildNodes(first, last);
        return {
            cc: first.parentNode,
            sc: edge.sc,
            ec: edge.ec
        };
    },
    editInsideList: function(remove, selectedCells) {
        selectedCells = !selectedCells ? this.getSelectedElements().filter((function(el) {
            return this.isListCell(el);
        }).bind(this.util)) : selectedCells;
        const cellsLen = selectedCells.length;
        if (cellsLen === 0 || !remove && !this.util.isListCell(selectedCells[0].previousElementSibling) && !this.util.isListCell(selectedCells[cellsLen - 1].nextElementSibling)) return {
            sc: selectedCells[0],
            so: 0,
            ec: selectedCells[cellsLen - 1],
            eo: 1
        };
        let originList = selectedCells[0].parentNode;
        let lastCell = selectedCells[cellsLen - 1];
        let range = null;
        if (remove) {
            if (originList !== lastCell.parentNode && this.util.isList(lastCell.parentNode.parentNode) && lastCell.nextElementSibling) {
                lastCell = lastCell.nextElementSibling;
                while(lastCell){
                    selectedCells.push(lastCell);
                    lastCell = lastCell.nextElementSibling;
                }
            }
            range = this.plugins.list.editList.call(this, originList.nodeName.toUpperCase(), selectedCells, true);
        } else {
            let innerList = this.util.createElement(originList.nodeName);
            let prev = selectedCells[0].previousElementSibling;
            let next = lastCell.nextElementSibling;
            const nodePath = {
                s: null,
                e: null,
                sl: originList,
                el: originList
            };
            for(let i = 0, len = cellsLen, c; i < len; i++){
                c = selectedCells[i];
                if (c.parentNode !== originList) {
                    this.plugins.list._insiedList.call(this, originList, innerList, prev, next, nodePath);
                    originList = c.parentNode;
                    innerList = this.util.createElement(originList.nodeName);
                }
                prev = c.previousElementSibling;
                next = c.nextElementSibling;
                innerList.appendChild(c);
            }
            this.plugins.list._insiedList.call(this, originList, innerList, prev, next, nodePath);
            const sc = this.util.getNodeFromPath(nodePath.s, nodePath.sl);
            const ec = this.util.getNodeFromPath(nodePath.e, nodePath.el);
            range = {
                sc: sc,
                so: 0,
                ec: ec,
                eo: ec.textContent.length
            };
        }
        return range;
    },
    _insiedList: function(originList, innerList, prev, next, nodePath) {
        let insertPrev = false;
        if (prev && innerList.tagName === prev.tagName) {
            const children = innerList.children;
            while(children[0])prev.appendChild(children[0]);
            innerList = prev;
            insertPrev = true;
        }
        if (next && innerList.tagName === next.tagName) {
            const children = next.children;
            while(children[0])innerList.appendChild(children[0]);
            const temp = next.nextElementSibling;
            next.parentNode.removeChild(next);
            next = temp;
        }
        if (!insertPrev) {
            if (this.util.isListCell(prev)) {
                originList = prev;
                next = null;
            }
            originList.insertBefore(innerList, next);
            if (!nodePath.s) {
                nodePath.s = this.util.getNodePath(innerList.firstElementChild.firstChild, originList, null);
                nodePath.sl = originList;
            }
            const slPath = originList.contains(nodePath.sl) ? this.util.getNodePath(nodePath.sl, originList) : null;
            nodePath.e = this.util.getNodePath(innerList.lastElementChild.firstChild, originList, null);
            nodePath.el = originList;
            this.util.mergeSameTags(originList, [
                nodePath.s,
                nodePath.e,
                slPath
            ], false);
            this.util.mergeNestedTags(originList);
            if (slPath) nodePath.sl = this.util.getNodeFromPath(slPath, originList);
        }
        return innerList;
    },
    pickup: function(e) {
        e.preventDefault();
        e.stopPropagation();
        let target = e.target;
        let command = '';
        while(!command && !/^UL$/i.test(target.tagName)){
            command = target.getAttribute('data-command');
            target = target.parentNode;
        }
        if (!command) return;
        const range = this.plugins.list.editList.call(this, command, null, false);
        if (range) this.setRange(range.sc, range.so, range.ec, range.eo);
        this.submenuOff();
        // history stack
        this.history.push(false);
    }
};
}),
"7938": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */ 'use strict';
var __WEBPACK_DEFAULT_EXPORT__ = {
    name: 'paragraphStyle',
    display: 'submenu',
    add: function(core, targetElement) {
        const context = core.context;
        context.paragraphStyle = {
            _classList: null
        };
        /** set submenu */ let listDiv = this.setSubmenu(core);
        /** add event listeners */ listDiv.querySelector('ul').addEventListener('click', this.pickUp.bind(core));
        context.paragraphStyle._classList = listDiv.querySelectorAll('li button');
        /** append target button menu */ core.initMenuTarget(this.name, targetElement, listDiv);
        /** empty memory */ listDiv = null;
    },
    setSubmenu: function(core) {
        const option = core.options;
        const listDiv = core.util.createElement('DIV');
        listDiv.className = 'se-submenu se-list-layer se-list-format';
        const menuLang = core.lang.menu;
        const defaultList = {
            spaced: {
                name: menuLang.spaced,
                class: '__se__p-spaced',
                _class: ''
            },
            bordered: {
                name: menuLang.bordered,
                class: '__se__p-bordered',
                _class: ''
            },
            neon: {
                name: menuLang.neon,
                class: '__se__p-neon',
                _class: ''
            }
        };
        const paragraphStyles = !option.paragraphStyles || option.paragraphStyles.length === 0 ? [
            'spaced',
            'bordered',
            'neon'
        ] : option.paragraphStyles;
        let list = '<div class="se-list-inner"><ul class="se-list-basic">';
        for(let i = 0, len = paragraphStyles.length, p, name, attrs, _class; i < len; i++){
            p = paragraphStyles[i];
            if (typeof p === 'string') {
                const defaultStyle = defaultList[p.toLowerCase()];
                if (!defaultStyle) continue;
                p = defaultStyle;
            }
            name = p.name;
            attrs = p.class ? ' class="' + p.class + '"' : '';
            _class = p._class;
            list += '<li><button type="button" class="se-btn-list' + (_class ? ' ' + _class : '') + '" data-value="' + p.class + '" title="' + name + '" aria-label="' + name + '">' + '<div' + attrs + '>' + name + '</div>' + '</button></li>';
        }
        list += '</ul></div>';
        listDiv.innerHTML = list;
        return listDiv;
    },
    /**
     * @Override submenu
     */ on: function() {
        const paragraphContext = this.context.paragraphStyle;
        const paragraphList = paragraphContext._classList;
        const currentFormat = this.util.getFormatElement(this.getSelectionNode());
        for(let i = 0, len = paragraphList.length; i < len; i++)if (this.util.hasClass(currentFormat, paragraphList[i].getAttribute('data-value'))) this.util.addClass(paragraphList[i], 'active');
        else this.util.removeClass(paragraphList[i], 'active');
    },
    pickUp: function(e) {
        e.preventDefault();
        e.stopPropagation();
        let target = e.target;
        let value = null;
        while(!/^UL$/i.test(target.tagName)){
            value = target.getAttribute('data-value');
            if (value) break;
            target = target.parentNode;
        }
        if (!value) return;
        let selectedFormsts = this.getSelectedElements();
        if (selectedFormsts.length === 0) {
            this.getRange_addLine(this.getRange(), null);
            selectedFormsts = this.getSelectedElements();
            if (selectedFormsts.length === 0) return;
        }
        // change format class
        const toggleClass = this.util.hasClass(target, 'active') ? this.util.removeClass.bind(this.util) : this.util.addClass.bind(this.util);
        for(let i = 0, len = selectedFormsts.length; i < len; i++)toggleClass(selectedFormsts[i], value);
        this.submenuOff();
        // history stack
        this.history.push(false);
    }
};
}),
"9392": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */ 'use strict';
var __WEBPACK_DEFAULT_EXPORT__ = {
    name: 'table',
    display: 'submenu',
    add: function(core, targetElement) {
        const context = core.context;
        let contextTable = context.table = {
            _element: null,
            _tdElement: null,
            _trElement: null,
            _trElements: null,
            _tableXY: [],
            _maxWidth: true,
            _fixedColumn: false,
            _rtl: core.options.rtl,
            cellControllerTop: core.options.tableCellControllerPosition === 'top',
            resizeText: null,
            headerButton: null,
            mergeButton: null,
            splitButton: null,
            splitMenu: null,
            maxText: core.lang.controller.maxSize,
            minText: core.lang.controller.minSize,
            _physical_cellCnt: 0,
            _logical_cellCnt: 0,
            _rowCnt: 0,
            _rowIndex: 0,
            _physical_cellIndex: 0,
            _logical_cellIndex: 0,
            _current_colSpan: 0,
            _current_rowSpan: 0,
            icons: {
                expansion: core.icons.expansion,
                reduction: core.icons.reduction
            }
        };
        /** set submenu */ let listDiv = this.setSubmenu(core);
        let tablePicker = listDiv.querySelector('.se-controller-table-picker');
        contextTable.tableHighlight = listDiv.querySelector('.se-table-size-highlighted');
        contextTable.tableUnHighlight = listDiv.querySelector('.se-table-size-unhighlighted');
        contextTable.tableDisplay = listDiv.querySelector('.se-table-size-display');
        if (core.options.rtl) contextTable.tableHighlight.style.left = "167px";
        /** set table controller */ let tableController = this.setController_table(core);
        contextTable.tableController = tableController;
        contextTable.resizeButton = tableController.querySelector('._se_table_resize');
        contextTable.resizeText = tableController.querySelector('._se_table_resize > span > span');
        contextTable.columnFixedButton = tableController.querySelector('._se_table_fixed_column');
        contextTable.headerButton = tableController.querySelector('._se_table_header');
        /** set resizing */ let resizeDiv = this.setController_tableEditor(core, contextTable.cellControllerTop);
        contextTable.resizeDiv = resizeDiv;
        contextTable.splitMenu = resizeDiv.querySelector('.se-btn-group-sub');
        contextTable.mergeButton = resizeDiv.querySelector('._se_table_merge_button');
        contextTable.splitButton = resizeDiv.querySelector('._se_table_split_button');
        contextTable.insertRowAboveButton = resizeDiv.querySelector('._se_table_insert_row_a');
        contextTable.insertRowBelowButton = resizeDiv.querySelector('._se_table_insert_row_b');
        /** add event listeners */ tablePicker.addEventListener('mousemove', this.onMouseMove_tablePicker.bind(core, contextTable));
        tablePicker.addEventListener('click', this.appendTable.bind(core));
        resizeDiv.addEventListener('click', this.onClick_tableController.bind(core));
        tableController.addEventListener('click', this.onClick_tableController.bind(core));
        /** append target button menu */ core.initMenuTarget(this.name, targetElement, listDiv);
        /** append controller */ context.element.relative.appendChild(resizeDiv);
        context.element.relative.appendChild(tableController);
        /** empty memory */ listDiv = null, tablePicker = null, resizeDiv = null, tableController = null, contextTable = null;
    },
    setSubmenu: function(core) {
        const listDiv = core.util.createElement('DIV');
        listDiv.className = 'se-submenu se-selector-table';
        listDiv.innerHTML = '<div class="se-table-size"><div class="se-table-size-picker se-controller-table-picker"></div><div class="se-table-size-highlighted"></div><div class="se-table-size-unhighlighted"></div></div><div class="se-table-size-display">1 x 1</div>';
        return listDiv;
    },
    setController_table: function(core) {
        const lang = core.lang;
        const icons = core.icons;
        const tableResize = core.util.createElement('DIV');
        tableResize.className = 'se-controller se-controller-table';
        tableResize.innerHTML = '<div><div class="se-btn-group"><button type="button" data-command="resize" class="se-btn se-tooltip _se_table_resize">' + icons.expansion + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.maxSize + '</span></span>' + '</button>' + '<button type="button" data-command="layout" class="se-btn se-tooltip _se_table_fixed_column">' + icons.fixed_column_width + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.fixedColumnWidth + '</span></span>' + '</button>' + '<button type="button" data-command="header" class="se-btn se-tooltip _se_table_header">' + icons.table_header + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.tableHeader + '</span></span>' + '</button>' + '<button type="button" data-command="remove" class="se-btn se-tooltip">' + icons.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.remove + '</span></span>' + '</button>' + '</div>' + '</div>';
        return tableResize;
    },
    setController_tableEditor: function(core, cellControllerTop) {
        const lang = core.lang;
        const icons = core.icons;
        const tableResize = core.util.createElement('DIV');
        tableResize.className = 'se-controller se-controller-table-cell';
        tableResize.innerHTML = (cellControllerTop ? '' : '<div class="se-arrow se-arrow-up"></div>') + '<div class="se-btn-group">' + '<button type="button" data-command="insert" data-value="row" data-option="up" class="se-btn se-tooltip _se_table_insert_row_a">' + icons.insert_row_above + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.insertRowAbove + '</span></span>' + '</button>' + '<button type="button" data-command="insert" data-value="row" data-option="down" class="se-btn se-tooltip _se_table_insert_row_b">' + icons.insert_row_below + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.insertRowBelow + '</span></span>' + '</button>' + '<button type="button" data-command="delete" data-value="row" class="se-btn se-tooltip">' + icons.delete_row + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.deleteRow + '</span></span>' + '</button>' + '<button type="button" data-command="merge" class="_se_table_merge_button se-btn se-tooltip" disabled>' + icons.merge_cell + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.mergeCells + '</span></span>' + '</button>' + '</div>' + '<div class="se-btn-group" style="padding-top: 0;">' + '<button type="button" data-command="insert" data-value="cell" data-option="left" class="se-btn se-tooltip">' + icons.insert_column_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.insertColumnBefore + '</span></span>' + '</button>' + '<button type="button" data-command="insert" data-value="cell" data-option="right" class="se-btn se-tooltip">' + icons.insert_column_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.insertColumnAfter + '</span></span>' + '</button>' + '<button type="button" data-command="delete" data-value="cell" class="se-btn se-tooltip">' + icons.delete_column + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.deleteColumn + '</span></span>' + '</button>' + '<button type="button" data-command="onsplit" class="_se_table_split_button se-btn se-tooltip">' + icons.split_cell + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.splitCells + '</span></span>' + '</button>' + '<div class="se-btn-group-sub sun-editor-common se-list-layer se-table-split">' + '<div class="se-list-inner">' + '<ul class="se-list-basic">' + '<li class="se-btn-list" data-command="split" data-value="vertical" style="line-height:32px;" title="' + lang.controller.VerticalSplit + '" aria-label="' + lang.controller.VerticalSplit + '">' + lang.controller.VerticalSplit + '</li>' + '<li class="se-btn-list" data-command="split" data-value="horizontal" style="line-height:32px;" title="' + lang.controller.HorizontalSplit + '" aria-label="' + lang.controller.HorizontalSplit + '">' + lang.controller.HorizontalSplit + '</li>' + '</ul>' + '</div>' + '</div>' + '</div>';
        return tableResize;
    },
    appendTable: function() {
        const oTable = this.util.createElement('TABLE');
        const createCells = this.plugins.table.createCells;
        const x = this.context.table._tableXY[0];
        let y = this.context.table._tableXY[1];
        let tableHTML = '<tbody>';
        while(y > 0){
            tableHTML += '<tr>' + createCells.call(this, 'td', x) + '</tr>';
            --y;
        }
        tableHTML += '</tbody>';
        oTable.innerHTML = tableHTML;
        const changed = this.insertComponent(oTable, false, true, false);
        if (changed) {
            const firstTd = oTable.querySelector('td div');
            this.setRange(firstTd, 0, firstTd, 0);
            this.plugins.table.reset_table_picker.call(this);
        }
    },
    createCells: function(nodeName, cnt, returnElement) {
        nodeName = nodeName.toLowerCase();
        if (!returnElement) {
            let cellsHTML = '';
            while(cnt > 0){
                cellsHTML += '<' + nodeName + '><div><br></div></' + nodeName + '>';
                cnt--;
            }
            return cellsHTML;
        } else {
            const cell = this.util.createElement(nodeName);
            cell.innerHTML = '<div><br></div>';
            return cell;
        }
    },
    onMouseMove_tablePicker: function(contextTable, e) {
        e.stopPropagation();
        let x = this._w.Math.ceil(e.offsetX / 18);
        let y = this._w.Math.ceil(e.offsetY / 18);
        x = x < 1 ? 1 : x;
        y = y < 1 ? 1 : y;
        if (contextTable._rtl) {
            contextTable.tableHighlight.style.left = x * 18 - 13 + 'px';
            x = 11 - x;
        }
        contextTable.tableHighlight.style.width = x + 'em';
        contextTable.tableHighlight.style.height = y + 'em';
        // let x_u = x < 5 ? 5 : (x > 9 ? 10 : x + 1);
        // let y_u = y < 5 ? 5 : (y > 9 ? 10 : y + 1);
        // contextTable.tableUnHighlight.style.width = x_u + 'em';
        // contextTable.tableUnHighlight.style.height = y_u + 'em';
        this.util.changeTxt(contextTable.tableDisplay, x + ' x ' + y);
        contextTable._tableXY = [
            x,
            y
        ];
    },
    reset_table_picker: function() {
        if (!this.context.table.tableHighlight) return;
        const highlight = this.context.table.tableHighlight.style;
        const unHighlight = this.context.table.tableUnHighlight.style;
        highlight.width = '1em';
        highlight.height = '1em';
        unHighlight.width = '10em';
        unHighlight.height = '10em';
        this.util.changeTxt(this.context.table.tableDisplay, '1 x 1');
        this.submenuOff();
    },
    init: function() {
        const contextTable = this.context.table;
        const tablePlugin = this.plugins.table;
        tablePlugin._removeEvents.call(this);
        if (tablePlugin._selectedTable) {
            const selectedCells = tablePlugin._selectedTable.querySelectorAll('.se-table-selected-cell');
            for(let i = 0, len = selectedCells.length; i < len; i++)this.util.removeClass(selectedCells[i], 'se-table-selected-cell');
        }
        tablePlugin._toggleEditor.call(this, true);
        contextTable._element = null;
        contextTable._tdElement = null;
        contextTable._trElement = null;
        contextTable._trElements = null;
        contextTable._tableXY = [];
        contextTable._maxWidth = true;
        contextTable._fixedColumn = false;
        contextTable._physical_cellCnt = 0;
        contextTable._logical_cellCnt = 0;
        contextTable._rowCnt = 0;
        contextTable._rowIndex = 0;
        contextTable._physical_cellIndex = 0;
        contextTable._logical_cellIndex = 0;
        contextTable._current_colSpan = 0;
        contextTable._current_rowSpan = 0;
        tablePlugin._shift = false;
        tablePlugin._selectedCells = null;
        tablePlugin._selectedTable = null;
        tablePlugin._ref = null;
        tablePlugin._fixedCell = null;
        tablePlugin._selectedCell = null;
        tablePlugin._fixedCellName = null;
    },
    /** table edit controller */ call_controller_tableEdit: function(tdElement) {
        const tablePlugin = this.plugins.table;
        const contextTable = this.context.table;
        if (!this.getSelection().isCollapsed && !tablePlugin._selectedCell) {
            this.controllersOff();
            this.util.removeClass(tdElement, 'se-table-selected-cell');
            return;
        }
        const tableElement = contextTable._element || this.plugins.table._selectedTable || this.util.getParentElement(tdElement, 'TABLE');
        contextTable._maxWidth = this.util.hasClass(tableElement, 'se-table-size-100') || tableElement.style.width === '100%' || !tableElement.style.width && !this.util.hasClass(tableElement, 'se-table-size-auto');
        contextTable._fixedColumn = this.util.hasClass(tableElement, 'se-table-layout-fixed') || tableElement.style.tableLayout === 'fixed';
        tablePlugin.setTableStyle.call(this, contextTable._maxWidth ? 'width|column' : 'width');
        tablePlugin.setPositionControllerTop.call(this, tableElement);
        tablePlugin.setPositionControllerDiv.call(this, tdElement, tablePlugin._shift);
        if (!tablePlugin._shift) this.controllersOn(contextTable.resizeDiv, contextTable.tableController, tablePlugin.init.bind(this), tdElement, 'table');
    },
    setPositionControllerTop: function(tableElement) {
        this.setControllerPosition(this.context.table.tableController, tableElement, 'top', {
            left: 0,
            top: 0
        });
    },
    setPositionControllerDiv: function(tdElement, reset) {
        const contextTable = this.context.table;
        const resizeDiv = contextTable.resizeDiv;
        this.plugins.table.setCellInfo.call(this, tdElement, reset);
        if (contextTable.cellControllerTop) this.setControllerPosition(resizeDiv, contextTable._element, 'top', {
            left: contextTable.tableController.offsetWidth,
            top: 0
        });
        else this.setControllerPosition(resizeDiv, tdElement, 'bottom', {
            left: 0,
            top: 0
        });
    },
    setCellInfo: function(tdElement, reset) {
        const contextTable = this.context.table;
        const table = contextTable._element = this.plugins.table._selectedTable || this.util.getParentElement(tdElement, 'TABLE');
        if (/THEAD/i.test(table.firstElementChild.nodeName)) this.util.addClass(contextTable.headerButton, 'active');
        else this.util.removeClass(contextTable.headerButton, 'active');
        if (reset || contextTable._physical_cellCnt === 0) {
            if (contextTable._tdElement !== tdElement) {
                contextTable._tdElement = tdElement;
                contextTable._trElement = tdElement.parentNode;
            }
            const rows = contextTable._trElements = table.rows;
            const cellIndex = tdElement.cellIndex;
            let cellCnt = 0;
            for(let i = 0, cells = rows[0].cells, len = rows[0].cells.length; i < len; i++)cellCnt += cells[i].colSpan;
            // row cnt, row index
            const rowIndex = contextTable._rowIndex = contextTable._trElement.rowIndex;
            contextTable._rowCnt = rows.length;
            // cell cnt, physical cell index
            contextTable._physical_cellCnt = contextTable._trElement.cells.length;
            contextTable._logical_cellCnt = cellCnt;
            contextTable._physical_cellIndex = cellIndex;
            // span
            contextTable._current_colSpan = contextTable._tdElement.colSpan - 1;
            contextTable._current_rowSpan, contextTable._trElement.cells[cellIndex].rowSpan;
            // find logcal cell index
            let rowSpanArr = [];
            let spanIndex = [];
            for(let i = 0, cells, colSpan; i <= rowIndex; i++){
                cells = rows[i].cells;
                colSpan = 0;
                for(let c = 0, cLen = cells.length, cell, cs, rs, logcalIndex; c < cLen; c++){
                    cell = cells[c];
                    cs = cell.colSpan - 1;
                    rs = cell.rowSpan - 1;
                    logcalIndex = c + colSpan;
                    if (spanIndex.length > 0) for(let r = 0, arr; r < spanIndex.length; r++){
                        arr = spanIndex[r];
                        if (arr.row > i) continue;
                        if (logcalIndex >= arr.index) {
                            colSpan += arr.cs;
                            logcalIndex += arr.cs;
                            arr.rs -= 1;
                            arr.row = i + 1;
                            if (arr.rs < 1) {
                                spanIndex.splice(r, 1);
                                r--;
                            }
                        } else if (c === cLen - 1) {
                            arr.rs -= 1;
                            arr.row = i + 1;
                            if (arr.rs < 1) {
                                spanIndex.splice(r, 1);
                                r--;
                            }
                        }
                    }
                    // logcal cell index
                    if (i === rowIndex && c === cellIndex) {
                        contextTable._logical_cellIndex = logcalIndex;
                        break;
                    }
                    if (rs > 0) rowSpanArr.push({
                        index: logcalIndex,
                        cs: cs + 1,
                        rs: rs,
                        row: -1
                    });
                    colSpan += cs;
                }
                spanIndex = spanIndex.concat(rowSpanArr).sort(function(a, b) {
                    return a.index - b.index;
                });
                rowSpanArr = [];
            }
            rowSpanArr = null;
            spanIndex = null;
        }
    },
    editTable: function(type, option) {
        const tablePlugin = this.plugins.table;
        const contextTable = this.context.table;
        const table = contextTable._element;
        const isRow = type === 'row';
        if (isRow) {
            const tableAttr = contextTable._trElement.parentNode;
            if (/^THEAD$/i.test(tableAttr.nodeName)) {
                if (option === 'up') return;
                else if (!tableAttr.nextElementSibling || !/^TBODY$/i.test(tableAttr.nextElementSibling.nodeName)) {
                    table.innerHTML += '<tbody><tr>' + tablePlugin.createCells.call(this, 'td', contextTable._logical_cellCnt, false) + '</tr></tbody>';
                    return;
                }
            }
        }
        // multi
        if (tablePlugin._ref) {
            const positionCell = contextTable._tdElement;
            const selectedCells = tablePlugin._selectedCells;
            // multi - row
            if (isRow) {
                // remove row
                if (!option) {
                    let row = selectedCells[0].parentNode;
                    const removeCells = [
                        selectedCells[0]
                    ];
                    for(let i = 1, len = selectedCells.length, cell; i < len; i++){
                        cell = selectedCells[i];
                        if (row !== cell.parentNode) {
                            removeCells.push(cell);
                            row = cell.parentNode;
                        }
                    }
                    for(let i = 0, len = removeCells.length; i < len; i++){
                        tablePlugin.setCellInfo.call(this, removeCells[i], true);
                        tablePlugin.editRow.call(this, option);
                    }
                } else {
                    tablePlugin.setCellInfo.call(this, option === 'up' ? selectedCells[0] : selectedCells[selectedCells.length - 1], true);
                    tablePlugin.editRow.call(this, option, positionCell);
                }
            } else {
                const firstRow = selectedCells[0].parentNode;
                // remove cell
                if (!option) {
                    const removeCells = [
                        selectedCells[0]
                    ];
                    for(let i = 1, len = selectedCells.length, cell; i < len; i++){
                        cell = selectedCells[i];
                        if (firstRow === cell.parentNode) removeCells.push(cell);
                        else break;
                    }
                    for(let i = 0, len = removeCells.length; i < len; i++){
                        tablePlugin.setCellInfo.call(this, removeCells[i], true);
                        tablePlugin.editCell.call(this, option);
                    }
                } else {
                    let rightCell = null;
                    for(let i = 0, len = selectedCells.length - 1; i < len; i++)if (firstRow !== selectedCells[i + 1].parentNode) {
                        rightCell = selectedCells[i];
                        break;
                    }
                    tablePlugin.setCellInfo.call(this, option === 'left' ? selectedCells[0] : rightCell || selectedCells[0], true);
                    tablePlugin.editCell.call(this, option, positionCell);
                }
            }
            if (!option) tablePlugin.init.call(this);
        } else tablePlugin[isRow ? 'editRow' : 'editCell'].call(this, option);
        // after remove
        if (!option) {
            const children = table.children;
            for(let i = 0; i < children.length; i++)if (children[i].children.length === 0) {
                this.util.removeItem(children[i]);
                i--;
            }
            if (table.children.length === 0) this.util.removeItem(table);
        }
    },
    editRow: function(option, positionResetElement) {
        const contextTable = this.context.table;
        const remove = !option;
        const up = option === 'up';
        const originRowIndex = contextTable._rowIndex;
        const rowIndex = remove || up ? originRowIndex : originRowIndex + contextTable._current_rowSpan + 1;
        const sign = remove ? -1 : 1;
        const rows = contextTable._trElements;
        let cellCnt = contextTable._logical_cellCnt;
        for(let i = 0, len = originRowIndex + (remove ? -1 : 0), cell; i <= len; i++){
            cell = rows[i].cells;
            if (cell.length === 0) return;
            for(let c = 0, cLen = cell.length, rs, cs; c < cLen; c++){
                rs = cell[c].rowSpan;
                cs = cell[c].colSpan;
                if (rs < 2 && cs < 2) continue;
                if (rs + i > rowIndex && rowIndex > i) {
                    cell[c].rowSpan = rs + sign;
                    cellCnt -= cs;
                }
            }
        }
        if (remove) {
            const next = rows[originRowIndex + 1];
            if (next) {
                const spanCells = [];
                let cells = rows[originRowIndex].cells;
                let colSpan = 0;
                for(let i = 0, len = cells.length, cell, logcalIndex; i < len; i++){
                    cell = cells[i];
                    logcalIndex = i + colSpan;
                    colSpan += cell.colSpan - 1;
                    if (cell.rowSpan > 1) {
                        cell.rowSpan -= 1;
                        spanCells.push({
                            cell: cell.cloneNode(false),
                            index: logcalIndex
                        });
                    }
                }
                if (spanCells.length > 0) {
                    let spanCell = spanCells.shift();
                    cells = next.cells;
                    colSpan = 0;
                    for(let i = 0, len = cells.length, cell, logcalIndex; i < len; i++){
                        cell = cells[i];
                        logcalIndex = i + colSpan;
                        colSpan += cell.colSpan - 1;
                        if (logcalIndex >= spanCell.index) {
                            i--, colSpan--;
                            colSpan += spanCell.cell.colSpan - 1;
                            next.insertBefore(spanCell.cell, cell);
                            spanCell = spanCells.shift();
                            if (!spanCell) break;
                        }
                    }
                    if (spanCell) {
                        next.appendChild(spanCell.cell);
                        for(let i = 0, len = spanCells.length; i < len; i++)next.appendChild(spanCells[i].cell);
                    }
                }
            }
            contextTable._element.deleteRow(rowIndex);
        } else {
            const newRow = contextTable._element.insertRow(rowIndex);
            newRow.innerHTML = this.plugins.table.createCells.call(this, 'td', cellCnt, false);
        }
        if (!remove) this.plugins.table.setPositionControllerDiv.call(this, positionResetElement || contextTable._tdElement, true);
        else this.controllersOff();
    },
    editCell: function(option, positionResetElement) {
        const contextTable = this.context.table;
        const util = this.util;
        const remove = !option;
        const left = option === 'left';
        const colSpan = contextTable._current_colSpan;
        const cellIndex = remove || left ? contextTable._logical_cellIndex : contextTable._logical_cellIndex + colSpan + 1;
        const rows = contextTable._trElements;
        let rowSpanArr = [];
        let spanIndex = [];
        let passCell = 0;
        const removeCell = [];
        const removeSpanArr = [];
        for(let i = 0, len = contextTable._rowCnt, row, insertIndex, cells, newCell, applySpan, cellColSpan; i < len; i++){
            row = rows[i];
            insertIndex = cellIndex;
            applySpan = false;
            cells = row.cells;
            cellColSpan = 0;
            for(let c = 0, cell, cLen = cells.length, rs, cs, removeIndex; c < cLen; c++){
                cell = cells[c];
                if (!cell) break;
                rs = cell.rowSpan - 1;
                cs = cell.colSpan - 1;
                if (!remove) {
                    if (c >= insertIndex) break;
                    if (cs > 0) {
                        if (passCell < 1 && cs + c >= insertIndex) {
                            cell.colSpan += 1;
                            insertIndex = null;
                            passCell = rs + 1;
                            break;
                        }
                        insertIndex -= cs;
                    }
                    if (!applySpan) {
                        for(let r = 0, arr; r < spanIndex.length; r++){
                            arr = spanIndex[r];
                            insertIndex -= arr.cs;
                            arr.rs -= 1;
                            if (arr.rs < 1) {
                                spanIndex.splice(r, 1);
                                r--;
                            }
                        }
                        applySpan = true;
                    }
                } else {
                    removeIndex = c + cellColSpan;
                    if (spanIndex.length > 0) {
                        const lastCell = !cells[c + 1];
                        for(let r = 0, arr; r < spanIndex.length; r++){
                            arr = spanIndex[r];
                            if (arr.row > i) continue;
                            if (removeIndex >= arr.index) {
                                cellColSpan += arr.cs;
                                removeIndex = c + cellColSpan;
                                arr.rs -= 1;
                                arr.row = i + 1;
                                if (arr.rs < 1) {
                                    spanIndex.splice(r, 1);
                                    r--;
                                }
                            } else if (lastCell) {
                                arr.rs -= 1;
                                arr.row = i + 1;
                                if (arr.rs < 1) {
                                    spanIndex.splice(r, 1);
                                    r--;
                                }
                            }
                        }
                    }
                    if (rs > 0) rowSpanArr.push({
                        rs: rs,
                        cs: cs + 1,
                        index: removeIndex,
                        row: -1
                    });
                    if (removeIndex >= insertIndex && removeIndex + cs <= insertIndex + colSpan) removeCell.push(cell);
                    else if (removeIndex <= insertIndex + colSpan && removeIndex + cs >= insertIndex) cell.colSpan -= util.getOverlapRangeAtIndex(cellIndex, cellIndex + colSpan, removeIndex, removeIndex + cs);
                    else if (rs > 0 && (removeIndex < insertIndex || removeIndex + cs > insertIndex + colSpan)) removeSpanArr.push({
                        cell: cell,
                        i: i,
                        rs: i + rs
                    });
                    cellColSpan += cs;
                }
            }
            spanIndex = spanIndex.concat(rowSpanArr).sort(function(a, b) {
                return a.index - b.index;
            });
            rowSpanArr = [];
            if (!remove) {
                if (passCell > 0) {
                    passCell -= 1;
                    continue;
                }
                if (insertIndex !== null && cells.length > 0) {
                    newCell = this.plugins.table.createCells.call(this, cells[0].nodeName, 0, true);
                    newCell = row.insertBefore(newCell, cells[insertIndex]);
                }
            }
        }
        if (remove) {
            let removeFirst, removeEnd;
            for(let r = 0, rLen = removeCell.length, row; r < rLen; r++){
                row = removeCell[r].parentNode;
                util.removeItem(removeCell[r]);
                if (row.cells.length === 0) {
                    if (!removeFirst) removeFirst = util.getArrayIndex(rows, row);
                    removeEnd = util.getArrayIndex(rows, row);
                    util.removeItem(row);
                }
            }
            for(let c = 0, cLen = removeSpanArr.length, rowSpanCell; c < cLen; c++){
                rowSpanCell = removeSpanArr[c];
                rowSpanCell.cell.rowSpan = util.getOverlapRangeAtIndex(removeFirst, removeEnd, rowSpanCell.i, rowSpanCell.rs);
            }
            this.controllersOff();
        } else this.plugins.table.setPositionControllerDiv.call(this, positionResetElement || contextTable._tdElement, true);
    },
    _closeSplitMenu: null,
    openSplitMenu: function() {
        this.util.addClass(this.context.table.splitButton, 'on');
        this.context.table.splitMenu.style.display = 'inline-table';
        this.plugins.table._closeSplitMenu = (function() {
            this.util.removeClass(this.context.table.splitButton, 'on');
            this.context.table.splitMenu.style.display = 'none';
            this.removeDocEvent('click', this.plugins.table._closeSplitMenu);
            this.plugins.table._closeSplitMenu = null;
        }).bind(this);
        this.addDocEvent('click', this.plugins.table._closeSplitMenu);
    },
    splitCells: function(direction) {
        const util = this.util;
        const vertical = direction === 'vertical';
        const contextTable = this.context.table;
        const currentCell = contextTable._tdElement;
        const rows = contextTable._trElements;
        const currentRow = contextTable._trElement;
        const index = contextTable._logical_cellIndex;
        const rowIndex = contextTable._rowIndex;
        const newCell = this.plugins.table.createCells.call(this, currentCell.nodeName, 0, true);
        // vertical
        if (vertical) {
            const currentColSpan = currentCell.colSpan;
            newCell.rowSpan = currentCell.rowSpan;
            // colspan > 1
            if (currentColSpan > 1) {
                newCell.colSpan = this._w.Math.floor(currentColSpan / 2);
                currentCell.colSpan = currentColSpan - newCell.colSpan;
                currentRow.insertBefore(newCell, currentCell.nextElementSibling);
            } else {
                let rowSpanArr = [];
                let spanIndex = [];
                for(let i = 0, len = contextTable._rowCnt, cells, colSpan; i < len; i++){
                    cells = rows[i].cells;
                    colSpan = 0;
                    for(let c = 0, cLen = cells.length, cell, cs, rs, logcalIndex; c < cLen; c++){
                        cell = cells[c];
                        cs = cell.colSpan - 1;
                        rs = cell.rowSpan - 1;
                        logcalIndex = c + colSpan;
                        if (spanIndex.length > 0) for(let r = 0, arr; r < spanIndex.length; r++){
                            arr = spanIndex[r];
                            if (arr.row > i) continue;
                            if (logcalIndex >= arr.index) {
                                colSpan += arr.cs;
                                logcalIndex += arr.cs;
                                arr.rs -= 1;
                                arr.row = i + 1;
                                if (arr.rs < 1) {
                                    spanIndex.splice(r, 1);
                                    r--;
                                }
                            } else if (c === cLen - 1) {
                                arr.rs -= 1;
                                arr.row = i + 1;
                                if (arr.rs < 1) {
                                    spanIndex.splice(r, 1);
                                    r--;
                                }
                            }
                        }
                        if (logcalIndex <= index && rs > 0) rowSpanArr.push({
                            index: logcalIndex,
                            cs: cs + 1,
                            rs: rs,
                            row: -1
                        });
                        if (cell !== currentCell && logcalIndex <= index && logcalIndex + cs >= index + currentColSpan - 1) {
                            cell.colSpan += 1;
                            break;
                        }
                        if (logcalIndex > index) break;
                        colSpan += cs;
                    }
                    spanIndex = spanIndex.concat(rowSpanArr).sort(function(a, b) {
                        return a.index - b.index;
                    });
                    rowSpanArr = [];
                }
                currentRow.insertBefore(newCell, currentCell.nextElementSibling);
            }
        } else {
            const currentRowSpan = currentCell.rowSpan;
            newCell.colSpan = currentCell.colSpan;
            // rowspan > 1
            if (currentRowSpan > 1) {
                newCell.rowSpan = this._w.Math.floor(currentRowSpan / 2);
                const newRowSpan = currentRowSpan - newCell.rowSpan;
                const rowSpanArr = [];
                const nextRowIndex = util.getArrayIndex(rows, currentRow) + newRowSpan;
                for(let i = 0, cells, colSpan; i < nextRowIndex; i++){
                    cells = rows[i].cells;
                    colSpan = 0;
                    for(let c = 0, cLen = cells.length, cell, cs, logcalIndex; c < cLen; c++){
                        logcalIndex = c + colSpan;
                        if (logcalIndex >= index) break;
                        cell = cells[c];
                        cs = cell.rowSpan - 1;
                        if (cs > 0 && cs + i >= nextRowIndex && logcalIndex < index) rowSpanArr.push({
                            index: logcalIndex,
                            cs: cell.colSpan
                        });
                        colSpan += cell.colSpan - 1;
                    }
                }
                const nextRow = rows[nextRowIndex];
                const nextCells = nextRow.cells;
                let rs = rowSpanArr.shift();
                for(let c = 0, cLen = nextCells.length, colSpan = 0, cell, cs, logcalIndex, insertIndex; c < cLen; c++){
                    logcalIndex = c + colSpan;
                    cell = nextCells[c];
                    cs = cell.colSpan - 1;
                    insertIndex = logcalIndex + cs + 1;
                    if (rs && insertIndex >= rs.index) {
                        colSpan += rs.cs;
                        insertIndex += rs.cs;
                        rs = rowSpanArr.shift();
                    }
                    if (insertIndex >= index || c === cLen - 1) {
                        nextRow.insertBefore(newCell, cell.nextElementSibling);
                        break;
                    }
                    colSpan += cs;
                }
                currentCell.rowSpan = newRowSpan;
            } else {
                newCell.rowSpan = currentCell.rowSpan;
                const newRow = util.createElement('TR');
                newRow.appendChild(newCell);
                for(let i = 0, cells; i < rowIndex; i++){
                    cells = rows[i].cells;
                    if (cells.length === 0) return;
                    for(let c = 0, cLen = cells.length; c < cLen; c++)if (i + cells[c].rowSpan - 1 >= rowIndex) cells[c].rowSpan += 1;
                }
                const physicalIndex = contextTable._physical_cellIndex;
                const cells = currentRow.cells;
                for(let c = 0, cLen = cells.length; c < cLen; c++){
                    if (c === physicalIndex) continue;
                    cells[c].rowSpan += 1;
                }
                currentRow.parentNode.insertBefore(newRow, currentRow.nextElementSibling);
            }
        }
        this.focusEdge(currentCell);
        this.plugins.table.setPositionControllerDiv.call(this, currentCell, true);
    },
    mergeCells: function() {
        const tablePlugin = this.plugins.table;
        const contextTable = this.context.table;
        const util = this.util;
        const ref = tablePlugin._ref;
        const selectedCells = tablePlugin._selectedCells;
        const mergeCell = selectedCells[0];
        let emptyRowFirst = null;
        let emptyRowLast = null;
        let cs = ref.ce - ref.cs + 1;
        let rs = ref.re - ref.rs + 1;
        let mergeHTML = '';
        let row = null;
        for(let i = 1, len = selectedCells.length, cell, ch; i < len; i++){
            cell = selectedCells[i];
            if (row !== cell.parentNode) row = cell.parentNode;
            ch = cell.children;
            for(let c = 0, cLen = ch.length; c < cLen; c++)if (util.isFormatElement(ch[c]) && util.onlyZeroWidthSpace(ch[c].textContent)) util.removeItem(ch[c]);
            mergeHTML += cell.innerHTML;
            util.removeItem(cell);
            if (row.cells.length === 0) {
                if (!emptyRowFirst) emptyRowFirst = row;
                else emptyRowLast = row;
                rs -= 1;
            }
        }
        if (emptyRowFirst) {
            const rows = contextTable._trElements;
            const rowIndexFirst = util.getArrayIndex(rows, emptyRowFirst);
            const rowIndexLast = util.getArrayIndex(rows, emptyRowLast || emptyRowFirst);
            const removeRows = [];
            for(let i = 0, cells; i <= rowIndexLast; i++){
                cells = rows[i].cells;
                if (cells.length === 0) {
                    removeRows.push(rows[i]);
                    continue;
                }
                for(let c = 0, cLen = cells.length, cell, rs; c < cLen; c++){
                    cell = cells[c];
                    rs = cell.rowSpan - 1;
                    if (rs > 0 && i + rs >= rowIndexFirst) cell.rowSpan -= util.getOverlapRangeAtIndex(rowIndexFirst, rowIndexLast, i, i + rs);
                }
            }
            for(let i = 0, len = removeRows.length; i < len; i++)util.removeItem(removeRows[i]);
        }
        mergeCell.innerHTML += mergeHTML;
        mergeCell.colSpan = cs;
        mergeCell.rowSpan = rs;
        this.controllersOff();
        tablePlugin.setActiveButton.call(this, true, false);
        tablePlugin.call_controller_tableEdit.call(this, mergeCell);
        util.addClass(mergeCell, 'se-table-selected-cell');
        this.focusEdge(mergeCell);
    },
    toggleHeader: function() {
        const util = this.util;
        const headerButton = this.context.table.headerButton;
        const active = util.hasClass(headerButton, 'active');
        const table = this.context.table._element;
        if (!active) {
            const header = util.createElement('THEAD');
            header.innerHTML = '<tr>' + this.plugins.table.createCells.call(this, 'th', this.context.table._logical_cellCnt, false) + '</tr>';
            table.insertBefore(header, table.firstElementChild);
        } else util.removeItem(table.querySelector('thead'));
        util.toggleClass(headerButton, 'active');
        if (/TH/i.test(this.context.table._tdElement.nodeName)) this.controllersOff();
        else this.plugins.table.setPositionControllerDiv.call(this, this.context.table._tdElement, false);
    },
    setTableStyle: function(styles) {
        const contextTable = this.context.table;
        const tableElement = contextTable._element;
        let icon, span, sizeIcon, text;
        if (styles.indexOf('width') > -1) {
            icon = contextTable.resizeButton.firstElementChild;
            span = contextTable.resizeText;
            if (!contextTable._maxWidth) {
                sizeIcon = contextTable.icons.expansion;
                text = contextTable.maxText;
                contextTable.columnFixedButton.style.display = 'none';
                this.util.removeClass(tableElement, 'se-table-size-100');
                this.util.addClass(tableElement, 'se-table-size-auto');
            } else {
                sizeIcon = contextTable.icons.reduction;
                text = contextTable.minText;
                contextTable.columnFixedButton.style.display = 'block';
                this.util.removeClass(tableElement, 'se-table-size-auto');
                this.util.addClass(tableElement, 'se-table-size-100');
            }
            this.util.changeElement(icon, sizeIcon);
            this.util.changeTxt(span, text);
        }
        if (styles.indexOf('column') > -1) {
            if (!contextTable._fixedColumn) {
                this.util.removeClass(tableElement, 'se-table-layout-fixed');
                this.util.addClass(tableElement, 'se-table-layout-auto');
                this.util.removeClass(contextTable.columnFixedButton, 'active');
            } else {
                this.util.removeClass(tableElement, 'se-table-layout-auto');
                this.util.addClass(tableElement, 'se-table-layout-fixed');
                this.util.addClass(contextTable.columnFixedButton, 'active');
            }
        }
    },
    setActiveButton: function(fixedCell, selectedCell) {
        const contextTable = this.context.table;
        if (/^TH$/i.test(fixedCell.nodeName)) {
            contextTable.insertRowAboveButton.setAttribute('disabled', true);
            contextTable.insertRowBelowButton.setAttribute('disabled', true);
        } else {
            contextTable.insertRowAboveButton.removeAttribute('disabled');
            contextTable.insertRowBelowButton.removeAttribute('disabled');
        }
        if (!selectedCell || fixedCell === selectedCell) {
            contextTable.splitButton.removeAttribute('disabled');
            contextTable.mergeButton.setAttribute('disabled', true);
        } else {
            contextTable.splitButton.setAttribute('disabled', true);
            contextTable.mergeButton.removeAttribute('disabled');
        }
    },
    // multi selecte
    _bindOnSelect: null,
    _bindOffSelect: null,
    _bindOffShift: null,
    _selectedCells: null,
    _shift: false,
    _fixedCell: null,
    _fixedCellName: null,
    _selectedCell: null,
    _selectedTable: null,
    _ref: null,
    _toggleEditor: function(enabled) {
        this.context.element.wysiwyg.setAttribute('contenteditable', enabled);
        if (enabled) this.util.removeClass(this.context.element.wysiwyg, 'se-disabled');
        else this.util.addClass(this.context.element.wysiwyg, 'se-disabled');
    },
    _offCellMultiSelect: function(e) {
        e.stopPropagation();
        const tablePlugin = this.plugins.table;
        if (!tablePlugin._shift) {
            tablePlugin._removeEvents.call(this);
            tablePlugin._toggleEditor.call(this, true);
        } else if (tablePlugin._initBind) {
            this._wd.removeEventListener('touchmove', tablePlugin._initBind);
            tablePlugin._initBind = null;
        }
        if (!tablePlugin._fixedCell || !tablePlugin._selectedTable) return;
        tablePlugin.setActiveButton.call(this, tablePlugin._fixedCell, tablePlugin._selectedCell);
        tablePlugin.call_controller_tableEdit.call(this, tablePlugin._selectedCell || tablePlugin._fixedCell);
        tablePlugin._selectedCells = tablePlugin._selectedTable.querySelectorAll('.se-table-selected-cell');
        if (tablePlugin._selectedCell && tablePlugin._fixedCell) this.focusEdge(tablePlugin._selectedCell);
        if (!tablePlugin._shift) {
            tablePlugin._fixedCell = null;
            tablePlugin._selectedCell = null;
            tablePlugin._fixedCellName = null;
        }
    },
    _onCellMultiSelect: function(e) {
        this._antiBlur = true;
        const tablePlugin = this.plugins.table;
        const target = this.util.getParentElement(e.target, this.util.isCell);
        if (tablePlugin._shift) {
            if (target === tablePlugin._fixedCell) tablePlugin._toggleEditor.call(this, true);
            else tablePlugin._toggleEditor.call(this, false);
        } else if (!tablePlugin._ref) {
            if (target === tablePlugin._fixedCell) return;
            else tablePlugin._toggleEditor.call(this, false);
        }
        if (!target || target === tablePlugin._selectedCell || tablePlugin._fixedCellName !== target.nodeName || tablePlugin._selectedTable !== this.util.getParentElement(target, 'TABLE')) return;
        tablePlugin._selectedCell = target;
        tablePlugin._setMultiCells.call(this, tablePlugin._fixedCell, target);
    },
    _setMultiCells: function(startCell, endCell) {
        const tablePlugin = this.plugins.table;
        const rows = tablePlugin._selectedTable.rows;
        const util = this.util;
        const selectedCells = tablePlugin._selectedTable.querySelectorAll('.se-table-selected-cell');
        for(let i = 0, len = selectedCells.length; i < len; i++)util.removeClass(selectedCells[i], 'se-table-selected-cell');
        if (startCell === endCell) {
            util.addClass(startCell, 'se-table-selected-cell');
            if (!tablePlugin._shift) return;
        }
        let findSelectedCell = true;
        let spanIndex = [];
        let rowSpanArr = [];
        const ref = tablePlugin._ref = {
            _i: 0,
            cs: null,
            ce: null,
            rs: null,
            re: null
        };
        for(let i = 0, len = rows.length, cells, colSpan; i < len; i++){
            cells = rows[i].cells;
            colSpan = 0;
            for(let c = 0, cLen = cells.length, cell, logcalIndex, cs, rs; c < cLen; c++){
                cell = cells[c];
                cs = cell.colSpan - 1;
                rs = cell.rowSpan - 1;
                logcalIndex = c + colSpan;
                if (spanIndex.length > 0) for(let r = 0, arr; r < spanIndex.length; r++){
                    arr = spanIndex[r];
                    if (arr.row > i) continue;
                    if (logcalIndex >= arr.index) {
                        colSpan += arr.cs;
                        logcalIndex += arr.cs;
                        arr.rs -= 1;
                        arr.row = i + 1;
                        if (arr.rs < 1) {
                            spanIndex.splice(r, 1);
                            r--;
                        }
                    } else if (c === cLen - 1) {
                        arr.rs -= 1;
                        arr.row = i + 1;
                        if (arr.rs < 1) {
                            spanIndex.splice(r, 1);
                            r--;
                        }
                    }
                }
                if (findSelectedCell) {
                    if (cell === startCell || cell === endCell) {
                        ref.cs = ref.cs !== null && ref.cs < logcalIndex ? ref.cs : logcalIndex;
                        ref.ce = ref.ce !== null && ref.ce > logcalIndex + cs ? ref.ce : logcalIndex + cs;
                        ref.rs = ref.rs !== null && ref.rs < i ? ref.rs : i;
                        ref.re = ref.re !== null && ref.re > i + rs ? ref.re : i + rs;
                        ref._i += 1;
                    }
                    if (ref._i === 2) {
                        findSelectedCell = false;
                        spanIndex = [];
                        rowSpanArr = [];
                        i = -1;
                        break;
                    }
                } else if (util.getOverlapRangeAtIndex(ref.cs, ref.ce, logcalIndex, logcalIndex + cs) && util.getOverlapRangeAtIndex(ref.rs, ref.re, i, i + rs)) {
                    const newCs = ref.cs < logcalIndex ? ref.cs : logcalIndex;
                    const newCe = ref.ce > logcalIndex + cs ? ref.ce : logcalIndex + cs;
                    const newRs = ref.rs < i ? ref.rs : i;
                    const newRe = ref.re > i + rs ? ref.re : i + rs;
                    if (ref.cs !== newCs || ref.ce !== newCe || ref.rs !== newRs || ref.re !== newRe) {
                        ref.cs = newCs;
                        ref.ce = newCe;
                        ref.rs = newRs;
                        ref.re = newRe;
                        i = -1;
                        spanIndex = [];
                        rowSpanArr = [];
                        break;
                    }
                    util.addClass(cell, 'se-table-selected-cell');
                }
                if (rs > 0) rowSpanArr.push({
                    index: logcalIndex,
                    cs: cs + 1,
                    rs: rs,
                    row: -1
                });
                colSpan += cell.colSpan - 1;
            }
            spanIndex = spanIndex.concat(rowSpanArr).sort(function(a, b) {
                return a.index - b.index;
            });
            rowSpanArr = [];
        }
    },
    _removeEvents: function() {
        const tablePlugin = this.plugins.table;
        if (tablePlugin._initBind) {
            this._wd.removeEventListener('touchmove', tablePlugin._initBind);
            tablePlugin._initBind = null;
        }
        if (tablePlugin._bindOnSelect) {
            this._wd.removeEventListener('mousedown', tablePlugin._bindOnSelect);
            this._wd.removeEventListener('mousemove', tablePlugin._bindOnSelect);
            tablePlugin._bindOnSelect = null;
        }
        if (tablePlugin._bindOffSelect) {
            this._wd.removeEventListener('mouseup', tablePlugin._bindOffSelect);
            tablePlugin._bindOffSelect = null;
        }
        if (tablePlugin._bindOffShift) {
            this._wd.removeEventListener('keyup', tablePlugin._bindOffShift);
            tablePlugin._bindOffShift = null;
        }
    },
    _initBind: null,
    onTableCellMultiSelect: function(tdElement, shift) {
        const tablePlugin = this.plugins.table;
        tablePlugin._removeEvents.call(this);
        this.controllersOff();
        tablePlugin._shift = shift;
        tablePlugin._fixedCell = tdElement;
        tablePlugin._fixedCellName = tdElement.nodeName;
        tablePlugin._selectedTable = this.util.getParentElement(tdElement, 'TABLE');
        const selectedCells = tablePlugin._selectedTable.querySelectorAll('.se-table-selected-cell');
        for(let i = 0, len = selectedCells.length; i < len; i++)this.util.removeClass(selectedCells[i], 'se-table-selected-cell');
        this.util.addClass(tdElement, 'se-table-selected-cell');
        tablePlugin._bindOnSelect = tablePlugin._onCellMultiSelect.bind(this);
        tablePlugin._bindOffSelect = tablePlugin._offCellMultiSelect.bind(this);
        if (!shift) this._wd.addEventListener('mousemove', tablePlugin._bindOnSelect, false);
        else {
            tablePlugin._bindOffShift = (function() {
                this.controllersOn(this.context.table.resizeDiv, this.context.table.tableController, this.plugins.table.init.bind(this), tdElement, 'table');
                if (!tablePlugin._ref) this.controllersOff();
            }).bind(this);
            this._wd.addEventListener('keyup', tablePlugin._bindOffShift, false);
            this._wd.addEventListener('mousedown', tablePlugin._bindOnSelect, false);
        }
        this._wd.addEventListener('mouseup', tablePlugin._bindOffSelect, false);
        tablePlugin._initBind = tablePlugin.init.bind(this);
        this._wd.addEventListener('touchmove', tablePlugin._initBind, false);
    },
    onClick_tableController: function(e) {
        e.stopPropagation();
        const target = e.target.getAttribute('data-command') ? e.target : e.target.parentNode;
        if (target.getAttribute('disabled')) return;
        const command = target.getAttribute('data-command');
        const value = target.getAttribute('data-value');
        const option = target.getAttribute('data-option');
        const tablePlugin = this.plugins.table;
        if (typeof tablePlugin._closeSplitMenu === 'function') {
            tablePlugin._closeSplitMenu();
            if (command === 'onsplit') return;
        }
        if (!command) return;
        e.preventDefault();
        const contextTable = this.context.table;
        switch(command){
            case 'insert':
            case 'delete':
                tablePlugin.editTable.call(this, value, option);
                break;
            case 'header':
                tablePlugin.toggleHeader.call(this);
                break;
            case 'onsplit':
                tablePlugin.openSplitMenu.call(this);
                break;
            case 'split':
                tablePlugin.splitCells.call(this, value);
                break;
            case 'merge':
                tablePlugin.mergeCells.call(this);
                break;
            case 'resize':
                contextTable._maxWidth = !contextTable._maxWidth;
                tablePlugin.setTableStyle.call(this, 'width');
                tablePlugin.setPositionControllerTop.call(this, contextTable._element);
                tablePlugin.setPositionControllerDiv.call(this, contextTable._tdElement, tablePlugin._shift);
                break;
            case 'layout':
                contextTable._fixedColumn = !contextTable._fixedColumn;
                tablePlugin.setTableStyle.call(this, 'column');
                tablePlugin.setPositionControllerTop.call(this, contextTable._element);
                tablePlugin.setPositionControllerDiv.call(this, contextTable._tdElement, tablePlugin._shift);
                break;
            case 'remove':
                const emptyDiv = contextTable._element.parentNode;
                this.util.removeItem(contextTable._element);
                this.controllersOff();
                if (emptyDiv !== this.context.element.wysiwyg) this.util.removeItemAllParents(emptyDiv, function(current) {
                    return current.childNodes.length === 0;
                }, null);
                this.focus();
        }
        // history stack
        this.history.push(false);
    }
};
}),
"6982": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */ 'use strict';
var __WEBPACK_DEFAULT_EXPORT__ = {
    name: 'template',
    display: 'submenu',
    add: function(core, targetElement) {
        const context = core.context;
        context.template = {
            selectedIndex: -1
        };
        /** set submenu */ let templateDiv = this.setSubmenu(core);
        /** add event listeners */ templateDiv.querySelector('ul').addEventListener('click', this.pickup.bind(core));
        /** append target button menu */ core.initMenuTarget(this.name, targetElement, templateDiv);
        /** empty memory */ templateDiv = null;
    },
    setSubmenu: function(core) {
        const templateList = core.options.templates;
        if (!templateList || templateList.length === 0) throw Error('[SUNEDITOR.plugins.template.fail] To use the "template" plugin, please define the "templates" option.');
        const listDiv = core.util.createElement('DIV');
        listDiv.className = 'se-list-layer';
        let list = '<div class="se-submenu se-list-inner"><ul class="se-list-basic">';
        for(let i = 0, len = templateList.length, t; i < len; i++){
            t = templateList[i];
            list += '<li><button type="button" class="se-btn-list" data-value="' + i + '" title="' + t.name + '" aria-label="' + t.name + '">' + t.name + '</button></li>';
        }
        list += '</ul></div>';
        listDiv.innerHTML = list;
        return listDiv;
    },
    pickup: function(e) {
        if (!/^BUTTON$/i.test(e.target.tagName)) return false;
        e.preventDefault();
        e.stopPropagation();
        this.context.template.selectedIndex = e.target.getAttribute('data-value') * 1;
        const temp = this.options.templates[this.context.template.selectedIndex];
        if (temp.html) this.setContents(temp.html);
        else {
            this.submenuOff();
            throw Error('[SUNEDITOR.template.fail] cause : "templates[i].html not found"');
        }
        this.submenuOff();
    }
};
}),
"1038": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */ 'use strict';
var __WEBPACK_DEFAULT_EXPORT__ = {
    name: 'textStyle',
    display: 'submenu',
    add: function(core, targetElement) {
        const context = core.context;
        context.textStyle = {
            _styleList: null
        };
        /** set submenu */ let listDiv = this.setSubmenu(core);
        let listUl = listDiv.querySelector('ul');
        /** add event listeners */ listUl.addEventListener('click', this.pickup.bind(core));
        context.textStyle._styleList = listDiv.querySelectorAll('li button');
        /** append target button menu */ core.initMenuTarget(this.name, targetElement, listDiv);
        /** empty memory */ listDiv = null, listUl = null;
    },
    setSubmenu: function(core) {
        const option = core.options;
        const listDiv = core.util.createElement('DIV');
        listDiv.className = 'se-submenu se-list-layer se-list-format';
        const defaultList = {
            code: {
                name: core.lang.menu.code,
                class: '__se__t-code',
                tag: 'code'
            },
            translucent: {
                name: core.lang.menu.translucent,
                style: 'opacity: 0.5;',
                tag: 'span'
            },
            shadow: {
                name: core.lang.menu.shadow,
                class: '__se__t-shadow',
                tag: 'span'
            }
        };
        const styleList = !option.textStyles ? core._w.Object.keys(defaultList) : option.textStyles;
        let list = '<div class="se-list-inner"><ul class="se-list-basic">';
        for(let i = 0, len = styleList.length, t, tag, name, attrs, command, value, _class; i < len; i++){
            t = styleList[i];
            attrs = '', value = '', command = [];
            if (typeof t === 'string') {
                const defaultStyle = defaultList[t.toLowerCase()];
                if (!defaultStyle) continue;
                t = defaultStyle;
            }
            name = t.name;
            tag = t.tag || 'span';
            _class = t._class;
            if (t.style) {
                attrs += ' style="' + t.style + '"';
                value += t.style.replace(/:[^;]+(;|$)\s*/g, ',');
                command.push('style');
            }
            if (t.class) {
                attrs += ' class="' + t.class + '"';
                value += '.' + t.class.trim().replace(/\s+/g, ',.');
                command.push('class');
            }
            value = value.replace(/,$/, '');
            list += '<li><button type="button" class="se-btn-list' + (_class ? ' ' + _class : '') + '" data-command="' + tag + '" data-value="' + value + '" title="' + name + '" aria-label="' + name + '">' + '<' + tag + attrs + '>' + name + '</' + tag + '>' + '</button></li>';
        }
        list += '</ul></div>';
        listDiv.innerHTML = list;
        return listDiv;
    },
    /**
     * @Override submenu
     */ on: function() {
        const util = this.util;
        const textStyleContext = this.context.textStyle;
        const styleButtonList = textStyleContext._styleList;
        const selectionNode = this.getSelectionNode();
        for(let i = 0, len = styleButtonList.length, btn, data, active; i < len; i++){
            btn = styleButtonList[i];
            data = btn.getAttribute('data-value').split(',');
            for(let v = 0, node, value; v < data.length; v++){
                node = selectionNode;
                active = false;
                while(node && !util.isFormatElement(node) && !util.isComponent(node)){
                    if (node.nodeName.toLowerCase() === btn.getAttribute('data-command').toLowerCase()) {
                        value = data[v];
                        if (/^\./.test(value) ? util.hasClass(node, value.replace(/^\./, '')) : !!node.style[value]) {
                            active = true;
                            break;
                        }
                    }
                    node = node.parentNode;
                }
                if (!active) break;
            }
            active ? util.addClass(btn, 'active') : util.removeClass(btn, 'active');
        }
    },
    pickup: function(e) {
        e.preventDefault();
        e.stopPropagation();
        let target = e.target;
        let command = null, tag = null;
        while(!command && !/UL/i.test(target.tagName)){
            command = target.getAttribute('data-command');
            if (command) {
                tag = target.firstChild;
                break;
            }
            target = target.parentNode;
        }
        if (!command) return;
        const checkStyles = tag.style.cssText.replace(/:.+(;|$)/g, ',').split(',');
        checkStyles.pop();
        const classes = tag.classList;
        for(let i = 0, len = classes.length; i < len; i++)checkStyles.push('.' + classes[i]);
        const newNode = this.util.hasClass(target, 'active') ? null : tag.cloneNode(false);
        const removeNodes = newNode ? null : [
            tag.nodeName
        ];
        this.nodeChange(newNode, checkStyles, removeNodes, true);
        this.submenuOff();
    }
};
}),
"1577": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* harmony import */var _lib_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/core */"9794");
/* harmony import */var _lib_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */var _lib_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/util */"3051");
/* harmony import */var _lib_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/constructor */"3463");
/* harmony import */var _lib_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/context */"2358");
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */ 'use strict';




var __WEBPACK_DEFAULT_EXPORT__ = {
    /**
     * @description Returns the create function with preset options.
     * If the options overlap, the options of the 'create' function take precedence.
     * @param {Json} options Initialization options
     * @returns {Object}
     */ init: function(init_options) {
        return {
            create: (function(idOrElement, options) {
                return this.create(idOrElement, options, init_options);
            }).bind(this)
        };
    },
    /**
     * @description Create the suneditor
     * @param {String|Element} idOrElement textarea Id or textarea element
     * @param {JSON|Object} options user options
     * @returns {Object}
     */ create: function(idOrElement, options, _init_options) {
        _lib_util__WEBPACK_IMPORTED_MODULE_1__["default"]._propertiesInit();
        if (typeof options !== 'object') options = {};
        if (_init_options) options = [
            _init_options,
            options
        ].reduce(function(init, option) {
            for(let key in option){
                if (!_lib_util__WEBPACK_IMPORTED_MODULE_1__["default"].hasOwn(option, key)) continue;
                if (key === 'plugins' && option[key] && init[key]) {
                    let i = init[key], o = option[key];
                    i = i.length ? i : Object.keys(i).map(function(name) {
                        return i[name];
                    });
                    o = o.length ? o : Object.keys(o).map(function(name) {
                        return o[name];
                    });
                    init[key] = o.filter(function(val) {
                        return i.indexOf(val) === -1;
                    }).concat(i);
                } else init[key] = option[key];
            }
            return init;
        }, {});
        const element = typeof idOrElement === 'string' ? document.getElementById(idOrElement) : idOrElement;
        if (!element) {
            if (typeof idOrElement === 'string') throw Error('[SUNEDITOR.create.fail] The element for that id was not found (ID:"' + idOrElement + '")');
            throw Error('[SUNEDITOR.create.fail] suneditor requires textarea\'s element or id value');
        }
        const cons = _lib_constructor__WEBPACK_IMPORTED_MODULE_2__["default"].init(element, options);
        if (cons.constructed._top.id && document.getElementById(cons.constructed._top.id)) throw Error('[SUNEDITOR.create.fail] The ID of the suneditor you are trying to create already exists (ID:"' + cons.constructed._top.id + '")');
        return _lib_core__WEBPACK_IMPORTED_MODULE_0___default()((0, _lib_context__WEBPACK_IMPORTED_MODULE_3__["default"])(element, cons.constructed, cons.options), cons.pluginCallButtons, cons.plugins, cons.options.lang, options, cons._responsiveButtons);
    }
};
}),
"112": (function (module, __unused_webpack_exports, __webpack_require__) {
"use strict";
module.exports = __webpack_require__.p + "5c97cea0e4022053c7f8.svg";}),
"8307": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* harmony import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */"5893");
/* harmony import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */var _logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.svg */"112");
/* harmony import */var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */"391");
/* harmony import */var _MyComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MyComponent */"2985");




function App() {
    return /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "App",
        children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
            className: "App-header",
            children: [
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                    src: _logo_svg__WEBPACK_IMPORTED_MODULE_1__,
                    className: "App-logo",
                    alt: "logo"
                }),
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    children: [
                        "Edit ",
                        /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                            children: "src/App.js"
                        }),
                        " and save to reload."
                    ]
                }),
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                    className: "App-link",
                    href: "https://reactjs.org",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Learn React"
                }),
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MyComponent__WEBPACK_IMPORTED_MODULE_3__.MyComponent, {})
            ]
        })
    });
}
var __WEBPACK_DEFAULT_EXPORT__ = App;
}),
"2985": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MyComponent: function() { return MyComponent; }
});
/* harmony import */var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */"7409");
/* harmony import */var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */"9282");
/* harmony import */var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */"8956");
/* harmony import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */"5893");
/* harmony import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */"7294");
/* harmony import */var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */var suneditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! suneditor */"1577");
/* harmony import */var suneditor_src_plugins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! suneditor/src/plugins */"3978");








var DEFAULT_EDITOR_OPTIONS = {
    plugins: [
        suneditor_src_plugins__WEBPACK_IMPORTED_MODULE_6__.align
    ],
    value: "",
    toolbarContainer: "",
    buttonList: [],
    font: [],
    tableCellControllerPosition: "bottom",
    showPathLabel: false,
    resizingBar: false,
    defaultStyle: "",
    historyStackDelayTime: 100,
    attributesWhitelist: {
        all: "style|data-childtable|src"
    },
    addTagsWhitelist: "img|mark",
    imageUploadUrl: "",
    frameAttrbutes: {
        spellcheck: false
    },
    placeholder: ""
};
 function MyComponent() {
    var editorRef = (0, react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
    var editorInstanceRef = (0, react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
    var _useState = (0, _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0, react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), 2), isEditorReady = _useState[0], setIsEditorReady = _useState[1];
    (0, react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function InitEditor() {
        editorInstanceRef.current = suneditor__WEBPACK_IMPORTED_MODULE_5__["default"].create(editorRef.current, (0, _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_1__._)((0, _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_0__._)({}, DEFAULT_EDITOR_OPTIONS, editorOptions), {
            plugins: editorPlugins
        }));
        if (getEditorInstance) getEditorInstance(editorInstanceRef.current);
        if (onSave) editorInstanceRef.current.onSave = function(content) {
            return onSave(content);
        };
        setIsEditorReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: [
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                ref: editorRef
            }),
            isEditorReady && /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(CustomPluginPortals, (0, _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_1__._)((0, _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_0__._)({}, rest), {
                ref: editorInstanceRef
            }))
        ]
    });
}
}),
"8494": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */"5893");
/* harmony import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */"7294");
/* harmony import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/client */"745");
/* harmony import */var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */"2793");
/* harmony import */var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */"8307");





var root = react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot(document.getElementById("root"));
root.render(/*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react__WEBPACK_IMPORTED_MODULE_1___default().StrictMode), {
    children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_App__WEBPACK_IMPORTED_MODULE_4__["default"], {})
}));
}),
"391": (function (module) {
"use strict";
}),
"2793": (function (module) {
"use strict";
}),
"7245": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _array_like_to_array: function() { return _array_like_to_array; }
});
 function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}

}),
"241": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _array_with_holes: function() { return _array_with_holes; }
});
 function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}

}),
"7412": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _define_property: function() { return _define_property; }
});
 function _define_property(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}

}),
"6287": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _iterable_to_array_limit: function() { return _iterable_to_array_limit; }
});
 function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}

}),
"9129": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _non_iterable_rest: function() { return _non_iterable_rest; }
});
 function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

}),
"7409": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: function() { return _object_spread; }
});
/* harmony import */var _define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_define_property.js */"7412");

 function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            (0, _define_property_js__WEBPACK_IMPORTED_MODULE_0__._define_property)(target, key, source[key]);
        });
    }
    return target;
}

}),
"9282": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: function() { return _object_spread_props; }
});
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
 function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    else ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
    return target;
}

}),
"8956": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: function() { return _sliced_to_array; }
});
/* harmony import */var _array_with_holes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_array_with_holes.js */"241");
/* harmony import */var _iterable_to_array_limit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_iterable_to_array_limit.js */"6287");
/* harmony import */var _non_iterable_rest_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_non_iterable_rest.js */"9129");
/* harmony import */var _unsupported_iterable_to_array_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_unsupported_iterable_to_array.js */"7501");




 function _sliced_to_array(arr, i) {
    return (0, _array_with_holes_js__WEBPACK_IMPORTED_MODULE_0__._array_with_holes)(arr) || (0, _iterable_to_array_limit_js__WEBPACK_IMPORTED_MODULE_1__._iterable_to_array_limit)(arr, i) || (0, _unsupported_iterable_to_array_js__WEBPACK_IMPORTED_MODULE_3__._unsupported_iterable_to_array)(arr, i) || (0, _non_iterable_rest_js__WEBPACK_IMPORTED_MODULE_2__._non_iterable_rest)();
}

}),
"7501": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _unsupported_iterable_to_array: function() { return _unsupported_iterable_to_array; }
});
/* harmony import */var _array_like_to_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_array_like_to_array.js */"7245");

 function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return (0, _array_like_to_array_js__WEBPACK_IMPORTED_MODULE_0__._array_like_to_array)(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0, _array_like_to_array_js__WEBPACK_IMPORTED_MODULE_0__._array_like_to_array)(o, minLen);
}

}),

}
// The module cache
 var __webpack_module_cache__ = {};
function __webpack_require__(moduleId) {
// Check if module is in cache
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== undefined) {
      return cachedModule.exports;
      }
      // Create a new module (and put it into the cache)
      var module = (__webpack_module_cache__[moduleId] = {
      id: moduleId,
loaded: false,
 exports: {}
      });
      // Execute the module function
      __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
// Flag the module as loaded 
 module.loaded = true;
// Return the exports of the module
 return module.exports;

}
// webpack/runtime/define_property_getters
!function() {
__webpack_require__.d = function(exports, definition) {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
}();
// webpack/runtime/make_namespace_object
!function() {
// define __esModule on exports
__webpack_require__.r = function(exports) {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};

}();
// webpack/runtime/compat_get_default_export
!function() {
// getDefaultExport function for compatibility with non-harmony modules
__webpack_require__.n = function (module) {
	var getter = module && module.__esModule ?
		function () { return module['default']; } :
		function () { return module; };
	__webpack_require__.d(getter, { a: getter });
	return getter;
};




}();
// webpack/runtime/node_module_decorator
!function() {
__webpack_require__.nmd = function (module) {
    module.paths = [];
    if (!module.children) module.children = [];
    return module;
};
}();
// webpack/runtime/has_own_property
!function() {
__webpack_require__.o = function (obj, prop) {
	return Object.prototype.hasOwnProperty.call(obj, prop);
};

}();
// webpack/runtime/global
!function() {
__webpack_require__.g = (function () {
	if (typeof globalThis === 'object') return globalThis;
	try {
		return this || new Function('return this')();
	} catch (e) {
		if (typeof window === 'object') return window;
	}
})();

}();
// webpack/runtime/auto_public_path
!function() {

    var scriptUrl;
    if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
    var document = __webpack_require__.g.document;
    if (!scriptUrl && document) {
      if (document.currentScript) scriptUrl = document.currentScript.src;
        if (!scriptUrl) {
          var scripts = document.getElementsByTagName("script");
              if (scripts.length) {
                var i = scripts.length - 1;
                while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
              }
        }
      }
    
    // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration",
    // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.',
    if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
    scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
    __webpack_require__.p = scriptUrl
    
}();
var __webpack_exports__ = __webpack_require__("8494");
})()

//# sourceMappingURL=main.js.map