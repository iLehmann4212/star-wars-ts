import Navigation from "./Navigation.tsx";

const Header = () => {
    return (
        <header className="rounded-t-3xl bg-grey-color">
            <Navigation/>
            <h1 className="text-center text-3xl py-6">Luke Skywalker</h1>
        </header>
    );
};

export default Header;