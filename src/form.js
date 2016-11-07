/**
 * Created by ddn on 16/11/7.
 */
import React from 'react';
import ReactDOM from 'react-dom';

//Forms

//Controlled Components
class Form extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {value: ''};
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    };

    handleSubmit = (event) => {
        alert('text field value is: ' + this.state.value);
    };

    render() {
        return (
            <div>
                <input type="text"
                       placeholder="hello"
                       value={this.state.value}
                       onChange={this.handleChange}/>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

//Uncontrolled Components
class Form2 extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {value: ''};
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    };

    handleSubmit = (event) => {
        alert('text field value is: ' + this.state.value);
    };

    render() {
        return (
            <div>
                <input type="text"
                       defaultValue="hello"
                       onChange={this.handleChange}/>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        <Form />
        <Form2 />
    </div>,
    document.getElementById('root')
);
