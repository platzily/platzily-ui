export type ColorFormat = 'rgb' | 'rgba' | 'hsl' | 'hsla';

export interface ColorObject {
  type: ColorFormat;
  values: [number, number, number] | [number, number, number, number];
  colorSpace?: 'srgb' | 'display-p3' | 'a98-rgb' | 'prophoto-rgb' | 'rec-2020';
}

export function hexToRgb(hex: string): string;
export function rgbToHex(color: string): string;
export function decomposeColor(color: string): ColorObject;
export function recomposeColor(color: ColorObject): string;
export function alpha(color: string, value: number): string;