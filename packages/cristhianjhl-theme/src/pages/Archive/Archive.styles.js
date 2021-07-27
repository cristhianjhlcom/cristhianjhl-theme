import { styled } from "frontity";

export const Wrapper = styled.div`
    width: 95%;
    max-width: 1260px;
    margin: 0 auto;
    min-height: calc(100vh - 250px);
`;

export const List = styled.section`

`;

export const ListItem = styled.article`
    background-color: var(--white);
    padding: 1.25rem;
    margin-bottom: 1.25rem;
    border-radius: var(--rounded);

    @media (min-width: 768px) {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 1.25rem;
    }
`;

export const ListThumbnail = styled.div`
    margin: 0 0 1.25rem 0;
    border-radius: var(--rounded);
    overflow: hidden;

    img {
        width: 500px;
        object-fit: contain;
    }

    @media (min-width: 960px) {
        flex: none;
        margin: 0;
    }
`;

export const ListContent = styled.div`
    h4 {
        margin: 0 0 1.25rem 0;
    }

    span {
        display: block;
        color: var(--gray);
        margin: 0 0 1.25rem 0;
    }

    p {
        line-height: 2;
        margin: 0 0 1.25rem 0;
    }

    a {
        color: var(--linkColor);
        text-decoration: none;
    }

    a.view-url {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.625rem;
        padding: 0.625rem 0.75rem;
        background-color: var(--primaryColor);
        color: var(--white);
        text-decoration: none;
        border-radius: var(--rounded);
        transition: background-color 450ms ease;
        font-family: var(--fontFamilyTitle);
        font-weight: bold;
        font-size: 1rem;
        line-height: 1.6;
    
        &:hover {
            background-color: var(--primaryColorHover);
        }
        
        @media (min-width: 768px) {
            display: inline-flex;
            background-color: transparent;
            color: var(--primaryColor);

            &:hover {
                background-color: var(--blueGray);
            }
        }
    }
`;