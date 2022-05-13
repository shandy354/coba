
module.exports={
    index: (req, res)=>{
        res.status(200).json({
            status:true,
            message:"hello world!"
        })
    },
    user: (req, res)=>{
        res.status(200).json({
            status:true,
            message:"retrieved All User"

        })
    }
}