const Sequelize = require('sequelize')

const config = {
  host: '121.36.50.216',
  port: 3306,
  dialect: 'mysql',
  pool: {
   max: 5,
   min: 0,
   idle: 10000
  },
  timezone: '+08:00' //东八时区
}

/* databaseName, userName, password */
const sequelize = new Sequelize('xxx', 'xxx', 'xxx', config)

/* 定义 model */
const YongYang = sequelize.define('YongYang', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true
})

/* 同步 model 到数据库 */
YongYang.sync({ force: false }).then(function () {
  return YongYang.create(
    {
      firstName: 'Yong',
      lastName: 'Yang'
    }
  )
})

/* 查询 */
// sequelize.query('select * from YongYang where firstname = "Yong"', { type: Sequelize.QueryTypes.SELECT }).then((results) => {
//   console.log(results)
// })

/* 删除表 */
// YongYang.drop()
