var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var catSchema = new Schema({
    org_id: Schema.Types.ObjectId,
    name: String,
    live: Number,
    created: Date
}, { collection: 'categories' });

var Category = mongoose.model('Category', catSchema);

module.exports = Category;
