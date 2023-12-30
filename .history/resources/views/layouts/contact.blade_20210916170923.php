<div class="contain">
    <span class="big-circle"><b href="" class="wow rubberBand"></b></span>
    <img src="/assets/img/index/illustration/shape.png" class="square" alt="" />
    <div class="form wow fadeInDown">
        <div class="contact-info">
            <h3 class="title">Let's get in touch</h3>
            <p class="text">
                Ready to start a project?
            </p>
            <div class="info">
                <div class="information">
                    <img src="https://img.icons8.com/cute-clipart/36/4a90e2/globe.png" />
                    <!-- <img src="img/location.png" class="icon" alt="" /> -->
                    <p> 305,Golden Square,besides DMart,Mota Varachha,Surat,Gujarat-394101,India.</p>
                </div>
                <div class="information">
                    <img src="https://img.icons8.com/cute-clipart/36/4a90e2/apple-mail.png" />
                    <!-- <img src="img/email.png" class="icon" alt="" /> -->
                    <p> social@webitoinfotech.com
                        webitoinfotech.com</p>
                </div>
                <div class="information">
                    <img src="https://img.icons8.com/cute-clipart/36/4a90e2/ringing-phone.png" />
                    <!-- <img src="img/phone.png" class="icon" alt="" /> -->
                    <p> +91 97242 59460 <br>
                        +91 86905 86753</p>
                </div>
            </div>
            <div class="social-media">
                <p>Connect with us :</p>
                <div class="social-icons">
                    <a href="#">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="#">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="contact-form">
            <span class="circle one"></span>
            <span class="circle two"></span>
            <form action="{{ route('sendEmailroute') }}" method="post" href="{{ route('sendEmailroute') }}">
                @csrf
                <h3 class="title">Contact us</h3>
                @if (session()->has('message'))
                    <div class="alert alert-success">
                        {{ session()->get('message') }}
                    </div>
                @endif
                <div class="input-contain">
                    <input type="text" name="name" class="input" />
                    <label for="name">Username</label>
                    <span>Username</span>
                </div>
                <div class="input-contain">
                    <input type="email" name="email" class="input" />
                    <label for="email">Email</label>
                    <span>Email</span>
                </div>
                <div class="input-contain">
                    <input type="number" name="phone" class="input" />
                    <label for="phone">Phone</label>
                    <span>Phone</span>
                </div>


                <div class="input-contain">
                    {{-- <input type="select" name="select" class="input" /> --}}
                    <label for="select">Select a Service</label>
                    <select class="custom btn-default dropdown-toggle input" name="select" type="button"
                        data-toggle="dropdown">
                        <span class="customdd">
                            <option value=""></option>
                            <option value="Mobile Apps Development" style="color: black">Mobile Apps Development
                            </option>
                            <option value="Web Development" style="color: black">Web Development</option>
                            <option value="Mobile Game Development" style="color: black">Mobile Game Development
                            </option>
                            <option value="AI - ML App Development" style="color: black">AI - ML App Development
                            </option>
                        </span>
                    </select>
                    {{-- <button class='custom ' id="first">
                        <option value="1000">1km</option>
                        <option value="10000">10km</option>
                        <option value="30000">30km</option>
                        <option value="100000">100km</option>
                      </button> --}}
                    <span class="">Select a Service</span>

                </div>


                <div class="
                        input-contain textarea">
                        <textarea name="content" class="input"></textarea>
                        <label for="">Message</label>
                        <span>Message</span>
                </div>
                <button type="submit" class="btn">Send</button>
            </form>
        </div>
    </div>
</div>
<script>
    const inputs = document.querySelectorAll(".input");

    function focusFunc() {
        let parent = this.parentNode;
        parent.classList.add("focus");
    }

    function blurFunc() {
        let parent = this.parentNode;
        if (this.value == "") {
            parent.classList.remove("focus");
        }
    }

    inputs.forEach((input) => {
        input.addEventListener("focus", focusFunc);
        input.addEventListener("blur", blurFunc);
    });
</script>
