import React from "react";
import { Link } from 'react-router-dom';
 
export function Home() {
  return (
    <div>
        <h1> Home Page</h1>
        <Link to="/about">About / </Link>
        <Link to="/user">User / </Link>
        <Link to="/404">404 / </Link>
    </div>
  );
};