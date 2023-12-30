@extends('master')
@section('mobile-contain')
    <link rel="stylesheet" href="assets/css/flutter.css">
    {{-- <link rel="stylesheet" href="assets/css/flutter2.css"> --}}

    {{-- Title-Section Start --}}

    <?php
    $title = 'Enhancing Business Websites leveraging Zend Framework';
    $desc = 'IndiaNIC’s high quality, customized Zend framework web solutions offer you secure and scalable web applications through customized and agile Zend web development in India & USA. We provide custom web solutions & develop complex business applications using the Zend PHP framework.';
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
    $subtitle = 'Zend Development Company in India';
    $slide1title = 'Skilful Zend Expertise';
    $slide1desc = 'As a leading Zend development company, we help you benefit from this open-source, object-oriented PHP framework to get you secure and modern web 2.0/3.0 apps with a flexible architecture. We also follow all MVC conventions that allow flexible caching and data validation supporting PHP templates and multiple database systems including MySQL, Microsoft SQL many more for rapid web development.';
    $slide1alt = 'Skilful Zend Expertise';
    $slide1img = 'assets/img/technologies/mobile/flutter-app-development-expertise.svg';

    $slide2title = 'Quality Delivered in Time';
    $slide2desc = 'We put stringent quality checks at every level of our Zend web development process. Especially during development, we deploy a dedicated QA team on each project that ensures bug-free, quality Zend web development. Our reliable and secure web services employ various APIs to offer the best possible business solution using PHP’s Zend framework.';
    $slide2alt = 'Quality Delivered in Time';
    $slide2img = 'assets/img/technologies/mobile/uncompromised-quality-check.svg';

    $slide3title = 'Practical Solutions';
    $slide3desc = 'We help you scale your idea in a way that you can achieve your goals one milestone at a time. Instead of big investments into a directionless plan, our budget focused strategy for any customized CakePHP application whether you’re a startup, a business or an enterprise takes you one step at a time. Rest assured your can get the best industry expertise in Cake PHP development.';
    $slide3alt = 'Practical Solutions';
    $slide3img = 'assets/img/technologies/mobile/flutter-app-solution.svg';

    $slide4title = 'Skilled CakePHP Developers';
    $slide4desc = 'Our CakePHP developers are well-versed with all necessary updates and trends in technologies. Together we ensure top-notch CakePHP web application development with all its  benefits like easily extendable plugins, efficient testing methods, MVC controlling, clear and simple coding  to build a feature rich web application and help you take your business forward.';
    $slide4alt = 'Skilled CakePHP Developers';
    $slide4img = 'assets/img/technologies/mobile/hire-flutter-developer.svg';
    ?>
    @include('technology.mobile.common.slider')
    {{-- Slider-Section End --}}

    {{-- Offer-Section Start --}}
    <?php
    $title = 'CakePHP Development Services';
    $subtitle = 'WHAT WE DO';

    $slide1title = 'CakePHP customization';
    $slide1desc = 'Contemporary website design and redesign that compliments your business, increases traffic and brand like-ability.';

    $slide2title = 'Shopping Cart Development';
    $slide2desc = 'Delivering cost effective CakePHP shopping cart solutions to turn visitors into buyers with our intelligent shopping cart designs.';

    $slide3title = 'CRM Development';
    $slide3desc = 'Expertise in developing SaaS applications on the CakePHP platform using the latest Cloud technologies.';

    $slide4title = 'CMS development';
    $slide4desc = 'Crafting a website rapidly with built-in validation features that are compatible with different platforms.';

    $slide5title = 'Template designs';
    $slide5desc = 'Crafting resourceful CakePHP template with the insightful, attractive and versatile CakePHP theme designs.';

    $slide6title = 'Upgradation & Extension';
    $slide6desc = 'CakePHP extension development, integration or upgradation services made available as per your business requirements.';
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
