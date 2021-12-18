import React from 'react'
import defaultImage from "../images/logo.svg"
import { Container, Row, Col } from "react-bootstrap"; 
import { RadioBrowserApi } from "radio-browser-api";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'


const RecentStationBox = () => {

    const setDefaultSrc = (event) => {
        event.target.src = defaultImage;
    }
    return (
        <Container>
            <div className="recentBox">
                <div className="recentRadioLogo">
                    <img className="recentLogo" src={defaultImage} alt="Logo" onError={setDefaultSrc}/>
                </div>
                <h5>Nigeria Info</h5>
                <div className="moreIcon">
                    <span>Lagos</span>
                    <FontAwesomeIcon className="ellipsis" icon={faEllipsisV} />
                </div>
                </div>
        </Container>
    )
}
export default RecentStationBox;