import React from 'react';
import state from '../state';
import Header from "./Header";

const Testimonials = () => {
    const renderQuotes = () => {
        return (
            state.testimonials.map((quote) => {
                    return (
                        <div className="container">
                            <p>"{quote.testimonial}"</p>
                            <p><strong>{quote.author}</strong></p>
                            <p><strong>{quote.title}</strong></p>
                        </div>
                    );
                }
            )
        )
    };

    return (
        <section className='testimonials-page'>
            <Header/>
            <div>{renderQuotes()}</div>
        </section>
    )
};

export default Testimonials;
