@extends('master')
@section('mobile-contain')
    <link rel="stylesheet" href="assets/css/flutter.css">
    {{-- <link rel="stylesheet" href="assets/css/flutter2.css"> --}}

    {{-- Title-Section Start --}}

    <?php
    $title = 'iOS App Development for iPhone, iPad & Apple Watch';
    $desc = 'As a leading iOS Mobile Application Development Company in India & USA, IndiaNIC offers iOS app development services tailored-made to your business needs. We bring a range of iOS app solutions to various business verticals with our result-driven iOS apps for iPhones, iPads, and Apple watches.';
    $bgimage = 'assets/img/technologies/mobile/landing-pattern1.jpg';
    $image = 'https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/03/tech-mobile-flutter-app.png';
    ?>
    @include('technology.mobile.common.first-section')

    {{-- Title-section End --}}

    {{-- Hire-Section Start --}}

    <?php
    $title = 'Hire iOS App Developers';
    $subtitle = 'Create your own development team now';
    $desc = 'Everything starts with a ‘Hello’!! With ZERO upfront investment, we are committed to provide a solid foundation for your business idea. You’ll be amazed by working with our experts. <br> If not, the first 7 days are on us. <br>';

    ?>
    @include('technology.mobile.common.hire')

    {{-- Hire-Section End --}}

    {{-- Slider-Section Start --}}
    <?php
    $title = 'WHY WE ARE RENOWNED AS A';
    $subtitle = 'Top iOS App Development Company    ';
    $slide1title = 'Unparalleled iOS Expertise';
    $slide1desc = 'We have delivered iOS projects that have rendered great ROI for our clients. As every new iOS version is a grand combination of innovation and creativity, we build iOS apps that create a niche for themselves and our prowess in developing personalized apps for all Apple devices makes us one of the most prominent iOS app development companies globally.';
    $slide1alt = 'Unparalleled iOS Expertise';
    $slide1img = 'assets/img/technologies/mobile/flutter-app-development-expertise.svg';

    $slide2title = 'Quality Delivered in time';
    $slide2desc = 'We put stringent quality checks at every level of our iOS app development process. Specially during development, we deploy a dedicated QA team on each project that ensures bug-free, quality iOS app development supported by pre-release system check that keeps control over your dedicated timeline.';
    $slide2alt = 'Quality Delivered in time';
    $slide2img = 'assets/img/technologies/mobile/uncompromised-quality-check.svg';

    $slide3title = 'Bespoke iOS Solutions';
    $slide3desc = 'We help you scale your idea in a way that you can achieve your goals one milestone at a time. Instead of big investments into a directionless plan, our budget focused strategy for any idea whether you’re a startup, a business or an enterprise takes you one step at a time.';
    $slide3alt = 'Bespoke iOS Solutions';
    $slide3img = 'assets/img/technologies/mobile/flutter-app-solution.svg';

    $slide4title = 'Experienced iOS Developers for Hire';
    $slide4desc = 'Our team is well-versed with all necessary updates and trends in technologies. The experience and expertise of our iOS app developers can ensure top-notch iOS application development with various languages like Swift, Objective C, Xcode, HTML5, React and Javascript.';
    $slide4alt = 'Experienced iOS Developers for Hire';
    $slide4img = 'assets/img/technologies/mobile/hire-flutter-developer.svg';
    ?>
    @include('technology.mobile.common.slider')
    {{-- Slider-Section End --}}

    {{-- Offer-Section Start --}}
    <?php
    $title = 'Best iOS App Development Services';
    $subtitle = 'WHAT WE DO';

    $slide1title = 'Prototyping, Wireframes & Mockups';
    $slide1desc = 'We design wireframes and present options to you. The coding cycle begins once you select from the shortlisted wireframe designs.';

    $slide2title = 'Quality Coding & Debugging';
    $slide2desc = 'We follow agile development for high-quality coding cycle along with professional software testing for bug-free & fast release.';

    $slide3title = 'AI & ML Capabilities in iOS Apps';
    $slide3desc = 'We hold experience to add intelligence to your iOS apps with integration of AI & ML technologies using Core ML framework.';

    $slide4title = 'Third-party API Integration';
    $slide4desc = 'We provide methods for integrating third-party APIs with our iOS development allowing other programs to access the data easily.';

    $slide5title = 'Cloud Development & Integration';
    $slide5desc = 'Comprehensive check & record is performed regularly to ensure that coding is efficient and bug-free that meets client expectations.';

    $slide6title = 'App Maintenance & Support';
    $slide6desc = 'We provide contract system and support services to make Flutter apps up and running at all times with full responsiveness.';
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
    $slide1desc = 'Developing iOS and Android apps for smartphones and tablets
                                                                                                                                                                                                                                                                                                with great attention
                                                                                                                                                                                                                                                                                                to design.';
    $slide2img = 'assets/img/technologies/mobile/custom-web-development.svg';
    $slide2alt = 'Custom Web Development';
    $slide2title = 'Custom Web Development';
    $slide2desc = 'Developing responsive websites with complete content control
                                                                                                                                                                                                                                                                                                    and scalability.';
    $slide3img = 'assets/img/technologies/mobile/mobile-game-development.svg';
    $slide3alt = 'Mobile Games Development';
    $slide3title = 'Mobile Games Development';
    $slide3desc = 'Developing engaging 2D and 3D games on iOS and Android
                                                                                                                                                                                                                                                                                                    platforms that generate
                                                                                                                                                                                                                                                                                                    revenue.';
    $slide4img = 'assets/img/technologies/mobile/digital-marketing-service.svg';
    $slide4alt = 'Digital Marketing Services';
    $slide4title = 'Digital Marketing Services';
    $slide4desc = 'Entire online marketing stack with focus on content,
                                                                                                                                                                                                                                                                                                    creative, social media
                                                                                                                                                                                                                                                                                                    and
                                                                                                                                                                                                                                                                                                    digital.';
    $slide5img = 'assets/img/technologies/mobile/ui-design-creative-services.svg';
    $slide5alt = 'UI Design / Creative Services';
    $slide5title = 'UI Design / Creative Services';
    $slide5desc = 'Designing stunning user interfaces and designs that gives
                                                                                                                                                                                                                                                                                                    unique identity and
                                                                                                                                                                                                                                                                                                    experience.';
    $slide6img = 'assets/img/technologies/mobile/cloud-infrastructure-management.svg';
    $slide6alt = 'Cloud Infrastructure Management';
    $slide6title = 'Cloud Infrastructure Management';
    $slide6desc = 'AWS certified cloud architects who can set up and manage
                                                                                                                                                                                                                                                                                                        entire cloud
                                                                                                                                                                                                                                                                                                        infrastructure.';
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
