<?php

use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\pagesController;
use App\Http\Controllers\backend\TestimonialsController;
use App\Http\Controllers\form_dataController;


//Home page//
route::get('/', 'App\Http\Controllers\pagesController@index');
route::get('/home', 'App\Http\Controllers\pagesController@index');

//Career page//
route::get('/career', 'App\Http\Controllers\pagesController@career');

//Hiring page//
route::get('/hiring', 'App\Http\Controllers\pagesController@hiring');

//contact page//
route::get('/contact', 'App\Http\Controllers\pagesController@contactpage');

//Team page//
route::get('/team', 'App\Http\Controllers\pagesController@teampage');

//About page//
route::get('/about', 'App\Http\Controllers\pagesController@aboutpage');

//Portfolio page//
route::get('/portfolio', 'App\Http\Controllers\pagesController@portfoliopage');

//Portfolio_page//
route::get('/portfolio_page', 'App\Http\Controllers\pagesController@portfolio_page');

//Policy page//
route::get('/policy', 'App\Http\Controllers\pagesController@policypage');

//Term page//
route::get('/terms', 'App\Http\Controllers\pagesController@termspage');


//Service pages//
route::get('/services', 'App\Http\Controllers\pagesController@services');
route::get('/mobile-app-development', 'App\Http\Controllers\pagesController@mobileapp_development');
route::get('/web-development', 'App\Http\Controllers\pagesController@web_development');
route::get('/design-development', 'App\Http\Controllers\pagesController@design_development');
route::get('/devops-development', 'App\Http\Controllers\pagesController@devops_development');

//Technology pages//
route::get('/technology', 'App\Http\Controllers\pagesController@technology');
route::get('/mobile', 'App\Http\Controllers\pagesController@mobile');
route::get('/backend-development', 'App\Http\Controllers\pagesController@backend');
route::get('/frontend', 'App\Http\Controllers\pagesController@frontend');
route::get('/database', 'App\Http\Controllers\pagesController@database');
route::get('/master', 'App\Http\Controllers\pagesController@master');

//Mobile pages//
route::get('/ios', 'App\Http\Controllers\pagesController@ios');
route::get('/android', 'App\Http\Controllers\pagesController@android');
route::get('/react-native', 'App\Http\Controllers\pagesController@react_native');
route::get('/flutter', 'App\Http\Controllers\pagesController@flutter');
route::get('/ionic', 'App\Http\Controllers\pagesController@ionic');
route::get('/xamarin', 'App\Http\Controllers\pagesController@xamarin');

Route::post('/layouts/contact', [App\Http\Controllers\EmailController::class, 'sendEmail'])->name('sendEmailroute');

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return view('admin.index');
})->name('dashboard');

route::get('/admin/logout', 'App\Http\Controllers\AdminController@Logout')->name('admin.logout');

Route::group(['middleware' => 'auth'], function () {

    Route::resource('/testimonials', TestimonialsController::class);
    Route::post('/testimonials/delete/{id}', 'App\Http\Controllers\backend\TestimonialsController@tmDelete');
    Route::post('/testimonials/show/{id}', 'App\Http\Controllers\backend\TestimonialsController@tmShow');
    Route::post('/testimonials/hide/{id}', 'App\Http\Controllers\backend\TestimonialsController@tmHide');
    Route::post('/testimonials/active/{id}', 'App\Http\Controllers\backend\TestimonialsController@tmActive');
    // Route::group(['prefix' => 'WI'], function () {
    // });
});



//REDIRECT URLS
Route::get('/web-app-development', function () {
    return redirect('/web-development');
});
Route::get('/web_development', function () {
    return redirect('/web-development');
});
Route::get('/website-development', function () {
    return redirect('/web-development');
});


Route::get('/mobile-development', function () {
    return redirect('/mobile-app-development');
});
Route::get('/android-app-development', function () {
    return redirect('/mobile-app-development');
});
Route::get('/ios-app-development', function () {
    return redirect('/mobile-app-development');
});
Route::get('/mobileapp_development', function () {
    return redirect('/mobile-app-development');
});


Route::get('/design_development', function () {
    return redirect('/design-development');
});

Route::get('/devops_development', function () {
    return redirect('/devops-development');
});




Route::post('/store2', [form_dataController::class, 'storeInformation2'])->name('form.store2');
Route::post('/layouts/contact', [form_dataController::class, 'sendEmail'])->name('sendEmailroute');
