const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    commentContent: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    post_id: {
      type: DataTypes.UUID,
      references: {
        model: "post",
        key: "id",
      },
    },
  },
  {
    hooks: {
      beforeDestroy: async (comment) => {
        await Comment.destroy({
          where: { user_id: comment.user_id },
          individualHooks: true,
        });
      },
    },
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: "comment",
  }
);

module.exports = Comment;
