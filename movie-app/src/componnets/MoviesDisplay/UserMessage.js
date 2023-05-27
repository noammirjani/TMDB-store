/**
 * UserMessage Component
 *
 * A component that displays a user message or alert.
 * It includes an icon and the provided user message.
 */
import {Container} from "react-bootstrap";
import SvgIcon from "../Utils/SvgIcon";

/**
 * UserMessage Component
 *
 * @param {Object} props - The component props.
 * @param {string} props.userInfo - The user message to display.
 * @param {boolean} props.isAlert - A flag indicating whether the message is an alert (true) or a regular message (false).
 * @returns {JSX.Element} The rendered component.
 */
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