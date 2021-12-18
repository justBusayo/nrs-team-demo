import React, {useState, useEffect} from "react";
import AudioPlayer from "react-h5-audio-player";
import userEvent from "@testing-library/user-event"
import { Container, Row, Col} from "react-bootstrap";

import Menu from "./Menu.js"
import RadioBox from "./RadioBox.js"
import RecentStationBox from "./RecentStationBox.js"

const Home = () => {
    return (
        <div>
            <Menu></Menu>
            {/* for popular section */}
            <Container>
                <div className="RadioBoxHeader">
                    <span className="boxTitle">POPULAR STATIONS</span>
                    <span className="more">More</span>
                </div>
                <RadioBox></RadioBox>
            </Container>
            {/* for recent stations */}
            <Container>
                <div className="RadioBoxHeader">
                    <span className="boxTitle">RECENT STATIONS</span>
                    <span className="more">More</span>
                </div>
                <Row className="rentStations">
                    <Col> <RecentStationBox></RecentStationBox> </Col>
                    <Col> <RecentStationBox></RecentStationBox> </Col>
                    <Col> <RecentStationBox></RecentStationBox> </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home