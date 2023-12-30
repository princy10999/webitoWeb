<DOCTYPE html>
<html>
  <head>
    <title>Load a Page With AJAX and No Refresh</title>
    <style>

    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script>
      $(document).ready(function(){
        // Set trigger and container variables
        var trigger = $('#nav ul li a'),
            container = $('#content');

        // Fire on click
        trigger.on('click', function(){
          // Set $this for re-use. Set target from data attribute
          var $this = $(this),
            target = $this.data('target');

          // Load target page into container
          container.load(target + '.php');

          // Stop normal link behavior
          return false;
        });
      });
    </script>
  </head>
  <body>


    <button type="button" class="mobile-nav-toggle d-lg-none">
        <i class="fa fa-bars"></i>
    </button>
        <header id="header" class="fixed-top">
            <div class="container">

                <div class="logo float-left">
                    <!-- Uncomment below if you prefer to use an image logo -->
                    <!-- <h1 class="text-light"><a href="#header"><span>NewBiz</span></a></h1> -->

                    <a href="#intro" class="scrollto"><img src="assets/img/index/logo/logo.png" alt="Webito-Infotech" class="img-fluid"></a>
                </div>

                <nav class="main-nav float-right d-none d-lg-block" id="nav">
                    <ul>
                        <li class="active"><a href="/" data-target="home">Home</a></li>
                        <li><a href="/index" class="menu-c">About Us</a></li>
                        <li class="drop-down"><span class="dropdown-title"><a href="/services">Services</a></span>
                            <div class="dropdown-content fade-in">
                                <div class="aerrows"></div>
                                <table>
                                    <ul>
                                        <tr>
                                            <td>
                                                <li><i class="fa fa-mobile"></i><strong><span class="sub-dropdown-title"><a href="/mobileapp_development" class="link">Mobile Apps</a></span></strong>
                                                </li>
                                            </td>
                                            <td>
                                                <li><i class="fa fa-code"></i><strong><span class="sub-dropdown-title"><a href="/web_development" class="link">Web Development</a></span></strong>
                                                </li>
                                            </td>
                                            <td>
                                                <li><i class="fa fa-laptop"></i><strong><span class="sub-dropdown-title"><a href="/design_development" class="link">Design</a></span></strong>
                                                </li>
                                            </td>
                                            <td>
                                                <li><i class="fa fa-cloud"></i><strong><span class="sub-dropdown-title"><a href="/devops_development" class="link">DevOps </a></span></strong>
                                                </li>
                                            </td>
                                        </tr>
                                    </ul>
                                    <tr>
                                        <td>
                                            <ul class="sub-dropdown-content" style="margin-bottom: 80px;">
                                                <li><a href="mobile-app-development.html#native-ios-apps" class="link">Native ios Apps</a></li>
                                                <li><a href="mobile-app-development.html#native-android-apps" class="link">Native Android Apps</a></li>
                                                <li><a href="mobile-app-development.html#cross-platform" class="link">Cross Platform</a></li>
                                                <li><a href="mobile-app-development.html#hybrid-app-dev" class="link">Hybrid Apps</a></li>
                                                <li><a href="mobile-app-development.html#pwa-app-dev" class="link">PWA</a></li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul class="sub-dropdown-content" style="margin-bottom: 80px;">
                                                <li><a href="web-development.html#enterprise-solution" class="link">Enterprise Solutions</a></li>
                                                <li><a href="web-development.html#e-commerce" class="link">ECommerce</a></li>
                                                <li><a href="web-development.html#mobile-back-api" class="link">API & Backend</a></li>
                                                <li><a href="web-development.html#content-management" class="link">CMS</a></li>
                                                <li><a href="web-development.html#custom-web-dev" class="link">Custom Development</a></li>

                                            </ul>
                                        </td>
                                        <td>
                                            <ul class="sub-dropdown-content">
                                                <li><a href="#" class="link">Angluar</a></li>
                                                <li><a href="#" class="link">React JS</a></li>
                                                <li><a href="#" class="link">vue</a></li>
                                                <li><a href="#" class="link">Typescript</a></li>
                                                <li><a href="#" class="link">WPF</a></li>
                                                <li><a href="#" class="link">HTML 5</a></li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul class="sub-dropdown-content">
                                                <li><a href="#" class="link">Setup</a></li>
                                                <li><a href="#" class="link">Automation</a></li>
                                                <li><a href="#" class="link">Continuous Delivery</a></li>
                                                <li><a href="#" class="link">Monitoring</a></li>
                                                <li><a href="#" class="link">AWS</a></li>
                                                <li><a href="#" class="link">Google Cloud</a></li>
                                            </ul>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </li>
                        <li><a href="index.html#portfolio" class="menu-c">Portfolio</a></li>
                        <li><a href="index.html#team" class="menu-c">Team</a></li>
                        <li class="drop-down"><span class="dropdown-title"><a href="/technology">Technology</a></span>
                            <div class="dropdown-content fade-in">
                                <div class="aerrow"></div>
                                <table>
                                    <tr>
                                        <td><i class="fa fa-mobile"></i><strong><span class="sub-dropdown-title"><a href="/mobile" class="link">Mobile</a></span></strong>

                                        </td>
                                        <td><i class="fa fa-cogs"></i><strong><span class="sub-dropdown-title"><a href="/backend" class="link">Back-end</a></span></strong>

                                        </td>
                                        <td><i class="fa fa-code"></i><strong><span class="sub-dropdown-title"><a href="/frontend" class="link">Front-end</a></span></strong>

                                        </td>
                                        <td><i class="fa fa-database"></i><strong><span class="sub-dropdown-title"><a href="/database" class="link">Database</a></span></strong>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <ul class="sub-dropdown-content">
                                                <li><a href="#" class="link">ios</a></li>
                                                <li><a href="#" class="link">android</a></li>
                                                <li><a href="#" class="link">react-native</a></li>
                                                <li><a href="#" class="link">Flutter</a></li>
                                                <li><a href="#" class="link">Ionic</a></li>
                                                <li><a href="#" class="link">xamarin</a></li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul class="sub-dropdown-content">
                                                <li><a href="#" class="link">node</a></li>
                                                <li><a href="#" class="link">php</a></li>
                                                <li><a href="#" class="link">.net</a></li>
                                                <li><a href="#" class="link">java</a></li>
                                                <li><a href="#" class="link">python</a></li>
                                                <li><a href="#" class="link">Rails</a></li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul class="sub-dropdown-content">
                                                <li><a href="#" class="link">Angluar</a></li>
                                                <li><a href="#" class="link">React JS</a></li>
                                                <li><a href="#" class="link">vue</a></li>
                                                <li><a href="#" class="link">Typescript</a></li>
                                                <li><a href="#" class="link">WPF</a></li>
                                                <li><a href="#" class="link">HTML 5</a></li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul class="sub-dropdown-content">
                                                <li><a href="#" class="link">MYSQL</a></li>
                                                <li><a href="#" class="link">Dynamo DB</a></li>
                                                <li><a href="#" class="link">Postgre SQL</a></li>
                                                <li><a href="#" class="link">Oracle</a></li>
                                                <li><a href="#" class="link">Mongo DB</a></li>
                                                <li><a href="#" class="link">Reddis</a></li>
                                            </ul>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </li>
                        <li><a href="index.html#contact" class="menu-c contact-us-btn">Contact Us</a></li>
                        <li class="dark-mode-btn" onclick="darkmode()"><i class="fa fa-sun-o"></i><i class="fa fa-moon-o"></i></li>
                    </ul>
                </nav>
                <!-- .main-nav -->
            </div>
            <!-- <div class="dark-mode">
        <input type="checkbox" class="checkbox" id="checkbox">
        <label for="checkbox" class="label">
          <i class="fa fa-moon-o"></i>
          <i class="fa fa-sun-o"></i>
          <div class="ball"></div>
        </label>
      </div> -->
        </header>
        <div id="content">
            <?php include('home.php'); ?>
          </div>
  </body>
</html>
