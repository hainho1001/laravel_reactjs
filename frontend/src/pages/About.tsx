import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Repository from "../service/api";

export function About() {
  const [data, setData] = useState();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await Repository.post('/login', {email: "2@gmail.com", password: "12345678"})
      .then((response: any) => {
        debugger;

        console.log(response.data);
        setData(response.data);
      })
      .catch((error: any) => {
        console.log("12323", error.response);
      });
      
  };


  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="text-center mt-5">
            <h1>About</h1>
            <p>This is the About Page.</p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Username</p>
            <input type="text" onChange={(e: any) => setUserName(e.target.value)} />
          </label>
          <label>
            <p>Password</p>
            <input
              type="password"
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
