import {
    Router,
    Switch,
    Route,
} from "react-router-dom";
import React from 'react';
import App from '../App';
import storyDetails from "../Components/storyDetails";
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
class AppRouter extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/storydetails" component={storyDetails} />
                </Switch>
            </Router>
        );
    }
}
export default AppRouter;
