export interface IButton {
  title: string;
  variant?: string;
  onClick?: () => void;
}

export interface IButtonStyledProps {
  variant: string;
}