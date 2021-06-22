// access local file system
const fs = require('fs');         // expensive
// read the JSON data file
const ads = JSON.parse(fs.readFileSync('./data/about_ads.json', 'utf8'));       // not best practice, expensive

const about = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - About';
    res.render('about', {title: pageTitle, ads});
}

module.exports = {
    about
}