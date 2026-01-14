<?php

require __DIR__ . '/../vendor/autoload.php';

Flight::route('/api', function () {
    echo 'hello world!';
});

Flight::map('notFound', function () {
    echo file_get_contents(__DIR__ . '/build/index.html');
});

Flight::start();