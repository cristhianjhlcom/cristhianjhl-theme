import React from 'react';
import { connect } from "frontity";
import Link from "@frontity/components/link";
import Image from "@frontity/components/image";
import { Wrapper, List, ListHeader, ListContainer, ListCard, ListImagePreview, ListCardBody, ListCardTitle } from './Loop.styles';

function Loop({ data = [], libraries, state }) {
    const Html2React = libraries.html2react.Component;

    console.log(data.items);

    return (
        <List backgroundColor="var(--white)">
            <Wrapper>
                <ListHeader>
                    <h4>proyectos</h4>
                    <Link link="/proyecto">Mirar Todos los Proyectos &rarr;</Link>
                </ListHeader>
                <ListContainer>
                    {
                        data.isReady
                        ? data.items.map((item) => {
                            const { yoast_head_json: { og_image }, title: { rendered: title }, content: { rendered: content }, link  } = state.source[item.type][item.id];

                            
                            return (
                                <ListCard key={`posts-${item.id}`}>
                                    <ListImagePreview>
                                        <Image src={og_image[0].url} alt={og_image[0].alt} />
                                    </ListImagePreview>
                                    <ListCardBody>
                                        <ListCardTitle>{title}</ListCardTitle>
                                        <Html2React html="<p>EXCERPT ipsum dolor sit amet, consectetur adipisicing elit. Sit explicabo dolor a qui hic esse non ratione iure vero cumque.</p>" />
                                        <Link link={link}>Ver Proyecto &rarr;</Link>
                                    </ListCardBody>
                                </ListCard>
                            )
                        })
                        : <p>Cargando...</p>
                    }
                </ListContainer>
            </Wrapper>
        </List>
    )
}

export default connect(Loop);
