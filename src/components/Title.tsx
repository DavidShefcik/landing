import { ReactNode } from 'react';

export interface TitleProps {
  children: ReactNode;
}

export default function TitleProps({ children }: TitleProps) {
  return <p className="w-full text-center text-gray-100 text-4xl mx-4 my-2">{children}</p>;
}
