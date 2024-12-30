
import Link from "next/link";
import './about.css'

export default function Layout({children}){
    return(
        <div>
            <ul className="about-menu">
                <li>
                    <h1>About Navbar</h1>
                </li>
                <li>
                    <Link href='/about'>Main About</Link>
                </li>
                <li>
                    <Link href='/about/aboutstudent'>Student About</Link>
                </li>
                <li>
                    <Link href='/about/aboutcollege'>College About</Link>
                </li>
            </ul>
            {children}
        </div>
    )
}