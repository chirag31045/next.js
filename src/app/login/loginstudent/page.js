'use client'

import { useRouter } from "next/navigation";

const LoginStudent=()=>{
    const router=useRouter();
    return(
        <div>
            <h1>Login page for student</h1>
            <button onClick={()=>router.push("/login/")}>Go to Login page</button>

        </div>
    )
}
export default LoginStudent;