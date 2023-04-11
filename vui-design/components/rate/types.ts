export type Character = string | ((index: number, value: number) => any);

export interface Rate {
  allowHalf?: boolean,
  cleaned?: number;
  mouseentered?: number;
  value?: number;
  onMouseenter?: (e: MouseEvent, starValue: number, half: number) => void;
  onMouseleave?: (e: MouseEvent) => void;
  onClick?: (e: KeyboardEvent | MouseEvent, starValue: number, half: number) => void;
};