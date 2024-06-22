// Demo Video
import {BsArrowLeft} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
function Player(){
    const navigate = useNavigate(); 
    return (
        <div>
            <div>
                <BsArrowLeft onClick={() => navigate(-1)}/>
            </div>
            <video src="" autoPlay controls muted loop></video>
        </div>
    )
}
export default Player;