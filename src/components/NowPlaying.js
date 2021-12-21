import React from 'react'
import Menu from './Menu'
import AudioPlayer from 'react-h5-audio-player'
import equalizer from '../images/equalizer.gif'
// import './Exclusive.scss'
import defaultImage from "../images/radio.png"


const NowPlaying = () => {
    return (
        <div className="NowPlaying">
            <div className="radioImg">
                <img src={defaultImage} alt="Now playing equalizer" />
            </div>
            <div className="equalizer">
                <img src={equalizer} alt="Now playing equalizer" />
            </div>
            <div className="nowDetails">
                <p className="name">Dr. Drey FM</p>
                <p className="region">Lagos</p>
            </div>
            <div className="nowRadio">
                <AudioPlayer className="player" showJumpControls={false} layout="stacked"
                    customProgressBarSection={[]} customControlsSection={["MAIN_CONTROLS"]} //"VOLUME_CONTROLS"
                    autoPlayAfterSrcChange={true}
                    // src={station.urlResolved}
                />
            </div>
        </div>
    )
}

export default NowPlaying