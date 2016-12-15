
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
