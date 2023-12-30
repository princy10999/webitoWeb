(window.webpackJsonp = window.webpackJsonp || []).push([[0], {
    "Ju/l": function (l, n, e) {
        "use strict";
        e.d(n, "a", function () {
            return r
        });
        var t = e("mrSG")
            , o = e("ABfF")
            , u = e("QSRU")
            , i = e("PSD3")
            , a = e.n(i)
            , r = function (l) {
                function n(n, e) {
                    var t = l.call(this, n) || this;
                    return t.route = e,
                        t.swal = a.a,
                        t.config = o.a,
                        t.imageURL = "",
                        t.slug = "",
                        t.captchaSiteKey = "",
                        t.recaptcha = "",
                        t.formModel = {},
                        t.portfolioForm = {
                            action: "inquiry_form_portfolio",
                            "form-name": "Portfolio",
                            full_name: "",
                            email: "",
                            contact_number: "",
                            message: ""
                        },
                        t.next_url = "",
                        t.submitted = !1,
                        t.success = !1,
                        t.Enquirysuccess = !1,
                        t.showSendingButton = !1,
                        t.EnquiryshowSendingButton = !1,
                        t.showemailmsg = !1,
                        t.showEmailValidMsg = !1,
                        t.now = new Date,
                        t.MyPrevUrl = "",
                        t.showImageList = !1,
                        t.showHeading = !1,
                        t.fieldRequiredError = !1,
                        t.showTestimonialSlider = !1,
                        t.showHeadingOnContact = !1,
                        t.fileToUpload = null,
                        t.isValidFile = !0,
                        t.firstNameFocus = !1,
                        t.isValidFileSize = !0,
                        t.ShowDeleteIcon = !1,
                        t.isValidFileNameLength = !0,
                        t.isValidFileType = !0,
                        t.enquiryDetail = {
                            action: "inquiry_brand_chat",
                            "form-name": "Enquiry",
                            first_name: "",
                            last_name: "",
                            topic: "",
                            email: "",
                            contact_number: "",
                            contact_number_isd_code: "",
                            minimum_budget: "",
                            how_soon_you_want_to_start: "",
                            requesting_new_project: "",
                            message: ""
                        },
                        t.submitted1 = !1,
                        t.currentYear = (new Date).getFullYear(),
                        t.imageURL = t.config.imageUrl,
                        t.lottieConfig = {
                            path: "assets/images/lottie/thankyou.json",
                            renderer: "canvas",
                            autoplay: !0,
                            loop: !0
                        },
                        "/enquiry" === t.router.url ? (t.showImageList = !0,
                            t.showHeading = !1) : (t.showHeaderFooter = !0,
                                t.showHeading = !0),
                        t.showHeadingOnContact = "/contact" === t.router.url,
                        t.captchaSiteKey = t.demoSiteKey,
                        t
                }
                return Object(t.c)(n, l),
                    n.prototype.resolved = function (l) {
                        l && (this.recaptcha = l),
                            this.isBrowser && $("#submitEnquiryForm, #submitPortFolioForm, #submitOtherEnquiryForm").trigger("click")
                    }
                    ,
                    n.prototype.ngOnInit = function () {
                        var l = this;
                        this.MyPrevUrl = this.commonService.getPriviousUrl(),
                            this.slug = "enquiry-form",
                            this.isBrowser() && $.getScript("assets/js/intlTelInput.js" + this.commonService.versionName),
                            this.commonService.callApi("wp/v2/logo-details/", {}, "get", !1, !0).then(function (n) {
                                l.themesetting = n
                            }),
                            this.commonService.callApi("wp/v2/brandlogo-settings", {}, "get", !1, !0).then(function (n) {
                                l.brandlogo = n
                            }),
                            this.commonService.callApi("wp/v2/pages/?slug=testimonials", {}, "get", !1, !0).then(function (n) {
                                l.testimonials = n,
                                    l.testimonials && (l.getRandomInt(l.testimonials[0].acf.testimonials_section_testimony.testimonials_details.length),
                                        l.isBrowser() && setTimeout(function () {
                                            $.getScript("assets/js/bottom_form.js" + l.commonService.versionName),
                                                l.showTestimonialSlider = !0
                                        }, 2e3),
                                        l.isBrowser() && "/enquiry" == l.router.url && $(".first-name").focus())
                            })
                    }
                    ,
                    n.prototype.addNewEnquiry = function (l, n, e) {
                        var t = this;
                        if (this.fieldRequiredError = !1,
                            this.dailCode = document.getElementById("contact_number_isd_code").value,
                            l.controls.contact_number_isd_code.value = this.dailCode,
                            n.contact_number_isd_code = this.dailCode,
                            this.submitted1 = !0,
                            l.valid)
                            if (e.execute(),
                                null == this.fileToUpload)
                                if (this.recaptcha) {
                                    this.EnquiryshowSendingButton = !0;
                                    var o = new FormData;
                                    o.append("action", "inquiry_brand_chat"),
                                        o.append("form-name", "Enquiry"),
                                        o.append("first_name", l.controls.first_name.value),
                                        o.append("last_name", l.controls.last_name.value),
                                        o.append("topic", l.controls.topic.value),
                                        o.append("minimum_budget", l.controls.minimum_budget.value),
                                        o.append("how_soon_you_want_to_start", l.controls.how_soon_you_want_to_start.value),
                                        o.append("requesting_new_project", l.controls.requesting_new_project.value),
                                        o.append("email", l.controls.email.value),
                                        o.append("contact_number", l.controls.contact_number.value),
                                        o.append("contact_number_isd_code", l.controls.contact_number_isd_code.value),
                                        o.append("message", l.controls.message.value),
                                        o.append("submitted_page", window.location.href),
                                        this.getToken("session_key") && o.append("session_key", this.getToken("session_key")),
                                        this.commonService.callFormApi("admin-ajax.php", o, !0).then(function (n) {
                                            t.recaptcha && e.reset(),
                                                1 == n.status ? (t.commonService.callApi("wp/v2/pages/?slug=enquiry", {}, "get", !1, !0).then(function (l) {
                                                    t.thankYou = l
                                                }),
                                                    t.isBrowser && (t.removeToken("session_key"),
                                                        document.URL.includes("blog") || t.commonService.afterSubmittedData("Enquiry", l.controls.topic.value)),
                                                    t.EnquiryshowSendingButton = !1,
                                                    t.next_url = n.data.next_step_url,
                                                    setTimeout(function () {
                                                        t.Enquirysuccess = !0
                                                    }, 1e3),
                                                    t.submitted1 = !1,
                                                    t.commonService.setToken("methodology_token", t.now.getTime()),
                                                    t.commonService.setToken("user_name", l.controls.first_name.value),
                                                    l.reset()) : (t.EnquiryshowSendingButton = !1,
                                                        t.swal({
                                                            position: "center",
                                                            type: "error",
                                                            text: "Aw Snap! Something went wrong. Please try again.",
                                                            showConfirmButton: !1,
                                                            timer: 1800,
                                                            customClass: "custom-toaster"
                                                        })),
                                                "Enquiry" == t.showForm && document.getElementsByTagName("body")[0].classList.add("cd-model-fixed")
                                        })
                                } else
                                    console.log("captcha Not clicked");
                            else
                                this.isValidFileToUpdate(this.fileToUpload) && (this.recaptcha ? (this.EnquiryshowSendingButton = !0,
                                    (o = new FormData).append("action", "inquiry_brand_chat"),
                                    o.append("form-name", "Enquiry"),
                                    o.append("first_name", l.controls.first_name.value),
                                    o.append("last_name", l.controls.last_name.value),
                                    o.append("topic", l.controls.topic.value),
                                    o.append("minimum_budget", l.controls.minimum_budget.value),
                                    o.append("how_soon_you_want_to_start", l.controls.how_soon_you_want_to_start.value),
                                    o.append("requesting_new_project", l.controls.requesting_new_project.value),
                                    o.append("email", l.controls.email.value),
                                    o.append("contact_number", l.controls.contact_number.value),
                                    o.append("contact_number_isd_code", l.controls.contact_number_isd_code.value),
                                    o.append("projectfile", this.fileToUpload, this.fileToUpload.name),
                                    o.append("message", l.controls.message.value),
                                    o.append("submitted_page", window.location.href),
                                    this.getToken("session_key") && o.append("session_key", this.getToken("session_key")),
                                    this.commonService.callFormApi("admin-ajax.php", o, !0).then(function (n) {
                                        t.recaptcha && e.reset(),
                                            1 == n.status ? (t.commonService.callApi("wp/v2/pages/?slug=enquiry", {}, "get", !1, !0).then(function (l) {
                                                t.thankYou = l
                                            }),
                                                t.isBrowser && (t.removeToken("session_key"),
                                                    document.URL.includes("blog") || t.commonService.afterSubmittedData("Enquiry", l.controls.topic.value)),
                                                t.EnquiryshowSendingButton = !1,
                                                t.next_url = n.data.next_step_url,
                                                setTimeout(function () {
                                                    t.Enquirysuccess = !0
                                                }, 1e3),
                                                t.submitted1 = !1,
                                                t.commonService.setToken("methodology_token", t.now.getTime()),
                                                t.commonService.setToken("user_name", l.controls.first_name.value),
                                                l.reset()) : (t.EnquiryshowSendingButton = !1,
                                                    t.swal({
                                                        position: "center",
                                                        type: "error",
                                                        text: "Aw Snap! Something went wrong. Please try again.",
                                                        showConfirmButton: !1,
                                                        timer: 1800,
                                                        customClass: "custom-toaster"
                                                    })),
                                            "Enquiry" == t.showForm && document.getElementsByTagName("body")[0].classList.add("cd-model-fixed")
                                    })) : console.log("captcha Not clicked"));
                        else
                            this.fieldRequiredError = !0,
                                this.isBrowser() && $("input[type=text],input[type=email],input[type=tel],textarea").each(function () {
                                    if ("" == $(this).val())
                                        return this.focus(),
                                            !1
                                })
                    }
                    ,
                    n.prototype.addPortfolioForm = function (l, n, e) {
                        var t = this;
                        if (this.commonService.callApi("wp/v2/pages/?slug=enquiry", {}, "get", !1, !0).then(function (l) {
                            t.thankYou = l
                        }),
                            this.fieldRequiredError = !1,
                            this.submitted = !0,
                            l.valid)
                            if (e.execute(),
                                this.recaptcha) {
                                this.showSendingButton = !0;
                                var o = new FormData;
                                o.append("action", "inquiry_form_portfolio"),
                                    o.append("form-name", "Portfolio"),
                                    o.append("full_name", l.controls.full_name.value),
                                    o.append("email", l.controls.email.value),
                                    o.append("contact_number", l.controls.contact_number.value),
                                    o.append("message", l.controls.message.value),
                                    o.append("submitted_page", window.location.href),
                                    this.getToken("session_key") && o.append("session_key", this.getToken("session_key")),
                                    this.commonService.callFormApi("admin-ajax.php", o, !0).then(function (n) {
                                        1 == n.status && (t.commonService.callApi("wp/v2/pages/?slug=enquiry", {}, "get", !1, !0).then(function (l) {
                                            t.thankYou = l
                                        }),
                                            t.isBrowser && (t.removeToken("session_key"),
                                                document.URL.includes("blog") || t.commonService.afterSubmittedData("Portfolio", "PortfllioRequest")),
                                            t.showSendingButton = !1,
                                            t.next_url = n.data.next_step_url,
                                            setTimeout(function () {
                                                t.success = !0
                                            }, 1e3),
                                            t.submitted = !1,
                                            t.commonService.setToken("methodology_token", t.now.getTime()),
                                            t.commonService.setToken("user_name", l.controls.full_name.value))
                                    })
                            } else
                                console.log("captcha");
                        else
                            this.fieldRequiredError = !0
                    }
                    ,
                    n.prototype.onBlur = function (l) {
                        var n = l.target.value;
                        /[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,63}/.test(n) ? (l.target.classList.remove("has_danger"),
                            this.showemailmsg = !/^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!abc.com)(?!xyz.com)(?!pqr.com)(?!rediffmail.com)(?!live.com)(?!outlook.com)(?!me.com)(?!msn.com)(?!ymail.com)([\w-]+\.)+[\w-]{2,50})?$/.test(n)) : (l.target.classList.add("has_danger"),
                                this.showemailmsg = !1)
                    }
                    ,
                    n.prototype.isNumberFormat = function (l) {
                        var n = (l = l || window.event).which ? l.which : l.keyCode;
                        return !(n > 31 && (n < 48 || n > 57))
                    }
                    ,
                    n.prototype.onTextboxBlur = function (l) {
                        "" == l.target.value ? l.target.classList.add("has_danger") : l.target.classList.remove("has_danger")
                    }
                    ,
                    n.prototype.noThanks = function () {
                        if (this.success = !1,
                            this.Enquirysuccess = !1,
                            "Enquiry" == this.showForm) {
                            var l = document.getElementsByTagName("body")[0];
                            l.classList.remove("cd-model-fixed"),
                                l.classList.remove("scroll-fixed")
                        }
                        this.portfolioForm = {},
                            this.enquiryDetail = {},
                            this.isBrowser() && (window.location.href = this.config.baseSiteURL)
                    }
                    ,
                    n.prototype.inRandomValue = function (l) {
                        if (this.ranNums.some(function (n) {
                            return n === l
                        }))
                            return !0
                    }
                    ,
                    n.prototype.deleteFile = function () {
                        this.fileToUpload = null,
                            this.isValidFile = !0,
                            this.isValidFileSize = !0,
                            this.isValidFileType = !0,
                            this.isValidFile = !0,
                            this.ShowDeleteIcon = !1,
                            $("projectfile").val(""),
                            $("#inputfiledetail").html("Select or Drop your file here")
                    }
                    ,
                    n.prototype.trimFileName = function (l) {
                        var n = l.split(".");
                        return n[0].length >= 20 ? (l = n[0].substring(0, 20)) + "..." + n[1] : l
                    }
                    ,
                    n.prototype.handleFileInput = function (l) {
                        if (l)
                            if (this.fileToUpload = l.item(0),
                                this.fileToUpload) {
                                this.ShowDeleteIcon = !0;
                                var n = this.fileToUpload.name;
                                $("#inputfiledetail").html(this.trimFileName(this.fileToUpload.name));
                                var e = n.substring(n.lastIndexOf(".") + 1);
                                "pdf" == e.toLowerCase() || "docx" == e.toLowerCase() || "doc" == e.toLowerCase() || "odt" == e.toLowerCase() || "zip" == e.toLowerCase() || "key" == e.toLowerCase() || "numbers" == e.toLowerCase() || "pages" == e.toLowerCase() || "jpeg" == e.toLowerCase() || "png" == e.toLowerCase() || "txt" == e.toLowerCase() || "ppt" == e.toLowerCase() || "pptx" == e.toLowerCase() || "xls" == e.toLowerCase() || "xlsx" == e.toLowerCase() || "jpg" == e.toLowerCase() ? (this.fileToUpload.size / 1048576 > 8 ? (this.isValidFileSize = !1,
                                    this.isValidFile = !1) : (this.isValidFileSize = !0,
                                        this.isValidFile = !0),
                                    this.isValidFileType = !0) : (this.isValidFileType = !1,
                                        this.isValidFile = !1)
                            } else
                                this.deleteFile()
                    }
                    ,
                    n.prototype.isValidFileToUpdate = function (l) {
                        if (l) {
                            var n = l.name
                                , e = n.substring(n.lastIndexOf(".") + 1);
                            return "pdf" == e.toLowerCase() || "docx" == e.toLowerCase() || "doc" == e.toLowerCase() || "odt" == e.toLowerCase() || "zip" == e.toLowerCase() || "key" == e.toLowerCase() || "numbers" == e.toLowerCase() || "pages" == e.toLowerCase() || "jpeg" == e.toLowerCase() || "png" == e.toLowerCase() || "txt" == e.toLowerCase() || "ppt" == e.toLowerCase() || "pptx" == e.toLowerCase() || "xls" == e.toLowerCase() || "xlsx" == e.toLowerCase() || "jpg" == e.toLowerCase() ? (this.isValidFile = !0,
                                this.fileToUpload.size / 1048576 > 8 ? (this.isValidFileSize = !1,
                                    this.isValidFile = !1,
                                    this.isValidFileType = !0,
                                    !1) : (this.isValidFileSize = !0,
                                        this.isValidFile = !0,
                                        this.isValidFileType = !0,
                                        !0)) : (this.isValidFileType = !1,
                                            this.isValidFile = !1,
                                            !1)
                        }
                        return !0
                    }
                    ,
                    n.prototype.clickmyfile = function () {
                        $("#inputfile").click()
                    }
                    ,
                    n
            }(u.a)
    },
    TLCe: function (l, n, e) {
        "use strict";
        var t = e("CcnG")
            , o = e("XpAg")
            , u = e("UuUw")
            , i = e("gIcY")
            , a = e("Ip0R")
            , r = e("WZG6")
            , d = e("z0F3")
            , s = e("ZYCi");
        e("Ju/l"),
            e.d(n, "a", function () {
                return c
            }),
            e.d(n, "b", function () {
                return ml
            });
        var c = t["\u0275crt"]({
            encapsulation: 0,
            styles: [[".required[_ngcontent-%COMP%]{color:red}.has-danger[_ngcontent-%COMP%]   .ng-invalid[_ngcontent-%COMP%]{border:1px solid red}.cd-modal[_ngcontent-%COMP%]{background-color:#fff;opacity:0;visibility:inherit;z-index:-1;pointer-events:inherit;transition:all .6s ease-in-out;margin-top:-100%}.cd-modal.model-show[_ngcontent-%COMP%]{opacity:1;transition:all .6s ease-in-out;margin-top:0;z-index:99999}.cd-modal-close[_ngcontent-%COMP%]{transform:scale(1);opacity:1;visibility:visible}.has_danger[_ngcontent-%COMP%]{border:1px solid red!important}.go-back-button[_ngcontent-%COMP%]{float:right;margin-top:20px}.go-back-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#8a959e;font-size:14px;font-weight:600}  .portfolio-bottom-sec{background:#f8f8f8;overflow:hidden;position:relative}  .portfolio-bottom-sec .portfolio-footer-left{padding:60px 0}  .portfolio-bottom-sec .portfolio-footer-left p{padding:10px 0 15px;margin:0}  .portfolio-bottom-sec .portfolio-footer-right img{position:relative;left:75px}  .portfolio-bottom-sec .portfolio-form input{border:1px solid #ddd;height:50px;border-radius:4px;box-shadow:none;display:block;width:100%;padding:15px;font-size:16px;color:#252b33;background:#fafafa;box-sizing:border-box;margin-bottom:15px;-moz-appearance:none;-webkit-appearance:none}  .portfolio-bottom-sec .portfolio-form textarea{font-family:Poppins,sans-serif;border:1px solid #ddd;border-radius:4px;box-shadow:none;display:block;width:100%;padding:15px;font-size:16px;color:#252b33;background:#fafafa;resize:none;box-sizing:border-box;margin-bottom:5px;-moz-appearance:none;-webkit-appearance:none}  .portfolio-bottom-sec .portfolio-form .has-error{box-shadow:0 0 10px rgba(255,36,0,.4);border:1px solid #ff2400}  .portfolio-bottom-sec .portfolio-form input:focus,   .portfolio-bottom-sec .portfolio-form textarea:focus{outline:0;transition:all .3s ease-in-out}  .portfolio-bottom-sec .portfolio-form .submit{background:#f13c31;border-radius:100px;box-sizing:border-box;padding:10px 30px;text-align:center;margin-top:20px!important;font-size:16px;font-weight:600;color:#fff;display:inline-block;outline:0;border:2px solid #f13c31;cursor:pointer;transition:all .3s ease-in-out;width:auto!important}  .portfolio-bottom-sec .portfolio-form .submit:hover{background:0 0;color:#f13c31}  .portfolio-bottom-sec .portfolio-form .cd-modal-action .cd-modal-bg{top:0}  .footer-nl-form .container_inner{position:static}  .enquiry-form-bg-contact-page{background:0 0;overflow:hidden}  .content_bottom{border-top:1px solid #eee}  .enquiry-page-sec .content_bottom{border-top:0}  #consultation-form .fullscreen_search_inner .consult-form-width{width:1140px;margin:0 auto}  .enquiry-page-width{max-width:1170px;margin:0 auto;height:100%;padding:0 15px}  .enquiry-page-sec #lets-talk.lets-talk{margin:0}  body.cd-model-fixed{position:fixed;overflow:hidden;z-index:99999;top:0;left:0;right:0;bottom:0;width:100%;height:100%}  body.cd-model-fixed .cd-modal{position:fixed}  body.cd-model-fixed .footer-nl-form{position:static}  body.cd-model-fixed .header{z-index:-1}  .cd-modal{position:absolute;top:0;left:0;width:100%;height:100%;visibility:hidden;opacity:0;pointer-events:none;transition:visibility 0s .3s,opacity .3s 0s,z-index 0s .3s}  .cd-modal::after{content:'';position:absolute;left:0;bottom:0;width:100%;height:60px;pointer-events:none}  .cd-modal .cd-modal-content{height:100%;width:100%;padding:0;text-align:left;overflow-y:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;box-sizing:border-box;position:relative}  .cd-modal-content .thanks-text-outer{max-width:1170px;margin:auto;position:absolute;top:50%;left:0;right:0;transform:translate(0,-50%)}  .cd-modal-content .thanks-text{overflow:hidden;position:relative}  .cd-modal-content .thanks-text img{margin:0 0 10px 10px}  .cd-modal-content .thanks-text h2{color:#fff!important;font-size:60px!important;text-transform:capitalize;margin:0;line-height:70px;padding:0!important;border:none!important;font-weight:600}  .cd-modal-content .thanks-text p{font-size:16px!important;margin:0 0 10px;font-weight:400!important;line-height:normal!important;color:#fff!important}  .cd-modal-content .thanks-text h5{display:block;font-size:24px;line-height:26px;color:#fff;font-weight:400;margin-bottom:10px}  .cd-modal-content .thanks-text .cdn-btn-set{overflow:hidden;padding:15px 0 0}#lets-talk.lets-talk[_ngcontent-%COMP%]   .contact-details[_ngcontent-%COMP%]   .cdn-btn-set[_ngcontent-%COMP%]   a.cd-btn[_ngcontent-%COMP%],   .cd-modal-content .thanks-text .cdn-btn-set .cd-btn{font-size:14px!important;color:#f13c31!important;text-transform:uppercase!important;font-family:Poppins,sans-serif;padding:10px 30px;border-radius:50px;display:block;margin:0 10px 0 0;background:#fff!important;font-weight:600;width:auto!important;text-align:center;float:left;border:2px solid #fff!important}#lets-talk.lets-talk[_ngcontent-%COMP%]   .contact-details[_ngcontent-%COMP%]   .cdn-btn-set[_ngcontent-%COMP%]   a.cd-btn[_ngcontent-%COMP%]:hover,   .cd-modal-content .thanks-text .cdn-btn-set .cd-btn:hover{background:#f13c31!important;color:#fff!important}#lets-talk.lets-talk[_ngcontent-%COMP%]   .contact-details[_ngcontent-%COMP%]   .cdn-btn-set[_ngcontent-%COMP%]   a.cd-btn.cd-link[_ngcontent-%COMP%],   .cd-modal-content .thanks-text .cdn-btn-set .cd-btn.cd-link{background:0 0!important;color:#fff!important;border-color:transparent!important}  .modal-is-visible .cd-modal{z-index:101;visibility:visible;opacity:1;pointer-events:auto;transition:visibility 0s 0s,opacity .3s 0s,z-index 0s 0s}  .modal-is-visible .cd-modal .cd-modal-content{-webkit-overflow-scrolling:touch}  .cd-modal-action{position:relative}  .cd-modal-action .cd-modal-bg{display:none;position:absolute;left:50%;width:4em;border-radius:50%;transform:translateZ(0);transform:translateX(-2em);z-index:-1;height:2.5em;background-color:#f13c31}  .cd-modal-action .btn.gradient-btn:not(.fixed-green) .cd-modal-bg{background:#f13c31}  .cd-modal-action .btn{position:relative;text-align:center;width:8em!important;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;transition:color .2s .3s,width .3s 0s,border-radius 1s 0s;border-radius:50px!important}.cd-modal-action[_ngcontent-%COMP%]   .gradient-btn.btn.to-circle[_ngcontent-%COMP%],   .cd-modal-action .to-circle{border-radius:5em!important;width:4em;color:transparent;transition:color .2s .3s,width .3s 0s,border-radius 1s 0s}  .fixed-body .fixed-popup .cd-modal-action .cd-modal-bg{position:fixed;top:0}  .fixed-body .modal-is-visible .cd-modal{position:fixed}  .fixed-body .modal-is-visible .cd-modal .cd-modal-content{padding:0}  .cd-modal-action .cd-modal-bg.is-visible{opacity:1;visibility:visible;z-index:100}  .cd-modal-action .cd-modal-bg.active{position:absolute;top:0;left:0;visibility:visible;opacity:1}  .cd-modal-close{border-bottom:none!important;color:#fff!important;background:0 0!important;font-size:18px!important;text-transform:none!important;margin-top:15px;overflow:hidden;white-space:nowrap;visibility:hidden;opacity:0;transform:translateZ(0);transform:scale(0);transition:transform .3s 0s,visibility 0s .3s,opacity .3s 0s}  .no-touch .cd-modal-close:hover{background-color:rgba(0,0,0,.5)}  .modal-is-visible .cd-modal-close{visibility:visible;opacity:1;transition:transform .3s 0s,visibility 0s 0s,opacity .3s 0s;transform:scale(1)}  .fixed-popup{overflow:auto!important;background:0 0;padding:50px 0}  .fullscreen_search_holder .fullscreen_search_table{background-color:transparent}  body.fixed-body{overflow:hidden;position:fixed;left:0;right:0;top:0;bottom:0;width:100%;height:100%}  .grecaptcha-badge{visibility:hidden!important;opacity:0!important}  .thankyou-popup{position:relative;display:flex;align-items:center;height:100vh}  .thankyou-popup .thankyou-content h2{padding:6px 0 24px}  .thankyou-popup .thankyou-content ul{margin:0 0 24px 30px}  .thankyou-popup .thankyou-content ul li{font-size:14px;color:green;list-style-position:outside;padding-bottom:6px}  .thankyou-popup .thankyou-content .green-btn{margin-top:40px}  .thankyou-popup .thankyou-content .green-btn .fa{margin-left:8px}  .thankyou-popup .popup-close-ic{position:absolute;top:40px;right:40px}  .portfolio-bottom-sec .thankyou-popup{height:100%;background-color:#202020}  .portfolio-bottom-sec .thankyou-popup h2{color:#fff}  .portfolio-bottom-sec .cd-modal.model-show{z-index:9}  .enquiry-page-form{position:relative}  #lets-talk.thanks-popup.sidebar-popup{overflow:hidden}  .enquiry-page-sec{padding:10px 0 30px;height:100%;font-family:Poppins,sans-serif}  .enquiry-page-form .contact-section .header-main .header-part{border-bottom:1px solid #f1f1f1;padding-bottom:15px;margin-bottom:25px}  .enquiry-page-form .contact-section .header-main .header-part .logo{float:left;margin-top:5px}  .enquiry-page-form .contact-section .header-main .header-part .close-btn{float:right;margin-top:20px}  .enquiry-page-form .contact-section .header-main .tag-line h2{text-align:center;color:#f13c31!important;font-weight:800;margin-bottom:10px}  .enquiry-page-form .contact-section .header-main .tag-line .vr-title{font-size:14px;text-align:center;color:#252b33}  .enquiry-page-form .close-btn a{color:#8a959e;font-size:14px;font-weight:600}  .enquiry-page-form .contact-header{position:relative}  .enquiry-page-form .header-title{text-align:center}  .enquiry-page-form .bottom-form-title{color:#f13c31;font-weight:800;margin-bottom:10px}  .enquiry-page-form .btm-form-title-sec{margin-bottom:50px}  .enquiry-page-form .btm-form-title-sec p{font-size:18px;line-height:28px}  .enquiry-page-form .header-title h4 span.bullet{height:5px;width:5px;display:inline-block;background:#323a45;border-radius:50px;vertical-align:middle;margin:0 10px}  .enquiry-page-form .contact-section .header-main{width:100%;margin-bottom:15px}  .enquiry-page-form .contact-section .header-main h4{font-size:18px;line-height:28px;margin-bottom:20px;text-align:center}  .enquiry-page-form .contact-section .contact-form-sec{width:510px;float:right;margin:0 auto;padding:0}  .enquiry-page-form .contact-section .contact-form-sec form.form_brand{background-color:#f1f4f5;padding:30px;box-sizing:border-box}  .enquiry-page-form .contact-section .contact-form-sec .group{padding-bottom:15px;position:relative}  .enquiry-page-form .contact-section .contact-form-sec input{background-color:#fff;font-family:Poppins,sans-serif;border:1px solid #d9dee2;-webkit-appearance:none;height:40px;display:block;width:100%;padding:0 0 0 15px;font-size:14px;color:#252b33;box-sizing:border-box;border-radius:0}  .enquiry-page-form .contact-section .contact-form-sec input.name{width:48.1%;float:left;margin-right:15px}  .enquiry-page-form .contact-section .contact-form-sec input.last-name{margin-right:0}  .enquiry-page-form .contact-section .contact-form-sec select{border:1px solid #d9dee2;font-family:Poppins,sans-serif;border-radius:0;height:40px;display:block;width:100%;padding:0 0 0 15px;color:#252b33;background:url(drop-down-arrow.f12b1c03e006050eded2.png) right 15px center no-repeat #fff;-moz-appearance:none;-webkit-appearance:none;appearance:none;font-size:14px;box-sizing:border-box}  .enquiry-page-form .contact-section .contact-form-sec select option[value=\"\"][disabled]{display:none}  .enquiry-page-form .contact-section .contact-form-sec textarea{border-radius:0;font-family:Poppins,sans-serif;border:1px solid #d9dee2;display:block;width:100%;padding:10px 0 25px 15px;font-size:14px;color:#252b33;background:#fff;resize:none;box-sizing:border-box;-webkit-appearance:none}  .enquiry-page-form .contact-section .contact-form-sec input.isd-code{width:30%;float:left}  .enquiry-page-form .contact-section .contact-form-sec input.contact-number{width:100%;float:right;padding-left:110px!important}.enquiry-page-form[_ngcontent-%COMP%]   .contact-section[_ngcontent-%COMP%]   .contact-form-sec[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, .enquiry-page-form[_ngcontent-%COMP%]   .contact-section[_ngcontent-%COMP%]   .contact-form-sec[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus,   .enquiry-page-form .contact-section .contact-form-sec input:focus{outline:0;box-shadow:none;transition:all .3s ease-in-out}  .enquiry-page-form .contact-section .contact-form-sec .group label{margin-bottom:5px;display:block;font-size:13px;color:#252b33;font-weight:500}  .enquiry-page-form .contact-section .contact-form-sec .group label span{color:red}  .enquiry-page-form .contact-section .contact-form-sec .group.file-upload-sec p.file-error{margin:5px 0 0;font-size:11px;color:#f13c31!important;line-height:14px}  .enquiry-page-form .contact-section .required-sec{display:flex;align-items:center;justify-content:space-between;margin-top:40px;border-bottom:1px solid #d9dee2;padding-bottom:10px}  .enquiry-page-form .contact-section .required-sec p{color:#252b33;font-weight:600;font-size:12px;margin-bottom:0}  .enquiry-page-form .contact-section .contact-form-sec .bottom-area{position:relative;display:inline-block}  .enquiry-page-form .contact-section .contact-form-sec .bottom-area .submit-btn .submit{background-color:#f13c31;border:2px solid #f13c31;border-radius:30px;box-sizing:border-box;padding:8px 24px;text-align:center;margin:0;font-size:14px;color:#fff;display:inline-block;outline:0;cursor:pointer;transition:all .3s ease-in-out;width:auto!important;font-weight:600}  .enquiry-page-form .contact-section .contact-form-sec .bottom-area .submit-btn .submit:hover{background:0 0;color:#f13c31}  .enquiry-page-form .contact-section .copyright .copyright-text{display:flex;display:-ms-flexbox;align-items:center;justify-content:space-between;width:100%;border-top:1px solid #eee;margin-top:20px;padding-top:30px}  .enquiry-page-form .contact-section .copyright .copyright-text span{font-size:12px;color:#252b33}.enquiry-page-form[_ngcontent-%COMP%]   .contact-section[_ngcontent-%COMP%]   .contact-form-sec[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-input-placeholder,   .enquiry-page-form .contact-section .contact-form-sec input::-webkit-input-placeholder{color:rgba(0,0,0,.5);font-size:14px}.enquiry-page-form[_ngcontent-%COMP%]   .contact-section[_ngcontent-%COMP%]   .contact-form-sec[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-input-placeholder,   .enquiry-page-form .contact-section .contact-form-sec input::-moz-placeholder{color:rgba(0,0,0,.5);font-size:14px}  .enquiry-page-form .contact-section .contact-form-sec .has-error{box-shadow:0 0 10px rgba(255,36,0,.4);border:1px solid #ff2400}  .enquiry-page-form .contact-section .contact-form-sec .bottom-area .nl-submit-wrap{margin-top:15px;width:100%}  .enquiry-page-form .contact-section .copyright{margin-top:50px}  .enquiry-page-form .contact-section .contact-form-sec .bottom-area .secure-ftr{float:right;font-size:12px;color:#252b33;margin-top:30px;font-weight:600}.enquiry-page-form[_ngcontent-%COMP%]   .hiddenRecaptcha.has-error[_ngcontent-%COMP%] ~ label.required[_ngcontent-%COMP%]::after,   .enquiry-page-form .hiddenRecaptcha.has-error~label.required{color:#ff2400}.enquiry-page-form[_ngcontent-%COMP%]   .hiddenRecaptcha[_ngcontent-%COMP%] ~ label.required[_ngcontent-%COMP%]::after,   .enquiry-page-form .hiddenRecaptcha~label.required{position:absolute;top:85px}  .enquiry-page-form .contact-section .client-logo{width:540px;position:relative;float:left;box-sizing:border-box}  .enquiry-page-form .contact-section .client-logo .testimonial-slide-sec{text-align:center;-webkit-user-select:inherit;-moz-user-select:inherit;-ms-user-select:inherit;user-select:inherit;margin-top:40px}  .enquiry-page-form .contact-section .client-logo .testimonial-slide-sec .slick-slider{position:relative;display:block;overflow:hidden;box-sizing:border-box;touch-action:pan-y;-webkit-tap-highlight-color:transparent;z-index:99}  .enquiry-page-form .contact-section .client-logo .testimonial-slide-sec .slick-list{position:relative;display:block;margin:0;padding:0;overflow:hidden}  .enquiry-page-form .contact-section .client-logo .testimonial-slide-sec .slick-list:focus{outline:0}  .enquiry-page-form .contact-section .client-logo .testimonial-slide-sec .slick-track{position:relative;top:0;left:0;display:block;z-index:-9}.enquiry-page-form[_ngcontent-%COMP%]   .contact-section[_ngcontent-%COMP%]   .client-logo[_ngcontent-%COMP%]   .testimonial-slide-sec[_ngcontent-%COMP%]   .slick-track[_ngcontent-%COMP%]:after,   .enquiry-page-form .contact-section .client-logo .testimonial-slide-sec .slick-track:before{display:table;content:''}  .enquiry-page-form .contact-section .client-logo .testimonial-slide-sec .slick-track:after{clear:both}.enquiry-page-form[_ngcontent-%COMP%]   .contact-section[_ngcontent-%COMP%]   .client-logo[_ngcontent-%COMP%]   .testimonial-slide-sec[_ngcontent-%COMP%]   .slick-slider[_ngcontent-%COMP%]   .slick-list[_ngcontent-%COMP%],   .enquiry-page-form .contact-section .client-logo .testimonial-slide-sec .slick-slider .slick-track{transform:translate3d(0,0,0)}  .enquiry-page-form .contact-section .client-logo .testimonial-slide-sec .slick-slide{display:inline-block;vertical-align:middle;outline:0;transition:all .25s ease 0s;border-radius:5px;padding:20px;margin:0 10px;border:1px solid rgba(0,0,0,.1);background:#f1f4f5}  .enquiry-page-form .contact-section .client-logo .testimonial-slide-sec .slide h4{font-size:16px;color:#252b33;font-weight:400;width:90%;margin:20px auto;line-height:23px}  .enquiry-page-form .contact-section .client-logo .testimonial-slide-sec .slide p{font-size:14px;color:#252b33;font-weight:600;margin-bottom:0}  .enquiry-page-form .contact-section .client-logo .testimonial-slide-sec .slide h6{font-size:12px;color:rgba(37,43,51,.5);font-weight:400}  .enquiry-page-form .contact-section .client-logo .testimonial-slide-sec .slide img{width:auto;float:none}  .enquiry-page-form .contact-section .client-logo .testimonial-slide-sec ul.slick-dots{padding:0;width:100%;margin-bottom:0}  .enquiry-page-form .contact-section .client-logo .testimonial-slide-sec ul.slick-dots li{list-style:none;margin:0 4px;display:inline-block}  .enquiry-page-form .contact-section .client-logo .testimonial-slide-sec ul.slick-dots li button{cursor:pointer;background-color:rgba(138,149,158,.3);height:10px;width:10px;padding:1px;border-radius:100%;font-size:0;outline:0;border:0;box-shadow:none}  .enquiry-page-form .contact-section .client-logo .testimonial-slide-sec ul.slick-dots li.slick-active button{font-size:0;background-color:#8a959e;outline:0;border-radius:100%;height:10px;width:10px}  .enquiry-page-form .contact-section .client-logo .testimonial-slide-sec .slick-slider .slick-track{transform:translate3d(0,0,0)}  .enquiry-page-form .contact-section .client-logo .client-image{margin-top:40px;align-items:center;justify-content:center}  .enquiry-page-form .contact-section .client-logo .client-logo-single svg{width:100%}  .enquiry-page-form .contact-section .client-logo h4{font-size:16px;color:#252b33;letter-spacing:-.33px}  .enquiry-page-form .contact-section .client-logo .testimonial-slide-sec .slick-slide img{display:inline-block;width:60px;height:60px;border-radius:100px;-o-object-fit:cover;object-fit:cover}.enquiry-page-form[_ngcontent-%COMP%]   .contact-section[_ngcontent-%COMP%]   .client-logo[_ngcontent-%COMP%]   .testimonial-slide-sec[_ngcontent-%COMP%]   ul.slick-dots[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:before,   .enquiry-page-form .contact-section .client-logo .testimonial-slide-sec ul.slick-dots li.slick-active button:before{opacity:0}  .enquiry-page-form .contact-section .client-logo .client-image a:hover{opacity:.8}  .form_brand .email-msg-alert{font-size:14px;line-height:16px;color:#00b762;margin-top:10px;margin-bottom:0}  .form_brand .email-msg-alert .fa{font-size:18px;margin-right:3px}  .footer-nl-form{overflow:hidden;position:relative;background:#fff}  .content_bottom{background:0 0;z-index:1}.enquiry-page-form[_ngcontent-%COMP%]   .contact-section[_ngcontent-%COMP%]   .contact-form-sec[_ngcontent-%COMP%]   .budget-group[_ngcontent-%COMP%]{display:flex;display:-ms-flexbox}.enquiry-page-form[_ngcontent-%COMP%]   .contact-section[_ngcontent-%COMP%]   .contact-form-sec[_ngcontent-%COMP%]   .budget-group[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]{width:100%}.enquiry-page-form[_ngcontent-%COMP%]   .contact-section[_ngcontent-%COMP%]   .contact-form-sec[_ngcontent-%COMP%]   .budget-group[_ngcontent-%COMP%]   .minimum-budget[_ngcontent-%COMP%]{margin-right:15px}  .enquiry-page-form .contact-section .contact-form-sec .group.file-upload-sec .projectfileupload{position:relative;width:100%;height:40px;border:1px solid #d9dee2;background:#fff}  .enquiry-page-form .contact-section .contact-form-sec .group.file-upload-sec .projectfileupload.has_danger{border:1px solid red!important}  .enquiry-page-form .contact-section .contact-form-sec .group.file-upload-sec .projectfileupload p{width:100%;height:100%;text-align:center;color:#252b33;font-size:14px;line-height:37px;font-weight:400;margin-bottom:0}  .enquiry-page-form .contact-section .contact-form-sec .group.file-upload-sec .projectfileupload input{position:absolute;margin:0;padding:0;width:100%;height:100%;outline:0;opacity:0;cursor:pointer}  .enquiry-page-form .contact-section .contact-form-sec .group.file-upload-sec .projectfileupload .fa{color:#f13c31!important;position:absolute;right:0;top:0;cursor:pointer;padding:12px}  .enquiry-page-form .contact-section .contact-form-sec .group.file-upload-sec p.upload-file-size{color:#252b33;font-size:11px;line-height:22px;margin:3px 0 0}  .enquiry-page-form .contact-section .contact-form-sec .group.file-upload-sec p.upload-file-size.error-validation{color:red!important}.copyright-recaptcha[_ngcontent-%COMP%]{width:85%;margin-top:15px}.copyright-recaptcha[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;line-height:18px;color:#252b33;margin-bottom:0}.copyright-recaptcha[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#f13c31}.btn.focus[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:focus{box-shadow:none}.all-field-error[_ngcontent-%COMP%]{color:#f13c31;font-size:16px;font-weight:600;margin-bottom:0}  .theme-black .footer-nl-form{background:#000}  .theme-black .enquiry-page-form .contact-section .client-logo h4{color:#fff}  .theme-black .enquiry-page-form .contact-section .required-sec span.secure{color:#fff}.theme-black[_ngcontent-%COMP%]   .enquiry-page-form[_ngcontent-%COMP%]   .contact-section[_ngcontent-%COMP%]   .client-logo[_ngcontent-%COMP%]   .testimonial-slide-sec[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   p[_ngcontent-%COMP%],   .theme-black .enquiry-page-form .contact-section .client-logo .testimonial-slide-sec .slide h4{color:#fff}  .theme-black .enquiry-page-form .contact-section .client-logo .testimonial-slide-sec .slide h6{color:rgba(255,255,255,.5)}  .theme-black .enquiry-page-form .contact-section .contact-form-sec .group label span{color:red!important}.theme-black[_ngcontent-%COMP%]   .enquiry-page-form[_ngcontent-%COMP%]   .contact-section[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%],   .theme-black .enquiry-page-form .contact-section .header-main .tag-line h2{color:#252b33}  .theme-black .enquiry-page-form .contact-section .client-logo .testimonial-slide-sec .slick-slide{background:#202020}  .theme-black .enquiry-page-form .contact-section .contact-form-sec form.form_brand{background-color:#202020}  .theme-black .enquiry-page-form .contact-section .contact-form-sec .group label{color:#fff}  .theme-black .enquiry-page-form .contact-section .contact-form-sec input,   .theme-black .enquiry-page-form .contact-section .contact-form-sec select,   .theme-black .enquiry-page-form .contact-section .contact-form-sec textarea{background-color:#222;border:1px solid rgba(255,255,255,.1);color:#fff}  .theme-black .enquiry-page-form .contact-section .contact-form-sec .bottom-area .secure-ftr{color:#fff}  .theme-black .intl-tel-input.separate-dial-code .selected-dial-code{color:#fff}  .theme-black .intl-tel-input .country-list{background-color:#202020;border:1px solid rgba(255,255,255,.1)}  .theme-black .intl-tel-input .country-list .country{background-color:#222}  .theme-black .intl-tel-input .country-list .country.highlight{background-color:#000}  .theme-black .intl-tel-input .selected-flag .iti-arrow{background:0 0;border-top:4px solid rgba(255,255,255,.5)}  .theme-black .form_brand .email-msg-alert{color:#00b762!important}  .theme-black .enquiry-page-form .contact-section .contact-form-sec select{background:url(drop-down-arrow-white.091f075846c8688954f4.svg) right 15px center no-repeat #222}.theme-black[_ngcontent-%COMP%]   .enquiry-page-form[_ngcontent-%COMP%]   .contact-section[_ngcontent-%COMP%]   .contact-form-sec[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-input-placeholder,   .theme-black .enquiry-page-form .contact-section .contact-form-sec input::-webkit-input-placeholder{color:rgba(255,255,255,.5)}.theme-black[_ngcontent-%COMP%]   .enquiry-page-form[_ngcontent-%COMP%]   .contact-section[_ngcontent-%COMP%]   .contact-form-sec[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-input-placeholder,   .theme-black .enquiry-page-form .contact-section .contact-form-sec input::-moz-placeholder{color:rgba(255,255,255,.5)}  .theme-black .contact-form-sec .group input:focus,   .theme-black .contact-form-sec .group select:focus,   .theme-black .contact-form-sec .group textarea:focus{background-color:#202020!important}  .theme-black .enquiry-page-form .contact-section .header-main .header-part{border-bottom:1px solid rgba(255,255,255,.1)}  .theme-black .go-back-button a{color:#fff!important}  .theme-black .enquiry-page-form .contact-section .client-logo svg g{fill:#fff}  .theme-black .enquiry-page-form .contact-section .header-main .header-part .logo svg g{fill:#fff}  .theme-black .portfolio-bottom-sec{background:#202020}  .theme-black .portfolio-bottom-sec .portfolio-form input,   .theme-black .portfolio-bottom-sec .portfolio-form textarea{background:#1b1b1b;color:#fff;border:1px solid rgba(255,255,255,.1)}  .enquiry-page-form .contact-section .client-logo img{width:80px;margin:10px 0}  .theme-black .enquiry-page-form .contact-section .copyright .copyright-text{border-top:1px solid rgba(255,255,255,.1)}  #lets-talk.lets-talk{z-index:999999;margin:70px auto}  #lets-talk.lets-talk h3{color:#f13c31;font-size:48px;margin-bottom:35px;font-weight:600;position:relative;display:inline-block;padding-bottom:40px}  #lets-talk.lets-talk h3::before{position:absolute;content:'';width:67px;border-bottom:1px solid #d1d2d4;left:0;bottom:0}.lets-talk[_ngcontent-%COMP%]   .q_icon_with_title[_ngcontent-%COMP%]   .icon_text_holder[_ngcontent-%COMP%]   .icon_title[_ngcontent-%COMP%]{font-weight:400;margin:0 0 10px}.contact-details[_ngcontent-%COMP%]{color:#252b33;font-size:26px}.nl-form[_ngcontent-%COMP%]   a.nl-field-toggle[_ngcontent-%COMP%],   #lets-talk.lets-talk .contact-details a{color:#252b33;border-color:#252b33;line-height:1.5;border-bottom:1px solid #8a959e;font-size:26px;text-transform:capitalize}  .enquiry-page-form .contact-section .client-logo svg{width:90px;margin:10px 0}  .theme-black .enquiry-page-form .contact-section .contact-form-sec .group.file-upload-sec .projectfileupload{background:#202020;border:1px solid rgba(255,255,255,.1)}  .theme-black b,   .theme-black blockquote,   .theme-black center,   .theme-black h1,   .theme-black h2,   .theme-black h3,   .theme-black h4,   .theme-black h5,   .theme-black h6,   .theme-black li,   .theme-black li a,   .theme-black ol,   .theme-black p,   .theme-black span,   .theme-black strong,   .theme-black u,   .theme-black ul{color:#fff!important}  .theme-black{background:#000}  .theme-black .cd-modal.model-show{background-color:#000}  .theme-black .thankyou-popup .thankyou-content ul li{color:#00ff0a!important}  .theme-black .thankyou-popup .popup-close-ic a svg g{fill:#fff}.theme-black[_ngcontent-%COMP%]     .portfolio-bottom-sec{background:#202020}.theme-black[_ngcontent-%COMP%]     .portfolio-bottom-sec .portfolio-form input, .theme-black[_ngcontent-%COMP%]     .portfolio-bottom-sec .portfolio-form textarea{background:#1b1b1b;color:#fff;border:1px solid rgba(255,255,255,.1)}.theme-black[_ngcontent-%COMP%]     .portfolio-bottom-sec .portfolio-form .has-danger input, .theme-black[_ngcontent-%COMP%]     .portfolio-bottom-sec .portfolio-form .has-danger textarea{border:1px solid red}  .theme-black .thankyou-popup .thankyou-content .green-btn a span{transition:all .3s ease-in-out}  .theme-black .thankyou-popup .thankyou-content .green-btn a:hover span{color:#f13c31!important}  .theme-black .enquiry-page-form .bottom-form-title{color:#f13c31!important}  .theme-black .content_bottom{border-top:1px solid rgba(255,255,255,.1)}  .theme-black.enquiry-page-sec .content_bottom{border-top:0}  .portfolio-bottom-sec .thankyou-popup .popup-close-ic a svg g{fill:#fff}.theme-black[_ngcontent-%COMP%]   .client-testimonial-section[_ngcontent-%COMP%]   .testimonial-block[_ngcontent-%COMP%]   .testimonial-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#f13c31!important}.theme-black[_ngcontent-%COMP%]   .client-testimonial-section[_ngcontent-%COMP%]{border-bottom:1px solid rgba(255,255,255,.1)}@media only screen and (max-width:1280px){  .enquiry-page-form .contact-section .client-logo .testimonial-slide-sec ul.slick-dots{margin:0 10px}}@media only screen and (max-width:1210px){  .enquiry-page-form .contact-section .client-logo{width:420px}  .enquiry-page-form .contact-section .contact-form-sec{width:460px}}@media only screen and (max-width:1024px){  .portfolio-bottom-sec .portfolio-footer-left h2{font-size:30px;line-height:40px}  .enquiry-page-form .contact-section .contact-form-sec{width:400px}  .enquiry-page-form .contact-section .client-logo{width:400px;padding:40px 0 0}  .enquiry-page-sec #lets-talk.lets-talk{margin:10px 40px!important}  .enquiry-page-sec{height:auto}  .enquiry-page-form .contact-section .contact-form-sec input.name{width:48.8%}  .enquiry-page-width{width:100%;padding:0}.enquiry-page-form[_ngcontent-%COMP%]   .contact-section[_ngcontent-%COMP%]   .contact-form-sec[_ngcontent-%COMP%]   .budget-group[_ngcontent-%COMP%]{display:block}.enquiry-page-form[_ngcontent-%COMP%]   .contact-section[_ngcontent-%COMP%]   .contact-form-sec[_ngcontent-%COMP%]   .budget-group[_ngcontent-%COMP%]   .minimum-budget[_ngcontent-%COMP%]{margin-right:0}.copyright-recaptcha[_ngcontent-%COMP%]{width:100%}}@media only screen and (max-width:979px){  .enquiry-page-form .contact-section .contact-form-sec{width:100%}  .enquiry-page-form .contact-section .client-logo{width:100%}  .enquiry-page-form .contact-section .required-sec{text-align:center}  .enquiry-page-form .contact-section .required-sec span.secure{float:none}  .enquiry-page-form .contact-section .client-logo .testimonial-slide-sec ul.slick-dots{margin:10px}  .thankyou-popup .thankyou-content{margin-top:60px}  .portfolio-bottom-sec .thankyou-popup .thankyou-content{margin-top:10px}  .portfolio-bottom-sec .cd-modal .thankyou-popup p{margin:0}  .portfolio-bottom-sec .thankyou-popup .thankyou-content .green-btn{margin-top:20px}}@media only screen and (max-width:767px){  .portfolio-bottom-sec .portfolio-footer-left h2{font-size:26px;line-height:36px}  .portfolio-bottom-sec{margin-top:30px}  .portfolio-bottom-sec .portfolio-footer-left{padding:60px 15px 25px}  .portfolio-bottom-sec .portfolio-footer-right{display:none}  .cd-modal-content .thanks-text-outer{max-width:100%;text-align:center}  .cd-modal-content .thanks-text h2{font-size:40px!important}  .cd-modal-content .thanks-text h5{font-size:16px;line-height:22px}#lets-talk.lets-talk[_ngcontent-%COMP%]   .contact-details[_ngcontent-%COMP%]   .cdn-btn-set[_ngcontent-%COMP%]   a.cd-btn[_ngcontent-%COMP%],   .cd-modal-content .thanks-text .cdn-btn-set .cd-btn{float:none}  #lets-talk.lets-talk .contact-details .cdn-btn-set a.cd-btn.cd-link,   .thanks-text .cdn-btn-set .cd-btn.cd-link{display:inline}  .enquiry-page-form .sidebar-sec .contact-form-sec input.name{width:47.6%}  .enquiry-page-form .sidebar-sec .contact-form-sec input.contact-number{padding-left:145px!important}  .enquiry-page-form .sidebar-sec .cd-modal-content .thanks-text h2{font-size:30px!important}  .enquiry-page-form .sidebar-sec .cd-modal-content .thanks-text a.cd-btn,   .enquiry-page-form .sidebar-sec .cdn-btn-set a.cd-btn{padding:8px 10px;font-size:12px!important}  .enquiry-page-form .sidebar-sec .contact-form-sec form.form_brand{padding:0}  .enquiry-page-form .sidebar-sec .cd-modal-content .thanks-text-outer{text-align:left}  .enquiry-page-form .sidebar-sec .cd-modal-content .thanks-text h5{font-size:14px;line-height:20px}  .enquiry-page-form .contact-section .contact-form-sec{padding:0}  .enquiry-page-form .contact-section .client-logo{display:none}  .enquiry-page-form .contact-section .contact-form-sec input.contact-number{width:100%}  .enquiry-page-form .contact-section .contact-form-sec .required-sec span.required,   .enquiry-page-form .contact-section .contact-form-sec .required-sec span.secure{display:block;float:none}  .enquiry-page-form .contact-section .contact-form-sec .bottom-area .submit-btn .submit{margin:0}  .enquiry-page-form .header-title h4{font-size:14px;margin-top:10px}  .enquiry-page-form .contact-section .contact-form-sec .bottom-area .captcha{float:none}  .enquiry-page-form .header-title-enuiry-page{float:none;width:100%;padding-top:10px}  .enquiry-page-form .header-logo{float:none;width:100%}  .enquiry-page-form .contact-section .contact-form-sec form.form_brand{padding:0;margin-bottom:0}  .enquiry-page-form .contact-section .header-main .header-part{padding:0 0 10px;border-bottom:1px solid #d2d9dd}  .enquiry-page-form .contact-section .contact-form-sec .bottom-area .secure-ftr{margin-top:30px;font-size:10px}  .enquiry-page-form .contact-section .required-sec{display:none}  .enquiry-page-form{background:#f1f4f5;padding:30px 15px 40px}  .enquiry-page-sec #lets-talk.lets-talk{margin:0!important}  .enquiry-page-sec{padding:0}  .enquiry-page-form .btm-form-title-sec{margin-bottom:30px}  .enquiry-page-form .btm-form-title-sec p,   .enquiry-page-form .contact-section .header-main h4{font-size:16px;line-height:26px}  .inquiry-btm-form.content_bottom{background:#f1f4f5}  .footer-nl-form{padding-bottom:0}  .theme-black .enquiry-page-form,   .theme-black .enquiry-page-form .contact-section .contact-form-sec form.form_brand,   .theme-black .inquiry-btm-form.content_bottom{background-color:#000}  .enquiry-page-form .contact-section .header-main .tag-line .vr-title{text-align:left}  .enquiry-page-form .contact-section .contact-form-sec input.name{width:100%;float:none;margin-right:0}  .enquiry-page-form .contact-section .contact-form-sec .first-name{margin-bottom:15px}  #lets-talk.lets-talk{margin:0 auto}.copyright-recaptcha[_ngcontent-%COMP%]{padding:20px 0 0}.enquiry-page-form[_ngcontent-%COMP%]   .contact-section[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]{margin-top:30px}  .thankyou-popup{height:auto;padding:100px 0 60px}  .thankyou-popup .popup-close-ic{top:20px;right:20px}  .enquiry-page-form .contact-section .copyright .copyright-text{padding-top:20px}}@media (max-width:360px){  .enquiry-page-form .sidebar-sec .contact-form-sec input.name{width:47.2%}}"]],
            data: {}
        });
        function p(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 1, "label", [["class", "required danger-color"]], null, null, null, null, null)), (l()(),
                    t["\u0275ted"](-1, null, ["Please add atleast 15 characters"]))], null, null)
        }
        function g(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 1, "label", [["class", "required all-field-error"]], null, null, null, null, null)), (l()(),
                    t["\u0275ted"](-1, null, ["All fields are required."]))], null, null)
        }
        function m(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 2, "button", [["class", "submit btn"], ["disabled", ""], ["id", "submitPortFolioForm"], ["type", "button"]], null, null, null, null, null)), (l()(),
                    t["\u0275ted"](-1, null, ["Sending "])), (l()(),
                        t["\u0275eld"](2, 0, null, null, 0, "span", [["class", "cd-modal-bg"]], null, null, null, null, null))], null, null)
        }
        function f(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 2, "button", [["class", "submit btn"], ["id", "portfolio-en-submit-btn"], ["type", "submit"]], null, [[null, "click"]], function (l, n, e) {
                    var o = !0
                        , u = l.component;
                    return "click" === n && (o = !1 !== u.addPortfolioForm(t["\u0275nov"](l.parent, 11), u.portfolioForm, t["\u0275nov"](l.parent, 69)) && o),
                        o
                }, null, null)), (l()(),
                    t["\u0275ted"](-1, null, ["Submit "])), (l()(),
                        t["\u0275eld"](2, 0, null, null, 0, "span", [["class", "cd-modal-bg"]], null, null, null, null, null))], null, null)
        }
        function h(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 15, "div", [["class", "container"]], null, null, null, null, null)), (l()(),
                    t["\u0275eld"](1, 0, null, null, 11, "div", [["class", "row align-items-center"]], null, null, null, null, null)), (l()(),
                        t["\u0275eld"](2, 0, null, null, 3, "div", [["class", "col-12 col-lg-6"]], null, null, null, null, null)), (l()(),
                            t["\u0275eld"](3, 0, null, null, 2, "div", [["class", "thankyou-animation"]], null, null, null, null, null)), (l()(),
                                t["\u0275eld"](4, 0, null, null, 1, "lottie-animation-view", [], null, null, null, o.b, o.a)), t["\u0275did"](5, 114688, null, 0, u.a, [t.PLATFORM_ID], {
                                    options: [0, "options"],
                                    width: [1, "width"],
                                    height: [2, "height"]
                                }, null), (l()(),
                                    t["\u0275eld"](6, 0, null, null, 6, "div", [["class", "col-12 col-lg-6"]], null, null, null, null, null)), (l()(),
                                        t["\u0275eld"](7, 0, null, null, 5, "div", [["class", "thankyou-content"]], null, null, null, null, null)), (l()(),
                                            t["\u0275eld"](8, 0, null, null, 0, "div", [], [[8, "innerHTML", 1]], null, null, null, null)), (l()(),
                                                t["\u0275eld"](9, 0, null, null, 3, "div", [["class", "green-btn"]], null, null, null, null, null)), (l()(),
                                                    t["\u0275eld"](10, 0, null, null, 2, "a", [["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (l()(),
                                                        t["\u0275ted"](-1, null, ["Continue "])), (l()(),
                                                            t["\u0275eld"](12, 0, null, null, 0, "span", [["_ngcontent-c1", ""], ["class", "fa fa-long-arrow-right"]], null, null, null, null, null)), (l()(),
                                                                t["\u0275eld"](13, 0, null, null, 2, "div", [["class", "popup-close-ic"]], null, null, null, null, null)), (l()(),
                                                                    t["\u0275eld"](14, 0, null, null, 1, "a", [], null, [[null, "click"]], function (l, n, e) {
                                                                        var t = !0;
                                                                        return "click" === n && (t = !1 !== l.component.noThanks() && t),
                                                                            t
                                                                    }, null, null)), (l()(),
                                                                        t["\u0275eld"](15, 0, null, null, 0, "img", [["alt", "Close"], ["class", "svg-convert"], ["src", "../../assets/images/close-ic.svg"]], null, [[null, "load"]], function (l, n, e) {
                                                                            var t = !0;
                                                                            return "load" === n && (t = !1 !== l.component.commonService.callSVGConverterScript(1, 0) && t),
                                                                                t
                                                                        }, null, null))], function (l, n) {
                                                                            var e = n.component;
                                                                            l(n, 5, 0, e.lottieConfig, e.auto, e.auto)
                                                                        }, function (l, n) {
                                                                            var e = n.component;
                                                                            l(n, 8, 0, null == e.thankYou[0] ? null : null == e.thankYou[0].acf ? null : e.thankYou[0].acf.raw_html),
                                                                                l(n, 10, 0, t["\u0275inlineInterpolate"](1, "", e.next_url, ""))
                                                                        })
        }
        function v(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 94, "div", [["class", "portfolio-bottom-sec"]], null, null, null, null, null)), (l()(),
                    t["\u0275eld"](1, 0, null, null, 93, "div", [["class", "grid_section"]], null, null, null, null, null)), (l()(),
                        t["\u0275eld"](2, 0, null, null, 85, "div", [["class", "container"]], null, null, null, null, null)), (l()(),
                            t["\u0275eld"](3, 0, null, null, 84, "div", [["class", "row align-items-center"]], null, null, null, null, null)), (l()(),
                                t["\u0275eld"](4, 0, null, null, 81, "div", [["class", "col-md-5 portfolio-footer-left"]], null, null, null, null, null)), (l()(),
                                    t["\u0275eld"](5, 0, null, null, 1, "h2", [], null, null, null, null, null)), (l()(),
                                        t["\u0275ted"](-1, null, ["Download Our Exclusive Portfolio"])), (l()(),
                                            t["\u0275eld"](7, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(),
                                                t["\u0275ted"](-1, null, ["Receive our portfolio e-book instantly, right in your inbox."])), (l()(),
                                                    t["\u0275eld"](9, 0, null, null, 76, "form", [["class", "portfolio-form cd-section thanks-popup"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (l, n, e) {
                                                        var o = !0;
                                                        return "submit" === n && (o = !1 !== t["\u0275nov"](l, 11).onSubmit(e) && o),
                                                            "reset" === n && (o = !1 !== t["\u0275nov"](l, 11).onReset() && o),
                                                            o
                                                    }, null, null)), t["\u0275did"](10, 16384, null, 0, i.s, [], null, null), t["\u0275did"](11, 4210688, [["portfolioform", 4]], 0, i.l, [[8, null], [8, null]], null, null), t["\u0275prd"](2048, null, i.b, null, [i.l]), t["\u0275did"](13, 16384, null, 0, i.k, [[4, i.b]], null, null), (l()(),
                                                        t["\u0275eld"](14, 0, null, null, 11, "div", [["class", "col-one mr-btm"]], null, null, null, null, null)), t["\u0275did"](15, 278528, null, 0, a.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                                                            klass: [0, "klass"],
                                                            ngClass: [1, "ngClass"]
                                                        }, null), t["\u0275pod"](16, {
                                                            "has-danger": 0
                                                        }), (l()(),
                                                            t["\u0275eld"](17, 0, null, null, 8, "input", [["class", "full-name"], ["maxlength", "100"], ["name", "full_name"], ["placeholder", "First Name"], ["required", ""], ["type", "text"]], [[1, "required", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "keypress"], [null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (l, n, e) {
                                                                var o = !0
                                                                    , u = l.component;
                                                                return "input" === n && (o = !1 !== t["\u0275nov"](l, 18)._handleInput(e.target.value) && o),
                                                                    "blur" === n && (o = !1 !== t["\u0275nov"](l, 18).onTouched() && o),
                                                                    "compositionstart" === n && (o = !1 !== t["\u0275nov"](l, 18)._compositionStart() && o),
                                                                    "compositionend" === n && (o = !1 !== t["\u0275nov"](l, 18)._compositionEnd(e.target.value) && o),
                                                                    "keypress" === n && (o = !1 !== u.clsAlphaOnly(e) && o),
                                                                    "ngModelChange" === n && (o = !1 !== (u.portfolioForm.full_name = e) && o),
                                                                    o
                                                            }, null, null)), t["\u0275did"](18, 16384, null, 0, i.c, [t.Renderer2, t.ElementRef, [2, i.a]], null, null), t["\u0275did"](19, 16384, null, 0, i.p, [], {
                                                                required: [0, "required"]
                                                            }, null), t["\u0275did"](20, 540672, null, 0, i.e, [], {
                                                                maxlength: [0, "maxlength"]
                                                            }, null), t["\u0275prd"](1024, null, i.g, function (l, n) {
                                                                return [l, n]
                                                            }, [i.p, i.e]), t["\u0275prd"](1024, null, i.h, function (l) {
                                                                return [l]
                                                            }, [i.c]), t["\u0275did"](23, 671744, [["full_name", 4]], 0, i.m, [[2, i.b], [6, i.g], [8, null], [6, i.h]], {
                                                                name: [0, "name"],
                                                                model: [1, "model"]
                                                            }, {
                                                                update: "ngModelChange"
                                                            }), t["\u0275prd"](2048, null, i.i, null, [i.m]), t["\u0275did"](25, 16384, null, 0, i.j, [[4, i.i]], null, null), (l()(),
                                                                t["\u0275eld"](26, 0, null, null, 11, "div", [["class", "col-one"]], null, null, null, null, null)), t["\u0275did"](27, 278528, null, 0, a.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                                                                    klass: [0, "klass"],
                                                                    ngClass: [1, "ngClass"]
                                                                }, null), t["\u0275pod"](28, {
                                                                    "has-danger": 0
                                                                }), (l()(),
                                                                    t["\u0275eld"](29, 0, null, null, 8, "input", [["class", "form-control"], ["name", "email"], ["pattern", "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,50})+$"], ["placeholder", "Your Email Address"], ["required", ""], ["type", "email"]], [[1, "required", 0], [1, "pattern", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "keypress"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (l, n, e) {
                                                                        var o = !0
                                                                            , u = l.component;
                                                                        return "input" === n && (o = !1 !== t["\u0275nov"](l, 30)._handleInput(e.target.value) && o),
                                                                            "blur" === n && (o = !1 !== t["\u0275nov"](l, 30).onTouched() && o),
                                                                            "compositionstart" === n && (o = !1 !== t["\u0275nov"](l, 30)._compositionStart() && o),
                                                                            "compositionend" === n && (o = !1 !== t["\u0275nov"](l, 30)._compositionEnd(e.target.value) && o),
                                                                            "ngModelChange" === n && (o = !1 !== (u.portfolioForm.email = e) && o),
                                                                            "keypress" === n && (o = !1 !== u.clsAlphaOnlyEmail(e) && o),
                                                                            o
                                                                    }, null, null)), t["\u0275did"](30, 16384, null, 0, i.c, [t.Renderer2, t.ElementRef, [2, i.a]], null, null), t["\u0275did"](31, 16384, null, 0, i.p, [], {
                                                                        required: [0, "required"]
                                                                    }, null), t["\u0275did"](32, 540672, null, 0, i.o, [], {
                                                                        pattern: [0, "pattern"]
                                                                    }, null), t["\u0275prd"](1024, null, i.g, function (l, n) {
                                                                        return [l, n]
                                                                    }, [i.p, i.o]), t["\u0275prd"](1024, null, i.h, function (l) {
                                                                        return [l]
                                                                    }, [i.c]), t["\u0275did"](35, 671744, [["email", 4]], 0, i.m, [[2, i.b], [6, i.g], [8, null], [6, i.h]], {
                                                                        name: [0, "name"],
                                                                        model: [1, "model"]
                                                                    }, {
                                                                        update: "ngModelChange"
                                                                    }), t["\u0275prd"](2048, null, i.i, null, [i.m]), t["\u0275did"](37, 16384, null, 0, i.j, [[4, i.i]], null, null), (l()(),
                                                                        t["\u0275eld"](38, 0, null, null, 11, "div", [["class", "col-one"]], null, null, null, null, null)), t["\u0275did"](39, 278528, null, 0, a.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                                                                            klass: [0, "klass"],
                                                                            ngClass: [1, "ngClass"]
                                                                        }, null), t["\u0275pod"](40, {
                                                                            "has-danger": 0
                                                                        }), (l()(),
                                                                            t["\u0275eld"](41, 0, null, null, 8, "input", [["class", "form-control"], ["maxlength", "15"], ["name", "contact_number"], ["placeholder", "Phone"], ["required", ""], ["type", "tel"]], [[1, "required", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "keypress"], [null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (l, n, e) {
                                                                                var o = !0
                                                                                    , u = l.component;
                                                                                return "input" === n && (o = !1 !== t["\u0275nov"](l, 42)._handleInput(e.target.value) && o),
                                                                                    "blur" === n && (o = !1 !== t["\u0275nov"](l, 42).onTouched() && o),
                                                                                    "compositionstart" === n && (o = !1 !== t["\u0275nov"](l, 42)._compositionStart() && o),
                                                                                    "compositionend" === n && (o = !1 !== t["\u0275nov"](l, 42)._compositionEnd(e.target.value) && o),
                                                                                    "keypress" === n && (o = !1 !== u.AllowNumbersOnly(e) && o),
                                                                                    "ngModelChange" === n && (o = !1 !== (u.portfolioForm.contact_number = e) && o),
                                                                                    "keypress" === n && (o = !1 !== u.isNumberFormat(u.event) && o),
                                                                                    o
                                                                            }, null, null)), t["\u0275did"](42, 16384, null, 0, i.c, [t.Renderer2, t.ElementRef, [2, i.a]], null, null), t["\u0275did"](43, 16384, null, 0, i.p, [], {
                                                                                required: [0, "required"]
                                                                            }, null), t["\u0275did"](44, 540672, null, 0, i.e, [], {
                                                                                maxlength: [0, "maxlength"]
                                                                            }, null), t["\u0275prd"](1024, null, i.g, function (l, n) {
                                                                                return [l, n]
                                                                            }, [i.p, i.e]), t["\u0275prd"](1024, null, i.h, function (l) {
                                                                                return [l]
                                                                            }, [i.c]), t["\u0275did"](47, 671744, [["contact_number", 4]], 0, i.m, [[2, i.b], [6, i.g], [8, null], [6, i.h]], {
                                                                                name: [0, "name"],
                                                                                model: [1, "model"]
                                                                            }, {
                                                                                update: "ngModelChange"
                                                                            }), t["\u0275prd"](2048, null, i.i, null, [i.m]), t["\u0275did"](49, 16384, null, 0, i.j, [[4, i.i]], null, null), (l()(),
                                                                                t["\u0275eld"](50, 0, null, null, 13, "div", [["class", "col-one"]], null, null, null, null, null)), t["\u0275did"](51, 278528, null, 0, a.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                                                                                    klass: [0, "klass"],
                                                                                    ngClass: [1, "ngClass"]
                                                                                }, null), t["\u0275pod"](52, {
                                                                                    "has-danger": 0
                                                                                }), (l()(),
                                                                                    t["\u0275eld"](53, 0, null, null, 8, "textarea", [["class", "contact_mes form-control"], ["data-min-rows", "1"], ["minlength", "15"], ["name", "message"], ["placeholder", "Message"], ["required", ""], ["rows", "2"]], [[1, "required", 0], [1, "minlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "keypress"], [null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (l, n, e) {
                                                                                        var o = !0
                                                                                            , u = l.component;
                                                                                        return "input" === n && (o = !1 !== t["\u0275nov"](l, 54)._handleInput(e.target.value) && o),
                                                                                            "blur" === n && (o = !1 !== t["\u0275nov"](l, 54).onTouched() && o),
                                                                                            "compositionstart" === n && (o = !1 !== t["\u0275nov"](l, 54)._compositionStart() && o),
                                                                                            "compositionend" === n && (o = !1 !== t["\u0275nov"](l, 54)._compositionEnd(e.target.value) && o),
                                                                                            "keypress" === n && (o = !1 !== u.clsAlphaOnly(e) && o),
                                                                                            "ngModelChange" === n && (o = !1 !== (u.portfolioForm.message = e) && o),
                                                                                            o
                                                                                    }, null, null)), t["\u0275did"](54, 16384, null, 0, i.c, [t.Renderer2, t.ElementRef, [2, i.a]], null, null), t["\u0275did"](55, 16384, null, 0, i.p, [], {
                                                                                        required: [0, "required"]
                                                                                    }, null), t["\u0275did"](56, 540672, null, 0, i.f, [], {
                                                                                        minlength: [0, "minlength"]
                                                                                    }, null), t["\u0275prd"](1024, null, i.g, function (l, n) {
                                                                                        return [l, n]
                                                                                    }, [i.p, i.f]), t["\u0275prd"](1024, null, i.h, function (l) {
                                                                                        return [l]
                                                                                    }, [i.c]), t["\u0275did"](59, 671744, [["message", 4]], 0, i.m, [[2, i.b], [6, i.g], [8, null], [6, i.h]], {
                                                                                        name: [0, "name"],
                                                                                        model: [1, "model"]
                                                                                    }, {
                                                                                        update: "ngModelChange"
                                                                                    }), t["\u0275prd"](2048, null, i.i, null, [i.m]), t["\u0275did"](61, 16384, null, 0, i.j, [[4, i.i]], null, null), (l()(),
                                                                                        t["\u0275and"](16777216, null, null, 1, null, p)), t["\u0275did"](63, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                                            ngIf: [0, "ngIf"]
                                                                                        }, null), (l()(),
                                                                                            t["\u0275eld"](64, 0, null, null, 21, "div", [["class", "captcha-outer clearfix"]], null, null, null, null, null)), (l()(),
                                                                                                t["\u0275eld"](65, 0, null, null, 11, "div", [["class", "col-one mr-top cd-modal-action"]], null, null, null, null, null)), (l()(),
                                                                                                    t["\u0275eld"](66, 0, null, null, 9, "div", [["class", "button cd-modal-action capcha-next"]], null, null, null, null, null)), (l()(),
                                                                                                        t["\u0275eld"](67, 0, null, null, 4, "div", [["class", "captcha-left"]], null, null, null, null, null)), (l()(),
                                                                                                            t["\u0275eld"](68, 0, null, null, 1, "re-captcha", [["id", "hiddenRecaptcha"], ["name", "hiddenRecaptcha"], ["required", ""], ["size", "invisible"]], [[1, "id", 0]], [[null, "resolved"]], function (l, n, e) {
                                                                                                                var t = !0;
                                                                                                                return "resolved" === n && (t = !1 !== l.component.resolved(e) && t),
                                                                                                                    t
                                                                                                            }, r.b, r.a)), t["\u0275did"](69, 4374528, [[1, 4], ["recaptchaRef", 4]], 0, d.g, [t.ElementRef, d.i, t.NgZone, [2, d.d]], {
                                                                                                                id: [0, "id"],
                                                                                                                siteKey: [1, "siteKey"],
                                                                                                                size: [2, "size"]
                                                                                                            }, {
                                                                                                                resolved: "resolved"
                                                                                                            }), (l()(),
                                                                                                                t["\u0275and"](16777216, null, null, 1, null, g)), t["\u0275did"](71, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                                                                    ngIf: [0, "ngIf"]
                                                                                                                }, null), (l()(),
                                                                                                                    t["\u0275and"](16777216, null, null, 1, null, m)), t["\u0275did"](73, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                                                                        ngIf: [0, "ngIf"]
                                                                                                                    }, null), (l()(),
                                                                                                                        t["\u0275and"](16777216, null, null, 1, null, f)), t["\u0275did"](75, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                                                                            ngIf: [0, "ngIf"]
                                                                                                                        }, null), (l()(),
                                                                                                                            t["\u0275eld"](76, 0, null, null, 0, "div", [["style", "clear:both;"]], null, null, null, null, null)), (l()(),
                                                                                                                                t["\u0275eld"](77, 0, null, null, 8, "div", [["class", "copyright-recaptcha"]], null, null, null, null, null)), (l()(),
                                                                                                                                    t["\u0275eld"](78, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(),
                                                                                                                                        t["\u0275ted"](-1, null, ["This site is protected by reCAPTCHA and the Google "])), (l()(),
                                                                                                                                            t["\u0275eld"](80, 0, null, null, 1, "a", [["href", "https://policies.google.com/privacy"]], null, null, null, null, null)), (l()(),
                                                                                                                                                t["\u0275ted"](-1, null, ["Privacy Policy"])), (l()(),
                                                                                                                                                    t["\u0275ted"](-1, null, [" and "])), (l()(),
                                                                                                                                                        t["\u0275eld"](83, 0, null, null, 1, "a", [["href", "https://policies.google.com/terms"]], null, null, null, null, null)), (l()(),
                                                                                                                                                            t["\u0275ted"](-1, null, ["Terms of Service"])), (l()(),
                                                                                                                                                                t["\u0275ted"](-1, null, [" apply."])), (l()(),
                                                                                                                                                                    t["\u0275eld"](86, 0, null, null, 1, "div", [["class", "col-md-7 portfolio-footer-right"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                        t["\u0275eld"](87, 0, null, null, 0, "img", [["alt", "Portfolio Book"]], [[8, "src", 4]], null, null, null, null)), (l()(),
                                                                                                                                                                            t["\u0275eld"](88, 0, null, null, 6, "div", [["class", "cd-modal"]], null, null, null, null, null)), t["\u0275did"](89, 278528, null, 0, a.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                                                                                                                                                                                klass: [0, "klass"],
                                                                                                                                                                                ngClass: [1, "ngClass"]
                                                                                                                                                                            }, null), t["\u0275pod"](90, {
                                                                                                                                                                                "model-show": 0
                                                                                                                                                                            }), (l()(),
                                                                                                                                                                                t["\u0275eld"](91, 0, null, null, 3, "div", [["class", "cd-modal-content"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                                    t["\u0275eld"](92, 0, null, null, 2, "div", [["class", "thankyou-popup"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                                        t["\u0275and"](16777216, null, null, 1, null, h)), t["\u0275did"](94, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                                                                                                                                            ngIf: [0, "ngIf"]
                                                                                                                                                                                        }, null)], function (l, n) {
                                                                                                                                                                                            var e = n.component
                                                                                                                                                                                                , o = l(n, 16, 0, e.submitted && t["\u0275nov"](n, 23).invalid);
                                                                                                                                                                                            l(n, 15, 0, "col-one mr-btm", o),
                                                                                                                                                                                                l(n, 19, 0, ""),
                                                                                                                                                                                                l(n, 20, 0, "100"),
                                                                                                                                                                                                l(n, 23, 0, "full_name", e.portfolioForm.full_name);
                                                                                                                                                                                            var u = l(n, 28, 0, e.submitted && t["\u0275nov"](n, 35).invalid);
                                                                                                                                                                                            l(n, 27, 0, "col-one", u),
                                                                                                                                                                                                l(n, 31, 0, ""),
                                                                                                                                                                                                l(n, 32, 0, "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,50})+$"),
                                                                                                                                                                                                l(n, 35, 0, "email", e.portfolioForm.email);
                                                                                                                                                                                            var i = l(n, 40, 0, e.submitted && t["\u0275nov"](n, 47).invalid);
                                                                                                                                                                                            l(n, 39, 0, "col-one", i),
                                                                                                                                                                                                l(n, 43, 0, ""),
                                                                                                                                                                                                l(n, 44, 0, "15"),
                                                                                                                                                                                                l(n, 47, 0, "contact_number", e.portfolioForm.contact_number);
                                                                                                                                                                                            var a = l(n, 52, 0, e.submitted && t["\u0275nov"](n, 59).invalid);
                                                                                                                                                                                            l(n, 51, 0, "col-one", a),
                                                                                                                                                                                                l(n, 55, 0, ""),
                                                                                                                                                                                                l(n, 56, 0, "15"),
                                                                                                                                                                                                l(n, 59, 0, "message", e.portfolioForm.message),
                                                                                                                                                                                                l(n, 63, 0, (null == e.portfolioForm.message ? null : e.portfolioForm.message.length) < 15 && e.submitted),
                                                                                                                                                                                                l(n, 69, 0, "hiddenRecaptcha", e.captchaSiteKey, "invisible"),
                                                                                                                                                                                                l(n, 71, 0, e.fieldRequiredError),
                                                                                                                                                                                                l(n, 73, 0, e.showSendingButton),
                                                                                                                                                                                                l(n, 75, 0, !e.showSendingButton);
                                                                                                                                                                                            var r = l(n, 90, 0, e.success);
                                                                                                                                                                                            l(n, 89, 0, "cd-modal", r),
                                                                                                                                                                                                l(n, 94, 0, e.thankYou)
                                                                                                                                                                                        }, function (l, n) {
                                                                                                                                                                                            var e = n.component;
                                                                                                                                                                                            l(n, 9, 0, t["\u0275nov"](n, 13).ngClassUntouched, t["\u0275nov"](n, 13).ngClassTouched, t["\u0275nov"](n, 13).ngClassPristine, t["\u0275nov"](n, 13).ngClassDirty, t["\u0275nov"](n, 13).ngClassValid, t["\u0275nov"](n, 13).ngClassInvalid, t["\u0275nov"](n, 13).ngClassPending),
                                                                                                                                                                                                l(n, 17, 0, t["\u0275nov"](n, 19).required ? "" : null, t["\u0275nov"](n, 20).maxlength ? t["\u0275nov"](n, 20).maxlength : null, t["\u0275nov"](n, 25).ngClassUntouched, t["\u0275nov"](n, 25).ngClassTouched, t["\u0275nov"](n, 25).ngClassPristine, t["\u0275nov"](n, 25).ngClassDirty, t["\u0275nov"](n, 25).ngClassValid, t["\u0275nov"](n, 25).ngClassInvalid, t["\u0275nov"](n, 25).ngClassPending),
                                                                                                                                                                                                l(n, 29, 0, t["\u0275nov"](n, 31).required ? "" : null, t["\u0275nov"](n, 32).pattern ? t["\u0275nov"](n, 32).pattern : null, t["\u0275nov"](n, 37).ngClassUntouched, t["\u0275nov"](n, 37).ngClassTouched, t["\u0275nov"](n, 37).ngClassPristine, t["\u0275nov"](n, 37).ngClassDirty, t["\u0275nov"](n, 37).ngClassValid, t["\u0275nov"](n, 37).ngClassInvalid, t["\u0275nov"](n, 37).ngClassPending),
                                                                                                                                                                                                l(n, 41, 0, t["\u0275nov"](n, 43).required ? "" : null, t["\u0275nov"](n, 44).maxlength ? t["\u0275nov"](n, 44).maxlength : null, t["\u0275nov"](n, 49).ngClassUntouched, t["\u0275nov"](n, 49).ngClassTouched, t["\u0275nov"](n, 49).ngClassPristine, t["\u0275nov"](n, 49).ngClassDirty, t["\u0275nov"](n, 49).ngClassValid, t["\u0275nov"](n, 49).ngClassInvalid, t["\u0275nov"](n, 49).ngClassPending),
                                                                                                                                                                                                l(n, 53, 0, t["\u0275nov"](n, 55).required ? "" : null, t["\u0275nov"](n, 56).minlength ? t["\u0275nov"](n, 56).minlength : null, t["\u0275nov"](n, 61).ngClassUntouched, t["\u0275nov"](n, 61).ngClassTouched, t["\u0275nov"](n, 61).ngClassPristine, t["\u0275nov"](n, 61).ngClassDirty, t["\u0275nov"](n, 61).ngClassValid, t["\u0275nov"](n, 61).ngClassInvalid, t["\u0275nov"](n, 61).ngClassPending),
                                                                                                                                                                                                l(n, 68, 0, t["\u0275nov"](n, 69).id),
                                                                                                                                                                                                l(n, 87, 0, t["\u0275inlineInterpolate"](1, "", e.imageURL, "/wp-content/uploads/2020/02/our-work-book.png"))
                                                                                                                                                                                        })
        }
        function b(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 0, "img", [["alt", "Indianic"], ["src", "assets/images/indianic-black-logo.svg"]], null, null, null, null, null))], null, null)
        }
        function _(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 0, "img", [["alt", "Indianic"], ["src", "assets/images/indianic-white-logo.svg"]], null, null, null, null, null))], null, null)
        }
        function y(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 12, "div", [["class", "header-part"]], null, null, null, null, null)), (l()(),
                    t["\u0275eld"](1, 0, null, null, 6, "div", [["class", "logo"]], null, null, null, null, null)), (l()(),
                        t["\u0275eld"](2, 0, null, null, 5, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (l, n, e) {
                            var o = !0;
                            return "click" === n && (o = !1 !== t["\u0275nov"](l, 3).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && o),
                                o
                        }, null, null)), t["\u0275did"](3, 671744, null, 0, s.o, [s.m, s.a, a.LocationStrategy], {
                            routerLink: [0, "routerLink"]
                        }, null), (l()(),
                            t["\u0275and"](16777216, null, null, 1, null, b)), t["\u0275did"](5, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                ngIf: [0, "ngIf"]
                            }, null), (l()(),
                                t["\u0275and"](16777216, null, null, 1, null, _)), t["\u0275did"](7, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                    ngIf: [0, "ngIf"]
                                }, null), (l()(),
                                    t["\u0275eld"](8, 0, null, null, 3, "div", [["class", "go-back-button"]], null, null, null, null, null)), (l()(),
                                        t["\u0275eld"](9, 0, null, null, 2, "a", [], [[8, "href", 4]], null, null, null, null)), t["\u0275pad"](10, 1), (l()(),
                                            t["\u0275ted"](-1, null, ["Go Back"])), (l()(),
                                                t["\u0275eld"](12, 0, null, null, 0, "div", [["class", "clearfix"]], null, null, null, null, null))], function (l, n) {
                                                    var e = n.component;
                                                    l(n, 3, 0, "/"),
                                                        l(n, 5, 0, !e.commonService.IsDarkMode),
                                                        l(n, 7, 0, e.commonService.IsDarkMode)
                                                }, function (l, n) {
                                                    var e = n.component;
                                                    l(n, 2, 0, t["\u0275nov"](n, 3).target, t["\u0275nov"](n, 3).href);
                                                    var o = l(n, 10, 0, e.MyPrevUrl);
                                                    l(n, 9, 0, o)
                                                })
        }
        function C(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 1, "h2", [], null, null, null, null, null)), (l()(),
                    t["\u0275ted"](-1, null, [" Ready to work with us? Tell us more."]))], null, null)
        }
        function x(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 1, "h2", [], null, null, null, null, null)), (l()(),
                    t["\u0275ted"](1, null, ["", ""]))], null, function (l, n) {
                        l(n, 1, 0, n.component.contact_person_heading)
                    })
        }
        function w(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 0, "h4", [], [[8, "innerHTML", 1]], null, null, null, null))], null, function (l, n) {
                    l(n, 0, 0, n.component.contact_person_description)
                })
        }
        function q(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 1, "h2", [["class", "bottom-form-title"]], null, null, null, null, null)), (l()(),
                    t["\u0275ted"](1, null, [" ", ""]))], null, function (l, n) {
                        l(n, 1, 0, n.component.enquiry_form_heading)
                    })
        }
        function k(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 0, "p", [], [[8, "innerHTML", 1]], null, null, null, null))], null, function (l, n) {
                    l(n, 0, 0, n.component.enquiry_form_sub_heading)
                })
        }
        function R(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 2, "p", [["class", "email-msg-alert"]], null, null, null, null, null)), (l()(),
                    t["\u0275eld"](1, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-lightbulb-o"]], null, null, null, null, null)), (l()(),
                        t["\u0275ted"](-1, null, [" Use business email to help us know you better."]))], null, null)
        }
        function I(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), t["\u0275did"](1, 147456, null, 0, i.n, [t.ElementRef, t.Renderer2, [2, i.q]], {
                    value: [0, "value"]
                }, null), t["\u0275did"](2, 147456, null, 0, i.u, [t.ElementRef, t.Renderer2, [8, null]], {
                    value: [0, "value"]
                }, null), (l()(),
                    t["\u0275ted"](3, null, [" ", " "]))], function (l, n) {
                        l(n, 1, 0, n.context.$implicit),
                            l(n, 2, 0, n.context.$implicit)
                    }, function (l, n) {
                        l(n, 3, 0, n.context.$implicit)
                    })
        }
        function P(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 16, "div", [], null, null, null, null, null)), (l()(),
                    t["\u0275eld"](1, 0, null, null, 15, "select", [["data-ref", "topic"], ["id", "topic"], ["name", "topic"], ["required", ""]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "blur"], [null, "ngModelChange"], [null, "change"]], function (l, n, e) {
                        var o = !0
                            , u = l.component;
                        return "change" === n && (o = !1 !== t["\u0275nov"](l, 4).onChange(e.target.value) && o),
                            "blur" === n && (o = !1 !== t["\u0275nov"](l, 4).onTouched() && o),
                            "blur" === n && (o = !1 !== u.onTextboxBlur(e) && o),
                            "ngModelChange" === n && (o = !1 !== (u.enquiryDetail.topic = e) && o),
                            o
                    }, null, null)), t["\u0275did"](2, 278528, null, 0, a.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                        ngClass: [0, "ngClass"]
                    }, null), t["\u0275pod"](3, {
                        has_danger: 0
                    }), t["\u0275did"](4, 16384, null, 0, i.q, [t.Renderer2, t.ElementRef], null, null), t["\u0275did"](5, 16384, null, 0, i.p, [], {
                        required: [0, "required"]
                    }, null), t["\u0275prd"](1024, null, i.g, function (l) {
                        return [l]
                    }, [i.p]), t["\u0275prd"](1024, null, i.h, function (l) {
                        return [l]
                    }, [i.q]), t["\u0275did"](8, 671744, [["topic", 4]], 0, i.m, [[2, i.b], [6, i.g], [8, null], [6, i.h]], {
                        name: [0, "name"],
                        model: [1, "model"]
                    }, {
                        update: "ngModelChange"
                    }), t["\u0275prd"](2048, null, i.i, null, [i.m]), t["\u0275did"](10, 16384, null, 0, i.j, [[4, i.i]], null, null), (l()(),
                        t["\u0275eld"](11, 0, null, null, 3, "option", [["selected", ""], ["value", ""]], null, null, null, null, null)), t["\u0275did"](12, 147456, null, 0, i.n, [t.ElementRef, t.Renderer2, [2, i.q]], {
                            value: [0, "value"]
                        }, null), t["\u0275did"](13, 147456, null, 0, i.u, [t.ElementRef, t.Renderer2, [8, null]], {
                            value: [0, "value"]
                        }, null), (l()(),
                            t["\u0275ted"](-1, null, ["Select"])), (l()(),
                                t["\u0275and"](16777216, null, null, 1, null, I)), t["\u0275did"](16, 278528, null, 0, a.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                                    ngForOf: [0, "ngForOf"]
                                }, null)], function (l, n) {
                                    var e = n.component
                                        , o = l(n, 3, 0, e.submitted1 && t["\u0275nov"](n, 8).invalid);
                                    l(n, 2, 0, o),
                                        l(n, 5, 0, ""),
                                        l(n, 8, 0, "topic", e.enquiryDetail.topic),
                                        l(n, 12, 0, ""),
                                        l(n, 13, 0, ""),
                                        l(n, 16, 0, null == e.brandlogo ? null : null == e.brandlogo.data ? null : null == e.brandlogo.data.enquiry_fields ? null : e.brandlogo.data.enquiry_fields.topic)
                                }, function (l, n) {
                                    l(n, 1, 0, t["\u0275nov"](n, 5).required ? "" : null, t["\u0275nov"](n, 10).ngClassUntouched, t["\u0275nov"](n, 10).ngClassTouched, t["\u0275nov"](n, 10).ngClassPristine, t["\u0275nov"](n, 10).ngClassDirty, t["\u0275nov"](n, 10).ngClassValid, t["\u0275nov"](n, 10).ngClassInvalid, t["\u0275nov"](n, 10).ngClassPending)
                                })
        }
        function M(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), t["\u0275did"](1, 147456, null, 0, i.n, [t.ElementRef, t.Renderer2, [2, i.q]], {
                    value: [0, "value"]
                }, null), t["\u0275did"](2, 147456, null, 0, i.u, [t.ElementRef, t.Renderer2, [8, null]], {
                    value: [0, "value"]
                }, null), (l()(),
                    t["\u0275ted"](3, null, [" ", " "]))], function (l, n) {
                        l(n, 1, 0, n.context.$implicit),
                            l(n, 2, 0, n.context.$implicit)
                    }, function (l, n) {
                        l(n, 3, 0, n.context.$implicit)
                    })
        }
        function T(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 16, "div", [], null, null, null, null, null)), (l()(),
                    t["\u0275eld"](1, 0, null, null, 15, "select", [["data-ref", "minimum_budget"], ["id", "minimum_budget"], ["name", "minimum_budget"], ["required", ""]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "blur"], [null, "ngModelChange"], [null, "change"]], function (l, n, e) {
                        var o = !0
                            , u = l.component;
                        return "change" === n && (o = !1 !== t["\u0275nov"](l, 4).onChange(e.target.value) && o),
                            "blur" === n && (o = !1 !== t["\u0275nov"](l, 4).onTouched() && o),
                            "blur" === n && (o = !1 !== u.onTextboxBlur(e) && o),
                            "ngModelChange" === n && (o = !1 !== (u.enquiryDetail.minimum_budget = e) && o),
                            o
                    }, null, null)), t["\u0275did"](2, 278528, null, 0, a.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                        ngClass: [0, "ngClass"]
                    }, null), t["\u0275pod"](3, {
                        has_danger: 0
                    }), t["\u0275did"](4, 16384, null, 0, i.q, [t.Renderer2, t.ElementRef], null, null), t["\u0275did"](5, 16384, null, 0, i.p, [], {
                        required: [0, "required"]
                    }, null), t["\u0275prd"](1024, null, i.g, function (l) {
                        return [l]
                    }, [i.p]), t["\u0275prd"](1024, null, i.h, function (l) {
                        return [l]
                    }, [i.q]), t["\u0275did"](8, 671744, [["minimum_budget", 4]], 0, i.m, [[2, i.b], [6, i.g], [8, null], [6, i.h]], {
                        name: [0, "name"],
                        model: [1, "model"]
                    }, {
                        update: "ngModelChange"
                    }), t["\u0275prd"](2048, null, i.i, null, [i.m]), t["\u0275did"](10, 16384, null, 0, i.j, [[4, i.i]], null, null), (l()(),
                        t["\u0275eld"](11, 0, null, null, 3, "option", [["selected", ""], ["value", ""]], null, null, null, null, null)), t["\u0275did"](12, 147456, null, 0, i.n, [t.ElementRef, t.Renderer2, [2, i.q]], {
                            value: [0, "value"]
                        }, null), t["\u0275did"](13, 147456, null, 0, i.u, [t.ElementRef, t.Renderer2, [8, null]], {
                            value: [0, "value"]
                        }, null), (l()(),
                            t["\u0275ted"](-1, null, ["Select"])), (l()(),
                                t["\u0275and"](16777216, null, null, 1, null, M)), t["\u0275did"](16, 278528, null, 0, a.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                                    ngForOf: [0, "ngForOf"]
                                }, null)], function (l, n) {
                                    var e = n.component
                                        , o = l(n, 3, 0, e.submitted1 && t["\u0275nov"](n, 8).invalid);
                                    l(n, 2, 0, o),
                                        l(n, 5, 0, ""),
                                        l(n, 8, 0, "minimum_budget", e.enquiryDetail.minimum_budget),
                                        l(n, 12, 0, ""),
                                        l(n, 13, 0, ""),
                                        l(n, 16, 0, null == e.brandlogo ? null : null == e.brandlogo.data ? null : null == e.brandlogo.data.enquiry_fields ? null : e.brandlogo.data.enquiry_fields.budget)
                                }, function (l, n) {
                                    l(n, 1, 0, t["\u0275nov"](n, 5).required ? "" : null, t["\u0275nov"](n, 10).ngClassUntouched, t["\u0275nov"](n, 10).ngClassTouched, t["\u0275nov"](n, 10).ngClassPristine, t["\u0275nov"](n, 10).ngClassDirty, t["\u0275nov"](n, 10).ngClassValid, t["\u0275nov"](n, 10).ngClassInvalid, t["\u0275nov"](n, 10).ngClassPending)
                                })
        }
        function O(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), t["\u0275did"](1, 147456, null, 0, i.n, [t.ElementRef, t.Renderer2, [2, i.q]], {
                    value: [0, "value"]
                }, null), t["\u0275did"](2, 147456, null, 0, i.u, [t.ElementRef, t.Renderer2, [8, null]], {
                    value: [0, "value"]
                }, null), (l()(),
                    t["\u0275ted"](3, null, [" ", " "]))], function (l, n) {
                        l(n, 1, 0, n.context.$implicit),
                            l(n, 2, 0, n.context.$implicit)
                    }, function (l, n) {
                        l(n, 3, 0, n.context.$implicit)
                    })
        }
        function D(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 16, "div", [], null, null, null, null, null)), (l()(),
                    t["\u0275eld"](1, 0, null, null, 15, "select", [["data-ref", "how_soon_you_want_to_start"], ["id", "how_soon_you_want_to_start"], ["name", "how_soon_you_want_to_start"], ["required", ""]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "blur"], [null, "ngModelChange"], [null, "change"]], function (l, n, e) {
                        var o = !0
                            , u = l.component;
                        return "change" === n && (o = !1 !== t["\u0275nov"](l, 4).onChange(e.target.value) && o),
                            "blur" === n && (o = !1 !== t["\u0275nov"](l, 4).onTouched() && o),
                            "blur" === n && (o = !1 !== u.onTextboxBlur(e) && o),
                            "ngModelChange" === n && (o = !1 !== (u.enquiryDetail.how_soon_you_want_to_start = e) && o),
                            o
                    }, null, null)), t["\u0275did"](2, 278528, null, 0, a.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                        ngClass: [0, "ngClass"]
                    }, null), t["\u0275pod"](3, {
                        has_danger: 0
                    }), t["\u0275did"](4, 16384, null, 0, i.q, [t.Renderer2, t.ElementRef], null, null), t["\u0275did"](5, 16384, null, 0, i.p, [], {
                        required: [0, "required"]
                    }, null), t["\u0275prd"](1024, null, i.g, function (l) {
                        return [l]
                    }, [i.p]), t["\u0275prd"](1024, null, i.h, function (l) {
                        return [l]
                    }, [i.q]), t["\u0275did"](8, 671744, [["how_soon_you_want_to_start", 4]], 0, i.m, [[2, i.b], [6, i.g], [8, null], [6, i.h]], {
                        name: [0, "name"],
                        model: [1, "model"]
                    }, {
                        update: "ngModelChange"
                    }), t["\u0275prd"](2048, null, i.i, null, [i.m]), t["\u0275did"](10, 16384, null, 0, i.j, [[4, i.i]], null, null), (l()(),
                        t["\u0275eld"](11, 0, null, null, 3, "option", [["selected", ""], ["value", ""]], null, null, null, null, null)), t["\u0275did"](12, 147456, null, 0, i.n, [t.ElementRef, t.Renderer2, [2, i.q]], {
                            value: [0, "value"]
                        }, null), t["\u0275did"](13, 147456, null, 0, i.u, [t.ElementRef, t.Renderer2, [8, null]], {
                            value: [0, "value"]
                        }, null), (l()(),
                            t["\u0275ted"](-1, null, ["Select"])), (l()(),
                                t["\u0275and"](16777216, null, null, 1, null, O)), t["\u0275did"](16, 278528, null, 0, a.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                                    ngForOf: [0, "ngForOf"]
                                }, null)], function (l, n) {
                                    var e = n.component
                                        , o = l(n, 3, 0, e.submitted1 && t["\u0275nov"](n, 8).invalid);
                                    l(n, 2, 0, o),
                                        l(n, 5, 0, ""),
                                        l(n, 8, 0, "how_soon_you_want_to_start", e.enquiryDetail.how_soon_you_want_to_start),
                                        l(n, 12, 0, ""),
                                        l(n, 13, 0, ""),
                                        l(n, 16, 0, null == e.brandlogo ? null : null == e.brandlogo.data ? null : null == e.brandlogo.data.enquiry_fields ? null : e.brandlogo.data.enquiry_fields.when_to_start)
                                }, function (l, n) {
                                    l(n, 1, 0, t["\u0275nov"](n, 5).required ? "" : null, t["\u0275nov"](n, 10).ngClassUntouched, t["\u0275nov"](n, 10).ngClassTouched, t["\u0275nov"](n, 10).ngClassPristine, t["\u0275nov"](n, 10).ngClassDirty, t["\u0275nov"](n, 10).ngClassValid, t["\u0275nov"](n, 10).ngClassInvalid, t["\u0275nov"](n, 10).ngClassPending)
                                })
        }
        function E(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), t["\u0275did"](1, 147456, null, 0, i.n, [t.ElementRef, t.Renderer2, [2, i.q]], {
                    value: [0, "value"]
                }, null), t["\u0275did"](2, 147456, null, 0, i.u, [t.ElementRef, t.Renderer2, [8, null]], {
                    value: [0, "value"]
                }, null), (l()(),
                    t["\u0275ted"](3, null, [" ", " "]))], function (l, n) {
                        l(n, 1, 0, n.context.$implicit),
                            l(n, 2, 0, n.context.$implicit)
                    }, function (l, n) {
                        l(n, 3, 0, n.context.$implicit)
                    })
        }
        function V(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 16, "div", [], null, null, null, null, null)), (l()(),
                    t["\u0275eld"](1, 0, null, null, 15, "select", [["data-ref", "requesting_new_project"], ["id", "requesting_new_project"], ["name", "requesting_new_project"], ["required", ""]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "blur"], [null, "ngModelChange"], [null, "change"]], function (l, n, e) {
                        var o = !0
                            , u = l.component;
                        return "change" === n && (o = !1 !== t["\u0275nov"](l, 4).onChange(e.target.value) && o),
                            "blur" === n && (o = !1 !== t["\u0275nov"](l, 4).onTouched() && o),
                            "blur" === n && (o = !1 !== u.onTextboxBlur(e) && o),
                            "ngModelChange" === n && (o = !1 !== (u.enquiryDetail.requesting_new_project = e) && o),
                            o
                    }, null, null)), t["\u0275did"](2, 278528, null, 0, a.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                        ngClass: [0, "ngClass"]
                    }, null), t["\u0275pod"](3, {
                        has_danger: 0
                    }), t["\u0275did"](4, 16384, null, 0, i.q, [t.Renderer2, t.ElementRef], null, null), t["\u0275did"](5, 16384, null, 0, i.p, [], {
                        required: [0, "required"]
                    }, null), t["\u0275prd"](1024, null, i.g, function (l) {
                        return [l]
                    }, [i.p]), t["\u0275prd"](1024, null, i.h, function (l) {
                        return [l]
                    }, [i.q]), t["\u0275did"](8, 671744, [["requesting_new_project", 4]], 0, i.m, [[2, i.b], [6, i.g], [8, null], [6, i.h]], {
                        name: [0, "name"],
                        model: [1, "model"]
                    }, {
                        update: "ngModelChange"
                    }), t["\u0275prd"](2048, null, i.i, null, [i.m]), t["\u0275did"](10, 16384, null, 0, i.j, [[4, i.i]], null, null), (l()(),
                        t["\u0275eld"](11, 0, null, null, 3, "option", [["selected", ""], ["value", ""]], null, null, null, null, null)), t["\u0275did"](12, 147456, null, 0, i.n, [t.ElementRef, t.Renderer2, [2, i.q]], {
                            value: [0, "value"]
                        }, null), t["\u0275did"](13, 147456, null, 0, i.u, [t.ElementRef, t.Renderer2, [8, null]], {
                            value: [0, "value"]
                        }, null), (l()(),
                            t["\u0275ted"](-1, null, ["Select"])), (l()(),
                                t["\u0275and"](16777216, null, null, 1, null, E)), t["\u0275did"](16, 278528, null, 0, a.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                                    ngForOf: [0, "ngForOf"]
                                }, null)], function (l, n) {
                                    var e = n.component
                                        , o = l(n, 3, 0, e.submitted1 && t["\u0275nov"](n, 8).invalid);
                                    l(n, 2, 0, o),
                                        l(n, 5, 0, ""),
                                        l(n, 8, 0, "requesting_new_project", e.enquiryDetail.requesting_new_project),
                                        l(n, 12, 0, ""),
                                        l(n, 13, 0, ""),
                                        l(n, 16, 0, null == e.brandlogo ? null : null == e.brandlogo.data ? null : null == e.brandlogo.data.enquiry_fields ? null : e.brandlogo.data.enquiry_fields.project_type)
                                }, function (l, n) {
                                    l(n, 1, 0, t["\u0275nov"](n, 5).required ? "" : null, t["\u0275nov"](n, 10).ngClassUntouched, t["\u0275nov"](n, 10).ngClassTouched, t["\u0275nov"](n, 10).ngClassPristine, t["\u0275nov"](n, 10).ngClassDirty, t["\u0275nov"](n, 10).ngClassValid, t["\u0275nov"](n, 10).ngClassInvalid, t["\u0275nov"](n, 10).ngClassPending)
                                })
        }
        function S(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 0, "span", [["class", "fa fa-trash"]], null, [[null, "click"]], function (l, n, e) {
                    var t = !0;
                    return "click" === n && (t = !1 !== l.component.deleteFile() && t),
                        t
                }, null, null))], null, null)
        }
        function N(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 1, "button", [["class", "submit btn"], ["id", "submitEnquiryForm"], ["type", "button"]], null, [[null, "click"]], function (l, n, e) {
                    var o = !0
                        , u = l.component;
                    return "click" === n && (o = !1 !== u.addNewEnquiry(t["\u0275nov"](l.parent, 31), u.enquiryDetail, t["\u0275nov"](l.parent, 148)) && o),
                        o
                }, null, null)), (l()(),
                    t["\u0275ted"](-1, null, ["Get Started "]))], null, null)
        }
        function z(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 1, "button", [["class", "submit btn"], ["disabled", ""], ["id", "bottom-en-submit"], ["type", "button"]], null, null, null, null, null)), (l()(),
                    t["\u0275ted"](-1, null, ["Sending "]))], null, null)
        }
        function F(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 1, "div", [["class", "client-image client-logo-single"]], null, null, null, null, null)), (l()(),
                    t["\u0275eld"](1, 0, null, null, 0, "img", [["class", "svg-convert"]], [[8, "src", 4], [8, "alt", 0]], [[null, "load"]], function (l, n, e) {
                        var t = !0;
                        return "load" === n && (t = !1 !== l.component.commonService.callSVGConverterScript(1, 0) && t),
                            t
                    }, null, null))], null, function (l, n) {
                        var e = n.component;
                        l(n, 1, 0, null == e.brandlogo ? null : null == e.brandlogo.data ? null : null == e.brandlogo.data.enquiry_page_brand_logo_image ? null : e.brandlogo.data.enquiry_page_brand_logo_image.url, t["\u0275inlineInterpolate"](1, "", null == e.brandlogo ? null : null == e.brandlogo.data ? null : null == e.brandlogo.data.enquiry_page_brand_logo_image ? null : e.brandlogo.data.enquiry_page_brand_logo_image.alt, ""))
                    })
        }
        function j(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 0, "img", [["class", "svg-convert"]], [[8, "src", 4], [8, "alt", 0]], [[null, "load"]], function (l, n, e) {
                    var t = !0
                        , o = l.component;
                    return "load" === n && (t = !1 !== o.commonService.callSVGConverterScript(null == o.brandlogo ? null : null == o.brandlogo.data ? null : o.brandlogo.data.trusted_brands_details.length, l.parent.parent.parent.context.index) && t),
                        t
                }, null, null))], null, function (l, n) {
                    l(n, 0, 0, null == n.parent.parent.parent.context.$implicit ? null : null == n.parent.parent.parent.context.$implicit.trusted_brands_logo ? null : n.parent.parent.parent.context.$implicit.trusted_brands_logo.url, t["\u0275inlineInterpolate"](1, "", null == n.parent.parent.parent.context.$implicit ? null : null == n.parent.parent.parent.context.$implicit.trusted_brands_logo ? null : n.parent.parent.parent.context.$implicit.trusted_brands_logo.alt, ""))
                })
        }
        function $(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (l, n, e) {
                    var o = !0;
                    return "click" === n && (o = !1 !== t["\u0275nov"](l, 1).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && o),
                        o
                }, null, null)), t["\u0275did"](1, 671744, null, 0, s.o, [s.m, s.a, a.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(),
                    t["\u0275and"](16777216, null, null, 1, null, j)), t["\u0275did"](3, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                        ngIf: [0, "ngIf"]
                    }, null)], function (l, n) {
                        l(n, 1, 0, "/" + n.component.commonService.replaceRootURLToBlank(null == n.parent.parent.context.$implicit ? null : n.parent.parent.context.$implicit.trusted_brands_logo_page_link)),
                            l(n, 3, 0, null == n.parent.parent.context.$implicit ? null : null == n.parent.parent.context.$implicit.trusted_brands_logo ? null : n.parent.parent.context.$implicit.trusted_brands_logo.url)
                    }, function (l, n) {
                        l(n, 0, 0, t["\u0275nov"](n, 1).target, t["\u0275nov"](n, 1).href)
                    })
        }
        function L(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 0, "img", [["class", "svg-convert"]], [[8, "src", 4], [8, "alt", 0]], [[null, "load"]], function (l, n, e) {
                    var t = !0
                        , o = l.component;
                    return "load" === n && (t = !1 !== o.commonService.callSVGConverterScript(null == o.brandlogo ? null : null == o.brandlogo.data ? null : o.brandlogo.data.trusted_brands_details.length, l.parent.parent.context.index) && t),
                        t
                }, null, null))], null, function (l, n) {
                    l(n, 0, 0, null == n.parent.parent.context.$implicit ? null : null == n.parent.parent.context.$implicit.trusted_brands_logo ? null : n.parent.parent.context.$implicit.trusted_brands_logo.url, t["\u0275inlineInterpolate"](1, "", null == n.parent.parent.context.$implicit ? null : null == n.parent.parent.context.$implicit.trusted_brands_logo ? null : n.parent.parent.context.$implicit.trusted_brands_logo.alt, ""))
                })
        }
        function B(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 4, "div", [["class", "col-md-3"]], null, null, null, null, null)), (l()(),
                    t["\u0275and"](16777216, null, null, 1, null, $)), t["\u0275did"](2, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                        ngIf: [0, "ngIf"]
                    }, null), (l()(),
                        t["\u0275and"](16777216, null, null, 1, null, L)), t["\u0275did"](4, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                            ngIf: [0, "ngIf"]
                        }, null)], function (l, n) {
                            l(n, 2, 0, "" != (null == n.parent.context.$implicit ? null : n.parent.context.$implicit.trusted_brands_logo_page_link)),
                                l(n, 4, 0, "" != (null == n.parent.context.$implicit ? null : null == n.parent.context.$implicit.trusted_brands_logo ? null : n.parent.context.$implicit.trusted_brands_logo.url) && "" == (null == n.parent.context.$implicit ? null : n.parent.context.$implicit.trusted_brands_logo_page_link))
                        }, null)
        }
        function U(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (l()(),
                    t["\u0275and"](16777216, null, null, 1, null, B)), t["\u0275did"](2, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                        ngIf: [0, "ngIf"]
                    }, null), (l()(),
                        t["\u0275and"](0, null, null, 0))], function (l, n) {
                            l(n, 2, 0, null == n.context.$implicit ? null : n.context.$implicit.show_on_enquiry_form)
                        }, null)
        }
        function K(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 2, "div", [["class", "row client-image"]], null, null, null, null, null)), (l()(),
                    t["\u0275and"](16777216, null, null, 1, null, U)), t["\u0275did"](2, 278528, null, 0, a.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                        ngForOf: [0, "ngForOf"]
                    }, null)], function (l, n) {
                        var e = n.component;
                        l(n, 2, 0, null == e.brandlogo ? null : null == e.brandlogo.data ? null : e.brandlogo.data.trusted_brands_details)
                    }, null)
        }
        function A(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 11, null, null, null, null, null, null, null)), (l()(),
                    t["\u0275eld"](1, 0, null, null, 10, "div", [["class", "slide"]], null, null, null, null, null)), (l()(),
                        t["\u0275eld"](2, 0, null, null, 9, "div", [["class", "client-img"]], null, null, null, null, null)), (l()(),
                            t["\u0275eld"](3, 0, null, null, 3, "picture", [], null, null, null, null, null)), (l()(),
                                t["\u0275eld"](4, 0, null, null, 0, "source", [["type", "image/webp"]], [[8, "srcset", 4]], null, null, null, null)), (l()(),
                                    t["\u0275eld"](5, 0, null, null, 0, "source", [], [[8, "srcset", 4], [8, "type", 0]], null, null, null, null)), (l()(),
                                        t["\u0275eld"](6, 0, null, null, 0, "img", [["alt", "Brand logo"]], [[8, "src", 4]], null, null, null, null)), (l()(),
                                            t["\u0275eld"](7, 0, null, null, 0, "h4", [], [[8, "innerHTML", 1]], null, null, null, null)), (l()(),
                                                t["\u0275eld"](8, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(),
                                                    t["\u0275ted"](9, null, ["", ""])), (l()(),
                                                        t["\u0275eld"](10, 0, null, null, 1, "h6", [], null, null, null, null, null)), (l()(),
                                                            t["\u0275ted"](11, null, ["", ""]))], null, function (l, n) {
                                                                var e = n.component;
                                                                l(n, 4, 0, e.commonService.getWebp(null == n.parent.context.$implicit ? null : null == n.parent.context.$implicit.testimonial_image_enq ? null : null == n.parent.context.$implicit.testimonial_image_enq.sizes ? null : n.parent.context.$implicit.testimonial_image_enq.sizes.latest_post_small_image)),
                                                                    l(n, 5, 0, null == n.parent.context.$implicit ? null : null == n.parent.context.$implicit.testimonial_image_enq ? null : null == n.parent.context.$implicit.testimonial_image_enq.sizes ? null : n.parent.context.$implicit.testimonial_image_enq.sizes.latest_post_small_image, t["\u0275inlineInterpolate"](1, "image/", e.commonService.getImgtype(null == n.parent.context.$implicit ? null : null == n.parent.context.$implicit.testimonial_image_enq ? null : null == n.parent.context.$implicit.testimonial_image_enq.sizes ? null : n.parent.context.$implicit.testimonial_image_enq.sizes.latest_post_small_image), "")),
                                                                    l(n, 6, 0, null == n.parent.context.$implicit ? null : null == n.parent.context.$implicit.testimonial_image_enq ? null : null == n.parent.context.$implicit.testimonial_image_enq.sizes ? null : n.parent.context.$implicit.testimonial_image_enq.sizes.latest_post_small_image),
                                                                    l(n, 7, 0, null == n.parent.context.$implicit ? null : n.parent.context.$implicit.testimonial_description_enq),
                                                                    l(n, 9, 0, null == n.parent.context.$implicit ? null : n.parent.context.$implicit.testimonial_name),
                                                                    l(n, 11, 0, null == n.parent.context.$implicit ? null : n.parent.context.$implicit.testimonial_comapny)
                                                            })
        }
        function Y(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (l()(),
                    t["\u0275and"](16777216, null, null, 1, null, A)), t["\u0275did"](2, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                        ngIf: [0, "ngIf"]
                    }, null), (l()(),
                        t["\u0275and"](0, null, null, 0))], function (l, n) {
                            l(n, 2, 0, n.component.inRandomValue(n.context.index))
                        }, null)
        }
        function H(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 2, "div", [["class", "testimonial-slide-sec"]], null, null, null, null, null)), (l()(),
                    t["\u0275and"](16777216, null, null, 1, null, Y)), t["\u0275did"](2, 278528, null, 0, a.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                        ngForOf: [0, "ngForOf"]
                    }, null)], function (l, n) {
                        var e = n.component;
                        l(n, 2, 0, null == e.testimonials[0] ? null : null == e.testimonials[0].acf ? null : e.testimonials[0].acf.testimonials_details)
                    }, null)
        }
        function G(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 23, "div", [["class", "client-logo"]], null, null, null, null, null)), (l()(),
                    t["\u0275eld"](1, 0, null, null, 1, "h4", [["class", "text-center"]], null, null, null, null, null)), (l()(),
                        t["\u0275ted"](-1, null, ["Trusted by"])), (l()(),
                            t["\u0275and"](16777216, null, null, 1, null, F)), t["\u0275did"](4, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                ngIf: [0, "ngIf"]
                            }, null), (l()(),
                                t["\u0275and"](16777216, null, null, 1, null, K)), t["\u0275did"](6, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                    ngIf: [0, "ngIf"]
                                }, null), (l()(),
                                    t["\u0275and"](16777216, null, null, 1, null, H)), t["\u0275did"](8, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                        ngIf: [0, "ngIf"]
                                    }, null), (l()(),
                                        t["\u0275eld"](9, 0, null, null, 14, "div", [["class", "enquiry-tagline"]], null, null, null, null, null)), (l()(),
                                            t["\u0275eld"](10, 0, null, null, 4, "div", [["class", "required-sec"]], null, null, null, null, null)), (l()(),
                                                t["\u0275eld"](11, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(),
                                                    t["\u0275ted"](-1, null, ["All projects secured by NDA & IP is your's"])), (l()(),
                                                        t["\u0275eld"](13, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(),
                                                            t["\u0275ted"](-1, null, ["100% Secure. Zero Spam."])), (l()(),
                                                                t["\u0275eld"](15, 0, null, null, 8, "div", [["class", "copyright-recaptcha"]], null, null, null, null, null)), (l()(),
                                                                    t["\u0275eld"](16, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(),
                                                                        t["\u0275ted"](-1, null, ["This site is protected by reCAPTCHA and the Google "])), (l()(),
                                                                            t["\u0275eld"](18, 0, null, null, 1, "a", [["href", "https://policies.google.com/privacy"]], null, null, null, null, null)), (l()(),
                                                                                t["\u0275ted"](-1, null, ["Privacy Policy"])), (l()(),
                                                                                    t["\u0275ted"](-1, null, [" and "])), (l()(),
                                                                                        t["\u0275eld"](21, 0, null, null, 1, "a", [["href", "https://policies.google.com/terms"]], null, null, null, null, null)), (l()(),
                                                                                            t["\u0275ted"](-1, null, ["Terms of Service"])), (l()(),
                                                                                                t["\u0275ted"](-1, null, [" apply."]))], function (l, n) {
                                                                                                    var e = n.component;
                                                                                                    l(n, 4, 0, "" != e.brandlogo && e.showImageList),
                                                                                                        l(n, 6, 0, "" != e.brandlogo && !e.showImageList),
                                                                                                        l(n, 8, 0, e.testimonials && e.showTestimonialSlider)
                                                                                                }, null)
        }
        function Z(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 5, "div", [["class", "copyright"]], null, null, null, null, null)), (l()(),
                    t["\u0275eld"](1, 0, null, null, 4, "div", [["class", "copyright-text"]], null, null, null, null, null)), (l()(),
                        t["\u0275eld"](2, 0, null, null, 1, "span", [["class", "left"]], null, null, null, null, null)), (l()(),
                            t["\u0275ted"](3, null, ["(C) ", ", IndiaNIC"])), (l()(),
                                t["\u0275eld"](4, 0, null, null, 1, "span", [["class", "right"]], null, null, null, null, null)), (l()(),
                                    t["\u0275ted"](-1, null, ["Serving clients since 1997"]))], null, function (l, n) {
                                        l(n, 3, 0, n.component.currentYear)
                                    })
        }
        function J(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 15, "div", [["class", "container"]], null, null, null, null, null)), (l()(),
                    t["\u0275eld"](1, 0, null, null, 11, "div", [["class", "row align-items-center"]], null, null, null, null, null)), (l()(),
                        t["\u0275eld"](2, 0, null, null, 3, "div", [["class", "col-12 col-lg-6"]], null, null, null, null, null)), (l()(),
                            t["\u0275eld"](3, 0, null, null, 2, "div", [["class", "thankyou-animation"]], null, null, null, null, null)), (l()(),
                                t["\u0275eld"](4, 0, null, null, 1, "lottie-animation-view", [], null, null, null, o.b, o.a)), t["\u0275did"](5, 114688, null, 0, u.a, [t.PLATFORM_ID], {
                                    options: [0, "options"],
                                    width: [1, "width"],
                                    height: [2, "height"]
                                }, null), (l()(),
                                    t["\u0275eld"](6, 0, null, null, 6, "div", [["class", "col-12 col-lg-6"]], null, null, null, null, null)), (l()(),
                                        t["\u0275eld"](7, 0, null, null, 5, "div", [["class", "thankyou-content"]], null, null, null, null, null)), (l()(),
                                            t["\u0275eld"](8, 0, null, null, 0, "div", [], [[8, "innerHTML", 1]], null, null, null, null)), (l()(),
                                                t["\u0275eld"](9, 0, null, null, 3, "div", [["class", "green-btn"]], null, null, null, null, null)), (l()(),
                                                    t["\u0275eld"](10, 0, null, null, 2, "a", [["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (l()(),
                                                        t["\u0275ted"](-1, null, ["Continue "])), (l()(),
                                                            t["\u0275eld"](12, 0, null, null, 0, "span", [["_ngcontent-c1", ""], ["class", "fa fa-long-arrow-right"]], null, null, null, null, null)), (l()(),
                                                                t["\u0275eld"](13, 0, null, null, 2, "div", [["class", "popup-close-ic"]], null, null, null, null, null)), (l()(),
                                                                    t["\u0275eld"](14, 0, null, null, 1, "a", [], null, [[null, "click"]], function (l, n, e) {
                                                                        var t = !0;
                                                                        return "click" === n && (t = !1 !== l.component.noThanks() && t),
                                                                            t
                                                                    }, null, null)), (l()(),
                                                                        t["\u0275eld"](15, 0, null, null, 0, "img", [["alt", "Close"], ["class", "svg-convert"], ["src", "../../assets/images/close-ic.svg"]], null, [[null, "load"]], function (l, n, e) {
                                                                            var t = !0;
                                                                            return "load" === n && (t = !1 !== l.component.commonService.callSVGConverterScript(1, 0) && t),
                                                                                t
                                                                        }, null, null))], function (l, n) {
                                                                            var e = n.component;
                                                                            l(n, 5, 0, e.lottieConfig, e.auto, e.auto)
                                                                        }, function (l, n) {
                                                                            var e = n.component;
                                                                            l(n, 8, 0, null == e.thankYou[0] ? null : null == e.thankYou[0].acf ? null : e.thankYou[0].acf.raw_html),
                                                                                l(n, 10, 0, t["\u0275inlineInterpolate"](1, "", e.next_url, ""))
                                                                        })
        }
        function W(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 165, "div", [["class", "content_bottom footer-nl-form scrollable inquiry-btm-form"]], null, null, null, null, null)), (l()(),
                    t["\u0275eld"](1, 0, null, null, 157, "div", [], null, null, null, null, null)), t["\u0275did"](2, 278528, null, 0, a.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                        ngClass: [0, "ngClass"]
                    }, null), t["\u0275pod"](3, {
                        container: 0
                    }), (l()(),
                        t["\u0275eld"](4, 0, null, null, 154, "div", [], null, null, null, null, null)), t["\u0275did"](5, 278528, null, 0, a.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                            ngClass: [0, "ngClass"]
                        }, null), t["\u0275pod"](6, {
                            "container_inner clearfix": 0
                        }), (l()(),
                            t["\u0275eld"](7, 0, null, null, 151, "div", [["class", "widget widget_text"]], null, null, null, null, null)), (l()(),
                                t["\u0275eld"](8, 0, null, null, 150, "div", [["class", "textwidget"]], null, null, null, null, null)), (l()(),
                                    t["\u0275eld"](9, 0, null, null, 149, "div", [["class", "lets-talk cd-section thanks-popup"], ["id", "lets-talk"]], null, null, null, null, null)), (l()(),
                                        t["\u0275eld"](10, 0, null, null, 148, "div", [["id", "enquiry-page-form inner-page-form"]], null, null, null, null, null)), (l()(),
                                            t["\u0275eld"](11, 0, null, null, 147, "div", [["class", "contact-enquiry enquiry-page-form"]], null, null, null, null, null)), (l()(),
                                                t["\u0275eld"](12, 0, null, null, 146, "div", [["class", "contact-section pop-up-sec"]], null, null, null, null, null)), (l()(),
                                                    t["\u0275eld"](13, 0, null, null, 9, "div", [["class", "header-main"]], null, null, null, null, null)), (l()(),
                                                        t["\u0275and"](16777216, null, null, 1, null, y)), t["\u0275did"](15, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                            ngIf: [0, "ngIf"]
                                                        }, null), (l()(),
                                                            t["\u0275eld"](16, 0, null, null, 6, "div", [["class", "tag-line"]], null, null, null, null, null)), (l()(),
                                                                t["\u0275and"](16777216, null, null, 1, null, C)), t["\u0275did"](18, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                    ngIf: [0, "ngIf"]
                                                                }, null), (l()(),
                                                                    t["\u0275and"](16777216, null, null, 1, null, x)), t["\u0275did"](20, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                        ngIf: [0, "ngIf"]
                                                                    }, null), (l()(),
                                                                        t["\u0275and"](16777216, null, null, 1, null, w)), t["\u0275did"](22, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                            ngIf: [0, "ngIf"]
                                                                        }, null), (l()(),
                                                                            t["\u0275eld"](23, 0, null, null, 4, "div", [["class", "btm-form-title-sec text-center"]], null, null, null, null, null)), (l()(),
                                                                                t["\u0275and"](16777216, null, null, 1, null, q)), t["\u0275did"](25, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                                    ngIf: [0, "ngIf"]
                                                                                }, null), (l()(),
                                                                                    t["\u0275and"](16777216, null, null, 1, null, k)), t["\u0275did"](27, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                                        ngIf: [0, "ngIf"]
                                                                                    }, null), (l()(),
                                                                                        t["\u0275eld"](28, 0, null, null, 125, "div", [["class", "contact-form-sec"]], null, null, null, null, null)), (l()(),
                                                                                            t["\u0275eld"](29, 0, null, null, 124, "form", [["class", "form form-register form_brand"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (l, n, e) {
                                                                                                var o = !0;
                                                                                                return "submit" === n && (o = !1 !== t["\u0275nov"](l, 31).onSubmit(e) && o),
                                                                                                    "reset" === n && (o = !1 !== t["\u0275nov"](l, 31).onReset() && o),
                                                                                                    o
                                                                                            }, null, null)), t["\u0275did"](30, 16384, null, 0, i.s, [], null, null), t["\u0275did"](31, 4210688, [["myform", 4]], 0, i.l, [[8, null], [8, null]], null, null), t["\u0275prd"](2048, null, i.b, null, [i.l]), t["\u0275did"](33, 16384, null, 0, i.k, [[4, i.b]], null, null), (l()(),
                                                                                                t["\u0275eld"](34, 0, null, null, 25, "div", [["class", "group required-field"]], null, null, null, null, null)), (l()(),
                                                                                                    t["\u0275eld"](35, 0, null, null, 1, "label", [["for", "first_name"]], null, null, null, null, null)), (l()(),
                                                                                                        t["\u0275ted"](-1, null, ["Name"])), (l()(),
                                                                                                            t["\u0275eld"](37, 0, null, null, 10, "input", [["class", "first-name name"], ["id", "first_name"], ["maxlength", "100"], ["name", "first_name"], ["placeholder", "First Name"], ["required", ""], ["type", "text"]], [[1, "required", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "blur"], [null, "keypress"], [null, "input"], [null, "compositionstart"], [null, "compositionend"]], function (l, n, e) {
                                                                                                                var o = !0
                                                                                                                    , u = l.component;
                                                                                                                return "input" === n && (o = !1 !== t["\u0275nov"](l, 40)._handleInput(e.target.value) && o),
                                                                                                                    "blur" === n && (o = !1 !== t["\u0275nov"](l, 40).onTouched() && o),
                                                                                                                    "compositionstart" === n && (o = !1 !== t["\u0275nov"](l, 40)._compositionStart() && o),
                                                                                                                    "compositionend" === n && (o = !1 !== t["\u0275nov"](l, 40)._compositionEnd(e.target.value) && o),
                                                                                                                    "ngModelChange" === n && (o = !1 !== (u.enquiryDetail.first_name = e) && o),
                                                                                                                    "blur" === n && (o = !1 !== u.onTextboxBlur(e) && o),
                                                                                                                    "keypress" === n && (o = !1 !== u.clsAlphaOnly(e) && o),
                                                                                                                    o
                                                                                                            }, null, null)), t["\u0275did"](38, 278528, null, 0, a.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                                                                                                                klass: [0, "klass"],
                                                                                                                ngClass: [1, "ngClass"]
                                                                                                            }, null), t["\u0275pod"](39, {
                                                                                                                has_danger: 0
                                                                                                            }), t["\u0275did"](40, 16384, null, 0, i.c, [t.Renderer2, t.ElementRef, [2, i.a]], null, null), t["\u0275did"](41, 16384, null, 0, i.p, [], {
                                                                                                                required: [0, "required"]
                                                                                                            }, null), t["\u0275did"](42, 540672, null, 0, i.e, [], {
                                                                                                                maxlength: [0, "maxlength"]
                                                                                                            }, null), t["\u0275prd"](1024, null, i.g, function (l, n) {
                                                                                                                return [l, n]
                                                                                                            }, [i.p, i.e]), t["\u0275prd"](1024, null, i.h, function (l) {
                                                                                                                return [l]
                                                                                                            }, [i.c]), t["\u0275did"](45, 671744, [["first_name", 4]], 0, i.m, [[2, i.b], [6, i.g], [8, null], [6, i.h]], {
                                                                                                                name: [0, "name"],
                                                                                                                model: [1, "model"]
                                                                                                            }, {
                                                                                                                update: "ngModelChange"
                                                                                                            }), t["\u0275prd"](2048, null, i.i, null, [i.m]), t["\u0275did"](47, 16384, null, 0, i.j, [[4, i.i]], null, null), (l()(),
                                                                                                                t["\u0275eld"](48, 0, null, null, 10, "input", [["class", "last-name name"], ["maxlength", "100"], ["name", "last_name"], ["placeholder", "Last Name"], ["required", ""], ["type", "text"]], [[1, "required", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "blur"], [null, "keypress"], [null, "input"], [null, "compositionstart"], [null, "compositionend"]], function (l, n, e) {
                                                                                                                    var o = !0
                                                                                                                        , u = l.component;
                                                                                                                    return "input" === n && (o = !1 !== t["\u0275nov"](l, 51)._handleInput(e.target.value) && o),
                                                                                                                        "blur" === n && (o = !1 !== t["\u0275nov"](l, 51).onTouched() && o),
                                                                                                                        "compositionstart" === n && (o = !1 !== t["\u0275nov"](l, 51)._compositionStart() && o),
                                                                                                                        "compositionend" === n && (o = !1 !== t["\u0275nov"](l, 51)._compositionEnd(e.target.value) && o),
                                                                                                                        "ngModelChange" === n && (o = !1 !== (u.enquiryDetail.last_name = e) && o),
                                                                                                                        "blur" === n && (o = !1 !== u.onTextboxBlur(e) && o),
                                                                                                                        "keypress" === n && (o = !1 !== u.clsAlphaOnly(e) && o),
                                                                                                                        o
                                                                                                                }, null, null)), t["\u0275did"](49, 278528, null, 0, a.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                                                                                                                    klass: [0, "klass"],
                                                                                                                    ngClass: [1, "ngClass"]
                                                                                                                }, null), t["\u0275pod"](50, {
                                                                                                                    has_danger: 0
                                                                                                                }), t["\u0275did"](51, 16384, null, 0, i.c, [t.Renderer2, t.ElementRef, [2, i.a]], null, null), t["\u0275did"](52, 16384, null, 0, i.p, [], {
                                                                                                                    required: [0, "required"]
                                                                                                                }, null), t["\u0275did"](53, 540672, null, 0, i.e, [], {
                                                                                                                    maxlength: [0, "maxlength"]
                                                                                                                }, null), t["\u0275prd"](1024, null, i.g, function (l, n) {
                                                                                                                    return [l, n]
                                                                                                                }, [i.p, i.e]), t["\u0275prd"](1024, null, i.h, function (l) {
                                                                                                                    return [l]
                                                                                                                }, [i.c]), t["\u0275did"](56, 671744, [["last_name", 4]], 0, i.m, [[2, i.b], [6, i.g], [8, null], [6, i.h]], {
                                                                                                                    name: [0, "name"],
                                                                                                                    model: [1, "model"]
                                                                                                                }, {
                                                                                                                    update: "ngModelChange"
                                                                                                                }), t["\u0275prd"](2048, null, i.i, null, [i.m]), t["\u0275did"](58, 16384, null, 0, i.j, [[4, i.i]], null, null), (l()(),
                                                                                                                    t["\u0275eld"](59, 0, null, null, 0, "div", [["class", "clearfix"]], null, null, null, null, null)), (l()(),
                                                                                                                        t["\u0275eld"](60, 0, null, null, 15, "div", [["class", "group required-field"]], null, null, null, null, null)), (l()(),
                                                                                                                            t["\u0275eld"](61, 0, null, null, 1, "label", [["for", "email"]], null, null, null, null, null)), (l()(),
                                                                                                                                t["\u0275ted"](-1, null, ["Email"])), (l()(),
                                                                                                                                    t["\u0275eld"](63, 0, null, null, 10, "input", [["class", "form-control"], ["id", "email"], ["name", "email"], ["pattern", "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,50})+$"], ["placeholder", "Your Email Address"], ["required", ""], ["type", "email"]], [[1, "required", 0], [1, "pattern", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "blur"], [null, "keypress"], [null, "input"], [null, "compositionstart"], [null, "compositionend"]], function (l, n, e) {
                                                                                                                                        var o = !0
                                                                                                                                            , u = l.component;
                                                                                                                                        return "input" === n && (o = !1 !== t["\u0275nov"](l, 66)._handleInput(e.target.value) && o),
                                                                                                                                            "blur" === n && (o = !1 !== t["\u0275nov"](l, 66).onTouched() && o),
                                                                                                                                            "compositionstart" === n && (o = !1 !== t["\u0275nov"](l, 66)._compositionStart() && o),
                                                                                                                                            "compositionend" === n && (o = !1 !== t["\u0275nov"](l, 66)._compositionEnd(e.target.value) && o),
                                                                                                                                            "ngModelChange" === n && (o = !1 !== (u.enquiryDetail.email = e) && o),
                                                                                                                                            "blur" === n && (o = !1 !== u.onBlur(e) && o),
                                                                                                                                            "keypress" === n && (o = !1 !== u.clsAlphaOnlyEmail(e) && o),
                                                                                                                                            o
                                                                                                                                    }, null, null)), t["\u0275did"](64, 278528, null, 0, a.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                                                                                                                                        klass: [0, "klass"],
                                                                                                                                        ngClass: [1, "ngClass"]
                                                                                                                                    }, null), t["\u0275pod"](65, {
                                                                                                                                        has_danger: 0
                                                                                                                                    }), t["\u0275did"](66, 16384, null, 0, i.c, [t.Renderer2, t.ElementRef, [2, i.a]], null, null), t["\u0275did"](67, 16384, null, 0, i.p, [], {
                                                                                                                                        required: [0, "required"]
                                                                                                                                    }, null), t["\u0275did"](68, 540672, null, 0, i.o, [], {
                                                                                                                                        pattern: [0, "pattern"]
                                                                                                                                    }, null), t["\u0275prd"](1024, null, i.g, function (l, n) {
                                                                                                                                        return [l, n]
                                                                                                                                    }, [i.p, i.o]), t["\u0275prd"](1024, null, i.h, function (l) {
                                                                                                                                        return [l]
                                                                                                                                    }, [i.c]), t["\u0275did"](71, 671744, [["email", 4]], 0, i.m, [[2, i.b], [6, i.g], [8, null], [6, i.h]], {
                                                                                                                                        name: [0, "name"],
                                                                                                                                        model: [1, "model"]
                                                                                                                                    }, {
                                                                                                                                        update: "ngModelChange"
                                                                                                                                    }), t["\u0275prd"](2048, null, i.i, null, [i.m]), t["\u0275did"](73, 16384, null, 0, i.j, [[4, i.i]], null, null), (l()(),
                                                                                                                                        t["\u0275and"](16777216, null, null, 1, null, R)), t["\u0275did"](75, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                                                                                            ngIf: [0, "ngIf"]
                                                                                                                                        }, null), (l()(),
                                                                                                                                            t["\u0275eld"](76, 0, null, null, 20, "div", [["class", "group"]], null, null, null, null, null)), (l()(),
                                                                                                                                                t["\u0275eld"](77, 0, null, null, 1, "label", [["for", "contact_number"]], null, null, null, null, null)), (l()(),
                                                                                                                                                    t["\u0275ted"](-1, null, ["Mobile phone"])), (l()(),
                                                                                                                                                        t["\u0275eld"](79, 0, null, null, 10, "input", [["class", "contact-number contact-number-footer"], ["data-ref", "contact_number"], ["id", "contact_number"], ["maxlength", "15"], ["name", "contact_number"], ["placeholder", "Phone Number"], ["required", ""], ["type", "tel"]], [[1, "required", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "keypress"], [null, "blur"], [null, "input"], [null, "compositionstart"], [null, "compositionend"]], function (l, n, e) {
                                                                                                                                                            var o = !0
                                                                                                                                                                , u = l.component;
                                                                                                                                                            return "input" === n && (o = !1 !== t["\u0275nov"](l, 82)._handleInput(e.target.value) && o),
                                                                                                                                                                "blur" === n && (o = !1 !== t["\u0275nov"](l, 82).onTouched() && o),
                                                                                                                                                                "compositionstart" === n && (o = !1 !== t["\u0275nov"](l, 82)._compositionStart() && o),
                                                                                                                                                                "compositionend" === n && (o = !1 !== t["\u0275nov"](l, 82)._compositionEnd(e.target.value) && o),
                                                                                                                                                                "ngModelChange" === n && (o = !1 !== (u.enquiryDetail.contact_number = e) && o),
                                                                                                                                                                "keypress" === n && (o = !1 !== u.isNumberFormat(u.event) && o),
                                                                                                                                                                "blur" === n && (o = !1 !== u.onTextboxBlur(e) && o),
                                                                                                                                                                o
                                                                                                                                                        }, null, null)), t["\u0275did"](80, 278528, null, 0, a.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                                                                                                                                                            klass: [0, "klass"],
                                                                                                                                                            ngClass: [1, "ngClass"]
                                                                                                                                                        }, null), t["\u0275pod"](81, {
                                                                                                                                                            has_danger: 0
                                                                                                                                                        }), t["\u0275did"](82, 16384, null, 0, i.c, [t.Renderer2, t.ElementRef, [2, i.a]], null, null), t["\u0275did"](83, 16384, null, 0, i.p, [], {
                                                                                                                                                            required: [0, "required"]
                                                                                                                                                        }, null), t["\u0275did"](84, 540672, null, 0, i.e, [], {
                                                                                                                                                            maxlength: [0, "maxlength"]
                                                                                                                                                        }, null), t["\u0275prd"](1024, null, i.g, function (l, n) {
                                                                                                                                                            return [l, n]
                                                                                                                                                        }, [i.p, i.e]), t["\u0275prd"](1024, null, i.h, function (l) {
                                                                                                                                                            return [l]
                                                                                                                                                        }, [i.c]), t["\u0275did"](87, 671744, [["contact_number", 4]], 0, i.m, [[2, i.b], [6, i.g], [8, null], [6, i.h]], {
                                                                                                                                                            name: [0, "name"],
                                                                                                                                                            model: [1, "model"]
                                                                                                                                                        }, {
                                                                                                                                                            update: "ngModelChange"
                                                                                                                                                        }), t["\u0275prd"](2048, null, i.i, null, [i.m]), t["\u0275did"](89, 16384, null, 0, i.j, [[4, i.i]], null, null), (l()(),
                                                                                                                                                            t["\u0275eld"](90, 0, null, null, 5, "input", [["class", "number contact_number_isd_code_footer"], ["data-ref", "contact_number_isd_code"], ["id", "contact_number_isd_code"], ["name", "contact_number_isd_code"], ["type", "hidden"], ["value", "contact_number_isd_code"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (l, n, e) {
                                                                                                                                                                var o = !0
                                                                                                                                                                    , u = l.component;
                                                                                                                                                                return "input" === n && (o = !1 !== t["\u0275nov"](l, 91)._handleInput(e.target.value) && o),
                                                                                                                                                                    "blur" === n && (o = !1 !== t["\u0275nov"](l, 91).onTouched() && o),
                                                                                                                                                                    "compositionstart" === n && (o = !1 !== t["\u0275nov"](l, 91)._compositionStart() && o),
                                                                                                                                                                    "compositionend" === n && (o = !1 !== t["\u0275nov"](l, 91)._compositionEnd(e.target.value) && o),
                                                                                                                                                                    "ngModelChange" === n && (o = !1 !== (u.enquiryDetail.contact_number_isd_code = e) && o),
                                                                                                                                                                    o
                                                                                                                                                            }, null, null)), t["\u0275did"](91, 16384, null, 0, i.c, [t.Renderer2, t.ElementRef, [2, i.a]], null, null), t["\u0275prd"](1024, null, i.h, function (l) {
                                                                                                                                                                return [l]
                                                                                                                                                            }, [i.c]), t["\u0275did"](93, 671744, [["contact_number_isd_code", 4]], 0, i.m, [[2, i.b], [8, null], [8, null], [6, i.h]], {
                                                                                                                                                                name: [0, "name"],
                                                                                                                                                                model: [1, "model"]
                                                                                                                                                            }, {
                                                                                                                                                                update: "ngModelChange"
                                                                                                                                                            }), t["\u0275prd"](2048, null, i.i, null, [i.m]), t["\u0275did"](95, 16384, null, 0, i.j, [[4, i.i]], null, null), (l()(),
                                                                                                                                                                t["\u0275eld"](96, 0, null, null, 0, "div", [["class", "clearfix"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                    t["\u0275eld"](97, 0, null, null, 4, "div", [["class", "group required-field"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                        t["\u0275eld"](98, 0, null, null, 1, "label", [["for", "topic"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                            t["\u0275ted"](-1, null, ["Select a Service"])), (l()(),
                                                                                                                                                                                t["\u0275and"](16777216, null, null, 1, null, P)), t["\u0275did"](101, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                                                                                                                                    ngIf: [0, "ngIf"]
                                                                                                                                                                                }, null), (l()(),
                                                                                                                                                                                    t["\u0275eld"](102, 0, null, null, 10, "div", [["class", "budget-group"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                                        t["\u0275eld"](103, 0, null, null, 4, "div", [["class", "group required-field minimum-budget"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                                            t["\u0275eld"](104, 0, null, null, 1, "label", [["for", "minimum_budget"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                                                t["\u0275ted"](-1, null, ["Budget"])), (l()(),
                                                                                                                                                                                                    t["\u0275and"](16777216, null, null, 1, null, T)), t["\u0275did"](107, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                                                                                                                                                        ngIf: [0, "ngIf"]
                                                                                                                                                                                                    }, null), (l()(),
                                                                                                                                                                                                        t["\u0275eld"](108, 0, null, null, 4, "div", [["class", "group required-field start-budget"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                                                            t["\u0275eld"](109, 0, null, null, 1, "label", [["for", "how_soon_you_want_to_start"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                                                                t["\u0275ted"](-1, null, ["How soon you want to start? "])), (l()(),
                                                                                                                                                                                                                    t["\u0275and"](16777216, null, null, 1, null, D)), t["\u0275did"](112, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                                                                                                                                                                        ngIf: [0, "ngIf"]
                                                                                                                                                                                                                    }, null), (l()(),
                                                                                                                                                                                                                        t["\u0275eld"](113, 0, null, null, 4, "div", [["class", "group required-field"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                                                                            t["\u0275eld"](114, 0, null, null, 1, "label", [["for", "requesting_new_project"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                                                                                t["\u0275ted"](-1, null, ["Requirement"])), (l()(),
                                                                                                                                                                                                                                    t["\u0275and"](16777216, null, null, 1, null, V)), t["\u0275did"](117, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                                                                                                                                                                                        ngIf: [0, "ngIf"]
                                                                                                                                                                                                                                    }, null), (l()(),
                                                                                                                                                                                                                                        t["\u0275eld"](118, 0, null, null, 12, "div", [["class", "group"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                                                                                            t["\u0275eld"](119, 0, null, null, 1, "label", [["for", "message"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                                                                                                t["\u0275ted"](-1, null, ["Brief about the project"])), (l()(),
                                                                                                                                                                                                                                                    t["\u0275eld"](121, 0, null, null, 9, "textarea", [["id", "message"], ["name", "message"], ["placeholder", ""], ["required", ""], ["rows", "2"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "blur"], [null, "keypress"], [null, "input"], [null, "compositionstart"], [null, "compositionend"]], function (l, n, e) {
                                                                                                                                                                                                                                                        var o = !0
                                                                                                                                                                                                                                                            , u = l.component;
                                                                                                                                                                                                                                                        return "input" === n && (o = !1 !== t["\u0275nov"](l, 124)._handleInput(e.target.value) && o),
                                                                                                                                                                                                                                                            "blur" === n && (o = !1 !== t["\u0275nov"](l, 124).onTouched() && o),
                                                                                                                                                                                                                                                            "compositionstart" === n && (o = !1 !== t["\u0275nov"](l, 124)._compositionStart() && o),
                                                                                                                                                                                                                                                            "compositionend" === n && (o = !1 !== t["\u0275nov"](l, 124)._compositionEnd(e.target.value) && o),
                                                                                                                                                                                                                                                            "ngModelChange" === n && (o = !1 !== (u.enquiryDetail.message = e) && o),
                                                                                                                                                                                                                                                            "blur" === n && (o = !1 !== u.onTextboxBlur(e) && o),
                                                                                                                                                                                                                                                            "keypress" === n && (o = !1 !== u.clsAlphaOnly(e) && o),
                                                                                                                                                                                                                                                            o
                                                                                                                                                                                                                                                    }, null, null)), t["\u0275did"](122, 278528, null, 0, a.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                                                                                                                                                                                                                                                        ngClass: [0, "ngClass"]
                                                                                                                                                                                                                                                    }, null), t["\u0275pod"](123, {
                                                                                                                                                                                                                                                        has_danger: 0
                                                                                                                                                                                                                                                    }), t["\u0275did"](124, 16384, null, 0, i.c, [t.Renderer2, t.ElementRef, [2, i.a]], null, null), t["\u0275did"](125, 16384, null, 0, i.p, [], {
                                                                                                                                                                                                                                                        required: [0, "required"]
                                                                                                                                                                                                                                                    }, null), t["\u0275prd"](1024, null, i.g, function (l) {
                                                                                                                                                                                                                                                        return [l]
                                                                                                                                                                                                                                                    }, [i.p]), t["\u0275prd"](1024, null, i.h, function (l) {
                                                                                                                                                                                                                                                        return [l]
                                                                                                                                                                                                                                                    }, [i.c]), t["\u0275did"](128, 671744, [["message", 4]], 0, i.m, [[2, i.b], [6, i.g], [8, null], [6, i.h]], {
                                                                                                                                                                                                                                                        name: [0, "name"],
                                                                                                                                                                                                                                                        model: [1, "model"]
                                                                                                                                                                                                                                                    }, {
                                                                                                                                                                                                                                                        update: "ngModelChange"
                                                                                                                                                                                                                                                    }), t["\u0275prd"](2048, null, i.i, null, [i.m]), t["\u0275did"](130, 16384, null, 0, i.j, [[4, i.i]], null, null), (l()(),
                                                                                                                                                                                                                                                        t["\u0275eld"](131, 0, null, null, 13, "div", [["class", "group file-upload-sec"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                                                                                                            t["\u0275eld"](132, 0, null, null, 1, "label", [["for", "file"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                                                                                                                t["\u0275ted"](-1, null, ["Have a file to share?"])), (l()(),
                                                                                                                                                                                                                                                                    t["\u0275eld"](134, 0, null, null, 7, "div", [], null, null, null, null, null)), t["\u0275did"](135, 278528, null, 0, a.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                                                                                                                                                                                                                                                                        ngClass: [0, "ngClass"]
                                                                                                                                                                                                                                                                    }, null), (l()(),
                                                                                                                                                                                                                                                                        t["\u0275eld"](136, 0, null, null, 1, "input", [["id", "inputfile"], ["type", "file"]], null, [[null, "change"]], function (l, n, e) {
                                                                                                                                                                                                                                                                            var t = !0;
                                                                                                                                                                                                                                                                            return "change" === n && (t = !1 !== l.component.handleFileInput(e.target.files) && t),
                                                                                                                                                                                                                                                                                t
                                                                                                                                                                                                                                                                        }, null, null)), t["\u0275did"](137, 278528, null, 0, a.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                                                                                                                                                                                                                                                                            ngClass: [0, "ngClass"]
                                                                                                                                                                                                                                                                        }, null), (l()(),
                                                                                                                                                                                                                                                                            t["\u0275eld"](138, 0, null, null, 1, "p", [["id", "inputfiledetail"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                                                                                                                                t["\u0275ted"](-1, null, ["Select or Drop your file here"])), (l()(),
                                                                                                                                                                                                                                                                                    t["\u0275and"](16777216, null, null, 1, null, S)), t["\u0275did"](141, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                                                                                                                                                                                                                                        ngIf: [0, "ngIf"]
                                                                                                                                                                                                                                                                                    }, null), (l()(),
                                                                                                                                                                                                                                                                                        t["\u0275eld"](142, 0, null, null, 2, "p", [], null, null, null, null, null)), t["\u0275did"](143, 278528, null, 0, a.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                                                                                                                                                                                                                                                                                            ngClass: [0, "ngClass"]
                                                                                                                                                                                                                                                                                        }, null), (l()(),
                                                                                                                                                                                                                                                                                            t["\u0275ted"](-1, null, [" Only Document, Image or ZIP file. Max size 8MB"])), (l()(),
                                                                                                                                                                                                                                                                                                t["\u0275eld"](145, 0, null, null, 8, "div", [["class", "bottom-area"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                                                                                                                                                    t["\u0275eld"](146, 0, null, null, 2, "div", [["class", "captcha"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                                                                                                                                                        t["\u0275eld"](147, 0, null, null, 1, "re-captcha", [["id", "hiddenRecaptcha1"], ["name", "hiddenRecaptcha1"], ["required", ""], ["size", "invisible"]], [[1, "id", 0]], [[null, "resolved"]], function (l, n, e) {
                                                                                                                                                                                                                                                                                                            var t = !0;
                                                                                                                                                                                                                                                                                                            return "resolved" === n && (t = !1 !== l.component.resolved(e) && t),
                                                                                                                                                                                                                                                                                                                t
                                                                                                                                                                                                                                                                                                        }, r.b, r.a)), t["\u0275did"](148, 4374528, [[1, 4], ["recaptchaRef", 4]], 0, d.g, [t.ElementRef, d.i, t.NgZone, [2, d.d]], {
                                                                                                                                                                                                                                                                                                            id: [0, "id"],
                                                                                                                                                                                                                                                                                                            siteKey: [1, "siteKey"],
                                                                                                                                                                                                                                                                                                            size: [2, "size"]
                                                                                                                                                                                                                                                                                                        }, {
                                                                                                                                                                                                                                                                                                            resolved: "resolved"
                                                                                                                                                                                                                                                                                                        }), (l()(),
                                                                                                                                                                                                                                                                                                            t["\u0275eld"](149, 0, null, null, 4, "div", [["class", "nl-submit-wrap cd-modal-action submit-btn"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                                                                                                                                                                t["\u0275and"](16777216, null, null, 1, null, N)), t["\u0275did"](151, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                                                                                                                                                                                                                                                                    ngIf: [0, "ngIf"]
                                                                                                                                                                                                                                                                                                                }, null), (l()(),
                                                                                                                                                                                                                                                                                                                    t["\u0275and"](16777216, null, null, 1, null, z)), t["\u0275did"](153, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                                                                                                                                                                                                                                                                        ngIf: [0, "ngIf"]
                                                                                                                                                                                                                                                                                                                    }, null), (l()(),
                                                                                                                                                                                                                                                                                                                        t["\u0275and"](16777216, null, null, 1, null, G)), t["\u0275did"](155, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                                                                                                                                                                                                                                                                            ngIf: [0, "ngIf"]
                                                                                                                                                                                                                                                                                                                        }, null), (l()(),
                                                                                                                                                                                                                                                                                                                            t["\u0275eld"](156, 0, null, null, 0, "div", [["class", "clearfix"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                                                                                                                                                                                t["\u0275and"](16777216, null, null, 1, null, Z)), t["\u0275did"](158, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                                                                                                                                                                                                                                                                                    ngIf: [0, "ngIf"]
                                                                                                                                                                                                                                                                                                                                }, null), (l()(),
                                                                                                                                                                                                                                                                                                                                    t["\u0275eld"](159, 0, null, null, 6, "div", [["class", "cd-modal"]], null, null, null, null, null)), t["\u0275did"](160, 278528, null, 0, a.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                                                                                                                                                                                                                                                                                                                                        klass: [0, "klass"],
                                                                                                                                                                                                                                                                                                                                        ngClass: [1, "ngClass"]
                                                                                                                                                                                                                                                                                                                                    }, null), t["\u0275pod"](161, {
                                                                                                                                                                                                                                                                                                                                        "model-show": 0
                                                                                                                                                                                                                                                                                                                                    }), (l()(),
                                                                                                                                                                                                                                                                                                                                        t["\u0275eld"](162, 0, null, null, 3, "div", [["class", "cd-modal-content"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                                                                                                                                                                                            t["\u0275eld"](163, 0, null, null, 2, "div", [["class", "thankyou-popup"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                                                                                                                                                                                                t["\u0275and"](16777216, null, null, 1, null, J)), t["\u0275did"](165, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                                                                                                                                                                                                                                                                                                    ngIf: [0, "ngIf"]
                                                                                                                                                                                                                                                                                                                                                }, null)], function (l, n) {
                                                                                                                                                                                                                                                                                                                                                    var e = n.component
                                                                                                                                                                                                                                                                                                                                                        , o = l(n, 3, 0, 1 == e.showHeaderFooter);
                                                                                                                                                                                                                                                                                                                                                    l(n, 2, 0, o);
                                                                                                                                                                                                                                                                                                                                                    var u = l(n, 6, 0, 1 == e.showHeaderFooter);
                                                                                                                                                                                                                                                                                                                                                    l(n, 5, 0, u),
                                                                                                                                                                                                                                                                                                                                                        l(n, 15, 0, !e.showHeaderFooter),
                                                                                                                                                                                                                                                                                                                                                        l(n, 18, 0, "" == e.contact_person_heading),
                                                                                                                                                                                                                                                                                                                                                        l(n, 20, 0, "" != e.contact_person_heading),
                                                                                                                                                                                                                                                                                                                                                        l(n, 22, 0, "" != e.contact_person_description),
                                                                                                                                                                                                                                                                                                                                                        l(n, 25, 0, e.show_enquiry_form_heading),
                                                                                                                                                                                                                                                                                                                                                        l(n, 27, 0, e.show_enquiry_form_heading);
                                                                                                                                                                                                                                                                                                                                                    var i = l(n, 39, 0, e.submitted1 && t["\u0275nov"](n, 45).invalid);
                                                                                                                                                                                                                                                                                                                                                    l(n, 38, 0, "first-name name", i),
                                                                                                                                                                                                                                                                                                                                                        l(n, 41, 0, ""),
                                                                                                                                                                                                                                                                                                                                                        l(n, 42, 0, "100"),
                                                                                                                                                                                                                                                                                                                                                        l(n, 45, 0, "first_name", e.enquiryDetail.first_name);
                                                                                                                                                                                                                                                                                                                                                    var a = l(n, 50, 0, e.submitted1 && t["\u0275nov"](n, 56).invalid);
                                                                                                                                                                                                                                                                                                                                                    l(n, 49, 0, "last-name name", a),
                                                                                                                                                                                                                                                                                                                                                        l(n, 52, 0, ""),
                                                                                                                                                                                                                                                                                                                                                        l(n, 53, 0, "100"),
                                                                                                                                                                                                                                                                                                                                                        l(n, 56, 0, "last_name", e.enquiryDetail.last_name);
                                                                                                                                                                                                                                                                                                                                                    var r = l(n, 65, 0, e.submitted1 && t["\u0275nov"](n, 71).invalid);
                                                                                                                                                                                                                                                                                                                                                    l(n, 64, 0, "form-control", r),
                                                                                                                                                                                                                                                                                                                                                        l(n, 67, 0, ""),
                                                                                                                                                                                                                                                                                                                                                        l(n, 68, 0, "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,50})+$"),
                                                                                                                                                                                                                                                                                                                                                        l(n, 71, 0, "email", e.enquiryDetail.email),
                                                                                                                                                                                                                                                                                                                                                        l(n, 75, 0, e.showemailmsg);
                                                                                                                                                                                                                                                                                                                                                    var d = l(n, 81, 0, e.submitted1 && t["\u0275nov"](n, 87).invalid);
                                                                                                                                                                                                                                                                                                                                                    l(n, 80, 0, "contact-number contact-number-footer", d),
                                                                                                                                                                                                                                                                                                                                                        l(n, 83, 0, ""),
                                                                                                                                                                                                                                                                                                                                                        l(n, 84, 0, "15"),
                                                                                                                                                                                                                                                                                                                                                        l(n, 87, 0, "contact_number", e.enquiryDetail.contact_number),
                                                                                                                                                                                                                                                                                                                                                        l(n, 93, 0, "contact_number_isd_code", e.enquiryDetail.contact_number_isd_code),
                                                                                                                                                                                                                                                                                                                                                        l(n, 101, 0, "" != e.brandlogo),
                                                                                                                                                                                                                                                                                                                                                        l(n, 107, 0, "" != e.brandlogo),
                                                                                                                                                                                                                                                                                                                                                        l(n, 112, 0, "" != e.brandlogo),
                                                                                                                                                                                                                                                                                                                                                        l(n, 117, 0, "" != e.brandlogo);
                                                                                                                                                                                                                                                                                                                                                    var s = l(n, 123, 0, e.submitted1 && t["\u0275nov"](n, 128).invalid);
                                                                                                                                                                                                                                                                                                                                                    l(n, 122, 0, s),
                                                                                                                                                                                                                                                                                                                                                        l(n, 125, 0, ""),
                                                                                                                                                                                                                                                                                                                                                        l(n, 128, 0, "message", e.enquiryDetail.message),
                                                                                                                                                                                                                                                                                                                                                        l(n, 135, 0, e.isValidFile ? "projectfileupload" : "projectfileupload has_danger"),
                                                                                                                                                                                                                                                                                                                                                        l(n, 137, 0, e.isValidFile ? "form-control-file text-danger font-weight-bold" : "form-control-file text-danger font-weight-bold has_danger"),
                                                                                                                                                                                                                                                                                                                                                        l(n, 141, 0, e.ShowDeleteIcon),
                                                                                                                                                                                                                                                                                                                                                        l(n, 143, 0, e.isValidFile ? "upload-file-size " : "upload-file-size error-validation"),
                                                                                                                                                                                                                                                                                                                                                        l(n, 148, 0, "hiddenRecaptcha1", e.captchaSiteKey, "invisible"),
                                                                                                                                                                                                                                                                                                                                                        l(n, 151, 0, !e.EnquiryshowSendingButton),
                                                                                                                                                                                                                                                                                                                                                        l(n, 153, 0, e.EnquiryshowSendingButton),
                                                                                                                                                                                                                                                                                                                                                        l(n, 155, 0, null == e.brandlogo ? null : null == e.brandlogo.data ? null : null == e.brandlogo.data.enquiry_page_brand_logo_image ? null : e.brandlogo.data.enquiry_page_brand_logo_image.url),
                                                                                                                                                                                                                                                                                                                                                        l(n, 158, 0, !e.showHeaderFooter);
                                                                                                                                                                                                                                                                                                                                                    var c = l(n, 161, 0, e.Enquirysuccess);
                                                                                                                                                                                                                                                                                                                                                    l(n, 160, 0, "cd-modal", c),
                                                                                                                                                                                                                                                                                                                                                        l(n, 165, 0, e.thankYou)
                                                                                                                                                                                                                                                                                                                                                }, function (l, n) {
                                                                                                                                                                                                                                                                                                                                                    l(n, 29, 0, t["\u0275nov"](n, 33).ngClassUntouched, t["\u0275nov"](n, 33).ngClassTouched, t["\u0275nov"](n, 33).ngClassPristine, t["\u0275nov"](n, 33).ngClassDirty, t["\u0275nov"](n, 33).ngClassValid, t["\u0275nov"](n, 33).ngClassInvalid, t["\u0275nov"](n, 33).ngClassPending),
                                                                                                                                                                                                                                                                                                                                                        l(n, 37, 0, t["\u0275nov"](n, 41).required ? "" : null, t["\u0275nov"](n, 42).maxlength ? t["\u0275nov"](n, 42).maxlength : null, t["\u0275nov"](n, 47).ngClassUntouched, t["\u0275nov"](n, 47).ngClassTouched, t["\u0275nov"](n, 47).ngClassPristine, t["\u0275nov"](n, 47).ngClassDirty, t["\u0275nov"](n, 47).ngClassValid, t["\u0275nov"](n, 47).ngClassInvalid, t["\u0275nov"](n, 47).ngClassPending),
                                                                                                                                                                                                                                                                                                                                                        l(n, 48, 0, t["\u0275nov"](n, 52).required ? "" : null, t["\u0275nov"](n, 53).maxlength ? t["\u0275nov"](n, 53).maxlength : null, t["\u0275nov"](n, 58).ngClassUntouched, t["\u0275nov"](n, 58).ngClassTouched, t["\u0275nov"](n, 58).ngClassPristine, t["\u0275nov"](n, 58).ngClassDirty, t["\u0275nov"](n, 58).ngClassValid, t["\u0275nov"](n, 58).ngClassInvalid, t["\u0275nov"](n, 58).ngClassPending),
                                                                                                                                                                                                                                                                                                                                                        l(n, 63, 0, t["\u0275nov"](n, 67).required ? "" : null, t["\u0275nov"](n, 68).pattern ? t["\u0275nov"](n, 68).pattern : null, t["\u0275nov"](n, 73).ngClassUntouched, t["\u0275nov"](n, 73).ngClassTouched, t["\u0275nov"](n, 73).ngClassPristine, t["\u0275nov"](n, 73).ngClassDirty, t["\u0275nov"](n, 73).ngClassValid, t["\u0275nov"](n, 73).ngClassInvalid, t["\u0275nov"](n, 73).ngClassPending),
                                                                                                                                                                                                                                                                                                                                                        l(n, 79, 0, t["\u0275nov"](n, 83).required ? "" : null, t["\u0275nov"](n, 84).maxlength ? t["\u0275nov"](n, 84).maxlength : null, t["\u0275nov"](n, 89).ngClassUntouched, t["\u0275nov"](n, 89).ngClassTouched, t["\u0275nov"](n, 89).ngClassPristine, t["\u0275nov"](n, 89).ngClassDirty, t["\u0275nov"](n, 89).ngClassValid, t["\u0275nov"](n, 89).ngClassInvalid, t["\u0275nov"](n, 89).ngClassPending),
                                                                                                                                                                                                                                                                                                                                                        l(n, 90, 0, t["\u0275nov"](n, 95).ngClassUntouched, t["\u0275nov"](n, 95).ngClassTouched, t["\u0275nov"](n, 95).ngClassPristine, t["\u0275nov"](n, 95).ngClassDirty, t["\u0275nov"](n, 95).ngClassValid, t["\u0275nov"](n, 95).ngClassInvalid, t["\u0275nov"](n, 95).ngClassPending),
                                                                                                                                                                                                                                                                                                                                                        l(n, 121, 0, t["\u0275nov"](n, 125).required ? "" : null, t["\u0275nov"](n, 130).ngClassUntouched, t["\u0275nov"](n, 130).ngClassTouched, t["\u0275nov"](n, 130).ngClassPristine, t["\u0275nov"](n, 130).ngClassDirty, t["\u0275nov"](n, 130).ngClassValid, t["\u0275nov"](n, 130).ngClassInvalid, t["\u0275nov"](n, 130).ngClassPending),
                                                                                                                                                                                                                                                                                                                                                        l(n, 147, 0, t["\u0275nov"](n, 148).id)
                                                                                                                                                                                                                                                                                                                                                })
        }
        function X(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 2, "p", [["class", "email-msg-alert"]], null, null, null, null, null)), (l()(),
                    t["\u0275eld"](1, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-lightbulb-o"]], null, null, null, null, null)), (l()(),
                        t["\u0275ted"](-1, null, [" Use business email to help us know you better."]))], null, null)
        }
        function Q(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), t["\u0275did"](1, 147456, null, 0, i.n, [t.ElementRef, t.Renderer2, [2, i.q]], {
                    value: [0, "value"]
                }, null), t["\u0275did"](2, 147456, null, 0, i.u, [t.ElementRef, t.Renderer2, [8, null]], {
                    value: [0, "value"]
                }, null), (l()(),
                    t["\u0275ted"](3, null, [" ", " "]))], function (l, n) {
                        l(n, 1, 0, n.context.$implicit),
                            l(n, 2, 0, n.context.$implicit)
                    }, function (l, n) {
                        l(n, 3, 0, n.context.$implicit)
                    })
        }
        function ll(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 16, "div", [], null, null, null, null, null)), (l()(),
                    t["\u0275eld"](1, 0, null, null, 15, "select", [["data-ref", "topic"], ["id", "topic"], ["name", "topic"], ["required", ""]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "blur"], [null, "ngModelChange"], [null, "change"]], function (l, n, e) {
                        var o = !0
                            , u = l.component;
                        return "change" === n && (o = !1 !== t["\u0275nov"](l, 4).onChange(e.target.value) && o),
                            "blur" === n && (o = !1 !== t["\u0275nov"](l, 4).onTouched() && o),
                            "blur" === n && (o = !1 !== u.onTextboxBlur(e) && o),
                            "ngModelChange" === n && (o = !1 !== (u.enquiryDetail.topic = e) && o),
                            o
                    }, null, null)), t["\u0275did"](2, 278528, null, 0, a.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                        ngClass: [0, "ngClass"]
                    }, null), t["\u0275pod"](3, {
                        has_danger: 0
                    }), t["\u0275did"](4, 16384, null, 0, i.q, [t.Renderer2, t.ElementRef], null, null), t["\u0275did"](5, 16384, null, 0, i.p, [], {
                        required: [0, "required"]
                    }, null), t["\u0275prd"](1024, null, i.g, function (l) {
                        return [l]
                    }, [i.p]), t["\u0275prd"](1024, null, i.h, function (l) {
                        return [l]
                    }, [i.q]), t["\u0275did"](8, 671744, [["topic", 4]], 0, i.m, [[2, i.b], [6, i.g], [8, null], [6, i.h]], {
                        name: [0, "name"],
                        model: [1, "model"]
                    }, {
                        update: "ngModelChange"
                    }), t["\u0275prd"](2048, null, i.i, null, [i.m]), t["\u0275did"](10, 16384, null, 0, i.j, [[4, i.i]], null, null), (l()(),
                        t["\u0275eld"](11, 0, null, null, 3, "option", [["selected", ""], ["value", ""]], null, null, null, null, null)), t["\u0275did"](12, 147456, null, 0, i.n, [t.ElementRef, t.Renderer2, [2, i.q]], {
                            value: [0, "value"]
                        }, null), t["\u0275did"](13, 147456, null, 0, i.u, [t.ElementRef, t.Renderer2, [8, null]], {
                            value: [0, "value"]
                        }, null), (l()(),
                            t["\u0275ted"](-1, null, ["Select"])), (l()(),
                                t["\u0275and"](16777216, null, null, 1, null, Q)), t["\u0275did"](16, 278528, null, 0, a.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                                    ngForOf: [0, "ngForOf"]
                                }, null)], function (l, n) {
                                    var e = n.component
                                        , o = l(n, 3, 0, e.submitted1 && t["\u0275nov"](n, 8).invalid);
                                    l(n, 2, 0, o),
                                        l(n, 5, 0, ""),
                                        l(n, 8, 0, "topic", e.enquiryDetail.topic),
                                        l(n, 12, 0, ""),
                                        l(n, 13, 0, ""),
                                        l(n, 16, 0, null == e.brandlogo ? null : null == e.brandlogo.data ? null : null == e.brandlogo.data.enquiry_fields ? null : e.brandlogo.data.enquiry_fields.topic)
                                }, function (l, n) {
                                    l(n, 1, 0, t["\u0275nov"](n, 5).required ? "" : null, t["\u0275nov"](n, 10).ngClassUntouched, t["\u0275nov"](n, 10).ngClassTouched, t["\u0275nov"](n, 10).ngClassPristine, t["\u0275nov"](n, 10).ngClassDirty, t["\u0275nov"](n, 10).ngClassValid, t["\u0275nov"](n, 10).ngClassInvalid, t["\u0275nov"](n, 10).ngClassPending)
                                })
        }
        function nl(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), t["\u0275did"](1, 147456, null, 0, i.n, [t.ElementRef, t.Renderer2, [2, i.q]], {
                    value: [0, "value"]
                }, null), t["\u0275did"](2, 147456, null, 0, i.u, [t.ElementRef, t.Renderer2, [8, null]], {
                    value: [0, "value"]
                }, null), (l()(),
                    t["\u0275ted"](3, null, [" ", " "]))], function (l, n) {
                        l(n, 1, 0, n.context.$implicit),
                            l(n, 2, 0, n.context.$implicit)
                    }, function (l, n) {
                        l(n, 3, 0, n.context.$implicit)
                    })
        }
        function el(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 16, "div", [], null, null, null, null, null)), (l()(),
                    t["\u0275eld"](1, 0, null, null, 15, "select", [["data-ref", "minimum_budget"], ["id", "minimum_budget"], ["name", "minimum_budget"], ["required", ""]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "blur"], [null, "ngModelChange"], [null, "change"]], function (l, n, e) {
                        var o = !0
                            , u = l.component;
                        return "change" === n && (o = !1 !== t["\u0275nov"](l, 4).onChange(e.target.value) && o),
                            "blur" === n && (o = !1 !== t["\u0275nov"](l, 4).onTouched() && o),
                            "blur" === n && (o = !1 !== u.onTextboxBlur(e) && o),
                            "ngModelChange" === n && (o = !1 !== (u.enquiryDetail.minimum_budget = e) && o),
                            o
                    }, null, null)), t["\u0275did"](2, 278528, null, 0, a.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                        ngClass: [0, "ngClass"]
                    }, null), t["\u0275pod"](3, {
                        has_danger: 0
                    }), t["\u0275did"](4, 16384, null, 0, i.q, [t.Renderer2, t.ElementRef], null, null), t["\u0275did"](5, 16384, null, 0, i.p, [], {
                        required: [0, "required"]
                    }, null), t["\u0275prd"](1024, null, i.g, function (l) {
                        return [l]
                    }, [i.p]), t["\u0275prd"](1024, null, i.h, function (l) {
                        return [l]
                    }, [i.q]), t["\u0275did"](8, 671744, [["minimum_budget", 4]], 0, i.m, [[2, i.b], [6, i.g], [8, null], [6, i.h]], {
                        name: [0, "name"],
                        model: [1, "model"]
                    }, {
                        update: "ngModelChange"
                    }), t["\u0275prd"](2048, null, i.i, null, [i.m]), t["\u0275did"](10, 16384, null, 0, i.j, [[4, i.i]], null, null), (l()(),
                        t["\u0275eld"](11, 0, null, null, 3, "option", [["selected", ""], ["value", ""]], null, null, null, null, null)), t["\u0275did"](12, 147456, null, 0, i.n, [t.ElementRef, t.Renderer2, [2, i.q]], {
                            value: [0, "value"]
                        }, null), t["\u0275did"](13, 147456, null, 0, i.u, [t.ElementRef, t.Renderer2, [8, null]], {
                            value: [0, "value"]
                        }, null), (l()(),
                            t["\u0275ted"](-1, null, ["Select"])), (l()(),
                                t["\u0275and"](16777216, null, null, 1, null, nl)), t["\u0275did"](16, 278528, null, 0, a.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                                    ngForOf: [0, "ngForOf"]
                                }, null)], function (l, n) {
                                    var e = n.component
                                        , o = l(n, 3, 0, e.submitted1 && t["\u0275nov"](n, 8).invalid);
                                    l(n, 2, 0, o),
                                        l(n, 5, 0, ""),
                                        l(n, 8, 0, "minimum_budget", e.enquiryDetail.minimum_budget),
                                        l(n, 12, 0, ""),
                                        l(n, 13, 0, ""),
                                        l(n, 16, 0, null == e.brandlogo ? null : null == e.brandlogo.data ? null : null == e.brandlogo.data.enquiry_fields ? null : e.brandlogo.data.enquiry_fields.budget)
                                }, function (l, n) {
                                    l(n, 1, 0, t["\u0275nov"](n, 5).required ? "" : null, t["\u0275nov"](n, 10).ngClassUntouched, t["\u0275nov"](n, 10).ngClassTouched, t["\u0275nov"](n, 10).ngClassPristine, t["\u0275nov"](n, 10).ngClassDirty, t["\u0275nov"](n, 10).ngClassValid, t["\u0275nov"](n, 10).ngClassInvalid, t["\u0275nov"](n, 10).ngClassPending)
                                })
        }
        function tl(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), t["\u0275did"](1, 147456, null, 0, i.n, [t.ElementRef, t.Renderer2, [2, i.q]], {
                    value: [0, "value"]
                }, null), t["\u0275did"](2, 147456, null, 0, i.u, [t.ElementRef, t.Renderer2, [8, null]], {
                    value: [0, "value"]
                }, null), (l()(),
                    t["\u0275ted"](3, null, [" ", " "]))], function (l, n) {
                        l(n, 1, 0, n.context.$implicit),
                            l(n, 2, 0, n.context.$implicit)
                    }, function (l, n) {
                        l(n, 3, 0, n.context.$implicit)
                    })
        }
        function ol(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 16, "div", [], null, null, null, null, null)), (l()(),
                    t["\u0275eld"](1, 0, null, null, 15, "select", [["data-ref", "how_soon_you_want_to_start"], ["id", "how_soon_you_want_to_start"], ["name", "how_soon_you_want_to_start"], ["required", ""]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "blur"], [null, "ngModelChange"], [null, "change"]], function (l, n, e) {
                        var o = !0
                            , u = l.component;
                        return "change" === n && (o = !1 !== t["\u0275nov"](l, 4).onChange(e.target.value) && o),
                            "blur" === n && (o = !1 !== t["\u0275nov"](l, 4).onTouched() && o),
                            "blur" === n && (o = !1 !== u.onTextboxBlur(e) && o),
                            "ngModelChange" === n && (o = !1 !== (u.enquiryDetail.how_soon_you_want_to_start = e) && o),
                            o
                    }, null, null)), t["\u0275did"](2, 278528, null, 0, a.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                        ngClass: [0, "ngClass"]
                    }, null), t["\u0275pod"](3, {
                        has_danger: 0
                    }), t["\u0275did"](4, 16384, null, 0, i.q, [t.Renderer2, t.ElementRef], null, null), t["\u0275did"](5, 16384, null, 0, i.p, [], {
                        required: [0, "required"]
                    }, null), t["\u0275prd"](1024, null, i.g, function (l) {
                        return [l]
                    }, [i.p]), t["\u0275prd"](1024, null, i.h, function (l) {
                        return [l]
                    }, [i.q]), t["\u0275did"](8, 671744, [["how_soon_you_want_to_start", 4]], 0, i.m, [[2, i.b], [6, i.g], [8, null], [6, i.h]], {
                        name: [0, "name"],
                        model: [1, "model"]
                    }, {
                        update: "ngModelChange"
                    }), t["\u0275prd"](2048, null, i.i, null, [i.m]), t["\u0275did"](10, 16384, null, 0, i.j, [[4, i.i]], null, null), (l()(),
                        t["\u0275eld"](11, 0, null, null, 3, "option", [["selected", ""], ["value", ""]], null, null, null, null, null)), t["\u0275did"](12, 147456, null, 0, i.n, [t.ElementRef, t.Renderer2, [2, i.q]], {
                            value: [0, "value"]
                        }, null), t["\u0275did"](13, 147456, null, 0, i.u, [t.ElementRef, t.Renderer2, [8, null]], {
                            value: [0, "value"]
                        }, null), (l()(),
                            t["\u0275ted"](-1, null, ["Select"])), (l()(),
                                t["\u0275and"](16777216, null, null, 1, null, tl)), t["\u0275did"](16, 278528, null, 0, a.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                                    ngForOf: [0, "ngForOf"]
                                }, null)], function (l, n) {
                                    var e = n.component
                                        , o = l(n, 3, 0, e.submitted1 && t["\u0275nov"](n, 8).invalid);
                                    l(n, 2, 0, o),
                                        l(n, 5, 0, ""),
                                        l(n, 8, 0, "how_soon_you_want_to_start", e.enquiryDetail.how_soon_you_want_to_start),
                                        l(n, 12, 0, ""),
                                        l(n, 13, 0, ""),
                                        l(n, 16, 0, null == e.brandlogo ? null : null == e.brandlogo.data ? null : null == e.brandlogo.data.enquiry_fields ? null : e.brandlogo.data.enquiry_fields.when_to_start)
                                }, function (l, n) {
                                    l(n, 1, 0, t["\u0275nov"](n, 5).required ? "" : null, t["\u0275nov"](n, 10).ngClassUntouched, t["\u0275nov"](n, 10).ngClassTouched, t["\u0275nov"](n, 10).ngClassPristine, t["\u0275nov"](n, 10).ngClassDirty, t["\u0275nov"](n, 10).ngClassValid, t["\u0275nov"](n, 10).ngClassInvalid, t["\u0275nov"](n, 10).ngClassPending)
                                })
        }
        function ul(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), t["\u0275did"](1, 147456, null, 0, i.n, [t.ElementRef, t.Renderer2, [2, i.q]], {
                    value: [0, "value"]
                }, null), t["\u0275did"](2, 147456, null, 0, i.u, [t.ElementRef, t.Renderer2, [8, null]], {
                    value: [0, "value"]
                }, null), (l()(),
                    t["\u0275ted"](3, null, [" ", " "]))], function (l, n) {
                        l(n, 1, 0, n.context.$implicit),
                            l(n, 2, 0, n.context.$implicit)
                    }, function (l, n) {
                        l(n, 3, 0, n.context.$implicit)
                    })
        }
        function il(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 16, "div", [], null, null, null, null, null)), (l()(),
                    t["\u0275eld"](1, 0, null, null, 15, "select", [["data-ref", "requesting_new_project"], ["id", "requesting_new_project"], ["name", "requesting_new_project"], ["required", ""]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "blur"], [null, "ngModelChange"], [null, "change"]], function (l, n, e) {
                        var o = !0
                            , u = l.component;
                        return "change" === n && (o = !1 !== t["\u0275nov"](l, 4).onChange(e.target.value) && o),
                            "blur" === n && (o = !1 !== t["\u0275nov"](l, 4).onTouched() && o),
                            "blur" === n && (o = !1 !== u.onTextboxBlur(e) && o),
                            "ngModelChange" === n && (o = !1 !== (u.enquiryDetail.requesting_new_project = e) && o),
                            o
                    }, null, null)), t["\u0275did"](2, 278528, null, 0, a.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                        ngClass: [0, "ngClass"]
                    }, null), t["\u0275pod"](3, {
                        has_danger: 0
                    }), t["\u0275did"](4, 16384, null, 0, i.q, [t.Renderer2, t.ElementRef], null, null), t["\u0275did"](5, 16384, null, 0, i.p, [], {
                        required: [0, "required"]
                    }, null), t["\u0275prd"](1024, null, i.g, function (l) {
                        return [l]
                    }, [i.p]), t["\u0275prd"](1024, null, i.h, function (l) {
                        return [l]
                    }, [i.q]), t["\u0275did"](8, 671744, [["requesting_new_project", 4]], 0, i.m, [[2, i.b], [6, i.g], [8, null], [6, i.h]], {
                        name: [0, "name"],
                        model: [1, "model"]
                    }, {
                        update: "ngModelChange"
                    }), t["\u0275prd"](2048, null, i.i, null, [i.m]), t["\u0275did"](10, 16384, null, 0, i.j, [[4, i.i]], null, null), (l()(),
                        t["\u0275eld"](11, 0, null, null, 3, "option", [["selected", ""], ["value", ""]], null, null, null, null, null)), t["\u0275did"](12, 147456, null, 0, i.n, [t.ElementRef, t.Renderer2, [2, i.q]], {
                            value: [0, "value"]
                        }, null), t["\u0275did"](13, 147456, null, 0, i.u, [t.ElementRef, t.Renderer2, [8, null]], {
                            value: [0, "value"]
                        }, null), (l()(),
                            t["\u0275ted"](-1, null, ["Select"])), (l()(),
                                t["\u0275and"](16777216, null, null, 1, null, ul)), t["\u0275did"](16, 278528, null, 0, a.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                                    ngForOf: [0, "ngForOf"]
                                }, null)], function (l, n) {
                                    var e = n.component
                                        , o = l(n, 3, 0, e.submitted1 && t["\u0275nov"](n, 8).invalid);
                                    l(n, 2, 0, o),
                                        l(n, 5, 0, ""),
                                        l(n, 8, 0, "requesting_new_project", e.enquiryDetail.requesting_new_project),
                                        l(n, 12, 0, ""),
                                        l(n, 13, 0, ""),
                                        l(n, 16, 0, null == e.brandlogo ? null : null == e.brandlogo.data ? null : null == e.brandlogo.data.enquiry_fields ? null : e.brandlogo.data.enquiry_fields.project_type)
                                }, function (l, n) {
                                    l(n, 1, 0, t["\u0275nov"](n, 5).required ? "" : null, t["\u0275nov"](n, 10).ngClassUntouched, t["\u0275nov"](n, 10).ngClassTouched, t["\u0275nov"](n, 10).ngClassPristine, t["\u0275nov"](n, 10).ngClassDirty, t["\u0275nov"](n, 10).ngClassValid, t["\u0275nov"](n, 10).ngClassInvalid, t["\u0275nov"](n, 10).ngClassPending)
                                })
        }
        function al(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 0, "span", [["class", "fa fa-trash"]], null, [[null, "click"]], function (l, n, e) {
                    var t = !0;
                    return "click" === n && (t = !1 !== l.component.deleteFile() && t),
                        t
                }, null, null))], null, null)
        }
        function rl(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 1, "label", [["class", "required all-field-error"]], null, null, null, null, null)), (l()(),
                    t["\u0275ted"](-1, null, ["All fields are required."]))], null, null)
        }
        function dl(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 1, "button", [["class", "submit btn"], ["id", "submitOtherEnquiryForm"], ["type", "button"]], null, [[null, "click"]], function (l, n, e) {
                    var o = !0
                        , u = l.component;
                    return "click" === n && (o = !1 !== u.addNewEnquiry(t["\u0275nov"](l.parent, 17), u.enquiryDetail, t["\u0275nov"](l.parent, 134)) && o),
                        o
                }, null, null)), (l()(),
                    t["\u0275ted"](-1, null, [" Get Started "]))], null, null)
        }
        function sl(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 1, "button", [["class", "submit btn"], ["disabled", ""], ["id", "bottom-en-submit"], ["type", "button"]], null, null, null, null, null)), (l()(),
                    t["\u0275ted"](-1, null, ["Sending "]))], null, null)
        }
        function cl(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 5, "div", [["class", "copyright"]], null, null, null, null, null)), (l()(),
                    t["\u0275eld"](1, 0, null, null, 4, "div", [["class", "copyright-text"]], null, null, null, null, null)), (l()(),
                        t["\u0275eld"](2, 0, null, null, 1, "span", [["class", "left"]], null, null, null, null, null)), (l()(),
                            t["\u0275ted"](3, null, ["(C) ", ", IndiaNIC"])), (l()(),
                                t["\u0275eld"](4, 0, null, null, 1, "span", [["class", "right"]], null, null, null, null, null)), (l()(),
                                    t["\u0275ted"](-1, null, ["Serving clients since 1997"]))], null, function (l, n) {
                                        l(n, 3, 0, n.component.currentYear)
                                    })
        }
        function pl(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 15, "div", [["class", "container"]], null, null, null, null, null)), (l()(),
                    t["\u0275eld"](1, 0, null, null, 11, "div", [["class", "row align-items-center"]], null, null, null, null, null)), (l()(),
                        t["\u0275eld"](2, 0, null, null, 3, "div", [["class", "col-12 col-lg-6"]], null, null, null, null, null)), (l()(),
                            t["\u0275eld"](3, 0, null, null, 2, "div", [["class", "thankyou-animation"]], null, null, null, null, null)), (l()(),
                                t["\u0275eld"](4, 0, null, null, 1, "lottie-animation-view", [], null, null, null, o.b, o.a)), t["\u0275did"](5, 114688, null, 0, u.a, [t.PLATFORM_ID], {
                                    options: [0, "options"],
                                    width: [1, "width"],
                                    height: [2, "height"]
                                }, null), (l()(),
                                    t["\u0275eld"](6, 0, null, null, 6, "div", [["class", "col-12 col-lg-6"]], null, null, null, null, null)), (l()(),
                                        t["\u0275eld"](7, 0, null, null, 5, "div", [["class", "thankyou-content"]], null, null, null, null, null)), (l()(),
                                            t["\u0275eld"](8, 0, null, null, 0, "div", [], [[8, "innerHTML", 1]], null, null, null, null)), (l()(),
                                                t["\u0275eld"](9, 0, null, null, 3, "div", [["class", "green-btn"]], null, null, null, null, null)), (l()(),
                                                    t["\u0275eld"](10, 0, null, null, 2, "a", [["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (l()(),
                                                        t["\u0275ted"](-1, null, ["Continue "])), (l()(),
                                                            t["\u0275eld"](12, 0, null, null, 0, "span", [["_ngcontent-c1", ""], ["class", "fa fa-long-arrow-right"]], null, null, null, null, null)), (l()(),
                                                                t["\u0275eld"](13, 0, null, null, 2, "div", [["class", "popup-close-ic"]], null, null, null, null, null)), (l()(),
                                                                    t["\u0275eld"](14, 0, null, null, 1, "a", [], null, [[null, "click"]], function (l, n, e) {
                                                                        var t = !0;
                                                                        return "click" === n && (t = !1 !== l.component.noThanks() && t),
                                                                            t
                                                                    }, null, null)), (l()(),
                                                                        t["\u0275eld"](15, 0, null, null, 0, "img", [["alt", "Close"], ["class", "svg-convert"], ["src", "../../assets/images/close-ic.svg"]], null, [[null, "load"]], function (l, n, e) {
                                                                            var t = !0;
                                                                            return "load" === n && (t = !1 !== l.component.commonService.callSVGConverterScript(1, 0) && t),
                                                                                t
                                                                        }, null, null))], function (l, n) {
                                                                            var e = n.component;
                                                                            l(n, 5, 0, e.lottieConfig, e.auto, e.auto)
                                                                        }, function (l, n) {
                                                                            var e = n.component;
                                                                            l(n, 8, 0, null == e.thankYou[0] ? null : null == e.thankYou[0].acf ? null : e.thankYou[0].acf.raw_html),
                                                                                l(n, 10, 0, t["\u0275inlineInterpolate"](1, "", e.next_url, ""))
                                                                        })
        }
        function gl(l) {
            return t["\u0275vid"](0, [(l()(),
                t["\u0275eld"](0, 0, null, null, 164, "div", [["class", "sidemenu services-sidemenu"]], null, null, null, null, null)), (l()(),
                    t["\u0275eld"](1, 0, null, null, 156, "div", [["id", "cbp-spmenu-s2"]], null, null, null, null, null)), t["\u0275did"](2, 278528, null, 0, a.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                        ngClass: [0, "ngClass"]
                    }, null), (l()(),
                        t["\u0275eld"](3, 0, null, null, 153, "div", [["class", "service-landing-form"]], null, null, null, null, null)), (l()(),
                            t["\u0275eld"](4, 0, null, null, 152, "div", [["class", "lets-talk cd-section thanks-popup sidebar-popup services-sidebar-form"], ["id", "lets-talk"]], null, null, null, null, null)), (l()(),
                                t["\u0275eld"](5, 0, null, null, 151, "div", [["id", "enquiry-page-form inner-page-form"]], null, null, null, null, null)), (l()(),
                                    t["\u0275eld"](6, 0, null, null, 150, "div", [["class", "contact-enquiry enquiry-page-form"]], null, null, null, null, null)), (l()(),
                                        t["\u0275eld"](7, 0, null, null, 149, "div", [["class", "sidebar-sec pop-up-sec"]], null, null, null, null, null)), (l()(),
                                            t["\u0275eld"](8, 0, null, null, 147, "div", [["class", "contact-form-sec"]], null, null, null, null, null)), (l()(),
                                                t["\u0275eld"](9, 0, null, null, 5, "div", [["class", "tell-us-title"]], null, null, null, null, null)), (l()(),
                                                    t["\u0275eld"](10, 0, null, null, 1, "h4", [], null, null, null, null, null)), (l()(),
                                                        t["\u0275ted"](-1, null, [" Share your business idea with us."])), (l()(),
                                                            t["\u0275eld"](12, 0, null, null, 2, "div", [["class", "close-form"]], null, null, null, null, null)), (l()(),
                                                                t["\u0275eld"](13, 0, null, null, 1, "button", [["class", "close-sideform"], ["id", "close-sideform"]], null, null, null, null, null)), (l()(),
                                                                    t["\u0275eld"](14, 0, null, null, 0, "img", [["src", "../assets/images/locker-close-icon.svg"]], null, null, null, null, null)), (l()(),
                                                                        t["\u0275eld"](15, 0, null, null, 129, "form", [["class", "form form-register "], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (l, n, e) {
                                                                            var o = !0;
                                                                            return "submit" === n && (o = !1 !== t["\u0275nov"](l, 17).onSubmit(e) && o),
                                                                                "reset" === n && (o = !1 !== t["\u0275nov"](l, 17).onReset() && o),
                                                                                o
                                                                        }, null, null)), t["\u0275did"](16, 16384, null, 0, i.s, [], null, null), t["\u0275did"](17, 4210688, [["myform", 4]], 0, i.l, [[8, null], [8, null]], null, null), t["\u0275prd"](2048, null, i.b, null, [i.l]), t["\u0275did"](19, 16384, null, 0, i.k, [[4, i.b]], null, null), (l()(),
                                                                            t["\u0275eld"](20, 0, null, null, 25, "div", [["class", "group required-field"]], null, null, null, null, null)), (l()(),
                                                                                t["\u0275eld"](21, 0, null, null, 1, "label", [["for", "first_name"]], null, null, null, null, null)), (l()(),
                                                                                    t["\u0275ted"](-1, null, ["Name"])), (l()(),
                                                                                        t["\u0275eld"](23, 0, null, null, 10, "input", [["class", "first-name name"], ["id", "first_name"], ["maxlength", "100"], ["name", "first_name"], ["placeholder", "First Name"], ["required", ""], ["type", "text"]], [[1, "required", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "blur"], [null, "keypress"], [null, "input"], [null, "compositionstart"], [null, "compositionend"]], function (l, n, e) {
                                                                                            var o = !0
                                                                                                , u = l.component;
                                                                                            return "input" === n && (o = !1 !== t["\u0275nov"](l, 26)._handleInput(e.target.value) && o),
                                                                                                "blur" === n && (o = !1 !== t["\u0275nov"](l, 26).onTouched() && o),
                                                                                                "compositionstart" === n && (o = !1 !== t["\u0275nov"](l, 26)._compositionStart() && o),
                                                                                                "compositionend" === n && (o = !1 !== t["\u0275nov"](l, 26)._compositionEnd(e.target.value) && o),
                                                                                                "ngModelChange" === n && (o = !1 !== (u.enquiryDetail.first_name = e) && o),
                                                                                                "blur" === n && (o = !1 !== u.onTextboxBlur(e) && o),
                                                                                                "keypress" === n && (o = !1 !== u.clsAlphaOnly(e) && o),
                                                                                                o
                                                                                        }, null, null)), t["\u0275did"](24, 278528, null, 0, a.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                                                                                            klass: [0, "klass"],
                                                                                            ngClass: [1, "ngClass"]
                                                                                        }, null), t["\u0275pod"](25, {
                                                                                            has_danger: 0
                                                                                        }), t["\u0275did"](26, 16384, null, 0, i.c, [t.Renderer2, t.ElementRef, [2, i.a]], null, null), t["\u0275did"](27, 16384, null, 0, i.p, [], {
                                                                                            required: [0, "required"]
                                                                                        }, null), t["\u0275did"](28, 540672, null, 0, i.e, [], {
                                                                                            maxlength: [0, "maxlength"]
                                                                                        }, null), t["\u0275prd"](1024, null, i.g, function (l, n) {
                                                                                            return [l, n]
                                                                                        }, [i.p, i.e]), t["\u0275prd"](1024, null, i.h, function (l) {
                                                                                            return [l]
                                                                                        }, [i.c]), t["\u0275did"](31, 671744, [["first_name", 4]], 0, i.m, [[2, i.b], [6, i.g], [8, null], [6, i.h]], {
                                                                                            name: [0, "name"],
                                                                                            model: [1, "model"]
                                                                                        }, {
                                                                                            update: "ngModelChange"
                                                                                        }), t["\u0275prd"](2048, null, i.i, null, [i.m]), t["\u0275did"](33, 16384, null, 0, i.j, [[4, i.i]], null, null), (l()(),
                                                                                            t["\u0275eld"](34, 0, null, null, 10, "input", [["class", "last-name name"], ["maxlength", "100"], ["name", "last_name"], ["placeholder", "Last Name"], ["required", ""], ["type", "text"]], [[1, "required", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "blur"], [null, "keypress"], [null, "input"], [null, "compositionstart"], [null, "compositionend"]], function (l, n, e) {
                                                                                                var o = !0
                                                                                                    , u = l.component;
                                                                                                return "input" === n && (o = !1 !== t["\u0275nov"](l, 37)._handleInput(e.target.value) && o),
                                                                                                    "blur" === n && (o = !1 !== t["\u0275nov"](l, 37).onTouched() && o),
                                                                                                    "compositionstart" === n && (o = !1 !== t["\u0275nov"](l, 37)._compositionStart() && o),
                                                                                                    "compositionend" === n && (o = !1 !== t["\u0275nov"](l, 37)._compositionEnd(e.target.value) && o),
                                                                                                    "ngModelChange" === n && (o = !1 !== (u.enquiryDetail.last_name = e) && o),
                                                                                                    "blur" === n && (o = !1 !== u.onTextboxBlur(e) && o),
                                                                                                    "keypress" === n && (o = !1 !== u.clsAlphaOnly(e) && o),
                                                                                                    o
                                                                                            }, null, null)), t["\u0275did"](35, 278528, null, 0, a.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                                                                                                klass: [0, "klass"],
                                                                                                ngClass: [1, "ngClass"]
                                                                                            }, null), t["\u0275pod"](36, {
                                                                                                has_danger: 0
                                                                                            }), t["\u0275did"](37, 16384, null, 0, i.c, [t.Renderer2, t.ElementRef, [2, i.a]], null, null), t["\u0275did"](38, 16384, null, 0, i.p, [], {
                                                                                                required: [0, "required"]
                                                                                            }, null), t["\u0275did"](39, 540672, null, 0, i.e, [], {
                                                                                                maxlength: [0, "maxlength"]
                                                                                            }, null), t["\u0275prd"](1024, null, i.g, function (l, n) {
                                                                                                return [l, n]
                                                                                            }, [i.p, i.e]), t["\u0275prd"](1024, null, i.h, function (l) {
                                                                                                return [l]
                                                                                            }, [i.c]), t["\u0275did"](42, 671744, [["last_name", 4]], 0, i.m, [[2, i.b], [6, i.g], [8, null], [6, i.h]], {
                                                                                                name: [0, "name"],
                                                                                                model: [1, "model"]
                                                                                            }, {
                                                                                                update: "ngModelChange"
                                                                                            }), t["\u0275prd"](2048, null, i.i, null, [i.m]), t["\u0275did"](44, 16384, null, 0, i.j, [[4, i.i]], null, null), (l()(),
                                                                                                t["\u0275eld"](45, 0, null, null, 0, "div", [["class", "clearfix"]], null, null, null, null, null)), (l()(),
                                                                                                    t["\u0275eld"](46, 0, null, null, 15, "div", [["class", "group required-field"]], null, null, null, null, null)), (l()(),
                                                                                                        t["\u0275eld"](47, 0, null, null, 1, "label", [["for", "email"]], null, null, null, null, null)), (l()(),
                                                                                                            t["\u0275ted"](-1, null, ["Email"])), (l()(),
                                                                                                                t["\u0275eld"](49, 0, null, null, 10, "input", [["class", "form-control"], ["id", "email"], ["name", "email"], ["pattern", "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,50})+$"], ["placeholder", "Your Email Address"], ["required", ""], ["type", "email"]], [[1, "required", 0], [1, "pattern", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "blur"], [null, "keypress"], [null, "input"], [null, "compositionstart"], [null, "compositionend"]], function (l, n, e) {
                                                                                                                    var o = !0
                                                                                                                        , u = l.component;
                                                                                                                    return "input" === n && (o = !1 !== t["\u0275nov"](l, 52)._handleInput(e.target.value) && o),
                                                                                                                        "blur" === n && (o = !1 !== t["\u0275nov"](l, 52).onTouched() && o),
                                                                                                                        "compositionstart" === n && (o = !1 !== t["\u0275nov"](l, 52)._compositionStart() && o),
                                                                                                                        "compositionend" === n && (o = !1 !== t["\u0275nov"](l, 52)._compositionEnd(e.target.value) && o),
                                                                                                                        "ngModelChange" === n && (o = !1 !== (u.enquiryDetail.email = e) && o),
                                                                                                                        "blur" === n && (o = !1 !== u.onBlur(e) && o),
                                                                                                                        "keypress" === n && (o = !1 !== u.clsAlphaOnlyEmail(e) && o),
                                                                                                                        o
                                                                                                                }, null, null)), t["\u0275did"](50, 278528, null, 0, a.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                                                                                                                    klass: [0, "klass"],
                                                                                                                    ngClass: [1, "ngClass"]
                                                                                                                }, null), t["\u0275pod"](51, {
                                                                                                                    has_danger: 0
                                                                                                                }), t["\u0275did"](52, 16384, null, 0, i.c, [t.Renderer2, t.ElementRef, [2, i.a]], null, null), t["\u0275did"](53, 16384, null, 0, i.p, [], {
                                                                                                                    required: [0, "required"]
                                                                                                                }, null), t["\u0275did"](54, 540672, null, 0, i.o, [], {
                                                                                                                    pattern: [0, "pattern"]
                                                                                                                }, null), t["\u0275prd"](1024, null, i.g, function (l, n) {
                                                                                                                    return [l, n]
                                                                                                                }, [i.p, i.o]), t["\u0275prd"](1024, null, i.h, function (l) {
                                                                                                                    return [l]
                                                                                                                }, [i.c]), t["\u0275did"](57, 671744, [["email", 4]], 0, i.m, [[2, i.b], [6, i.g], [8, null], [6, i.h]], {
                                                                                                                    name: [0, "name"],
                                                                                                                    model: [1, "model"]
                                                                                                                }, {
                                                                                                                    update: "ngModelChange"
                                                                                                                }), t["\u0275prd"](2048, null, i.i, null, [i.m]), t["\u0275did"](59, 16384, null, 0, i.j, [[4, i.i]], null, null), (l()(),
                                                                                                                    t["\u0275and"](16777216, null, null, 1, null, X)), t["\u0275did"](61, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                                                                        ngIf: [0, "ngIf"]
                                                                                                                    }, null), (l()(),
                                                                                                                        t["\u0275eld"](62, 0, null, null, 20, "div", [["class", "group"]], null, null, null, null, null)), (l()(),
                                                                                                                            t["\u0275eld"](63, 0, null, null, 1, "label", [["for", "contact_number"]], null, null, null, null, null)), (l()(),
                                                                                                                                t["\u0275ted"](-1, null, ["Mobile phone"])), (l()(),
                                                                                                                                    t["\u0275eld"](65, 0, null, null, 10, "input", [["class", "contact-number contact-number-footer"], ["data-ref", "contact_number"], ["id", "contact_number"], ["maxlength", "15"], ["name", "contact_number"], ["placeholder", "Phone Number"], ["required", ""], ["type", "tel"]], [[1, "required", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "keypress"], [null, "blur"], [null, "input"], [null, "compositionstart"], [null, "compositionend"]], function (l, n, e) {
                                                                                                                                        var o = !0
                                                                                                                                            , u = l.component;
                                                                                                                                        return "input" === n && (o = !1 !== t["\u0275nov"](l, 68)._handleInput(e.target.value) && o),
                                                                                                                                            "blur" === n && (o = !1 !== t["\u0275nov"](l, 68).onTouched() && o),
                                                                                                                                            "compositionstart" === n && (o = !1 !== t["\u0275nov"](l, 68)._compositionStart() && o),
                                                                                                                                            "compositionend" === n && (o = !1 !== t["\u0275nov"](l, 68)._compositionEnd(e.target.value) && o),
                                                                                                                                            "ngModelChange" === n && (o = !1 !== (u.enquiryDetail.contact_number = e) && o),
                                                                                                                                            "keypress" === n && (o = !1 !== u.isNumberFormat(u.event) && o),
                                                                                                                                            "blur" === n && (o = !1 !== u.onTextboxBlur(e) && o),
                                                                                                                                            o
                                                                                                                                    }, null, null)), t["\u0275did"](66, 278528, null, 0, a.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                                                                                                                                        klass: [0, "klass"],
                                                                                                                                        ngClass: [1, "ngClass"]
                                                                                                                                    }, null), t["\u0275pod"](67, {
                                                                                                                                        has_danger: 0
                                                                                                                                    }), t["\u0275did"](68, 16384, null, 0, i.c, [t.Renderer2, t.ElementRef, [2, i.a]], null, null), t["\u0275did"](69, 16384, null, 0, i.p, [], {
                                                                                                                                        required: [0, "required"]
                                                                                                                                    }, null), t["\u0275did"](70, 540672, null, 0, i.e, [], {
                                                                                                                                        maxlength: [0, "maxlength"]
                                                                                                                                    }, null), t["\u0275prd"](1024, null, i.g, function (l, n) {
                                                                                                                                        return [l, n]
                                                                                                                                    }, [i.p, i.e]), t["\u0275prd"](1024, null, i.h, function (l) {
                                                                                                                                        return [l]
                                                                                                                                    }, [i.c]), t["\u0275did"](73, 671744, [["contact_number", 4]], 0, i.m, [[2, i.b], [6, i.g], [8, null], [6, i.h]], {
                                                                                                                                        name: [0, "name"],
                                                                                                                                        model: [1, "model"]
                                                                                                                                    }, {
                                                                                                                                        update: "ngModelChange"
                                                                                                                                    }), t["\u0275prd"](2048, null, i.i, null, [i.m]), t["\u0275did"](75, 16384, null, 0, i.j, [[4, i.i]], null, null), (l()(),
                                                                                                                                        t["\u0275eld"](76, 0, null, null, 5, "input", [["class", "number contact_number_isd_code_footer"], ["data-ref", "contact_number_isd_code"], ["id", "contact_number_isd_code"], ["name", "contact_number_isd_code"], ["type", "hidden"], ["value", "contact_number_isd_code"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (l, n, e) {
                                                                                                                                            var o = !0
                                                                                                                                                , u = l.component;
                                                                                                                                            return "input" === n && (o = !1 !== t["\u0275nov"](l, 77)._handleInput(e.target.value) && o),
                                                                                                                                                "blur" === n && (o = !1 !== t["\u0275nov"](l, 77).onTouched() && o),
                                                                                                                                                "compositionstart" === n && (o = !1 !== t["\u0275nov"](l, 77)._compositionStart() && o),
                                                                                                                                                "compositionend" === n && (o = !1 !== t["\u0275nov"](l, 77)._compositionEnd(e.target.value) && o),
                                                                                                                                                "ngModelChange" === n && (o = !1 !== (u.enquiryDetail.contact_number_isd_code = e) && o),
                                                                                                                                                o
                                                                                                                                        }, null, null)), t["\u0275did"](77, 16384, null, 0, i.c, [t.Renderer2, t.ElementRef, [2, i.a]], null, null), t["\u0275prd"](1024, null, i.h, function (l) {
                                                                                                                                            return [l]
                                                                                                                                        }, [i.c]), t["\u0275did"](79, 671744, [["contact_number_isd_code", 4]], 0, i.m, [[2, i.b], [8, null], [8, null], [6, i.h]], {
                                                                                                                                            name: [0, "name"],
                                                                                                                                            model: [1, "model"]
                                                                                                                                        }, {
                                                                                                                                            update: "ngModelChange"
                                                                                                                                        }), t["\u0275prd"](2048, null, i.i, null, [i.m]), t["\u0275did"](81, 16384, null, 0, i.j, [[4, i.i]], null, null), (l()(),
                                                                                                                                            t["\u0275eld"](82, 0, null, null, 0, "div", [["class", "clearfix"]], null, null, null, null, null)), (l()(),
                                                                                                                                                t["\u0275eld"](83, 0, null, null, 4, "div", [["class", "group required-field"]], null, null, null, null, null)), (l()(),
                                                                                                                                                    t["\u0275eld"](84, 0, null, null, 1, "label", [["for", "topic"]], null, null, null, null, null)), (l()(),
                                                                                                                                                        t["\u0275ted"](-1, null, ["Select a Service"])), (l()(),
                                                                                                                                                            t["\u0275and"](16777216, null, null, 1, null, ll)), t["\u0275did"](87, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                                                                                                                ngIf: [0, "ngIf"]
                                                                                                                                                            }, null), (l()(),
                                                                                                                                                                t["\u0275eld"](88, 0, null, null, 10, "div", [["class", "budget-group"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                    t["\u0275eld"](89, 0, null, null, 4, "div", [["class", "group required-field minimum-budget"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                        t["\u0275eld"](90, 0, null, null, 1, "label", [["for", "minimum_budget"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                            t["\u0275ted"](-1, null, ["Budget"])), (l()(),
                                                                                                                                                                                t["\u0275and"](16777216, null, null, 1, null, el)), t["\u0275did"](93, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                                                                                                                                    ngIf: [0, "ngIf"]
                                                                                                                                                                                }, null), (l()(),
                                                                                                                                                                                    t["\u0275eld"](94, 0, null, null, 4, "div", [["class", "group required-field start-budget"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                                        t["\u0275eld"](95, 0, null, null, 1, "label", [["for", "how_soon_you_want_to_start"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                                            t["\u0275ted"](-1, null, ["How soon you want to start? "])), (l()(),
                                                                                                                                                                                                t["\u0275and"](16777216, null, null, 1, null, ol)), t["\u0275did"](98, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                                                                                                                                                    ngIf: [0, "ngIf"]
                                                                                                                                                                                                }, null), (l()(),
                                                                                                                                                                                                    t["\u0275eld"](99, 0, null, null, 4, "div", [["class", "group required-field"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                                                        t["\u0275eld"](100, 0, null, null, 1, "label", [["for", "requesting_new_project"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                                                            t["\u0275ted"](-1, null, ["Requirement"])), (l()(),
                                                                                                                                                                                                                t["\u0275and"](16777216, null, null, 1, null, il)), t["\u0275did"](103, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                                                                                                                                                                    ngIf: [0, "ngIf"]
                                                                                                                                                                                                                }, null), (l()(),
                                                                                                                                                                                                                    t["\u0275eld"](104, 0, null, null, 12, "div", [["class", "group"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                                                                        t["\u0275eld"](105, 0, null, null, 1, "label", [["for", "message"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                                                                            t["\u0275ted"](-1, null, ["Brief about the project"])), (l()(),
                                                                                                                                                                                                                                t["\u0275eld"](107, 0, null, null, 9, "textarea", [["id", "message"], ["name", "message"], ["placeholder", ""], ["required", ""], ["rows", "2"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "blur"], [null, "keypress"], [null, "input"], [null, "compositionstart"], [null, "compositionend"]], function (l, n, e) {
                                                                                                                                                                                                                                    var o = !0
                                                                                                                                                                                                                                        , u = l.component;
                                                                                                                                                                                                                                    return "input" === n && (o = !1 !== t["\u0275nov"](l, 110)._handleInput(e.target.value) && o),
                                                                                                                                                                                                                                        "blur" === n && (o = !1 !== t["\u0275nov"](l, 110).onTouched() && o),
                                                                                                                                                                                                                                        "compositionstart" === n && (o = !1 !== t["\u0275nov"](l, 110)._compositionStart() && o),
                                                                                                                                                                                                                                        "compositionend" === n && (o = !1 !== t["\u0275nov"](l, 110)._compositionEnd(e.target.value) && o),
                                                                                                                                                                                                                                        "ngModelChange" === n && (o = !1 !== (u.enquiryDetail.message = e) && o),
                                                                                                                                                                                                                                        "blur" === n && (o = !1 !== u.onTextboxBlur(e) && o),
                                                                                                                                                                                                                                        "keypress" === n && (o = !1 !== u.clsAlphaOnly(e) && o),
                                                                                                                                                                                                                                        o
                                                                                                                                                                                                                                }, null, null)), t["\u0275did"](108, 278528, null, 0, a.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                                                                                                                                                                                                                                    ngClass: [0, "ngClass"]
                                                                                                                                                                                                                                }, null), t["\u0275pod"](109, {
                                                                                                                                                                                                                                    has_danger: 0
                                                                                                                                                                                                                                }), t["\u0275did"](110, 16384, null, 0, i.c, [t.Renderer2, t.ElementRef, [2, i.a]], null, null), t["\u0275did"](111, 16384, null, 0, i.p, [], {
                                                                                                                                                                                                                                    required: [0, "required"]
                                                                                                                                                                                                                                }, null), t["\u0275prd"](1024, null, i.g, function (l) {
                                                                                                                                                                                                                                    return [l]
                                                                                                                                                                                                                                }, [i.p]), t["\u0275prd"](1024, null, i.h, function (l) {
                                                                                                                                                                                                                                    return [l]
                                                                                                                                                                                                                                }, [i.c]), t["\u0275did"](114, 671744, [["message", 4]], 0, i.m, [[2, i.b], [6, i.g], [8, null], [6, i.h]], {
                                                                                                                                                                                                                                    name: [0, "name"],
                                                                                                                                                                                                                                    model: [1, "model"]
                                                                                                                                                                                                                                }, {
                                                                                                                                                                                                                                    update: "ngModelChange"
                                                                                                                                                                                                                                }), t["\u0275prd"](2048, null, i.i, null, [i.m]), t["\u0275did"](116, 16384, null, 0, i.j, [[4, i.i]], null, null), (l()(),
                                                                                                                                                                                                                                    t["\u0275eld"](117, 0, null, null, 13, "div", [["class", "group file-upload-sec"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                                                                                        t["\u0275eld"](118, 0, null, null, 1, "label", [["for", "file"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                                                                                            t["\u0275ted"](-1, null, ["Have a file to share?"])), (l()(),
                                                                                                                                                                                                                                                t["\u0275eld"](120, 0, null, null, 7, "div", [], null, null, null, null, null)), t["\u0275did"](121, 278528, null, 0, a.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                                                                                                                                                                                                                                                    ngClass: [0, "ngClass"]
                                                                                                                                                                                                                                                }, null), (l()(),
                                                                                                                                                                                                                                                    t["\u0275eld"](122, 0, null, null, 1, "input", [["id", "inputfile"], ["type", "file"]], null, [[null, "change"]], function (l, n, e) {
                                                                                                                                                                                                                                                        var t = !0;
                                                                                                                                                                                                                                                        return "change" === n && (t = !1 !== l.component.handleFileInput(e.target.files) && t),
                                                                                                                                                                                                                                                            t
                                                                                                                                                                                                                                                    }, null, null)), t["\u0275did"](123, 278528, null, 0, a.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                                                                                                                                                                                                                                                        ngClass: [0, "ngClass"]
                                                                                                                                                                                                                                                    }, null), (l()(),
                                                                                                                                                                                                                                                        t["\u0275eld"](124, 0, null, null, 1, "p", [["id", "inputfiledetail"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                                                                                                            t["\u0275ted"](-1, null, ["Select or Drop your file here"])), (l()(),
                                                                                                                                                                                                                                                                t["\u0275and"](16777216, null, null, 1, null, al)), t["\u0275did"](127, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                                                                                                                                                                                                                    ngIf: [0, "ngIf"]
                                                                                                                                                                                                                                                                }, null), (l()(),
                                                                                                                                                                                                                                                                    t["\u0275eld"](128, 0, null, null, 2, "p", [], null, null, null, null, null)), t["\u0275did"](129, 278528, null, 0, a.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                                                                                                                                                                                                                                                                        ngClass: [0, "ngClass"]
                                                                                                                                                                                                                                                                    }, null), (l()(),
                                                                                                                                                                                                                                                                        t["\u0275ted"](-1, null, [" Only Document, Image or ZIP file. Max size 8MB"])), (l()(),
                                                                                                                                                                                                                                                                            t["\u0275eld"](131, 0, null, null, 13, "div", [["class", "bottom-area"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                                                                                                                                t["\u0275eld"](132, 0, null, null, 4, "div", [["class", "captcha"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                                                                                                                                    t["\u0275eld"](133, 0, null, null, 1, "re-captcha", [["id", "hiddenRecaptcha1"], ["name", "hiddenRecaptcha1"], ["required", ""], ["size", "invisible"]], [[1, "id", 0]], [[null, "resolved"]], function (l, n, e) {
                                                                                                                                                                                                                                                                                        var t = !0;
                                                                                                                                                                                                                                                                                        return "resolved" === n && (t = !1 !== l.component.resolved(e) && t),
                                                                                                                                                                                                                                                                                            t
                                                                                                                                                                                                                                                                                    }, r.b, r.a)), t["\u0275did"](134, 4374528, [[1, 4], ["recaptchaRef", 4]], 0, d.g, [t.ElementRef, d.i, t.NgZone, [2, d.d]], {
                                                                                                                                                                                                                                                                                        id: [0, "id"],
                                                                                                                                                                                                                                                                                        siteKey: [1, "siteKey"],
                                                                                                                                                                                                                                                                                        size: [2, "size"]
                                                                                                                                                                                                                                                                                    }, {
                                                                                                                                                                                                                                                                                        resolved: "resolved"
                                                                                                                                                                                                                                                                                    }), (l()(),
                                                                                                                                                                                                                                                                                        t["\u0275and"](16777216, null, null, 1, null, rl)), t["\u0275did"](136, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                                                                                                                                                                                                                                            ngIf: [0, "ngIf"]
                                                                                                                                                                                                                                                                                        }, null), (l()(),
                                                                                                                                                                                                                                                                                            t["\u0275eld"](137, 0, null, null, 4, "div", [["class", "nl-submit-wrap cd-modal-action submit-btn"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                                                                                                                                                t["\u0275and"](16777216, null, null, 1, null, dl)), t["\u0275did"](139, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                                                                                                                                                                                                                                                    ngIf: [0, "ngIf"]
                                                                                                                                                                                                                                                                                                }, null), (l()(),
                                                                                                                                                                                                                                                                                                    t["\u0275and"](16777216, null, null, 1, null, sl)), t["\u0275did"](141, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                                                                                                                                                                                                                                                        ngIf: [0, "ngIf"]
                                                                                                                                                                                                                                                                                                    }, null), (l()(),
                                                                                                                                                                                                                                                                                                        t["\u0275eld"](142, 0, null, null, 1, "div", [["class", "secure-ftr"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                                                                                                                                                            t["\u0275ted"](-1, null, ["100% Secure. Zero Spam."])), (l()(),
                                                                                                                                                                                                                                                                                                                t["\u0275eld"](144, 0, null, null, 0, "div", [["class", "clearfix"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                                                                                                                                                                    t["\u0275eld"](145, 0, null, null, 8, "div", [["class", "copyright-recaptcha"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                                                                                                                                                                        t["\u0275eld"](146, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(),
                                                                                                                                                                                                                                                                                                                            t["\u0275ted"](-1, null, ["This site is protected by reCAPTCHA and the Google "])), (l()(),
                                                                                                                                                                                                                                                                                                                                t["\u0275eld"](148, 0, null, null, 1, "a", [["href", "https://policies.google.com/privacy"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                                                                                                                                                                                    t["\u0275ted"](-1, null, ["Privacy Policy"])), (l()(),
                                                                                                                                                                                                                                                                                                                                        t["\u0275ted"](-1, null, [" and "])), (l()(),
                                                                                                                                                                                                                                                                                                                                            t["\u0275eld"](151, 0, null, null, 1, "a", [["href", "https://policies.google.com/terms"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                                                                                                                                                                                                t["\u0275ted"](-1, null, ["Terms of Service"])), (l()(),
                                                                                                                                                                                                                                                                                                                                                    t["\u0275ted"](-1, null, [" apply."])), (l()(),
                                                                                                                                                                                                                                                                                                                                                        t["\u0275and"](16777216, null, null, 1, null, cl)), t["\u0275did"](155, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                                                                                                                                                                                                                                                                                                            ngIf: [0, "ngIf"]
                                                                                                                                                                                                                                                                                                                                                        }, null), (l()(),
                                                                                                                                                                                                                                                                                                                                                            t["\u0275eld"](156, 0, null, null, 0, "div", [["class", "clearfix"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                                                                                                                                                                                                                t["\u0275eld"](157, 0, null, null, 0, "div", [["class", "bg-popup-mode"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                                                                                                                                                                                                                    t["\u0275eld"](158, 0, null, null, 6, "div", [["class", "cd-modal"]], null, null, null, null, null)), t["\u0275did"](159, 278528, null, 0, a.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                                                                                                                                                                                                                                                                                                                                                                        klass: [0, "klass"],
                                                                                                                                                                                                                                                                                                                                                                        ngClass: [1, "ngClass"]
                                                                                                                                                                                                                                                                                                                                                                    }, null), t["\u0275pod"](160, {
                                                                                                                                                                                                                                                                                                                                                                        "model-show": 0
                                                                                                                                                                                                                                                                                                                                                                    }), (l()(),
                                                                                                                                                                                                                                                                                                                                                                        t["\u0275eld"](161, 0, null, null, 3, "div", [["class", "cd-modal-content"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                                                                                                                                                                                                                            t["\u0275eld"](162, 0, null, null, 2, "div", [["class", "thankyou-popup"]], null, null, null, null, null)), (l()(),
                                                                                                                                                                                                                                                                                                                                                                                t["\u0275and"](16777216, null, null, 1, null, pl)), t["\u0275did"](164, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                                                                                                                                                                                                                                                                                                                                    ngIf: [0, "ngIf"]
                                                                                                                                                                                                                                                                                                                                                                                }, null)], function (l, n) {
                                                                                                                                                                                                                                                                                                                                                                                    var e = n.component;
                                                                                                                                                                                                                                                                                                                                                                                    l(n, 2, 0, e.commonService.IsDarkMode ? "cbp-spmenu cbp-spmenu-vertical cbp-spmenu-right theme-black" : "cbp-spmenu cbp-spmenu-vertical cbp-spmenu-right");
                                                                                                                                                                                                                                                                                                                                                                                    var o = l(n, 25, 0, e.submitted1 && t["\u0275nov"](n, 31).invalid);
                                                                                                                                                                                                                                                                                                                                                                                    l(n, 24, 0, "first-name name", o),
                                                                                                                                                                                                                                                                                                                                                                                        l(n, 27, 0, ""),
                                                                                                                                                                                                                                                                                                                                                                                        l(n, 28, 0, "100"),
                                                                                                                                                                                                                                                                                                                                                                                        l(n, 31, 0, "first_name", e.enquiryDetail.first_name);
                                                                                                                                                                                                                                                                                                                                                                                    var u = l(n, 36, 0, e.submitted1 && t["\u0275nov"](n, 42).invalid);
                                                                                                                                                                                                                                                                                                                                                                                    l(n, 35, 0, "last-name name", u),
                                                                                                                                                                                                                                                                                                                                                                                        l(n, 38, 0, ""),
                                                                                                                                                                                                                                                                                                                                                                                        l(n, 39, 0, "100"),
                                                                                                                                                                                                                                                                                                                                                                                        l(n, 42, 0, "last_name", e.enquiryDetail.last_name);
                                                                                                                                                                                                                                                                                                                                                                                    var i = l(n, 51, 0, e.submitted1 && t["\u0275nov"](n, 57).invalid);
                                                                                                                                                                                                                                                                                                                                                                                    l(n, 50, 0, "form-control", i),
                                                                                                                                                                                                                                                                                                                                                                                        l(n, 53, 0, ""),
                                                                                                                                                                                                                                                                                                                                                                                        l(n, 54, 0, "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,50})+$"),
                                                                                                                                                                                                                                                                                                                                                                                        l(n, 57, 0, "email", e.enquiryDetail.email),
                                                                                                                                                                                                                                                                                                                                                                                        l(n, 61, 0, e.showemailmsg);
                                                                                                                                                                                                                                                                                                                                                                                    var a = l(n, 67, 0, e.submitted1 && t["\u0275nov"](n, 73).invalid);
                                                                                                                                                                                                                                                                                                                                                                                    l(n, 66, 0, "contact-number contact-number-footer", a),
                                                                                                                                                                                                                                                                                                                                                                                        l(n, 69, 0, ""),
                                                                                                                                                                                                                                                                                                                                                                                        l(n, 70, 0, "15"),
                                                                                                                                                                                                                                                                                                                                                                                        l(n, 73, 0, "contact_number", e.enquiryDetail.contact_number),
                                                                                                                                                                                                                                                                                                                                                                                        l(n, 79, 0, "contact_number_isd_code", e.enquiryDetail.contact_number_isd_code),
                                                                                                                                                                                                                                                                                                                                                                                        l(n, 87, 0, "" != e.brandlogo),
                                                                                                                                                                                                                                                                                                                                                                                        l(n, 93, 0, "" != e.brandlogo),
                                                                                                                                                                                                                                                                                                                                                                                        l(n, 98, 0, "" != e.brandlogo),
                                                                                                                                                                                                                                                                                                                                                                                        l(n, 103, 0, "" != e.brandlogo);
                                                                                                                                                                                                                                                                                                                                                                                    var r = l(n, 109, 0, e.submitted1 && t["\u0275nov"](n, 114).invalid);
                                                                                                                                                                                                                                                                                                                                                                                    l(n, 108, 0, r),
                                                                                                                                                                                                                                                                                                                                                                                        l(n, 111, 0, ""),
                                                                                                                                                                                                                                                                                                                                                                                        l(n, 114, 0, "message", e.enquiryDetail.message),
                                                                                                                                                                                                                                                                                                                                                                                        l(n, 121, 0, e.isValidFile ? "projectfileupload" : "projectfileupload has_danger"),
                                                                                                                                                                                                                                                                                                                                                                                        l(n, 123, 0, e.isValidFile ? "form-control-file text-danger font-weight-bold" : "form-control-file text-danger font-weight-bold has_danger"),
                                                                                                                                                                                                                                                                                                                                                                                        l(n, 127, 0, e.ShowDeleteIcon),
                                                                                                                                                                                                                                                                                                                                                                                        l(n, 129, 0, e.isValidFile ? "upload-file-size " : "upload-file-size error-validation"),
                                                                                                                                                                                                                                                                                                                                                                                        l(n, 134, 0, "hiddenRecaptcha1", e.captchaSiteKey, "invisible"),
                                                                                                                                                                                                                                                                                                                                                                                        l(n, 136, 0, e.fieldRequiredError),
                                                                                                                                                                                                                                                                                                                                                                                        l(n, 139, 0, !e.EnquiryshowSendingButton),
                                                                                                                                                                                                                                                                                                                                                                                        l(n, 141, 0, e.EnquiryshowSendingButton),
                                                                                                                                                                                                                                                                                                                                                                                        l(n, 155, 0, !e.showHeaderFooter);
                                                                                                                                                                                                                                                                                                                                                                                    var d = l(n, 160, 0, e.Enquirysuccess);
                                                                                                                                                                                                                                                                                                                                                                                    l(n, 159, 0, "cd-modal", d),
                                                                                                                                                                                                                                                                                                                                                                                        l(n, 164, 0, e.thankYou)
                                                                                                                                                                                                                                                                                                                                                                                }, function (l, n) {
                                                                                                                                                                                                                                                                                                                                                                                    l(n, 15, 0, t["\u0275nov"](n, 19).ngClassUntouched, t["\u0275nov"](n, 19).ngClassTouched, t["\u0275nov"](n, 19).ngClassPristine, t["\u0275nov"](n, 19).ngClassDirty, t["\u0275nov"](n, 19).ngClassValid, t["\u0275nov"](n, 19).ngClassInvalid, t["\u0275nov"](n, 19).ngClassPending),
                                                                                                                                                                                                                                                                                                                                                                                        l(n, 23, 0, t["\u0275nov"](n, 27).required ? "" : null, t["\u0275nov"](n, 28).maxlength ? t["\u0275nov"](n, 28).maxlength : null, t["\u0275nov"](n, 33).ngClassUntouched, t["\u0275nov"](n, 33).ngClassTouched, t["\u0275nov"](n, 33).ngClassPristine, t["\u0275nov"](n, 33).ngClassDirty, t["\u0275nov"](n, 33).ngClassValid, t["\u0275nov"](n, 33).ngClassInvalid, t["\u0275nov"](n, 33).ngClassPending),
                                                                                                                                                                                                                                                                                                                                                                                        l(n, 34, 0, t["\u0275nov"](n, 38).required ? "" : null, t["\u0275nov"](n, 39).maxlength ? t["\u0275nov"](n, 39).maxlength : null, t["\u0275nov"](n, 44).ngClassUntouched, t["\u0275nov"](n, 44).ngClassTouched, t["\u0275nov"](n, 44).ngClassPristine, t["\u0275nov"](n, 44).ngClassDirty, t["\u0275nov"](n, 44).ngClassValid, t["\u0275nov"](n, 44).ngClassInvalid, t["\u0275nov"](n, 44).ngClassPending),
                                                                                                                                                                                                                                                                                                                                                                                        l(n, 49, 0, t["\u0275nov"](n, 53).required ? "" : null, t["\u0275nov"](n, 54).pattern ? t["\u0275nov"](n, 54).pattern : null, t["\u0275nov"](n, 59).ngClassUntouched, t["\u0275nov"](n, 59).ngClassTouched, t["\u0275nov"](n, 59).ngClassPristine, t["\u0275nov"](n, 59).ngClassDirty, t["\u0275nov"](n, 59).ngClassValid, t["\u0275nov"](n, 59).ngClassInvalid, t["\u0275nov"](n, 59).ngClassPending),
                                                                                                                                                                                                                                                                                                                                                                                        l(n, 65, 0, t["\u0275nov"](n, 69).required ? "" : null, t["\u0275nov"](n, 70).maxlength ? t["\u0275nov"](n, 70).maxlength : null, t["\u0275nov"](n, 75).ngClassUntouched, t["\u0275nov"](n, 75).ngClassTouched, t["\u0275nov"](n, 75).ngClassPristine, t["\u0275nov"](n, 75).ngClassDirty, t["\u0275nov"](n, 75).ngClassValid, t["\u0275nov"](n, 75).ngClassInvalid, t["\u0275nov"](n, 75).ngClassPending),
                                                                                                                                                                                                                                                                                                                                                                                        l(n, 76, 0, t["\u0275nov"](n, 81).ngClassUntouched, t["\u0275nov"](n, 81).ngClassTouched, t["\u0275nov"](n, 81).ngClassPristine, t["\u0275nov"](n, 81).ngClassDirty, t["\u0275nov"](n, 81).ngClassValid, t["\u0275nov"](n, 81).ngClassInvalid, t["\u0275nov"](n, 81).ngClassPending),
                                                                                                                                                                                                                                                                                                                                                                                        l(n, 107, 0, t["\u0275nov"](n, 111).required ? "" : null, t["\u0275nov"](n, 116).ngClassUntouched, t["\u0275nov"](n, 116).ngClassTouched, t["\u0275nov"](n, 116).ngClassPristine, t["\u0275nov"](n, 116).ngClassDirty, t["\u0275nov"](n, 116).ngClassValid, t["\u0275nov"](n, 116).ngClassInvalid, t["\u0275nov"](n, 116).ngClassPending),
                                                                                                                                                                                                                                                                                                                                                                                        l(n, 133, 0, t["\u0275nov"](n, 134).id)
                                                                                                                                                                                                                                                                                                                                                                                })
        }
        function ml(l) {
            return t["\u0275vid"](0, [t["\u0275qud"](671088640, 1, {
                recaptchaEle: 0
            }), (l()(),
                t["\u0275and"](16777216, null, null, 1, null, v)), t["\u0275did"](2, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(),
                    t["\u0275and"](16777216, null, null, 1, null, W)), t["\u0275did"](4, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                        ngIf: [0, "ngIf"]
                    }, null), (l()(),
                        t["\u0275and"](16777216, null, null, 1, null, gl)), t["\u0275did"](6, 16384, null, 0, a.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                            ngIf: [0, "ngIf"]
                        }, null)], function (l, n) {
                            var e = n.component;
                            l(n, 2, 0, e.showPortfolioForm && "Portfolio" == e.showForm),
                                l(n, 4, 0, e.showPortfolioForm && "Enquiry" == e.showForm && "services" != e.isService),
                                l(n, 6, 0, e.showPortfolioForm && "services" == e.isService)
                        }, null)
        }
    },
    WZG6: function (l, n, e) {
        "use strict";
        e.d(n, "a", function () {
            return o
        }),
            e.d(n, "b", function () {
                return u
            });
        var t = e("CcnG")
            , o = (e("z0F3"),
                e("gIcY"),
                t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                }));
        function u(l) {
            return t["\u0275vid"](0, [], null, null)
        }
    },
    agoJ: function (l, n, e) {
        "use strict";
        e.d(n, "a", function () {
            return s
        });
        var t = e("ZYCi")
            , o = e("VnD/")
            , u = e("67Y/")
            , i = e("psW0")
            , a = e("ABfF")
            , r = e("CcnG")
            , d = e("ZYjt")
            , s = function () {
                function l(l, n, e, t) {
                    this.titleService = l,
                        this.meta = n,
                        this.router = e,
                        this.activatedRoute = t,
                        this.config = a.a
                }
                return l.prototype.updateMeta = function (l, n) {
                    if (null != l) {
                        this.updateTitle(l.yoast_wpseo_title),
                            this.meta.updateTag({
                                name: "keywords",
                                content: this.checkNullPointer(l.yoast_wpseo_metakeywords)
                            }),
                            this.meta.updateTag({
                                name: "description",
                                content: this.checkNullPointer(l.yoast_wpseo_metadesc)
                            }),
                            "" != l.yoast_wpseo_opengraph_title && this.meta.updateTag({
                                property: "og:title",
                                content: this.checkNullPointer(l.yoast_wpseo_opengraph_title)
                            }),
                            "" != l.yoast_wpseo_opengraph_description && this.meta.updateTag({
                                property: "og:description",
                                content: this.checkNullPointer(l.yoast_wpseo_opengraph_description)
                            }),
                            "" != l.yoast_wpseo_opengraph_image && this.meta.updateTag({
                                property: "og:image",
                                content: this.checkNullPointer(l.yoast_wpseo_opengraph_image)
                            }),
                            this.meta.updateTag({
                                property: "og:url",
                                content: this.checkNullPointer(this.seoReplaceRootURLToBlank(n))
                            }),
                            this.meta.updateTag({
                                name: "focuskw",
                                content: this.checkNullPointer(l.yoast_wpseo_focuskw)
                            }),
                            this.meta.updateTag({
                                name: "linkdex",
                                content: this.checkNullPointer(l.yoast_wpseo_linkdex)
                            });
                        var e = "index"
                            , t = "follow";
                        "1" == l.yoast_wpseo_meta_robots_nofollow && (t = "nofollow"),
                            "1" == l.yoast_wpseo_meta_robots_noindex && (e = "noindex"),
                            this.meta.updateTag({
                                name: "robots",
                                content: this.checkNullPointer(e + ", " + t)
                            }),
                            this.meta.updateTag({
                                name: "redirect",
                                content: this.checkNullPointer(l.yoast_wpseo_redirect)
                            }),
                            this.meta.updateTag({
                                name: "twitter:title",
                                content: this.checkNullPointer(l.yoast_wpseo_twitter_title)
                            }),
                            this.meta.updateTag({
                                name: "twitter:description",
                                content: this.checkNullPointer(l.yoast_wpseo_twitter_description)
                            }),
                            this.meta.updateTag({
                                name: "twitter:image",
                                content: this.checkNullPointer(l.yoast_wpseo_twitter_image)
                            }),
                            this.meta.updateTag({
                                name: "twitter:card",
                                content: "summary"
                            }),
                            this.meta.updateTag({
                                name: "twitter:site",
                                content: "@indianic"
                            }),
                            this.meta.updateTag({
                                name: "twitter:creator",
                                content: "@indianic"
                            }),
                            this.meta.updateTag({
                                name: "language",
                                content: "english"
                            })
                    }
                }
                    ,
                    l.prototype.seoReplaceRootURLToBlank = function (l) {
                        return l ? this.config.baseSiteURL + "/" + l.replace(this.config.rootUrl, "") : l
                    }
                    ,
                    l.prototype.updateBlogMeta = function (l, n, e) {
                        if (null != l) {
                            this.updateTitle(l._aioseop_title),
                                this.meta.updateTag({
                                    name: "description",
                                    content: this.checkNullPointer(l._aioseop_description)
                                }),
                                "" != l._aioseop_title && this.meta.updateTag({
                                    property: "og:title",
                                    content: this.checkNullPointer(l._aioseop_title)
                                }),
                                "" != l._aioseop_description && this.meta.updateTag({
                                    property: "og:description",
                                    content: this.checkNullPointer(l._aioseop_description)
                                }),
                                "" != e && this.meta.updateTag({
                                    property: "og:image",
                                    content: this.checkNullPointer(e)
                                }),
                                this.meta.updateTag({
                                    property: "og:url",
                                    content: this.checkNullPointer(this.seoReplaceRootURLToBlank(n))
                                });
                            var t = "index"
                                , o = "follow";
                            "on" == l._aioseop_nofollow && (o = "nofollow"),
                                "on" == l._aioseop_noindex && (t = "noindex"),
                                this.meta.updateTag({
                                    name: "robots",
                                    content: this.checkNullPointer(t + ", " + o)
                                }),
                                this.meta.updateTag({
                                    name: "language",
                                    content: "english"
                                })
                        }
                    }
                    ,
                    l.prototype.checkNullPointer = function (l) {
                        return null != l ? l : ""
                    }
                    ,
                    l.prototype.updateTitle = function (l) {
                        var n = this;
                        l ? this.titleService.setTitle(l) : this.router.events.pipe(Object(o.a)(function (l) {
                            return l instanceof t.d
                        }), Object(u.a)(function () {
                            return n.activatedRoute
                        }), Object(u.a)(function (l) {
                            for (; l.firstChild;)
                                l = l.firstChild;
                            return l
                        }), Object(o.a)(function (l) {
                            return "primary" === l.outlet
                        }), Object(i.a)(function (l) {
                            return l.data
                        })).subscribe(function (l) {
                            n.titleService.setTitle(l.title)
                        })
                    }
                    ,
                    l.ngInjectableDef = r.defineInjectable({
                        factory: function () {
                            return new l(r.inject(d.j), r.inject(d.i), r.inject(t.m), r.inject(t.a))
                        },
                        token: l,
                        providedIn: "root"
                    }),
                    l
            }()
    },
    maxO: function (l, n, e) {
        "use strict";
        e.d(n, "c", function () {
            return t
        }),
            e.d(n, "e", function () {
                return o
            }),
            e.d(n, "d", function () {
                return u
            }),
            e.d(n, "b", function () {
                return i
            }),
            e.d(n, "a", function () {
                return a
            });
        var t = function () {
            function l(l) {
                this.sanitized = l
            }
            return l.prototype.transform = function (l, n) {
                return this.sanitized.bypassSecurityTrustHtml(l)
            }
                ,
                l
        }()
            , o = function () {
                function l(l) {
                    this.sanitized = l
                }
                return l.prototype.transform = function (l, n) {
                    return l.length > 55 ? l.substr(0, 55) + "..." : l
                }
                    ,
                    l
            }()
            , u = function () {
                function l() { }
                return l.prototype.transform = function (l) {
                    return l.length > 30 ? l.substring(0, 30) + "..." : l
                }
                    ,
                    l
            }()
            , i = function () {
                function l() { }
                return l.prototype.transform = function (l, n) {
                    var e = "";
                    if (null != l.type)
                        for (var t = 0, o = l.type; t < o.length; t++) {
                            var u = o[t];
                            e = e + (u = (u = u.replace(" ", "-").toLowerCase()).split(" ").join("-")) + " "
                        }
                    if (null != l.technology)
                        for (var i = 0, a = l.technology; i < a.length; i++) {
                            var r = a[i];
                            e = e + (r = (r = r.replace(" ", "-").toLowerCase()).split(" ").join("-")) + " "
                        }
                    if (null != l.industry)
                        for (var d = 0, s = l.industry; d < s.length; d++) {
                            var c = s[d];
                            e = e + (c = (c = c.replace(" ", "-").toLowerCase()).split(" ").join("-")) + " "
                        }
                    return "brands" != n ? "col-12 col-sm-6 col-md-6 col-lg-4 cs-mar-top-60 filter-result " + e : "col-12 col-sm-6 col-md-6 col-lg-4 mar-top-100 filter-result " + e
                }
                    ,
                    l
            }()
            , a = function () {
                return function () { }
            }()
    }
}]);
