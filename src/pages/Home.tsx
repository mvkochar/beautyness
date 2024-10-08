import React from 'react'
import "./css/Home.css"
import PostsList from '../components/PostsList/PostsList'
import StoriesItem from '../components/StoriesItem/StoriesItem'
import Testimonials from '../components/Testimonials/Testimonials'

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
      <Testimonials/>
      <section className='home-benefits'>
        <div className="above home-benefits-above">Our Awesome Benefits</div>
        <h2 className="bl-title home-benefits-title">Actually what you'll get from</h2>
        <div className="home-benefits-box d-f jc-sb">
          <div className="home-benefits-item">
            <div><img src="/images/benefits-icon.png" alt="benefits-icon" /></div>
            <h4 className="benefits-item-title">Optimised Energy <br /> Efficiency</h4>
            <p className="benefits-item-desc">
              The point of using Lorem Ipsum is that  using making it look like readable.
            </p>
          </div>
          <div className="home-benefits-item">
            <div><img src="/images/benefits-icon.png" alt="benefits-icon" /></div>
            <h4 className="benefits-item-title">Multi-faceted <br /> Water Filtration</h4>
            <p className="benefits-item-desc">
              The point of using Lorem Ipsum is that  using making it look like readable.
            </p>
          </div>
          <div className="home-benefits-item">
            <div><img src="/images/benefits-icon.png" alt="benefits-icon" /></div>
            <h4 className="benefits-item-title">Uncompromising Quality <br /> and Durability</h4>
            <p className="benefits-item-desc">
              The point of using Lorem Ipsum is that  using making it look like readable.
            </p>
          </div>
          <div className="home-benefits-item">
            <div><img src="/images/benefits-icon.png" alt="benefits-icon" /></div>
            <h4 className="benefits-item-title">An Ultra-Pampering Spa <br /> Experience</h4>
            <p className="benefits-item-desc">
              The point of using Lorem Ipsum is that  using making it look like readable.
            </p>
          </div>
          <div className="home-benefits-item">
            <div><img src="/images/benefits-icon.png" alt="benefits-icon" /></div>
            <h4 className="benefits-item-title">Easy Care for Unparalleled <br /> Enjoyment</h4>
            <p className="benefits-item-desc">
              The point of using Lorem Ipsum is that  using making it look like readable.
            </p>
          </div>
          <div className="home-benefits-item">
            <div><img src="/images/benefits-icon.png" alt="benefits-icon" /></div>
            <h4 className="benefits-item-title">Optimised Energy <br /> Efficiency</h4>
            <p className="benefits-item-desc">
              The point of using Lorem Ipsum is that  using making it look like readable.
            </p>
          </div>
        </div>
      </section>
      <section className="home-appointment d-f jc-sb align-center">
        <div>
          <div className="above">Flat Discount</div>
          <h2 className="bl-title home-appointment-title">Claim upto 50% off er on‍ the most popular services...</h2>
          <p className="home-appointment-desc">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered
            alteration in some form, buying to injected humour, or randomised words.
          </p>
          <div className='home-appointment-content d-f'>
            <div className="home-appointment-contact d-f">
              <div className="appointment-contact-item d-f">
                <div><img src="/images/pattern.svg" alt="pattern" /></div>
                <dl>
                  <dt>Mail us :</dt>
                  <dd>info@beautyness.com</dd>
                </dl>
              </div>
              <div className="appointment-contact-item d-f">
                <div><img src="/images/pattern.svg" alt="pattern" /></div>
                <dl>
                  <dt>Call us :</dt>
                  <dd>(+22) 123 4568 009</dd>
                </dl>
              </div>
            </div>
            <div className="home-appointment-offer">
              <div className="appointment-offer-title">Get flat</div>
              <div><img src="/images/offer.png" alt="offer" /></div>
              <div className="appointment-offer-subtitle">Discount</div>
            </div>
          </div>
        </div>
        <form action="" className='home-appointment-fm'>
          <input type="text" name='appointmentName' placeholder='Name' />
          <input type="email" name='appointmentEmail' placeholder='Email' />
          <input type="tel" name="appointmentPhone" placeholder='Phone' />
          <input type="text" name='appointmentService' placeholder='Service You Need' />
          <textarea name="appointmentNote" placeholder='Any Note For Us'></textarea>
          <a href="">Get an appointment</a>
        </form>
      </section>
      <section className="home-blog">
        <div className="above text-center">Our Blog</div>
        <h2 className="bl-title text-center">Latest Updates</h2>
        <div className="home-blog-box d-f jc-sb">
          {
            PostsList.filter((elem) => elem.id < 3).map((post) => {
              return (
                <StoriesItem
                  id={post.id}
                  image={post.image}
                  date={post.date}
                  authorName={post.authorName}
                  title={post.title}
                  description={post.description}
                />
              )
            })
          }
        </div>
        <a href="" className="home-blog-more">View more stories</a>
      </section>
    </>
  )
}

export default Home
