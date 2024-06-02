import React from 'react'
import styles from './single.module.css'
import Image from 'next/image'
import Menu from '@/components/menu/Menu'
import Comments from '@/components/comments/comments'

function SinglePostPage() {
  return (
	<div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>how to be kind</h1>
          <div className={styles.user}>
              <div className={styles.userImageContainer}>
                <Image src='/p1.jpeg' alt="" fill className={styles.avatar} />
              </div>
            
            <div className={styles.userTextContainer}>
              <span className={styles.username}>zakaria</span>
              <span className={styles.date}> 10.01.2024</span>
            </div>
          </div>
        </div>
          <div className={styles.imageContainer}>
            <Image src='/p1.jpeg' alt="" fill className={styles.image} />
          </div>
        
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
          />
          <div className={styles.comment}>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem illum voluptas eos at eaque placeat maxime neque odio voluptatem, delectus, natus modi? Veniam dolore nihil eos, neque voluptatum repudiandae unde! Impedit eveniet eaque, laudantium neque earum beatae totam eligendi distinctio est hic maxime eius architecto laborum minus fugiat unde!
          </div>
		  <div className={styles.comment}>
			<Comments/>

		  </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default SinglePostPage
