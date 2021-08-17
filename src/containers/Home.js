import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>je suis Home</div>
      <Link to="/login">Pas de compte ? C'est par ici !</Link>
    </>
  );
}

export default Home;
