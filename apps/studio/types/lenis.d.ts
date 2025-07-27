declare module 'lenis' {
    export default class Lenis {
      constructor(options: any);
      raf(time: number): void;
      on(event: string, callback: Function): void;
      off(event: string, callback: Function): void;
      destroy(): void;
      stop(): void;
      start(): void;
      scrollTo(target: number | string | HTMLElement, options?: any): void;
      velocity: number;
    }
  }