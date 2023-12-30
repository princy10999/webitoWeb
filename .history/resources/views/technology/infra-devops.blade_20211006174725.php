@extends('master')
@section('devops-contain')

    <link href="assets/css/mobile.css" rel="stylesheet">

    <?php
    $title = 'DevOps Infrastructure Consultation & Management';
    $desc = 'Experienced DevOps engineers at Webito Infotech help enterprises to effectively collaborate configuration management, infrastructure automation, and analytics to scale up and speed up the growth of your business. We offer DevOps as a service that will help bridge the gaps in your ongoing software development, QA process, and other IT operations.';
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
    $box3icon = 'https://img.icons8.com/color/50/4a90e2/azure-1.png';
    $box3title = 'Azure';
    $box3paragraph = 'Collaborating development process through source control, work tracking, and CI and delivery using Cloud & Azure DevOps Services.';
    ?>

    <?php
    $box4icon = 'https://img.icons8.com/ios/50/4a90e2/elephant.png';
    $box4title = 'Gradle';
    $box4paragraph = 'Implementing build testing automation with Gradle for faster and better software delivery with expertise in Apache Ant and Apache Maven.';
    ?>

    <?php
    $box5icon = 'https://img.icons8.com/ios-filled/50/4a90e2/jenkins.png';
    $box5title = 'Jenkins';
    $box5paragraph = 'Our dev team has proficiency with this popular CI tool to build and test your software product continuously with no margin for error.';
    ?>

    <?php
    $box6icon = 'https://img.icons8.com/ios-filled/50/4a90e2/selenium-test-automation.png';
    $box6title = 'Selenium';
    $box6paragraph = 'We automate web applications testing using any web browser via this Selenium API to ensure the highest quality product delivery.';
    ?>

    @include('technology.common.learnmore')

    <!-- learn more on end-->

    <!-- how to help -->

    <?php
    $helptitle = 'How does Webito Infotech help?';
    $helpparagraph1 = 'Your network architecture is the most crucial aspect of any infrastructure you build. It is always good to identify mistakes earlier before your end-users see them, by imposing automated quality checks and reducing defects across the entire development journey.';
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
