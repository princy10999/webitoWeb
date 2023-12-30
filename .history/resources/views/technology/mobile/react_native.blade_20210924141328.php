@extends('master')
@section('mobile-contain')
    <link rel="stylesheet" href="assets/css/flutter.css">
    {{-- <link rel="stylesheet" href="assets/css/flutter2.css"> --}}

    {{-- Title-Section Start --}}

    <?php
    $title = 'React Native App Development Company';
    $desc = 'We help global businesses to broaden their user base on Android and iOS platforms, by developing affordable yet fast, powerful and high performing mobile apps with native look and feel. Being a leading React Native app development company in India & USA, IndiaNIC offers end-to-end React Native app development services with excellence in quality customer service. Hire React Native developers from IndiaNIC to have expert consultation on-the-go.';
    $bgimage = 'assets/img/technologies/mobile/landing-pattern3.jpg';
    $image = 'https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/03/tech-mobile-flutter-app.png';
    ?>
    @include('technology.mobile.common.first-section')

    {{-- Title-section End --}}

    {{-- Hire-Section Start --}}

    <?php
    $title = 'Hire React Native Developers';
    $subtitle = 'Create your own development team now';
    $desc = 'Everything starts with a ‘Hello’!! With ZERO upfront investment, we are committed to provide a solid foundation for your business idea. You’ll be amazed by working with our experts. <br> If not, the first 7 days are on us. <br>';

    ?>
    @include('technology.mobile.common.hire')

    {{-- Hire-Section End --}}

    {{-- Slider-Section Start --}}
    <?php
    $title = 'APPROACH';
    $subtitle = 'Top React Native App Development Company';
    $slide1title = 'React Native Expertise';
    $slide1desc = 'Hire React Native developers from IndiaNIC who are proficient in all trending React Native tools like React native Expo, VSCode, ESLint, Flow, Enzyme and Reactotron; frameworks like Snowflake, Ignite, Nativebase; and libraries such as React Navigation, MobX and Animatable. Our React Native app development services are efficient with excellent coding standards with focused effort on UI/UX.';
    $slide1alt = 'React Native Expertise';
    $slide1img = 'assets/img/technologies/mobile/flutter-app-development-expertise.svg';

    $slide2title = 'Uncompromised Quality Checks';
    $slide2desc = 'Being a top React Native app development company, to ensure quality deliverables, our Quality Analysts (QA) perform dedicated and stringent quality checks at every level of hybrid app development. Our QA team uses automated and manual testing techniques to check that the end product is fully functional, compatible, flawless, bug-free and user-friendly. ';
    $slide2alt = 'Uncompromised Quality Checks';
    $slide2img = 'assets/img/technologies/mobile/uncompromised-quality-check.svg';

    $slide3title = 'React Native App Solutions';
    $slide3desc = 'With the code reusability feature of React Native, we build robust and scalable mobile app solutions faster. With Facebook, Skype, Instagram, Uber, Airbnb adopting React Native to accelerate the process of building apps for both platforms, we develop hybrid app solutions for diverse industries like Ecommerce, Education and E-learning, Media, Banking, Travel and more.';
    $slide3alt = 'React Native App Solutions';
    $slide3img = 'assets/img/technologies/mobile/flutter-app-solution.svg';

    $slide4title = 'Hire React Native Developers';
    $slide4desc = 'Our client-oriented approach helps us to know diverse business needs over the years. Hire dedicated React Native developers from IndiaNIC using our flexible engagement models and gain control over your mobile app project. Gain a competitive advantage instantly via our React Native development services, from precise consultation to quality react native app development, deployment and beyond.';
    $slide4alt = 'Hire React Native Developers';
    $slide4img = 'assets/img/technologies/mobile/hire-flutter-developer.svg';
    ?>
    @include('technology.mobile.common.slider')
    {{-- Slider-Section End --}}

    {{-- Offer-Section Start --}}
    <?php
    $title = 'Our React Native App Development Services';
    $subtitle = 'WHAT WE DO';

    $slide1title = 'Prototyping, Wireframes & Mockups';
    $slide1desc = 'We design wireframes and present options to you. The coding cycle begins once you select from the shortlisted wireframe designs.';

    $slide2title = 'Quality Coding & Debugging';
    $slide2desc = 'We follow agile development for high-quality coding cycle along with professional software testing for bug-free & fast release.';

    $slide3title = 'AI & ML Capabilities in iOS Apps';
    $slide3desc = 'We hold experience to add intelligence to Android apps with integration of AI & ML technologies using ML Kit mobile SDK.';

    $slide4title = 'Third-party API Integration';
    $slide4desc = 'We provide methods for integrating third-party APIs with Android applications allowing other programs to access the data easily.';

    $slide5title = 'Cloud Development & Integration';
    $slide5desc = 'We help businesses connect developed apps and existing systems via expert cloud development and integration.';

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
