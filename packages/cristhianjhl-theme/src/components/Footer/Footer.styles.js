import { styled } from "frontity";

export const Wrapper = styled.div`
    width: 95%;
    max-width: var(--maxWidthMain);
    margin: 0 auto;

    @media (min-width: 1060px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.25rem;
    }
`;

export const Container = styled.footer`
    width: 100%;
    background-color: var(--white);
    border-top: 1px solid var(--lightGray);
    padding: 1.25rem 0;

    @media (min-width: 1060px) {
        border: none;
    }
`;

export const Content = styled.section`
    padding: 0 1.25rem 0 0;

    &:last-child {
        padding: 0;
    }

    h4 {
        margin: 0 0 0.625rem 0;
        font-family: var(--fontFamilyTitle);
        font-size: clamp(1.125rem, 2.5vw, 1.25rem);
    }

    p {
        line-height: 1.8;
        margin: 1.25rem 0;
        
        a {
            color: var(--linkColor);
            text-decoration: none;
        }
        @media screen and (min-width: 960px) {
            margin: 1.25rem 0 0 0;
        }
    }


    ul {
        padding: 0;
        list-style: none;
        margin: 1.25rem 0 0 0;
        li {
            padding: 0 0 0.625rem 0;
            font-weight: 600;
            a {
                text-decoration: none;
                color: var(--black);
            }
        }
    }
`;