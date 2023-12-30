@extends('master')
@section('mobile-contain')
    <link rel="stylesheet" href="assets/css/flutter.css">
    {{-- <link rel="stylesheet" href="assets/css/flutter2.css"> --}}

    {{-- Title-Section Start --}}

    <?php
    $title = 'CakePHP Development for Dynamic Web Apps';
    $desc = 'As a Leading CakePHP App Development Company, IndiaNIC helps you benefit from all of CakePHP web application development services and utilize all the features of this structured framework for your feature-rich business site. With clear coding.';
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
    $subtitle = 'Leading CakePHP Web Application Development Company';
    $slide1title = 'Skilful CakePHP Expertise';
    $slide1desc = 'We help you get secure CakePHP development which is compatible with PHP 4 and supports Ajax, HTML & Javascript. We also follow all MVC conventions of this open source framework that allows flexible caching and data validation for your business advantage. Our experienced CakePHP developers incorporate all standard tools and plugins to get you a highly customisable web application.';
    $slide1alt = 'Skilful CakePHP Expertise';
    $slide1img = 'assets/img/technologies/mobile/flutter-app-development-expertise.svg';

    $slide2title = 'Quality Delivered in Time';
    $slide2desc = 'We put stringent quality checks at every level of our CakePHP web development process. Specially during development, we deploy a dedicated QA team on each project that ensures bug-free, quality CakePHP development. We also integrate accessible source codes to address future requirements of your application for offering you quality solutions in viable time.';
    $slide2alt = 'Quality Delivered in Time';
    $slide2img = 'assets/img/technologies/mobile/uncompromised-quality-check.svg';

    $slide3title = 'Practical CakePHP solutions';
    $slide3desc = 'We help you scale your idea in a way that you can achieve your goals one milestone at a time. Instead of big investments into a directionless plan, our budget focused strategy for any customized CakePHP application whether you’re a startup, a business or an enterprise takes you one step at a time. Rest assured your can get the best industry expertise in Cake PHP development.';
    $slide3alt = 'Practical CakePHP solutions';
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
    $slide1desc = 'Advanced plugins, modules, and libraries to support complicated PHP functions for speedy development of your web application.';

    $slide2title = 'MVC development';
    $slide2desc = 'Equipped with handling the MVC architecture to provides easy management and flexibility during development.';

    $slide3title = 'API Development & Migration';
    $slide3desc = 'Effortless database driven apps with tightly integrated backend system along with migration services from one server to another.';

    $slide4title = 'Caching Features';
    $slide4desc = 'Utilize APC, XCache, and other database based pages and segment caching to provide unique applications.';

    $slide5title = 'Template Solutions';
    $slide5desc = 'Crafting resourceful templates with the insightful, attractive and versatile theme and designs to add valuable content easily.';

    $slide6title = 'Upgradation & Extension';
    $slide6desc = 'Codeigniter extension development, integration or upgradation services made available as per your business requirements.';
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
