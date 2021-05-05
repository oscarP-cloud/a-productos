import { Login } from './../entity/login';
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as jwt from 'jsonwebtoken';
import  config  from '../config/config'

export class LoginController {

  static login =  async (req: Request, res: Response) => {
    console.log(req.body);
    
    const { correo, contrasena} = req.body;

    if (!( correo && contrasena )) {
    return res.status(400).json({ mesaage: 'Datos incompletos'});   
    }
    // Comprobación BDs el usuario si existe
    let usuario;
    try {
      usuario = await getRepository(Login).findOneOrFail({where: { correo }})
    } catch (e) {
      return res.status(400).json({ message: 'No se encuentra el correo'})
    }
    console.log(usuario);
    if (usuario.password != contrasena) {
      
      return res.status(400).json({ message: 'Contraseña incorrecta'});  
    } 
    let token = jwt.sign({usuario}, config.JWT_Secret);  
    return  res.status(200).send({correo: usuario.correo,
                                  contrasena: usuario.password,
                                  token: token});
  }


}