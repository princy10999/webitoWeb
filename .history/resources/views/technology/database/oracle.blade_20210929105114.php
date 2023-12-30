@extends('master')
@section('mobile-contain')
    <link rel="stylesheet" href="assets/css/flutter.css">
    {{-- <link rel="stylesheet" href="assets/css/flutter2.css"> --}}

    {{-- Title-Section Start --}}

    <?php
    $title = 'Oracle Database Application Development';
    $desc = 'We are a top Oracle DB application development company providing excellence in cloud-based solutions, E-business suite, custom engineered solutions for enhanced business intelligence. IndiaNIC offers end-to-end Oracle database application development services which help clients to tackle complex business problems leveraging rich industry experience and technical expertise.';
    $bgimage = 'assets/img/technologies/mobile/landing-pattern1.jpg';
    $image = 'assets/img/technologies/mobile/1.png';
    ?>
    @include('technology.mobile.common.first-section')

    {{-- Title-section End --}}

    {{-- Hire-Section Start --}}

    <?php
    $title = 'Hire Oracle DB Developers';
    $subtitle = 'Create your own development team now';
    $desc = 'Everything starts with a ‘Hello’!! With ZERO upfront investment, we are committed to provide a solid foundation for your business idea. You’ll be amazed by working with our experts. <br> If not, the first 7 days are on us.';
    ?>
    @include('technology.mobile.common.hire')

    {{-- Hire-Section End --}}

    {{-- Slider-Section Start --}}
    <?php
    $title = 'APPROACH';
    $subtitle = 'Top Oracle Database Development Company';
    $slide1title = 'Oracle Development Expertise';
    $slide1desc = 'Hire Oracle database development team from IndiaNIC that has experts in SQL, Java/JavaScript, object-oriented programming, Oracle application express (APEX) tool, AIX, Solaris, Linux, HP/HX based database (DB) support systems. We provide complete and custom Oracle software development services for cloud, mobile, database, middleware and more.';
    $slide1alt = 'Oracle Development Expertise';
    $slide1img = 'assets/img/technologies/mobile/flutter-app-development-expertise.svg';

    $slide2title = 'Uncompromised Quality Checks';
    $slide2desc = 'To ensure quality deliverables, our QA ( Quality Analysts) perform dedicated and stringent quality checks at every level of Oracle development. Hire Oracle development services from IndiaNIC that include code review from Oracle experts to ensure that the end product is fully functional, secure, flawless, and user-friendly.';
    $slide2alt = 'Uncompromised Quality Checks';
    $slide2img = 'assets/img/technologies/mobile/uncompromised-quality-check.svg';

    $slide3title = 'Oracle Powered Solutions';
    $slide3desc = 'Being a leading Oracle database development company, IndiaNIC offers all-in-one Oracle solutions related to cloud services and solutions, onsite or remote database development, and management. We have delivered Oracle-based solutions such as Blockchain-based Cloud integration, fusion middleware, ERP and CRM apps for varied industry domains.';
    $slide3alt = 'Oracle Powered Solutions';
    $slide3img = 'assets/img/technologies/mobile/flutter-app-solution.svg';

    $slide4title = 'Hire Oracle Developers';
    $slide4desc = 'Hire dedicated Oracle developers from IndiaNIC, a leading Oracle database development company, who offer Oracle-based database coding and support. Our talented pool of Oracle database developers can install, implement, manage and tune existing and new oracle database applications. Contact us now to hire the best Oracle application developers for full-fledged smart business solutions.';
    $slide4alt = 'Hire Oracle Developers';
    $slide4img = 'assets/img/technologies/mobile/hire-flutter-developer.svg';
    ?>
    @include('technology.mobile.common.slider')
    {{-- Slider-Section End --}}

    {{-- Offer-Section Start --}}
    <?php
    $title = 'Our Oracle Database Development Services';
    $subtitle = 'WHAT WE DO';

    $slide1title = 'PostgreSQL Development';
    $slide1desc = 'We offer PostgreSQL DBMS development services to build top PostgreSQL apps by implementing stored procedures and functions.';

    $slide2title = 'Business Intelligence';
    $slide2desc = 'We program custom business intelligence modules for highly accurate real-time reporting services generated off the database.';

    $slide3title = 'PostgreSQL Tuning';
    $slide3desc = 'We analyze system requirements to check disk input/output (I/O), latency, memory, and CPU to enhance app performances.';

    $slide4title = 'PostgreSQL Management';
    $slide4desc = 'Hire expert PostgreSQL developers with rich industry experience who help clients respond to outages and unfavorable events.';

    $slide5title = 'PostgreSQL Consultation';
    $slide5desc = 'Our PostgreSQL consultation services are constant and compatible with all the trending and upcoming technologies with 24*7 support.';

    $slide6title = 'PostgreSQL Database Migration';
    $slide6desc = 'We help businesses in the most challenging environments to implement a new database technology with ZERO downtime.';
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