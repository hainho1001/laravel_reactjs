import Layout from "../../components/Layout";
import Repository from "../../service/api";

export function Login() {

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await Repository.post('/login', {email: "2@gmail.com", password: "12345678"})
      .then((response: any) => {
        debugger;
        console.log(response.data);

      })
      .catch((error: any) => {
        console.log("12323", error.response);
      });
  };

  return (
    <Layout>
      <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      </div>

    </Layout>
  );
}
