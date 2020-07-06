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
                title: "Count your work time",
                text: "Time tracker helps you count how much time you spend on each task. Remember about breaks!"
            },
            {
                id: 2,
                img: img2,
                alt: "Time management",
                title: "Save tasks to do",
                text: "With time tracker you won't miss any important task to do. Manage your work time like a pro."
            },
            {
                id: 3,
                img: img3,
                alt: "Timeline",
                title: "Add operations to tasks",
                text: "Did you know that in time tracker tasks can be divided into... smaller tasks? Divide your tasks into operations, so you can faster see progress!"
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