const Url = require("../models/Url");
const shortid = require("shortid");

const handleUrlGeneration = async (req, res) => {
  try {
    let urlData = req.body.url;

    console.log(urlData,"Value of URL data")

    if(!urlData){
      res.send("Empty Value")
    }

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

    let message={success:true}

    return res.render("home",{message})
    // return res.json("Url Created Successfully");
  } catch (err) {
    let message={success:false}

    return res.render("home",{message})
  }
};

const handleGetAllUrls = async (req, res) => {
  const data = await Url.find({});


console.log(data);
  return res.render("home",{data})
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
