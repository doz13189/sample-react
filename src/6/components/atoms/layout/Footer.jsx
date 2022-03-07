
import { Link } from "react-router-dom"
import styled from "styled-components"

export const Footer = () => {
    return (
        <SHeader>
            <SLink to="/">home</SLink>
            <SLink to="/users">users</SLink>
        </SHeader>
    )
}

const SHeader = styled.header`
background-color: #11999el;
color: #fff;
text-align: center;
padding: 8px 0;
`

const SLink = styled(Link)`
padding: 0 8px;

`