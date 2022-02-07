import React from 'react';
import CustomHelmet from "../components/CustomHelmet"
import DevelopmentComponent from '../components/Development';
import Header from '../components/Header';
import ShortResume from '../components/ShortResume';
import MenuOverlay from '../containers/MenuOverlay';
import "./style.scss";

interface States {
    displayMenu: boolean,
    toggle: boolean,
    colorBugger: string,
    lblButtonViewMore: string
}

export default class AppLayout extends React.Component<any, States> {

    constructor(props: any) {
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
                {/* <div className="container-blur-effect" /> */}
                <Header colorBugger={this.state.colorBugger} toggle={this.state.toggle} onClickMenuButton={this.handleClickMenuButton} />
                <MenuOverlay display={this.state.displayMenu} />

                <div className='container-layout__content'>
                    <ShortResume />
                </div>
                <div className='container-layout__footer'>
                    <DevelopmentComponent />
                </div>
            </div>
        )
    }
}