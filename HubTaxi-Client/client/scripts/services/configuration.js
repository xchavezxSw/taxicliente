'use strict';

angular.module('itaxiApp')
    .factory('config', ['$rootScope', '$timeout', function ($rootScope, $timeout) {

        var config = {
            deviceId: (window.device) ? device.uuid : 'vsoft.deverlopment12333',
            defaultPass: 'defaultPassword',
            name: 'Taxi Go',
            apiHost: 'https://181.13.244.36:6868',  //'http://taxigo.vn:9989',
            mediaHost: 'http://nodejs.vn:9697',
            isLogin: false
        };

        return config;

    }]);
