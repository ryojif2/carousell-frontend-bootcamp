import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import ListingPreviewList from "./ListingPreviewList";

const Home = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    <div>
      <Link to="/listings/new">Sell</Link>
      <br />
      <br />
      <ListingPreviewList />
      <br />
      {isAuthenticated ? (
        <button
          onClick={() => logout({ returnTo: process.env.REACT_APP_REDIRECT })}
        >
          Log Out
        </button>
      ) : null}
    </div>
  );
};

export default Home;
