/**
 * Created by ddn on 16/11/7.
 */
import React from 'react';
import ReactDOM from 'react-dom';

//Handling Event
/*
 * <a href="#" onclick="console.log('The link was clicked.'); return false">
 Click me
 </a>
 In React, this could instead be:

 function ActionLink() {
 function handleClick(e) {
 e.preventDefault();
 console.log('The link was clicked.');
 }

 return (
 <a href="#" onClick={handleClick}>
 Click me
 </a>
 );
 }
 * */

class  Toggle extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isToggleOn: true
        };
        //This binding is necessary to make `this` work in the callback
        //Generally, if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method.
        //如果是onClick={(e)=>this.handleClick(e)},不需要bind
        //this.handleClick = this.handleClick.bind(this);
    }

    //handleClick() {
    //    console.log('this is:', this);
    //    this.setState(preState => ({
    //        isToggleOn: !preState.isToggleOn
    //    }))
    //}
    //同上,但是不需要bind
    handleClick = () => {
        console.log('this is:', this);
        this.setState(preState => ({
            isToggleOn: !preState.isToggleOn
        }))
    };

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}

ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
);
