class Demo7 extends Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(value) {
  		console.log(`selected ${value}`);
	}
	render(){
		return( 
			<Select multiple
			    style={{ width: '100%' }}
			    defaultValue={['a10', 'c12']}
			    onChange={this.handleChange}
			  >
			    {Children}
			  </Select>
		)
	}
}