import React from "react";
import RepoDataContextProvider from "../context/repoData";
import RepoList from "./RepoList";
import "../reset.css";
import "../index.scss";


const App = () => (
    <RepoDataContextProvider>
        <RepoList />
    </RepoDataContextProvider>
);

export default App;