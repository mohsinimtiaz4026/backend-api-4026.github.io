const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://devil:devil4026@cluster0.fipkrjl.mongodb.net/flutter-auth?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log(`Database Connected`);
}).catch((err) => console.log(`Failed to Database ${err.message}`));


module.exports = mongoose;