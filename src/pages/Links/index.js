import './links.css'
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi'
import { Link } from 'react-router-dom'


export default function Links() {
  return (
    <div className="links-container">
      <div className='links-header'>
        <Link to="/">
          <FiArrowLeft size={38} color='#000' />
        </Link>
        <h1>My Links</h1>
      </div>

      <div className='links-item'>
        <buttom className="link">
          <FiLink size={18} color="#fff" />
          https://github.com
        </buttom>
        <buttom className="link-delete">
          <FiTrash size={18} color="#ff5454" />
        </buttom>
      </div>
    </div>
  )
}