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
    </>
  )
}

export default Home
