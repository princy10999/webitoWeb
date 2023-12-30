@extends('master')
@section('cms-contain')

    <link href="assets/css/mobile.css" rel="stylesheet">

    <?php
    $title = 'Expertise in CMS Frameworks';
    $desc = 'Webito Infotech has experience in developing dynamic and scalable web CMS for large scale apps since 2020 for global businesses. Our CMS experts build and implement user profiles, custom modules, themes and campaigns ensuring smooth functioning with automation, collaboration, tools integration, and workflow processes.';
    ?>

    @include('technology.common.title')
    <!-- title end -->

    <!-- learn more on -->
    <?php $title = 'Best Ecommerce platforms we use'; ?>

    <?php
    $box1icon = 'https://img.icons8.com/ios-filled/50/4a90e2/magento.png';
    $box1title = 'Magento Development';
    $box1paragraph = 'Delivering complete control to content and functionality of your large scale Ecommerce business with marketing, SEO, Catalog management tools.';
    ?>

    <?php
    $box2icon = 'https://img.icons8.com/windows/50/4a90e2/wordpress.png';
    $box2title = 'WordPress Development';
    $box2paragraph = 'Its simplicity, flexibility, and various plugins offer a platform to build everything from simple websites like a blog site to complex enterprise web apps.';
    ?>

    <?php
    $box3icon = 'https://img.icons8.com/ios-filled/50/4a90e2/shopify.png';
    $box3title = 'Shopify Development';
    $box3paragraph = 'Shopify experts help you to build your desired online store with features that empower you to manage your inventory, marketing, and transactions.';
    ?>

    <?php
    $box4icon = 'https://img.icons8.com/windows/32/4a90e2/umbraco.png';
    $box4title = 'Umbraco Development';
    $box4paragraph = 'With expertise in .NET, MySQL, #C, XML, etc., our Umbraco coders build powerful, secure, scalable, and feature-rich Content Management Systems.';
    ?>

    <?php
    $box5icon = 'https://img.icons8.com/ios/50/4a90e2/drupal.png';
    $box5title = 'Drupal Development';
    $box5paragraph = 'Webito Infotech helps you benefit from this enterprise-ready content management framework with extensive API support to incorporate the latest features.';
    ?>

    <?php
    $box6icon = 'https://img.icons8.com/ios-filled/50/4a90e2/joomla.png';
    $box6title = 'Joomla Development';
    $box6paragraph = 'Get connected to your large customer base efficiently with CMS solutions built with Joomla for user friendly features and modern extensions.';
    ?>

    @include('technology.common.learnmore')

    <!-- learn more on end-->

    <!-- how to help -->

    <?php
    $helptitle = 'How does Webito Infotech help?';
    $helpparagraph1 = 'IndiaNIC is an award winning CMS development company in India and USA helping startups, enterprises and all other global businesses with bespoke CMS solutions based on their project needs.';
    $helpparagraph2 = 'Our efficient and well planned DevOps orchestration strategy makes it possible by combining business goals, toolchains, software development process and operation teams together with automated and streamlined IT processes with expert DevOps consultation.';
    $helpappsimg = '';
    $icon1 = 'https://img.icons8.com/windows/50/4a90e2/amazon-web-services.png';
    $icon2 = 'https://img.icons8.com/ios-filled/50/4a90e2/google-cloud-platform.png';
    $icon3 = 'https://img.icons8.com/color/50/4a90e2/azure-1.png';
    $icon4 = 'https://img.icons8.com/ios/50/4a90e2/elephant.png';
    $icon5 = 'https://img.icons8.com/ios-filled/50/4a90e2/jenkins.png';
    $icon6 = 'https://img.icons8.com/ios-filled/50/4a90e2/selenium-test-automation.png';
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
