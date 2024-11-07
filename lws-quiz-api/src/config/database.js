const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: false,
  define: {
    // Add these global model options
    timestamps: true, // Adds createdAt and updatedAt timestamps
    underscored: true, // Uses snake_case rather than camelCase for fields
    freezeTableName: false, // Sequelize will pluralize table names
  },
})

module.exports = sequelize
