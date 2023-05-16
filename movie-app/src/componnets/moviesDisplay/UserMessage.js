import {Container} from "react-bootstrap";
import SvgIcon from "../utils/SvgIcon";

function UserMessage ({userInfo}){

    return(
        <Container >
            <div className="alert alert-transparent text-center text-white display-4 my-4 " role="alert">
                <SvgIcon name={"warning"} size={32} className="mb-3" />
                {userInfo}
            </div>
        </Container>
    );

}

export default UserMessage;