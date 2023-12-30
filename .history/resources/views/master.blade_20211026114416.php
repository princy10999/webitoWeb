<!DOCTYPE html>
<html lang="en">
    <body oncontextmenu="return false;">
<head>
    @include('layouts.header')
    @include('layouts.navbar')
</head>

<body>
    <div style="margin-top:88px;">
        @yield('homepage-contain')
        @yield('contectuspage-contain')
        @yield('designi_dev-contain')
        @yield('devops-contain')
        @yield('cms-contain')
        @yield('mobileapp-contain')
        @yield('services-contain')
        @yield('web-devolopment-contain')
        @yield('technology-page-content')
        @yield('backend-contain')
        @yield('database-contain')
        @yield('fronend-contain')
        @yield('aboutcontent')
        @yield('mobile-contain')
        @yield('policy-contain')
        @yield('terms-contain')
        @yield('portfoliocontent2')
        @yield('portfoliocontent')
        @yield('portfolio_page-content')
        @yield('slidercontent')
        @yield('flutter')
        @yield('career-contain')
        @yield('hiring-contain')
    </div>
    @yield('teampage-contain')
    @include('layouts.cursor')

    @include('layouts.footer')
    @yield('slider-contain')

</body>

</html>
<script>
    document.onkeydown = function(e) {
if(event.keyCode == 123) {
return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
return false;
}
}
</script>
