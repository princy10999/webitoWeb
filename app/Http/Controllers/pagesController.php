<?php

namespace App\Http\Controllers;

use App\Models\Testimonials;
use App\Models\Articals;
use App\Models\article_tag;
use App\Models\Article_category;
use App\Models\personal_info;
use Carbon\Carbon;

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
        $data = [];

        $localIP = getHostByName(getHostName());
        $getData = count(personal_info::where('time', '>=', Carbon::now()->subMinutes(5)->toDateTimeString())->where('ip', $localIP)->get());
        // dd($getData);
        $data['getData'] = $getData;
        $getItemsOneDay = personal_info::where('ip', $localIP)->where('time', '>=', Carbon::now()->subdays(1))->get();
        return view('career.hiring')->with($data, $getItemsOneDay);
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

    //Rules pages//
    public function rulespage()
    {
        return view('rules&regulation');
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

    //Technology main page//
    public function technology()
    {
        return view('technology.technology');
    }
    //Mobile main page//
    public function mobile()
    {
        return view('technology.mobile');
    }
    //Mobile sub pages//
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

    public function xamarin()
    {
        return view('technology.mobile.xamarin');
    }

    //Backend main page//
    public function backend()
    {
        return view('technology.back-end');
    }
    //Backend sub pages//
    public function node()
    {
        return view('technology.back-end.node');
    }

    public function php()
    {
        return view('technology.back-end.php');
    }

    public function dotnet()
    {
        return view('technology.back-end.dotnet');
    }

    public function java()
    {
        return view('technology.back-end.java');
    }

    public function python()
    {
        return view('technology.back-end.python');
    }

    public function rails()
    {
        return view('technology.back-end.rails');
    }

    public function laravel()
    {
        return view('technology.back-end.laravel');
    }

    public function cakephp()
    {
        return view('technology.back-end.cakephp');
    }

    public function zend()
    {
        return view('technology.back-end.zend');
    }

    public function codeigniter()
    {
        return view('technology.back-end.codeigniter');
    }

    //Frontend main page//
    public function frontend()
    {
        return view('technology.frontend');
    }
    //Frontend sub pages//
    public function angular()
    {
        return view('technology.frontend.angular');
    }

    public function reactjs()
    {
        return view('technology.frontend.reactjs');
    }

    public function vue()
    {
        return view('technology.frontend.vue');
    }

    public function typescript()
    {
        return view('technology.frontend.typescript');
    }

    public function wpf()
    {
        return view('technology.frontend.wpf');
    }

    public function html5()
    {
        return view('technology.frontend.html5');
    }

    //Database main page//
    public function database()
    {
        return view('technology.database');
    }

    //Database sub pages//
    public function mysql()
    {
        return view('technology.database.mysql');
    }
    public function dynamodb()
    {
        return view('technology.database.dynamodb');
    }
    public function postgresql()
    {
        return view('technology.database.postgresql');
    }
    public function oracle()
    {
        return view('technology.database.oracle');
    }
    public function mongodb()
    {
        return view('technology.database.mongodb');
    }
    public function redis()
    {
        return view('technology.database.redis');
    }

    //Devops main page//
    public function devops()
    {
        return view('technology.infra-devops');
    }
    //Devops sub pages//
    public function aws()
    {
        return view('technology.devops.aws');
    }

    public function google_cloud()
    {
        return view('technology.devops.google_cloud');
    }

    public function azure()
    {
        return view('technology.devops.azure');
    }

    public function gradle()
    {
        return view('technology.devops.gradle');
    }

    public function jenkins()
    {
        return view('technology.devops.jenkins');
    }

    public function selenium()
    {
        return view('technology.devops.selenium');
    }




    //Cms main page//
    public function cms()
    {
        return view('technology.cms');
    }
    //Cms sub pages//
    public function wordpress()
    {
        return view('technology.cms.wordpress');
    }
    public function joomla()
    {
        return view('technology.cms.joomla');
    }
    public function drupal()
    {
        return view('technology.cms.drupal');
    }
    public function umbraco()
    {
        return view('technology.cms.umbraco');
    }
    public function shopify()
    {
        return view('technology.cms.shopify');
    }
    public function magento()
    {
        return view('technology.cms.magento');
    }

    //master page//
    public function master()
    {
        return view('master');
    }

    public function blogs()
    {
        $articles = Articals::where('active_status', 1)->where('isDeleted', 0)->where('isHide', 0)->get();
        $article_tag = article_tag::where([['isDeleted', 0], ['isHide', 0]])->get();

        $article_category = Article_category::where([['isDeleted', 0], ['isHide', 0]])->where('sub_category', '=', null)->get();

        $data = [
            'articles' => $articles,
            'article_category' => $article_category,
            'article_tag' => $article_tag,
        ];

        return view('blogs', $data);
    }

    public function blogSingle($id)
    {
        $articles = Articals::where([['isDeleted', 0], ['isHide', 0], ['active_status', 1]])->get();
        $articleSingle = Articals::where('id',$id)->first();
        $article_tag = article_tag::where([['isDeleted', 0], ['isHide', 0]])->get();

        $article_category = Article_category::where([['isDeleted', 0], ['isHide', 0]])->where('sub_category', '=', null)->get();

        $data = [
            'articles' => $articles,
            'articleSingle' => $articleSingle,
            'article_category' => $article_category,
            'article_tag' => $article_tag,
        ];

        return view('blogs-single', $data);
    }

    public function blogCategory($id)
    {

        $article_category = Article_category::where('sub_category', '=', null)->get();
        $article_sub_category = Article_category::where('sub_category', '!=', null)->get();


        $articles = Articals::whereJsonContains('category', $id)->orWhereJsonContains('sub_category', $id)->get();

        $data = [
            'articles' => $articles,
            'article_category' => $article_category,
            'article_sub_category' => $article_sub_category,
        ];

        return view('blogs-single-cat', $data);
    }
    public function blogTag($id)
    {

        $article_category = Article_category::where('sub_category', '=', null)->get();
        $article_sub_category = Article_category::where('sub_category', '!=', null)->get();

        $articles = Articals::whereJsonContains('tags', $id)->get();

        $data = [
            'articles' => $articles,
            'article_category' => $article_category,
            'article_sub_category' => $article_sub_category,
        ];

        return view('blogs-single-tag', $data);
    }
}
