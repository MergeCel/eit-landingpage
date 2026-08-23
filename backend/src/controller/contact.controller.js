import * as ContactModel from '../model/contact.model.js'

export const get = (_req, res) => {
  res.json(ContactModel.getContact())
}
