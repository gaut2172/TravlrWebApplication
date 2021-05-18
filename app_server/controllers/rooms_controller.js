// access local file system
const fs = require('fs');         // expensive
// read the JSON data file
const rooms_data = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));       // not best practice, expensive

const rooms = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Rooms';
    res.render('rooms', {title: pageTitle, rooms_data});
}

module.exports = {
    rooms
}