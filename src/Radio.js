import React from 'react'
// import "./radio.css"
import { useState, useEffect } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import { RadioBrowserApi } from 'radio-browser-api';



const Radio = () => {
    const [stations, setStations] = useState();
    const [stateFilter, setStateFilter] = useState('');

    useEffect(() => {
        setupApi(25).then((data) => {
            setStations(data);
        })
    }, [stateFilter]);

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



    const states = ["lagos", "abuja", "ibadan", "kwara"]
    return (
        <div>
            {states.map(state => <button onClick={() => setStateFilter(state)} className={stateFilter === state ? "selected" : ""}>{state}</button>)}
            {stations && stations.map((station, index) => {
                return (
                    <div className='station' key={index}>

                        <div className='imagePlayer'>
                            <AudioPlayer className='radioPlayer' src={station.urlResolved}
                                showJumpControls={false}
                                layout='stacked'
                                customProgressBarSection={[]}
                                customControlsSection={['MAIN_CONTROLS', 'VOLUME_CONTROLS']}
                                autoPlayAfterSrcChange={false}
                            />
                            <img className='stationImage' src={station.favicon} alt='station logo' />
                        </div>
                        <div className='stationName'>
                            {station.name}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Radio
