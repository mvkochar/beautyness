type TPost = {
    id: number
    image: string
    date: string
    authorName: string
    title: string
    description: string
}

const PostsList: TPost[] = [
    {
        id: 0,
        image: '/images/blog/1.png',
        date: '11th August 2021',
        authorName: 'Peter Bergson',
        title: 'The energy efficiency of the hydrotherapy or swim',
        description: 'The point of using Lorem Ipsum hiter that using making it look like others readable will get end.'
    },

    {
        id: 1,
        image: '/images/blog/2.png',
        date: '11th August 2021',
        authorName: 'Peter Bergson',
        title: 'Tips to improve your body via cleansing',
        description: 'The point of using Lorem Ipsum hiter that using making it look like others readable will get end.'
    },

    {
        id: 2,
        image: '/images/blog/3.png',
        date: '11th August 2021',
        authorName: 'Peter Bergson',
        title: 'Experience the beauty at our beauty spa',
        description: 'The point of using Lorem Ipsum hiter that using making it look like others readable will get end.'
    }
]

export default PostsList