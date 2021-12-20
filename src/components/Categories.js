import React, {useState, useEffect} from "react";
import { RadioBrowserApi } from "radio-browser-api";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import defaultImage from "../images/radio.png"
import userEvent from "@testing-library/user-event"
import { Container} from "react-bootstrap"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Menu from "./Menu";

const Categories = ()=> {
    const [stations, setStations] = useState();
    const [stationFilter, setStationFilter] = useState("all");

    useEffect(() => {
        setUpApi(stationFilter).then((data) => {
            setStations(data)
        });
    }, [stationFilter]);

    const setUpApi = async (stationFilter) => {
        const api = new RadioBrowserApi(fetch.bind(window), 'My Radio App');

        const stations = await api.searchStations({
            language: "english",
            tag: stationFilter,
            limit: 30
        });
        return stations;
    }

    const filters = [
        "all",
        "classical",
        "country",
        "dance",
        "disco",
        "house",
        "jazz",
        "pop",
        "rap",
        "retro",
        "rock"
    ]

    const setDefaultSrc = (event) => {
        event.target.src = defaultImage;
    }

    return (
        <div className="radio">

            <div className="filters">
                {filters.map((filter) => {
                    return (
                        <span 
                            className={stationFilter === filter ? "selected" : ""} onClick={()=>setStationFilter(filter)}>{filter}
                        </span>
                    )
                })}
            </div>

            <div className="stations CatStations">
                {stations && stations.map((station, index) => {
                    return (
                        <div className="station catRadio" key={index}>
                            <div className="radioLogo">
                                <img className="logo" src={station.favicon} alt="Logo" onError={setDefaultSrc}/>
                            </div>
                            <div className="radioDetails">
                                <div className="name"><h1>{station.name}</h1></div>
                                {/* <small>{station.country}</small> */}
                                <AudioPlayer className="player"  
                                src={station.urlResolved} showJumpControls={false} layout="stacked"
                                customProgressBarSection={[]} customControlsSection={["MAIN_CONTROLS"]} //"VOLUME_CONTROLS"
                                autoPlayAfterSrcChange={false}
                                />
                            </div>
                            <div className="favoriteIcon">
                            <FontAwesomeIcon icon={faHeart} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Categories