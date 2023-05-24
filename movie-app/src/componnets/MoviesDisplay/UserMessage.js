import {Container} from "react-bootstrap";
import SvgIcon from "../Utils/SvgIcon";

function UserMessage ({userInfo, isAlert}){

    const design = (isAlert) ? "text-danger fs-4 " : "text-white display-4";

    return(
        <Container >
            <div className={`alert alert-transparent text-center ${design}`} role="alert">
                <SvgIcon name={"warning"} size={32} className="mb-3" />
                {userInfo}
            </div>
        </Container>
    );

}

export default UserMessage;