import Demo from './SelectDemo';
import ReactDOM from 'react-dom';
import React, { Component } from 'react'

import  Select  from '../src';

const Option = Select.Option;
const OptGroup = Select.OptGroup;

const Children = [];
for (let i = 10; i < 36; i++) {
  Children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};

class Demo0 extends Component {
	
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



class Demo2 extends Component {
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


class Demo3 extends Component {
	constructor() {
		super();
		this.state = {
			cities: cityData[provinceData[0]],
      		secondCity: cityData[provinceData[0]][0],
		}
		this.handleProvinceChange = this.handleProvinceChange.bind(this);
		this.onSecondCityChange = this.onSecondCityChange.bind(this);
	}
	handleProvinceChange(value) {
	    this.setState({
	      cities: cityData[value],
	      secondCity: cityData[value][0],
	    });
	}
	onSecondCityChange(value) {
	    this.setState({
	      secondCity: value,
	    });
	}
	render() {
	    const provinceOptions = provinceData.map(province => <Option key={province}>{province}</Option>);
	    const cityOptions = this.state.cities.map(city => <Option key={city}>{city}</Option>);
	    return (
	      <div>
	        <Select defaultValue={provinceData[0]} style={{ width: 90 }} onChange={this.handleProvinceChange}>
	          {provinceOptions}
	        </Select>
	        <Select value={this.state.secondCity} style={{ width: 90 }} onChange={this.onSecondCityChange}>
	          {cityOptions}
	        </Select>
	      </div>
	    );
	}
}

class Demo4 extends Component {
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

class Demo5 extends Component {
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





ReactDOM.render(<Demo0 />, document.getElementById('ReactSelectDemo0'));
ReactDOM.render(<Demo1 />, document.getElementById('ReactSelectDemo1'));
ReactDOM.render(<Demo2 />, document.getElementById('ReactSelectDemo2'));
ReactDOM.render(<Demo3 />, document.getElementById('ReactSelectDemo3'));
ReactDOM.render(<Demo4 />, document.getElementById('ReactSelectDemo4'));
ReactDOM.render(<Demo5 />, document.getElementById('ReactSelectDemo5'));
ReactDOM.render(<Demo6 />, document.getElementById('ReactSelectDemo6'));
ReactDOM.render(<Demo7 />, document.getElementById('ReactSelectDemo7'));

