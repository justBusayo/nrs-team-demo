import React, {useState, useEffect} from "react";
import { RadioBrowserApi } from "radio-browser-api";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import defaultImage from "../images/logo.jpg";
import userEvent from "@testing-library/user-event"
import { Container} from "react-bootstrap"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Menu from "./Menu";
import SearchBoxProp from "./SearchBoxProp.js";

const Categories = ()=> {
    const [stations, setStations] = useState();
    const [stationFilter, setStationFilter] = useState("");

    useEffect(() => {
        setUpApi(stationFilter).then((data) => {
            setStations(data)
        });
    }, [stationFilter]);

    const setUpApi = async (stationFilter) => {
        const api = new RadioBrowserApi(fetch.bind(window), 'NRS APP');

        const stations = await api.searchStations({
            countryCode: 'NG',
            limit: 25, 
            offset: 0,
            tag: stationFilter,
        });
        return stations;
    }

    const filters = [
        
        "classical",
        "afrobeats",
        "christian",
        "gospel",
        "family",
        "farming",
        "news",
        "talk",
        "music",
        "rock",
        "relationship",
        "business program",
        "frcn",
        "bostneer"
    
    ]

    const setDefaultSrc = (event) => {
        event.target.src = defaultImage;
    }
        // fav logic
        const radioIndexedNames = (stations) => {
            let indexedData = [];
            stations.forEach((station) => {
                // let index = stationNamesArray.findIndex((obj, index) => obj.name == data.id)
                let pushObj = {name: station.name.toLowerCase()};
                indexedData.unshift(pushObj);
            });
            return indexedData;
          }
        
          const [stationNamesArray, setStationNamesArray] = useState()
    
        //   global fav
        const FavCheck = JSON.parse(localStorage.getItem("Favourites"));
          
    // clear test
        //   localStorage.removeItem("Favourites")
        const checkFav = (name) => {
            setStationNamesArray(radioIndexedNames(stations))
            let Fav = JSON.stringify(localStorage.getItem("Favourites"));
            if(Fav.includes(name.toLowerCase())){
                console.log(true);
                return 'liked';
            }
            else {
                return '';
            }
        }
        const setFav = (name, obj) => {
            setStationNamesArray(radioIndexedNames(stations))
            // console.log(stationNamesArray);
            let prevFav = JSON.parse(localStorage.getItem("Favourites")) || []
            let prevFavPkts = JSON.parse(localStorage.getItem("FavPkts")) || []
            
            // console.log(localStorage.getItem("Favourites"));
            if(prevFav.includes(name.toLowerCase())){
            let index = prevFav.indexOf(name.toLowerCase())
            prevFav.splice(index, 1);
            prevFavPkts.splice(index, 1);
            let newFav = [...prevFav];
            let newFavPkts = [...prevFavPkts];
            localStorage.setItem("Favourites",JSON.stringify(newFav))
            localStorage.setItem("FavPkts",JSON.stringify(newFavPkts))
            }
            else {
                let newFav = [...prevFav, name.toLowerCase()];
                let newFavPkts = [...prevFavPkts, obj];
                localStorage.setItem("FavPkts",JSON.stringify(newFavPkts))
                localStorage.setItem("Favourites",JSON.stringify(newFav))
            }
        }

    return (
        <div className="radio">

            <Container style={{marginTop:"1.5em"}}>
                <SearchBoxProp stations={stations}></SearchBoxProp>
            </Container>


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
                                <div className="name"><h1>{station.name}</h1> 
                               
                                </div>
                                {/* <small>{station.country}</small> */}
                                <AudioPlayer className="player"  
                                src={station.urlResolved} showJumpControls={false} layout="stacked"
                                customProgressBarSection={[]} customControlsSection={["MAIN_CONTROLS"]} //"VOLUME_CONTROLS"
                                autoPlayAfterSrcChange={false}
                                />
                            </div>
                            <div className="favoriteIcon">
                                    <FontAwesomeIcon  onClick={
                                    ()=> {
                                        setFav(station.name, station)
                                    }
                                } 
                                        className={ ` ${FavCheck && (FavCheck.includes(station.name.toLowerCase())) ? 'liked' : '' }`}
                            
                                icon={faHeart} />
                                </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Categories