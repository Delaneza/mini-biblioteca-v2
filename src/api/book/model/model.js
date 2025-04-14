import { DataTypes } from 'sequelize'
import sequelize from '../../../../config/database.js'
import Author from '../../author/model/model.js'

const Book = sequelize.define(
  'Book',
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'authors',
        key: 'id',
      },
    },
  },
  {
    tableName: 'books',
    timestamps: true,
  }
)

Book.belongsTo(Author, { foreignKey: 'author_id', as: 'author' })
Author.hasMany(Book, { foreignKey: 'author_id', as: 'books' })

export default Book
