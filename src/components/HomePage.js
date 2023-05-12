import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import "../App.css";
import CardList from "./CardList";
import Pagination from "./Pagination";
import Button from "./Button";
import SearchBar from "./SearchBar";
import CardButton from "./CardButton";
import Modal from "./ErrorModal";
import { teamActions } from "../store/team-slice";
const HomePage = () => {
    const dispatch=useDispatch();
  const [Data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(0);
  const searchedUsers = useSelector((state) => state.ui.items);
  const modalState = useSelector((state) => state.team.use);

  useEffect(() => {
    setData(searchedUsers);
    setPostsPerPage(20);
  }, [searchedUsers]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = searchedUsers.slice(firstPostIndex, lastPostIndex);

  const changePageHandler=(event)=>{
    event.preventDefault();
dispatch(teamActions.front());
  }
  return (
    <>
      <div className="header-container">
        <Button>Filter</Button>
        <CardButton onClick={changePageHandler}>Team</CardButton>
        <SearchBar />
        {modalState && (
          <Modal
            title={"Error"}
            message={"The member of this domain is already in the team"}
          />
        )}
      </div>

      <CardList Data={currentPosts} />
      <Pagination
        totalPosts={Data.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default HomePage;
