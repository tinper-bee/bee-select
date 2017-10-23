
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


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var DemoArray = [{"example":<Demo1 />,"title":" 不同尺寸单选`Select`","code":"/**\n * @title 不同尺寸单选`Select`\n * @description `size`参数控制大小\n */\n\n\n\nimport React, { Component } from 'react';\nimport Select from 'bee-select';\n\nconst Option = Select.Option;\nconst OptGroup = Select.OptGroup;\n\nclass Demo1 extends Component {\n\tconstructor() {\n\t\tsuper();\n\t\tthis.handleChange = this.handleChange.bind(this);\n\t}\n\thandleChange(value) {\n\t\tdebugger;\n  \t\t// console.log(`selected ${value}`);\n\t}\n\trender(){\t\n\t\treturn( \n\t\t\t<div>\n\t\t\t    <Select size=\"lg\" defaultValue=\"lucy\" style={{ width: 200,marginRight: 6 }} onChange={this.handleChange}>\n\t\t\t      <Option value=\"jack\">boyuzhou</Option>\n\t\t\t      <Option value=\"lucy\">renhualiu</Option>\n\t\t\t      <Option value=\"disabled\" disabled>Disabled</Option>\n\t\t\t      <Option value=\"yiminghe\">yuzhao</Option>\n\t\t\t    </Select>\n\t\t\t    <Select defaultValue=\"lucy\" style={{ width: 200,marginRight: 6 }} onChange={this.handleChange}>\n\t\t\t      <Option value=\"jack\">boyuzhou</Option>\n\t\t\t      <Option value=\"lucy\">renhualiu</Option>\n\t\t\t      <Option value=\"disabled\" disabled>Disabled</Option>\n\t\t\t      <Option value=\"yiminghe\">yuzhao</Option>\n\t\t\t    </Select>\n\t\t\t    <Select size=\"sm\" defaultValue=\"lucy\" style={{ width: 200 }} onChange={this.handleChange}>\n\t\t\t      <Option value=\"jack\">boyuzhou</Option>\n\t\t\t      <Option value=\"lucy\">renhualiu</Option>\n\t\t\t      <Option value=\"disabled\" disabled>Disabled</Option>\n\t\t\t      <Option value=\"yiminghe\">yuzhao</Option>\n\t\t\t    </Select>\n\t\t\t</div>\n\t\t)\n\t}\n}\n\n\n\n","desc":" `size`参数控制大小"},{"example":<Demo2 />,"title":" 常用多选","code":"/**\n * @title 常用多选\n * @description Children自定义数据列表,注意：Children已经定义到全局，此处显示为注释例子，其他例子用到Children变量均以此方式定义。\n */\n\nimport React, { Component } from 'react';\nimport Select from 'bee-select';\n\nconst Option = Select.Option;\nconst OptGroup = Select.OptGroup;\n\n\nconst Children = [];\nfor (let i = 10; i < 36; i++) {\n  Children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);\n}\n\nclass Demo2 extends Component {\n\t\n\tconstructor(props) {\n\t\tsuper(props);\n\n\t\tthis.handleChange = this.handleChange.bind(this);\n\t}\n\thandleChange(value) {\n\t\tdebugger;\n  \t\t// console.log('selected ${value}');\n\t}\n\trender(){\n\t\treturn( \n\t\t\t<Select multiple\n\t\t\t    style={{ width: '100%' }}\n\t\t\t    searchPlaceholder=\"标签模式\"\n\t\t\t    onChange={this.handleChange}\n\t\t\t  >\n\t\t\t    {Children}\n\t\t\t  </Select>\n\t\t)\n\t}\n}\n\n\n\n","desc":" Children自定义数据列表,注意：Children已经定义到全局，此处显示为注释例子，其他例子用到Children变量均以此方式定义。"},{"example":<Demo3 />,"title":" 自定义选项多选`Select`","code":"/**\n * @title 自定义选项多选`Select`\n * @description 用户在框内输入自定义内容，Select将输入的内容自动纳入下拉选项中一员。\n */\n\nimport React, { Component } from 'react';\nimport Select from 'bee-select';\n\nconst Option = Select.Option;\n\nconst Children = [];\nfor (let i = 10; i < 36; i++) {\n  Children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);\n}\n\nclass Demo3 extends Component {\n\tconstructor() {\n\t\tsuper();\n\t\tthis.handleChange = this.handleChange.bind(this);\n\t}\n\thandleChange(value) {\n  \t\tconsole.log(`selected ${value}`);\n\t}\n\trender(){\n\t\treturn( \n\t\t\t<Select tags\n\t\t\t    style={{ width: '100%' }}\n\t\t\t    searchPlaceholder=\"标签模式\"\n\t\t\t    onChange={this.handleChange}\n\t\t\t  >\n\t\t\t    {Children}\n\t\t\t  </Select>\n\t\t)\n\t}\n}\n\n\n\n","desc":" 用户在框内输入自定义内容，Select将输入的内容自动纳入下拉选项中一员。"},{"example":<Demo4 />,"title":" 简易级联单选`Select`","code":"/**\n * @title 简易级联单选`Select`\n * @description 常用语城市级联的选择。\n */\n\nimport React, { Component } from 'react';\nimport Select from 'bee-select';\n\nconst Option = Select.Option;\n\nconst provinceData = ['Zhejiang', 'Jiangsu'];\nconst cityData = {\n  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],\n  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],\n};\n\nclass Demo4 extends Component {\n\tconstructor() {\n\t\tsuper();\n\t\tthis.state = {\n\t\t\tcities: cityData[provinceData[0]],\n      \t\tsecondCity: cityData[provinceData[0]][0],\n\t\t}\n\t\tthis.handleProvinceChange = this.handleProvinceChange.bind(this);\n\t\tthis.onSecondCityChange = this.onSecondCityChange.bind(this);\n\t}\n\thandleProvinceChange(value) {\n\t    this.setState({\n\t      cities: cityData[value],\n\t      secondCity: cityData[value][0],\n\t    });\n\t}\n\tonSecondCityChange(value) {\n\t    this.setState({\n\t      secondCity: value,\n\t    });\n\t}\n\trender() {\n\t    const provinceOptions = provinceData.map(province => <Option key={province}>{province}</Option>);\n\t    const cityOptions = this.state.cities.map(city => <Option key={city}>{city}</Option>);\n\t    return (\n\t      <div>\n\t        <Select defaultValue={provinceData[0]} style={{ width: 90,marginRight:6 }} onChange={this.handleProvinceChange}>\n\t          {provinceOptions}\n\t        </Select>\n\t        <Select value={this.state.secondCity} style={{ width: 90 }} onChange={this.onSecondCityChange}>\n\t          {cityOptions}\n\t        </Select>\n\t      </div>\n\t    );\n\t}\n}\n\n\n","desc":" 常用语城市级联的选择。"},{"example":<Demo5 />,"title":" 自定义自动填充单选`Select`","code":"/**\n * @title 自定义自动填充单选`Select`\n * @description 常用邮箱后缀自动填充。\n */\n\nimport React, { Component } from 'react';\nimport Select from 'bee-select';\n\nconst Option = Select.Option;\n\nclass Demo5 extends Component {\n\tconstructor() {\n\t\tsuper();\n\t\tthis.state = {\n\t\t\toptions: [],\n\t\t}\n\t\tthis.handleChange = this.handleChange.bind(this);\n\t}\n\thandleChange(value) {\n\t    let options;\n\t    if (!value || value.indexOf('@') >= 0) {\n\t      options = [];\n\t    } else {\n\t      options = ['gmail.com', '163.com', 'qq.com'].map((domain) => {\n\t        const email = `${value}@${domain}`;\n\t        return <Option key={email}>{email}</Option>;\n\t      });\n\t    }\n\t    this.setState({ options });\n\t}\n\t\n\trender() {\n\t    return (\n\t      <Select combobox\n\t        style={{ width: 200 }}\n\t        onChange={this.handleChange}\n\t        filterOption={false}\n\t        placeholder=\"Enter the account name\"\n\t      >\n\t        {this.state.options}\n\t      </Select>\n\t    );\n\t}\n}\n\n\n","desc":" 常用邮箱后缀自动填充。"},{"example":<Demo6 />,"title":" 搜索单选`Select`","code":"/**\n * @title 搜索单选`Select`\n * @description 从下拉选中，通过输入的值检索相应的选项。\n */\n\nimport React, { Component } from 'react';\nimport Select from 'bee-select';\n\nconst Option = Select.Option;\n\nclass Demo6 extends Component {\n\tconstructor() {\n\t\tsuper();\n\t\tthis.handleChange = this.handleChange.bind(this);\n\t}\n\thandleChange(value) {\n  \t\tconsole.log(`selected ${value}`);\n\t}\n\trender(){\n\t\treturn( \n\t\t\t<Select\n\t\t\t    showSearch\n\t\t\t    style={{ width: 200 }}\n\t\t\t    placeholder=\"Select a person\"\n\t\t\t    optionFilterProp=\"children\"\n\t\t\t    onChange={this.handleChange.bind(this)}\n\t\t\t  >\n\t\t\t    <Option value=\"jack\">Jack</Option>\n\t\t\t    <Option value=\"lucy\">Lucy</Option>\n\t\t\t    <Option value=\"tom\">Tom</Option>\n\t\t\t  </Select>\n\t\t)\n\t}\n}\n\n","desc":" 从下拉选中，通过输入的值检索相应的选项。"}]


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
