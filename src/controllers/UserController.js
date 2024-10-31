const User = require("../models/User");

const UserController = {
  create: async (req, res) => {
    try {
      const { nome, emil, idade } = req.body;

      const user = await User.create({ nome, email, idade });
      return res.status(200).json({
        msg: "Usuário criado com sucesso",
        user: user,
      });
    } catch (error) {
      return res.status(500).json({ msg: "Contate o suporte" });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, email, idade } = req.body;

      const userFinded = await User.findById(req.params);

      if (!userFinded) {
        return res.status(404).json({
          msg: "Usuário não encontrado",
        });
      }

      await User.findByIdAndUpdate(id, {
        nome,
        email,
        idade,
      });
      return res.status(200).json({
        msg: "Usuário atualizado com sucesso",
      });
    } catch (error) {
      msg: "Contate o suporte";
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;

      const userFinded = await User.findById(req.params);

      if (!userFinded) {
        return res.status(404).json({
          msg: "Usuário não encontrado",
        });
      }

      await User.findByIdAndDelete(id);
      return res.status(200).json({
        msg: "Usuário deletado com sucesso",
      });
    } catch (error) {
      msg: "Contate o suporte";
    }
  },
  getAll: async (req, res) => {
    try {
      const users = await User.find();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({
        msg: "Contate o suporte",
      });
    }
  },
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const userFinded = await User.findById(id);
      if (!userFinded) {
        return res.status(404).json({
          msg: "Usuário não encontrado",
        });
      }
      return res.status(200).json({
        msg: "Usuário encontrado com sucesso",
        user: userFinded,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Contate o suporte",
      });
    }
  },
};

module.exports = UserController;
