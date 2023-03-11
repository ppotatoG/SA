import React from 'react';
interface SaBoxProps {
    type: 'from-left' | 'from-right' | 'from-top' | 'from-bottom' | 'flip-left' | 'flip-right' | 'flip-top' | 'flip-bottom' | 'scale' | 'fade';
    duration?: number;
    delay?: number;
    timing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear' | 'step-start' | 'step-end';
    once?: boolean;
    className?: string;
    children?: React.ReactNode;
}
declare const SaBox: React.FC<SaBoxProps>;
export default SaBox;
