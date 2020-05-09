import React, { useEffect, useContext } from "react";
import { RepoDataContext } from "../context/repoData";
import RepoItem from "./RepoItem";
import Loading from "./Loading";


const RepoList = () => {
    const { repoData, setRepoData } = useContext(RepoDataContext);

    useEffect(() => {
        fetch("https://api.github.com/users/jenniesh/repos")
        .then((res) => res.json())
        .then((res) => setRepoData(res))
      }, []);
    
    return repoData ? (
        repoData.map((item) => <RepoItem key={item.name} name={item.name} url={item.homepage} description={item.description}/>)
        
    ) : (
        <Loading/>
    );
};

export default RepoList;