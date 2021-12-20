import React from 'react'
import { useState, useEffect } from 'react'
import defaultImage from "../images/radio.png"
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

    const [stations, setStations] = useState();

    useEffect(() => {
        setupApi(5).then((data) => {
            setStations(data);
        })
    }, []);

    const setupApi = async (limit) => {
        const api = new RadioBrowserApi(fetch.bind(window), "Nigeria Radio");
        console.log(api)
        const stations = await api.searchStations({
            // language: "english",
            limit: limit,
            countryCode: 'NG'

        });
        return stations;
    }

    return (
        <Container>
            <div className="stations">
                <div>
                    {stations && stations.map((station, index) => {

                        return (


                            <div className="station" key={index}>
                                <div className="radioLogo">
                                    <img className="logo" src={station.favicon} alt="Logo" onError={setDefaultSrc} />
                                </div>
                                <div className="radioDetails">
                                    <div className="name"><h1>{station.name}</h1></div>
                                    <small>{station.state}</small>
                                    <AudioPlayer className="player" showJumpControls={false} layout="stacked"
                                        customProgressBarSection={[]} customControlsSection={["MAIN_CONTROLS"]} //"VOLUME_CONTROLS"
                                        autoPlayAfterSrcChange={false}
                                        src={station.urlResolved}
                                    />
                                </div>
                                <div className="favoriteIcon">
                                    <FontAwesomeIcon icon={faHeart} />
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </Container>
    )
}
export default RadioBox;