import React from "react";
import RepoDataContextProvider from "../context/repoData";
import Nav from "./Nav";
import RepoList from "./RepoList";


const App = () => (
    <RepoDataContextProvider>
        <Nav />
        <RepoList />
    </RepoDataContextProvider>
);

export default App;