class Demo8 extends Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(value) {
  		console.log(`selected ${value}`);
	}
	render(){
		return( 
			<Select
			    showSearch
			    style={{ width: 200 }}
			    placeholder="Select a person"
			    optionFilterProp="children"
			    onChange={this.handleChange.bind(this)}
			  >
			    <Option value="jack">Jack</Option>
			    <Option value="lucy">Lucy</Option>
			    <Option value="tom">Tom</Option>
			  </Select>
		)
	}
}