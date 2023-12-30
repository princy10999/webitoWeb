<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Webito Infotech</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="" name="Software development Company, Application Development">
    <meta content="" name="description">
    <meta name="google-site-verification" content="JOJUuUXCBtdHTk1KtRb76Zb9_C4fLqENqwEWpDw7Q-A" />

    <script src="https://code.jquery.com/jquery-3.5.1.min.js"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>


    <!-- Favicons -->
    <link href="assets/img/index/logo/favicon.png" rel="icon">
    <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src='https://kit.fontawesome.com/a076d05399.js'></script>

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Montserrat:300,400,500,700"
        rel="stylesheet">

    <!-- Bootstrap CSS File -->
    <link href="../../assets/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Libraries CSS Files -->
    <link href="../../assets/lib/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <link href="../../assets/lib/animate/animate.min.css" rel="stylesheet">
    <link href="../../assets/lib/ionicons/css/ionicons.min.css" rel="stylesheet">
    <link href="../../assets/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
    <link href="../../assets/lib/lightbox/css/lightbox.min.css" rel="stylesheet">

    <!-- for logo carousel -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <!-- <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/> -->
    <!-- Main Stylesheet File -->
    <link href="../../assets/css/style.css" rel="stylesheet">
    <link href="../../assets/css/mobile.css" rel="stylesheet">


</head>

<body>
    <!-- navbar -->
    @include('layouts.nav')
    <!-- navbar end -->

    <!-- title -->
    <?php
    $title = 'Web & Mobile Backend Development';
    $desc = 'Backend is not the only reason why users join your app, but a poor backend is definitely the reason to drive them away. Webito holds experience to take on backend challenges for any scale and complexity, using the right technologies to build an architecture without a single point failure. Get slicker and faster app performance at all times with 100% guarantee!';
    ?>

    @include('technology.common.title')
    <!-- title end -->

    <!-- learn more on -->
    <?php
    $title = 'Backend Technologies we work with';
    ?>

    <?php
    $box1icon=("https://img.icons8.com/windows/55/4a90e2/nodejs.png");
    $box1title = 'NodeJS Development';
    $box1paragraph = 'NodeJS is iconic for building backends of apps that are real-time, requires heavy traffic or data, and code compatibility on many platforms.';
    ?>

    <?php
    $box2icon = ("https://img.icons8.com/windows/50/4a90e2/php-logo.png");
    $box2title = 'PHP Development';
    $box2paragraph = 'We build enterprise solutions, networking systems, CMS, and other backend solutions that are highly customized for complex B2B applications.';
    ?>

    <?php
        $box3icon = ("https://img.icons8.com/material/50/4a90e2/circled-n.png");
        $box3title = '.NET Development';
        $box3paragraph = 'Webito builds custom web, mobile and Windows based app solutions with .NET framework to deliver scalability, security and power-packed performance.';
        ?>

    <?php
    $box4icon = ("https://img.icons8.com/fluent-systems-filled/50/4a90e2/java-coffee-cup-logo.png");
    $box4title = 'Java Development';
    $box4paragraph = 'We have hands-on experience with Java based frameworks like Spring, Hibernate, JSF, GWT, etc. to build scalable and secure business apps.';
    ?>

    <?php
        $box5icon = ("https://img.icons8.com/metro/48/4a90e2/python.png");
        $box5title = 'Python Development';
        $box5paragraph = 'With this MVC framework launched in 2004, we are pioneering RoR development to develop multi-tasking, scalable apps.';
        ?>

    <?php
    $box6icon = ("https://img.icons8.com/windows/64/4a90e2/ruby-on-rails.png");
    $box6title = 'Ruby on Rails Development';
    $box6paragraph = 'With the power of .NET and C#, our experts build Android,
                                iOS, and cross-platform apps for enterprises and startups.';
    ?>

    @include('technology.common.learnmore')

    <!-- learn more on end-->

    <!-- how to help -->

    <?php
    $helptitle = 'What we want you to understand';
    $helpparagraph1 = 'Looks of an app are important, but all that matters is the brain (the backend) that holds the functionality of an app to make it a successful one. Without a strong backbone, your software product cannot work ideally. Users may not see your backend code, but they can feel the power through app functionality.';
    $helpparagraph2 = 'Our dev team builds powerful backends for a better online experience. The apps that can handle any size of user loads without glitches. This boosts the customer experience and ROI as a result.';
    $helpappsimg = '';
    $icon1=("https://img.icons8.com/ios/50/4a90e2/laravel.png");
    $icon2=("https://img.icons8.com/material-sharp/50/4a90e2/django.png");
    $icon3=("https://img.icons8.com/windows/50/4a90e2/php-logo.png");
    $icon4=("https://img.icons8.com/material/50/4a90e2/circled-n.png");
    $icon5=("https://img.icons8.com/windows/50/4a90e2/nodejs.png");
    $icon6=("https://img.icons8.com/metro/46/4a90e2/python.png");
    $image=("assets/img/technologies/backend.webp");
    ?>


    @include('technology.common.howtohelp')

    <!-- how to help -->

    <!-- apps use -->

    @include('technology.common.appsuse')

    <!-- apps use end -->



    <!--***************target customer section ends****************-->
    @include('layouts.contactline')
   @include('layouts.footer')




    <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
    <!-- Uncomment below i you want to use a preloader -->
    <div id="preloader"></div>

    <!-- JavaScript Libraries -->
    <script src="../../assets/lib/jquery/jquery.min.js"></script>
    <script src="../../assets/lib/jquery/jquery-migrate.min.js"></script>
    <script src="../../assets/lib/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="../../assets/lib/easing/easing.min.js"></script>
    <script src="../../assets/lib/mobile-nav/mobile-nav.js"></script>
    <script src="../../assets/lib/wow/wow.min.js"></script>
    <script src="../../assets/lib/waypoints/waypoints.min.js"></script>
    <script src="../../assets/lib/counterup/counterup.min.js"></script>
    <script src="../../assets/lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="../../assets/lib/isotope/isotope.pkgd.min.js"></script>
    <script src="../../assets/lib/lightbox/js/lightbox.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
    <!-- Contact Form JavaScript File -->
    <script src="../../assets/js/contactform.js"></script>

    <!-- Template Main Javascript File -->
    <script src="../../assets/js/main.js"></script>

    <script src="../../assets/js/main2.js"></script>

    <script src="../../assets/js/Jquery.js"></script>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"
        integrity="sha512-CEiA+78TpP9KAIPzqBvxUv8hy41jyI3f2uHi7DGp/Y/Ka973qgSdybNegWFciqh6GrN2UePx2KkflnQUbUhNIA=="
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Counter-Up/1.0.0/jquery.counterup.min.js"
        integrity="sha512-d8F1J2kyiRowBB/8/pAWsqUl0wSEOkG5KATkVV4slfblq9VRQ6MyDZVxWl2tWd+mPhuCbpTB4M7uU/x9FlgQ9Q=="
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

</body>

</html>
