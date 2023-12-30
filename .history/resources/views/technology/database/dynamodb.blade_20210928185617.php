@extends('master')
@section('mobile-contain')
    <link rel="stylesheet" href="assets/css/flutter.css">
    {{-- <link rel="stylesheet" href="assets/css/flutter2.css"> --}}

    {{-- Title-Section Start --}}

    <?php
    $title = 'Amazon DynamoDB Development Company';
    $desc = 'Webito Infotech is a leading Amazon DynamoDB development company to develop and deliver robust database support systems for building applications across various industries. Leveraging NoSQL database services of popular Amazon DynamoDB, we build faster, flexible and highly functional mobile applications leveraging expert DynamoDB development services. With DynamoDB, we create database tables that can store and retrieve any amount of data, and serve any level of request traffic.';
    $bgimage = 'assets/img/technologies/mobile/landing-pattern1.jpg';
    $image = 'assets/img/technologies/mobile/1.png';
    ?>
    @include('technology.mobile.common.first-section')

    {{-- Title-section End --}}

    {{-- Hire-Section Start --}}

    <?php
    $title = 'Hire DynamoDB Developers';
    $subtitle = 'Create your own development team now';
    $desc = 'Everything starts with a ‘Hello’!! With ZERO upfront investment, we are committed to provide a solid foundation for your business idea. You’ll be amazed by working with our experts. <br> If not, the first 7 days are on us.';
    ?>
    @include('technology.mobile.common.hire')

    {{-- Hire-Section End --}}

    {{-- Slider-Section Start --}}
    <?php
    $title = 'APPROACH';
    $subtitle = 'Top DynamoDB Development Company';
    $slide1title = 'DynamoDB Development Expertise';
    $slide1desc = 'We are a leading DynamoDB development company having DynamoDB experts who are proficient in working with programming languages like Java, JavaScript, Swift, Node.js, .NET, PHP, Python. Our full-stack database architects provide end-to-end DynamoDB development services, from the design face all the way to the implementation.';
    $slide1alt = 'DynamoDB Development Expertise';
    $slide1img = 'assets/img/technologies/mobile/flutter-app-development-expertise.svg';

    $slide2title = 'Uncompromised Quality Checks';
    $slide2desc = 'To ensure quality deliverables, our QA ( Quality Analysts) perform dedicated and stringent quality checks at every level of DynamoDB development. Hire DynamoDB development services from Webito Infotech that include code review from back-end system experts to ensure that the end product is fast, functional and secure.';
    $slide2alt = 'Uncompromised Quality Checks';
    $slide2img = 'assets/img/technologies/mobile/uncompromised-quality-check.svg';

    $slide3title = 'Powerful DynamoDB Solutions';
    $slide3desc = 'If your existing mobile or web app is using AWS stack and want to implement a NoSQL database, then implementing the DynamoDB database is a no brainer due to faster storage and handling heavy traffic. Our DynamoDB development services and implementation are a perfect fit for mobile apps, web platforms, ad tech, IoT solutions, gaming and other apps needing low latency data access.';
    $slide3alt = 'Powerful DynamoDB Solutions';
    $slide3img = 'assets/img/technologies/mobile/flutter-app-solution.svg';

    $slide4title = 'Hire DynamoDB Developers';
    $slide4desc = 'We at Webito Infotech, a leading Amazon DynamoDB development company, offer flexible engagement models to hire DynamoDB developers as per business needs leveraging full-fledged DynamoDB development services. Contact us now to hire DynamoDB developers in India and USA to build high performing web and mobile applications at the best rates.';
    $slide4alt = 'Hire DynamoDB Developers';
    $slide4img = 'assets/img/technologies/mobile/hire-flutter-developer.svg';
    ?>
    @include('technology.mobile.common.slider')
    {{-- Slider-Section End --}}

    {{-- Offer-Section Start --}}
    <?php
    $title = 'Our Expert DynamoDB Development Services';
    $subtitle = 'WHAT WE DO';

    $slide1title = 'DynamoDB Web App Development';
    $slide1desc = 'Our DynamoDB development team builds flexible and powerful web apps that can scale up or scale down with automated server maintenance.';

    $slide2title = 'Performance Tuning';
    $slide2desc = 'We execute Query Optimization, Index Tuning, Caching & Buffer Tuning, Hot Spot & identify Bottleneck to nullify MySQL performance issues.';

    $slide3title = 'MySQL Health Check';
    $slide3desc = 'Hire MySQL app developers from Webito Infotech who have years of experience in identifying and resolving database errors of all kinds.';

    $slide4title = 'MySQL Migration';
    $slide4desc = 'We evaluate IT setup, identify challenges to migrate trial data to MySQL, benchmark & load test the same against sample queries.';

    $slide5title = 'Maintenance & Support';
    $slide5desc = 'Our MySQL development services are constant and compatible with all the trending and upcoming technologies with 24*7 support.';

    $slide6title = 'MySQL Consultation';
    $slide6desc = 'Our MySQL experts provide end-to-end consultation services to ensure a quality website or application that meets business goals.';
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
