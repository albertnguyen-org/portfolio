import React, { Component } from 'react'
import styled from 'styled-components'
import { ItemNewestPostType } from '../../../utils/types/blog.post.types'
import ItemNewestPost from "../../../components/blog.components/Blog.Newest.Post"
import ItemCardPost from "../../../components/blog.components/Blog.Card.Post";
import "./style.scss";

const SCContainer = styled.div`
  height: auto;
  margin: 0px 15%;
  top: 100px;
  width: 70%;
  position: absolute;
`
const SCContainerHeadPosts = styled.div`
  height : 400px;
  width : 100%;
  display: flex; 
  flex-direction: row;
`

const HeadLeftCol = styled.div`
  width : 50%;
  height: 100%;
  display: flex;
  justify-content:center;
  align-item:center;
`

const HeadRightCol = styled.div`
  width: 50%;
  height: 100%;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 0px 0px 10px;
`

interface StateTypes {
  newestData: ItemNewestPostType
}
class HeadPosts extends Component<{}, StateTypes>{
  constructor(props: {}) {
    super(props);
    this.state = {
      newestData: {
        id: "post_01",
        title: "Newest post Newest post Newest post Newest post Newest post",
        desc: "Newest post description",
        date: "21/12/2019",
        author: "Admin",
        type: "post",
        status: "newest",
        path: "",
        brPath: ""
      }
    }
  }

  
  render() {
    const { newestData } = this.state;
    return (
      <SCContainerHeadPosts>
        <HeadLeftCol>
          <ItemNewestPost data={newestData} />
        </HeadLeftCol>
        <HeadRightCol>
          <ItemCardPost data={newestData} />
          <ItemCardPost data={newestData} />
          <ItemCardPost data={newestData} />
        </HeadRightCol>
      </SCContainerHeadPosts>
    )
  }
}

export default class BlogContent extends Component {
  render() {
    return (
      <SCContainer>
        <HeadPosts />
      </SCContainer>
    )
  }
}