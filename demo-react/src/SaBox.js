"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const es_sa_1 = require("./es-sa");
const SaBox = ({ type, duration, delay, timing, once, className, children, }) => {
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        var _a;
        const saNode = ref.current;
        if (!saNode)
            return;
        const saOnce = once ? 'false' : 'true';
        saNode.setAttribute('data-sa', `${type}`);
        saNode.setAttribute('data-sa-duration', `${duration}`);
        saNode.setAttribute('data-sa-delay', `${delay}`);
        saNode.setAttribute('data-sa-time', `${timing}`);
        saNode.setAttribute('data-sa-once', saOnce);
        (_a = es_sa_1.ESSA.saNodes) === null || _a === void 0 ? void 0 : _a.push(saNode);
        es_sa_1.ESSA.intersection();
        return () => {
            var _a;
            es_sa_1.ESSA.saNodes = (_a = es_sa_1.ESSA.saNodes) === null || _a === void 0 ? void 0 : _a.filter((node) => node !== saNode);
        };
    }, [type, duration, delay, timing, once]);
    return (react_1.default.createElement("div", { className: `saBox ${className}`, ref: ref }, children));
};
exports.default = SaBox;
