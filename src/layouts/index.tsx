import { Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
import CustomHelmet from "../components/CustomHelmet"
import Header from '../components/Header';
import ShortResume from '../components/ShortResume';
import MenuOverlay from '../containers/MenuOverlay';
import "./style.css";

interface States {
    displayMenu: boolean,
    toggle: boolean,
    colorBugger: string,
    lblButtonViewMore: string
}

interface Props {

}

const SCRow = styled(Row)`
    position : absolute !important;
    bottom : 0px;
    height: 100% !important;
    width: 100% ;
    padding-top: 10%;
`

const SCButtonViewMore = styled.button`
    background-color : black;
    height: 50px;
    width: 100px;
    font-size: 12px;
    display : flex;
    justify-content: center;
    align-items:center;
    border: none;
    outline: transparent;
    color: white;
    align-self:center;
    transform: translate(-50%,50%);
    margin-left: 50%;
`
export default class AppLayout extends React.Component<Props, States> {

    constructor(props: Props) {
        super(props);
        this.state = {
            displayMenu: false,
            toggle: false,
            colorBugger: 'black',
            lblButtonViewMore: 'view more'
        }
    }

    handleClickMenuButton = () => {
        this.setState({
            toggle: !this.state.toggle,
            displayMenu: !this.state.displayMenu,
            colorBugger: !this.state.toggle ? 'white' : 'black'
        });
    }

    render() {
        return (
            <div className="container-layout">
                <CustomHelmet />
                <div className="container-blur-effect" />
                <Header colorBugger={this.state.colorBugger} toggle={this.state.toggle} onClickMenuButton={this.handleClickMenuButton} />
                <MenuOverlay display={this.state.displayMenu} />
                <SCRow>
                    <ShortResume />
                    <SCButtonViewMore disabled>
                        {/* <LblViewMore target="_bank">{this.state.lblButtonViewMore.toLowerCase()}</LblViewMore> */}
                    </SCButtonViewMore>
                </SCRow>
            </div>
        )
    }
}