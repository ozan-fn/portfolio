<?php

// Deteksi path secara dinamis
// Jika file ini ada di public/index.php, maka naik 1 tingkat ke root
$appPath = realpath(__DIR__ . '/../');

/*
|--------------------------------------------------------------------------
| Register The Auto Loader
|--------------------------------------------------------------------------
*/
require $appPath . '/vendor/autoload.php';

/*
|--------------------------------------------------------------------------
| Switch to root path (DIBUTUHKAN OLEH LEAF CORE)
|--------------------------------------------------------------------------
*/
chdir($appPath);

/*
|--------------------------------------------------------------------------
| Handle Static Files (CLI Server Only)
|--------------------------------------------------------------------------
*/
if (php_sapi_name() === 'cli-server') {
    $path = realpath(__DIR__ . parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));
    if (is_string($path) && __FILE__ !== $path && is_file($path)) {
        return false;
    }
}

/*
|--------------------------------------------------------------------------
| Load Env & Run
|--------------------------------------------------------------------------
*/
\Leaf\Core::loadApplicationEnv($appPath);

// Tambahkan config manual untuk meyakinkan Leaf di mana folder app berada
\Leaf\Config::set('app.root', $appPath);

\Leaf\Core::runApplication();