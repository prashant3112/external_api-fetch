module.exports.getjokes = async function (req,res){
    try {
          const count=req.params.count;

          const promises = [];
        
          for(let i=0;i<count;i++)
          {
            promises.push(fetch_data());

          }

          Promise.all(promises).then(data =>res.send(data) )
    }
    catch(error)
    {
        res.status(500).json(
            {
                data: {
                    message: " opps|| Error occured",
                },
            }
        );
    }

};


async function fetch_data(){

    const info = await fetch('https://api.chucknorris.io/jokes/random');
    const some = await info.json(); 
    //console.log(some);
    const fdata = {id:some.id,
    value:some.value}
    return fdata;
}



//module.exports = {getjokes };