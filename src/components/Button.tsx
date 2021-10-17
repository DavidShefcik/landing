import { ReactNode } from 'react';

export interface ButtonProps {
  onClick(): void;
  children: ReactNode;
  title?: string;
  disabled?: boolean;
  smallWidth?: string;
  mediumWidth?: string;
  largeWidth?: string;
  textColor?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  activeBackgroundColor?: string;
  disabledBackgroundColor?: string;
  contentAlign?: string;
}

export default function Button({
  onClick,
  children,
  title,
  disabled = false,
  smallWidth = 'w-2/3',
  mediumWidth = 'w-48',
  largeWidth = 'w-40',
  textColor = 'text-gray-100',
  backgroundColor = 'bg-green-500',
  hoverBackgroundColor = 'bg-green-600',
  activeBackgroundColor = backgroundColor,
  disabledBackgroundColor = 'bg-green-300',
  contentAlign = 'justify-center',
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      title={title}
      disabled={disabled}
      className={`border-0 rounded-sm transition-all duration-150 px-6 py-2 my-4 mx-4 ${smallWidth} md:${mediumWidth} lg:${largeWidth} flex flex-row ${contentAlign} ${textColor} ${backgroundColor} hover:${hoverBackgroundColor} focus:${activeBackgroundColor} disabled:${disabledBackgroundColor}`}
    >
      {children}
    </button>
  );
}
