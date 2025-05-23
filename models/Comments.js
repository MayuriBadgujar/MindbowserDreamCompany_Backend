
import { DataTypes } from 'sequelize';
import { sequelize } from '../libs/db.js';  

const CommentModel = sequelize.define('Comment', {
  postId: {
    type: DataTypes.INTEGER,  
    allowNull: false,
    references: {
      model: 'Posts',  
      key: 'id',
    },
    onDelete: 'CASCADE',  
  },
  userId: {
    type: DataTypes.INTEGER,  
    allowNull: false,
    references: {
      model: 'User',  
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
  tableName: 'Comments', 
});

export default CommentModel;
