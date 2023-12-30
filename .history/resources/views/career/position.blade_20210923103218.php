@extends('master')
@section('career-contain')

    <link href="assets/css/position.css" rel="stylesheet">

    <div class="content " style="min-height: 453px; padding-top: 0px;">
        <div class="content_inner  ">
            <div class="title_outer title_without_animation" data-height="0">
                <div class="title position_left without_title_text standard_title " style="height:0px;">
                    <div class="image not_responsive"></div>

                    <div class="title_holder">
                        <div class="container">
                            <div class="container_inner clearfix">
                                <!--?php;

                                                                                                                                                                                                                                        </div-->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="full_width">
                    <div class="full_width_inner">
                        <div class="vc_row wpb_row section vc_row-fluid  grid_section mpc-row"
                            style="background-image:url(assets/img/career/careers-detail-banner.jpg); text-align:left;">
                            <div class=" section_inner clearfix">
                                <div class="section_inner_margin clearfix">
                                    <div class="wpb_column vc_column_container vc_col-sm-12 mpc-column"
                                        data-column-id="mpc_column-7661497b8fa161e">
                                        <div class="vc_column-inner ">
                                            <div class="wpb_wrapper">
                                                <div class="ult-spacer spacer-61497b8fa0455" data-id="61497b8fa0455"
                                                    data-height="150" data-height-mobile="100" data-height-tab="100"
                                                    data-height-tab-portrait="" data-height-mobile-landscape=""
                                                    style="clear:both;display:block;"></div>
                                                <div class="wpb_text_column wpb_content_element ">
                                                    <div class="wpb_wrapper">


                                                        <div id="careers-detail-box">
                                                            <div class="detail-title">
                                                                <h1>Mern Stack Developer</h1>
                                                                <p>Surat</p>
                                                            </div>
                                                            <div class="career-detail">
                                                                <ul>
                                                                    <li>Good skill on MongoDB, React Js, Express Js, Node JS
                                                                        and MySQL</li>
                                                                    <li>Must have 1.5 Yrs experience in NodeJS &amp; React
                                                                        development.</li>
                                                                    <li>Must be passionate about writing clean, efficient,
                                                                        and maintainable code. Self-starter with ability
                                                                        cope with sharp learning curves.</li>
                                                                    <li>Excellent teamwork skills, Good Communication skill
                                                                    </li>
                                                                    <li>Skills: Primary: NodeJS, MySql, MongoDB, Angular 4+,
                                                                        ES6, Express Js, React JS &amp; React Native</li>
                                                                </ul>
                                                                <div class="exp-detail">
                                                                    <div class="left">
                                                                        <p><span>Experience:</span> 3+ Years</p>
                                                                    </div>
                                                                    <div class="right">
                                                                        <p><span>Qualification:</span> Any</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>



                                                    </div>
                                                </div>
                                                <div class="ult-spacer spacer-61497b8fa140f" data-id="61497b8fa140f"
                                                    data-height="150" data-height-mobile="100" data-height-tab="100"
                                                    data-height-tab-portrait="" data-height-mobile-landscape=""
                                                    style="clear:both;display:block;"></div>
                                            </div>
                                            <div class="ult-spacer spacer-61497b8fa0455" data-id="61497b8fa0455"
                                                data-height="150" data-height-mobile="100" data-height-tab="100"
                                                data-height-tab-portrait="" data-height-mobile-landscape=""
                                                style="clear:both;display:block;"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        @include('career.common.form')
                    </div>
                </div>

            </div>
        </div>


    </div>
@endsection

<script>
    $(document).ready(function() {
        $('#upload-file').change(function() {
            var filename = $(this).val();
            $('#file-upload-name').html(filename);
            if (filename != "") {
                setTimeout(function() {
                    $('.upload-wrapper').addClass("uploaded");
                }, 600);
                setTimeout(function() {
                    $('.upload-wrapper').removeClass("uploaded");
                    $('.upload-wrapper').addClass("success");
                }, 1600);
            }
        });
    });
</script>
