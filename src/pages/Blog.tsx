import React from 'react'
import './css/Blog.css'
import PostsList from '../components/PostsList/PostsList'
import StoriesItem from '../components/StoriesItem/StoriesItem'

const Blog = () => {
    return (
        <>
            <main className='page-main blog-main'>
                <div className="above page-main-above">Blog</div>
                <h1 className="bl-title page-main-title" style={{ width: "669px" }}>Articles & News</h1>
            </main>
            <div className="blog-content d-f jc-sb">
                {
                    PostsList.map((post) => {
                        return (
                            <StoriesItem
                                id={post.id}
                                image={post.image}
                                date={post.date}
                                authorName={post.authorName}
                                title={post.title}
                                description={post.description}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Blog