var mongoose=require('mongoose')
var schema=new mongoose.schema({
    name: {type: String,required:true},
    age:{type:Number,required:true}
})
// mongoose.model('students',schema)
// module.exports=students 
module.exports = mongoose.model('students', schema)