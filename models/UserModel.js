const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../database/sequelize');

class User extends Model {
  static async checkPassword(email, password) {
    const users = await User.findAll({
      where: {
        email: email,
        password: password
      }
    });
    return users.length > 0;
  }
}
User.init({
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      args: true,
      msg: 'Email address already in use!'
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'users'
});

// (async () => {
//   await sequelize.sync({ force: true });
//   // Code here
// })();

module.exports = User;