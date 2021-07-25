import React from 'react';
import Link from "@frontity/components/link";
import Image from "@frontity/components/image";
import { connect, Head } from "frontity";
import { Wrapper, Information, Content, Title, Thumbnail } from './Proyecto.styles';

function Proyecto({ state, libraries }) {
    const data = state.source.get(state.router.link);
    const proyecto = state.source[data.type][data.id];
    const Html2React = libraries.html2react.Component;
    const { github_repo, live_demo } = state.source[data.type][data.id].acf;
    const { og_title, og_description, og_image } = state.source[data.type][data.id].yoast_head_json;

    return (
        <>
            <Head>
                <title>{og_title}</title>
                <meta name="description" content={og_description} />
            </Head>
            <Wrapper>
                <Title>{proyecto.title.rendered}</Title>
                <Thumbnail>
                    <Image src={og_image[0]["url"]} alt={og_image[0]["alt"]} />
                </Thumbnail>
                <Information>
                    <Link link={live_demo}>Demo del Proyecto &rarr;</Link>
                    <Link link={github_repo}>Repositorio del Proyecto &rarr;</Link>
                </Information>
                <Content>
                    <Html2React html={proyecto.content.rendered} />
                </Content>
            </Wrapper>
        </>
    )
}

export default connect(Proyecto);
