@extends('master')
@section('designi_dev-contain')
    <link href="assets/css/design.css" rel="stylesheet">

    <?php
    $title = 'Designing for all taste palettes from Concept to Final Product';
    $desc = 'Simple design is a complex process. We simplify it by focusing on Challenges and Solutions followed by
        building functional user interfaces that keep the audience at the center.';
    ?>
    @include('services.common.title')

    <section id="discovery-workshop">
        <div class="discovery-workshop-section">
            <div class="container">
                <div class="discovery-content">
                    <div class="service-title-box">
                        <h5 class="h-marginbottom12">The Difference</h5>
                        <h2>We say the discovery is at the center of ingenuity. We learned a little dash of crazy mixed
                            with great discipline, creates masterpieces - we call it "Discovery Workshop".</h2>
                    </div>
                </div>
            </div>
            <div class="discovery-workshop-wireframes">
                <img src="/assets/img/services/design/img-wireframes.svg" alt="">
            </div>
        </div>
    </section>

    <?php
    $title = 'Why Your Idea Needs a "Workshop"?';
    $desc = '';
    $what1 = 'Think';
    $what2 = 'Organize';
    $what3 = 'Prioritise';
    $what4 = 'Goals';
    $what5 = 'Quantify';
    $what6 = 'Roadmap';
    $app1 = 'Not all requirements are development ready';
    $app2 = 'Ideas evolve and they need to be constrained in a boundary';
    $app3 = 'Organize your thoughts for maximum impact';
    $app4 = 'A quality product must have clearly defined objectives';
    $app5 = 'Deriving scope, for accurate timeline and budget';
    $app6 = 'Choosing the right technology approach to development';
    ?>

    @include('services.common.whyworkshop')

    <section class="discovery-benefits">
        <div class="container">
            <div class="service-title-box">
                <h5 class="h-marginbottom12"">Benefits</h5>
                                                        <h2>Benefits Of Discovery / Design First Approach</h2>
                                                        <h3>Discovery Workshop is designed to feed the engineering team, albeit not the other way round that
                                                            traditionally many IT companies do.</h3>
                                                    </div>
                                                    <div class="  benefits-services">
                    <div class="row">
                        <div class="col-12 col-sm-6 col-md-6 col-lg-3">
                            <div class="benefits-box">
                                <img src="/assets/img/services/design/ic-benefits-strategy.svg" alt="">
                                <h4>Clear Strategy</h4>
                                <p>We work with you to cut the clutter and stay focused on defining critical system features
                                    to build a product that’s launch-ready.</p>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-6 col-lg-3">
                            <div class="benefits-box">
                                <img src="/assets/img/services/design/ic-benefits-speed.svg" alt="">
                                <h4>Speed</h4>
                                <p>Making the most of our engagement with an agile mindset to produce visible results -
                                    compared to the traditional way.</p>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-6 col-lg-3">
                            <div class="benefits-box">
                                <img src="/assets/img/services/design/ic-benefits-lower-risk.svg" alt="">
                                <h4>Lower Risk</h4>
                                <p>Before investing large sum upfront into the entire project and committing in blind,
                                    define something that’s sustainable and achievable.</p>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-6 col-lg-3">
                            <div class="benefits-box">
                                <img src="/assets/img/services/design/ic-benefits-cost-effective.svg" alt="">
                                <h4>Cost Effective</h4>
                                <p>We work with you to define minimum launchable product so that you can prioritize
                                    investments for better ROI, allowing you to focus on growth.</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </section>

    <section class="discovery-design-development">
        <div class="container">
            <div class="discovery-design-title">
                <h2>From Discovery Sprints to Agile Development </h2>
                <img src="/assets/img/services/design/download.png" class="dark-image-background" alt="">
            </div>
        </div>

        <div class="animation"></div>

        <div class="container">
            <div class="work-more-sec">
                <h3>
                    We deliver quality products that stay within the predefined budget by identifying and adapting to
                    changes much earlier in the entire process, avoiding an irreversible stage where the cost of changes
                    is higher.
                </h3>
            </div>
        </div>
    </section>

    <section class="work-process-section">
        <div class="container">
            <div class="service-title-box">
                <h5 class="h-marginbottom12">The Process</h5>
                <h2>How It Works?</h2>
                <h3>For each workshop, we assign a dedicated analyst, a UI/UX designer and a technical team who work
                    with
                    you, to do full justice to your ideas with the most relevant and technically advanced solutions.
                </h3>
            </div>
            <!--How it works Image -->
            <div class="work-process-img">
                <img src="/assets/img/services/design/ic-design-how-it-work.png" alt="">
            </div>
            <!--How it works Image End-->
            <!--Target Audience row1 -->
            <div class="work-process-services">
                <div class="work-process-block left-side">
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-6">
                            <div class="work-img-left">
                                <img class=" ng-lazyloaded" src="assets/img/services/design/img-process-discover-device.jpg"
                                    alt="">
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 order-2 order-md-1">
                            <div class="work-process-info-right">
                                <div class="target-audience-box">
                                    <h5 class="h-marginbottom12">Target Audience, Market and the Problem</h5>
                                    <h2>Discover & Devise</h2>
                                    <span class="separator-line"></span>
                                </div>
                                <div class="work-process-point">
                                    <h3>Market Analysis</h3>
                                    <p>Review what's already been done by similar solutions in the market and elevate
                                        the experience</p>
                                </div>
                                <div class="work-process-point">
                                    <h3>Requirements</h3>
                                    <p>Identify core needs and vision of the solution with elaborated brainstorming
                                        sessions</p>
                                </div>
                                <div class="work-process-point">
                                    <h3>Conceptualisation</h3>
                                    <p>Identify core business problem to be solved keeping end-users at the center</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!--Target Audience row1 End-->
                <!--Work process arrow section -->

                <div class="work-process-arrow left-arrow">
                    <img src="/assets/img/services/design/img-work-process-arrow.svg" alt="">
                </div>

                <!--Work process arrow section End-->
                <!--Target Audience row1 End-->

                <div class="work-process-block left-side">
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-6 order-2 order-md-1">
                            <div class="work-process-info-left">
                                <div class="target-audience-box">
                                    <h5 class="h-marginbottom12">Blueprint of the Core</h5>
                                    <h2>Define & Refine</h2>
                                    <span class="separator-line"></span>
                                </div>
                                <div class="work-process-point">
                                    <h3>Mindmap</h3>
                                    <p>Designing information architecture with key modules and activities in a logical
                                        hierarchy</p>
                                </div>
                                <div class="work-process-point">
                                    <h3>User Journeys</h3>
                                    <p>Heuristic analysis of user behavior by working backward to design elements that
                                        users anticipate</p>
                                </div>
                                <div class="work-process-point">
                                    <h3>Wireframe</h3>
                                    <p>Conceptual block-based representation to uncover visual representation of key
                                        information elements</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 order-1 order-md-2">
                            <div class="work-img-right">
                                <img class=" ng-lazyloaded" src="/assets/img/services/design/img-process-define-refine.jpg"
                                    alt="">
                            </div>
                        </div>
                    </div>
                </div>

                <!--Work process arrow section -->

                <div class="work-process-arrow right-arrow">
                    <img src="/assets/img/services/design/img-work-process-arrow.svg" alt="">
                </div>

                <!--Work process arrow section End-->

                <div class="work-process-block left-side">
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-6">
                            <div class="work-img-left">
                                <img class=" ng-lazyloaded" src="assets/img/services/design/img-process-ui-ux.jpg" alt="">
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 order-2 order-md-1">
                            <div class="work-process-info-right">
                                <div class="target-audience-box">
                                    <h5 class="h-marginbottom12">Interface, Experience & Visuals</h5>
                                    <h2>UI / UX Design</h2>
                                    <span class="separator-line"></span>
                                </div>
                                <div class="work-process-point">
                                    <h3>Interface</h3>
                                    <p>Surgically crafting beautiful pixels to create a visually appealing interface of
                                        relevant screens</p>
                                </div>
                                <div class="work-process-point">
                                    <h3>Digital Experience</h3>
                                    <p>Creating a functional design by carefully orchestrating interface, information,
                                        and interaction</p>
                                </div>
                                <div class="work-process-point">
                                    <h3>Objective Design</h3>
                                    <p>Creating a design that not only looks stunning but also sticks to solving the
                                        core of the problem</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="design-work-block">
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-6 order-2 order-md-1">
                            <div class="design-work-info-left">
                                <h2>Design is not how it looks.</h2>
                                <h2 class="blue-color"> But how it works.</h2>
                                <span>- Steve Jobs</span>
                                <p>
                                <p>Complex systems are easy to create. It takes a surgical approach to craft functional
                                    designs that enable users to feel good while using the web/software or an app.</p>
                                <p>Creating simple and meaningful interfaces across screens requires careful
                                    orchestration of all the key ingredients.</p>
                                </p>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 order-1 order-md-2">
                            <div class="work-img-right">
                                <img class=" ng-lazyloaded" src="/assets/img/services/design/design-quote-artwork-img.svg"
                                    alt="">
                            </div>
                        </div>

                    </div>
                </div>

                <!--Work process arrow section -->

                <div class="work-process-arrow left-arrow">
                    <img src="/assets/img/services/design/img-work-process-arrow.svg" alt="">
                </div>

                <!--Work process arrow section End-->

                <!--Target Audience row1 End-->

                <div class="work-process-block left-side">
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-6 order-2 order-md-1">
                            <div class="work-process-info-left">
                                <div class="target-audience-box">
                                    <h5 class="h-marginbottom12">From Discovery to Development</h5>
                                    <h2>Handover</h2>
                                    <span class="separator-line"></span>
                                </div>
                                <div class="work-process-point">
                                    <h3>Continuing from Discovery to Development</h3>
                                    <p>The handover process - irrespective of who the technical team, they act as a
                                        catalyst to continue the same momentum and depth of the concept to be
                                        engineered. This is ensured by visual design to the greatest detail, functional
                                        flow and design guidelines that are ready to be shipped as a bundle.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 order-1 order-md-2">
                            <div class="work-img-right">
                                <img class=" ng-lazyloaded" src="/assets/img/services/design/img-process-handover.jpg"
                                    alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="design-testimonial">
            <div class="container">
                <h2>Clients' praise is Music to our ears</h2>
                <div class="jugaad-video" id="video-home-jugaad">
                    <img src="/assets/img/services/design/img-wireframes.svg" alt="">
                    <!--CENTER VIDEO TO ADD-->
                </div>
            </div>

        </div>
    </section>
    <!--Discovery  section 7 End-->

    <?php
    $title = 'Good to Know';
    $desc = 'Key Insights';
    $what1 = '';
    $what2 = '';
    $what3 = '';
    $what4 = '';
    $what5 = '';
    $what6 = '';
    $app1 = 'Each workshop can be personalized based on where you are with your requirements.';
    $app2 = 'It all starts with brainstorming and analysis phase led by Subject Matter Experts.';
    $app3 = 'Wireframes are followed and are based on the requirements gathered by analysts.';
    $app4 = 'UI Designs are always based on the wireframes derived and user journeys identified.';
    $app5 = 'For each stakeholder of the system, a separate UI flow with detailed screens shall be created.';
    $app6 = 'After UI designs - an interactive prototype containing designs shall be presented';
    ?>
    @include('services.common.whyworkshop')


    <!--Workshop  section 8 End-->

    <!--Benefits  section 4 -->
    <?php
    $title = 'Successful Designs through Discovery Workshop';
    $desc = 'View the Shiny Bits Of Our Work';
    $image1 = '/assets/img/services/design/recipe-app-thumbnail.webp';
    $image2 = '/assets/img/services/design/daily-deals_thumb_01.webp';
    $image3 = '/assets/img/services/design/gofer-thumb.webp';
    $image4 = '/assets/img/services/design/sntf-thumb-img-1.webp';
    $image5 = '/assets/img/services/design/sparker-thumbnail.webp';
    $image6 = '/assets/img/services/design/packgedelivery-thumb.webp';
    $what1 = 'Social Network , Food';
    $what2 = 'ECOMMERCE';
    $what3 = 'ECOMMERCE';
    $what4 = 'SERVICE';
    $what5 = 'ECOMMERCE';
    $what6 = 'AUTOMOBILE';
    $app1 = 'Recipe App';
    $app2 = 'Daily Deals';
    $app3 = 'Gofer';
    $app4 = 'SNTF';
    $app5 = 'Sparker';
    $app6 = 'Package Delivery';
    $b1Span1 = 'Android';
    $b1Span2 = 'iOS';
    $b1Span3 = 'NodeJs';
    $b2Span1 = 'Android';
    $b2Span2 = 'iOS';
    $b2Span3 = 'NodeJs';
    $b3Span1 = 'Android';
    $b3Span2 = 'iOS';
    $b3Span3 = 'NodeJs';
    $b4Span1 = 'laravel';
    $b5Span1 = 'Android';
    $b5Span2 = 'iOS';
    $b5Span3 = 'PHP';
    $b6Span1 = 'Android';
    $b6Span1 = 'iOS';
    $b6Span1 = 'NodeJs';
    ?>
    @include('services.common.ourwork')

    <!--Benefits  section 4 End-->



    <!-- #contact -->
    @include('layouts.contactline')

    <style>
        .work-process-info-right {
            padding-top: 60px;
        }

        .work-img-right {
            float: right;
            padding-top: 0;
        }

        .work-process-info-left {
            padding-top: 60px;
        }

        .work-img-left {
            float: left;
            padding-top: 0;
        }

    </style>

@endsection
