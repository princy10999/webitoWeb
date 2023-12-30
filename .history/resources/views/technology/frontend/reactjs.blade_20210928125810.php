@extends('master')
@section('mobile-contain')
    <link rel="stylesheet" href="assets/css/flutter.css">
    {{-- <link rel="stylesheet" href="assets/css/flutter2.css"> --}}

    {{-- Title-Section Start --}}

    <?php
    $title = 'ReactJS Web Application Development';
    $desc = 'IndiaNIC is a top ReactJS web app development company, crafting stunning and compostable web user Interfaces (UI) for enterprise-grade apps and consumer-facing projects with optimum security. Hire dedicated ReactJS developers from IndiaNIC, whose technology expertise includes all the versions of ReactJS, from 0.3.0 to 16.6.3 as our mainstream front-end technology.';
    $bgimage = 'assets/img/technologies/mobile/landing-pattern1.jpg';
    $image = 'assets/img/technologies/mobile/1.png';
    ?>
    @include('technology.mobile.common.first-section')

    {{-- Title-section End --}}

    {{-- Hire-Section Start --}}

    <?php
    $title = 'Hire ReactJS Developers';
    $subtitle = 'Create your own development team now';
    $desc = 'Everything starts with a ‘Hello’!! With ZERO upfront investment, we are committed to provide a solid foundation for your business idea. You’ll be amazed by working with our experts. <br> If not, the first 7 days are on us.';
    ?>
    @include('technology.mobile.common.hire')

    {{-- Hire-Section End --}}

    {{-- Slider-Section Start --}}
    <?php
    $title = 'APPROACH';
    $subtitle = 'Top ReactJS Development Company';
    $slide1title = 'ReactJS Development Expertise';
    $slide1desc = 'Hire the best ReactJS developers from IndiaNIC, a leading ReactJS development company, who are proficient in JavaScript, CSS, HTML, JSX, JavaScript fundamentals, ES6, Babel, Webpack, Redux, etc. Our proficiency and experience with ReactJS framework is our strength to develop and deploy production-ready React JS applications with minimum possible bundle sizes.';
    $slide1alt = 'ReactJS Development Expertise';
    $slide1img = 'assets/img/technologies/mobile/flutter-app-development-expertise.svg';

    $slide2title = 'Uncompromised Quality Checks';
    $slide2desc = 'To ensure quality deliverables, our QA ( Quality Analysts) perform dedicated and stringent quality checks at every level of ReactJS development services eco-system, by using automated and manual testing techniques. This is done to ensure that the every ReactJS web application that we develop is fully functional, compatible, flawless, bug-free and user-friendly.';
    $slide2alt = 'Uncompromised Quality Checks';
    $slide2img = 'assets/img/technologies/mobile/uncompromised-quality-check.svg';

    $slide3title = ' Practical ReactJS Solutions';
    $slide3desc = 'Our ReactJS development team has unmatched experience in working with diverse industry verticals like healthcare, retail, finance, automotive, media, etc. This helps us to apply our creativity into suggesting, developing and deploying robust, real-world and affordable applications for small, medium and large scale businesses globally';
    $slide3alt = ' Practical ReactJS Solutions';
    $slide3img = 'assets/img/technologies/mobile/flutter-app-solution.svg';

    $slide4title = 'Hire Dedicated ReactJS Developers';
    $slide4desc = 'Hire dedicated ReactJS developers at affordable prices from IndiaNIC who possess top-of-the-line expertise in ReactJS development services. Being a leading ReactJS development company with a client centric approach, IndiaNIC offers flexible engagement models to hire dedicated ReactJS developers as per business needs.';
    $slide4alt = 'Hire Dedicated ReactJS Developers';
    $slide4img = 'assets/img/technologies/mobile/hire-flutter-developer.svg';
    ?>
    @include('technology.mobile.common.slider')
    {{-- Slider-Section End --}}

    {{-- Offer-Section Start --}}
    <?php
    $title = 'Our ReactJS App Development Services';
    $subtitle = 'WHAT WE DO';

    $slide1title = 'Custom ReactJS Development';
    $slide1desc = 'Our ReactJS programmers develop dynamic, robust, secure software solutions and applications for complex business scenarios.';

    $slide2title = 'ReactJS UI/UX Development';
    $slide2desc = 'Hire best ReactJS coders from us to avail full-fledged ReactJS development services to build your next gen app with captivating & intuitive UI/UX.';

    $slide3title = 'ReactJS Front-End Development';
    $slide3desc = 'ReactJS team at IndiaNIC has years of experience in solving challenges like SPAs, various frameworks and multiple complex architectures.';

    $slide4title = 'ReactJS Native App Development';
    $slide4desc = 'We also build fast, affordable and robust native mobile apps using React Native app development services leveraging React Native framework.';

    $slide5title = 'AngularJS Version Migration';
    $slide5desc = 'Our expertise helps you easily upgrade your current AngularJS application to an advanced version to make sure the app is running flawlessly.';

    $slide6title = 'Hire AngularJS Developers';
    $slide6desc = 'We provide useful AngularJS consulting based on your personalised business requirements, wherever and whenever you want it.';
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
