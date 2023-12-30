<section _ngcontent-c3="" class="we-work-sec pad-t-b" id="capabilities">
    <div _ngcontent-c3="" class="container">
        <div _ngcontent-c3="" class="title-block">
            <p _ngcontent-c3="" class="sub-title">Why we are renowned as a</p>
            <h2 _ngcontent-c3="">Leading Flutter App Development Company</h2>
        </div>
    </div>
</section>
{{-- <section>
    <div class="slideshow-container">
        <div class="mySlides fade">
            <div class="numbertext">1 / 3</div><img
                src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/approch-slide-img-1.svg"
                style="width:100%">
            <div class="text">Caption Text</div>
        </div>
        <div class="mySlides fade">
            <div class="numbertext">2 / 3</div><img
                src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/approch-slide-img-1.svg"
                style="width:100%">
            <div class="text">Caption Two</div>
        </div>
        <div class="mySlides fade">
            <div class="numbertext">3 / 3</div><img
                src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/approch-slide-img-1.svg"
                style="width:100%">
            <div class="text">Caption Three</div>
        </div><a class="prev" onclick="plusSlides(-1)">&#10094;
        </a><a class="next" onclick="plusSlides(1)">&#10095;
        </a>
    </div><br>
    <div style="text-align:center"><span class="dot" onclick="currentSlide(1)"></span><span
            class="dot" onclick="currentSlide(2)"></span><span class="dot"
            onclick="currentSlide(3)"></span></div>
</section> --}}







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
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
</script>
