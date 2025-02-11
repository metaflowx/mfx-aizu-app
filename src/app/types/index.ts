import type { MouseEventHandler, ReactNode, RefObject } from "react";
export interface CoreComponentsProps {
    children: ReactNode;
    classNames?: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
    id?: string;
    elementRef?: RefObject<HTMLDivElement>;
  }