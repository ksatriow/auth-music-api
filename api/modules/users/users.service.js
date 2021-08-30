const SQL_QUERIES = {
    GET_USERS : "select user_id as id,user_firstname as firstname,user_surname as lastname,user_email as email,user_registered as create_at from users",
    CREATE_USER: "insert into users (user_firstname, user_surname, user_email, user_password) values (?,?,?,?)",
    GET_USER_BY_EMAIL : "select * from users where user_email = ?",
    GET_USER_BY_ID : "select * from users where user_id = ?",
    UPDATE_USER:"update users set user_firstname = ?,user_surname = ? where user_id = ?",
    DELETE_USER:"delete from users where user_id = ?"
}

const registerUserService = (db,user) => {
    let params = Object.keys(user).map(key => user[key]);
    return db.query(SQL_QUERIES.CREATE_USER,params);
}

const getUsersService = (db) => {
    return db.query(SQL_QUERIES.GET_USERS);
}

const getUserByEmailService = (db,email) =>{
    return db.query(SQL_QUERIES.GET_USER_BY_EMAIL,[email]);
}
const getUserByIdService = (db,id) =>{
    return db.query(SQL_QUERIES.GET_USER_BY_ID,[id]);
}

const updateUserService = (db,user) => {
    let params = Object.keys(user).map(key => user[key]);
    return db.query(SQL_QUERIES.UPDATE_USER,params);
}


const deleteUserService = (db,userId) => {
    return db.query(SQL_QUERIES.DELETE_USER,[userId]);
}
module.exports = {registerUserService,getUsersService,getUserByEmailService,getUserByIdService,updateUserService,deleteUserService};