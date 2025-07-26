import {createContext} from "react";
import type {SWContextValue} from "./types.d.tsx";
import {navItems} from "./constants.tsx";

export const SWContext = createContext<SWContextValue>({
    page: navItems[0],
    changePage: (page: string) => {
        console.log(page);
    }
});