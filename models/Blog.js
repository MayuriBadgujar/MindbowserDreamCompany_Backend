import { DataTypes } from 'sequelize';
import { sequelize } from '../libs/db.js'; 
import CommentModel from './Comments.js';  // path and file name must be exact
import UserModel from './User.js';

const BlogSchema = sequelize.define('Posts', {
  title: DataTypes.STRING,
  desc: DataTypes.STRING,
  image: DataTypes.STRING,




  // userId: {        // Add this field
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  // }




}, {
  timestamps: true,
});

BlogSchema.hasMany(CommentModel, { foreignKey: 'postId', as: 'comments' });
//BlogSchema.belongsTo(UserModel, { foreignKey: 'userId', as: 'author' });
export default BlogSchema;
