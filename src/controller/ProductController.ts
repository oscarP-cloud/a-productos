import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { Productos } from "../entity/producto";

export class ProductController{
    // Metodo para la obtención de todos los productos.
    static getAllProduct = async (req:Request, res: Response): Promise<Response> => {
            const DATA = await getRepository(Productos).find();
            return res.send(DATA)
    } 
    // Metodo para consulta un producto en especifico.
     static getOneProduct = async (req:Request, res: Response): Promise<Response> => {
        console.log(req.params.text);
        const DATA = await getRepository(Productos).findOne(req.params.text);
        return res.json( DATA )
    }
    // Metodo para la creacion de un nuevo producto.
     static createProduct = async (req:Request, res: Response): Promise<Response> => {
        console.log(req.body);
        const DATA = getRepository(Productos).create(req.body);
        const resultado = await getRepository(Productos).save(DATA);
        return res.json(resultado)
    }
    // Metodo de eliminación de productos.
      static deleteProduct = async (req:Request, res: Response): Promise<Response> => {
        getRepository(Productos).delete(req.params.id);
    
        return res.json("Se ha eliminado")
    }
    // Metodo de actualización de productos.
      static updateProduct = async (req:Request, res: Response): Promise<Response> => { 
        const producto = await getRepository(Productos).findOne(req.params.id);
        if ( producto ) {   
            getRepository(Productos).merge(producto, req.body);
            const resultado = getRepository(Productos).save(producto);
            return res.json(resultado);
        }
        return res.status(404).json({Message: 'No se encuentra el usuario.'});
    }
}