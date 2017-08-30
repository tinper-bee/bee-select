/**
 * @title 搜索单选`Select`
 * @description 从下拉选中，通过输入的值检索相应的选项。
 */

import React, { Component } from 'react';
import Select from '../../src';

const Option = Select.Option;

class Demo6 extends Component {
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

export default Demo6;