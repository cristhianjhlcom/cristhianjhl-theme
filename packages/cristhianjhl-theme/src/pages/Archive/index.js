import React from "react";
import { connect, Head } from "frontity";
import Image from "@frontity/components/image";
import Link from "@frontity/components/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/es";
import {
  Wrapper,
  List,
  ListItem,
  ListThumbnail,
  ListContent,
  Title,
  Category,
  Author,
  Text,
  Published,
  Information,
} from "./Archive.styles";
dayjs.locale("es");
dayjs.extend(relativeTime);

function Archive({ state, libraries }) {
  const data = state.source.get(state.router.link);

  // const formattedDate = dayjs().to(dayjs(post.date));
  // const formattedDate = dayjs(post.date).format("DD/MM/YYYY");

  return (
    <Wrapper>
      <List>
        {data.items.map((item) => {
          const post = state.source[item.type][item.id];
          const author = state.source.author[post.author];
          console.log(author);
          const {
            id,
            yoast_head_json: { og_image },
            title: { rendered: title },
            date,
            link,
          } = post;
          const date_for_humans = dayjs().to(dayjs(date));
          const Html2React = libraries.html2react.Component;
          return (
            <ListItem key={`archive-${id}`}>
              <ListThumbnail>
                <Link link={link}>
                  <Image src={og_image[0].url} alt={og_image[0].alt} />
                </Link>
              </ListThumbnail>
              <ListContent>
                {/* <Category>#REACT</Category> */}
                <Title>
                  <Link link={link}>{title}</Link>
                </Title>

                <Information>
                  <Text>
                    <Html2React html={post.yoast_head_json.description} />
                  </Text>
                  <Published>Publicado {date_for_humans}</Published>
                </Information>
              </ListContent>
            </ListItem>
          );
        })}
      </List>
    </Wrapper>
  );
}

export default connect(Archive);
