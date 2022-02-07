import React from 'react';
// import HamburgerButton from '../HamburgerButton';
import SocialView from '../SocialView/';
import "./styles.scss";

interface Props {
    toggle: boolean,
    onClickMenuButton: Function,
    colorBugger: string
}

export default class Header extends React.Component<Props, {}>{
    render() {
        return (
            <div className="container-header">
                {/* <HamburgerButton color={this.props.colorBugger} toggle={this.props.toggle} onClick={this.props.onClickMenuButton.bind(this)} /> */}
                <SocialView />
            </div>
        )
    }
}