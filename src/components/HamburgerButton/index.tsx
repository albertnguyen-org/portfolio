import React from 'react';
import { Motion, spring, presets } from "react-motion";
import styled from 'styled-components';

const StyledContainerMenu = styled.div`
    height : 50px;
    width : 50px;
    justify-content: center;
    align-items: center;
    display : flex;
`

interface States {
    x?: string,
    y?: string
}

interface Props {
    toggle: boolean,
    onClick: Function,
    color : string
}

export default class HamburgerButton extends React.Component<Props, States>{
    render() {
        const style = {
            overflow: 'visible',
            cursor: 'pointer',
            WebkitTapHighlightColor: "rgba(0,0,0,0)",
            height: '30px',
            width: '30px',
            color: this.props.color,
            zIndex:10
        };
        return (
            <StyledContainerMenu>
                {
                    React.createElement("svg", {
                        viewBox: "0 0 96 96",
                        height: "1em",
                        onClick: this.props.onClick,
                        style: style
                    },

                        React.createElement(Motion, {
                            style: {
                                x: spring(this.props.toggle ? 1 : 0, presets.wobbly),
                                y: spring(this.props.toggle ? 0 : 1, presets.wobbly)
                            }
                        },


                            ({ x, y }: any) =>
                                React.createElement("g", {
                                    id: "navicon",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "14",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                },

                                    React.createElement("line", {
                                        transform: `translate(${x * 12}, ${x * -7}) rotate(${x * 45}, 7, 26)`,
                                        x1: "7", y1: "26", x2: "89", y2: "26"
                                    }),

                                    React.createElement("line", {
                                        transform: `translate(${x * 12}, ${x * 7}) rotate(${x * -45}, 7, 70)`,
                                        x1: "7", y1: "70", x2: "89", y2: "70"
                                    }),

                                    React.createElement("line", {
                                        transform: `translate(${x * -96})`,
                                        opacity: y,
                                        x1: "7", y1: "48", x2: "89", y2: "48"
                                    }))))
                }
            </StyledContainerMenu>

        );
    }
}