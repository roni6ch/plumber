/** **********************************ANGULAR*************************************** */

var app = angular.module('barberApp', ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        }).when('/gallery', {
        templateUrl: 'pages/gallery.html',
        controller: 'galleryController'
    }).when('/recommend', {
        templateUrl: 'pages/recommend.html',
        controller: 'recommendController'
    }).when('/about', {
        templateUrl: 'pages/about.html',
        controller: 'aboutController'
    });
});

/*
 * ********************* index Controller ****************
 */

app.controller('indexController', function ($scope) {

});
/*
 * ********************* home Controller ****************
 */

app.controller('homeController', function ($scope, $http, $timeout) {


});


/*
 * ********************* gallery Controller ****************
 */

app.controller('galleryController', function ($scope) {
});


/*
 * ********************* recommend Controller ****************
 */

app.controller('recommendController', function ($scope, $http, $timeout) {


});
/*
 * ********************* about Controller ****************
 */

app.controller('aboutController', function ($scope) {

});
/*
 * ********************* JS  ****************
 */
$(document).ready(function () {
    $("nav a").mouseenter(function () {
        $("audio")[0].play();
    });
    $("#slideshow > div:gt(0)").hide();

    setInterval(function () {
        $('#slideshow > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#slideshow');
    }, 4000);
});


/*
 * ********************* Directives  ****************
 */
