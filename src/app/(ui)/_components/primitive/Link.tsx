import React, { PropsWithChildren } from 'react'

interface LinkProps {
  href: string;
  extraClass?: string;
  target?: string;
  rel?: string;
};

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