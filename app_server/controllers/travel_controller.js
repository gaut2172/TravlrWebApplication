// access local file system
const fs = require('fs');         // expensive
// read the JSON data file
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));       // not best practice, expensive

// Get travel view
const travel = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Travel';
    // render the page. pass trips variable to handlebar
    res.render('travel', {title: pageTitle, trips});
}

module.exports = {
    travel
}