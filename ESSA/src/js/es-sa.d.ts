export interface saObj {
    saNodes: HTMLElement[];
    threshold: number;
    setThreshold: (threshold: string | number) => number;
    intersection: () => void;
    init: (threshold?: 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1) => void;
}
export declare const ESSA: saObj;
