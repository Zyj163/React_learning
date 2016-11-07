/**
 * Created by ddn on 16/11/7.
 */
import React from 'react';
import ReactDOM from 'react-dom';

//Conditional Rendering

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

class LoginControl extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isLoggedIn: false
        };
    }

    handleLoginClick = () => {
        this.setState({
            isLoggedIn: true
        })
    };

    handleLogoutClick = () => {
        this.setState({
            isLoggedIn: false
        })
    };

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button = null;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        )
    }
}

//条件语句
const msg = ['React', 'Re: React', 'Re:Re: React'];
function sss(p){
    return p.length > 0 && p[0] == 'React'
}
function Mailbox(props){
    const unreadMsg = props.unreadMsg;
    return (
        <div>
            <h1 style={{color: 'red'}}>hello</h1>

            1.if-else
            {unreadMsg.length > 0 && unreadMsg[0] == 'React' ?
                (<h2>
                    you have {unreadMsg.length} unread message
                </h2>)
                :
                <h2>wrong</h2>
            }

            2.如果长度大于0小于5,并且第一个元素为React,null代表不渲染<br/>
            {unreadMsg.length > 0 && unreadMsg[0] == 'React' &&
                <h2>you have {unreadMsg.length} unread message</h2> &&
                unreadMsg.length > 5 ||
                null
            }

            3.if
            {sss(unreadMsg) &&
                <h2>
                    you have {unreadMsg.length} unread message
                </h2>
            }
        </div>
    )
}

ReactDOM.render(
    <div>
        <LoginControl />
        <Mailbox unreadMsg={msg} />
    </div>,
    document.getElementById('root')
);
