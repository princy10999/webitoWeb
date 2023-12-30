@extends('master')
@section('mobile-contain')
    <link rel="stylesheet" href="assets/css/flutter.css">
    {{-- <link rel="stylesheet" href="assets/css/flutter2.css"> --}}

    {{-- Title-Section Start --}}

    <?php
    $title = 'Ionic Mobile App Development';
    $desc = 'We are a leading Ionic app development company in India & USA, using this powerful open-source SDK to build hybrid apps with interesting UI interactions, slick animations, and appealing design. Our aim is to provide the best Ionic app development services leveraging technologies like AngularJS, HTML5/ CSS3 to provide native app likelihood. Hire dedicated Ionic developers from IndiaNIC who craft top quality mobile apps and PWAs.';
    $bgimage = 'assets/img/technologies/mobile/landing-pattern1.jpg';
    $image = 'https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/03/tech-mobile-flutter-app.png';
    ?>
    @include('technology.mobile.common.first-section')

    {{-- Title-section End --}}

    {{-- Hire-Section Start --}}

    <?php
    $title = 'Hire Ionic App Developers';
    $subtitle = 'Create your own development team now';
    $desc = 'Everything starts with a ‘Hello’!! With ZERO upfront investment, we are committed to provide a solid foundation for your business idea. You’ll be amazed by working with our experts. <br> If not, the first 7 days are on us. <br>';

    ?>
    @include('technology.mobile.common.hire')

    {{-- Hire-Section End --}}

    {{-- Slider-Section Start --}}
    <?php
    $title = 'WHY WE ARE RENOWNED AS A';
    $subtitle = 'Top Ionic App Development Company';
    $slide1title = 'Experience in Quality Coding';
    $slide1desc = 'Our industry-leading Ionic mobile app development services combine with AngularJS, HTML5, and CSS unleash the complete potential for your mobile app development idea. We are the early adopters of the Ionic framework and have experience in working with diverse tools and technologies like Cordova, Less, Sass, Grunt, Gulp, Bower, etc. to build next-gen Ionic mobile applications with native look and feel at affordable prices.';
    $slide1alt = 'Experience in Quality Coding';
    $slide1img = 'assets/img/technologies/mobile/flutter-app-development-expertise.svg';

    $slide2title = 'Uncompromised Quality Checks';
    $slide2desc = 'Being a premium Ionic app development company, to ensure quality deliverables, our Quality Analysts (QA) perform dedicated and stringent quality checks at every level of hybrid app development or cross-platform mobile app development services. Our QA team uses automated and manual testing techniques to ensure flawless and fully functional mobile app delivery within the promised timeline.   ';
    $slide2alt = 'Uncompromised Quality Checks';
    $slide2img = 'assets/img/technologies/mobile/uncompromised-quality-check.svg';

    $slide3title = 'Divesified App Solutions';
    $slide3desc = 'The ionic framework makes it easy to access mobile SDK, plugins, themes UI library, Google APIs, Camera and so on. Hire Ionic app developers from IndiaNIC who develop hybrid app solutions for diverse industries like Ecommerce, Education and E-learning, Media, Banking, Travel and more. A competent pricing model can be set up that suits the budget of startups, large enterprises, and SMEs looking for a business-driven and custom Ionic mobile application to be developed.';
    $slide3alt = 'Divesified App Solutions';
    $slide3img = 'assets/img/technologies/mobile/flutter-app-solution.svg';

    $slide4title = 'Best Ionic Dev Team to Hire';
    $slide4desc = 'Our client-oriented approach helps us to know diverse business needs over the years. Hire dedicated Ionic developers from IndiaNIC, a top Ionic mobile app development company, using our flexible engagement models for your hybrid app development project. Avail end-to-end Ionic app development services, from precise consultation to quality development, deployment and beyond.';
    $slide4alt = 'Best Ionic Dev Team to Hire';
    $slide4img = 'assets/img/technologies/mobile/hire-flutter-developer.svg';
    ?>
    @include('technology.mobile.common.slider')
    {{-- Slider-Section End --}}

    {{-- Offer-Section Start --}}
    <?php
    $title = 'Our Ionic Mobile App Development Services';
    $subtitle = 'WHAT WE DO';

    $slide1title = 'Prototyping, Wireframes & Mockups';
    $slide1desc = 'We design wireframes and present options to you. The coding cycle begins once you select from the shortlisted wireframe designs.';

    $slide2title = 'Quality Coding & Debugging';
    $slide2desc = 'We follow agile development for high-quality coding cycle along with professional app testing for bug-free & faster release.';

    $slide3title = 'AI & ML Integration in Ionic Apps';
    $slide3desc = 'We infuse power of AI and ML to Ionic app development to add intelligence and simplify human to machine interactions.';

    $slide4title = 'Third-party API Integration';
    $slide4desc = 'We provide methods for integrating third-party APIs with Ionic apps to make them functional as per the business requirements.';

    $slide5title = 'Ionic Application Migration';
    $slide5desc = 'Hire Ionic app developers from IndiaNIC for App migration services to transform native apps to hybrid apps & vice versa.';

    $slide6title = 'App Upgrade & Maintenance';
    $slide6desc = 'We offer contract to upgrade your apps along with maintenance to ensure full compatibility with the latest OS version & features.';
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
