import React from 'react'
import { useState, useEffect } from 'react'
import defaultImage from "../images/logo.jpg"
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
    //   localStorage.removeItem("FavPkts")

    const setRecent = (name, obj) => {
        setStationNamesArray(radioIndexedNames(stations))
        // console.log(stationNamesArray);
        let Recent = JSON.parse(localStorage.getItem("Recent")) || []
        let RecentPkts = JSON.parse(localStorage.getItem("RecentPkts")) || []
        
        // console.log(localStorage.getItem("Favourites"));
        if(Recent.includes(name.toLowerCase())){
        let index = Recent.indexOf(name.toLowerCase())
        Recent.splice(index, 1);
        RecentPkts.splice(index, 1);
        let newRecent = [...Recent];
        let newRecentPkts = [...RecentPkts];
        localStorage.setItem("Recent",JSON.stringify(newRecent))
        localStorage.setItem("RecentPkts",JSON.stringify(newRecentPkts))
        }
        else {
            let newRecent = [...Recent, name.toLowerCase()];
            let newRecentPkts = [...RecentPkts, obj];
            localStorage.setItem("RecentPkts",JSON.stringify(newRecentPkts))
            localStorage.setItem("Recent",JSON.stringify(newRecent))
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
                                        onPlay={
                                            ()=> {
                                            setRecent(station.name, station)

                                            }
                                        }
                                    />
                                </div>
                                <div className="favoriteIcon">
                                    <FontAwesomeIcon  onClick={
                                    ()=> {
                                        setFav(station.name, station)
                                    }
                                } 
                                        className={ ` ${ (FavCheck && FavCheck.includes(station.name.toLowerCase())) ? 'liked' : '' }`}
                            
                                icon={faHeart} />
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