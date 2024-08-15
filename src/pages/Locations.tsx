import React from 'react'
import './css/Locations.css'

const Locations = () => {
    return (
        <>
            <main className='page-main locations-main'>
                <div className="above page-main-above">Where are here!</div>
                <h1 className="bl-title page-main-title" style={{ width: "669px" }}>Our Locations</h1>
            </main>
            <div className="locations-content d-f align-center">
                <div className="locations-content-bl d-f align-center">
                    <div><img src="/images/location1.png" alt="location1" /></div>
                    <div style={{flexShrink: 0}}>
                        <div className="above">Columbia</div>
                        <h2 className="bl-title location-title">Washington D.C</h2>
                        <div className="location-info d-f">
                            <div className="location-info-item d-f">
                                <div><img src="/images/touch/1.png" alt="touch1" /></div>
                                <dl>
                                    <dt>Visit Us :</dt>
                                    <dd>NO.09a, Downtown, SAN DIEAGO, USA</dd>
                                </dl>
                            </div>
                            <div className="location-info-item d-f">
                                <div><img src="/images/touch/2.png" alt="touch2" /></div>
                                <dl>
                                    <dt>Drop Us :</dt>
                                    <dd>support@beautyness.com</dd>
                                </dl>
                            </div>
                            <div className="location-info-item d-f">
                                <div><img src="/images/touch/3.png" alt="touch3" /></div>
                                <dl>
                                    <dt>Call Us :</dt>
                                    <dd>Call: 1-800-123-9999</dd>
                                </dl>
                            </div>
                        </div>
                        <a href="" className="locations-link">Make a reservation</a>
                    </div>
                </div>
                <div className="locations-content-bl d-f align-center">
                    <div style={{flexShrink: 0}}>
                        <div className="above">California</div>
                        <h2 className="bl-title location-title">San Diego</h2>
                        <div className="location-info d-f">
                            <div className="location-info-item d-f">
                                <div><img src="/images/touch/1.png" alt="touch1" /></div>
                                <dl>
                                    <dt>Visit Us :</dt>
                                    <dd>NO.09a, Downtown, SAN DIEGO, USA</dd>
                                </dl>
                            </div>
                            <div className="location-info-item d-f">
                                <div><img src="/images/touch/2.png" alt="touch2" /></div>
                                <dl>
                                    <dt>Drop Us :</dt>
                                    <dd>support@beautyness.com</dd>
                                </dl>
                            </div>
                            <div className="location-info-item d-f">
                                <div><img src="/images/touch/3.png" alt="touch3" /></div>
                                <dl>
                                    <dt>Call Us :</dt>
                                    <dd>Call: 1-800-123-9999</dd>
                                </dl>
                            </div>
                        </div>
                        <a href="" className="locations-link">Make a reservation</a>
                    </div>
                    <div><img src="/images/location2.png" alt="location2" /></div>
                </div>
                <div className="locations-content-bl d-f align-center">
                    <div><img src="/images/location3.png" alt="location3" /></div>
                    <div style={{flexShrink: 0}}>
                        <div className="above">France</div>
                        <h2 className="bl-title location-title">Paris</h2>
                        <div className="location-info d-f">
                            <div className="location-info-item d-f">
                                <div><img src="/images/touch/1.png" alt="touch1" /></div>
                                <dl>
                                    <dt>Visit Us :</dt>
                                    <dd>NO.09a, Downtown, SAN DIEGO, USA</dd>
                                </dl>
                            </div>
                            <div className="location-info-item d-f">
                                <div><img src="/images/touch/2.png" alt="touch2" /></div>
                                <dl>
                                    <dt>Drop Us :</dt>
                                    <dd>support@beautyness.com</dd>
                                </dl>
                            </div>
                            <div className="location-info-item d-f">
                                <div><img src="/images/touch/3.png" alt="touch3" /></div>
                                <dl>
                                    <dt>Call Us :</dt>
                                    <dd>Call: 1-800-123-9999</dd>
                                </dl>
                            </div>
                        </div>
                        <a href="" className="locations-link">Make a reservation</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Locations