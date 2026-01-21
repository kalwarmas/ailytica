!function(modules) {
    var installedModules = {};

    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
        }
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = !0;
        return module.exports;
    }

    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;

    // Define getter functions for harmony exports
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) {
            Object.defineProperty(exports, name, { enumerable: !0, get: getter });
        }
    };

    // Define __esModule on exports
    __webpack_require__.r = function(exports) {
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        }
        Object.defineProperty(exports, '__esModule', { value: !0 });
    };

    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ?
            function() { return module.default; } :
            function() { return module; };
        __webpack_require__.d(getter, 'a', getter);
        return getter;
    };

    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };

    __webpack_require__.p = "//static.hsappstatic.net/forms-embed/static-1.4110/";
    
    // Entry Point load ho raha hai
    return __webpack_require__(__webpack_require__.s = "bxrb");
}({
    /* --- Modules Start --- */

    "+1EL": function(module, exports, __webpack_require__) {
        "use strict";
        __webpack_require__.d(exports, "a", function() { return RENDER_ERROR_EVENT; });
        var r = __webpack_require__("G3IP");
        const RENDER_ERROR_EVENT = "RENDER_ERROR_EVENT";
        const errorAction = (e, t) => ({ type: r.A, payload: { parentEventKey: e, eventKey: t } });
        exports.b = e => errorAction(RENDER_ERROR_EVENT, e);
    },

    "+xNg": function(module, exports, __webpack_require__) {
        "use strict";
        var r = __webpack_require__("ijHp");
        // Date validation logic
        var getDaysInMonth = function(month, year) {
            switch (month) {
                case 1: return (year % 4 == 0 && year % 100 || year % 400 == 0) ? 29 : 28;
                case 8: case 3: case 5: case 10: return 30;
                default: return 31;
            }
        };
        const dateRegex = /^[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
        exports.a = e => {
            // Check if date is valid
            return Object(r.a)(e) || dateRegex.test(e) ? null : ["INVALID_DATE"];
        };
    },

    "0WKS": function(module, exports, __webpack_require__) {
        "use strict";
        // Number validation logic
        var r = __webpack_require__("ijHp"), a = __webpack_require__("6Nfw");
        const numRegex = /^-?[0-9]*[.]?[0-9]{1,2}$/;
        exports.a = e => {
            return Object(r.f)(e) || numRegex.test(e) ? null : [a.INVALID_NUMBER];
        };
    },

    "0oVg": function(module, exports, __webpack_require__) {
        "use strict";
        // Email Validation aur Resubscribe logic
        var r = __webpack_require__("G3IP");
        const getDomain = e => e.split("@")[1].toLowerCase();
        
        // Blocklist checking
        var validateEmail = (data = {}, domainList, isResubscribed) => {
            const errors = [], infos = [];
            const domain = getDomain(data.email);
            // ... (baki validation logic)
            return { errors, infos };
        };
        // API calls for Hubspot Forms
        const postResubscribe = ({ url, portalId, formId, email }) => {
            return axios.post(url, email.trim(), { params: { portalId, formId } });
        };
    }

    // ... (Mazeed modules isi tarah niche chalti hain)
});