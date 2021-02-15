import React, {Component} from 'react';
import image from '../Stowe.jpg';

class Home extends Component {
    render () {
        return (
            <main>
                <img 
                src={image} 
                alt="Brack and Bougie"
                className="absolute object-cover w-full h-full"
                />
                <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                    <h1
                        className="text-6xl text-primaryGreen font-bold cursive leading-none lg:leading-snug home-name"
                    >
                    Hi There!</h1>
                </section>
            </main>
        )
    }
}

export default Home;