export type AnyObject = { [key: string]: any };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TODO = any;

export interface PayloadAction<T> {
  payload: T;
  type: string;
}
export interface Toggles {
  minAppVersion?: string;
  forceUpdateRequired?: boolean;
}
