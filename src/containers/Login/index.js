import { connect } from "react-redux";
import Login from "../../components/Login";
import login from "../../actions/user";

export default connect(
  undefined,
  { login }
)(Login);
