import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { EMAIL, PHONE } from 'helpers/global.helpers'
interface IProps {}

const ContactLine = (props: IProps) => {
  const {} = props
  return (
    <div className="flex flex-row items-center">
      <div className="text-gray-600 mr-5">
        <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </div>
      <div className="text-gray-600">
        <FontAwesomeIcon icon={faPhone} className="mr-3" />
        <a href={`tel:${PHONE}`}>{PHONE}</a>
      </div>
    </div>
  )
}

export default ContactLine
