class Demo5 extends Component {
	constructor() {
		super();
		this.state = {
			options: [],
		}
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(value) {
	    let options;
	    if (!value || value.indexOf('@') >= 0) {
	      options = [];
	    } else {
	      options = ['gmail.com', '163.com', 'qq.com'].map((domain) => {
	        const email = `${value}@${domain}`;
	        return <Option key={email}>{email}</Option>;
	      });
	    }
	    this.setState({ options });
	}
	
	render() {
	    return (
	      <Select combobox
	        style={{ width: 200 }}
	        onChange={this.handleChange}
	        filterOption={false}
	        placeholder="Enter the account name"
	      >
	        {this.state.options}
	      </Select>
	    );
	}
}