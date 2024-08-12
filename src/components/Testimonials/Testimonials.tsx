import React from 'react'

const Testimonials = () => {
    return (
        <section className='home-testimonials'>
            <div className="above home-testimonials-above">Testimonials</div>
            <h2 className="bl-title home-testimonials-title">What our Customers says...</h2>
            <div className="home-testimonials-box d-f jc-sb">
                <div className="home-testimonials-item">
                    <p className="testimonials-item-text">
                        “ It is a long established fact that a reader will be tracked distracted
                        by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English “
                    </p>
                    <div className="testimonials-item-user d-f jc-sb">
                        <div className='d-f'>
                            <div><img src="/images/testimonial-author1.png" alt="testimonial-author1" /></div>
                            <div style={{ marginLeft: "20px" }}>
                                <div className="testimonials-item-rating d-f">
                                    <div><img src="/images/star.png" alt="star" /></div>
                                    <div><img src="/images/star.png" alt="star" /></div>
                                    <div><img src="/images/star.png" alt="star" /></div>
                                    <div><img src="/images/star.png" alt="star" /></div>
                                    <div><img src="/images/star-half.png" alt="star-half" /></div>
                                </div>
                                <div className="user-name">James Williams</div>
                                <div className="user-country">United States</div>
                            </div>
                        </div>
                        <div><img src="/images/quote.png" alt="quote" /></div>
                    </div>
                </div>
                <div className="home-testimonials-item">
                    <p className="testimonials-item-text">
                        “ It is a long established fact that a reader will be tracked distracted
                        by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English “
                    </p>
                    <div className="testimonials-item-user d-f jc-sb">
                        <div className='d-f'>
                            <div><img src="/images/testimonial-author2.png" alt="testimonial-author2" /></div>
                            <div style={{ marginLeft: "20px" }}>
                                <div className="testimonials-item-rating d-f">
                                    <div><img src="/images/star.png" alt="star" /></div>
                                    <div><img src="/images/star.png" alt="star" /></div>
                                    <div><img src="/images/star.png" alt="star" /></div>
                                    <div><img src="/images/star.png" alt="star" /></div>
                                    <div><img src="/images/star-half.png" alt="star-half" /></div>
                                </div>
                                <div className="user-name">Lieo Jessica</div>
                                <div className="user-country">United Kingdom</div>
                            </div>
                        </div>
                        <div><img src="/images/quote.png" alt="quote" /></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials