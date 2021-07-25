import { styled } from "frontity";

export const Wrapper = styled.section`
    width: 95%;
    max-width: 1260px;
    margin: 0 auto;
    min-height: calc(100vh - 250px);
`;

export const Information = styled.div`
    background-image: linear-gradient(to right, var(--white), var(--blueGray));
    margin-bottom: 1.25em;
    padding: 1.25em;
    border-left: 4px solid var(--primaryColor);
    font-size: 1rem;

    & > p {
        margin: 0 0 1.25rem 0;
        color: var(--darkGray);
    }

    & > a {
        display: block;
        text-decoration: none;
        color: var(--linkColor);
        margin: 0 0 1.25rem 0;
        &:last-child {
            margin: 0;
        }
    }
`;

export const Content = styled.div`
    img {
        max-width: 100%;
        height: 100%;
        object-fit: cover;
    }

    figure {
        margin: 1.25rem 0;
    }

    & > h1, h2, h3, h4, h5, h6 {
        line-height: 1.2;
    }

    & > p {
        line-height: 2;
    }

    a {
        color: var(--linkColor);
    }

    ul, ol {
        li {
            padding: 0.625rem 0;
        }
    }
`;

export const Title = styled.h1`
    text-align: center;
`;

export const Thumbnail = styled.div`
    width: 100%;
    height: 500px;
    margin: 0 auto 1.25rem auto;
    overflow: hidden;
    border-radius: var(--rounded);
    img {
        width: 100%;
        object-fit: cover;
    }
`;