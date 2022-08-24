import  Alert  from "react-bootstrap/Alert";

function MessageBox(props){
    return(
        <Alert variant={props.variant || 'info'}>{props.message}</Alert>
    )
}
export default MessageBox;