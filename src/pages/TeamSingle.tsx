import React from 'react'
import './css/TeamSingle.css'
import { useParams } from 'react-router-dom'
import TeamMembersList from '../components/TeamMembersList/TeamMembersList'

const TeamSingle = () => {
    const { id } = useParams<string>()
    let a = id ? id : '0'
    let index = parseInt(a)

    const currentMember = TeamMembersList[index]

    return (
        <>
            <main className='page-main ts-main'>
                <div className="above page-main-above">The expert</div>
                <h1 className="bl-title page-main-title">Creative Beauty Team</h1>
            </main>
            <section className='ts-content d-f jc-sb align-center'>
                <div><img src={currentMember.image} alt="member" width={539} /></div>
                <div>
                    <div className="above">{currentMember.memberPos}</div>
                    <h2 className="bl-title ts-member-name">{currentMember.memberName}</h2>
                    <p className="ts-member-desc">{currentMember.description}</p>
                    <div className="ts-member-contact d-f">
                        <div className="member-contact-item d-f align-center">
                            <div><img src="/images/touch/3.png" alt="touch3" /></div>
                            <div className="bl-title contact-item-title">{currentMember.phone}</div>
                        </div>
                        <div className="member-contact-item d-f align-center">
                            <div><img src="/images/touch/2.png" alt="touch2" /></div>
                            <div className="bl-title contact-item-title">{currentMember.email}</div>
                        </div>
                    </div>
                    <a href="" className="ts-member-link">Make a reservation</a>
                    <div className="ts-member-social d-f">
                        <div><img src="/images/member-social1.png" alt="member-social1" /></div>
                        <div><img src="/images/member-social2.png" alt="member-social2" /></div>
                        <div><img src="/images/member-social3.png" alt="member-social3" /></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TeamSingle