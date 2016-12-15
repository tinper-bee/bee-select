/**
 * @title Checkbox
 * @description `checked` 参数设置是否选中，`disabled`设置是否可用。
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
