import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Wrapper, Content } from "./Header.styles";

function Header() {
    return (
        <Content>
            <Wrapper>
                <Navbar />
            </Wrapper>
        </Content>
    )
}

export default Header;
