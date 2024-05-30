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
		<Image src={data.img} fill className={styles.image}/>
       
	 </div>
       <div className={styles.textContainer}>
            <div className={styles.detail}>
                  <span className={styles.date}>11.01.10</span>
                  <span className={styles.category}>{data.catSlug}</span>

            </div>
            <Link href='/'>
                  <h1>{data.title}</h1>
            </Link>
            <p className={styles.desc}>{data.desc}</p>
       <Link className={styles.link} href='/readMore'>Read more</Link>
       </div>

      
    </div>
  )
}

export default Card
