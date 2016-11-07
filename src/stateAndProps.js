/**
 * Created by ddn on 16/11/7.
 */
import React from 'react';
import ReactDOM from 'react-dom';

//自定义控件
//方式一:函数
//function Welcome(props){
//    return <h1>Hello, {props.name}</h1>
//}
//方式二:类(ES6 class)
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

const element = <Welcome name="Sara" />;

//props are read-only 设置不变的内容
//state(状态机) 设置会改变的内容setState
class Clock extends React.Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {date: new Date()};
    }

    //生命周期
    //will rendered
    componentWillMount() {

    }

    //did rendered
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    //will removed
    componentWillUnMount() {
        clearInterval(this.timerID);
    }

    //did removed
    componentDidUnMount() {

    }

    //渲染内容
    render() {
        return (
            <div>
                <h1>hello world</h1>
                <h2>it is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }

    //更新状态机,刷新页面
    tick() {
        this.setState({
            date: new Date()
        })
    }

    /*
     * 注意点:
     * 1.不要直接修改state,应该用setState
     * 2.React may batch multiple setState() calls into a single update for performance.

     Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.

     For example, this code may fail to update the counter:

     // Wrong
     this.setState({
        counter: this.state.counter + this.props.increment,
     });
     To fix it, use a second form of setState() that accepts a function rather than an object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument:

     // Correct
     this.setState((prevState, props) => ({
        counter: prevState.counter + props.increment
     }));
     We used an arrow function above, but it also works with regular functions:

     // Correct
     this.setState(function(prevState, props) {
        return {
            counter: prevState.counter + props.increment
        };
     });

     3.State Updates are Merged
     * */
}

const clock = <Clock />;

ReactDOM.render(
    //element,
    //clock,
    <div>
        <Welcome name="Sara" />
        <Clock />
    </div>,

    document.getElementById('root')
);