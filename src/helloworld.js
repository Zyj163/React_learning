/**
 * Created by ddn on 16/11/7.
 */
import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user){
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

const element = (
    <h1>
        Hello, {formatName(user)}
    </h1>
);
//同element
const element2 = <h1>Hello, {formatName(user)}</h1>;

function getGreeting(user){
    if (user){
        return element2
    }
    return <h1>Hello, Stranger.</h1>
}

ReactDOM.render(
    getGreeting(user),
    document.getElementById('root')
);