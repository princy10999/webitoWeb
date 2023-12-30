@extends('master')
@section('devops-contain')

    <link href="assets/css/mobile.css" rel="stylesheet">

    <?php
    $title = 'DevOps Infrastructure Consultation & Management';
    $desc = 'Experienced DevOps engineers at IndiaNIC help enterprises to effectively collaborate configuration management, infrastructure automation, and analytics to scale up and speed up the growth of your business. We offer DevOps as a service that will help bridge the gaps in your ongoing software development, QA process, and other IT operations.';
    ?>

    @include('technology.common.title')
    <!-- title end -->

    <!-- learn more on -->
    <?php $title = 'Platforms we excel in'; ?>

    <?php
    $box1icon = 'https://img.icons8.com/windows/50/4a90e2/amazon-web-services.png';
    $box1title = 'AWS';
    $box1paragraph = 'Our engineers combine DevOps practices with AWS services, to efficiently build and deliver software products with complete reliability.';
    ?>

    <?php
    $box2icon = 'https://img.icons8.com/ios-filled/50/4a90e2/google-cloud-platform.png';
    $box2title = 'Google Cloud';
    $box2paragraph = 'Transforming global enterprises by automating business processes via robust cloud solutions leveraging Google Cloud Platform (GCP).';
    ?>

    <?php
    $box3icon = 'https://img.icons8.com/color/48/4a90e2/azure-1.png';
    $box3title = 'Azure';
    $box3paragraph = 'Collaborating development process through source control, work tracking, and CI and delivery using Cloud & Azure DevOps Services.';
    ?>

    <?php
    $box4icon = 'https://img.icons8.com/ios/50/4a90e2/jenkins.png';
    $box4title = 'Hudson';
    $box4paragraph = 'CI tool for automating the regression testing of web applications while triggering builds and testing changes in the source code.';
    ?>

    <?php
    $box5icon = 'https://img.icons8.com/windows/32/4a90e2/jenkins.png';
    $box5title = 'Jenkins';
    $box5paragraph = 'With this MVC framework launched in 2004, we are pioneering RoR development to develop
                                                                                                multi-tasking, scalable apps.';
    ?>

    <?php
    $box6icon = 'https://img.icons8.com/windows/64/4a90e2/ruby-on-rails.png';
    $box6title = 'Ruby on Rails Development';
    $box6paragraph = 'With the power of .NET and C#, our experts build Android,
                                                                                                iOS, and cross-platform apps for enterprises and startups.';
    ?>

    @include('technology.common.learnmore')

    <!-- learn more on end-->

    <!-- how to help -->

    <?php
    $helptitle = 'What we want you to understand';
    $helpparagraph1 = 'Looks of an app are important, but all that matters is the brain (the backend) that holds the
                                                                                                functionality of an app to make it a successful one. Without a strong backbone, your software product cannot work
                                                                                                ideally. Users may not see your backend code, but they can feel the power through app functionality.';
    $helpparagraph2 = 'Our dev team builds powerful backends for a better online experience. The apps that can handle
                                                                                                any size of user loads without glitches. This boosts the customer experience and ROI as a result.';
    $helpappsimg = '';
    $icon1 = 'https://img.icons8.com/ios/50/4a90e2/laravel.png';
    $icon2 = 'https://img.icons8.com/material-sharp/50/4a90e2/django.png';
    $icon3 = 'https://img.icons8.com/windows/50/4a90e2/php-logo.png';
    $icon4 = 'https://img.icons8.com/material/50/4a90e2/circled-n.png';
    $icon5 = 'https://img.icons8.com/windows/50/4a90e2/nodejs.png';
    $icon6 = 'https://img.icons8.com/metro/46/4a90e2/python.png';
    $image = 'assets/img/technologies/backend.webp';
    ?>


    @include('technology.common.howtohelp')

    <!-- how to help -->

    <!-- apps use -->

    @include('technology.common.appsuse')

    <!-- apps use end -->



    <!--***************target customer section ends****************-->
    @include('layouts.contactline')
@endsection
