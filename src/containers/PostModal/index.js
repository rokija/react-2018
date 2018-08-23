import { connect } from "react-redux";
import PostModal from "../../components/PostModal";
import { submitPost } from "../../actions/posts";

export default connect(
  state => ({ postsReducer: state.postsReducer }),
  { submitPost }
)(PostModal);
