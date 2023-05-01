import { Suspense } from "react";
import  { NavLink, Outlet } from "react-router-dom";

export const Layout =() => {
    return (
    <div>
        <header>
            <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
            </nav>
        </header>
        <main>
            <Suspense fallback={<h2>Loading...</h2>}>
                <Outlet/>
            </Suspense>
        </main>
    </div>
    )
};

