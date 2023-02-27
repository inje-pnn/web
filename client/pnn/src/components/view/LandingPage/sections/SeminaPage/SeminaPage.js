import React, { useState } from "react";
import "./css/LandingMain.css";
import "swiper/swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Carousel from "react-bootstrap/Carousel";
import {
    Animator,
    ScrollContainer,
    ScrollPage,
    batch,
    Fade,
    Move,
    MoveOut,
    Sticky,
} from "react-scroll-motion";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay]);

function Semina() {
    const [messages] = useState([
        "C/C++ 세미나를 통하여 신입생분들의\n프로그래밍 적응과 기초를 쌓아갈 수 있습니다.",
        "자바 세미나를 통하여 2학년 부원들의\n객체지향 프로그래밍 실력을 쌓아갈 수 있습니다.",
        "DB 세미나를 통하여 데이터베이스의\n설계와 기초원리를 배울 수 있습니다.",
    ]);
    return (
        <ScrollContainer>
            <ScrollPage
                style={{ backgroundColor: "cornflowerblue", color: "white" }}
            >
                <Animator
                    animation={batch(
                        Move(0, 500),
                        Fade(),
                        Sticky(50, 50),
                        MoveOut(0, -400)
                    )}
                >
                    <div style={{ fontSize: 30 }}>
                        P & N <hr></hr>동아리 세미나
                    </div>
                </Animator>
            </ScrollPage>
            <div style={{ alignItems: "center", paddingTop: "3vmax" }}>
                전공 세미나
            </div>
            {/*전공 1*/}
            <section style={{ paddingTop: "2vmax" }}>
                <div style={{ border: "0" }}>
                    <div style={{ paddingBottom: "2vmax" }}>
                        <img
                            width="100vmax"
                            height="100vmax"
                            src={`${process.env.PUBLIC_URL}/images/logo/c_logo.png`}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img
                            width="100vmax"
                            height="100vmax"
                            src={`${process.env.PUBLIC_URL}/images/logo/cpp_logo.png`}
                        />
                    </div>

                    <Carousel fade Autoplay>
                        <Carousel.Item>
                            <img
                                style={{ height: "20vmax", width: "30vmax" }}
                                src={`${process.env.PUBLIC_URL}/images/logo/helloC.png`}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={{ height: "20vmax", width: "30vmax" }}
                                src={`${process.env.PUBLIC_URL}/images/logo/helloCPP.png`}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={{ height: "20vmax", width: "30vmax" }}
                                src={`${process.env.PUBLIC_URL}/images/seminar1.png`}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <p className="myPFont">{messages[0]}</p>
            </section>
            {/*전공 2*/}
            <section style={{ paddingTop: "2vmax" }}>
                <div style={{ border: "0" }}>
                    <div style={{ paddingBottom: "2vmax" }}>
                        <img
                            width="160vmax"
                            height="100vmax"
                            src={`${process.env.PUBLIC_URL}/images/logo/java_logo.png`}
                        />
                    </div>

                    <img
                        width="469px"
                        height="350px"
                        src={`${process.env.PUBLIC_URL}/images/seminar1.png`}
                    />
                </div>
                <p className="myPFont">{messages[1]}</p>
            </section>
            <br />
            <br />
            <br />
            <MoreVertIcon />
            <div style={{ alignItems: "center", paddingTop: "3vmax" }}>
                개발 세미나
            </div>
            {/*개발 1*/}
            <section style={{ paddingTop: "2vmax" }}>
                <div style={{ border: "0" }}>
                    <div style={{ paddingBottom: "2vmax" }}>
                        <img
                            width="178vmax"
                            height="70vmax"
                            src={`${process.env.PUBLIC_URL}/images/logo/mongo_logo.png`}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img
                            width="150vmax"
                            height="80vmax"
                            src={`${process.env.PUBLIC_URL}/images/logo/mysql_logo.png`}
                            style={{ paddingBottom: "0.75vmax" }}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img
                            width="150vmax"
                            height="100vmax"
                            src={`${process.env.PUBLIC_URL}/images/logo/oracle_logo.png`}
                        />
                    </div>

                    <Carousel fade Autoplay>
                        <Carousel.Item>
                            <img
                                style={{ height: "20vmax", width: "30vmax" }}
                                src={`${process.env.PUBLIC_URL}/images/logo/helloDB.png`}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={{ height: "20vmax", width: "30vmax" }}
                                src={`${process.env.PUBLIC_URL}/images/seminar3.png`}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <p className="myPFont">{messages[0]}</p>
            </section>
            {/*개발 2*/}
            <section style={{ paddingTop: "2vmax" }}>
                <div style={{ border: "0" }}>
                    <div style={{ paddingBottom: "2vmax" }}>
                        <img
                            width="200vmax"
                            height="100vmax"
                            src={`${process.env.PUBLIC_URL}/images/logo/github_logo.png`}
                        />
                    </div>

                    <img
                        width="469px"
                        height="350px"
                        src={`${process.env.PUBLIC_URL}/images/seminar1.png`}
                    />
                </div>
                <p className="myPFont">{messages[0]}</p>
            </section>
        </ScrollContainer>
    );
}

export default Semina;