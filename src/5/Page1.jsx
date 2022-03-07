import { Link } from 'react-router-dom'


export const Page1 = () => {
    return (
        <div>
            <h1>page 1</h1>
            <ul>
                <li>
                    <Link to='/page1/detail1'>detail a</Link>
                </li>
                <li>
                    <Link to='/page1/detail2'>detail b</Link>
                </li>
            </ul>
        </div>
    )
}