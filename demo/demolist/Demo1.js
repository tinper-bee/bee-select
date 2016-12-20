/**
 * @title 常用多选
 * @description Children自定义数据列表,注意：Children已经定义到全局，此处显示为注释例子，其他例子用到Children变量均以此方式定义。
 */

/*
const Children = [];
for (let i = 10; i < 36; i++) {
  Children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
*/
class Demo1 extends Component {
	
	handleChange(value) {
	    console.log(value);
	}
	
	render() {
	    return (
	      <Select
		    tags
		    style={{ width: '100%' }}
		    onChange={this.handleChange.bind(this)}
		    tokenSeparators={[',']}
		  >
		    {Children}
		  </Select>
	    );
	}
}
