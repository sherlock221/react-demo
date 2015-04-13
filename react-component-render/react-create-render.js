/**
 * 创建 component 组件
 */
var HelloMessage = React.createClass({
    render : function(){
        return <h1>Hello {this.props.name}</h1>
    }
});


//使用自定义组件
React.render(
    <HelloMessage name="sherlock">
        <div>12312</div>
        <div>12312</div>
    </HelloMessage>,
    document.getElementById("example")
);

