const db = require('../models'); // Importing db models
const errorHandler = require('../dbErrorHandler.js'); // Importing functions for Error Handling

// This function is to create a Meme
exports.createMeme = async (req,res,next) =>{
  const { name,caption,url } = req.body;
  try {
      const meme = await db.Meme.create({
      name,
      caption,
      url
    });
    return res.status(201).json({id:meme._id});
  } catch (err) {
    return next({
        status: 400,
        message: errorHandler.getErrorMessage(err)
    });
  }
}

// This function is to get all the memes
exports.showallMeme = async (req, res, next) => {
  try {
    const memes = await db.Meme.find().sort('-created').limit(100).select(' name caption url')
    return res.status(200).json(memes);
  } 
  catch (err) 
  {
    return next({
      status: 400,
      message:errorHandler.getErrorMessage(err),
    });
  }
};

// This is to get a meme with specific id
exports.showMeme = async (req, res, next) => {
    try {
      const { id } = req.params;
      const meme = await db.Meme.findById(id).select('_id name caption url')
      return res.status(200).json(meme);
    } 
    catch (err) 
    {
      const obj={
        status: 404,
        message: 'No meme with this id'
      }
      return next(obj);
    }
};

// This is to edit a meme with specifi id , name would not be edited
exports.editMeme = async (req, res, next) => {
  
  try {
      const { id } = req.params;
      db.Meme.updateOne({ _id: id}, req.body, function(err, meme){
      if(err)
      {
        return next({
          status: 404,
          message: 'No meme is available with this id',
        });
      }
      var caption = req.body.caption;
      var url = req.body.url;
      meme.caption = caption;
      meme.url =url;
      return res.status(200).json()
  })
  } 
  catch (err) 
  {
    return next({
      status: 400,
      message: errorHandler.getErrorMessage(err),
    });
  }
};

