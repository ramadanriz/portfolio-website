import SectionTitle from "../components/SectionTitle"
import List from '../components/contacts/List'
import { contacts } from "../constant"

const Contacts = () => {
  return (
    <div className='mt-2'>
      <SectionTitle>Contact</SectionTitle>
      <p>Please don’t hesitate to get in touch with me by following my social media below:</p>
      <List contacts={contacts} />
    </div>
  )
}

export default Contacts