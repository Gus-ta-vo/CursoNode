const User = require('../models/users');
const userRepository = require('../repositories/userRepository');
const Client = require('../models/clients');
const jwt = require('jsonwebtoken')

const signup_post = async (req,res) => {
   const {email, password} = req.body
   try {
     const user = await userRepository.create({email, password})
     res.status(201).json(user)
   } catch (error) {
     res.status(400).json(error)
   }
}

const login_post = async (req,res) => {
  const {email, password} = req.body
  try {
    const user = await User.findOne({email})
    if (!user) {
      return res.status(400).json({error:"Usuario no encontrado"})  
    }
    if (user.password !== password) {
      return res.status(400).json({error:"Constraseña incorrecta"})  
    }
    const client = await Client.findOne({email})
    if (!client) {
      client_id = ""  
    } else {
      client_id = client._id
    }

    // Crea token
    const token = jwt.sign({
      email: user.email,
      id: client_id
    }, process.env.SECRETO)

    console.log(token)

    res.cookie('x-token', token, {HttpOnly: true} )
    res.cookie('x-client_id', client_id, {HttpOnly: true})
    res.json({mensaje: `Bienvenido ${user.email}`, client_id, token})
  } catch (error) {
    console.log (error)         
    res.status(400).json(error)
  }
}

const logout = ( req, res ) => {
  try {
    res.status(200).json({
      msg: "Saliste"
    })
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

module.exports = {
    signup_post,
    login_post,
    logout
  }