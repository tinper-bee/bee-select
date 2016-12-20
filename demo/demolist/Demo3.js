/**
 * @title 自定义选项多选`Select`
 * @description 用户在框内输入自定义内容，Select将输入的内容自动纳入下拉选项中一员。
 */

class Demo3 extends Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(value) {
  		console.log(`selected ${value}`);
	}
	render(){
		return( 
			<Select tags
			    style={{ width: '100%' }}
			    searchPlaceholder="标签模式"
			    onChange={this.handleChange}
			  >
			    {Children}
			  </Select>
		)
	}
}
