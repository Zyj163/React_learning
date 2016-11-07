/**
 * Created by ddn on 16/11/7.
 */
import React from 'react';
import ReactDOM from 'react-dom';

//A "key" is a special string attribute you need to include when creating lists of elements.
//并且key必须是唯一的,在一个数组中
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number, index) =>
        <li key={index}>{number * 2}</li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
);
