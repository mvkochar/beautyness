import React from 'react'
import "./css/Home.css"

const Home = () => {
  return (
    <>
      <main className='home-main'>
        <div className="above home-main-above">Welcome to Beautyness!!!</div>
        <h1 className="home-title">Beauty is power a smile is its sword.</h1>
        <p className="home-desc">
          There are many variation of passages are Ipsum available, majority have suffered alteration in some form.
        </p>
        <a href="" className="home-main-link">Make a reservation</a>
      </main>
      <div className="home-features d-f jc-sb">
        <div className="home-features-item">
          <div><img src="/images/features1.png" alt="features1" /></div>
          <h4 className="faeatures-item-title">Spa & Massage</h4>
          <p className="features-item-desc">
            If you are going to use a passage offer Lorem Ipsum, you need to be sure hidden in the middle of text.
          </p>
          <a href="" className="features-item-link">Read more</a>
        </div>
        <div className="home-features-item">
          <div><img src="/images/features2.png" alt="features2" /></div>
          <h4 className="faeatures-item-title">Hair & Beauty</h4>
          <p className="features-item-desc">
            If you are going to use a passage offer Lorem Ipsum, you need to be sure hidden in the middle of text.
          </p>
          <a href="" className="features-item-link">Read more</a>
        </div>
        <div className="home-features-item">
          <div><img src="/images/features3.png" alt="features3" /></div>
          <h4 className="faeatures-item-title">Body Treatments</h4>
          <p className="features-item-desc">
            If you are going to use a passage offer Lorem Ipsum, you need to be sure hidden in the middle of text.
          </p>
          <a href="" className="features-item-link">Read more</a>
        </div>
      </div>
      <section className='home-about d-f jc-sb align-center'>
        <div>
          <div className="above">About Us</div>
          <h2 className="bl-title home-about-title">The Beauty is about being Comfortable in your own skin!</h2>
          <p className="home-about-desc">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered
            alteration in some form, buying to injected humour, or randomised words which don't look even
            many desktop publishing packages.
          </p>
          <div className="home-about-points d-f">
            <div className="about-points-item">
              <div><img src="/images/about-points1.png" alt="about-points1" /></div>
              <div className="points-item-title">Beauty Experts</div>
            </div>
            <div className="about-points-item">
              <div><img src="/images/about-points2.png" alt="about-points2" /></div>
              <div className="points-item-title">Great Services</div>
            </div>
            <div className="about-points-item">
              <div><img src="/images/about-points3.png" alt="about-points3" /></div>
              <div className="points-item-title">100% Genuine</div>
            </div>
          </div>
        </div>
        <div><img src="/images/home-about.png" alt="home-about" /></div>
      </section>
      <section className='home-services'>
        <div className="above home-services-above">Our services</div>
        <h2 className="bl-title home-services-title">We are Experienced in making you very Beautiful</h2>
        <div className="d-f jc-sb">
          <div><img src="/images/home-services1.png" alt="home-services1" /></div>
          <div style={{ marginTop: "24px" }}>
            <div className="service-content d-f">
              <div className='service-content-bl'>
                <div className='service-info'>
                  <span className='service-title'>Face masks </span>
                  <span className='service-divider'>....................................... </span>
                  <span className='service-from'>from </span>
                  <span className='service-price'>$48.00</span>
                </div>
                <p className="service-note">The versions have evolved over the sometimes by accident.</p>
              </div>
              <div className='service-content-bl'>
                <div className='service-info'>
                  <span className='service-title'>Full body massage </span>
                  <span className='service-divider'>............................. </span>
                  <span className='service-from'>from </span>
                  <span className='service-price'>$54.00</span>
                </div>
                <p className="service-note">The versions have evolved over the sometimes by accident.</p>
              </div>
              <div className='service-content-bl'>
                <div className='service-info'>
                  <span className='service-title'>Geothermal spa </span>
                  <span className='service-divider'>................................. </span>
                  <span className='service-from'>from </span>
                  <span className='service-price'>$54.00</span>
                </div>
                <p className="service-note">The versions have evolved over the sometimes by accident.</p>
              </div>
              <div className='service-content-bl'>
                <div className='service-info'>
                  <span className='service-title'>Sauna relax </span>
                  <span className='service-divider'>....................................... </span>
                  <span className='service-from'>from </span>
                  <span className='service-price'>$73.00</span>
                </div>
                <p className="service-note">The versions have evolved over the sometimes by accident.</p>
              </div>
            </div>
            <a href="" className="home-services-link">Get an appointment</a>
          </div>
        </div>
        <div className="d-f jc-sb align-center" style={{ marginTop: "-84px", marginLeft: "39px", marginRight: "-81px" }}>
          <div>
            <div className="service-content d-f">
              <div className='service-content-bl'>
                <div className='service-info'>
                  <span className='service-title'>Face masks </span>
                  <span className='service-divider'>....................................... </span>
                  <span className='service-from'>from </span>
                  <span className='service-price'>$48.00</span>
                </div>
                <p className="service-note">The versions have evolved over the sometimes by accident.</p>
              </div>
              <div className='service-content-bl'>
                <div className='service-info'>
                  <span className='service-title'>Full body massage </span>
                  <span className='service-divider'>............................. </span>
                  <span className='service-from'>from </span>
                  <span className='service-price'>$54.00</span>
                </div>
                <p className="service-note">The versions have evolved over the sometimes by accident.</p>
              </div>
              <div className='service-content-bl'>
                <div className='service-info'>
                  <span className='service-title'>Geothermal spa </span>
                  <span className='service-divider'>................................. </span>
                  <span className='service-from'>from </span>
                  <span className='service-price'>$54.00</span>
                </div>
                <p className="service-note">The versions have evolved over the sometimes by accident.</p>
              </div>
              <div className='service-content-bl'>
                <div className='service-info'>
                  <span className='service-title'>Sauna relax </span>
                  <span className='service-divider'>....................................... </span>
                  <span className='service-from'>from </span>
                  <span className='service-price'>$73.00</span>
                </div>
                <p className="service-note">The versions have evolved over the sometimes by accident.</p>
              </div>
            </div>
            <a href="" className="home-services-link">Get an appointment</a>
          </div>
          <div><img src="/images/home-services2.png" alt="home-services2" /></div>
        </div>
      </section>
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
                <div style={{marginLeft: "20px"}}>
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
                <div style={{marginLeft: "20px"}}>
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
    </>
  )
}

export default Home
