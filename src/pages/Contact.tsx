import React from 'react'
import './css/Contact.css'

const Contact = () => {
    return (
        <>
            <main className='page-main contact-main'>
                <div className="above page-main-above">Get in touch with us</div>
                <h1 className="bl-title page-main-title" style={{ width: "669px" }}>We Are Ready To Assist You In 24x7</h1>
            </main>
            <section className='contact-touch d-f jc-sb align-center'>
                <div><img src="/images/contact.png" alt="contact" /></div>
                <div>
                    <div className="above">Get in touch</div>
                    <h2 className="bl-title contact-touch-title">We are here to help you always...</h2>
                    <p className="contact-touch-desc">
                        There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration in some form, buying
                        to many desktop publishing packages.
                    </p>
                    <div className="contact-touch-box d-f">
                        <div className="contact-touch-item d-f">
                            <div><img src="/images/touch/1.png" alt="touch1" /></div>
                            <dl>
                                <dt>Visit Us :</dt>
                                <dd>NO.09a, Downtown, SAN DIEGO, USA</dd>
                            </dl>
                        </div>
                        <div className="contact-touch-item d-f">
                            <div><img src="/images/touch/2.png" alt="touch2" /></div>
                            <dl>
                                <dt>Drop Us :</dt>
                                <dd>support@beautyness.com</dd>
                            </dl>
                        </div>
                        <div className="contact-touch-item d-f">
                            <div><img src="/images/touch/3.png" alt="touch3" /></div>
                            <dl>
                                <dt>Call Us :</dt>
                                <dd>Call: 1-800-123-9999</dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </section>
            <section className='contact-appointment'>
                <div className="above text-center">Schedule your presence</div>
                <h2 className="bl-title contact-appointment-title">Make an Appointment</h2>
                <p className="contact-appointment-desc">
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form.
                </p>
                <form action="" className='contact-appointment-fm'>
                    <input type="text" name='appointmentName' placeholder='Name' />
                    <input type="email" name='appointmentEmail' placeholder='Email' />
                    <input type="tel" name="appointmentPhone" placeholder='Phone' />
                    <input type="text" name='appointmentService' placeholder='Service You Need' />
                    <textarea name="appointmentNote" placeholder='Any Note For Us'></textarea>
                    <a href="">Get an appointment</a>
                </form>
            </section>
        </>
    )
}

export default Contact