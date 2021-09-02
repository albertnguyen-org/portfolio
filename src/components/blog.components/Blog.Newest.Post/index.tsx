import React from 'react';
import styled from 'styled-components';
import { DEFAUTL_BR_PATH } from '../../../utils/constants';
import { ItemNewestPostType } from '../../../utils/types/blog.post.types'

const ContainerItemNewest = styled.div`
  height : 100%;
  width : 100%;
  display: flex;
  align-items: flex-end;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: url(${DEFAUTL_BR_PATH});  
`

const ViewLabelOverlayNewest = styled.div`
  opacity: 0.5;
  height : 50%;
  width : 100%;
  display: flex;
  flex-direction: column;
  background-color : black;
`
const ViewAuthorAndDate = styled.div`
    display: flex;
    flex-direction: row;
    width : 70%;
`

interface ItemNewestPostProps {
  data: ItemNewestPostType;
}
const ItemNewestPost: React.SFC<ItemNewestPostProps> = (props) => {
  return (
    <ContainerItemNewest>
      <ViewLabelOverlayNewest>
        <p className="newest-category post-newest">{props.data.type.toUpperCase()}</p>
        <p className="newest-title post-newest">{props.data.title}</p>
        <ViewAuthorAndDate>
          <p className="newest-author post-newest">{props.data.author}</p>
          <p className="newest-post-date post-newest">{props.data.date}</p>
        </ViewAuthorAndDate>
      </ViewLabelOverlayNewest>
    </ContainerItemNewest>
  );
}

export default ItemNewestPost;