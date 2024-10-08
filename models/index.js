const Sequelize = require('sequelize')
const User = require('./user')
const Post = require('./post')
const Hashtag = require('./hashtag')
const env = process.env.DB_ENV || 'development'
const config = require('../config/config.json')[env]

const db = {}
const sequelize = new Sequelize(config.database, config.username, config.password, config)

db.sequelize = sequelize
db.User = User
db.Post = Post
db.Hashtag = Hashtag

User.initiate(sequelize)
Post.initiate(sequelize)
Hashtag.initiate(sequelize)

User.associate(db)
Post.associate(db)
Hashtag.associate(db)

module.exports = db