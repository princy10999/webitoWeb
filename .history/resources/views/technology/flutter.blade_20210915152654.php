@extends('master')
@section('mobile-contain')
    <link href="assets/css/mobile.css" rel="stylesheet">

    <?php
    $title = 'Experts in Front end Development Frameworks';
    $desc = 'Experienced (since 2020) in developing stunning, engaging, successful user interfaces using in demand front
        end technologies and industry trends. Boost your chances to achieve your commercial objectives in less time with our
        full stack front end development services.';
    ?>

    @include('technology.common.title')
    <!-- title end -->

    <!-- learn more on -->
    <?php $title = 'Front end Technologies we work with'; ?>

    <?php
    $box1icon = 'https://img.icons8.com/ios-filled/50/4a90e2/angularjs.png';
    $box1title = 'AngularJS Development';
    $box1paragraph = 'Experts in using JS based framework to build web solutions for enterprises, Ecommerce, social
        media apps, streaming apps, etc.';
    ?>

    <?php
    $box2icon = 'https://img.icons8.com/ios-filled/50/4a90e2/react-native.png';
    $box2title = 'ReactJS Development';
    $box2paragraph = 'Crafting dynamic user interfaces to deliver stunning web solutions that work perfectly on web and
        mobile platforms in less time.';
    ?>

    <?php
    $box3icon = 'https://img.icons8.com/windows/50/4a90e2/vuejs.png';
    $box3title = 'VueJS Development';
    $box3paragraph = 'Experienced with using the VueJS tools with scalability needed to build large-scale apps where
        customization is complex.';
    ?>

    <?php
    $box4icon = 'https://img.icons8.com/material-sharp/50/4a90e2/html-5.png';
    $box4title = 'HTML5 Development';
    $box4paragraph = 'Leveraging the benefits of CSS3 and jQuery combined, our experienced team builds rich and powerful
        mobile friendly web solutions.';
    ?>

    <?php
    $box5icon = 'https://img.icons8.com/ios-filled/50/4a90e2/typescript.png';
    $box5title = 'Typescript Development';
    $box5paragraph = 'With TypeScript combined with JS, we are making a huge improvement over plain JS, to deliver web
        solutions without painful bugs.';
    ?>


    <?php
    $box6icon = 'https://img.icons8.com/ios-filled/50/4a90e2/flutter.png';
    $box6title = 'Flutter Apps Development';
    $box6paragraph = 'Crafting apps for iPhone, iPad, Apple Watch, Apple TV, etc.
        with AI & ML integration and more, keeping users at the core.';
    ?>

    @include('technology.common.learnmore')

    <!-- learn more on end-->

    <!-- how to help -->

    <?php
    $helptitle = 'How does Webito help?';
    $helpparagraph1 = 'Our mobile team builds mobile apps for every user, every platform, and every industry. No matter
        under which niche your project falls, with the help of our experienced mobile app developers, we can deliver you
        with robust mobile application solutions.';
    $helpparagraph2 = 'Webito holds the best resources with a rare combination of rich industry experience and
        unparalleled expertise to develop native Android, iOS, and Cross-platform mobile apps.';
    $helpappsimg = '';
    $icon1 = 'https://img.icons8.com/ios-filled/50/4a90e2/flutter.png';
    $icon2 = 'https://img.icons8.com/ios-filled/50/4a90e2/angularjs.png';
    $icon3 = 'https://img.icons8.com/material-sharp/50/4a90e2/html-5.png';
    $icon4 = 'https://img.icons8.com/ios-filled/50/4a90e2/react-native.png';
    $icon5 = 'https://img.icons8.com/metro/50/4a90e2/js.png';
    $icon6 = 'https://img.icons8.com/windows/50/4a90e2/wordpress-simple.png';
    $image = 'assets/img/technologies/frontent.webp';
    ?>


    @include('technology.common.howtohelp')

    <!-- how to help -->

    <!-- apps use -->

    @include('technology.common.appsuse')

    <!-- apps use end -->



    <!--***************target customer section ends****************-->
    @include('layouts.contactline')


@endsection
