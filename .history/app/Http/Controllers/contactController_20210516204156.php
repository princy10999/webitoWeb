<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class contactController extends Controller
{
    //
    public function contact()
    {
        return view('layouts.contact');
    }
}
