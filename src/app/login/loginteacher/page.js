'use client'

import { useRouter } from "next/navigation";

const LoginTeacher=()=>{
    const router=useRouter();
    return(
        
        <div>
            <h1>login page for teacher</h1>
            <button onClick={()=>router.push("/login/")}>Go to Login page</button>
            
        </div>
    )
}
export default LoginTeacher;