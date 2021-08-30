const { verify } = require("jsonwebtoken");

module.exports.authorization = (req,res,next) => {
    try {
        if(!req.header("Authorization")){
            return res.json({
                success:false,
                message:"Access Token is not found"
            })
        }
        let jwtToken = req.header("Authorization");
        let token = jwtToken.split(" ")[1];
        let tokenPayload = verify(token,process.env.JWT_KEY);

        if(tokenPayload){
            req.app.set("user",tokenPayload);

            return next();
        }else{
            return res.json({
                success:false,
                message:"Authorization failed"
            })
        }
    } catch (error) {
        return res.json({
            success:false,
            message:"Something went wrong"
        })
    }
}