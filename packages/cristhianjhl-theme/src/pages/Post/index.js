import React from 'react';
import { connect, Head } from "frontity";
import Image from "@frontity/components/image";
import Link from "@frontity/components/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Wrapper, Information, Content, Title, Thumbnail } from './Post.styles';
dayjs.extend(relativeTime)

function Post({ state, libraries }) {
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    const author = state.source.author[post.author];
    // const formattedDate = dayjs(post.date).format("DD/MM/YYYY");
    const formattedDate = dayjs().to(dayjs(post.date));
    const Html2React = libraries.html2react.Component;

    const { title: { rendered: title }, excerpt: { rendered: excerpt }, yoast_head_json: { og_image }, content: { rendered: content },  } = post;

    const { link, name, description } = author;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={excerpt} />
            </Head>
            <Wrapper>
                <Title>{title}</Title>
                <Thumbnail>
                    <Image src={og_image[0].url} alt={og_image[0].alt} />
                </Thumbnail>
                <Information>
                    <p>Publicado {formattedDate}</p>
                    <Link link={link} title={description}>@{name}</Link>
                </Information>
                <Content>
                    <Html2React html={content} />
                </Content>
            </Wrapper>
        </>
    )
}

export default connect(Post);
