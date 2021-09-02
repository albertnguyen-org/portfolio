import React, { Component } from 'react'
import Helmet from 'react-helmet'
export default class CustomHelmet extends Component {
    state = {
        headerTitle: process.env.REACT_APP_TITLE
    }
    render() {
        return (
            <Helmet>
                <meta charSet="utf-8" />
                <title>{this.state.headerTitle}</title>
            </Helmet>)
    }
}