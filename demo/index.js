
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Select from '../src';

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

const CARET = <i className="uf uf-chevronarrowdown"></i>;

const CARETUP = <i className="uf uf-chevronarrowup"></i>;


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
/**
 * @title 多颜色`Checkbox`
 * @description `colors`参数控制背景色
 */

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

class Demo4 extends Component {
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
}class Demo5 extends Component {
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
}class Demo6 extends Component {
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
}class Demo7 extends Component {
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
}class Demo8 extends Component {
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
}var DemoArray = [{"example":<Demo1 />,"title":" Checkbox","code":"/**\n * @title Checkbox\n * @description `checked` 参数设置是否选中，`disabled`设置是否可用。\n */\n\nclass Demo1 extends Component {\n\t\n\thandleChange(value) {\n\t    console.log(value);\n\t}\n\t\n\trender() {\n\t    return (\n\t      <Select\n\t\t    tags\n\t\t    style={{ width: '100%' }}\n\t\t    onChange={this.handleChange.bind(this)}\n\t\t    tokenSeparators={[',']}\n\t\t  >\n\t\t    {Children}\n\t\t  </Select>\n\t    );\n\t}\n}\n","desc":" `checked` 参数设置是否选中，`disabled`"},{"example":<Demo2 />,"title":" 多颜色`Checkbox`","code":"/**\n * @title 多颜色`Checkbox`\n * @description `colors`参数控制背景色\n */\n\nclass Demo2 extends Component {\n\tconstructor() {\n\t\tsuper();\n\t\tthis.handleChange = this.handleChange.bind(this);\n\t}\n\thandleChange(value) {\n  \t\tconsole.log(`selected ${value}`);\n\t}\n\trender(){\t\n\t\treturn( \n\t\t\t<div>\n\t\t\t    <Select size=\"lg\" defaultValue=\"lucy\" style={{ width: 200 }} onChange={this.handleChange}>\n\t\t\t      <Option value=\"jack\">Jack</Option>\n\t\t\t      <Option value=\"lucy\">Lucy</Option>\n\t\t\t      <Option value=\"disabled\" disabled>Disabled</Option>\n\t\t\t      <Option value=\"yiminghe\">Yiminghe</Option>\n\t\t\t    </Select>\n\t\t\t    <Select defaultValue=\"lucy\" style={{ width: 200 }} onChange={this.handleChange}>\n\t\t\t      <Option value=\"jack\">Jack</Option>\n\t\t\t      <Option value=\"lucy\">Lucy</Option>\n\t\t\t      <Option value=\"disabled\" disabled>Disabled</Option>\n\t\t\t      <Option value=\"yiminghe\">Yiminghe</Option>\n\t\t\t    </Select>\n\t\t\t    <Select size=\"sm\" defaultValue=\"lucy\" style={{ width: 200 }} onChange={this.handleChange}>\n\t\t\t      <Option value=\"jack\">Jack</Option>\n\t\t\t      <Option value=\"lucy\">Lucy</Option>\n\t\t\t      <Option value=\"disabled\" disabled>Disabled</Option>\n\t\t\t      <Option value=\"yiminghe\">Yiminghe</Option>\n\t\t\t    </Select>\n\t\t\t</div>\n\t\t)\n\t}\n}\n","desc":" `colors`参数控制背景色"},{"example":<Demo3 />,"title":"Demo3","code":"\nclass Demo3 extends Component {\n\tconstructor() {\n\t\tsuper();\n\t\tthis.handleChange = this.handleChange.bind(this);\n\t}\n\thandleChange(value) {\n  \t\tconsole.log(`selected ${value}`);\n\t}\n\trender(){\n\t\treturn( \n\t\t\t<Select tags\n\t\t\t    style={{ width: '100%' }}\n\t\t\t    searchPlaceholder=\"标签模式\"\n\t\t\t    onChange={this.handleChange}\n\t\t\t  >\n\t\t\t    {Children}\n\t\t\t  </Select>\n\t\t)\n\t}\n}\n","desc":""},{"example":<Demo4 />,"title":"Demo4","code":"\nclass Demo4 extends Component {\n\tconstructor() {\n\t\tsuper();\n\t\tthis.state = {\n\t\t\tcities: cityData[provinceData[0]],\n      \t\tsecondCity: cityData[provinceData[0]][0],\n\t\t}\n\t\tthis.handleProvinceChange = this.handleProvinceChange.bind(this);\n\t\tthis.onSecondCityChange = this.onSecondCityChange.bind(this);\n\t}\n\thandleProvinceChange(value) {\n\t    this.setState({\n\t      cities: cityData[value],\n\t      secondCity: cityData[value][0],\n\t    });\n\t}\n\tonSecondCityChange(value) {\n\t    this.setState({\n\t      secondCity: value,\n\t    });\n\t}\n\trender() {\n\t    const provinceOptions = provinceData.map(province => <Option key={province}>{province}</Option>);\n\t    const cityOptions = this.state.cities.map(city => <Option key={city}>{city}</Option>);\n\t    return (\n\t      <div>\n\t        <Select defaultValue={provinceData[0]} style={{ width: 90 }} onChange={this.handleProvinceChange}>\n\t          {provinceOptions}\n\t        </Select>\n\t        <Select value={this.state.secondCity} style={{ width: 90 }} onChange={this.onSecondCityChange}>\n\t          {cityOptions}\n\t        </Select>\n\t      </div>\n\t    );\n\t}\n}","desc":""},{"example":<Demo5 />,"title":"Demo5","code":"class Demo5 extends Component {\n\tconstructor() {\n\t\tsuper();\n\t\tthis.state = {\n\t\t\toptions: [],\n\t\t}\n\t\tthis.handleChange = this.handleChange.bind(this);\n\t}\n\thandleChange(value) {\n\t    let options;\n\t    if (!value || value.indexOf('@') >= 0) {\n\t      options = [];\n\t    } else {\n\t      options = ['gmail.com', '163.com', 'qq.com'].map((domain) => {\n\t        const email = `${value}@${domain}`;\n\t        return <Option key={email}>{email}</Option>;\n\t      });\n\t    }\n\t    this.setState({ options });\n\t}\n\t\n\trender() {\n\t    return (\n\t      <Select combobox\n\t        style={{ width: 200 }}\n\t        onChange={this.handleChange}\n\t        filterOption={false}\n\t        placeholder=\"Enter the account name\"\n\t      >\n\t        {this.state.options}\n\t      </Select>\n\t    );\n\t}\n}","desc":""},{"example":<Demo6 />,"title":"Demo6","code":"class Demo6 extends Component {\n\tconstructor() {\n\t\tsuper();\n\t\t\n\t}\n\thandleChange(value) {\n\t    console.log(value);\n\t}\n\t\n\trender() {\n\t    return (\n\t      <Select defaultValue=\"lucy\"\n\t\t    style={{ width: 200 }}\n\t\t    showSearch={false}\n\t\t    onChange={this.handleChange.bind(this)}\n\t\t  >\n\t\t    <OptGroup label=\"Manager\">\n\t\t      <Option value=\"jack\">Jack</Option>\n\t\t      <Option value=\"lucy\">Lucy</Option>\n\t\t    </OptGroup>\n\t\t    <OptGroup label=\"Engineer\">\n\t\t      <Option value=\"Yiminghe\">yiminghe</Option>\n\t\t    </OptGroup>\n\t\t  </Select>\n\t    );\n\t}\n}","desc":""},{"example":<Demo7 />,"title":"Demo7","code":"class Demo7 extends Component {\n\tconstructor() {\n\t\tsuper();\n\t\tthis.handleChange = this.handleChange.bind(this);\n\t}\n\thandleChange(value) {\n  \t\tconsole.log(`selected ${value}`);\n\t}\n\trender(){\n\t\treturn( \n\t\t\t<Select multiple\n\t\t\t    style={{ width: '100%' }}\n\t\t\t    defaultValue={['a10', 'c12']}\n\t\t\t    onChange={this.handleChange}\n\t\t\t  >\n\t\t\t    {Children}\n\t\t\t  </Select>\n\t\t)\n\t}\n}","desc":""},{"example":<Demo8 />,"title":"Demo8","code":"class Demo8 extends Component {\n\tconstructor() {\n\t\tsuper();\n\t\tthis.handleChange = this.handleChange.bind(this);\n\t}\n\thandleChange(value) {\n  \t\tconsole.log(`selected ${value}`);\n\t}\n\trender(){\n\t\treturn( \n\t\t\t<Select\n\t\t\t    showSearch\n\t\t\t    style={{ width: 200 }}\n\t\t\t    placeholder=\"Select a person\"\n\t\t\t    optionFilterProp=\"children\"\n\t\t\t    onChange={this.handleChange.bind(this)}\n\t\t\t  >\n\t\t\t    <Option value=\"jack\">Jack</Option>\n\t\t\t    <Option value=\"lucy\">Lucy</Option>\n\t\t\t    <Option value=\"tom\">Tom</Option>\n\t\t\t  </Select>\n\t\t)\n\t}\n}","desc":""}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        const header = (
            <Row>
                <Col md={11}>
                { example }
                </Col>
                <Col md={1}>
                <Button shape="icon" onClick={ this.handleClick }>
                    { caret }
                </Button>
                </Col>
            </Row>
        );
        return (
            <Col md={10} mdOffset={1} sm={12} smOffset={0}>
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ header } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
