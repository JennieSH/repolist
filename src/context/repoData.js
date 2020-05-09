import React, { createContext, useState } from "react";

export const RepoDataContext = createContext();

const RepoDataContextProvider = (props) => {
    const [repoData, setRepoData] = useState();
    const { children } = props;
    return (
        <RepoDataContext.Provider value={{ repoData, setRepoData }}>
            { children }
        </RepoDataContext.Provider>
    );
};

export default RepoDataContextProvider;