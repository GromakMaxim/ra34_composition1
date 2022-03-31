import Card from "./Card";
import React from "react";

export default function Widget(props) {
    return (
        <div className='cards'>
            <Card
                cardTitle='Really?'
                cardText='This is card with image'
                link='#'
                linkText='Go somewhere'
            >
                <div className="card-img-top"
                     style={{
                         backgroundImage: `url("https://via.placeholder.com/200")`
                     }}
                />
            </Card>

            <Card
                cardTitle='Any adv might be here...'
                cardText='No image here =('
                link='www.google.com'
                linkText='Go to google'
            />
            <Card
                cardText='Wow! Another card with image!'
                link='https://www.youtube.com/watch?v=zSmOvYzSeaQ&ab_channel=AerosmithVEVO'
                linkText='Amazing!'>
                <div className="card-img-top"
                     style={{
                         backgroundImage: `url("https://via.placeholder.com/300")`
                     }}/>
            </Card>

            <Card
                cardText='Wow! Another card with image!'
                link='#'
                linkText='Done well!'>
                <div className="card-img-top"
                     style={{
                         backgroundImage: `url("https://via.placeholder.com/400")`
                     }}/>
            </Card>
        </div>
    );
}
