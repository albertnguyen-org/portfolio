import React from 'react'
import styled from 'styled-components'
import { DEFAUTL_BR_PATH } from '../../../utils/constants';
import { ItemNewestPostType } from '../../../utils/types/blog.post.types'

const ContainerItemNewest = styled.div`
  height : 30%;
  width : 100%;
  display: flex;
  align-items: flex-end;
  background-size: 100% 100%;
  background-repeat: no-repeat;
`

const ViewInfo = styled.div`
  opacity: 0.5;
  height : 100%;
  width : 100%;
  display: flex;
  flex-direction: column;
`

const ImgPost = styled.img`
    height :100%;
    width : 200px;
`
interface ItemNewestPostProps {
  data: ItemNewestPostType;
}
const ItemCardPost: React.SFC<ItemNewestPostProps> = (props) => {
  return (
    <ContainerItemNewest>
        <ImgPost alt={`${props.data.id}_${props.data.title}`} src={!props.data.brPath ? DEFAUTL_BR_PATH : props.data.brPath}/>
      <ViewInfo className="card-post-view-info">
        <p className="newest-category post-newest">{props.data.type.toUpperCase()}</p>
        <p className="newest-title post-newest">{props.data.title}</p>
      </ViewInfo>
    </ContainerItemNewest>
  );
}

export default ItemCardPost;