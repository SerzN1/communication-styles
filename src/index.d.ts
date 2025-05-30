/// <reference types="vite/client" />

import * as preact from 'preact';
import { JSX } from 'preact';

declare module 'react-icons' {
  export interface IconBaseProps extends JSX.SVGAttributes<SVGElement> {
    children?: preact.ComponentChildren;
    size?: string | number;
    color?: string;
    title?: string;
  }
  export type IconType = (props: IconBaseProps) => preact.VNode;
}
