@extends('master')
@section('mobile-contain')
    <!-- Meta Tag  -->
    <?php
    $seotitle = 'Shopify Development Company | eCommerce web development services';
    $metacontent = 'Webito Infotech is a leading Shopify eCommerce development company that offers custom Shopify development services for your online business. Hire Shopify Experts!';
    $metaname = 'Shopify Development Company | eCommerce web development services';
    $metaproperty = 'Webito Infotech - Shopify Development Company ';
    ?>
    <link rel="stylesheet" href="assets/css/flutter.css">

    {{-- Title-Section Start --}}

    <?php
    $title = 'Shopify eCommerce Website Development';
    $desc = 'Webito Infotech is a leading Shopify eCommerce website development company that offers quality Shopify development services for your online business. As a Shopify Plus partner, facilitate your eCommerce retail business to leverage all the benefits of Shopify platform at the most competitive rates.';
    $bgimage = 'assets/img/technologies/mobile/landing-pattern1.jpg';
    $image = 'assets/img/technologies/mobile/Banwery.webp';
    ?>
    @include('technology.mobile.common.first-section')

    {{-- Title-section End --}}

    {{-- Hire-Section Start --}}

    <?php
    $title = 'Hire Shopify Experts';
    $subtitle = 'Create your own development team now';
    $desc = 'Everything starts with a ‘Hello’!! With ZERO upfront investment, we are committed to provide a solid foundation for your business idea. You’ll be amazed by working with our experts. <br> If not, the first 7 days are on us.';
    ?>
    @include('technology.mobile.common.hire')

    {{-- Hire-Section End --}}

    {{-- Slider-Section Start --}}
    <?php
    $title = 'APPROACH';
    $subtitle = 'Top Shopify Website Development Company';
    $slide1title = 'Shopify Web Development Expertise';
    $slide1desc = 'Webito Infotech is a leading Shopify eCommerce web development company supports you at every stage of developing an online store while offering services like customized website design and Shopify theme development. As a certified Shopify Plus Partner, we also assist our clients in switching their existing online store to Shopify through quality migration services.';
    $slide1alt = 'Magento Web Development Expertise';
    $slide1img = 'assets/img/technologies/mobile/flutter-app-development-expertise.svg';

    $slide2title = 'Quality Delivered in Time';
    $slide2desc = 'Being a leading Shopify website development company, we put stringent quality checks at every level of our eCommerce web store development services. Hire Shopify experts from Webito Infotech who make sure to utilize all of Shopify leading features such as professionals themes, advanced functionality and complete CMS to deliver a highly secure and user-friendly eCommerce website.';
    $slide2alt = 'Quality Delivered in Time';
    $slide2img = 'assets/img/technologies/mobile/uncompromised-quality-check.svg';

    $slide3title = 'Shopify eCommerce Solutions';
    $slide3desc = 'With our top Shopify website development services, you can scale and customize your online eCommerce business in a way that you can achieve instant ROI. We bring a pleasant shopping experience for your clients by integrating the latest and trending eCommerce plugins and features to make your eCommerce website a fully-functional online store. We provide strategic consultation and Shopify website development for businesses of all the sizes.';
    $slide3alt = 'Shopify eCommerce Solutions';
    $slide3img = 'assets/img/technologies/mobile/flutter-app-solution.svg';

    $slide4title = 'Hire Shopify Experts';
    $slide4desc = 'You can hire Shopify developers from Webito Infotech through flexible engagement models deployed for working exclusively on your online eCommerce web store development. Our holistic approach and agile development method will make you aware of the latest online marketing trends and Shopify tools while creating bespoke eCommerce solutions for your business.';
    $slide4alt = 'Hire Shopify Experts';
    $slide4img = 'assets/img/technologies/mobile/hire-flutter-developer.svg';
    ?>
    @include('technology.mobile.common.slider')
    {{-- Slider-Section End --}}

    {{-- Offer-Section Start --}}
    <?php
    $title = 'Our Shopify eCommerce App Development Services';
    $subtitle = 'WHAT WE DO';

    $slide1title = 'Shopify App Development';
    $slide1desc = 'Fully functional and custom mobile app development for your Shopify store to reach a wider customer base.';

    $slide2title = 'Shopify Plus Expertise';
    $slide2desc = 'Development of large-volume eCommerce businesses using our Shopify Plus expertise with advanced features & functionality.';

    $slide3title = 'Theme Design & Integration';
    $slide3desc = 'Attractive eCommerce storefront design and redesign services with various themes & templates to choose for meeting custom business needs.';

    $slide4title = 'Magento API/Backend';
    $slide4desc = 'Effortless database-driven eCommerce with tightly integrated backend through APIs for easy Magento online store management.';

    $slide5title = 'Magento Plugin & Module Extension';
    $slide5desc = 'Extend the functionality of your eCommerce store as per your business requirements with custom Magento plugins & modules.';

    $slide6title = 'Magento Store Migration';
    $slide6desc = 'Switch your existing eCommerce store without compromising your data and security using our top Magento web development services.';
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
