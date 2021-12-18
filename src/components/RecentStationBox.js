import React from 'react'
import defaultImage from "../images/logo.svg"
import afrobeat from "../images/afrobeat.jpg"
import bostneer from "../images/bostneer.webp"
import classical from "../images/classical.jpg"
import music from "../images/music.jpg"
import talk from "../images/talk.jpg"
import { Container, Carousel, Row, Col } from "react-bootstrap"; 
import { RadioBrowserApi } from "radio-browser-api";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'


const RecentStationBox = () => {

    const setDefaultSrc = (event) => {
        event.target.src = defaultImage;
    }
    return (
        // <Container>
        //     <div className="recentBox">
        //         <div className="recentRadioLogo">
        //             <img className="recentLogo" src={defaultImage} alt="Logo" onError={setDefaultSrc}/>
        //         </div>
        //         <h5>Nigeria Info</h5>
        //         <div className="moreIcon">
        //             <span>Lagos</span>
        //             <FontAwesomeIcon className="ellipsis" icon={faEllipsisV} />
        //         </div>
        //         </div>
        // </Container>

        <Carousel variant="dark">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={music} 
                alt="First slide"
                />
                <Carousel.Caption>
                {/* <h5>WAZOBIA FM 91.0</h5>
                <p>LAGOS</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={afrobeat}  onError={setDefaultSrc}
                alt="First slide"
                />
                <Carousel.Caption>
                {/* <h5>WAZOBIA FM 91.0</h5>
                <p>LAGOS</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={bostneer}  onError={setDefaultSrc}
                alt="First slide"
                />
                <Carousel.Caption>
                {/* <h5>WAZOBIA FM 91.0</h5>
                <p>LAGOS</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={classical}  onError={setDefaultSrc}
                alt="First slide"
                />
                <Carousel.Caption>
                {/* <h5>WAZOBIA FM 91.0</h5>
                <p>LAGOS</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={talk}
                alt="First slide"
                />
                <Carousel.Caption>
                {/* <h5>WAZOBIA FM 91.0</h5>
                <p>LAGOS</p> */}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default RecentStationBox;