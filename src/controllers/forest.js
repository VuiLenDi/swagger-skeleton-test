'use strict';

const debug = require('debug')('test_app-forest');

class ForestControllerImpl {

    constructor(animalService) {
        this.animalService = animalService;
    }

    /**
     *
     * @param {object} size
     * @param {object} responder      - Automatically generated responder object
     */
    animals(size, responder) {
        debug(`animals called with '${size}'` );

        const data = [
            {
                "id": 1,
                "name": "Dog 1233",
                "photoUrls": [
                    "http://abc.com/pic1.jpg",
                    "http://abc.com/pic2.jpg",
                ]
            },
            {
                "id": 2,
                "name": "Cat abc",
                "photoUrls": [
                    "http://abc.com/pic3.jpg",
                    "http://abc.com/pic4.jpg",
                ]
            }
        ];
        responder.list_animals(data);
    }
}

module.exports = ForestControllerImpl;
