import { Router } from 'express'
const router = Router()


import * as productsCtrl from '../controllers/products.controller'
import {authJwt} from '../middlewares'

//rutas 
// crear producto, 
router.post('/',authJwt.verifyToken ,productsCtrl.createProduct)

// ver productos, 
router.get('/', authJwt.verifyToken , productsCtrl.getProducts)

// ver productos por Id, ,
router.get('/:productId', authJwt.verifyToken ,productsCtrl.getProductById)

// actualizar dato/datos del producto, 
router.put('/:productId', authJwt.verifyToken, productsCtrl.updateProductById)

// eliminar  producto, 
router.delete('/:productId', authJwt.verifyToken,productsCtrl.deleteProductById)

export default router; 