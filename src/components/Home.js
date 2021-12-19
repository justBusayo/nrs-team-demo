import React, {useState, useEffect} from "react";
import AudioPlayer from "react-h5-audio-player";
import userEvent from "@testing-library/user-event"
import { Container, Row, Col} from "react-bootstrap";

import Menu from "./Menu.js"
import RadioBox from "./RadioBox.js"
import RecentStationBox from "./RecentStationBox.js"
import SearchBox from "./SearchBox.js";
const Home = () => {
    return (
        <div>
            <Container style={{marginTop:"1.5em"}}>
                <SearchBox></SearchBox>
            </Container>
            {/* for popular section */}
            <Container>
                <div className="RadioBoxHeader">
                    <span className="boxTitle">POPULAR STATIONS</span>
                    <span className="more">More</span>
                </div>
                <RadioBox />
            </Container>
            {/* for recent stations */}
            <Container>
                <div className="RadioBoxHeader">
                    <span className="boxTitle">CATEGORIES</span>
                    <span className="more">More</span>
                </div>
                {/* <Row className="rentStations">
                    <Col> <RecentStationBox></RecentStationBox> </Col> */}
                    <Col> <RecentStationBox></RecentStationBox> </Col>
                    {/* <Col> <RecentStationBox></RecentStationBox> </Col>
                </Row> */}
            </Container>
            {/* for favorite Box */}
            <Container style={{marginBottom:"5em"}}>
                <div className="RadioBoxHeader">
                    <span className="boxTitle">MORE STATIONS</span>
                    <span className="more">More</span>
                </div>
                <RadioBox></RadioBox>
            </Container>

            {/* Now Playing Section */}
            {/* <div className="nowPlaying">
                <NowPlaying></NowPlaying>
            </div> */}
        </div>
    )
}

export default Home