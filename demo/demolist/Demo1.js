/**
 * @title 不同尺寸单选`Select  、默认获取焦点autofocus`
 * @description `size`参数控制大小
 */

import React, { Component } from "react";
import Select from "../../src";
import ReactDOM from "react-dom";
const Option = Select.Option;
const OptGroup = Select.OptGroup;

class Demo1 extends Component {
  handleChange = value => {
    console.log(`selected ${value}`);
  };  
  handFocus = value => {
    console.log(`获取焦点事件`);
  };
  onBlur = value => {
    console.log(`onBlur`);
  };

  render() {
    return (
      <div>
        <Select
          size="lg"
          defaultValue="lucy"
          style={{ width: 200, marginRight: 6 }}
          onChange={this.handleChange}
          onFocus={this.handFocus}
          onBlur={this.onBlur}
          autofocus
        >
          <Option value="jack">boyuzhou111</Option>
          <Option value="lucy">renhualiu</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="yiminghe">yuzhao</Option>
        </Select>
        <Select
          defaultValue="lucy"
          style={{ width: 200, marginRight: 6 }}
          onChange={this.handleChange}
        >
          <Option value="jack">boyuzhou</Option>
          <Option value="lucy">renhualiu</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="yiminghe">yuzhao</Option>
        </Select>
        <Select
          size="sm"
          defaultValue="lucy"
          style={{ width: 200 }}
          onChange={this.handleChange}
        >
          <Option value="jack">boyuzhou</Option>
          <Option value="lucy">renhualiu</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="yiminghe">yuzhao</Option>
        </Select>
      </div>
    );
  }
}

export default Demo1;
