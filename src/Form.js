import { connect } from "react-redux";
import { login } from "./store/userSlice";

function Login(props) {
  return (
    <div className="login">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.login({
            username: e.target.username.value,
            password: e.target.password.value,
          });
        }}
      >
        <label for="username">username</label>
        <input type="text" placeholder="Username" name = "username"/>
        <label for="password">password</label>
        <input type="password" placeholder="Password" name = "password" />
        <button>Login</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(Login);
