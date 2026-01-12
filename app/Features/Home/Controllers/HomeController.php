<?php

namespace App\Features\Home\Controllers;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home/Welcome', [
            'title' => 'Welcome to Feature-Based Laravel!'
        ]);
    }
}
