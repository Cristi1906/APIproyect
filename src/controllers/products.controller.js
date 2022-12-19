import Product from '../models/Product'




export const createProduct = async (req,res) => {
    console.log(req.body)

    const {name, category, phase, desciption} = req.body

    const newProduct = new Product({name, category, phase, desciption});

    const productSave = await newProduct.save()


    res.status(201).json({productSave})
}

//paginación
/*
const OPTIONS ={
    page: 1,
    limit:3
}; */


// ver proyectos

export const getProducts = async (req,res) =>{
    const products = await Product.find()
    /*const getproducts = await Product.paginate({}, OPTIONS, (err, products) => {
        res.json({products})
    })
    */
    res.json({products})
    
}

// ver proyectos por id

export const getProductById = async (req,res) =>{
    const product = await Product.findById(req.params.productId);
    res.status(200).json({product})
}

// actualizar un proyectos 

export const updateProductById = async (req,res) => {
    const updateProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {
        new: true
    })
    res.status(200).json({updateProduct})
}

// eliminar un producto 

export const deleteProductById = async (req,res) =>{

    const { productId } = req.params;
    await Product.findByIdAndDelete(productId);
    res.status(200).json();
}

