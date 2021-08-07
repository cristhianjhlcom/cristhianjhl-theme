import { styled } from "frontity";

export const Nav = styled.nav`
    height: 80px;
    max-width: var(--maxWidthMain);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    border-bottom: none;
    z-index: 1;

    @media screen and (max-width: 960px) {
        position: fixed;
        right: 0;
        left: 0;
        top: 0;
        background-color: var(--blueGray);
        border-bottom: 1px solid var(--lightGray);
    }
`;

export const NavbarLogo = styled.h4`
    color: var(--darkGray);
    justify-self: start;
    cursor: pointer;
    flex: none;

    a {
        text-decoration: none;
        color: var(--primaryColor);
    }

    @media screen and (max-width: 960px) {
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(15%, 25%);
    }
`;

export const MenuIcon = styled.div`
    display: none;
    color: var(--darkGray);
    cursor: pointer;

    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-45%, 70%);
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 0;
    list-style: none;
    text-align: center;
    width: 70vw;
    justify-content: end;
    margin: 0; 
    padding: 0;

    @media screen and (max-width: 960px) {
        padding: 0 1rem;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: calc(100vh - 81px);
        position: absolute;
        top: 81px;
        left: -100%;
        opacity: 0;
        transition: all 0.5s ease;

        &.active {
            background-color: var(--blueGray);
            left: 0;
            opacity: 1;
            transition: all 0.5s ease;
            z-index: 1;
        }
    }
`;

export const NavLink = styled.li`
    color: var(--darkGray);
    text-decoration: none;
    padding: 0.5rem 1rem;
    cursor: pointer;

    &:hover {
        color: var(--accentColor);
        border-radius: 4px;
        transition: all 0.2s ease-out;
    }

    &:last-child {
        padding: 0.5rem 0 0 1rem;
    }

    & > a {
        display: block;
        text-decoration: none;
        font-weight: bold;
        text-transform: capitalize;
        color: var(--darkGray);
        padding: 0;
        &:hover {
            color: var(--accentColor);
        }

        & > .chevron-right {
            display: none;
        }
    }

    @media screen and (max-width: 960px) {
        padding: 0;
        text-align: left;
        width: 100%;
        display: table;
        border-bottom: 1px solid var(--lightGray);

        & > a {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 2rem 0.5rem;
            &:hover {
                color: var(--darkGray);
            }

            & > .chevron-right {
                display: block;
                color: var(--gray);
            }
        }

        &:last-child {
            padding: 0;
            border-bottom: none;
        }
    }
`;