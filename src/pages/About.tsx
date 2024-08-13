import React from 'react'
import './css/About.css'
import TeamMembersList from '../components/TeamMembersList/TeamMembersList'
import TeamMember from '../components/TeamMember/TeamMember'
import Testimonials from '../components/Testimonials/Testimonials'

const About = () => {
    return (
        <>
            <main className='page-main'>
                <div className="above page-main-above">Short story about us</div>
                <h1 className="bl-title page-main-title">The big story behind, our beautyness center</h1>
                <a href="" className="page-main-link">Make a reservation</a>
            </main>
            <section className='about-features'>
                <div className="above text-center">Our Values</div>
                <h2 className="bl-title about-features-title">The work values we thrive for</h2>
                <div className="about-features-content d-f">
                    <div className="about-features-item d-f">
                        <div><img src="/images/about-features1.png" alt="about-features1" /></div>
                        <dl>
                            <dt>Beauty Experts</dt>
                            <dd>
                                The majority have suffered alteration in some form, buying to injected humour,
                                or randomised words which desktop publishing packages.
                            </dd>
                        </dl>
                    </div>
                    <div className="about-features-item d-f">
                        <div><img src="/images/about-features2.png" alt="about-features2" /></div>
                        <dl>
                            <dt>Great Services</dt>
                            <dd>
                                The majority have suffered alteration in some form, buying to injected humour,
                                or randomised words which desktop publishing packages.
                            </dd>
                        </dl>
                    </div>
                    <div className="about-features-item d-f">
                        <div><img src="/images/about-features3.png" alt="about-features3" /></div>
                        <dl>
                            <dt>100% Genuine</dt>
                            <dd>
                                The majority have suffered alteration in some form, buying to injected humour,
                                or randomised words which desktop publishing packages.
                            </dd>
                        </dl>
                    </div>
                </div>
            </section>
            <section className='about-style d-f'>
                <div><img src="/images/about-style.png" alt="about-style" /></div>
                <div className="about-style-content">
                    <div className="above about-style-above">About us</div>
                    <h2 className="bl-title about-style-title">Style is a Reflection of your Attitude & your Personality</h2>
                    <p className="about-style-desc">
                        There are many variations of passages of Lorem Ipsum available, but the majority
                        have suffered alteration in some form, buying to injected humour, or randomised words
                        which don't look even many desktop publishing packages.
                    </p>
                </div>
            </section>
            <section className='about-team'>
                <div className="above text-center">Meet our Experts</div>
                <h2 className="bl-title about-team-title">The amazing women behind Beautyness</h2>
                <div className="about-team-box d-f jc-sb">
                    {
                        TeamMembersList.filter((elem) => elem.id < 3).map((member) => {
                            return (
                                <TeamMember
                                    id={member.id}
                                    image={member.image}
                                    memberName={member.memberName}
                                    memberPos={member.memberPos}
                                    description={member.description}
                                />
                            )
                        })
                    }
                </div>
            </section>
            <Testimonials />
            <section className='about-follow'>
                <div className="d-f jc-sb">
                    <div>
                        <div className="above">Share us</div>
                        <h2 className="bl-title about-follow-title">Follow us on Instagram</h2>
                        <p className="about-follow-desc">
                            There are many variations of passages of Lorem Ipsum available, but the majority
                            have suffered alteration in some form, buying to injected humour, or randomised words
                            many desktop publishing packages.
                        </p>
                        <div><img src="/images/about-follow1.png" alt="about-follow1" /></div>
                    </div>
                    <div>
                        <div><img src="/images/about-follow2.png" alt="about-follow2" /></div>
                        <div style={{marginTop: "46px"}}><img src="/images/about-follow3.png" alt="about-follow3" /></div>
                    </div>
                </div>
                <a href="" className="about-follow-link">Contact us</a>
            </section>
        </>
    )
}

export default About