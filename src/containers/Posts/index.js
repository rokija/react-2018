import { connect } from "react-redux";
import Posts from "../../components/Posts";
import { getPosts } from "../../actions/posts";

export default connect(
  state => ({ postsReducer: state.postsReducer }),
  { getPosts }
)(Posts);
