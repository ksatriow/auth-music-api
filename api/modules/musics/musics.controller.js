const {createMusicService,getMusicByIdService,getMusicsService,updateMusicService,deleteMusicService,deleteMusicByIdService} = require("./musics.service");

const createMusicController = async (req,res)=>{
    try {
        let db = req.app.get("db");
        let user = req.app.get("user");

        let params = {user_id: user.userId,...req.body};
        let response = await createMusicService(db,params);

        if(response.insertId > 0){
            return res.json({
                success:true,
                message: "Music created"
            })
        }else{
            return res.json({
                success:false,
                message: "Something went wrong"
            })
        }
    } catch (e) {
        console.log('e: ', e);
        return res.json({
            success:false,
            message: "Something went wrong"
        })
    }
}

const getMusicsController = async (req,res) => {
    try {
        let db = req.app.get("db");
        let user = req.app.get("user");
        let MusicsList = await getMusicsService(db,user.userId);

        if(MusicsList instanceof Array){
            return res.json({
                success:true,
                data: MusicsList
            })
        }else{
            return res.json({
                success:false,
                message: "Something went wrong"
            })
        }
    } catch (e) {
        return res.json({
            success:false,
            message: "Something went wrong"
        })    
    }
}

const getMusicByIdController = async (req,res) =>{
    try {
        let db = req.app.get("db");
        let user = req.app.get("user");

        let {music_id} = req.params;
        let Music = await getMusicByIdService(db,user.userId,music_id);

        if(Music instanceof Array){
            return res.json({
                success:true,
                data: Music[0]
            })
        }else{
            return res.json({
                success:false,
                message: "Something went wrong"
            })
        }
    } catch (e) {
        return res.json({
            success:false,
            message: "Something went wrong"
        })
    }
}

const updateMusicController = async (req,res) =>{
    try {
        let db = req.app.get("db");
        let user = req.app.get("user");
        let {music_id} = req.params;
        let params = {...req.body};
        let response = await updateMusicService(db,params,user.userId,music_id);

        if(response.affectedRows > 0){
            return res.json({
                success: true,
                message: "Music updated successfully"
            })
        }else{
            return res.json({
                success:false,
                message: "Something went wrong"
            })
        }

    } catch (e) {
        return res.json({
            success:false,
            message: "Something went wrong"
        })
    }
}

const deleteMusicByIdController = async(req,res) => {
    try {
        let db = req.app.get("db");
        let user = req.app.get("user");
        let {music_id} = req.params;
        let response = await deleteMusicByIdService(db,user.userId,music_id);

        if(response.affectedRows > 0){
            return res.json({
                success: true,
                message: "Music deleted successfully"
            })
        }else{
            return res.json({
                success:false,
                message: "Something went wrong"
            })
        }

    } catch (e) {
        return res.json({
            success:false,
            message: "Something went wrong"
        })
    }
}
const deleteMusicController = async(req,res) => {
    try {
        let db = req.app.get("db");
        let user = req.app.get("user");
        let response = await deleteMusicService(db,user.userId);

        if(response.affectedRows > 0){
            return res.json({
                success: true,
                message: "User all Musics deleted successfully"
            })
        }else{
            return res.json({
                success:false,
                message: "Something went wrong"
            })
        }

    } catch (e) {
        return res.json({
            success:false,
            message: "Something went wrong"
        })
    }
}
module.exports = {
    createMusicController,
    getMusicsController,
    getMusicByIdController,
    updateMusicController,
    deleteMusicByIdController,
    deleteMusicController
}