"use client";
import React from "react";
import { signIn, useSession } from "next-auth/react";
import styles from './login.module.css'
import { useRouter } from "next/navigation";


function LoginPage() {
	const { status,data } = useSession();

	console.log(status,data)

  const router = useRouter();

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/")
  }
  
	
  return (
	<div className={styles.container}>
      <div className={styles.wrapper}>
	    <div className={styles.socialButton} onClick={() => signIn("google")}>
          Sign in with Google
        </div>
      
      </div>
    </div>
  )
}

export default LoginPage
