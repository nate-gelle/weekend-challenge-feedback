import React, { Component } from 'react';
import axios from 'axios';
import FeedbackEntry from '../FeedbackEntry/FeedbackEntry';

class FeedbackTable extends Component {
    constructor() {
        super();
          this.state = {
            listOfEntries: [],
          };
        }
    
    getFeedback = () => {
        axios.get('/feedback').then((response) => {
            console.log('in getFeedback', response.data);
            this.setState({listOfEntries: [...response.data]});
            console.log('listOfEntries:', this.state.listOfEntries);
        });
        
    }

    componentDidMount = () => {
        this.getFeedback();
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Understanding</th>
                            <th>Support</th>
                            <th>Comment</th>
                            <th>Delete</th>
                            <th>Flag</th>
                        </tr>
                    </thead>    
                    <tbody>
                        {this.state.listOfEntries.map((entry, i) => {
                        return <FeedbackEntry key={i} entry={entry} getFeedback={this.getFeedback}/>
                        })}
                    </tbody>   
                </table>    
            </div>    
        )
    }
}

export default FeedbackTable;