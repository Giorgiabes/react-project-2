import { MdEmail } from 'react-icons/md'
import { BsLinkedin } from 'react-icons/bs'


export default function Info() {
  return (
    <div className="info">
      <h1 className="info--name">Laura Smith</h1>
      <p className="info--job">Frontend Developer</p>
      <p className="info--site">Laurasmith.website</p>

      {/* info section -- buttons */}
      <div className="info--btn">

        {/* email button */}
        <button className="info--btn-email">
          <div className="info--btn-email-content">
            <MdEmail className='info--btn-email-icon' />
            <p className="info--btn-email-text">Email</p>
          </div>
        </button>

        {/* linkedin button */}
        <button className="info--btn-linkedin">
          <div className="info--btn-email-content">
            <BsLinkedin className='info--btn-linkedin-icon' />
            <p className='info--btn-linkedin-text' >LinkedIn</p>
          </div>
        </button>
      </div>
    </div>
  )
}