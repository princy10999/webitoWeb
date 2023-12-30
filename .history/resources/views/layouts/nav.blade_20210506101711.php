<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Modern Dropdown Mega Menu Example</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="assets/css/nav.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.js"
        integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
        crossorigin="anonymous" />
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,900&display=swap"
        rel="stylesheet">
</head>

<body>

    <nav class="navbar nav-styles">
        <div class="brand-and-icon">
            <a href="/" class="navbar-brand"><img src="{{ url('../../../assets/img/index/logo/logo.png') }}" class="main-logo"
                    alt="Image" /></a>
            <div class="mobile-head-main-div">
                <div>
                    <a class="darkmode-desc-hide" style="margin-right: 20px;" onclick="darkmode()"><i
                            class="far fa-moon fa-lg"></i><i class="fa fa-moon-o"></i>
                </div>
                <div>
                    <button type="button" class="navbar-toggler">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
            </div>

        </div>

        <div class="navbar-collapse">
            <ul class="navbar-nav">
                <li>
                    <a href="/">home</a>
                </li>

                <li>
                    <a href="#" class="menu-link">
                        about us
                    </a>
                </li>

                <li>
                    <a href="/services" class="menu-link">
                        services
                        <span class="drop-icon">
                            <i class="fas fa-chevron-down"></i>
                        </span>
                    </a>
                    <div class="sub-menu fade-in">
                        <!-- item -->
                        <div class="sub-menu-item">
                            <div class="sub-menu-title-div">
                                <i class="fa fa-database sub-menu-title-i" aria-hidden="true"></i>
                                <a href="/design_developmet"><h4>top categories</h4></a>
                            </div>
                            <ul>
                                <li><a href="#">men's clothing</a></li>
                                <li><a href="#">women's clothing</a></li>
                                <li><a href="#">men's shoes</a></li>
                                <li><a href="#">women's shoes</a></li>
                                <li><a href="#">clothing deals</a></li>
                            </ul>
                        </div>
                        <!-- end of item -->
                        <!-- item -->
                        <div class="sub-menu-item">
                            <div class="sub-menu-title-div">
                                <i class="fa fa-database sub-menu-title-i" aria-hidden="true"></i>
                                <h4>top categories</h4>
                            </div>
                            <ul>
                                <li><a href="#">men's clothing</a></li>
                                <li><a href="#">women's clothing</a></li>
                                <li><a href="#">men's shoes</a></li>
                                <li><a href="#">women's shoes</a></li>
                                <li><a href="#">clothing deals</a></li>
                            </ul>
                        </div>
                        <div class="sub-menu-item">
                            <div class="sub-menu-title-div">
                                <i class="fa fa-database sub-menu-title-i" aria-hidden="true"></i>
                                <h4>top categories</h4>
                            </div>
                            <ul>
                                <li><a href="#">men's clothing</a></li>
                                <li><a href="#">women's clothing</a></li>
                                <li><a href="#">men's shoes</a></li>
                                <li><a href="#">women's shoes</a></li>
                                <li><a href="#">clothing deals</a></li>
                            </ul>
                        </div>
                        <!-- end of item -->
                        <!-- item -->
                        <div class="sub-menu-item">
                            <div class="sub-menu-title-div">
                                <i class="fa fa-database sub-menu-title-i" aria-hidden="true"></i>
                                <h4>top categories</h4>
                            </div>
                            <ul>
                                <li><a href="#">men's clothing</a></li>
                                <li><a href="#">women's clothing</a></li>
                                <li><a href="#">men's shoes</a></li>
                                <li><a href="#">women's shoes</a></li>
                                <li><a href="#">clothing deals</a></li>
                            </ul>
                        </div>
                    </div>
                </li>

                <li>
                    <a href="#" class="menu-link">
                        portfolio
                        <span class="drop-icon">
                            <i class="fas fa-chevron-down"></i>
                        </span>
                    </a>
                    <div class="sub-menu">
                        <!-- item -->
                        <div class="sub-menu-item">
                            <div class="sub-menu-title-div">
                                <i class="fa fa-database sub-menu-title-i" aria-hidden="true"></i>
                                <h4>top categories</h4>
                            </div>
                            <ul>
                                <li><a href="#">men's clothing</a></li>
                                <li><a href="#">women's clothing</a></li>
                                <li><a href="#">men's shoes</a></li>
                                <li><a href="#">women's shoes</a></li>
                                <li><a href="#">clothing deals</a></li>
                            </ul>
                        </div>
                        <!-- end of item -->
                        <!-- item -->
                        <div class="sub-menu-item">
                            <div class="sub-menu-title-div">
                                <i class="fa fa-database sub-menu-title-i" aria-hidden="true"></i>
                                <h4>top categories</h4>
                            </div>
                            <ul>
                                <li><a href="#">men's clothing</a></li>
                                <li><a href="#">women's clothing</a></li>
                                <li><a href="#">men's shoes</a></li>
                                <li><a href="#">women's shoes</a></li>
                                <li><a href="#">clothing deals</a></li>
                            </ul>
                        </div>
                        <div class="sub-menu-item">
                            <div class="sub-menu-title-div">
                                <i class="fa fa-database sub-menu-title-i" aria-hidden="true"></i>
                                <h4>top categories</h4>
                            </div>
                            <ul>
                                <li><a href="#">men's clothing</a></li>
                                <li><a href="#">women's clothing</a></li>
                                <li><a href="#">men's shoes</a></li>
                                <li><a href="#">women's shoes</a></li>
                                <li><a href="#">clothing deals</a></li>
                            </ul>
                        </div>
                        <!-- end of item -->
                        <!-- item -->
                        <div class="sub-menu-item">
                            <div class="sub-menu-title-div">
                                <i class="fa fa-database sub-menu-title-i" aria-hidden="true"></i>
                                <h4>top categories</h4>
                            </div>
                            <ul>
                                <li><a href="#">men's clothing</a></li>
                                <li><a href="#">women's clothing</a></li>
                                <li><a href="#">men's shoes</a></li>
                                <li><a href="#">women's shoes</a></li>
                                <li><a href="#">clothing deals</a></li>
                            </ul>
                        </div>
                    </div>
                </li>

                <li>
                    <a href="#">Team</a>
                </li>

                <li>
                    <a href="/technology" class="menu-link">
                        Technology
                        <span class="drop-icon">
                            <i class="fas fa-chevron-down"></i>
                        </span>
                    </a>
                    <div class="sub-menu">
                        <!-- item -->
                        <div class="sub-menu-item">
                            <div class="sub-menu-title-div">
                                <i class="fa fa-database sub-menu-title-i" aria-hidden="true"></i>
                                <h4>top categories</h4>
                            </div>
                            <ul>
                                <li><a href="#">men's clothing</a></li>
                                <li><a href="#">women's clothing</a></li>
                                <li><a href="#">men's shoes</a></li>
                                <li><a href="#">women's shoes</a></li>
                                <li><a href="#">clothing deals</a></li>
                            </ul>
                        </div>
                        <!-- end of item -->
                        <!-- item -->
                        <div class="sub-menu-item">
                            <div class="sub-menu-title-div">
                                <i class="fa fa-database sub-menu-title-i" aria-hidden="true"></i>
                                <h4>top categories</h4>
                            </div>
                            <ul>
                                <li><a href="#">men's clothing</a></li>
                                <li><a href="#">women's clothing</a></li>
                                <li><a href="#">men's shoes</a></li>
                                <li><a href="#">women's shoes</a></li>
                                <li><a href="#">clothing deals</a></li>
                            </ul>
                        </div>
                        <div class="sub-menu-item">
                            <div class="sub-menu-title-div">
                                <i class="fa fa-database sub-menu-title-i" aria-hidden="true"></i>
                                <h4>top categories</h4>
                            </div>
                            <ul>
                                <li><a href="#">men's clothing</a></li>
                                <li><a href="#">women's clothing</a></li>
                                <li><a href="#">men's shoes</a></li>
                                <li><a href="#">women's shoes</a></li>
                                <li><a href="#">clothing deals</a></li>
                            </ul>
                        </div>
                        <!-- end of item -->
                        <!-- item -->
                        <div class="sub-menu-item">
                            <div class="sub-menu-title-div">
                                <i class="fa fa-database sub-menu-title-i" aria-hidden="true"></i>
                                <h4>top categories</h4>
                            </div>
                            <ul>
                                <li><a href="#">men's clothing</a></li>
                                <li><a href="#">women's clothing</a></li>
                                <li><a href="#">men's shoes</a></li>
                                <li><a href="#">women's shoes</a></li>
                                <li><a href="#">clothing deals</a></li>
                            </ul>
                        </div>
                    </div>
                </li>

                <li><a href="/contactpage" class="mai-nav-contact-desc-hide">Contact Us</a></li>


            </ul>
        </div>
        <div class="desc-contact-div">
            <a class="desc-contact-btn" href="/contactpage" role="button">CONTACT US</a></a>
            <a class="dark-mode-btn" onclick="darkmode()"><i class="fa fa-sun-o"></i><i class="fa fa-moon-o"></i>
            </a>

        </div>
    </nav>
    </div>


    <script type="text/javascript" src="{{ URL::asset('js/app.js') }}"></script>
    <script type="text/javascript">
        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-36251023-1']);
        _gaq.push(['_setDomainName', 'jqueryscript.net']);
        _gaq.push(['_trackPageview']);

        (function() {
            var ga = document.createElement('script');
            ga.type = 'text/javascript';
            ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') +
                '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(ga, s);
        })();

    </script>
    <script>
        try {
            fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
                method: 'HEAD',
                mode: 'no-cors'
            })).then(function(response) {
                return true;
            }).catch(function(e) {
                var carbonScript = document.createElement("script");
                carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CK7DKKQU&placement=wwwjqueryscriptnet";
                carbonScript.id = "_carbonads_js";
                document.getElementById("carbon-block").appendChild(carbonScript);
            });
        } catch (error) {
            console.log(error);
        }

    </script>
</body>

</html>
