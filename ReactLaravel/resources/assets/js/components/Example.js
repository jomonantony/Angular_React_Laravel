import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
export default class Example extends Component {
    render() {
        return (
         
                    <div className="col-md-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">Home Component</div>
                            <div className="panel-body">
                            <div className="row">
                                <div className="col-md-10"></div>
                                <div className="col-md-2">
                                    <Link to="/add-item">Create Item</Link>
                                </div>
                            </div><br />
                                This is Home!
                            </div>
                        </div>
                    </div>                
        );
    }
}

/* if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
} */
