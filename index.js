const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const errorController = require('./controllers/error')

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin')
const shopRouter = require('./routes/shop')

// app.use('/', (res, req, next) => {
//     next();
// })
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use('/admin', adminRoutes); // diawali /admin kemudian masuk ke admin router 
app.use(shopRouter);

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
  });





app.listen(3000);
