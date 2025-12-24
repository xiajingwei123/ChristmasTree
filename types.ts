export interface HandLandmark {
  x: number;
  y: number;
  z: number;
}

export interface Results {
  multiHandLandmarks: HandLandmark[][];
  image: HTMLVideoElement;
}

export interface HandsOptions {
  maxNumHands: number;
  modelComplexity: number;
  minDetectionConfidence: number;
  minTrackingConfidence: number;
}

export declare class Hands {
  constructor(config: { locateFile: (file: string) => string });
  setOptions(options: HandsOptions): void;
  onResults(callback: (results: Results) => void): void;
  send(input: { image: HTMLVideoElement }): Promise<void>;
}

export declare class Camera {
  constructor(video: HTMLVideoElement, config: { onFrame: () => Promise<void>; width: number; height: number });
  start(): Promise<void>;
}

declare global {
  interface Window {
    Hands: typeof Hands;
    Camera: typeof Camera;
  }
}