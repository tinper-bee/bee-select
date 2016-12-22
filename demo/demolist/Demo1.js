/**
 * @title 不同尺寸单选`Select`
 * @description `size`参数控制大小
 */

/*
	这段代码放在了全局，如您单独使用例子，请加上这段代码
	const Option = Select.Option;
	const OptGroup = Select.OptGroup;
*/
class Demo1 extends Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(value) {
  		console.log(`selected ${value}`);
	}
	render(){	
		return( 
			<div>
			    <Select size="lg" defaultValue="lucy" style={{ width: 200,marginRight: 6 }} onChange={this.handleChange}>
			      <Option value="jack">boyuzhou</Option>
			      <Option value="lucy">renhualiu</Option>
			      <Option value="disabled" disabled>Disabled</Option>
			      <Option value="yiminghe">yuzhao</Option>
			    </Select>
			    <Select defaultValue="lucy" style={{ width: 200,marginRight: 6 }} onChange={this.handleChange}>
			      <Option value="jack">boyuzhou</Option>
			      <Option value="lucy">renhualiu</Option>
			      <Option value="disabled" disabled>Disabled</Option>
			      <Option value="yiminghe">yuzhao</Option>
			    </Select>
			    <Select size="sm" defaultValue="lucy" style={{ width: 200 }} onChange={this.handleChange}>
			      <Option value="jack">boyuzhou</Option>
			      <Option value="lucy">renhualiu</Option>
			      <Option value="disabled" disabled>Disabled</Option>
			      <Option value="yiminghe">yuzhao</Option>
			    </Select>
			</div>
		)
	}
}
