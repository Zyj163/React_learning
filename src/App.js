import React, { Component } from 'react';
import './App.css';


var PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];


class ProductCategoryRow extends React.Component {
    render() {
        return (
            <tr className="category">
                <th colSpan="2">
                    {this.props.category}
                </th>
            </tr>
        )
    }
}

class ProductRow extends React.Component {
    render() {
        //没货显示红色
        var name = this.props.product.stocked ? this.props.product.name :
            <span style={{color: 'red'}}>
                {this.props.product.name}
            </span>;
        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        )
    }
}

class ProductTable extends React.Component {
    render() {
        var rows = [];
        var lastCategory = null;
        //遍历产品
        this.props.products.forEach((product) => {

            //如果不匹配筛选文字,或者要求显示有货时无货,则不显示
            if (product.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1
                || (!product.stocked
                && this.props.inStockOnly)) return;

            //获取分类
            if (product.category !== lastCategory){
                rows.push(
                    <ProductCategoryRow category={product.category} key={product.category} />
                );
            }
            //将商品添加到分类后面
            rows.push(
                <ProductRow product={product} key={product.name} />
            );
            lastCategory = product.category
        });
        return (
            <table className="table"
                   cellPadding="5px"
                   cellSpacing="5px"
            >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        )
    }
}

/*
* ref使用:(DOM)
* 1.this.refs.myRefName获取指定元素
* 2.ref={(element) => {...}} React will call the ref callback with the DOM element when the component mounts, and call it with null when it unmounts.
*
 * */
class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''}
    }

    render() {
        // Use the `ref` callback to store a reference to the text input DOM
        // element in this.textInput.
        return (
            <div>
                <input
                    type="text"
                    ref={(input) => input.focus()}
                    value={this.state.value}
                    onChange={(e) => {this.setState({value:e.target.value})}}
                />
            </div>
        );
    }
 }
class SearchBar extends React.Component {

    handleChange = () => {
        this.props.onUserInput(
            this.refs.filterTextInput.value,
            this.refs.inStockOnlyInput.checked
        )
    };

    render() {
        return (
            <form className="search">
                <input type="text"
                       placeholder="Search..."
                       value={this.props.filterText}
                       ref="filterTextInput"
                       onChange={this.handleChange}
                />
                <p>
                    <input type="checkbox"
                           checked={this.props.inStockOnly}
                           ref="inStockOnlyInput"
                           onChange={this.handleChange}
                    />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        )
    }
}

class FilterableProductTable extends React.Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            filterText: '',
            inStockOnly: false
        };
    }

    //如果形参名与属性名相同,可以这样简写
    handleUserInput = (filterText, inStockOnly) => {
        this.setState({
            filterText,
            inStockOnly
        })
    };

    /*搜索框
     * filterText:筛选文字
     * inStockOnly:是否有货
     * onUserInput:监听输入
     */
    /*产品表
     * products:产品数组
     * filterText:筛选文字
     * inStockOnly:是否有货
     * */
    render() {
        //Spread Attributes
        const sP = {
            filterText: this.state.filterText,
            inStockOnly: this.state.inStockOnly,
            onUserInput: this.handleUserInput
        };
        return (
            <div>
                <SearchBar {...sP}/>
                <ProductTable products={this.props.products}
                              filterText={this.state.filterText}
                              inStockOnly={this.state.inStockOnly}
                />
            </div>
        )
    }
}

//类型检查器
FilterableProductTable.protoTypes = {
    products: React.PropTypes.arrayOf({
        category: React.PropTypes.string,
        price: React.PropTypes.string,
        stocked: React.PropTypes.bool,
        name: React.PropTypes.string
    }),
    handleUserInput: React.PropTypes.func
};

//属性默认值
FilterableProductTable.defaultProps = {
    products: PRODUCTS
};

class App extends Component {
  render() {
    return (
        <fieldset>
            <FilterableProductTable />
            <CustomTextInput />
        </fieldset>
    );
  }
}

export default App;

/*
* 类型检查
* MyComponent.propTypes = {
 // You can declare that a prop is a specific JS primitive. By default, these
 // are all optional.
 optionalArray: React.PropTypes.array,
 optionalBool: React.PropTypes.bool,
 optionalFunc: React.PropTypes.func,
 optionalNumber: React.PropTypes.number,
 optionalObject: React.PropTypes.object,
 optionalString: React.PropTypes.string,
 optionalSymbol: React.PropTypes.symbol,

 // Anything that can be rendered: numbers, strings, elements or an array
 // (or fragment) containing these types.
 optionalNode: React.PropTypes.node,

 // A React element.
 optionalElement: React.PropTypes.element,

 // You can also declare that a prop is an instance of a class. This uses
 // JS's instanceof operator.
 optionalMessage: React.PropTypes.instanceOf(Message),

 // You can ensure that your prop is limited to specific values by treating
 // it as an enum.
 optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),

 // An object that could be one of many types
 optionalUnion: React.PropTypes.oneOfType([
 React.PropTypes.string,
 React.PropTypes.number,
 React.PropTypes.instanceOf(Message)
 ]),

 // An array of a certain type
 optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),

 // An object with property values of a certain type
 optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),

 // An object taking on a particular shape
 optionalObjectWithShape: React.PropTypes.shape({
 color: React.PropTypes.string,
 fontSize: React.PropTypes.number
 }),

 // You can chain any of the above with `isRequired` to make sure a warning
 // is shown if the prop isn't provided.
 requiredFunc: React.PropTypes.func.isRequired,

 // A value of any data type
 requiredAny: React.PropTypes.any.isRequired,

 // You can also specify a custom validator. It should return an Error
 // object if the validation fails. Don't `console.warn` or throw, as this
 // won't work inside `oneOfType`.
 customProp: function(props, propName, componentName) {
 if (!/matchme/.test(props[propName])) {
 return new Error(
 'Invalid prop `' + propName + '` supplied to' +
 ' `' + componentName + '`. Validation failed.'
 );
 }
 },

 // You can also supply a custom validator to `arrayOf` and `objectOf`.
 // It should return an Error object if the validation fails. The validator
 // will be called for each key in the array or object. The first two
 // arguments of the validator are the array or object itself, and the
 // current item's key.
 customArrayProp: React.PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
 if (!/matchme/.test(propValue[key])) {
 return new Error(
 'Invalid prop `' + propFullName + '` supplied to' +
 ' `' + componentName + '`. Validation failed.'
 );
 }
 })
 };
* */