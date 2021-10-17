import { ReactNode } from 'react';

export enum CenteredAlignment {
  VERTICAL = 'v',
  HORIZONTAL = 'h',
  VERTICAL_AND_CENTERED = 'vh',
}

export enum FlexDirection {
  COLUMN = 'flex-col',
  ROW = 'flex-row',
}

export interface CenteredContainerProps {
  alignment?: CenteredAlignment;
  width?: string;
  height?: string;
  flexDirection?: FlexDirection;
  mobileFlexDirection?: FlexDirection;
  backgroundColor?: string;
  children: ReactNode;
}

export default function CenteredContainer({
  alignment = CenteredAlignment.VERTICAL_AND_CENTERED,
  width = 'w-full',
  height = 'h-full',
  flexDirection = FlexDirection.COLUMN,
  mobileFlexDirection = flexDirection,
  backgroundColor = 'bg-transparent',
  children,
}: CenteredContainerProps) {
  let alignmentStyles = '';
  switch (alignment) {
    case CenteredAlignment.VERTICAL:
      alignmentStyles = 'justify-center';
      break;
    case CenteredAlignment.HORIZONTAL:
      alignmentStyles = 'items-center';
      break;
    case CenteredAlignment.VERTICAL_AND_CENTERED:
      alignmentStyles = 'justify-center items-center';
      break;
    default:
      throw new Error('Invalid alignment');
  }

  return (
    <div
      className={`${width} ${height} flex ${mobileFlexDirection} md:${flexDirection} lg:${flexDirection} ${alignmentStyles} ${backgroundColor}`}
    >
      {children}
    </div>
  );
}
