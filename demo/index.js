import {Col, Row} from 'bee-layout';
import {Panel} from 'bee-panel';
import Button from 'bee-button';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var DemoArray = [{"example":<Demo1 />,"title":" 不同尺寸单选`Select  、默认获","code":"/**\n * @title 不同尺寸单选`Select  、默认获取焦点autofocus`\n * @description `size`参数控制大小\n */\n\nimport React, { Component } from \"react\";\nimport { Select } from 'tinper-bee';\nimport ReactDOM from \"react-dom\";\nconst Option = Select.Option;\nconst OptGroup = Select.OptGroup;\n\nclass Demo1 extends Component {\n  handleChange = value => {\n    console.log(`selected ${value}`);\n  };  \n  handFocus = value => {\n    console.log(`获取焦点事件`);\n  };\n  onBlur = value => {\n    console.log(`onBlur`);\n  };\n\n  render() {\n    return (\n      <div>\n        <Select\n          size=\"lg\"\n          defaultValue=\"lucy\"\n          style={{ width: 200, marginRight: 6 }}\n          onChange={this.handleChange}\n          onFocus={this.handFocus}\n          onBlur={this.onBlur}\n          autofocus\n        >\n          <Option value=\"jack\">boyuzhou111</Option>\n          <Option value=\"lucy\">renhualiu</Option>\n          <Option value=\"disabled\" disabled>\n            Disabled\n          </Option>\n          <Option value=\"yiminghe\">yuzhao</Option>\n        </Select>\n        <Select\n          defaultValue=\"lucy\"\n          style={{ width: 200, marginRight: 6 }}\n          onChange={this.handleChange}\n        >\n          <Option value=\"jack\">boyuzhou</Option>\n          <Option value=\"lucy\">renhualiu</Option>\n          <Option value=\"disabled\" disabled>\n            Disabled\n          </Option>\n          <Option value=\"yiminghe\">yuzhao</Option>\n        </Select>\n        <Select\n          size=\"sm\"\n          defaultValue=\"lucy\"\n          style={{ width: 200 }}\n          onChange={this.handleChange}\n        >\n          <Option value=\"jack\">boyuzhou</Option>\n          <Option value=\"lucy\">renhualiu</Option>\n          <Option value=\"disabled\" disabled>\n            Disabled\n          </Option>\n          <Option value=\"yiminghe\">yuzhao</Option>\n        </Select>\n      </div>\n    );\n  }\n}\n\n\n","desc":" `size`参数控制大小"}]


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
            <Col md={12}>
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
