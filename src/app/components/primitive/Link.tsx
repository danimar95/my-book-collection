import React, { PropsWithChildren } from 'react'
import { LinkProps } from '@/types/primitive.types';

const Link = ({
  href,
  children,
  extraClass,
  target = '_blank',
  rel = 'noopener noreferrer',
}: PropsWithChildren<LinkProps>) => (
  <a
    className={`text-black ${extraClass ? extraClass : "" }`}
    href={href}
    target={target}
    rel={rel}
  >
    {children}
  </a>
);

export default Link;