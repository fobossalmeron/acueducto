import React from 'react';
import { useLenis } from 'utils/LenisContext';

interface SmoothAnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  targetId: string;
  offset?: number;
  duration?: number;
}

export const SmoothAnchor: React.FC<SmoothAnchorProps> = ({
  targetId,
  children,
  offset = 0,
  duration = 1.2,
  className = '',
  ...props
}) => {
  const { lenis } = useLenis();
  const targetSelector = targetId.startsWith('#') ? targetId : `#${targetId}`;

  const handleSmoothScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    lenis.scrollTo(targetSelector, {
      offset,
      duration,
      immediate: false,
    });
  };

  return (
    <a
      href={targetSelector}
      className={`no-underline ${className}`}
      onClick={handleSmoothScroll}
      {...props}
    >
      {children}
    </a>
  );
};
