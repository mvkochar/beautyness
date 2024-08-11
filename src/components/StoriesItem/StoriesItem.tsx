import React from 'react'
import classes from './StoriesItem.module.css'

type StoriesItemProps = {
    id: number
    image: string
    date: string
    authorName: string
    title: string
    description: string
}

const StoriesItem = ({id, image, date, authorName, title, description}:StoriesItemProps) => {
  return (
    <div className={classes.stories_item}>
        <div><img src={image} alt="story" /></div>
        <div className={classes.stories_item_content}>
            <div className={classes.stories_item_info}>
                <div>{date}</div>
                <div className={classes.pattern}></div>
                <div>by {authorName}</div>
            </div>
            <div className={classes.stories_item_title}>{title}</div>
            <div className={classes.stories_item_desc}>{description}</div>
        </div>
    </div>
  )
}

export default StoriesItem