const findAll = ( connection ) => {

  return new Promise((resolve, reject) => {

    connection.query("select * from pessoas", (err, results) => {
      if(err){
        reject(err)
      }else{
        resolve(results)
      }
    })
  })
}

const deleteOne = (connection, id) => {
  return new Promise((resolve, reject) => {
    connection.query("delete from pessoas where id = "+id+' limit 1', (err) =>{
      if(err){
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

const create = (connection, data) => {
  return new Promise((resolve, reject) => {
    connection.query(`insert into pessoas (nome, nascimento, cargo) values ('${data.nome}','${data.nascimento}', '${data.cargo}')`,(err) =>{
      if(err){
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

const findonly = ( connection, id ) => {

  return new Promise((resolve, reject) => {

    connection.query('select * from pessoas where id = '+id, (err, results) => {
      if(err){
        reject(err)
      }else{
        resolve(results)
      }
    })
  })
}
const findById = ( connection, id ) => {

  return new Promise((resolve, reject) => {//
      //
    connection.query('select nome, nascimento, cargo from pessoas where id = '+id + ' limit 1 ', (err, results) => {
      if(err){
        reject(err, "erroo aqui")
      }else{
        if(results.lenght > 0){
          resolve(results[0])
        } else {
          resolve({})
        }
      }
    })
  })
}

const update = (connection, id, data) => {
  return new Promise((resolve, reject) => {
    connection.query(`insert into pessoas set nome='${data.nome}', nascimento='${data.nascimento}', cargo='${data.cargo}' where id=${id}`,(err) =>{
      if(err){
        reject(err)
      } else {
        resolve()
      }
    })
  })
}
module.exports = {
  findAll,
  findById,
  deleteOne,
  create,
  update
}