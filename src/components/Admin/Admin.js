import React, {Component} from 'react';
import FeedbackTable from '../FeedbackTable/FeedbackTable';
import Card from 'material-ui/Card';
import './Admin.css';

class Admin extends Component {
    render() {
        return (
            <Card className="card">
                <header><h1>Feedback Results!</h1></header>
                <FeedbackTable />
            </Card>
        );
    }
}

export default Admin;