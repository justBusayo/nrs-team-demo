import React from 'react'
import { useState, useEffect } from 'react'
import defaultImage from "../images/radio.png"
import { Container, Row, Col } from "react-bootstrap";
import { RadioBrowserApi } from "radio-browser-api";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


const RecentPlayedBox = () => {

    const setDefaultSrc = (event) => {
        event.target.src = defaultImage;

    }

    const [recent , setRecent] = useState(JSON.parse(localStorage.getItem("Recent")))
    
    useEffect(() => {
        setRecent(JSON.parse(localStorage.getItem("Recent")))
    }, [])

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
   

const setFav = (name, obj) => {
    setStationNamesArray(radioIndexedNames(recent))
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
                    {recent && recent.map((station, index) => {


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

                    {/* { !JSON.parse(localStorage.getItem("Recent")).length > 0 && <div>< br /> < br /> < br />No saved favourites </div>
                    } */}

                { !JSON.parse(localStorage.getItem("Recent")) > 0 && <div>< br /> < br /> < br />No recently played stations </div>
                   || !JSON.parse(localStorage.getItem("Recent")).length > 0 && <div>< br /> < br /> < br />No saved favourites </div>
                   }
                </div>

            </div>
        </Container>
    )
}
export default RecentPlayedBox;