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
                            </div>
                        </div>
                    </div>
                </div>
                <div class="full_width">
                    <div class="full_width_inner">
                        @include('career.common.requirement')
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
