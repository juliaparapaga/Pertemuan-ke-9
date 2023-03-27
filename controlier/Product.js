import product from "../model/ProductMode.js";

export const getProducts= async (red, res) => {
    try{
        const response = await Product.findALL();
        res.status(200).json(response);
    }catch (error){
        console.log(error.message);
    }
};
export const getProductByid = async(red, res)=>{
    try{
        const response = await Product.findOne({
            where :{
                id : red.params.id,
            },
        });
        res.status(200).json(response);
    }catch (error){
        console.log(error.message);
    }
};
export const createProduct = async(red, res)=>{
    try{
        await Product.create(req.body);
        res.status(201).json({msg:"Product created"});
    }catch (error){
        console.log(error.message);
    }
};
export const deleteProduct = async(red,res)=>{
    try{
        await Product.destroy({
            where:{
                id: req.params.id,
            },
        });
        res.status(200).json({msg:"Product deleted"});
    }catch (error){
        console.log(error.message);
    }
} ;
export const updateProduct = async(red,res)=>{
    try{
        await Product.update(red.body,{
            where:{
                id:req.params.id,
            },
        });
        res.status(200).json({msg:"Product updated"});
    }catch{
        console.log(error.message);
    }
};