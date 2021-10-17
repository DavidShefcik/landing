import { ReactNode } from 'react';

export interface SubTitleProps {
  children: ReactNode;
}

export default function SubTitleProps({ children }: SubTitleProps) {
  return <p className="w-full text-center text-gray-200 text-lg mx-4 my-2">{children}</p>;
}
