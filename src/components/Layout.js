import  { NavLink, Outlet } from "react-router-dom";

export const Layout =() => {
    return (
    <div>
        <header>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
        </header>
        <Outlet/>
    </div>
    )
};
