/**
 * @title 不同尺寸单选`Select`
 * @description `size`参数控制大小
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
			    <Select size="lg" defaultValue="lucy" style={{ width: 200 }} onChange={this.handleChange}>
			      <Option value="jack">Jack</Option>
			      <Option value="lucy">Lucy</Option>
			      <Option value="disabled" disabled>Disabled</Option>
			      <Option value="yiminghe">Yiminghe</Option>
			    </Select>
			    <Select defaultValue="lucy" style={{ width: 200 }} onChange={this.handleChange}>
			      <Option value="jack">Jack</Option>
			      <Option value="lucy">Lucy</Option>
			      <Option value="disabled" disabled>Disabled</Option>
			      <Option value="yiminghe">Yiminghe</Option>
			    </Select>
			    <Select size="sm" defaultValue="lucy" style={{ width: 200 }} onChange={this.handleChange}>
			      <Option value="jack">Jack</Option>
			      <Option value="lucy">Lucy</Option>
			      <Option value="disabled" disabled>Disabled</Option>
			      <Option value="yiminghe">Yiminghe</Option>
			    </Select>
			</div>
		)
	}
}
