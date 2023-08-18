const Cat = require('./catModel.js')

exports.getAllCats = async (req, res) => {
    try{
    const cats = await Cat.find()
    res.status(200).json({
        status:'success',
        results:cats.length,
        data:{
            cats
        }
    })
    } catch (err) {
        res.status(400).json({
            status:'fail',
            message: err
        })
    }
};

exports.createCat = async (req, res) => {
    try{
        const newCat = await Cat.create(req.body)

        res.status(200).json({
            status:'success',
            data: {
                cat : newCat
            }
        })
    } catch (err){
        res.status(404).json({
            status:'fail',
            message: err
        })
    }
    
};

exports.deleteById = async(req, res) => {
    try{
    await Cat.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status:'success',
            data: null
        })
    } catch (err){
        res.status(404).json({
            status:'fail',
            message: err
        })
    }
}

exports.deleteByBreed = async(req, res) => {
    try{
    await Cat.findOneAndDelete(req.params.id)
        res.status(200).json({
            status:'success',
            data: null
        })
    } catch (err){
        res.status(404).json({
            status:'fail',
            message: err
        })
    }
}


exports.getByBreed = async (req, res) => {
    try{
      const cat = await Cat.find({ breed: `${req.params.breed}` })
    res.status(200).json({
            status:'success',
            data:{
                cat
            }
        })
    } catch (err) {
        res.status(404).json({
            status:'fail',
            message:err
        })
    }

    
};

exports.getById = async (req, res) => {
    try{
      const cat = await Cat.findById(req.params.id)
    res.status(200).json({
            status:'success',
            data:{
                cat
            }
        })
    } catch (err) {
        res.status(404).json({
            status:'fail',
            message:err
        })
    }

    
};

exports.updateById =  async (req, res) => {
    try{
        const cat = await Cat.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({
            status:'success',
            data:{
                cat
            }
        })
    } catch (err){
        res.status(404).json({
            status:'fail',
            message: err
        })
    }
}

exports.topfriendly = (req, res) => {
    res.status(500).json({
        status:'error',
        message:'This route is not yet defined'
    })
};

exports.mostintelligent = (req, res) => {
    res.status(500).json({
        status:'error',
        message:'This route is not yet defined'
    })
};