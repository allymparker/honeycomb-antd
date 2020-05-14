import React from "react";
import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
  Typography,
  Checkbox,
  Alert,
  Layout,
  Space,Radio
} from "antd";
import "./App.css";
const { Header, Footer, Content } = Layout;

const { Option } = Select;
const { Title } = Typography;

const App = () => (
  <>
        <Title level={2}>
          <img
            style={{
              width: 40,
              height: 40,
              marginRight: 12,
              verticalAlign: "bottom",
            }}
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            alt="Ant Design"
          />
          Ant Design
        </Title>

          <Form>
            <Form.Item label="数字输入框">
              <InputNumber min={1} max={10} defaultValue={3} />
              <span className="ant-form-text"> 台机器</span>
              <a href="https://ant.design">链接文字</a>
            </Form.Item>
            <Form.Item label="开关">
              <Switch defaultChecked />
            </Form.Item>
            <Form.Item label="滑动输入条">
              <Slider defaultValue={70} />
            </Form.Item>
            <Form.Item label="滑动输入条">
              <Checkbox defaultChecked />
              <Checkbox />
              <Checkbox disabled defaultChecked />
              <Checkbox disabled />
            </Form.Item>
            <Form.Item>
            <Radio.Group>
              <Radio value={1} defaultChecked>A</Radio>
              <Radio value={2} >B</Radio>
              <Radio value={3} defaultChecked disabled>C</Radio>
              <Radio value={4} disabled>D</Radio>
            </Radio.Group>
            </Form.Item>
            <Form.Item label="选择器">
              <Select defaultValue="lucy" style={{ width: 192 }}>
                <Option value="jack">jack</Option>
                <Option value="lucy">lucy</Option>
                <Option value="disabled" disabled>
                  disabled
                </Option>
                <Option value="yiminghe">yiminghe</Option>
              </Select>
            </Form.Item>
            <Form.Item label="日期选择框">
              <DatePicker />
            </Form.Item>

            <Form.Item wrapperCol={{ span: 8, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button style={{ marginLeft: 8 }}>Cancel</Button>
            </Form.Item>
          </Form>
          <Alert
            className=""
            message="Success Text"
            description="Success Description Success Description Success Description"
            type="success"
          />
          <Alert
            message="Info Text"
            description="Info Description Info Description Info Description Info Description"
            type="info"
          />
          <Alert
            message="Warning Text"
            description="Warning Description Warning Description Warning Description Warning Description"
            type="warning"
          />
          <Alert
            message="Error Text"
            description="Error Description Error Description Error Description Error Description"
            type="error"
          />
          <Alert message="Success Tips" type="success" showIcon />
          <Alert message="Informational Notes" type="info" showIcon />
          <Alert message="Warning" type="warning" showIcon closable />
          <Alert message="Error" type="error" showIcon />
          <Alert
            message="Success Tips"
            description="Detailed description and advice about successful copywriting."
            type="success"
            showIcon
          />
          <Alert
            message="Informational Notes"
            description="Additional description and information about copywriting."
            type="info"
            showIcon
          />
          <Alert
            message="Warning"
            description="This is a warning notice about copywriting."
            type="warning"
            showIcon
            closable
          />
          <Alert
            message="Error"
            description="This is an error message about copywriting."
            type="error"
            showIcon
          />
  </>
);

export default App;
