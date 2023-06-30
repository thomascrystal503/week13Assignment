import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

let date = new Date();

let singleUser = {
  name: "Awesome Mentor!",
  time: date.toDateString(),
};

export default function LoginForm() {
  return (
    <section className="welcomeSection">
      <div className="greeting">
        <h1>Hi, {singleUser.name}</h1>
        <p>Today's date is {singleUser.time}</p>
      </div>
      <div className="container border-secondary">
        <h3 className="loginBanner">Log In</h3>
        <Form className="loginForm">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </section>
  );
}
