/**
 * Created by ddn on 16/11/14.
 */
import React from 'react';
import ReactDOM from 'react-dom';

//尽量不要使用context
/*
 * By adding childContextTypes and getChildContext to MessageList (the context provider),
 * React passes the information down automatically and any component in the subtree (in this case, Button)
 * can access it by defining contextTypes.
 * If contextTypes is not defined, then context will be an empty object.
 *
 * If contextTypes is defined within a component, the following lifecycle methods will receive an additional parameter, the context object:

 constructor(props, context)
 componentWillReceiveProps(nextProps, nextContext)
 shouldComponentUpdate(nextProps, nextState, nextContext)
 componentWillUpdate(nextProps, nextState, nextContext)
 componentDidUpdate(prevProps, prevState, prevContext)
 * */
class Button extends React.Component {
    render() {
        return (
            <button style={{background: this.context.color}}>
                {this.props.children}
            </button>
        );
    }
}

Button.contextTypes = {
    color: React.PropTypes.string
};

//const Button = ({children}, context) =>
//    <button style={{background: context.color}}>
//        {children}
//    </button>;
//
//Button.contextTypes = {color: React.PropTypes.string};

class Message extends React.Component {
    render() {
        return (
            <div>
                {this.props.text} <Button>Delete</Button>
            </div>
        );
    }
}

class MessageList extends React.Component {
    getChildContext() {
        return {color: "purple"};
    }

    render() {
        const children = this.props.messages.map((message) =>
            <Message key={message.text} text={message.text} />
        );
        return <div>{children}</div>;
    }
}

MessageList.childContextTypes = {
    color: React.PropTypes.string
};

ReactDOM.render(
    <MessageList messages={['123','2']}/>,
    document.getElementById('root')
);