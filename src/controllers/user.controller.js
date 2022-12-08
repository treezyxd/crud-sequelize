const User = require('../models/User');

module.exports = {
  async createUser(req, res) {
    try {
      const { name, email } = req.body;

      const user = await User.findOne({ where: { email } })

      if(user) {
        res.status(401).json({ message: 'Already exists an user with this email' });
      } else {
        const newUser = await User.create({name, email});
        res.status(201).json({ newUser });
      }

    } catch(err) {
      res.status(400).json({ err });
    }
  },

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { name, email } = req.body;

      const user = await User.findOne({ where: { id } });

      if(!user) {
        res.status(401).json({ message: 'User not founded' });
      } else {
        const user = await User.update({ name, email } , { where: { id } });
        res.status(200).json({ name, email  });
      }
    } catch(err) {
      res.json({ err });
    }
  },

  async listUsers(req, res) {
    try {
      const users = await User.findAll();

      if(!users) {
        res.status(400).json({ message: 'Users not found' });
      } else {
        res.status(200).json({ users });
      }
    } catch(err) {
      res.status(400).json({ err })
    }
  },

  async deleteUser(req, res) {
    try {
      const { id } = req.params;

      const user = await User.findOne({ where: { id } });

      if(!user) {
        res.status(401).json({ message: 'User not found' });
      } else {
        const user = await User.destroy({ where: { id } });
        res.status(200).json({ deleted: true });
      }
    } catch (err) {
      res.json({ err });
    }
  }
}