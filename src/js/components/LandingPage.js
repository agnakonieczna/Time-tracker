import React from "react";
import Header from "./Header";
import Sections from "./Sections";
import Footer from "./Footer";
import img1 from "../../images/undraw_dev_productivity_umsq.svg";
import img2 from "../../images/undraw_time_management_30iu.svg";
import img3 from "../../images/undraw_timeline_9u4u.svg";

class LandingPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [{
                id: 1,
                img: img1,
                alt: "Computer working girl",
                title: "Title-1",
                text: "Text-1"
            },
            {
                id: 2,
                img: img2,
                alt: "Time management",
                title: "Title-2",
                text: "Text-2"
            },
            {
                id: 3,
                img: img3,
                alt: "Timeline",
                title: "Title-3",
                text: "Text-3"
            }  
            ]
        }
    }
    render() {
        return (
            <>
            <Header />
            <Sections data={this.state.data} />
            <Footer />
            </>
        )
    }
}

export default LandingPage;