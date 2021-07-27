import React from 'react';
import { connect, Head } from "frontity";
import Image from "@frontity/components/image";
import Link from "@frontity/components/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/es";
import { Wrapper, List, ListItem, ListThumbnail, ListContent } from './Archive.styles';
dayjs.locale('es');
dayjs.extend(relativeTime);

function Archive({ state, libraries }) {
    const data = state.source.get(state.router.link);
    
    // const formattedDate = dayjs().to(dayjs(post.date));
    // const formattedDate = dayjs(post.date).format("DD/MM/YYYY");

    return (
        <Wrapper>
            <List>
            {
                data.items.map((item) => {
                    const post = state.source[item.type][item.id];
                    const author = state.source.author[post.author];
                    const { id, yoast_head_json: { og_image }, title: { rendered: title }, excerpt: { rendered: excerpt } = "", date, link } = post;
                    const date_for_humans = dayjs().to(dayjs(date));
                    const Html2React = libraries.html2react.Component;
                    console.log(post);
                    return (
                        <ListItem key={`archive-${id}`}>
                            <ListThumbnail>
                                <Image src={og_image[0].url} alt={og_image[0].alt} />
                            </ListThumbnail>
                            <ListContent>
                                <h4>{title}</h4>
                                {
                                    author && <span><Link title={author.description} link={author.link}>@{author.name}</Link></span>
                                }
                                <span>Publicado {date_for_humans}</span>
                                {excerpt 
                                ? <Html2React html={excerpt} />
                                : <p><Html2React html={post.yoast_head_json.description} /></p>}
                                <Link className="view-url" link={link}>Ver Publicación &rarr;</Link>
                            </ListContent>
                        </ListItem>
                    )
                })
            }
            </List>
        </Wrapper>
    )
}

export default connect(Archive);
