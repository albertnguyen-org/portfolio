import React from 'react';
import styled from 'styled-components';
import SocialButton from '../SocialButton';

// Path
import {LINK_LINKEDIN, LINK_FACEBOOK, LINK_GITHUB, LINK_INSTAGRAM} from '../../utils/paths';
//Icons 
const Ic_FB = require("../../assets/icons/ic_fb.svg");
const Ic_LINKED_IN = require("../../assets/icons/ic_linkedin.svg");
const Ic_INSTAGRAM = require("../../assets/icons/ic_instagram.svg");
const Ic_GITHUB = require("../../assets/icons/ic_github.svg");

const socialIconData = [
    {
        key : "ic_fb",
        path: LINK_FACEBOOK,
        iconSrc: Ic_FB,
    },
    {
        key: "ic_linkedin",
        path: LINK_LINKEDIN,
        iconSrc: Ic_LINKED_IN,
    },
    {
        key: "ic_instagram",
        path: LINK_INSTAGRAM,
        iconSrc: Ic_INSTAGRAM,
    },
    {
        key: "ic_github",
        path: LINK_GITHUB,
        iconSrc: Ic_GITHUB,
    }
]

const StyledContainerSocialView = styled.div`
    width : auto;
    height : 100%;
    background-color : transparent;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
export default class SocialView extends React.Component {
    render() {
        return (
            <StyledContainerSocialView>
                {
                    socialIconData.map(i => {
                        return <SocialButton key={i.key} iconSrc={i.iconSrc} path={i.path} />
                    })
                }
            </StyledContainerSocialView>
        );
    }
}