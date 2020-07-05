import React from "react";

class Section extends React.Component {
    render() {
        return (
            <section className={this.props.class}>
                    <img className="section__img" src={this.props.img} alt={this.props.alt}></img>
                    <div className="section__content">
                        <h1>{this.props.title}</h1>
                        <p>{this.props.text}</p>
                    </div>
            </section>
        )
    }
}

export default Section;