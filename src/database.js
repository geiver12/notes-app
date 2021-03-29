const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://geiverbotello:Aa123456@cluster0.mustt.mongodb.net/nodemongo?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(db => console.log('db this connet')).catch(err => console.log('error  database?'));