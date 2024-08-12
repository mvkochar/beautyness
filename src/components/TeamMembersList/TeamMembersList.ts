type TeamMember = {
    id: number
    image: string
    memberName: string
    memberPos: string
    description: string
}

const TeamMembersList: TeamMember[] = [
    {
        id: 0,
        image: '/images/team/1.png',
        memberName: "Sherlin D'Cruz",
        memberPos: 'Beautyness Expert',
        description: 'I must explain to you how all this mistaken idea of denouncing pleasure that will araise praising pain'
    },

    {
        id: 1,
        image: '/images/team/2.png',
        memberName: "Maria Sharapova",
        memberPos: 'Beautyness Expert',
        description: 'I must explain to you how all this mistaken idea of denouncing pleasure that will araise praising pain'
    },

    {
        id: 2,
        image: '/images/team/3.png',
        memberName: "Angeline Jenifer",
        memberPos: 'Beautyness Expert',
        description: 'I must explain to you how all this mistaken idea of denouncing pleasure that will araise praising pain'
    },
]

export default TeamMembersList