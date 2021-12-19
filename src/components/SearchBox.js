import React from 'react'
import { useState, useEffect } from 'react'
import defaultImage from "../images/logo.jpg"
import { Container, Form, FormControl } from "react-bootstrap";
import { RadioBrowserApi } from "radio-browser-api";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const SearchBox = () => {

  const setDefaultSrc = (event) => {
    event.target.src = defaultImage;
    }

    const [stations, setStations] = useState([{
      "changeId": "1b53cffc-0ade-4be0-badd-4838b5695849",
      "id": "39934407-7faa-4ba4-b88b-e000abfe4e13",
      "name": "47.5 ATOBO Radio 1",
      "url": "http://ec1.everestcast.host:2070/stream",
      "urlResolved": "http://ec1.everestcast.host:2070/stream",
      "homepage": "http://stream.zeno.fm/fh6nb90pn2zuv",
      "favicon": "",
      "country": "Nigeria",
      "countryCode": "NG",
      "state": "Ogun State",
      "votes": 151,
      "codec": "MP3",
      "bitrate": 64,
      "clickCount": 21,
      "clickTrend": -5,
      "hls": false,
      "lastCheckOk": true,
      "lastChangeTime": "2021-07-14T07:51:09.000Z",
      "lastCheckOkTime": "2021-12-19T01:28:46.000Z",
      "clickTimestamp": "2021-12-18T19:58:15.000Z",
      "lastLocalCheckTime": "2021-12-18T21:56:49.000Z",
      "language": [
          "english"
      ],
      "lastCheckTime": "2021-12-19T01:28:46.000Z",
      "tags": []
  }]);
    const [searchResult, setSearchResult] = useState();

    useEffect(() => {
      setupApi(25).then((data) => {
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

  const radioIndexedNames = (stations) => {
    let indexedData = [];
    stations.forEach((station, index) => {
        // let index = stationNamesArray.findIndex((obj, index) => obj.name == data.id)
        let pushObj = {name: station.name.toLowerCase() , index};
        indexedData.unshift(pushObj);
    });
    return indexedData;
  }

  const stationNamesArray = radioIndexedNames(stations);

  const fastSearch = (query) => {
      const indexReturn = [];
      
      if(query === "" || query === " "){} 
      else {
        stationNamesArray.forEach((obj)=>{
            if(obj.name.includes(query)) {
                indexReturn.unshift(obj.index)
            }
        });
      }

      return indexReturn;
  }


   const searchQuery = (query) => {
    setSearchResult(fastSearch(query));

   }

  //  console.log(searchResult)

  // const 
    return (
      <div>
        <Form onSubmit={(e)=> {
          e.preventDefault();
        }} className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onKeyUp={ (event) => {
              searchQuery(event.target.value);
              console.log(event.target.value);

              // if(searchResult === undefined || searchResult  === null || searchResult.length <= 0 || searchResult === "") {
              //   setSearchResult([]); 
              //   console.log(searchResult);
              // }
          }}
        />
      </Form>
      
      <Container>
            <div className="stations">
                <div>

                    {searchResult && searchResult.map((i,index) => {

                        return (


                            <div className="station" key={index}>
                                <div className="radioLogo">
                                    <img className="logo" src={stations[i].favicon} alt="Logo" onError={setDefaultSrc} />
                                </div>
                                <div className="radioDetails">
                                    <div className="name"><h1>{stations[i].name}</h1></div>
                                    <small>{stations[i].state}</small>
                                    <AudioPlayer className="player" showJumpControls={false} layout="stacked"
                                        customProgressBarSection={[]} customControlsSection={["MAIN_CONTROLS"]} //"VOLUME_CONTROLS"
                                        autoPlayAfterSrcChange={false}
                                        src={stations[i].urlResolved}
                                    />
                                </div>
                            </div>
                        )
                    })}

                </div>

            </div>
        </Container>

      </div>
    )
}
export default SearchBox;