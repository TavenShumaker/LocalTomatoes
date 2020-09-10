const axios = require('axios');

const marketController = {}

marketController.getMarkets = async (req, res, next) => {

  try{
    const zip =  req.query.zip;
    const url = "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" + zip;
    const response = await axios.get(url);
    res.locals.marketList = response.data.results;
    return next();

  }catch(err){

    return next(err)

  }

};

marketController.addTime = async (req, res, next) => {
  const markets = res.locals.marketList;
  const url = "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=";

  try{
    for(let i = 0; i < markets.length; i++){
      const { data } = await axios.get(url + markets[i].id);
      markets[i].marketDetails = data.marketdetails;
      
    }
    console.log(res.locals.marketList);
    return next();

  }catch(err){

    return next(err)

  }
}

module.exports = marketController; 