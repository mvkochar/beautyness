import React from 'react'
import './TeamMember.css'
import { Link } from 'react-router-dom'

type TeamMemberProps = {
    id: number
    image: string
    memberName: string
    memberPos: string
    description: string
}

const TeamMember = ({ id, image, memberName, memberPos, description }: TeamMemberProps) => {
    return (
        <div className='team-member'>
            <div><Link to={`/team-member/${id}`}><img src={image} alt="team-member" /></Link></div>
            <div className="team-member-info">
                <h4 className="team-member-name">{memberName}</h4>
                <div className="team-member-pos">{memberPos}</div>
                <p className="team-member-desc">{description}</p>
                <div className="team-member-social d-f">
                    <div><img src="/images/member-social1.png" alt="member-social1" /></div>
                    <div><img src="/images/member-social2.png" alt="member-social2" /></div>
                    <div><img src="/images/member-social3.png" alt="member-social3" /></div>
                </div>
            </div>
        </div>
    )
}

export default TeamMember