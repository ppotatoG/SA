import React, { useRef, useEffect } from 'react';
import { ESSA } from './es-sa';
const SaBox = ({ type, duration, delay, timing, once, className, children, }) => {
    const ref = useRef(null);
    useEffect(() => {
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
        (_a = ESSA.saNodes) === null || _a === void 0 ? void 0 : _a.push(saNode);
        ESSA.intersection();
        return () => {
            var _a;
            ESSA.saNodes = (_a = ESSA.saNodes) === null || _a === void 0 ? void 0 : _a.filter((node) => node !== saNode);
        };
    }, [type, duration, delay, timing, once]);
    return (React.createElement("div", { className: `saBox ${className}`, ref: ref }, children));
};
export default SaBox;
