import React from 'react'
import './css/Protected.css'

const Protected = () => {
    return (
        <>
            <main className='page-main protected-main'>
                <div className="above page-main-above">Password protected</div>
                <h1 className="bl-title page-main-title" style={{ width: "669px" }}>Restricted Page</h1>
            </main>
            <div className="protected-content">
                <div className="protected-info">
                    <div className="above">Enter Password</div>
                    <h2 className="bl-title protected-info-title">Password Protected</h2>
                    <p className="protected-info-desc">
                        This page is password protected. If you are the website admin, or have access 
                        to this page, please type your password below.
                    </p>
                    <form action="" className="protected-fm">
                        <input type="password" name="userPwd" placeholder='Enter your password' />
                        <button type="button">Submit now</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Protected