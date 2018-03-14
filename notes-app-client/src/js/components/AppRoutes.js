import React , {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import App from './App';
import Students from './Students';
class AppRoutes extends Component{
    render(){
        return(
                    <Router>
                        <Switch>
                            <Route exact path='/' component={App} />
                            <Route exact path='/studentApp' component={Students} />

                        </Switch>
                    </Router>
        )
    }
}
export default AppRoutes;