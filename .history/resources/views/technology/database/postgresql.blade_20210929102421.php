@extends('master')
@section('mobile-contain')
    <link rel="stylesheet" href="assets/css/flutter.css">
    {{-- <link rel="stylesheet" href="assets/css/flutter2.css"> --}}

    {{-- Title-Section Start --}}

    <?php
    $title = 'PostgreSQL DBMS Software Development';
    $desc = 'A leading MySQL applications development company having over two decades of experience in delivering high-performance web & mobile apps. Hire MySQL developers from Webito Infotech who develop superior dynamic database-driven business applications leveraging Java and PHP.';
    $bgimage = 'assets/img/technologies/mobile/landing-pattern1.jpg';
    $image = 'assets/img/technologies/mobile/1.png';
    ?>
    @include('technology.mobile.common.first-section')

    {{-- Title-section End --}}

    {{-- Hire-Section Start --}}

    <?php
    $title = 'Hire MySQL Developers';
    $subtitle = 'Create your own development team now';
    $desc = 'Everything starts with a ‘Hello’!! With ZERO upfront investment, we are committed to provide a solid foundation for your business idea. You’ll be amazed by working with our experts. <br> If not, the first 7 days are on us.';
    ?>
    @include('technology.mobile.common.hire')

    {{-- Hire-Section End --}}

    {{-- Slider-Section Start --}}
    <?php
    $title = 'APPROACH';
    $subtitle = 'Top PHP MySQL App Development Company';
    $slide1title = 'Expertise in MySQL Development';
    $slide1desc = 'Hire expert MYSQL developers from a top MYSQL development company having years of experience and proficiency in relevant PHP based frameworks like Laravel, CodeIgniter, Symfony, Zend, Yii, etc. MySQL developers from Webito Infotech have unmatched expertise in MySQL database architectures for implementing MySQL applications.';
    $slide1alt = 'Expertise in MySQL Development';
    $slide1img = 'assets/img/technologies/mobile/flutter-app-development-expertise.svg';

    $slide2title = 'Uncompromised Quality Checks';
    $slide2desc = 'To ensure quality deliverables, our QA ( Quality Analysts) perform dedicated and stringent quality checks at every level of MySQL development. Hire affordable PHP MySQL development services from Webito Infotech, a leading PHP MySQL app development company, that include code review from MySQL experts to ensure that the end product is fully functional, secure, flawless, and user-friendly.';
    $slide2alt = 'Uncompromised Quality Checks';
    $slide2img = 'assets/img/technologies/mobile/uncompromised-quality-check.svg';

    $slide3title = 'Powerful MySQL Solutions';
    $slide3desc = 'Being at the forefront in PHP MySQL app development services, we have experience in working on several types of business domains like providing solutions for Social Media and Networking, Ecommerce, Real Estate, Store Management, Healthcare, Mobile, Logistics, Telecom, Mattresses, Solar Energy, Consumer Electronics, Photography, Cosmetic Banking, Utilities, and various other industries.';
    $slide3alt = 'Powerful MySQL Solutions';
    $slide3img = 'assets/img/technologies/mobile/flutter-app-solution.svg';

    $slide4title = 'Hire MySQL Developers';
    $slide4desc = 'Webito Infotech is a top PHP MySQL app development company offering flexible engagement models to hire dedicated MySQL developers as per custom business needs. We deliver full-fledged MySQL development services with 100% guarantee and client satisfaction. Contact us now to hire MySQL developers in India to build a highly functional MySQL website or application at the best rates. We follow client-centric approach to develop and deploy MySQL applications.';
    $slide4alt = 'Hire MySQL Developers';
    $slide4img = 'assets/img/technologies/mobile/hire-flutter-developer.svg';
    ?>
    @include('technology.mobile.common.slider')
    {{-- Slider-Section End --}}

    {{-- Offer-Section Start --}}
    <?php
    $title = 'Our MySQL App Development Services    ';
    $subtitle = 'WHAT WE DO';

    $slide1title = 'Architecture & Design';
    $slide1desc = 'We review your database app plans, perform analysis and execute architecture & design to deliver top-notch MySQL database applications.';

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
