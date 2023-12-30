<section _ngcontent-c3="" class="we-work-sec pad-t-b" id="capabilities">
    <div _ngcontent-c3="" class="container">
        <div _ngcontent-c3="" class="title-block">
            <p _ngcontent-c3="" class="sub-title"><?php echo $title; ?></p>
            <h2 _ngcontent-c3=""><?php echo $subtitle; ?></h2>
        </div>
    </div>

    <div class="slideshow-container">

        <div class="mySlides fade">
            <div class="numbertext">1 / 4</div>
            <div _ngcontent-c3="" class="row">
                <div _ngcontent-c3="" class="col-md-6 col-sm-12 flex-sec">
                    <div _ngcontent-c3="" class="img-box">
                        <picture _ngcontent-c3="">
                            <source _ngcontent-c3="" type="image/webp"
                                srcset="assets/img/technologies/mobile/flutter-app-development-expertise.png">
                            <source _ngcontent-c3=""
                                srcset="assets/img/technologies/mobile/flutter-app-development-expertise.png"
                                type="image/svg">
                            <img _ngcontent-c3="" srcset="" alt="Flutter App Development Expertise">
                        </picture>
                    </div>
                </div>
                <div _ngcontent-c3="" class="col-md-6 col-sm-12 flex-sec">
                    <div _ngcontent-c3="" class="work-info">
                        <h3 _ngcontent-c3=""><?php echo $slide1title; ?></h3>
                        <p _ngcontent-c3=""> <?php echo $slide1desc; ?></p>
                    </div>
                </div>
            </div>
        </div>

        <div class="mySlides fade">
            <div class="numbertext">2 / 4</div>
            <div _ngcontent-c3="" class="row">
                <div _ngcontent-c3="" class="col-md-6 col-sm-12 flex-sec">
                    <div _ngcontent-c3="" class="img-box">
                        <picture _ngcontent-c3="">
                            <source _ngcontent-c3="" type="image/webp"
                                srcset="assets/img/technologies/mobile/uncompromised-quality-check.png">
                            <source _ngcontent-c3=""
                                srcset="assets/img/technologies/mobile/uncompromised-quality-check.png"
                                type="image/svg"><img _ngcontent-c3=""
                                srcset="assets/img/technologies/mobile/uncompromised-quality-check.png"
                                alt="Uncompromised Quality Checks">
                        </picture>
                    </div>
                </div>
                <div _ngcontent-c3="" class="col-md-6 col-sm-12 flex-sec">
                    <div _ngcontent-c3="" class="work-info">
                        <h3 _ngcontent-c3="">Uncompromised Quality Checks</h3>
                        <p _ngcontent-c3="">Being a premium Flutter app development company,
                            to ensure quality deliverables,
                            our Quality Analysts (QA) perform dedicated and stringent quality checks
                            at every level of hybrid app development. Our QA team uses automated and
                            manual testing techniques to ensure flawless and functional end product.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="mySlides fade">
            <div class="numbertext">3 / 4</div>
            <div _ngcontent-c3="" class="row">
                <div _ngcontent-c3="" class="col-md-6 col-sm-12 flex-sec">
                    <div _ngcontent-c3="" class="img-box">
                        <picture _ngcontent-c3="">
                            <source _ngcontent-c3="" type="image/webp"
                                srcset="assets/img/technologies/mobile/flutter-app-solution.png">
                            <source _ngcontent-c3="" srcset="assets/img/technologies/mobile/flutter-app-solution.png"
                                type="image/svg"><img _ngcontent-c3=""
                                srcset="assets/img/technologies/mobile/flutter-app-solution.png"
                                alt="Flutter App Solutions">
                        </picture>
                    </div>
                </div>
                <div _ngcontent-c3="" class="col-md-6 col-sm-12 flex-sec">
                    <div _ngcontent-c3="" class="work-info">
                        <h3 _ngcontent-c3="">Flutter App Solutions</h3>
                        <p _ngcontent-c3="">With the Flutter framework,
                            it is easier for our Android/ iOS developers to bring their own
                            creativity using APIs for 2D and other animations. Leveraging Flutter
                            SDK,
                            We develop hybrid app solutions for diverse industries like Ecommerce,
                            Education and E-learning,
                            Media,
                            Banking,
                            Travel and more. </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="mySlides fade">
            <div class="numbertext">4 / 4</div>
            <div _ngcontent-c3="" class="row">
                <div _ngcontent-c3="" class="col-md-6 col-sm-12 flex-sec">
                    <div _ngcontent-c3="" class="img-box">
                        <picture _ngcontent-c3="">
                            <source _ngcontent-c3="" type="image/webp"
                                srcset="assets/img/technologies/mobile/hire-flutter-developer.png">
                            <source _ngcontent-c3="" srcset="assets/img/technologies/mobile/hire-flutter-developer.png"
                                type="image/svg"><img _ngcontent-c3=""
                                srcset="assets/img/technologies/mobile/hire-flutter-developer.png"
                                alt="Hire Flutter Developers">
                        </picture>
                    </div>
                </div>
                <div _ngcontent-c3="" class="col-md-6 col-sm-12 flex-sec">
                    <div _ngcontent-c3="" class="work-info">
                        <h3 _ngcontent-c3="">Hire Flutter Developers</h3>
                        <p _ngcontent-c3="">Our client-oriented approach helps us to know diverse
                            business needs over the years. Hire dedicated Flutter developers from
                            Webito Infotech using our flexible engagement models and gain control
                            over your cross-platform mobile app development project. Gain a
                            competitive advantage instantly via our Flutter app development
                            services,
                            from precise consultation to quality development,
                            deployment and beyond. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br>
    <div style="text-align:center">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
    </div>
</section>

<script>
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        setTimeout(showSlides, 2500); // Change image every 2 seconds
    }
</script>
