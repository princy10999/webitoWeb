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
    $box3icon = 'https://img.icons8.com/color/50/4a90e2/azure-1.png';
    $box3title = 'Shopify Development';
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
