
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

const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


/**
 * @title 不同尺寸单选`Select`
 * @description `size`参数控制大小
 */

/*
	这段代码放在了全局，如您单独使用例子，请加上这段代码
	const Option = Select.Option;
	const OptGroup = Select.OptGroup;
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
			    <Select size="lg" defaultValue="lucy" style={{ width: 200,marginRight: 6 }} onChange={this.handleChange}>
			      <Option value="jack">boyuzhou</Option>
			      <Option value="lucy">renhualiu</Option>
			      <Option value="disabled" disabled>Disabled</Option>
			      <Option value="yiminghe">yuzhao</Option>
			    </Select>
			    <Select defaultValue="lucy" style={{ width: 200,marginRight: 6 }} onChange={this.handleChange}>
			      <Option value="jack">boyuzhou</Option>
			      <Option value="lucy">renhualiu</Option>
			      <Option value="disabled" disabled>Disabled</Option>
			      <Option value="yiminghe">yuzhao</Option>
			    </Select>
			    <Select size="sm" defaultValue="lucy" style={{ width: 200 }} onChange={this.handleChange}>
			      <Option value="jack">boyuzhou</Option>
			      <Option value="lucy">renhualiu</Option>
			      <Option value="disabled" disabled>Disabled</Option>
			      <Option value="yiminghe">yuzhao</Option>
			    </Select>
			</div>
		)
	}
}
/**
 * @title 常用多选
 * @description Children自定义数据列表,注意：Children已经定义到全局，此处显示为注释例子，其他例子用到Children变量均以此方式定义。
 */

