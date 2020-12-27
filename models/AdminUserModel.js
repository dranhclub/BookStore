const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../database/sequelize');

class AdminUser extends Model {
  static async checkPassword(email, password) {
    const users = await AdminUser.findAll({
      where: {
        email: email,
        password: password
      }
    });
    return users.length > 0;
  }
}
AdminUser.init({
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
  tableName: 'admin_users'
});

// (async () => {
//   await sequelize.sync({ force: true });
//   // Code here
//   AdminUser.create({
//     email: 'admin@gmail.com',
//     password: 'admin'
//   })
// })();

module.exports = AdminUser;