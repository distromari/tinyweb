import { FiLink } from 'react-icons/fi'
import './home.css'

import Menu from '../../components/Menu'

export default function Home() {
    return (
      <div className="container-home">
        <Menu />
        
        <div className="logo">
            <img src="/stand.png" alt="" width={300} />
            <h1>Tinyweb</h1>
            <span>Paste your link to shorten</span>
        </div>

        <div className="input-area">
            <div>
                <FiLink 
                    size={23} 
                    color="#fff" 
                />
                <input 
                    placeholder="Paste your link here..."
                />
            </div>

            <button>Tiny web!</button>
        </div>
      </div>
    )
}