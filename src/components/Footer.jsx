import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
} from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer--icons'>
        <FaTwitterSquare className='footer--icon' />
        <FaFacebookSquare className='footer--icon' />
        <FaInstagramSquare className='footer--icon' />
        <FaGithubSquare className='footer--icon' />
      </div>
    </div>
  )
}