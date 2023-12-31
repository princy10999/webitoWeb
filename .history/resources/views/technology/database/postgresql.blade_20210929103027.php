@extends('master')
@section('mobile-contain')
    <link rel="stylesheet" href="assets/css/flutter.css">
    {{-- <link rel="stylesheet" href="assets/css/flutter2.css"> --}}

    {{-- Title-Section Start --}}

    <?php
    $title = 'PostgreSQL DBMS Software Development';
    $desc = 'The database configuration of your business applications shall not give you a headache. We at Webito Infotech help our clients with prompt and professional PostgreSQL development services to build robust and scalable websites and applications. We are a top PostgreSQL DBMS development company providing you all the features of expensive database systems at a fraction of the cost with great performance.';
    $bgimage = 'assets/img/technologies/mobile/landing-pattern1.jpg';
    $image = 'assets/img/technologies/mobile/1.png';
    ?>
    @include('technology.mobile.common.first-section')

    {{-- Title-section End --}}

    {{-- Hire-Section Start --}}

    <?php
    $title = 'Hire PostgreSQL Developers';
    $subtitle = 'Create your own development team now';
    $desc = 'Everything starts with a ‘Hello’!! With ZERO upfront investment, we are committed to provide a solid foundation for your business idea. You’ll be amazed by working with our experts. <br> If not, the first 7 days are on us.';
    ?>
    @include('technology.mobile.common.hire')

    {{-- Hire-Section End --}}

    {{-- Slider-Section Start --}}
    <?php
    $title = 'APPROACH';
    $subtitle = 'Top PostgreSQL DBMS Development Company';
    $slide1title = 'Unmatched PostgreSQL Expertise';
    $slide1desc = 'We have experience with open-source query tools including DBeaver, Hue, FlySpeed SQL Query, Squirrel SQL, HeidiSQL. Hire expert PostgreSQL developers from us who are proficient in programming interfaces for C/C++, Java, Perl, Python, Ruby, and Open database connectivity (ODBC) and development tools like query tool, data grid, SQL profiler, SQL debugger and import tools.';
    $slide1alt = 'Unmatched PostgreSQL Expertise';
    $slide1img = 'assets/img/technologies/mobile/flutter-app-development-expertise.svg';

    $slide2title = 'Uncompromised Quality Checks';
    $slide2desc = 'To ensure quality deliverables, our QA ( Quality Analysts) perform dedicated and stringent quality checks at every level of PostgreSQL development. Hire PostgreSQL development services from Webito Infotech which include code review from PostgreSQL experts to ensure that the end product is fast, functional and secure with amazing user experience.';
    $slide2alt = 'Uncompromised Quality Checks';
    $slide2img = 'assets/img/technologies/mobile/uncompromised-quality-check.svg';

    $slide3title = 'PostgreSQL Solutions';
    $slide3desc = 'We are a top PostgreSQL development company in India and USA helping businesses with robust, highly functional and scalable ERP applications to centralize, store, retrieve and interpret data from a PostgreSQL database. Hire PostgreSQL developers from us who also build dynamic web apps with intuitive forms and graphical illustrations of retrieved data for analysis.';
    $slide3alt = 'PostgreSQL Solutions';
    $slide3img = 'assets/img/technologies/mobile/flutter-app-solution.svg';

    $slide4title = 'Hire PostgreSQL Developers';
    $slide4desc = 'We at Webito Infotech offer flexible engagement models to hire PostgreSQL developers as per business needs leveraging full-fledged PostgreSQL development services. Hire PostgreSQL developers in India and USA to build high performing applications at the best rates. We implement best practices of PostgreSQL implementation to help fulfill your strategic business objectives.';
    $slide4alt = 'Hire PostgreSQL Developers';
    $slide4img = 'assets/img/technologies/mobile/hire-flutter-developer.svg';
    ?>
    @include('technology.mobile.common.slider')
    {{-- Slider-Section End --}}

    {{-- Offer-Section Start --}}
    <?php
    $title = 'Our PostgreSQL DBMS Development Services';
    $subtitle = 'WHAT WE DO';

    $slide1title = 'PostgreSQL Development';
    $slide1desc = 'We offer PostgreSQL DBMS development services to build top PostgreSQL apps by implementing stored procedures and functions.';

    $slide2title = 'Business Intelligence';
    $slide2desc = 'We program custom business intelligence modules for highly accurate real-time reporting services generated off the database.';

    $slide3title = 'PostgreSQL Tuning';
    $slide3desc = 'We analyze system requirements to check disk input/output (I/O), latency, memory, and CPU to enhance app performances.';

    $slide4title = 'PostgreSQL Management';
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