/*
const Children = [];
for (let i = 10; i < 36; i++) {
  Children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
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
			<Select multiple
			    style={{ width: '100%' }}
			    searchPlaceholder="标签模式"
			    onChange={this.handleChange}
			  >
			    {Children}
			  </Select>
		)
	}
}
/**
 * @title 自定义选项多选`Select`
 * @description 用户在框内输入自定义内容，Select将输入的内容自动纳入下拉选项中一员。
 */

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
/**
 * @title 简易级联单选`Select`
 * @description 常用语城市级联的选择。
 */

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
	        <Select defaultValue={provinceData[0]} style={{ width: 90,marginRight:6 }} onChange={this.handleProvinceChange}>
	          {provinceOptions}
	        </Select>
	        <Select value={this.state.secondCity} style={{ width: 90 }} onChange={this.onSecondCityChange}>
	          {cityOptions}
	        </Select>
	      </div>
	    );
	}
}/**
 * @title 自定义自动填充单选`Select`
 * @description 常用邮箱后缀自动填充。
 */
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
}/**
 * @title 搜索单选`Select`
 * @description 从下拉选中，通过输入的值检索相应的选项。
 */
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
}var DemoArray = [{"example":<Demo1 />,"title":" 不同尺寸单选`Select`","code":"/**\r\n * @title 不同尺寸单选`Select`\r\n * @description `size`参数控制大小\r\n */\r\n\r\n/*\r\n\t这段代码放在了全局，如您单独使用例子，请加上这段代码\r\n\tconst Option = Select.Option;\r\n\tconst OptGroup = Select.OptGroup;\r\n*/\r\nclass Demo1 extends Component {\r\n\tconstructor() {\r\n\t\tsuper();\r\n\t\tthis.handleChange = this.handleChange.bind(this);\r\n\t}\r\n\thandleChange(value) {\r\n  \t\tconsole.log(`selected ${value}`);\r\n\t}\r\n\trender(){\t\r\n\t\treturn( \r\n\t\t\t<div>\r\n\t\t\t    <Select size=\"lg\" defaultValue=\"lucy\" style={{ width: 200,marginRight: 6 }} onChange={this.handleChange}>\r\n\t\t\t      <Option value=\"jack\">boyuzhou</Option>\r\n\t\t\t      <Option value=\"lucy\">renhualiu</Option>\r\n\t\t\t      <Option value=\"disabled\" disabled>Disabled</Option>\r\n\t\t\t      <Option value=\"yiminghe\">yuzhao</Option>\r\n\t\t\t    </Select>\r\n\t\t\t    <Select defaultValue=\"lucy\" style={{ width: 200,marginRight: 6 }} onChange={this.handleChange}>\r\n\t\t\t      <Option value=\"jack\">boyuzhou</Option>\r\n\t\t\t      <Option value=\"lucy\">renhualiu</Option>\r\n\t\t\t      <Option value=\"disabled\" disabled>Disabled</Option>\r\n\t\t\t      <Option value=\"yiminghe\">yuzhao</Option>\r\n\t\t\t    </Select>\r\n\t\t\t    <Select size=\"sm\" defaultValue=\"lucy\" style={{ width: 200 }} onChange={this.handleChange}>\r\n\t\t\t      <Option value=\"jack\">boyuzhou</Option>\r\n\t\t\t      <Option value=\"lucy\">renhualiu</Option>\r\n\t\t\t      <Option value=\"disabled\" disabled>Disabled</Option>\r\n\t\t\t      <Option value=\"yiminghe\">yuzhao</Option>\r\n\t\t\t    </Select>\r\n\t\t\t</div>\r\n\t\t)\r\n\t}\r\n}\r\n","desc":" `size`参数控制大小"},{"example":<Demo2 />,"title":" 常用多选","code":"/**\r\n * @title 常用多选\r\n * @description Children自定义数据列表,注意：Children已经定义到全局，此处显示为注释例子，其他例子用到Children变量均以此方式定义。\r\n */\r\n\r\n/*\r\nconst Children = [];\r\nfor (let i = 10; i < 36; i++) {\r\n  Children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);\r\n}\r\n*/\r\nclass Demo2 extends Component {\r\n\t\r\n\tconstructor() {\r\n\t\tsuper();\r\n\t\tthis.handleChange = this.handleChange.bind(this);\r\n\t}\r\n\thandleChange(value) {\r\n  \t\tconsole.log(`selected ${value}`);\r\n\t}\r\n\trender(){\r\n\t\treturn( \r\n\t\t\t<Select multiple\r\n\t\t\t    style={{ width: '100%' }}\r\n\t\t\t    searchPlaceholder=\"标签模式\"\r\n\t\t\t    onChange={this.handleChange}\r\n\t\t\t  >\r\n\t\t\t    {Children}\r\n\t\t\t  </Select>\r\n\t\t)\r\n\t}\r\n}\r\n","desc":" Children自定义数据列表,注意：Children已经定义到全局，此处显示为注释例子，其他例子用到Children变量均以此方式定义。"},{"example":<Demo3 />,"title":" 自定义选项多选`Select`","code":"/**\r\n * @title 自定义选项多选`Select`\r\n * @description 用户在框内输入自定义内容，Select将输入的内容自动纳入下拉选项中一员。\r\n */\r\n\r\nclass Demo3 extends Component {\r\n\tconstructor() {\r\n\t\tsuper();\r\n\t\tthis.handleChange = this.handleChange.bind(this);\r\n\t}\r\n\thandleChange(value) {\r\n  \t\tconsole.log(`selected ${value}`);\r\n\t}\r\n\trender(){\r\n\t\treturn( \r\n\t\t\t<Select tags\r\n\t\t\t    style={{ width: '100%' }}\r\n\t\t\t    searchPlaceholder=\"标签模式\"\r\n\t\t\t    onChange={this.handleChange}\r\n\t\t\t  >\r\n\t\t\t    {Children}\r\n\t\t\t  </Select>\r\n\t\t)\r\n\t}\r\n}\r\n","desc":" 用户在框内输入自定义内容，Select将输入的内容自动纳入下拉选项中一员。"},{"example":<Demo4 />,"title":" 简易级联单选`Select`","code":"/**\r\n * @title 简易级联单选`Select`\r\n * @description 常用语城市级联的选择。\r\n */\r\n\r\nclass Demo4 extends Component {\r\n\tconstructor() {\r\n\t\tsuper();\r\n\t\tthis.state = {\r\n\t\t\tcities: cityData[provinceData[0]],\r\n      \t\tsecondCity: cityData[provinceData[0]][0],\r\n\t\t}\r\n\t\tthis.handleProvinceChange = this.handleProvinceChange.bind(this);\r\n\t\tthis.onSecondCityChange = this.onSecondCityChange.bind(this);\r\n\t}\r\n\thandleProvinceChange(value) {\r\n\t    this.setState({\r\n\t      cities: cityData[value],\r\n\t      secondCity: cityData[value][0],\r\n\t    });\r\n\t}\r\n\tonSecondCityChange(value) {\r\n\t    this.setState({\r\n\t      secondCity: value,\r\n\t    });\r\n\t}\r\n\trender() {\r\n\t    const provinceOptions = provinceData.map(province => <Option key={province}>{province}</Option>);\r\n\t    const cityOptions = this.state.cities.map(city => <Option key={city}>{city}</Option>);\r\n\t    return (\r\n\t      <div>\r\n\t        <Select defaultValue={provinceData[0]} style={{ width: 90,marginRight:6 }} onChange={this.handleProvinceChange}>\r\n\t          {provinceOptions}\r\n\t        </Select>\r\n\t        <Select value={this.state.secondCity} style={{ width: 90 }} onChange={this.onSecondCityChange}>\r\n\t          {cityOptions}\r\n\t        </Select>\r\n\t      </div>\r\n\t    );\r\n\t}\r\n}","desc":" 常用语城市级联的选择。"},{"example":<Demo5 />,"title":" 自定义自动填充单选`Select`","code":"/**\r\n * @title 自定义自动填充单选`Select`\r\n * @description 常用邮箱后缀自动填充。\r\n */\r\nclass Demo5 extends Component {\r\n\tconstructor() {\r\n\t\tsuper();\r\n\t\tthis.state = {\r\n\t\t\toptions: [],\r\n\t\t}\r\n\t\tthis.handleChange = this.handleChange.bind(this);\r\n\t}\r\n\thandleChange(value) {\r\n\t    let options;\r\n\t    if (!value || value.indexOf('@') >= 0) {\r\n\t      options = [];\r\n\t    } else {\r\n\t      options = ['gmail.com', '163.com', 'qq.com'].map((domain) => {\r\n\t        const email = `${value}@${domain}`;\r\n\t        return <Option key={email}>{email}</Option>;\r\n\t      });\r\n\t    }\r\n\t    this.setState({ options });\r\n\t}\r\n\t\r\n\trender() {\r\n\t    return (\r\n\t      <Select combobox\r\n\t        style={{ width: 200 }}\r\n\t        onChange={this.handleChange}\r\n\t        filterOption={false}\r\n\t        placeholder=\"Enter the account name\"\r\n\t      >\r\n\t        {this.state.options}\r\n\t      </Select>\r\n\t    );\r\n\t}\r\n}","desc":" 常用邮箱后缀自动填充。"},{"example":<Demo6 />,"title":" 搜索单选`Select`","code":"/**\r\n * @title 搜索单选`Select`\r\n * @description 从下拉选中，通过输入的值检索相应的选项。\r\n */\r\nclass Demo6 extends Component {\r\n\tconstructor() {\r\n\t\tsuper();\r\n\t\tthis.handleChange = this.handleChange.bind(this);\r\n\t}\r\n\thandleChange(value) {\r\n  \t\tconsole.log(`selected ${value}`);\r\n\t}\r\n\trender(){\r\n\t\treturn( \r\n\t\t\t<Select\r\n\t\t\t    showSearch\r\n\t\t\t    style={{ width: 200 }}\r\n\t\t\t    placeholder=\"Select a person\"\r\n\t\t\t    optionFilterProp=\"children\"\r\n\t\t\t    onChange={this.handleChange.bind(this)}\r\n\t\t\t  >\r\n\t\t\t    <Option value=\"jack\">Jack</Option>\r\n\t\t\t    <Option value=\"lucy\">Lucy</Option>\r\n\t\t\t    <Option value=\"tom\">Tom</Option>\r\n\t\t\t  </Select>\r\n\t\t)\r\n\t}\r\n}","desc":" 从下拉选中，通过输入的值检索相应的选项。"}]


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
        return (
            <Col md={12}>
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0,borderColor: "transparent"}} >
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
