const Url = require("../models/Url");
const shortid = require("shortid");

const handleUrlGeneration = async (req, res) => {
  


  try{

    let urlData = req.body.url;

  let value = await Url.findOne({
    redirectUrl: urlData,
  });

  if (value) {
    return res.status(409).json({ message: "Link already exists" });
  }
    Url.create({
        shortId: shortid.generate(),
        redirectUrl: urlData,
        visitHistory: [],
      });
    
      return res.json("Url Created Successfullu");
  }catch(err){
    res.status(500).json({message:"Something went wrong"})
  }

};

const handleGetAllUrls = async (req, res) => {
  const data = await Url.find({});

  return res.json(data);
};

const handleRedirectUrl = async (req, res) => {
  const shortId = req.params.shortId;

  // let value=await Url.findOne({shortId})

  let value = await Url.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );

  //   console.log(value.redirectUrl);

  return res.redirect(value.redirectUrl);
};

module.exports = {
  handleUrlGeneration,
  handleGetAllUrls,
  handleRedirectUrl,
};
