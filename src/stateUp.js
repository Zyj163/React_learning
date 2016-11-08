/**
 * Created by ddn on 16/11/8.
 */
import React from 'react';
import ReactDOM from 'react-dom';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {

    handleChange = (e) => {
        this.props.onChange(e.target.value);//传递事件到外面
    };

    render() {
        //这些值是外面传进来的,所以都是props
        const value = this.props.value;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}</legend>
                <input value={value} onChange={this.handleChange}/>
            </fieldset>
        )
    }
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(value, convert){
    const input = parseFloat(value);
    if (Number.isNaN(input)) return '';

    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

//控件之间的联动由相同的父标签来中转
class Calculator extends React.Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {value: '', scale: 'c'};
    }

    handleCelsiusChange = (value) => {
        this.setState({
            scale: 'c',
            value//简写
        })
    };

    handleFahrenheitChange = (value) => {
        this.setState({
            scale: 'f',
            value: value
        })
    };

    render() {
        const scale = this.state.scale;
        const value = this.state.value;
        const celsius = scale === 'f' ? tryConvert(value, toCelsius) : value;
        const fahrenheit = scale === 'c' ? tryConvert(value, toFahrenheit) : value;

        return (
            <div>
                <TemperatureInput scale="c"
                                  value={celsius}
                                  onChange={this.handleCelsiusChange}
                />
                <TemperatureInput scale="f"
                                  value={fahrenheit}
                                  onChange={this.handleFahrenheitChange}
                />
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        );
    }
}

ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
);
