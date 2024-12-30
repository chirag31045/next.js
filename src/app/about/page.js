
'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
const About=()=>{
    const router=useRouter();
    return(
        <div>
            <h1>About page</h1>
            {/* <Link href='/'>Go to Home page</Link> */}
            <button onClick={()=>router.push("/")}>Go to the home page</button>

            <br/>
            <br/>
            <Link href='/about/aboutcollege'>Go to About College Page</Link>
        
            <br/>
            <br/>
            <Link href='/about/aboutstudent'>Go to About Student Page</Link>

        </div>
    )
}
export default About;