import React from "react";
import styled from "styled-components";
import BlogHeader from "../../components/blog.components/Blog.Header";
import BlogContent from "../Contents/Blog";
const StyledContainerBlog = styled.div`
  flex-wrap: nowrap;
  padding: 0px;
  margin : 0px;
`;


export default class BlogPage extends React.Component {
  render() {
    return (
      <StyledContainerBlog id="container-blog">
        <BlogHeader />
        <BlogContent>Hello my friends</BlogContent>
      </StyledContainerBlog>
    );
  }
}
