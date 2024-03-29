import React from 'react';
import { Link } from 'react-router-dom';
import { Result, Button } from "antd";
import { PATH_ROOT } from "../../utils/paths";
import styled from 'styled-components'

const StyledContainerResult = styled.div`
    height: 100% !important;
    width: 100% !important;
    position: absolute;
    display: flex !important;
    align-items: center;
    justify-content: center
`

const NotFound: React.FC = () => {
    return (
        <StyledContainerResult>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={
                    <Link to={PATH_ROOT}>
                        <Button type="primary">Back Home</Button>
                    </Link>
                }
            />
        </StyledContainerResult>
    );
}

export {
    NotFound
}