import React, { useContext } from "react";
import { RepoDataContext } from "../context/repoData";


const Nav = () => {
    const { repoData } = useContext(RepoDataContext);
    return repoData ? (
        <nav>
            {
                repoData.map((item) => <a href="/#" key={item.name}>{item.name}</a>)
            }
        </nav>
    ) : (
        <div>Loading</div>
    );
};

export default Nav;