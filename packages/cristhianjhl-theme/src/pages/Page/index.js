import React from 'react';
import { connect, Head } from "frontity";
import { Wrapper, Content, Title } from './Page.styles';

function Page({ state, libraries }) {
    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];
    const Html2React = libraries.html2react.Component;
    const { og_title, og_description } = state.source[data.type][data.id].yoast_head_json;

    return (
        <>
            <Head>
                <title>{og_title}</title>
                <meta name="description" content={og_description} />
            </Head>
            <Wrapper>
                <Title>{page.title.rendered}</Title>
                <Content>
                    <Html2React html={page.content.rendered} />
                </Content>
            </Wrapper>
        </>
    )
}

export default connect(Page);
