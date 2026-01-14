<?php

require __DIR__ . '/vendor/autoload.php';

app()->get('/s', function () {
    response()->page('./welcome.html');
});

app()->run();
