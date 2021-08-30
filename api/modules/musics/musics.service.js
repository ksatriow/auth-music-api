const SQL_QUERIES = {
    CREATE_MUSIC: "insert into musics (user_id,music_name,music_genre,music_description,music_date) values (?,?,?,?,?)",
    GET_MUSICS: "select * from musics where user_id = ?",
    GET_MUSIC_BY_ID: "select * from musics where user_id = ? && music_id = ?",
    UPDATE_MUSIC: "update musics set music_name = ?,music_genre = ?,music_description = ?,music_date = ? where user_id = ? && music_id = ?",
    DELETE_MUSIC_BY_ID: "delete from musics where user_id = ? && music_id = ?",
    DELETE_MUSIC:"delete from musics where user_id = ?"
}

const createMusicService = (db,music) =>{
    let params = Object.keys(music).map(key => music[key]);
    return db.query(SQL_QUERIES.CREATE_MUSIC,params);
}

const getMusicsService = (db,userId) => {
    return db.query(SQL_QUERIES.GET_MUSICS,[userId])
}
const getMusicByIdService = (db,userId,musicId) => {
    return db.query(SQL_QUERIES.GET_MUSIC_BY_ID,[userId,musicId])
}

const updateMusicService = (db,music,userId,music_id) => {
    let params = Object.keys(music).map(key => music[key]);
    params.push(userId);
    params.push(music_id);
    return db.query(SQL_QUERIES.UPDATE_MUSIC,params);
}

const deleteMusicService = (db,userId) => {
    return db.query(SQL_QUERIES.DELETE_MUSIC,[userId]);
}
const deleteMusicByIdService = (db,userId,music_id) => {
    return db.query(SQL_QUERIES.DELETE_MUSIC_BY_ID,[userId,music_id]);
}

module.exports = {
    createMusicService,
    getMusicsService,
    getMusicByIdService,
    updateMusicService,
    deleteMusicService,
    deleteMusicByIdService
}