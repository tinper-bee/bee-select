class Demo6 extends Component {
	constructor() {
		super();
		
	}
	handleChange(value) {
	    console.log(value);
	}
	
	render() {
	    return (
	      <Select defaultValue="lucy"
		    style={{ width: 200 }}
		    showSearch={false}
		    onChange={this.handleChange.bind(this)}
		  >
		    <OptGroup label="Manager">
		      <Option value="jack">Jack</Option>
		      <Option value="lucy">Lucy</Option>
		    </OptGroup>
		    <OptGroup label="Engineer">
		      <Option value="Yiminghe">yiminghe</Option>
		    </OptGroup>
		  </Select>
	    );
	}
}