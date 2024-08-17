import React from 'react'
import './css/Changelog.css'

const Changelog = () => {
    return (
        <>
            <main className='page-main changelog-main'>
                <div className="above page-main-above">Template change</div>
                <h1 className="bl-title page-main-title">Changelog</h1>
            </main>
            <section className='changelog-version d-f align-center'>
                <div className="changelog-version-num">V.1</div>
                <div className="changelog-version-title">Initial Beautyness Webflow Template Release</div>
            </section>
        </>
    )
}

export default Changelog