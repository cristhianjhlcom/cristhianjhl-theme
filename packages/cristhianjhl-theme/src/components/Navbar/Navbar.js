import React from 'react';
import Link from "@frontity/components/link";
import { Bars, Close, ChevronRight } from "../UI/Icons";
import { MenuItems } from './MenuItem';
import { Nav, NavbarLogo, MenuIcon, NavMenu, NavLink } from "./Navbar.styles";

function Navbar() {
    const [openMenu, setOpenMenu] = React.useState(false);

    function handleOpenMenu() {
        setOpenMenu(!openMenu);
    }

    return (
        <Nav>
            <NavbarLogo><Link link="/">Cristhian 💻</Link></NavbarLogo>
            <MenuIcon onClick={handleOpenMenu}>
                {
                    openMenu
                    ? <Close />
                    : <Bars />
                }
            </MenuIcon>
            <NavMenu className={openMenu ? "active" : ""}>
                {
                    MenuItems.map((item, index) => {
                        return (
                            <NavLink key={index}>
                                <Link onClick={() => setOpenMenu(false)} link={item.path}>
                                    {item.title}
                                    <ChevronRight />
                                </Link>
                            </NavLink>
                        )
                    })
                }
            </NavMenu>
        </Nav>
    )
}

export default Navbar;
