import React, {useState, useEffect} from "react";
import AudioPlayer from "react-h5-audio-player";
import userEvent from "@testing-library/user-event"
import { Container, Row, Col} from "react-bootstrap";
import RadioBox from "./RadioBox.js"
import NowPlaying from "./NowPlaying"

const Mvp = () => {

    return (
        <div>
            <div className="logo">
                <p>NRS</p>
            </div>
            <div className="mvp">
            <div className="radioLeft">
                <RadioBox></RadioBox>
            </div>
            <div className="radioRight">
                <NowPlaying></NowPlaying>
            </div>
            </div>
        </div>
    )
}

export default Mvp