import Button from "./ui/Button.tsx";
import {NavLink} from "react-router";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";

interface NavItemProps {
    itemTitle: string,
}

const NavItem = ({itemTitle}: NavItemProps) => {
    const {hero} = useContext(SWContext);

    return (
        <NavLink to={`${itemTitle}/ ${hero}`}><Button>{itemTitle}</Button></NavLink>
    )
}

export default NavItem;