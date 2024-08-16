import React from 'react'
import './css/License.css'

const License = () => {
    return (
        <>
            <main className='page-main license-main'>
                <div className="above page-main-above">Beautyness licenses</div>
                <h1 className="bl-title page-main-title">Licenses</h1>
            </main>
            <div className="license-content d-f">
                <dl>
                    <dt>Photography</dt>
                    <dd>
                        All images used in the Doctorate Webflow Template are licensed for free personal
                        and commercial use. If you'd like to use any specific image, you can check the
                        licenses and download the images for free on <span className='bold-txt'>Unsplash, Pexels.</span>
                    </dd>
                </dl>
                <dl>
                    <dt>Unsplash : <span className='green-txt'>Licenses</span></dt>
                    <dd className='green-txt'>
                        Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10
                    </dd>
                </dl>
                <dl>
                    <dt>Pexels : <span className='green-txt'>Licenses</span></dt>
                    <dd className='green-txt'>
                        Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image 14
                    </dd>
                </dl>
                <dl>
                    <dt>Font</dt>
                    <dd>
                        Doctorate template uses free licensed <span>Google Fonts.</span> Please check <span>Playfair Display</span> and <span> Manrope</span>.
                    </dd>
                </dl>
            </div>
        </>
    )
}

export default License