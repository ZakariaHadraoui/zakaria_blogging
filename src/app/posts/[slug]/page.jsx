import React from 'react'
import styles from './single.module.css'
import Image from 'next/image'
import Menu from '@/components/menu/Menu'
import Comments from '@/components/comments/comments'

const getData = async (slug) => {
	const res = await fetch(
	  `http://localhost:3000/api/posts/${slug}`,
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
  const post = await getData(slug)
  console.log(post)
  
 

  return (
    <h1 className={styles.title}>{post.title}</h1>

  )
}

export default SinglePostPage
