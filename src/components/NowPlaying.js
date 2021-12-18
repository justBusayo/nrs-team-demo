import React from 'react'
import defaultImage from "../images/logo.svg"
import AudioPlayer from "react-h5-audio-player";



const NowPlaying = () => {
    return (
        <div className="playing">
            <div className="playingLogo">
                <img className="logo" src={defaultImage} alt="Logo" />
            </div>
            <div className="stationName">
                <p>WAZOBIA FM 95.1</p>
                <small>Lagos</small>
            </div>
            <div className="playingStation">
                <AudioPlayer className="player"  showJumpControls={false} layout="stacked"
                customProgressBarSection={[]} customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]} //"VOLUME_CONTROLS"
                autoPlayAfterSrcChange={false}
                />
            </div>
        </div>
    )
}

export default NowPlaying