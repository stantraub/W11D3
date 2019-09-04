import { connect } from "react-redux";
import { createNewUser } from '../../actions/session';
import Signup from "./signup";


const mapDispatchToProps = dispatch => ({
    createNewUser: formUser => dispatch(createNewUse(formUser)),
})

export default connect(null, mapDispatchToProps)(Signup);