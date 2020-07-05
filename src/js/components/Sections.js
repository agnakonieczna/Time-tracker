import React from "react";
import Section from "./Section";

class Sections extends React.Component {
    render() {
        return (    
            this.props.data.map(section => {
                    return <Section class={`section-${section.id}`} key={section.id} img={section.img} title={section.title} text={section.text} alt={section.alt}/>
            })
        ) 
    }
}

export default Sections;