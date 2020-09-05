import Contact from '../models/contact-model.mjs';

const getContacts = async (req, res, next) => {
  try {
    const result = await Contact.findAll();
    res.json({ contacts: result });
  } catch (err) {
    console.log(err);
  }
};

const postContact = async (req, res, next) => {
  try {
    const result = await Contact.create({
      name: req.body.name,
      street: req.body.street,
      city: req.body.city,
      email: req.body.email,
    });
    res.json({ message: 'New contact created', contact: result });
  } catch (err) {
    console.log(err);
  }
};

export { postContact, getContacts };
