import Link from "next/link";

export default function StudentList(){
    return(
        <div>
            <h1>Student List</h1>
            <ul>
                <li>
                    <Link href='/studentlist/suman'>Suman</Link>
                </li>
                <li>
                    <Link href='/studentlist/sumit'>Sumit</Link>
                </li>
                <li>
                    <Link href='/studentlist/suresh'>Suresh</Link>
                </li>
                <li>
                    <Link href='/studentlist/ramesh'>Ramesh</Link>
                </li>
            </ul>
        </div>
    )
}