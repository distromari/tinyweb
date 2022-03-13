import { Link } from 'react-router-dom'
import './menu.css';

export default function Menu() {
    return (
        <div className='menu'>
            <Link className='menu-item' to='/links'>
                My links
            </Link>
        </div>
    )
}