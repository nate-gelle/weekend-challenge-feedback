import React, {Component} from 'react';
import FeedbackTable from '../FeedbackTable/FeedbackTable';

class Admin extends Component {
    render() {
        return (
            <div>
                <header><h1>Feedback Results!</h1></header>
                <FeedbackTable />
            </div>
        );
    }
}

export default Admin;