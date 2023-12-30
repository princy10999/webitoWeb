@extends('master')
@section('mobile-contain')
    <!-- Meta Tag  -->
    <?php
    $seotitle = 'Drupal Development Company | Drupal website services India';
    $metacontent = 'Webito Infotech is a leading Drupal web development company that offers a complete range of Drupal development services for all businesses. Hire Drupal developers.';
    $metaname = 'Drupal Development Company | Drupal website services';
    $metaproperty = 'Webito Infotech - Drupal Development Company ';
    ?>
    <link rel="stylesheet" href="assets/css/flutter.css">

    {{-- Title-Section Start --}}

    <?php
    $title = 'Drupal Website Development';
    $desc = 'As a leading Drupal Website Development Company in India, Webito Infotech helps you benefit from this enterprise-ready content management framework with extensive API support leveraging a full range of Drupal web development services by expert Drupal web developers.';
    $bgimage = 'assets/img/technologies/mobile/landing-pattern3.jpg';
    $image = 'assets/img/technologies/mobile/AaravStar.webp';
    ?>
    @include('technology.mobile.common.first-section')

    {{-- Title-section End --}}

    {{-- Hire-Section Start --}}

    <?php
    $title = 'Hire Drupal Developers';
    $subtitle = 'Create your own development team now';
    $desc = 'Everything starts with a ‘Hello’!! With ZERO upfront investment, we are committed to provide a solid foundation for your business idea. You’ll be amazed by working with our experts. <br> If not, the first 7 days are on us.';
    ?>
    @include('technology.mobile.common.hire')

    {{-- Hire-Section End --}}

    {{-- Slider-Section Start --}}
    <?php
    $title = 'APPROACH';
    $subtitle = 'Leading Drupal Web Development Company';
    $slide1title = 'Drupal Web Development Expertise';
    $slide1desc = 'With Drupal’s impeccable CMS we help you build robust Drupal websites, web applications and web portals to take your business forward & stay connected with a vast customer base. Being a top Drupal web development company, our experience in designing and developing numerous Drupal websites with the latest extensions and components makes us a renowned Drupal web development company.';
    $slide1alt = 'Drupal Web Development Expertise';
    $slide1img = 'assets/img/technologies/mobile/flutter-app-development-expertise.svg';

    $slide2title = 'Quality Delivered in Time';
    $slide2desc = 'We put stringent quality checks at every stage of our Drupal web development services. Especially during Drupal web development, we deploy a dedicated QA team on each project that ensures bug-free, quality Drupal development.  Our excellent track record boasts of completing Drupal projects within a dedicated budget and deadline and help you reach desired business goals.';
    $slide2alt = 'Quality Delivered in Time';
    $slide2img = 'assets/img/technologies/mobile/uncompromised-quality-check.svg';

    $slide3title = 'Practical Drupal Web Solutions';
    $slide3desc = 'We help you scale your idea in a way that you can achieve your goals one milestone at a time. Instead of big investments into a directionless plan, our budget-focused strategy along with our standardized process in a controlled environment for any customized Drupal website, whether you’re a startup, a business or an enterprise takes you one step at a time.';
    $slide3alt = 'Practical Drupal Web Solutions';
    $slide3img = 'assets/img/technologies/mobile/flutter-app-solution.svg';

    $slide4title = 'Hire the Best Drupal Developers';
    $slide4desc = 'Together we ensure top-notch Drupal web application development with all its benefits like easily extendable plugins, & efficient testing methods. Using W3C validation, cross-browser compatibility, SEO semantic code & hand-coded HTML/XHTML & CSS, our Drupal developers can successfully build you a desirable platform to take your business forward.';
    $slide4alt = 'Hire the Best Drupal Developers';
    $slide4img = 'assets/img/technologies/mobile/hire-flutter-developer.svg';
    ?>
    @include('technology.mobile.common.slider')
    {{-- Slider-Section End --}}

    {{-- Offer-Section Start --}}
    <?php
    $title = 'Our Drupal Web Development Services';
    $subtitle = 'WHAT WE DO';

    $slide1title = 'CMS Installation';
    $slide1desc = 'We offer powerful Drupal web app development with built-in validation features of this open-source content management platform.';

    $slide2title = 'Umbraco Plugin Development';
    $slide2desc = 'Hire Umbraco developers who aim to provide fully functional and secure CMS to provide futuristic web solutions with plugin development services.';

    $slide3title = 'Umbraco Migration';
    $slide3desc = 'Hire Umbraco developers to foster migration of PHP, ASP, ASP.NET and other CMS systems to Umbraco powered websites or CMS.';

    $slide4title = 'API Integration';
    $slide4desc = 'We offer powerful API integration that enables website or app to use every aspect of Umbraco CMS for superior user experience.';

    $slide5title = 'Umbraco Support & Maintenance';
    $slide5desc = 'Our Umbraco development ecosystem offers round the clock Umbraco support & maintenance to our esteemed clients.';

    $slide6title = 'Enterprise-Grade Solutions';
    $slide6desc = 'We develop highly functional, robust and scalable enterprise level CMS solutions which are bespoke to meet exact business requirements.';
    ?>
    @include('technology.mobile.common.what-we-offer')
    {{-- Offer-Section End --}}

    {{-- Services-Section Start --}}
    <?php
    $title = 'Looking at a wider Spectrum';
    $subtitle = 'WEBITO INFOTECH SERVICES';
    $slide1img = 'assets/img/technologies/mobile/mobile-application-development.svg';
    $slide1alt = 'Mobile Application Development';
    $slide1title = 'Mobile Application Development';
    $slide1desc = 'Developing iOS and Android apps for smartphones and tablets with great attention to design.';

    $slide2img = 'assets/img/technologies/mobile/custom-web-development.svg';
    $slide2alt = 'Custom Web Development';
    $slide2title = 'Custom Web Development';
    $slide2desc = 'Developing responsive websites with complete content control and scalability.';

    $slide3img = 'assets/img/technologies/mobile/mobile-game-development.svg';
    $slide3alt = 'Mobile Games Development';
    $slide3title = 'Mobile Games Development';
    $slide3desc = 'Developing engaging 2D and 3D games on iOS and Android platforms that generate revenue.';

    $slide4img = 'assets/img/technologies/mobile/digital-marketing-service.svg';
    $slide4alt = 'Digital Marketing Services';
    $slide4title = 'Digital Marketing Services';
    $slide4desc = 'Entire online marketing stack with focus on content, creative, social media and digital.';

    $slide5img = 'assets/img/technologies/mobile/ui-design-creative-services.svg';
    $slide5alt = 'UI Design / Creative Services';
    $slide5title = 'UI Design / Creative Services';
    $slide5desc = 'Designing stunning user interfaces and designs that gives unique identity and experience.';

    $slide6img = 'assets/img/technologies/mobile/cloud-infrastructure-management.svg';
    $slide6alt = 'Cloud Infrastructure Management';
    $slide6title = 'Cloud Infrastructure Management';
    $slide6desc = 'AWS certified cloud architects who can set up and manage entire cloud infrastructure.';
    ?>
    @include('technology.mobile.common.services')

    {{-- Services-Section End --}}

    {{-- Solution-Section Start --}}

    @include('technology.mobile.common.solution')
    {{-- Solution-Section End --}}

    {{-- Trusted-Section Start --}}

    {{-- @include('technology.mobile.common.trusted-by') --}}

    {{-- Trusted-Section End --}}

    {{-- Ourwork-Section Start --}}

    {{-- @include('technology.mobile.common.ourwork') --}}

    {{-- Ourwork-Section End --}}

    {{-- Stories-Section Start --}}

    {{-- @include('technology.mobile.common.stories') --}}

    {{-- Stories-Section End --}}

    {{-- Request-Section Start --}}

    @include('technology.mobile.common.request')

    {{-- Request-Section End --}}

@endsection
