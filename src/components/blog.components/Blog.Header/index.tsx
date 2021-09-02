import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import signature from "../../../assets/imgs/signature.png";
import BlogMenu from "../Blog.Menu";
import SocialView from "../../SocialView";

const SCImg = styled.img`
  height: auto;
  width: 100%;
`;

const SCRow = styled(Row)`
    display: flex;
    position: fixed;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding : 0px 2%;
    width : 100%;
    z-index : 11;
`

export default class BlogHeader extends Component {
  render() {
    return (
      <SCRow>
        {/* Menu */}
        <Col md={4} xs={4}>
          <BlogMenu/>
        </Col>
        {/* Logo */}
        <Col md={6} xs={6}>
          <SCImg alt="signature" src={signature} />
        </Col>
        {/* Social View */}
        <Col md={14} xs={14}>
          <SocialView />
        </Col>
      </SCRow>
    );
  }
}
