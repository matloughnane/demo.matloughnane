var mongoose = require('mongoose');

var TokenSchema = new mongoose.Schema({
  "user": mongoose.Schema.Types.ObjectId,
  "type": String,
  "token": String
});

TokenSchema.index({ "user": 1, "token": 1 }, { unique: true });

mongoose.model('Token', TokenSchema);