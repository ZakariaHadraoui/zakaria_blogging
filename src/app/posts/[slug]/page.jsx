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
  const post = await getData('hhh')
  console.log(post)
  
 

  return (
	// <div className={styles.container}>
  //     <div className={styles.infoContainer}>
  //       <div className={styles.textContainer}>
  //       <h1 className={styles.title}>{post.title}</h1>

  //         <div className={styles.user}>

  //             <div className={styles.userImageContainer}>
  //              {post.img ?  <Image src={post.user.image} alt="" fill className={styles.avatar} />:''}
  //             </div>
            
  //           <div className={styles.userTextContainer}>
  //             <span className={styles.username}>{post.user.name}</span>
  //             <span className={styles.date}> {post.createdAt}</span>
  //           </div>
  //         </div>
  //       </div>
  //         <div className={styles.imageContainer}>
  //         {post.img ?  <Image src={post.img} alt="" fill  />:''}
  //         </div>
        
  //     </div>
  //     <div className={styles.content}>
  //       <div className={styles.post}>
  //         <div
  //           className={styles.description}
  //           dangerouslySetInnerHTML={{ __html: post?.desc }}
  //         />
  //         <div className={styles.comment}>
  //           <Comments postSlug={slug} />
  //         </div>
  //       </div>
  //       <Menu />
  //     </div>
  
  //   </div>
  <h1>hello </h1>
  )
}

export default SinglePostPage
