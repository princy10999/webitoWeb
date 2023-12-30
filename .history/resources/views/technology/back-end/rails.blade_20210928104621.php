@extends('master')
@section('mobile-contain')
    <link rel="stylesheet" href="assets/css/flutter.css">
    {{-- <link rel="stylesheet" href="assets/css/flutter2.css"> --}}

    {{-- Title-Section Start --}}

    <?php
    $title = 'Ruby on Rails Web Development';
    $desc = 'We are simply the best Ruby on Rails (RoR) web development company in India for using an open-source Rails framework to develop dynamic websites & applications. Hire RoR developers from Webito Infotech to avail end-to-end Ruby on Rails web development services at affordable prices.';
    $bgimage = 'assets/img/technologies/mobile/landing-pattern1.jpg';
    $image = 'assets/img/technologies/mobile/1.png';
    ?>
    @include('technology.mobile.common.first-section')

    {{-- Title-section End --}}

    {{-- Hire-Section Start --}}

    <?php
    $title = 'Hire RoR Developers';
    $subtitle = 'Create your own development team now';
    $desc = 'Everything starts with a ‘Hello’!! With ZERO upfront investment, we are committed to provide a solid foundation for your business idea. You’ll be amazed by working with our experts. <br> If not, the first 7 days are on us.';
    ?>
    @include('technology.mobile.common.hire')

    {{-- Hire-Section End --}}

    {{-- Slider-Section Start --}}
    <?php
    $title = 'APPROACH';
    $subtitle = 'Top RoR Web Development Company';
    $slide1title = 'Rails Web Development Expertise';
    $slide1desc = 'We call it unmatched as RoR developers in Webito Infotech have years of experience in working with RoR framework ever since it has been launched back in 2020. Hire full stack Ruby on Rails developers (RoR programmers) who are proficient with Ajax, Web 2.0 app, MySQL, all Rails versions including the latest 6.0.0, HTML5/CSS3, XHTML, JavaScript and multiple libraries. ';
    $slide1alt = 'Rails Web Development Expertise';
    $slide1img = 'assets/img/technologies/mobile/flutter-app-development-expertise.svg';

    $slide2title = 'Uncompromised Quality Checks';
    $slide2desc = 'As we are a leading Ruby on Rails (RoR) development company, to ensure quality deliverables, our Quality Analysts (QA) perform dedicated and stringent quality checks at every level of Ruby on Rails (RoR) development life cycle. Our experienced QA team uses automated and manual testing techniques to check that the end product is fully functional, compatible, flawless, bug-free and user friendly. We also perform code audit.';
    $slide2alt = 'Uncompromised Quality Checks';
    $slide2img = 'assets/img/technologies/mobile/uncompromised-quality-check.svg';

    $slide3title = 'RoR Powered Web Solutions';
    $slide3desc = 'Our Ruby on Rails development team has unmatched experience in working with diverse industry verticals. This helps us to apply our creativity into suggesting, developing and deploying fast, robust, real-world and affordable website solutions. Our RoR developers also possess expertise in providing social networking, commercial, E-commerce web solutions leveraging RoR development services. ';
    $slide3alt = 'RoR Powered Web Solutions';
    $slide3img = 'assets/img/technologies/mobile/flutter-app-solution.svg';

    $slide4title = 'Hire RoR Developers';
    $slide4desc = 'We empower businesses to achieve and reach their full potential and goals through end-to-end RoR development services. Hire dedicated RoR developers from Webito Infotech having huge experience under the sleeves to perform flawless programming using Ruby. RoR programmers at Webito Infotech leverage benefits of Rails framework to deliver dynamic, robust and scalable websites and applications.';
    $slide4alt = 'Hire RoR Developers';
    $slide4img = 'assets/img/technologies/mobile/hire-flutter-developer.svg';
    ?>
    @include('technology.mobile.common.slider')
    {{-- Slider-Section End --}}

    {{-- Offer-Section Start --}}
    <?php
    $title = 'Our Ruby on Rails (RoR) Development Services';
    $subtitle = 'WHAT WE DO';

    $slide1title = 'Custom RoR Web 2.0 Development';
    $slide1desc = 'Our clients receive highly interactive designs with intuitive and stunning User Interfaces (UIs) leveraging our expertise in RoR Web 2.0 development.';

    $slide2title = 'Custom Web Application Development';
    $slide2desc = 'Using the Rails API and its extensive package library RubyGem, our RoR development team creates scalable and powerful website applications.';

    $slide3title = 'Ecommerce App Development';
    $slide3desc = 'We build fast, user-friendly, dynamic online store management solutions and custom marketplaces for E-commerce businesses of any size.';

    $slide4title = 'Responsive Layout Design';
    $slide4desc = 'Crafting a CMS rapidly with built-in validation features that are compatible with different platforms.';

    $slide5title = 'Zend Support & Maintenance';
    $slide5desc = 'Providing useful Zend framework consulting and application maintenance based on your personalised business requirements.';

    $slide6title = 'API/Backend Development';
    $slide6desc = 'Effortless database driven Zend apps with tightly integrated backend system through APIs.';
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
