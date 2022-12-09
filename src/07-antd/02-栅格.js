import React from 'react'
import { Col, Row } from 'antd';

export default function App2() {
  return (
    <div>
      <Row>
        <Col span={12}>col-12</Col>
        <Col span={12}>col-12</Col>
      </Row>

      <Row>
      <Col span={8}>col-8</Col>
      <Col span={8} offset={8}>
        col-8
      </Col>
    </Row>
    </div>
  )
}
