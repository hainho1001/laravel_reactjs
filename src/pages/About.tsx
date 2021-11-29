import React from "react";
import { Link } from 'react-router-dom';

function NewlineText(props: any) {
  const text = props.text;
  return text.split('\n').map((str: any) => <p>{str}</p>);
}

export function About() {
  return (
    <div>
      <h1> About Page</h1>
      <NewlineText text={'Line one\nLine two\nLine three'} />
      <Link to="/">Home Page </Link>
    </div>
  );
};
