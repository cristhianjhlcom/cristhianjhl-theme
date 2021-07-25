import { styled } from "frontity";

export const Wrapper = styled.section`
    width: 95%;
    max-width: 1260px;
    margin: 0 auto;
    min-height: calc(100vh - 250px);
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
            line-height: 2;
        }
    }
`;

export const Title = styled.h1`
    text-align: left;
`;