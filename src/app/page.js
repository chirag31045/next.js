
// 'use client'
// import { useState } from "react";
// import styles from "./page.module.css";
// export default function Home() {
//   const [name,setName]=useState("Chirag")
//   const apple=()=>{
//     setName("Sidhu")
    
//   }
//   const InnerComp=()=>{
//     return(
//       <h1>Inner Component</h1>
//     )
//   }
//   return (
//       <main className={styles.main}>

//       <h1> Events, function and state {name}</h1>
//       <button onClick={()=>apple()}>Click Me</button>
//      {/* <InnerComp/> */}
//       {InnerComp()}  {/*as a function use */}
//       {/* <h1>Home Page</h1>
//       <User name="Chirag" />
//       <User name="Anurag" / 
//       <User name="Nitin" />
//       <User name="Hement" /> */}
//       </main>  
//   )
// }

// const User=(props)=>{
//   return(
//     <div>
//       <h2>User name is {props.name}</h2>
//     </div>
//   )
// }


'use client'
import Link from "next/link";
import styles from "./page.module.css";
import {useRouter} from 'next/navigation'
export default function Home(){
  const router=useRouter();
  const navigate=(name)=>{
    router.push(name)
  }
  return(
    <main >
      <h1>Basic Routing | Make New Page</h1>
      <Link href='/login'>Go To Login Page</Link>
      <br/>
      <br/> 
      <Link href='/about'>Go to About page</Link>
      <br/>
      <br/>
      <button onClick={()=>navigate("/login")}>Go to Login page</button>
      <br/>
      <br/>
      <button onClick={()=>navigate("/about")}>Go to About page</button>
    </main>
  )
}