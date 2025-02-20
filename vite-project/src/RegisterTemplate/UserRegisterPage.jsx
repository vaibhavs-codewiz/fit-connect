import React, { useState } from 'react';
import {
    AutoComplete,
    Button,
    Cascader,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Row,
    Select,
} from 'antd';

const { Option } = Select;

const preferredGymTypes = ["Yoga", "Strength Training", "Cardio"];

const formItemLayout = {
    labelCol: { xs: { span: 24 }, sm: { span: 8 } },
    wrapperCol: { xs: { span: 24 }, sm: { span: 16 } },
};

const tailFormItemLayout = {
    wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 } },
};

const UserRegisterPage = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Form Submitted:', values);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <Form
                {...formItemLayout}
                form={form}
                name="user_register"
                onFinish={onFinish}
                style={{ maxWidth: 600, background: "#f9f9f9", padding: "20px", borderRadius: "10px" }}
                scrollToFirstError
            >
                {/* Full Name */}
                <Form.Item
                    name="fullName"
                    label="Full Name"
                    rules={[{ required: true, message: 'Please enter your full name!' }]}
                >
                    <Input />
                </Form.Item>

                {/* Address */}
                <Form.Item
                    name="address"
                    label="Address"
                    rules={[{ required: true, message: 'Please enter your address!' }]}
                >
                    <Input.TextArea rows={2} />
                </Form.Item>

                {/* Gender */}
                <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[{ required: true, message: 'Please select your gender!' }]}
                >
                    <Select placeholder="Select gender">
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                        <Option value="other">Other</Option>
                    </Select>
                </Form.Item>

                {/* Email */}
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        { type: 'email', message: 'Invalid E-mail!' },
                        { required: true, message: 'Please enter your E-mail!' },
                    ]}
                >
                    <Input />
                </Form.Item>

                {/* Password */}
                <Form.Item
                    name="password"
                    label="Password"
                    rules={[{ required: true, message: 'Please enter your password!' }]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                {/* Confirm Password */}
                <Form.Item
                    name="confirmPassword"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        { required: true, message: 'Please confirm your password!' },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                return value && getFieldValue('password') === value
                                    ? Promise.resolve()
                                    : Promise.reject(new Error('Passwords do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                {/* Height */}
                <Form.Item
                    name="height"
                    label="Height (cm)"
                    rules={[{ required: true, message: 'Please enter your height!' }]}
                >
                    <InputNumber style={{ width: "100%" }} min={50} max={250} />
                </Form.Item>

                {/* Weight */}
                <Form.Item
                    name="weight"
                    label="Weight (kg)"
                    rules={[{ required: true, message: 'Please enter your weight!' }]}
                >
                    <InputNumber style={{ width: "100%" }} min={20} max={300} />
                </Form.Item>

                {/* Preferred Gym Type */}
                <Form.Item
                    name="preferredGymType"
                    label="Preferred Gym Type"
                    rules={[{ required: true, message: 'Please select at least one option!' }]}
                >
                    <Checkbox.Group>
                        <Row>
                            {preferredGymTypes.map((type) => (
                                <Col span={8} key={type}>
                                    <Checkbox value={type}>{type}</Checkbox>
                                </Col>
                            ))}
                        </Row>
                    </Checkbox.Group>
                </Form.Item>

                {/* Terms & Agreement */}
                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject(new Error('You must accept the agreement')),
                        },
                    ]}
                    {...tailFormItemLayout}
                >
                    <Checkbox>I agree to the <a href="#">terms and conditions</a></Checkbox>
                </Form.Item>

                {/* Submit Button */}
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">Register</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default UserRegisterPage;
