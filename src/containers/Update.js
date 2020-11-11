import Update from "../components/Update";
import {connect} from "react-redux";

export default connect(
    function(state){
        var title, desc, id;
        for(var i = 0 ; i < state.contents.length; i++){
            var d = state.contents[i];
            //d.id는 숫자 state.selected_content_id 는 문자열이었다...
            if(d.id === state.selected_content_id){
                title = d.title;
                desc = d.desc;
                id = d.id;
                break;
            }
        }
        return {
            title,
            desc,
            id
        };
    },
    function(dispatch){
        return {
            onSubmit:function(id,title,desc){
                dispatch({type:"UPDATE_PROCESS", id, title, desc});
            }
        }
    }
)(Update);