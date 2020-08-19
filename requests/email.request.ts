import { api } from '.'
import { IContactUsEmailForm } from 'types/email.types'

export const sendContactUsEmailRequest = async (
  to_email: string,
  form: IContactUsEmailForm
) => {
  return api.post(`/email/send`, {
    meta: {
      collection_handle: 'mf-website',
      schema_handle: 'email_template',
      id: '256823870456070676'
    },
    to_email: to_email,
    data: form
  })
}
