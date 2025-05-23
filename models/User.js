
import { DataTypes } from 'sequelize';
import { sequelize } from '../libs/db.js'; // adjust path as needed

const UserModal = sequelize.define('User', {
  FullName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  profile: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  role: {
    type: DataTypes.ENUM('admin', 'user'),
    defaultValue: 'user',
  }
}, {
  timestamps: true, 
  
});

export default UserModal;
