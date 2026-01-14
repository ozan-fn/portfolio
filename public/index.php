<?php

require __DIR__ . '/../vendor/autoload.php';

Flight::route('/api', function () {
    echo 'hello world!';
});

Flight::start();