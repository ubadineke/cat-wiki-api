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

exports.deleteCat = async(req, res) => {
    try{
    await Cat.deleteMany()
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

exports.searchCat = (req, res) => {
    res.status(500).json({
        status:'error',
        message:'This route is not yet defined'
    })
};

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