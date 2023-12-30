@extends('master')
@section('mobile-contain')
    <link rel="stylesheet" href="assets/css/flutter.css">
    {{-- <link rel="stylesheet" href="assets/css/flutter2.css"> --}}

    {{-- Title-Section Start --}}

    <?php
    $title = 'PHP Website Development Company';
    $desc = 'IndiaNIC is a leading PHP Web Development Company in India & USA, providing wide-ranging PHP Web & Application Development Services. Benefit from our PHP development services and utilise the features of this structured open source scripting language for your business site.';
    $bgimage = 'assets/img/technologies/mobile/landing-pattern1.jpg';
    $image = 'assets/img/technologies/mobile/1.png';
    ?>
    @include('technology.mobile.common.first-section')

    {{-- Title-section End --}}

    {{-- Hire-Section Start --}}

    <?php
    $title = 'Hire PHP Developers';
    $subtitle = 'Create your own development team now';
    $desc = 'Everything starts with a ‘Hello’!! With ZERO upfront investment, we are committed to provide a solid foundation for your business idea. You’ll be amazed by working with our experts. <br> If not, the first 7 days are on us.';
    ?>
    @include('technology.mobile.common.hire')

    {{-- Hire-Section End --}}

    {{-- Slider-Section Start --}}
    <?php
    $title = 'APPROACH';
    $subtitle = 'Top PHP Web Application Development Company';
    $slide1title = 'PHP Technology Expertise';
    $slide1desc = 'Webito Infotech, a leading Node.js development company, is a one-stop solution for end-to-end Node.js development services and also to hire dedicated Node.js developers who possess top-notch expertise in languages like node.js, JS; frameworks and libraries like Express.js, Passport, Babel; front-end technologies like HTML5, CSS3, ReactJS; Server technologies like AWS, Jenkins, etc. ';
    $slide1alt = 'PHP Technology Expertise';
    $slide1img = 'assets/img/technologies/mobile/flutter-app-development-expertise.svg';

    $slide2title = 'Uncompromised Quality Checks';
    $slide2desc = 'To ensure quality deliverables, our QA ( Quality Analysts) perform dedicated and stringent quality checks at every level of development using automated and manual testing techniques. This is done to ensure that the end product using Node.js technology is fully functional, compatible, flawless, bug-free and user friendly.';
    $slide2alt = 'Uncompromised Quality Checks';
    $slide2img = 'assets/img/technologies/mobile/uncompromised-quality-check.svg';

    $slide3title = ' Practical Node.js Solutions';
    $slide3desc = 'Node.js is a powerful technology that is suitable for front-end and back-end which allows building fast and scalable web and mobile apps. We offer full-fledged Node.js development services to build engaging and real-time solutions such as e-commerce portal, custom CRM software, Social networking apps, etc.';
    $slide3alt = ' Practical Node.js Solutions';
    $slide3img = 'assets/img/technologies/mobile/flutter-app-solution.svg';

    $slide4title = 'Hire Node.js Developers';
    $slide4desc = 'Hire skilled Node.js developers on a full time or part-time basis with complete transparency and control over the team. Our Node.js developers offer solutions based on AWS Node.js microservices, custom Node.js programming, handling of data analysis tool, back-end data management system, AJAX based web development and more.';
    $slide4alt = 'Hire Node.js Developers';
    $slide4img = 'assets/img/technologies/mobile/hire-flutter-developer.svg';
    ?>
    @include('technology.mobile.common.slider')
    {{-- Slider-Section End --}}

    {{-- Offer-Section Start --}}
    <?php
    $title = 'Our Node.js Development Services';
    $subtitle = 'WHAT WE DO';

    $slide1title = 'Node.js Web Application Development';
    $slide1desc = 'Hire expert Node.js programmers who will custom develop a feature-rich and dynamic website that will meet client’s business needs.';

    $slide2title = 'Node.js Mobile App Services';
    $slide2desc = 'Our Node.js developers use this powerful technology to build real-time cross-platform, responsive & native mobile apps with fast back-end.';

    $slide3title = 'Node.js Customization';
    $slide3desc = 'Our industry rich experience allows us to suggest and implement customizations to make the application more functional and engaging.';

    $slide4title = 'Back-end Dashboard Development';
    $slide4desc = 'We develop custom and high performing CMS enabled back-end dashboard system to meet the need of keeping the web app updated.';

    $slide5title = 'Node.js UI/UX Development';
    $slide5desc = 'We are a leading Node.js development services providers which are also renowned for real-time, appealing & intuitive UI/UX designs.';

    $slide6title = 'Node.js Plugin Development';
    $slide6desc = 'Our Node.js master coders provide custom plugin development services to enhance website performance and capabilities.';
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
