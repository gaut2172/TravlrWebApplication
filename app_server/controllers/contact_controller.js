// access local file system
const fs = require('fs');         // expensive
// read the JSON data file
const contactInfo = JSON.parse(fs.readFileSync('./data/contact.json', 'utf8'));       // not best practice, expensive

const contact = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Contact';
    res.render('contact', {title: pageTitle, contactInfo});
}

module.exports = {
    contact
}