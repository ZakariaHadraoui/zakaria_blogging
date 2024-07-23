'use client'
import Image from 'next/image'
import React from 'react'
import styles from './card.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Card({key,data}) {
  

	
	 
 
  
  return (
    <div className={styles.container} key={key}>
       <div className={styles.imageContainer}>
        {data.img ? <Image src={data.img} fill className={styles.image}/> : ''}
       
	 </div>
       <div className={styles.textContainer}>
       <div className={styles.userImageContainer}>
               {data.user ?  <Image src={data.user.image} alt="" fill className={styles.avatar} />:''}
        </div>

            <div className={styles.detail}>
                  <span>category :<span className={styles.category}>    {data.catSlug} </span> </span>
                  <span className={styles.date}> --  {data.createdAt .substring(0,10)} </span>

            </div>
            <Link href={`/posts/${data.slug}`}>
                  <h1>{data.title}</h1>
            </Link>
            <div className={styles.desc} dangerouslySetInnerHTML={{ __html: data?.desc.substring(0,60) }}/>
            <Link className={styles.link} href={`/posts/${data.slug}`}>Read more</Link>
       </div>

      
    </div>
  )
}

export default Card
