const jwt = require('jsonwebtoken')
const verifyToken = (req, res, next) => {
    let token = req.cookies["token"]
    if (!token) {
       console.log("No cookie token")
       token = req.header("auth-token")    
    }
    if (!token) {
        console.log("No header token")
        console.log(req)
        return res.status(401).json({error: "Acceso denegado"})
    } // else {console.log(req)}
    try {
        const verified = jwt.verify(token, process.env.SECRETO);
        req.user = verified
        console.log(req.user)
        next();
    } catch {
        return res.status(400).json({error: "Problema de autenticación - token no válido"})
    }
}

module.exports = verifyToken