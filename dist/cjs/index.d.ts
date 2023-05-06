import * as React from 'react';
import 'gh-corners';
interface TGitHubCornersProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    /**
     * The link to your project page.
     */
    href?: string;
    /**
     * The width and height of the corner.
     * Default: `80`
     */
    size?: number;
    /**
     * The background color of the corner.
     * Default: `#151513`
     */
    bgColor?: string;
    /**
     * The Github logo color of the corner.
     * Default: `#fff`
     */
    color?: string;
    /**
     * The position of corner.
     * Default: `right`
     */
    position?: 'left' | 'right';
    /** Is it displayed at the bottom? */
    bottom?: boolean;
    /**
     * It is positioned relative to the initial containing block established.
     * Default: `false`
     */
    fixed?: boolean;
    /**
     * Sets the z-order of a positioned element and its descendants or flex items.
     */
    zIndex?: number;
}
declare const GithubCorners: (props: TGitHubCornersProps) => JSX.Element;
export default GithubCorners;
