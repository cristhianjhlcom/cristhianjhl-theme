import { styled } from "frontity";
import Link from "@frontity/components/link";

export const Wrapper = styled.div`
    width: 95%;
    max-width: var(--maxWidthPosts);
    margin: 0 auto;
    min-height: calc(100vh - 250px);
`;

export const List = styled.section`
    padding: 2.5rem 0;
`;

export const ListContent = styled.div`
    width: 100%;
`;

export const ListItem = styled.article`
    margin-bottom: 2.5rem;

    @media (min-width: 768px) {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 2.5rem;
    }
`;

export const ListThumbnail = styled.div`
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media screen and (min-width: 768px) {
        width: 300px;
        height: 160px;
    }
`;

export const Title = styled.h4`
    margin: 0 0 1.125rem 0;
    line-height: 1.5;
    a {
        color: var(--darkGray);
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
        @media screen and (min-width: 768px) {
            font-size: 1.5rem;
        }
    }
`;

export const Category = styled.span`
    display: block;
    font-size: 1rem;
    line-height: 1.8;
    font-weight: 300;
    letter-spacing: 0.3px;
    margin: 0;
`;

export const Author = styled.div`
`;

export const Information = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    p {
        margin: 0 0 1.125rem 0;
        font-size: 1rem;
        line-height: 1.4;
    }
`;

export const Text = styled.p`
    margin: 0 0 1.125rem 0;
    font-size: 1rem;
    line-height: 1.4;
    letter-spacing: 0.3px;
`;

export const Published = styled.small`
    margin: 0;
    color: var(--gray);
`;