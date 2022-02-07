import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { PATH_ROOT, CV_PAGE } from "../utils/paths"
import { NotFound } from "../containers/Result"
import AppLayout from '../layouts'

import CVView from '../components/CVView'
const DataRoute = [
    {
        key: "root",
        path: `${PATH_ROOT}`,
        component: AppLayout
    },
    {
        key: "cv-page",
        path: `${CV_PAGE}`,
        component: CVView,
    },
]

const AppRoute = () => {
    return (
        <Router>
            <Switch>
                {
                    DataRoute.map(i => {
                        return <Route exact key={i.key} path={i.path} component={i.component} />
                    })
                }
                <Route exact component={NotFound} />
            </Switch>
        </Router>
    )
}

export default AppRoute;