import { styled } from "frontity";

export const Wrapper = styled.div`
    width: 95%;
    max-width: 1260px;
    margin: 0 auto;
`;

export const List = styled.section`
    background-color: ${props => props.backgroundColor || "transparent"};
    padding: 1.25rem 0;
`;

export const ListHeader = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h4 {
        font-size: clamp(1.125rem, 2.5vw, 1.25rem);
        text-transform: capitalize;
    }

    a {
        color: var(--darkGray);
    }
`;

export const ListContainer = styled.div`
    display: grid;
    gap: 1.25rem;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1060px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export const ListCard = styled.div`
    padding: 1.25rem;
    border: 1px solid var(--lightGray);
    border-radius: var(--rounded);
`;

export const ListImagePreview = styled.div`
    height: 160px;
    position: relative;
    margin-bottom: 1rem;
    border-radius: var(--rounded);
    overflow: hidden;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.15);
    
    img {
        width: 100%;
        height: 100%;
        object-fit: fill;
    }

    @media (min-width: 768px) {
        height: 200px;
    }
`;

export const ListCardBody = styled.div`
    a {
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
    }
`;

export const ListCardTitle = styled.h4`
    font-size: 1.25rem;
    line-height: 1.6;
    margin: 0 0 0.625rem 0;
    color: var(--black);
`;

export const ListCardExcerpt = styled.p`
    font-size: 1rem;
    line-height: 1.8;
    margin: 0 0 0.625rem 0;
    color: var(--darkGray);
`;