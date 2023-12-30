<?php

namespace App\Http\Controllers;

use App\Models\Testimonials;

use Illuminate\Http\Request;

class pagesController extends Controller
{

    public function index()
    {
        $tm = Testimonials::where([['isDeleted', 0], ['isHide', 0]])->get();
        // dd($tm);
        return view('index', ['tm' => $tm]);
    }

    //contact pages//
    public function contactpage()
    {
        return view('layouts.contactpage');
    }
    //career pages//
    public function career()
    {
        return view('career.career');
    }

    //hiring pages//
    public function hiring()
    {
        return view('career.hiring');
    }

    //team pages//
    public function teampage()
    {
        return view('team.team');
    }

    //policy pages//
    public function policypage()
    {
        return view('layouts.policy');
    }

     //terms pages//
     public function termspage()
     {
         return view('layouts.terms');
     }

    //about pages//
    public function aboutpage()
    {
        return view('about.about');
    }

    //portfolio pages//
    public function portfoliopage()
    {
        return view('portfolio.portfolio');
    }

    //portfolio_pages//
      public function portfolio_page()
      {
          return view('portfolio.portfolio_page');
      }

    //Services pages//
    public function services()
    {
        return view('services.services');
    }

    public function mobileapp_development()
    {
        return view('services.mobileapp_development');
    }

    public function web_development()
    {
        return view('services.web_development');
    }

    public function design_development()
    {
        return view('services.design_development');
    }

    public function devops_development()
    {
        return view('services.devops_development');
    }

    //Technology pages//
    public function technology()
    {
        return view('technology.technology');
    }

    public function mobile()
    {
        return view('technology.mobile');
    }

    public function flutter()
    {
        return view('technology.mobile.flutter');
    }

    public function ios()
    {
        return view('technology.mobile.ios');
    }

    public function android()
    {
        return view('technology.mobile.android');
    }

    public function react_native()
    {
        return view('technology.mobile.react_native');
    }

    public function ionic()
    {
        return view('technology.mobile.ionic');
    }

    public function backend()
    {
        return view('technology.back-end');
    }

    public function frontend()
    {
        return view('technology.frontend');
    }

    public function database()
    {
        return view('technology.database');
    }
    public function master()
    {
        return view('master');
    }
}
