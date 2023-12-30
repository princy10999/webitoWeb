@extends('master')
@section('mobile-contain')
    <link rel="stylesheet" href="assets/css/flutter.css">
    {{-- <link rel="stylesheet" href="assets/css/flutter2.css"> --}}

    {{-- Title-Section Start --}}

    <?php
    $title = 'Delivering Web & Mobile Solutions using Laravel';
    $desc = 'IndiaNIC is a leading Laravel application development company in India, that provides foremost web apps with PHP Laravel development services. Benefit from all of Laravel web application development services and utilise the features of this structured open source PHP framework for your business site.';
    $bgimage = 'assets/img/technologies/mobile/landing-pattern1.jpg';
    $image = 'assets/img/technologies/mobile/1.png';
    ?>
    @include('technology.mobile.common.first-section')

    {{-- Title-section End --}}

    {{-- Hire-Section Start --}}

    <?php
    $title = '7 Days Free Trial.';
    $subtitle = 'Create your own development team now';
    $desc = 'Everything starts with a ‘Hello’!! With ZERO upfront investment, we are committed to provide a solid foundation for your business idea. You’ll be amazed by working with our experts. <br> If not, the first 7 days are on us.';
    ?>
    @include('technology.mobile.common.hire')

    {{-- Hire-Section End --}}

    {{-- Slider-Section Start --}}
    <?php
    $title = 'APPROACH';
    $subtitle = 'PHP Laravel Application Development Company';
    $slide1title = 'Skilful Laravel Expertise';
    $slide1desc = 'We’ve delivered web applications with expressive and elegant syntax using Laravel framework​ for a long time. Being the most popular PHP framework, we help you develop web and enterprise level Laravel applications on the platform of MVP architecture. With our expertise in the Laravel technology, you can benefit from all of its features like modular packaging, template engineering, Eloquent ORM, Database migration and unit testing.';
    $slide1alt = 'Skilful Laravel Expertise';
    $slide1img = 'assets/img/technologies/mobile/flutter-app-development-expertise.svg';

    $slide2title = 'Quality Delivered in Time';
    $slide2desc = 'We put stringent quality checks at every level of our Laravel web development process. Specially during development, we deploy a dedicated QA team on each project that ensures bug-free, quality Laravel web development. Laravel’s focus is of writing code syntax which is simple, efficient and less expensive. We boast an excellent track record of completing Laravel projects within a dedicated budget and deadline.';
    $slide2alt = 'Quality Delivered in Time';
    $slide2img = 'assets/img/technologies/mobile/uncompromised-quality-check.svg';

    $slide3title = 'Practical Laravel solutions';
    $slide3desc = 'We help you scale your idea in a way that you can achieve your goals one milestone at a time. Instead of big investments into a directionless plan, our budget focused strategy for any customized Laravel application whether you’re a startup, a business or an enterprise takes you one step at a time. Our standardised process in a controlled environment gets you the best Laravel industry expertise.';
    $slide3alt = 'Practical Laravel solutions';
    $slide3img = 'assets/img/technologies/mobile/flutter-app-solution.svg';

    $slide4title = 'Skilled Laravel Developers';
    $slide4desc = 'Our Laravel developers are well-versed with all necessary updates and trends in technologies. Together we ensure top-notch Laravel web application development using this incredible framework with all its benefits like easily extendable plugins, efficient testing methods, MVC controlling & clear coding to build a feature rich web application.';
    $slide4alt = 'Skilled Laravel Developers';
    $slide4img = 'assets/img/technologies/mobile/hire-flutter-developer.svg';
    ?>
    @include('technology.mobile.common.slider')
    {{-- Slider-Section End --}}

    {{-- Offer-Section Start --}}
    <?php
    $title = 'Top Laravel Application Development Services';
    $subtitle = 'WHAT WE DO';

    $slide1title = 'Custom Laravel Development';
    $slide1desc = 'Creating high impact, user centered applications that are fully customizable as per your business requirements.';

    $slide2title = 'Mobile App Development';
    $slide2desc = 'Develop a fully functional yet useful application using the Laravel framework that supports significant backend infrastructure.';

    $slide3title = 'RESTful App development';
    $slide3desc = 'Migrate your existing website to Zend Framework or upgrade an older version to Zend Framework-2 without compromising on data & security.';

    $slide4title = 'CMS Development';
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
