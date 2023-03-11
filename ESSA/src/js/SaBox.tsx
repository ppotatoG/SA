import React, { useRef, useEffect } from 'react';
import { ESSA } from './es-sa';

interface SaBoxProps {
  type:
    | 'from-left'
    | 'from-right'
    | 'from-top'
    | 'from-bottom'
    | 'flip-left'
    | 'flip-right'
    | 'flip-top'
    | 'flip-bottom'
    | 'scale'
    | 'fade';
  duration?: number;
  delay?: number;
  timing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear' | 'step-start' | 'step-end';
  once?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const SaBox: React.FC<SaBoxProps> = ({
  type,
  duration,
  delay,
  timing,
  once,
  className,
  children,
}: SaBoxProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saNode = ref.current;
    if (!saNode) return;

    const saOnce = once ? 'false' : 'true';
    saNode.setAttribute('data-sa', `${type}`);
    saNode.setAttribute('data-sa-duration', `${duration}`);
    saNode.setAttribute('data-sa-delay', `${delay}`);
    saNode.setAttribute('data-sa-time', `${timing}`);
    saNode.setAttribute('data-sa-once', saOnce);

    ESSA.saNodes?.push(saNode);
    ESSA.intersection();

    return () => {
      ESSA.saNodes = ESSA.saNodes?.filter((node: HTMLElement) => node !== saNode);
    };
  }, [type, duration, delay, timing, once]);

  return (
    <div className={`saBox ${className}`} ref={ref}>
      {children}
    </div>
  );
};

export default SaBox;
