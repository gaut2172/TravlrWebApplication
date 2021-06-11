/* Controller that creates API request and sends it off to the app_api, then gets a response back */

const { response } = require('express');
const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
}


/* render travel list view */
const renderTravelList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = process.env.npm_package_description + ' - Travel';

    // if the result was not an array, make it an array and report error
    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    }
    else {
        if (!responseBody.length) {
            message = 'No trips exist in database';
        }
    }

    // render the page using the travel.hbs handlebars file and the API data response
    res.render('travel', {
        title: pageTitle,
        trips: responseBody,
        message
    });
};


/* GET travel list view */
const travelList = (req, res) => {
    const path = '/api/trips';
    // construct the request
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };

    console.info('>> travelController.travelList calling ' + requestOptions.url);

    // send the request to the api and get a response. Use the response to render the travel page
    request(
        requestOptions,
        (err, { statusCode }, body) => {
            if (err) {
                console.error(err);
            }
            console.log('statusCode: ', response && response.statusCode)
            renderTravelList(req, res, body);
        }
    )
};


module.exports = {
    travelList
}