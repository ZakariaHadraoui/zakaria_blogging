import React from 'react'
import styles from './single.module.css'
import Image from 'next/image'
import Menu from '@/components/menu/Menu'
import Comments from '@/components/comments/comments'

const getData = async (slug) => {
	const res = await fetch(
	  `https://zakaria-blogging-ieu6.vercel.app/api/posts/${slug}`,
	  {
		cache: "no-store",
	  }
	);
  
	if (!res.ok) {
	  throw new Error("Failed");
	}
  
        return res.json();
  
};

async function SinglePostPage({params}) {
  const {slug}=params
  const data = await getData(slug)
  
 

  return (
<div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            {data?.user?.image && (
              <div className={styles.userImageContainer}>
                <Image src={data.user.image} alt="" fill className={styles.avatar} />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user.name}</span>
              <span className={styles.date}> {data.createdAt .substring(0,10)} </span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className={styles.imageContainer}>
            <Image src={data.img} alt="" fill className={styles.image} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          <div className={styles.comment}>
            <Comments postSlug={slug}/>
          </div>
        </div>
        {/* <Menu /> */}
      </div>
    </div>
  
  )
}

export default SinglePostPage
