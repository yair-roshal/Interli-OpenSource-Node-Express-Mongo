const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ArrwordSchema = new Schema(
  
  {
   username: { type: String, required: true },
  description: { type: String, required: true },
  translation: { type: String, required: true },
  date: { type: Date, required: true }
 }, 
 {  timestamps: true} 



);

          const ArrWordsModel = mongoose.model('Words', ArrwordSchema);

module.exports = ArrWordsModel;