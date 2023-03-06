interface saObj {
  saNodes: NodeListOf<Element> | null;
  threshold: number;
  setThreshold: (threshold: any) => number;
  intersection: () => void;
  init: (threshold?: number) => void;
}

const sa: saObj = {
  saNodes: null,
  threshold: 0.1,
  setThreshold: function (threshold: any): number {
    if (typeof threshold === 'string') {
      threshold = threshold.trim();
      if (threshold === '') {
        console.warn('threshold value is empty, using default value 0.1');
        return 0.1;
      }
      if (isNaN(Number(threshold))) {
        console.warn(`invalid threshold value "${threshold}", using default value 0.1`);
        return 0.1;
      }
      threshold = Number(threshold);
    }

    if (typeof threshold !== 'number') {
      console.warn(`invalid threshold value "${threshold}", using default value 0.1`);
      return 0.1;
    }

    if (threshold > 1) {
      console.warn(
        `threshold value "${threshold}" cannot be greater than 1, using maximum value 1`,
      );
      threshold = 1;
    }

    return threshold;
  },
  intersection: function (): void {
    if (this.saNodes && this.saNodes.length) {
      this.saNodes.forEach((saNode) => io.observe(saNode));
    }
  },
  init: function (threshold?: number): void {
    const nodes = document.querySelectorAll('[data-sa]');
    if (!nodes || nodes.length === 0) {
      throw new Error('No matching elements found');
    }
    this.saNodes = nodes;
    if (threshold !== undefined) {
      this.threshold = this.setThreshold(threshold);
    }
    this.intersection();
  },
};

const io = new IntersectionObserver(
  (nodes: IntersectionObserverEntry[]) => {
    nodes.forEach((node: IntersectionObserverEntry) => {
      const target: Element = node.target;

      if (!(target instanceof HTMLDivElement)) return false;

      const once = target.dataset.saOnce === 'false';

      if (once) {
        if (node.isIntersecting) {
          target.classList.add('saShow');
        } else if (!node.isIntersecting && target.classList.contains('saShow')) {
          target.classList.remove('saShow');
        }
      } else {
        if (node.isIntersecting) {
          target.classList.add('saShow');
          io.unobserve(target);
        }
      }
    });
  },
  {
    threshold: sa.threshold,
  },
);
