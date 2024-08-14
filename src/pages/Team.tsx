import React from 'react'
import './css/Team.css'
import TeamMembersList from '../components/TeamMembersList/TeamMembersList'
import TeamMember from '../components/TeamMember/TeamMember'

const Team = () => {
    return (
        <>
            <main className='page-main team-main'>
                <div className="above page-main-above">The beauty team</div>
                <h1 className="bl-title page-main-title" style={{ width: "669px" }}>Beautyness Experts</h1>
            </main>
            <section className='team-content' >
                <div className="above text-center">Meet our Experts</div>
                <h2 className="bl-title team-content-title">The amazing women behind Beautyness</h2>
                <div className="team-box d-f jc-sb">
                    {
                        TeamMembersList.map((member) => {
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
        </>
    )
}

export default Team