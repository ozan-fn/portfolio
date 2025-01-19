<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */

$routes->group('api', function ($routes) {
    $routes->get('', 'Home::index');
    $routes->get('(:any)', 'LinkController::index/$1');
    $routes->post('links', 'LinkController::create');
});

$routes->get('(:any)', function () {
    return response()->setContentType('text/html')->setBody(file_get_contents(ROOTPATH . 'public/dist/index.html'));
});
