import React from 'react';
import Link from "@frontity/components/link";
import { Container, Wrapper, Content } from "./Footer.styles";

function Footer() {
    return (
        <Container>
            <Wrapper>
                <Content>
                    <h4>Cristhian</h4>
                    <p>Este sitio web esta hecho en <a href="https://frontity.org/" target="_blank" rel="noopener noreferrer">Frontity.org</a>. Desplegado en <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">Vercel.com</a> y las ilustraciones son de <a href="https://undraw.co/" target="_blank" rel="noopener noreferrer">unDraw.co</a></p>
                </Content>
                <Content>
                    <h4>Comunidad</h4>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/cristhianjhl/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="https://github.com/cristhianjhlweb/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    </ul>
                </Content>
                <Content>
                    <h4>Recursos</h4>
                    <ul>
                        <li><Link link="/politica-de-privacidad/">Política de Privacidad</Link></li>
                        <li><Link link="/politica-de-cookies/">Política de Cookies</Link></li>
                        <li><Link link="/quien-soy/">Quien Soy?</Link></li>
                    </ul>
                </Content>
            </Wrapper>
        </Container>
    )
}

export default Footer;
