(function () {
    const {
        log: ㅤ
    } = console;
    let ﾠ = 0;
    let ᅟ = 0;
    let ᅠ = 0;
    ! function () {
        var ㅤ, ㅤㅤ, ㅤﾠ;
        ㅤ = function (ㅤ) {
            "use strict";
            var ﾠ, ᅟ, ᅠ, ㅤㅤ, ㅤﾠ = void 0 === Number.MAX_SAFE_INTEGER ? 9007199254740991 : Number.MAX_SAFE_INTEGER,
                ㅤᅟ = new WeakMap;

            function ㅤᅠ(ㅤ) {
                var ᅠ = ᅟ.get(ㅤ),
                    ㅤㅤ = void 0 === ᅠ ? ㅤ.size : ᅠ < 1073741824 ? ᅠ + 1 : 0;
                if(!ㅤ.has(ㅤㅤ)) return ﾠ(ㅤ, ㅤㅤ);
                if(ㅤ.size < 536870912) {
                    for(; ㅤ.has(ㅤㅤ);) ㅤㅤ = Math.floor(1073741824 * Math.random());
                    return ﾠ(ㅤ, ㅤㅤ)
                }
                if(ㅤ.size > ㅤﾠ) throw Error("Congratulations, you created a collection of unique numbers which uses all available integers!");
                for(; ㅤ.has(ㅤㅤ);) ㅤㅤ = Math.floor(Math.random() * ㅤﾠ);
                return ﾠ(ㅤ, ㅤㅤ)
            }
            ㅤㅤ = ㅤᅟ, ﾠ = function (ㅤ, ﾠ) {
                return ㅤㅤ.set(ㅤ, ﾠ), ﾠ
            }, ᅟ = ㅤᅟ, ᅠ = ㅤᅠ, ㅤ.addUniqueNumber = function (ㅤ) {
                var ﾠ = ᅠ(ㅤ);
                return ㅤ.add(ﾠ), ﾠ
            }, ㅤ.generateUniqueNumber = ㅤᅠ, Object.defineProperty(ㅤ, "__esModule", {
                value: !0
            })
        }, "object" == typeof exports && "undefined" != typeof module ? ㅤ(exports) : "function" == typeof define && define.amd ? define(["exports"], ㅤ) : ㅤ(ᅠ = {}), ㅤㅤ = function (ㅤ, ﾠ) {
            "use strict";
            ㅤ.load = function (ㅤ) {
                var ᅟ = new Map([
                        [0, function () {}]
                    ]),
                    ᅠ = new Map([
                        [0, function () {}]
                    ]),
                    ㅤㅤ = new Map,
                    ㅤﾠ = new Worker(ㅤ);
                return ㅤﾠ.addEventListener("message", function (ㅤ) {
                    var ﾠ, ㅤﾠ = ㅤ.data;
                    if(void 0 !== (ﾠ = ㅤﾠ).method && "call" === ﾠ.method) {
                        var ㅤᅟ = ㅤﾠ.params,
                            ㅤᅠ = ㅤᅟ.timerId,
                            ﾠㅤ = ㅤᅟ.timerType;
                        if("interval" === ﾠㅤ) {
                            var ﾠﾠ = ᅟ.get(ㅤᅠ);
                            if("number" == typeof ﾠﾠ) {
                                var ﾠᅟ = ㅤㅤ.get(ﾠﾠ);
                                if(void 0 === ﾠᅟ || ﾠᅟ.timerId !== ㅤᅠ || ﾠᅟ.timerType !== ﾠㅤ) throw Error("The timer is in an undefined state.")
                            } else {
                                if(void 0 === ﾠﾠ) throw Error("The timer is in an undefined state.");
                                ﾠﾠ()
                            }
                        } else if("timeout" === ﾠㅤ) {
                            var ﾠᅠ = ᅠ.get(ㅤᅠ);
                            if("number" == typeof ﾠᅠ) {
                                var ᅟㅤ = ㅤㅤ.get(ﾠᅠ);
                                if(void 0 === ᅟㅤ || ᅟㅤ.timerId !== ㅤᅠ || ᅟㅤ.timerType !== ﾠㅤ) throw Error("The timer is in an undefined state.")
                            } else {
                                if(void 0 === ﾠᅠ) throw Error("The timer is in an undefined state.");
                                ﾠᅠ(), ᅠ.delete(ㅤᅠ)
                            }
                        }
                    } else {
                        if(null !== (ᅟﾠ = ㅤﾠ).error || "number" != typeof ᅟﾠ.id) throw Error(ㅤﾠ.error.message);
                        var ᅟﾠ, ᅟᅟ = ㅤﾠ.id,
                            ᅟᅠ = ㅤㅤ.get(ᅟᅟ);
                        if(void 0 === ᅟᅠ) throw Error("The timer is in an undefined state.");
                        var ᅠㅤ = ᅟᅠ.timerId,
                            ᅠﾠ = ᅟᅠ.timerType;
                        ㅤㅤ.delete(ᅟᅟ), "interval" === ᅠﾠ ? ᅟ.delete(ᅠㅤ) : ᅠ.delete(ᅠㅤ)
                    }
                }), {
                    clearInterval: function (ㅤ) {
                        var ᅠ = ﾠ.generateUniqueNumber(ㅤㅤ);
                        ㅤㅤ.set(ᅠ, {
                            timerId: ㅤ,
                            timerType: "interval"
                        }), ᅟ.set(ㅤ, ᅠ), ㅤﾠ.postMessage({
                            id: ᅠ,
                            method: "clear",
                            params: {
                                timerId: ㅤ,
                                timerType: "interval"
                            }
                        })
                    },
                    clearTimeout: function (ㅤ) {
                        var ᅟ = ﾠ.generateUniqueNumber(ㅤㅤ);
                        ㅤㅤ.set(ᅟ, {
                            timerId: ㅤ,
                            timerType: "timeout"
                        }), ᅠ.set(ㅤ, ᅟ), ㅤﾠ.postMessage({
                            id: ᅟ,
                            method: "clear",
                            params: {
                                timerId: ㅤ,
                                timerType: "timeout"
                            }
                        })
                    },
                    setInterval: function (ㅤ, ᅠ) {
                        var ㅤㅤ = ﾠ.generateUniqueNumber(ᅟ);
                        return ᅟ.set(ㅤㅤ, function () {
                            ㅤ(), "function" == typeof ᅟ.get(ㅤㅤ) && ㅤﾠ.postMessage({
                                id: null,
                                method: "set",
                                params: {
                                    delay: ᅠ,
                                    now: performance.now(),
                                    timerId: ㅤㅤ,
                                    timerType: "interval"
                                }
                            })
                        }), ㅤﾠ.postMessage({
                            id: null,
                            method: "set",
                            params: {
                                delay: ᅠ,
                                now: performance.now(),
                                timerId: ㅤㅤ,
                                timerType: "interval"
                            }
                        }), ㅤㅤ
                    },
                    setTimeout: function (ㅤ, ᅟ) {
                        var ㅤㅤ = ﾠ.generateUniqueNumber(ᅠ);
                        return ᅠ.set(ㅤㅤ, ㅤ), ㅤﾠ.postMessage({
                            id: null,
                            method: "set",
                            params: {
                                delay: ᅟ,
                                now: performance.now(),
                                timerId: ㅤㅤ,
                                timerType: "timeout"
                            }
                        }), ㅤㅤ
                    }
                }
            }, Object.defineProperty(ㅤ, "__esModule", {
                value: !0
            })
        }, "object" == typeof exports && "undefined" != typeof module ? ㅤㅤ(exports, require("fast-unique-numbers")) : "function" == typeof define && define.amd ? define(["exports", "fast-unique-numbers"], ㅤㅤ) : ㅤㅤ(ᅟ = {}, ᅠ), ㅤﾠ = function (ㅤ, ﾠ) {
            "use strict";
            var ᅟ, ᅠ = null;

            function ㅤㅤ() {
                if(null !== ᅠ) return ᅠ;
                var ㅤ = new Blob(['(()=>{var e={67:(e,t,r)=>{var o,i;void 0===(i="function"==typeof(o=function(){"use strict";var e=new Map,t=new Map,r=function(t){var r=e.get(t);if(void 0===r)throw new Error(\'There is no interval scheduled with the given id "\'.concat(t,\'".\'));clearTimeout(r),e.delete(t)},o=function(e){var r=t.get(e);if(void 0===r)throw new Error(\'There is no timeout scheduled with the given id "\'.concat(e,\'".\'));clearTimeout(r),t.delete(e)},i=function(e,t){var r,o=performance.now();return{expected:o+(r=e-Math.max(0,o-t)),remainingDelay:r}},n=function e(t,r,o,i){var n=performance.now();n>o?postMessage({id:null,method:"call",params:{timerId:r,timerType:i}}):t.set(r,setTimeout(e,o-n,t,r,o,i))},a=function(t,r,o){var a=i(t,o),s=a.expected,d=a.remainingDelay;e.set(r,setTimeout(n,d,e,r,s,"interval"))},s=function(e,r,o){var a=i(e,o),s=a.expected,d=a.remainingDelay;t.set(r,setTimeout(n,d,t,r,s,"timeout"))};addEventListener("message",(function(e){var t=e.data;try{if("clear"===t.method){var i=t.id,n=t.params,d=n.timerId,c=n.timerType;if("interval"===c)r(d),postMessage({error:null,id:i});else{if("timeout"!==c)throw new Error(\'The given type "\'.concat(c,\'" is not supported\'));o(d),postMessage({error:null,id:i})}}else{if("set"!==t.method)throw new Error(\'The given method "\'.concat(t.method,\'" is not supported\'));var u=t.params,l=u.delay,p=u.now,m=u.timerId,v=u.timerType;if("interval"===v)a(l,m,p);else{if("timeout"!==v)throw new Error(\'The given type "\'.concat(v,\'" is not supported\'));s(l,m,p)}}}catch(e){postMessage({error:{message:e.message},id:t.id,result:null})}}))})?o.call(t,r,t,e):o)||(e.exports=i)}},t={};function r(o){var i=t[o];if(void 0!==i)return i.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(67)})()})();'], {
                        type: "application/javascript; charset=utf-8"
                    }),
                    ﾠ = URL.createObjectURL(ㅤ);
                return (ᅠ = ᅟ(ﾠ)).setTimeout(function () {
                    return URL.revokeObjectURL(ﾠ)
                }, 0), ᅠ
            }
            ᅟ = ﾠ.load, ㅤ.clearInterval = function (ㅤ) {
                return ㅤㅤ().clearInterval(ㅤ)
            }, ㅤ.clearTimeout = function (ㅤ) {
                return ㅤㅤ().clearTimeout(ㅤ)
            }, ㅤ.setInterval = function (ㅤ, ﾠ) {
                return ㅤㅤ().setInterval(ㅤ, ﾠ)
            }, ㅤ.setTimeout = function (ㅤ, ﾠ) {
                return ㅤㅤ().setTimeout(ㅤ, ﾠ)
            }, Object.defineProperty(ㅤ, "__esModule", {
                value: !0
            })
        }, "object" == typeof exports && "undefined" != typeof module ? ㅤﾠ(exports, require("worker-timers-broker")) : "function" == typeof define && define.amd ? define(["exports", "worker-timers-broker"], ㅤﾠ) : ㅤﾠ(ﾠ = {}, ᅟ)
    }();
    const ㅤㅤ = document.querySelectorAll("script");
    const ㅤﾠ = Array.from(ㅤㅤ).filter(ㅤ => {
        const ﾠ = ㅤ.src;
        return ﾠ && ﾠ.includes("https://starve.io/js/") && !ﾠ.includes("token.js") && !ﾠ.includes("howler.js") && !ﾠ.includes("jquery.js")
    });
    const ㅤᅟ = ㅤﾠ[0].src;
    let ㅤᅠ = null;
    let ﾠㅤ = [];
    const ﾠﾠ = () => new Promise((ㅤ, ﾠ) => {
        const ᅟ = indexedDB.open("crackSunrise", 1);
        ᅟ.onupgradeneeded = ㅤ => {
            const ﾠ = ㅤ.target.result;
            ﾠ.objectStoreNames.contains("data") || ﾠ.createObjectStore("data")
        };
        ᅟ.onsuccess = ﾠ => ㅤ(ﾠ.target.result);
        ᅟ.onerror = ﾠ
    });
    const ﾠᅟ = async ㅤ => new Promise(async ﾠ => {
        (await ﾠﾠ()).transaction("data", "readonly").objectStore("data").get(ㅤ).onsuccess = ㅤ => ﾠ(ㅤ.target.result)
    });
    const ﾠᅠ = async (ㅤ, ﾠ) => new Promise(async ᅟ => {
        (await ﾠﾠ()).transaction("data", "readwrite").objectStore("data").put(ﾠ, ㅤ).onsuccess = ᅟ
    });
    async function ᅟㅤ(ㅤ) {
        const ﾠ = ["", "", "", "", ""];

        function ᅟ(ㅤ) {
            if(!ㅤ || typeof ㅤ !== "object") {
                return
            }
            if(ㅤ.type === "SequenceExpression") {
                let ᅟ;
                let ᅠ;
                for(const ﾠ of ㅤ.expressions) {
                    if(ﾠ.type === "AssignmentExpression" && ﾠ.right?.value === "url('img/cursor1.png'), pointer") {
                        ᅟ = ﾠ
                    } else if(ﾠ.type === "AssignmentExpression") {
                        ᅠ = ﾠ
                    }
                }
                if(ᅟ && ᅠ?.left?.property?.name) {
                    ﾠ[0] = ᅠ.left.property.name
                }
            }
            if(ㅤ.type === "AssignmentExpression" && ㅤ.left?.object?.type === "ThisExpression" && ㅤ.right?.type === "ArrayExpression" && ㅤ.right.elements.length === 9 && ㅤ.right.elements.every(ㅤ => ㅤ?.type === "ArrayExpression")) {
                ﾠ[1] = ㅤ.left.property.name
            }
            if(ㅤ.type === "AssignmentExpression" && ㅤ.right?.type === "ObjectExpression" && ㅤ.left?.object?.type === "ThisExpression") {
                for(const ᅟ of ㅤ.right.properties) {
                    const ᅠ = ᅟ.value?.arguments;
                    if(Array.isArray(ᅠ) && ᅠ.some(ㅤ => ㅤ?.value === "commandInput")) {
                        ﾠ[2] = ㅤ.left.property.name;
                        break
                    }
                }
            }
            if(ㅤ.type === "AssignmentExpression" && ㅤ.left?.object?.type === "ThisExpression" && ㅤ.right?.type === "UnaryExpression" && ㅤ.right.argument?.value === 1e6) {
                ﾠ[3] = ㅤ.left.property.name
            }
            if(ㅤ.type === "AssignmentExpression" && ㅤ.right?.type === "ObjectExpression" && ㅤ.left?.object?.type === "ThisExpression") {
                for(const ᅟ of ㅤ.right.properties) {
                    const ᅠ = ᅟ.value?.arguments;
                    if(Array.isArray(ᅠ) && ᅠ.some(ㅤ => ㅤ?.value === "serverAddressBlock")) {
                        ﾠ[4] = ㅤ.left.property.name;
                        break
                    }
                }
            }
            for(const ﾠ in ㅤ) {
                const ᅠ = ㅤ[ﾠ];
                if(Array.isArray(ᅠ)) {
                    ᅠ.forEach(ᅟ)
                } else if(ᅠ && typeof ᅠ === "object") {
                    ᅟ(ᅠ)
                }
            }
        }
        ᅟ(ㅤ);
        return ﾠ
    }

    function ᅟﾠ(ㅤ) {
        for(const ﾠ of ㅤ) {
            if(!ﾠ) continue;
            const ㅤ = ﾠ + " ";
            Object.defineProperty(Object.prototype, ﾠ, {
                configurable: true,
                set(ﾠ) {
                    this[ㅤ] = ﾠ;
                    setTimeout(() => ﾠㅤ.push(this), 0)
                },
                get() {
                    return this[ㅤ]
                }
            })
        }
    }

    function ᅟᅟ() {
        const ㅤ = new XMLHttpRequest;
        ㅤ.open("GET", ㅤᅟ, true);
        ㅤ.onreadystatechange = async () => {
            if(ㅤ.readyState !== 4 || ㅤ.status !== 200) return;
            ㅤᅠ = ㅤ;
            const ᅟ = ㅤᅟ.match(/v=(\d+)/)?.[1];
            const ᅠ = await ﾠᅟ("__ClientHandler__");
            let ㅤㅤ;
            if(ᅠ && ᅠ.version === ᅟ && Array.isArray(ᅠ.props)) {
                ㅤㅤ = ᅠ.props
            } else {
                const ﾠ = await Terser.minify(ㅤ.responseText, {
                    compress: {
                        passes: 1
                    },
                    mangle: false
                });
                const ᅠ = acorn.parse(ﾠ.code, {
                    ecmaVersion: 2020
                });
                ㅤㅤ = await ᅟㅤ(ᅠ);
                await ﾠᅠ("__ClientHandler__", {
                    version: ᅟ,
                    props: ㅤㅤ
                })
            }
            ᅟﾠ(ㅤㅤ);
            const ㅤﾠ = document.createElement("script");
            ㅤﾠ.src = "https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.14.0/beautify.min.js";
            document.head.appendChild(ㅤﾠ);
            if(localStorage.getItem("VoidStorage")) {
                localStorage.removeItem("VoidStorage")
            }
            if(localStorage.getItem("cto_version")) {
                localStorage.removeItem("cto_version")
            }
            if(localStorage.getItem("cto_cache")) {
                localStorage.removeItem("cto_cache")
            }
            if(localStorage.getItem("cto_prop")) {
                localStorage.removeItem("cto_prop")
            }
            if(localStorage.getItem("cto_code")) {
                localStorage.removeItem("cto_code")
            }
            if(localStorage.getItem("cto_id")) {
                localStorage.removeItem("cto_id")
            }
            if(localStorage.getItem("VOID")) {
                localStorage.removeItem("VOID")
            }
            if(localStorage.getItem("  ")) {
                localStorage.removeItem("  ")
            }
            if(localStorage.getItem(" ")) {
                localStorage.removeItem(" ")
            }
            let ﾠﾠ;
            let ᅟᅟ;
            let ᅟᅠ;
            let ᅠㅤ;
            let ᅠﾠ;
            let ᅠᅟ;
            let ᅠᅠ;
            let ㅤㅤㅤ;
            let ㅤㅤﾠ;
            let ㅤㅤᅟ;
            let ㅤㅤᅠ;
            let ㅤﾠㅤ;
            let ㅤﾠﾠ;
            let ㅤﾠᅟ = false;
            let ㅤﾠᅠ = false;
            let ㅤᅟㅤ = false;
            let ㅤᅟﾠ = {};
            let ㅤᅟᅟ = null;
            let ㅤᅟᅠ = null;
            let ㅤᅠㅤ = false;
            let ㅤᅠﾠ = false;
            let ㅤᅠᅟ = false;
            let ㅤᅠᅠ = false;
            let ﾠㅤㅤ = false;
            let ﾠㅤﾠ = Infinity;
            let ﾠㅤᅟ = 0;
            let ﾠㅤᅠ = 0;
            let ﾠﾠㅤ = 0;
            let ﾠﾠﾠ = 0;
            let ﾠﾠᅟ = false;
            let ﾠﾠᅠ = false;
            let ﾠᅟㅤ = false;
            let ﾠᅟﾠ = 0;
            let ﾠᅟᅟ = Date.now();
            let ﾠᅟᅠ = 0;
            let ﾠᅠㅤ = 0;
            let ﾠᅠﾠ = 0;
            let ﾠᅠᅟ = 0;
            let ﾠᅠᅠ = 0;
            let ᅟㅤㅤ = 0;
            let ᅟㅤﾠ = 0;

            function ᅟㅤᅟ() {
                const ㅤ = Date.now();
                if(ㅤ - ㅤᅠᅟㅤ < 5e3) {
                    ﾠﾠᅟㅤ("#3b3b3b", "Please wait 5 seconds before using that!");
                    return
                } else {
                    ﾠﾠᅟㅤ("#3b3b3b", "Sending request to Token Holder!");
                    ㅤᅠᅟㅤ = ㅤ
                }
                let ﾠ = ㅤㅤﾠㅤ.websocket.url.split("?")[0];
                let ᅟ = ᅟㅤᅠ.localToken.Token;
                let ᅠ = ᅟㅤᅠ.localToken.TokenID;
                let ㅤㅤ = 0;
                let ㅤﾠ;
                let ㅤᅟ;
                switch(ᅟㅤᅠ.tokenHolder.seedToPlace) {
                case "Berry Seed":
                    ㅤㅤ = 206;
                    break;
                case "Wheat Seed":
                    ㅤㅤ = 225;
                    break;
                case "Pumpkin Seed":
                    ㅤㅤ = 290;
                    break;
                case "Carrot Seed":
                    ㅤㅤ = 314;
                    break;
                case "Tomato Seed":
                    ㅤㅤ = 316;
                    break;
                case "Thornbush Seed":
                    ㅤㅤ = 295;
                    break;
                case "Garlic Seed":
                    ㅤㅤ = 293;
                    break;
                case "Watermelon Seed":
                    ㅤㅤ = 318;
                    break;
                default:
                    ㅤㅤ = 0;
                    break
                }
                switch(ᅟㅤᅠ.tokenHolder.craftId) {
                case "Golden Pitchfork":
                    ㅤﾠ = 100;
                    break;
                case "Bands":
                    ㅤﾠ = 297;
                    break;
                case "Dragon Arrows":
                    ㅤﾠ = 189;
                    break;
                case "Reidite Wall":
                    ㅤﾠ = 327;
                    break;
                case "Reidite Door":
                    ㅤﾠ = 328;
                    break;
                case "Reidite Spike":
                    ㅤﾠ = 329;
                    break;
                case "Reidite Spiked Door":
                    ㅤﾠ = 330;
                    break;
                case "Bed":
                    ㅤﾠ = 300;
                    break;
                case "Bottle":
                    ㅤﾠ = 218;
                    break;
                default:
                    ㅤﾠ = 0;
                    break
                }
                switch(ᅟㅤᅠ.tokenHolder.recycleId) {
                case "Hood":
                    ㅤᅟ = 156;
                    break;
                case "Saddle":
                    ㅤᅟ = 162;
                    break;
                case "Book":
                    ㅤᅟ = 46;
                    break;
                case "Plot":
                    ㅤᅟ = 234;
                    break;
                case "WTT":
                    ㅤᅟ = 228;
                    break;
                case "Bed":
                    ㅤᅟ = 300;
                    break;
                default:
                    ㅤᅟ = 0;
                    break
                }
                const ㅤᅠ = {
                    server: ﾠ,
                    token: ᅟ,
                    tokenid: ᅠ,
                    Settings: {
                        BlueCrown: ᅟㅤᅠ.tokenHolder.bluecrown,
                        AutoFarm: {
                            Enabled: ᅟㅤᅠ.tokenHolder.autofarm,
                            TLX: ᅟㅤᅠ.AutoFarm.TLX,
                            TLY: ᅟㅤᅠ.AutoFarm.TLY,
                            BRX: ᅟㅤᅠ.AutoFarm.BRX,
                            BRY: ᅟㅤᅠ.AutoFarm.BRY,
                            SX: ᅟㅤᅠ.AutoFarm.SX,
                            SY: ᅟㅤᅠ.AutoFarm.SY
                        },
                        Whitelist: ᅟㅤᅠ.AutoFarm.whitelist.split(" ") || [],
                        AutoSeed: {
                            Enabled: ᅟㅤᅠ.tokenHolder.autoseed,
                            seedToPlace: ㅤㅤ
                        },
                        AutoCraftAndRecycle: {
                            Enabled: ᅟㅤᅠ.tokenHolder.autocraft || ᅟㅤᅠ.tokenHolder.autorecycle,
                            craftId: ㅤﾠ,
                            recycleId: ㅤᅟ,
                            CraftEnabled: ᅟㅤᅠ.tokenHolder.autocraft,
                            RecycleEnabled: ᅟㅤᅠ.tokenHolder.autorecycle
                        }
                    }
                };
                if(ᅠᅟᅠ) {
                    ᅠᅟᅠ.send(ﾠﾠㅤᅠ(JSON.stringify([5, ㅤᅠ])))
                }
            }
            let ᅟㅤᅠ = {
                darkMode: 0,
                putToChest: 10,
                pingDisplay: 1,
                fpsDisplay: 1,
                gaugeTimer: 1,
                gaugePercentages: 1,
                boxInfo: 1,
                fireInfo: 1,
                timePlayed: {
                    active: 1,
                    start: 0,
                    resetClock: true
                },
                daysAlive: 1,
                chestInfo: {
                    texture: "Bright",
                    active: 1
                },
                playerTimers: "Enemys",
                smoothRoofs: 1,
                joinsLeaves: 1,
                menuOpacity: .5,
                buildingInfo: 1,
                playersOnTop: 1,
                treasureChestOnTop: 1,
                skinChanger: {
                    active: 0,
                    skin: 0
                },
                bagChanger: {
                    active: 0,
                    bag: 0
                },
                bookChanger: {
                    active: 0,
                    book: 0
                },
                accChanger: {
                    active: 0,
                    acc: 0
                },
                totemOnMap: {
                    active: 1,
                    x: 0,
                    y: 0
                },
                deathOnMap: {
                    active: 1,
                    x: 0,
                    y: 0
                },
                drawLeaderboardAllies: 1,
                ZmaAutoCrown: 1,
                playerTracers: 1,
                ColoredSpikes: {
                    texture: "Light",
                    active: 1
                },
                vehicleOpacity: .5,
                listEnabledHacks: {
                    mode: "Bottom Left"
                },
                movementPredictor: 1,
                blizzardAndSandstorm: 1,
                Debugger: {
                    mode: "None"
                },
                equipAfterPlace: {
                    active: 1
                },
                Spectator: {
                    bind: "KeyV",
                    speed: 25
                },
                DropSword: {
                    bind: "Backquote"
                },
                Roof: {
                    active: 1,
                    opacity: .5
                },
                Hidden: {
                    active: false,
                    bind: "NONE"
                },
                AutoSteal: {
                    active: false,
                    bind: "KeyQ"
                },
                AutoCraft: {
                    active: false,
                    bind: "KeyC"
                },
                AutoExtPut: {
                    active: false,
                    bind: "NONE"
                },
                AutoExtTake: {
                    active: false,
                    bind: "NONE"
                },
                AutoBreadTake: {
                    active: false,
                    bind: "NONE"
                },
                AutoBreadPut: {
                    active: false,
                    bind: "NONE"
                },
                AutoRecycle: {
                    active: false,
                    bind: "KeyE"
                },
                SmartCraft: {
                    active: false,
                    option: "Gold Spikes",
                    amount: 10,
                    bind: "NONE"
                },
                Xray: {
                    active: true,
                    opacity: .5,
                    bind: "KeyZ"
                },
                AutoWall: {
                    active: false,
                    mode: "Normal",
                    bind: "Space"
                },
                AutoSpike: {
                    active: false,
                    mode: "Normal",
                    bind: "KeyF",
                    speed: 4
                },
                AutoCrown: {
                    active: false,
                    bind: "NONE"
                },
                AutoTotem: {
                    active: false,
                    bind: "KeyT"
                },
                AutoBuild: {
                    active: false,
                    bind: "KeyB",
                    mode: "Bridges"
                },
                AutoFire: {
                    active: false,
                    bind: "NONE"
                },
                Aimbot: {
                    active: false,
                    bind: "Numpad1",
                    angle: 0,
                    mode: "Only Attack",
                    rangeVisual: 0,
                    BowRange: 300
                },
                AutoIce: {
                    active: 1
                },
                AutoFurnace: {
                    active: 0,
                    bind: "NONE"
                },
                AutoRespawn: {
                    active: 1
                },
                AutoBook: {
                    active: 1
                },
                ZmaAutoBottle: {
                    enabled: 0,
                    health: 30
                },
                AutoEmerald: {
                    active: false,
                    bind: "KeyM",
                    angle: 0
                },
                AutoTame: {
                    active: false,
                    bind: "NONE",
                    angle: 0
                },
                AutoLand: {
                    active: 0
                },
                AutoHat: {
                    active: 0
                },
                AutoDiving: {
                    active: 0
                },
                AutoUnlock: {
                    active: 0
                },
                AutoSeed: {
                    active: 0
                },
                AutoFarm: {
                    active: false,
                    bind: "KeyH",
                    angle: 0,
                    TLX: 0,
                    TLY: 0,
                    BRX: 0,
                    BRY: 0,
                    SX: 0,
                    SY: 0,
                    whitelist: ""
                },
                PathFinder: {
                    active: false,
                    bind: "KeyP",
                    End: {
                        x: -1,
                        y: -1
                    },
                    inventory: 1,
                    lastKit: 0
                },
                Translation: {
                    recievedLang: "English (American)",
                    sentLang: "English (American)",
                    translateSent: 0,
                    translateRecieved: 1
                },
                ZmaRedGold: {
                    active: false,
                    bind: "NONE"
                },
                Tracers: {
                    Krakens: 0,
                    Sandworms: 0,
                    BabyDragons: 0,
                    BabyLavaDragons: 0,
                    BabyMammoths: 0,
                    Bears: 0,
                    Boars: 0,
                    Crabs: 0,
                    Dragons: 0,
                    FireMobs: 0,
                    Foxes: 0,
                    Hawks: 0,
                    KingCrabs: 0,
                    LavaDragons: 0,
                    Mammoths: 0,
                    Penguins: 0,
                    Piranhas: 0,
                    Rabbits: 0,
                    Spiders: 0,
                    Vultures: 0,
                    Wolfs: 0,
                    GoldenHens: 0,
                    GoldenChickens: 0,
                    Ocelots: 0,
                    Crocodiles: 0,
                    Parrots: 0
                },
                canvasBrightness: 1,
                localToken: {
                    Token: ﾠᅟᅟㅤ("starve_token"),
                    TokenID: ﾠᅟᅟㅤ("starve_token_id")
                },
                showLeaderBoardLevels: 1,
                increasedZoom: "Auto",
                market: {
                    wood: 0,
                    stone: 0,
                    gold: 0,
                    diamond: 0,
                    amethyst: 0,
                    reidite: 0
                },
                tokenHolder: {
                    autofarm: 0,
                    autoseed: 0,
                    autocraft: 0,
                    autorecycle: 0,
                    craftId: 0,
                    recycleId: 0,
                    seedToPlace: 0,
                    bluecrown: 0
                }
            };
            const ᅟﾠㅤ = {
                darkMode: 0,
                putToChest: 1,
                pingDisplay: 2,
                fpsDisplay: 3,
                gaugeTimer: 4,
                gaugePercentages: 5,
                boxInfo: 6,
                fireInfo: 7,
                ["timePlayed.active"]: 8,
                ["timePlayed.start"]: 9,
                ["timePlayed.resetClock"]: 10,
                daysAlive: 11,
                ["chestInfo.texture"]: 12,
                ["chestInfo.active"]: 13,
                playerTimers: 14,
                smoothRoofs: 15,
                joinsLeaves: 16,
                menuOpacity: 17,
                buildingInfo: 18,
                playersOnTop: 19,
                ["skinChanger.active"]: 20,
                ["skinChanger.skin"]: 21,
                ["bagChanger.active"]: 22,
                ["bagChanger.bag"]: 23,
                ["bookChanger.active"]: 24,
                ["bookChanger.book"]: 25,
                ["accChanger.active"]: 26,
                ["accChanger.acc"]: 27,
                ["totemOnMap.active"]: 28,
                ["totemOnMap.x"]: 29,
                ["totemOnMap.y"]: 30,
                ["deathOnMap.active"]: 31,
                ["deathOnMap.x"]: 32,
                ["deathOnMap.y"]: 33,
                drawLeaderboardAllies: 34,
                ZmaAutoCrown: 35,
                playerTracers: 36,
                ["ColoredSpikes.texture"]: 37,
                ["ColoredSpikes.active"]: 38,
                vehicleOpacity: 39,
                ["listEnabledHacks.mode"]: 40,
                movementPredictor: 41,
                blizzardAndSandstorm: 42,
                ["Debugger.mode"]: 43,
                ["Spectator.bind"]: 44,
                ["Spectator.speed"]: 45,
                ["DropSword.bind"]: 46,
                ["Roof.active"]: 47,
                ["Roof.opacity"]: 48,
                ["Hidden.active"]: 49,
                ["Hidden.bind"]: 50,
                ["AutoSteal.active"]: 51,
                ["AutoSteal.bind"]: 52,
                ["AutoCraft.active"]: 53,
                ["AutoCraft.bind"]: 54,
                ["AutoExtPut.active"]: 55,
                ["AutoExtPut.bind"]: 56,
                ["AutoExtTake.active"]: 57,
                ["AutoExtTake.bind"]: 58,
                ["AutoBreadTake.active"]: 59,
                ["AutoBreadTake.bind"]: 60,
                ["AutoBreadPut.active"]: 61,
                ["AutoBreadPut.bind"]: 62,
                ["AutoRecycle.active"]: 63,
                ["AutoRecycle.bind"]: 64,
                ["SmartCraft.active"]: 65,
                ["SmartCraft.option"]: 66,
                ["SmartCraft.amount"]: 67,
                ["Xray.active"]: 68,
                ["Xray.opacity"]: 69,
                ["Xray.bind"]: 70,
                ["AutoWall.active"]: 71,
                ["AutoWall.mode"]: 72,
                ["AutoWall.bind"]: 73,
                ["AutoSpike.active"]: 74,
                ["AutoSpike.mode"]: 75,
                ["AutoSpike.bind"]: 76,
                ["AutoSpike.speed"]: 77,
                ["AutoCrown.active"]: 78,
                ["AutoCrown.bind"]: 79,
                ["AutoTotem.active"]: 80,
                ["AutoTotem.bind"]: 81,
                ["AutoBuild.active"]: 82,
                ["AutoBuild.bind"]: 83,
                ["AutoBuild.mode"]: 84,
                ["AutoFire.active"]: 85,
                ["AutoFire.bind"]: 86,
                ["Aimbot.active"]: 87,
                ["Aimbot.bind"]: 88,
                ["Aimbot.angle"]: 89,
                ["Aimbot.mode"]: 90,
                ["Aimbot.rangeVisual"]: 91,
                ["Aimbot.BowRange"]: 92,
                ["AutoIce.active"]: 93,
                ["AutoRespawn.active"]: 94,
                ["AutoBook.active"]: 95,
                ["ZmaAutoBottle.enabled"]: 96,
                ["ZmaAutoBottle.health"]: 97,
                ["AutoEmerald.active"]: 98,
                ["AutoEmerald.bind"]: 99,
                ["AutoEmerald.angle"]: 100,
                ["AutoTame.active"]: 101,
                ["AutoTame.bind"]: 102,
                ["AutoTame.angle"]: 103,
                ["AutoLand.active"]: 104,
                ["AutoHat.active"]: 105,
                ["AutoDiving.active"]: 106,
                ["AutoUnlock.active"]: 107,
                ["AutoSeed.active"]: 108,
                ["AutoFarm.active"]: 109,
                ["AutoFarm.bind"]: 110,
                ["AutoFarm.angle"]: 111,
                ["AutoFarm.TLX"]: 112,
                ["AutoFarm.TLY"]: 113,
                ["AutoFarm.BRX"]: 114,
                ["AutoFarm.BRY"]: 115,
                ["AutoFarm.SX"]: 116,
                ["AutoFarm.SY"]: 117,
                ["PathFinder.active"]: 118,
                ["PathFinder.bind"]: 119,
                ["PathFinder.End.x"]: 120,
                ["PathFinder.End.y"]: 121,
                ["PathFinder.inventory"]: 122,
                ["PathFinder.lastKit"]: 123,
                ["Translation.recievedLang"]: 124,
                ["Translation.sentLang"]: 125,
                ["Translation.translateSent"]: 126,
                ["Translation.translateRecieved"]: 127,
                ["ZmaRedGold.active"]: 128,
                ["ZmaRedGold.bind"]: 129,
                ["Tracers.Krakens"]: 130,
                ["Tracers.Sandworms"]: 131,
                ["Tracers.BabyDragons"]: 132,
                ["Tracers.BabyLavaDragons"]: 133,
                ["Tracers.BabyMammoths"]: 134,
                ["Tracers.Bears"]: 135,
                ["Tracers.Boars"]: 136,
                ["Tracers.Crabs"]: 137,
                ["Tracers.Dragons"]: 138,
                ["Tracers.FireMobs"]: 139,
                ["Tracers.Foxes"]: 140,
                ["Tracers.Hawks"]: 141,
                ["Tracers.KingCrabs"]: 142,
                ["Tracers.LavaDragons"]: 143,
                ["Tracers.Mammoths"]: 144,
                ["Tracers.Penguins"]: 145,
                ["Tracers.Piranhas"]: 146,
                ["Tracers.Rabbits"]: 147,
                ["Tracers.Spiders"]: 148,
                ["Tracers.Vultures"]: 149,
                ["Tracers.Wolfs"]: 150,
                ["Tracers.GoldenHens"]: 151,
                ["Tracers.GoldenChickens"]: 152,
                ["Tracers.Ocelots"]: 153,
                ["Tracers.Crocodiles"]: 154,
                ["Tracers.Parrots"]: 155,
                canvasBrightness: 156,
                ["localToken.Token"]: 157,
                ["localToken.TokenID"]: 158,
                showLeaderBoardLevels: 159,
                increasedZoom: 160,
                ["market.wood"]: 161,
                ["market.stone"]: 162,
                ["market.gold"]: 163,
                ["market.diamond"]: 164,
                ["market.amethyst"]: 165,
                ["market.reidite"]: 166,
                ["tokenHolder.autofarm"]: 167,
                ["tokenHolder.autoseed"]: 168,
                ["tokenHolder.autocraft"]: 169,
                ["tokenHolder.autorecycle"]: 170,
                ["tokenHolder.craftId"]: 171,
                ["tokenHolder.recycleId"]: 172,
                ["tokenHolder.seedToPlace"]: 173,
                ["AutoFarm.whitelist"]: 174,
                ["SmartCraft.bind"]: 175,
                ["tokenHolder.bluecrown"]: 176,
                ["AutoFurnace.active"]: 177,
                ["AutoFurnace.bind"]: 178,
                ["equipAfterPlace.active"]: 179,
                treasureChestOnTop: 180
            };

            function ᅟﾠﾠ(ㅤ, ﾠ = [], ᅟ = []) {
                for(const ᅠ in ㅤ) {
                    const ㅤㅤ = ㅤ[ᅠ];
                    const ㅤﾠ = [...ﾠ, ᅠ];
                    if(typeof ㅤㅤ === "object" && ㅤㅤ !== null && !Array.isArray(ㅤㅤ)) {
                        ᅟﾠﾠ(ㅤㅤ, ㅤﾠ, ᅟ)
                    } else {
                        ᅟ.push(ㅤﾠ.join("."))
                    }
                }
                return ᅟ
            }

            function ᅟﾠᅟ(ㅤ) {
                const ﾠ = [];

                function ᅟ(ㅤ, ᅠ = []) {
                    for(const ㅤㅤ in ㅤ) {
                        const ㅤﾠ = ㅤ[ㅤㅤ];
                        const ㅤᅟ = [...ᅠ, ㅤㅤ];
                        if(typeof ㅤﾠ === "object" && ㅤﾠ !== null && !Array.isArray(ㅤﾠ)) {
                            ᅟ(ㅤﾠ, ㅤᅟ)
                        } else {
                            const ㅤ = ㅤᅟ.join(".");
                            const ᅟ = ᅟﾠㅤ[ㅤ];
                            if(ᅟ !== undefined) {
                                ﾠ.push([ᅟ, ㅤﾠ])
                            }
                        }
                    }
                }
                ᅟ(ㅤ);
                return ﾠ
            }

            function ᅟﾠᅠ(ㅤ, ﾠ) {
                const ᅟ = {};
                const ᅠ = {};
                for(const [ㅤㅤ, ㅤﾠ] of Object.entries(ﾠ)) {
                    const ﾠ = ㅤㅤ.split(".");
                    ᅟ[ㅤﾠ] = ㅤㅤ;
                    ᅠ[ㅤﾠ] = {
                        get: () => ﾠ.reduce((ㅤ, ﾠ) => ㅤ?.[ﾠ], ㅤ),
                        set: ᅟ => {
                            const ᅠ = ﾠ.pop();
                            const ㅤㅤ = ﾠ.reduce((ㅤ, ﾠ) => ㅤ?.[ﾠ], ㅤ);
                            if(ㅤㅤ && ᅠ in ㅤㅤ) {
                                ㅤㅤ[ᅠ] = ᅟ
                            }
                        }
                    }
                }
                return {
                    idToPath: ᅟ,
                    valueRefs: ᅠ
                }
            }
            const {
                idToPath: ᅟᅟㅤ,
                valueRefs: ᅟᅟﾠ
            } = ᅟﾠᅠ(ᅟㅤᅠ, ᅟﾠㅤ);

            function ᅟᅟᅟ(ㅤ) {
                var ﾠ = "";
                for(var ᅟ = 0; ᅟ < ㅤ; ᅟ++) {
                    ﾠ += String.fromCharCode(48 + Math.floor(Math.random() * 74))
                }
                return ﾠ
            }
            let ᅟᅟᅠ = function () {};
            let ᅟᅠㅤ = function () {};
            let ᅟᅠﾠ = function () {};
            let ᅟᅠᅟ = class ㅤ {
                constructor(ㅤ) {
                    this.guiConfig = ㅤ;
                    this.guiTitle = 0;
                    this.container = 0;
                    this.customiseButton = 0;
                    this.mainContent = 0;
                    this.header = 0;
                    this.secondOverlay = 0;
                    this.guiButton = 0;
                    this.overlay = 0;
                    this.subfolderLabel = [];
                    this.checkBoxLabel = [];
                    this.rangeWrapper = [];
                    this.rangeLabel = [];
                    this.range = [];
                    this.rangeValueDisplay = [];
                    this.bindWrapper = [];
                    this.bindLabel = [];
                    this.bindButton = [];
                    this.selectWrapper = [];
                    this.selectLabel = [];
                    this.select = [];
                    this.buttonWrapper = [];
                    this.button = [];
                    this.textWrapper = [];
                    this.textLabel = [];
                    this.textInput = [];
                    this.folderButton = [];
                    this.realIndex = [];
                    this.previousFolderName = null;
                    this.cachedSavedValues = ᅟﾠᅟ(ᅟㅤᅠ)
                }
                saveSettings() {
                    const ㅤ = Date.now();
                    if(ㅤ - ㅤᅠﾠﾠ < 100 && ㅤᅠﾠᅟ) {
                        clearTimeout(ㅤᅠﾠᅟ)
                    }
                    ㅤᅠﾠﾠ = ㅤ;
                    ㅤᅠﾠᅟ = ﾠ.setTimeout(() => {
                        const ㅤ = ᅟﾠᅟ(ᅟㅤᅠ);
                        try {
                            localStorage.setItem("settings_all", JSON.stringify(ㅤ))
                        } catch (ㅤ) {}
                        this.cachedSavedValues = ㅤ;
                        this.updateGuiValues?.()
                    }, 100)
                }
                saveGuiSettings() {
                    const ㅤ = Object.keys(this.guiConfig).filter(ㅤ => ㅤ !== "folders" && ㅤ !== "title");
                    const ﾠ = ㅤ.map(ㅤ => this.guiConfig[ㅤ]);
                    localStorage.setItem("guiSettings", JSON.stringify(ﾠ))
                }
                xor(ㅤ) {
                    return Array.from(ㅤ).map(ㅤ => String.fromCharCode(ㅤ.charCodeAt(0) ^ 1410065407)).join("")
                }
                updateGuiValues() {
                    this.realIndex = 0;
                    const ㅤ = document.getElementById(this.xor("content"));
                    if(!ㅤ) {
                        return ﾠ.setTimeout(() => {
                            this.updateGuiValues()
                        }, 500)
                    }
                    Object.keys(this.guiConfig.folders).forEach(ﾠ => {
                        this.guiConfig.folders[ﾠ].forEach(ᅟ => {
                            if(ᅟ.type === "subfolder") {
                                this.handleSubfolder(ㅤ, ᅟ.subfolder, ﾠ)
                            } else {
                                this.handleItem(ㅤ, ᅟ, ﾠ, this.realIndex);
                                this.realIndex++
                            }
                        })
                    })
                }
                handleSubfolder(ㅤ, ﾠ, ᅟ) {
                    ﾠ.forEach(ﾠ => {
                        this.handleItem(ㅤ, ﾠ, ᅟ, this.realIndex);
                        this.realIndex++
                    })
                }
                handleItem(ㅤ, ﾠ, ᅟ, ᅠ) {
                    if(this.previousFolderName != ᅟ) {
                        this.realIndex = 0;
                        ᅠ = 0
                    }
                    this.previousFolderName = ᅟ;
                    if(ﾠ.type === "checkbox") {
                        const ㅤㅤ = ㅤ.querySelector('input[type="checkbox"][id="' + this.xor(ᅠ + ᅟ) + '"]');
                        if(ㅤㅤ) {
                            ㅤㅤ.checked = ﾠ.property ? ﾠ.object[ﾠ.property] : ﾠ.object
                        }
                    } else if(ﾠ.type === "range") {
                        const ㅤㅤ = ㅤ.querySelector('input[type="range"][id="' + this.xor(ᅠ + ᅟ) + '"]');
                        const ㅤﾠ = ㅤ.querySelector('input[type="number"][id="' + this.xor(ᅠ + ᅟ) + '"]');
                        if(ㅤㅤ && ㅤﾠ) {
                            ㅤㅤ.value = ﾠ.property ? ﾠ.object[ﾠ.property] : ﾠ.object;
                            ㅤﾠ.value = ﾠ.property ? ﾠ.object[ﾠ.property] : ﾠ.object
                        }
                    } else if(ﾠ.type === "select") {
                        const ㅤㅤ = ㅤ.querySelector('select[id="' + this.xor(ᅠ + ᅟ) + '"]');
                        if(ㅤㅤ) {
                            ㅤㅤ.value = ﾠ.property ? ﾠ.object[ﾠ.property] : ﾠ.object
                        }
                    } else if(ﾠ.type === "text") {
                        const ㅤㅤ = ㅤ.querySelector('input[type="text"][id="' + this.xor(ᅠ + ᅟ) + '"]');
                        if(ㅤㅤ) {
                            ㅤㅤ.value = ﾠ.property ? ﾠ.object[ﾠ.property] : ﾠ.object
                        }
                    }
                }
                build() {
                    let ㅤ = this;
                    const ᅟ = document.createElement("link");
                    ᅟ.href = "https://fonts.googleapis.com/css2?family=Baloo+Paaji&display=swap";
                    ᅟ.rel = "stylesheet";
                    ᅟ.onload = function () {
                        const ᅟ = document.createElement("div");
                        ㅤ.container = ᅟ;
                        ᅟ.id = ㅤ.xor("gui");
                        ᅟ.style.position = "fixed";
                        ᅟ.style.width = ㅤ.guiConfig.width + "px";
                        ᅟ.style.height = ㅤ.guiConfig.height + "px";
                        ᅟ.style.backgroundColor = "rgb(20, 20, 20)";
                        ᅟ.style.border = "8px solid rgb(20, 20, 20)";
                        ᅟ.style.borderRadius = "8px";
                        ᅟ.style.zIndex = "9999";
                        ᅟ.style.boxShadow = "0px 6px 12px rgba(0, 0, 0, 0.4)";
                        ᅟ.style.display = "flex";
                        ᅟ.style.flexDirection = "column";
                        ᅟ.style.boxSizing = "border-box";
                        ᅟ.style.lineHeight = 1.5;
                        ᅟ.style.opacity = ㅤ.guiConfig.opacity;
                        if(ㅤ.guiConfig.align == "left") {
                            ᅟ.style.top = "0%";
                            ᅟ.style.left = "0%";
                            ᅟ.style.transform = "translate(0%, 0%)";
                            ᅟ.style.borderTopLeftRadius = "0px";
                            ᅟ.style.borderTopRightRadius = "8px"
                        } else if(ㅤ.guiConfig.align == "right") {
                            ᅟ.style.top = "0%";
                            ᅟ.style.right = "0%";
                            ᅟ.style.transform = "translate(0%, 0%)";
                            ᅟ.style.borderTopLeftRadius = "8px";
                            ᅟ.style.borderTopRightRadius = "0px"
                        } else if(ㅤ.guiConfig.align == "middle" || ㅤ.guiConfig.align == "center") {
                            ᅟ.style.top = "50%";
                            ᅟ.style.left = "50%";
                            ᅟ.style.transform = "translate(-50%, -50%)";
                            ᅟ.style.borderTopLeftRadius = "8px";
                            ᅟ.style.borderTopRightRadius = "8px"
                        }
                        ᅟ.style.cursor = ㅤ.guiConfig.draggable ? "grab" : "default";
                        document.body.appendChild(ᅟ);
                        const ᅠ = document.createElement("div");
                        ㅤ.guiTitle = ᅠ;
                        ᅠ.id = ㅤ.xor("guiTitle");
                        ᅠ.textContent = ㅤ.guiConfig.title;
                        ᅠ.style.backgroundColor = "rgb(20, 20, 20)";
                        ᅠ.style.color = "#fff";
                        ᅠ.style.fontSize = ㅤ.guiConfig.fontSize + 8 + "px";
                        ᅠ.style.padding = "12px";
                        ᅠ.style.textAlign = "left";
                        ᅠ.style.borderTopLeftRadius = "0px";
                        ᅠ.style.borderTopRightRadius = "0px";
                        ᅠ.style.marginBottom = "3px";
                        ᅠ.style.display = "flex";
                        ᅠ.style.justifyContent = "space-between";
                        ᅠ.style.alignItems = "center";
                        ᅟ.appendChild(ᅠ);
                        let ㅤㅤ = false;
                        let ㅤﾠ;
                        let ㅤᅟ;
                        const ㅤᅠ = ᅟ.querySelectorAll('input[type="range"]');
                        ㅤᅠ.forEach(ㅤ => {
                            ㅤ.addEventListener("mousedown", ㅤ => {
                                ㅤ.stopPropagation()
                            })
                        });
                        ᅟ.addEventListener("mousedown", ﾠ => {
                            if(!ﾠ.target.classList.contains("no-drag") && ﾠ.target.type !== "range" && ㅤ.guiConfig.draggable) {
                                ㅤㅤ = true;
                                ㅤﾠ = ﾠ.clientX - ᅟ.offsetLeft;
                                ㅤᅟ = ﾠ.clientY - ᅟ.offsetTop;
                                if(ㅤ.container) {
                                    ㅤ.container.style.cursor = "grabbing"
                                }
                                const ᅠ = {
                                    rangeWrapper: ㅤ.rangeWrapper,
                                    rangeLabel: ㅤ.rangeLabel,
                                    bindWrapper: ㅤ.bindWrapper,
                                    selectWrapper: ㅤ.selectWrapper,
                                    selectLabel: ㅤ.selectLabel,
                                    buttonWrapper: ㅤ.buttonWrapper,
                                    textWrapper: ㅤ.textWrapper,
                                    textLabel: ㅤ.textLabel
                                };
                                for(const [ㅤ, ﾠ] of Object.entries(ᅠ)) {
                                    if(Array.isArray(ﾠ) && ﾠ.length > 0) {
                                        ﾠ.forEach(ㅤ => {
                                            if(ㅤ) {
                                                ㅤ.style.cursor = "grabbing"
                                            }
                                        })
                                    }
                                }
                            }
                        });
                        ᅟ.addEventListener("mousemove", ﾠ => {
                            if(ㅤㅤ && ㅤ.guiConfig.draggable) {
                                ᅟ.style.left = ﾠ.clientX - ㅤﾠ + "px";
                                ᅟ.style.top = ﾠ.clientY - ㅤᅟ + "px"
                            }
                        });
                        ᅟ.addEventListener("mouseup", () => {
                            if(!ㅤ.guiConfig.draggable) {
                                return
                            }
                            ㅤㅤ = false;
                            if(ㅤ.container) {
                                ㅤ.container.style.cursor = "grab"
                            }
                            const ﾠ = {
                                rangeWrapper: ㅤ.rangeWrapper,
                                rangeLabel: ㅤ.rangeLabel,
                                bindWrapper: ㅤ.bindWrapper,
                                selectWrapper: ㅤ.selectWrapper,
                                selectLabel: ㅤ.selectLabel,
                                buttonWrapper: ㅤ.buttonWrapper,
                                textWrapper: ㅤ.textWrapper,
                                textLabel: ㅤ.textLabel
                            };
                            for(const [ㅤ, ᅟ] of Object.entries(ﾠ)) {
                                if(Array.isArray(ᅟ) && ᅟ.length > 0) {
                                    ᅟ.forEach(ㅤ => {
                                        if(ㅤ) {
                                            ㅤ.style.cursor = "grab"
                                        }
                                    })
                                }
                            }
                        });
                        const ﾠㅤ = document.createElement("div");
                        ㅤ.mainContent = ﾠㅤ;
                        ﾠㅤ.style.display = "flex";
                        ﾠㅤ.style.height = ㅤ.guiConfig.height - 85 + "px";
                        ﾠㅤ.style.borderRadius = "15px";
                        ﾠㅤ.style.boxSizing = "border-box";
                        ﾠㅤ.style.lineHeight = 1.5;
                        ᅟ.appendChild(ﾠㅤ);
                        const ﾠﾠ = document.createElement("div");
                        ﾠﾠ.id = ㅤ.xor("sidebar");
                        ﾠﾠ.style.width = "35%";
                        ﾠﾠ.style.color = "#fff";
                        ﾠﾠ.style.borderRadius = "8px";
                        ﾠﾠ.style.overflowY = "auto";
                        ﾠﾠ.style.boxSizing = "border-box";
                        ﾠﾠ.style.lineHeight = 1.5;
                        ﾠﾠ.style.fontSize = ㅤ.guiConfig.fontSize + 6 + "px";
                        ﾠㅤ.appendChild(ﾠﾠ);
                        const ﾠᅟ = document.createElement("div");
                        ﾠᅟ.id = ㅤ.xor("content");
                        ﾠᅟ.style.width = "80%";
                        ﾠᅟ.style.backgroundColor = "rgb(30, 30, 30)";
                        ﾠᅟ.style.color = "#fff";
                        ﾠᅟ.style.padding = "8px";
                        ﾠᅟ.style.overflowY = "auto";
                        ﾠᅟ.style.display = "flex";
                        ﾠᅟ.style.flexDirection = "column";
                        ﾠᅟ.style.borderRadius = "12px";
                        ﾠᅟ.style.boxSizing = "border-box";
                        ﾠᅟ.style.lineHeight = 1.5;
                        ﾠㅤ.appendChild(ﾠᅟ);
                        const ﾠᅠ = document.createElement("button");
                        ㅤ.customiseButton = ﾠᅠ;
                        ﾠᅠ.textContent = "Customise";
                        ﾠᅠ.style.backgroundColor = "rgb(45, 45, 45)";
                        ﾠᅠ.style.color = "#fff";
                        ﾠᅠ.style.border = "none";
                        ﾠᅠ.style.borderRadius = "5px";
                        ﾠᅠ.style.padding = "8px 12px";
                        ﾠᅠ.style.cursor = "pointer";
                        ﾠᅠ.style.marginLeft = "auto";
                        ﾠᅠ.style.fontSize = ㅤ.guiConfig.fontSize + "px";
                        ﾠᅠ.style.fontFamily = "Baloo Paaji";
                        ﾠᅠ.style.display = "flex";
                        ﾠᅠ.style.alignItems = "center";
                        const ᅟㅤ = document.createElement("div");
                        ㅤᅟᅠ = ᅟㅤ;
                        ㅤ.secondOverlay = ᅟㅤ;
                        ᅟㅤ.style.id = ㅤ.xor("overlay");
                        ᅟㅤ.style.position = "fixed";
                        ᅟㅤ.style.backgroundColor = "rgba(0, 0, 0, 0.333)";
                        ᅟㅤ.style.zIndex = "10000";
                        ᅟㅤ.style.display = "none";
                        ᅟㅤ.style.alignItems = "center";
                        ᅟㅤ.style.justifyContent = "center";
                        ᅟㅤ.style.top = "0";
                        ᅟㅤ.style.left = "0";
                        ᅟㅤ.style.width = "100%";
                        ᅟㅤ.style.height = "100%";
                        let ᅟﾠ = ㅤ => {
                            ㅤ.stopPropagation()
                        };
                        ᅟㅤ.addEventListener("mouseup", ᅟﾠ, false);
                        ᅟㅤ.addEventListener("mousedown", ᅟﾠ, false);
                        ᅟㅤ.addEventListener("keydown", ᅟﾠ, false);
                        ᅟㅤ.addEventListener("keyup", ᅟﾠ, false);
                        const ᅟᅟ = document.createElement("div");
                        ᅟᅟ.style.backgroundColor = "rgb(30, 30, 30)";
                        ᅟᅟ.style.padding = "20px";
                        ᅟᅟ.style.borderRadius = "12px";
                        ᅟᅟ.style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.7)";
                        ᅟᅟ.style.color = "#fff";
                        ᅟᅟ.style.display = "flex";
                        ᅟᅟ.style.flexDirection = "row";
                        ᅟᅟ.style.width = "500px";
                        ᅟᅟ.style.maxWidth = "90%";
                        const ᅟᅠ = document.createElement("div");
                        ᅟᅠ.style.flex = "1";
                        ᅟᅠ.style.display = "flex";
                        ᅟᅠ.style.flexDirection = "column";
                        ᅟᅠ.style.justifyContent = "space-between";
                        const ᅠㅤ = document.createElement("h1");
                        ᅠㅤ.textContent = "Gui Customization";
                        ᅠㅤ.style.margin = "0";
                        ᅠㅤ.style.fontSize = "20px";
                        ᅠㅤ.style.marginBottom = "30px";
                        ᅟᅠ.appendChild(ᅠㅤ);
                        const ᅠﾠ = document.createElement("div");
                        ㅤᅟᅟ = ᅠﾠ;
                        ㅤ.guiButton = ᅠﾠ;
                        ᅠﾠ.style.display = ㅤ.guiConfig.toggleGuiButton ? "flex" : "none";
                        ᅠﾠ.style.position = "fixed";
                        ᅠﾠ.style.top = "0";
                        ᅠﾠ.style.right = "0";
                        ᅠﾠ.style.width = "20px";
                        ᅠﾠ.style.height = "20px";
                        ᅠﾠ.style.backgroundColor = "rgb(0, 0, 0)";
                        ᅠﾠ.style.cursor = "pointer";
                        ᅠﾠ.style.zIndex = "10000";
                        ᅠﾠ.style.opacity = "0.69";
                        ᅠﾠ.style.borderBottomLeftRadius = "4px";
                        ᅠﾠ.onmouseover = function () {
                            ᅠﾠ.style.opacity = "1"
                        };
                        ᅠﾠ.onmouseout = function () {
                            ᅠﾠ.style.opacity = "0.69"
                        };
                        ᅠﾠ.onclick = function () {
                            const ﾠ = document.getElementById(ㅤ.xor("gui")).style.display === "none";
                            document.getElementById(ㅤ.xor("gui")).style.display = ﾠ ? "flex" : "none";
                            ㅤ.secondOverlay.style.display = "none"
                        };
                        ᅠﾠ.addEventListener("mouseup", ᅟﾠ, false);
                        ᅠﾠ.addEventListener("mousedown", ᅟﾠ, false);
                        ᅠﾠ.addEventListener("keydown", ᅟﾠ, false);
                        ᅠﾠ.addEventListener("keyup", ᅟﾠ, false);
                        document.body.appendChild(ᅠﾠ);

                        function ᅠᅟ(ﾠ, ᅟ) {
                            const ᅠ = document.createElement("div");
                            ᅠ.style.marginBottom = "16px";
                            ᅠ.style.display = "flex";
                            const ㅤㅤ = document.createElement("label");
                            ㅤㅤ.textContent = ﾠ;
                            ㅤㅤ.style.color = "#fff";
                            ㅤㅤ.style.fontSize = "14px";
                            ㅤㅤ.style.display = "flex";
                            ㅤㅤ.style.width = "100px";
                            ㅤㅤ.style.alignItems = "center";
                            const ㅤﾠ = document.createElement("button");
                            ㅤﾠ.textContent = ㅤ.guiConfig[ᅟ] || "Set Key Bind";
                            ㅤﾠ.style.backgroundColor = "#333";
                            ㅤﾠ.style.color = "#fff";
                            ㅤﾠ.style.border = "none";
                            ㅤﾠ.style.borderRadius = "4px";
                            ㅤﾠ.style.padding = "2px 12px";
                            ㅤﾠ.style.cursor = "pointer";
                            ㅤﾠ.style.fontSize = "14px";
                            ㅤﾠ.style.fontFamily = "Baloo Paaji";
                            ㅤﾠ.style.height = "24px";
                            ㅤﾠ.addEventListener("click", () => {
                                ㅤﾠ.textContent = "Press any key... (Escape to remove)";
                                ㅤﾠ.blur();

                                function ﾠ(ᅠ) {
                                    const ㅤㅤ = ᅠ.code === "Escape" ? "NONE" : ᅠ.code;
                                    ㅤﾠ.textContent = ㅤㅤ;
                                    ㅤ.guiConfig[ᅟ] = ㅤㅤ;
                                    document.removeEventListener("keydown", ﾠ);
                                    ㅤﾠ.blur()
                                }
                                document.addEventListener("keydown", ﾠ)
                            });
                            ᅠ.appendChild(ㅤㅤ);
                            ᅠ.appendChild(ㅤﾠ);
                            ᅟᅠ.appendChild(ᅠ)
                        }

                        function ᅠᅠ(ﾠ, ᅠ, ㅤㅤ = .1, ㅤﾠ = 100, ㅤᅟ = 1, ㅤᅠ = "px") {
                            const ﾠㅤ = document.createElement("div");
                            ﾠㅤ.style.marginBottom = "16px";
                            ﾠㅤ.style.display = "flex";
                            ﾠㅤ.style.alignItems = "center";
                            const ﾠﾠ = document.createElement("label");
                            ﾠﾠ.textContent = ﾠ;
                            ﾠﾠ.style.color = "#fff";
                            ﾠﾠ.style.fontSize = "14px";
                            ﾠﾠ.style.width = "100px";
                            ﾠﾠ.style.height = "24px";
                            const ﾠᅟ = document.createElement("input");
                            ﾠᅟ.type = "range";
                            ﾠᅟ.min = ㅤㅤ;
                            ﾠᅟ.max = ㅤﾠ;
                            ﾠᅟ.step = ㅤᅟ;
                            ﾠᅟ.value = ㅤ.guiConfig[ᅠ];
                            ﾠᅟ.style.flex = "1";
                            ﾠᅟ.style.marginRight = "10px";
                            ﾠᅟ.style.cursor = "pointer";
                            const ﾠᅠ = document.createElement("span");
                            ﾠᅠ.textContent = ﾠᅟ.value + ㅤᅠ;
                            ﾠᅠ.style.color = "#fff";
                            ﾠᅠ.style.width = "10%";
                            ﾠᅟ.addEventListener("input", ﾠ => {
                                ㅤ.guiConfig[ᅠ] = ﾠ.target.value;
                                ﾠᅠ.textContent = ﾠ.target.value + ㅤᅠ;
                                ᅟ.style[ᅠ] = ﾠ.target.value + ㅤᅠ;
                                ㅤ.mainContent.style.height = ㅤ.guiConfig.height - 85 + "px";
                                if(ᅠ === "fontSize") {
                                    ㅤ.guiConfig[ᅠ] = parseInt(ﾠ.target.value, 10);
                                    ᅟ.style.fontSize = ㅤ.guiConfig[ᅠ] + "px";
                                    if(ㅤ.folderButton.length) {
                                        ㅤ.folderButton.forEach(ﾠ => {
                                            ﾠ.style.fontSize = ㅤ.guiConfig.fontSize + 6 + "px"
                                        })
                                    }
                                    if(ㅤ.guiTitle) {
                                        ㅤ.guiTitle.style.fontSize = ㅤ.guiConfig.fontSize + 8 + "px"
                                    }
                                    if(ㅤ.customiseButton) {
                                        ㅤ.customiseButton.style.fontSize = ㅤ.guiConfig.fontSize + "px"
                                    }
                                    if(ㅤ.header) {
                                        ㅤ.header.style.fontSize = ㅤ.guiConfig.fontSize + 4 + "px"
                                    }
                                    if(ㅤ.checkBoxLabel.length) {
                                        ㅤ.checkBoxLabel.forEach(ﾠ => {
                                            ﾠ.style.fontSize = ㅤ.guiConfig.fontSize + 2 + "px"
                                        })
                                    }
                                    if(ㅤ.subfolderLabel.length) {
                                        ㅤ.subfolderLabel.forEach(ﾠ => {
                                            ﾠ.style.fontSize = ㅤ.guiConfig.fontSize + 2 + "px"
                                        })
                                    }
                                    if(ㅤ.rangeLabel.length) {
                                        ㅤ.rangeLabel.forEach(ﾠ => {
                                            ﾠ.style.fontSize = ㅤ.guiConfig.fontSize + 2 + "px"
                                        })
                                    }
                                    if(ㅤ.range.length) {
                                        ㅤ.range.forEach(ﾠ => {
                                            ﾠ.style.height = ㅤ.guiConfig.fontSize - 8 + "px"
                                        })
                                    }
                                    if(ㅤ.rangeValueDisplay.length) {
                                        ㅤ.rangeValueDisplay.forEach(ﾠ => {
                                            ﾠ.style.fontSize = ㅤ.guiConfig.fontSize - 2 + "px"
                                        })
                                    }
                                    if(ㅤ.bindLabel.length) {
                                        ㅤ.bindLabel.forEach(ﾠ => {
                                            ﾠ.style.fontSize = ㅤ.guiConfig.fontSize + 2 + "px"
                                        })
                                    }
                                    if(ㅤ.bindButton.length) {
                                        ㅤ.bindButton.forEach(ﾠ => {
                                            ﾠ.style.fontSize = ㅤ.guiConfig.fontSize - 2 + "px";
                                            ﾠ.style.height = ㅤ.guiConfig.fontSize + 10 + "px"
                                        })
                                    }
                                    if(ㅤ.overlay.length) {
                                        ㅤ.overlay.forEach(ﾠ => {
                                            ﾠ.style.fontSize = ㅤ.guiConfig.fontSize + 6 + "px"
                                        })
                                    }
                                    if(ㅤ.selectLabel.length) {
                                        ㅤ.selectLabel.forEach(ﾠ => {
                                            ﾠ.style.fontSize = ㅤ.guiConfig.fontSize + 2 + "px"
                                        })
                                    }
                                    if(ㅤ.select.length) {
                                        ㅤ.select.forEach(ﾠ => {
                                            ﾠ.style.fontSize = ㅤ.guiConfig.fontSize - 2 + "px";
                                            ﾠ.style.height = ㅤ.guiConfig.fontSize + 10 + "px"
                                        })
                                    }
                                    if(ㅤ.button.length) {
                                        ㅤ.button.forEach(ﾠ => {
                                            ﾠ.style.fontSize = ㅤ.guiConfig.fontSize - 2 + "px";
                                            ﾠ.style.height = ㅤ.guiConfig.fontSize + 10 + "px"
                                        })
                                    }
                                    if(ㅤ.textInput.length) {
                                        ㅤ.textInput.forEach(ﾠ => {
                                            ﾠ.style.fontSize = ㅤ.guiConfig.fontSize - 2 + "px"
                                        })
                                    }
                                    if(ㅤ.textLabel.length) {
                                        ㅤ.textLabel.forEach(ﾠ => {
                                            ﾠ.style.fontSize = ㅤ.guiConfig.fontSize + 2 + "px"
                                        })
                                    }
                                }
                                ﾠᅟ.blur()
                            });
                            ﾠㅤ.appendChild(ﾠﾠ);
                            ﾠㅤ.appendChild(ﾠᅟ);
                            ﾠㅤ.appendChild(ﾠᅠ);
                            ᅟᅠ.appendChild(ﾠㅤ)
                        }

                        function ㅤㅤㅤ(ﾠ, ᅠ, ㅤㅤ) {
                            const ㅤﾠ = document.createElement("div");
                            ㅤﾠ.style.marginBottom = "16px";
                            ㅤﾠ.style.display = "flex";
                            const ㅤᅟ = document.createElement("label");
                            ㅤᅟ.textContent = ﾠ;
                            ㅤᅟ.style.color = "#fff";
                            ㅤᅟ.style.fontSize = "14px";
                            ㅤᅟ.style.width = "100px";
                            ㅤᅟ.style.display = "flex";
                            ㅤᅟ.style.alignItems = "center";
                            const ㅤᅠ = document.createElement("select");
                            ㅤᅠ.style.backgroundColor = "#333";
                            ㅤᅠ.style.fontSize = "14px";
                            ㅤᅠ.style.fontFamily = "Baloo Paaji";
                            ㅤᅠ.style.color = "#fff";
                            ㅤᅠ.style.border = "none";
                            ㅤᅠ.style.borderRadius = "4px";
                            ㅤᅠ.style.padding = "0px 8px";
                            ㅤᅠ.style.width = "100%";
                            ㅤᅠ.style.height = "24px";
                            ㅤᅠ.style.cursor = "pointer";
                            ㅤᅠ.style.flex = "1";
                            ㅤㅤ.forEach(ㅤ => {
                                const ﾠ = document.createElement("option");
                                ﾠ.value = ㅤ.value;
                                ﾠ.textContent = ㅤ.text;
                                ㅤᅠ.appendChild(ﾠ)
                            });
                            ㅤᅠ.value = ㅤ.guiConfig[ᅠ];
                            ㅤᅠ.addEventListener("change", ﾠ => {
                                ㅤ.guiConfig[ᅠ] = ﾠ.target.value;
                                if(ﾠ.target.value === "left") {
                                    ᅟ.style.top = "0%";
                                    ᅟ.style.left = "0%";
                                    ᅟ.style.right = "";
                                    ᅟ.style.transform = "";
                                    ᅟ.style.borderTopLeftRadius = "0px";
                                    ᅟ.style.borderTopRightRadius = "8px";
                                    ㅤ.guiButton.style.left = "0%";
                                    ㅤ.guiButton.style.right = "";
                                    ᅠﾠ.style.borderBottomLeftRadius = "0px";
                                    ᅠﾠ.style.borderBottomRightRadius = "4px"
                                } else if(ﾠ.target.value === "right") {
                                    ᅟ.style.top = "0%";
                                    ᅟ.style.right = "0%";
                                    ᅟ.style.left = "";
                                    ᅟ.style.transform = "";
                                    ᅟ.style.borderTopLeftRadius = "8px";
                                    ᅟ.style.borderTopRightRadius = "0px";
                                    ㅤ.guiButton.style.right = "0%";
                                    ㅤ.guiButton.style.left = "";
                                    ᅠﾠ.style.borderBottomLeftRadius = "4px";
                                    ᅠﾠ.style.borderBottomRightRadius = "0px"
                                } else {
                                    ᅟ.style.top = "50%";
                                    ᅟ.style.left = "50%";
                                    ᅟ.style.transform = "translate(-50%, -50%)";
                                    ᅟ.style.borderTopLeftRadius = "8px";
                                    ᅟ.style.borderTopRightRadius = "8px";
                                    ㅤ.guiButton.style.right = "0%";
                                    ㅤ.guiButton.style.left = "";
                                    ᅠﾠ.style.borderBottomLeftRadius = "4px";
                                    ᅠﾠ.style.borderBottomRightRadius = "0px"
                                }
                                ㅤᅠ.blur()
                            });
                            ㅤﾠ.appendChild(ㅤᅟ);
                            ㅤﾠ.appendChild(ㅤᅠ);
                            ᅟᅠ.appendChild(ㅤﾠ)
                        }

                        function ㅤㅤﾠ(ﾠ, ᅠ) {
                            const ㅤㅤ = document.createElement("div");
                            ㅤㅤ.style.marginBottom = "16px";
                            ㅤㅤ.style.display = "flex";
                            const ㅤﾠ = document.createElement("label");
                            ㅤﾠ.textContent = ﾠ;
                            ㅤﾠ.style.color = "#fff";
                            ㅤﾠ.style.fontSize = "14px";
                            ㅤﾠ.style.display = "flex";
                            ㅤﾠ.style.alignItems = "center";
                            ㅤﾠ.style.width = "100px";
                            ㅤﾠ.style.height = "24px";
                            const ㅤᅟ = document.createElement("input");
                            ㅤᅟ.type = "checkbox";
                            ㅤᅟ.checked = ㅤ.guiConfig[ᅠ];
                            ㅤᅟ.addEventListener("change", ﾠ => {
                                ㅤ.guiConfig[ᅠ] = ﾠ.target.checked;
                                if(!ㅤ.guiConfig.draggable) {
                                    if(ㅤ.guiConfig.align === "left") {
                                        ㅤ.guiButton.style.left = "0%";
                                        ㅤ.guiButton.style.right = "";
                                        ᅠﾠ.style.borderBottomLeftRadius = "0px";
                                        ᅠﾠ.style.borderBottomRightRadius = "4px";
                                        ᅟ.style.top = "0%";
                                        ᅟ.style.left = "0%";
                                        ᅟ.style.right = "";
                                        ᅟ.style.transform = "";
                                        ᅟ.style.borderTopLeftRadius = "0px";
                                        ᅟ.style.borderTopRightRadius = "8px"
                                    } else if(ㅤ.guiConfig.align === "right") {
                                        ㅤ.guiButton.style.right = "0%";
                                        ㅤ.guiButton.style.left = "";
                                        ᅠﾠ.style.borderBottomLeftRadius = "4px";
                                        ᅠﾠ.style.borderBottomRightRadius = "0px";
                                        ᅟ.style.top = "0%";
                                        ᅟ.style.right = "0%";
                                        ᅟ.style.left = "";
                                        ᅟ.style.transform = "";
                                        ᅟ.style.borderTopLeftRadius = "8px";
                                        ᅟ.style.borderTopRightRadius = "0px"
                                    } else {
                                        ㅤ.guiButton.style.right = "0%";
                                        ㅤ.guiButton.style.left = "";
                                        ᅠﾠ.style.borderBottomLeftRadius = "4px";
                                        ᅠﾠ.style.borderBottomRightRadius = "0px";
                                        ᅟ.style.top = "50%";
                                        ᅟ.style.left = "50%";
                                        ᅟ.style.transform = "translate(-50%, -50%)";
                                        ᅟ.style.borderTopLeftRadius = "8px";
                                        ᅟ.style.borderTopRightRadius = "8px"
                                    }
                                }
                                ㅤ.guiButton.style.display = ㅤ.guiConfig.toggleGuiButton ? "flex" : "none";
                                ㅤ.container.style.cursor = ㅤ.guiConfig.draggable ? "grab" : "default";
                                const ㅤㅤ = {
                                    rangeWrapper: ㅤ.rangeWrapper,
                                    rangeLabel: ㅤ.rangeLabel,
                                    bindWrapper: ㅤ.bindWrapper,
                                    selectWrapper: ㅤ.selectWrapper,
                                    selectLabel: ㅤ.selectLabel,
                                    buttonWrapper: ㅤ.buttonWrapper,
                                    textWrapper: ㅤ.textWrapper,
                                    textLabel: ㅤ.textLabel
                                };
                                for(const [ﾠ, ᅟ] of Object.entries(ㅤㅤ)) {
                                    if(Array.isArray(ᅟ) && ᅟ.length > 0) {
                                        ᅟ.forEach(ﾠ => {
                                            if(ﾠ) {
                                                ﾠ.style.cursor = ㅤ.guiConfig.draggable ? "grab" : "default"
                                            }
                                        })
                                    }
                                }
                            });
                            ㅤﾠ.appendChild(ㅤᅟ);
                            ㅤㅤ.appendChild(ㅤﾠ);
                            ㅤㅤ.appendChild(ㅤᅟ);
                            ᅟᅠ.appendChild(ㅤㅤ)
                        }
                        ᅠᅟ("Toggle GUI:", "toggleGuiKey");
                        ᅠᅠ("Width:", "width", 400, 1e3, 10);
                        ᅠᅠ("Height:", "height", 300, 1e3, 10);
                        ᅠᅠ("Font Size:", "fontSize", 10, 18, 1);
                        ᅠᅠ("Opacity:", "opacity", .1, 1, .01, "");
                        ㅤㅤㅤ("Align:", "align", [{
                            value: "left",
                            text: "Left"
                        }, {
                            value: "center",
                            text: "Center"
                        }, {
                            value: "right",
                            text: "Right"
                        }]);
                        ㅤㅤﾠ("Gui Button:", "toggleGuiButton");
                        ㅤㅤﾠ("Draggable:", "draggable");
                        document.addEventListener("keydown", ﾠ => {
                            if(ﾠ.code === ㅤ.guiConfig.toggleGuiKey) {
                                const ﾠ = document.getElementById(ㅤ.xor("gui")).style.display === "none";
                                document.getElementById(ㅤ.xor("gui")).style.display = ﾠ ? "flex" : "none";
                                ㅤ.secondOverlay.style.display = "none"
                            }
                        });
                        const ㅤㅤᅟ = document.createElement("button");
                        ㅤㅤᅟ.style.fontFamily = "Baloo Paaji";
                        ㅤㅤᅟ.textContent = "Close";
                        ㅤㅤᅟ.style.marginTop = "20px";
                        ㅤㅤᅟ.style.backgroundColor = "rgb(45, 45, 45)";
                        ㅤㅤᅟ.style.color = "#fff";
                        ㅤㅤᅟ.style.border = "none";
                        ㅤㅤᅟ.style.borderRadius = "4px";
                        ㅤㅤᅟ.style.padding = "10px 16px";
                        ㅤㅤᅟ.style.cursor = "pointer";
                        ㅤㅤᅟ.style.fontSize = "14px";
                        ㅤㅤᅟ.style.transition = "background-color 0.3s";
                        ㅤㅤᅟ.addEventListener("mouseover", () => {
                            ㅤㅤᅟ.style.backgroundColor = "rgb(55, 55, 55)"
                        });
                        ㅤㅤᅟ.addEventListener("mouseout", () => {
                            ㅤㅤᅟ.style.backgroundColor = "rgb(45, 45, 45)"
                        });
                        ㅤㅤᅟ.addEventListener("click", () => {
                            ㅤ.secondOverlay.style.display = "none";
                            ㅤ.saveGuiSettings()
                        });
                        ᅟᅠ.appendChild(ㅤㅤᅟ);
                        ᅟᅟ.appendChild(ᅟᅠ);
                        ᅟㅤ.appendChild(ᅟᅟ);
                        document.body.appendChild(ᅟㅤ);
                        ﾠᅠ.addEventListener("click", () => {
                            ㅤ.secondOverlay.style.display = "flex";
                            ﾠᅠ.blur()
                        });
                        ᅠ.appendChild(ﾠᅠ);
                        const ㅤㅤᅠ = document.createElement("style");
                        ㅤㅤᅠ.innerHTML = "div.checkbox-wrapper:hover input[type='checkbox']:not(:checked) { background: #444; border-color: white; } div { font-family: 'Baloo Paaji', sans-serif; } input[type='checkbox'] { font-family: 'Baloo Paaji', sans-serif; } #" + ㅤ.xor("sidebar") + " button { font-family: 'Baloo Paaji', sans-serif; } #" + ㅤ.xor("sidebar") + " h3 { font-family: 'Baloo Paaji', sans-serif; } label { font-family: 'Baloo Paaji', sans-serif; } div::-webkit-scrollbar { width: 8px; border-radius: 15px; } div::-webkit-scrollbar-track { background: #444; border-radius: 15px; } div::-webkit-scrollbar-thumb { background-color: #888; border-radius: 15px; border: 3.5px solid #888; } input[type='checkbox'] { appearance: none; width: 20px; height: 20px; border: 3px solid #444; border-radius: 4px; outline: none; cursor: pointer; transition: background 0.2s, border-color 0.2s; } input[type='checkbox']:checked { background: #444; border-color: #00ff00; } input[type='checkbox']:checked::after { content: ''; } * { user-select: none; } #" + ㅤ.xor("sidebar") + " { background-color: rgb(30, 30, 30); padding: 8px; border-right: 3.5px solid #1e1e1e; display: flex; flex-direction: column; gap: 10px; } #" + ㅤ.xor("sidebar") + " button { background-color: rgb(51, 51, 51); color: #f0f0f0; border: none; padding: 8px 20px; border-radius: 8px; cursor: pointer; transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease; text-align: left; display: flex; align-items: center; gap: 12px; box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25); position: relative; overflow: hidden; min-height: 30px; } #" + ㅤ.xor("sidebar") + " button:hover { background-color: #4a4a4a; box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4); } #" + ㅤ.xor("sidebar") + " button:active { transform: scale(0.96); box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25); } #" + ㅤ.xor("sidebar") + " button.active { background-color: #555; box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4); outline: 3.5px solid #888; } #" + ㅤ.xor("sidebar") + " button:before { content: ''; position: absolute; left: -50%; top: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 10%, transparent 40%); transition: opacity 0.5s, transform 0.5s; opacity: 0; transform: scale(0); z-index: 0; } #" + ㅤ.xor("sidebar") + " button:hover:before { opacity: 1; transform: scale(1.2); } ";
                        document.head.appendChild(ㅤㅤᅠ);

                        function ㅤﾠㅤ(ᅠ, ㅤㅤ) {
                            ㅤ.checkBoxLabel = [];
                            ㅤ.subfolderLabel = [];
                            ㅤ.rangeWrapper = [];
                            ㅤ.rangeLabel = [];
                            ㅤ.range = [];
                            ㅤ.rangeValueDisplay = [];
                            ㅤ.bindWrapper = [];
                            ㅤ.bindLabel = [];
                            ㅤ.bindButton = [];
                            ㅤ.selectWrapper = [];
                            ㅤ.selectLabel = [];
                            ㅤ.select = [];
                            ㅤ.buttonWrapper = [];
                            ㅤ.button = [];
                            ㅤ.textWrapper = [];
                            ㅤ.textLabel = [];
                            ㅤ.textInput = [];
                            ﾠᅟ.innerHTML = "";
                            const ㅤﾠ = document.createElement("h69");
                            ㅤ.header = ㅤﾠ;
                            ㅤﾠ.textContent = ᅠ;
                            ㅤﾠ.style.color = "#fff";
                            ㅤﾠ.style.marginTop = "0px";
                            ㅤﾠ.style.marginBottom = "8px";
                            ㅤﾠ.style.fontSize = ㅤ.guiConfig.fontSize + 4 + "px";
                            ㅤﾠ.style.fontFamily = "Baloo Paaji";
                            ㅤﾠ.style.padding = "10px 15px";
                            ㅤﾠ.style.backgroundColor = "#333";
                            ㅤﾠ.style.borderRadius = "5px";
                            ㅤﾠ.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.3)";
                            ﾠᅟ.appendChild(ㅤﾠ);
                            ㅤ.realIndex = 0;
                            let ㅤᅟ = 0;
                            if(ㅤㅤ[0]) {
                                ㅤㅤ.forEach(ㅤㅤ => {
                                    if(ㅤㅤ.type === "subfolder") {
                                        ㅤ.realIndex--;
                                        ㅤᅟ = ㅤ.realIndex
                                    }
                                    if(ㅤㅤ.type === "checkbox") {
                                        const ﾠ = document.createElement("div");
                                        ﾠ.className = "checkbox-wrapper";
                                        ﾠ.style.marginLeft = "0px";
                                        ﾠ.style.marginBottom = "4px";
                                        ﾠ.style.display = "flex";
                                        ﾠ.style.alignItems = "center";
                                        ﾠ.style.backgroundColor = "#2a2a2a";
                                        ﾠ.style.padding = "2px 10px";
                                        ﾠ.style.borderRadius = "4px";
                                        ﾠ.style.transition = "background-color 0.3s";
                                        ﾠ.style.cursor = "pointer";
                                        ﾠ.style.lineHeight = 1.5;
                                        ﾠ.addEventListener("mouseenter", () => {
                                            ﾠ.style.backgroundColor = "#444"
                                        });
                                        ﾠ.addEventListener("mouseleave", () => {
                                            ﾠ.style.backgroundColor = "#2a2a2a"
                                        });
                                        const ᅟ = document.createElement("label");
                                        ㅤ.checkBoxLabel.push(ᅟ);
                                        ᅟ.textContent = ㅤㅤ.label;
                                        ᅟ.style.color = "#fff";
                                        ᅟ.style.fontSize = ㅤ.guiConfig.fontSize + 2 + "px";
                                        ᅟ.style.cursor = "pointer";
                                        ᅟ.style.flexGrow = "1";
                                        const ㅤﾠ = document.createElement("input");
                                        ㅤﾠ.type = "checkbox";
                                        ㅤﾠ.checked = ㅤㅤ.property ? ㅤㅤ.object[ㅤㅤ.property] : ㅤㅤ.object;
                                        ㅤﾠ.id = ㅤ.xor(ㅤᅟ + ᅠ);
                                        ㅤﾠ.style.margin = "0px";
                                        ﾠ.addEventListener("click", ﾠ => {
                                            if(ﾠ.target !== ㅤﾠ) {
                                                ㅤﾠ.checked = !ㅤﾠ.checked;
                                                if(ㅤㅤ.property) {
                                                    ㅤㅤ.object[ㅤㅤ.property] = Number(ㅤﾠ.checked)
                                                } else {
                                                    ㅤㅤ.object = Number(ㅤﾠ.checked)
                                                }
                                                if(ㅤㅤ.onChange) {
                                                    ㅤㅤ.onChange(Number(ㅤﾠ.checked))
                                                } else {
                                                    undefined
                                                }
                                                if(ㅤㅤ.action) {
                                                    ㅤㅤ.action(Number(ㅤﾠ.checked))
                                                } else {
                                                    undefined
                                                }
                                                ㅤ.updateGuiValues()
                                            }
                                        });
                                        ㅤﾠ.addEventListener("change", () => {
                                            ㅤﾠ.blur();
                                            if(ㅤㅤ.property) {
                                                ㅤㅤ.object[ㅤㅤ.property] = Number(ㅤﾠ.checked)
                                            } else {
                                                ㅤㅤ.object = Number(ㅤﾠ.checked)
                                            }
                                            if(ㅤㅤ.onChange) {
                                                ㅤㅤ.onChange(Number(ㅤﾠ.checked))
                                            } else {
                                                undefined
                                            }
                                            if(ㅤㅤ.action) {
                                                ㅤㅤ.action(Number(ㅤﾠ.checked))
                                            } else {
                                                undefined
                                            }
                                            ㅤ.updateGuiValues()
                                        });
                                        ﾠ.appendChild(ᅟ);
                                        ﾠ.appendChild(ㅤﾠ);
                                        ﾠᅟ.appendChild(ﾠ);
                                        ㅤ.realIndex++;
                                        ㅤᅟ = ㅤ.realIndex
                                    } else if(ㅤㅤ.type === "range") {
                                        const ﾠ = document.createElement("div");
                                        ㅤ.rangeWrapper.push(ﾠ);
                                        ﾠ.style.marginLeft = "0px";
                                        ﾠ.style.marginBottom = "4px";
                                        ﾠ.style.backgroundColor = "#2a2a2a";
                                        ﾠ.style.padding = "10px 10px";
                                        ﾠ.style.borderRadius = "4px";
                                        ﾠ.style.transition = "background-color 0.3s";
                                        ﾠ.style.cursor = ㅤ.guiConfig.draggable ? "grab" : "default";
                                        ﾠ.addEventListener("mouseenter", () => {
                                            ﾠ.style.backgroundColor = "#444"
                                        });
                                        ﾠ.addEventListener("mouseleave", () => {
                                            ﾠ.style.backgroundColor = "#2a2a2a"
                                        });
                                        const ᅟ = document.createElement("div");
                                        ᅟ.style.display = "flex";
                                        ᅟ.style.justifyContent = "space-between";
                                        ᅟ.style.alignItems = "center";
                                        ᅟ.style.width = "100%";
                                        ᅟ.style.marginBottom = "10px";
                                        const ㅤﾠ = document.createElement("label");
                                        ㅤ.rangeLabel.push(ㅤﾠ);
                                        ㅤﾠ.textContent = " " + ㅤㅤ.label;
                                        ㅤﾠ.style.color = "#fff";
                                        ㅤﾠ.style.fontSize = ㅤ.guiConfig.fontSize + 2 - 2 + "px";
                                        ㅤﾠ.style.cursor = ㅤ.guiConfig.draggable ? "grab" : "default";
                                        ㅤﾠ.style.flexShrink = "0";
                                        const ㅤᅠ = document.createElement("input");
                                        ㅤ.rangeValueDisplay.push(ㅤᅠ);
                                        ㅤᅠ.type = "number";
                                        ㅤᅠ.id = ㅤ.xor(ㅤᅟ + ᅠ);
                                        ㅤᅠ.value = ㅤㅤ.property ? ㅤㅤ.object[ㅤㅤ.property] : ㅤㅤ.object;
                                        ㅤᅠ.min = ㅤㅤ.min;
                                        ㅤᅠ.max = ㅤㅤ.max;
                                        ㅤᅠ.step = ㅤㅤ.step || 1;
                                        ㅤᅠ.style.width = "80px";
                                        ㅤᅠ.style.color = "#fff";
                                        ㅤᅠ.style.backgroundColor = "#444";
                                        ㅤᅠ.style.border = "3.5px solid #555";
                                        ㅤᅠ.style.borderRadius = "4px";
                                        ㅤᅠ.style.fontSize = ㅤ.guiConfig.fontSize - 2 - 2 + "px";
                                        ㅤᅠ.style.textAlign = "center";
                                        ㅤᅠ.style.paddingLeft = "10px";
                                        ㅤᅠ.style.boxSizing = "border-box";
                                        ㅤᅠ.style.padding = "0px 0px 0px 12px";
                                        ㅤᅠ.style.lineHeight = 1.5;
                                        ㅤᅠ.style.fontFamily = "Baloo Paaji";
                                        ㅤᅠ.style.width = "25%";
                                        ㅤᅠ.style.minHeight = "20px";
                                        ㅤᅠ.style.flexShrink = "0";
                                        ᅟ.appendChild(ㅤﾠ);
                                        ᅟ.appendChild(ㅤᅠ);
                                        const ﾠㅤ = document.createElement("div");
                                        ﾠㅤ.style.width = "100%";
                                        const ﾠﾠ = document.createElement("input");
                                        ㅤ.range.push(ﾠﾠ);
                                        ﾠﾠ.type = "range";
                                        ﾠﾠ.min = ㅤㅤ.min;
                                        ﾠﾠ.max = ㅤㅤ.max;
                                        ﾠﾠ.step = ㅤㅤ.step || 1;
                                        ﾠﾠ.value = ㅤㅤ.property ? ㅤㅤ.object[ㅤㅤ.property] : ㅤㅤ.object;
                                        ﾠﾠ.id = ㅤ.xor(ㅤᅟ + ᅠ);
                                        ﾠﾠ.style.width = "100%";
                                        ﾠﾠ.style.borderRadius = "5px";
                                        ﾠﾠ.style.outline = "none";
                                        ﾠﾠ.style.transition = "background 0.3s";
                                        ﾠﾠ.style.cursor = "pointer";
                                        ﾠﾠ.style.margin = "0px";
                                        ﾠﾠ.style.minHeight = "6px";
                                        ﾠﾠ.style.height = ㅤ.guiConfig.fontSize - 8 - 2 + "px";
                                        ﾠㅤ.appendChild(ﾠﾠ);
                                        let ﾠᅠ = false;
                                        let ᅟㅤ = ﾠﾠ.value;
                                        ﾠﾠ.addEventListener("input", () => {
                                            ﾠﾠ.blur();
                                            ㅤᅠ.value = ﾠﾠ.value
                                        });
                                        ﾠﾠ.addEventListener("mousedown", () => {
                                            ﾠᅠ = true
                                        });
                                        ﾠﾠ.addEventListener("mouseup", () => {
                                            if(ﾠᅠ) {
                                                ﾠᅠ = false;
                                                let ﾠ = Number(ㅤᅠ.value);
                                                if(ﾠ !== ᅟㅤ) {
                                                    ᅟㅤ = ﾠ;
                                                    ﾠﾠ.value = ﾠ;
                                                    if(ㅤㅤ.property) {
                                                        ㅤㅤ.object[ㅤㅤ.property] = Number(ﾠﾠ.value)
                                                    } else {
                                                        ㅤㅤ.object = Number(ﾠﾠ.value)
                                                    }
                                                    if(ㅤㅤ.onChange) {
                                                        ㅤㅤ.onChange(ﾠ)
                                                    }
                                                    if(ㅤㅤ.action) {
                                                        ㅤㅤ.action(ﾠ)
                                                    }
                                                }
                                                ㅤ.updateGuiValues()
                                            }
                                        });
                                        ㅤᅠ.addEventListener("focusout", () => {
                                            ㅤᅠ.blur();
                                            let ﾠ = Number(ㅤᅠ.value);
                                            if(ﾠ !== ᅟㅤ) {
                                                ᅟㅤ = ﾠ;
                                                if(isNaN(ﾠ) || ﾠ < ㅤㅤ.min || ﾠ > ㅤㅤ.max) {
                                                    ﾠ = Number(ᅟㅤ)
                                                }
                                                ﾠﾠ.value = ﾠ;
                                                if(ㅤㅤ.property) {
                                                    ㅤㅤ.object[ㅤㅤ.property] = Number(ﾠﾠ.value)
                                                } else {
                                                    ㅤㅤ.object = Number(ﾠﾠ.value)
                                                }
                                                if(ㅤㅤ.onChange) {
                                                    ㅤㅤ.onChange(ﾠ)
                                                }
                                                if(ㅤㅤ.action) {
                                                    ㅤㅤ.action(ﾠ)
                                                }
                                                ㅤ.updateGuiValues()
                                            }
                                        });
                                        ㅤᅠ.addEventListener("keyup", ㅤ => {
                                            if(ㅤ.key === "Enter") {
                                                ㅤᅠ.blur()
                                            }
                                        });
                                        ﾠ.appendChild(ᅟ);
                                        ﾠ.appendChild(ﾠㅤ);
                                        ﾠᅟ.appendChild(ﾠ)
                                    } else if(ㅤㅤ.type === "bind") {
                                        const ㅤﾠ = document.createElement("div");
                                        ㅤ.bindWrapper.push(ㅤﾠ);
                                        ㅤﾠ.style.marginLeft = "0px";
                                        ㅤﾠ.style.display = "flex";
                                        ㅤﾠ.style.alignItems = "center";
                                        ㅤﾠ.style.marginBottom = "4px";
                                        ㅤﾠ.style.backgroundColor = "#2a2a2a";
                                        ㅤﾠ.style.padding = "2px 10px";
                                        ㅤﾠ.style.borderRadius = "4px";
                                        ㅤﾠ.style.transition = "background-color 0.3s";
                                        ㅤﾠ.style.cursor = ㅤ.guiConfig.draggable ? "grab" : "default";
                                        ㅤﾠ.style.lineHeight = 1.5;
                                        ㅤﾠ.addEventListener("mouseenter", () => {
                                            ㅤﾠ.style.backgroundColor = "#444"
                                        });
                                        ㅤﾠ.addEventListener("mouseleave", () => {
                                            ㅤﾠ.style.backgroundColor = "#2a2a2a"
                                        });
                                        const ㅤᅠ = document.createElement("span");
                                        ㅤ.bindLabel.push(ㅤᅠ);
                                        ㅤᅠ.textContent = ㅤㅤ.label;
                                        ㅤᅠ.style.color = "#fff";
                                        ㅤᅠ.style.fontSize = ㅤ.guiConfig.fontSize + 2 + "px";
                                        ㅤᅠ.style.marginRight = "8px";
                                        ㅤᅠ.style.flexGrow = "1";
                                        const ﾠㅤ = document.createElement("div");
                                        ㅤ.bindButton.push(ﾠㅤ);
                                        ﾠㅤ.textContent = ㅤㅤ.buttonTextObject && ㅤㅤ.buttonTextProperty ? ㅤㅤ.buttonTextObject[ㅤㅤ.buttonTextProperty] : "Click Me";
                                        ﾠㅤ.style.backgroundColor = "#444";
                                        ﾠㅤ.style.padding = "2px";
                                        ﾠㅤ.style.color = "#fff";
                                        ﾠㅤ.style.border = "3.5px solid #555";
                                        ﾠㅤ.style.borderRadius = "4px";
                                        ﾠㅤ.style.cursor = "pointer";
                                        ﾠㅤ.style.minWidth = ᅟ.width / 8 + "px";
                                        ﾠㅤ.style.minWidth = "20%";
                                        ﾠㅤ.style.transition = "background 0.3s, transform 0.2s";
                                        ﾠㅤ.style.fontSize = ㅤ.guiConfig.fontSize - 2 + "px";
                                        ﾠㅤ.style.height = ㅤ.guiConfig.fontSize + 10 + "px";
                                        ﾠㅤ.style.boxSizing = "border-box";
                                        ﾠㅤ.style.lineHeight = 1.5;
                                        ﾠㅤ.id = ㅤ.xor(ㅤᅟ + ᅠ);
                                        ﾠㅤ.addEventListener("mouseenter", () => {
                                            ﾠㅤ.style.backgroundColor = "#555"
                                        });
                                        ﾠㅤ.addEventListener("mouseleave", () => {
                                            ﾠㅤ.style.backgroundColor = "#444"
                                        });
                                        const ﾠﾠ = document.createElement("div");
                                        ㅤ.overlay = ﾠﾠ;
                                        ﾠﾠ.style.position = "absolute";
                                        ﾠﾠ.style.top = "0";
                                        ﾠﾠ.style.left = "0";
                                        ﾠﾠ.style.width = "100%";
                                        ﾠﾠ.style.height = "100%";
                                        ﾠﾠ.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
                                        ﾠﾠ.style.display = "flex";
                                        ﾠﾠ.style.justifyContent = "center";
                                        ﾠﾠ.style.alignItems = "center";
                                        ﾠﾠ.style.color = "#fff";
                                        ﾠﾠ.style.fontSize = ㅤ.guiConfig.fontSize + 6 + "px";
                                        ﾠﾠ.style.textAlign = "center";
                                        ﾠﾠ.style.zIndex = "9999";
                                        ﾠﾠ.style.backdropFilter = "blur(5px)";
                                        ﾠﾠ.style.display = "none";
                                        const ﾠᅠ = document.createElement("div");
                                        ﾠᅠ.innerHTML = "Press any key:<br>Hold Escape to clear the bind (NONE)<br>Press Escape to cancel";
                                        ﾠﾠ.appendChild(ﾠᅠ);
                                        const ᅟㅤ = document.getElementById(ㅤ.xor("gui"));
                                        ᅟㅤ.appendChild(ﾠﾠ);
                                        let ᅟﾠ = null;
                                        const ᅟᅟ = ᅟ => {
                                            if(ᅟ.code === "Escape") {
                                                ᅟﾠ = ﾠ.setTimeout(() => {
                                                    ﾠㅤ.textContent = "NONE";
                                                    if(ㅤㅤ.buttonTextObject && ㅤㅤ.buttonTextProperty) {
                                                        ㅤㅤ.buttonTextObject[ㅤㅤ.buttonTextProperty] = "NONE"
                                                    }
                                                    ㅤ.overlay.style.display = "none";
                                                    document.removeEventListener("keydown", ᅟᅟ);
                                                    if(ㅤㅤ.onChange) {
                                                        ㅤㅤ.onChange()
                                                    }
                                                    if(ㅤㅤ.action) {
                                                        ㅤㅤ.action()
                                                    }
                                                }, 250)
                                            } else {
                                                const ﾠ = ᅟ.code;
                                                ﾠㅤ.textContent = ﾠ;
                                                if(ㅤㅤ.buttonTextObject && ㅤㅤ.buttonTextProperty) {
                                                    ㅤㅤ.buttonTextObject[ㅤㅤ.buttonTextProperty] = ﾠ
                                                }
                                                ㅤ.overlay.style.display = "none";
                                                document.removeEventListener("keydown", ᅟᅟ);
                                                clearTimeout(ᅟﾠ);
                                                if(ㅤㅤ.onChange) {
                                                    ㅤㅤ.onChange()
                                                }
                                                if(ㅤㅤ.action) {
                                                    ㅤㅤ.action()
                                                }
                                            }
                                        };
                                        const ᅟᅠ = ﾠ => {
                                            if(ﾠ.code === "Escape") {
                                                clearTimeout(ᅟﾠ);
                                                ㅤ.overlay.style.display = "none";
                                                document.removeEventListener("keydown", ᅟᅟ)
                                            }
                                        };
                                        ﾠㅤ.addEventListener("click", () => {
                                            ㅤ.overlay.style.display = "flex";
                                            document.addEventListener("keydown", ᅟᅟ);
                                            document.addEventListener("keyup", ᅟᅠ)
                                        });
                                        ㅤﾠ.appendChild(ㅤᅠ);
                                        ㅤﾠ.appendChild(ﾠㅤ);
                                        ﾠᅟ.appendChild(ㅤﾠ);
                                        ㅤ.realIndex++;
                                        ㅤᅟ = ㅤ.realIndex
                                    } else if(ㅤㅤ.type === "select") {
                                        const ﾠ = document.createElement("div");
                                        ㅤ.selectWrapper.push(ﾠ);
                                        ﾠ.style.marginLeft = "0px";
                                        ﾠ.style.marginBottom = "4px";
                                        ﾠ.style.display = "flex";
                                        ﾠ.style.alignItems = "center";
                                        ﾠ.style.backgroundColor = "#2a2a2a";
                                        ﾠ.style.padding = "2px 10px";
                                        ﾠ.style.borderRadius = "4px";
                                        ﾠ.style.transition = "background-color 0.3s";
                                        ﾠ.style.cursor = ㅤ.guiConfig.draggable ? "grab" : "default";
                                        ﾠ.style.lineHeight = 1.5;
                                        ﾠ.addEventListener("mouseenter", () => {
                                            ﾠ.style.backgroundColor = "#444"
                                        });
                                        ﾠ.addEventListener("mouseleave", () => {
                                            ﾠ.style.backgroundColor = "#2a2a2a"
                                        });
                                        const ᅟ = document.createElement("label");
                                        ㅤ.selectLabel.push(ᅟ);
                                        ᅟ.textContent = ㅤㅤ.label;
                                        ᅟ.style.color = "#fff";
                                        ᅟ.style.fontSize = ㅤ.guiConfig.fontSize + 2 + "px";
                                        ᅟ.style.cursor = ㅤ.guiConfig.draggable ? "grab" : "default";
                                        ᅟ.style.marginRight = "8px";
                                        ᅟ.style.flexGrow = "1";
                                        ᅟ.style.lineHeight = 1.5;
                                        const ㅤﾠ = document.createElement("select");
                                        ㅤ.select.push(ㅤﾠ);
                                        ㅤﾠ.style.backgroundColor = "#444";
                                        ㅤﾠ.style.color = "#fff";
                                        ㅤﾠ.style.border = "3.5px solid #555";
                                        ㅤﾠ.style.borderRadius = "4px";
                                        ㅤﾠ.style.fontSize = ㅤ.guiConfig.fontSize - 2 + "px";
                                        ㅤﾠ.style.cursor = "pointer";
                                        ㅤﾠ.style.width = "35%";
                                        ㅤﾠ.style.height = ㅤ.guiConfig.fontSize + 10 + "px";
                                        ㅤﾠ.style.marginLeft = "4px";
                                        ㅤﾠ.style.fontFamily = "Baloo Paaji";
                                        ㅤﾠ.style.lineHeight = 1.5;
                                        ㅤﾠ.id = ㅤ.xor(ㅤᅟ + ᅠ);
                                        ㅤㅤ.options.forEach(ㅤ => {
                                            const ﾠ = document.createElement("option");
                                            ﾠ.value = ㅤ;
                                            ﾠ.textContent = ㅤ;
                                            ㅤﾠ.appendChild(ﾠ)
                                        });
                                        ㅤﾠ.value = ㅤㅤ.property ? ㅤㅤ.object[ㅤㅤ.property] : ㅤㅤ.object;
                                        ㅤﾠ.addEventListener("change", () => {
                                            ㅤﾠ.blur();
                                            if(ㅤㅤ.property) {
                                                ㅤㅤ.object[ㅤㅤ.property] = ㅤﾠ.value
                                            } else {
                                                ㅤㅤ.object = ㅤﾠ.value
                                            }
                                            if(ㅤㅤ.onChange) {
                                                ㅤㅤ.onChange(ㅤﾠ.value)
                                            } else {
                                                undefined
                                            }
                                            if(ㅤㅤ.action) {
                                                ㅤㅤ.action(ㅤﾠ.value)
                                            } else {
                                                undefined
                                            }
                                        });
                                        ﾠ.appendChild(ᅟ);
                                        ﾠ.appendChild(ㅤﾠ);
                                        ﾠᅟ.appendChild(ﾠ);
                                        ㅤ.realIndex++;
                                        ㅤᅟ = ㅤ.realIndex
                                    } else if(ㅤㅤ.type === "button") {
                                        const ﾠ = document.createElement("div");
                                        ㅤ.buttonWrapper.push(ﾠ);
                                        ﾠ.style.marginLeft = "0px";
                                        ﾠ.style.marginBottom = "4px";
                                        ﾠ.style.display = "flex";
                                        ﾠ.style.alignItems = "center";
                                        ﾠ.style.backgroundColor = "#2a2a2a";
                                        ﾠ.style.padding = "2px 10px";
                                        ﾠ.style.borderRadius = "4px";
                                        ﾠ.style.transition = "background-color 0.3s";
                                        ﾠ.style.cursor = ㅤ.guiConfig.draggable ? "grab" : "default";
                                        ﾠ.style.lineHeight = 1.5;
                                        ﾠ.addEventListener("mouseenter", () => {
                                            ﾠ.style.backgroundColor = "#444"
                                        });
                                        ﾠ.addEventListener("mouseleave", () => {
                                            ﾠ.style.backgroundColor = "#2a2a2a"
                                        });
                                        const ㅤﾠ = document.createElement("button");
                                        ㅤ.button.push(ㅤﾠ);
                                        ㅤﾠ.textContent = ㅤㅤ.label;
                                        ㅤﾠ.style.backgroundColor = "#444";
                                        ㅤﾠ.style.color = "#fff";
                                        ㅤﾠ.style.border = "3.5px solid #555";
                                        ㅤﾠ.style.borderRadius = "4px";
                                        ㅤﾠ.style.cursor = "pointer";
                                        ㅤﾠ.style.minWidth = ᅟ.width / 8 + "px";
                                        ㅤﾠ.style.transition = "background 0.3s, transform 0.2s";
                                        ㅤﾠ.style.padding = "1px";
                                        ㅤﾠ.style.flexGrow = "1";
                                        ㅤﾠ.style.lineHeight = 1.5;
                                        ㅤﾠ.style.fontSize = ㅤ.guiConfig.fontSize - 2 + "px";
                                        ㅤﾠ.style.fontFamily = "Baloo Paaji";
                                        ㅤﾠ.style.height = ㅤ.guiConfig.fontSize + 10 + "px";
                                        ㅤﾠ.id = ㅤ.xor(ㅤᅟ + ᅠ);
                                        ㅤﾠ.addEventListener("mouseenter", () => {
                                            ㅤﾠ.style.backgroundColor = "#555"
                                        });
                                        ㅤﾠ.addEventListener("mouseleave", () => {
                                            ㅤﾠ.style.backgroundColor = "#444"
                                        });
                                        ㅤﾠ.addEventListener("click", () => {
                                            if(ㅤㅤ.action) {
                                                ㅤㅤ.action()
                                            } else {
                                                undefined
                                            }
                                            ㅤ.updateGuiValues()
                                        });
                                        ﾠ.appendChild(ㅤﾠ);
                                        ﾠᅟ.appendChild(ﾠ);
                                        ㅤ.realIndex++;
                                        ㅤᅟ = ㅤ.realIndex
                                    } else if(ㅤㅤ.type === "text") {
                                        const ﾠ = document.createElement("div");
                                        ㅤ.textWrapper.push(ﾠ);
                                        ﾠ.style.marginLeft = "0px";
                                        ﾠ.style.marginBottom = "4px";
                                        ﾠ.style.display = "flex";
                                        ﾠ.style.alignItems = "center";
                                        ﾠ.style.backgroundColor = "#2a2a2a";
                                        ﾠ.style.padding = "2px 10px";
                                        ﾠ.style.borderRadius = "4px";
                                        ﾠ.style.cursor = ㅤ.guiConfig.draggable ? "grab" : "default";
                                        ﾠ.style.lineHeight = 1.5;
                                        const ᅟ = document.createElement("label");
                                        ㅤ.textLabel.push(ᅟ);
                                        ᅟ.textContent = ㅤㅤ.label;
                                        ᅟ.style.color = "#fff";
                                        ᅟ.style.fontSize = ㅤ.guiConfig.fontSize + 2 + "px";
                                        ᅟ.style.marginRight = "8px";
                                        ᅟ.style.flexGrow = "1";
                                        ᅟ.style.cursor = ㅤ.guiConfig.draggable ? "grab" : "default";
                                        ᅟ.style.lineHeight = 1.5;
                                        const ㅤﾠ = document.createElement("input");
                                        ㅤ.textInput.push(ㅤﾠ);
                                        ㅤﾠ.type = "text";
                                        ㅤﾠ.value = ㅤㅤ.property ? ㅤㅤ.object[ㅤㅤ.property] : ㅤㅤ.object;
                                        ㅤﾠ.style.padding = "0px 0px 0px 4px";
                                        ㅤﾠ.style.fontSize = ㅤ.guiConfig.fontSize - 2 + "px";
                                        ㅤﾠ.style.border = "3.5px solid #555";
                                        ㅤﾠ.style.borderRadius = "4px";
                                        ㅤﾠ.style.backgroundColor = "#444";
                                        ㅤﾠ.style.color = "#fff";
                                        ㅤﾠ.style.lineHeight = 1.5;
                                        ㅤﾠ.style.fontFamily = "Baloo Paaji";
                                        ㅤﾠ.style.width = "40%";
                                        ㅤﾠ.style.minHeight = "20px";
                                        ㅤﾠ.id = ㅤ.xor(ㅤᅟ + ᅠ);
                                        let ㅤᅠ = ㅤﾠ.value;
                                        ㅤﾠ.addEventListener("focus", () => {
                                            ㅤᅠ = ㅤﾠ.value
                                        });
                                        const ﾠㅤ = () => {
                                            const ㅤ = ㅤﾠ.value;
                                            if(ㅤ !== ㅤᅠ) {
                                                if(ㅤㅤ.property) {
                                                    ㅤㅤ.object[ㅤㅤ.property] = ㅤ
                                                } else {
                                                    ㅤㅤ.object = ㅤ
                                                }
                                                if(ㅤㅤ.onChange) {
                                                    ㅤㅤ.onChange(ㅤ)
                                                } else {
                                                    undefined
                                                }
                                                if(ㅤㅤ.action) {
                                                    ㅤㅤ.action(ㅤ)
                                                } else {
                                                    undefined
                                                }
                                            }
                                        };
                                        ㅤﾠ.addEventListener("focusout", ﾠㅤ);
                                        ㅤﾠ.addEventListener("keyup", () => {
                                            if(event.key === "Enter") {
                                                ㅤﾠ.blur()
                                            }
                                        });
                                        ﾠ.appendChild(ᅟ);
                                        ﾠ.appendChild(ㅤﾠ);
                                        ﾠᅟ.appendChild(ﾠ);
                                        ㅤ.realIndex++;
                                        ㅤᅟ = ㅤ.realIndex
                                    } else if(ㅤㅤ.type === "subfolder") {
                                        const ㅤﾠ = document.createElement("div");
                                        ㅤﾠ.style.marginLeft = "0px";
                                        ㅤﾠ.style.backgroundColor = "#2a2a2a";
                                        ㅤﾠ.style.padding = "0px";
                                        ㅤﾠ.style.marginBottom = "4px";
                                        ㅤﾠ.style.borderRadius = "4px";
                                        ㅤﾠ.style.cursor = "pointer";
                                        ㅤﾠ.style.lineHeight = "1.5";
                                        ㅤﾠ.style.display = "flex";
                                        ㅤﾠ.style.flexDirection = "column";
                                        const ㅤᅠ = document.createElement("div");
                                        ㅤᅠ.style.flex = "1";
                                        ㅤᅠ.style.display = "flex";
                                        ㅤᅠ.style.alignItems = "center";
                                        ㅤᅠ.style.padding = "2px 10px";
                                        ㅤᅠ.style.transition = "background-color 0.3s";
                                        ㅤᅠ.style.position = "relative";
                                        ㅤᅠ.style.zIndex = "1";
                                        ㅤᅠ.style.borderRadius = "4px";
                                        const ﾠㅤ = document.createElement("label");
                                        ㅤ.subfolderLabel.push(ﾠㅤ);
                                        ﾠㅤ.textContent = ㅤㅤ.label;
                                        ﾠㅤ.style.color = "#fff";
                                        ﾠㅤ.style.fontSize = ㅤ.guiConfig.fontSize + 2 + "px";
                                        ﾠㅤ.style.cursor = "pointer";
                                        ﾠㅤ.style.flexGrow = "1";
                                        ㅤᅠ.appendChild(ﾠㅤ);
                                        const ﾠﾠ = document.createElement("span");
                                        ﾠﾠ.textContent = "+";
                                        ﾠﾠ.style.color = "#444";
                                        ﾠﾠ.style.width = "20px";
                                        ﾠﾠ.style.height = "20px";
                                        ﾠﾠ.style.borderRadius = "50%";
                                        ﾠﾠ.style.display = "flex";
                                        ﾠﾠ.style.alignItems = "center";
                                        ﾠﾠ.style.justifyContent = "center";
                                        ﾠﾠ.style.fontSize = "25px";
                                        ﾠﾠ.style.cursor = "pointer";
                                        ﾠﾠ.style.transition = "background-color 0.3s, color 0.3s";
                                        ﾠﾠ.style.marginLeft = "10px";
                                        ㅤᅠ.appendChild(ﾠﾠ);
                                        const ﾠᅠ = document.createElement("div");
                                        ﾠᅠ.style.display = "none";
                                        ﾠᅠ.style.backgroundColor = "rgb(55, 55, 55)";
                                        ﾠᅠ.style.borderRadius = "4px";
                                        ﾠᅠ.style.padding = "10px 10px 6px 0px";
                                        const ᅟㅤ = () => {
                                            const ㅤ = ﾠᅠ.style.display === "block";
                                            ﾠᅠ.style.display = ㅤ ? "none" : "block";
                                            ﾠﾠ.textContent = ㅤ ? "+" : "-"
                                        };
                                        ㅤᅠ.addEventListener("click", ᅟㅤ);
                                        ㅤﾠ.addEventListener("mouseenter", () => {
                                            ﾠﾠ.style.color = "#fff"
                                        });
                                        ㅤﾠ.addEventListener("mouseleave", () => {
                                            ﾠﾠ.style.color = "#444"
                                        });
                                        ㅤᅠ.addEventListener("mouseenter", () => {
                                            ㅤᅠ.style.backgroundColor = "#444"
                                        });
                                        ㅤᅠ.addEventListener("mouseleave", () => {
                                            ㅤᅠ.style.backgroundColor = "transparent"
                                        });
                                        ㅤﾠ.appendChild(ㅤᅠ);
                                        ㅤﾠ.appendChild(ﾠᅠ);
                                        ㅤㅤ.subfolder?.forEach(ㅤㅤ => {
                                            ㅤ.realIndex++;
                                            ㅤᅟ = ㅤ.realIndex;
                                            if(ㅤㅤ.type === "checkbox") {
                                                const ﾠ = document.createElement("div");
                                                ﾠ.className = "checkbox-wrapper";
                                                ﾠ.style.marginLeft = "15px";
                                                ﾠ.style.marginBottom = "4px";
                                                ﾠ.style.display = "flex";
                                                ﾠ.style.alignItems = "center";
                                                ﾠ.style.backgroundColor = "#2a2a2a";
                                                ﾠ.style.padding = "2px 10px";
                                                ﾠ.style.borderRadius = "4px";
                                                ﾠ.style.transition = "background-color 0.3s";
                                                ﾠ.style.cursor = "pointer";
                                                ﾠ.style.lineHeight = 1.5;
                                                ﾠ.addEventListener("mouseenter", () => {
                                                    ﾠ.style.backgroundColor = "#444"
                                                });
                                                ﾠ.addEventListener("mouseleave", () => {
                                                    ﾠ.style.backgroundColor = "#2a2a2a"
                                                });
                                                const ᅟ = document.createElement("label");
                                                ㅤ.checkBoxLabel.push(ᅟ);
                                                ᅟ.textContent = " " + ㅤㅤ.label;
                                                ᅟ.style.color = "#fff";
                                                ᅟ.style.fontSize = ㅤ.guiConfig.fontSize + 2 - 2 + "px";
                                                ᅟ.style.cursor = "pointer";
                                                ᅟ.style.flexGrow = "1";
                                                const ㅤﾠ = document.createElement("input");
                                                ㅤﾠ.type = "checkbox";
                                                ㅤﾠ.checked = ㅤㅤ.property ? ㅤㅤ.object[ㅤㅤ.property] : ㅤㅤ.object;
                                                ㅤﾠ.id = ㅤ.xor(ㅤᅟ + ᅠ);
                                                ㅤﾠ.style.margin = "0px";
                                                ﾠ.addEventListener("click", ﾠ => {
                                                    if(ﾠ.target !== ㅤﾠ) {
                                                        ㅤﾠ.checked = !ㅤﾠ.checked;
                                                        if(ㅤㅤ.property) {
                                                            ㅤㅤ.object[ㅤㅤ.property] = Number(ㅤﾠ.checked)
                                                        } else {
                                                            ㅤㅤ.object = Number(ㅤﾠ.checked)
                                                        }
                                                        if(ㅤㅤ.onChange) {
                                                            ㅤㅤ.onChange(Number(ㅤﾠ.checked))
                                                        } else {
                                                            undefined
                                                        }
                                                        if(ㅤㅤ.action) {
                                                            ㅤㅤ.action(Number(ㅤﾠ.checked))
                                                        } else {
                                                            undefined
                                                        }
                                                        ㅤ.updateGuiValues()
                                                    }
                                                });
                                                ㅤﾠ.addEventListener("change", () => {
                                                    ㅤﾠ.blur();
                                                    if(ㅤㅤ.property) {
                                                        ㅤㅤ.object[ㅤㅤ.property] = Number(ㅤﾠ.checked)
                                                    } else {
                                                        ㅤㅤ.object = Number(ㅤﾠ.checked)
                                                    }
                                                    if(ㅤㅤ.onChange) {
                                                        ㅤㅤ.onChange(Number(ㅤﾠ.checked))
                                                    } else {
                                                        undefined
                                                    }
                                                    if(ㅤㅤ.action) {
                                                        ㅤㅤ.action(Number(ㅤﾠ.checked))
                                                    } else {
                                                        undefined
                                                    }
                                                    ㅤ.updateGuiValues()
                                                });
                                                ﾠ.appendChild(ᅟ);
                                                ﾠ.appendChild(ㅤﾠ);
                                                ﾠᅠ.appendChild(ﾠ)
                                            } else if(ㅤㅤ.type === "range") {
                                                const ﾠ = document.createElement("div");
                                                ㅤ.rangeWrapper.push(ﾠ);
                                                ﾠ.style.marginLeft = "15px";
                                                ﾠ.style.marginBottom = "4px";
                                                ﾠ.style.backgroundColor = "#2a2a2a";
                                                ﾠ.style.padding = "10px 10px";
                                                ﾠ.style.borderRadius = "4px";
                                                ﾠ.style.transition = "background-color 0.3s";
                                                ﾠ.style.cursor = ㅤ.guiConfig.draggable ? "grab" : "default";
                                                ﾠ.addEventListener("mouseenter", () => {
                                                    ﾠ.style.backgroundColor = "#444"
                                                });
                                                ﾠ.addEventListener("mouseleave", () => {
                                                    ﾠ.style.backgroundColor = "#2a2a2a"
                                                });
                                                const ᅟ = document.createElement("div");
                                                ᅟ.style.display = "flex";
                                                ᅟ.style.justifyContent = "space-between";
                                                ᅟ.style.alignItems = "center";
                                                ᅟ.style.width = "100%";
                                                ᅟ.style.marginBottom = "10px";
                                                const ㅤﾠ = document.createElement("label");
                                                ㅤ.rangeLabel.push(ㅤﾠ);
                                                ㅤﾠ.textContent = " " + ㅤㅤ.label;
                                                ㅤﾠ.style.color = "#fff";
                                                ㅤﾠ.style.fontSize = ㅤ.guiConfig.fontSize + 2 - 2 + "px";
                                                ㅤﾠ.style.cursor = ㅤ.guiConfig.draggable ? "grab" : "default";
                                                ㅤﾠ.style.flexShrink = "0";
                                                const ㅤᅠ = document.createElement("input");
                                                ㅤ.rangeValueDisplay.push(ㅤᅠ);
                                                ㅤᅠ.type = "number";
                                                ㅤᅠ.id = ㅤ.xor(ㅤᅟ + ᅠ);
                                                ㅤᅠ.value = ㅤㅤ.property ? ㅤㅤ.object[ㅤㅤ.property] : ㅤㅤ.object;
                                                ㅤᅠ.min = ㅤㅤ.min;
                                                ㅤᅠ.max = ㅤㅤ.max;
                                                ㅤᅠ.step = ㅤㅤ.step || 1;
                                                ㅤᅠ.style.width = "80px";
                                                ㅤᅠ.style.color = "#fff";
                                                ㅤᅠ.style.backgroundColor = "#444";
                                                ㅤᅠ.style.border = "3.5px solid #555";
                                                ㅤᅠ.style.borderRadius = "4px";
                                                ㅤᅠ.style.fontSize = ㅤ.guiConfig.fontSize - 2 - 2 + "px";
                                                ㅤᅠ.style.textAlign = "center";
                                                ㅤᅠ.style.paddingLeft = "10px";
                                                ㅤᅠ.style.boxSizing = "border-box";
                                                ㅤᅠ.style.padding = "0px 0px 0px 12px";
                                                ㅤᅠ.style.lineHeight = 1.5;
                                                ㅤᅠ.style.fontFamily = "Baloo Paaji";
                                                ㅤᅠ.style.width = "25%";
                                                ㅤᅠ.style.minHeight = "20px";
                                                ㅤᅠ.style.flexShrink = "0";
                                                ᅟ.appendChild(ㅤﾠ);
                                                ᅟ.appendChild(ㅤᅠ);
                                                const ﾠㅤ = document.createElement("div");
                                                ﾠㅤ.style.width = "100%";
                                                const ﾠﾠ = document.createElement("input");
                                                ㅤ.range.push(ﾠﾠ);
                                                ﾠﾠ.type = "range";
                                                ﾠﾠ.min = ㅤㅤ.min;
                                                ﾠﾠ.max = ㅤㅤ.max;
                                                ﾠﾠ.step = ㅤㅤ.step || 1;
                                                ﾠﾠ.value = ㅤㅤ.property ? ㅤㅤ.object[ㅤㅤ.property] : ㅤㅤ.object;
                                                ﾠﾠ.id = ㅤ.xor(ㅤᅟ + ᅠ);
                                                ﾠﾠ.style.width = "100%";
                                                ﾠﾠ.style.borderRadius = "5px";
                                                ﾠﾠ.style.outline = "none";
                                                ﾠﾠ.style.transition = "background 0.3s";
                                                ﾠﾠ.style.cursor = "pointer";
                                                ﾠﾠ.style.margin = "0px";
                                                ﾠﾠ.style.minHeight = "6px";
                                                ﾠﾠ.style.height = ㅤ.guiConfig.fontSize - 8 - 2 + "px";
                                                ﾠㅤ.appendChild(ﾠﾠ);
                                                let ﾠᅟ = false;
                                                let ᅟㅤ = ﾠﾠ.value;
                                                ﾠﾠ.addEventListener("input", () => {
                                                    ﾠﾠ.blur();
                                                    ㅤᅠ.value = ﾠﾠ.value
                                                });
                                                ﾠﾠ.addEventListener("mousedown", () => {
                                                    ﾠᅟ = true
                                                });
                                                ﾠﾠ.addEventListener("mouseup", () => {
                                                    if(ﾠᅟ) {
                                                        ﾠᅟ = false;
                                                        let ﾠ = Number(ㅤᅠ.value);
                                                        if(ﾠ !== ᅟㅤ) {
                                                            ᅟㅤ = ﾠ;
                                                            ﾠﾠ.value = ﾠ;
                                                            if(ㅤㅤ.property) {
                                                                ㅤㅤ.object[ㅤㅤ.property] = Number(ﾠﾠ.value)
                                                            } else {
                                                                ㅤㅤ.object = Number(ﾠﾠ.value)
                                                            }
                                                            if(ㅤㅤ.onChange) {
                                                                ㅤㅤ.onChange(ﾠ)
                                                            }
                                                            if(ㅤㅤ.action) {
                                                                ㅤㅤ.action(ﾠ)
                                                            }
                                                        }
                                                        ㅤ.updateGuiValues()
                                                    }
                                                });
                                                ㅤᅠ.addEventListener("focusout", () => {
                                                    ㅤᅠ.blur();
                                                    let ﾠ = Number(ㅤᅠ.value);
                                                    if(ﾠ !== ᅟㅤ) {
                                                        ᅟㅤ = ﾠ;
                                                        if(isNaN(ﾠ) || ﾠ < ㅤㅤ.min || ﾠ > ㅤㅤ.max) {
                                                            ﾠ = Number(ᅟㅤ)
                                                        }
                                                        ﾠﾠ.value = ﾠ;
                                                        if(ㅤㅤ.property) {
                                                            ㅤㅤ.object[ㅤㅤ.property] = Number(ﾠﾠ.value)
                                                        } else {
                                                            ㅤㅤ.object = Number(ﾠﾠ.value)
                                                        }
                                                        if(ㅤㅤ.onChange) {
                                                            ㅤㅤ.onChange(ﾠ)
                                                        }
                                                        if(ㅤㅤ.action) {
                                                            ㅤㅤ.action(ﾠ)
                                                        }
                                                        ㅤ.updateGuiValues()
                                                    }
                                                });
                                                ㅤᅠ.addEventListener("keyup", ㅤ => {
                                                    if(ㅤ.key === "Enter") {
                                                        ㅤᅠ.blur()
                                                    }
                                                });
                                                ﾠ.appendChild(ᅟ);
                                                ﾠ.appendChild(ﾠㅤ);
                                                ﾠᅠ.appendChild(ﾠ)
                                            } else if(ㅤㅤ.type === "bind") {
                                                const ㅤﾠ = document.createElement("div");
                                                ㅤ.bindWrapper.push(ㅤﾠ);
                                                ㅤﾠ.style.marginLeft = "15px";
                                                ㅤﾠ.style.display = "flex";
                                                ㅤﾠ.style.alignItems = "center";
                                                ㅤﾠ.style.marginBottom = "4px";
                                                ㅤﾠ.style.backgroundColor = "#2a2a2a";
                                                ㅤﾠ.style.padding = "2px 10px";
                                                ㅤﾠ.style.borderRadius = "4px";
                                                ㅤﾠ.style.transition = "background-color 0.3s";
                                                ㅤﾠ.style.cursor = ㅤ.guiConfig.draggable ? "grab" : "default";
                                                ㅤﾠ.style.lineHeight = 1.5;
                                                ㅤﾠ.addEventListener("mouseenter", () => {
                                                    ㅤﾠ.style.backgroundColor = "#444"
                                                });
                                                ㅤﾠ.addEventListener("mouseleave", () => {
                                                    ㅤﾠ.style.backgroundColor = "#2a2a2a"
                                                });
                                                const ㅤᅠ = document.createElement("span");
                                                ㅤ.bindLabel.push(ㅤᅠ);
                                                ㅤᅠ.textContent = " " + ㅤㅤ.label;
                                                ㅤᅠ.style.color = "#fff";
                                                ㅤᅠ.style.fontSize = ㅤ.guiConfig.fontSize + 2 - 2 + "px";
                                                ㅤᅠ.style.marginRight = "8px";
                                                ㅤᅠ.style.flexGrow = "1";
                                                const ﾠㅤ = document.createElement("div");
                                                ㅤ.bindButton.push(ﾠㅤ);
                                                ﾠㅤ.textContent = ㅤㅤ.buttonTextObject && ㅤㅤ.buttonTextProperty ? ㅤㅤ.buttonTextObject[ㅤㅤ.buttonTextProperty] : "Click Me";
                                                ﾠㅤ.style.backgroundColor = "#444";
                                                ﾠㅤ.style.padding = "2px";
                                                ﾠㅤ.style.color = "#fff";
                                                ﾠㅤ.style.border = "3.5px solid #555";
                                                ﾠㅤ.style.borderRadius = "4px";
                                                ﾠㅤ.style.cursor = "pointer";
                                                ﾠㅤ.style.minWidth = ᅟ.width / 8 + "px";
                                                ﾠㅤ.style.minWidth = "20%";
                                                ﾠㅤ.style.transition = "background 0.3s, transform 0.2s";
                                                ﾠㅤ.style.fontSize = ㅤ.guiConfig.fontSize - 2 - 2 + "px";
                                                ﾠㅤ.style.height = ㅤ.guiConfig.fontSize + 10 - 2 + "px";
                                                ﾠㅤ.style.boxSizing = "border-box";
                                                ﾠㅤ.style.lineHeight = 1.5;
                                                ﾠㅤ.id = ㅤ.xor(ㅤᅟ + ᅠ);
                                                ﾠㅤ.addEventListener("mouseenter", () => {
                                                    ﾠㅤ.style.backgroundColor = "#555"
                                                });
                                                ﾠㅤ.addEventListener("mouseleave", () => {
                                                    ﾠㅤ.style.backgroundColor = "#444"
                                                });
                                                const ﾠﾠ = document.createElement("div");
                                                ㅤ.overlay = ﾠﾠ;
                                                ﾠﾠ.style.position = "absolute";
                                                ﾠﾠ.style.top = "0";
                                                ﾠﾠ.style.left = "0";
                                                ﾠﾠ.style.width = "100%";
                                                ﾠﾠ.style.height = "100%";
                                                ﾠﾠ.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
                                                ﾠﾠ.style.display = "flex";
                                                ﾠﾠ.style.justifyContent = "center";
                                                ﾠﾠ.style.alignItems = "center";
                                                ﾠﾠ.style.color = "#fff";
                                                ﾠﾠ.style.fontSize = ㅤ.guiConfig.fontSize + 6 - 2 + "px";
                                                ﾠﾠ.style.textAlign = "center";
                                                ﾠﾠ.style.zIndex = "9999";
                                                ﾠﾠ.style.backdropFilter = "blur(5px)";
                                                ﾠﾠ.style.display = "none";
                                                const ﾠᅟ = document.createElement("div");
                                                ﾠᅟ.innerHTML = "Press any key:<br>Hold Escape to clear the bind (NONE)<br>Press Escape to cancel";
                                                ﾠﾠ.appendChild(ﾠᅟ);
                                                const ᅟㅤ = document.getElementById(ㅤ.xor("gui"));
                                                ᅟㅤ.appendChild(ﾠﾠ);
                                                let ᅟﾠ = null;
                                                const ᅟᅟ = ᅟ => {
                                                    if(ᅟ.code === "Escape") {
                                                        ᅟﾠ = ﾠ.setTimeout(() => {
                                                            ﾠㅤ.textContent = "NONE";
                                                            if(ㅤㅤ.buttonTextObject && ㅤㅤ.buttonTextProperty) {
                                                                ㅤㅤ.buttonTextObject[ㅤㅤ.buttonTextProperty] = "NONE"
                                                            }
                                                            ㅤ.overlay.style.display = "none";
                                                            document.removeEventListener("keydown", ᅟᅟ);
                                                            if(ㅤㅤ.onChange) {
                                                                ㅤㅤ.onChange()
                                                            }
                                                            if(ㅤㅤ.action) {
                                                                ㅤㅤ.action()
                                                            }
                                                        }, 250)
                                                    } else {
                                                        const ﾠ = ᅟ.code;
                                                        ﾠㅤ.textContent = ﾠ;
                                                        if(ㅤㅤ.buttonTextObject && ㅤㅤ.buttonTextProperty) {
                                                            ㅤㅤ.buttonTextObject[ㅤㅤ.buttonTextProperty] = ﾠ
                                                        }
                                                        ㅤ.overlay.style.display = "none";
                                                        document.removeEventListener("keydown", ᅟᅟ);
                                                        clearTimeout(ᅟﾠ);
                                                        if(ㅤㅤ.onChange) {
                                                            ㅤㅤ.onChange()
                                                        }
                                                        if(ㅤㅤ.action) {
                                                            ㅤㅤ.action()
                                                        }
                                                    }
                                                };
                                                const ᅟᅠ = ﾠ => {
                                                    if(ﾠ.code === "Escape") {
                                                        clearTimeout(ᅟﾠ);
                                                        ㅤ.overlay.style.display = "none";
                                                        document.removeEventListener("keydown", ᅟᅟ)
                                                    }
                                                };
                                                ﾠㅤ.addEventListener("click", () => {
                                                    ㅤ.overlay.style.display = "flex";
                                                    document.addEventListener("keydown", ᅟᅟ);
                                                    document.addEventListener("keyup", ᅟᅠ)
                                                });
                                                ㅤﾠ.appendChild(ㅤᅠ);
                                                ㅤﾠ.appendChild(ﾠㅤ);
                                                ﾠᅠ.appendChild(ㅤﾠ)
                                            } else if(ㅤㅤ.type === "select") {
                                                const ﾠ = document.createElement("div");
                                                ㅤ.selectWrapper.push(ﾠ);
                                                ﾠ.style.marginLeft = "15px";
                                                ﾠ.style.marginBottom = "4px";
                                                ﾠ.style.display = "flex";
                                                ﾠ.style.alignItems = "center";
                                                ﾠ.style.backgroundColor = "#2a2a2a";
                                                ﾠ.style.padding = "2px 10px";
                                                ﾠ.style.borderRadius = "4px";
                                                ﾠ.style.transition = "background-color 0.3s";
                                                ﾠ.style.cursor = ㅤ.guiConfig.draggable ? "grab" : "default";
                                                ﾠ.style.lineHeight = 1.5;
                                                ﾠ.addEventListener("mouseenter", () => {
                                                    ﾠ.style.backgroundColor = "#444"
                                                });
                                                ﾠ.addEventListener("mouseleave", () => {
                                                    ﾠ.style.backgroundColor = "#2a2a2a"
                                                });
                                                const ᅟ = document.createElement("label");
                                                ㅤ.selectLabel.push(ᅟ);
                                                ᅟ.textContent = " " + ㅤㅤ.label;
                                                ᅟ.style.color = "#fff";
                                                ᅟ.style.fontSize = ㅤ.guiConfig.fontSize + 2 - 2 + "px";
                                                ᅟ.style.cursor = ㅤ.guiConfig.draggable ? "grab" : "default";
                                                ᅟ.style.marginRight = "8px";
                                                ᅟ.style.flexGrow = "1";
                                                ᅟ.style.lineHeight = 1.5;
                                                const ㅤﾠ = document.createElement("select");
                                                ㅤ.select.push(ㅤﾠ);
                                                ㅤﾠ.style.backgroundColor = "#444";
                                                ㅤﾠ.style.color = "#fff";
                                                ㅤﾠ.style.border = "3.5px solid #555";
                                                ㅤﾠ.style.borderRadius = "4px";
                                                ㅤﾠ.style.fontSize = ㅤ.guiConfig.fontSize - 2 - 2 + "px";
                                                ㅤﾠ.style.cursor = "pointer";
                                                ㅤﾠ.style.width = "35%";
                                                ㅤﾠ.style.height = ㅤ.guiConfig.fontSize + 10 - 2 + "px";
                                                ㅤﾠ.style.marginLeft = "4px";
                                                ㅤﾠ.style.fontFamily = "Baloo Paaji";
                                                ㅤﾠ.style.lineHeight = 1.5;
                                                ㅤﾠ.id = ㅤ.xor(ㅤᅟ + ᅠ);
                                                ㅤㅤ.options.forEach(ㅤ => {
                                                    const ﾠ = document.createElement("option");
                                                    ﾠ.value = ㅤ;
                                                    ﾠ.textContent = ㅤ;
                                                    ㅤﾠ.appendChild(ﾠ)
                                                });
                                                ㅤﾠ.value = ㅤㅤ.property ? ㅤㅤ.object[ㅤㅤ.property] : ㅤㅤ.object;
                                                ㅤﾠ.addEventListener("change", () => {
                                                    ㅤﾠ.blur();
                                                    if(ㅤㅤ.property) {
                                                        ㅤㅤ.object[ㅤㅤ.property] = ㅤﾠ.value
                                                    } else {
                                                        ㅤㅤ.object = ㅤﾠ.value
                                                    }
                                                    if(ㅤㅤ.onChange) {
                                                        ㅤㅤ.onChange(ㅤﾠ.value)
                                                    } else {
                                                        undefined
                                                    }
                                                    if(ㅤㅤ.action) {
                                                        ㅤㅤ.action(ㅤﾠ.value)
                                                    } else {
                                                        undefined
                                                    }
                                                });
                                                ﾠ.appendChild(ᅟ);
                                                ﾠ.appendChild(ㅤﾠ);
                                                ﾠᅠ.appendChild(ﾠ)
                                            } else if(ㅤㅤ.type === "button") {
                                                const ﾠ = document.createElement("div");
                                                ㅤ.buttonWrapper.push(ﾠ);
                                                ﾠ.style.marginLeft = "15px";
                                                ﾠ.style.marginBottom = "4px";
                                                ﾠ.style.display = "flex";
                                                ﾠ.style.alignItems = "center";
                                                ﾠ.style.backgroundColor = "#2a2a2a";
                                                ﾠ.style.padding = "2px 10px";
                                                ﾠ.style.borderRadius = "4px";
                                                ﾠ.style.transition = "background-color 0.3s";
                                                ﾠ.style.cursor = ㅤ.guiConfig.draggable ? "grab" : "default";
                                                ﾠ.style.lineHeight = 1.5;
                                                ﾠ.addEventListener("mouseenter", () => {
                                                    ﾠ.style.backgroundColor = "#444"
                                                });
                                                ﾠ.addEventListener("mouseleave", () => {
                                                    ﾠ.style.backgroundColor = "#2a2a2a"
                                                });
                                                const ㅤﾠ = document.createElement("button");
                                                ㅤ.button.push(ㅤﾠ);
                                                ㅤﾠ.textContent = " " + ㅤㅤ.label;
                                                ㅤﾠ.style.backgroundColor = "#444";
                                                ㅤﾠ.style.color = "#fff";
                                                ㅤﾠ.style.border = "3.5px solid #555";
                                                ㅤﾠ.style.borderRadius = "4px";
                                                ㅤﾠ.style.cursor = "pointer";
                                                ㅤﾠ.style.minWidth = ᅟ.width / 8 + "px";
                                                ㅤﾠ.style.transition = "background 0.3s, transform 0.2s";
                                                ㅤﾠ.style.padding = "1px";
                                                ㅤﾠ.style.flexGrow = "1";
                                                ㅤﾠ.style.lineHeight = 1.5;
                                                ㅤﾠ.style.fontSize = ㅤ.guiConfig.fontSize - 2 - 2 + "px";
                                                ㅤﾠ.style.fontFamily = "Baloo Paaji";
                                                ㅤﾠ.style.height = ㅤ.guiConfig.fontSize + 10 - 2 + "px";
                                                ㅤﾠ.id = ㅤ.xor(ㅤᅟ + ᅠ);
                                                ㅤﾠ.addEventListener("mouseenter", () => {
                                                    ㅤﾠ.style.backgroundColor = "#555"
                                                });
                                                ㅤﾠ.addEventListener("mouseleave", () => {
                                                    ㅤﾠ.style.backgroundColor = "#444"
                                                });
                                                ㅤﾠ.addEventListener("click", () => {
                                                    if(ㅤㅤ.action) {
                                                        ㅤㅤ.action()
                                                    } else {
                                                        undefined
                                                    }
                                                    ㅤ.updateGuiValues()
                                                });
                                                ﾠ.appendChild(ㅤﾠ);
                                                ﾠᅠ.appendChild(ﾠ)
                                            } else if(ㅤㅤ.type === "text") {
                                                const ﾠ = document.createElement("div");
                                                ㅤ.textWrapper.push(ﾠ);
                                                ﾠ.style.marginLeft = "15px";
                                                ﾠ.style.marginBottom = "4px";
                                                ﾠ.style.display = "flex";
                                                ﾠ.style.alignItems = "center";
                                                ﾠ.style.backgroundColor = "#2a2a2a";
                                                ﾠ.style.padding = "2px 10px";
                                                ﾠ.style.borderRadius = "4px";
                                                ﾠ.style.cursor = ㅤ.guiConfig.draggable ? "grab" : "default";
                                                ﾠ.style.lineHeight = 1.5;
                                                const ᅟ = document.createElement("label");
                                                ㅤ.textLabel.push(ᅟ);
                                                ᅟ.textContent = " " + ㅤㅤ.label;
                                                ᅟ.style.color = "#fff";
                                                ᅟ.style.fontSize = ㅤ.guiConfig.fontSize + 2 - 2 + "px";
                                                ᅟ.style.marginRight = "8px";
                                                ᅟ.style.flexGrow = "1";
                                                ᅟ.style.cursor = ㅤ.guiConfig.draggable ? "grab" : "default";
                                                ᅟ.style.lineHeight = 1.5;
                                                const ㅤﾠ = document.createElement("input");
                                                ㅤ.textInput.push(ㅤﾠ);
                                                ㅤﾠ.type = "text";
                                                ㅤﾠ.value = ㅤㅤ.property ? ㅤㅤ.object[ㅤㅤ.property] : ㅤㅤ.object;
                                                ㅤﾠ.style.padding = "0px 0px 0px 4px";
                                                ㅤﾠ.style.fontSize = ㅤ.guiConfig.fontSize - 2 - 2 + "px";
                                                ㅤﾠ.style.border = "3.5px solid #555";
                                                ㅤﾠ.style.borderRadius = "4px";
                                                ㅤﾠ.style.backgroundColor = "#444";
                                                ㅤﾠ.style.color = "#fff";
                                                ㅤﾠ.style.lineHeight = 1.5;
                                                ㅤﾠ.style.fontFamily = "Baloo Paaji";
                                                ㅤﾠ.style.width = "40%";
                                                ㅤﾠ.style.minHeight = "20px";
                                                ㅤﾠ.id = ㅤ.xor(ㅤᅟ + ᅠ);
                                                let ㅤᅠ = ㅤﾠ.value;
                                                ㅤﾠ.addEventListener("focus", () => {
                                                    ㅤᅠ = ㅤﾠ.value
                                                });
                                                const ﾠㅤ = () => {
                                                    const ㅤ = ㅤﾠ.value;
                                                    if(ㅤ !== ㅤᅠ) {
                                                        if(ㅤㅤ.property) {
                                                            ㅤㅤ.object[ㅤㅤ.property] = ㅤ
                                                        } else {
                                                            ㅤㅤ.object = ㅤ
                                                        }
                                                        if(ㅤㅤ.onChange) {
                                                            ㅤㅤ.onChange(ㅤ)
                                                        } else {
                                                            undefined
                                                        }
                                                        if(ㅤㅤ.action) {
                                                            ㅤㅤ.action(ㅤ)
                                                        } else {
                                                            undefined
                                                        }
                                                    }
                                                };
                                                ㅤﾠ.addEventListener("focusout", ﾠㅤ);
                                                ㅤﾠ.addEventListener("keyup", () => {
                                                    if(event.key === "Enter") {
                                                        ㅤﾠ.blur()
                                                    }
                                                });
                                                ﾠ.appendChild(ᅟ);
                                                ﾠ.appendChild(ㅤﾠ);
                                                ﾠᅠ.appendChild(ﾠ)
                                            }
                                        });
                                        ﾠᅟ.appendChild(ㅤﾠ);
                                        ㅤ.realIndex++;
                                        ㅤᅟ = ㅤ.realIndex
                                    }
                                })
                            }
                        }
                        Object.keys(ㅤ.guiConfig.folders).forEach(ﾠ => {
                            const ᅟ = document.createElement("button");
                            ㅤ.folderButton.push(ᅟ);
                            ᅟ.textContent = ﾠ;
                            ᅟ.style.backgroundColor = "rgb(51, 51, 51)";
                            ᅟ.style.color = "#fff";
                            ᅟ.style.border = "none";
                            ᅟ.style.padding = "4px";
                            ᅟ.style.fontSize = ㅤ.guiConfig.fontSize + 6 + "px";
                            ᅟ.style.borderRadius = "3px";
                            ᅟ.style.cursor = "pointer";
                            ᅟ.addEventListener("click", () => {
                                ㅤﾠㅤ(ﾠ, ㅤ.guiConfig.folders[ﾠ]);
                                ᅟ.blur()
                            });
                            ﾠﾠ.appendChild(ᅟ)
                        });
                        if(Object.keys(ㅤ.guiConfig.folders).length > 0) {
                            const ﾠ = Object.keys(ㅤ.guiConfig.folders)[0];
                            ㅤﾠㅤ(ﾠ, ㅤ.guiConfig.folders[ﾠ])
                        }
                        const ㅤﾠﾠ = document.querySelectorAll("#" + ㅤ.xor("sidebar") + " button");
                        if(ㅤﾠﾠ[0]) {
                            ㅤﾠﾠ[0].classList.add("active")
                        } else {
                            undefined
                        }
                        if(ㅤﾠﾠ[0]) {
                            ㅤﾠﾠ.forEach(ㅤ => {
                                ㅤ.addEventListener("click", function () {
                                    ㅤﾠﾠ.forEach(ㅤ => ㅤ.classList.remove("active"));
                                    this.classList.add("active")
                                })
                            })
                        } else {
                            undefined
                        }
                        const ㅤﾠᅟ = document.getElementById(ㅤ.xor("gui"));
                        const ㅤﾠᅠ = ㅤ => {
                            ㅤ.stopPropagation()
                        };
                        ㅤﾠᅟ.addEventListener("mouseup", ㅤﾠᅠ, false);
                        ㅤﾠᅟ.addEventListener("mousedown", ㅤﾠᅠ, false);
                        ㅤﾠᅟ.addEventListener("keydown", ㅤﾠᅠ, false);
                        ㅤﾠᅟ.addEventListener("keyup", ㅤﾠᅠ, false)
                    };
                    document.head.appendChild(ᅟ)
                }
            };
            let ᅟᅠᅠ = function () {};
            let ᅠㅤㅤ = function () {};
            let ᅠㅤﾠ = function () {};
            let ᅠㅤᅟ = function () {};
            let ᅠㅤᅠ = "";
            let ᅠﾠㅤ = null;
            let ᅠﾠﾠ = false;
            let ᅠﾠᅟ = false;
            let ᅠﾠᅠ = false;
            let ᅠᅟㅤ = false;
            if("1766465128165".includes("EXPIRY_DATE_PLACEHOLDER")) {
                ᅠᅟㅤ = true
            }
            let ᅠᅟﾠ = false;
            let ᅠᅟᅟ = false;
            let ᅠᅟᅠ = null;
            let ᅠᅠㅤ;
            let ᅠᅠﾠ = "websocket.network";
            let ᅠᅠᅟ = false;
            let ᅠᅠᅠ = 0;
            let ㅤㅤㅤㅤ = 0;
            let ㅤㅤㅤﾠ = 0;
            let ㅤㅤㅤᅟ = 0;
            let ㅤㅤㅤᅠ = 0;
            let ㅤㅤﾠㅤ = {};
            let ㅤㅤﾠﾠ = {};
            let ㅤㅤﾠᅟ = {};
            let ㅤㅤﾠᅠ = {};
            let ㅤㅤᅟㅤ = {};
            let ㅤㅤᅟﾠ = {};
            Object.defineProperties(window, {
                v2600: {
                    get() {
                        return ㅤㅤﾠㅤ
                    }
                },
                v2601: {
                    get() {
                        return ㅤㅤﾠﾠ
                    }
                },
                v2602: {
                    get() {
                        return ㅤㅤﾠᅟ
                    }
                },
                v2603: {
                    get() {
                        return ㅤㅤﾠᅠ
                    }
                },
                v2604: {
                    get() {
                        return ㅤㅤᅟㅤ
                    }
                },
                v2605: {
                    get() {
                        return ㅤㅤᅟﾠ
                    }
                }
            });
            let ㅤㅤᅟᅟ = {
                width: 0,
                height: 0
            };
            let ㅤㅤᅟᅠ = {
                LEADERBOARD: 388,
                BIGMAP: 654
            };
            let ㅤㅤᅠㅤ = {};
            let ㅤㅤᅠﾠ = null;
            let ㅤㅤᅠᅟ;
            let ㅤㅤᅠᅠ;
            let ㅤﾠㅤㅤ;
            let ㅤﾠㅤﾠ;
            let ㅤﾠㅤᅟ;
            let ㅤﾠㅤᅠ = false;
            let ㅤﾠﾠㅤ = false;
            let ㅤﾠﾠﾠ = 0;
            let ㅤﾠﾠᅟ = 0;
            let ㅤﾠﾠᅠ = 0;
            let ㅤﾠᅟㅤ = 0;
            let ㅤﾠᅟﾠ = 0;
            let ㅤﾠᅟᅟ = document["defaultView"]["Date"]["now"]();
            let ㅤﾠᅟᅠ = [];
            let ㅤﾠᅠㅤ = [];
            let ㅤﾠᅠﾠ = [];
            let ㅤﾠᅠᅟ = [];
            let ㅤﾠᅠᅠ = {};
            let ㅤᅟㅤㅤ = true;
            let ㅤᅟㅤﾠ = true;
            let ㅤᅟㅤᅟ = true;
            let ㅤᅟㅤᅠ = true;
            let ㅤᅟﾠㅤ = true;
            let ㅤᅟﾠﾠ = 0;
            let ㅤᅟﾠᅟ = 0;
            let ㅤᅟﾠᅠ = -1;
            let ㅤᅟᅟㅤ = -1;
            let ㅤᅟᅟﾠ = -1;
            let ㅤᅟᅟᅟ = Date.now();
            let ㅤᅟᅟᅠ = 0;
            let ㅤᅟᅠㅤ = 0;
            let ㅤᅟᅠﾠ = true;
            let ㅤᅟᅠᅟ = false;
            let ㅤᅟᅠᅠ = 0;
            let ㅤᅠㅤㅤ = 0;
            let ㅤᅠㅤﾠ = 0;
            let ㅤᅠㅤᅟ = {};
            let ㅤᅠㅤᅠ = "";
            let ㅤᅠﾠㅤ = false;
            let ㅤᅠﾠﾠ = 0;
            let ㅤᅠﾠᅟ = null;
            let ㅤᅠﾠᅠ = {};
            let ㅤᅠᅟㅤ = 0;
            let ㅤᅠᅟﾠ = false;
            let ㅤᅠᅟᅟ = {
                bag: undefined,
                book: undefined,
                acc: undefined,
                skin: undefined
            };
            let ㅤᅠᅟᅠ = 0;
            let ㅤᅠᅠㅤ = 0;
            let ㅤᅠᅠﾠ = 0;
            let ㅤᅠᅠᅟ = 0;
            let ㅤᅠᅠᅠ = 0;
            let ﾠㅤㅤㅤ = {
                Join: [],
                Leave: [],
                newPlayerInt: false,
                newPlayerToggle: false,
                killPlayerInt: false,
                killPlayerToggle: false
            };
            let ﾠㅤㅤﾠ = {};
            let ﾠㅤㅤᅟ;
            let ﾠㅤㅤᅠ;
            let ﾠㅤﾠㅤ;
            let ﾠㅤﾠﾠ;
            ﾠㅤㅤᅟ = new Image;
            ﾠㅤㅤᅠ = new Image;
            ﾠㅤﾠㅤ = new Image;
            ﾠㅤﾠﾠ = new Image;
            ㅤㅤᅟᅠ.WOOD_SPIKE_ALLY = new Image;
            ㅤㅤᅟᅠ.STONE_SPIKE_ALLY = new Image;
            ㅤㅤᅟᅠ.GOLD_SPIKE_ALLY = new Image;
            ㅤㅤᅟᅠ.DIAMOND_SPIKE_ALLY = new Image;
            ㅤㅤᅟᅠ.AMETHYST_SPIKE_ALLY = new Image;
            ㅤㅤᅟᅠ.REIDITE_SPIKE_ALLY = new Image;
            ㅤㅤᅟᅠ.WOOD_SPIKE_ENEMY = new Image;
            ㅤㅤᅟᅠ.STONE_SPIKE_ENEMY = new Image;
            ㅤㅤᅟᅠ.GOLD_SPIKE_ENEMY = new Image;
            ㅤㅤᅟᅠ.DIAMOND_SPIKE_ENEMY = new Image;
            ㅤㅤᅟᅠ.AMETHYST_SPIKE_ENEMY = new Image;
            ㅤㅤᅟᅠ.REIDITE_SPIKE_ENEMY = new Image;
            ㅤㅤᅟᅠ.WOOD_DOOR_ALLY = new Image;
            ㅤㅤᅟᅠ.STONE_DOOR_ALLY = new Image;
            ㅤㅤᅟᅠ.GOLD_DOOR_ALLY = new Image;
            ㅤㅤᅟᅠ.DIAMOND_DOOR_ALLY = new Image;
            ㅤㅤᅟᅠ.AMETHYST_DOOR_ALLY = new Image;
            ㅤㅤᅟᅠ.REIDITE_DOOR_ALLY = new Image;
            ㅤㅤᅟᅠ.WOOD_DOOR_ENEMY = new Image;
            ㅤㅤᅟᅠ.STONE_DOOR_ENEMY = new Image;
            ㅤㅤᅟᅠ.GOLD_DOOR_ENEMY = new Image;
            ㅤㅤᅟᅠ.DIAMOND_DOOR_ENEMY = new Image;
            ㅤㅤᅟᅠ.AMETHYST_DOOR_ENEMY = new Image;
            ㅤㅤᅟᅠ.REIDITE_DOOR_ENEMY = new Image;
            ㅤㅤᅟᅠ.SPIKED_WOOD_DOOR_ALLY = new Image;
            ㅤㅤᅟᅠ.SPIKED_STONE_DOOR_ALLY = new Image;
            ㅤㅤᅟᅠ.SPIKED_GOLD_DOOR_ALLY = new Image;
            ㅤㅤᅟᅠ.SPIKED_DIAMOND_DOOR_ALLY = new Image;
            ㅤㅤᅟᅠ.SPIKED_AMETHYST_DOOR_ALLY = new Image;
            ㅤㅤᅟᅠ.SPIKED_REIDITE_DOOR_ALLY = new Image;
            ㅤㅤᅟᅠ.SPIKED_WOOD_DOOR_ENEMY = new Image;
            ㅤㅤᅟᅠ.SPIKED_STONE_DOOR_ENEMY = new Image;
            ㅤㅤᅟᅠ.SPIKED_GOLD_DOOR_ENEMY = new Image;
            ㅤㅤᅟᅠ.SPIKED_DIAMOND_DOOR_ENEMY = new Image;
            ㅤㅤᅟᅠ.SPIKED_AMETHYST_DOOR_ENEMY = new Image;
            ㅤㅤᅟᅠ.SPIKED_REIDITE_DOOR_ENEMY = new Image;

            function ﾠㅤﾠᅟ() {
                ﾠㅤㅤᅟ.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/62.png";
                ﾠㅤㅤᅠ.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/8.png"
            }

            function ﾠㅤﾠᅠ() {
                if(ᅟㅤᅠ.ColoredSpikes.texture == "Light") {
                    if(ㅤㅤᅟᅠ.WOOD_SPIKE_ALLY) {
                        ㅤㅤᅟᅠ.WOOD_SPIKE_ALLY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/69.png";
                        ㅤㅤᅟᅠ.STONE_SPIKE_ALLY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/65.png";
                        ㅤㅤᅟᅠ.GOLD_SPIKE_ALLY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/54.png";
                        ㅤㅤᅟᅠ.DIAMOND_SPIKE_ALLY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/38.png";
                        ㅤㅤᅟᅠ.AMETHYST_SPIKE_ALLY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/3.png";
                        ㅤㅤᅟᅠ.REIDITE_SPIKE_ALLY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/58.png";
                        ㅤㅤᅟᅠ.WOOD_SPIKE_ENEMY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/72.png";
                        ㅤㅤᅟᅠ.STONE_SPIKE_ENEMY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/68.png";
                        ㅤㅤᅟᅠ.GOLD_SPIKE_ENEMY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/57.png";
                        ㅤㅤᅟᅠ.DIAMOND_SPIKE_ENEMY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/41.png";
                        ㅤㅤᅟᅠ.AMETHYST_SPIKE_ENEMY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/6.png";
                        ㅤㅤᅟᅠ.REIDITE_SPIKE_ENEMY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/61.png";
                        ㅤㅤᅟᅠ.WOOD_DOOR_ALLY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/53.png";
                        ㅤㅤᅟᅠ.STONE_DOOR_ALLY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/50.png";
                        ㅤㅤᅟᅠ.GOLD_DOOR_ALLY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/47.png";
                        ㅤㅤᅟᅠ.DIAMOND_DOOR_ALLY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/45.png";
                        ㅤㅤᅟᅠ.AMETHYST_DOOR_ALLY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/42.png";
                        ㅤㅤᅟᅠ.REIDITE_DOOR_ALLY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/49.png";
                        ㅤㅤᅟᅠ.WOOD_DOOR_ENEMY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/52.png";
                        ㅤㅤᅟᅠ.STONE_DOOR_ENEMY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/51.png";
                        ㅤㅤᅟᅠ.GOLD_DOOR_ENEMY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/46.png";
                        ㅤㅤᅟᅠ.DIAMOND_DOOR_ENEMY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/44.png";
                        ㅤㅤᅟᅠ.AMETHYST_DOOR_ENEMY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/43.png";
                        ㅤㅤᅟᅠ.REIDITE_DOOR_ENEMY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/48.png";
                        ㅤㅤᅟᅠ.SPIKED_WOOD_DOOR_ALLY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/70.png";
                        ㅤㅤᅟᅠ.SPIKED_STONE_DOOR_ALLY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/66.png";
                        ㅤㅤᅟᅠ.SPIKED_GOLD_DOOR_ALLY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/55.png";
                        ㅤㅤᅟᅠ.SPIKED_DIAMOND_DOOR_ALLY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/39.png";
                        ㅤㅤᅟᅠ.SPIKED_AMETHYST_DOOR_ALLY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/4.png";
                        ㅤㅤᅟᅠ.SPIKED_REIDITE_DOOR_ALLY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/59.png";
                        ㅤㅤᅟᅠ.SPIKED_WOOD_DOOR_ENEMY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/71.png";
                        ㅤㅤᅟᅠ.SPIKED_STONE_DOOR_ENEMY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/67.png";
                        ㅤㅤᅟᅠ.SPIKED_GOLD_DOOR_ENEMY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/56.png";
                        ㅤㅤᅟᅠ.SPIKED_DIAMOND_DOOR_ENEMY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/40.png";
                        ㅤㅤᅟᅠ.SPIKED_AMETHYST_DOOR_ENEMY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/5.png";
                        ㅤㅤᅟᅠ.SPIKED_REIDITE_DOOR_ENEMY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/60.png"
                    }
                } else if(ᅟㅤᅠ.ColoredSpikes.texture == "Dark") {
                    if(ㅤㅤᅟᅠ.WOOD_SPIKE_ALLY) {
                        ㅤㅤᅟᅠ.WOOD_SPIKE_ALLY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/34.png";
                        ㅤㅤᅟᅠ.STONE_SPIKE_ALLY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/30.png";
                        ㅤㅤᅟᅠ.GOLD_SPIKE_ALLY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/22.png";
                        ㅤㅤᅟᅠ.DIAMOND_SPIKE_ALLY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/17.png";
                        ㅤㅤᅟᅠ.AMETHYST_SPIKE_ALLY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/13.png";
                        ㅤㅤᅟᅠ.REIDITE_SPIKE_ALLY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/26.png";
                        ㅤㅤᅟᅠ.WOOD_SPIKE_ENEMY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/37.png";
                        ㅤㅤᅟᅠ.STONE_SPIKE_ENEMY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/33.png";
                        ㅤㅤᅟᅠ.GOLD_SPIKE_ENEMY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/25.png";
                        ㅤㅤᅟᅠ.DIAMOND_SPIKE_ENEMY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/21.png";
                        ㅤㅤᅟᅠ.AMETHYST_SPIKE_ENEMY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/16.png";
                        ㅤㅤᅟᅠ.REIDITE_SPIKE_ENEMY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/29.png";
                        ㅤㅤᅟᅠ.WOOD_DOOR_ALLY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/53.png";
                        ㅤㅤᅟᅠ.STONE_DOOR_ALLY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/50.png";
                        ㅤㅤᅟᅠ.GOLD_DOOR_ALLY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/47.png";
                        ㅤㅤᅟᅠ.DIAMOND_DOOR_ALLY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/45.png";
                        ㅤㅤᅟᅠ.AMETHYST_DOOR_ALLY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/42.png";
                        ㅤㅤᅟᅠ.REIDITE_DOOR_ALLY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/49.png";
                        ㅤㅤᅟᅠ.WOOD_DOOR_ENEMY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/52.png";
                        ㅤㅤᅟᅠ.STONE_DOOR_ENEMY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/51.png";
                        ㅤㅤᅟᅠ.GOLD_DOOR_ENEMY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/46.png";
                        ㅤㅤᅟᅠ.DIAMOND_DOOR_ENEMY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/44.png";
                        ㅤㅤᅟᅠ.AMETHYST_DOOR_ENEMY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/43.png";
                        ㅤㅤᅟᅠ.REIDITE_DOOR_ENEMY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/48.png";
                        ㅤㅤᅟᅠ.SPIKED_WOOD_DOOR_ALLY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/35.png";
                        ㅤㅤᅟᅠ.SPIKED_STONE_DOOR_ALLY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/31.png";
                        ㅤㅤᅟᅠ.SPIKED_GOLD_DOOR_ALLY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/23.png";
                        ㅤㅤᅟᅠ.SPIKED_DIAMOND_DOOR_ALLY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/19.png";
                        ㅤㅤᅟᅠ.SPIKED_AMETHYST_DOOR_ALLY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/14.png";
                        ㅤㅤᅟᅠ.SPIKED_REIDITE_DOOR_ALLY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/27.png";
                        ㅤㅤᅟᅠ.SPIKED_WOOD_DOOR_ENEMY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/36.png";
                        ㅤㅤᅟᅠ.SPIKED_STONE_DOOR_ENEMY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/32.png";
                        ㅤㅤᅟᅠ.SPIKED_GOLD_DOOR_ENEMY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/24.png";
                        ㅤㅤᅟᅠ.SPIKED_DIAMOND_DOOR_ENEMY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/20.png";
                        ㅤㅤᅟᅠ.SPIKED_AMETHYST_DOOR_ENEMY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/15.png";
                        ㅤㅤᅟᅠ.SPIKED_REIDITE_DOOR_ENEMY.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/28.png"
                    }
                }
            }

            function ﾠㅤᅟㅤ() {
                if(ᅟㅤᅠ.chestInfo.texture == "Bright") {
                    ﾠㅤﾠㅤ.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/9.png";
                    ﾠㅤﾠﾠ.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/12.png"
                } else if(ᅟㅤᅠ.chestInfo.texture == "Light") {
                    ﾠㅤﾠㅤ.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/1.png";
                    ﾠㅤﾠﾠ.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/2.png"
                } else if(ᅟㅤᅠ.chestInfo.texture == "Dark") {
                    ﾠㅤﾠㅤ.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/10.png";
                    ﾠㅤﾠﾠ.src = "https://raw.githubusercontent.com/shwtdev/Void_V6/refs/heads/main/11.png"
                }
            }
            const ﾠㅤᅟﾠ = {
                PLAYERS: 0,
                FIRE: 1,
                WORKBENCH: 2,
                SEED: 3,
                WALL: 4,
                SPIKE: 5,
                BIG_FIRE: 6,
                STONE_WALL: 7,
                GOLD_WALL: 8,
                DIAMOND_WALL: 9,
                WOOD_DOOR: 10,
                CHEST: 11,
                STONE_SPIKE: 12,
                GOLD_SPIKE: 13,
                DIAMOND_SPIKE: 14,
                STONE_DOOR: 15,
                GOLD_DOOR: 16,
                DIAMOND_DOOR: 17,
                FURNACE: 18,
                AMETHYST_WALL: 19,
                AMETHYST_SPIKE: 20,
                AMETHYST_DOOR: 21,
                RESURRECTION: 22,
                EMERALD_MACHINE: 23,
                EXTRACTOR_MACHINE_STONE: 24,
                EXTRACTOR_MACHINE_GOLD: 25,
                EXTRACTOR_MACHINE_DIAMOND: 26,
                EXTRACTOR_MACHINE_AMETHYST: 27,
                EXTRACTOR_MACHINE_REIDITE: 28,
                EXTRACTOR_MACHINE_EMERALD: 29,
                EXTRACTOR_MACHINE_COPPER: 30,
                EXTRACTOR_MACHINE_IRON: 31,
                EXTRACTOR_MACHINE_TOPAZ: 32,
                EXTRACTOR_MACHINE_SAPPHIRE: 33,
                EXTRACTOR_MACHINE_JADE: 34,
                EXTRACTOR_MACHINE_RUBY: 35,
                EXTRACTOR_MACHINE_COAL: 36,
                EXTRACTOR_MACHINE_AQUAMARINE: 37,
                TOTEM: 38,
                WHEAT_SEED: 40,
                WINDMILL: 41,
                BREAD_OVEN: 43,
                WELL: 44,
                PUMPKIN_SEED: 46,
                ROOF: 47,
                GARLIC_SEED: 48,
                THORNBUSH_SEED: 49,
                BED: 50,
                TOMATO_SEED: 52,
                CARROT_SEED: 53,
                WOOD_DOOR_SPIKE: 54,
                STONE_DOOR_SPIKE: 55,
                GOLD_DOOR_SPIKE: 56,
                DIAMOND_DOOR_SPIKE: 57,
                AMETHYST_DOOR_SPIKE: 58,
                REIDITE_WALL: 59,
                REIDITE_DOOR: 60,
                REIDITE_SPIKE: 61,
                REIDITE_DOOR_SPIKE: 62,
                WATERMELON_SEED: 63,
                ALOE_VERA_SEED: 64,
                WOLF: 67,
                SPIDER: 68,
                FOX: 69,
                BEAR: 70,
                DRAGON: 71,
                PIRANHA: 72,
                KRAKEN: 73,
                CRAB: 74,
                FLAME: 75,
                LAVA_DRAGON: 76,
                BOAR: 77,
                CRAB_BOSS: 78,
                BABY_DRAGON: 79,
                BABY_LAVA: 80,
                HAWK: 81,
                VULTURE: 82,
                SAND_WORM: 83,
                BABY_MAMMOTH: 84,
                MAMMOTH: 85,
                PARROT: 86,
                OCELOT: 87,
                CROCODILE: 88,
                GOLDEN_CHICKEN: 89,
                GOLDEN_HEN: 90,
                RABBIT: 92,
                TREASURE_CHEST: 93,
                DEAD_BOX: 94,
                THORNBUSH_MOB: 97,
                CRATE: 98,
                GIFT: 99,
                PENGUIN: 100,
                ALOE_VERA_MOB: 101
            };
            let ﾠㅤᅟᅟ = 0;
            const ﾠㅤᅟᅠ = {
                SWORD: ﾠㅤᅟᅟ++,
                PICK: ﾠㅤᅟᅟ++,
                FUR: ﾠㅤᅟᅟ++,
                PICK_GOLD: ﾠㅤᅟᅟ++,
                PICK_DIAMOND: ﾠㅤᅟᅟ++,
                SWORD_GOLD: ﾠㅤᅟᅟ++,
                SWORD_DIAMOND: ﾠㅤᅟᅟ++,
                HAND: ﾠㅤᅟᅟ++,
                PICK_WOOD: ﾠㅤᅟᅟ++,
                PIRATE_SWORD: ﾠㅤᅟᅟ++,
                EARMUFFS: ﾠㅤᅟᅟ++,
                COAT: ﾠㅤᅟᅟ++,
                WOOD_SPEAR: ﾠㅤᅟᅟ++,
                SPEAR: ﾠㅤᅟᅟ++,
                GOLD_SPEAR: ﾠㅤᅟᅟ++,
                DIAMOND_SPEAR: ﾠㅤᅟᅟ++,
                DRAGON_SPEAR: ﾠㅤᅟᅟ++,
                LAVA_SPEAR: ﾠㅤᅟᅟ++,
                CRAB_SPEAR: ﾠㅤᅟᅟ++,
                EMERALD_SPEAR: ﾠㅤᅟᅟ++,
                COPPER_SPEAR: ﾠㅤᅟᅟ++,
                IRON_SPEAR: ﾠㅤᅟᅟ++,
                TOPAZ_SPEAR: ﾠㅤᅟᅟ++,
                SAPPHIRE_SPEAR: ﾠㅤᅟᅟ++,
                JADE_SPEAR: ﾠㅤᅟᅟ++,
                RUBY_SPEAR: ﾠㅤᅟᅟ++,
                COAL_SPEAR: ﾠㅤᅟᅟ++,
                AQUAMARINE_SPEAR: ﾠㅤᅟᅟ++,
                REIDITE_SWORD: ﾠㅤᅟᅟ++,
                DIAMOND_PROTECTION: ﾠㅤᅟᅟ++,
                AMETHYST_PROTECTION: ﾠㅤᅟᅟ++,
                REIDITE_PROTECTION: ﾠㅤᅟᅟ++,
                EXPLORER_HAT: ﾠㅤᅟᅟ++,
                PIRATE_HAT: ﾠㅤᅟᅟ++,
                STONE_HELMET: ﾠㅤᅟᅟ++,
                GOLD_HELMET: ﾠㅤᅟᅟ++,
                DIAMOND_HELMET: ﾠㅤᅟᅟ++,
                EMERALD_HELMET: ﾠㅤᅟᅟ++,
                COPPER_HELMET: ﾠㅤᅟᅟ++,
                IRON_HELMET: ﾠㅤᅟᅟ++,
                TOPAZ_HELMET: ﾠㅤᅟᅟ++,
                SAPPHIRE_HELMET: ﾠㅤᅟᅟ++,
                JADE_HELMET: ﾠㅤᅟᅟ++,
                RUBY_HELMET: ﾠㅤᅟᅟ++,
                COAL_HELMET: ﾠㅤᅟᅟ++,
                AQUAMARINE_HELMET: ﾠㅤᅟᅟ++,
                BOOK: ﾠㅤᅟᅟ++,
                BAG: ﾠㅤᅟᅟ++,
                SWORD_AMETHYST: ﾠㅤᅟᅟ++,
                PICK_AMETHYST: ﾠㅤᅟᅟ++,
                PICK_REIDITE: ﾠㅤᅟᅟ++,
                PICK_EMERALD: ﾠㅤᅟᅟ++,
                PICK_COPPER: ﾠㅤᅟᅟ++,
                PICK_IRON: ﾠㅤᅟᅟ++,
                PICK_TOPAZ: ﾠㅤᅟᅟ++,
                PICK_SAPPHIRE: ﾠㅤᅟᅟ++,
                PICK_JADE: ﾠㅤᅟᅟ++,
                PICK_RUBY: ﾠㅤᅟᅟ++,
                PICK_COAL: ﾠㅤᅟᅟ++,
                PICK_AQUAMARINE: ﾠㅤᅟᅟ++,
                AMETHYST_SPEAR: ﾠㅤᅟᅟ++,
                REIDITE_SPEAR: ﾠㅤᅟᅟ++,
                HAMMER: ﾠㅤᅟᅟ++,
                HAMMER_GOLD: ﾠㅤᅟᅟ++,
                HAMMER_DIAMOND: ﾠㅤᅟᅟ++,
                HAMMER_AMETHYST: ﾠㅤᅟᅟ++,
                HAMMER_REIDITE: ﾠㅤᅟᅟ++,
                CAP_SCARF: ﾠㅤᅟᅟ++,
                CHRISTMAS_HAT: ﾠㅤᅟᅟ++,
                ELF_HAT: ﾠㅤᅟᅟ++,
                AMETHYST_HELMET: ﾠㅤᅟᅟ++,
                REIDITE_HELMET: ﾠㅤᅟᅟ++,
                SUPER_HAMMER: ﾠㅤᅟᅟ++,
                HAMMER_EMERALD: ﾠㅤᅟᅟ++,
                HAMMER_COPPER: ﾠㅤᅟᅟ++,
                HAMMER_IRON: ﾠㅤᅟᅟ++,
                HAMMER_TOPAZ: ﾠㅤᅟᅟ++,
                HAMMER_SAPPHIRE: ﾠㅤᅟᅟ++,
                HAMMER_JADE: ﾠㅤᅟᅟ++,
                HAMMER_RUBY: ﾠㅤᅟᅟ++,
                HAMMER_COAL: ﾠㅤᅟᅟ++,
                HAMMER_AQUAMARINE: ﾠㅤᅟᅟ++,
                SHOVEL: ﾠㅤᅟᅟ++,
                SUPER_DIVING_SUIT: ﾠㅤᅟᅟ++,
                DIVING_MASK: ﾠㅤᅟᅟ++,
                WATERING_CAN_FULL: ﾠㅤᅟᅟ++,
                SHOVEL_GOLD: ﾠㅤᅟᅟ++,
                SHOVEL_DIAMOND: ﾠㅤᅟᅟ++,
                SHOVEL_AMETHYST: ﾠㅤᅟᅟ++,
                SHOVEL_REIDITE: ﾠㅤᅟᅟ++,
                SHOVEL_EMERALD: ﾠㅤᅟᅟ++,
                SHOVEL_COPPER: ﾠㅤᅟᅟ++,
                SHOVEL_IRON: ﾠㅤᅟᅟ++,
                SHOVEL_TOPAZ: ﾠㅤᅟᅟ++,
                SHOVEL_SAPPHIRE: ﾠㅤᅟᅟ++,
                SHOVEL_JADE: ﾠㅤᅟᅟ++,
                SHOVEL_RUBY: ﾠㅤᅟᅟ++,
                SHOVEL_COAL: ﾠㅤᅟᅟ++,
                SHOVEL_AQUAMARINE: ﾠㅤᅟᅟ++,
                PITCHFORK: ﾠㅤᅟᅟ++,
                PITCHFORK2: ﾠㅤᅟᅟ++,
                SPANNER: ﾠㅤᅟᅟ++,
                MACHETE: ﾠㅤᅟᅟ++,
                SWORD_WOOD: ﾠㅤᅟᅟ++,
                WOOD_HELMET: ﾠㅤᅟᅟ++,
                DRAGON_HELMET: ﾠㅤᅟᅟ++,
                LAVA_HELMET: ﾠㅤᅟᅟ++,
                CROWN_CRAB: ﾠㅤᅟᅟ++,
                DRAGON_SWORD: ﾠㅤᅟᅟ++,
                LAVA_SWORD: ﾠㅤᅟᅟ++,
                SWORD_EMERALD: ﾠㅤᅟᅟ++,
                SWORD_COPPER: ﾠㅤᅟᅟ++,
                SWORD_IRON: ﾠㅤᅟᅟ++,
                SWORD_TOPAZ: ﾠㅤᅟᅟ++,
                SWORD_SAPPHIRE: ﾠㅤᅟᅟ++,
                SWORD_JADE: ﾠㅤᅟᅟ++,
                SWORD_RUBY: ﾠㅤᅟᅟ++,
                SWORD_COAL: ﾠㅤᅟᅟ++,
                SWORD_AQUAMARINE: ﾠㅤᅟᅟ++,
                WOOD_BOW: ﾠㅤᅟᅟ++,
                STONE_BOW: ﾠㅤᅟᅟ++,
                GOLD_BOW: ﾠㅤᅟᅟ++,
                DIAMOND_BOW: ﾠㅤᅟᅟ++,
                AMETHYST_BOW: ﾠㅤᅟᅟ++,
                REIDITE_BOW: ﾠㅤᅟᅟ++,
                DRAGON_BOW: ﾠㅤᅟᅟ++,
                EMERALD_BOW: ﾠㅤᅟᅟ++,
                COPPER_BOW: ﾠㅤᅟᅟ++,
                IRON_BOW: ﾠㅤᅟᅟ++,
                TOPAZ_BOW: ﾠㅤᅟᅟ++,
                SAPPHIRE_BOW: ﾠㅤᅟᅟ++,
                JADE_BOW: ﾠㅤᅟᅟ++,
                RUBY_BOW: ﾠㅤᅟᅟ++,
                COAL_BOW: ﾠㅤᅟᅟ++,
                AQUAMARINE_BOW: ﾠㅤᅟᅟ++,
                WOOD_SHIELD: ﾠㅤᅟᅟ++,
                STONE_SHIELD: ﾠㅤᅟᅟ++,
                GOLD_SHIELD: ﾠㅤᅟᅟ++,
                DIAMOND_SHIELD: ﾠㅤᅟᅟ++,
                AMETHYST_SHIELD: ﾠㅤᅟᅟ++,
                REIDITE_SHIELD: ﾠㅤᅟᅟ++,
                EMERALD_SHIELD: ﾠㅤᅟᅟ++,
                COPPER_SHIELD: ﾠㅤᅟᅟ++,
                IRON_SHIELD: ﾠㅤᅟᅟ++,
                TOPAZ_SHIELD: ﾠㅤᅟᅟ++,
                SAPPHIRE_SHIELD: ﾠㅤᅟᅟ++,
                JADE_SHIELD: ﾠㅤᅟᅟ++,
                RUBY_SHIELD: ﾠㅤᅟᅟ++,
                COAL_SHIELD: ﾠㅤᅟᅟ++,
                AQUAMARINE_SHIELD: ﾠㅤᅟᅟ++,
                CROWN_GREEN: ﾠㅤᅟᅟ++,
                CROWN_ORANGE: ﾠㅤᅟᅟ++,
                CROWN_BLUE: ﾠㅤᅟᅟ++,
                TURBAN1: ﾠㅤᅟᅟ++,
                TURBAN2: ﾠㅤᅟᅟ++,
                PILOT_HELMET: ﾠㅤᅟᅟ++,
                HOOD: ﾠㅤᅟᅟ++,
                PEASANT: ﾠㅤᅟᅟ++,
                WINTER_HOOD: ﾠㅤᅟᅟ++,
                WINTER_PEASANT: ﾠㅤᅟᅟ++,
                FLOWER_HAT: ﾠㅤᅟᅟ++,
                FUR_HAT: ﾠㅤᅟᅟ++,
                SADDLE: ﾠㅤᅟᅟ++,
                WITCH: ﾠㅤᅟᅟ++,
                NIMBUS: ﾠㅤᅟᅟ++,
                WAND1: ﾠㅤᅟᅟ++,
                WAND2: ﾠㅤᅟᅟ++,
                WOOD_AXE: ﾠㅤᅟᅟ++,
                STONE_AXE: ﾠㅤᅟᅟ++,
                GOLD_AXE: ﾠㅤᅟᅟ++,
                DIAMOND_AXE: ﾠㅤᅟᅟ++,
                AMETHYST_AXE: ﾠㅤᅟᅟ++,
                REIDITE_AXE: ﾠㅤᅟᅟ++,
                EMERALD_AXE: ﾠㅤᅟᅟ++,
                COPPER_AXE: ﾠㅤᅟᅟ++,
                IRON_AXE: ﾠㅤᅟᅟ++,
                TOPAZ_AXE: ﾠㅤᅟᅟ++,
                SAPPHIRE_AXE: ﾠㅤᅟᅟ++,
                JADE_AXE: ﾠㅤᅟᅟ++,
                RUBY_AXE: ﾠㅤᅟᅟ++,
                COAL_AXE: ﾠㅤᅟᅟ++,
                AQUAMARINE_AXE: ﾠㅤᅟᅟ++,
                FIREFLY: ﾠㅤᅟᅟ++,
                WOOD_ARROW: ﾠㅤᅟᅟ++,
                STONE_ARROW: ﾠㅤᅟᅟ++,
                GOLD_ARROW: ﾠㅤᅟᅟ++,
                DIAMOND_ARROW: ﾠㅤᅟᅟ++,
                AMETHYST_ARROW: ﾠㅤᅟᅟ++,
                REIDITE_ARROW: ﾠㅤᅟᅟ++,
                DRAGON_ARROW: ﾠㅤᅟᅟ++,
                EMERALD_ARROW: ﾠㅤᅟᅟ++,
                COPPER_ARROW: ﾠㅤᅟᅟ++,
                IRON_ARROW: ﾠㅤᅟᅟ++,
                TOPAZ_ARROW: ﾠㅤᅟᅟ++,
                SAPPHIRE_ARROW: ﾠㅤᅟᅟ++,
                JADE_ARROW: ﾠㅤᅟᅟ++,
                RUBY_ARROW: ﾠㅤᅟᅟ++,
                COAL_ARROW: ﾠㅤᅟᅟ++,
                AQUAMARINE_ARROW: ﾠㅤᅟᅟ++,
                STONE: ﾠㅤᅟᅟ++,
                WOOD: ﾠㅤᅟᅟ++,
                PLANT: ﾠㅤᅟᅟ++,
                GOLD: ﾠㅤᅟᅟ++,
                DIAMOND: ﾠㅤᅟᅟ++,
                FIRE: ﾠㅤᅟᅟ++,
                WORKBENCH: ﾠㅤᅟᅟ++,
                SEED: ﾠㅤᅟᅟ++,
                MEAT: ﾠㅤᅟᅟ++,
                COOKED_MEAT: ﾠㅤᅟᅟ++,
                BIG_FIRE: ﾠㅤᅟᅟ++,
                FURNACE: ﾠㅤᅟᅟ++,
                PAPER: ﾠㅤᅟᅟ++,
                AMETHYST: ﾠㅤᅟᅟ++,
                AMETHYST_WALL: ﾠㅤᅟᅟ++,
                AMETHYST_SPIKE: ﾠㅤᅟᅟ++,
                AMETHYST_DOOR: ﾠㅤᅟᅟ++,
                BRIDGE: ﾠㅤᅟᅟ++,
                SAND: ﾠㅤᅟᅟ++,
                BOTTLE_FULL: ﾠㅤᅟᅟ++,
                randomshit1: ﾠㅤᅟᅟ++,
                randomshit2: ﾠㅤᅟᅟ++,
                BOTTLE_EMPTY: ﾠㅤᅟᅟ++,
                KRAKEN_SKIN: ﾠㅤᅟᅟ++,
                WATERING_CAN: ﾠㅤᅟᅟ++,
                FLOUR: ﾠㅤᅟᅟ++,
                WHEAT_SEED: ﾠㅤᅟᅟ++,
                COOKIE: ﾠㅤᅟᅟ++,
                WILD_WHEAT: ﾠㅤᅟᅟ++,
                WINDMILL: ﾠㅤᅟᅟ++,
                CAKE: ﾠㅤᅟᅟ++,
                FOODFISH: ﾠㅤᅟᅟ++,
                FOODFISH_COOKED: ﾠㅤᅟᅟ++,
                SCALES: ﾠㅤᅟᅟ++,
                GROUND: ﾠㅤᅟᅟ++,
                PLOT: ﾠㅤᅟᅟ++,
                ICE: ﾠㅤᅟᅟ++,
                BREAD: ﾠㅤᅟᅟ++,
                BREAD_OVEN: ﾠㅤᅟᅟ++,
                SANDWICH: ﾠㅤᅟᅟ++,
                FUR_WINTER: ﾠㅤᅟᅟ++,
                BLUE_CORD: ﾠㅤᅟᅟ++,
                LOCK: ﾠㅤᅟᅟ++,
                DRAGON_HEART: ﾠㅤᅟᅟ++,
                LAVA_HEART: ﾠㅤᅟᅟ++,
                RESURRECTION: ﾠㅤᅟᅟ++,
                EMERALD_MACHINE: ﾠㅤᅟᅟ++,
                EXTRACTOR_MACHINE_STONE: ﾠㅤᅟᅟ++,
                EXTRACTOR_MACHINE_GOLD: ﾠㅤᅟᅟ++,
                EXTRACTOR_MACHINE_DIAMOND: ﾠㅤᅟᅟ++,
                EXTRACTOR_MACHINE_AMETHYST: ﾠㅤᅟᅟ++,
                EXTRACTOR_MACHINE_REIDITE: ﾠㅤᅟᅟ++,
                EXTRACTOR_MACHINE_EMERALD: ﾠㅤᅟᅟ++,
                EXTRACTOR_MACHINE_COPPER: ﾠㅤᅟᅟ++,
                EXTRACTOR_MACHINE_IRON: ﾠㅤᅟᅟ++,
                EXTRACTOR_MACHINE_TOPAZ: ﾠㅤᅟᅟ++,
                EXTRACTOR_MACHINE_SAPPHIRE: ﾠㅤᅟᅟ++,
                EXTRACTOR_MACHINE_JADE: ﾠㅤᅟᅟ++,
                EXTRACTOR_MACHINE_RUBY: ﾠㅤᅟᅟ++,
                EXTRACTOR_MACHINE_COAL: ﾠㅤᅟᅟ++,
                EXTRACTOR_MACHINE_AQUAMARINE: ﾠㅤᅟᅟ++,
                LOCKPICK: ﾠㅤᅟᅟ++,
                TOTEM: ﾠㅤᅟᅟ++,
                SPIKE: ﾠㅤᅟᅟ++,
                CORD: ﾠㅤᅟᅟ++,
                WALL: ﾠㅤᅟᅟ++,
                STONE_WALL: ﾠㅤᅟᅟ++,
                GOLD_WALL: ﾠㅤᅟᅟ++,
                DIAMOND_WALL: ﾠㅤᅟᅟ++,
                WOOD_DOOR: ﾠㅤᅟᅟ++,
                CHEST: ﾠㅤᅟᅟ++,
                STONE_SPIKE: ﾠㅤᅟᅟ++,
                GOLD_SPIKE: ﾠㅤᅟᅟ++,
                DIAMOND_SPIKE: ﾠㅤᅟᅟ++,
                STONE_DOOR: ﾠㅤᅟᅟ++,
                GOLD_DOOR: ﾠㅤᅟᅟ++,
                DIAMOND_DOOR: ﾠㅤᅟᅟ++,
                FUR_WOLF: ﾠㅤᅟᅟ++,
                GEMME_GREEN: ﾠㅤᅟᅟ++,
                GEMME_ORANGE: ﾠㅤᅟᅟ++,
                GEMME_BLUE: ﾠㅤᅟᅟ++,
                SPECIAL_FUR: ﾠㅤᅟᅟ++,
                SPECIAL_FUR_2: ﾠㅤᅟᅟ++,
                BUCKET_FULL: ﾠㅤᅟᅟ++,
                BUCKET_EMPTY: ﾠㅤᅟᅟ++,
                WELL: ﾠㅤᅟᅟ++,
                SIGN: ﾠㅤᅟᅟ++,
                DRAGON_CUBE: ﾠㅤᅟᅟ++,
                DRAGON_ORB: ﾠㅤᅟᅟ++,
                LAVA_CUBE: ﾠㅤᅟᅟ++,
                LAVA_ORB: ﾠㅤᅟᅟ++,
                PUMPKIN_SEED: ﾠㅤᅟᅟ++,
                PUMPKIN: ﾠㅤᅟᅟ++,
                ROOF: ﾠㅤᅟᅟ++,
                GARLIC_SEED: ﾠㅤᅟᅟ++,
                GARLIC: ﾠㅤᅟᅟ++,
                THORNBUSH_SEED: ﾠㅤᅟᅟ++,
                THORNBUSH: ﾠㅤᅟᅟ++,
                BANDAGE: ﾠㅤᅟᅟ++,
                CRAB_STICK: ﾠㅤᅟᅟ++,
                CRAB_LOOT: ﾠㅤᅟᅟ++,
                BED: ﾠㅤᅟᅟ++,
                SUGAR_CAN: ﾠㅤᅟᅟ++,
                CANDY: ﾠㅤᅟᅟ++,
                GARLAND: ﾠㅤᅟᅟ++,
                REIDITE: ﾠㅤᅟᅟ++,
                FLAME: ﾠㅤᅟᅟ++,
                COPPER: ﾠㅤᅟᅟ++,
                IRON: ﾠㅤᅟᅟ++,
                TOPAZ: ﾠㅤᅟᅟ++,
                SAPPHIRE: ﾠㅤᅟᅟ++,
                JADE: ﾠㅤᅟᅟ++,
                RUBY: ﾠㅤᅟᅟ++,
                COAL: ﾠㅤᅟᅟ++,
                AQUAMARINE: ﾠㅤᅟᅟ++,
                CARROT_SEED: ﾠㅤᅟᅟ++,
                CARROT: ﾠㅤᅟᅟ++,
                TOMATO_SEED: ﾠㅤᅟᅟ++,
                TOMATO: ﾠㅤᅟᅟ++,
                WATERMELON_SEED: ﾠㅤᅟᅟ++,
                WATERMELON: ﾠㅤᅟᅟ++,
                ALOE_VERA_SEED: ﾠㅤᅟᅟ++,
                ALOE_VERA: ﾠㅤᅟᅟ++,
                WOOD_DOOR_SPIKE: ﾠㅤᅟᅟ++,
                STONE_DOOR_SPIKE: ﾠㅤᅟᅟ++,
                GOLD_DOOR_SPIKE: ﾠㅤᅟᅟ++,
                DIAMOND_DOOR_SPIKE: ﾠㅤᅟᅟ++,
                AMETHYST_DOOR_SPIKE: ﾠㅤᅟᅟ++,
                REIDITE_WALL: ﾠㅤᅟᅟ++,
                REIDITE_DOOR: ﾠㅤᅟᅟ++,
                REIDITE_SPIKE: ﾠㅤᅟᅟ++,
                REIDITE_DOOR_SPIKE: ﾠㅤᅟᅟ++,
                WOOD_TOWER: ﾠㅤᅟᅟ++,
                PENGUIN_FEATHER: ﾠㅤᅟᅟ++,
                BOAT: ﾠㅤᅟᅟ++,
                SLED: ﾠㅤᅟᅟ++,
                MOUNT_BOAR: ﾠㅤᅟᅟ++,
                CRAB_BOSS: ﾠㅤᅟᅟ++,
                BABY_DRAGON: ﾠㅤᅟᅟ++,
                BABY_LAVA: ﾠㅤᅟᅟ++,
                HAWK: ﾠㅤᅟᅟ++,
                PLANE: ﾠㅤᅟᅟ++,
                HAWK_FEATHER: ﾠㅤᅟᅟ++,
                VULTURE_FEATHER: ﾠㅤᅟᅟ++,
                CACTUS: ﾠㅤᅟᅟ++,
                randomshit3: ﾠㅤᅟᅟ++,
                PITCHFORK_PART: ﾠㅤᅟᅟ++,
                PILOT_GLASSES: ﾠㅤᅟᅟ++,
                FUR_BOAR: ﾠㅤᅟᅟ++,
                SANDWORM_JUICE: ﾠㅤᅟᅟ++,
                BABY_MAMMOTH: ﾠㅤᅟᅟ++,
                FUR_MAMMOTH: ﾠㅤᅟᅟ++,
                FUR_CROCODILE: ﾠㅤᅟᅟ++,
                PARROT_FEATHER: ﾠㅤᅟᅟ++,
                FUR_OCELOT: ﾠㅤᅟᅟ++,
                PARROT: ﾠㅤᅟᅟ++,
                VULTURE: ﾠㅤᅟᅟ++,
                BANANA: ﾠㅤᅟᅟ++,
                randomshit4: ﾠㅤᅟᅟ++,
                GOLDEN_HEN: ﾠㅤᅟᅟ++
            };
            let ﾠㅤᅠㅤ = {
                DELETE: 1,
                HURT: 2,
                COLD: 4,
                HUNGER: 8,
                ATTACK: 16,
                WALK: 32,
                IDLE: 64,
                HEAL: 128,
                WEB: 256
            };
            class ﾠㅤᅠﾠ {
                constructor(ㅤ, ﾠ, ᅟ) {
                    this.canvas = document.createElement("canvas");
                    this.ctx = this.canvas.getContext("2d");
                    this.canvas.width = ㅤ;
                    this.canvas.height = ﾠ;
                    this.buildType = ᅟ
                }
                drawText(ㅤ, ﾠ, ᅟ, ᅠ) {
                    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                    this.ctx.font = ﾠ + "px Baloo Paaji";
                    this.ctx.strokeStyle = ᅟ;
                    if(this.buildType == 3) {
                        this.ctx.fillStyle = (ㅤ[1] & 16) >> 4 ? "red" : "green"
                    } else {
                        this.ctx.fillStyle = !ᅟㅤᅠ.darkMode ? "white" : "#BBB"
                    }
                    this.ctx.lineWidth = 7;
                    switch(this.buildType) {
                    case 1:
                        this.ctx.strokeText("x" + (ㅤ & 255), 15, 30);
                        this.ctx.fillText("x" + (ㅤ & 255), 15, 30);
                        this.ctx.strokeText("x" + ((ㅤ & 65280) >> 8), 15, 50);
                        this.ctx.fillText("x" + ((ㅤ & 65280) >> 8), 15, 50);
                        this.ctx.strokeText(Math.round((ㅤ & 255) / 2) * 10 / 60 >= 1 ? (Math.round((ㅤ & 255) / 2) * 10 / 60).toFixed(0) + "m" : Math.round((ㅤ & 255) / 2) * 10 + "s", 15, 70);
                        this.ctx.fillText(Math.round((ㅤ & 255) / 2) * 10 / 60 >= 1 ? (Math.round((ㅤ & 255) / 2) * 10 / 60).toFixed(0) + "m" : Math.round((ㅤ & 255) / 2) * 10 + "s", 15, 70);
                        break;
                    case 2:
                        this.ctx.strokeText("x" + (ㅤ & 31), 15, 30);
                        this.ctx.fillText("x" + (ㅤ & 31), 15, 30);
                        this.ctx.strokeText("x" + ((ㅤ & 992) >> 5), 15, 50);
                        this.ctx.fillText("x" + ((ㅤ & 992) >> 5), 15, 50);
                        this.ctx.strokeText("x" + ((ㅤ & 31744) >> 10), 15, 70);
                        this.ctx.fillText("x" + ((ㅤ & 31744) >> 10), 15, 70);
                        this.ctx.strokeText(Math.min(ㅤ & 31, (ㅤ & 992) >> 5) * 10 / 60 >= 1 ? (Math.min(ㅤ & 31, (ㅤ & 992) >> 5) * 10 / 60).toFixed(0) + "m" : Math.min(ㅤ & 31, (ㅤ & 992) >> 5) * 10 + "s", 15, 90);
                        this.ctx.fillText(Math.min(ㅤ & 31, (ㅤ & 992) >> 5) * 10 / 60 >= 1 ? (Math.min(ㅤ & 31, (ㅤ & 992) >> 5) * 10 / 60).toFixed(0) + "m" : Math.min(ㅤ & 31, (ㅤ & 992) >> 5) * 10 + "s", 15, 90);
                        break;
                    case 3:
                        this.ctx.strokeText(ㅤ[0], 15, 40);
                        this.ctx.fillText(ㅤ[0], 15, 40);
                        this.ctx.strokeText((ㅤ[1] & 16) >> 4 ? "Locked" : "Unlocked", 15, 60);
                        this.ctx.fillText((ㅤ[1] & 16) >> 4 ? "Locked" : "Unlocked", 15, 60);
                        this.ctx.strokeText((ㅤ[1] & 16) >> 4 ? ㅤ[1] - 16 : ㅤ[1], 15, 80);
                        this.ctx.fillText((ㅤ[1] & 16) >> 4 ? ㅤ[1] - 16 : ㅤ[1], 15, 80);
                        break;
                    case 4:
                        this.ctx.strokeText("x" + ㅤ, 15, ᅠ == "furnace" ? 30 : 40);
                        this.ctx.fillText("x" + ㅤ, 15, ᅠ == "furnace" ? 30 : 40);
                        if(ᅠ == "furnace") {
                            this.ctx.strokeText(ㅤ * 5 / 60 >= 1 ? (ㅤ * 5 / 60).toFixed(0) + "m" : ㅤ * 5 + "s", 15, 50);
                            this.ctx.fillText(ㅤ * 5 / 60 >= 1 ? (ㅤ * 5 / 60).toFixed(0) + "m" : ㅤ * 5 + "s", 15, 50)
                        };
                        break;
                    default:
                        if(ᅠ == "machine") {
                            this.ctx.strokeText(ㅤ[0], 15, 30);
                            this.ctx.fillText(ㅤ[0], 15, 30);
                            if(ㅤ[1] != "0k") {
                                this.ctx.strokeText(ㅤ[1], 15, 50);
                                this.ctx.fillText(ㅤ[1], 15, 50)
                            }
                        } else {
                            this.ctx.strokeText(ㅤ, 15, 40);
                            this.ctx.fillText(ㅤ, 15, 40)
                        };
                        break
                    }
                }
            }
            let ﾠㅤᅠᅟ = {
                L: 0,
                I: new ﾠㅤᅠﾠ(250, 70, 0),
                E: false
            };
            let ﾠㅤᅠᅠ = ["t", "b", "f", "s", "g", "d", "a", "re", "plm", "p", "cs", "c", "m"];
            let ﾠﾠㅤㅤ = ["wtb", "r", "l"];
            let ﾠﾠㅤﾠ = [];

            function ﾠﾠㅤᅟ(ㅤ, ﾠ, ᅟ) {
                const ᅠ = Math.floor(ㅤ.x / 100);
                const ㅤㅤ = Math.floor(ㅤ.y / 100);
                const ㅤﾠ = Math.floor(ﾠ.x / 100);
                const ㅤᅟ = Math.floor(ﾠ.y / 100);
                const ㅤᅠ = Math.abs(ᅠ - ㅤﾠ);
                const ﾠㅤ = Math.abs(ㅤㅤ - ㅤᅟ);
                return ㅤᅠ <= ᅟ && ﾠㅤ <= ᅟ
            }

            function ﾠﾠㅤᅠ(ㅤ) {
                ㅤ = ㅤ.toString();
                let ﾠ = "";
                for(let ᅟ = 0; ᅟ < ㅤ.length; ᅟ++) {
                    ﾠ += String.fromCharCode(ㅤ.charCodeAt(ᅟ) ^ 6900)
                }
                return ﾠ
            }

            function ﾠﾠﾠㅤ(ㅤ) {
                const ﾠ = [];
                ﾠﾠㅤﾠ = [];
                for(let ᅟ = 0; ᅟ < ㅤ.length; ᅟ++) {
                    for(let ᅠ = 0; ᅠ < ㅤ[ᅟ].length; ᅠ++) {
                        const ㅤㅤ = ㅤ[ᅟ][ᅠ];
                        if(!Array.isArray(ㅤㅤ)) {
                            for(let ㅤ in ㅤㅤ) {
                                if(ㅤㅤ.hasOwnProperty(ㅤ)) {
                                    if(ﾠㅤᅠᅠ.includes(ㅤ)) {
                                        ﾠ.push([ᅠ, ᅟ, ㅤ])
                                    } else if(ﾠﾠㅤㅤ.includes(ㅤ)) {
                                        ﾠﾠㅤﾠ.push([ᅠ, ᅟ, ㅤ])
                                    }
                                }
                            }
                        }
                    }
                }
                return ﾠ
            }

            function ﾠﾠﾠﾠ(ㅤ) {
                const ﾠ = document["defaultView"].js_beautify(ㅤ);
                const ᅟ = ﾠ.split("\n").length;
                return ᅟ
            }
            let ﾠﾠﾠᅟ = 0;
            let ﾠﾠﾠᅠ = 0;

            function ﾠﾠᅟㅤ(ㅤ, ᅟ, ᅠ = 0, ㅤㅤ = null) {
                if(ㅤﾠᅠ) {
                    return
                }
                if(ㅤﾠᅟ) {
                    ㅤﾠᅠ = true
                }
                if(document.visibilityState != "visible") {
                    return
                }
                if(ﾠﾠﾠᅟ && ﾠﾠﾠᅟ.style && ﾠﾠﾠᅟ.style.opacity) {
                    document.body.removeChild(ﾠﾠﾠᅟ)
                }
                let ㅤﾠ = document.createElement("div");
                ﾠﾠﾠᅟ = ㅤﾠ;
                ㅤﾠ.style.userSelect = "none";
                ㅤﾠ.style.position = "fixed";
                ㅤﾠ.style.top = "20px";
                ㅤﾠ.style.left = "50%";
                ㅤﾠ.style.transform = "translateX(-50%)";
                ㅤﾠ.style.padding = "10px 20px";
                ㅤﾠ.style.backgroundColor = ㅤ;
                ㅤﾠ.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.2)";
                ㅤﾠ.style.zIndex = "1000";
                ㅤﾠ.style.textAlign = "left";
                ㅤﾠ.style.color = "#fff";
                ㅤﾠ.style.borderRadius = "10px";
                ㅤﾠ.style.opacity = "0";
                ㅤﾠ.style.transition = "opacity 0.3s";
                let ㅤᅟ = document.createElement("p");
                ㅤᅟ.textContent = ᅟ;
                ㅤᅟ.style.margin = "0";
                ㅤᅟ.style.fontSize = "18px";
                ㅤᅟ.style.fontFamily = "Baloo Paaji, cursive";
                ㅤᅟ.style.textShadow = "0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black";
                ㅤﾠ.appendChild(ㅤᅟ);
                if(ᅠ === 1) {
                    let ㅤ = document.createElement("div");
                    ㅤ.style.marginTop = "10px";
                    ㅤ.style.display = "flex";
                    ㅤ.style.justifyContent = "space-between";
                    let ﾠ = document.createElement("button");
                    ﾠ.textContent = "Yes";
                    ﾠ.style.flex = "1";
                    ﾠ.style.marginRight = "5px";
                    ﾠ.style.padding = "5px";
                    ﾠ.style.border = "none";
                    ﾠ.style.borderRadius = "5px";
                    ﾠ.style.backgroundColor = "#4CAF50";
                    ﾠ.style.color = "#fff";
                    ﾠ.style.cursor = "pointer";
                    ﾠ.style.fontFamily = "Baloo Paaji, cursive";
                    ﾠ.style.textShadow = "0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black";
                    ﾠ.style.fontSize = "14px";
                    ﾠ.addEventListener("click", () => {
                        if(!ㅤﾠᅠ) {
                            ㅤᅠ()
                        }
                        if(ㅤㅤ) {
                            ㅤㅤ(true)
                        }
                    });
                    let ᅟ = document.createElement("button");
                    ᅟ.textContent = "No";
                    ᅟ.style.flex = "1";
                    ᅟ.style.padding = "5px";
                    ᅟ.style.border = "none";
                    ᅟ.style.borderRadius = "5px";
                    ᅟ.style.backgroundColor = "#f44336";
                    ᅟ.style.color = "#fff";
                    ᅟ.style.cursor = "pointer";
                    ᅟ.style.fontFamily = "Baloo Paaji, cursive";
                    ᅟ.style.textShadow = "0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black";
                    ᅟ.style.fontSize = "14px";
                    ᅟ.addEventListener("click", () => {
                        if(!ㅤﾠᅠ) {
                            ㅤᅠ()
                        }
                        if(ㅤㅤ) {
                            ㅤㅤ(false)
                        }
                    });
                    ㅤ.appendChild(ﾠ);
                    ㅤ.appendChild(ᅟ);
                    ㅤﾠ.appendChild(ㅤ)
                } else if(ᅠ === 2) {
                    let ㅤ = document.createElement("input");
                    ㅤ.type = "text";
                    ㅤ.style.width = "100%";
                    ㅤ.style.marginTop = "10px";
                    ㅤ.style.padding = "5px";
                    ㅤ.style.borderRadius = "5px";
                    ㅤ.style.border = "1px solid #ddd";
                    ㅤ.style.boxSizing = "border-box";
                    ㅤﾠ.appendChild(ㅤ);
                    ㅤ.addEventListener("keydown", ﾠ => {
                        if(ﾠ.key === "Enter") {
                            let ﾠ = ㅤ.value;
                            if(!ㅤﾠᅠ) {
                                ㅤᅠ()
                            }
                            if(ㅤㅤ) {
                                ㅤㅤ(ﾠ)
                            }
                        }
                    })
                }
                document.body.appendChild(ㅤﾠ);
                ㅤﾠ.style.opacity = "1";
                let ㅤᅠ = () => {
                    if(ㅤﾠ && ㅤﾠ.style && ㅤﾠ.style.opacity) {
                        ㅤﾠ.style.opacity = "0"
                    }
                    ﾠﾠﾠᅠ = ﾠ.setTimeout(() => {
                        ﾠﾠﾠᅟ = 0;
                        if(ㅤﾠ && ㅤﾠ.style && ㅤﾠ.style.opacity) {
                            document.body.removeChild(ㅤﾠ)
                        }
                    }, 300)
                };
                if(ᅠ === 0) {
                    if(!ㅤﾠᅠ) {
                        ﾠﾠﾠᅠ = ﾠ.setTimeout(ㅤᅠ, 3700)
                    }
                }
            }

            function ﾠﾠᅟﾠ(ㅤ) {
                switch(ㅤ) {
                case ﾠㅤᅟᅠ.SWORD:
                case ﾠㅤᅟᅠ.SWORD_GOLD:
                case ﾠㅤᅟᅠ.SWORD_DIAMOND:
                case ﾠㅤᅟᅠ.REIDITE_SWORD:
                case ﾠㅤᅟᅠ.SWORD_AMETHYST:
                case ﾠㅤᅟᅠ.SWORD_WOOD:
                case ﾠㅤᅟᅠ.DRAGON_SWORD:
                case ﾠㅤᅟᅠ.LAVA_SWORD:
                case ﾠㅤᅟᅠ.SWORD_EMERALD:
                case ﾠㅤᅟᅠ.SWORD_COPPER:
                case ﾠㅤᅟᅠ.SWORD_IRON:
                case ﾠㅤᅟᅠ.SWORD_TOPAZ:
                case ﾠㅤᅟᅠ.SWORD_SAPPHIRE:
                case ﾠㅤᅟᅠ.SWORD_JADE:
                case ﾠㅤᅟᅠ.SWORD_RUBY:
                case ﾠㅤᅟᅠ.SWORD_COAL:
                case ﾠㅤᅟᅠ.SWORD_AQUAMARINE:
                    return 1;
                case ﾠㅤᅟᅠ.WOOD_SPEAR:
                case ﾠㅤᅟᅠ.SPEAR:
                case ﾠㅤᅟᅠ.GOLD_SPEAR:
                case ﾠㅤᅟᅠ.DIAMOND_SPEAR:
                case ﾠㅤᅟᅠ.DRAGON_SPEAR:
                case ﾠㅤᅟᅠ.LAVA_SPEAR:
                case ﾠㅤᅟᅠ.CRAB_SPEAR:
                case ﾠㅤᅟᅠ.EMERALD_SPEAR:
                case ﾠㅤᅟᅠ.COPPER_SPEAR:
                case ﾠㅤᅟᅠ.IRON_SPEAR:
                case ﾠㅤᅟᅠ.TOPAZ_SPEAR:
                case ﾠㅤᅟᅠ.SAPPHIRE_SPEAR:
                case ﾠㅤᅟᅠ.JADE_SPEAR:
                case ﾠㅤᅟᅠ.RUBY_SPEAR:
                case ﾠㅤᅟᅠ.COAL_SPEAR:
                case ﾠㅤᅟᅠ.AQUAMARINE_SPEAR:
                case ﾠㅤᅟᅠ.AMETHYST_SPEAR:
                case ﾠㅤᅟᅠ.REIDITE_SPEAR:
                    return 2;
                case ﾠㅤᅟᅠ.WOOD_AXE:
                case ﾠㅤᅟᅠ.STONE_AXE:
                case ﾠㅤᅟᅠ.GOLD_AXE:
                case ﾠㅤᅟᅠ.DIAMOND_AXE:
                case ﾠㅤᅟᅠ.AMETHYST_AXE:
                case ﾠㅤᅟᅠ.REIDITE_AXE:
                case ﾠㅤᅟᅠ.EMERALD_AXE:
                case ﾠㅤᅟᅠ.COPPER_AXE:
                case ﾠㅤᅟᅠ.IRON_AXE:
                case ﾠㅤᅟᅠ.TOPAZ_AXE:
                case ﾠㅤᅟᅠ.SAPPHIRE_AXE:
                case ﾠㅤᅟᅠ.JADE_AXE:
                case ﾠㅤᅟᅠ.RUBY_AXE:
                case ﾠㅤᅟᅠ.COAL_AXE:
                case ﾠㅤᅟᅠ.AQUAMARINE_AXE:
                    return 3;
                case ﾠㅤᅟᅠ.SUPER_HAMMER:
                    return 4;
                case ﾠㅤᅟᅠ.PIRATE_SWORD:
                    return 5;
                case ﾠㅤᅟᅠ.WOOD_BOW:
                case ﾠㅤᅟᅠ.STONE_BOW:
                case ﾠㅤᅟᅠ.GOLD_BOW:
                case ﾠㅤᅟᅠ.DIAMOND_BOW:
                case ﾠㅤᅟᅠ.AMETHYST_BOW:
                case ﾠㅤᅟᅠ.REIDITE_BOW:
                case ﾠㅤᅟᅠ.DRAGON_BOW:
                case ﾠㅤᅟᅠ.EMERALD_BOW:
                case ﾠㅤᅟᅠ.COPPER_BOW:
                case ﾠㅤᅟᅠ.IRON_BOW:
                case ﾠㅤᅟᅠ.TOPAZ_BOW:
                case ﾠㅤᅟᅠ.SAPPHIRE_BOW:
                case ﾠㅤᅟᅠ.JADE_BOW:
                case ﾠㅤᅟᅠ.RUBY_BOW:
                case ﾠㅤᅟᅠ.COAL_BOW:
                case ﾠㅤᅟᅠ.AQUAMARINE_BOW:
                    return 6
                }
            }

            function ﾠﾠᅟᅟ(ㅤ, ﾠ) {
                const ᅟ = ㅤ.x - ﾠ.x;
                const ᅠ = ㅤ.y - ﾠ.y;
                return Math.atan2(ᅠ, ᅟ)
            }

            function ﾠﾠᅟᅠ() {
                let ㅤ = ᅟㅤᅠ.Aimbot.mode == "Rabbit Chase" ? ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.RABBIT] : ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.PLAYERS];
                let ﾠ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                let ᅟ;
                let ᅠ = 550;
                for(let ㅤㅤ = 0; ㅤㅤ < ㅤ.length; ㅤㅤ++) {
                    if(!ﾠᅟᅠᅠ(ㅤ[ㅤㅤ][ㅤㅤᅟﾠ.pid]) || ᅟㅤᅠ.Aimbot.mode == "Rabbit Chase") {
                        if(ﾠ[ㅤㅤᅟﾠ.fly] == 0 && ㅤ[ㅤㅤ][ㅤㅤᅟﾠ.fly] == 1 && ᅟㅤᅠ.Aimbot.mode !== "Rabbit Chase") {
                            continue
                        } else if(ﾠ[ㅤㅤᅟﾠ.fly] == 1 && ㅤ[ㅤㅤ][ㅤㅤᅟﾠ.fly] == 0 && ᅟㅤᅠ.Aimbot.mode !== "Rabbit Chase") {
                            continue
                        } else if(ㅤ[ㅤㅤ][ㅤㅤᅟﾠ.ghost]) {
                            continue
                        }
                        let ㅤﾠ = ﾠᅠㅤㅤ(ﾠ, ㅤ[ㅤㅤ]);
                        if(ㅤﾠ < ᅠ) {
                            ᅟ = ㅤ[ㅤㅤ];
                            ᅠ = ㅤﾠ
                        }
                    }
                }
                return [ᅟ, ᅠ]
            }
            async function ﾠﾠᅠㅤ(ㅤ, ...ﾠ) {
                return await new Promise(async (ᅟ, ᅠ) => {
                    try {
                        await ㅤ(...ﾠ);
                        ᅟ()
                    } catch (ㅤ) {
                        ᅠ(ㅤ)
                    }
                })
            }
            let ﾠﾠᅠﾠ = [];
            let ﾠﾠᅠᅟ = [];

            function ﾠﾠᅠᅠ(ㅤ, ﾠ, ᅟ) {
                for(let ᅠ = 0; ᅠ < ᅟ.length; ᅠ++) {
                    const [ㅤㅤ, ㅤﾠ] = ᅟ[ᅠ];
                    if(ㅤㅤ === ㅤ + ﾠ) {
                        return ㅤﾠ
                    }
                }
                return null
            }

            function ﾠᅟㅤㅤ(ㅤ) {
                const ﾠ = ㅤ.replace(new RegExp("function\\s*\\(\\s*\\)\\s*{", "g"), "");
                const ᅟ = new RegExp("[^\\s()]+\\s*\\(\\s*\\)", "g");
                const ᅠ = ﾠ.match(ᅟ);
                if(ᅠ) {
                    return ᅠ.length
                } else {
                    return 0
                }
            }

            function ﾠᅟㅤﾠ(ㅤ) {
                ㅤ = ㅤ.replace(new RegExp("\\\\(\\d{1,3})", "g"), (ㅤ, ﾠ) => String.fromCharCode(parseInt(ﾠ, 8)));
                ㅤ = ㅤ.replace(new RegExp("\\\\x([0-9A-Fa-f]{2})", "g"), (ㅤ, ﾠ) => String.fromCharCode(parseInt(ﾠ, 16)));
                ㅤ = ㅤ.replace(new RegExp("\\\\u([\\dA-Fa-f]{4})", "g"), (ㅤ, ﾠ) => String.fromCharCode(parseInt(ﾠ, 16)));
                return ㅤ
            }

            function ﾠᅟㅤᅟ(ㅤ) {
                const ﾠ = new RegExp("['\"`]([^'\"`]+)['\"`]", "g");
                const ᅟ = [];
                let ᅠ;
                while((ᅠ = ﾠ.exec(ㅤ)) !== null) {
                    ᅟ.push(ᅠ[1])
                }
                return ᅟ
            }

            function ﾠᅟㅤᅠ(ㅤ, ﾠ) {
                if(typeof ㅤ === "object" && ㅤ !== null) {
                    const ᅟ = Object.keys(ﾠ);
                    return ᅟ.every(ᅟ => {
                        if(ᅟ in ㅤ) {
                            if(ﾠ[ᅟ] === "any") {
                                return true
                            }
                            return typeof ㅤ[ᅟ] === typeof ﾠ[ᅟ]
                        }
                        return false
                    })
                }
                return false
            }

            function ﾠᅟﾠㅤ(ㅤ) {
                if(Array.isArray(ㅤ)) {
                    return ㅤ.length
                } else {
                    return Object.keys(ㅤ).length
                }
            }

            function ﾠᅟﾠﾠ(ㅤ, ﾠ) {
                const ᅟ = ﾠᅟﾠᅟ(ㅤ);
                const ᅠ = ﾠᅟﾠᅟ(ﾠ);
                const ㅤㅤ = ᅟ.semicolon === ᅠ.semicolon;
                const ㅤﾠ = ᅟ.slash === ᅠ.slash;
                const ㅤᅟ = ᅟ.equals === ᅠ.equals;
                const ㅤᅠ = (ㅤㅤ ? 1 : 0) + (ㅤﾠ ? 1 : 0) + (ㅤᅟ ? 1 : 0);
                const ﾠㅤ = ㅤᅠ / 3 * 100;
                let ﾠﾠ = 33;
                if(ﾠㅤ === 100) {
                    ﾠﾠ = 100
                } else if(ﾠㅤ >= 66) {
                    ﾠﾠ = 66
                }
                return ﾠﾠ
            }

            function ﾠᅟﾠᅟ(ㅤ) {
                const ﾠ = {
                    semicolon: 0,
                    slash: 0,
                    equals: 0
                };
                ﾠ.semicolon = (ㅤ.match(new RegExp(";", "g")) || []).length;
                ﾠ.slash = (ㅤ.match(new RegExp("\\/", "g")) || []).length;
                ﾠ.equals = (ㅤ.match(new RegExp("=", "g")) || []).length;
                return ﾠ
            }

            function ﾠᅟﾠᅠ(ㅤ, ﾠ, ᅟ, ᅠ, ㅤㅤ, ㅤﾠ, ㅤᅟ, ㅤᅠ, ﾠㅤ, ﾠﾠ) {
                if(ﾠ.tryLoad === undefined || ﾠ.tryLoad() === 1) {
                    if(ﾠﾠ !== undefined) {
                        if(ﾠ.naturalWidth) {
                            ㅤ.drawImage(ﾠ, ᅟ, ᅠ, Math.max(1, ㅤㅤ), Math.max(1, ㅤﾠ), ㅤᅟ, ㅤᅠ, ﾠㅤ, ﾠﾠ)
                        }
                    } else if(ㅤﾠ !== undefined) {
                        if(ﾠ.naturalWidth) {
                            ㅤ.drawImage(ﾠ, ᅟ, ᅠ, ㅤㅤ, ㅤﾠ)
                        }
                    } else {
                        if(ﾠ.naturalWidth) {
                            ㅤ.drawImage(ﾠ, ᅟ, ᅠ)
                        }
                    }
                }
            }

            function ﾠᅟᅟㅤ(ㅤ) {
                const ﾠ = ㅤ + "=";
                const ᅟ = decodeURIComponent(document.cookie);
                const ᅠ = ᅟ.split("; ");
                for(let ㅤ = 0; ㅤ < ᅠ.length; ㅤ++) {
                    let ᅟ = ᅠ[ㅤ].trim();
                    if(ᅟ.indexOf(ﾠ) === 0) {
                        return ᅟ.substring(ﾠ.length, ᅟ.length)
                    }
                }
                return null
            }

            function ﾠᅟᅟﾠ(ㅤ, ﾠ, ᅟ = 7) {
                const ᅠ = new Date;
                ᅠ.setTime(ᅠ.getTime() + ᅟ * 24 * 60 * 60 * 1e3);
                document.cookie = "" + encodeURIComponent(ㅤ) + "=" + encodeURIComponent(ﾠ) + "; expires=" + ᅠ.toUTCString() + "; path=/"
            }

            function ﾠᅟᅟᅟ(ㅤ, ﾠ, ᅟ) {
                let ᅠ = document.createElement("canvas");
                let ㅤㅤ = ᅠ.getContext("2d");
                ᅠ.width = ㅤ * 248;
                ᅠ.height = ㅤ * 247;
                ㅤㅤ.save();
                ㅤㅤ.translate(ㅤ * 69.5, ㅤ * 145);
                ᅟㅤᅟﾠ(ㅤㅤ, ㅤ * -8.5, ㅤ * -63, ㅤ * 17, ㅤ * 127, ㅤ * 1);
                ㅤㅤ.restore();
                ᅟㅤᅟㅤ(ㅤㅤ, ᅟ[0]);
                ㅤㅤ.save();
                ㅤㅤ.translate(ㅤ * 183, ㅤ * 145);
                ᅟㅤᅟﾠ(ㅤㅤ, ㅤ * -8, ㅤ * -63, ㅤ * 16, ㅤ * 126, ㅤ * 1);
                ㅤㅤ.restore();
                ᅟㅤᅟㅤ(ㅤㅤ, ᅟ[0]);
                ㅤㅤ.save();
                ㅤㅤ.translate(ㅤ * 123.5, ㅤ * 62.5);
                ㅤㅤ.rotate(6.28);
                ᅟㅤᅟﾠ(ㅤㅤ, ㅤ * -84.5, ㅤ * -25.5, ㅤ * 169, ㅤ * 51, ㅤ * 5);
                ㅤㅤ.restore();
                ᅟㅤᅟㅤ(ㅤㅤ, ᅟ[2], ᅟ[1], ㅤ * 6);
                ㅤㅤ.save();
                ㅤㅤ.translate(ㅤ * 123.5, ㅤ * 118);
                ㅤㅤ.rotate(6.24);
                ᅟㅤᅟﾠ(ㅤㅤ, ㅤ * -85.5, ㅤ * -24, ㅤ * 169, ㅤ * 48, ㅤ * 5);
                ㅤㅤ.restore();
                ᅟㅤᅟㅤ(ㅤㅤ, ᅟ[3], ᅟ[1], ㅤ * 6);
                ㅤㅤ.save();
                ㅤㅤ.translate(ㅤ * 122, ㅤ * 177.5);
                ㅤㅤ.rotate(6.32);
                ᅟㅤᅟﾠ(ㅤㅤ, ㅤ * -84, ㅤ * -23.5, ㅤ * 169, ㅤ * 47, ㅤ * 5);
                ㅤㅤ.restore();
                ᅟㅤᅟㅤ(ㅤㅤ, ᅟ[2], ᅟ[1], ㅤ * 6);
                ㅤㅤ.beginPath();
                ㅤㅤ.lineCap = "round";
                ㅤㅤ.lineJoin = "round";
                ㅤㅤ.moveTo(ㅤ * 37, ㅤ * 157);
                ㅤㅤ.bezierCurveTo(ㅤ * 49, ㅤ * 160, ㅤ * 49, ㅤ * 160, ㅤ * 61, ㅤ * 163);
                ㅤㅤ.bezierCurveTo(ㅤ * 49.5, ㅤ * 165.5, ㅤ * 49.5, ㅤ * 165.5, ㅤ * 38, ㅤ * 168);
                ㅤㅤ.closePath();
                ᅟㅤᅟㅤ(ㅤㅤ, ᅟ[1]);
                ㅤㅤ.beginPath();
                ㅤㅤ.lineCap = "round";
                ㅤㅤ.lineJoin = "round";
                ㅤㅤ.moveTo(ㅤ * 205, ㅤ * 175);
                ㅤㅤ.bezierCurveTo(ㅤ * 192.5, ㅤ * 180, ㅤ * 192.5, ㅤ * 180, ㅤ * 180, ㅤ * 185);
                ㅤㅤ.bezierCurveTo(ㅤ * 193, ㅤ * 188, ㅤ * 193, ㅤ * 188, ㅤ * 206, ㅤ * 191);
                ㅤㅤ.closePath();
                ᅟㅤᅟㅤ(ㅤㅤ, ᅟ[1]);
                return ᅠ
            }

            function ﾠᅟᅟᅠ(ㅤ, ﾠ, ᅟ) {
                let ᅠ = document.createElement("canvas");
                let ㅤㅤ = ᅠ.getContext("2d");
                ᅠ.width = ㅤ * 248;
                ᅠ.height = ㅤ * 247;
                ㅤㅤ.save();
                ㅤㅤ.translate(ㅤ * 182, ㅤ * 120);
                ᅟㅤᅟﾠ(ㅤㅤ, ㅤ * -8, ㅤ * -67, ㅤ * 16, ㅤ * 134, ㅤ * 1);
                ㅤㅤ.restore();
                ᅟㅤᅟㅤ(ㅤㅤ, ᅟ[0]);
                ㅤㅤ.save();
                ㅤㅤ.translate(ㅤ * 68.5, ㅤ * 127.5);
                ᅟㅤᅟﾠ(ㅤㅤ, ㅤ * -8.5, ㅤ * -70.5, ㅤ * 17, ㅤ * 141, ㅤ * 1);
                ㅤㅤ.restore();
                ᅟㅤᅟㅤ(ㅤㅤ, ᅟ[0]);
                ㅤㅤ.save();
                ㅤㅤ.translate(ㅤ * 123.5, ㅤ * 68);
                ᅟㅤᅟﾠ(ㅤㅤ, ㅤ * -82.5, ㅤ * -24, ㅤ * 165, ㅤ * 48, ㅤ * 4);
                ㅤㅤ.restore();
                ᅟㅤᅟㅤ(ㅤㅤ, ᅟ[2], ᅟ[1], ㅤ * 6);
                ㅤㅤ.save();
                ㅤㅤ.translate(ㅤ * 123, ㅤ * 179.5);
                ᅟㅤᅟﾠ(ㅤㅤ, ㅤ * -83, ㅤ * -24.5, ㅤ * 166, ㅤ * 49, ㅤ * 4);
                ㅤㅤ.restore();
                ᅟㅤᅟㅤ(ㅤㅤ, ᅟ[2], ᅟ[1], ㅤ * 6);
                ㅤㅤ.save();
                ㅤㅤ.translate(ㅤ * 123.5, ㅤ * 123.5);
                ㅤㅤ.rotate(6.24);
                ᅟㅤᅟﾠ(ㅤㅤ, ㅤ * -82.5, ㅤ * -24.5, ㅤ * 165, ㅤ * 49, ㅤ * 4);
                ㅤㅤ.restore();
                ᅟㅤᅟㅤ(ㅤㅤ, ᅟ[3], ᅟ[1], ㅤ * 6);
                ㅤㅤ.beginPath();
                ㅤㅤ.lineCap = "round";
                ㅤㅤ.lineJoin = "round";
                ㅤㅤ.moveTo(ㅤ * 204, ㅤ * 112);
                ㅤㅤ.bezierCurveTo(ㅤ * 149, ㅤ * 121.5, ㅤ * 96, ㅤ * 130, ㅤ * 94, ㅤ * 131);
                ㅤㅤ.bezierCurveTo(ㅤ * 149.5, ㅤ * 127.5, ㅤ * 149.5, ㅤ * 127.5, ㅤ * 205, ㅤ * 124);
                ㅤㅤ.closePath();
                ᅟㅤᅟㅤ(ㅤㅤ, ᅟ[1]);
                return ᅠ
            }

            function ﾠᅟᅠㅤ(ㅤ, ﾠ, ᅟ) {
                let ᅠ = document.createElement("canvas");
                let ㅤㅤ = ᅠ.getContext("2d");
                ᅠ.width = ㅤ * 248;
                ᅠ.height = ㅤ * 247;
                ㅤㅤ.save();
                ㅤㅤ.translate(ㅤ * 183, ㅤ * 107);
                ᅟㅤᅟﾠ(ㅤㅤ, ㅤ * -8, ㅤ * -70.5, ㅤ * 16, ㅤ * 141, ㅤ * 1);
                ㅤㅤ.restore();
                ᅟㅤᅟㅤ(ㅤㅤ, ᅟ[0]);
                ㅤㅤ.save();
                ㅤㅤ.translate(ㅤ * 69.5, ㅤ * 110);
                ᅟㅤᅟﾠ(ㅤㅤ, ㅤ * -8.5, ㅤ * -71, ㅤ * 17, ㅤ * 143, ㅤ * 1);
                ㅤㅤ.restore();
                ᅟㅤᅟㅤ(ㅤㅤ, ᅟ[0]);
                ㅤㅤ.save();
                ㅤㅤ.translate(ㅤ * 123.5, ㅤ * 181);
                ᅟㅤᅟﾠ(ㅤㅤ, ㅤ * -84.5, ㅤ * -26, ㅤ * 169, ㅤ * 52, ㅤ * 5);
                ㅤㅤ.restore();
                ᅟㅤᅟㅤ(ㅤㅤ, ᅟ[2], ᅟ[1], ㅤ * 6);
                ㅤㅤ.beginPath();
                ㅤㅤ.lineCap = "round";
                ㅤㅤ.lineJoin = "round";
                ㅤㅤ.moveTo(ㅤ * 41, ㅤ * 95);
                ㅤㅤ.bezierCurveTo(ㅤ * 105, ㅤ * 96, ㅤ * 113, ㅤ * 99, ㅤ * 134, ㅤ * 102);
                ㅤㅤ.bezierCurveTo(ㅤ * 147, ㅤ * 106, ㅤ * 173, ㅤ * 100, ㅤ * 207, ㅤ * 105);
                ㅤㅤ.bezierCurveTo(ㅤ * 210, ㅤ * 105, ㅤ * 207, ㅤ * 140, ㅤ * 207, ㅤ * 154);
                ㅤㅤ.bezierCurveTo(ㅤ * 123.5, ㅤ * 151.5, ㅤ * 123.5, ㅤ * 151.5, ㅤ * 40, ㅤ * 149);
                ㅤㅤ.bezierCurveTo(ㅤ * 37, ㅤ * 145, ㅤ * 39, ㅤ * 95, ㅤ * 41, ㅤ * 96);
                ㅤㅤ.closePath();
                ᅟㅤᅟㅤ(ㅤㅤ, ᅟ[2], ᅟ[1], ㅤ * 6);
                ㅤㅤ.beginPath();
                ㅤㅤ.lineCap = "round";
                ㅤㅤ.lineJoin = "round";
                ㅤㅤ.moveTo(ㅤ * 68, ㅤ * 75);
                ㅤㅤ.bezierCurveTo(ㅤ * 54, ㅤ * 72.5, ㅤ * 54, ㅤ * 72.5, ㅤ * 40, ㅤ * 70);
                ㅤㅤ.bezierCurveTo(ㅤ * 38, ㅤ * 46, ㅤ * 40, ㅤ * 46, ㅤ * 53, ㅤ * 46);
                ㅤㅤ.bezierCurveTo(ㅤ * 201, ㅤ * 41, ㅤ * 201, ㅤ * 41, ㅤ * 201, ㅤ * 42);
                ㅤㅤ.bezierCurveTo(ㅤ * 211, ㅤ * 40, ㅤ * 208, ㅤ * 53, ㅤ * 208, ㅤ * 72);
                ㅤㅤ.bezierCurveTo(ㅤ * 209, ㅤ * 91, ㅤ * 210, ㅤ * 96, ㅤ * 194, ㅤ * 94);
                ㅤㅤ.bezierCurveTo(ㅤ * 119, ㅤ * 97, ㅤ * 119, ㅤ * 97, ㅤ * 44, ㅤ * 100);
                ㅤㅤ.bezierCurveTo(ㅤ * 39, ㅤ * 99, ㅤ * 40, ㅤ * 96, ㅤ * 40, ㅤ * 80);
                ㅤㅤ.bezierCurveTo(ㅤ * 54, ㅤ * 77.5, ㅤ * 54, ㅤ * 77.5, ㅤ * 68, ㅤ * 75);
                ㅤㅤ.closePath();
                ᅟㅤᅟㅤ(ㅤㅤ, ᅟ[3], ᅟ[1], ㅤ * 6);
                return ᅠ
            }

            function ﾠᅟᅠﾠ(ㅤ, ﾠ, ᅟ) {
                let ᅠ = document.createElement("canvas");
                let ㅤㅤ = ᅠ.getContext("2d");
                ᅠ.width = ㅤ * 248;
                ᅠ.height = ㅤ * 247;
                ㅤㅤ.save();
                ㅤㅤ.translate(ㅤ * 123.5, ㅤ * 62.5);
                ㅤㅤ.rotate(6.28);
                ㅤㅤ.rect(ㅤ * -84.5, ㅤ * -25.5, ㅤ * 169, ㅤ * 169);
                ㅤㅤ.restore();
                ᅟㅤᅟㅤ(ㅤㅤ, ᅟ[2]);
                return ᅠ
            }

            function ﾠᅟᅠᅟ() {
                ㅤㅤᅟᅠ.ROOF = [
                    [],
                    [],
                    [],
                    []
                ];
                ㅤㅤᅟᅠ.ROOF[0][0] = ᅟㅤﾠᅠ(ﾠᅟᅟᅟ(.59, true, ["#0d1b1c", "#44301b", "#57442a", "#523e26"]));
                ㅤㅤᅟᅠ.ROOF[0][1] = ᅟㅤﾠᅠ(ﾠᅟᅟᅟ(.59, true, ["#0c0c0d", "#062124", "#10373d", "#0f3333"]));
                ㅤㅤᅟᅠ.ROOF[1][0] = ᅟㅤﾠᅠ(ﾠᅟᅟᅠ(.59, true, ["#0d1b1c", "#44301b", "#57442a", "#523e26"]));
                ㅤㅤᅟᅠ.ROOF[1][1] = ᅟㅤﾠᅠ(ﾠᅟᅟᅠ(.59, true, ["#0c0c0d", "#062124", "#10373d", "#0f3333"]));
                ㅤㅤᅟᅠ.ROOF[2][0] = ᅟㅤﾠᅠ(ﾠᅟᅠㅤ(.59, true, ["#0d1b1c", "#44301b", "#57442a", "#523e26"]));
                ㅤㅤᅟᅠ.ROOF[2][1] = ᅟㅤﾠᅠ(ﾠᅟᅠㅤ(.59, true, ["#0c0c0d", "#062124", "#10373d", "#0f3333"]));
                ㅤㅤᅟᅠ.ROOF[3][0] = ᅟㅤﾠᅠ(ﾠᅟᅠﾠ(.59, true, ["#0d1b1c", "#57442a", "#57442a", "#523e26"]));
                ㅤㅤᅟᅠ.ROOF[3][1] = ᅟㅤﾠᅠ(ﾠᅟᅠﾠ(.59, true, ["#0c0c0d", "#10373d", "#10373d", "#0f3333"]))
            }
            ﾠᅟᅠᅟ();

            function ﾠᅟᅠᅠ(ㅤ) {
                if(ㅤ === ㅤㅤㅤᅠ.id) {
                    return 1
                }
                for(let ﾠ = 0; ﾠ < ㅤㅤᅟㅤ.WUB.length; ﾠ++) {
                    if(ㅤㅤᅟㅤ.WUB[ﾠ] == ㅤ) {
                        return 1
                    }
                }
                return 0
            }

            function ﾠᅠㅤㅤ(ㅤ, ﾠ) {
                if(ㅤ && ﾠ) {
                    return Math.sqrt((ㅤ.x - ﾠ.x) ** 2 + (ㅤ.y - ﾠ.y) ** 2)
                }
                return null
            }

            function ﾠᅠㅤﾠ(ㅤ) {
                ㅤﾠㅤㅤ.save();
                ㅤﾠㅤㅤ.translate(ㅤㅤᅟㅤ.WUF.x + ㅤ.x, ㅤㅤᅟㅤ.WUF.y + ㅤ.y);
                ㅤﾠㅤㅤ.rotate(ㅤ.angle);
                let ﾠ;
                let ᅟ;
                if(ㅤ[ㅤㅤᅟﾠ.hit][ㅤㅤᅟﾠ.update]) {
                    if(ㅤ[ㅤㅤᅟﾠ.hit][ㅤㅤᅟﾠ.anim][ㅤㅤᅟﾠ.update]() && ㅤ[ㅤㅤᅟﾠ.hit][ㅤㅤᅟﾠ.anim][ㅤㅤᅟﾠ.o] == false) {
                        ㅤ[ㅤㅤᅟﾠ.hit][ㅤㅤᅟﾠ.update] = false
                    }
                    let ᅠ = ㅤᅟﾠﾠ * ((1 - ㅤ[ㅤㅤᅟﾠ.hit][ㅤㅤᅟﾠ.anim][ㅤㅤᅟﾠ.v]) * 600);
                    ﾠ = ᅠ * Math.sin(ㅤ[ㅤㅤᅟﾠ.hit].angle - ㅤ.angle);
                    ᅟ = Math.cos(ㅤ[ㅤㅤᅟﾠ.hit].angle - ㅤ.angle) * ᅠ
                } else {
                    ﾠ = 0;
                    ᅟ = 0
                }
                let ᅠ = ㅤㅤᅟᅠ.ROOF[ᅟㅤᅠ.smoothRoofs ? 3 : (ㅤ[ㅤㅤᅟﾠ.j] + ㅤ[ㅤㅤᅟﾠ.i] % 2) % 3][ㅤㅤᅟﾠ.time];
                let ㅤㅤ = -1;
                if(ᅟㅤᅠ.Roof.active) {
                    ㅤﾠㅤㅤ.globalAlpha = Number(ᅟㅤᅠ.Roof.opacity)
                } else {
                    let ﾠ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                    if(ﾠ && ﾠᅟᅠᅠ(ㅤ[ㅤㅤᅟﾠ.pid])) {
                        if(ﾠᅠㅤㅤ(ㅤ, ﾠ) < 550) {
                            ㅤ[ㅤㅤᅟﾠ.opacity] = Math.max(ㅤ[ㅤㅤᅟﾠ.opacity] - ㅤᅟﾠﾠ, .3)
                        } else {
                            ㅤ[ㅤㅤᅟﾠ.opacity] = Math.min(ㅤ[ㅤㅤᅟﾠ.opacity] + ㅤᅟﾠﾠ, 1)
                        }
                    } else if(ﾠ && ﾠᅠㅤㅤ(ㅤ, ﾠ) < 150) {
                        ㅤ[ㅤㅤᅟﾠ.opacity] = Math.max(ㅤ[ㅤㅤᅟﾠ.opacity] - ㅤᅟﾠﾠ, .3)
                    } else {
                        ㅤ[ㅤㅤᅟﾠ.opacity] = Math.min(ㅤ[ㅤㅤᅟﾠ.opacity] + ㅤᅟﾠﾠ, 1)
                    }
                    ㅤㅤ = ㅤﾠㅤㅤ.globalAlpha;
                    ㅤﾠㅤㅤ.globalAlpha *= ㅤ[ㅤㅤᅟﾠ.opacity]
                }
                ﾠᅟﾠᅠ(ㅤﾠㅤㅤ, ᅠ, ᅠ.width / 2 + ﾠ, ᅠ.height / 2 + ᅟ, -ᅠ.width, -ᅠ.height);
                if(ㅤㅤ != -1) {
                    ㅤﾠㅤㅤ.globalAlpha = ㅤㅤ
                }
                ㅤﾠㅤㅤ.restore()
            }

            function ﾠᅠㅤᅟ(ㅤ) {
                ㅤﾠㅤㅤ.save();
                ㅤﾠㅤㅤ.translate(ㅤㅤᅟㅤ.WUF.x + ㅤ.x, ㅤㅤᅟㅤ.WUF.y + ㅤ.y);
                ㅤﾠㅤㅤ.rotate(ㅤ.angle);
                let ﾠ;
                let ᅟ;
                if(ㅤ[ㅤㅤᅟﾠ.hit][ㅤㅤᅟﾠ.update]) {
                    if(ㅤ[ㅤㅤᅟﾠ.hit][ㅤㅤᅟﾠ.anim][ㅤㅤᅟﾠ.update]() && ㅤ[ㅤㅤᅟﾠ.hit][ㅤㅤᅟﾠ.anim][ㅤㅤᅟﾠ.o] == false) {
                        ㅤ[ㅤㅤᅟﾠ.hit][ㅤㅤᅟﾠ.update] = false
                    }
                    let ᅠ = ㅤᅟﾠﾠ * ((1 - ㅤ[ㅤㅤᅟﾠ.hit][ㅤㅤᅟﾠ.anim][ㅤㅤᅟﾠ.v]) * 600);
                    ﾠ = ᅠ * Math.sin(ㅤ[ㅤㅤᅟﾠ.hit].angle - ㅤ.angle);
                    ᅟ = Math.cos(ㅤ[ㅤㅤᅟﾠ.hit].angle - ㅤ.angle) * ᅠ
                } else {
                    ﾠ = 0;
                    ᅟ = 0
                }
                let ᅠ;
                switch(ㅤ.type) {
                case ﾠㅤᅟﾠ.SPIKE:
                    ᅠ = [ㅤㅤᅟᅠ.WOOD_SPIKE_ALLY, ㅤㅤᅟᅠ.WOOD_SPIKE_ENEMY];
                    break;
                case ﾠㅤᅟﾠ.STONE_SPIKE:
                    ᅠ = [ㅤㅤᅟᅠ.STONE_SPIKE_ALLY, ㅤㅤᅟᅠ.STONE_SPIKE_ENEMY];
                    break;
                case ﾠㅤᅟﾠ.GOLD_SPIKE:
                    ᅠ = [ㅤㅤᅟᅠ.GOLD_SPIKE_ALLY, ㅤㅤᅟᅠ.GOLD_SPIKE_ENEMY];
                    break;
                case ﾠㅤᅟﾠ.DIAMOND_SPIKE:
                    ᅠ = [ㅤㅤᅟᅠ.DIAMOND_SPIKE_ALLY, ㅤㅤᅟᅠ.DIAMOND_SPIKE_ENEMY];
                    break;
                case ﾠㅤᅟﾠ.AMETHYST_SPIKE:
                    ᅠ = [ㅤㅤᅟᅠ.AMETHYST_SPIKE_ALLY, ㅤㅤᅟᅠ.AMETHYST_SPIKE_ENEMY];
                    break;
                case ﾠㅤᅟﾠ.REIDITE_SPIKE:
                    ᅠ = [ㅤㅤᅟᅠ.REIDITE_SPIKE_ALLY, ㅤㅤᅟᅠ.REIDITE_SPIKE_ENEMY];
                    break;
                default:
                    break
                }
                ᅠ = ﾠᅟᅠᅠ(ㅤ[ㅤㅤᅟﾠ.pid]) ? ᅠ[0] : ᅠ[1];
                ﾠᅟﾠᅠ(ㅤﾠㅤㅤ, ᅠ, ᅠ.width / 2 + ﾠ, ᅠ.height / 2 + ᅟ, -ᅠ.width, -ᅠ.height);
                ㅤﾠㅤㅤ.restore()
            }

            function ﾠᅠㅤᅠ(ㅤ) {
                ㅤﾠㅤㅤ.save();
                ㅤﾠㅤㅤ.translate(ㅤㅤᅟㅤ.WUF.x + ㅤ.x, ㅤㅤᅟㅤ.WUF.y + ㅤ.y);
                ㅤﾠㅤㅤ.rotate(ㅤ.angle);
                let ﾠ;
                let ᅟ;
                if(ㅤ[ㅤㅤᅟﾠ.hit][ㅤㅤᅟﾠ.update]) {
                    if(ㅤ[ㅤㅤᅟﾠ.hit][ㅤㅤᅟﾠ.anim][ㅤㅤᅟﾠ.update]() && ㅤ[ㅤㅤᅟﾠ.hit][ㅤㅤᅟﾠ.anim][ㅤㅤᅟﾠ.o] == false) {
                        ㅤ[ㅤㅤᅟﾠ.hit][ㅤㅤᅟﾠ.update] = false
                    }
                    let ᅠ = ㅤᅟﾠﾠ * ((1 - ㅤ[ㅤㅤᅟﾠ.hit][ㅤㅤᅟﾠ.anim][ㅤㅤᅟﾠ.v]) * 600);
                    ﾠ = ᅠ * Math.sin(ㅤ[ㅤㅤᅟﾠ.hit].angle - ㅤ.angle);
                    ᅟ = Math.cos(ㅤ[ㅤㅤᅟﾠ.hit].angle - ㅤ.angle) * ᅠ
                } else {
                    ﾠ = 0;
                    ᅟ = 0
                }
                let ᅠ;
                switch(ㅤ.type) {
                case ﾠㅤᅟﾠ.WOOD_DOOR:
                    ᅠ = [ㅤㅤᅟᅠ.WOOD_DOOR_ALLY, ㅤㅤᅟᅠ.WOOD_DOOR_ENEMY];
                    break;
                case ﾠㅤᅟﾠ.STONE_DOOR:
                    ᅠ = [ㅤㅤᅟᅠ.STONE_DOOR_ALLY, ㅤㅤᅟᅠ.STONE_DOOR_ENEMY];
                    break;
                case ﾠㅤᅟﾠ.GOLD_DOOR:
                    ᅠ = [ㅤㅤᅟᅠ.GOLD_DOOR_ALLY, ㅤㅤᅟᅠ.GOLD_DOOR_ENEMY];
                    break;
                case ﾠㅤᅟﾠ.DIAMOND_DOOR:
                    ᅠ = [ㅤㅤᅟᅠ.DIAMOND_DOOR_ALLY, ㅤㅤᅟᅠ.DIAMOND_DOOR_ENEMY];
                    break;
                case ﾠㅤᅟﾠ.AMETHYST_DOOR:
                    ᅠ = [ㅤㅤᅟᅠ.AMETHYST_DOOR_ALLY, ㅤㅤᅟᅠ.AMETHYST_DOOR_ENEMY];
                    break;
                case ﾠㅤᅟﾠ.REIDITE_DOOR:
                    ᅠ = [ㅤㅤᅟᅠ.REIDITE_DOOR_ALLY, ㅤㅤᅟᅠ.REIDITE_DOOR_ENEMY];
                    break;
                case ﾠㅤᅟﾠ.WOOD_DOOR_SPIKE:
                    ᅠ = [ㅤㅤᅟᅠ.SPIKED_WOOD_DOOR_ALLY, ㅤㅤᅟᅠ.SPIKED_WOOD_DOOR_ENEMY];
                    break;
                case ﾠㅤᅟﾠ.STONE_DOOR_SPIKE:
                    ᅠ = [ㅤㅤᅟᅠ.SPIKED_STONE_DOOR_ALLY, ㅤㅤᅟᅠ.SPIKED_STONE_DOOR_ENEMY];
                    break;
                case ﾠㅤᅟﾠ.GOLD_DOOR_SPIKE:
                    ᅠ = [ㅤㅤᅟᅠ.SPIKED_GOLD_DOOR_ALLY, ㅤㅤᅟᅠ.SPIKED_GOLD_DOOR_ENEMY];
                    break;
                case ﾠㅤᅟﾠ.DIAMOND_DOOR_SPIKE:
                    ᅠ = [ㅤㅤᅟᅠ.SPIKED_DIAMOND_DOOR_ALLY, ㅤㅤᅟᅠ.SPIKED_DIAMOND_DOOR_ENEMY];
                    break;
                case ﾠㅤᅟﾠ.AMETHYST_DOOR_SPIKE:
                    ᅠ = [ㅤㅤᅟᅠ.SPIKED_AMETHYST_DOOR_ALLY, ㅤㅤᅟᅠ.SPIKED_AMETHYST_DOOR_ENEMY];
                    break;
                case ﾠㅤᅟﾠ.REIDITE_DOOR_SPIKE:
                    ᅠ = [ㅤㅤᅟᅠ.SPIKED_REIDITE_DOOR_ALLY, ㅤㅤᅟᅠ.SPIKED_REIDITE_DOOR_ENEMY];
                    break;
                default:
                    break
                }
                ᅠ = ﾠᅟᅠᅠ(ㅤ[ㅤㅤᅟﾠ.pid]) ? ᅠ[0] : ᅠ[1];
                ﾠᅟﾠᅠ(ㅤﾠㅤㅤ, ᅠ, ᅠ.width / 2 + ﾠ, ᅠ.height / 2 + ᅟ, -ᅠ.width, -ᅠ.height);
                ㅤﾠㅤㅤ.restore()
            }

            function ﾠᅠﾠㅤ(ㅤ, ﾠ) {
                var ᅟ;
                var ﾠ = ﾠ[ㅤ];
                const ᅠ = ㅤㅤﾠﾠ.WTJ.items.find(ﾠ => {
                    if(ﾠ.name === ㅤ) {
                        return ﾠ
                    }
                });
                let ㅤㅤ;
                for(ᅟ in ᅠ) {
                    if(typeof ᅠ[ᅟ] == "number" && ᅟ !== "a" && ᅟ !== "b" && ᅟ !== "id") {
                        ㅤㅤ = ᅟ;
                        break
                    }
                }
                ᅠ[ㅤㅤ] = ﾠ;
                return ᅠ
            }

            function ﾠᅠﾠﾠ(ㅤ, ﾠ) {
                const ᅟ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                if(!ᅟ) {
                    return
                }
                const ᅠ = ㅤㅤᅟㅤ.WUF.x;
                const ㅤㅤ = ㅤㅤᅟㅤ.WUF.y;
                for(let ㅤﾠ = 0; ㅤﾠ < ㅤ.length; ++ㅤﾠ) {
                    const ㅤᅟ = ㅤ[ㅤﾠ];
                    ㅤﾠㅤㅤ.save();
                    ㅤﾠㅤㅤ.strokeStyle = ﾠ;
                    ㅤﾠㅤㅤ.lineWidth = 3.5;
                    ㅤﾠㅤㅤ.beginPath();
                    ㅤﾠㅤㅤ.moveTo(ᅠ + ᅟ.x, ㅤㅤ + ᅟ.y);
                    ㅤﾠㅤㅤ.lineTo(ᅠ + ㅤᅟ.x, ㅤㅤ + ㅤᅟ.y);
                    ㅤﾠㅤㅤ.stroke();
                    ㅤﾠㅤㅤ.restore()
                }
            }

            function ﾠᅠﾠᅟ() {
                return document.getElementById("chat_block").style.display == "inline-block" || document.getElementById("commandMainBox").style.display == "inline-block"
            }

            function ﾠᅠﾠᅠ(ㅤ) {
                if(ᅠᅟㅤ) {
                    console.log("Join Queued: " + ㅤ + "ms")
                }
                return new Promise(ᅟ => ﾠ.setTimeout(ᅟ, ㅤ));
                o
            }

            function ﾠᅠᅟㅤ(ㅤ, ﾠ, ᅟ, ᅠ, ㅤㅤ, ㅤﾠ, ㅤᅟ, ㅤᅠ, ﾠㅤ, ﾠﾠ, ﾠᅟ = 0) {
                let ﾠᅠ = document.createElement("canvas");
                let ᅟㅤ = ﾠᅠ.getContext("2d");
                ㅤﾠ = !ㅤﾠ ? 0 : ㅤﾠ * ㅤ;
                let ᅟﾠ;
                let ᅟᅟ;
                ᅟﾠ = Math.floor(ㅤ * ᅟ);
                ᅟㅤ.font = ᅟﾠ + "px Baloo Paaji";
                ᅟㅤ.lineJoin = "round";
                ㅤᅠ = ㅤᅠ * ㅤ;
                let ᅟᅠ = ㅤᅟ ? ㅤᅠ * 2 : 0;
                if(ﾠㅤ) {
                    ᅟᅟ = Math.min(ᅟㅤ.measureText(ﾠ).width + ㅤ * 2 + ᅟᅠ, ﾠㅤ)
                } else {
                    ᅟᅟ = ᅟㅤ.measureText(ﾠ).width + ㅤ * 2 + ᅟᅠ + ﾠᅟ * ㅤ * 2
                }
                ᅟﾠ = (ᅟﾠ + ㅤﾠ + ﾠᅟ) * ㅤ + ᅟᅠ;
                ﾠᅠ.width = ᅟᅟ;
                ﾠᅠ.heigh = ᅟﾠ;
                if(ㅤᅟ) {
                    ᅟㅤ.fillStyle = ㅤᅟ;
                    ᅟㅤᅟﾠ(ᅟㅤ, 0, 0, ᅟᅟ, ᅟﾠ, ㅤᅠ * 2);
                    ᅟㅤ.fill();
                    ᅟㅤ.translate(ㅤᅠ, ㅤᅠ)
                }
                ᅟㅤ.textBaseline = "middle";
                ᅟㅤ.font = ᅟ + "px Baloo Paaji";
                ᅟㅤ.lineJoin = "round";
                if(ㅤㅤ) {
                    ᅟㅤ.beginPath();
                    ᅟㅤ.fillStyle = ㅤㅤ;
                    ᅟㅤ.fillText(ﾠ, 0, ᅟﾠ / 2 + ㅤﾠ - ᅟᅠ / 2, ᅟᅟ)
                }
                ᅟㅤ.beginPath();
                if(ﾠﾠ) {
                    ᅟㅤ.strokeStyle = ﾠﾠ;
                    ᅟㅤ.lineWidth = ﾠᅟ;
                    ᅟㅤ.strokeText(ﾠ, ﾠᅟ, (ᅟﾠ - ᅟᅠ) / 2, ᅟᅟ)
                }
                ᅟㅤ.fillStyle = ᅠ;
                ᅟㅤ.fillText(ﾠ, ﾠᅟ, (ᅟﾠ - ᅟᅠ) / 2, ᅟᅟ);
                return ﾠᅠ
            }

            function ﾠᅠᅟﾠ(ㅤ) {
                var ﾠ = document.createElement("canvas");
                var ᅟ = ﾠ.getContext("2d");
                var ᅠ = ㅤ * 200;
                var ㅤㅤ = ㅤ * 270;
                var ㅤﾠ = ㅤ * 8;
                ﾠ.width = ᅠ;
                ﾠ.height = ㅤㅤ + 20;
                ᅟ.beginPath();
                ᅟㅤᅟﾠ(ᅟ, 0, 0, ㅤ * 200, ㅤㅤ - ㅤﾠ, ㅤﾠ);
                ᅟ.globalAlpha = 1;
                var ㅤᅟ = ﾠᅠᅟㅤ(ㅤ, "Leaderboard", 25, "#FFF");
                ᅟ.drawImage(ㅤᅟ, (ᅠ - ㅤᅟ.width) / 2, ㅤ * 5);
                return ﾠ
            }

            function ﾠᅠᅟᅟ(ㅤ) {
                if(ㅤ >= 3600) {
                    return (ㅤ / 3600).toFixed(2) + "h"
                }
                if(ㅤ >= 60) {
                    return (ㅤ / 60).toFixed(2) + "m"
                }
                return ㅤ + "s"
            }

            function ﾠᅠᅟᅠ(ㅤ = 15) {
                const ﾠ = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                let ᅟ = "";
                for(let ᅠ = 0; ᅠ < ㅤ; ᅠ++) {
                    const ㅤ = Math.floor(Math.random() * ﾠ.length);
                    ᅟ += ﾠ[ㅤ]
                }
                return ᅟ
            }

            function ﾠᅠᅠㅤ(ㅤ) {
                if(typeof ㅤ != "number") {
                    return "0"
                }
                if(ㅤ >= 1e4) {
                    var ﾠ = Math.floor(Math.log10(ㅤ)) - 2;
                    var ﾠ = Math.max(0, 3 - ﾠ);
                    var ᅟ = Math.floor(ㅤ / 1e3).toString();
                    if(ﾠ) {
                        for(var ᅠ = (ᅟ += "." + (ㅤ % 1e3 / 1e3).toString().substring(2).substring(0, ﾠ)).length - 1, ㅤㅤ = 0; ᅠ > 0 && ᅟ[ᅠ] == "0"; ᅠ--) {
                            ㅤㅤ++
                        }
                        if((ᅟ = ᅟ.substring(0, ᅟ.length - ㅤㅤ))[ᅟ.length - 1] == ".") {
                            ᅟ = ᅟ.substring(0, ᅟ.length - 1)
                        }
                    }
                    return ᅟ += "k"
                }
                return ㅤ.toString()
            }

            function ﾠᅠᅠﾠ() {
                if(!ㅤㅤᅟﾠ.update || ㅤㅤﾠﾠ.WSJ.translate.y == 0 || ㅤㅤﾠﾠ.WSJ.translate.x == 0 || ㅤㅤﾠㅤ.websocket.readyState != 1) {
                    return
                }
                for(let ㅤ = 0, ﾠ = [...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EXTRACTOR_MACHINE_STONE], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EXTRACTOR_MACHINE_GOLD], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EXTRACTOR_MACHINE_DIAMOND], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EXTRACTOR_MACHINE_AMETHYST], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EXTRACTOR_MACHINE_REIDITE], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EXTRACTOR_MACHINE_EMERALD], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EXTRACTOR_MACHINE_COPPER], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EXTRACTOR_MACHINE_IRON], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EXTRACTOR_MACHINE_TOPAZ], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EXTRACTOR_MACHINE_SAPPHIRE], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EXTRACTOR_MACHINE_JADE], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EXTRACTOR_MACHINE_RUBY], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EXTRACTOR_MACHINE_COAL], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EXTRACTOR_MACHINE_AQUAMARINE]], ᅟ = ﾠ.length; ㅤ < ᅟ; ㅤ++) {
                    let ᅟ = ﾠ[ㅤ];
                    ᅟ[ㅤㅤᅟﾠ.update]()
                }
                for(let ㅤ = 0, ﾠ = ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.BREAD_OVEN], ᅟ = ﾠ.length; ㅤ < ᅟ; ㅤ++) {
                    let ᅟ = ﾠ[ㅤ];
                    ᅟ[ㅤㅤᅟﾠ.update]()
                }
                for(let ㅤ = 0, ﾠ = ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.TOTEM], ᅟ = ﾠ.length; ㅤ < ᅟ; ㅤ++) {
                    let ᅟ = ﾠ[ㅤ];
                    ᅟ[ㅤㅤᅟﾠ.update]()
                }
                for(let ㅤ = 0, ﾠ = ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.WINDMILL], ᅟ = ﾠ.length; ㅤ < ᅟ; ㅤ++) {
                    let ᅟ = ﾠ[ㅤ];
                    ᅟ[ㅤㅤᅟﾠ.update]()
                }
                for(let ㅤ = 0, ﾠ = ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.FURNACE], ᅟ = ﾠ.length; ㅤ < ᅟ; ㅤ++) {
                    let ᅟ = ﾠ[ㅤ];
                    ᅟ[ㅤㅤᅟﾠ.update]()
                }
                for(let ㅤ = 0, ﾠ = ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.WELL], ᅟ = ﾠ.length; ㅤ < ᅟ; ㅤ++) {
                    let ᅟ = ﾠ[ㅤ];
                    ᅟ[ㅤㅤᅟﾠ.update]()
                }
                for(let ㅤ = 0, ﾠ = ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EMERALD_MACHINE], ᅟ = ﾠ.length; ㅤ < ᅟ; ㅤ++) {
                    let ᅟ = ﾠ[ㅤ];
                    ᅟ[ㅤㅤᅟﾠ.update]()
                }
            }

            function ﾠᅠᅠᅟ() {
                if(!ᅟㅤᅠ.Hidden.active) {
                    document.getElementById("shop_market").style.setProperty("opacity", Number(ᅟㅤᅠ.menuOpacity));
                    document.getElementById("option_in_game").style.setProperty("opacity", Number(ᅟㅤᅠ.menuOpacity));
                    document.getElementById("sure_delete").style.setProperty("opacity", Number(ᅟㅤᅠ.menuOpacity));
                    document.getElementById("cancel_sure_delete").style.setProperty("opacity", Number(ᅟㅤᅠ.menuOpacity));
                    document.getElementById("shop_starterkit").style.setProperty("opacity", Number(ᅟㅤᅠ.menuOpacity));
                    document.getElementById("recipe_craft").style.setProperty("opacity", Number(ᅟㅤᅠ.menuOpacity));
                    document.getElementById("home_craft").style.setProperty("opacity", Number(ᅟㅤᅠ.menuOpacity));
                    document.getElementById("chronoquest").style.setProperty("opacity", Number(ᅟㅤᅠ.menuOpacity));
                    document.getElementById("sign_window").style.setProperty("opacity", Number(ᅟㅤᅠ.menuOpacity));
                    document.getElementById("team_box").style.setProperty("opacity", Number(ᅟㅤᅠ.menuOpacity))
                } else {
                    document.getElementById("shop_market").style.setProperty("opacity", 1);
                    document.getElementById("option_in_game").style.setProperty("opacity", 1);
                    document.getElementById("sure_delete").style.setProperty("opacity", 1);
                    document.getElementById("cancel_sure_delete").style.setProperty("opacity", 1);
                    document.getElementById("shop_starterkit").style.setProperty("opacity", 1);
                    document.getElementById("recipe_craft").style.setProperty("opacity", 1);
                    document.getElementById("home_craft").style.setProperty("opacity", 1);
                    document.getElementById("chronoquest").style.setProperty("opacity", 1);
                    document.getElementById("sign_window").style.setProperty("opacity", 1);
                    document.getElementById("team_box").style.setProperty("opacity", 1)
                }
            }

            function ﾠᅠᅠᅠ(ㅤ) {
                ㅤﾠㅤㅤ.save();
                ㅤﾠㅤㅤ.globalAlpha = !ᅟㅤᅠ.Hidden.active && ㅤᅟᅠㅤ ? Number(ᅟㅤᅠ.vehicleOpacity) : 1;
                ㅤ();
                ㅤﾠㅤㅤ.restore()
            }
            const ᅟㅤㅤㅤ = {};
            const ᅟㅤㅤﾠ = {};

            function ᅟㅤㅤᅟ(ㅤ) {
                if(ᅟㅤᅠ.Hidden.active || !ㅤᅟᅠㅤ) {
                    return
                }
                if(ㅤ[ㅤㅤᅟﾠ.clothe] == ﾠㅤᅟᅠ.HOOD || ㅤ[ㅤㅤᅟﾠ.clothe] == ﾠㅤᅟᅠ.WINTER_HOOD || ㅤ[ㅤㅤᅟﾠ.ghost]) {
                    ㅤﾠㅤㅤ.save();
                    ㅤﾠㅤㅤ.translate(ㅤㅤᅟㅤ.WUF.x + ㅤ.x, ㅤㅤᅟㅤ.WUF.y + ㅤ.y);
                    const ﾠ = ㅤ[ㅤㅤᅟﾠ.pid];
                    const ᅟ = Object.values(ㅤㅤﾠᅠ.WTN[ﾠ])[0];
                    const ᅠ = ㅤㅤﾠᅠ.WTN[ﾠ].level;
                    const ㅤㅤ = "" + ﾠ + "_" + ᅟ + "";
                    const ㅤﾠ = "" + ﾠ + "_level_" + ᅠ + "";
                    let ㅤᅟ = ᅟㅤㅤㅤ[ㅤㅤ];
                    if(!ㅤᅟ) {
                        ㅤᅟ = ﾠᅠᅟㅤ(1, ᅟ, 20, ㅤ[ㅤㅤᅟﾠ.dist_winter] > 0 ? "#187484" : "#FFF", "#000", 2, null, null, 300);
                        ᅟㅤㅤㅤ[ㅤㅤ] = ㅤᅟ
                    }
                    let ㅤᅠ = Math.floor(-ㅤᅟ.width / 2);
                    let ﾠㅤ = Math.floor(-ㅤᅟ.height / 2 - 6);
                    ㅤﾠㅤㅤ.drawImage(ㅤᅟ, ㅤᅠ, ﾠㅤ);
                    let ﾠﾠ = ᅟㅤㅤﾠ[ㅤﾠ];
                    if(!ﾠﾠ) {
                        ﾠﾠ = ﾠᅠᅟㅤ(1, "[" + ᅠ + "]", 20, "#F9E8A2", "#000", 2, null, null, 50);
                        ᅟㅤㅤﾠ[ㅤﾠ] = ﾠﾠ
                    }
                    let ﾠᅟ = ㅤᅠ + ㅤᅟ.width + 5;
                    if(ᅠ > 0) {
                        ㅤﾠㅤㅤ.drawImage(ﾠﾠ, ﾠᅟ, ﾠㅤ)
                    }
                    ㅤﾠㅤㅤ.restore()
                }
            }

            function ᅟㅤㅤᅠ(ㅤ, ﾠ, ᅟ) {
                if(ㅤ[ㅤㅤᅟﾠ.vehicle] !== ﾠㅤᅟᅠ.PARROT && ㅤ[ㅤㅤᅟﾠ.vehicle] !== ﾠㅤᅟᅠ.GOLDEN_HEN && ㅤ[ㅤㅤᅟﾠ.vehicle] !== ﾠㅤᅟᅠ.BABY_DRAGON && ㅤ[ㅤㅤᅟﾠ.vehicle] !== ﾠㅤᅟᅠ.BABY_LAVA && ㅤ[ㅤㅤᅟﾠ.vehicle] !== ﾠㅤᅟᅠ.HAWK && ㅤ[ㅤㅤᅟﾠ.vehicle] !== ﾠㅤᅟᅠ.PLANE && ㅤ[ㅤㅤᅟﾠ.vehicle] !== ﾠㅤᅟᅠ.NIMBUS) {
                    if(ㅤ[ㅤㅤᅟﾠ.tower] === 0) {
                        if(ㅤ[ㅤㅤᅟﾠ.tower_fx] > .001) {
                            ᅟ = 1 + Math.min(1, Math.max(ㅤ[ㅤㅤᅟﾠ.tower_fx], 0) / 100) * .18;
                            ㅤﾠㅤㅤ.save();
                            ㅤﾠㅤㅤ.scale(ᅟ, ᅟ);
                            ㅤㅤᅟㅤ.WUF.x /= ᅟ;
                            ㅤㅤᅟㅤ.WUF.y /= ᅟ;
                            ㅤ.x /= ᅟ;
                            ㅤ.y /= ᅟ;
                            ㅤ.r.x /= ᅟ;
                            ㅤ.r.y /= ᅟ;
                            ﾠ();
                            ㅤㅤᅟㅤ.WUF.x *= ᅟ;
                            ㅤㅤᅟㅤ.WUF.y *= ᅟ;
                            ㅤ.x *= ᅟ;
                            ㅤ.y *= ᅟ;
                            ㅤ.r.x *= ᅟ;
                            ㅤ.r.y *= ᅟ;
                            ㅤﾠㅤㅤ.restore()
                        } else {
                            ﾠ()
                        }
                    }
                } else if(ㅤ[ㅤㅤᅟﾠ.speed] <= 180) {
                    ᅟ = 1 + Math.min(1, Math.max(ㅤ[ㅤㅤᅟﾠ.vehicle_fx5] - 30, 0) / 180) * .35;
                    ㅤﾠㅤㅤ.save();
                    ㅤﾠㅤㅤ.scale(ᅟ, ᅟ);
                    ㅤㅤᅟㅤ.WUF.x /= ᅟ;
                    ㅤㅤᅟㅤ.WUF.y /= ᅟ;
                    ㅤ.x /= ᅟ;
                    ㅤ.y /= ᅟ;
                    ㅤ.r.x /= ᅟ;
                    ㅤ.r.y /= ᅟ;
                    ﾠ();
                    ㅤㅤᅟㅤ.WUF.x *= ᅟ;
                    ㅤㅤᅟㅤ.WUF.y *= ᅟ;
                    ㅤ.x *= ᅟ;
                    ㅤ.y *= ᅟ;
                    ㅤ.r.x *= ᅟ;
                    ㅤ.r.y *= ᅟ;
                    ㅤﾠㅤㅤ.restore()
                }
                if(ㅤ[ㅤㅤᅟﾠ.tower] === 1 && (ㅤ[ㅤㅤᅟﾠ.speed] < 180 || ㅤ[ㅤㅤᅟﾠ.vehicle] !== ﾠㅤᅟᅠ.PARROT && ㅤ[ㅤㅤᅟﾠ.vehicle] !== ﾠㅤᅟᅠ.GOLDEN_HEN && ㅤ[ㅤㅤᅟﾠ.vehicle] !== ﾠㅤᅟᅠ.BABY_DRAGON && ㅤ[ㅤㅤᅟﾠ.vehicle] !== ﾠㅤᅟᅠ.BABY_LAVA && ㅤ[ㅤㅤᅟﾠ.vehicle] !== ﾠㅤᅟᅠ.NIMBUS && ㅤ[ㅤㅤᅟﾠ.vehicle] !== ﾠㅤᅟᅠ.HAWK && ㅤ[ㅤㅤᅟﾠ.vehicle] !== ﾠㅤᅟᅠ.PLANE)) {
                    ᅟ = 1 + Math.min(1, Math.max(ㅤ[ㅤㅤᅟﾠ.tower_fx], 0) / 100) * .18;
                    ㅤﾠㅤㅤ.save();
                    ㅤﾠㅤㅤ.scale(ᅟ, ᅟ);
                    ㅤㅤᅟㅤ.WUF.x /= ᅟ;
                    ㅤㅤᅟㅤ.WUF.y /= ᅟ;
                    ㅤ.x /= ᅟ;
                    ㅤ.y /= ᅟ;
                    ㅤ.r.x /= ᅟ;
                    ㅤ.r.y /= ᅟ;
                    ﾠ();
                    ㅤㅤᅟㅤ.WUF.x *= ᅟ;
                    ㅤㅤᅟㅤ.WUF.y *= ᅟ;
                    ㅤ.x *= ᅟ;
                    ㅤ.y *= ᅟ;
                    ㅤ.r.x *= ᅟ;
                    ㅤ.r.y *= ᅟ;
                    ㅤﾠㅤㅤ.restore()
                }
                if((ㅤ[ㅤㅤᅟﾠ.vehicle] === ﾠㅤᅟᅠ.PARROT || ㅤ[ㅤㅤᅟﾠ.vehicle] === ﾠㅤᅟᅠ.GOLDEN_HEN || ㅤ[ㅤㅤᅟﾠ.vehicle] === ﾠㅤᅟᅠ.BABY_DRAGON || ㅤ[ㅤㅤᅟﾠ.vehicle] === ﾠㅤᅟᅠ.BABY_LAVA || ㅤ[ㅤㅤᅟﾠ.vehicle] === ﾠㅤᅟᅠ.NIMBUS || ㅤ[ㅤㅤᅟﾠ.vehicle] === ﾠㅤᅟᅠ.HAWK || ㅤ[ㅤㅤᅟﾠ.vehicle] === ﾠㅤᅟᅠ.PLANE) && ㅤ[ㅤㅤᅟﾠ.speed] > 180) {
                    ᅟ = 1 + Math.min(1, Math.max(ㅤ[ㅤㅤᅟﾠ.vehicle_fx5] - 30, 0) / 180) * .35;
                    ㅤﾠㅤㅤ.save();
                    ㅤﾠㅤㅤ.scale(ᅟ, ᅟ);
                    ㅤㅤᅟㅤ.WUF.x /= ᅟ;
                    ㅤㅤᅟㅤ.WUF.y /= ᅟ;
                    ㅤ.x /= ᅟ;
                    ㅤ.y /= ᅟ;
                    ㅤ.r.x /= ᅟ;
                    ㅤ.r.y /= ᅟ;
                    ﾠ();
                    ㅤㅤᅟㅤ.WUF.x *= ᅟ;
                    ㅤㅤᅟㅤ.WUF.y *= ᅟ;
                    ㅤ.x *= ᅟ;
                    ㅤ.y *= ᅟ;
                    ㅤ.r.x *= ᅟ;
                    ㅤ.r.y *= ᅟ;
                    ㅤﾠㅤㅤ.restore()
                }
            }

            function ᅟㅤﾠㅤ(ㅤ, ﾠ, ᅟ) {
                if(ㅤ[ㅤㅤᅟﾠ.vehicle] !== ﾠㅤᅟᅠ.PARROT && ㅤ[ㅤㅤᅟﾠ.vehicle] !== ﾠㅤᅟᅠ.GOLDEN_HEN && ㅤ[ㅤㅤᅟﾠ.vehicle] !== ﾠㅤᅟᅠ.BABY_DRAGON && ㅤ[ㅤㅤᅟﾠ.vehicle] !== ﾠㅤᅟᅠ.BABY_LAVA && ㅤ[ㅤㅤᅟﾠ.vehicle] !== ﾠㅤᅟᅠ.HAWK && ㅤ[ㅤㅤᅟﾠ.vehicle] !== ﾠㅤᅟᅠ.PLANE && ㅤ[ㅤㅤᅟﾠ.vehicle] !== ﾠㅤᅟᅠ.NIMBUS) {
                    if(ㅤ[ㅤㅤᅟﾠ.tower] === 0) {
                        if(ㅤ[ㅤㅤᅟﾠ.tower_fx] > .001) {
                            ᅟ = 1 + Math.min(1, Math.max(ㅤ[ㅤㅤᅟﾠ.tower_fx], 0) / 100) * .18;
                            ㅤﾠㅤㅤ.save();
                            ㅤﾠㅤㅤ.globalAlpha = Number(ᅟㅤᅠ.vehicleOpacity);
                            ㅤﾠㅤㅤ.scale(ᅟ, ᅟ);
                            ㅤㅤᅟㅤ.WUF.x /= ᅟ;
                            ㅤㅤᅟㅤ.WUF.y /= ᅟ;
                            ㅤ.x /= ᅟ;
                            ㅤ.y /= ᅟ;
                            ㅤ.r.x /= ᅟ;
                            ㅤ.r.y /= ᅟ;
                            ﾠ();
                            ㅤㅤᅟㅤ.WUF.x *= ᅟ;
                            ㅤㅤᅟㅤ.WUF.y *= ᅟ;
                            ㅤ.x *= ᅟ;
                            ㅤ.y *= ᅟ;
                            ㅤ.r.x *= ᅟ;
                            ㅤ.r.y *= ᅟ;
                            ㅤﾠㅤㅤ.restore()
                        } else {
                            ﾠ()
                        }
                    }
                } else if(ㅤ[ㅤㅤᅟﾠ.speed] <= 180) {
                    ᅟ = 1 + Math.min(1, Math.max(ㅤ[ㅤㅤᅟﾠ.vehicle_fx5] - 30, 0) / 180) * .35;
                    ㅤﾠㅤㅤ.save();
                    ㅤﾠㅤㅤ.globalAlpha = Number(ᅟㅤᅠ.vehicleOpacity);
                    ㅤﾠㅤㅤ.scale(ᅟ, ᅟ);
                    ㅤㅤᅟㅤ.WUF.x /= ᅟ;
                    ㅤㅤᅟㅤ.WUF.y /= ᅟ;
                    ㅤ.x /= ᅟ;
                    ㅤ.y /= ᅟ;
                    ㅤ.r.x /= ᅟ;
                    ㅤ.r.y /= ᅟ;
                    ﾠ();
                    ㅤㅤᅟㅤ.WUF.x *= ᅟ;
                    ㅤㅤᅟㅤ.WUF.y *= ᅟ;
                    ㅤ.x *= ᅟ;
                    ㅤ.y *= ᅟ;
                    ㅤ.r.x *= ᅟ;
                    ㅤ.r.y *= ᅟ;
                    ㅤﾠㅤㅤ.restore()
                }
                if(ㅤ[ㅤㅤᅟﾠ.tower] === 1 && (ㅤ[ㅤㅤᅟﾠ.speed] < 180 || ㅤ[ㅤㅤᅟﾠ.vehicle] !== ﾠㅤᅟᅠ.PARROT && ㅤ[ㅤㅤᅟﾠ.vehicle] !== ﾠㅤᅟᅠ.GOLDEN_HEN && ㅤ[ㅤㅤᅟﾠ.vehicle] !== ﾠㅤᅟᅠ.BABY_DRAGON && ㅤ[ㅤㅤᅟﾠ.vehicle] !== ﾠㅤᅟᅠ.BABY_LAVA && ㅤ[ㅤㅤᅟﾠ.vehicle] !== ﾠㅤᅟᅠ.NIMBUS && ㅤ[ㅤㅤᅟﾠ.vehicle] !== ﾠㅤᅟᅠ.HAWK && ㅤ[ㅤㅤᅟﾠ.vehicle] !== ﾠㅤᅟᅠ.PLANE)) {
                    ᅟ = 1 + Math.min(1, Math.max(ㅤ[ㅤㅤᅟﾠ.tower_fx], 0) / 100) * .18;
                    ㅤﾠㅤㅤ.save();
                    ㅤﾠㅤㅤ.globalAlpha = Number(ᅟㅤᅠ.vehicleOpacity);
                    ㅤﾠㅤㅤ.scale(ᅟ, ᅟ);
                    ㅤㅤᅟㅤ.WUF.x /= ᅟ;
                    ㅤㅤᅟㅤ.WUF.y /= ᅟ;
                    ㅤ.x /= ᅟ;
                    ㅤ.y /= ᅟ;
                    ㅤ.r.x /= ᅟ;
                    ㅤ.r.y /= ᅟ;
                    ﾠ();
                    ㅤㅤᅟㅤ.WUF.x *= ᅟ;
                    ㅤㅤᅟㅤ.WUF.y *= ᅟ;
                    ㅤ.x *= ᅟ;
                    ㅤ.y *= ᅟ;
                    ㅤ.r.x *= ᅟ;
                    ㅤ.r.y *= ᅟ;
                    ㅤﾠㅤㅤ.restore()
                }
                if((ㅤ[ㅤㅤᅟﾠ.vehicle] === ﾠㅤᅟᅠ.PARROT || ㅤ[ㅤㅤᅟﾠ.vehicle] === ﾠㅤᅟᅠ.GOLDEN_HEN || ㅤ[ㅤㅤᅟﾠ.vehicle] === ﾠㅤᅟᅠ.BABY_DRAGON || ㅤ[ㅤㅤᅟﾠ.vehicle] === ﾠㅤᅟᅠ.BABY_LAVA || ㅤ[ㅤㅤᅟﾠ.vehicle] === ﾠㅤᅟᅠ.NIMBUS || ㅤ[ㅤㅤᅟﾠ.vehicle] === ﾠㅤᅟᅠ.HAWK || ㅤ[ㅤㅤᅟﾠ.vehicle] === ﾠㅤᅟᅠ.PLANE) && ㅤ[ㅤㅤᅟﾠ.speed] > 180) {
                    ᅟ = 1 + Math.min(1, Math.max(ㅤ[ㅤㅤᅟﾠ.vehicle_fx5] - 30, 0) / 180) * .35;
                    ㅤﾠㅤㅤ.save();
                    ㅤﾠㅤㅤ.globalAlpha = Number(ᅟㅤᅠ.vehicleOpacity);
                    ㅤﾠㅤㅤ.scale(ᅟ, ᅟ);
                    ㅤㅤᅟㅤ.WUF.x /= ᅟ;
                    ㅤㅤᅟㅤ.WUF.y /= ᅟ;
                    ㅤ.x /= ᅟ;
                    ㅤ.y /= ᅟ;
                    ㅤ.r.x /= ᅟ;
                    ㅤ.r.y /= ᅟ;
                    ﾠ();
                    ㅤㅤᅟㅤ.WUF.x *= ᅟ;
                    ㅤㅤᅟㅤ.WUF.y *= ᅟ;
                    ㅤ.x *= ᅟ;
                    ㅤ.y *= ᅟ;
                    ㅤ.r.x *= ᅟ;
                    ㅤ.r.y *= ᅟ;
                    ㅤﾠㅤㅤ.restore()
                }
            }

            function ᅟㅤﾠﾠ(ㅤ, ﾠ, ᅟ, ᅠ, ㅤㅤ, ㅤﾠ, ㅤᅟ, ㅤᅠ, ﾠㅤ, ﾠﾠ, ﾠᅟ, ﾠᅠ) {
                console.log(ㅤ, ﾠ, ᅠ, ㅤㅤ, ㅤﾠ, ㅤᅟ, ㅤᅠ, ﾠㅤ, ﾠﾠ, ﾠᅟ, ﾠᅠ);
                let ᅟㅤ = 0;
                for(let ᅟﾠ = 0; ᅟﾠ < Object.keys(ﾠ).length; ᅟﾠ++) {
                    const ᅟᅟ = Object.keys(ﾠ)[ᅟﾠ];
                    const ᅟᅠ = ﾠ[ᅟᅟ];
                    if(ﾠ[ᅠ]) {
                        ﾠﾠᅠﾠ.push(ㅤ + ᅠ);
                        if(ᅠᅟㅤ) {
                            return console.log('%cAssigned %c"' + ᅠ + '"%c To %c"' + ᅠ + '":', "color: lime;", "color: yellow;", "color: lime;", "color: yellow;", [ﾠ[ᅠ]])
                        } else {
                            return null
                        }
                    }
                    if(typeof ㅤㅤ === "function" && typeof ᅟᅠ === "function" && !ﾠﾠᅠﾠ.includes(ㅤ + ᅟᅟ)) {
                        let ㅤㅤ = ﾠﾠﾠﾠ(ᅟᅠ.toString());
                        if(ﾠㅤ && ㅤㅤ != ﾠㅤ && ﾠㅤ != "any") {
                            continue
                        }
                        const ﾠᅠ = ﾠᅟㅤﾠ(ᅟᅠ.toString());
                        let ᅟㅤ = ﾠᅟㅤᅟ(ﾠᅠ);
                        if(ᅟㅤ.toString().length > 300 || !ᅟㅤ.length) {
                            ᅟㅤ = []
                        }
                        const ᅠㅤ = ㅤﾠ.some(ㅤ => ᅟㅤ.some(ﾠ => ﾠ.includes(ㅤ))) || ᅟㅤ.length && ㅤﾠ[0] == "any";
                        const ᅠﾠ = ﾠᅟㅤㅤ(ᅟᅠ.toString());
                        const ᅠᅟ = ᅟᅠ.length;
                        const ᅠᅠ = ᅟᅠ.toString().includes(ﾠﾠ);
                        if((ﾠﾠ && ﾠﾠ.length && ᅠᅠ || !ﾠﾠ || !ﾠﾠ.length || ﾠﾠ == "none") && (ᅠㅤ || !ㅤﾠ[0] && ᅠㅤ === 0) && (ᅠᅟ === ㅤᅟ || ㅤᅟ == "any") && ((ㅤᅠ || ㅤᅠ == 0) && ᅠﾠ === ㅤᅠ || !ㅤᅠ && ㅤᅠ != 0 || ㅤᅠ == "any")) {
                            let ㅤﾠ = 25;
                            let ㅤᅟ = ﾠᅟ && ᅟᅠ ? Math.abs(ﾠᅟ.toString().length - ᅟᅠ.toString().length) : 0;
                            let ㅤᅠ = ㅤᅟ ? ㅤᅟ > ㅤﾠ ? "orange" : "lime" : "lime";
                            const ﾠㅤ = ﾠᅟ ? ﾠᅟﾠﾠ(ﾠᅟ.toString(), ᅟᅠ.toString()) : 100;
                            if(ᅠᅟㅤ && ﾠㅤ < 100) {
                                ㅤᅠ = "orange"
                            }
                            if(ᅠᅟㅤ) {
                                console.log('%cAssigned %c"' + ᅠ + '"%c To %c"' + ᅟᅟ + '":', "color: " + ㅤᅠ + ";", "color: yellow;", "color: " + ㅤᅠ + ";", "color: yellow;", ㅤᅟ > ㅤﾠ || ﾠㅤ < 100 ? ᅟᅠ.toString() : [ᅟᅠ], "L:", ㅤㅤ, "I", ᅟﾠ)
                            }
                            if(ᅠᅟㅤ && ﾠᅟ && ㅤᅟ > ㅤﾠ && ﾠㅤ == 100) {
                                console.log("%c[DIFFERENCE] --------" + "-".repeat(ᅠ.length) + "-".repeat(ᅟᅟ.length) + ">", "color: red;", ﾠᅟ, "D:", ㅤᅟ)
                            }
                            if(ﾠㅤ < 100) {
                                continue;
                                if(ᅠᅟㅤ) {
                                    console.log("%c[COMPARISON] --------" + "-".repeat(ᅠ.length) + "-".repeat(ᅟᅟ.length) + ">", "color: red;", ﾠᅟ, "C:", ﾠㅤ)
                                }
                            }
                            Object.defineProperty(ᅟ, ᅠ, {
                                get() {
                                    return ﾠ[ᅟᅟ]
                                },
                                set(ㅤ) {
                                    ﾠ[ᅟᅟ] = ㅤ
                                }
                            });
                            ﾠﾠᅠﾠ.push(ㅤ + ᅟᅟ);
                            ﾠﾠᅠᅟ.push([ㅤ + ᅠ, ᅟﾠ]);
                            return
                        }
                    }
                    if(Array.isArray(ᅟᅠ) && Array.isArray(ㅤㅤ) && (ﾠᅟﾠㅤ(ᅟᅠ) === ㅤﾠ || ㅤﾠ == "any") && !ﾠﾠᅠﾠ.includes(ㅤ + ᅟᅟ)) {
                        Object.defineProperty(ᅟ, ᅠ, {
                            get() {
                                return ﾠ[ᅟᅟ]
                            },
                            set(ㅤ) {
                                ﾠ[ᅟᅟ] = ㅤ
                            }
                        });
                        if(ᅠᅟㅤ) {
                            console.log('%cAssigned %c"' + ᅠ + '"%c To %c"' + ᅟᅟ + '":', "color: lime;", "color: yellow;", "color: lime;", "color: yellow;", ᅟᅠ)
                        }
                        ﾠﾠᅠﾠ.push(ㅤ + ᅟᅟ);
                        ﾠﾠᅠᅟ.push([ㅤ + ᅠ, ᅟﾠ]);
                        return
                    }
                    if(!Array.isArray(ㅤㅤ) && typeof ㅤㅤ === "object" && !Array.isArray(ᅟᅠ) && typeof ᅟᅠ === "object" && ﾠᅟㅤᅠ(ᅟᅠ, ㅤㅤ) && (ﾠᅟﾠㅤ(ᅟᅠ) === ㅤﾠ || ㅤﾠ == "any") && !ﾠﾠᅠﾠ.includes(ㅤ + ᅟᅟ)) {
                        Object.defineProperty(ᅟ, ᅠ, {
                            get() {
                                return ﾠ[ᅟᅟ]
                            },
                            set(ㅤ) {
                                ﾠ[ᅟᅟ] = ㅤ
                            }
                        });
                        if(ᅠᅟㅤ) {
                            console.log('%cAssigned %c"' + ᅠ + '"%c To %c"' + ᅟᅟ + '":', "color: lime;", "color: yellow;", "color: lime;", "color: yellow;", ᅟᅠ)
                        }
                        ﾠﾠᅠﾠ.push(ㅤ + ᅟᅟ);
                        ﾠﾠᅠᅟ.push([ㅤ + ᅠ, ᅟﾠ]);
                        return
                    }
                    if(typeof ㅤㅤ === "boolean" && typeof ᅟᅠ === "boolean" && ᅟᅠ === ㅤㅤ && !ﾠﾠᅠﾠ.includes(ㅤ + ᅟᅟ)) {
                        if(ﾠᅠ) {
                            ᅟㅤ++
                        }
                        if(ﾠᅠ && ﾠᅠ !== ᅟㅤ) {
                            continue
                        }
                        Object.defineProperty(ᅟ, ᅠ, {
                            get() {
                                return ﾠ[ᅟᅟ]
                            },
                            set(ㅤ) {
                                ﾠ[ᅟᅟ] = ㅤ
                            }
                        });
                        if(ᅠᅟㅤ) {
                            console.log('%cAssigned %c"' + ᅠ + '"%c To %c"' + ᅟᅟ + '":', "color: lime;", "color: yellow;", "color: lime;", "color: yellow;", ᅟᅠ)
                        }
                        ﾠﾠᅠﾠ.push(ㅤ + ᅟᅟ);
                        ﾠﾠᅠᅟ.push([ㅤ + ᅠ, ᅟﾠ]);
                        return
                    }
                    if(typeof ㅤㅤ === "number" && typeof ᅟᅠ === "number" && ᅟᅠ === ㅤㅤ && !ﾠﾠᅠﾠ.includes(ㅤ + ᅟᅟ) && ᅟᅠ === ㅤﾠ) {
                        if(ﾠᅠ) {
                            ᅟㅤ++
                        }
                        if(ﾠᅠ && ﾠᅠ !== ᅟㅤ) {
                            continue
                        }
                        Object.defineProperty(ᅟ, ᅠ, {
                            get() {
                                return ﾠ[ᅟᅟ]
                            },
                            set(ㅤ) {
                                ﾠ[ᅟᅟ] = ㅤ
                            }
                        });
                        if(ᅠᅟㅤ) {
                            console.log('%cAssigned %c"' + ᅠ + '"%c To %c"' + ᅟᅟ + '":', "color: lime;", "color: yellow;", "color: lime;", "color: yellow;", ᅟᅠ)
                        }
                        ﾠﾠᅠﾠ.push(ㅤ + ᅟᅟ);
                        ﾠﾠᅠᅟ.push([ㅤ + ᅠ, ᅟﾠ]);
                        return
                    }
                }
                if(ᅠᅟㅤ) {
                    console.log('%cFailed To Assign: %c"' + ᅠ + '"%c - No matching property found.', "color: red;", "color: yellow;", "color: red;")
                }
            }

            function ᅟㅤﾠᅟ(ㅤ, ﾠ, ᅟ, ᅠ, ㅤㅤ) {
                if(ﾠ[ᅠ]) {
                    return
                }
                let ㅤﾠ = 0;
                for(const ㅤᅟ in ﾠ) {
                    if(ㅤﾠ === ㅤㅤ) {
                        ﾠﾠᅠᅟ.push([ㅤ + ᅠ, ㅤㅤ]);
                        ﾠﾠᅠﾠ.push(ㅤ + ㅤᅟ);
                        Object.defineProperty(ᅟ, ᅠ, {
                            get() {
                                return ﾠ[ㅤᅟ]
                            },
                            set(ㅤ) {
                                ﾠ[ㅤᅟ] = ㅤ
                            }
                        });
                        if(ᅠᅟㅤ) {
                            if(typeof ﾠ[ㅤᅟ] === "function") {
                                console.log('%cAssigned %c"' + ᅠ + '"%c To %c"' + ㅤᅟ + '":', "color: lime;", "color: yellow;", "color: lime;", "color: yellow;", [ﾠ[ㅤᅟ]], "L:", ﾠﾠﾠﾠ(ﾠ[ㅤᅟ].toString()), "I:", ㅤㅤ)
                            } else {
                                console.log('%cAssigned %c"' + ᅠ + '"%c To %c"' + ㅤᅟ + '":', "color: lime;", "color: yellow;", "color: lime;", "color: yellow;", ﾠ[ㅤᅟ])
                            }
                        }
                        return
                    }
                    ㅤﾠ++
                }
                if(ᅠᅟㅤ) {
                    console.log('%cFailed To Assign: %c"' + ᅠ + '"%c To Index: %c+' + ㅤㅤ + "%c With Object:", "color: red;", "color: yellow;", "color: red;", "color: yellow;", "color: red;", ﾠ)
                }
            }

            function ᅟㅤﾠᅠ(ㅤ) {
                let ﾠ = new Image;
                ﾠ.src = ㅤ.toDataURL("image/png");
                ﾠ.width = ㅤ.width;
                ﾠ.height = ㅤ.height;
                ﾠ.isLoaded = 1;
                return ﾠ
            }

            function ᅟㅤᅟㅤ(ㅤ, ﾠ, ᅟ, ᅠ) {
                if(ﾠ) {
                    ㅤ.fillStyle = ﾠ;
                    ㅤ.fill()
                }
                if(ᅟ) {
                    ㅤ.lineWidth = ᅠ;
                    ㅤ.strokeStyle = ᅟ;
                    ㅤ.stroke()
                }
            }

            function ᅟㅤᅟﾠ(ㅤ, ﾠ, ᅟ, ᅠ, ㅤㅤ, ㅤﾠ) {
                if(ᅠ < ㅤﾠ * 2) {
                    ㅤﾠ = ᅠ / 2
                }
                if(ㅤㅤ < ㅤﾠ * 2) {
                    ㅤﾠ = ㅤㅤ / 2
                }
                if(ㅤﾠ < 0) {
                    ㅤﾠ = 0
                }
                ㅤ.beginPath();
                ㅤ.moveTo(ﾠ + ㅤﾠ, ᅟ);
                ㅤ.arcTo(ﾠ + ᅠ, ᅟ, ﾠ + ᅠ, ᅟ + ㅤㅤ, ㅤﾠ);
                ㅤ.arcTo(ﾠ + ᅠ, ᅟ + ㅤㅤ, ﾠ, ᅟ + ㅤㅤ, ㅤﾠ);
                ㅤ.arcTo(ﾠ, ᅟ + ㅤㅤ, ﾠ, ᅟ, ㅤﾠ);
                ㅤ.arcTo(ﾠ, ᅟ, ﾠ + ᅠ, ᅟ, ㅤﾠ);
                ㅤ.closePath()
            }

            function ﾠᅟᅟᅟ(ㅤ, ﾠ, ᅟ) {
                let ᅠ = document.createElement("canvas");
                let ㅤㅤ = ᅠ.getContext("2d");
                ᅠ.width = ㅤ * 248;
                ᅠ.height = ㅤ * 247;
                ㅤㅤ.save();
                ㅤㅤ.translate(ㅤ * 69.5, ㅤ * 145);
                ᅟㅤᅟﾠ(ㅤㅤ, ㅤ * -8.5, ㅤ * -63, ㅤ * 17, ㅤ * 127, ㅤ * 1);
                ㅤㅤ.restore();
                ᅟㅤᅟㅤ(ㅤㅤ, ᅟ[0]);
                ㅤㅤ.save();
                ㅤㅤ.translate(ㅤ * 183, ㅤ * 145);
                ᅟㅤᅟﾠ(ㅤㅤ, ㅤ * -8, ㅤ * -63, ㅤ * 16, ㅤ * 126, ㅤ * 1);
                ㅤㅤ.restore();
                ᅟㅤᅟㅤ(ㅤㅤ, ᅟ[0]);
                ㅤㅤ.save();
                ㅤㅤ.translate(ㅤ * 123.5, ㅤ * 62.5);
                ㅤㅤ.rotate(6.28);
                ᅟㅤᅟﾠ(ㅤㅤ, ㅤ * -84.5, ㅤ * -25.5, ㅤ * 169, ㅤ * 51, ㅤ * 5);
                ㅤㅤ.restore();
                ᅟㅤᅟㅤ(ㅤㅤ, ᅟ[2], ᅟ[1], ㅤ * 6);
                ㅤㅤ.save();
                ㅤㅤ.translate(ㅤ * 123.5, ㅤ * 118);
                ㅤㅤ.rotate(6.24);
                ᅟㅤᅟﾠ(ㅤㅤ, ㅤ * -85.5, ㅤ * -24, ㅤ * 169, ㅤ * 48, ㅤ * 5);
                ㅤㅤ.restore();
                ᅟㅤᅟㅤ(ㅤㅤ, ᅟ[3], ᅟ[1], ㅤ * 6);
                ㅤㅤ.save();
                ㅤㅤ.translate(ㅤ * 122, ㅤ * 177.5);
                ㅤㅤ.rotate(6.32);
                ᅟㅤᅟﾠ(ㅤㅤ, ㅤ * -84, ㅤ * -23.5, ㅤ * 169, ㅤ * 47, ㅤ * 5);
                ㅤㅤ.restore();
                ᅟㅤᅟㅤ(ㅤㅤ, ᅟ[2], ᅟ[1], ㅤ * 6);
                ㅤㅤ.beginPath();
                ㅤㅤ.lineCap = "round";
                ㅤㅤ.lineJoin = "round";
                ㅤㅤ.moveTo(ㅤ * 37, ㅤ * 157);
                ㅤㅤ.bezierCurveTo(ㅤ * 49, ㅤ * 160, ㅤ * 49, ㅤ * 160, ㅤ * 61, ㅤ * 163);
                ㅤㅤ.bezierCurveTo(ㅤ * 49.5, ㅤ * 165.5, ㅤ * 49.5, ㅤ * 165.5, ㅤ * 38, ㅤ * 168);
                ㅤㅤ.closePath();
                ᅟㅤᅟㅤ(ㅤㅤ, ᅟ[1]);
                ㅤㅤ.beginPath();
                ㅤㅤ.lineCap = "round";
                ㅤㅤ.lineJoin = "round";
                ㅤㅤ.moveTo(ㅤ * 205, ㅤ * 175);
                ㅤㅤ.bezierCurveTo(ㅤ * 192.5, ㅤ * 180, ㅤ * 192.5, ㅤ * 180, ㅤ * 180, ㅤ * 185);
                ㅤㅤ.bezierCurveTo(ㅤ * 193, ㅤ * 188, ㅤ * 193, ㅤ * 188, ㅤ * 206, ㅤ * 191);
                ㅤㅤ.closePath();
                ᅟㅤᅟㅤ(ㅤㅤ, ᅟ[1]);
                return ᅠ
            }

            function ﾠᅟᅟᅠ(ㅤ, ﾠ, ᅟ) {
                let ᅠ = document.createElement("canvas");
                let ㅤㅤ = ᅠ.getContext("2d");
                ᅠ.width = ㅤ * 248;
                ᅠ.height = ㅤ * 247;
                ㅤㅤ.save();
                ㅤㅤ.translate(ㅤ * 182, ㅤ * 120);
                ᅟㅤᅟﾠ(ㅤㅤ, ㅤ * -8, ㅤ * -67, ㅤ * 16, ㅤ * 134, ㅤ * 1);
                ㅤㅤ.restore();
                ᅟㅤᅟㅤ(ㅤㅤ, ᅟ[0]);
                ㅤㅤ.save();
                ㅤㅤ.translate(ㅤ * 68.5, ㅤ * 127.5);
                ᅟㅤᅟﾠ(ㅤㅤ, ㅤ * -8.5, ㅤ * -70.5, ㅤ * 17, ㅤ * 141, ㅤ * 1);
                ㅤㅤ.restore();
                ᅟㅤᅟㅤ(ㅤㅤ, ᅟ[0]);
                ㅤㅤ.save();
                ㅤㅤ.translate(ㅤ * 123.5, ㅤ * 68);
                ᅟㅤᅟﾠ(ㅤㅤ, ㅤ * -82.5, ㅤ * -24, ㅤ * 165, ㅤ * 48, ㅤ * 4);
                ㅤㅤ.restore();
                ᅟㅤᅟㅤ(ㅤㅤ, ᅟ[2], ᅟ[1], ㅤ * 6);
                ㅤㅤ.save();
                ㅤㅤ.translate(ㅤ * 123, ㅤ * 179.5);
                ᅟㅤᅟﾠ(ㅤㅤ, ㅤ * -83, ㅤ * -24.5, ㅤ * 166, ㅤ * 49, ㅤ * 4);
                ㅤㅤ.restore();
                ᅟㅤᅟㅤ(ㅤㅤ, ᅟ[2], ᅟ[1], ㅤ * 6);
                ㅤㅤ.save();
                ㅤㅤ.translate(ㅤ * 123.5, ㅤ * 123.5);
                ㅤㅤ.rotate(6.24);
                ᅟㅤᅟﾠ(ㅤㅤ, ㅤ * -82.5, ㅤ * -24.5, ㅤ * 165, ㅤ * 49, ㅤ * 4);
                ㅤㅤ.restore();
                ᅟㅤᅟㅤ(ㅤㅤ, ᅟ[3], ᅟ[1], ㅤ * 6);
                ㅤㅤ.beginPath();
                ㅤㅤ.lineCap = "round";
                ㅤㅤ.lineJoin = "round";
                ㅤㅤ.moveTo(ㅤ * 204, ㅤ * 112);
                ㅤㅤ.bezierCurveTo(ㅤ * 149, ㅤ * 121.5, ㅤ * 96, ㅤ * 130, ㅤ * 94, ㅤ * 131);
                ㅤㅤ.bezierCurveTo(ㅤ * 149.5, ㅤ * 127.5, ㅤ * 149.5, ㅤ * 127.5, ㅤ * 205, ㅤ * 124);
                ㅤㅤ.closePath();
                ᅟㅤᅟㅤ(ㅤㅤ, ᅟ[1]);
                return ᅠ
            }

            function ﾠᅟᅠㅤ(ㅤ, ﾠ, ᅟ) {
                let ᅠ = document.createElement("canvas");
                let ㅤㅤ = ᅠ.getContext("2d");
                ᅠ.width = ㅤ * 248;
                ᅠ.height = ㅤ * 247;
                ㅤㅤ.save();
                ㅤㅤ.translate(ㅤ * 183, ㅤ * 107);
                ᅟㅤᅟﾠ(ㅤㅤ, ㅤ * -8, ㅤ * -70.5, ㅤ * 16, ㅤ * 141, ㅤ * 1);
                ㅤㅤ.restore();
                ᅟㅤᅟㅤ(ㅤㅤ, ᅟ[0]);
                ㅤㅤ.save();
                ㅤㅤ.translate(ㅤ * 69.5, ㅤ * 110);
                ᅟㅤᅟﾠ(ㅤㅤ, ㅤ * -8.5, ㅤ * -71, ㅤ * 17, ㅤ * 143, ㅤ * 1);
                ㅤㅤ.restore();
                ᅟㅤᅟㅤ(ㅤㅤ, ᅟ[0]);
                ㅤㅤ.save();
                ㅤㅤ.translate(ㅤ * 123.5, ㅤ * 181);
                ᅟㅤᅟﾠ(ㅤㅤ, ㅤ * -84.5, ㅤ * -26, ㅤ * 169, ㅤ * 52, ㅤ * 5);
                ㅤㅤ.restore();
                ᅟㅤᅟㅤ(ㅤㅤ, ᅟ[2], ᅟ[1], ㅤ * 6);
                ㅤㅤ.beginPath();
                ㅤㅤ.lineCap = "round";
                ㅤㅤ.lineJoin = "round";
                ㅤㅤ.moveTo(ㅤ * 41, ㅤ * 95);
                ㅤㅤ.bezierCurveTo(ㅤ * 105, ㅤ * 96, ㅤ * 113, ㅤ * 99, ㅤ * 134, ㅤ * 102);
                ㅤㅤ.bezierCurveTo(ㅤ * 147, ㅤ * 106, ㅤ * 173, ㅤ * 100, ㅤ * 207, ㅤ * 105);
                ㅤㅤ.bezierCurveTo(ㅤ * 210, ㅤ * 105, ㅤ * 207, ㅤ * 140, ㅤ * 207, ㅤ * 154);
                ㅤㅤ.bezierCurveTo(ㅤ * 123.5, ㅤ * 151.5, ㅤ * 123.5, ㅤ * 151.5, ㅤ * 40, ㅤ * 149);
                ㅤㅤ.bezierCurveTo(ㅤ * 37, ㅤ * 145, ㅤ * 39, ㅤ * 95, ㅤ * 41, ㅤ * 96);
                ㅤㅤ.closePath();
                ᅟㅤᅟㅤ(ㅤㅤ, ᅟ[2], ᅟ[1], ㅤ * 6);
                ㅤㅤ.beginPath();
                ㅤㅤ.lineCap = "round";
                ㅤㅤ.lineJoin = "round";
                ㅤㅤ.moveTo(ㅤ * 68, ㅤ * 75);
                ㅤㅤ.bezierCurveTo(ㅤ * 54, ㅤ * 72.5, ㅤ * 54, ㅤ * 72.5, ㅤ * 40, ㅤ * 70);
                ㅤㅤ.bezierCurveTo(ㅤ * 38, ㅤ * 46, ㅤ * 40, ㅤ * 46, ㅤ * 53, ㅤ * 46);
                ㅤㅤ.bezierCurveTo(ㅤ * 201, ㅤ * 41, ㅤ * 201, ㅤ * 41, ㅤ * 201, ㅤ * 42);
                ㅤㅤ.bezierCurveTo(ㅤ * 211, ㅤ * 40, ㅤ * 208, ㅤ * 53, ㅤ * 208, ㅤ * 72);
                ㅤㅤ.bezierCurveTo(ㅤ * 209, ㅤ * 91, ㅤ * 210, ㅤ * 96, ㅤ * 194, ㅤ * 94);
                ㅤㅤ.bezierCurveTo(ㅤ * 119, ㅤ * 97, ㅤ * 119, ㅤ * 97, ㅤ * 44, ㅤ * 100);
                ㅤㅤ.bezierCurveTo(ㅤ * 39, ㅤ * 99, ㅤ * 40, ㅤ * 96, ㅤ * 40, ㅤ * 80);
                ㅤㅤ.bezierCurveTo(ㅤ * 54, ㅤ * 77.5, ㅤ * 54, ㅤ * 77.5, ㅤ * 68, ㅤ * 75);
                ㅤㅤ.closePath();
                ᅟㅤᅟㅤ(ㅤㅤ, ᅟ[3], ᅟ[1], ㅤ * 6);
                return ᅠ
            }

            function ﾠᅟᅠﾠ(ㅤ, ﾠ, ᅟ) {
                let ᅠ = document.createElement("canvas");
                let ㅤㅤ = ᅠ.getContext("2d");
                ᅠ.width = ㅤ * 248;
                ᅠ.height = ㅤ * 247;
                ㅤㅤ.save();
                ㅤㅤ.translate(ㅤ * 123.5, ㅤ * 62.5);
                ㅤㅤ.rotate(6.28);
                ㅤㅤ.rect(ㅤ * -84.5, ㅤ * -25.5, ㅤ * 169, ㅤ * 169);
                ㅤㅤ.restore();
                ᅟㅤᅟㅤ(ㅤㅤ, ᅟ[2]);
                return ᅠ
            }

            function ﾠᅟᅠᅟ() {
                ㅤㅤᅟᅠ.ROOF = [
                    [],
                    [],
                    [],
                    []
                ];
                ㅤㅤᅟᅠ.ROOF[0][0] = ᅟㅤﾠᅠ(ﾠᅟᅟᅟ(.59, true, ["#0d1b1c", "#44301b", "#57442a", "#523e26"]));
                ㅤㅤᅟᅠ.ROOF[0][1] = ᅟㅤﾠᅠ(ﾠᅟᅟᅟ(.59, true, ["#0c0c0d", "#062124", "#10373d", "#0f3333"]));
                ㅤㅤᅟᅠ.ROOF[1][0] = ᅟㅤﾠᅠ(ﾠᅟᅟᅠ(.59, true, ["#0d1b1c", "#44301b", "#57442a", "#523e26"]));
                ㅤㅤᅟᅠ.ROOF[1][1] = ᅟㅤﾠᅠ(ﾠᅟᅟᅠ(.59, true, ["#0c0c0d", "#062124", "#10373d", "#0f3333"]));
                ㅤㅤᅟᅠ.ROOF[2][0] = ᅟㅤﾠᅠ(ﾠᅟᅠㅤ(.59, true, ["#0d1b1c", "#44301b", "#57442a", "#523e26"]));
                ㅤㅤᅟᅠ.ROOF[2][1] = ᅟㅤﾠᅠ(ﾠᅟᅠㅤ(.59, true, ["#0c0c0d", "#062124", "#10373d", "#0f3333"]));
                ㅤㅤᅟᅠ.ROOF[3][0] = ᅟㅤﾠᅠ(ﾠᅟᅠﾠ(.59, true, ["#0d1b1c", "#57442a", "#57442a", "#523e26"]));
                ㅤㅤᅟᅠ.ROOF[3][1] = ᅟㅤﾠᅠ(ﾠᅟᅠﾠ(.59, true, ["#0c0c0d", "#10373d", "#10373d", "#0f3333"]))
            }
            ﾠᅟᅠᅟ();

            function ᅟㅤᅟᅟ(ㅤ, ﾠ, ᅟ, ᅠ) {
                ㅤ.beginPath();
                ㅤ.arc(ﾠ, ᅟ, ᅠ, 0, Math.PI * 2)
            }

            function ᅟㅤﾠᅠ(ㅤ) {
                var ﾠ = new Image;
                ﾠ.src = ㅤ.toDataURL("image/png");
                ﾠ.width = ㅤ.width;
                ﾠ.height = ㅤ.height;
                ﾠ.isLoaded = 1;
                return ﾠ
            }

            function ᅟㅤᅟᅠ() {
                if(ㅤㅤﾠㅤ.websocket !== ㅤㅤᅠﾠ && ㅤㅤﾠㅤ.websocket) {
                    if(ㅤㅤᅠﾠ) {
                        ㅤㅤᅠﾠ.close()
                    }
                    ᅟᅟᅠ = ㅤㅤﾠㅤ.websocket.onopen.bind(ㅤㅤﾠㅤ.websocket);
                    ᅟᅠㅤ = ㅤㅤﾠㅤ.websocket.send.bind(ㅤㅤﾠㅤ.websocket);
                    ᅟᅠﾠ = ㅤㅤﾠㅤ.websocket.close.bind(ㅤㅤﾠㅤ.websocket);
                    ㅤㅤᅠﾠ = ㅤㅤﾠㅤ.websocket;
                    ㅤㅤﾠㅤ.websocket.close = function (ㅤ) {
                        if(!ㅤᅟᅠㅤ && ㅤㅤﾠㅤ.websocket.readyState === 1) {
                            ᅟᅠﾠ()
                        }
                    };
                    ㅤㅤﾠㅤ.websocket.onclose = function (ㅤ) {
                        if(ㅤᅠㅤﾠ) {
                            ㅤㅤﾠﾠ.WTG(ㅤᅠㅤﾠ)
                        }
                        ㅤᅠㅤᅟ = {};
                        ㅤᅟᅠㅤ = 0;
                        ㅤﾠᅟﾠ = false;
                        ᅠᅟᅟ = false;
                        ㅤㅤㅤﾠ.waiting = false;
                        ﾠﾠᅠ = false
                    };
                    ㅤㅤﾠㅤ.websocket.onopen = function () {
                        ﾠﾠᅠ = false;
                        ㅤᅟᅠᅟ = true;
                        ㅤᅠﾠㅤ = 0;
                        ﾠﾠ = ᅟㅤᅠ.Aimbot.active;
                        ᅟᅟ = ᅟㅤᅠ.AutoFarm.active;
                        ᅟᅠ = ᅟㅤᅠ.AutoSpike.active;
                        ᅠㅤ = ᅟㅤᅠ.AutoCraft.active;
                        ᅠﾠ = ᅟㅤᅠ.AutoRecycle.active;
                        ᅠᅟ = ᅟㅤᅠ.AutoTotem.active;
                        ᅠᅠ = ㅤﾠㅤᅠ;
                        ㅤㅤㅤ = ᅟㅤᅠ.AutoFire.active;
                        ㅤㅤﾠ = ᅟㅤᅠ.AutoBuild.active;
                        ㅤㅤᅟ = ᅟㅤᅠ.AutoSteal.active;
                        ㅤㅤᅠ = ᅟㅤᅠ.SmartCraft.active;
                        ㅤﾠㅤ = ᅟㅤᅠ.AutoSeed.active;
                        ㅤﾠﾠ = ᅟㅤᅠ.AutoEmerald.active;
                        ᅟㅤᅠ.Aimbot.active = false;
                        ᅟㅤᅠ.AutoFarm.active = false;
                        ᅟㅤᅠ.AutoSpike.active = false;
                        ᅟㅤᅠ.AutoCraft.active = false;
                        ᅟㅤᅠ.AutoRecycle.active = false;
                        ᅟㅤᅠ.AutoTotem.active = false;
                        ㅤﾠㅤᅠ = false;
                        ᅟㅤᅠ.AutoFire.active = false;
                        ᅟㅤᅠ.AutoBuild.active = false;
                        ᅟㅤᅠ.AutoSteal.active = false;
                        ᅟㅤᅠ.SmartCraft.active = false;
                        ᅟㅤᅠ.AutoSeed.active = false;
                        ᅟㅤᅠ.AutoEmerald.active = false;
                        ᅟᅟᅠ()
                    };
                    ㅤㅤﾠㅤ.websocket.send = function (ㅤ) {
                        if(ㅤㅤﾠㅤ.websocket.readyState !== 1 || ﾠﾠᅟ) {
                            return
                        }
                        if(ᅠᅟᅟ && (ㅤㅤᅠㅤ.build || ㅤㅤᅠㅤ.build == 0) && typeof ㅤ === "string" && JSON.parse(ㅤ)[0] != ㅤㅤᅠㅤ.camera && JSON.parse(ㅤ)[0] != ㅤㅤᅠㅤ.build) {
                            return ᅟᅠㅤ(ㅤ)
                        }
                        if(typeof ㅤ === "string") {
                            let ᅠ = JSON.parse(ㅤ);
                            if(!ㅤᅟᅠㅤ && ᅠ[0] != ㅤㅤﾠᅟ.WTM.input.value) {
                                return
                            } else {
                                ㅤᅟᅠㅤ = true
                            }
                            if(!ㅤㅤᅠㅤ.camera && ㅤㅤᅠㅤ.camera != 0) {
                                if(ᅠ) {
                                    if(ᅠ.length == 3) {
                                        ㅤㅤᅠㅤ.camera = ᅠ[0]
                                    }
                                }
                            }
                            if(!ㅤㅤᅠㅤ.build && ㅤㅤᅠㅤ.build != 0) {
                                if(ᅠ) {
                                    if(ᅠ.length == 4) {
                                        ㅤㅤᅠㅤ.build = ᅠ[0];
                                        return
                                    }
                                }
                            }
                            switch(ᅠ[0]) {
                            case ㅤㅤᅠㅤ.build:
                                ﾠᅠᅠ = ᅠ[1];
                                if(ᅠ[1] === ﾠㅤᅟᅠ.TOTEM) {
                                    let ㅤﾠ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                                    ᅟㅤᅠ.totemOnMap.x = ㅤﾠ.x / (ㅤㅤﾠᅠ.__NW__ * 100);
                                    ᅟㅤᅠ.totemOnMap.y = ㅤﾠ.y / (ㅤㅤﾠᅠ.__NH__ * 100)
                                };
                                ᅟᅠㅤ(JSON.stringify(ᅠ));
                                break;
                            case ㅤㅤᅠㅤ.camera:
                                if(ㅤㅤﾠㅤ.websocket.readyState !== 1 || !ᅠᅟᅟ) {
                                    return
                                }
                                if(!ㅤㅤᅠㅤ.build && ㅤㅤᅠㅤ.build != 0) {
                                    ㅤㅤﾠㅤ.WQP()
                                }
                                let ㅤㅤ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                                ᅟㅤᅠ.increasedZoom = "Off";
                                if(ㅤㅤ && ㅤㅤ.x && ㅤㅤ.y && !ﾠﾠᅠ && devicePixelRatio <= .6 && ᅟㅤᅠ.increasedZoom == "Auto") {
                                    ﾠﾠᅠ = true;

                                    function ᅟ() {
                                        ﾠᅟㅤ = true;
                                        let ㅤ = 0;
                                        let ᅟ = ﾠ.setInterval(() => {
                                            if(ᅟㅤᅠ.increasedZoom == "Off" || devicePixelRatio > .6 && ᅟㅤᅠ.increasedZoom == "Auto") {
                                                ﾠﾠᅠ = false;
                                                if(ᅟ) {
                                                    ﾠ.clearInterval(ᅟ)
                                                }
                                                return
                                            }
                                            let ㅤㅤ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                                            if(!ㅤㅤ) {
                                                ﾠﾠᅠ = false;
                                                ﾠᅟㅤ = false;
                                                return
                                            }
                                            if(ㅤ >= 4) {
                                                ㅤ = 1
                                            } else {
                                                ㅤ += 1
                                            }
                                            ᅠ[1] = ㅤㅤ.x - (ㅤ == 1 || ㅤ == 4 ? 2100 : 0);
                                            ᅠ[2] = ㅤㅤ.y - (ㅤ == 1 || ㅤ == 2 ? 1400 : 0);
                                            ᅟᅠㅤ(JSON.stringify(ᅠ))
                                        }, 250)
                                    }
                                    ᅟ()
                                } else {
                                    let ㅤᅟ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                                    if(ㅤᅟ && Math.floor(ㅤᅟ.x / 100) <= 15) {
                                        ᅠ[1] += 200;
                                        ᅠ[2] += 180
                                    } else if(ㅤᅟ && ㅤㅤᅟᅟ.width - Math.floor(ㅤᅟ.x / 100) <= 15) {
                                        ᅠ[1] += 400;
                                        ᅠ[2] += 180
                                    } else {
                                        ᅠ[1] += 300;
                                        ᅠ[2] += 180
                                    }
                                    return ᅟᅠㅤ(JSON.stringify(ᅠ))
                                }
                                return;
                            case ㅤㅤﾠᅟ.WTM.input.value:
                                ㅤᅟᅠㅤ = 1;
                                ᅠᅟᅟ = true;
                                ᅠ[1] = 3840;
                                ᅠ[2] = 2160;
                                ᅠ[4] = ᅟㅤᅠ.localToken.Token;
                                ᅠ[5] = ᅟㅤᅠ.localToken.TokenID;
                                ᅟㅤᅠ.Aimbot.active = ﾠﾠ;
                                ᅟㅤᅠ.AutoFarm.active = ᅟᅟ;
                                ᅟㅤᅠ.AutoSpike.active = ᅟᅠ;
                                ᅟㅤᅠ.AutoCraft.active = ᅠㅤ;
                                ᅟㅤᅠ.AutoRecycle.active = ᅠﾠ;
                                ᅟㅤᅠ.AutoTotem.active = ᅠᅟ;
                                ㅤﾠㅤᅠ = ᅠᅠ;
                                ᅟㅤᅠ.AutoFire.active = ㅤㅤㅤ;
                                ᅟㅤᅠ.AutoBuild.active = ㅤㅤﾠ;
                                ᅟㅤᅠ.AutoSteal.active = ㅤㅤᅟ;
                                ᅟㅤᅠ.SmartCraft.active = ㅤㅤᅠ;
                                ᅟㅤᅠ.AutoSeed.active = ㅤﾠㅤ;
                                ᅟㅤᅠ.AutoEmerald.active = ㅤﾠﾠ;
                                if(ᅠᅟㅤ) {
                                    console.log("Spawn Packet", ᅠ)
                                }
                                return ᅟᅠㅤ(JSON.stringify(ᅠ));
                            case 16:
                                console.log(ᅠ);
                                return ᅟᅠㅤ(JSON.stringify(ᅠ));
                            default:
                                return ᅟᅠㅤ(ㅤ)
                            }
                        } else {
                            return ᅟᅠㅤ(ㅤ)
                        }
                    }
                }
            }

            function ᅟㅤᅠㅤ() {
                const ㅤ = setTimeout;
                setTimeout = function (ﾠ, ᅟ, ...ᅠ) {
                    if(arguments.length === 0) {
                        throw new Error("TypeError: Failed to execute 'setTimeout' on 'Window': 1 argument required, but only 0 present.")
                    }
                    if(ᅟ === 33 && !ᅟㅤᅠ.Hidden.active) {
                        ᅟ = 0
                    }
                    return ㅤ(ﾠ, ᅟ, ...ᅠ)
                };
                setTimeout.toString = function () {
                    return "setTimeout() { [native code] }"
                };
                let ﾠ;
                setTimeout.toString.toString = (ﾠ = function () {
                    return "function toString() { [native code] }"
                }).toString = ﾠ
            }
            async function ᅟㅤᅠﾠ() {
                if(!ᅠᅠᅟ) {
                    for(let ㅤㅤ = 0; ㅤㅤ < ﾠㅤ.length; ㅤㅤ++) {
                        if((ﾠㅤ[ㅤㅤ].connect || ﾠㅤ[ㅤㅤ].message || ﾠㅤ[ㅤㅤ].ping || ﾠㅤ[ㅤㅤ].timeout) && !ᅠᅠᅠ) {
                            ᅠᅠᅠ = ﾠㅤ[ㅤㅤ]
                        }
                        if((ﾠㅤ[ㅤㅤ].w || ﾠㅤ[ㅤㅤ].transition) && !ㅤㅤㅤᅟ) {
                            ㅤㅤㅤᅟ = ﾠㅤ[ㅤㅤ]
                        }
                        if((ﾠㅤ[ㅤㅤ].waiting || ﾠㅤ[ㅤㅤ].buttons || ﾠㅤ[ㅤㅤ].unlock) && !ㅤㅤㅤﾠ) {
                            ㅤㅤㅤﾠ = ﾠㅤ[ㅤㅤ]
                        }
                        if((ﾠㅤ[ㅤㅤ].alert || ﾠㅤ[ㅤㅤ].beta || ﾠㅤ[ㅤㅤ].control) && !ㅤㅤㅤᅠ) {
                            ㅤㅤㅤᅠ = ﾠㅤ[ㅤㅤ]
                        }
                        if(ﾠㅤ[ㅤㅤ].options && !ㅤㅤㅤㅤ) {
                            ㅤㅤㅤㅤ = ﾠㅤ[ㅤㅤ]
                        }
                    }
                }
                if(ᅠᅠᅠ && ㅤㅤㅤㅤ && ㅤㅤㅤﾠ && ㅤㅤㅤᅟ && ㅤㅤㅤᅠ && !ᅠᅠᅟ && document["defaultView"].js_beautify) {
                    ㅤㅤㅤﾠ.waiting = false;
                    let ㅤﾠ = performance.now();
                    ᅠᅠᅟ = true;
                    if(ㅤㅤᅠᅟ) {
                        ﾠ.clearInterval(ㅤㅤᅠᅟ)
                    }
                    if(ᅠᅟㅤ) {
                        console.log("%cCLIENT", "color: blue; font-size: 18px;")
                    }
                    ᅟㅤﾠᅟ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "websocket", 0);
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WRZ", function () {}, [], 0, 3, "any", "waiting");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WSA", function () {}, [], 1, 0, 3, "none", "function(bandage){hiddenUser.bandage=bandage;}");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WSB", function () {}, [], 1, 0, 3, "none", "function(blizzard){hiddenUser.blizzard=blizzard;}");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WSC", function () {}, [], 1, 0, 3, "none", "function(msg){this.new_alert(msg);}");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WSD", function () {}, [], 1, 0, 4, "none", "function(id){hiddenUser.auto_feed.delay=0;hiddenUser.craft.do_recycle(id);}");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WSE", function () {}, [], 1, 0, 4, "none", "function(id){hiddenUser.auto_feed.delay=0;hiddenUser.craft.do_craft(id);}");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WSF", function () {}, ["|"], 1, 0, 18, "none", 'function(msg){let id=msg[1];let players=hiddenWorld.players;players[id].nickname=msg[2];players[id].skin=msg[3];players[id].accessory=msg[4];players[id].baglook=msg[5];players[id].book=msg[6];players[id].crate=msg[7];players[id].dead=msg[8];players[id].level=msg[9];players[id].score=0;players[id].ldb_label=null;players[id].label=null;players[id].label_winter=null;players[id].alive=true;if(SHOW_ID===1)players[id].nickname+="|"+id;}');
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WSG", function () {}, [], 0, 0, 3, "stringify", "function(){this.socket[SENDWORD](WINDOW1[JSONWORD1].stringify([11]));}");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WSH", function () {}, [], 0, 0, 3, "EMPTY", "function(){this.new_alert(LANG[TEXT.EMPTY]);}");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WSI", function () {}, [], 1, 0, 4, "stringify", "function(id){this.socket[SENDWORD](WINDOW3[JSONWORD7].stringify([21,id]));hiddenUser.shop.open=false;}");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WSJ", function () {}, [], 7, 0, 9, "none", "function(life,food,cold,thirst,oxygen,warm,bandage){hiddenUser.gauges.l=life/100;hiddenUser.gauges.h=food/100;hiddenUser.gauges.c=cold/100;hiddenUser.gauges.t=thirst/100;hiddenUser.gauges.o=oxygen/100;hiddenUser.gauges.wa=warm/100;hiddenUser.bandage=bandage;}");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WSK", function () {}, [], 1, 0, 5, "none", "function(d){hiddenWorld.time=d;hiddenWorld.transition=true;audio.transition=1;}");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WSL", function () {}, [], 1, 0, 4, "mode", 'function(id){if(hiddenWorld.mode==WORLD.MODE_HUNGER_GAMES&&hiddenWorld.players[id].nickname!=="spectator")this.new_alert(hiddenWorld.players[id].nickname+LANG[TEXT.DEAD]);hiddenWorld.players[id].alive=false;}');
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WSM", function () {}, [], 1, 0, 4, "Uint16Array", "function(data){let ui16=new Uint16Array(data);player.cam.change(ui16[1],ui16[2]);}");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WSN", function () {}, [], 1, 0, 4, "Uint16Array", "function(data){let ui16=new Uint16Array(data);hiddenUser.cam.change(ui16[1],ui16[2]);}");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WSO", function () {}, [], 0, 0, 3, "stringify", "function(){this.socket[SENDWORD](WINDOW2[JSONWORD2].stringify([17,hiddenUser.resurrection.pid,hiddenUser.resurrection.iid,]));}");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WSP", function () {}, [], 2, 0, 3, "stringify", "function(windmill,n){this.socket[SENDWORD](WINDOW2[JSONWORD4].stringify([22,n,windmill.pid,windmill.iid]));}");
                    ᅟㅤﾠᅟ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WSR", ﾠﾠᅠᅠ("client", "WSP", ﾠﾠᅠᅟ) + 1);
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WSS", function () {}, [], 1, 0, 3, "stringify", "function(bread_oven){this.socket[SENDWORD](WINDOW5[JSONWORD5].stringify([26,bread_oven.pid,bread_oven.iid]));}");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WSQ", function () {}, [], 1, 0, 3, "stringify", "function(quest){this.socket[SENDWORD](WINDOW5[JSONWORD8].stringify([27,quest]));}");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WST", function () {}, [], 1, 0, 3, "stringify", "function(well){this.socket[SENDWORD](WINDOW4[JSONWORD2].stringify([30,well.pid,well.iid]));}");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WSU", function () {}, [], 2, 0, 3, "stringify", "function(extractor,n){this.socket[SENDWORD](WINDOW3[JSONWORD5].stringify([38,n,extractor.pid,extractor.iid,extractor.type,]));}");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WSV", function () {}, [], 2, 0, 3, "stringify", "function (furnace,n) {this.socket[SENDWORD]( WINDOW3[JSONWORD5].stringify([12,n,furnace.pid,furnace.iid]));}");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WSW", function () {}, [], 3, 0, 3, "stringify", "function(chest,id,n){this.socket[SENDWORD](WINDOW4[JSONWORD4].stringify([8,id,n,chest.pid,chest.iid]));}");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WSX", function () {}, [], 1, 0, 3, "stringify", "function(extractor){this.socket[SENDWORD](WINDOW5[JSONWORD5].stringify([37,extractor.pid,extractor.iid,extractor.type,]));}");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WSY", function () {}, [], 1, 0, 3, "stringify", "function(windmill){this.socket[SENDWORD](WINDOW5[JSONWORD5].stringify([23, windmill.pid, windmill.iid]));}");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WSZ", function () {}, [], 1, 0, 3, "stringify", "function(chest){this.socket[SENDWORD](WINDOW5[JSONWORD5].stringify([9, chest.pid, chest.iid]));}");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WQA", function () {}, [], 1, 0, 3, "stringify", "function(chest){this.socket[SENDWORD](WINDOW6[JSONWORD6].stringify([15,chest.pid,chest.iid]));}");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WQB", function () {}, [], 1, 0, 3, "stringify", "function(chest){this.socket[SENDWORD](WINDOW7[JSONWORD7].stringify([16,chest.iid]));}");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WQC", function () {}, [], 1, 0, 3, "stringify", "function(kick){_this.socket[SENDWORD](WINDOW8[JSONWORD8].stringify([20,hiddenUser.totem.id,hiddenUser.team[kick]]));}");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WQD", function () {}, [], 0, 0, 3, "stringify", "function(){_this.socket[SENDWORD](WINDOW9[JSONWORD9].stringify([18,hiddenUser.totem.pid,hiddenUser.totem.id]));}");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WQE", function () {}, [], 0, 0, 3, "stringify", "function(){_this.socket[SENDWORD](WINDOW10[JSONWORD10].stringify([19]));}");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "units", function () {}, [], 3, 1, "any", "none");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WQG", function () {}, [" ...", "... "], 1, 2, "any", "none");
                    ᅟㅤﾠᅟ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WQH", ﾠﾠᅠᅠ("client", "WQG", ﾠﾠᅠᅟ) - 1);
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WQI", function () {}, [], 1, 1, 8, "none", "function(id){if(hiddenUser.inv.max===hiddenUser.inv.can_select.length&&RECIPES[id].id2!==INV.BAG&&hiddenUser.inv.find_item(RECIPES[id].id2)==-1&&!hiddenUser.inv.free_place(RECIPES[id].r)){this.inv_full();return 0;}this.socket[SENDWORD](WINDOW1[JSONWORD1].stringify([7,id]));return 1;}");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WQJ", function () {}, [], 0, 0, 8, "none", "function () { hiddenUser.resurrection.open = false; hiddenUser.ghost.enabled = false; hiddenUser.ghost.delay = -1; hiddenUser.ghost.label = null; hiddenUser.ghost.sec = null; hiddenUser.ghost.now = -1; }");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WQK", function () {}, [], 1, 2, 13, "none");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WQL", function () {}, [], 2, 1, 5, "none", "function(id,n){hiddenUser.craft.preview=-1;hiddenUser.inv.decrease(id,n,hiddenUser.inv.find_item(id));hiddenUser.craft.update();}");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WQM", function () {}, [], 0, 0, 3, "stringify", "function(){this.socket[SENDWORD](WINDOW2[JSONWORD2].stringify([31]));}");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WQN", function () {}, [], 1, 0, 3, "stringify", "function(v){this.socket[SENDWORD](WINDOW3[JSONWORD3].stringify([32,v.val,v.id]));}");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WQO", function () {}, [], 2, 0, 3, "stringify", "function(id,symbol){this.socket[SENDWORD](WINDOW3[JSONWORD5].stringify([33,id,symbol]));}");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WQP", function () {}, [], 0, 0, 7, "stringify", "function(){let p=hiddenWorld.fast_units[hiddenUser.uid];if(p){let pi2=Math.PI*2;this.socket[SENDWORD](WINDOW3[JSONWORD3].stringify([10,hiddenUser.craft.preview,Math.floor((((p.angle+pi2)%pi2)*255)/pi2),hiddenUser.craft.mode,]));}}");
                    ᅟㅤﾠᅟ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WQR", ﾠﾠᅠᅠ("client", "WQP", ﾠﾠᅠᅟ) + 1);
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WQS", function () {}, [], 1, 0, 3, "stringify", "function(id){this.socket[SENDWORD](WINDOW3[JSONWORD1].stringify([6,id]));}");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WQQ", function () {}, [], 2, 0, 3, "stringify", "function(id,i){this.socket[SENDWORD](WINDOW1[JSONWORD7].stringify([29,id]));}");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WQT", function () {}, [], 0, 0, 3, "stringify", "function(){this.socket[SENDWORD](WINDOW2[JSONWORD2].stringify([14]));}");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WQU", function () {}, [], 1, 0, 4, "stringify", "function(angle) {let pi2=Math.PI*2;this.socket[SENDWORD]( WINDOW3[JSONWORD3].stringify([4,Math.floor((((angle+pi2)%pi2)*255)/pi2),]));}");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WQV", function () {}, [], 1, 0, 4, "stringify", "function(angle){let pi2=Math.PI*2;this.socket[SENDWORD](WINDOW3[JSONWORD3].stringify([3,Math.floor((((angle+pi2)%pi2)*255)/pi2),]));}");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WQW", function () {}, [], 1, 0, 3, "stringify", "function(move){this.socket[SENDWORD](WINDOW12[JSONWORD12].stringify([2,move]));}");
                    ᅟㅤﾠᅟ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WQX", ﾠﾠᅠᅠ("client", "WQW", ﾠﾠᅠᅟ) + 2);
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WQY", function () {}, [], 0, 2, 7, "none", "function(){hiddenUser.reconnect.enabled=true;if(this._current_id!=this.socket._current_id)return;this._current_id++;this.socket.close();hiddenClient.connect();}");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WQZ", function () {}, ["adsRefresh"], 2, 3, 17, "none");
                    ᅟㅤﾠᅟ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WTA", ﾠﾠᅠᅠ("client", "WQZ", ﾠﾠᅠᅟ) + 1);
                    ᅟㅤﾠᅟ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WTB", ﾠﾠᅠᅠ("client", "WTA", ﾠﾠᅠᅟ) + 3);
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WTC", function () {}, [], 0, 1, 4, "none", "function(){this.timeout_number=0;this.connect_timeout();}");
                    ᅟㅤﾠﾠ("client", ᅠᅠᅠ, ㅤㅤﾠㅤ, "WTD", function () {}, [], 1, 1, 8, "++");
                    if(ᅠᅟㅤ) {
                        console.log("%cGAME", "color: blue; font-size: 18px;")
                    }
                    ᅟㅤﾠﾠ("game", ㅤㅤㅤㅤ, ㅤㅤﾠﾠ, "WTE", function () {}, [], 0, 29, "any", "options.button");
                    ᅟㅤﾠﾠ("game", ㅤㅤㅤㅤ, ㅤㅤﾠﾠ, "WSJ", {
                        translate: {
                            x: 0,
                            y: 0
                        },
                        y: 0
                    }, 4);
                    ᅟㅤﾠﾠ("game", ㅤㅤㅤㅤ, ㅤㅤﾠﾠ, "WTF", [], 359);
                    ᅟㅤﾠﾠ("game", ㅤㅤㅤㅤ, ㅤㅤﾠﾠ, "WTG", function () {}, ["team_box", "shop_starterkit", "home_craft", "recipe_craft", "option_in_game", "sure_delete", "cancel_sure_delete", "chronoquest"], 1, 6);
                    ᅟㅤﾠﾠ("game", ㅤㅤㅤㅤ, ㅤㅤﾠﾠ, "drawGame", function () {}, [], 0, 1, "any", "none", "function(){draw_world_with_effect ();}");
                    ᅟㅤﾠﾠ("game", ㅤㅤㅤㅤ, ㅤㅤﾠﾠ, "WTI", {
                        translate: {
                            x: 0,
                            y: 0
                        },
                        focus: function () {}
                    }, 4);
                    ᅟㅤﾠﾠ("game", ㅤㅤㅤㅤ, ㅤㅤﾠﾠ, "WTJ", {
                        open: false,
                        select: function () {},
                        items: []
                    }, 10);
                    if(ᅠᅟㅤ) {
                        console.log("%cUI", "color: blue; font-size: 18px;")
                    }
                    ᅟㅤﾠﾠ("ui", ㅤㅤㅤﾠ, ㅤㅤﾠᅟ, "WTK", function () {}, [], 0, 2, 14, "check_ads");
                    ᅟㅤﾠﾠ("ui", ㅤㅤㅤﾠ, ㅤㅤﾠᅟ, "WTL", function () {}, ["token?id="], 2, 4, "any", "none");
                    ᅟㅤﾠﾠ("ui", ㅤㅤㅤﾠ, ㅤㅤﾠᅟ, "WTM", {
                        id: "any",
                        style: "any",
                        input: "any",
                        active: 0,
                        position: 0,
                        view: 0,
                        translate: {
                            x: 0,
                            y: 0
                        }
                    }, 7);
                    if(ᅠᅟㅤ) {
                        console.log("%cWORLD", "color: blue; font-size: 18px;")
                    }
                    ᅟㅤﾠﾠ("world", ㅤㅤㅤᅟ, ㅤㅤﾠᅠ, "WTN", [], "any");
                    ᅟㅤﾠﾠ("world", ㅤㅤㅤᅟ, ㅤㅤﾠᅠ, "units", [], "any");
                    ᅟㅤﾠﾠ("world", ㅤㅤㅤᅟ, ㅤㅤﾠᅠ, "fast_units", [], "any");
                    ﾠﾠᅠㅤ(ᅟㅤﾠﾠ, "world", ㅤㅤㅤᅟ, ㅤㅤﾠᅠ, "WTP", function () {}, ["any"], 1, 11, "any", "none").then(() => {
                        let ㅤ = ㅤㅤﾠᅠ.WTP.bind(ㅤㅤㅤᅟ);
                        ㅤㅤﾠᅠ.WTP = function (ﾠ) {
                            Object.keys(ﾠ).forEach((ᅟ, ᅠ) => {
                                if(ᅠ == 0) {
                                    ㅤㅤᅟﾠ.width = ᅟ
                                }
                                if(ᅠ == 1) {
                                    ㅤㅤᅟﾠ.height = ᅟ
                                }
                                if(ᅠ == 2) {
                                    ㅤㅤᅟᅟ.source = ﾠﾠﾠㅤ(ﾠ[ᅟ]);
                                    ㅤㅤᅟᅟ.width = ﾠ[ㅤㅤᅟﾠ.width];
                                    ㅤㅤᅟᅟ.height = ﾠ[ㅤㅤᅟﾠ.height];
                                    for(let ㅤ = 0; ㅤ < ﾠ[ㅤㅤᅟﾠ.width]; ㅤ++) {
                                        for(let ᅠ = 0; ᅠ < ﾠ[ㅤㅤᅟﾠ.height]; ᅠ++) {
                                            if(ﾠ[ᅟ][ᅠ][ㅤ]) {
                                                if(ﾠ[ᅟ][ᅠ][ㅤ].fod) {
                                                    ﾠ[ᅟ][ᅠ][ㅤ].fod = undefined
                                                } else if(ﾠ[ᅟ][ᅠ][ㅤ].fo) {
                                                    ﾠ[ᅟ][ᅠ][ㅤ].fo = undefined
                                                }
                                            }
                                        }
                                    }
                                }
                                ㅤ(ﾠ)
                            })
                        }
                    });
                    ᅟㅤﾠᅟ("world", ㅤㅤㅤᅟ, ㅤㅤﾠᅠ, "WTR", ﾠﾠᅠᅠ("world", "WTP", ﾠﾠᅠᅟ) + 3);
                    ᅟㅤﾠᅟ("world", ㅤㅤㅤᅟ, ㅤㅤﾠᅠ, "WTS", ﾠﾠᅠᅠ("world", "WTR", ﾠﾠᅠᅟ) + 1);
                    if(ᅠᅟㅤ) {
                        console.log("%cUSER", "color: blue; font-size: 18px;")
                    }
                    ᅟㅤﾠﾠ("user", ㅤㅤㅤᅠ, ㅤㅤᅟㅤ, "WSO", {}, 3);
                    ᅟㅤﾠﾠ("user", ㅤㅤㅤᅠ, ㅤㅤᅟㅤ, "WTQ", {}, 3);
                    ᅟㅤﾠﾠ("user", ㅤㅤㅤᅠ, ㅤㅤᅟㅤ, "WTT", {}, 5);
                    ᅟㅤﾠﾠ("user", ㅤㅤㅤᅠ, ㅤㅤᅟㅤ, "WTU", {}, 7);
                    Object.keys(ㅤㅤᅟㅤ.WTU).forEach((ㅤ, ﾠ) => {
                        if(ㅤㅤᅟㅤ.WTU[ㅤ] == -1) {
                            ㅤㅤᅟﾠ.iid = ㅤ
                        }
                    });
                    ᅟㅤﾠﾠ("user", ㅤㅤㅤᅠ, ㅤㅤᅟㅤ, "WTV", {}, 6);
                    ᅟㅤﾠﾠ("user", ㅤㅤㅤᅠ, ㅤㅤᅟㅤ, "WTW", {}, 2);
                    ᅟㅤﾠﾠ("user", ㅤㅤㅤᅠ, ㅤㅤᅟㅤ, "WTX", {}, 4);
                    ᅟㅤﾠﾠ("user", ㅤㅤㅤᅠ, ㅤㅤᅟㅤ, "WQK", {}, 5);
                    ᅟㅤﾠᅟ("userGhost", ㅤㅤᅟㅤ.WQK, ㅤㅤᅟㅤ.WQK, "WTY", 1);
                    ᅟㅤﾠﾠ("user", ㅤㅤㅤᅠ, ㅤㅤᅟㅤ, "WTZ", {}, 9);
                    ᅟㅤﾠﾠ("user", ㅤㅤㅤᅠ, ㅤㅤᅟㅤ, "WUA", {
                        rotate: "any",
                        enabled: "any"
                    }, 2);
                    ᅟㅤﾠﾠ("user", ㅤㅤㅤᅠ, ㅤㅤᅟㅤ, "WUB", [], 0);
                    ᅟㅤﾠﾠ("user", ㅤㅤㅤᅠ, ㅤㅤᅟㅤ, "WUC", {}, 5);
                    ᅟㅤﾠﾠ("user", ㅤㅤㅤᅠ, ㅤㅤᅟㅤ, "WUD", {}, 5);
                    ᅟㅤﾠﾠ("user", ㅤㅤㅤᅠ, ㅤㅤᅟㅤ, "WUE", {}, 2);
                    ᅟㅤﾠﾠ("user", ㅤㅤㅤᅠ, ㅤㅤᅟㅤ, "WUF", {}, 22);
                    ᅟㅤﾠᅟ("userCam", ㅤㅤᅟㅤ.WUF, ㅤㅤᅟㅤ.WUF, "WUG", 12);
                    ᅟㅤﾠᅟ("userCam", ㅤㅤᅟㅤ.WUF, ㅤㅤᅟㅤ.WUF, "WUH", 13);
                    ᅟㅤﾠᅟ("userCam", ㅤㅤᅟㅤ.WUF, ㅤㅤᅟㅤ.WUF, "WUI", 14);
                    ᅟㅤﾠᅟ("userCam", ㅤㅤᅟㅤ.WUF, ㅤㅤᅟㅤ.WUF, "WUJ", 15);
                    ᅟㅤﾠᅟ("userCam", ㅤㅤᅟㅤ.WUF, ㅤㅤᅟㅤ.WUF, "WUK", 16);
                    ᅟㅤﾠﾠ("user", ㅤㅤㅤᅠ, ㅤㅤᅟㅤ, "WUL", {}, 6);
                    ᅟㅤﾠᅟ("userControl", ㅤㅤᅟㅤ.WUL, ㅤㅤᅟㅤ.WUL, "WUG", 5);
                    ᅟㅤﾠﾠ("user", ㅤㅤㅤᅠ, ㅤㅤᅟㅤ, "WSJ", {}, 19);
                    ᅟㅤﾠᅟ("userGauges", ㅤㅤᅟㅤ.WSJ, ㅤㅤᅟㅤ.WSJ, "WUM", 0);
                    ᅟㅤﾠᅟ("userGauges", ㅤㅤᅟㅤ.WSJ, ㅤㅤᅟㅤ.WSJ, "WUN", 1);
                    ᅟㅤﾠᅟ("userGauges", ㅤㅤᅟㅤ.WSJ, ㅤㅤᅟㅤ.WSJ, "WUO", 2);
                    ᅟㅤﾠᅟ("userGauges", ㅤㅤᅟㅤ.WSJ, ㅤㅤᅟㅤ.WSJ, "WUP", 3);
                    ᅟㅤﾠᅟ("userGauges", ㅤㅤᅟㅤ.WSJ, ㅤㅤᅟㅤ.WSJ, "WUR", 4);
                    ᅟㅤﾠᅟ("userGauges", ㅤㅤᅟㅤ.WSJ, ㅤㅤᅟㅤ.WSJ, "WUS", 5);
                    ᅟㅤﾠﾠ("user", ㅤㅤㅤᅠ, ㅤㅤᅟㅤ, "WUQ", {
                        translate: {
                            x: 0,
                            y: 0
                        },
                        sort: function () {}
                    }, 7);
                    ᅟㅤﾠﾠ("ldb", ㅤㅤᅟㅤ.WUQ, ㅤㅤᅟㅤ.WUQ, "WUT", [], 0);
                    ᅟㅤﾠﾠ("user", ㅤㅤㅤᅠ, ㅤㅤᅟㅤ, "WUU", {}, 11);
                    ᅟㅤﾠᅟ("userInv", ㅤㅤᅟㅤ.WUU, ㅤㅤᅟㅤ.WUU, "WUV", 3);
                    ᅟㅤﾠᅟ("userInv", ㅤㅤᅟㅤ.WUU, ㅤㅤᅟㅤ.WUU, "WUW", 4);
                    ᅟㅤﾠᅟ("userInv", ㅤㅤᅟㅤ.WUU, ㅤㅤᅟㅤ.WUU, "WUX", 8);
                    ᅟㅤﾠﾠ("user", ㅤㅤㅤᅠ, ㅤㅤᅟㅤ, "WUY", {
                        enabled: false,
                        translate: {
                            x: 0,
                            y: 0
                        }
                    }, 5);
                    ᅟㅤﾠﾠ("user", ㅤㅤㅤᅠ, ㅤㅤᅟㅤ, "WUZ", {}, 18);
                    ᅟㅤﾠᅟ("userCraft", ㅤㅤᅟㅤ.WUZ, ㅤㅤᅟㅤ.WUZ, "WVA", 3);
                    ᅟㅤﾠᅟ("userCraft", ㅤㅤᅟㅤ.WUZ, ㅤㅤᅟㅤ.WUZ, "WVB", 4);
                    ᅟㅤﾠᅟ("userCraft", ㅤㅤᅟㅤ.WUZ, ㅤㅤᅟㅤ.WUZ, "WUP", 10);
                    ᅟㅤﾠﾠ("user", ㅤㅤㅤᅠ, ㅤㅤᅟㅤ, "WVC", {
                        add: function () {}
                    }, 5, "any", "any", "none");
                    ᅟㅤﾠᅟ("userDesert", ㅤㅤᅟㅤ.WVC, ㅤㅤᅟㅤ.WVC, "WVD", 1);
                    ᅟㅤﾠﾠ("user", ㅤㅤㅤᅠ, ㅤㅤᅟㅤ, "WVE", {
                        add: function () {}
                    }, 5, "any", "any", "none");
                    ᅟㅤﾠᅟ("userWinter", ㅤㅤᅟㅤ.WVE, ㅤㅤᅟㅤ.WVE, "WVD", 1);
                    ᅟㅤﾠﾠ("user", ㅤㅤㅤᅠ, ㅤㅤᅟㅤ, "WVF", 0, 0, "any", "any", "any", "any", "any", 4);
                    ᅟㅤﾠﾠ("user", ㅤㅤㅤᅠ, ㅤㅤᅟㅤ, "WVG", false, false, "any", "any", "any", "any", "any", 2);
                    ㅤᅟㅤ = true;
                    ﾠ.setInterval(ᅟㅤᅟᅠ, 0);
                    if(ᅠᅟㅤ) {
                        console.log("%cHooks Loaded --\x3e " + (performance.now() - ㅤﾠ).toFixed(2) + "ms", "color: lightblue; font-size: 18px;")
                    }
                    ᅟㅤᅠᅟ();
                    ㅤㅤᅠᅠ = document.getElementById("game_canvas");
                    ㅤﾠㅤㅤ = ㅤㅤᅠᅠ.getContext("2d");
                    ㅤﾠㅤﾠ = ㅤㅤᅠᅠ.width / 2;
                    ㅤﾠㅤᅟ = ㅤㅤᅠᅠ.height / 2;
                    ᅟﾠㅤᅠ();
                    for(let ㅤﾠᅠﾠ in ㅤㅤㅤㅤ) {
                        if(ㅤㅤㅤㅤ[ㅤﾠᅠﾠ] && typeof ㅤㅤㅤㅤ[ㅤﾠᅠﾠ] === "object" && ㅤㅤㅤㅤ[ㅤﾠᅠﾠ].translate && ㅤㅤㅤㅤ[ㅤﾠᅠﾠ].translate.x === 0 && ㅤㅤㅤㅤ[ㅤﾠᅠﾠ].translate.y === 0) {
                            for(let ㅤﾠᅠᅟ in ㅤㅤㅤㅤ[ㅤﾠᅠﾠ]) {
                                if(typeof ㅤㅤㅤㅤ[ㅤﾠᅠﾠ][ㅤﾠᅠᅟ] === "object" && ㅤㅤㅤㅤ[ㅤﾠᅠﾠ][ㅤﾠᅠᅟ].width === 200 && ㅤㅤㅤㅤ[ㅤﾠᅠﾠ][ㅤﾠᅠᅟ].height === 290) {
                                    ㅤㅤﾠﾠ.Leaderboard = ㅤﾠᅠﾠ;
                                    ㅤㅤﾠﾠ.LeaderboardImage = ㅤﾠᅠᅟ;
                                    break
                                }
                            }
                        }
                    }
                    let ㅤᅟ = ﾠᅠᅟﾠ(1);
                    ㅤㅤㅤㅤ[ㅤㅤﾠﾠ.Leaderboard][ㅤㅤﾠﾠ.LeaderboardImage] = ㅤᅟ;
                    const ㅤᅠ = ㅤㅤﾠㅤ.WQD.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WQD = function () {
                        let ㅤ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                        ᅟㅤᅠ.totemOnMap.x = ㅤ.x / (ㅤㅤﾠᅠ.__NW__ * 100);
                        ᅟㅤᅠ.totemOnMap.y = ㅤ.y / (ㅤㅤﾠᅠ.__NH__ * 100);
                        return ㅤᅠ.apply(this, arguments)
                    };
                    const ﾠﾠ = ㅤㅤﾠﾠ.WTE.bind(ㅤㅤㅤㅤ);

                    function ㅤ() {
                        let ㅤ = ㅤㅤᅟㅤ.WUQ;
                        let ﾠ = ㅤ.WUT;
                        let ᅟ = ㅤㅤﾠᅠ.WTN;
                        for(let ㅤ = 0; ㅤ < ﾠ.length; ㅤ++) {
                            let ᅠ = ᅟ[ﾠ[ㅤ]];
                            let ㅤㅤ = Object.values(ᅠ)[0];
                            let ㅤﾠ = Object.values(ᅠ)[13];
                            let ㅤᅟ = "blue";
                            let ㅤᅠ = ﾠᅟᅠᅠ(ﾠ[ㅤ]);
                            if(ㅤㅤﾠᅠ.mode === 1 && ㅤㅤ === "spectator" || !ㅤᅠ || ﾠ[ㅤ] === ㅤㅤㅤᅠ.id) {
                                continue
                            }
                            if(ㅤㅤﾠᅠ.mode === 2 && ᅠ[ㅤᅠᅟᅟ.skin] === 29) {
                                continue
                            }
                            if(ㅤㅤﾠᅠ.mode === 3 && ᅠ[ㅤᅠᅟᅟ.skin] === 28) {
                                ㅤᅟ = "#800080"
                            } else {
                                ㅤᅟ = "blue"
                            }
                            ㅤﾠㅤㅤ.drawImage(ﾠᅠᅟㅤ(1.5, "" + (ㅤ + 1), 15, ㅤᅟ), 168 + ㅤㅤᅟㅤ.WUY.translate.x, (ㅤㅤᅟㅤ.WUY.translate.y - 64 + ㅤ * 22) * 1);
                            if(!ᅠ.ldb_label) {
                                ᅠ.ldb_label = ﾠᅠᅟㅤ(1.5, ㅤㅤ, 15, ㅤᅟ, undefined, undefined, undefined, undefined, 110)
                            }
                            ㅤﾠㅤㅤ.drawImage(ᅠ.ldb_label, 187 + ㅤㅤᅟㅤ.WUY.translate.x, (ㅤㅤᅟㅤ.WUY.translate.y - 64 + ㅤ * 22) * 1);
                            ㅤﾠㅤㅤ.drawImage(ﾠᅠᅟㅤ(1.5, ﾠᅠᅠㅤ(ㅤﾠ), 15, ㅤᅟ), 304 + ㅤㅤᅟㅤ.WUY.translate.x, (ㅤㅤᅟㅤ.WUY.translate.y - 64 + ㅤ * 22) * 1)
                        }
                    }
                    ㅤㅤﾠﾠ.WTE = function () {
                        if(window.Math.floor.toString() !== "function floor() { [native code] }" || window.Math.ceil.toString() !== "function ceil() { [native code] }") {
                            window.Math.floor = window.Math.floor;
                            window.Math.ceil = window.Math.ceil
                        }
                        if(ᅟㅤᅠ.Hidden.active) {
                            let ㅤ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                            let ﾠ = ㅤㅤﾠᅠ.WTN[ㅤㅤᅟﾠ.uid / ㅤㅤᅟﾠ.max_units];
                            if(ㅤ && ﾠ) {
                                if(ㅤ[ㅤᅠᅟᅟ.skin] != ㅤᅠᅠᅟ) {
                                    ㅤ[ㅤᅠᅟᅟ.skin] = ㅤᅠᅠᅟ
                                }
                                if(ㅤ[ㅤᅠᅟᅟ.bag] != ㅤᅠᅠﾠ) {
                                    ㅤ[ㅤᅠᅟᅟ.bag] = ㅤᅠᅠﾠ
                                }
                                if(ㅤ[ㅤᅠᅟᅟ.acc] != ㅤᅠᅠㅤ) {
                                    ㅤ[ㅤᅠᅟᅟ.acc] = ㅤᅠᅠㅤ
                                }
                                if(ㅤ[ㅤᅠᅟᅟ.book] != ㅤᅠᅟᅠ) {
                                    ㅤ[ㅤᅠᅟᅟ.book] = ㅤᅠᅟᅠ
                                }
                                if(ﾠ[ㅤᅠᅟᅟ.skin] != ㅤᅠᅠᅟ) {
                                    ﾠ[ㅤᅠᅟᅟ.skin] = ㅤᅠᅠᅟ
                                }
                                if(ﾠ[ㅤᅠᅟᅟ.bag] != ㅤᅠᅠﾠ) {
                                    ﾠ[ㅤᅠᅟᅟ.bag] = ㅤᅠᅠﾠ
                                }
                                if(ﾠ[ㅤᅠᅟᅟ.acc] != ㅤᅠᅠㅤ) {
                                    ﾠ[ㅤᅠᅟᅟ.acc] = ㅤᅠᅠㅤ
                                }
                                if(ﾠ[ㅤᅠᅟᅟ.book] != ㅤᅠᅟᅠ) {
                                    ﾠ[ㅤᅠᅟᅟ.book] = ㅤᅠᅟᅠ
                                }
                            }
                        } else {
                            let ㅤ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                            let ﾠ = ㅤㅤﾠᅠ.WTN[ㅤㅤᅟﾠ.uid / ㅤㅤᅟﾠ.max_units];
                            if(ㅤ && ﾠ && ㅤᅠᅠᅠ) {
                                if(ㅤ[ㅤᅠᅟᅟ.skin] != ᅟㅤᅠ.skinChanger.skin && ᅟㅤᅠ.skinChanger.active) {
                                    ㅤ[ㅤᅠᅟᅟ.skin] = ᅟㅤᅠ.skinChanger.skin
                                }
                                if(ㅤ[ㅤᅠᅟᅟ.bag] != ᅟㅤᅠ.bagChanger.bag && ᅟㅤᅠ.bagChanger.active) {
                                    ㅤ[ㅤᅠᅟᅟ.bag] = ᅟㅤᅠ.bagChanger.bag
                                }
                                if(ㅤ[ㅤᅠᅟᅟ.acc] != ᅟㅤᅠ.accChanger.acc && ᅟㅤᅠ.accChanger.active) {
                                    ㅤ[ㅤᅠᅟᅟ.acc] = ᅟㅤᅠ.accChanger.acc
                                }
                                if(ㅤ[ㅤᅠᅟᅟ.book] != ᅟㅤᅠ.bookChanger.book && ᅟㅤᅠ.bookChanger.active) {
                                    ㅤ[ㅤᅠᅟᅟ.book] = ᅟㅤᅠ.bookChanger.book
                                }
                                if(ﾠ[ㅤᅠᅟᅟ.skin] != ᅟㅤᅠ.skinChanger.skin && ᅟㅤᅠ.skinChanger.active) {
                                    ﾠ[ㅤᅠᅟᅟ.skin] = ᅟㅤᅠ.skinChanger.skin
                                }
                                if(ﾠ[ㅤᅠᅟᅟ.bag] != ᅟㅤᅠ.bagChanger.bag && ᅟㅤᅠ.bagChanger.active) {
                                    ﾠ[ㅤᅠᅟᅟ.bag] = ᅟㅤᅠ.bagChanger.bag
                                }
                                if(ﾠ[ㅤᅠᅟᅟ.acc] != ᅟㅤᅠ.accChanger.acc && ᅟㅤᅠ.accChanger.active) {
                                    ﾠ[ㅤᅠᅟᅟ.acc] = ᅟㅤᅠ.accChanger.acc
                                }
                                if(ﾠ[ㅤᅠᅟᅟ.book] != ᅟㅤᅠ.bookChanger.book && ᅟㅤᅠ.bookChanger.active) {
                                    ﾠ[ㅤᅠᅟᅟ.book] = ᅟㅤᅠ.bookChanger.book
                                }
                            }
                        }
                        ㅤﾠㅤㅤ.beginPath();
                        let ﾠ = ㅤㅤᅟㅤ.WUY.translate.x;
                        ᅟㅤᅟﾠ(ㅤﾠㅤㅤ, ᅟㅤᅠ.showLeaderBoardLevels && !ᅟㅤᅠ.Hidden.active ? ﾠ + 132 : ﾠ + 152, ㅤㅤᅟㅤ.WUY.translate.y - 95, ᅟㅤᅠ.showLeaderBoardLevels && !ᅟㅤᅠ.Hidden.active ? 220 : 200, 262, 8);
                        ㅤﾠㅤㅤ.globalAlpha = .5;
                        ᅟㅤᅟㅤ(ㅤﾠㅤㅤ, "#1D6055");
                        ㅤﾠㅤㅤ.globalAlpha = 1;
                        ﾠﾠ.apply(this, arguments);
                        if(ᅟㅤᅠ.drawLeaderboardAllies && !ᅟㅤᅠ.Hidden.active) {
                            ㅤ()
                        }
                        const ᅟ = ᅟㅤᅠ.totemOnMap.active && ᅟㅤᅠ.totemOnMap.x != 0 && ᅟㅤᅠ.totemOnMap.y != 0 && !ᅟㅤᅠ.Hidden.active;
                        const ᅠ = ᅟㅤᅠ.deathOnMap.active && ᅟㅤᅠ.deathOnMap.x != 0 && ᅟㅤᅠ.deathOnMap.y != 0 && !ᅟㅤᅠ.Hidden.active;
                        if(ᅟ || ᅠ) {
                            ㅤﾠㅤㅤ.save();
                            const ㅤ = ㅤㅤᅟㅤ.WUU.WUW.length > 0 ? -120 : -50;
                            const ﾠ = {
                                x: ㅤㅤﾠﾠ.WTI.translate.x,
                                y: ㅤㅤﾠﾠ.WTI.translate.y + ㅤ
                            };
                            if(ᅟ) {
                                ㅤﾠㅤㅤ.fillStyle = "blue";
                                ᅟㅤᅟᅟ(ㅤﾠㅤㅤ, ﾠ.x + ᅟㅤᅠ.totemOnMap.x * 193, ﾠ.y + ᅟㅤᅠ.totemOnMap.y * 193, 4);
                                ㅤﾠㅤㅤ.fill()
                            }
                            if(ᅠ) {
                                ㅤﾠㅤㅤ.fillStyle = "black";
                                ᅟㅤᅟᅟ(ㅤﾠㅤㅤ, ﾠ.x + ᅟㅤᅠ.deathOnMap.x * 193, ﾠ.y + ᅟㅤᅠ.deathOnMap.y * 193, 4);
                                ㅤﾠㅤㅤ.fill()
                            }
                            if(ㅤㅤᅟㅤ.WVG) {
                                const ㅤ = ㅤㅤᅟㅤ.WUF.WUJ / 2 - 300;
                                const ﾠ = ㅤㅤᅟㅤ.WUF.WUK / 2 - 300;
                                if(ᅟ) {
                                    ㅤﾠㅤㅤ.fillStyle = "blue";
                                    ᅟㅤᅟᅟ(ㅤﾠㅤㅤ, ㅤ + ᅟㅤᅠ.totemOnMap.x * 600, ﾠ + ᅟㅤᅠ.totemOnMap.y * 600, 12);
                                    ㅤﾠㅤㅤ.fill()
                                }
                                if(ᅠ) {
                                    ㅤﾠㅤㅤ.fillStyle = "black";
                                    ᅟㅤᅟᅟ(ㅤﾠㅤㅤ, ㅤ + ᅟㅤᅠ.deathOnMap.x * 600, ﾠ + ᅟㅤᅠ.deathOnMap.y * 600, 12);
                                    ㅤﾠㅤㅤ.fill()
                                }
                            }
                            ㅤﾠㅤㅤ.restore()
                        }
                    };
                    const ﾠᅟ = ㅤﾠㅤㅤ.drawImage;
                    ㅤﾠㅤㅤ.drawImage = function (...ㅤ) {
                        if(ㅤ.length === 0) {
                            throw new Error("TypeError: 3 arguments requires, but only 0 present.")
                        }
                        if(ᅟㅤᅠ.Xray.active) {
                            if(ㅤㅤᅟﾠ.update && ㅤㅤﾠﾠ.WSJ.translate.y !== 0 && ㅤㅤﾠﾠ.WSJ.translate.x !== 0 && ㅤㅤﾠㅤ.websocket.readyState === 1) {
                                this.globalAlpha = ᅟㅤᅠ.Xray.opacity
                            }
                        }
                        return ﾠᅟ.apply(this, ㅤ)
                    };
                    ㅤﾠㅤㅤ.drawImage.toString = function () {
                        return "drawImage() { [native code] }"
                    };
                    let ﾠᅠ;
                    ㅤﾠㅤㅤ.drawImage.toString.toString = (ﾠᅠ = function () {
                        return "function toString() { [native code] }"
                    }).toString = ﾠᅠ;
                    async function ᅟ(ㅤ, ᅟ, ᅠ, ㅤㅤ = 10, ㅤﾠ = 100) {
                        while(ㅤ[ᅟ] === 0 && ㅤﾠ > 0) {
                            ㅤﾠ--;
                            await new Promise(ㅤ => ﾠ.setTimeout(ㅤ, ㅤㅤ))
                        }
                        if(ᅠᅟㅤ) {
                            console.log("Updated Data", ㅤ, ᅟ, ㅤ[ᅟ])
                        }
                        return ᅠ()
                    }
                    let ᅟㅤ = ㅤㅤﾠㅤ.WTB.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WTB = function (ㅤ) {
                        ㅤᅠᅠᅠ = 0;
                        if(ᅟㅤᅠ.timePlayed.resetClock) {
                            ᅟㅤᅠ.timePlayed.start = Date.now();
                            ᅟㅤᅠ.timePlayed.resetClock = false
                        }
                        if(ᅠᅟㅤ) {
                            console.log(ㅤ[4])
                        }
                        let ᅠ = 10;
                        let ㅤㅤ = 11;
                        let ㅤﾠ = 12;
                        let ㅤᅟ = 13;
                        ㅤ[4].forEach(ﾠ => {
                            if(ﾠ.i === ㅤ[9]) {
                                ㅤᅠᅟᅠ = ﾠ.b;
                                ㅤᅠᅠㅤ = ﾠ.a;
                                ㅤᅠᅠﾠ = ﾠ.g;
                                ㅤᅠᅠᅟ = ﾠ.s;
                                ﾠ.b = ᅠ;
                                ﾠ.a = ㅤㅤ;
                                ﾠ.g = ㅤﾠ;
                                ㅤᅟ = ﾠ.s === 28 ? 28 : 13;
                                ﾠ.s = ㅤᅟ
                            }
                        });
                        ﾠㅤﾠᅟ();
                        ﾠㅤﾠᅠ();
                        ﾠㅤᅟㅤ();
                        ㅤᅠㅤᅠ = ㅤ[24];
                        ㅤ[24] = "";
                        ㅤㅤᅟﾠ.blizzard = 0;
                        ㅤㅤᅟﾠ.bandage = 0;
                        ㅤㅤᅟﾠ.time = ㅤ[5];
                        ㅤㅤᅟﾠ.max_units = ㅤ[7];
                        ㅤㅤᅟﾠ.uid = ㅤ[9] * ㅤㅤᅟﾠ.max_units;
                        if(ㅤㅤㅤᅠ) {
                            ㅤㅤᅟㅤ.WUF.WUH = document.documentElement.clientWidth;
                            ㅤㅤᅟㅤ.WUF.WUI = document.documentElement.clientHeight
                        }
                        if(ㅤﾠﾠᅠ) {
                            ﾠ.clearInterval(ㅤﾠﾠᅠ);
                            ㅤﾠﾠᅠ = 0;
                            ㅤﾠﾠᅟ = 0;
                            ㅤﾠﾠᅠ = ﾠ.setInterval(ᅟﾠㅤᅟ, 5e3)
                        } else {
                            ㅤﾠﾠᅠ = ﾠ.setInterval(ᅟﾠㅤᅟ, 5e3)
                        }
                        ㅤﾠㅤᅠ = 0;
                        ㅤﾠᅟᅟ = document["defaultView"]["Date"]["now"]();
                        ᅟㅤ(ㅤ);
                        ㅤㅤㅤﾠ.waiting = false;
                        ㅤᅠㅤᅟ = {};
                        if(ㅤ[12] !== 0) {
                            ᅟㅤᅠ.localToken.TokenID = ㅤ[12].toString()
                        }
                        ㅤㅤﾠᅠ.__NW__ = ㅤ[20];
                        ㅤㅤﾠᅠ.__NH__ = ㅤ[21];
                        ᅠﾠㅤ.saveSettings();
                        document.cookie = "starve_token=" + ᅟㅤᅠ.localToken.Token;
                        document.cookie = "starve_token_id=" + ᅟㅤᅠ.localToken.TokenID;
                        ﾠᅠᅠᅟ();
                        let ㅤᅠ = ㅤㅤﾠᅠ.WTN[ㅤ[9]];
                        for(let ㅤ in ㅤᅠ) {
                            let ﾠㅤ = ㅤᅠ[ㅤ];
                            if(ﾠㅤ === ㅤᅟ) {
                                ㅤᅠᅟᅟ.skin = ㅤ;
                                ㅤᅠ[ㅤ] = ㅤᅠᅠᅟ;
                                ᅟ(ㅤᅠ, ㅤ, async () => {
                                    let ᅟ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                                    while(!ᅟ) {
                                        ᅟ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                                        await new Promise(ㅤ => ﾠ.setTimeout(ㅤ, 10))
                                    }
                                    ㅤᅠᅠᅟ = ᅟ[ㅤ];
                                    if(ᅟㅤᅠ.skinChanger.active) {
                                        ㅤᅠ[ㅤ] = ᅟㅤᅠ.skinChanger.skin;
                                        ᅟ[ㅤ] = ᅟㅤᅠ.skinChanger.skin
                                    }
                                })
                            } else if(ﾠㅤ === ㅤﾠ) {
                                ㅤᅠᅟᅟ.bag = ㅤ;
                                ㅤᅠ[ㅤ] = ㅤᅠᅠﾠ;
                                ᅟ(ㅤᅠ, ㅤ, async () => {
                                    let ᅟ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                                    while(!ᅟ) {
                                        ᅟ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                                        await new Promise(ㅤ => ﾠ.setTimeout(ㅤ, 10))
                                    }
                                    ㅤᅠᅠﾠ = ᅟ[ㅤ];
                                    if(ᅟㅤᅠ.bagChanger.active) {
                                        ㅤᅠ[ㅤ] = ᅟㅤᅠ.bagChanger.bag;
                                        ᅟ[ㅤ] = ᅟㅤᅠ.bagChanger.bag
                                    }
                                })
                            } else if(ﾠㅤ === ㅤㅤ) {
                                ㅤᅠᅟᅟ.acc = ㅤ;
                                ㅤᅠ[ㅤ] = ㅤᅠᅠㅤ;
                                ᅟ(ㅤᅠ, ㅤ, async () => {
                                    let ᅟ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                                    while(!ᅟ) {
                                        ᅟ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                                        await new Promise(ㅤ => ﾠ.setTimeout(ㅤ, 10))
                                    }
                                    ㅤᅠᅠㅤ = ᅟ[ㅤ];
                                    if(ᅟㅤᅠ.accChanger.active) {
                                        ㅤᅠ[ㅤ] = ᅟㅤᅠ.accChanger.acc;
                                        ᅟ[ㅤ] = ᅟㅤᅠ.accChanger.acc
                                    }
                                })
                            } else if(ﾠㅤ === ᅠ) {
                                ㅤᅠᅟᅟ.book = ㅤ;
                                ㅤᅠ[ㅤ] = ㅤᅠᅟᅠ;
                                ᅟ(ㅤᅠ, ㅤ, async () => {
                                    let ᅟ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                                    while(!ᅟ) {
                                        ᅟ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                                        await new Promise(ㅤ => ﾠ.setTimeout(ㅤ, 10))
                                    }
                                    ㅤᅠᅟᅠ = ᅟ[ㅤ];
                                    if(ᅟㅤᅠ.bookChanger.active) {
                                        ㅤᅠ[ㅤ] = ᅟㅤᅠ.bookChanger.book;
                                        ᅟ[ㅤ] = ᅟㅤᅠ.bookChanger.book
                                    }
                                })
                            }
                        }
                        ﾠ.setTimeout(() => {
                            ㅤᅠᅠᅠ = 1
                        }, 2500)
                    };
                    let ᅟﾠ = ㅤㅤﾠㅤ.WSA.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WSA = function (ㅤ) {
                        ㅤㅤᅟﾠ.bandage = ㅤ;
                        ᅟﾠ(ㅤ)
                    };
                    let ᅟᅟ = ㅤㅤﾠㅤ.WSB.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WSB = function (ㅤ) {
                        ㅤㅤᅟﾠ.blizzard = ㅤ;
                        ᅟᅟ(ㅤ)
                    };
                    ᅠㅤᅟ = ㅤㅤﾠㅤ.WQR.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WQR = function (ㅤ, ﾠ) {
                        let ᅟ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                        if(ᅟ) {
                            if(!ᅟ[ㅤㅤᅟﾠ.fly]) {
                                let ﾠ = false;
                                switch(ㅤ) {
                                case ﾠㅤᅟᅠ.PLANE:
                                    ㅤㅤᅟﾠ.flyableEquiped = ﾠㅤᅟᅠ.PLANE;
                                    ﾠ = true;
                                    break;
                                case ﾠㅤᅟᅠ.HAWK:
                                    ㅤㅤᅟﾠ.flyableEquiped = ﾠㅤᅟᅠ.HAWK;
                                    ﾠ = true;
                                    break;
                                case ﾠㅤᅟᅠ.BABY_DRAGON:
                                    ㅤㅤᅟﾠ.flyableEquiped = ﾠㅤᅟᅠ.BABY_DRAGON;
                                    ﾠ = true;
                                    break;
                                case ﾠㅤᅟᅠ.GOLDEN_HEN:
                                    ㅤㅤᅟﾠ.flyableEquiped = ﾠㅤᅟᅠ.GOLDEN_HEN;
                                    ﾠ = true;
                                    break;
                                case ﾠㅤᅟᅠ.PARROT:
                                    ㅤㅤᅟﾠ.flyableEquiped = ﾠㅤᅟᅠ.PARROT;
                                    ﾠ = true;
                                    break;
                                case ﾠㅤᅟᅠ.BABY_LAVA:
                                    ㅤㅤᅟﾠ.flyableEquiped = ﾠㅤᅟᅠ.BABY_LAVA;
                                    ﾠ = true;
                                    break;
                                case ﾠㅤᅟᅠ.NIMBUS:
                                    ㅤㅤᅟﾠ.flyableEquiped = ﾠㅤᅟᅠ.NIMBUS;
                                    ﾠ = true;
                                    break;
                                case ﾠㅤᅟᅠ.BOAT:
                                    ㅤㅤᅟﾠ.flyableEquiped = ﾠㅤᅟᅠ.BOAT;
                                    ﾠ = true;
                                    break
                                }
                                if(ᅟㅤᅠ.AutoHat.active) {
                                    if(ᅟ[ㅤㅤᅟﾠ.vehicle] != ㅤㅤᅟﾠ.flyableEquiped && ﾠ) {
                                        if(ㅤㅤᅟﾠ.flyableEquiped == ﾠㅤᅟᅠ.NIMBUS && ᅟ[ㅤㅤᅟﾠ.clothe] != ﾠㅤᅟᅠ.WITCH) {
                                            ㅤㅤﾠㅤ.WQR(ﾠㅤᅟᅠ.WITCH)
                                        } else if(ㅤㅤᅟﾠ.flyableEquiped == ﾠㅤᅟᅠ.BOAT && ᅟ[ㅤㅤᅟﾠ.clothe] != ﾠㅤᅟᅠ.PIRATE_HAT) {
                                            ㅤㅤﾠㅤ.WQR(ﾠㅤᅟᅠ.PIRATE_HAT)
                                        } else if(ㅤㅤᅟﾠ.flyableEquiped != ﾠㅤᅟᅠ.NIMBUS && ᅟ[ㅤㅤᅟﾠ.clothe] != ﾠㅤᅟᅠ.PILOT_HELMET) {
                                            ㅤㅤﾠㅤ.WQR(ﾠㅤᅟᅠ.PILOT_HELMET)
                                        }
                                    }
                                }
                            }
                        }
                        ᅠㅤᅟ(ㅤ, ﾠ)
                    };
                    let ᅟᅠ = ㅤㅤﾠㅤ.WQJ.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WQJ = function () {
                        if(ᅟㅤᅠ.AutoCrown.active) {
                            if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.CROWN_BLUE]) {
                                ᅠㅤᅟ(ﾠㅤᅟᅠ.CROWN_BLUE)
                            }
                            let ㅤ = 0;
                            if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.HAMMER_REIDITE]) {
                                ㅤ = ﾠㅤᅟᅠ.HAMMER_REIDITE
                            } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.HAMMER_AMETHYST]) {
                                ㅤ = ﾠㅤᅟᅠ.HAMMER_AMETHYST
                            } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.HAMMER_DIAMOND]) {
                                ㅤ = ﾠㅤᅟᅠ.HAMMER_DIAMOND
                            } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.HAMMER_GOLD]) {
                                ㅤ = ﾠㅤᅟᅠ.HAMMER_GOLD
                            } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.HAMMER]) {
                                ㅤ = ﾠㅤᅟᅠ.HAMMER
                            }
                            if(ㅤ) {
                                ᅠㅤᅟ(ㅤ)
                            }
                            ᅟᅠ()
                        } else {
                            ᅟᅠ()
                        }
                    };
                    let ᅠㅤ = ㅤㅤﾠㅤ.WQP.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WQP = function () {
                        let ㅤ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                        if(ㅤ) {
                            ﾠㅤᅠᅟ.E = true
                        }
                        switch(ㅤㅤᅟㅤ.WUZ.WVB) {
                        case ﾠㅤᅟᅠ.SEED:
                            ﾠﾠﾠ = ﾠㅤᅟᅠ.SEED;
                            break;
                        case ﾠㅤᅟᅠ.WHEAT_SEED:
                            ﾠﾠﾠ = ﾠㅤᅟᅠ.WHEAT_SEED;
                            break;
                        case ﾠㅤᅟᅠ.TOMATO_SEED:
                            ﾠﾠﾠ = ﾠㅤᅟᅠ.TOMATO_SEED;
                            break;
                        case ﾠㅤᅟᅠ.GARLIC_SEED:
                            ﾠﾠﾠ = ﾠㅤᅟᅠ.GARLIC_SEED;
                            break;
                        case ﾠㅤᅟᅠ.CARROT_SEED:
                            ﾠﾠﾠ = ﾠㅤᅟᅠ.CARROT_SEED;
                            break;
                        case ﾠㅤᅟᅠ.PUMPKIN_SEED:
                            ﾠﾠﾠ = ﾠㅤᅟᅠ.PUMPKIN_SEED;
                            break;
                        case ﾠㅤᅟᅠ.THORNBUSH_SEED:
                            ﾠﾠﾠ = ﾠㅤᅟᅠ.THORNBUSH_SEED;
                            break;
                        case ﾠㅤᅟᅠ.ALOE_VERA_SEED:
                            ﾠﾠﾠ = ﾠㅤᅟᅠ.ALOE_VERA_SEED;
                            break
                        }
                        ᅠㅤ()
                    };
                    let ᅠﾠ = ㅤㅤﾠㅤ.WSH.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WSH = function () {
                        ᅠﾠ();
                        if(ᅟㅤᅠ.AutoEmerald.active) {
                            ﾠﾠㅤ++;
                            if(ﾠﾠㅤ > 2) {
                                ﾠﾠㅤ = 0
                            }
                        }
                    };
                    let ᅠᅟ = ㅤㅤﾠㅤ.WSK.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WSK = function (ㅤ) {
                        ㅤㅤᅟﾠ.time = ㅤ;
                        ᅠᅟ(ㅤ)
                    };
                    ᅟᅠᅠ = ㅤㅤﾠㅤ.WQH.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WQH = function (ㅤ) {
                        ㅤᅠㅤᅠ = ㅤ
                    };
                    let ᅠᅠ = ㅤㅤﾠㅤ.WSW.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WSW = function (ㅤ, ﾠ, ᅟ) {
                        if(ᅟ == 10) {
                            ᅟ = Number(ᅟㅤᅠ.putToChest)
                        }
                        while(ᅟ !== 0) {
                            if(ᅟ > 255) {
                                ᅠᅠ(ㅤ, ﾠ, 255);
                                ᅟ -= 255
                            } else {
                                ᅠᅠ(ㅤ, ﾠ, ᅟ);
                                ᅟ = 0
                            }
                        }
                    };
                    let ㅤㅤㅤ = ㅤㅤﾠㅤ.WSN.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WSN = function (ㅤ) {
                        let ﾠ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                        if(ㅤﾠﾠㅤ) {
                            ㅤﾠﾠᅟ = document["defaultView"]["Date"]["now"]() - ㅤﾠﾠﾠ;
                            return ㅤﾠﾠㅤ = false
                        } else if(!ﾠ) {
                            return ㅤㅤㅤ(ㅤ)
                        }
                    };
                    let ㅤㅤﾠ = ㅤㅤﾠㅤ.WSJ.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WSJ = function (ㅤ, ﾠ, ᅟ, ᅠ, ㅤㅤ, ㅤﾠ, ㅤᅟ) {
                        if((ㅤㅤᅟㅤ.WSJ.WUO - ﾠ / 100).toFixed(2) == .01) {
                            ㅤﾠᅟㅤ = 1
                        } else {
                            ㅤﾠᅟㅤ = 0
                        }
                        ㅤﾠᅟᅟ = document["defaultView"]["Date"]["now"]();
                        if(!ㅤﾠᅟﾠ) {
                            ㅤﾠᅟﾠ = true
                        } else {
                            ㅤﾠᅟﾠ = false
                        }
                        ㅤㅤﾠ(ㅤ, ﾠ, ᅟ, ᅠ, ㅤㅤ, ㅤﾠ, ㅤᅟ)
                    };
                    let ㅤㅤᅟ = ㅤㅤﾠㅤ.WSL.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WSL = function (ㅤ) {
                        ㅤㅤᅟ(ㅤ);
                        if(ㅤᅠㅤᅟ[ㅤ]) {
                            delete ㅤᅠㅤᅟ[ㅤ]
                        }
                        ﾠㅤㅤㅤ.Leave.unshift([Object.values(ㅤㅤﾠᅠ.WTN[ㅤ])[0], Object.values(ㅤㅤﾠᅠ.WTN[ㅤ])[8]]);
                        if(ﾠㅤㅤㅤ.Leave.length > 5) {
                            ﾠㅤㅤㅤ.Leave.pop()
                        }
                        ﾠㅤㅤㅤ.killPlayerToggle = true;
                        clearTimeout(ﾠㅤㅤㅤ.killPlayerInt);
                        ﾠㅤㅤㅤ.killPlayerInt = ﾠ.setTimeout(() => {
                            ﾠㅤㅤㅤ.killPlayerToggle = false
                        }, 1e4)
                    };
                    let ㅤㅤᅠ = ㅤㅤﾠㅤ.WSF.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WSF = function (ㅤ) {
                        ㅤㅤᅠ(ㅤ);
                        ﾠ.setTimeout(() => {
                            ㅤᅠㅤᅟ[ㅤ[1]] = Date.now();
                            ﾠㅤㅤㅤ.Join.unshift([ㅤ[2], ㅤㅤﾠᅠ.WTN[ㅤ[1]].level]);
                            if(ﾠㅤㅤㅤ.Join.length > 5) {
                                ﾠㅤㅤㅤ.Join.pop()
                            }
                            ﾠㅤㅤㅤ.newPlayerToggle = true;
                            clearTimeout(ﾠㅤㅤㅤ.newPlayerInt);
                            ﾠㅤㅤㅤ.newPlayerInt = ﾠ.setTimeout(() => {
                                ﾠㅤㅤㅤ.newPlayerToggle = false
                            }, 1e4)
                        }, 1e3)
                    };
                    const ㅤﾠㅤ = ㅤㅤﾠᅠ.WTS.bind(ㅤㅤㅤᅟ);
                    const ㅤﾠﾠ = new Map;
                    ㅤㅤﾠᅠ.WTS = function (ㅤ) {
                        if(devicePixelRatio <= .6 && ᅟㅤᅠ.increasedZoom == "Auto") {
                            return ㅤﾠﾠ.set(ㅤ)
                        } else {
                            for(const [ㅤ] of ㅤﾠﾠ) {
                                ㅤﾠﾠ.delete(ㅤ);
                                ㅤﾠㅤ(ㅤ)
                            }
                            return ㅤﾠㅤ(ㅤ)
                        }
                    };
                    let ㅤﾠᅟ = ㅤㅤﾠㅤ.units.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.units = function (ㅤ, ﾠ, ᅟ) {
                        let ᅠ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                        let ㅤㅤ = new Uint16Array(ㅤ);
                        let ㅤﾠ = (ﾠ.length - 2) / 20;
                        for(let ㅤ = 0; ㅤ < ㅤﾠ; ㅤ++) {
                            let ᅟ = 2 + ㅤ * 20;
                            let ㅤﾠ = 1 + ㅤ * 10;
                            let ㅤᅟ = ﾠ[ᅟ];
                            let ㅤᅠ = ㅤㅤ[ㅤﾠ + 1];
                            let ﾠㅤ = ㅤㅤ[ㅤﾠ + 5];
                            let ﾠﾠ = ㅤᅟ * ㅤㅤᅟﾠ.max_units + ﾠㅤ;
                            let ﾠᅟ = ㅤㅤ[ㅤﾠ + 2];
                            let ﾠᅠ = ㅤㅤ[ㅤﾠ + 3];
                            let ᅟㅤ = ㅤㅤ[ㅤﾠ + 4];
                            let ᅟﾠ = ㅤㅤ[ㅤﾠ + 6];
                            let ᅟᅟ = ㅤㅤ[ㅤﾠ + 7];
                            let ᅟᅠ = ㅤㅤ[ㅤﾠ + 8];
                            let ᅠㅤ = ﾠ[ᅟ + 1] / 255 * Math.PI * 2;
                            let ᅠﾠ = ㅤㅤ[ㅤﾠ + 9];
                            let ᅠᅟ = ㅤㅤﾠᅠ.fast_units[ﾠﾠ];
                            if(!ㅤᅟㅤㅤ && ᅠ && ᅠ[ㅤㅤᅟﾠ.pid] == ㅤᅟ && ﾠᅟ === 0 && ᅠᅟ) {
                                if(ㅤᅠ & ﾠㅤᅠㅤ.HEAL) {
                                    ㅤﾠᅟﾠ = false
                                }
                            }
                            if(!ㅤᅟㅤㅤ && ᅠᅟ && ᅠᅟ[ㅤㅤᅟﾠ.pid] && ﾠᅟ === 0 && ᅠᅟ) {
                                if(ㅤᅠ & ﾠㅤᅠㅤ.HEAL) {
                                    ㅤᅠㅤᅟ[ᅠᅟ[ㅤㅤᅟﾠ.pid]] = Date.now()
                                }
                            }
                            if(!ㅤㅤﾠᅠ.fast_units[ﾠﾠ]) {
                                if(ㅤㅤㅤᅠ && ㅤᅟ === ㅤㅤㅤᅠ.id && ﾠㅤᅠᅟ.E) {
                                    ﾠㅤᅠᅟ.I.drawText("L:" + ﾠㅤ, 30, "black", !ᅟㅤᅠ.darkMode ? "white" : "#BBB");
                                    ﾠㅤᅠᅟ.L = ﾠㅤ;
                                    ﾠㅤᅠᅟ.E = false
                                }
                                continue
                            }
                        }
                        ㅤ = ㅤㅤ.buffer.slice(ㅤㅤ.byteOffset, ㅤㅤ.byteOffset + ㅤㅤ.byteLength);
                        ㅤﾠᅟ(ㅤ, ﾠ, ᅟ)
                    };
                    let ㅤﾠᅠ = ㅤㅤﾠㅤ.WQI.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WQI = function (ㅤ) {
                        let ﾠ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                        if(ﾠ) {
                            if(ᅟㅤᅠ.AutoBook && ﾠ.right != ﾠㅤᅟᅠ.BOOK && ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.BOOK]) {
                                ㅤㅤﾠㅤ.WQR(ﾠㅤᅟᅠ.BOOK)
                            }
                        }
                        ㅤᅟﾠᅠ = ㅤ;
                        ㅤﾠᅠ(ㅤ)
                    };
                    let ㅤᅟﾠ = ㅤㅤﾠㅤ.WQQ.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WQQ = function (ㅤ) {
                        ㅤᅟﾠ(ㅤ);
                        ㅤᅟᅟㅤ = ㅤ
                    };
                    let ㅤᅟᅟ = ㅤㅤﾠㅤ.WQV.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WQV = function (ㅤ) {
                        if(ᅟㅤᅠ.AutoFarm.angle && ᅟㅤᅠ.AutoFarm.active) {
                            ㅤ = ᅟㅤᅠ.AutoFarm.angle
                        } else if(ᅟㅤᅠ.Aimbot.angle && ᅟㅤᅠ.Aimbot.active) {
                            ㅤ = ᅟㅤᅠ.Aimbot.angle
                        } else if(ᅟㅤᅠ.AutoEmerald.angle && ᅟㅤᅠ.AutoEmerald.active) {
                            ㅤ = ᅟㅤᅠ.AutoEmerald.angle
                        } else if(ᅟㅤᅠ.AutoTame.angle && ᅟㅤᅠ.AutoTame.active) {
                            ㅤ = ᅟㅤᅠ.AutoTame.angle
                        }
                        return ㅤᅟᅟ(ㅤ)
                    };
                    let ㅤᅟᅠ = ㅤㅤﾠㅤ.WQU.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WQU = function (ㅤ) {
                        if(ᅟㅤᅠ.AutoFarm.angle && ᅟㅤᅠ.AutoFarm.active) {
                            ㅤ = ᅟㅤᅠ.AutoFarm.angle
                        } else if(ᅟㅤᅠ.Aimbot.angle && ᅟㅤᅠ.Aimbot.active) {
                            ㅤ = ᅟㅤᅠ.Aimbot.angle
                        } else if(ᅟㅤᅠ.AutoEmerald.angle && ᅟㅤᅠ.AutoEmerald.active) {
                            ㅤ = ᅟㅤᅠ.AutoEmerald.angle
                        } else if(ᅟㅤᅠ.AutoTame.angle && ᅟㅤᅠ.AutoTame.active) {
                            ㅤ = ᅟㅤᅠ.AutoTame.angle
                        }
                        return ㅤᅟᅠ(ㅤ)
                    };
                    let ㅤᅠㅤ = ㅤㅤﾠㅤ.WTC.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WTC = async function () {
                        if(!ㅤㅤᅟㅤ.WUA.enabled && (ㅤᅟᅟᅠ || ㅤᅟᅠㅤ || !ㅤㅤㅤﾠ.waiting) && !ﾠﾠᅟ) {
                            return
                        }
                        if(Date.now() - ㅤᅟᅟᅟ < 7500 && !ㅤᅟᅟᅠ) {
                            ㅤᅟᅟᅠ = 1;
                            ㅤㅤㅤﾠ.waiting = true;
                            let ㅤ = 7500 - (Date.now() - ㅤᅟᅟᅟ) < 1e4 ? 7500 - (Date.now() - ㅤᅟᅟᅟ) : 2500;
                            await ﾠᅠﾠᅠ(ㅤ);
                            ㅤᅟᅟᅟ = Date.now();
                            ㅤᅟᅟᅠ = 0
                        }
                        ﾠﾠᅟ = false;
                        ㅤᅠㅤ()
                    };
                    let ㅤᅠﾠ = ㅤㅤﾠᅟ.WTL.bind(ㅤㅤㅤﾠ);
                    ㅤㅤﾠᅟ.WTL = async function (ㅤ, ﾠ) {
                        ﾠㅤㅤﾠ = {
                            args1: function () {
                                return ㅤㅤﾠㅤ.WTC()
                            },
                            args2: ﾠ
                        };
                        ㅤᅠﾠ(ﾠㅤㅤﾠ.args1, ﾠㅤㅤﾠ.args2)
                    };
                    let ㅤᅠᅟ = ㅤㅤﾠㅤ.WTD.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WTD = function (ㅤ) {
                        ᅟㅤᅠ.timePlayed.resetClock = true;
                        return ㅤᅠᅟ.apply(this, ㅤ)
                    };
                    let ㅤᅠᅠ = ㅤㅤﾠㅤ.WQZ.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WQZ = async function (...ㅤ) {
                        ᅟㅤᅠ.timePlayed.resetClock = true;
                        ᅟㅤᅠ.totemOnMap.x = 0;
                        ᅟㅤᅠ.totemOnMap.y = 0;
                        let ﾠ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                        ᅟㅤᅠ.deathOnMap.x = ﾠ.x / (ㅤㅤﾠᅠ.__NW__ * 100);
                        ᅟㅤᅠ.deathOnMap.y = ﾠ.y / (ㅤㅤﾠᅠ.__NH__ * 100);
                        if(ᅟㅤᅠ.AutoRespawn.active) {
                            ㅤㅤㅤﾠ.waiting = false;
                            ﾠﾠᅟ = true;
                            ㅤㅤᅟㅤ.alive = false;
                            await ﾠᅠﾠᅠ(500);
                            return ㅤㅤﾠᅟ.WTL(ﾠㅤㅤﾠ.args1, ﾠㅤㅤﾠ.args2)
                        } else {
                            return ㅤᅠᅠ.apply(this, ㅤ)
                        }
                    };
                    ᅠㅤㅤ = ㅤㅤﾠㅤ.WQX.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WQX = async function (ㅤ) {
                        if(!ᅟㅤᅠ.Translation.translateSent || document.visibilityState != "visible" || ᅟㅤᅠ.Hidden.active) {
                            return ᅠㅤㅤ(ㅤ)
                        }
                        let ﾠ = ㅤ;
                        if(ﾠ.length > 50 || ﾠ.length < 2) {
                            return ᅠㅤㅤ(ㅤ)
                        }
                        let ᅟ = ᅟㅤᅠ.Translation.sentLang;
                        switch(ᅟ) {
                        case "Arabic":
                            ᅟ = "ar";
                            break;
                        case "Bulgarian":
                            ᅟ = "bg";
                            break;
                        case "Czech":
                            ᅟ = "cs";
                            break;
                        case "Danish":
                            ᅟ = "da";
                            break;
                        case "German":
                            ᅟ = "de";
                            break;
                        case "Greek":
                            ᅟ = "el";
                            break;
                        case "English (British)":
                            ᅟ = "en-gb";
                            break;
                        case "English (American)":
                            ᅟ = "en-us";
                            break;
                        case "Spanish":
                            ᅟ = "es";
                            break;
                        case "Estonian":
                            ᅟ = "et";
                            break;
                        case "Finnish":
                            ᅟ = "fi";
                            break;
                        case "French":
                            ᅟ = "fr";
                            break;
                        case "Hungarian":
                            ᅟ = "hu";
                            break;
                        case "Indonesian":
                            ᅟ = "id";
                            break;
                        case "Italian":
                            ᅟ = "it";
                            break;
                        case "Japanese":
                            ᅟ = "ja";
                            break;
                        case "Korean":
                            ᅟ = "ko";
                            break;
                        case "Lithuanian":
                            ᅟ = "lt";
                            break;
                        case "Latvian":
                            ᅟ = "lv";
                            break;
                        case "Norwegian Bokmål":
                            ᅟ = "nb";
                            break;
                        case "Dutch":
                            ᅟ = "nl";
                            break;
                        case "Polish":
                            ᅟ = "pl";
                            break;
                        case "Portuguese (Brazilian)":
                            ᅟ = "pt-br";
                            break;
                        case "Portuguese (Other)":
                            ᅟ = "pt-pt";
                            break;
                        case "Romanian":
                            ᅟ = "ro";
                            break;
                        case "Russian":
                            ᅟ = "ru";
                            break;
                        case "Slovak":
                            ᅟ = "sk";
                            break;
                        case "Slovenian":
                            ᅟ = "sl";
                            break;
                        case "Swedish":
                            ᅟ = "sv";
                            break;
                        case "Turkish":
                            ᅟ = "tr";
                            break;
                        case "Ukrainian":
                            ᅟ = "uk";
                            break;
                        case "Chinese (Simplifed)":
                            ᅟ = "zh-hans";
                            break;
                        case "Chinese (Traditional)":
                            ᅟ = "zh-hant";
                            break;
                        default:
                            return
                        }
                        if(ᅠᅟᅠ && ᅠᅟᅠ.readyState === 1) {
                            ᅠᅟᅠ.send(ﾠﾠㅤᅠ(JSON.stringify([1, [ﾠ, ᅟ]])))
                        } else {
                            ᅠㅤㅤ(ㅤ)
                        }
                    };
                    ᅠㅤﾠ = ㅤㅤﾠㅤ.WQG.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WQG = async function (ㅤ) {
                        let ᅟ = ㅤ[2];
                        const ᅠ = ᅟ.split(" ");
                        if(ᅠ[0] === "drop" && ᅟㅤᅠ.AutoFarm.active && ᅟㅤᅠ.AutoFarm.whitelist.includes(ㅤ[1])) {
                            const ㅤ = ["b", "w", "p", "c", "to", "th", "g", "w"];
                            const ᅟ = [ﾠㅤᅟᅠ.PLANT, ﾠㅤᅟᅠ.WILD_WHEAT, ﾠㅤᅟᅠ.PUMPKIN, ﾠㅤᅟᅠ.CARROT, ﾠㅤᅟᅠ.TOMATO, ﾠㅤᅟᅠ.THORNBUSH, ﾠㅤᅟᅠ.GARLIC, ﾠㅤᅟᅠ.WATERMELON];
                            for(let ㅤㅤ = 0; ㅤㅤ < ᅟ.length; ㅤㅤ++) {
                                const ㅤﾠ = ᅟ[ㅤㅤ];
                                if(!ㅤㅤᅟㅤ.WUU.WUV[ㅤﾠ] || ㅤㅤᅟㅤ.WUU.WUV[ㅤﾠ] <= 0 || !ᅠ.includes(ㅤ[ㅤㅤ]) && !ᅠ.includes("all")) {
                                    continue
                                }
                                ㅤㅤﾠㅤ.WQS(ㅤﾠ);
                                await new Promise(ㅤ => ﾠ.setTimeout(ㅤ, 1050))
                            }
                        }
                        if(!ᅟㅤᅠ.Translation.translateRecieved || document.visibilityState != "visible" || ᅟㅤᅠ.Hidden.active) {
                            return ᅠㅤﾠ(ㅤ)
                        }
                        if(ᅟ.length > 50 || ᅟ.length < 2) {
                            return ᅠㅤﾠ(ㅤ)
                        }
                        let ㅤㅤ = ᅟㅤᅠ.Translation.recievedLang;
                        switch(ㅤㅤ) {
                        case "Arabic":
                            ㅤㅤ = "ar";
                            break;
                        case "Bulgarian":
                            ㅤㅤ = "bg";
                            break;
                        case "Czech":
                            ㅤㅤ = "cs";
                            break;
                        case "Danish":
                            ㅤㅤ = "da";
                            break;
                        case "German":
                            ㅤㅤ = "de";
                            break;
                        case "Greek":
                            ㅤㅤ = "el";
                            break;
                        case "English (British)":
                            ㅤㅤ = "en-gb";
                            break;
                        case "English (American)":
                            ㅤㅤ = "en-us";
                            break;
                        case "Spanish":
                            ㅤㅤ = "es";
                            break;
                        case "Estonian":
                            ㅤㅤ = "et";
                            break;
                        case "Finnish":
                            ㅤㅤ = "fi";
                            break;
                        case "French":
                            ㅤㅤ = "fr";
                            break;
                        case "Hungarian":
                            ㅤㅤ = "hu";
                            break;
                        case "Indonesian":
                            ㅤㅤ = "id";
                            break;
                        case "Italian":
                            ㅤㅤ = "it";
                            break;
                        case "Japanese":
                            ㅤㅤ = "ja";
                            break;
                        case "Korean":
                            ㅤㅤ = "ko";
                            break;
                        case "Lithuanian":
                            ㅤㅤ = "lt";
                            break;
                        case "Latvian":
                            ㅤㅤ = "lv";
                            break;
                        case "Norwegian Bokmål":
                            ㅤㅤ = "nb";
                            break;
                        case "Dutch":
                            ㅤㅤ = "nl";
                            break;
                        case "Polish":
                            ㅤㅤ = "pl";
                            break;
                        case "Portuguese (Brazilian)":
                            ㅤㅤ = "pt-br";
                            break;
                        case "Portuguese (Other)":
                            ㅤㅤ = "pt-pt";
                            break;
                        case "Romanian":
                            ㅤㅤ = "ro";
                            break;
                        case "Russian":
                            ㅤㅤ = "ru";
                            break;
                        case "Slovak":
                            ㅤㅤ = "sk";
                            break;
                        case "Slovenian":
                            ㅤㅤ = "sl";
                            break;
                        case "Swedish":
                            ㅤㅤ = "sv";
                            break;
                        case "Turkish":
                            ㅤㅤ = "tr";
                            break;
                        case "Ukrainian":
                            ㅤㅤ = "uk";
                            break;
                        case "Chinese (Simplifed)":
                            ㅤㅤ = "zh-hans";
                            break;
                        case "Chinese (Traditional)":
                            ㅤㅤ = "zh-hant";
                            break;
                        default:
                            return
                        }
                        if(ᅠᅟᅠ && ᅠᅟᅠ.readyState === 1) {
                            ᅠᅟᅠ.send(ﾠﾠㅤᅠ(JSON.stringify([2, [ㅤ, ㅤㅤ]])))
                        } else {
                            ᅠㅤﾠ(ㅤ)
                        }
                    };
                    let ﾠㅤﾠ = ㅤㅤﾠﾠ.drawGame;
                    ㅤㅤﾠﾠ.drawGame = function () {
                        ﾠㅤﾠ();
                        if(ㅤㅤﾠﾠ.WSJ.translate.y == 0 || ㅤㅤﾠﾠ.WSJ.translate.x == 0) {
                            return
                        }
                        if(!ᅟㅤᅠ.Hidden.active) {
                            ᅟﾠㅤﾠ()
                        }
                    };
                    let ﾠﾠᅠ = ㅤㅤﾠㅤ.WRZ.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WRZ = function () {};
                    let ﾠᅟㅤ = ㅤㅤﾠﾠ.WTG.bind(ㅤㅤㅤㅤ);
                    ㅤㅤﾠﾠ.WTG = function (ㅤ) {
                        ㅤᅠㅤﾠ = ㅤ;
                        if(ㅤㅤﾠㅤ.websocket.readyState != 1) {
                            ㅤᅠㅤﾠ = 0;
                            ﾠᅟㅤ(ㅤ)
                        } else {
                            return
                        }
                    };
                    let ﾠᅟﾠ = ㅤㅤﾠㅤ.WQY.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WQY = function () {
                        ㅤㅤㅤﾠ.waiting = true;
                        if(ㅤᅟᅠㅤ && (ㅤㅤﾠㅤ.websocket.readyState === 1 || ㅤㅤᅟㅤ.WUA.enabled) || ᅟㅤᅠ.AutoRespawn.active && ﾠﾠᅟ) {
                            return
                        } else if(!ㅤᅠﾠㅤ) {
                            ㅤᅟᅠㅤ = false;
                            ㅤㅤﾠㅤ.websocket.close();
                            ㅤㅤᅟㅤ.WUA.enabled = true;
                            ㅤᅟᅠᅟ = false;
                            if(ㅤᅟᅠﾠ) {
                                let ㅤ = 0;
                                let ᅟ = 3;
                                ﾠᅟﾠ();
                                ㅤᅟᅠᅠ = ﾠ.setInterval(() => {
                                    if(ᅟ == ㅤㅤﾠㅤ.websocket.readyState && !ㅤᅟᅠᅟ && ㅤ < 15) {
                                        ㅤ++
                                    } else if(ᅟ != ㅤㅤﾠㅤ.websocket.readyState && ㅤᅟᅠᅟ) {
                                        if(ㅤᅟᅠᅠ) {
                                            ﾠ.clearInterval(ㅤᅟᅠᅠ)
                                        }
                                    } else if(ㅤ >= 15) {
                                        if(ㅤᅟᅠᅠ) {
                                            ﾠ.clearInterval(ㅤᅟᅠᅠ)
                                        }
                                        ㅤㅤﾠﾠ.WTG(ㅤㅤﾠᅟ.WTK);
                                        ᅟㅤᅟ()
                                    }
                                }, 500);
                                return ㅤㅤﾠᅟ.WTL(ﾠㅤㅤﾠ.args1, ﾠㅤㅤﾠ.args2)
                            } else {
                                ㅤᅠㅤㅤ = ﾠ.setInterval(() => {
                                    if(ㅤᅟᅠﾠ) {
                                        if(ㅤᅠㅤㅤ) {
                                            ﾠ.clearInterval(ㅤᅠㅤㅤ)
                                        }
                                        let ㅤ = 0;
                                        let ᅟ = 3;
                                        ㅤᅟᅠᅠ = ﾠ.setInterval(() => {
                                            if(ᅟ == ㅤㅤﾠㅤ.websocket.readyState && !ㅤᅟᅠᅟ && ㅤ < 15) {
                                                ㅤ++
                                            } else if(ᅟ != ㅤㅤﾠㅤ.websocket.readyState && ㅤᅟᅠᅟ) {
                                                if(ㅤᅟᅠᅠ) {
                                                    ﾠ.clearInterval(ㅤᅟᅠᅠ)
                                                }
                                            } else if(ㅤ >= 15) {
                                                if(ㅤᅟᅠᅠ) {
                                                    ﾠ.clearInterval(ㅤᅟᅠᅠ)
                                                }
                                                ㅤㅤﾠﾠ.WTG(ㅤㅤﾠᅟ.WTK);
                                                ᅟㅤᅟ()
                                            }
                                        }, 500);
                                        return ㅤㅤﾠᅟ.WTL(ﾠㅤㅤﾠ.args1, ﾠㅤㅤﾠ.args2)
                                    }
                                }, 1e3)
                            }
                        }
                    };
                    let ﾠᅟᅟ = ㅤㅤﾠㅤ.WQT.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WQT = function () {
                        if(!ﾠㅤㅤ) {
                            ﾠᅟᅟ()
                        }
                    };
                    let ﾠᅟᅠ = ㅤㅤᅟㅤ.WUF.WUG.bind(ㅤㅤᅟㅤ.WUF);
                    ㅤㅤᅟㅤ.WUF.WUG = function () {
                        if(ㅤﾠㅤᅠ || ㅤㅤﾠㅤ.websocket.readyState != 1) {
                            return
                        } else {
                            ﾠᅟᅠ()
                        }
                    };

                    function ᅠ(ㅤ) {
                        let ﾠ = new Uint8Array(new ArrayBuffer(ㅤ.length));
                        for(let ᅟ = 0; ㅤ.length > ᅟ; ᅟ++) {
                            ﾠ[ᅟ] = ㅤ[ᅟ]
                        }
                        return ﾠ
                    }
                    let ﾠᅠㅤ = ㅤㅤﾠㅤ.WQW.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WQW = function (ㅤ) {
                        if(ㅤﾠㅤᅠ || ᅟㅤᅠ.Aimbot.active && (ᅟㅤᅠ.Aimbot.mode == "Attack & Chase" || ᅟㅤᅠ.Aimbot.move == "Rabbit Chase") && ㅤ == 0 && ﾠㅤᅠ && ﾠㅤᅟ && !ㅤㅤᅟㅤ.WUZ.WVA) {
                            return
                        } else {
                            ﾠᅠㅤ(ㅤ)
                        }
                    };
                    let ﾠᅠﾠ = ㅤㅤᅟㅤ.WUL.WUG.bind(ㅤㅤᅟㅤ.WUL);
                    ㅤㅤᅟㅤ.WUL.WUG = function () {
                        ﾠᅠﾠ();
                        if(ᅟㅤᅠ.Aimbot.active && ᅟㅤᅠ.Aimbot.angle) {
                            let ㅤ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                            if(ㅤ) {
                                ㅤ.angle = ᅟㅤᅠ.Aimbot.angle;
                                ㅤ[ㅤㅤᅟﾠ.nangle] = ᅟㅤᅠ.Aimbot.angle
                            }
                        } else if(ᅟㅤᅠ.AutoFarm.active && ᅟㅤᅠ.AutoFarm.angle) {
                            let ㅤ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                            if(ㅤ) {
                                ㅤ.angle = ᅟㅤᅠ.AutoFarm.angle;
                                ㅤ[ㅤㅤᅟﾠ.nangle] = ᅟㅤᅠ.AutoFarm.angle
                            }
                        } else if(ᅟㅤᅠ.AutoEmerald.active && ᅟㅤᅠ.AutoEmerald.angle) {
                            let ㅤ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                            if(ㅤ) {
                                ㅤ.angle = ᅟㅤᅠ.AutoEmerald.angle;
                                ㅤ[ㅤㅤᅟﾠ.nangle] = ᅟㅤᅠ.AutoEmerald.angle
                            }
                        } else if(ᅟㅤᅠ.AutoTame.active && ᅟㅤᅠ.AutoTame.angle) {
                            let ㅤ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                            if(ㅤ) {
                                ㅤ.angle = ᅟㅤᅠ.AutoTame.angle;
                                ㅤ[ㅤㅤᅟﾠ.nangle] = ᅟㅤᅠ.AutoTame.angle
                            }
                        }
                    };
                    let ﾠᅠᅟ = ㅤㅤﾠㅤ.WSC.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WSC = function (ㅤ) {
                        return ﾠᅠᅟ(ㅤ)
                    };
                    let ﾠᅠᅠ = ㅤㅤﾠㅤ.WSD.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WSD = function (ㅤ) {
                        return ﾠᅠᅠ(ㅤ)
                    };
                    let ᅟㅤㅤ = ㅤㅤﾠㅤ.WSE.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WSE = function (ㅤ) {
                        return ᅟㅤㅤ(ㅤ)
                    };
                    let ᅟㅤﾠ = ㅤㅤﾠㅤ.WSG.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WSG = function (ㅤ) {
                        return ᅟㅤﾠ(ㅤ)
                    };
                    let ᅟﾠㅤ = ㅤㅤﾠㅤ.WSI.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WSI = function (ㅤ) {
                        return ᅟﾠㅤ(ㅤ)
                    };
                    let ᅟﾠﾠ = ㅤㅤﾠㅤ.WSM.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WSM = function (ㅤ) {
                        return ᅟﾠﾠ(ㅤ)
                    };
                    let ᅟﾠᅟ = ㅤㅤﾠㅤ.WSO.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WSO = function () {
                        return ᅟﾠᅟ()
                    };
                    let ᅟﾠᅠ = ㅤㅤﾠㅤ.WSP.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WSP = function (ㅤ, ﾠ) {
                        return ᅟﾠᅠ(ㅤ, ﾠ)
                    };
                    let ᅟᅟㅤ = ㅤㅤﾠㅤ.WSY.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WSY = function (ㅤ, ﾠ) {
                        return ᅟᅟㅤ(ㅤ, ﾠ)
                    };
                    let ᅟᅟﾠ = ㅤㅤﾠㅤ.WSR.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WSR = function (ㅤ, ﾠ, ᅟ) {
                        return ᅟᅟﾠ(ㅤ, ﾠ, ᅟ)
                    };
                    let ᅟᅟᅟ = ㅤㅤﾠㅤ.WSS.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WSS = function (ㅤ) {
                        return ᅟᅟᅟ(ㅤ)
                    };
                    let ᅟᅟᅠ = ㅤㅤﾠㅤ.WSQ.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WSQ = function (ㅤ) {
                        return ᅟᅟᅠ(ㅤ)
                    };
                    let ᅟᅠㅤ = ㅤㅤﾠㅤ.WST.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WST = function (ㅤ) {
                        return ᅟᅠㅤ(ㅤ)
                    };
                    let ᅟᅠﾠ = ㅤㅤﾠㅤ.WSU.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WSU = function (ㅤ, ﾠ) {
                        return ᅟᅠﾠ(ㅤ, ﾠ)
                    };
                    let ᅟᅠᅟ = ㅤㅤﾠㅤ.WSV.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WSV = function (ㅤ, ﾠ) {
                        return ᅟᅠᅟ(ㅤ, ﾠ)
                    };
                    let ᅠㅤᅠ = ㅤㅤﾠㅤ.WSX.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WSX = function (ㅤ) {
                        return ᅠㅤᅠ(ㅤ)
                    };
                    let ᅠﾠﾠ = ㅤㅤﾠㅤ.WSZ.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WSZ = function (ㅤ) {
                        return ᅠﾠﾠ(ㅤ)
                    };
                    let ᅠﾠᅟ = ㅤㅤﾠㅤ.WQA.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WQA = function (ㅤ) {
                        return ᅠﾠᅟ(ㅤ)
                    };
                    let ᅠﾠᅠ = ㅤㅤﾠㅤ.WQB.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WQB = function (ㅤ) {
                        return ᅠﾠᅠ(ㅤ)
                    };
                    let ᅠᅟﾠ = ㅤㅤﾠㅤ.WQC.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WQC = function (ㅤ) {
                        return ᅠᅟﾠ(ㅤ)
                    };
                    let ᅠᅟᅟ = ㅤㅤﾠㅤ.WQE.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WQE = function () {
                        return ᅠᅟᅟ()
                    };
                    let ᅠᅠㅤ = ㅤㅤﾠㅤ.WQK.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WQK = function (ㅤ) {
                        return ᅠᅠㅤ(ㅤ)
                    };
                    let ᅠᅠﾠ = ㅤㅤﾠㅤ.WQL.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WQL = function (ㅤ, ﾠ) {
                        return ᅠᅠﾠ(ㅤ, ﾠ)
                    };
                    let ㅤㅤᅟᅠ = ㅤㅤﾠㅤ.WQM.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WQM = function () {
                        return ㅤㅤᅟᅠ()
                    };
                    let ㅤㅤᅠㅤ = ㅤㅤﾠㅤ.WQN.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WQN = function (ㅤ) {
                        return ㅤㅤᅠㅤ(ㅤ)
                    };
                    let ㅤㅤᅠﾠ = ㅤㅤﾠㅤ.WQO.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WQO = function (ㅤ, ﾠ) {
                        return ㅤㅤᅠﾠ(ㅤ, ﾠ)
                    };
                    let ㅤﾠᅟᅠ = ㅤㅤﾠㅤ.WQS.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WQS = function (ㅤ) {
                        return ㅤﾠᅟᅠ(ㅤ)
                    };
                    let ㅤﾠᅠㅤ = ㅤㅤﾠㅤ.WTA.bind(ᅠᅠᅠ);
                    ㅤㅤﾠㅤ.WTA = function () {
                        return ㅤﾠᅠㅤ()
                    };
                    window.addEventListener("offline", function () {
                        ㅤᅟᅠﾠ = false;
                        if(!ᅟㅤᅠ.Hidden.active && ㅤᅟᅠㅤ) {
                            ﾠﾠᅟㅤ("red", "Internet disconnected. Please check your connection.")
                        }
                    });
                    window.addEventListener("online", function () {
                        ㅤᅟᅠﾠ = true;
                        if(ᅠᅟᅠ && ᅠᅟᅠ.readyState === 1) {
                            ᅠᅟᅠ.close()
                        }
                        if(!ᅟㅤᅠ.Hidden.active && ㅤㅤᅟㅤ.WUA.enabled) {
                            ﾠﾠᅟㅤ("green", "Internet reconnected. Attempting to rejoin.")
                        }
                    })
                }
            }

            function ᅟㅤᅠᅟ() {
                ㅤᅠﾠᅠ = {
                    title: ᅠᅟㅤ ? "[DEVELOPER MODE]" : "Void Hacks [6.0] by shw_t",
                    align: "right",
                    toggleGuiKey: "NONE",
                    toggleGuiButton: true,
                    draggable: true,
                    fontSize: 18,
                    opacity: .8,
                    width: 880,
                    height: 630,
                    folders: {
                        Visuals: [{
                            type: "checkbox",
                            label: "Dark Mode",
                            object: ᅟㅤᅠ,
                            property: "darkMode",
                            onChange: ㅤ => {
                                if(ᅟㅤᅠ.darkMode == 1) {
                                    ﾠㅤᅠᅟ.I.drawText("L:" + ﾠㅤᅠᅟ.L, 30, "black", !ᅟㅤᅠ.darkMode ? "white" : "#BBB");
                                    ᅟㅤᅠ.ColoredSpikes.texture = "Dark";
                                    ᅟㅤᅠ.chestInfo.texture = "Dark"
                                } else {
                                    ﾠㅤᅠᅟ.I.drawText("L:" + ﾠㅤᅠᅟ.L, 30, "black", !ᅟㅤᅠ.darkMode ? "white" : "#BBB");
                                    ᅟㅤᅠ.ColoredSpikes.texture = "Light";
                                    ᅟㅤᅠ.chestInfo.texture = "Light"
                                }
                                ᅠﾠㅤ.saveSettings();
                                ﾠᅠᅠﾠ();
                                ﾠㅤﾠᅠ();
                                ﾠㅤᅟㅤ()
                            }
                        }, {
                            type: "checkbox",
                            label: "Fps",
                            object: ᅟㅤᅠ,
                            property: "fpsDisplay",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "checkbox",
                            label: "Ping",
                            object: ᅟㅤᅠ,
                            property: "pingDisplay",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "checkbox",
                            label: "Days Alive",
                            object: ᅟㅤᅠ,
                            property: "daysAlive",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "checkbox",
                            label: "Time Played",
                            object: ᅟㅤᅠ.timePlayed,
                            property: "active",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "checkbox",
                            label: "Timer",
                            object: ᅟㅤᅠ,
                            property: "gaugeTimer",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "checkbox",
                            label: "LeaderBoard Levels",
                            object: ᅟㅤᅠ,
                            property: "showLeaderBoardLevels",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "checkbox",
                            label: "Percentages",
                            object: ᅟㅤᅠ,
                            property: "gaugePercentages",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "checkbox",
                            label: "Joins & Leaves",
                            object: ᅟㅤᅠ,
                            property: "joinsLeaves",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "checkbox",
                            label: "Totem On Map",
                            object: ᅟㅤᅠ.totemOnMap,
                            property: "active",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "checkbox",
                            label: "Death On Map",
                            object: ᅟㅤᅠ.deathOnMap,
                            property: "active",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "checkbox",
                            label: "LeaderBoard Allies",
                            object: ᅟㅤᅠ,
                            property: "drawLeaderboardAllies",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "checkbox",
                            label: "Player Tracers",
                            object: ᅟㅤᅠ,
                            property: "playerTracers",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "checkbox",
                            label: "Players On Top",
                            object: ᅟㅤᅠ,
                            property: "playersOnTop",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "checkbox",
                            label: "Treasure Chest On Top",
                            object: ᅟㅤᅠ,
                            property: "treasureChestOnTop",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "checkbox",
                            label: "Box Info",
                            object: ᅟㅤᅠ,
                            property: "boxInfo",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "checkbox",
                            label: "Fire Info",
                            object: ᅟㅤᅠ,
                            property: "fireInfo",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "checkbox",
                            label: "Building Info",
                            object: ᅟㅤᅠ,
                            property: "buildingInfo",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "checkbox",
                            label: "Move Prediction",
                            object: ᅟㅤᅠ,
                            property: "movementPredictor",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "checkbox",
                            label: "Bliz And Storm",
                            object: ᅟㅤᅠ,
                            property: "blizzardAndSandstorm",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "select",
                            label: "Show Hacks",
                            object: ᅟㅤᅠ.listEnabledHacks,
                            property: "mode",
                            options: ["Bottom Left", "Top Left", "Off"],
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "select",
                            label: "Debugger",
                            object: ᅟㅤᅠ.Debugger,
                            property: "mode",
                            options: ["None", "No Roofs/Bridges", "Player IDS", "All"],
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "select",
                            label: "Player Timers",
                            object: ᅟㅤᅠ,
                            property: "playerTimers",
                            options: ["All", "Enemys", "None"],
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "subfolder",
                            label: "Chests",
                            subfolder: [{
                                type: "checkbox",
                                label: "Chest Info",
                                object: ᅟㅤᅠ.chestInfo,
                                property: "active",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "select",
                                label: "Chest Textures",
                                object: ᅟㅤᅠ.chestInfo,
                                property: "texture",
                                options: ["Bright", "Light", "Dark"],
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings();
                                    ﾠㅤᅟㅤ()
                                }
                            }]
                        }, {
                            type: "subfolder",
                            label: "Spikes",
                            subfolder: [{
                                type: "checkbox",
                                label: "Colored Spikes",
                                object: ᅟㅤᅠ.ColoredSpikes,
                                property: "active",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "select",
                                label: "Spike Textures",
                                object: ᅟㅤᅠ.ColoredSpikes,
                                property: "texture",
                                options: ["Light", "Dark"],
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings();
                                    ﾠㅤﾠᅠ()
                                }
                            }]
                        }, {
                            type: "subfolder",
                            label: "Roofs",
                            subfolder: [{
                                type: "checkbox",
                                label: "Smooth Roofs",
                                object: ᅟㅤᅠ,
                                property: "smoothRoofs",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings();
                                    ﾠᅟᅠᅟ()
                                }
                            }, {
                                type: "checkbox",
                                label: "Opaque Roofs",
                                object: ᅟㅤᅠ.Roof,
                                property: "active",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings();
                                    ﾠᅟᅠᅟ()
                                }
                            }, {
                                type: "range",
                                label: "Roofs Opacity",
                                min: .1,
                                max: 1,
                                step: .1,
                                object: ᅟㅤᅠ.Roof,
                                property: "opacity",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }]
                        }, {
                            type: "subfolder",
                            label: "Opacitys",
                            subfolder: [{
                                type: "range",
                                label: "Vehicles Opacity",
                                min: .1,
                                max: 1,
                                step: .1,
                                object: ᅟㅤᅠ,
                                property: "vehicleOpacity",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "range",
                                label: "Menus Opacity",
                                min: .1,
                                max: 1,
                                step: .1,
                                object: ᅟㅤᅠ,
                                property: "menuOpacity",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings();
                                    ﾠᅠᅠᅟ()
                                }
                            }]
                        }, {
                            type: "range",
                            label: "Brightness",
                            min: .5,
                            max: 1.5,
                            step: .1,
                            object: ᅟㅤᅠ,
                            property: "canvasBrightness",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings();
                                const ﾠ = document.getElementById("game_canvas");
                                ﾠ.style.filter = "brightness(" + ᅟㅤᅠ.canvasBrightness + ")"
                            }
                        }],
                        Tracers: [{
                            type: "subfolder",
                            label: "Forest",
                            subfolder: [{
                                type: "checkbox",
                                label: "Boars",
                                object: ᅟㅤᅠ.Tracers,
                                property: "Boars",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "checkbox",
                                label: "Golden Chicken",
                                object: ᅟㅤᅠ.Tracers,
                                property: "GoldenChickens",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "checkbox",
                                label: "Golden Hen",
                                object: ᅟㅤᅠ.Tracers,
                                property: "GoldenHens",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "checkbox",
                                label: "Hawks",
                                object: ᅟㅤᅠ.Tracers,
                                property: "Hawks",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "checkbox",
                                label: "Rabbits",
                                object: ᅟㅤᅠ.Tracers,
                                property: "Rabbits",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "checkbox",
                                label: "Spiders",
                                object: ᅟㅤᅠ.Tracers,
                                property: "Spiders",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "checkbox",
                                label: "Wolfs",
                                object: ᅟㅤᅠ.Tracers,
                                property: "Wolfs",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }]
                        }, {
                            type: "subfolder",
                            label: "Jungle",
                            subfolder: [{
                                type: "checkbox",
                                label: "Ocelots",
                                object: ᅟㅤᅠ.Tracers,
                                property: "Ocelots",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "checkbox",
                                label: "Crocodiles",
                                object: ᅟㅤᅠ.Tracers,
                                property: "Crocodiles",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "checkbox",
                                label: "Parrots",
                                object: ᅟㅤᅠ.Tracers,
                                property: "Parrots",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }]
                        }, {
                            type: "subfolder",
                            label: "Lava",
                            subfolder: [{
                                type: "checkbox",
                                label: "Baby Lava Dragons",
                                object: ᅟㅤᅠ.Tracers,
                                property: "BabyLavaDragons",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "checkbox",
                                label: "Fire Mobs",
                                object: ᅟㅤᅠ.Tracers,
                                property: "FireMobs",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "checkbox",
                                label: "Lava Dragons",
                                object: ᅟㅤᅠ.Tracers,
                                property: "LavaDragons",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }]
                        }, {
                            type: "subfolder",
                            label: "Ocean",
                            subfolder: [{
                                type: "checkbox",
                                label: "Krakens",
                                object: ᅟㅤᅠ.Tracers,
                                property: "Krakens",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "checkbox",
                                label: "Piranhas",
                                object: ᅟㅤᅠ.Tracers,
                                property: "Piranhas",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }]
                        }, {
                            type: "subfolder",
                            label: "Sand",
                            subfolder: [{
                                type: "checkbox",
                                label: "SandWorms",
                                object: ᅟㅤᅠ.Tracers,
                                property: "Sandworms",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "checkbox",
                                label: "Crabs",
                                object: ᅟㅤᅠ.Tracers,
                                property: "Crabs",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "checkbox",
                                label: "King Crabs",
                                object: ᅟㅤᅠ.Tracers,
                                property: "KingCrabs",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "checkbox",
                                label: "Vultures",
                                object: ᅟㅤᅠ.Tracers,
                                property: "Vultures",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }]
                        }, {
                            type: "subfolder",
                            label: "Winter",
                            subfolder: [{
                                type: "checkbox",
                                label: "Baby Dragons",
                                object: ᅟㅤᅠ.Tracers,
                                property: "BabyDragons",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "checkbox",
                                label: "Baby Mammoths",
                                object: ᅟㅤᅠ.Tracers,
                                property: "BabyMammoths",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "checkbox",
                                label: "Bears",
                                object: ᅟㅤᅠ.Tracers,
                                property: "Bears",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "checkbox",
                                label: "Dragons",
                                object: ᅟㅤᅠ.Tracers,
                                property: "Dragons",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "checkbox",
                                label: "Foxes",
                                object: ᅟㅤᅠ.Tracers,
                                property: "Foxes",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "checkbox",
                                label: "Mammoths",
                                object: ᅟㅤᅠ.Tracers,
                                property: "Mammoths",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "checkbox",
                                label: "Penguins",
                                object: ᅟㅤᅠ.Tracers,
                                property: "Penguins",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }]
                        }],
                        Misc: [{
                            type: "checkbox",
                            label: "Auto Respawn",
                            object: ᅟㅤᅠ.AutoRespawn,
                            property: "active",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "checkbox",
                            label: "Auto Book",
                            object: ᅟㅤᅠ.AutoBook,
                            property: "active",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "checkbox",
                            label: "Equip After Place",
                            object: ᅟㅤᅠ.equipAfterPlace,
                            property: "active",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "checkbox",
                            label: "Auto Ice",
                            object: ᅟㅤᅠ.AutoIce,
                            property: "active",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "checkbox",
                            label: "Auto Steal",
                            object: ᅟㅤᅠ.AutoSteal,
                            property: "active",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "checkbox",
                            label: "Auto Land",
                            object: ᅟㅤᅠ.AutoLand,
                            property: "active",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "checkbox",
                            label: "Auto Tame",
                            object: ᅟㅤᅠ.AutoTame,
                            property: "active",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "checkbox",
                            label: "Auto Furnace",
                            object: ᅟㅤᅠ.AutoFurnace,
                            property: "active",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "checkbox",
                            label: "Auto Hat",
                            object: ᅟㅤᅠ.AutoHat,
                            property: "active",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "checkbox",
                            label: "Auto Diving",
                            object: ᅟㅤᅠ.AutoDiving,
                            property: "active",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "checkbox",
                            label: "Auto Unlock",
                            object: ᅟㅤᅠ.AutoUnlock,
                            property: "active",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "checkbox",
                            label: "Auto Totem",
                            object: ᅟㅤᅠ.AutoTotem,
                            property: "active",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "checkbox",
                            label: "Auto Seed",
                            object: ᅟㅤᅠ.AutoSeed,
                            property: "active",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "checkbox",
                            label: "Auto Crown",
                            object: ᅟㅤᅠ.AutoCrown,
                            property: "active",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "checkbox",
                            label: "Extractor Take",
                            object: ᅟㅤᅠ.AutoExtTake,
                            property: "active",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "checkbox",
                            label: "Extractor Put",
                            object: ᅟㅤᅠ.AutoExtPut,
                            property: "active",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "checkbox",
                            label: "Bread Take",
                            object: ᅟㅤᅠ.AutoBreadTake,
                            property: "active",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "checkbox",
                            label: "Bread Put",
                            object: ᅟㅤᅠ.AutoBreadPut,
                            property: "active",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "subfolder",
                            label: "Aimbot Settings",
                            subfolder: [{
                                type: "checkbox",
                                label: "Aimbot",
                                object: ᅟㅤᅠ.Aimbot,
                                property: "active",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "checkbox",
                                label: "Show Range",
                                object: ᅟㅤᅠ.Aimbot,
                                property: "rangeVisual",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "select",
                                label: "Attack Mode",
                                object: ᅟㅤᅠ.Aimbot,
                                property: "mode",
                                options: ["Only Attack", "Attack & Chase", "Rabbit Chase"],
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "range",
                                label: "Bow Range",
                                min: 100,
                                max: 500,
                                step: 10,
                                object: ᅟㅤᅠ.Aimbot,
                                property: "BowRange",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }]
                        }, {
                            type: "subfolder",
                            label: "Auto Build Settings",
                            subfolder: [{
                                type: "checkbox",
                                label: "Auto Build",
                                object: ᅟㅤᅠ.AutoBuild,
                                property: "active",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "select",
                                label: "Mode",
                                object: ᅟㅤᅠ.AutoBuild,
                                property: "mode",
                                options: ["Bridges", "Roofs", "Plots"],
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }]
                        }, {
                            type: "subfolder",
                            label: "Spectator Settings",
                            subfolder: [{
                                type: "checkbox",
                                label: "Spectator",
                                object: ㅤﾠㅤᅠ,
                                onChange: ㅤ => {
                                    ㅤﾠㅤᅠ = !ㅤﾠㅤᅠ
                                }
                            }, {
                                type: "range",
                                label: "Speed",
                                min: 10,
                                max: 100,
                                step: 5,
                                object: ᅟㅤᅠ.Spectator,
                                property: "speed",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }]
                        }, {
                            type: "range",
                            label: "Put To Chest",
                            min: 10,
                            max: 8e3,
                            step: 1,
                            object: ᅟㅤᅠ,
                            property: "putToChest",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }],
                        Crafting: [{
                            type: "subfolder",
                            label: "Auto Craft Settings",
                            subfolder: [{
                                type: "checkbox",
                                label: "Auto Craft",
                                object: ᅟㅤᅠ.AutoCraft,
                                property: "active",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "bind",
                                label: "AutoCraft Key:",
                                buttonTextObject: ᅟㅤᅠ.AutoCraft,
                                buttonTextProperty: "bind",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }]
                        }, {
                            type: "subfolder",
                            label: "Auto Recycle Settings",
                            subfolder: [{
                                type: "checkbox",
                                label: "Auto Recycle",
                                object: ᅟㅤᅠ.AutoRecycle,
                                property: "active",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "bind",
                                label: "AutoRecycle Key:",
                                buttonTextObject: ᅟㅤᅠ.AutoRecycle,
                                buttonTextProperty: "bind",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }]
                        }, {
                            type: "subfolder",
                            label: "Smart Craft Settings",
                            subfolder: [{
                                type: "checkbox",
                                label: "Smart Craft",
                                object: ᅟㅤᅠ.SmartCraft,
                                property: "active",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "bind",
                                label: "SmartCraft Key:",
                                buttonTextObject: ᅟㅤᅠ.SmartCraft,
                                buttonTextProperty: "bind",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "select",
                                label: "Craft Mode",
                                subOption: true,
                                object: ᅟㅤᅠ.SmartCraft,
                                property: "option",
                                options: ["Reidite Spike Doors", "Amethyst Spike Doors", "Reidite Walls", "Reidite Spikes", "Amethyst Spikes", "Diamond Spikes", "Gold Spikes", "Reidite Swords", "Reidite Spears", "Reidite Helmets", "Reidite Shields"],
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings();
                                    ㅤᅟᅟﾠ = -1
                                }
                            }, {
                                type: "range",
                                label: "Craft Amount",
                                subOption: true,
                                min: 1,
                                max: 1e3,
                                step: 1,
                                object: ᅟㅤᅠ.SmartCraft,
                                property: "amount",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }]
                        }],
                        Spiking: [{
                            type: "subfolder",
                            label: "Auto Spike Settings",
                            subfolder: [{
                                type: "bind",
                                label: "AutoSpike Key:",
                                buttonTextObject: ᅟㅤᅠ.AutoSpike,
                                buttonTextProperty: "bind",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "select",
                                label: "AutoSpike Mode",
                                subOption: true,
                                object: ᅟㅤᅠ.AutoSpike,
                                property: "mode",
                                options: ["Normal", "Hidden"],
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }]
                        }, {
                            type: "subfolder",
                            label: "Auto Wall Settings",
                            subfolder: [{
                                type: "bind",
                                label: "AutoWall Key:",
                                buttonTextObject: ᅟㅤᅠ.AutoWall,
                                buttonTextProperty: "bind",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "select",
                                label: "AutoWall Mode",
                                subOption: true,
                                object: ᅟㅤᅠ.AutoWall,
                                property: "mode",
                                options: ["Normal", "Hidden"],
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }]
                        }, {
                            type: "range",
                            label: "Hidden Speed",
                            min: 0,
                            max: 10,
                            step: 1,
                            object: ᅟㅤᅠ.AutoSpike,
                            property: "speed",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }],
                        Farming: [{
                            type: "subfolder",
                            label: "Auto Farm Settings",
                            subfolder: [{
                                type: "checkbox",
                                label: "AutoFarm",
                                object: ᅟㅤᅠ.AutoFarm,
                                property: "active",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "bind",
                                label: "AutoFarm Key:",
                                buttonTextObject: ᅟㅤᅠ.AutoFarm,
                                buttonTextProperty: "bind",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "button",
                                label: "Top left of farm",
                                action: ㅤ => {
                                    let ﾠ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                                    if(ﾠ) {
                                        ᅟㅤᅠ.AutoFarm.TLX = ﾠ.x;
                                        ᅟㅤᅠ.AutoFarm.TLY = ﾠ.y
                                    }
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "button",
                                label: "Bottom right of farm",
                                action: ㅤ => {
                                    let ﾠ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                                    if(ﾠ) {
                                        ᅟㅤᅠ.AutoFarm.BRX = ﾠ.x;
                                        ᅟㅤᅠ.AutoFarm.BRY = ﾠ.y
                                    }
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "button",
                                label: "Safe Point",
                                action: ㅤ => {
                                    let ﾠ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                                    if(ﾠ) {
                                        ᅟㅤᅠ.AutoFarm.SX = ﾠ.x;
                                        ᅟㅤᅠ.AutoFarm.SY = ﾠ.y
                                    }
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "text",
                                label: "Whitelist Ids",
                                object: ᅟㅤᅠ.AutoFarm,
                                property: "whitelist",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }]
                        }, {
                            type: "checkbox",
                            label: "Auto Emerald",
                            object: ᅟㅤᅠ.AutoEmerald,
                            property: "active",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }],
                        Pathfind: [{
                            type: "subfolder",
                            label: "Pathfinder Settings",
                            subfolder: [{
                                type: "checkbox",
                                label: "Pathfinder",
                                object: ᅟㅤᅠ.PathFinder,
                                property: "active",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "checkbox",
                                label: "Give To Chest",
                                object: ᅟㅤᅠ.PathFinder,
                                property: "inventory",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "checkbox",
                                label: "Claim Previous Kit",
                                object: ᅟㅤᅠ,
                                property: "lastKit",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "bind",
                                label: "Pathfinder Key:",
                                buttonTextObject: ᅟㅤᅠ.PathFinder,
                                buttonTextProperty: "bind",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "text",
                                label: "Path X",
                                object: ᅟㅤᅠ.PathFinder.End,
                                property: "x",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "text",
                                label: "Path Y",
                                object: ᅟㅤᅠ.PathFinder.End,
                                property: "y",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "button",
                                label: "Set Pathfinder Location",
                                action: ㅤ => {
                                    let ﾠ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                                    if(ﾠ) {
                                        ᅟㅤᅠ.PathFinder.End.x = Math.floor(ﾠ.x / 100);
                                        ᅟㅤᅠ.PathFinder.End.y = Math.floor(ﾠ.y / 100)
                                    }
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }]
                        }],
                        ZMA: [{
                            type: "checkbox",
                            label: "Auto Crown",
                            object: ᅟㅤᅠ,
                            property: "ZmaAutoCrown",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "subfolder",
                            label: "ZMA Resource Settings",
                            subfolder: [{
                                type: "checkbox",
                                label: "Reidite To Chest",
                                object: ᅟㅤᅠ.ZmaRedGold,
                                property: "active",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "bind",
                                label: "Key:",
                                subOption: true,
                                buttonTextObject: ᅟㅤᅠ.ZmaRedGold,
                                buttonTextProperty: "bind",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }]
                        }, {
                            type: "subfolder",
                            label: "Auto Bottle Settings",
                            subfolder: [{
                                type: "checkbox",
                                label: "Auto Bottle",
                                object: ᅟㅤᅠ.ZmaAutoBottle,
                                property: "enabled",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "range",
                                label: "Health",
                                subOption: true,
                                min: 10,
                                max: 90,
                                step: 1,
                                object: ᅟㅤᅠ.ZmaAutoBottle,
                                property: "health",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }]
                        }],
                        Translate: [{
                            type: "subfolder",
                            label: "Translate Your Messages",
                            subfolder: [{
                                type: "checkbox",
                                label: "Your Messages",
                                object: ᅟㅤᅠ.Translation,
                                property: "translateSent",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "select",
                                label: "Translate To Language",
                                subOption: true,
                                object: ᅟㅤᅠ.Translation,
                                property: "sentLang",
                                options: ["Arabic", "Bulgarian", "Czech", "Danish", "German", "Greek", "English (British)", "English (American)", "Spanish", "Estonian", "Finnish", "French", "Hungarian", "Indonesian", "Italian", "Japanese", "Korean", "Lithuanian", "Latvian", "Norwegian Bokmål", "Dutch", "Polish", "Portuguese (Brazilian)", "Portuguese (Other)", "Romanian", "Russian", "Slovak", "Slovenian", "Swedish", "Turkish", "Ukrainian", "Chinese (Simplified)", "Chinese (Traditional)"],
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }]
                        }, {
                            type: "subfolder",
                            label: "Translate Others Messages",
                            subfolder: [{
                                type: "checkbox",
                                label: "Others Messages",
                                object: ᅟㅤᅠ.Translation,
                                property: "translateRecieved",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "select",
                                label: "Translate To Language",
                                subOption: true,
                                object: ᅟㅤᅠ.Translation,
                                property: "recievedLang",
                                options: ["Arabic", "Bulgarian", "Czech", "Danish", "German", "Greek", "English (British)", "English (American)", "Spanish", "Estonian", "Finnish", "French", "Hungarian", "Indonesian", "Italian", "Japanese", "Korean", "Lithuanian", "Latvian", "Norwegian Bokmål", "Dutch", "Polish", "Portuguese (Brazilian)", "Portuguese (Other)", "Romanian", "Russian", "Slovak", "Slovenian", "Swedish", "Turkish", "Ukrainian", "Chinese (Simplified)", "Chinese (Traditional)"],
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }]
                        }],
                        Token: [{
                            type: "text",
                            label: "Token",
                            object: ᅟㅤᅠ.localToken,
                            property: "Token",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "text",
                            label: "Token ID",
                            object: ᅟㅤᅠ.localToken,
                            property: "TokenID",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "button",
                            label: "Generate Kit Token",
                            action: ㅤ => {
                                const ﾠ = ᅟᅟᅟ(14);
                                ᅟㅤᅠ.localToken.Token = ﾠ;
                                ﾠᅟᅟﾠ("starve_token", ﾠ);
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "button",
                            label: "Copy Token",
                            action: ㅤ => {
                                prompt("Copy this", "```Token: " + ᅟㅤᅠ.localToken.Token + "\nTokenID: " + ᅟㅤᅠ.localToken.TokenID + "```")
                            }
                        }, {
                            type: "button",
                            label: "Back To Lobby",
                            action: ㅤ => {
                                if(ㅤᅟᅠㅤ || ㅤㅤᅟㅤ.WUA.enabled && ㅤㅤﾠㅤ.websocket.readyState != 1) {
                                    ﾠﾠᅟㅤ("#3b3b3b", "Are you sure you would like to go back to the lobby?", 1, function (ㅤ) {
                                        if(ㅤ) {
                                            ㅤᅟᅠㅤ = 0;
                                            ㅤᅠﾠㅤ = 1;
                                            if(ㅤㅤﾠㅤ.websocket) {
                                                ㅤㅤﾠㅤ.websocket.close()
                                            }
                                            ㅤㅤﾠﾠ.WTG(ㅤㅤﾠᅟ.WTK)
                                        }
                                    })
                                }
                            }
                        }, {
                            type: "subfolder",
                            label: "Token Holder",
                            subfolder: [{
                                type: "checkbox",
                                label: "AutoFarmer",
                                object: ᅟㅤᅠ.tokenHolder,
                                property: "autofarm",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "checkbox",
                                label: "Blue Crown Alt",
                                object: ᅟㅤᅠ.tokenHolder,
                                property: "bluecrown",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "checkbox",
                                label: "AutoSeed",
                                object: ᅟㅤᅠ.tokenHolder,
                                property: "autoseed",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "select",
                                label: "Seed To Place",
                                object: ᅟㅤᅠ.tokenHolder,
                                subOption: true,
                                options: ["Berry Seed", "Wheat Seed", "Pumpkin Seed", "Carrot Seed", "Tomato Seed", "Thornbush Seed", "Garlic Seed", "Watermelon Seed"],
                                property: "seedToPlace",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "checkbox",
                                label: "AutoCraft",
                                object: ᅟㅤᅠ.tokenHolder,
                                property: "autocraft",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "select",
                                label: "Craft Item",
                                object: ᅟㅤᅠ.tokenHolder,
                                subOption: true,
                                options: ["Golden Pitchfork", "Bands", "Bed", "Dragon Arrows", "Reidite Spike", "Reidite Spiked Door", "Reidite Wall", "Reidite Door"],
                                property: "craftId",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "checkbox",
                                label: "AutoRecycle",
                                object: ᅟㅤᅠ.tokenHolder,
                                property: "autorecycle",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "select",
                                label: "Recycle Item",
                                object: ᅟㅤᅠ.tokenHolder,
                                subOption: true,
                                options: ["Hood", "Book", "Saddle", "Bed", "Plot"],
                                property: "recycleId",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "button",
                                label: "Hold Token",
                                action: ㅤ => {
                                    if(ㅤㅤﾠㅤ.websocket && ㅤㅤﾠㅤ.websocket.readyState === 1) {
                                        ᅟㅤᅟ()
                                    }
                                }
                            }]
                        }],
                        Binds: [{
                            type: "bind",
                            label: "Spectator Key:",
                            buttonTextObject: ᅟㅤᅠ.Spectator,
                            buttonTextProperty: "bind",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "bind",
                            label: "DropSword Key:",
                            buttonTextObject: ᅟㅤᅠ.DropSword,
                            buttonTextProperty: "bind",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "bind",
                            label: "Xray Key:",
                            buttonTextObject: ᅟㅤᅠ.Xray,
                            buttonTextProperty: "bind",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "bind",
                            label: "Hide Script Key:",
                            buttonTextObject: ᅟㅤᅠ.Hidden,
                            buttonTextProperty: "bind",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "bind",
                            label: "AutoTame Key:",
                            buttonTextObject: ᅟㅤᅠ.AutoTame,
                            buttonTextProperty: "bind",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "bind",
                            label: "Aimbot Key:",
                            buttonTextObject: ᅟㅤᅠ.Aimbot,
                            buttonTextProperty: "bind",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "bind",
                            label: "AutoFire Key:",
                            buttonTextObject: ᅟㅤᅠ.AutoFire,
                            buttonTextProperty: "bind",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "bind",
                            label: "AutoBuild Key:",
                            buttonTextObject: ᅟㅤᅠ.AutoBuild,
                            buttonTextProperty: "bind",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "bind",
                            label: "AutoCrown Key:",
                            buttonTextObject: ᅟㅤᅠ.AutoCrown,
                            buttonTextProperty: "bind",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "bind",
                            label: "AutoTotem Key:",
                            buttonTextObject: ᅟㅤᅠ.AutoTotem,
                            buttonTextProperty: "bind",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "bind",
                            label: "AutoSteal Key:",
                            buttonTextObject: ᅟㅤᅠ.AutoSteal,
                            buttonTextProperty: "bind",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "bind",
                            label: "Bread Take Key:",
                            buttonTextObject: ᅟㅤᅠ.AutoBreadTake,
                            buttonTextProperty: "bind",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "bind",
                            label: "Bread Put Key:",
                            buttonTextObject: ᅟㅤᅠ.AutoBreadPut,
                            buttonTextProperty: "bind",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "bind",
                            label: "AutoEmerald Key:",
                            buttonTextObject: ᅟㅤᅠ.AutoEmerald,
                            buttonTextProperty: "bind",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "bind",
                            label: "Extractor Take Key:",
                            buttonTextObject: ᅟㅤᅠ.AutoExtTake,
                            buttonTextProperty: "bind",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "bind",
                            label: "Extractor Put Key:",
                            buttonTextObject: ᅟㅤᅠ.AutoExtPut,
                            buttonTextProperty: "bind",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }, {
                            type: "bind",
                            label: "AutoFurnace:",
                            buttonTextObject: ᅟㅤᅠ.AutoFurnace,
                            buttonTextProperty: "bind",
                            onChange: ㅤ => {
                                ᅠﾠㅤ.saveSettings()
                            }
                        }],
                        Player: [{
                            type: "subfolder",
                            label: "Skin",
                            subfolder: [{
                                type: "checkbox",
                                label: "Skin Changer",
                                object: ᅟㅤᅠ.skinChanger,
                                property: "active",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings();
                                    let ﾠ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                                    let ᅟ = ㅤㅤﾠᅠ.WTN[ㅤㅤᅟﾠ.uid / ㅤㅤᅟﾠ.max_units];
                                    if(ﾠ && ㅤᅠᅟᅟ.skin) {
                                        ﾠ[ㅤᅠᅟᅟ.skin] = ᅟㅤᅠ.skinChanger.active ? ᅟㅤᅠ.skinChanger.skin : ㅤᅠᅠᅟ;
                                        ᅟ[ㅤᅠᅟᅟ.skin] = ﾠ[ㅤᅠᅟᅟ.skin]
                                    }
                                }
                            }, {
                                type: "range",
                                label: "Skin ID",
                                min: 0,
                                max: 270,
                                step: 1,
                                object: ᅟㅤᅠ.skinChanger,
                                property: "skin",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings();
                                    let ﾠ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                                    let ᅟ = ㅤㅤﾠᅠ.WTN[ㅤㅤᅟﾠ.uid / ㅤㅤᅟﾠ.max_units];
                                    if(ﾠ && ㅤᅠᅟᅟ.skin && ᅟㅤᅠ.skinChanger.active) {
                                        ﾠ[ㅤᅠᅟᅟ.skin] = ᅟㅤᅠ.skinChanger.skin;
                                        ᅟ[ㅤᅠᅟᅟ.skin] = ﾠ[ㅤᅠᅟᅟ.skin]
                                    }
                                }
                            }]
                        }, {
                            type: "subfolder",
                            label: "Accessories",
                            subfolder: [{
                                type: "checkbox",
                                label: "Accessories Changer",
                                object: ᅟㅤᅠ.accChanger,
                                property: "active",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings();
                                    let ﾠ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                                    let ᅟ = ㅤㅤﾠᅠ.WTN[ㅤㅤᅟﾠ.uid / ㅤㅤᅟﾠ.max_units];
                                    if(ﾠ && ㅤᅠᅟᅟ.acc) {
                                        ﾠ[ㅤᅠᅟᅟ.acc] = ᅟㅤᅠ.accChanger.active ? ᅟㅤᅠ.accChanger.acc : ㅤᅠᅠㅤ;
                                        ᅟ[ㅤᅠᅟᅟ.acc] = ﾠ[ㅤᅠᅟᅟ.acc]
                                    }
                                }
                            }, {
                                type: "range",
                                label: "Accessories ID",
                                min: 0,
                                max: 120,
                                step: 1,
                                object: ᅟㅤᅠ.accChanger,
                                property: "acc",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings();
                                    let ﾠ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                                    let ᅟ = ㅤㅤﾠᅠ.WTN[ㅤㅤᅟﾠ.uid / ㅤㅤᅟﾠ.max_units];
                                    if(ﾠ && ㅤᅠᅟᅟ.acc && ᅟㅤᅠ.accChanger.active) {
                                        ﾠ[ㅤᅠᅟᅟ.acc] = ᅟㅤᅠ.accChanger.acc;
                                        ᅟ[ㅤᅠᅟᅟ.acc] = ﾠ[ㅤᅠᅟᅟ.acc]
                                    }
                                }
                            }]
                        }, {
                            type: "subfolder",
                            label: "Bag",
                            subfolder: [{
                                type: "checkbox",
                                label: "Bag Changer",
                                object: ᅟㅤᅠ.bagChanger,
                                property: "active",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings();
                                    let ﾠ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                                    let ᅟ = ㅤㅤﾠᅠ.WTN[ㅤㅤᅟﾠ.uid / ㅤㅤᅟﾠ.max_units];
                                    if(ﾠ && ㅤᅠᅟᅟ.bag) {
                                        ﾠ[ㅤᅠᅟᅟ.bag] = ᅟㅤᅠ.bagChanger.active ? ᅟㅤᅠ.bagChanger.bag : ㅤᅠᅠﾠ;
                                        ᅟ[ㅤᅠᅟᅟ.bag] = ﾠ[ㅤᅠᅟᅟ.bag]
                                    }
                                }
                            }, {
                                type: "range",
                                label: "Bag ID",
                                min: 0,
                                max: 81,
                                step: 1,
                                object: ᅟㅤᅠ.bagChanger,
                                property: "bag",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings();
                                    let ﾠ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                                    let ᅟ = ㅤㅤﾠᅠ.WTN[ㅤㅤᅟﾠ.uid / ㅤㅤᅟﾠ.max_units];
                                    if(ﾠ && ㅤᅠᅟᅟ.bag && ᅟㅤᅠ.bagChanger.active) {
                                        ﾠ[ㅤᅠᅟᅟ.bag] = ᅟㅤᅠ.bagChanger.bag;
                                        ᅟ[ㅤᅠᅟᅟ.bag] = ﾠ[ㅤᅠᅟᅟ.bag]
                                    }
                                }
                            }]
                        }, {
                            type: "subfolder",
                            label: "Book",
                            subfolder: [{
                                type: "checkbox",
                                label: "Book Changer",
                                object: ᅟㅤᅠ.bookChanger,
                                property: "active",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings();
                                    let ﾠ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                                    let ᅟ = ㅤㅤﾠᅠ.WTN[ㅤㅤᅟﾠ.uid / ㅤㅤᅟﾠ.max_units];
                                    if(ﾠ && ㅤᅠᅟᅟ.book) {
                                        ﾠ[ㅤᅠᅟᅟ.book] = ᅟㅤᅠ.bookChanger.active ? ᅟㅤᅠ.bookChanger.book : ㅤᅠᅟᅠ;
                                        ᅟ[ㅤᅠᅟᅟ.book] = ﾠ[ㅤᅠᅟᅟ.book]
                                    }
                                }
                            }, {
                                type: "range",
                                label: "Book ID",
                                min: 0,
                                max: 49,
                                step: 1,
                                object: ᅟㅤᅠ.bookChanger,
                                property: "book",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings();
                                    let ﾠ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                                    let ᅟ = ㅤㅤﾠᅠ.WTN[ㅤㅤᅟﾠ.uid / ㅤㅤᅟﾠ.max_units];
                                    if(ﾠ && ㅤᅠᅟᅟ.book && ᅟㅤᅠ.bookChanger.active) {
                                        ﾠ[ㅤᅠᅟᅟ.book] = ᅟㅤᅠ.bookChanger.book;
                                        ᅟ[ㅤᅠᅟᅟ.book] = ﾠ[ㅤᅠᅟᅟ.book]
                                    }
                                }
                            }]
                        }, {
                            type: "subfolder",
                            label: "Market",
                            subfolder: [{
                                type: "range",
                                label: "Berries Amount",
                                min: 0,
                                max: 999,
                                step: 1,
                                object: ᅟㅤᅠ.market,
                                property: "wood",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "button",
                                label: "Convert Berries",
                                action: ㅤ => {
                                    let ﾠ = 83;
                                    let ᅟ = ᅟㅤᅠ.market.wood;
                                    let ᅠ = Math.floor(ᅟ / ﾠ);
                                    let ㅤㅤ = ᅟ - ᅠ * ﾠ;
                                    ᅟㅤᅠ.market.wood = ﾠ;
                                    for(let ㅤ = 0; ㅤ < ᅠ > 0 ? ᅠ : 0; ㅤ++) {
                                        if(ㅤㅤﾠㅤ.websocket && ㅤㅤﾠㅤ.websocket.readyState === 1) {
                                            ㅤㅤﾠㅤ.WQN(ﾠᅠﾠㅤ("wood", ᅟㅤᅠ.market))
                                        }
                                    }
                                    ᅟㅤᅠ.market.wood = ㅤㅤ < ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.PLANT] ? ㅤㅤ : ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.PLANT];
                                    if(ㅤㅤﾠㅤ.websocket && ㅤㅤﾠㅤ.websocket.readyState === 1) {
                                        ㅤㅤﾠㅤ.WQN(ﾠᅠﾠㅤ("wood", ᅟㅤᅠ.market))
                                    }
                                    ᅟㅤᅠ.market.wood = ᅟ
                                }
                            }, {
                                type: "range",
                                label: "Pumpkin Amount",
                                min: 0,
                                max: 999,
                                step: 1,
                                object: ᅟㅤᅠ.market,
                                property: "stone",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "button",
                                label: "Convert Pumpkin",
                                action: ㅤ => {
                                    let ﾠ = 62;
                                    let ᅟ = ᅟㅤᅠ.market.stone;
                                    let ᅠ = Math.floor(ᅟ / ﾠ);
                                    let ㅤㅤ = ᅟ - ᅠ * ﾠ;
                                    ᅟㅤᅠ.market.stone = ﾠ;
                                    for(let ㅤ = 0; ㅤ < ᅠ > 0 ? ᅠ : 0; ㅤ++) {
                                        if(ㅤㅤﾠㅤ.websocket && ㅤㅤﾠㅤ.websocket.readyState === 1) {
                                            ㅤㅤﾠㅤ.WQN(ﾠᅠﾠㅤ("stone", ᅟㅤᅠ.market))
                                        }
                                    }
                                    ᅟㅤᅠ.market.stone = ㅤㅤ < ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.PLANT] ? ㅤㅤ : ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.PLANT];
                                    if(ㅤㅤﾠㅤ.websocket && ㅤㅤﾠㅤ.websocket.readyState === 1) {
                                        ㅤㅤﾠㅤ.WQN(ﾠᅠﾠㅤ("stone", ᅟㅤᅠ.market))
                                    }
                                    ᅟㅤᅠ.market.stone = ᅟ
                                }
                            }, {
                                type: "range",
                                label: "Bread Amount",
                                min: 0,
                                max: 999,
                                step: 1,
                                object: ᅟㅤᅠ.market,
                                property: "gold",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "button",
                                label: "Convert Bread",
                                action: ㅤ => {
                                    let ﾠ = 41;
                                    let ᅟ = ᅟㅤᅠ.market.gold;
                                    let ᅠ = Math.floor(ᅟ / ﾠ);
                                    let ㅤㅤ = ᅟ - ᅠ * ﾠ;
                                    ᅟㅤᅠ.market.gold = ﾠ;
                                    for(let ㅤ = 0; ㅤ < ᅠ > 0 ? ᅠ : 0; ㅤ++) {
                                        if(ㅤㅤﾠㅤ.websocket && ㅤㅤﾠㅤ.websocket.readyState === 1) {
                                            ㅤㅤﾠㅤ.WQN(ﾠᅠﾠㅤ("gold", ᅟㅤᅠ.market))
                                        }
                                    }
                                    ᅟㅤᅠ.market.gold = ㅤㅤ < ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.PLANT] ? ㅤㅤ : ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.PLANT];
                                    if(ㅤㅤﾠㅤ.websocket && ㅤㅤﾠㅤ.websocket.readyState === 1) {
                                        ㅤㅤﾠㅤ.WQN(ﾠᅠﾠㅤ("gold", ᅟㅤᅠ.market))
                                    }
                                    ᅟㅤᅠ.market.gold = ᅟ
                                }
                            }, {
                                type: "range",
                                label: "Carrot Amount",
                                min: 0,
                                max: 999,
                                step: 1,
                                object: ᅟㅤᅠ.market,
                                property: "diamond",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "button",
                                label: "Convert Carrot",
                                action: ㅤ => {
                                    let ﾠ = 252;
                                    let ᅟ = ᅟㅤᅠ.market.diamond;
                                    let ᅠ = Math.floor(ᅟ / ﾠ);
                                    let ㅤㅤ = ᅟ - ᅠ * ﾠ;
                                    ᅟㅤᅠ.market.diamond = ﾠ;
                                    for(let ㅤ = 0; ㅤ < ᅠ > 0 ? ᅠ : 0; ㅤ++) {
                                        if(ㅤㅤﾠㅤ.websocket && ㅤㅤﾠㅤ.websocket.readyState === 1) {
                                            ㅤㅤﾠㅤ.WQN(ﾠᅠﾠㅤ("diamond", ᅟㅤᅠ.market))
                                        }
                                    }
                                    ᅟㅤᅠ.market.diamond = ㅤㅤ < ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.PLANT] ? ㅤㅤ : ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.PLANT];
                                    if(ㅤㅤﾠㅤ.websocket && ㅤㅤﾠㅤ.websocket.readyState === 1) {
                                        ㅤㅤﾠㅤ.WQN(ﾠᅠﾠㅤ("diamond", ᅟㅤᅠ.market))
                                    }
                                    ᅟㅤᅠ.market.diamond = ᅟ
                                }
                            }, {
                                type: "range",
                                label: "Tomato Amount",
                                min: 0,
                                max: 999,
                                step: 1,
                                object: ᅟㅤᅠ.market,
                                property: "amethyst",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "button",
                                label: "Convert Tomato",
                                action: ㅤ => {
                                    let ﾠ = 248;
                                    let ᅟ = ᅟㅤᅠ.market.amethyst;
                                    let ᅠ = Math.floor(ᅟ / ﾠ);
                                    let ㅤㅤ = ᅟ - ᅠ * ﾠ;
                                    ᅟㅤᅠ.market.amethyst = ﾠ;
                                    for(let ㅤ = 0; ㅤ < ᅠ > 0 ? ᅠ : 0; ㅤ++) {
                                        if(ㅤㅤﾠㅤ.websocket && ㅤㅤﾠㅤ.websocket.readyState === 1) {
                                            ㅤㅤﾠㅤ.WQN(ﾠᅠﾠㅤ("amethyst", ᅟㅤᅠ.market))
                                        }
                                    }
                                    ᅟㅤᅠ.market.amethyst = ㅤㅤ < ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.PLANT] ? ㅤㅤ : ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.PLANT];
                                    if(ㅤㅤﾠㅤ.websocket && ㅤㅤﾠㅤ.websocket.readyState === 1) {
                                        ㅤㅤﾠㅤ.WQN(ﾠᅠﾠㅤ("amethyst", ᅟㅤᅠ.market))
                                    }
                                    ᅟㅤᅠ.market.amethyst = ᅟ
                                }
                            }, {
                                type: "range",
                                label: "Thornbush Amount",
                                min: 0,
                                max: 999,
                                step: 1,
                                object: ᅟㅤᅠ.market,
                                property: "reidite",
                                onChange: ㅤ => {
                                    ᅠﾠㅤ.saveSettings()
                                }
                            }, {
                                type: "button",
                                label: "Convert Thornbush",
                                action: ㅤ => {
                                    let ﾠ = 240;
                                    let ᅟ = ᅟㅤᅠ.market.reidite;
                                    let ᅠ = Math.floor(ᅟ / ﾠ);
                                    let ㅤㅤ = ᅟ - ᅠ * ﾠ;
                                    ᅟㅤᅠ.market.reidite = ﾠ;
                                    for(let ㅤ = 0; ㅤ < ᅠ > 0 ? ᅠ : 0; ㅤ++) {
                                        if(ㅤㅤﾠㅤ.websocket && ㅤㅤﾠㅤ.websocket.readyState === 1) {
                                            ㅤㅤﾠㅤ.WQN(ﾠᅠﾠㅤ("reidite", ᅟㅤᅠ.market))
                                        }
                                    }
                                    ᅟㅤᅠ.market.reidite = ㅤㅤ < ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.PLANT] ? ㅤㅤ : ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.PLANT];
                                    if(ㅤㅤﾠㅤ.websocket && ㅤㅤﾠㅤ.websocket.readyState === 1) {
                                        ㅤㅤﾠㅤ.WQN(ﾠᅠﾠㅤ("reidite", ᅟㅤᅠ.market))
                                    }
                                    ᅟㅤᅠ.market.reidite = ᅟ
                                }
                            }]
                        }]
                    }
                };
                let ㅤ;
                const ﾠ = localStorage.getItem("guiSettings");
                ㅤ = ﾠ ? JSON.parse(ﾠ) : null;
                if(Array.isArray(ㅤ) && ㅤ.length) {
                    ㅤᅠﾠᅠ.align = ㅤ[0];
                    ㅤᅠﾠᅠ.toggleGuiKey = ㅤ[1];
                    ㅤᅠﾠᅠ.toggleGuiButton = ㅤ[2];
                    ㅤᅠﾠᅠ.draggable = ㅤ[3];
                    ㅤᅠﾠᅠ.fontSize = ㅤ[4];
                    ㅤᅠﾠᅠ.opacity = ㅤ[5];
                    ㅤᅠﾠᅠ.width = ㅤ[6];
                    ㅤᅠﾠᅠ.height = ㅤ[7]
                }
                async function ᅟ(ㅤ) {
                    if(!ㅤ || !ㅤ.length) {
                        try {
                            const ﾠ = localStorage.getItem("settings_all");
                            if(ﾠ) {
                                ㅤ = JSON.parse(ﾠ)
                            } else {
                                ㅤ = []
                            }
                        } catch (ﾠ) {
                            console.log("Failed to parse settings_all", ﾠ);
                            ㅤ = []
                        }
                    }
                    const ﾠ = ᅟﾠﾠ(ᅟㅤᅠ);
                    const ᅟ = ﾠ.filter(ㅤ => !(ㅤ in ᅟﾠㅤ));
                    const ᅠ = Object.keys(ᅟﾠㅤ).filter(ㅤ => !ﾠ.includes(ㅤ));
                    if(ᅟ.length || ᅠ.length) {
                        if(ᅠᅟㅤ) {
                            console.log("Missing from map:", ᅟ);
                            console.log("Extra in map:", ᅠ);
                            alert("[SettingsIDS]: Missing SettingsIDS For Some Settings (Check Console)")
                        } else {
                            alert("[SETTINGS]: Failed To Load")
                        }
                        return
                    }
                    if(ㅤ.length) {
                        ㅤ.forEach(([ㅤ, ﾠ]) => {
                            if(ᅟᅟﾠ[ㅤ]) {
                                ᅟᅟﾠ[ㅤ].set(ﾠ)
                            }
                        })
                    } else {
                        ᅠﾠㅤ.saveSettings()
                    }
                    ᅟㅤᅠ.timePlayed.resetClock = true;
                    ᅟㅤᅠ.Hidden.active = false;
                    if(ﾠᅟᅟㅤ("starve_token") !== ᅟㅤᅠ.localToken.Token) {
                        ﾠᅟᅟﾠ("starve_token", ᅟㅤᅠ.localToken.Token)
                    }
                    if(ᅟㅤᅠ.localToken.Token === "null" || !ᅟㅤᅠ.localToken.Token || ᅟㅤᅠ.localToken.Token.length < 14) {
                        console.log(ᅟㅤᅠ.localToken.Token);
                        ᅠﾠㅤ.saveSettings()
                    }
                    if(ﾠᅟᅟㅤ("starve_token_id") !== ᅟㅤᅠ.localToken.TokenID) {
                        ﾠᅟᅟﾠ("starve_token_id", ᅟㅤᅠ.localToken.TokenID)
                    }
                    ﾠㅤﾠᅟ();
                    ﾠㅤᅟㅤ();
                    ﾠㅤﾠᅠ();
                    const ㅤㅤ = document.getElementById("game_canvas");
                    if(ㅤㅤ) {
                        ㅤㅤ.style.filter = "brightness(" + ᅟㅤᅠ.canvasBrightness + ")"
                    }
                }
                ᅠﾠㅤ = new ᅟᅠᅟ(ㅤᅠﾠᅠ);
                ᅟ();
                ᅠﾠㅤ.build();
                ᅠㅤㅤᅟ()
            }

            function ᅟㅤᅠᅠ() {
                Object.defineProperty = Object.defineProperty;
                ﾠ.setTimeout(() => {
                    ᅠﾠﾠ = true
                }, 1e3);
                ㅤㅤᅠᅟ = ﾠ.setInterval(() => {
                    ᅟㅤᅠﾠ()
                }, 0)
            }

            function ᅟﾠㅤㅤ() {
                if(ᅟㅤᅠ.Hidden.active || ㅤㅤﾠﾠ.WSJ.translate.y == 0 || ㅤㅤﾠﾠ.WSJ.translate.x == 0 || ㅤㅤﾠㅤ.websocket.readyState != 1) {
                    return
                }
                if(ᅟㅤᅠ.showLeaderBoardLevels) {
                    const ㅤ = () => {
                        const ㅤ = [];
                        ㅤㅤᅟㅤ.WUQ.WUT.forEach(ﾠ => {
                            const ᅟ = ㅤㅤﾠᅠ.WTN[ﾠ];
                            ㅤ.push(ᅟ.level)
                        });
                        return ㅤ
                    };
                    let ﾠ = ㅤㅤᅟㅤ.WUY.translate.y - 48;
                    ㅤ().forEach(ㅤ => {
                        if(ㅤ > 0) {
                            ㅤﾠㅤㅤ.strokeStyle = "#000";
                            ㅤﾠㅤㅤ.fillStyle = "#f9e8a2";
                            ㅤﾠㅤㅤ.lineWidth = 1;
                            ㅤﾠㅤㅤ.font = "15px Baloo Paaji";
                            if(ㅤ >= 10) {
                                ㅤﾠㅤㅤ.fillText("[" + ㅤ + "]", ㅤㅤᅟㅤ.WUY.translate.x + 137, ﾠ)
                            } else {
                                ㅤﾠㅤㅤ.fillText("[" + ㅤ + "]", ㅤㅤᅟㅤ.WUY.translate.x + 141, ﾠ)
                            }
                        }
                        ﾠ += 22
                    })
                }
                if(ᅟㅤᅠ.listEnabledHacks.mode != "Off" && !ᅟㅤᅠ.Hidden.active) {
                    if(!ㅤㅤᅟﾠ.update || ㅤㅤﾠﾠ.WSJ.translate.y == 0 || ㅤㅤﾠﾠ.WSJ.translate.x == 0 || ㅤㅤﾠㅤ.websocket.readyState != 1) {
                        return
                    }
                    let ㅤ = ᅟㅤᅠ.listEnabledHacks.mode == "Bottom Left" ? document["defaultView"].innerHeight - 25 : 25;
                    for(let ﾠ in ᅟㅤᅠ) {
                        if(ᅟㅤᅠ[ﾠ].active && ᅟㅤᅠ[ﾠ].bind) {
                            ㅤﾠㅤㅤ.save();
                            ㅤﾠㅤㅤ.font = "18px Baloo Paaji";
                            ㅤﾠㅤㅤ.strokeStyle = "black";
                            ㅤﾠㅤㅤ.lineWidth = 7;
                            ㅤﾠㅤㅤ.fillStyle = !ᅟㅤᅠ.darkMode ? "white" : "#BBB";
                            ㅤﾠㅤㅤ.strokeText(ﾠ, 15, ㅤ);
                            ㅤﾠㅤㅤ.fillText(ﾠ, 15, ㅤ);
                            ㅤﾠㅤㅤ.restore();
                            if(ᅟㅤᅠ.listEnabledHacks.mode == "Bottom Left") {
                                ㅤ -= 20
                            } else {
                                ㅤ += 20
                            }
                        }
                    }
                }
            }

            function ᅟﾠㅤﾠ() {
                let ㅤ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                for(let ﾠ = 0; ﾠ < ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.PLAYERS].length; ﾠ++) {
                    let ᅟ = ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.PLAYERS][ﾠ];
                    Object.keys(ᅟ).forEach((ﾠ, ᅠ) => {
                        if(ᅠ == 1) {
                            ㅤㅤᅟﾠ.pid = ﾠ
                        }
                        if(ᅠ == 6) {
                            ㅤㅤᅟﾠ.nangle = ﾠ
                        }
                        if(ᅠ == 12) {
                            ㅤㅤᅟﾠ.speed = ﾠ
                        }
                        if(ᅠ == 21) {
                            ㅤㅤᅟﾠ.dist_winter = ﾠ
                        }
                        if(ᅠ == 31) {
                            ㅤㅤᅟﾠ.tower = ﾠ
                        }
                        if(ᅠ == 34) {
                            ㅤㅤᅟﾠ.fly = ﾠ
                        }
                        if(ᅠ == 36) {
                            ㅤㅤᅟﾠ.draw = ﾠ
                        }
                        if(ᅠ == 37) {
                            ㅤㅤᅟﾠ.draw_vehicle = ﾠ
                        }
                        if(ᅠ == 42) {
                            ㅤㅤᅟﾠ.vehicle_fx5 = ﾠ
                        }
                        if(ᅠ == 43) {
                            ㅤㅤᅟﾠ.tower_fx = ﾠ
                        }
                        if(ᅠ == 44) {
                            ㅤㅤᅟﾠ.hit = ﾠ
                        }
                        if(ᅠ == 63) {
                            ㅤㅤᅟﾠ.vehicle = ﾠ
                        }
                        if(ᅠ == 65) {
                            ㅤㅤᅟﾠ.clothe = ﾠ
                        }
                        if(ᅠ == 66) {
                            ㅤㅤᅟﾠ.ghost = ﾠ
                        }
                        if(typeof ᅟ[ﾠ] === "function") {
                            ㅤㅤᅟﾠ.update = ﾠ
                        }
                        if(ㅤ) {
                            ㅤㅤᅟﾠ.flyableEquiped = ㅤ[ㅤㅤᅟﾠ.vehicle]
                        }
                    })
                }
                if(ㅤᅟㅤᅟ || ㅤᅟㅤᅠ) {
                    for(let ㅤ = 0; ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CHEST].length > ㅤ; ㅤ++) {
                        let ﾠ = ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CHEST][ㅤ];
                        if(ㅤᅟㅤᅟ) {
                            if(!ㅤㅤᅟﾠ.hit || !ﾠ || !ﾠ[ㅤㅤᅟﾠ.hit]) {
                                continue
                            }
                            Object.keys(ﾠ[ㅤㅤᅟﾠ.hit]).forEach((ㅤ, ᅟ) => {
                                if(ᅟ === 0) {
                                    ㅤㅤᅟﾠ.anim = ㅤ;
                                    const ᅟ = ﾠ[ㅤㅤᅟﾠ.hit][ㅤㅤᅟﾠ.anim];
                                    if(!ᅟ) {
                                        return
                                    }
                                    const ᅠ = Object.keys(ᅟ);
                                    ㅤㅤᅟﾠ.o = ᅠ[0];
                                    ㅤㅤᅟﾠ.v = ᅠ[1];
                                    ㅤᅟㅤᅟ = false
                                }
                            })
                        }
                        if(ㅤᅟㅤᅠ) {
                            const ㅤ = (ﾠ.action | 0) / 2 - 1;
                            const ᅟ = ㅤㅤﾠﾠ.WTF[ㅤ];
                            if(ㅤ < 0 || !ᅟ || !ᅟ.info) {
                                continue
                            }
                            Object.keys(ᅟ.info).forEach((ㅤ, ﾠ) => {
                                if(ﾠ === 2) {
                                    ㅤㅤᅟﾠ.img = ㅤ;
                                    const ﾠ = ᅟ.info[ㅤ]?.[0];
                                    if(!ﾠ) {
                                        return
                                    }
                                    const ᅠ = Object.keys(ﾠ)[3];
                                    if(ᅠ) {
                                        ㅤㅤᅟﾠ.src = ᅠ;
                                        ㅤᅟㅤᅠ = false
                                    }
                                }
                            })
                        }
                    }
                }
                if(ㅤᅟﾠㅤ) {
                    for(let ㅤ = 0, ﾠ = [...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.ROOF]], ᅟ = ﾠ.length; ㅤ < ᅟ; ㅤ++) {
                        let ᅟ = ﾠ[ㅤ];
                        if(ᅟ) {
                            Object.keys(ᅟ).forEach((ㅤ, ﾠ) => {
                                if(ﾠ == 15) {
                                    ㅤㅤᅟﾠ.j = ㅤ
                                }
                                if(ﾠ == 16) {
                                    ㅤㅤᅟﾠ.i = ㅤ
                                }
                                if(ﾠ == 18) {
                                    ㅤㅤᅟﾠ.opacity = ㅤ
                                }
                                ㅤᅟﾠㅤ = false
                            });
                            Object.keys(ᅟ[ㅤㅤᅟﾠ.hit]).forEach((ㅤ, ﾠ) => {
                                if(ﾠ == 0) {
                                    ㅤㅤᅟﾠ.anim = ㅤ;
                                    Object.keys(ᅟ[ㅤㅤᅟﾠ.hit][ㅤㅤᅟﾠ.anim]).forEach((ㅤ, ﾠ) => {
                                        if(ﾠ == 0) {
                                            ㅤㅤᅟﾠ.o = ㅤ
                                        }
                                        if(ﾠ == 1) {
                                            ㅤㅤᅟﾠ.v = ㅤ
                                        }
                                        ㅤᅟㅤᅟ = false
                                    })
                                }
                            })
                        }
                    }
                }
                if(ᅟㅤᅠ.smoothRoofs || ᅟㅤᅠ.Roof.active) {
                    for(let ㅤ = 0, ﾠ = [...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.ROOF]], ᅟ = ﾠ.length; ㅤ < ᅟ; ㅤ++) {
                        let ᅟ = ﾠ[ㅤ];
                        if(!ᅟ.checked) {
                            try {
                                if(!ㅤﾠᅠᅠ.drawRoof) {
                                    ㅤﾠᅠᅠ.drawRoof = ᅟ[ㅤㅤᅟﾠ.draw]
                                }
                                ᅟ[ㅤㅤᅟﾠ.draw] = function (ㅤ) {
                                    if(!ᅟㅤᅠ.Hidden.active && (ᅟㅤᅠ.smoothRoofs || ᅟㅤᅠ.Roof.active)) {
                                        return ﾠᅠㅤﾠ(ᅟ)
                                    } else {
                                        ㅤﾠᅠᅠ.drawRoof.call(this, ㅤ)
                                    }
                                };
                                ᅟ.checked = true
                            } catch (ㅤ) {
                                console.log("Failed To Bind Roof Drawing", ㅤ)
                            }
                        }
                    }
                }
                if(ᅟㅤᅠ.ColoredSpikes.active) {
                    try {
                        for(let ㅤ = 0, ﾠ = [...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.WOOD_DOOR], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.STONE_DOOR], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.GOLD_DOOR], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.DIAMOND_DOOR], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.AMETHYST_DOOR], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.REIDITE_DOOR], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.WOOD_DOOR_SPIKE], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.STONE_DOOR_SPIKE], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.GOLD_DOOR_SPIKE], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.DIAMOND_DOOR_SPIKE], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.AMETHYST_DOOR_SPIKE], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.REIDITE_DOOR_SPIKE]], ᅟ = ﾠ.length; ㅤ < ᅟ; ㅤ++) {
                            let ᅟ = ﾠ[ㅤ];
                            if(ᅟ) {
                                if(ㅤᅟㅤᅟ) {
                                    Object.keys(ᅟ[ㅤㅤᅟﾠ.hit]).forEach((ㅤ, ﾠ) => {
                                        if(ﾠ == 0) {
                                            ㅤㅤᅟﾠ.anim = ㅤ;
                                            Object.keys(ᅟ[ㅤㅤᅟﾠ.hit][ㅤㅤᅟﾠ.anim]).forEach((ㅤ, ﾠ) => {
                                                if(ﾠ == 0) {
                                                    ㅤㅤᅟﾠ.o = ㅤ
                                                }
                                                if(ﾠ == 1) {
                                                    ㅤㅤᅟﾠ.v = ㅤ
                                                }
                                                ㅤᅟㅤᅟ = false
                                            })
                                        }
                                    })
                                }
                                if(!ᅟ.checked) {
                                    try {
                                        if(!ㅤﾠᅠᅠ.drawDoor) {
                                            ㅤﾠᅠᅠ.drawDoor = ᅟ[ㅤㅤᅟﾠ.draw]
                                        }
                                        ᅟ[ㅤㅤᅟﾠ.draw] = function (ㅤ) {
                                            if(ᅟㅤᅠ.ColoredSpikes.active && !(ᅟ.info & 1) && !ᅟㅤᅠ.Hidden.active) {
                                                return ﾠᅠㅤᅠ(ᅟ)
                                            } else {
                                                return ㅤﾠᅠᅠ.drawDoor.call(this, ㅤ)
                                            }
                                        };
                                        ᅟ.checked = true
                                    } catch (ㅤ) {
                                        console.log("Failed To Bind Door Drawing", ㅤ)
                                    }
                                }
                            }
                        }
                    } catch (ㅤ) {
                        console.log("Failed To Define Door Drawing", ㅤ)
                    }
                    try {
                        for(let ㅤ = 0, ﾠ = [...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.SPIKE], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.STONE_SPIKE], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.GOLD_SPIKE], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.DIAMOND_SPIKE], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.AMETHYST_SPIKE], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.REIDITE_SPIKE]], ᅟ = ﾠ.length; ㅤ < ᅟ; ㅤ++) {
                            let ᅟ = ﾠ[ㅤ];
                            if(ᅟ) {
                                if(ㅤᅟㅤᅟ) {
                                    Object.keys(ᅟ[ㅤㅤᅟﾠ.hit]).forEach((ㅤ, ﾠ) => {
                                        if(ﾠ == 0) {
                                            ㅤㅤᅟﾠ.anim = ㅤ;
                                            Object.keys(ᅟ[ㅤㅤᅟﾠ.hit][ㅤㅤᅟﾠ.anim]).forEach((ㅤ, ﾠ) => {
                                                if(ﾠ == 0) {
                                                    ㅤㅤᅟﾠ.o = ㅤ
                                                }
                                                if(ﾠ == 1) {
                                                    ㅤㅤᅟﾠ.v = ㅤ
                                                }
                                                ㅤᅟㅤᅟ = false
                                            })
                                        }
                                    })
                                }
                                if(!ᅟ.checked) {
                                    try {
                                        if(!ㅤﾠᅠᅠ.drawSpike) {
                                            ㅤﾠᅠᅠ.drawSpike = ᅟ[ㅤㅤᅟﾠ.draw]
                                        }
                                        ᅟ[ㅤㅤᅟﾠ.draw] = function (ㅤ) {
                                            if(ᅟㅤᅠ.ColoredSpikes.active && !ᅟㅤᅠ.Hidden.active) {
                                                return ﾠᅠㅤᅟ(ᅟ)
                                            } else {
                                                return ㅤﾠᅠᅠ.drawSpike.call(this, ㅤ)
                                            }
                                        };
                                        ᅟ.checked = true
                                    } catch (ㅤ) {
                                        console.log("Failed To Bind Spike Drawing", ㅤ)
                                    }
                                }
                            }
                        }
                    } catch (ㅤ) {
                        console.log("Failed To Define Spike Drawing")
                    }
                }
                if(ᅟㅤᅠ.buildingInfo) {
                    try {
                        for(let ㅤ = 0, ﾠ = [...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EXTRACTOR_MACHINE_STONE], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EXTRACTOR_MACHINE_GOLD], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EXTRACTOR_MACHINE_DIAMOND], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EXTRACTOR_MACHINE_AMETHYST], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EXTRACTOR_MACHINE_REIDITE], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EXTRACTOR_MACHINE_EMERALD], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EXTRACTOR_MACHINE_COPPER], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EXTRACTOR_MACHINE_IRON], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EXTRACTOR_MACHINE_TOPAZ], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EXTRACTOR_MACHINE_SAPPHIRE], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EXTRACTOR_MACHINE_JADE], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EXTRACTOR_MACHINE_RUBY], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EXTRACTOR_MACHINE_COAL], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EXTRACTOR_MACHINE_AQUAMARINE]], ᅟ = ﾠ.length; ㅤ < ᅟ; ㅤ++) {
                            let ᅟ = ﾠ[ㅤ];
                            if(ᅟ) {
                                if(!ᅟ.img) {
                                    ᅟ.img = new ﾠㅤᅠﾠ(90, 90, 1);
                                    if(ᅟ.info) {
                                        ᅟ.img.drawText(ᅟ.info, 18, "black")
                                    }
                                    ᅟ[ㅤㅤᅟﾠ.update] = function () {
                                        if(ᅟ.info) {
                                            ᅟ.img.drawText(ᅟ.info, 18, "black")
                                        }
                                    }
                                }
                                if(ᅟ.info) {
                                    ㅤﾠㅤㅤ.save();
                                    ㅤﾠㅤㅤ.drawImage(ᅟ.img.canvas, ㅤㅤᅟㅤ.WUF.x + ᅟ.x - 30, ㅤㅤᅟㅤ.WUF.y + ᅟ.y - 40);
                                    ㅤﾠㅤㅤ.restore()
                                }
                            }
                        }
                    } catch (ㅤ) {
                        console.log("Failed To Draw Extractor Building Info", ㅤ)
                    }
                    try {
                        for(let ㅤ = 0, ﾠ = ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.BREAD_OVEN], ᅟ = ﾠ.length; ㅤ < ᅟ; ㅤ++) {
                            let ᅟ = ﾠ[ㅤ];
                            if(ᅟ) {
                                if(!ᅟ.img) {
                                    ᅟ.img = new ﾠㅤᅠﾠ(90, 90, 2);
                                    if(ᅟ.info) {
                                        ᅟ.img.drawText(ᅟ.info, 18, "black")
                                    }
                                    ᅟ[ㅤㅤᅟﾠ.update] = function () {
                                        if(ᅟ.info) {
                                            ᅟ.img.drawText(ᅟ.info, 18, "black")
                                        }
                                    }
                                }
                                if(ᅟ.info) {
                                    ㅤﾠㅤㅤ.save();
                                    ㅤﾠㅤㅤ.drawImage(ᅟ.img.canvas, ㅤㅤᅟㅤ.WUF.x + ᅟ.x - 33, ㅤㅤᅟㅤ.WUF.y + ᅟ.y - 47);
                                    ㅤﾠㅤㅤ.restore()
                                }
                            }
                        }
                    } catch (ㅤ) {
                        console.log("Failed To Draw Bread Oven Building Info", ㅤ)
                    }
                    try {
                        for(let ㅤ = 0, ﾠ = ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.TOTEM], ᅟ = ﾠ.length; ㅤ < ᅟ; ㅤ++) {
                            let ᅟ = ﾠ[ㅤ];
                            if(ᅟ) {
                                if(!ᅟ.img) {
                                    ᅟ.img = new ﾠㅤᅠﾠ(200, 100, 3);
                                    if(ᅟ.info) {
                                        ᅟ.img.drawText(["[" + Object.values(ㅤㅤﾠᅠ.WTN[ᅟ[ㅤㅤᅟﾠ.pid]])[0] + "]", ᅟ.info], 18, "black")
                                    }
                                    ᅟ[ㅤㅤᅟﾠ.update] = function () {
                                        if(ᅟ.info) {
                                            ᅟ.img.drawText(["[" + Object.values(ㅤㅤﾠᅠ.WTN[ᅟ[ㅤㅤᅟﾠ.pid]])[0] + "]", ᅟ.info], 18, "black")
                                        }
                                    }
                                }
                                if(ᅟ.info) {
                                    ㅤﾠㅤㅤ.save();
                                    ㅤﾠㅤㅤ.drawImage(ᅟ.img.canvas, ㅤㅤᅟㅤ.WUF.x + ᅟ.x - 45, ㅤㅤᅟㅤ.WUF.y + ᅟ.y - 45);
                                    ㅤﾠㅤㅤ.restore()
                                }
                            }
                        }
                    } catch (ㅤ) {
                        console.log("Failed To Draw Totem Building Info", ㅤ)
                    }
                    try {
                        for(let ㅤ = 0, ﾠ = ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.WINDMILL], ᅟ = ﾠ.length; ㅤ < ᅟ; ㅤ++) {
                            let ᅟ = ﾠ[ㅤ];
                            if(ᅟ) {
                                if(!ᅟ.img) {
                                    ᅟ.img = new ﾠㅤᅠﾠ(90, 90, 1);
                                    if(ᅟ.info) {
                                        ᅟ.img.drawText(ᅟ.info, 18, "black")
                                    }
                                    ᅟ[ㅤㅤᅟﾠ.update] = function () {
                                        if(ᅟ.info) {
                                            ᅟ.img.drawText(ᅟ.info, 18, "black")
                                        }
                                    }
                                }
                                if(ᅟ.info) {
                                    ㅤﾠㅤㅤ.save();
                                    ㅤﾠㅤㅤ.drawImage(ᅟ.img.canvas, ㅤㅤᅟㅤ.WUF.x + ᅟ.x - 30, ㅤㅤᅟㅤ.WUF.y + ᅟ.y - 40);
                                    ㅤﾠㅤㅤ.restore()
                                }
                            }
                        }
                    } catch (ㅤ) {
                        console.log("Failed To Draw Windmill Building Info", ㅤ)
                    }
                    try {
                        for(let ㅤ = 0, ﾠ = ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.FURNACE], ᅟ = ﾠ.length; ㅤ < ᅟ; ㅤ++) {
                            let ᅟ = ﾠ[ㅤ];
                            if(ᅟ) {
                                if(!ᅟ.img) {
                                    ᅟ.img = new ﾠㅤᅠﾠ(90, 70, 4);
                                    if(ᅟ.info) {
                                        ᅟ.img.drawText(ᅟ.info, 18, "black", "furnace")
                                    }
                                    let ㅤ = ᅟ[ㅤㅤᅟﾠ.update];
                                    ᅟ[ㅤㅤᅟﾠ.update] = function () {
                                        if(ᅟ.info) {
                                            ᅟ.img.drawText(ᅟ.info, 18, "black", "furnace")
                                        }
                                        return ㅤ.apply(this, arguments)
                                    }
                                }
                                if(ᅟ.info) {
                                    ㅤﾠㅤㅤ.save()
                                }
                                ㅤﾠㅤㅤ.drawImage(ᅟ.img.canvas, ㅤㅤᅟㅤ.WUF.x + ᅟ.x - 30, ㅤㅤᅟㅤ.WUF.y + ᅟ.y - 33);
                                ㅤﾠㅤㅤ.restore()
                            }
                        }
                    } catch (ㅤ) {
                        console.log("Failed To Draw Furnace Building Info", ㅤ)
                    }
                    try {
                        for(let ㅤ = 0, ﾠ = ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.WELL], ᅟ = ﾠ.length; ㅤ < ᅟ; ㅤ++) {
                            let ᅟ = ﾠ[ㅤ];
                            if(ᅟ) {
                                if(!ᅟ.img) {
                                    ᅟ.img = new ﾠㅤᅠﾠ(90, 70, 4);
                                    if(ᅟ.info) {
                                        ᅟ.img.drawText(ᅟ.info, 18, "black")
                                    }
                                    ᅟ[ㅤㅤᅟﾠ.update] = function () {
                                        if(ᅟ.info) {
                                            ᅟ.img.drawText(ᅟ.info, 18, "black")
                                        }
                                    }
                                }
                                if(ᅟ.info) {
                                    ㅤﾠㅤㅤ.save();
                                    ㅤﾠㅤㅤ.drawImage(ᅟ.img.canvas, ㅤㅤᅟㅤ.WUF.x + ᅟ.x - 30, ㅤㅤᅟㅤ.WUF.y + ᅟ.y - 33);
                                    ㅤﾠㅤㅤ.restore()
                                }
                            }
                        }
                    } catch (ㅤ) {
                        console.log("Failed To Draw Well Well Info", ㅤ)
                    }
                    try {
                        for(let ㅤ = 0, ﾠ = ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EMERALD_MACHINE], ᅟ = ﾠ.length; ㅤ < ᅟ; ㅤ++) {
                            let ᅟ = ﾠ[ㅤ];
                            if(ᅟ) {
                                if(!ᅟ.img) {
                                    ᅟ.img = new ﾠㅤᅠﾠ(200, 60, 0);
                                    ᅟ.score = Object.values(ㅤㅤﾠᅠ.WTN[ᅟ[ㅤㅤᅟﾠ.pid]])[13];
                                    ᅟ.img.drawText(["[" + Object.values(ㅤㅤﾠᅠ.WTN[ᅟ[ㅤㅤᅟﾠ.pid]])[0] + "]", Object.values(ㅤㅤﾠᅠ.WTN[ᅟ[ㅤㅤᅟﾠ.pid]])[13] / 1e3 + "k"], 18, "black", "machine");
                                    ᅟ[ㅤㅤᅟﾠ.update] = function () {
                                        if(ᅟ.info) {
                                            ᅟ.img.drawText(["[" + Object.values(ㅤㅤﾠᅠ.WTN[ᅟ[ㅤㅤᅟﾠ.pid]])[0] + "]", Object.values(ㅤㅤﾠᅠ.WTN[ᅟ[ㅤㅤᅟﾠ.pid]])[13] / 1e3 + "k"], 18, "black", "machine")
                                        }
                                    }
                                }
                                if(ᅟ.info) {
                                    if(ᅟ.score != Object.values(ㅤㅤﾠᅠ.WTN[ᅟ[ㅤㅤᅟﾠ.pid]])[13]) {
                                        ᅟ[ㅤㅤᅟﾠ.update]()
                                    }
                                    ㅤﾠㅤㅤ.save();
                                    ㅤﾠㅤㅤ.drawImage(ᅟ.img.canvas, ㅤㅤᅟㅤ.WUF.x + ᅟ.x - 55, ㅤㅤᅟㅤ.WUF.y + ᅟ.y - 35);
                                    ㅤﾠㅤㅤ.restore()
                                }
                            }
                        }
                    } catch (ㅤ) {
                        console.log("Failed To Draw Emerald Machine Info", ㅤ)
                    }
                }
                if(ᅟㅤᅠ.chestInfo.active) {
                    for(let ㅤ = 0; ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CHEST].length > ㅤ; ㅤ++) {
                        let ﾠ = ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CHEST][ㅤ];
                        if(!ﾠ.checked) {
                            if(!ㅤﾠᅠᅠ.drawChest) {
                                ㅤﾠᅠᅠ.drawChest = ﾠ[ㅤㅤᅟﾠ.draw]
                            }
                            try {
                                ﾠ[ㅤㅤᅟﾠ.draw] = function () {
                                    if(ᅟㅤᅠ.chestInfo.active && !ᅟㅤᅠ.Hidden.active) {
                                        return
                                    } else {
                                        return ㅤﾠᅠᅠ.drawChest.call(this)
                                    }
                                };
                                ﾠ.checked = true
                            } catch (ㅤ) {
                                console.log("Failed To Bind Chest Drawing", ㅤ)
                            }
                        }
                        try {
                            if(ᅟㅤᅠ.chestInfo.active) {
                                ㅤﾠㅤㅤ.save();
                                ㅤﾠㅤㅤ.translate(ㅤㅤᅟㅤ.WUF.x + ﾠ.x, ㅤㅤᅟㅤ.WUF.y + ﾠ.y);
                                ㅤﾠㅤㅤ.rotate(ﾠ.angle);
                                let ㅤ = 0;
                                let ᅟ = 0;
                                if(ﾠ[ㅤㅤᅟﾠ.hit][ㅤㅤᅟﾠ.update]) {
                                    if(ﾠ[ㅤㅤᅟﾠ.hit][ㅤㅤᅟﾠ.anim][ㅤㅤᅟﾠ.update]() && ﾠ[ㅤㅤᅟﾠ.hit][ㅤㅤᅟﾠ.anim][ㅤㅤᅟﾠ.o] == false) {
                                        ﾠ[ㅤㅤᅟﾠ.hit][ㅤㅤᅟﾠ.update] = false
                                    }
                                    let ᅠ = (1 - ﾠ[ㅤㅤᅟﾠ.hit][ㅤㅤᅟﾠ.anim][ㅤㅤᅟﾠ.v]) * ㅤᅟﾠﾠ * 600;
                                    ㅤ = Math.cos(ﾠ[ㅤㅤᅟﾠ.hit].angle - ﾠ.angle) * ᅠ;
                                    ᅟ = Math.sin(ﾠ[ㅤㅤᅟﾠ.hit].angle - ﾠ.angle) * ᅠ
                                }
                                let ᅠ = ﾠ.lock ? ﾠㅤﾠﾠ : ﾠㅤﾠㅤ;
                                ﾠᅟﾠᅠ(ㅤﾠㅤㅤ, ᅠ, ᅠ.width / 2 + ㅤ, ᅠ.height / 2 + ᅟ, -ᅠ.width, -ᅠ.height);
                                ㅤﾠㅤㅤ.restore()
                            }
                        } catch (ㅤ) {
                            console.log("Failed To Draw Ally Chest Images", ㅤ)
                        }
                        if(ﾠ.action && ﾠ.info && ᅟㅤᅠ.chestInfo.active) {
                            try {
                                ㅤﾠㅤㅤ.save();
                                ㅤﾠㅤㅤ.globalAlpha = .9;
                                let ㅤ = ㅤㅤﾠﾠ.WTF[ﾠ.action / 2 - 1] ? ㅤㅤﾠﾠ.WTF[ﾠ.action / 2 - 1].info[ㅤㅤᅟﾠ.img][0] : false;
                                if(ㅤ && ㅤ.src) {
                                    ﾠᅟﾠᅠ(ㅤﾠㅤㅤ, ㅤ, ㅤㅤᅟㅤ.WUF.x + ﾠ.x + 25, ㅤㅤᅟㅤ.WUF.y + ﾠ.y + 15, -ㅤㅤﾠﾠ.WTF[ﾠ.action / 2 - 1].info.width + 25, -ㅤㅤﾠﾠ.WTF[ﾠ.action / 2 - 1].info.height + 25);
                                    ㅤﾠㅤㅤ.globalAlpha = 1;
                                    ㅤﾠㅤㅤ.font = "18px Baloo Paaji";
                                    ㅤﾠㅤㅤ.strokeStyle = "black";
                                    ㅤﾠㅤㅤ.lineWidth = 7;
                                    ㅤﾠㅤㅤ.strokeText("x" + ﾠ.info, ㅤㅤᅟㅤ.WUF.x + ﾠ.x - 32, ㅤㅤᅟㅤ.WUF.y + ﾠ.y + 20);
                                    ㅤﾠㅤㅤ.fillStyle = !ᅟㅤᅠ.darkMode ? "white" : "#BBB";
                                    ㅤﾠㅤㅤ.fillText("x" + ﾠ.info, ㅤㅤᅟㅤ.WUF.x + ﾠ.x - 32, ㅤㅤᅟㅤ.WUF.y + ﾠ.y + 20)
                                } else {
                                    if(!ㅤㅤﾠﾠ.WTF[ﾠ.action / 2 - 1]) {
                                        continue
                                    }
                                    let ㅤ = new Image;
                                    ㅤ.src = ㅤㅤﾠﾠ.WTF[ﾠ.action / 2 - 1].info[ㅤㅤᅟﾠ.img][0][ㅤㅤᅟﾠ.src];
                                    ㅤㅤﾠﾠ.WTF[ﾠ.action / 2 - 1].info[ㅤㅤᅟﾠ.img][0] = ㅤ
                                }
                                ㅤﾠㅤㅤ.restore()
                            } catch (ㅤ) {
                                console.log("Failed To Draw Chest Images", ㅤ)
                            }
                        }
                    }
                }
                if(ᅟㅤᅠ.fireInfo) {
                    try {
                        for(let ㅤ = 0, ᅟ = [...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.FIRE], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.BIG_FIRE]], ᅠ = ᅟ.length; ㅤ < ᅠ; ㅤ++) {
                            let ᅠ = ᅟ[ㅤ];
                            if(ᅠ) {
                                if(!ᅠ.time && ᅠ.time != 0) {
                                    if(ᅠ.type === ﾠㅤᅟﾠ.BIG_FIRE) {
                                        ᅠ.time = 360
                                    } else if(ᅠ.type === ﾠㅤᅟﾠ.FIRE && ᅠ.info === 0) {
                                        ᅠ.time = 120
                                    } else {
                                        ᅠ.time = 120
                                    }
                                    ﾠ.setInterval(() => {
                                        ᅠ.time = (ᅠ.time - .1).toFixed(1)
                                    }, 100)
                                }
                                ㅤﾠㅤㅤ.save();
                                ㅤﾠㅤㅤ.font = "18px Baloo Paaji";
                                ㅤﾠㅤㅤ.strokeStyle = "black";
                                ㅤﾠㅤㅤ.lineWidth = 7;
                                ㅤﾠㅤㅤ.textAlign = "center";
                                ㅤﾠㅤㅤ.strokeText(ᅠ.time + "s", ㅤㅤᅟㅤ.WUF.x + ᅠ.x, ㅤㅤᅟㅤ.WUF.y + ᅠ.y + 5);
                                ㅤﾠㅤㅤ.fillStyle = !ᅟㅤᅠ.darkMode ? "white" : "#BBB";
                                ㅤﾠㅤㅤ.fillText(ᅠ.time + "s", ㅤㅤᅟㅤ.WUF.x + ᅠ.x, ㅤㅤᅟㅤ.WUF.y + ᅠ.y + 5);
                                ㅤﾠㅤㅤ.restore()
                            }
                        }
                    } catch (ㅤ) {
                        console.log("Failed To Draw Fire Info", ㅤ)
                    }
                }
                if(ᅟㅤᅠ.treasureChestOnTop) {
                    for(let ㅤ = 0; ㅤﾠᅠᅟ.length > ㅤ; ㅤ++) {
                        let ﾠ = ㅤﾠᅠᅟ[ㅤ];
                        ﾠ[0](ﾠ[1], ﾠ[2])
                    }
                    if(ㅤﾠᅠᅟ.length) {
                        ㅤﾠᅠᅟ = []
                    }
                    for(let ㅤ = 0, ﾠ = ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.TREASURE_CHEST], ᅟ = ﾠ.length; ㅤ < ᅟ; ㅤ++) {
                        let ᅟ = ﾠ[ㅤ];
                        if(!ᅟ.checked) {
                            if(!ㅤﾠᅠᅠ.drawTreasure) {
                                ㅤﾠᅠᅠ.drawTreasure = ᅟ[ㅤㅤᅟﾠ.draw]
                            }
                            try {
                                ᅟ[ㅤㅤᅟﾠ.draw] = function (ㅤ, ﾠ) {
                                    if(ᅟㅤᅠ.treasureChestOnTop && !ᅟㅤᅠ.Hidden.active) {
                                        return ㅤﾠᅠᅟ.push([ㅤﾠᅠᅠ.drawTreasure.bind(ᅟ), ㅤ, ﾠ])
                                    } else {
                                        ㅤﾠᅠᅠ.drawTreasure.call(this, ㅤ, ﾠ)
                                    }
                                };
                                ᅟ.checked = true
                            } catch (ㅤ) {
                                console.log("Failed To Bind Treasure Drawing", ㅤ)
                            }
                        }
                    }
                }
                if(ᅟㅤᅠ.boxInfo) {
                    for(let ㅤ = 0; ㅤﾠᅠﾠ.length > ㅤ; ㅤ++) {
                        let ﾠ = ㅤﾠᅠﾠ[ㅤ];
                        ﾠ[0](ﾠ[1], ﾠ[2])
                    }
                    if(ㅤﾠᅠﾠ.length) {
                        ㅤﾠᅠﾠ = []
                    }
                    try {
                        for(let ㅤ = 0, ᅟ = [...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.DEAD_BOX], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CRATE], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.GIFT]], ᅠ = ᅟ.length; ㅤ < ᅠ; ㅤ++) {
                            let ᅠ = ᅟ[ㅤ];
                            if(!ᅠ.checked) {
                                if(!ㅤﾠᅠᅠ.drawCrate) {
                                    ㅤﾠᅠᅠ.drawCrate = ᅠ[ㅤㅤᅟﾠ.draw]
                                }
                                try {
                                    ᅠ[ㅤㅤᅟﾠ.draw] = function (ㅤ, ﾠ) {
                                        if(ᅟㅤᅠ.boxInfo && !ᅟㅤᅠ.Hidden.active) {
                                            return ㅤﾠᅠﾠ.push([ㅤﾠᅠᅠ.drawCrate.bind(ᅠ), ㅤ, ﾠ])
                                        } else {
                                            ㅤﾠᅠᅠ.drawCrate.call(this, ㅤ, ﾠ)
                                        }
                                    };
                                    ᅠ.checked = true
                                } catch (ㅤ) {
                                    console.log("Failed To Bind Box Drawing", ㅤ)
                                }
                            }
                            if(ᅠ) {
                                let ㅤ;
                                if(ᅠ.type === ﾠㅤᅟﾠ.DEAD_BOX && (ᅠ.info == 55 || ᅠ.info == 56 || ᅠ.info == 57 || ᅠ.info == 72 || ᅠ.info == 58 || ᅠ.info == 74 || ᅠ.info == 64 || ᅠ.info == 66 || ᅠ.info == 65 || ᅠ.info == 63 || ᅠ.info == 73 || ᅠ.info == 71 || ᅠ.info == 68 || ᅠ.info == 60 || ᅠ.info == 59 || ᅠ.info == 62 || ᅠ.info == 61 || ᅠ.info == 69 || ᅠ.info == 67 || ᅠ.info == 70 || ᅠ.info == 75 || ᅠ.info == 82 || ᅠ.info == 83 || ᅠ.info == 83 || ᅠ.info == 79 || ᅠ.info == 80 || ᅠ.info == 81)) {
                                    ㅤ = true
                                } else {
                                    ㅤ = false
                                }
                                if(!ᅠ.time && ᅠ.time != 0) {
                                    if(ᅠ.type === ﾠㅤᅟﾠ.CRATE) {
                                        ᅠ.time = 16
                                    } else if(ᅠ.type === ﾠㅤᅟﾠ.GIFT) {
                                        ᅠ.time = 500
                                    } else if(ᅠ.type === ﾠㅤᅟﾠ.DEAD_BOX && !ㅤ) {
                                        ᅠ.time = 240
                                    } else {
                                        ᅠ.time = 28
                                    }
                                    ﾠ.setInterval(() => {
                                        ᅠ.time = (ᅠ.time - .1).toFixed(1)
                                    }, 100)
                                }
                                if(!ᅠ.hits && ᅠ.hits != 0) {
                                    ᅠ.hits = 0
                                }
                                if(ᅠ.action != 0 && !ᅠ.hitActive) {
                                    ᅠ.hits++;
                                    ᅠ.hitActive = 1
                                } else if(ᅠ.action == 0) {
                                    ᅠ.hitActive = 0
                                }
                                ㅤﾠㅤㅤ.save();
                                ㅤﾠㅤㅤ.font = "18px Baloo Paaji";
                                ㅤﾠㅤㅤ.strokeStyle = "black";
                                ㅤﾠㅤㅤ.lineWidth = 7;
                                ㅤﾠㅤㅤ.textAlign = "center";
                                ㅤﾠㅤㅤ.strokeText(ᅠ.type === ﾠㅤᅟﾠ.CRATE ? "Drop Box" : ᅠ.type === ﾠㅤᅟﾠ.GIFT ? "Gift Box" : ᅠ.type === ﾠㅤᅟﾠ.DEAD_BOX && !ㅤ ? "Dead Box" : "Animal Box", ㅤㅤᅟㅤ.WUF.x + ᅠ.x, ㅤㅤᅟㅤ.WUF.y + ᅠ.y - 10);
                                ㅤﾠㅤㅤ.strokeText("Hits: " + ᅠ.hits, ㅤㅤᅟㅤ.WUF.x + ᅠ.x, ㅤㅤᅟㅤ.WUF.y + ᅠ.y + 10);
                                ㅤﾠㅤㅤ.strokeText("Time: " + ᅠ.time + "s", ㅤㅤᅟㅤ.WUF.x + ᅠ.x, ㅤㅤᅟㅤ.WUF.y + ᅠ.y + 30);
                                ㅤﾠㅤㅤ.fillStyle = !ᅟㅤᅠ.darkMode ? "white" : "#BBB";
                                ㅤﾠㅤㅤ.fillText(ᅠ.type === ﾠㅤᅟﾠ.CRATE ? "Drop Box" : ᅠ.type === ﾠㅤᅟﾠ.GIFT ? "Gift Box" : ᅠ.type === ﾠㅤᅟﾠ.DEAD_BOX && !ㅤ ? "Dead Box" : "Animal Box", ㅤㅤᅟㅤ.WUF.x + ᅠ.x, ㅤㅤᅟㅤ.WUF.y + ᅠ.y - 10);
                                ㅤﾠㅤㅤ.fillText("Hits: " + ᅠ.hits, ㅤㅤᅟㅤ.WUF.x + ᅠ.x, ㅤㅤᅟㅤ.WUF.y + ᅠ.y + 10);
                                ㅤﾠㅤㅤ.fillText("Time: " + ᅠ.time + "s", ㅤㅤᅟㅤ.WUF.x + ᅠ.x, ㅤㅤᅟㅤ.WUF.y + ᅠ.y + 30);
                                ㅤﾠㅤㅤ.restore()
                            }
                        }
                    } catch (ㅤ) {
                        console.log("Failed To Draw Box Info", ㅤ)
                    }
                }
                if(ᅟㅤᅠ.playersOnTop || ᅟㅤᅠ.playerTracers) {
                    if(ᅟㅤᅠ.playersOnTop) {
                        for(let ㅤ = 0; ㅤﾠᅠㅤ.length > ㅤ; ㅤ++) {
                            let ﾠ = ㅤﾠᅠㅤ[ㅤ];
                            ᅟㅤﾠㅤ(ﾠ[0], ﾠ[1])
                        }
                        if(ㅤﾠᅠㅤ.length) {
                            ㅤﾠᅠㅤ = []
                        }
                    }
                    if(ᅟㅤᅠ.playersOnTop) {
                        for(let ㅤ = 0; ㅤﾠᅟᅠ.length > ㅤ; ㅤ++) {
                            let ﾠ = ㅤﾠᅟᅠ[ㅤ];
                            ᅟㅤㅤᅠ(ﾠ[0], ﾠ[1]);
                            ᅟㅤㅤᅟ(ﾠ[0])
                        }
                        if(ㅤﾠᅟᅠ.length) {
                            ㅤﾠᅟᅠ = []
                        }
                    }
                    for(let ﾠ = 0; ﾠ < ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.PLAYERS].length; ﾠ++) {
                        let ᅟ = ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.PLAYERS][ﾠ];
                        if(!ᅟ.checked) {
                            let ㅤ = ᅟ[ㅤㅤᅟﾠ.draw];
                            let ﾠ = ᅟ[ㅤㅤᅟﾠ.draw_vehicle];
                            let ᅠ = ᅟ[ㅤㅤᅟﾠ.update];
                            try {
                                ᅟ[ㅤㅤᅟﾠ.draw] = function () {
                                    if(!ᅟㅤᅠ.Hidden.active) {
                                        ᅟㅤㅤᅟ(ᅟ)
                                    }
                                    if(!ᅟㅤᅠ.playersOnTop || ᅟㅤᅠ.Hidden.active) {
                                        return ㅤ.call(this)
                                    } else {
                                        ㅤﾠᅟᅠ.push([ᅟ, ㅤ.bind(ᅟ)])
                                    }
                                };
                                ᅟ[ㅤㅤᅟﾠ.draw_vehicle] = function () {
                                    if(!ᅟㅤᅠ.playersOnTop || ᅟㅤᅠ.Hidden.active) {
                                        return ﾠᅠᅠᅠ(ﾠ.bind(ᅟ))
                                    } else {
                                        ㅤﾠᅠㅤ.push([ᅟ, ﾠ.bind(ᅟ)])
                                    }
                                };
                                ᅟ[ㅤㅤᅟﾠ.update] = function () {
                                    ᅠ.call(this);
                                    if(ᅟ[ㅤㅤᅟﾠ.ghost] && ((60 - (Date.now() - ᅟ.ghostTime) / 1e3).toFixed(1) < 0 || !ᅟ.ghostTime)) {
                                        ᅟ.ghostTime = Date.now()
                                    } else if(!ᅟ[ㅤㅤᅟﾠ.ghost]) {
                                        ᅟ.ghostTime = null
                                    }
                                };
                                ᅟ.checked = true
                            } catch (ㅤ) {
                                console.log("Failed To Bind Player Functions", ㅤ)
                            }
                        }
                        if(ᅟ.ghostTime > 0) {
                            if(ㅤ[ㅤㅤᅟﾠ.pid] == ᅟ[ㅤㅤᅟﾠ.pid]) {
                                ᅟ.ghostTime = ㅤㅤᅟㅤ.WQK.WTY
                            }
                            ㅤﾠㅤㅤ.save();
                            ㅤﾠㅤㅤ.font = "30px Baloo Paaji";
                            ㅤﾠㅤㅤ.strokeStyle = "black";
                            ㅤﾠㅤㅤ.lineWidth = 7;
                            ㅤﾠㅤㅤ.strokeText((60 - (Date.now() - ᅟ.ghostTime) / 1e3).toFixed(1), ㅤㅤᅟㅤ.WUF.x + ᅟ.x - 25, ㅤㅤᅟㅤ.WUF.y + ᅟ.y + 20);
                            ㅤﾠㅤㅤ.fillStyle = !ᅟㅤᅠ.darkMode ? "white" : "#BBB";
                            ㅤﾠㅤㅤ.fillText((60 - (Date.now() - ᅟ.ghostTime) / 1e3).toFixed(1), ㅤㅤᅟㅤ.WUF.x + ᅟ.x - 25, ㅤㅤᅟㅤ.WUF.y + ᅟ.y + 20);
                            ㅤﾠㅤㅤ.restore()
                        }
                        if(ᅟㅤᅠ.playerTracers && ㅤ) {
                            if(ㅤ[ㅤㅤᅟﾠ.pid] != ᅟ[ㅤㅤᅟﾠ.pid]) {
                                ㅤﾠㅤㅤ.strokeStyle = ﾠᅟᅠᅠ(ᅟ[ㅤㅤᅟﾠ.pid]) ? "#66ff00" : "#ff2e2e";
                                ㅤﾠㅤㅤ.lineWidth = 3.5;
                                ㅤﾠㅤㅤ.beginPath();
                                ㅤﾠㅤㅤ.moveTo(ㅤㅤᅟㅤ.WUF.x + ㅤ.x, ㅤㅤᅟㅤ.WUF.y + ㅤ.y);
                                ㅤﾠㅤㅤ.lineTo(ㅤㅤᅟㅤ.WUF.x + ᅟ.x, ㅤㅤᅟㅤ.WUF.y + ᅟ.y);
                                ㅤﾠㅤㅤ.stroke()
                            }
                        }
                        if(ᅟㅤᅠ.playerTimers != "None" && ㅤ) {
                            if(ᅟㅤᅠ.playerTimers == "Enemys") {
                                const ㅤ = ﾠᅟᅠᅠ(ᅟ[ㅤㅤᅟﾠ.pid]);
                                if(ㅤ) continue
                            }
                            if(ㅤ[ㅤㅤᅟﾠ.pid] == ᅟ[ㅤㅤᅟﾠ.pid] && !ㅤﾠᅟﾠ) {
                                ㅤᅠㅤᅟ[ㅤ[ㅤㅤᅟﾠ.pid]] = ㅤﾠᅟᅟ
                            }
                            if(ㅤᅠㅤᅟ[ᅟ[ㅤㅤᅟﾠ.pid]]) {
                                let ㅤ = 10 - (Date.now() - ㅤᅠㅤᅟ[ᅟ[ㅤㅤᅟﾠ.pid]]) / 1e3;
                                while(ㅤ <= 0) {
                                    ㅤᅠㅤᅟ[ᅟ[ㅤㅤᅟﾠ.pid]] += 1e4;
                                    ㅤ = 10 - (Date.now() - ㅤᅠㅤᅟ[ᅟ[ㅤㅤᅟﾠ.pid]]) / 1e3
                                }
                                ㅤﾠㅤㅤ.save();
                                ㅤﾠㅤㅤ.font = "25px Baloo Paaji";
                                ㅤﾠㅤㅤ.strokeStyle = "black";
                                ㅤﾠㅤㅤ.lineWidth = 7.5;
                                ㅤﾠㅤㅤ.strokeText(ㅤ.toFixed(1), ㅤㅤᅟㅤ.WUF.x + ᅟ.x - 15, ㅤㅤᅟㅤ.WUF.y + ᅟ.y + 40);
                                ㅤﾠㅤㅤ.fillStyle = ㅤ >= 7.5 ? "#FF0000" : ㅤ >= 5 ? "#FFA500" : ㅤ >= 2.5 ? "#FFFF00" : "#00FF00";
                                ㅤﾠㅤㅤ.fillText(ㅤ.toFixed(1), ㅤㅤᅟㅤ.WUF.x + ᅟ.x - 15, ㅤㅤᅟㅤ.WUF.y + ᅟ.y + 40);
                                ㅤﾠㅤㅤ.restore()
                            }
                        }
                    }
                }
                try {
                    const ㅤ = [{
                        name: "Krakens",
                        setting: "Krakens",
                        units: ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.KRAKEN]
                    }, {
                        name: "Sand Worms",
                        setting: "Sandworms",
                        units: ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.SAND_WORM]
                    }, {
                        name: "Baby Dragons",
                        setting: "BabyDragons",
                        units: ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.BABY_DRAGON]
                    }, {
                        name: "Baby Lavas",
                        setting: "BabyLavaDragons",
                        units: ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.BABY_LAVA]
                    }, {
                        name: "Baby Mammoths",
                        setting: "BabyMammoths",
                        units: ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.BABY_MAMMOTH]
                    }, {
                        name: "Bears",
                        setting: "Bears",
                        units: ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.BEAR]
                    }, {
                        name: "Boars",
                        setting: "Boars",
                        units: ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.BOAR]
                    }, {
                        name: "Crabs",
                        setting: "Crabs",
                        units: ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CRAB]
                    }, {
                        name: "Dragons",
                        setting: "Dragons",
                        units: ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.DRAGON]
                    }, {
                        name: "Flames",
                        setting: "FireMobs",
                        units: ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.FLAME]
                    }, {
                        name: "Foxs",
                        setting: "Foxes",
                        units: ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.FOX]
                    }, {
                        name: "Hawks",
                        setting: "Hawks",
                        units: ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.HAWK]
                    }, {
                        name: "Crab Boss",
                        setting: "KingCrabs",
                        units: ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CRAB_BOSS]
                    }, {
                        name: "Lava Dragons",
                        setting: "LavaDragons",
                        units: ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.LAVA_DRAGON]
                    }, {
                        name: "Mammoths",
                        setting: "Mammoths",
                        units: ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.MAMMOTH]
                    }, {
                        name: "Penguins",
                        setting: "Penguins",
                        units: ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.PENGUIN]
                    }, {
                        name: "Piranhas",
                        setting: "Piranhas",
                        units: ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.PIRANHA]
                    }, {
                        name: "Rabbits",
                        setting: "Rabbits",
                        units: ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.RABBIT]
                    }, {
                        name: "Spiders",
                        setting: "Spiders",
                        units: ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.SPIDER]
                    }, {
                        name: "Vultures",
                        setting: "Vultures",
                        units: ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.VULTURE]
                    }, {
                        name: "Wolfs",
                        setting: "Wolfs",
                        units: ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.WOLF]
                    }, {
                        name: "Crocodiles",
                        setting: "Crocodiles",
                        units: ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CROCODILE]
                    }, {
                        name: "Golden Chickens",
                        setting: "GoldenChickens",
                        units: ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.GOLDEN_CHICKEN]
                    }, {
                        name: "Golden Hens",
                        setting: "GoldenHens",
                        units: ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.GOLDEN_HEN]
                    }, {
                        name: "Ocelots",
                        setting: "Ocelots",
                        units: ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.OCELOT]
                    }, {
                        name: "Parrots",
                        setting: "Parrots",
                        units: ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.PARROT]
                    }];
                    const ﾠ = window.innerHeight / 2;
                    const ᅟ = 25;
                    ㅤﾠㅤㅤ.font = "18px Baloo Paaji";
                    ㅤﾠㅤㅤ.textAlign = "left";
                    ㅤﾠㅤㅤ.textBaseline = "middle";
                    let ᅠ = 0;
                    for(let ㅤㅤ = 0; ㅤㅤ < ㅤ.length; ㅤㅤ++) {
                        const {
                            name: ㅤﾠ,
                            setting: ㅤᅟ,
                            units: ㅤᅠ
                        } = ㅤ[ㅤㅤ];
                        if(ᅟㅤᅠ.Tracers[ㅤᅟ] && ㅤᅠ && ㅤᅠ.length > 0) {
                            const ㅤ = ﾠ + ᅠ * ᅟ;
                            const ㅤㅤ = "" + ㅤﾠ + ": " + ㅤᅠ.length;
                            ㅤﾠㅤㅤ.save();
                            ㅤﾠㅤㅤ.strokeStyle = "black";
                            ㅤﾠㅤㅤ.lineWidth = 7;
                            ㅤﾠㅤㅤ.strokeText(ㅤㅤ, 0, ㅤ);
                            ㅤﾠㅤㅤ.fillStyle = !ᅟㅤᅠ.darkMode ? "white" : "#BBB";
                            ㅤﾠㅤㅤ.fillText(ㅤㅤ, 0, ㅤ);
                            ㅤﾠㅤㅤ.restore();
                            ᅠ++
                        }
                    }
                } catch (ㅤ) {
                    console.log("Failed To Draw Tracer Animal Counts", ㅤ)
                }
                try {
                    if(ᅟㅤᅠ.Tracers.Krakens && ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.KRAKEN]) {
                        ﾠᅠﾠﾠ(ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.KRAKEN], "#000000")
                    }
                    if(ᅟㅤᅠ.Tracers.Sandworms && ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.SAND_WORM]) {
                        ﾠᅠﾠﾠ(ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.SAND_WORM], "#000000")
                    }
                    if(ᅟㅤᅠ.Tracers.BabyDragons && ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.BABY_DRAGON]) {
                        ﾠᅠﾠﾠ(ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.BABY_DRAGON], "#949494")
                    }
                    if(ᅟㅤᅠ.Tracers.BabyLavaDragons && ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.BABY_LAVA]) {
                        ﾠᅠﾠﾠ(ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.BABY_LAVA], "#660000")
                    }
                    if(ᅟㅤᅠ.Tracers.BabyMammoths && ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.BABY_MAMMOTH]) {
                        ﾠᅠﾠﾠ(ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.BABY_MAMMOTH], "#949494")
                    }
                    if(ᅟㅤᅠ.Tracers.Bears && ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.BEAR]) {
                        ﾠᅠﾠﾠ(ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.BEAR], "#949494")
                    }
                    if(ᅟㅤᅠ.Tracers.Boars && ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.BOAR]) {
                        ﾠᅠﾠﾠ(ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.BOAR], "#007512")
                    }
                    if(ᅟㅤᅠ.Tracers.Crabs && ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CRAB]) {
                        ﾠᅠﾠﾠ(ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CRAB], "#948f00")
                    }
                    if(ᅟㅤᅠ.Tracers.Dragons && ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.DRAGON]) {
                        ﾠᅠﾠﾠ(ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.DRAGON], "#949494")
                    }
                    if(ᅟㅤᅠ.Tracers.FireMobs && ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.FLAME]) {
                        ﾠᅠﾠﾠ(ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.FLAME], "#660000")
                    }
                    if(ᅟㅤᅠ.Tracers.Foxes && ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.FOX]) {
                        ﾠᅠﾠﾠ(ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.FOX], "#949494")
                    }
                    if(ᅟㅤᅠ.Tracers.Hawks && ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.HAWK]) {
                        ﾠᅠﾠﾠ(ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.HAWK], "#007512")
                    }
                    if(ᅟㅤᅠ.Tracers.KingCrabs && ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CRAB_BOSS]) {
                        ﾠᅠﾠﾠ(ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CRAB_BOSS], "#948f00")
                    }
                    if(ᅟㅤᅠ.Tracers.LavaDragons && ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.LAVA_DRAGON]) {
                        ﾠᅠﾠﾠ(ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.LAVA_DRAGON], "#660000")
                    }
                    if(ᅟㅤᅠ.Tracers.Mammoths && ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.MAMMOTH]) {
                        ﾠᅠﾠﾠ(ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.MAMMOTH], "#949494")
                    }
                    if(ᅟㅤᅠ.Tracers.Penguins && ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.PENGUIN]) {
                        ﾠᅠﾠﾠ(ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.PENGUIN], "#949494")
                    }
                    if(ᅟㅤᅠ.Tracers.Piranhas && ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.PIRANHA]) {
                        ﾠᅠﾠﾠ(ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.PIRANHA], "#000c78")
                    }
                    if(ᅟㅤᅠ.Tracers.Rabbits && ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.RABBIT]) {
                        ﾠᅠﾠﾠ(ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.RABBIT], "#007512")
                    }
                    if(ᅟㅤᅠ.Tracers.Spiders && ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.SPIDER]) {
                        ﾠᅠﾠﾠ(ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.SPIDER], "#007512")
                    }
                    if(ᅟㅤᅠ.Tracers.Vultures && ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.VULTURE]) {
                        ﾠᅠﾠﾠ(ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.VULTURE], "#948f00")
                    }
                    if(ᅟㅤᅠ.Tracers.Wolfs && ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.WOLF]) {
                        ﾠᅠﾠﾠ(ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.WOLF], "#007512")
                    }
                    if(ᅟㅤᅠ.Tracers.Crocodiles && ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CROCODILE]) {
                        ﾠᅠﾠﾠ(ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CROCODILE], "#003c12")
                    }
                    if(ᅟㅤᅠ.Tracers.GoldenChickens && ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.GOLDEN_CHICKEN]) {
                        ﾠᅠﾠﾠ(ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.GOLDEN_CHICKEN], "#007512")
                    }
                    if(ᅟㅤᅠ.Tracers.GoldenHens && ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.GOLDEN_HEN]) {
                        ﾠᅠﾠﾠ(ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.GOLDEN_HEN], "#007512")
                    }
                    if(ᅟㅤᅠ.Tracers.Ocelots && ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.OCELOT]) {
                        ﾠᅠﾠﾠ(ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.OCELOT], "#003c12")
                    }
                    if(ᅟㅤᅠ.Tracers.Parrots && ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.PARROT]) {
                        ﾠᅠﾠﾠ(ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.PARROT], "#003c12")
                    }
                } catch (ㅤ) {
                    console.log("Failed To Draw Animal Tracers", ㅤ)
                }
                if(ᅟㅤᅠ.movementPredictor) {
                    try {
                        for(let ㅤ = 0, ﾠ = [...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.PARROT], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.GOLDEN_HEN], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.DEAD_BOX], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.TREASURE_CHEST], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CRATE], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.PENGUIN], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.FOX], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.BEAR], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.PIRANHA], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CRAB], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.FLAME], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.LAVA_DRAGON], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.BOAR], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CRAB_BOSS], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.BABY_DRAGON], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.BABY_LAVA], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.BABY_MAMMOTH], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.MAMMOTH], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.PLAYERS], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.RABBIT], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.SAND_WORM], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.WOLF], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.SPIDER], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.HAWK], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.VULTURE], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.DRAGON], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.KRAKEN]], ᅟ = ﾠ.length; ㅤ < ᅟ; ++ㅤ) {
                            let ᅟ = ﾠ[ㅤ];
                            if(ᅟ.x != ᅟ.r.x || ᅟ.y != ᅟ.r.y) {
                                ㅤﾠㅤㅤ.save();
                                ㅤﾠㅤㅤ.beginPath();
                                ㅤﾠㅤㅤ.lineWidth = 3.5;
                                ㅤﾠㅤㅤ.moveTo(ㅤㅤᅟㅤ.WUF.x + ᅟ.x, ㅤㅤᅟㅤ.WUF.y + ᅟ.y);
                                ㅤﾠㅤㅤ.lineTo(ㅤㅤᅟㅤ.WUF.x + ᅟ.r.x, ㅤㅤᅟㅤ.WUF.y + ᅟ.r.y);
                                ㅤﾠㅤㅤ.strokeStyle = "#ff2e2e";
                                ㅤﾠㅤㅤ.stroke();
                                ㅤﾠㅤㅤ.restore()
                            }
                        }
                    } catch (ㅤ) {
                        console.log("Failed To Draw Entity Health Or Movement Predictor Info", ㅤ)
                    }
                }
                if(ᅟㅤᅠ.Debugger.mode != "None") {
                    try {
                        ㅤﾠㅤㅤ.save();
                        ㅤﾠㅤㅤ.font = "18px Baloo Paaji";
                        ㅤﾠㅤㅤ.strokeStyle = "black";
                        ㅤﾠㅤㅤ.lineWidth = 4;
                        ㅤﾠㅤㅤ.fillStyle = !ᅟㅤᅠ.darkMode ? "white" : "#BBB";
                        ㅤﾠㅤㅤ.globalAlpha = .8;
                        for(let ㅤ = 0; ㅤ < ㅤㅤﾠᅠ.units.length; ㅤ++) {
                            let ﾠ = ㅤㅤﾠᅠ.units[ㅤ];
                            if(typeof ﾠ == "object") {
                                if(ﾠ.length == 0) {
                                    continue
                                }
                                for(let ㅤ = 0; ㅤ < ﾠ.length; ㅤ++) {
                                    let ᅟ = ﾠ[ㅤ];
                                    if(ᅟㅤᅠ.Debugger.mode == "No Roofs/Bridges") {
                                        if(ᅟ.type == 30) {
                                            continue
                                        }
                                    }
                                    if(ᅟㅤᅠ.Debugger.mode == "No Roofs/Bridges") {
                                        if(ᅟ.type == 38) {
                                            continue
                                        }
                                    }
                                    let ᅠ = ㅤㅤᅟㅤ.WUF.x + ᅟ.x - 150;
                                    let ㅤㅤ = ㅤㅤᅟㅤ.WUF.y + ᅟ.y - 30 + 15;
                                    let ㅤﾠ = ㅤㅤᅟㅤ.WUF.y + ᅟ.y - 30;
                                    if(ᅟㅤᅠ.Debugger.mode == "All" || ᅟㅤᅠ.Debugger.mode == "No Roofs/Bridges") {
                                        if(ᅟ.type != 0) {
                                            ㅤﾠㅤㅤ.strokeText(Object.values(ㅤㅤﾠᅠ.WTN[ᅟ[ㅤㅤᅟﾠ.pid]])[0], ᅠ + 100, ㅤﾠ)
                                        }
                                        if(ᅟ.type != 0) {
                                            ㅤﾠㅤㅤ.fillText(Object.values(ㅤㅤﾠᅠ.WTN[ᅟ[ㅤㅤᅟﾠ.pid]])[0], ᅠ + 100, ㅤﾠ)
                                        }
                                        if(ᅟ.type == 0) {
                                            ㅤﾠㅤㅤ.strokeText("ID: " + ᅟ[ㅤㅤᅟﾠ.pid], ᅠ + 100, ㅤㅤ)
                                        }
                                        if(ᅟ.type == 0) {
                                            ㅤﾠㅤㅤ.fillText("ID: " + ᅟ[ㅤㅤᅟﾠ.pid], ᅠ + 100, ㅤㅤ)
                                        }
                                        if(ᅟ.type == 0) {
                                            ㅤﾠㅤㅤ.strokeText("X: " + ᅟ.x, ᅠ + 100, ㅤㅤ + 15)
                                        }
                                        if(ᅟ.type == 0) {
                                            ㅤﾠㅤㅤ.fillText("X: " + ᅟ.x, ᅠ + 100, ㅤㅤ + 15)
                                        }
                                        if(ᅟ.type == 0) {
                                            ㅤﾠㅤㅤ.strokeText("Y: " + ᅟ.y, ᅠ + 100, ㅤㅤ + 30)
                                        }
                                        if(ᅟ.type == 0) {
                                            ㅤﾠㅤㅤ.fillText("Y: " + ᅟ.y, ᅠ + 100, ㅤㅤ + 30)
                                        }
                                        if(ᅟ.type != 0 && ᅟ[ㅤㅤᅟﾠ.pid] != 0) {
                                            ㅤﾠㅤㅤ.strokeText("ID: " + ᅟ[ㅤㅤᅟﾠ.pid], ᅠ + 100, ㅤㅤ)
                                        }
                                        if(ᅟ.type != 0 && ᅟ[ㅤㅤᅟﾠ.pid] != 0) {
                                            ㅤﾠㅤㅤ.fillText("ID: " + ᅟ[ㅤㅤᅟﾠ.pid], ᅠ + 100, ㅤㅤ)
                                        }
                                        if(ᅟ.type != 0) {
                                            ㅤﾠㅤㅤ.strokeText("Type: " + ᅟ.type, ᅠ + 100, ㅤㅤ + 15)
                                        }
                                        if(ᅟ.type != 0) {
                                            ㅤﾠㅤㅤ.fillText("Type: " + ᅟ.type, ᅠ + 100, ㅤㅤ + 15)
                                        }
                                    } else {
                                        ㅤﾠㅤㅤ.lineWidth = 10;
                                        if(ᅟ[ㅤㅤᅟﾠ.pid] < 10) {
                                            if(ᅟ.type == 0) {
                                                ㅤﾠㅤㅤ.strokeText(ᅟ[ㅤㅤᅟﾠ.pid], ᅠ + 145, ㅤㅤ + 22)
                                            }
                                            if(ᅟ.type == 0) {
                                                ㅤﾠㅤㅤ.fillText(ᅟ[ㅤㅤᅟﾠ.pid], ᅠ + 145, ㅤㅤ + 22)
                                            }
                                        } else {
                                            if(ᅟ.type == 0) {
                                                ㅤﾠㅤㅤ.strokeText(ᅟ[ㅤㅤᅟﾠ.pid], ᅠ + 139, ㅤㅤ + 22)
                                            }
                                            if(ᅟ.type == 0) {
                                                ㅤﾠㅤㅤ.fillText(ᅟ[ㅤㅤᅟﾠ.pid], ᅠ + 139, ㅤㅤ + 22)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        ㅤﾠㅤㅤ.restore()
                    } catch (ㅤ) {
                        console.log("Failed To Use Debugger", ㅤ)
                    }
                }
                if(ᅟㅤᅠ.blizzardAndSandstorm || ﾠㅤᅠᅟ.I.canvas) {
                    ㅤﾠㅤㅤ.save();
                    let ﾠ = 0;
                    if(ㅤㅤᅟㅤ.WUY.enabled) {
                        ﾠ += 70
                    }
                    if(ㅤㅤᅟﾠ.bandage > 0) {
                        ﾠ += 70
                    }
                    if(ㅤㅤᅟﾠ.blizzard == 1) {
                        ﾠ += 70
                    } else if(ㅤㅤᅟㅤ.WSJ.WUM < .25 || ㅤㅤᅟㅤ.WSJ.WUO < .25 || ㅤㅤᅟㅤ.WSJ.WUP < .25 || ㅤㅤᅟㅤ.WSJ.WUR < .25 || ㅤㅤᅟㅤ.WSJ.WUS < .25) {
                        ﾠ += 70
                    }
                    if(ㅤㅤᅟㅤ.WVE.WVD && ᅟㅤᅠ.blizzardAndSandstorm) {
                        if(ﾠㅤㅤᅠ.naturalWidth) {
                            ㅤﾠㅤㅤ.drawImage(ﾠㅤㅤᅠ, ㅤㅤᅟㅤ.WUY.translate.x, ㅤㅤᅟㅤ.WUY.translate.y + ﾠ);
                            ﾠ += 70
                        }
                    }
                    if(ㅤㅤᅟㅤ.WVC.WVD && ᅟㅤᅠ.blizzardAndSandstorm) {
                        if(ﾠㅤㅤᅟ.naturalWidth) {
                            ㅤﾠㅤㅤ.drawImage(ﾠㅤㅤᅟ, ㅤㅤᅟㅤ.WUY.translate.x, ㅤㅤᅟㅤ.WUY.translate.y + ﾠ);
                            ﾠ += 70
                        }
                    }
                    if(ﾠㅤᅠᅟ.I.canvas) {
                        ㅤﾠㅤㅤ.drawImage(ﾠㅤᅠᅟ.I.canvas, ㅤㅤᅟㅤ.WUY.translate.x, ㅤㅤᅟㅤ.WUY.translate.y + ﾠ);
                        if(ﾠㅤᅠᅟ.L) {
                            ﾠ += 50
                        }
                    }
                    let ᅟ = ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.BED];
                    if(ᅟ.length) {
                        if(ㅤ) {
                            try {
                                for(let ᅠ = 0; ᅠ < ᅟ.length; ᅠ++) {
                                    let ㅤㅤ = ﾠᅠㅤㅤ(ㅤ, ᅟ[ᅠ]);
                                    if(ㅤㅤ) {
                                        if(ㅤㅤ <= 35 || ㅤㅤ <= 36 && ㅤﾠᅟㅤ) {
                                            ㅤﾠㅤㅤ.font = "30px Baloo Paaji";
                                            ㅤﾠㅤㅤ.strokeStyle = "black";
                                            ㅤﾠㅤㅤ.lineWidth = 7;
                                            ㅤﾠㅤㅤ.strokeText("B", ㅤㅤᅟㅤ.WUY.translate.x + 20, ㅤㅤᅟㅤ.WUY.translate.y + ﾠ + 20);
                                            ㅤﾠㅤㅤ.fillStyle = !ᅟㅤᅠ.darkMode ? "white" : "#BBB";
                                            ㅤﾠㅤㅤ.fillText("B", ㅤㅤᅟㅤ.WUY.translate.x + 20, ㅤㅤᅟㅤ.WUY.translate.y + ﾠ + 20);
                                            break
                                        }
                                    }
                                }
                            } catch (ㅤ) {
                                console.log("Failed To Show Bed Info", ㅤ)
                            }
                        }
                    }
                    ㅤﾠㅤㅤ.restore()
                }
                if(ᅟㅤᅠ.fpsDisplay) {
                    ㅤﾠㅤㅤ.save();
                    ㅤﾠㅤㅤ.font = "30px Baloo Paaji";
                    ㅤﾠㅤㅤ.lineWidth = !ᅟㅤᅠ.darkMode ? 7 : 7.5;
                    ㅤﾠㅤㅤ.strokeStyle = "black";
                    ㅤﾠㅤㅤ.strokeText(ﾠᅟﾠ, ㅤㅤᅟㅤ.WUY.translate.x + -120, ㅤㅤᅟㅤ.WUY.translate.y + -50);
                    ㅤﾠㅤㅤ.fillStyle = !ᅟㅤᅠ.darkMode ? "white" : "#BBB";
                    ㅤﾠㅤㅤ.fillText(ﾠᅟﾠ, ㅤㅤᅟㅤ.WUY.translate.x + -120, ㅤㅤᅟㅤ.WUY.translate.y + -50);
                    ㅤﾠㅤㅤ.restore()
                }
                if(ᅟㅤᅠ.pingDisplay && ㅤﾠﾠᅟ) {
                    ㅤﾠㅤㅤ.save();
                    ㅤﾠㅤㅤ.font = "30px Baloo Paaji";
                    ㅤﾠㅤㅤ.strokeStyle = "black";
                    ㅤﾠㅤㅤ.lineWidth = !ᅟㅤᅠ.darkMode ? 7 : 7.5;
                    ㅤﾠㅤㅤ.strokeText(ㅤﾠﾠᅟ + "ms", ㅤㅤᅟㅤ.WUY.translate.x + -120, ㅤㅤᅟㅤ.WUY.translate.y + (ᅟㅤᅠ.fpsDisplay ? -20 : -50));
                    ㅤﾠㅤㅤ.fillStyle = !ᅟㅤᅠ.darkMode ? "white" : "#BBB";
                    ㅤﾠㅤㅤ.fillText(ㅤﾠﾠᅟ + "ms", ㅤㅤᅟㅤ.WUY.translate.x + -120, ㅤㅤᅟㅤ.WUY.translate.y + (ᅟㅤᅠ.fpsDisplay ? -20 : -50));
                    ㅤﾠㅤㅤ.restore()
                }
                if(ᅟㅤᅠ.daysAlive) {
                    ㅤﾠㅤㅤ.save();
                    ㅤﾠㅤㅤ.font = "30px Baloo Paaji";
                    ㅤﾠㅤㅤ.lineWidth = !ᅟㅤᅠ.darkMode ? 7 : 7.5;
                    ㅤﾠㅤㅤ.strokeStyle = "black";
                    ㅤﾠㅤㅤ.strokeText("" + ㅤㅤᅟㅤ.WVF + " Day" + (ㅤㅤᅟㅤ.WVF > 1 ? "s" : ""), ㅤㅤᅟㅤ.WUY.translate.x + -120, ㅤㅤᅟㅤ.WUY.translate.y + 10 + (ᅟㅤᅠ.fpsDisplay ? 0 : -30) + (ᅟㅤᅠ.pingDisplay && ㅤﾠﾠᅟ ? 0 : -30));
                    ㅤﾠㅤㅤ.fillStyle = !ᅟㅤᅠ.darkMode ? "white" : "#BBB";
                    ㅤﾠㅤㅤ.fillText("" + ㅤㅤᅟㅤ.WVF + " Day" + (ㅤㅤᅟㅤ.WVF > 1 ? "s" : ""), ㅤㅤᅟㅤ.WUY.translate.x + -120, ㅤㅤᅟㅤ.WUY.translate.y + 10 + (ᅟㅤᅠ.fpsDisplay ? 0 : -30) + (ᅟㅤᅠ.pingDisplay && ㅤﾠﾠᅟ ? 0 : -30));
                    ㅤﾠㅤㅤ.restore()
                }
                if(ᅟㅤᅠ.timePlayed.active) {
                    ㅤﾠㅤㅤ.save();
                    ㅤﾠㅤㅤ.font = "30px Baloo Paaji";
                    ㅤﾠㅤㅤ.lineWidth = !ᅟㅤᅠ.darkMode ? 7 : 7.5;
                    ㅤﾠㅤㅤ.strokeStyle = "black";
                    ㅤﾠㅤㅤ.strokeText(ﾠᅠᅟᅟ(Math.round((Date.now() - ᅟㅤᅠ.timePlayed.start) / 1e3)), ㅤㅤᅟㅤ.WUY.translate.x + -120, ㅤㅤᅟㅤ.WUY.translate.y + 40 + (ᅟㅤᅠ.fpsDisplay ? 0 : -30) + (ᅟㅤᅠ.pingDisplay && ㅤﾠﾠᅟ ? 0 : -30) + (ᅟㅤᅠ.daysAlive ? 0 : -30));
                    ㅤﾠㅤㅤ.fillStyle = !ᅟㅤᅠ.darkMode ? "white" : "#BBB";
                    ㅤﾠㅤㅤ.fillText(ﾠᅠᅟᅟ(Math.round((Date.now() - ᅟㅤᅠ.timePlayed.start) / 1e3)), ㅤㅤᅟㅤ.WUY.translate.x + -120, ㅤㅤᅟㅤ.WUY.translate.y + 40 + (ᅟㅤᅠ.fpsDisplay ? 0 : -30) + (ᅟㅤᅠ.pingDisplay && ㅤﾠﾠᅟ ? 0 : -30) + (ᅟㅤᅠ.daysAlive ? 0 : -30));
                    ㅤﾠㅤㅤ.restore()
                }
                let ᅟ = ㅤㅤᅟㅤ.WUU.WUW.length > 0 ? -75 : 0;
                if(ㅤㅤᅟㅤ.WTZ.open || ㅤㅤᅟㅤ.WTX.open && ㅤㅤᅟㅤ.WUU.WUX(ﾠㅤᅟᅠ.WOOD) != -1 || ㅤㅤᅟㅤ.WTT.open && ㅤㅤᅟㅤ.WUU.WUX(ﾠㅤᅟᅠ.WILD_WHEAT) != -1 || ㅤㅤᅟㅤ.WTU.open && ㅤㅤᅟㅤ.WUU.WUX(ﾠㅤᅟᅠ.WOOD) != -1 || ㅤㅤᅟㅤ.WTQ.open && ㅤㅤᅟㅤ.WUU.WUX(ﾠㅤᅟᅠ.BUCKET_FULL) != -1 || ㅤㅤᅟㅤ.WTV.open && (ㅤㅤᅟㅤ.WUU.WUX(ﾠㅤᅟᅠ.WOOD) != -1 || ㅤㅤᅟㅤ.WUU.WUX(ﾠㅤᅟᅠ.FLOUR) != -1)) {
                    ᅟ -= 50
                }
                if(ᅟㅤᅠ.gaugeTimer) {
                    ㅤﾠㅤㅤ.save();
                    ㅤﾠㅤㅤ.translate((document.documentElement.clientWidth - 950) / 2, ᅟ);
                    ㅤﾠㅤㅤ.font = "30px Baloo Paaji";
                    ㅤﾠㅤㅤ.strokeStyle = "black";
                    ㅤﾠㅤㅤ.lineWidth = !ᅟㅤᅠ.darkMode ? 5 : 7.5;
                    ㅤﾠㅤㅤ.strokeText((5 - (Date.now() - ㅤﾠᅟᅟ) / 1e3).toFixed(1), ㅤㅤﾠﾠ.WSJ.translate.x + 455, ㅤㅤﾠﾠ.WSJ.translate.y + 35);
                    ㅤﾠㅤㅤ.fillStyle = ㅤﾠᅟﾠ ? "#54a34e" : "red";
                    ㅤﾠㅤㅤ.fillText((5 - (Date.now() - ㅤﾠᅟᅟ) / 1e3).toFixed(1), ㅤㅤﾠﾠ.WSJ.translate.x + 455, ㅤㅤﾠﾠ.WSJ.translate.y + 35);
                    ㅤﾠㅤㅤ.restore()
                }
                if(ᅟㅤᅠ.gaugePercentages) {
                    ㅤﾠㅤㅤ.save();
                    ㅤﾠㅤㅤ.translate((document.documentElement.clientWidth - 950) / 2, ᅟ);
                    ㅤﾠㅤㅤ.font = "30px Baloo Paaji";
                    ㅤﾠㅤㅤ.strokeStyle = !ᅟㅤᅠ.darkMode ? "#c12819" : "black";
                    ㅤﾠㅤㅤ.lineWidth = !ᅟㅤᅠ.darkMode ? 5 : 7.5;
                    ㅤﾠㅤㅤ.strokeText(Math.floor(ㅤㅤᅟㅤ.WSJ.WUO * 100) + "%", 345, ㅤㅤﾠﾠ.WSJ.translate.y + 10);
                    ㅤﾠㅤㅤ.fillStyle = !ᅟㅤᅠ.darkMode ? "white" : "#c12819";
                    ㅤﾠㅤㅤ.fillText(Math.floor(ㅤㅤᅟㅤ.WSJ.WUO * 100) + "%", 345, ㅤㅤﾠﾠ.WSJ.translate.y + 10);
                    ㅤﾠㅤㅤ.font = "30px Baloo Paaji";
                    ㅤﾠㅤㅤ.strokeStyle = !ᅟㅤᅠ.darkMode ? Math.floor(ㅤㅤᅟㅤ.WSJ.WUM * 100) + (100 - Math.floor(ㅤㅤᅟㅤ.WSJ.WUS * 100)) <= 100 ? "#4f9db2" : "#9c4036" : "black";
                    ㅤﾠㅤㅤ.strokeText(Math.floor(ㅤㅤᅟㅤ.WSJ.WUM * 100) + (100 - Math.floor(ㅤㅤᅟㅤ.WSJ.WUS * 100)) + "%", 575, ㅤㅤﾠﾠ.WSJ.translate.y + 10);
                    ㅤﾠㅤㅤ.fillStyle = !ᅟㅤᅠ.darkMode ? "white" : "#4f9db2";
                    ㅤﾠㅤㅤ.fillText(Math.floor(ㅤㅤᅟㅤ.WSJ.WUM * 100) + (100 - Math.floor(ㅤㅤᅟㅤ.WSJ.WUS * 100)) + "%", 575, ㅤㅤﾠﾠ.WSJ.translate.y + 10);
                    ㅤﾠㅤㅤ.font = "30px Baloo Paaji";
                    ㅤﾠㅤㅤ.strokeStyle = !ᅟㅤᅠ.darkMode ? "#004b87" : "black";
                    ㅤﾠㅤㅤ.strokeText(Math.floor(ㅤㅤᅟㅤ.WSJ.WUP * 100) + "%", 805, ㅤㅤﾠﾠ.WSJ.translate.y + 10);
                    ㅤﾠㅤㅤ.fillStyle = !ᅟㅤᅠ.darkMode ? "white" : "#004b87";
                    ㅤﾠㅤㅤ.fillText(Math.floor(ㅤㅤᅟㅤ.WSJ.WUP * 100) + "%", 805, ㅤㅤﾠﾠ.WSJ.translate.y + 10);
                    ㅤﾠㅤㅤ.font = "30px Baloo Paaji";
                    ㅤﾠㅤㅤ.strokeStyle = !ᅟㅤᅠ.darkMode ? "#54a34e" : "black";
                    ㅤﾠㅤㅤ.strokeText(Math.floor(ㅤㅤᅟㅤ.WSJ.WUN * 100) + "%", 95, ㅤㅤﾠﾠ.WSJ.translate.y + 10);
                    ㅤﾠㅤㅤ.fillStyle = !ᅟㅤᅠ.darkMode ? "white" : "#54a34e";
                    ㅤﾠㅤㅤ.fillText(Math.floor(ㅤㅤᅟㅤ.WSJ.WUN * 100) + "%", 95, ㅤㅤﾠﾠ.WSJ.translate.y + 10);
                    if(Math.floor(ㅤㅤᅟㅤ.WSJ.WUR * 100) != 100) {
                        ㅤﾠㅤㅤ.font = "30px Baloo Paaji";
                        ㅤﾠㅤㅤ.strokeStyle = !ᅟㅤᅠ.darkMode ? "#004b87" : "black";
                        ㅤﾠㅤㅤ.strokeText(Math.floor(ㅤㅤᅟㅤ.WSJ.WUR * 100) + "%", 465, ㅤㅤﾠﾠ.WSJ.translate.y - 30);
                        ㅤﾠㅤㅤ.fillStyle = !ᅟㅤᅠ.darkMode ? "white" : "#4f9db2";
                        ㅤﾠㅤㅤ.fillText(Math.floor(ㅤㅤᅟㅤ.WSJ.WUR * 100) + "%", 465, ㅤㅤﾠﾠ.WSJ.translate.y - 30)
                    }
                    ㅤﾠㅤㅤ.restore()
                }
                if(ᅟㅤᅠ.Aimbot.active && ᅟㅤᅠ.Aimbot.rangeVisual) {
                    let ㅤ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                    if(!ㅤ) {
                        return
                    }
                    ㅤﾠㅤㅤ.save();
                    ㅤﾠㅤㅤ.globalAlpha = .3;
                    ㅤﾠㅤㅤ.lineWidth = 3.5;
                    const ﾠ = Math.PI * 2;
                    ㅤﾠㅤㅤ.strokeStyle = ﾠㅤﾠ <= 133 ? "#54a34e" : "red";
                    ㅤﾠㅤㅤ.beginPath();
                    ㅤﾠㅤㅤ.arc(ㅤㅤᅟㅤ.WUF.x + ㅤ.x, ㅤㅤᅟㅤ.WUF.y + ㅤ.y, 133, 0, ﾠ);
                    ㅤﾠㅤㅤ.stroke();
                    ㅤﾠㅤㅤ.strokeStyle = ﾠㅤﾠ <= 203 ? "#54a34e" : "red";
                    ㅤﾠㅤㅤ.beginPath();
                    ㅤﾠㅤㅤ.arc(ㅤㅤᅟㅤ.WUF.x + ㅤ.x, ㅤㅤᅟㅤ.WUF.y + ㅤ.y, 203, 0, ﾠ);
                    ㅤﾠㅤㅤ.stroke();
                    if(ﾠﾠᅟﾠ(ㅤ.right) == 6) {
                        ㅤﾠㅤㅤ.strokeStyle = ﾠㅤﾠ <= ᅟㅤᅠ.BowRange ? "#54a34e" : "red";
                        ㅤﾠㅤㅤ.beginPath();
                        ㅤﾠㅤㅤ.arc(ㅤㅤᅟㅤ.cam.x + ㅤ.x, ㅤㅤᅟㅤ.cam.y + ㅤ.y, ᅟㅤᅠ.BowRange, 0, ﾠ);
                        ㅤﾠㅤㅤ.stroke()
                    }
                    ㅤﾠㅤㅤ.restore()
                }
                if(ᅟㅤᅠ.joinsLeaves) {
                    let ㅤ = 400;
                    if(ﾠㅤㅤㅤ.newPlayerToggle) {
                        ㅤﾠㅤㅤ.save();
                        ㅤﾠㅤㅤ.font = "18px Baloo Paaji";
                        ㅤﾠㅤㅤ.strokeStyle = "black";
                        ㅤﾠㅤㅤ.lineWidth = 7;
                        ㅤﾠㅤㅤ.fillStyle = "green";
                        for(let ﾠ = 0; ﾠ < ﾠㅤㅤㅤ.Join.length; ﾠ++) {
                            ㅤﾠㅤㅤ.strokeText(ﾠㅤㅤㅤ.Join[ﾠ][0], 0, ㅤ);
                            ㅤﾠㅤㅤ.fillText(ﾠㅤㅤㅤ.Join[ﾠ][0], 0, ㅤ);
                            let ᅟ = ㅤﾠㅤㅤ.measureText(ﾠㅤㅤㅤ.Join[ﾠ][0]).width + 10;
                            ㅤﾠㅤㅤ.fillStyle = "yellow";
                            ㅤﾠㅤㅤ.strokeText("[" + ﾠㅤㅤㅤ.Join[ﾠ][1] + "]", ᅟ, ㅤ);
                            ㅤﾠㅤㅤ.fillText("[" + ﾠㅤㅤㅤ.Join[ﾠ][1] + "]", ᅟ, ㅤ);
                            ㅤﾠㅤㅤ.fillStyle = "green";
                            ㅤ += 20
                        }
                        ㅤﾠㅤㅤ.restore()
                    }
                    if(ﾠㅤㅤㅤ.killPlayerToggle) {
                        ㅤﾠㅤㅤ.save();
                        ㅤﾠㅤㅤ.font = "18px Baloo Paaji";
                        ㅤﾠㅤㅤ.strokeStyle = "black";
                        ㅤﾠㅤㅤ.lineWidth = 7;
                        ㅤﾠㅤㅤ.fillStyle = "red";
                        for(let ﾠ = 0; ﾠ < ﾠㅤㅤㅤ.Leave.length; ﾠ++) {
                            ㅤﾠㅤㅤ.strokeText(ﾠㅤㅤㅤ.Leave[ﾠ][0], 0, ㅤ);
                            ㅤﾠㅤㅤ.fillText(ﾠㅤㅤㅤ.Leave[ﾠ][0], 0, ㅤ);
                            let ᅟ = ㅤﾠㅤㅤ.measureText(ﾠㅤㅤㅤ.Leave[ﾠ][0]).width + 10;
                            ㅤﾠㅤㅤ.fillStyle = "yellow";
                            ㅤﾠㅤㅤ.strokeText("[" + ﾠㅤㅤㅤ.Leave[ﾠ][1] + "]", ᅟ, ㅤ);
                            ㅤﾠㅤㅤ.fillText("[" + ﾠㅤㅤㅤ.Leave[ﾠ][1] + "]", ᅟ, ㅤ);
                            ㅤﾠㅤㅤ.fillStyle = "red";
                            ㅤ += 20
                        }
                        ㅤﾠㅤㅤ.restore()
                    }
                }
            }

            function ᅟﾠㅤᅟ() {
                if(!ㅤㅤﾠㅤ.websocket || ㅤㅤﾠㅤ.websocket.readyState != 1 || !ㅤᅟᅠㅤ) {
                    return
                }
                ㅤㅤﾠㅤ.WTA();
                if(!ㅤﾠㅤᅠ) {
                    ㅤﾠﾠﾠ = document["defaultView"]["Date"]["now"]();
                    ㅤﾠﾠㅤ = true;
                    ㅤㅤﾠㅤ.WSG()
                }
            }

            function ᅟﾠㅤᅠ() {
                if(ㅤㅤᅠᅠ && ㅤﾠㅤㅤ) {
                    let ㅤ = document["defaultView"].devicePixelRatio || 1;
                    let ﾠ = ㅤﾠㅤㅤ.webkitBackingStorePixelRatio || ㅤﾠㅤㅤ.mozBackingStorePixelRatio || ㅤﾠㅤㅤ.msBackingStorePixelRatio || ㅤﾠㅤㅤ.oBackingStorePixelRatio || ㅤﾠㅤㅤ.backingStorePixelRatio || 1;
                    if(ㅤㅤᅠᅠ.width != document["defaultView"].innerWidth) {
                        ㅤㅤᅠᅠ.width = document["defaultView"].innerWidth
                    }
                    if(ㅤㅤᅠᅠ.height != document["defaultView"].innerHeight) {
                        ㅤㅤᅠᅠ.height = document["defaultView"].innerHeight
                    }
                    let ᅟ = ㅤㅤᅠᅠ.width;
                    let ᅠ = ㅤㅤᅠᅠ.height;
                    let ㅤㅤ;
                    let ㅤﾠ = document.getElementById("input_ratio").value * (ㅤ / ﾠ);
                    if(ㅤﾠ === -1) {
                        ㅤㅤ = ㅤ / ﾠ
                    } else {
                        ㅤㅤ = ㅤﾠ
                    }
                    ㅤㅤᅠᅠ.width = ᅟ * ㅤㅤ;
                    ㅤㅤᅠᅠ.height = ᅠ * ㅤㅤ;
                    ㅤㅤᅠᅠ.style.width = ᅟ + "px";
                    ㅤㅤᅠᅠ.style.height = ᅠ + "px";
                    ㅤﾠㅤㅤ.scale(ㅤㅤ, ㅤㅤ);
                    if(ㅤㅤㅤᅠ) {
                        ㅤㅤᅟㅤ.WUF.WUH = document.documentElement.clientWidth;
                        ㅤㅤᅟㅤ.WUF.WUI = document.documentElement.clientHeight;
                        ㅤㅤᅟㅤ.WUF.WUJ = ᅟ;
                        ㅤㅤᅟㅤ.WUF.WUK = ᅠ
                    }
                }
            }
            document["defaultView"].addEventListener("resize", function (ㅤ) {
                if(!ᅠᅠᅟ) {
                    return
                }
                ﾠ.setTimeout(() => {
                    ᅟﾠㅤᅠ()
                }, 0)
            });

            function ᅟﾠﾠㅤ() {
                let ㅤ = null;
                let ﾠ = null;
                let ᅟ = null;
                let ᅠ = 100 - Math.round(ㅤㅤᅟㅤ.WSJ.WUO * 100);
                if(ㅤㅤᅟㅤ.WSJ.WUP < .45) {
                    if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.BOTTLE_FULL]) {
                        ﾠᅠﾠ = ㅤㅤᅟㅤ.WUZ.WVA;
                        ㅤㅤﾠㅤ.WQR(ﾠㅤᅟᅠ.BOTTLE_FULL);
                        ㅤㅤᅟㅤ.WUZ.WVA = ﾠᅠﾠ
                    }
                }
                if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.PLANT]) {
                    ㅤ = ﾠㅤᅟᅠ.PLANT;
                    ﾠ = 10;
                    ᅟ = Math.floor(ᅠ / ﾠ)
                } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.GARLIC]) {
                    ㅤ = ﾠㅤᅟᅠ.GARLIC;
                    ﾠ = 14;
                    ᅟ = Math.floor(ᅠ / ﾠ)
                } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.CRAB_STICK]) {
                    ㅤ = ﾠㅤᅟᅠ.CRAB_STICK;
                    ﾠ = 20;
                    ᅟ = Math.floor(ᅠ / ﾠ)
                } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.PUMPKIN]) {
                    ㅤ = ﾠㅤᅟᅠ.PUMPKIN;
                    ﾠ = 30;
                    ᅟ = Math.floor(ᅠ / ﾠ)
                } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.TOMATO]) {
                    ㅤ = ﾠㅤᅟᅠ.TOMATO;
                    ﾠ = 16;
                    ᅟ = Math.floor(ᅠ / ﾠ)
                } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.CARROT]) {
                    ㅤ = ﾠㅤᅟᅠ.CARROT;
                    ﾠ = 20;
                    ᅟ = Math.floor(ᅠ / ﾠ)
                } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.WATERMELON]) {
                    ㅤ = ﾠㅤᅟᅠ.WATERMELON;
                    ﾠ = 15;
                    ᅟ = Math.floor(ᅠ / ﾠ)
                } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.BREAD]) {
                    ㅤ = ﾠㅤᅟᅠ.BREAD;
                    ﾠ = 15;
                    ᅟ = Math.floor(ᅠ / ﾠ)
                } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.COOKED_MEAT]) {
                    ㅤ = ﾠㅤᅟᅠ.COOKED_MEAT;
                    ﾠ = 35;
                    ᅟ = Math.floor(ᅠ / ﾠ)
                } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.FOODFISH_COOKED]) {
                    ㅤ = ﾠㅤᅟᅠ.FOODFISH_COOKED;
                    ﾠ = 35;
                    ᅟ = Math.floor(ᅠ / ﾠ)
                } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.CRAB_LOOT]) {
                    ㅤ = ﾠㅤᅟᅠ.CRAB_LOOT;
                    ﾠ = 10;
                    ᅟ = Math.floor(ᅠ / ﾠ)
                } else {
                    ᅟ = 0
                }
                if(ᅟ >= 1) {
                    let ᅠ = ㅤㅤᅟㅤ.WUU.WUV[ㅤ] || 0;
                    ᅟ = Math.min(ᅟ, ᅠ);
                    ㅤㅤᅟㅤ.WSJ.WUO = ㅤㅤᅟㅤ.WSJ.WUO + ﾠ / 100 * ᅟ;
                    for(let ﾠ = 0; ﾠ < ᅟ; ﾠ++) {
                        ㅤㅤﾠㅤ.WQR(ㅤ)
                    }
                }
            }

            function ᅟﾠﾠﾠ() {
                if(!ㅤㅤᅟﾠ.update || ㅤㅤﾠﾠ.WSJ.translate.y == 0 || ㅤㅤﾠﾠ.WSJ.translate.x == 0 || ㅤㅤﾠㅤ.websocket.readyState != 1) {
                    return
                }
                ﾠᅠᅟ = 0;
                if(ㅤㅤᅟㅤ.WSJ.WUM + (1 - ㅤㅤᅟㅤ.WSJ.WUS) >= 2 && !ㅤㅤᅟㅤ.WUZ.WVA && ᅟㅤᅠ.AutoIce.active) {
                    let ㅤ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                    if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.ICE]) {
                        ﾠᅠﾠ = ㅤㅤᅟㅤ.WUZ.WVB;
                        ㅤㅤﾠㅤ.WQR(ﾠㅤᅟᅠ.ICE);
                        ㅤㅤᅟㅤ.WUZ.WVB = ﾠᅠﾠ
                    }
                }
                if(ㅤㅤᅟㅤ.WSJ.WUP < .45 && !ㅤㅤᅟㅤ.WUZ.WVA) {
                    if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.BOTTLE_FULL]) {
                        ﾠᅠﾠ = ㅤㅤᅟㅤ.WUZ.WVA;
                        ㅤㅤﾠㅤ.WQR(ﾠㅤᅟᅠ.BOTTLE_FULL);
                        ㅤㅤᅟㅤ.WUZ.WVA = ﾠᅠﾠ
                    }
                }
                if(ㅤㅤᅟㅤ.WSJ.WUO < .45 && !ㅤㅤᅟㅤ.WUZ.WVA) {
                    let ㅤ = 0;
                    ﾠᅠﾠ = ㅤㅤᅟㅤ.WUZ.WVA;
                    if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.PLANT]) {
                        ㅤ = 10;
                        ㅤㅤﾠㅤ.WQR(ﾠㅤᅟᅠ.PLANT)
                    } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.GARLIC]) {
                        ㅤ = 14;
                        ㅤㅤﾠㅤ.WQR(ﾠㅤᅟᅠ.GARLIC)
                    } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.CRAB_STICK]) {
                        ㅤ = 20;
                        ㅤㅤﾠㅤ.WQR(ﾠㅤᅟᅠ.CRAB_STICK)
                    } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.PUMPKIN]) {
                        ㅤ = 30;
                        ㅤㅤﾠㅤ.WQR(ﾠㅤᅟᅠ.PUMPKIN)
                    } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.TOMATO]) {
                        ㅤ = 16;
                        ㅤㅤﾠㅤ.WQR(ﾠㅤᅟᅠ.TOMATO)
                    } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.CARROT]) {
                        ㅤ = 20;
                        ㅤㅤﾠㅤ.WQR(ﾠㅤᅟᅠ.CARROT)
                    } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.WATERMELON]) {
                        ㅤ = 15;
                        ㅤㅤﾠㅤ.WQR(ﾠㅤᅟᅠ.WATERMELON)
                    } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.COOKED_MEAT]) {
                        ㅤ = 35;
                        ㅤㅤﾠㅤ.WQR(ﾠㅤᅟᅠ.COOKED_MEAT)
                    } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.FOODFISH_COOKED]) {
                        ㅤ = 35;
                        ㅤㅤﾠㅤ.WQR(ﾠㅤᅟᅠ.FOODFISH_COOKED)
                    } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.BREAD]) {
                        ㅤ = 15;
                        ㅤㅤﾠㅤ.WQR(ﾠㅤᅟᅠ.BREAD)
                    } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.COOKIE]) {
                        ㅤ = 50;
                        ㅤㅤﾠㅤ.WQR(ﾠㅤᅟᅠ.COOKIE)
                    } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.SANDWICH]) {
                        ㅤ = 100;
                        ㅤㅤﾠㅤ.WQR(ﾠㅤᅟᅠ.SANDWICH)
                    } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.CAKE]) {
                        ㅤ = 100;
                        ㅤㅤﾠㅤ.WQR(ﾠㅤᅟᅠ.CAKE)
                    } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.CRAB_LOOT]) {
                        ㅤ = 10;
                        ㅤㅤﾠㅤ.WQR(ﾠㅤᅟᅠ.CRAB_LOOT)
                    }
                    ㅤㅤᅟㅤ.WUZ.WVA = ﾠᅠﾠ
                }
            }

            function ᅟﾠﾠᅟ() {
                if(!ㅤㅤᅟﾠ.update || ㅤㅤﾠﾠ.WSJ.translate.y == 0 || ㅤㅤﾠﾠ.WSJ.translate.x == 0 || ㅤㅤﾠㅤ.websocket.readyState != 1) {
                    return
                }
                if(ᅟㅤᅠ.AutoSteal.active) {
                    for(let ㅤ = 0; ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CHEST].length > ㅤ; ㅤ++) {
                        let ﾠ = ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CHEST][ㅤ];
                        let ᅟ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                        if(ᅟ) {
                            ﾠ.ally = ㅤㅤㅤᅠ.id === ﾠ[ㅤㅤᅟﾠ.pid] || ﾠᅟᅠᅠ(ﾠ[ㅤㅤᅟﾠ.pid]);
                            if(ﾠ.ally || !ﾠ.lock) {
                                if(ᅟ && ﾠᅠㅤㅤ(ᅟ, ﾠ) < 300 && !ㅤㅤᅟㅤ.WUZ.WVA) {
                                    if(!ㅤㅤᅟﾠ.update || ㅤㅤﾠﾠ.WSJ.translate.y == 0 || ㅤㅤﾠﾠ.WSJ.translate.x == 0 || ㅤㅤﾠㅤ.websocket.readyState != 1) {
                                        return
                                    }
                                    ﾠ[ㅤㅤᅟﾠ.iid] = ﾠ.id;
                                    ㅤㅤﾠㅤ.WSZ(ﾠ)
                                }
                            }
                        }
                    }
                }
            }

            function ᅟﾠﾠᅠ() {
                if(!ㅤㅤᅟﾠ.update || ㅤㅤﾠﾠ.WSJ.translate.y == 0 || ㅤㅤﾠﾠ.WSJ.translate.x == 0 || ㅤㅤﾠㅤ.websocket.readyState != 1) {
                    return
                }
                if(ᅟㅤᅠ.AutoSpike.active) {
                    let ㅤ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                    let ᅟ;
                    if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.REIDITE_SPIKE]) {
                        ᅟ = ﾠㅤᅟᅠ.REIDITE_SPIKE
                    } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.AMETHYST_SPIKE]) {
                        ᅟ = ﾠㅤᅟᅠ.AMETHYST_SPIKE
                    } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.DIAMOND_SPIKE]) {
                        ᅟ = ﾠㅤᅟᅠ.DIAMOND_SPIKE
                    } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.GOLD_SPIKE]) {
                        ᅟ = ﾠㅤᅟᅠ.GOLD_SPIKE
                    } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.STONE_SPIKE]) {
                        ᅟ = ﾠㅤᅟᅠ.STONE_SPIKE
                    } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.SPIKE]) {
                        ᅟ = ﾠㅤᅟᅠ.SPIKE
                    } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.WALL]) {
                        ᅟ = ﾠㅤᅟᅠ.WALL
                    } else {
                        ᅟ = -1
                    }
                    if(ᅟ == -1 || !ㅤ || ㅤㅤᅟㅤ.WUZ.WVA) {
                        return
                    }
                    let ᅠ = Math.PI * 2;
                    let ㅤㅤ;
                    switch(ᅟㅤᅠ.AutoSpike.mode) {
                    case "Normal":
                        ㅤㅤ = Math.floor((ㅤ.angle + ᅠ) % ᅠ * 255 / ᅠ);
                        if(ㅤㅤ) {
                            for(let ㅤ = 0; ㅤ < 6; ㅤ++) {
                                ㅤㅤﾠㅤ.websocket.send(JSON.stringify([ㅤㅤᅠㅤ.build, ᅟ, (ㅤ * 4 + ㅤㅤ) % 255, 0]));
                                ㅤㅤﾠㅤ.websocket.send(JSON.stringify([ㅤㅤᅠㅤ.build, ᅟ, (ㅤㅤ - ㅤ * 4 + 255) % 255, 0]))
                            }
                            ㅤㅤﾠㅤ.websocket.send(JSON.stringify([ㅤㅤᅠㅤ.build, ᅟ, ㅤㅤ % 255, 0]))
                        };
                        break;
                    case "Hidden":
                        if(ㅤㅤᅟㅤ.WUZ.WVB != ᅟ && Date.now() - ㅤᅠᅟ > Math.floor(Math.random() * 250) + 250) {
                            ㅤㅤﾠㅤ.WQR(ᅟ)
                        }
                        if(Number(ᅟㅤᅠ.AutoSpike.speed) > 0) {
                            let ㅤ = Number(ᅟㅤᅠ.AutoSpike.speed) * 20;
                            let ᅠ = Math.floor(Math.random() * ㅤ) + ㅤ / 2;
                            ﾠ.setTimeout(() => {
                                if(ㅤㅤᅟㅤ.WUZ.WVB == ᅟ) {
                                    ㅤㅤﾠㅤ.WQP();
                                    ㅤᅠᅟ = Date.now()
                                }
                            }, ᅠ)
                        } else {
                            if(ㅤㅤᅟㅤ.WUZ.WVB == ᅟ) {
                                ㅤㅤﾠㅤ.WQP();
                                ㅤᅠᅟ = Date.now()
                            }
                        };
                        break;
                    default:
                        break
                    }
                } else if(!ᅟㅤᅠ.AutoSpike.active) {
                    if(ㅤᅠᅟ) {
                        ㅤᅠᅟ = 0;
                        ㅤㅤᅟㅤ.WUZ.WVB = -1
                    }
                }
            }

            function ᅟﾠᅟㅤ() {
                if(!ㅤㅤᅟﾠ.update || ㅤㅤﾠﾠ.WSJ.translate.y == 0 || ㅤㅤﾠﾠ.WSJ.translate.x == 0 || ㅤㅤﾠㅤ.websocket.readyState != 1) {
                    return
                }
                if(ᅟㅤᅠ.AutoWall.active) {
                    let ㅤ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                    let ᅟ;
                    if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.WALL]) {
                        ᅟ = ﾠㅤᅟᅠ.WALL
                    } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.STONE_WALL]) {
                        ᅟ = ﾠㅤᅟᅠ.STONE_WALL
                    } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.GOLD_WALL]) {
                        ᅟ = ﾠㅤᅟᅠ.GOLD_WALL
                    } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.DIAMOND_WALL]) {
                        ᅟ = ﾠㅤᅟᅠ.DIAMOND_WALL
                    } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.AMETHYST_WALL]) {
                        ᅟ = ﾠㅤᅟᅠ.AMETHYST_WALL
                    } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.REIDITE_WALL]) {
                        ᅟ = ﾠㅤᅟᅠ.REIDITE_WALL
                    } else {
                        ᅟ = -1
                    }
                    if(ᅟ == -1 || !ㅤ || ㅤㅤᅟㅤ.WUZ.WVA) {
                        return
                    }
                    let ᅠ = Math.PI * 2;
                    let ㅤㅤ;
                    switch(ᅟㅤᅠ.AutoWall.mode) {
                    case "Normal":
                        ㅤㅤ = Math.floor((ㅤ.angle + ᅠ) % ᅠ * 255 / ᅠ);
                        if(ㅤㅤ) {
                            for(let ㅤ = 0; ㅤ < 6; ㅤ++) {
                                ㅤㅤﾠㅤ.websocket.send(JSON.stringify([ㅤㅤᅠㅤ.build, ᅟ, (ㅤ * 4 + ㅤㅤ) % 255, 0]));
                                ㅤㅤﾠㅤ.websocket.send(JSON.stringify([ㅤㅤᅠㅤ.build, ᅟ, (ㅤㅤ - ㅤ * 4 + 255) % 255, 0]))
                            }
                            ㅤㅤﾠㅤ.websocket.send(JSON.stringify([ㅤㅤᅠㅤ.build, ᅟ, ㅤㅤ % 255, 0]))
                        };
                        break;
                    case "Hidden":
                        if(ㅤㅤᅟㅤ.WUZ.WVB != ᅟ && Date.now() - ㅤᅠﾠ > Math.floor(Math.random() * 250) + 250) {
                            ㅤㅤﾠㅤ.WQR(ᅟ)
                        }
                        if(Number(ᅟㅤᅠ.AutoSpike.speed) > 0) {
                            let ㅤ = Number(ᅟㅤᅠ.AutoSpike.speed) * 20;
                            let ᅠ = Math.floor(Math.random() * ㅤ) + ㅤ / 2;
                            ﾠ.setTimeout(() => {
                                if(ㅤㅤᅟㅤ.WUZ.WVB == ᅟ) {
                                    ㅤㅤﾠㅤ.WQP();
                                    ㅤᅠﾠ = Date.now()
                                }
                            }, ᅠ)
                        } else {
                            if(ㅤㅤᅟㅤ.WUZ.WVB == ᅟ) {
                                ㅤㅤﾠㅤ.WQP();
                                ㅤᅠﾠ = Date.now()
                            }
                        };
                        break;
                    default:
                        break
                    }
                } else if(!ᅟㅤᅠ.AutoWall.active) {
                    if(ㅤᅠﾠ) {
                        ㅤᅠﾠ = 0;
                        ㅤㅤᅟㅤ.WUZ.WVB = -1
                    }
                }
            }

            function ᅟﾠᅟﾠ() {
                if(!ㅤㅤᅟﾠ.update || ㅤㅤﾠﾠ.WSJ.translate.y == 0 || ㅤㅤﾠﾠ.WSJ.translate.x == 0 || ㅤㅤﾠㅤ.websocket.readyState != 1) {
                    return
                }
                if(ᅟㅤᅠ.AutoFire.active) {
                    let ㅤ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                    if(!ㅤ || ㅤㅤᅟㅤ.WUZ.WVA || !ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.FIRE] && !ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.BIG_FIRE]) {
                        return
                    }
                    let ﾠ = Math.PI * 2;
                    let ᅟ = Math.floor((ㅤ.angle + ﾠ) % ﾠ * 255 / ﾠ);
                    ㅤㅤﾠㅤ.websocket.send(JSON.stringify([ㅤㅤᅠㅤ.build, ﾠㅤᅟᅠ.FIRE, ᅟ, 0]));
                    ㅤㅤﾠㅤ.websocket.send(JSON.stringify([ㅤㅤᅠㅤ.build, ﾠㅤᅟᅠ.BIG_FIRE, ᅟ, 0]))
                }
            }

            function ᅟﾠᅟᅟ() {
                if(!ㅤㅤᅟﾠ.update || ㅤㅤﾠﾠ.WSJ.translate.y == 0 || ㅤㅤﾠﾠ.WSJ.translate.x == 0 || ㅤㅤﾠㅤ.websocket.readyState != 1) {
                    return
                }
                let ㅤ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                if(ᅟㅤᅠ.AutoCraft.active) {
                    if(!ㅤ) {
                        return
                    }
                    if(ㅤㅤᅟㅤ.WUZ.WVA) {
                        return
                    }
                    ᅟﾠﾠㅤ();
                    if(ㅤᅟﾠᅠ != -1) {
                        ㅤㅤﾠㅤ.WQI(ㅤᅟﾠᅠ)
                    }
                }
            }

            function ᅟﾠᅟᅠ() {
                if(!ㅤㅤᅟﾠ.update || ㅤㅤﾠﾠ.WSJ.translate.y == 0 || ㅤㅤﾠﾠ.WSJ.translate.x == 0 || ㅤㅤﾠㅤ.websocket.readyState != 1) {
                    return
                }
                let ㅤ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                if(ᅟㅤᅠ.AutoRecycle.active) {
                    if(!ㅤ) {
                        return
                    }
                    if(ㅤㅤᅟㅤ.WUZ.WVA) {
                        return
                    }
                    ᅟﾠﾠㅤ();
                    if(ㅤᅟᅟㅤ != -1) {
                        ㅤㅤﾠㅤ.WQQ(ㅤᅟᅟㅤ)
                    }
                }
            }

            function ᅟﾠᅠㅤ() {
                if(!ㅤㅤᅟﾠ.update || ㅤㅤﾠﾠ.WSJ.translate.y == 0 || ㅤㅤﾠﾠ.WSJ.translate.x == 0 || ㅤㅤﾠㅤ.websocket.readyState != 1) {
                    return
                }
                let ㅤ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                if(ᅟㅤᅠ.AutoExtTake.active || ᅟㅤᅠ.AutoExtPut.active || ᅟㅤᅠ.AutoSteal.active) {
                    for(let ﾠ = 0, ᅟ = [...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EXTRACTOR_MACHINE_STONE], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EXTRACTOR_MACHINE_GOLD], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EXTRACTOR_MACHINE_DIAMOND], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EXTRACTOR_MACHINE_AMETHYST], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EXTRACTOR_MACHINE_REIDITE], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EXTRACTOR_MACHINE_EMERALD], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EXTRACTOR_MACHINE_COPPER], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EXTRACTOR_MACHINE_IRON], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EXTRACTOR_MACHINE_TOPAZ], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EXTRACTOR_MACHINE_SAPPHIRE], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EXTRACTOR_MACHINE_JADE], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EXTRACTOR_MACHINE_RUBY], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EXTRACTOR_MACHINE_COAL], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.EXTRACTOR_MACHINE_AQUAMARINE]], ᅠ = ᅟ.length; ﾠ < ᅠ; ﾠ++) {
                        let ᅠ = ᅟ[ﾠ];
                        if(ᅠ) {
                            if(ᅟㅤᅠ.AutoExtTake.active || ᅟㅤᅠ.AutoExtPut.active || ᅟㅤᅠ.AutoSteal.active) {
                                if(ﾠᅠㅤㅤ(ㅤ, ᅠ) < 300 && ㅤ) {
                                    ᅠ[ㅤㅤᅟﾠ.iid] = ᅠ.id;
                                    if((ᅟㅤᅠ.AutoExtTake.active || ᅟㅤᅠ.AutoSteal.active) && (ᅠ.info & 65280) >> 8) {
                                        ㅤㅤﾠㅤ.WSX(ᅠ)
                                    }
                                    if(ᅟㅤᅠ.AutoExtPut.active && (ᅠ.info & 255) < 255) {
                                        ㅤㅤﾠㅤ.WSU(ᅠ, 255)
                                    }
                                }
                            }
                        }
                    }
                }
            }

            function ᅟﾠᅠﾠ() {
                if(!ㅤㅤᅟﾠ.update || ㅤㅤﾠﾠ.WSJ.translate.y == 0 || ㅤㅤﾠﾠ.WSJ.translate.x == 0 || ㅤㅤﾠㅤ.websocket.readyState != 1) {
                    return
                }
                let ㅤ = ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.BREAD_OVEN];
                for(let ﾠ = 0; ﾠ < ㅤ.length; ﾠ++) {
                    if(ᅟㅤᅠ.AutoBreadTake.active || ᅟㅤᅠ.AutoBreadPut.active || ᅟㅤᅠ.AutoSteal.active) {
                        let ᅟ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                        let ᅠ = ㅤ[ﾠ];
                        if(ᅟ) {
                            console.log(ᅠ);
                            if(ﾠᅠㅤㅤ(ᅟ, ᅠ) < 300) {
                                console.log(ᅠ);
                                ᅠ[ㅤㅤᅟﾠ.iid] = ᅠ.id;
                                if(ᅟㅤᅠ.AutoBreadPut.active) {
                                    ㅤㅤﾠㅤ.WSR(ᅠ, 31, 0);
                                    ㅤㅤﾠㅤ.WSR(ᅠ, 0, 31)
                                }
                                if(ᅟㅤᅠ.AutoBreadTake.active || ᅟㅤᅠ.AutoSteal.active) {
                                    ㅤㅤﾠㅤ.WSS(ᅠ)
                                }
                            }
                        }
                    }
                }
                let ﾠ = ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.WINDMILL];
                for(let ㅤ = 0; ㅤ < ﾠ.length; ㅤ++) {
                    if(ᅟㅤᅠ.AutoBreadTake.active || ᅟㅤᅠ.AutoBreadPut.active || ᅟㅤᅠ.AutoSteal.active) {
                        let ᅟ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                        if(ᅟ) {
                            if(ﾠᅠㅤㅤ(ᅟ, ﾠ[ㅤ]) < 300) {
                                ﾠ[ㅤ][ㅤㅤᅟﾠ.iid] = ﾠ[ㅤ].id;
                                if(ᅟㅤᅠ.AutoBreadPut.active) {
                                    ㅤㅤﾠㅤ.WSP(ﾠ[ㅤ], 255)
                                }
                                if(ᅟㅤᅠ.AutoBreadTake.active || ᅟㅤᅠ.AutoSteal.active) {
                                    ㅤㅤﾠㅤ.WSY(ﾠ[ㅤ], 255)
                                }
                            }
                        }
                    }
                }
            }
            let ᅟﾠᅠᅟ = 0;
            let ᅟﾠᅠᅠ = false;
            let ᅟᅟㅤㅤ = 0;

            function ᅟᅟㅤﾠ() {
                if(!ㅤㅤᅟﾠ.update || ㅤㅤﾠﾠ.WSJ.translate.y == 0 || ㅤㅤﾠﾠ.WSJ.translate.x == 0 || ㅤㅤﾠㅤ.websocket.readyState != 1) {
                    return
                }
                if(ᅟㅤᅠ.SmartCraft.active) {
                    if(ㅤㅤᅟㅤ.WUZ.WVA) {
                        return
                    }
                    ᅟﾠﾠㅤ();
                    let ㅤ = [];
                    switch(ᅟㅤᅠ.SmartCraft.option) {
                    case "Reidite Spike Doors":
                        ㅤ = [
                            [ﾠㅤᅟᅠ.WOOD_DOOR, ﾠㅤᅟᅠ.WOOD_DOOR],
                            [ﾠㅤᅟᅠ.STONE_DOOR, ﾠㅤᅟᅠ.STONE_DOOR],
                            [ﾠㅤᅟᅠ.GOLD_DOOR, ﾠㅤᅟᅠ.GOLD_DOOR],
                            [ﾠㅤᅟᅠ.DIAMOND_DOOR, ﾠㅤᅟᅠ.DIAMOND_DOOR],
                            [ﾠㅤᅟᅠ.AMETHYST_DOOR, ﾠㅤᅟᅠ.AMETHYST_DOOR],
                            [ﾠㅤᅟᅠ.REIDITE_DOOR, ﾠㅤᅟᅠ.REIDITE_DOOR],
                            [ﾠㅤᅟᅠ.REIDITE_DOOR_SPIKE, ﾠㅤᅟᅠ.REIDITE_DOOR_SPIKE]
                        ];
                        break;
                    case "Amethyst Spike Doors":
                        ㅤ = [
                            [ﾠㅤᅟᅠ.WOOD_DOOR, ﾠㅤᅟᅠ.WOOD_DOOR],
                            [ﾠㅤᅟᅠ.STONE_DOOR, ﾠㅤᅟᅠ.STONE_DOOR],
                            [ﾠㅤᅟᅠ.GOLD_DOOR, ﾠㅤᅟᅠ.GOLD_DOOR],
                            [ﾠㅤᅟᅠ.DIAMOND_DOOR, ﾠㅤᅟᅠ.DIAMOND_DOOR],
                            [ﾠㅤᅟᅠ.AMETHYST_DOOR, ﾠㅤᅟᅠ.AMETHYST_DOOR],
                            [ﾠㅤᅟᅠ.AMETHYST_DOOR_SPIKE, ﾠㅤᅟᅠ.AMETHYST_DOOR_SPIKE]
                        ];
                        break;
                    case "Reidite Walls":
                        ㅤ = [
                            [ﾠㅤᅟᅠ.WALL, ﾠㅤᅟᅠ.WALL],
                            [ﾠㅤᅟᅠ.STONE_WALL, ﾠㅤᅟᅠ.STONE_WALL],
                            [ﾠㅤᅟᅠ.GOLD_WALL, ﾠㅤᅟᅠ.GOLD_WALL],
                            [ﾠㅤᅟᅠ.DIAMOND_WALL, ﾠㅤᅟᅠ.DIAMOND_WALL],
                            [ﾠㅤᅟᅠ.AMETHYST_WALL, ﾠㅤᅟᅠ.AMETHYST_WALL],
                            [ﾠㅤᅟᅠ.REIDITE_WALL, ﾠㅤᅟᅠ.REIDITE_WALL]
                        ];
                        break;
                    case "Reidite Spikes":
                        ㅤ = [
                            [ﾠㅤᅟᅠ.WALL, ﾠㅤᅟᅠ.WALL],
                            [ﾠㅤᅟᅠ.STONE_WALL, ﾠㅤᅟᅠ.STONE_WALL],
                            [ﾠㅤᅟᅠ.GOLD_WALL, ﾠㅤᅟᅠ.GOLD_WALL],
                            [ﾠㅤᅟᅠ.DIAMOND_WALL, ﾠㅤᅟᅠ.DIAMOND_WALL],
                            [ﾠㅤᅟᅠ.AMETHYST_WALL, ﾠㅤᅟᅠ.AMETHYST_WALL],
                            [ﾠㅤᅟᅠ.REIDITE_WALL, ﾠㅤᅟᅠ.REIDITE_WALL],
                            [ﾠㅤᅟᅠ.REIDITE_SPIKE, ﾠㅤᅟᅠ.REIDITE_SPIKE]
                        ];
                        break;
                    case "Amethyst Spikes":
                        ㅤ = [
                            [ﾠㅤᅟᅠ.WALL, ﾠㅤᅟᅠ.WALL],
                            [ﾠㅤᅟᅠ.STONE_WALL, ﾠㅤᅟᅠ.STONE_WALL],
                            [ﾠㅤᅟᅠ.GOLD_WALL, ﾠㅤᅟᅠ.GOLD_WALL],
                            [ﾠㅤᅟᅠ.DIAMOND_WALL, ﾠㅤᅟᅠ.DIAMOND_WALL],
                            [ﾠㅤᅟᅠ.AMETHYST_WALL, ﾠㅤᅟᅠ.AMETHYST_WALL],
                            [ﾠㅤᅟᅠ.AMETHYST_SPIKE, ﾠㅤᅟᅠ.AMETHYST_SPIKE]
                        ];
                        break;
                    case "Diamond Spikes":
                        ㅤ = [
                            [ﾠㅤᅟᅠ.WALL, ﾠㅤᅟᅠ.WALL],
                            [ﾠㅤᅟᅠ.STONE_WALL, ﾠㅤᅟᅠ.STONE_WALL],
                            [ﾠㅤᅟᅠ.GOLD_WALL, ﾠㅤᅟᅠ.GOLD_WALL],
                            [ﾠㅤᅟᅠ.DIAMOND_WALL, ﾠㅤᅟᅠ.DIAMOND_WALL],
                            [ﾠㅤᅟᅠ.DIAMOND_SPIKE, ﾠㅤᅟᅠ.DIAMOND_SPIKE]
                        ];
                        break;
                    case "Gold Spikes":
                        ㅤ = [
                            [ﾠㅤᅟᅠ.WALL, ﾠㅤᅟᅠ.WALL],
                            [ﾠㅤᅟᅠ.STONE_WALL, ﾠㅤᅟᅠ.STONE_WALL],
                            [ﾠㅤᅟᅠ.GOLD_WALL, ﾠㅤᅟᅠ.GOLD_WALL],
                            [ﾠㅤᅟᅠ.GOLD_SPIKE, ﾠㅤᅟᅠ.GOLD_SPIKE]
                        ];
                        break;
                    case "Reidite Swords":
                        ㅤ = [
                            [ﾠㅤᅟᅠ.SWORD_WOOD, ﾠㅤᅟᅠ.SWORD_WOOD],
                            [ﾠㅤᅟᅠ.SWORD, ﾠㅤᅟᅠ.SWORD],
                            [ﾠㅤᅟᅠ.SWORD_GOLD, ﾠㅤᅟᅠ.SWORD_GOLD],
                            [ﾠㅤᅟᅠ.SWORD_DIAMOND, ﾠㅤᅟᅠ.SWORD_DIAMOND],
                            [ﾠㅤᅟᅠ.SWORD_AMETHYST, ﾠㅤᅟᅠ.SWORD_AMETHYST],
                            [ﾠㅤᅟᅠ.REIDITE_SWORD, ﾠㅤᅟᅠ.REIDITE_SWORD]
                        ];
                        break;
                    case "Reidite Spears":
                        ㅤ = [
                            [ﾠㅤᅟᅠ.WOOD_SPEAR, ﾠㅤᅟᅠ.WOOD_SPEAR],
                            [ﾠㅤᅟᅠ.SPEAR, ﾠㅤᅟᅠ.SPEAR],
                            [ﾠㅤᅟᅠ.GOLD_SPEAR, ﾠㅤᅟᅠ.GOLD_SPEAR],
                            [ﾠㅤᅟᅠ.DIAMOND_SPEAR, ﾠㅤᅟᅠ.DIAMOND_SPEAR],
                            [ﾠㅤᅟᅠ.AMETHYST_SPEAR, ﾠㅤᅟᅠ.AMETHYST_SPEAR],
                            [ﾠㅤᅟᅠ.REIDITE_SPEAR, ﾠㅤᅟᅠ.REIDITE_SPEAR]
                        ];
                        break;
                    case "Reidite Helmets":
                        ㅤ = [
                            [ﾠㅤᅟᅠ.WOOD_HELMET, ﾠㅤᅟᅠ.WOOD_HELMET],
                            [ﾠㅤᅟᅠ.STONE_HELMET, ﾠㅤᅟᅠ.STONE_HELMET],
                            [ﾠㅤᅟᅠ.GOLD_HELMET, ﾠㅤᅟᅠ.GOLD_HELMET],
                            [ﾠㅤᅟᅠ.DIAMOND_HELMET, ﾠㅤᅟᅠ.DIAMOND_HELMET],
                            [ﾠㅤᅟᅠ.AMETHYST_HELMET, ﾠㅤᅟᅠ.AMETHYST_HELMET],
                            [ﾠㅤᅟᅠ.REIDITE_HELMET, ﾠㅤᅟᅠ.REIDITE_HELMET]
                        ];
                        break;
                    case "Reidite Shields":
                        ㅤ = [
                            [ﾠㅤᅟᅠ.WOOD_SHIELD, ﾠㅤᅟᅠ.WOOD_SHIELD],
                            [ﾠㅤᅟᅠ.STONE_SHIELD, ﾠㅤᅟᅠ.STONE_SHIELD],
                            [ﾠㅤᅟᅠ.GOLD_SHIELD, ﾠㅤᅟᅠ.GOLD_SHIELD],
                            [ﾠㅤᅟᅠ.DIAMOND_SHIELD, ﾠㅤᅟᅠ.DIAMOND_SHIELD],
                            [ﾠㅤᅟᅠ.AMETHYST_SHIELD, ﾠㅤᅟᅠ.AMETHYST_SHIELD],
                            [ﾠㅤᅟᅠ.REIDITE_SHIELD, ﾠㅤᅟᅠ.REIDITE_SHIELD]
                        ];
                        break;
                    default:
                        break
                    }
                    if(!ᅟﾠᅠᅠ) {
                        ᅟﾠᅠᅠ = true;
                        if(ㅤㅤᅟㅤ.WUU.WUV[ㅤ[ㅤ.length - 1][1]]) {
                            let ﾠ = ㅤㅤᅟㅤ.WUU.WUV[ㅤ[ㅤ.length - 1][1]];
                            ᅟᅟㅤㅤ = ﾠ + Number(ᅟㅤᅠ.SmartCraft.amount)
                        } else {
                            ᅟᅟㅤㅤ = Number(ᅟㅤᅠ.SmartCraft.amount)
                        }
                    }
                    ᅟﾠᅠᅟ = 0;
                    for(let ﾠ = 0; ﾠ < ㅤ.length; ﾠ++) {
                        if(ㅤ[ﾠ][0] == ㅤᅟᅟﾠ && ﾠ != ㅤ.length - 1) {
                            ᅟﾠᅠᅟ = ﾠ + 1
                        }
                    }
                    if(ᅟﾠᅠᅟ == 0) {
                        for(let ﾠ = 0; ﾠ < ㅤ.length; ﾠ++) {
                            if(ㅤㅤᅟㅤ.WUU.WUV[ㅤ[ﾠ][1]] && ﾠ != ㅤ.length - 1) {
                                ᅟﾠᅠᅟ = ﾠ + 1
                            }
                        }
                    }
                    if(ㅤㅤᅟㅤ.WUU.WUV[ㅤ[ㅤ.length - 1][1]] >= ᅟᅟㅤㅤ) {
                        ᅟㅤᅠ.SmartCraft.active = false;
                        return
                    }
                    ㅤㅤﾠㅤ.WQI(ㅤ[ᅟﾠᅠᅟ][0], 1)
                } else if(!ᅟㅤᅠ.SmartCraft.active) {
                    ᅟﾠᅠᅠ = false;
                    ᅟᅟㅤㅤ = 0
                }
            }

            function ᅟᅟㅤᅟ() {
                if(!ㅤㅤᅟﾠ.update || ㅤㅤﾠﾠ.WSJ.translate.y == 0 || ㅤㅤﾠﾠ.WSJ.translate.x == 0 || ㅤㅤﾠㅤ.websocket.readyState != 1) {
                    return
                }
                let ㅤ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                if(!ㅤ) {
                    return
                }
                if(ㅤ[ㅤㅤᅟﾠ.ghost]) {
                    let ﾠ = ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.RESURRECTION];
                    if(ﾠ.length) {
                        let ᅟ = false;
                        for(let ᅠ = 0; ᅠ < ﾠ.length; ᅠ++) {
                            if(ﾠᅠㅤㅤ(ﾠ[ᅠ], ㅤ) <= 100) {
                                ᅟ = true;
                                if(!ㅤ[ㅤㅤᅟﾠ.ghost] || !ᅟㅤᅠ.AutoCrown.active || ㅤㅤᅟㅤ.WUE.wait && !ㅤㅤﾠㅤ.websocket.url.includes("community")) {
                                    continue
                                }
                                ㅤㅤᅟㅤ.WSO[ㅤㅤᅟﾠ.pid] = ﾠ[ᅠ][ㅤㅤᅟﾠ.pid];
                                ㅤㅤᅟㅤ.WSO[ㅤㅤᅟﾠ.iid] = ﾠ[ᅠ].id;
                                ㅤㅤﾠㅤ.WSO()
                            }
                        }
                        if(ᅟ && ㅤ[ㅤㅤᅟﾠ.ghost]) {
                            ㅤㅤᅟㅤ.WQK.enabled = true
                        } else if(!ᅟ) {
                            ㅤㅤᅟㅤ.WQK.enabled = false
                        }
                    }
                } else if(ㅤㅤᅟㅤ.WQK.enabled) {
                    ㅤㅤᅟㅤ.WQK.enabled = false
                }
            }

            function ᅟᅟㅤᅠ() {
                if(!ㅤㅤᅟﾠ.update || ㅤㅤﾠﾠ.WSJ.translate.y == 0 || ㅤㅤﾠﾠ.WSJ.translate.x == 0 || ㅤㅤﾠㅤ.websocket.readyState != 1) {
                    return
                }
                let ㅤ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                if(!ㅤ) {
                    return
                }
                let ﾠ = ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.TOTEM];
                for(let ᅟ = 0; ᅟ < ﾠ.length; ᅟ++) {
                    if(ᅟㅤᅠ.AutoTotem.active && !ㅤㅤᅟㅤ.WUD.wait && ㅤㅤᅟㅤ.WUB.length === 0) {
                        if(!((ﾠ[ᅟ].info & 16) >> 4) && ﾠ[ᅟ].info < 8) {
                            if(ﾠᅠㅤㅤ(ﾠ[ᅟ], ㅤ) < 300) {
                                ㅤㅤᅟㅤ.WUD[ㅤㅤᅟﾠ.pid] = ﾠ[ᅟ][ㅤㅤᅟﾠ.pid];
                                ㅤㅤᅟㅤ.WUD.id = ﾠ[ᅟ].id;
                                ㅤㅤﾠㅤ.WQD()
                            }
                        }
                    }
                }
            }

            function ᅟᅟﾠㅤ() {
                if(!ㅤㅤᅟﾠ.update || ㅤㅤﾠﾠ.WSJ.translate.y == 0 || ㅤㅤﾠﾠ.WSJ.translate.x == 0 || ㅤㅤﾠㅤ.websocket.readyState != 1) {
                    return
                }
                let ㅤ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                if(ᅟㅤᅠ.AutoBuild.active) {
                    if(ㅤㅤᅟㅤ.WUZ.WVA || !ㅤ) {
                        return
                    }
                    if(ᅟㅤᅠ.AutoBuild.mode == "Bridges" && ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.BRIDGE]) {
                        let ﾠ = Math.PI * 2;
                        let ᅟ = Math.floor((ㅤ.angle + ﾠ) % ﾠ * 255 / ﾠ);
                        ㅤㅤﾠㅤ.websocket.send(JSON.stringify([ㅤㅤᅠㅤ.build, ﾠㅤᅟᅠ.BRIDGE, ᅟ, 0]))
                    }
                    if(ᅟㅤᅠ.AutoBuild.mode == "Plots" && ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.PLOT]) {
                        let ﾠ = Math.PI * 2;
                        let ᅟ = Math.floor((ㅤ.angle + ﾠ) % ﾠ * 255 / ﾠ);
                        ㅤㅤﾠㅤ.websocket.send(JSON.stringify([ㅤㅤᅠㅤ.build, ﾠㅤᅟᅠ.PLOT, ᅟ, 0]))
                    }
                    if(ᅟㅤᅠ.AutoBuild.mode == "Roofs" && ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.ROOF]) {
                        let ﾠ = Math.PI * 2;
                        let ᅟ = Math.floor((ㅤ.angle + ﾠ) % ﾠ * 255 / ﾠ);
                        ㅤㅤﾠㅤ.websocket.send(JSON.stringify([ㅤㅤᅠㅤ.build, ﾠㅤᅟᅠ.ROOF, ᅟ, 0]))
                    }
                }
            }
            let ᅟᅟﾠﾠ = 0;
            let ᅟᅟﾠᅟ = 0;

            function ᅟᅟﾠᅠ(ㅤ) {
                let ﾠ = Math.PI * 2;
                let ᅟ = Math.floor((ㅤ + ﾠ) % ﾠ * 360 / ﾠ);
                let ᅠ = 0;
                switch(Math.round(ᅟ / 45)) {
                case 0:
                    ᅠ = 2;
                    break;
                case 1:
                    ᅠ = 6;
                    break;
                case 2:
                    ᅠ = 4;
                    break;
                case 3:
                    ᅠ = 5;
                    break;
                case 4:
                    ᅠ = 1;
                    break;
                case 5:
                    ᅠ = 9;
                    break;
                case 6:
                    ᅠ = 8;
                    break;
                case 7:
                    ᅠ = 10;
                    break;
                case 8:
                    ᅠ = 2;
                    break
                }
                if(ᅠ == ᅟᅟﾠᅟ) {
                    ᅟᅟﾠﾠ++;
                    if(ᅟᅟﾠﾠ > 1) {
                        return
                    } else {
                        ㅤㅤﾠㅤ.WQW(ᅠ);
                        ᅟᅟﾠᅟ = ᅠ
                    }
                } else {
                    ᅟᅟﾠﾠ = 0;
                    ㅤㅤﾠㅤ.WQW(ᅠ);
                    ᅟᅟﾠᅟ = ᅠ
                }
            }
            let ᅟᅟᅟㅤ = false;
            let ᅟᅟᅟﾠ = 0;

            function ᅟᅟᅟᅟ() {
                if(!ㅤㅤᅟﾠ.update || ㅤㅤﾠﾠ.WSJ.translate.y == 0 || ㅤㅤﾠﾠ.WSJ.translate.x == 0 || ㅤㅤﾠㅤ.websocket.readyState != 1) {
                    return
                }
                if(ᅟㅤᅠ.Aimbot.active) {
                    let ㅤ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                    if(!ㅤ) {
                        if(ᅟᅟᅟㅤ) {
                            ᅟᅟᅟㅤ = false;
                            ﾠㅤㅤ = false;
                            return ㅤㅤﾠㅤ.WQT()
                        } else {
                            return
                        }
                    }
                    const ﾠ = ﾠﾠᅟᅠ();
                    const ᅟ = ﾠ[0];
                    ﾠㅤﾠ = ﾠ[1];
                    if(!ᅟ) {
                        ﾠㅤᅠ = 0;
                        ᅟㅤᅠ.Aimbot.angle = 0;
                        if(ᅟᅟᅟㅤ) {
                            ᅟᅟᅟㅤ = false;
                            ﾠㅤㅤ = false;
                            return ㅤㅤﾠㅤ.WQT()
                        } else {
                            return
                        }
                    } else {
                        ﾠㅤᅠ = 1
                    }
                    const ᅠ = ﾠﾠᅟᅟ({
                        x: ᅟ.r.x + ㅤㅤᅟㅤ.WUF.x,
                        y: ᅟ.r.y + ㅤㅤᅟㅤ.WUF.y
                    }, {
                        x: ㅤ.r.x + ㅤㅤᅟㅤ.WUF.x,
                        y: ㅤ.r.y + ㅤㅤᅟㅤ.WUF.y
                    });
                    if(!ᅠ && ᅠ != 0) {
                        ᅟㅤᅠ.Aimbot.angle = 0;
                        if(ᅟᅟᅟㅤ) {
                            ᅟᅟᅟㅤ = false;
                            ﾠㅤㅤ = false;
                            return ㅤㅤﾠㅤ.WQT()
                        } else {
                            return
                        }
                    }
                    const ㅤㅤ = ﾠﾠᅟﾠ(ㅤ.right);
                    if(ㅤㅤ) {
                        ﾠㅤᅟ = ㅤㅤ
                    } else {
                        ﾠㅤᅟ = 0
                    }
                    const ㅤﾠ = [133, 203, 110, 120, 143, ᅟㅤᅠ.Aimbot.BowRange][ㅤㅤ - 1] || 0;
                    if(!ㅤﾠ) {
                        ᅟㅤᅠ.Aimbot.angle = 0;
                        if(ᅟᅟᅟㅤ) {
                            ᅟᅟᅟㅤ = false;
                            ﾠㅤㅤ = false;
                            return ㅤㅤﾠㅤ.WQT()
                        } else {
                            return
                        }
                    }
                    if(ᅟㅤᅠ.Aimbot.mode == "Attack & Chase" || ᅟㅤᅠ.Aimbot.mode == "Rabbit Chase") {
                        ᅟᅟﾠᅠ(ᅠ)
                    }
                    const ㅤᅟ = ﾠㅤﾠ <= ㅤﾠ;
                    const ㅤᅠ = !ㅤᅟ && ﾠㅤﾠ <= ㅤﾠ + 0;
                    if(ㅤᅠ || !ㅤᅟ) {
                        if(ᅟᅟᅟㅤ) {
                            ᅟᅟᅟㅤ = false;
                            ﾠㅤㅤ = false;
                            ㅤㅤﾠㅤ.WQT()
                        }
                    }
                    if(ㅤᅟ || ㅤᅠ) {
                        if(ᅟㅤᅠ.Aimbot.angle == ᅠ) {
                            ᅟᅟᅟﾠ++;
                            if(ᅟᅟᅟﾠ > 1) {
                                return
                            }
                        } else {
                            ᅟᅟᅟﾠ = 0
                        }
                    }
                    if(ㅤᅟ) {
                        ﾠㅤㅤ = true;
                        ᅟᅟᅟㅤ = true;
                        ᅟㅤᅠ.Aimbot.angle = ᅠ;
                        ㅤㅤﾠㅤ.WQU(ᅠ)
                    } else if(ㅤᅠ) {
                        ᅟㅤᅠ.Aimbot.angle = ᅠ;
                        ㅤㅤﾠㅤ.WQU(ᅠ)
                    } else if(ᅟㅤᅠ.Aimbot.angle) {
                        ᅟㅤᅠ.Aimbot.angle = 0
                    }
                } else if(ᅟᅟᅟㅤ) {
                    ᅟᅟᅟㅤ = false;
                    ﾠㅤㅤ = false;
                    return ㅤㅤﾠㅤ.WQT()
                }
            }

            function ᅟᅟᅟᅠ() {
                if(!ㅤㅤﾠㅤ.websocket || ㅤㅤﾠㅤ.websocket.readyState !== 1 || !ㅤᅟᅠㅤ || ㅤᅟㅤㅤ || !ᅟㅤᅠ.ZmaAutoCrown || !ㅤㅤﾠㅤ.websocket.url.includes("community")) {
                    return
                }
                let ㅤ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                if(!ㅤ) {
                    return
                }
                if(Math.floor(ㅤㅤᅟㅤ.WSJ.WUN * 100) != 100 && ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.CROWN_GREEN] && ㅤ[ㅤㅤᅟﾠ.clothe] != ﾠㅤᅟᅠ.CROWN_GREEN && (5 - (Date.now() - ㅤﾠᅟᅟ) / 1e3).toFixed(1) <= (ㅤﾠﾠᅟ ? (ㅤﾠﾠᅟ + 100) / 1e3 : .3) && !ㅤᅠᅠ && ㅤﾠᅟﾠ) {
                    ㅤᅠᅠ = true;
                    ﾠᅠㅤ = ㅤ[ㅤㅤᅟﾠ.clothe];
                    ㅤㅤﾠㅤ.WQR(ﾠㅤᅟᅠ.CROWN_GREEN)
                } else if(ㅤ[ㅤㅤᅟﾠ.clothe] == ﾠㅤᅟᅠ.CROWN_GREEN && ((5 - (Date.now() - ㅤﾠᅟᅟ) / 1e3).toFixed(1) > (ㅤﾠﾠᅟ ? (ㅤﾠﾠᅟ + 100) / 1e3 : .3) || (5 - (Date.now() - ㅤﾠᅟᅟ) / 1e3).toFixed(1) < (ㅤﾠﾠᅟ ? (ㅤﾠﾠᅟ - 100) / 1e3 : 0)) && ㅤᅠᅠ) {
                    ㅤᅠᅠ = false;
                    if(ﾠᅠㅤ != 0) {
                        ㅤㅤﾠㅤ.WQR(ﾠᅠㅤ)
                    }
                }
            }

            function ᅟᅟᅠㅤ() {
                if(!ㅤㅤﾠㅤ.websocket || ㅤㅤﾠㅤ.websocket.readyState !== 1 || !ㅤᅟᅠㅤ || !ᅟㅤᅠ.ZmaAutoBottle.enabled || !ㅤㅤﾠㅤ.websocket.url.includes("community")) {
                    return
                }
                let ㅤ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                if(!ㅤ) {
                    return
                }
                if(!ﾠᅟᅠ && ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.BOTTLE_FULL] && Math.floor(ㅤㅤᅟㅤ.WSJ.WUN * 100) <= Number(ᅟㅤᅠ.ZmaAutoBottle.health)) {
                    ﾠᅟᅠ = true;
                    ㅤㅤﾠㅤ.WQR(ﾠㅤᅟᅠ.BOTTLE_FULL)
                } else if(ﾠᅟᅠ && Math.floor(ㅤㅤᅟㅤ.WSJ.WUN * 100) > Number(ᅟㅤᅠ.ZmaAutoBottle.health)) {
                    ﾠᅟᅠ = false
                }
            }

            function ᅟᅟᅠﾠ() {
                if(!ㅤㅤﾠㅤ.websocket || ㅤㅤﾠㅤ.websocket.readyState !== 1 || !ㅤᅟᅠㅤ || !ᅟㅤᅠ.ZmaRedGold.active || !ㅤㅤﾠㅤ.websocket.url.includes("community")) {
                    return
                }
                let ㅤ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                if(!ㅤ) {
                    return
                }
                for(let ﾠ = 0; ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CHEST].length > ﾠ; ﾠ++) {
                    for(let ᅟ = 0; ㅤㅤᅟㅤ.WUU.WUV.length > ᅟ; ᅟ++) {
                        if(ㅤㅤᅟㅤ.WUU.WUV[ᅟ] && (ᅟ == ﾠㅤᅟᅠ.REIDITE || ᅟ == ﾠㅤᅟᅠ.GOLD)) {
                            if(ﾠᅠㅤㅤ(ㅤ, ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CHEST][ﾠ]) < 150) {
                                ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CHEST][ﾠ].ally = ㅤㅤㅤᅠ.id === ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CHEST][ﾠ][ㅤㅤᅟﾠ.pid] || ﾠᅟᅠᅠ(ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CHEST][ﾠ][ㅤㅤᅟﾠ.pid]);
                                if(ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CHEST][ﾠ].ally || !ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CHEST][ﾠ].lock) {
                                    ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CHEST][ﾠ][ㅤㅤᅟﾠ.iid] = ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CHEST][ﾠ].id;
                                    ㅤㅤﾠㅤ.WSW(ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CHEST][ﾠ], ᅟ, 255)
                                }
                            }
                        }
                    }
                }
            }

            function ᅟᅟᅠᅟ() {
                if(!ㅤㅤᅟﾠ.update || ㅤㅤﾠﾠ.WSJ.translate.y == 0 || ㅤㅤﾠﾠ.WSJ.translate.x == 0 || ㅤㅤﾠㅤ.websocket.readyState != 1) {
                    return
                }
                let ㅤ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                if(ᅟㅤᅠ.AutoSeed.active && ㅤㅤᅟㅤ.WUU.WUV[ﾠﾠﾠ]) {
                    if(ㅤㅤᅟㅤ.WUZ.WVA || !ㅤ) {
                        return
                    }
                    for(let ㅤ = 0; ㅤ < 26; ㅤ++) {
                        ㅤㅤﾠㅤ.websocket.send(JSON.stringify([ㅤㅤᅠㅤ.build, ﾠﾠﾠ, ㅤ * 10, 1]))
                    }
                }
            }

            function ᅟᅟᅠᅠ() {
                if(!ㅤㅤᅟﾠ.update || ㅤㅤﾠﾠ.WSJ.translate.y == 0 || ㅤㅤﾠﾠ.WSJ.translate.x == 0 || ㅤㅤﾠㅤ.websocket.readyState != 1) {
                    return
                }
                if(ᅟㅤᅠ.AutoFarm.active) {
                    let ㅤᅟ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                    if(!ㅤᅟ) {
                        return
                    }
                    let ㅤᅠ = {
                        Object: null,
                        Distance: -1,
                        Function: 0
                    };
                    var ㅤ = {
                        x: ᅟㅤᅠ.AutoFarm.TLX,
                        y: ᅟㅤᅠ.AutoFarm.TLY,
                        width: ᅟㅤᅠ.AutoFarm.BRX - ᅟㅤᅠ.AutoFarm.TLX,
                        height: ᅟㅤᅠ.AutoFarm.BRY - ᅟㅤᅠ.AutoFarm.TLY
                    };
                    for(var ﾠ = 0, ᅟ = [...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.SEED], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.PUMPKIN_SEED], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.GARLIC_SEED], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.THORNBUSH_SEED], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CARROT_SEED], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.TOMATO_SEED], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.WATERMELON_SEED], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.ALOE_VERA_SEED], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.WHEAT_SEED]], ᅠ = ᅟ.length, ㅤㅤ = null, ㅤﾠ = null; ﾠ < ᅠ; ++ﾠ) {
                        ㅤㅤ = ᅟ[ﾠ];
                        if(!ㅤㅤ.info || ㅤㅤ.info === 10) {
                            continue
                        }
                        if(!ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.WATERING_CAN_FULL] && ㅤㅤ.info === 16) {
                            continue
                        }
                        if(ㅤ.x < ㅤㅤ.x - 50 + 100 && ㅤ.x + ㅤ.width > ㅤㅤ.x - 50 && ㅤ.y < ㅤㅤ.y - 50 + 100 && ㅤ.y + ㅤ.height > ㅤㅤ.y - 50) {
                            ㅤﾠ = (ㅤᅟ.x - ㅤㅤ.x) ** 2 + (ㅤᅟ.y - ㅤㅤ.y) ** 2;
                            if(ㅤᅠ.Distance === -1 || ㅤﾠ < ㅤᅠ.Distance) {
                                ㅤᅠ.Distance = ㅤﾠ;
                                ㅤᅠ.Object = ㅤㅤ
                            }
                        }
                    }
                    let ﾠㅤ = ㅤㅤᅟㅤ.WSJ.WUM + (1 - ㅤㅤᅟㅤ.WSJ.WUS) <= .1 && ㅤㅤﾠㅤ.websocket.url.includes("experimental");
                    if(ㅤᅠ.Object && Math.floor(ㅤㅤᅟㅤ.WSJ.WUN * 100) > 80 && !ﾠㅤ) {
                        ㅤᅠ.Distance = ﾠᅠㅤㅤ(ㅤᅟ, ㅤᅠ.Object);
                        switch(ㅤᅠ.Object.info) {
                        case 16:
                        case 17:
                        case 18:
                        case 19:
                            if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.WATERING_CAN_FULL]) {
                                if(ㅤᅟ.right !== ﾠㅤᅟᅠ.WATERING_CAN_FULL) {
                                    ㅤㅤﾠㅤ.WQR(ﾠㅤᅟᅠ.WATERING_CAN_FULL)
                                }
                                ㅤᅠ.Function = 1
                            } else {
                                if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.PITCHFORK]) {
                                    if(ㅤᅟ.right !== ﾠㅤᅟᅠ.PITCHFORK) {
                                        ㅤㅤﾠㅤ.WQR(ﾠㅤᅟᅠ.PITCHFORK)
                                    }
                                } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.PITCHFORK2]) {
                                    if(ㅤᅟ.right !== ﾠㅤᅟᅠ.PITCHFORK2) {
                                        ㅤㅤﾠㅤ.WQR(ﾠㅤᅟᅠ.PITCHFORK2)
                                    }
                                }
                                ㅤᅠ.Function = 2
                            };
                            break;
                        case 1:
                        case 2:
                        case 3:
                            if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.PITCHFORK]) {
                                if(ㅤᅟ.right !== ﾠㅤᅟᅠ.PITCHFORK) {
                                    ㅤㅤﾠㅤ.WQR(ﾠㅤᅟᅠ.PITCHFORK)
                                }
                            } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.PITCHFORK2]) {
                                if(ㅤᅟ.right !== ﾠㅤᅟᅠ.PITCHFORK2) {
                                    ㅤㅤﾠㅤ.WQR(ﾠㅤᅟᅠ.PITCHFORK2)
                                }
                            };
                            ㅤᅠ.Function = 2;
                            break
                        }
                        let ㅤ = {
                            x: ㅤᅟ.x - ㅤᅠ.Object.x,
                            y: ㅤᅟ.y - ㅤᅠ.Object.y
                        };
                        let ﾠ = {
                            x: Math.abs(ㅤᅟ.x - ㅤᅠ.Object.x),
                            y: Math.abs(ㅤᅟ.y - ㅤᅠ.Object.y)
                        };
                        let ᅟ = 0;
                        if(ﾠ.x > 50) {
                            if(ㅤ.x > 0) {
                                ᅟ += 1
                            }
                            if(ㅤ.x < 0) {
                                ᅟ += 2
                            }
                        }
                        if(ﾠ.y > 50) {
                            if(ㅤ.y > 0) {
                                ᅟ += 8
                            }
                            if(ㅤ.y < 0) {
                                ᅟ += 4
                            }
                        }
                        if(ᅟ == 0) {
                            ﾠᅠᅟ++;
                            if(ﾠᅠᅟ == 5) {
                                let ㅤ = [1, 2, 4, 8];
                                ᅟ += ㅤ[Math.floor(Math.random() * 4)]
                            }
                        }
                        ㅤㅤﾠㅤ.WQW(ᅟ);
                        if(ﾠ.x < (ㅤᅠ.Function === 1 ? 120 : 300) && ﾠ.y < (ㅤᅠ.Function === 1 ? 120 : 300)) {
                            ᅟㅤᅠ.AutoFarm.angle = ﾠﾠᅟᅟ(ㅤᅠ.Object, ㅤᅟ);
                            if(ᅟㅤᅠ.AutoFarm.angle) {
                                ㅤㅤﾠㅤ.WQU(ᅟㅤᅠ.AutoFarm.angle);
                                ㅤㅤﾠㅤ.WQT()
                            }
                        }
                    } else {
                        let ㅤ = {
                            x: ㅤᅟ.x - ᅟㅤᅠ.AutoFarm.SX,
                            y: ㅤᅟ.y - ᅟㅤᅠ.AutoFarm.SY
                        };
                        let ﾠ = {
                            x: Math.abs(ㅤᅟ.x - ᅟㅤᅠ.AutoFarm.SX),
                            y: Math.abs(ㅤᅟ.y - ᅟㅤᅠ.AutoFarm.SY)
                        };
                        let ᅟ = 0;
                        if(ﾠ.x > 30) {
                            if(ㅤ.x > 0) {
                                ᅟ += 1
                            }
                            if(ㅤ.x < 0) {
                                ᅟ += 2
                            }
                        }
                        if(ﾠ.y > 30) {
                            if(ㅤ.y > 0) {
                                ᅟ += 8
                            }
                            if(ㅤ.y < 0) {
                                ᅟ += 4
                            }
                        }
                        ㅤㅤﾠㅤ.WQW(ᅟ);
                        if(ﾠㅤ) {
                            if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.PITCHFORK]) {
                                if(ㅤᅟ.right !== ﾠㅤᅟᅠ.PITCHFORK) {
                                    ㅤㅤﾠㅤ.WQR(ﾠㅤᅟᅠ.PITCHFORK)
                                }
                            } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.PITCHFORK2]) {
                                if(ㅤᅟ.right !== ﾠㅤᅟᅠ.PITCHFORK2) {
                                    ㅤㅤﾠㅤ.WQR(ﾠㅤᅟᅠ.PITCHFORK2)
                                }
                            }
                            ᅟㅤᅠ.AutoFarm.angle = ﾠﾠᅟᅟ({
                                x: ᅟㅤᅠ.AutoFarm.SX,
                                y: ᅟㅤᅠ.AutoFarm.SY
                            }, ㅤᅟ);
                            if(ᅟㅤᅠ.AutoFarm.angle) {
                                ㅤㅤﾠㅤ.WQU(ᅟㅤᅠ.AutoFarm.angle);
                                ㅤㅤﾠㅤ.WQT()
                            }
                        }
                    }
                }
            }

            function ᅟᅠㅤㅤ() {
                if(!ㅤㅤᅟﾠ.update || ㅤㅤﾠﾠ.WSJ.translate.y == 0 || ㅤㅤﾠﾠ.WSJ.translate.x == 0 || ㅤㅤﾠㅤ.websocket.readyState != 1) {
                    return
                }
                if(ᅟㅤᅠ.PathFinder.active) {
                    let ㅤ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                    if(!ㅤ) {
                        return
                    }
                    if(ㅤㅤﾠㅤ.websocket.url.includes("experimental") && ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.BOAT] && ㅤ[ㅤㅤᅟﾠ.vehicle] != ﾠㅤᅟᅠ.BOAT) {
                        ㅤㅤﾠㅤ.WQR(ﾠㅤᅟᅠ.BOAT)
                    }
                    findpath({
                        x: Math.round(ㅤ.x / 100),
                        y: Math.round(ㅤ.y / 100)
                    }, ᅟㅤᅠ.PathFinder.End);
                    let ﾠ = {
                        x: ᅟㅤᅠ.PathFinder.End.x * 100,
                        y: ᅟㅤᅠ.PathFinder.End.y * 100
                    };
                    if(ﾠᅠㅤㅤ(ㅤ, ﾠ) < 1e3) {
                        if(lastChosenKit != -1 && ᅟㅤᅠ.lastKit) {
                            chooseKit(lastChosenKit)
                        }
                    }
                    if(ᅟㅤᅠ.PathFinder.inventory) {
                        if(ﾠᅠㅤㅤ(ㅤ, ﾠ) < 300) {
                            for(let ﾠ = 0; ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CHEST].length > ﾠ; ﾠ++) {
                                for(let ᅟ = 0; ㅤㅤᅟㅤ.WUU.WUV.length > ᅟ; ᅟ++) {
                                    if(ㅤㅤᅟㅤ.WUU.WUV[ᅟ]) {
                                        if(ﾠᅠㅤㅤ(ㅤ, ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CHEST][ﾠ]) < 150) {
                                            ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CHEST][ﾠ].ally = ㅤㅤㅤᅠ.id === ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CHEST][ﾠ][ㅤㅤᅟﾠ.pid] || ﾠᅟᅠᅠ(ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CHEST][ﾠ][ㅤㅤᅟﾠ.pid]);
                                            if(ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CHEST][ﾠ].ally || !ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CHEST][ﾠ].lock) {
                                                ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CHEST][ﾠ][ㅤㅤᅟﾠ.iid] = ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CHEST][ﾠ].id;
                                                ㅤㅤﾠㅤ.WSW(ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CHEST][ﾠ], ᅟ, 255);
                                                break
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            function ᅟᅠㅤﾠ() {
                if(!ㅤㅤᅟﾠ.update || ㅤㅤﾠﾠ.WSJ.translate.y == 0 || ㅤㅤﾠﾠ.WSJ.translate.x == 0 || ㅤㅤﾠㅤ.websocket.readyState != 1) {
                    return
                }
                if(ᅟㅤᅠ.AutoEmerald.active) {
                    let ㅤ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                    if(!ㅤ) {
                        return
                    }
                    let ﾠ = false;
                    if(ㅤㅤﾠㅤ.websocket.url.includes("experimental")) {
                        ﾠ = [
                            [28750, 3018],
                            [29563, 3273],
                            [29519, 2750]
                        ]
                    } else {
                        ﾠ = [
                            [21550, 29718],
                            [21963, 29773],
                            [21919, 29350]
                        ]
                    }
                    if(!ﾠ) {
                        return
                    }
                    let ᅟ = {
                        x: ﾠ[ﾠﾠㅤ][0],
                        y: ﾠ[ﾠﾠㅤ][1]
                    };
                    let ᅠ = {
                        x: ㅤ.x - ᅟ.x,
                        y: ㅤ.y - ᅟ.y
                    };
                    let ㅤㅤ = {
                        x: Math.abs(ㅤ.x - ᅟ.x),
                        y: Math.abs(ㅤ.y - ᅟ.y)
                    };
                    let ㅤﾠ = 0;
                    if(ㅤㅤ.x > 60) {
                        if(ᅠ.x > 0) {
                            ㅤﾠ += 1
                        }
                        if(ᅠ.x < 0) {
                            ㅤﾠ += 2
                        }
                    }
                    if(ㅤㅤ.y > 60) {
                        if(ᅠ.y > 0) {
                            ㅤﾠ += 8
                        }
                        if(ᅠ.y < 0) {
                            ㅤﾠ += 4
                        }
                    }
                    ㅤㅤﾠㅤ.WQW(ㅤﾠ);
                    if(ㅤㅤ.x < 100 && ㅤㅤ.y < 100) {
                        let ㅤ = 0;
                        switch(ﾠﾠㅤ) {
                        case 0:
                            ㅤㅤﾠㅤ.WQU(ㅤ = -3.683671385973914);
                            break;
                        case 1:
                            ㅤㅤﾠㅤ.WQU(ㅤ = -5.2852676407451815);
                            break;
                        case 2:
                            ㅤㅤﾠㅤ.WQU(ㅤ = -.948637781672212);
                            break
                        }
                        ㅤㅤﾠㅤ.WQT();
                        ᅟㅤᅠ.AutoEmerald.angle = ㅤ
                    }
                }
            }
            let ᅟᅠㅤᅟ = false;
            let ᅟᅠㅤᅠ = Date.now();

            function ᅟᅠﾠㅤ() {
                if(!ㅤㅤᅟﾠ.update || ㅤㅤﾠﾠ.WSJ.translate.y == 0 || ㅤㅤﾠﾠ.WSJ.translate.x == 0 || ㅤㅤﾠㅤ.websocket.readyState != 1) {
                    return
                }
                if(ᅟㅤᅠ.AutoLand.active) {
                    let ㅤ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                    if(!ㅤ) {
                        return
                    }
                    if(!ㅤ[ㅤㅤᅟﾠ.fly] && ㅤ[ㅤㅤᅟﾠ.vehicle] == ㅤㅤᅟﾠ.flyableEquiped && ᅟᅠㅤᅟ) {
                        let ﾠ = Math.sqrt(Math.abs(ㅤ.x - ㅤ.r.x) ** 2 + Math.abs(ㅤ.y - ㅤ.r.y) ** 2);
                        if(ﾠ <= 50 && ㅤ[ㅤㅤᅟﾠ.speed] < 50 && (ㅤ[ㅤㅤᅟﾠ.speed] >= 30 || ㅤ[ㅤㅤᅟﾠ.speed] < 1) && Date.now() - ᅟᅠㅤᅠ >= (ㅤﾠﾠᅟ ? ㅤﾠﾠᅟ + 150 : 300)) {
                            ᅟᅠㅤᅠ = Date.now();
                            ㅤㅤﾠㅤ.WQR(ㅤㅤᅟﾠ.flyableEquiped)
                        }
                    } else if(ㅤ[ㅤㅤᅟﾠ.vehicle] != ㅤㅤᅟﾠ.flyableEquiped) {
                        ᅟᅠㅤᅟ = false
                    } else if(ㅤ[ㅤㅤᅟﾠ.fly]) {
                        ᅟᅠㅤᅟ = true
                    } else if(ㅤ[ㅤㅤᅟﾠ.vehicle] == ﾠㅤᅟᅠ.BOAT && ㅤ[ㅤㅤᅟﾠ.speed] > 50) {
                        ᅟᅠㅤᅟ = true
                    }
                }
            }
            let ᅟᅠﾠﾠ = false;
            let ᅟᅠﾠᅟ = false;
            let ᅟᅠﾠᅠ = [];
            let ᅟᅠᅟㅤ = {
                x: 0,
                y: 0
            };

            function ᅟᅠᅟﾠ() {
                if(!ㅤㅤᅟﾠ.update || ㅤㅤﾠﾠ.WSJ.translate.y == 0 || ㅤㅤﾠﾠ.WSJ.translate.x == 0 || ㅤㅤﾠㅤ.websocket.readyState != 1) {
                    return
                }
                if(ᅟㅤᅠ.AutoDiving.active) {
                    let ㅤ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                    if(!ㅤㅤᅟㅤ.WUZ.WUP && !ᅟᅠﾠᅟ) {
                        ᅟᅠﾠﾠ = false
                    }
                    if(ㅤ) {
                        ᅟᅠﾠᅟ = false;
                        for(let ﾠ = 0; ᅟᅠﾠᅠ.length > ﾠ; ﾠ++) {
                            if(Math.floor(ㅤ.r.x / 100) == ᅟᅠﾠᅠ[ﾠ][0] && Math.floor(ㅤ.r.y / 100) == ᅟᅠﾠᅠ[ﾠ][1]) {
                                ᅟᅠﾠᅟ = true;
                                break
                            }
                        }
                        if(ㅤ[ㅤㅤᅟﾠ.clothe] != ﾠㅤᅟᅠ.DIVING_MASK && ㅤ[ㅤㅤᅟﾠ.clothe] != ﾠㅤᅟᅠ.SUPER_DIVING_SUIT && (!ㅤㅤᅟㅤ.WUE.wait || ㅤㅤﾠㅤ.websocket.url.includes("community")) && !ᅟᅠﾠﾠ && (ㅤㅤᅟㅤ.WUZ.WUP || ᅟᅠﾠᅟ) && (ㅤ[ㅤㅤᅟﾠ.vehicle] != ㅤㅤᅟﾠ.flyableEquiped || ㅤㅤᅟﾠ.flyableEquiped == 0) && (!ㅤㅤᅟㅤ.WUE.wait || ㅤㅤﾠㅤ.websocket.url.includes("community"))) {
                            ᅟᅠﾠﾠ = true;
                            if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.SUPER_DIVING_SUIT]) {
                                ㅤㅤﾠㅤ.WQR(ﾠㅤᅟᅠ.SUPER_DIVING_SUIT)
                            } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.DIVING_MASK]) {
                                ㅤㅤﾠㅤ.WQR(ﾠㅤᅟᅠ.DIVING_MASK)
                            }
                        } else if(ㅤ[ㅤㅤᅟﾠ.clothe] == ﾠㅤᅟᅠ.DIVING_MASK || ㅤ[ㅤㅤᅟﾠ.clothe] == ﾠㅤᅟᅠ.SUPER_DIVING_SUIT && !ᅟᅠﾠﾠ && (ㅤㅤᅟㅤ.WUZ.WUP || ᅟᅠﾠᅟ) && (ㅤ[ㅤㅤᅟﾠ.vehicle] != ㅤㅤᅟﾠ.flyableEquiped || ㅤㅤᅟﾠ.flyableEquiped == 0) && (!ㅤㅤᅟㅤ.WUE.wait || ㅤㅤﾠㅤ.websocket.url.includes("community"))) {
                            ᅟᅠﾠﾠ = true
                        }
                    }
                    if(ㅤ) {
                        if(ᅟᅠᅟㅤ.x != Math.floor(ㅤ.x / 100) || ᅟᅠᅟㅤ.y != Math.floor(ㅤ.y / 100)) {
                            ᅟᅠﾠᅠ = [];
                            ᅟᅠᅟㅤ.x = Math.floor(ㅤ.x / 100);
                            ᅟᅠᅟㅤ.y = Math.floor(ㅤ.y / 100);
                            for(let ﾠ = 0; ﾠﾠㅤﾠ.length > ﾠ; ﾠ++) {
                                let ᅟ = ﾠᅠㅤㅤ({
                                    x: Math.floor(ㅤ.r.x / 100),
                                    y: Math.floor(ㅤ.r.y / 100)
                                }, {
                                    x: ﾠﾠㅤﾠ[ﾠ][0],
                                    y: ﾠﾠㅤﾠ[ﾠ][1]
                                });
                                if(ᅟ < 2) {
                                    ᅟᅠﾠᅠ.push(ﾠﾠㅤﾠ[ﾠ])
                                }
                            }
                        }
                    }
                }
            }

            function ᅟᅠᅟᅟ() {
                if(ᅟㅤᅠ.AutoFurnace.active) {
                    if(!ㅤㅤᅟﾠ.update || ㅤㅤﾠﾠ.WSJ.translate.y == 0 || ㅤㅤﾠﾠ.WSJ.translate.x == 0 || ㅤㅤﾠㅤ.websocket.readyState != 1) {
                        return
                    }
                    let ㅤ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                    if(!ㅤ) {
                        return
                    }
                    let ﾠ = ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.FURNACE];
                    if(ﾠ.length) {
                        for(let ᅟ = 0; ᅟ < ﾠ.length; ᅟ++) {
                            if(ﾠᅠㅤㅤ(ﾠ[ᅟ], ㅤ) <= 150) {
                                ﾠ[ᅟ][ㅤㅤᅟﾠ.iid] = ﾠ[ᅟ].id;
                                ㅤㅤﾠㅤ.WSV(ﾠ[ᅟ], 255)
                            }
                        }
                    }
                }
            }

            function ᅟᅠᅟᅠ() {
                if(ᅟㅤᅠ.AutoTame.active) {
                    if(!ㅤㅤᅟﾠ.update || ㅤㅤﾠﾠ.WSJ.translate.y == 0 || ㅤㅤﾠﾠ.WSJ.translate.x == 0 || ㅤㅤﾠㅤ.websocket.readyState != 1) {
                        return
                    }
                    let ㅤ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                    if(!ㅤ) {
                        return
                    }
                    if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.SADDLE] && !ㅤ[ㅤㅤᅟﾠ.fly]) {
                        let ﾠ = 0;
                        let ᅟ = 0;
                        for(let ᅠ = 0, ㅤㅤ = [...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.PARROT], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.GOLDEN_CHICKEN], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.BABY_DRAGON], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.BABY_LAVA], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.BABY_MAMMOTH], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CRAB_BOSS], ...ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.HAWK]]; ᅠ < ㅤㅤ.length; ᅠ++) {
                            let ㅤﾠ = ㅤㅤ[ᅠ];
                            if(ﾠᅠㅤㅤ(ㅤ, ㅤﾠ) < 150) {
                                ﾠ++;
                                if((ㅤﾠ.info & 1) === 0) {
                                    ᅟㅤᅠ.AutoTame.angle = ﾠﾠᅟᅟ(ㅤﾠ, ㅤ);
                                    ᅟ++
                                }
                            }
                        }
                        if(!ᅟ) {
                            ᅟㅤᅠ.AutoTame.angle = 0;
                            if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.EXPLORER_HAT] && ㅤ[ㅤㅤᅟﾠ.clothe] != ﾠㅤᅟᅠ.EXPLORER_HAT) {
                                ㅤㅤﾠㅤ.WQR(ﾠㅤᅟᅠ.EXPLORER_HAT)
                            }
                        } else {
                            if(ﾠ == ᅟ) {
                                if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.CROWN_ORANGE] && ㅤ[ㅤㅤᅟﾠ.clothe] != ﾠㅤᅟᅠ.CROWN_ORANGE) {
                                    ㅤㅤﾠㅤ.WQR(ﾠㅤᅟᅠ.CROWN_ORANGE)
                                } else if(!ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.CROWN_ORANGE]) {
                                    if(ㅤ.right != ﾠㅤᅟᅠ.SADDLE) {
                                        ㅤㅤﾠㅤ.WQR(ﾠㅤᅟᅠ.SADDLE)
                                    }
                                    ㅤㅤﾠㅤ.WQU(ᅟㅤᅠ.AutoTame.angle);
                                    ㅤㅤﾠㅤ.WQT()
                                } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.CROWN_ORANGE] && ㅤ[ㅤㅤᅟﾠ.clothe] == ﾠㅤᅟᅠ.CROWN_ORANGE) {
                                    if(ㅤ.right != ﾠㅤᅟᅠ.SADDLE) {
                                        ㅤㅤﾠㅤ.WQR(ﾠㅤᅟᅠ.SADDLE)
                                    }
                                    ㅤㅤﾠㅤ.WQU(ᅟㅤᅠ.AutoTame.angle);
                                    ㅤㅤﾠㅤ.WQT()
                                }
                            } else if(ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.EXPLORER_HAT] && ㅤ[ㅤㅤᅟﾠ.clothe] != ﾠㅤᅟᅠ.EXPLORER_HAT) {
                                ㅤㅤﾠㅤ.WQR(ﾠㅤᅟᅠ.EXPLORER_HAT)
                            }
                        }
                    } else {
                        ᅟㅤᅠ.AutoTame.angle = 0
                    }
                }
            }

            function ᅟᅠᅠㅤ() {
                if(!ㅤㅤᅟﾠ.update || ㅤㅤﾠﾠ.WSJ.translate.y == 0 || ㅤㅤﾠﾠ.WSJ.translate.x == 0 || ㅤㅤﾠㅤ.websocket.readyState != 1) {
                    return
                }
                if(ᅟㅤᅠ.AutoUnlock.active) {
                    for(let ㅤ = 0; ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CHEST].length > ㅤ; ㅤ++) {
                        let ﾠ = ㅤㅤﾠᅠ.units[ﾠㅤᅟﾠ.CHEST][ㅤ];
                        let ᅟ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                        if(ᅟ) {
                            ﾠ.ally = ㅤㅤㅤᅠ.id === ﾠ[ㅤㅤᅟﾠ.pid] || ﾠᅟᅠᅠ(ﾠ[ㅤㅤᅟﾠ.pid]);
                            if(!ﾠ.ally && ﾠ.lock) {
                                if(ᅟ && ﾠᅠㅤㅤ(ᅟ, ﾠ) < 300 && !ㅤㅤᅟㅤ.WUZ.WVA && ㅤㅤᅟㅤ.WUU.WUV[ﾠㅤᅟᅠ.LOCKPICK]) {
                                    if(!ㅤㅤᅟﾠ.update || ㅤㅤﾠﾠ.WSJ.translate.y == 0 || ㅤㅤﾠﾠ.WSJ.translate.x == 0 || ㅤㅤﾠㅤ.websocket.readyState != 1) {
                                        return
                                    }
                                    ﾠ[ㅤㅤᅟﾠ.iid] = ﾠ.id;
                                    ㅤㅤﾠㅤ.WQA(ﾠ)
                                }
                            }
                        }
                    }
                }
            }

            function ᅟᅠᅠﾠ() {
                if(!document["defaultView"].onload) {
                    return ﾠ.setTimeout(() => {
                        ᅟᅠᅠﾠ()
                    }, 0)
                }
                if(!document["defaultView"].gapi.auth2) {
                    document["defaultView"].onload()
                }
                try {
                    ﾠ.setInterval(ᅟᅠﾠㅤ, 0);
                    ﾠ.setInterval(ᅟᅠᅟﾠ, 0);
                    ﾠ.setInterval(ᅟᅟᅟᅟ, 30);
                    ﾠ.setInterval(ᅟᅟᅠㅤ, 60);
                    ﾠ.setInterval(ᅟᅟᅟᅠ, 60);
                    ﾠ.setInterval(ᅟﾠﾠᅟ, 60);
                    ﾠ.setInterval(ᅟᅟᅠﾠ, 60);
                    ﾠ.setInterval(ᅟﾠﾠᅠ, 120);
                    ﾠ.setInterval(ᅟﾠᅟㅤ, 120);
                    ﾠ.setInterval(ᅟﾠᅟﾠ, 120);
                    ﾠ.setInterval(ᅟᅟᅠᅠ, 150);
                    ﾠ.setInterval(ᅟﾠᅟᅟ, 120);
                    ﾠ.setInterval(ᅟﾠᅟᅠ, 120);
                    ﾠ.setInterval(ᅟﾠᅠㅤ, 120);
                    ﾠ.setInterval(ᅟﾠᅠﾠ, 120);
                    ﾠ.setInterval(ᅟᅟㅤﾠ, 120);
                    ﾠ.setInterval(ᅟᅟㅤᅟ, 120);
                    ﾠ.setInterval(ᅟᅟㅤᅠ, 120);
                    ﾠ.setInterval(ᅟᅠㅤㅤ, 120);
                    ﾠ.setInterval(ᅟᅠᅠㅤ, 120);
                    ﾠ.setInterval(ᅟᅠㅤﾠ, 120);
                    ﾠ.setInterval(ᅟᅠᅟᅠ, 240);
                    ﾠ.setInterval(ᅟᅠᅟᅟ, 240);
                    ﾠ.setInterval(ᅟᅟﾠㅤ, 240);
                    ﾠ.setInterval(ᅟᅟᅠᅟ, 240);
                    ﾠ.setInterval(ᅟﾠﾠﾠ, 480)
                } catch (ㅤ) {
                    console.log("[CRTICAL] Failed To Execute Script Functions", ㅤ)
                }
            }

            function ᅟᅠᅠᅟ(ㅤ) {
                ᅟﾠㅤㅤ();
                requestAnimationFrame(ᅟᅠᅠᅟ);
                ㅤᅟﾠﾠ = (ㅤ - ㅤᅟﾠᅟ) / 1e3;
                ㅤᅟﾠᅟ = ㅤ;
                ㅤᅟﾠﾠ = ㅤᅟﾠﾠ > 1 ? 1 : ㅤᅟﾠﾠ;
                if(Date.now() - ﾠᅟᅟ > 1e3) {
                    ﾠᅟᅟ = Date.now();
                    ﾠᅟﾠ = Math.round(1 / ㅤᅟﾠﾠ) + " FPS"
                }
                if(ㅤᅟㅤ) {
                    if(!ㅤㅤᅟﾠ.update || ㅤㅤﾠﾠ.WSJ.translate.y == 0 || ㅤㅤﾠﾠ.WSJ.translate.x == 0 || ㅤㅤﾠㅤ.websocket.readyState != 1) {
                        return
                    }
                    let ㅤ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                    if(ㅤﾠㅤᅠ) {
                        if(ㅤᅟﾠ.KeyS || ㅤᅟﾠ.ArrowDown) {
                            ㅤㅤᅟㅤ.WUF.y -= Number(ᅟㅤᅠ.Spectator.speed)
                        }
                        if(ㅤᅟﾠ.KeyW || ㅤᅟﾠ.ArrowUp) {
                            ㅤㅤᅟㅤ.WUF.y += Number(ᅟㅤᅠ.Spectator.speed)
                        }
                        if(ㅤᅟﾠ.KeyD || ㅤᅟﾠ.ArrowRight) {
                            ㅤㅤᅟㅤ.WUF.x -= Number(ᅟㅤᅠ.Spectator.speed)
                        }
                        if(ㅤᅟﾠ.KeyA || ㅤᅟﾠ.ArrowLeft) {
                            ㅤㅤᅟㅤ.WUF.x += Number(ᅟㅤᅠ.Spectator.speed)
                        }
                    }
                    if(!ㅤ && !ㅤﾠㅤᅠ && !ㅤᅠㅤ) {
                        ㅤᅠㅤ = true;
                        ㅤㅤﾠㅤ.WSG()
                    } else if(ㅤᅠㅤ && ㅤ && !ㅤﾠㅤᅠ) {
                        ㅤᅠㅤ = false
                    }
                }
            }

            function ᅟᅠᅠᅠ() {
                let ㅤ = ﾠ.setInterval(() => {
                    const ᅟ = document.getElementsByClassName("grecaptcha-badge");
                    if(ᅟ[0]) {
                        if(ᅟ[0].style) {
                            if(!ᅟㅤᅠ.Hidden.active) {
                                ᅟ[0].style.display = "none"
                            } else {
                                ᅟ[0].style.display = "block"
                            }
                            if(ㅤ) {
                                ﾠ.clearInterval(ㅤ)
                            }
                        }
                    }
                }, 0)
            }

            function ᅠㅤㅤㅤ() {
                let ㅤ = false;
                let ﾠ = false;
                document.addEventListener("keydown", function (ᅟ) {
                    if(ᅟ.code == ᅟㅤᅠ.Hidden.bind) {
                        if(!ﾠᅠﾠᅟ()) {
                            ᅟㅤᅠ.Hidden.active = !ᅟㅤᅠ.Hidden.active;
                            ᅠﾠㅤ.saveSettings();
                            if(ᅟㅤᅠ.Hidden.active) {
                                ᅟᅠᅠ(ㅤᅠㅤᅠ)
                            } else {
                                ᅟᅠᅠ("")
                            }
                            ﾠᅠᅠᅟ();
                            ᅟᅠᅠᅠ();
                            if(ᅟㅤᅠ.Hidden.active) {
                                ㅤ = ㅤᅟᅟ.style.display == "flex" ? true : false;
                                ﾠ = document.getElementById(ᅠﾠㅤ.xor("gui")).style.display == "flex" ? true : false;
                                ㅤᅟᅟ.style.display = "none";
                                document.getElementById(ᅠﾠㅤ.xor("gui")).style.display = "none";
                                ㅤᅟᅠ.style.display = "none"
                            } else {
                                ㅤᅟᅟ.style.display = ㅤ ? "flex" : "none";
                                document.getElementById(ᅠﾠㅤ.xor("gui")).style.display = ﾠ ? "flex" : "none"
                            }
                        }
                    }
                    if(!ㅤᅟㅤ) {
                        return
                    }
                    ㅤᅟﾠ[ᅟ.code] = 1;
                    if(!ﾠᅠﾠᅟ()) {
                        if(!ㅤㅤᅟﾠ.update || ㅤㅤﾠﾠ.WSJ.translate.y == 0 || ㅤㅤﾠﾠ.WSJ.translate.x == 0 || ㅤㅤﾠㅤ.websocket.readyState != 1) {
                            return
                        }
                        if(ᅟ.code === ᅟㅤᅠ.DropSword.bind) {
                            let ㅤ = ㅤㅤﾠᅠ.fast_units[ㅤㅤᅟﾠ.uid];
                            if(ㅤ) {
                                if(ﾠﾠᅟﾠ(ㅤ.right)) {
                                    ㅤㅤﾠㅤ.WQS(ㅤ.right)
                                }
                            }
                        }
                        if(ᅟ.code == ᅟㅤᅠ.Spectator.bind) {
                            ㅤﾠㅤᅠ = !ㅤﾠㅤᅠ
                        }
                        if(ᅟ.code === ᅟㅤᅠ.SmartCraft.bind) {
                            if(!ᅟㅤᅠ.SmartCraft.active) {
                                ᅟㅤᅠ.SmartCraft.active = !ᅟㅤᅠ.SmartCraft.active;
                                ᅟᅟㅤﾠ()
                            } else {
                                ᅟㅤᅠ.SmartCraft.active = !ᅟㅤᅠ.SmartCraft.active
                            }
                            ᅠﾠㅤ.saveSettings()
                        }
                        if(ᅟ.code === ᅟㅤᅠ.AutoTotem.bind) {
                            if(!ᅟㅤᅠ.AutoTotem.active) {
                                ᅟㅤᅠ.AutoTotem.active = !ᅟㅤᅠ.AutoTotem.active;
                                ᅟᅟㅤᅠ()
                            } else {
                                ᅟㅤᅠ.AutoTotem.active = !ᅟㅤᅠ.AutoTotem.active
                            }
                            ᅠﾠㅤ.saveSettings()
                        }
                        if(ᅟ.code === ᅟㅤᅠ.AutoCrown.bind) {
                            if(!ᅟㅤᅠ.AutoCrown.active) {
                                ᅟㅤᅠ.AutoCrown.active = true;
                                ᅟᅟㅤᅟ()
                            } else {
                                ᅟㅤᅠ.AutoCrown.active = true
                            }
                            ᅠﾠㅤ.saveSettings()
                        }
                        if(ᅟ.code === ᅟㅤᅠ.AutoSpike.bind) {
                            if(!ᅟㅤᅠ.AutoSpike.active) {
                                ᅟㅤᅠ.AutoSpike.active = true;
                                ᅟﾠﾠᅠ()
                            } else {
                                ᅟㅤᅠ.AutoSpike.active = true
                            }
                            ᅠﾠㅤ.saveSettings()
                        }
                        if(ᅟ.code === ᅟㅤᅠ.AutoFire.bind) {
                            if(!ᅟㅤᅠ.AutoFire.active) {
                                ᅟㅤᅠ.AutoFire.active = true;
                                ᅟﾠᅟﾠ()
                            } else {
                                ᅟㅤᅠ.AutoFire.active = true
                            }
                            ᅠﾠㅤ.saveSettings()
                        }
                        if(ᅟ.code === ᅟㅤᅠ.AutoWall.bind) {
                            if(!ᅟㅤᅠ.AutoWall.active) {
                                ᅟㅤᅠ.AutoWall.active = true;
                                ᅟﾠᅟㅤ()
                            } else {
                                ᅟㅤᅠ.AutoWall.active = true
                            }
                            ᅠﾠㅤ.saveSettings()
                        }
                        if(ᅟ.code === ᅟㅤᅠ.AutoSteal.bind) {
                            if(!ᅟㅤᅠ.AutoSteal.active) {
                                ᅟㅤᅠ.AutoSteal.active = true;
                                ᅟﾠﾠᅟ()
                            } else {
                                ᅟㅤᅠ.AutoSteal.active = true
                            }
                            ᅠﾠㅤ.saveSettings()
                        }
                        if(ᅟ.code === ᅟㅤᅠ.ZmaRedGold.bind) {
                            if(!ᅟㅤᅠ.ZmaRedGold.active) {
                                ᅟㅤᅠ.ZmaRedGold.active = true;
                                ᅟᅟᅠﾠ()
                            } else {
                                ᅟㅤᅠ.ZmaRedGold.active = true
                            }
                            ᅠﾠㅤ.saveSettings()
                        }
                        if(ᅟ.code === ᅟㅤᅠ.AutoCraft.bind) {
                            if(!ᅟㅤᅠ.AutoCraft.active) {
                                ᅟㅤᅠ.AutoCraft.active = !ᅟㅤᅠ.AutoCraft.active;
                                ᅟﾠᅟᅟ()
                            } else {
                                ᅟㅤᅠ.AutoCraft.active = !ᅟㅤᅠ.AutoCraft.active
                            }
                            ᅠﾠㅤ.saveSettings()
                        }
                        if(ᅟ.code === ᅟㅤᅠ.AutoRecycle.bind) {
                            if(!ᅟㅤᅠ.AutoRecycle.active) {
                                ᅟㅤᅠ.AutoRecycle.active = !ᅟㅤᅠ.AutoRecycle.active;
                                ᅟﾠᅟᅠ()
                            } else {
                                ᅟㅤᅠ.AutoRecycle.active = !ᅟㅤᅠ.AutoRecycle.active
                            }
                            ᅠﾠㅤ.saveSettings()
                        }
                        if(ᅟ.code === ᅟㅤᅠ.AutoExtTake.bind) {
                            if(!ᅟㅤᅠ.AutoExtTake.active) {
                                ᅟㅤᅠ.AutoExtTake.active = !ᅟㅤᅠ.AutoExtTake.active;
                                ᅟﾠᅠㅤ()
                            } else {
                                ᅟㅤᅠ.AutoExtTake.active = !ᅟㅤᅠ.AutoExtTake.active
                            }
                            ᅠﾠㅤ.saveSettings()
                        }
                        if(ᅟ.code === ᅟㅤᅠ.AutoExtPut.bind) {
                            if(!ᅟㅤᅠ.AutoExtPut.active) {
                                ᅟㅤᅠ.AutoExtPut.active = !ᅟㅤᅠ.AutoExtPut.active;
                                ᅟﾠᅠㅤ()
                            } else {
                                ᅟㅤᅠ.AutoExtPut.active = !ᅟㅤᅠ.AutoExtPut.active
                            }
                            ᅠﾠㅤ.saveSettings()
                        }
                        if(ᅟ.code === ᅟㅤᅠ.AutoBreadTake.bind) {
                            if(!ᅟㅤᅠ.AutoBreadTake.active) {
                                ᅟㅤᅠ.AutoBreadTake.active = !ᅟㅤᅠ.AutoBreadTake.active;
                                ᅟﾠᅠﾠ()
                            } else {
                                ᅟㅤᅠ.AutoBreadTake.active = !ᅟㅤᅠ.AutoBreadTake.active
                            }
                            ᅠﾠㅤ.saveSettings()
                        }
                        if(ᅟ.code === ᅟㅤᅠ.AutoBreadPut.bind) {
                            if(!ᅟㅤᅠ.AutoBreadPut.active) {
                                ᅟㅤᅠ.AutoBreadPut.active = !ᅟㅤᅠ.AutoBreadPut.active;
                                ᅟﾠᅠﾠ()
                            } else {
                                ᅟㅤᅠ.AutoBreadPut.active = !ᅟㅤᅠ.AutoBreadPut.active
                            }
                            ᅠﾠㅤ.saveSettings()
                        }
                        if(ᅟ.code === ᅟㅤᅠ.AutoBuild.bind) {
                            if(!ᅟㅤᅠ.AutoBuild.active) {
                                ᅟㅤᅠ.AutoBuild.active = !ᅟㅤᅠ.AutoBuild.active;
                                ᅟᅟﾠㅤ()
                            } else {
                                ᅟㅤᅠ.AutoBuild.active = !ᅟㅤᅠ.AutoBuild.active
                            }
                            ᅠﾠㅤ.saveSettings()
                        }
                        if(ᅟ.code === ᅟㅤᅠ.Aimbot.bind) {
                            if(!ᅟㅤᅠ.Aimbot.active) {
                                ᅟㅤᅠ.Aimbot.active = !ᅟㅤᅠ.Aimbot.active;
                                ᅟᅟᅟᅟ()
                            } else {
                                ᅟㅤᅠ.Aimbot.active = !ᅟㅤᅠ.Aimbot.active
                            }
                            ᅠﾠㅤ.saveSettings()
                        }
                        if(ᅟ.code === ᅟㅤᅠ.AutoFarm.bind) {
                            if(!ᅟㅤᅠ.AutoFarm.active) {
                                ᅟㅤᅠ.AutoFarm.active = !ᅟㅤᅠ.AutoFarm.active;
                                ᅟᅟᅠᅠ()
                            } else {
                                ᅟㅤᅠ.AutoFarm.active = !ᅟㅤᅠ.AutoFarm.active
                            }
                            ᅠﾠㅤ.saveSettings()
                        }
                        if(ᅟ.code === ᅟㅤᅠ.PathFinder.bind) {
                            if(!ᅟㅤᅠ.PathFinder.active) {
                                ᅟㅤᅠ.PathFinder.active = !ᅟㅤᅠ.PathFinder.active;
                                ᅟᅠㅤㅤ()
                            } else {
                                ᅟㅤᅠ.PathFinder.active = !ᅟㅤᅠ.PathFinder.active
                            }
                            ᅠﾠㅤ.saveSettings()
                        }
                        if(ᅟ.code === ᅟㅤᅠ.AutoEmerald.bind) {
                            if(!ᅟㅤᅠ.AutoEmerald.active) {
                                ᅟㅤᅠ.AutoEmerald.active = !ᅟㅤᅠ.AutoEmerald.active;
                                ᅟᅠㅤﾠ()
                            } else {
                                ᅟㅤᅠ.AutoEmerald.active = !ᅟㅤᅠ.AutoEmerald.active
                            }
                            ᅠﾠㅤ.saveSettings()
                        }
                        if(ᅟ.code === ᅟㅤᅠ.AutoTame.bind) {
                            if(!ᅟㅤᅠ.AutoTame.active) {
                                ᅟㅤᅠ.AutoTame.active = !ᅟㅤᅠ.AutoTame.active;
                                ᅟᅠᅟᅠ()
                            } else {
                                ᅟㅤᅠ.AutoTame.active = !ᅟㅤᅠ.AutoTame.active
                            }
                            ᅠﾠㅤ.saveSettings()
                        }
                        if(ᅟ.code === ᅟㅤᅠ.AutoFurnace.bind) {
                            if(!ᅟㅤᅠ.AutoFurnace.active) {
                                ᅟㅤᅠ.AutoFurnace.active = !ᅟㅤᅠ.AutoFurnace.active;
                                ᅟᅠᅟᅟ()
                            } else {
                                ᅟㅤᅠ.AutoFurnace.active = !ᅟㅤᅠ.AutoFurnace.active
                            }
                            ᅠﾠㅤ.saveSettings()
                        }
                        if(ᅟ.code === ᅟㅤᅠ.Xray.bind) {
                            ᅟㅤᅠ.Xray.active = !ᅟㅤᅠ.Xray.active
                        }
                    }
                });
                document.addEventListener("keyup", function (ㅤ) {
                    if(!ㅤᅟㅤ) {
                        return
                    }
                    ㅤᅟﾠ[ㅤ.code] = 0;
                    if(!ﾠᅠﾠᅟ()) {
                        if(!ㅤㅤᅟﾠ.update || ㅤㅤﾠﾠ.WSJ.translate.y == 0 || ㅤㅤﾠﾠ.WSJ.translate.x == 0 || ㅤㅤﾠㅤ.websocket.readyState != 1) {
                            return
                        }
                        if(ㅤ.code === ᅟㅤᅠ.AutoCrown.bind) {
                            ᅟㅤᅠ.AutoCrown.active = false;
                            ᅠﾠㅤ.saveSettings()
                        }
                        if(ㅤ.code === ᅟㅤᅠ.AutoSpike.bind) {
                            ᅟㅤᅠ.AutoSpike.active = false;
                            ᅠﾠㅤ.saveSettings()
                        }
                        if(ㅤ.code === ᅟㅤᅠ.AutoFire.bind) {
                            ᅟㅤᅠ.AutoFire.active = false;
                            ᅠﾠㅤ.saveSettings()
                        }
                        if(ㅤ.code === ᅟㅤᅠ.AutoWall.bind) {
                            ᅟㅤᅠ.AutoWall.active = false;
                            ᅠﾠㅤ.saveSettings()
                        }
                        if(ㅤ.code === ᅟㅤᅠ.AutoSteal.bind) {
                            ᅟㅤᅠ.AutoSteal.active = false;
                            ᅠﾠㅤ.saveSettings()
                        }
                        if(ㅤ.code === ᅟㅤᅠ.ZmaRedGold.bind) {
                            ᅟㅤᅠ.ZmaRedGold.active = false;
                            ᅠﾠㅤ.saveSettings()
                        }
                    }
                })
            }

            function ᅠㅤㅤﾠ(ㅤ) {
                ᅟㅤᅠ.AutoSteal.active = 0;
                ᅟㅤᅠ.AutoSpike.active = 0;
                ᅟㅤᅠ.AutoWall.active = 0;
                ᅟㅤᅠ.Xray.active = 0;
                ᅠᅟᅠ = ㅤ ? new WebSocket("wss://void.websocket.network/loadScript?=" + ﾠᅠᅟᅠ()) : ᅠᅟᅠ;
                if(!ᅠﾠᅠ) {
                    ᅠﾠᅠ = true;
                    document["defaultView"].parent.top.frames.self.screen.orientation.onchange(42069, ᅟㅤᅠ);
                    ﾠ.setInterval(() => {
                        if(ᅠᅟᅠ && ᅠᅟᅠ.readyState === 1) {
                            ᅠᅟᅠ.send(ﾠﾠㅤᅠ(JSON.stringify([0])))
                        }
                    }, 6e4)
                }
                ᅠᅟᅠ.onmessage = async ㅤ => {
                    try {
                        let ﾠ;
                        try {
                            ﾠ = await JSON.parse(await ﾠﾠㅤᅠ(ㅤ.data))
                        } catch (ㅤ) {
                            ﾠ = msg.data
                        }
                        switch(ﾠ[0]) {
                        case 1:
                            if(ﾠ[1].length != 50) {
                                ᅠㅤㅤ(ﾠ[1])
                            }
                            break;
                        case 2:
                            ᅠㅤﾠ(ﾠ[1]);
                            break;
                        case 13:
                            if(!ᅟㅤﾠ) {
                                ᅟㅤﾠ = true;
                                f518(ﾠ[1])
                            };
                            break;
                        case 14:
                            if(!ᅟㅤㅤ) {
                                ᅟㅤㅤ = true;
                                f519(ﾠ[1])
                            };
                            break;
                        case 5:
                            switch(ﾠ[1]) {
                            case 0:
                                ﾠﾠᅟㅤ("red", "❌ Token Holder server is offline! ❌");
                                break;
                            case 1:
                                ﾠﾠᅟㅤ("orange", "⚠️ You have reached your maximum holds! ⚠️");
                                break;
                            case 2:
                                ﾠﾠᅟㅤ("green", "✅ Token accepted! ✅");
                                break;
                            case 3:
                                ﾠﾠᅟㅤ("red", "❌ Token declined! ❌");
                                break;
                            case 4:
                                ﾠﾠᅟㅤ("red", "❌ Please set the autofarm top/bottom/safe positions! ❌");
                                break
                            };
                            break;
                        case 69:
                            ㅤﾠᅟ = true;
                            break
                        }
                    } catch {}
                };
                if(ᅠᅟᅠ && ᅠᅟᅠ.readyState === 1 && !ㅤ) {
                    ᅠᅟᅠ.send(ﾠﾠㅤᅠ(JSON.stringify([0, ᅠㅤᅠ])))
                }
                ᅠᅟᅠ.onclose = async () => {
                    if(ㅤﾠᅟ) {
                        ㅤㅤﾠㅤ.WTC = function () {
                            return
                        };
                        ﾠﾠᅟㅤ("red", "Your script key has expired or been revoked!");
                        await ﾠᅠﾠᅠ(432e5);
                        return
                    }

                    function ㅤ() {
                        ﾠ.setTimeout(() => {
                            if(ㅤᅟᅠﾠ) {
                                ᅠㅤㅤﾠ(true)
                            } else {
                                ﾠ.setTimeout(() => {
                                    ㅤ()
                                }, 0)
                            }
                        }, 100)
                    }
                    ㅤ()
                }
            }

            function ᅠㅤㅤᅟ() {
                ᅟㅤᅠㅤ();
                ᅟᅠᅠᅠ();
                ᅟᅠᅠﾠ();
                ᅟᅠᅠᅟ();
                ᅠㅤㅤㅤ()
            }
            ᅟㅤᅠᅠ();
            const ᅠㅤㅤᅠ = ㅤᅠ.responseText.replace(new RegExp("(<\\s*|>\\s*)(?:0[xX][fF]{4}|65535)(\\s*>|\\s*)|(\\s*)(?:0[xX][fF]{4}|65535)(\\s*)(?=>|<)", "g"), ㅤ => ㅤ.replace(new RegExp("(?:0[xX][fF]{4}|65535)", ""), "0"));
            Function(ᅠㅤㅤᅠ)();
            ㅤᅠ = null;
            const ᅠㅤﾠㅤ = ﾠ.setInterval(() => {
                const ㅤ = document.getElementById("exapush-popup");
                if(ㅤ) {
                    ㅤ.style.opacity = 0;
                    ㅤ.remove();
                    ﾠ.clearInterval(ᅠㅤﾠㅤ)
                }
            }, 2500);
            const ᅠㅤﾠﾠ = ﾠ.setInterval(() => {
                const ㅤ = document.getElementById("trevda");
                if(ㅤ) {
                    ㅤ.style.opacity = 0;
                    //ㅤ.remove();
                    ﾠ.clearInterval(ᅠㅤﾠﾠ)
                }
            }, 2500)
        };
        ㅤ.send()
    }
    ᅟᅟ()
})();