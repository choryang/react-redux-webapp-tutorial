import Create from "../components/Create";
import {connect} from "react-redux";

export default connect(
    null,
    function(dispatch){
        return {
            onSubmit:function(title, desc){
                //이름과 값이 같으면 한 번만 써도 된다.
                //title: title == title
                dispatch({type:"CREATE_PROCESS", title, desc})
            }
        }
    }
)(Create);