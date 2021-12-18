import React from 'react'
import defaultImage from "../images/logo.svg"
import { Container, Row, Col } from "react-bootstrap"; 
import { RadioBrowserApi } from "radio-browser-api";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


const RadioBox = () => {

    const setDefaultSrc = (event) => {
        event.target.src = defaultImage;
    }
    return (
        <Container>
            <div className="stations">
                <div className="station">
                    <div className="radioLogo">
                        <img className="logo" src={defaultImage} alt="Logo" onError={setDefaultSrc}/>
                    </div>
                    <div className="radioDetails">
                        <div className="name"><h1>Cool Fm</h1></div>
                        <small>Lagos</small>
                        <AudioPlayer className="player"  showJumpControls={false} layout="stacked"
                        customProgressBarSection={[]} customControlsSection={["MAIN_CONTROLS"]} //"VOLUME_CONTROLS"
                        autoPlayAfterSrcChange={false}
                        />
                    </div>
                    <div className="favoriteIcon">
                    <FontAwesomeIcon icon={faHeart} />
                    </div>
                </div>

                <div className="station">
                    <div className="radioLogo">
                        <img className="logo" src={defaultImage} alt="Logo" onError={setDefaultSrc}/>
                    </div>
                    <div className="radioDetails">
                        <div className="name"><h1>Cool Fm</h1></div>
                        <small>Lagos</small>
                        <AudioPlayer className="player"  showJumpControls={false} layout="stacked"
                        customProgressBarSection={[]} customControlsSection={["MAIN_CONTROLS"]} //"VOLUME_CONTROLS"
                        autoPlayAfterSrcChange={false}
                        />
                    </div>
                    <div className="favoriteIcon">
                    <FontAwesomeIcon icon={faHeart} />
                    </div>
                </div>

                <div className="station">
                    <div className="radioLogo">
                        <img className="logo" src={defaultImage} alt="Logo" onError={setDefaultSrc}/>
                    </div>
                    <div className="radioDetails">
                        <div className="name"><h1>Cool Fm</h1></div>
                        <small>Lagos</small>
                        <AudioPlayer className="player"  showJumpControls={false} layout="stacked"
                        customProgressBarSection={[]} customControlsSection={["MAIN_CONTROLS"]} //"VOLUME_CONTROLS"
                        autoPlayAfterSrcChange={false}
                        />
                    </div>
                    <div className="favoriteIcon">
                    <FontAwesomeIcon icon={faHeart} />
                    </div>
                </div>
            </div>
        </Container>
    )
}
export default RadioBox;