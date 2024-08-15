import React from 'react'
import './css/NotFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
            <main className='page-main nf-main'>
                <div className="above page-main-above">Page Not Found</div>
                <h1 className="bl-title page-main-title" style={{ width: "669px" }}>404 Error Page</h1>
            </main>
            <section className='nf-content'>
                <div><img src="/images/404.png" alt="Not Found" /></div>
                <h2 className="nf-content-title">Page not Found!!!</h2>
                <p className="nf-content-desc">
                    The page you are looking for doesn't exist. Please try searching for 
                    some other page, or return to the website's homepage to find what you're looking for.
                </p>
                <Link to='/' className='nf-content-link'>Back to home</Link>
            </section>
        </>
    )
}

export default NotFound