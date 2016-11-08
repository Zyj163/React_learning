/**
 * Created by ddn on 16/11/8.
 */
import React from 'react';
import ReactDOM from 'react-dom';

//---------通过props.children来获取子元素-------
function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>
    );
}


//--------通过属性值传递元素---------
function Contacts() {
    return <div className="Contacts" style={{background: 'red', width: 100, height: 100}} />;
}

function Chat() {
    return <div className="Chat" style={{background: 'green', width: 100, height: 100}} />;
}

function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-top">
                {props.top}
            </div>
            <div className="SplitPane-bottom">
                {props.bottom}
            </div>
        </div>
    );
}

function App() {
    return (
        <SplitPane
            top={
                <Contacts />
            }
            bottom={
                <Chat />
            } />
    );
}

ReactDOM.render(
    <div>
        <WelcomeDialog />
        <App />
    </div>,
    document.getElementById('root')
);
