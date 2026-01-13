<?php

app()->config([
    'log.enabled' => true
]);

app()->inertia('/', 'welcome', [
    'phpVersion' => PHP_VERSION
]);
