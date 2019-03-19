import {Col, Row} from 'bee-layout';
import {Panel} from 'bee-panel';
import Button from 'bee-button';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var Demo7 = require("./demolist/Demo7");var Demo8 = require("./demolist/Demo8");var Demo9 = require("./demolist/Demo9");var Demo10 = require("./demolist/Demo10");var DemoArray = [{"example":<Demo1 />,"title":" 基本使用","code":"/**\r\n * @title 基本使用\r\n * @description `disabled`参数设置是否禁用，`size`参数控制大小\r\n */\r\n\r\nimport React, { Component } from \"react\";\r\nimport { Select } from 'tinper-bee';\r\nimport ReactDOM from \"react-dom\";\r\nconst Option = Select.Option;\r\nconst OptGroup = Select.OptGroup;\r\n\r\nclass Demo1 extends Component {\r\n  handleChange = value => {\r\n    console.log(`selected ${value}`);\r\n  };  \r\n\r\n  render() {\r\n    return (\r\n      <div>\r\n        <Select\r\n          defaultValue=\"all\"\r\n          style={{ width: 200, marginRight: 6 }}\r\n          onChange={this.handleChange}\r\n          showSearch={true}\r\n        >\r\n          <Option value=\"all\">全部</Option>\r\n          <Option value=\"confirming\">待确认</Option>\r\n          <Option value=\"executing\">执行中</Option>\r\n          <Option value=\"completed\" disabled>\r\n            已办结\r\n          </Option>\r\n          <Option value=\"termination\">终止</Option>\r\n        </Select>\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\n\r\n","desc":" `disabled`参数设置是否禁用，`size`参数控制大小"},{"example":<Demo2 />,"title":" 常用多选","code":"/**\r\n * @title 常用多选\r\n * @description Children自定义数据列表,注意：Children已经定义到全局，此处显示为注释例子，其他例子用到Children变量均以此方式定义。\r\n */\r\n\r\nimport React, { Component } from \"react\";\r\nimport { Select } from 'tinper-bee';\r\n\r\nconst Option = Select.Option;\r\nconst OptGroup = Select.OptGroup;\r\n\r\nconst Children = [];\r\nfor (let i = 10; i < 36; i++) {\r\n  Children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);\r\n}\r\n\r\nclass Demo2 extends Component {\r\n  handleChange = value => {\r\n    console.log(`selected ${value}`);\r\n  };\r\n  render() {\r\n    return (\r\n      <Select\r\n        multiple\r\n        style={{ width: '97%' }}\r\n        searchPlaceholder=\"标签模式\"\r\n        onChange={this.handleChange}\r\n      >\r\n        {Children}\r\n      </Select>\r\n    );\r\n  }\r\n}\r\n\r\n\r\n","desc":" Children自定义数据列表,注意：Children已经定义到全局，此处显示为注释例子，其他例子用到Children变量均以此方式定义。"},{"example":<Demo3 />,"title":" 自定义选项多选`Select`","code":"/**\r\n * @title 自定义选项多选`Select`\r\n * @description 用户在框内输入自定义内容，Select将输入的内容自动纳入下拉选项中一员。\r\n */\r\n\r\nimport React, { Component } from \"react\";\r\nimport { Select } from 'tinper-bee';\r\n\r\nconst Option = Select.Option;\r\n\r\nconst Children = [];\r\nfor (let i = 10; i < 36; i++) {\r\n  Children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);\r\n}\r\n\r\nclass Demo3 extends Component {\r\n  handleChange = value => {\r\n    console.log(`selected ${value}`);\r\n  };\r\n  scrollToEnd = () => {\r\n    console.log(\"软加载\");\r\n  };\r\n  render() {\r\n    return (\r\n      <Select\r\n        tags\r\n        style={{ width: \"97%\" }}\r\n        searchPlaceholder=\"标签模式\"\r\n        scrollToEnd={this.scrollToEnd}\r\n        onChange={this.handleChange}\r\n      >\r\n        {Children}\r\n      </Select>\r\n    );\r\n  }\r\n}\r\n\r\n\r\n","desc":" 用户在框内输入自定义内容，Select将输入的内容自动纳入下拉选项中一员。"},{"example":<Demo4 />,"title":" 简易级联单选`Select`","code":"/**\r\n * @title 简易级联单选`Select`\r\n * @description 常用语城市级联的选择。\r\n */\r\n\r\nimport React, { Component } from \"react\";\r\nimport { Select } from 'tinper-bee';\r\n\r\nconst Option = Select.Option;\r\n\r\nconst provinceData = [\"Zhejiang\", \"Jiangsu\"];\r\nconst cityData = {\r\n  Zhejiang: [\"Hangzhou\", \"Ningbo\", \"Wenzhou\"],\r\n  Jiangsu: [\"Nanjing\", \"Suzhou\", \"Zhenjiang\"]\r\n};\r\n\r\nclass Demo4 extends Component {\r\n  constructor(props) {\r\n    super(props);\r\n    this.state = {\r\n      cities: cityData[provinceData[0]],\r\n      secondCity: cityData[provinceData[0]][0]\r\n    };\r\n  }\r\n  handleProvinceChange = value => {\r\n    this.setState({\r\n      cities: cityData[value],\r\n      secondCity: cityData[value][0]\r\n    });\r\n  };\r\n  onSecondCityChange = value => {\r\n    this.setState({\r\n      secondCity: value\r\n    });\r\n  };\r\n  render() {\r\n    const provinceOptions = provinceData.map(province => (\r\n      <Option key={province}>{province}</Option>\r\n    ));\r\n    const cityOptions = this.state.cities.map(city => (\r\n      <Option key={city}>{city}</Option>\r\n    ));\r\n    return (\r\n      <div>\r\n        <Select\r\n          defaultValue={provinceData[0]}\r\n          style={{ width: 90, marginRight: 6 }}\r\n          onChange={this.handleProvinceChange}\r\n        >\r\n          {provinceOptions}\r\n        </Select>\r\n        <Select\r\n          value={this.state.secondCity}\r\n          style={{ width: 90 }}\r\n          onChange={this.onSecondCityChange}\r\n        >\r\n          {cityOptions}\r\n        </Select>\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\n\r\n","desc":" 常用语城市级联的选择。"},{"example":<Demo5 />,"title":" 自定义自动填充单选`Select`","code":"/**\r\n * @title 自定义自动填充单选`Select`\r\n * @description 常用邮箱后缀自动填充。\r\n */\r\n\r\nimport React, { Component } from \"react\";\r\nimport { Select } from 'tinper-bee';\r\n\r\nconst Option = Select.Option;\r\n\r\nclass Demo5 extends Component {\r\n  constructor(props) {\r\n    super(props);\r\n    this.state = {\r\n      options: []\r\n    };\r\n  }\r\n  handleChange = value => {\r\n    let options;\r\n    if (!value || value.indexOf(\"@\") >= 0) {\r\n      options = [];\r\n    } else {\r\n      options = [\"gmail.com\", \"163.com\", \"qq.com\"].map(domain => {\r\n        const email = `${value}@${domain}`;\r\n        return <Option key={email}>{email}</Option>;\r\n      });\r\n    }\r\n    this.setState({ options });\r\n  };\r\n\r\n  render() {\r\n    return (\r\n      <Select\r\n        combobox\r\n        style={{ width: 200 }}\r\n        onChange={this.handleChange}\r\n        filterOption={false}\r\n        placeholder=\"Enter the account name\"\r\n      >\r\n        {this.state.options}\r\n      </Select>\r\n    );\r\n  }\r\n}\r\n\r\n\r\n","desc":" 常用邮箱后缀自动填充。"},{"example":<Demo6 />,"title":" 搜索单选`Select`","code":"/**\r\n * @title 搜索单选`Select`\r\n * @description 从下拉选中，获取当前选中自定义对象item data\r\n */\r\nimport React, { Component } from \"react\";\r\nimport { Select } from 'tinper-bee';\r\n\r\nconst Option = Select.Option;\r\n\r\nconst dataList = [\r\n  {key:\"1\",value:\"Jack\",label:\"Jack\"},\r\n  {key:\"2\",value:\"lucy\",label:\"lucy\"},\r\n  {key:\"3\",value:\"tom\",label:\"tom\"}\r\n]\r\n\r\nclass Demo6 extends Component {\r\n\r\n  constructor(props) {\r\n    super(props);\r\n  }\r\n\r\n  /**\r\n   * 获取选中对象数据\r\n   */\r\n  onSelect = (value,{props:{item}}) => {\r\n    console.log(`selected ${value}`);\r\n    console.log(`selected item `,item);\r\n  };\r\n\r\n  render() {\r\n    return (\r\n      <Select\r\n        showSearch\r\n        style={{ width: 200 }}\r\n        placeholder=\"Select a person\"\r\n        optionFilterProp=\"children\"\r\n        onSelect={this.onSelect}\r\n        onChange={this.handleChange}\r\n      >\r\n        {\r\n          dataList.map(da=><Option key={da.key} value={da.value} item={da} >{da.label}</Option>)\r\n        }\r\n      </Select>\r\n    );\r\n  }\r\n}\r\n\r\n\r\n","desc":" 从下拉选中，获取当前选中自定义对象item data"},{"example":<Demo7 />,"title":" 设置data数组对象来自动生成option","code":"/**\r\n * @title 设置data数组对象来自动生成option\r\n * @description 必须设置key，value。根据需要设置disabed\r\n */\r\n\r\nimport React, { Component } from \"react\";\r\nimport { Select } from 'tinper-bee';\r\n\r\nconst Option = Select.Option;\r\n\r\nlet selectDataSource = [\r\n  {\r\n    key: \"张三\",\r\n    value: \"zhangsan\"\r\n  },\r\n  {\r\n    key: \"李四\",\r\n    value: \"lisi\"\r\n  },\r\n  {\r\n    key: \"王五\",\r\n    value: \"wangwu\"\r\n  }\r\n];\r\n\r\nclass Demo7 extends Component {\r\n  constructor(props) {\r\n    super(props);\r\n    this.state = {\r\n      DataSource: [\r\n        {\r\n          key: \"其他数据\",\r\n          value: \"qita\"\r\n        }\r\n      ]\r\n    };\r\n  }\r\n  handleChange = value => {\r\n    if (value) {\r\n      this.setState({\r\n        DataSource: [\r\n          {\r\n            key: \"张三三\",\r\n            value: \"zhangsansan\",\r\n            disabled: true\r\n          },\r\n          {\r\n            key: \"李四四\",\r\n            value: \"lisisi\"\r\n          },\r\n          {\r\n            key: \"王五五\",\r\n            value: \"wangwuwu\"\r\n          }\r\n        ]\r\n      });\r\n    }\r\n  };\r\n\r\n  render() {\r\n    return (\r\n      <div>\r\n        <Select\r\n          style={{ width: 200 }}\r\n          placeholder=\"Select a person\"\r\n          onChange={this.handleChange}\r\n          data={selectDataSource}\r\n        />\r\n        <Select\r\n          style={{ width: 200, marginLeft: \"5px\" }}\r\n          placeholder=\"Select a person\"\r\n          data={this.state.DataSource}\r\n        />\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\n\r\n","desc":" 必须设置key，value。根据需要设置disabed"},{"example":<Demo8 />,"title":" 默认设置下拉框获取焦点事件 `默认获取焦点autofocu","code":"/**\r\n * @title 默认设置下拉框获取焦点事件 `默认获取焦点autofocus`\r\n * @description `autofocus`参数控制是否需要获取焦点。\r\n * 同时暴露两个api  onFocus、onBlur 返回当前选中的数据\r\n */\r\n\r\nimport React, { Component } from \"react\";\r\nimport { Select } from 'tinper-bee';\r\nimport ReactDOM from \"react-dom\";\r\nconst Option = Select.Option;\r\nconst OptGroup = Select.OptGroup;\r\n\r\nclass Demo8 extends Component {\r\n  handleChange = value => {\r\n    console.log(`selected ${value}`);\r\n  };  \r\n  handFocus = value => {\r\n    console.log(`获取焦点事件`);\r\n  };\r\n  onBlur = value => {\r\n    console.log(`onBlur`);\r\n  };\r\n\r\n  render() {\r\n    return (\r\n      <div>\r\n        <Select\r\n          defaultValue=\"all\"\r\n          style={{ width: 200, marginRight: 6 }}\r\n          onChange={this.handleChange}\r\n          onFocus={this.handFocus}\r\n          onBlur={this.onBlur}\r\n          autofocus\r\n        >\r\n          <Option value=\"all\">全部</Option>\r\n          <Option value=\"confirming\">待确认</Option>\r\n          <Option value=\"executing\">执行中</Option>\r\n          <Option value=\"completed\" disabled>\r\n            已办结\r\n          </Option>\r\n          <Option value=\"termination\">终止</Option>\r\n        </Select>\r\n        <Select\r\n          defaultValue=\"confirming\"\r\n          style={{ width: 200, marginRight: 6 }}\r\n          onChange={this.handleChange}\r\n        >\r\n          <Option value=\"all\">全部</Option>\r\n          <Option value=\"confirming\">待确认</Option>\r\n          <Option value=\"executing\">执行中</Option>\r\n          <Option value=\"completed\" disabled>\r\n            已办结\r\n          </Option>\r\n          <Option value=\"termination\">终止</Option>\r\n        </Select>\r\n        \r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\n\r\n","desc":" `autofocus`参数控制是否需要获取焦点。"},{"example":<Demo9 />,"title":" 动态渲染Option的多选","code":"/**\r\n * @title 动态渲染Option的多选\r\n * @description Option标签与Children自定义数据列表组合的渲染方式\r\n */\r\n\r\nimport React, { Component } from \"react\";\r\nimport { Select } from 'tinper-bee';\r\n\r\nconst Option = Select.Option;\r\nconst OptGroup = Select.OptGroup;\r\n\r\nconst Children = ['a10','b11','c12','d13','e14','f15'];\r\n\r\nclass Demo9 extends Component {\r\n  handleChange = value => {\r\n    console.log(`selected ${value}`);\r\n  };\r\n  render() {\r\n    return (\r\n      <Select\r\n        multiple\r\n        style={{ width: \"97%\" }}\r\n        searchPlaceholder=\"标签模式\"\r\n        onChange={this.handleChange}\r\n      >\r\n        <Option key='first'>first</Option>\r\n        {Children.map((value) => {\r\n          return <Option key={value}>{value}</Option>\r\n        })}\r\n      </Select>\r\n    );\r\n  }\r\n}\r\n\r\n\r\n","desc":" Option标签与Children自定义数据列表组合的渲染方式"},{"example":<Demo10 />,"title":" 受控的`Select`","code":"/**\r\n * @title 受控的`Select`\r\n * @description `open`参数控制下拉框展开收起\r\n */\r\n\r\nimport React, { Component } from \"react\";\r\nimport { Select, Button } from 'tinper-bee';\r\n\nimport ReactDOM from \"react-dom\";\r\nconst Option = Select.Option;\r\nconst OptGroup = Select.OptGroup;\r\n\r\nclass Demo10 extends Component {\r\n    constructor(props) {\r\n\t\tsuper(props);\r\n\t\tthis.state = {\r\n      open: true\r\n\t\t}\r\n\t}\r\n\tchangeOpen=()=> {\r\n    this.setState({open:!this.state.open});\r\n\t}\r\n\r\n  render() {\r\n    return (\r\n      <div>\r\n        <Button onClick={this.changeOpen.bind(this)} style={{marginRight:20 + 'px'}}>change select</Button>\r\n        <Select\r\n          defaultValue=\"lucy\"\r\n          style={{ width: 200, marginRight: 6 }}\r\n          onChange={this.changeOpen}\r\n          open={this.state.open}\r\n        >\r\n          <Option value=\"jack\">boyuzhou111</Option>\r\n          <Option value=\"lucy\">renhualiu</Option>\r\n          <Option value=\"disabled\" disabled>\r\n            Disabled\r\n          </Option>\r\n          <Option value=\"yiminghe\">yuzhao</Option>\r\n        </Select>\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\n\r\n","desc":" `open`参数控制下拉框展开收起"}]


class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({open: !this.state.open})
    }

    render() {
        const {title, example, code, desc, scss_code} = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const header = (
            <div>
                {example}
                <Button style={{"marginTop": "10px"}} shape="block" onClick={this.handleClick}>
                    {caret}
                    {text}
                </Button>
            </div>
        );
        return (
            <Col md={12} id={title.trim()} >
                <h3>{title}</h3>
                <p>{desc}</p>
                <Panel collapsible headerContent expanded={this.state.open} colors='bordered' header={header}
                       footerStyle={{padding: 0}}>
                    <pre><code className="hljs javascript">{code}</code></pre>
                    {!!scss_code ? <pre><code className="hljs css">{scss_code}</code></pre> : null}
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Row>
                {DemoArray.map((child, index) => {

                    return (
                        <Demo example={child.example} title={child.title} code={child.code} scss_code={child.scss_code}
                              desc={child.desc} key={index}/>
                    )

                })}
            </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
