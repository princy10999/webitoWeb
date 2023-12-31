<link href="../../assets/css/footer.css" rel="stylesheet">
<footer id="footer" class="wow fadeInUp">
    <footer id="footer">
        <div class="footer-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 footer-info">
                        <h3>WEBITO</h3>
                        <p>Thank you for visiting our Website. If you have not visited our blogs then it's a humble
                            request to
                            visit it once, maybe it will be useful for you. You can also check the latest post in
                            our
                            blog section.</p>
                    </div>
                    <div class="col-lg-3 col-md-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><i class="ion-ios-arrow-right"></i> <a href="/">Home</a></li>
                            <li><i class="ion-ios-arrow-right"></i> <a href="/career">Career</a></li>
                            <li><i class="ion-ios-arrow-right"></i> <a href="/rules">Rules</a></li>
                            <li><i class="ion-ios-arrow-right"></i> <a href="/terms">Terms</a></li>
                            <li><i class="ion-ios-arrow-right"></i> <a href="/policy">Privacy policy</a></li>
                            <li><i class="ion-ios-arrow-right"></i> <a href="/blogs">Blogs</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 footer-contact">
                        <h4>Contact Me</h4>
                        <p>
                            303-305, Golden Square, Beside D-mart <br>
                            Mota Varachha, Surat 394101,<br>
                            Gujarat India. <br>
                            <strong>Phone:<a href="tel:8690586753"> +91 8690586753</a> / <br><a href="tel:9724259460" style="padding-left: 52px;">
                                    +91 9724259460</a><br></strong>
                            <strong style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis">Email:
                                <a href="mailto:{{env('SOCIAL_EMAIL')}}" target="_blank">{{env('SOCIAL_EMAIL')}}</a></strong> <br>
                        </p>
                        <div class="social-links">
                            <a href="https://www.instagram.com/webitoinfotech/" target="blank" class="instagram"><i class="fa fa-instagram"></i></a>
                            <a href="https://in.linkedin.com/company/webito-infotech" target="blank" class="linkedin"><i class="fa fa-linkedin"></i></a>
                            <a href="https://twitter.com/InfotechWebito" target="blank" class="twitter"><i class="fa fa-twitter"></i></a>
                            <a href="https://www.facebook.com/webitoinfotech" target="blank" class="facebook"><i class="fa fa-facebook"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 footer-newsletter">
                        <h4>My Newsletter</h4>
                        <p>By Subscribing, you can get updated news and our Blog. For any queries, you can contact
                            us through our email or just submit the contact form with your requirements. Our team
                            will contact you as soon as possible.</p>
                        <form action="subscribe.php" method="post" class="contactForm" style="padding: 0; z-index: 0;">
                            <input type="email" name="email"><input type="submit" value="Subscribe">
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="copyright">
                &copy; Copyright <strong><a href="https://webitoinfotech.com/" target="_blank" class="footer-copywritelink">WEBITO INFOTECH PRIVATE LIMITED</a></strong>. All
                Rights Reserved
            </div>
        </div>
    </footer>
</footer>



<div class="container checked">
    <button class="button-social-icons" id="button_icons">
        <div class="button-social-p">
        <i class="icon fa fa-bars social-icon-p"> </i>
        </div>
    

<div>
        <ul>
            <li>
                <a href="#data"> <i class="fa"><img src="{{ asset('assets/img/direct_links/hire.png') }}" class="directImg" style="padding: 5px;" /></i></a>
            </li>
            <li>
                <a href="#data2"><i class=" fa"><img src="{{ asset('assets/img/direct_links/portfolio.png') }}" class="directImg" /></i></a>
            </li>
            <li>
                <a href="#data3"><i class=" fa" onclick="redirectLinks('/about#our_events')"><img src="{{ asset('assets/img/direct_links/events.png') }}" class="directImg" style="padding: 8px;" /></i></a>
            </li>
            <li>
                <a href="#data4"><i class=" fa" onclick="redirectLinks('/team')"><img src="{{ asset('assets/img/direct_links/team.png') }}" class="directImg" style="padding: 10px;" />
                    </i></a>
            </li>
            <li>
                <a href="#data5"><i class=" fa" onclick="redirectLinks('/career')"><img src="{{ asset('assets/img/direct_links/career.png') }}" class="directImg" style="padding: 5px;" />
                    </i></a>
            </li>
        </ul>
        </div>
        </button>
</div>


<div id="preloader"></div>

<script>
    // function redirectLinks(url) {
    //     window.location.href = url;
    // }
    $(document).ready(function() {
        var open = false;

        $('.circle-bg').on('click', function() {
            if (open === false) {
                $(this).animate({
                    height: '+=10px',
                    width: '+=10px'
                }, 300);
                $('.outer-icons').animate({
                    opacity: 1
                }, 1000);
                $('.icon').fadeOut();
                $(this).html("<i class = 'icon fa fa-times' style='display: none'> </i>");
                $('.icon').fadeIn();

                open = true;
            } else {
                $(this).animate({
                    height: '-=10px',
                    width: '-=10px'
                }, 200);
                $('.outer-icons').animate({
                    opacity: 0
                }, 300);
                $('.icon').fadeOut();
                $(this).html("<i class = 'icon fa fa-bars' style='display: none'> </i>");
                $('.icon').fadeIn();
                open = false;
            }
        });
    });
</script>
<!-- JavaScript Libraries -->
{{-- <script src="/assets/lib/jquery/jquery.min.js"></script> --}}
{{-- <script src="/assets/lib/jquery/jquery-migrate.min.js"></script> --}}
<script src="/assets/lib/bootstrap/js/bootstrap.bundle.min.js"></script>
{{-- <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script> --}}
<script src="/assets/lib/easing/easing.min.js"></script>
<script src="/assets/lib/mobile-nav/mobile-nav.js"></script>
<script src="/assets/lib/wow/wow.min.js"></script>
<script src="/assets/lib/waypoints/waypoints.min.js"></script>
<script src="/assets/lib/counterup/counterup.min.js"></script>
<script src="/assets/lib/owlcarousel/owl.carousel.min.js"></script>
<script src="/assets/lib/isotope/isotope.pkgd.min.js"></script>
<script src="/assets/lib/lightbox/js/lightbox.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>


<script src="/assets/js/contactform.js"></script>
<script src="/assets/js/main.js"></script>
<script src="/assets/js/main2.js"></script>
<script src="/assets/js/new-navbar.js"></script>
<script>
    window.addEventListener("load", function(event) {
        let button = document.getElementById("button_icons");

        button.addEventListener("click", function() {
            this.classList.toggle('active');
            let svg = this.querySelector('svg');

            svg.classList.toggle('fa-share-alt');
            svg.classList.toggle('fa-times');
        });
    });
</script>
<script>
    $('body').click(function(){
    //    $('#button_icons').removeClass('active');
    });
</script>