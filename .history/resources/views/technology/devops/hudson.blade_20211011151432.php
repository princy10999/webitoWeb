@extends('master')
@section('mobile-contain')
    <!-- Meta Tag  -->
    <?php
    $seotitle = 'Top Hudson App Automation Testing Company | Hire expert Hudson developers';
    $metacontent = 'Hire Hudson Developers from a top DevOps services providing company, who have expertise in top automation tools for flawless web & mobile app development.';
    $metaname = 'Top Hudson App Automation Testing | Hire expert Hudson developers';
    $metaproperty = 'Webito Infotech - Top Hudson App Automation Testing Company ';
    ?>
    <link rel="stylesheet" href="assets/css/flutter.css">

    {{-- Title-Section Start --}}

    <?php
    $title = 'Continuous Integration with Hudson App Testing';
    $desc = 'Hire expert Hudson developers from Webito Infotech to start defining and executing tests on-the-go, from development stages to production. In the agile software development environment, Continuous Integration (CI) enhances overall process and software quality. Our expert Hudson CI services will help to speed up the error-free development process while avoiding last-hour chaos.';
    $bgimage = 'assets/img/technologies/mobile/landing-pattern1.jpg';
    $image = 'assets/img/technologies/mobile/77.png';
    ?>
    @include('technology.mobile.common.first-section')

    {{-- Title-section End --}}

    {{-- Hire-Section Start --}}

    <?php
    $title = 'Hire Hudson Testers';
    $subtitle = 'Create your own development team now';
    $desc = 'Everything starts with a ‘Hello’!! With ZERO upfront investment, we are committed to provide a solid foundation for your business idea. You’ll be amazed by working with our experts. <br> If not, the first 7 days are on us.';
    ?>
    @include('technology.mobile.common.hire')

    {{-- Hire-Section End --}}

    {{-- Slider-Section Start --}}
    <?php
    $title = 'APPROACH';
    $subtitle = 'Top Hudson App Automation Testing Company';
    $slide1title = 'Hudson Testers Expertise';
    $slide1desc = 'We are a leading Hudson CI automation testing company that develops web and mobile apps and test them on real emulators as well as simulators. We help our clients to accelerate the integration process with best-in-class automation tools like Ant, Maven, grunt, gulp, and shell scripts. Hire Hudson testers from Webito Infotech for quality Continuous Integration (CI) services.';
    $slide1alt = 'Hudson Testers Expertise';
    $slide1img = 'assets/img/technologies/mobile/flutter-app-development-expertise.svg';

    $slide2title = 'Uncompromised Quality Checks';
    $slide2desc = 'To ensure quality deliverables, our QA ( Quality Analysts) perform dedicated and stringent quality checks at every level of the Hudson automation testing process. Hire Hudson testers who work coordination with web teams, iOS app development and Android app development to serve seamless mobile app testing.';
    $slide2alt = 'Uncompromised Quality Checks';
    $slide2img = 'assets/img/technologies/mobile/uncompromised-quality-check.svg';

    $slide3title = 'Business Solutions';
    $slide3desc = 'We have years of experience in delivering end-to-end Hudson automation testing services to an array of industries like Education, eCommerce, Healthcare & Fitness, Media, Transportation & Logistics, etc. We are the leaders in Hudson automation testing services with proven expertise in testing tools and methodologies to offer a wide range of testing solutions.';
    $slide3alt = 'Business Solutions';
    $slide3img = 'assets/img/technologies/mobile/flutter-app-solution.svg';

    $slide4title = 'Hire Hudson Developers';
    $slide4desc = 'We at Webito Infotech offer flexible engagement models to hire Hudson developers as per business needs leveraging all-in-one Hudson automation testing services. Hire Hudson testers in India and USA to build high performing applications at the best rates. We implement best practices of Hudson implementation to help fulfill your strategic business objectives.';
    $slide4alt = 'Hire Hudson Developers';
    $slide4img = 'assets/img/technologies/mobile/hire-flutter-developer.svg';
    ?>
    @include('technology.mobile.common.slider')
    {{-- Slider-Section End --}}

    {{-- Offer-Section Start --}}
    <?php
    $title = 'Our Hudson App Automating Testing Services';
    $subtitle = 'WHAT WE DO';

    $slide1title = 'Strategic Application Testing';
    $slide1desc = 'We plan an automation process that depends on the app development stage, infrastructure analysis, and understanding challenges.';

    $slide2title = 'Mobile Automation Testing';
    $slide2desc = 'Validate functionality, performance, database configuration, memory capacity, & compatibility with various platforms & devices.';

    $slide3title = 'Performance Test Automation';
    $slide3desc = 'Hire Hudson testers use the right performance testing tools to test, verify and validate performance on static and dynamic resources.';

    $slide4title = 'Automated Regression Testing';
    $slide4desc = 'We provide automated regression testing for mobile applications, web services, APIs by re-running scripts to meet quality.';

    $slide5title = 'Testing Report Generation';
    $slide5desc = 'Hire Hudson developers who generate regular and interactive automation test reports to resolve bugs at the earliest.';

    $slide6title = 'Azure Cloud Consultation';
    $slide6desc = 'Hire Azure cloud consultants who provide innovative Cloud Solutions establishing a solid foundation for the cloud initiative.';
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
