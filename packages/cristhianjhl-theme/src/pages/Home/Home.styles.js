import { styled } from "frontity";

export const Wrapper = styled.div`
    width: 95%;
    max-width: var(--maxWidthMain);
    margin: 0 auto;
    min-height: calc(100vh - 250px);
`;

export const Hero = styled.section`
    width: 95%;
    max-width: var(--maxWidthMain);
    margin: 0 auto;

    @media (min-width: 768px) {
        display: grid;
        gap: 2.5rem;
        align-items: center;
        grid-template-columns: repeat(2, 1fr);
        padding: 2.50rem 0;
    }
`;

export const ImageContainer = styled.div`
    display: none;

    @media (min-width: 768px) {
        display: block;

        img {
            width: 100%;
            object-fit: cover;
        }
    }
`;

export const HeroContent = styled.article`
`;

export const HeroTitle = styled.h2`
    font-weight: 700;
    font-size: clamp(2.625rem, 3.45vw, 3.75rem);
    line-height: 1.21;
    margin: 0;

    span {
        color: var(--primaryColor);
    }
`;

export const HeroDescription = styled.p`
    color: var(--darkGray);
    font-size: clamp(0.875rem, 2.5vw, 1rem);
    font-weight: 500;
    line-height: 2;
`;

export const HeroCTA = styled.a`
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

    &:hover {
        background-color: var(--primaryColorHover);
    }

    span {
        font-family: var(--fontFamilyTitle);
        font-weight: 300;
        font-size: 1rem;
        line-height: 1.6;
    }

    @media (min-width: 768px) {
        display: inline-flex;
    }
`;

export const HeroHelper = styled.small`
    display: block;
    color: var(--gray);
    font-weight: 300;
    line-height: 2;
    margin-top: 0.625rem;
    font-style: italic;
`;
