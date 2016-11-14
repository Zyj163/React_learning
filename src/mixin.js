/**
 * Created by ddn on 16/11/14.
 */
import React from 'react';
import ReactDOM from 'react-dom';

var SetIntervalMixin = {
    componentWillMount: function() {
        this.intervals = [];
    },
    setInterval: function() {
        this.intervals.push(setInterval.apply(null, arguments));
    },
    componentWillUnmount: function() {
        this.intervals.forEach(clearInterval);
    }
};

var TickTock = React.createClass({
    mixins: [SetIntervalMixin], // Use the mixin
    getInitialState: function() {
        return {seconds: 0};
    },
    componentDidMount: function() {
        this.setInterval(this.tick, 1000); // Call a method on the mixin
    },
    tick: function() {
        //这里this.state的改变是同步的,所以可以这样写
        //this.setState({seconds: this.state.seconds + 1});
        this.setState(preState => ({
            seconds: preState.seconds + 1
        }))
    },
    render: function() {
        return (
            <p>
                React has been running for {this.state.seconds} seconds.
            </p>
        );
    }
});


ReactDOM.render(
    <TickTock />,
    document.getElementById('root')
);