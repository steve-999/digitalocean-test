import React, { Component } from 'react';

class TestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            text_string: undefined
        }
    }

    componentDidMount() {
        this.get_data();
    }

    get_data = async () => {
        const url = 'http://localhost:5000/index';
        const resp = await fetch(url);
        const data = await resp.json();
        console.log('data', data);
        this.setState({
            text_string: data
        });
    }

    render() { 
        return (  
            <div>
                <p>Text fetched = { this.state.text_string }</p>
            </div>
        );
    }
}
 
export default TestComponent;