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


















(window.webpackJsonp = window.webpackJsonp || []).push([[21], {
    W5Ts: function (n, l, e) {
        "use strict";
        e.r(l);
        var t = e("CcnG")
            , i = function () {
                return function () { }
            }()
            , o = e("pMnS")
            , u = e("JbCa")
            , c = e("Ip0R")
            , a = e("ZYCi")
            , r = e("TLCe")
            , p = e("Ju/l")
            , g = e("maxO")
            , s = e("ZYjt")
            , m = e("mrSG")
            , d = e("QSRU")
            , _ = e("agoJ")
            , f = function (n) {
                function l(l, e, t, i, o) {
                    var u = n.call(this, e) || this;
                    return u.sanitizer = l,
                        u.route = t,
                        u.meta = i,
                        u.deviceService = o,
                        u.slug = "",
                        u.next_url = "",
                        u.submitted = !1,
                        u.success = !1,
                        u.Enquirysuccess = !1,
                        u.showSendingButton = !1,
                        u.EnquiryshowSendingButton = !1,
                        u.MyPrevUrl = "",
                        u.servicePage = "services",
                        u.enquiryDetail = {
                            action: "inquiry_brand_chat",
                            "form-name": "Enquiry",
                            first_name: "",
                            last_name: "",
                            topic: "",
                            email: "",
                            contact_number: "",
                            contact_number_isd_code: "",
                            comapany_name: "",
                            message: ""
                        },
                        u.style2 = u.sanitizer.bypassSecurityTrustResourceUrl("../../assets/css/landing_pages_css/slick.css" + u.commonService.versionName),
                        u.style3 = u.sanitizer.bypassSecurityTrustResourceUrl("../../assets/css/landing_pages_css/jquery.fancybox.min.css" + u.commonService.versionName),
                        u.intlTelInput = u.sanitizer.bypassSecurityTrustResourceUrl("../../assets/css/intlTelInput.css" + u.commonService.versionName),
                        u
                }
                return Object(m.c)(l, n),
                    l.prototype.ngOnInit = function () {
                        var n = this;
                        this.isMobile = this.deviceService.isMobile(),
                            this.route.params.subscribe(function (l) {
                                l.pageName && l.technologyName ? n.slug = l.pageName : n.router.url.split("/")[2] ? n.router.url.indexOf("?") > -1 ? (n.tempString = n.router.url.substring(0, n.router.url.indexOf("?")),
                                    n.slug = n.tempString.split("/")[2]) : n.slug = n.router.url.split("/")[2] : n.router.url.indexOf("?") > -1 ? (n.tempString = n.router.url.substring(0, n.router.url.indexOf("?")),
                                        n.slug = n.tempString.split("/")[1]) : n.slug = n.router.url.split("/")[1],
                                    n.commonService.callApi("wp/v2/pages/?slug=" + n.slug, {}, "get", !1, !0).then(function (l) {
                                        n.isBrowser() && ($(".preloader").hide(),
                                            window.scrollTo(0, 0)),
                                            l.length > 1 ? (console.log(l[1]),
                                                n.meta.updateMeta(l[1].yoast_meta, l[1].link),
                                                n.pagedata = Array(l[1]),
                                                n.isBrowser() && n.commonService.AddMyPageData(document.URL, l[1].slug),
                                                n.pageResponse = l[1].acf.technology_service_landing_page) : (l && l.length > 0 ? n.meta.updateMeta(l[0].yoast_meta, l[0].link) : n.router.navigate(["/not_found"]),
                                                    n.pagedata = l,
                                                    console.log(n.pagedata),
                                                    n.isBrowser() && n.commonService.AddMyPageData(document.URL, n.pagedata[0].slug),
                                                    n.pageResponse = l[0].acf.technology_service_landing_page,
                                                    n.commonService.callApi("acf/v3/options/theme-services", {}, "get", !1, !0).then(function (l) {
                                                        for (var e = l.acf.theme_services_settings_flexible_content, t = 0; t < e.length; t++)
                                                            "theme_service_settings_solution_module" === e[t].acf_fc_layout ? n.solutionDetails = e[t] : "theme_service_settings_success_story_module" === e[t].acf_fc_layout ? n.successStories = e[t] : "track_records_module" === e[t].acf_fc_layout ? n.trackRecords = e[t] : "service_settings_indianic_services" === e[t].acf_fc_layout ? n.indianicServices = e[t] : "free_trial_module" === e[t].acf_fc_layout ? n.trialSection = e[t] : "request_a_quote_section" === e[t].acf_fc_layout ? n.requestAQuoteSection = e[t] : "partner_section" === e[t].acf_fc_layout && (n.partnerSection = e[t]);
                                                        n.pagedata[0].acf && n.pagedata[0].acf.technology_service_landing_page && n.pagedata[0].acf.technology_service_landing_page.find(function (n) {
                                                            return "show_trusted_brands_module" === n.acf_fc_layout && n.show_trusted_brands_module
                                                        }) && n.commonService.callApi("wp/v2/brandlogo-settings", {}, "get", !1, !0).then(function (l) {
                                                            n.trustedBy = l
                                                        }),
                                                            n.isBrowser() && ($.getScript("assets/js/landing_page_js/jquery.fancybox.min.js" + n.commonService.versionName),
                                                                $.getScript("assets/js/services.js" + n.commonService.versionName))
                                                    }))
                                    })
                            })
                    }
                    ,
                    l.prototype.lineWordWrap = function (n) {
                        return n && n.length > 160 ? n.substr(0, 159) + "..." : n
                    }
                    ,
                    l.prototype.setBackgroundGradient = function (n, l) {
                        return "linear-gradient(225deg, " + n + " 0%, " + l + " 100%)"
                    }
                    ,
                    l
            }(d.a)
            , x = e("5Ccn")
            , b = t["\u0275crt"]({
                encapsulation: 0,
                styles: [['.left-responsive[_ngcontent-%COMP%]{float:right}.right-responsive[_ngcontent-%COMP%]{float:left}h2[_ngcontent-%COMP%]{color:#252b33;font-size:48px;font-weight:800;letter-spacing:-1px;line-height:60px}h3[_ngcontent-%COMP%]{color:#252b33;font-size:22px;line-height:30px;font-weight:800;margin-bottom:15px}p[_ngcontent-%COMP%]{color:#252b33;font-size:16px;font-weight:400;line-height:26px}.linkGroupCol-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{line-height:1.2}.sub-title[_ngcontent-%COMP%]{font-size:16px;font-weight:600;color:#252b33;text-transform:uppercase;margin-bottom:10px}.talk-btn[_ngcontent-%COMP%]{color:#fff;background:#f13c31;display:inline-block;font-size:16px;font-weight:600;padding:10px 30px;border-radius:80px;border:2px solid #f13c31}.talk-btn[_ngcontent-%COMP%]:hover{background:0 0;color:#f13c31}a.enquiry-btn[_ngcontent-%COMP%], button.enquiry-btn[_ngcontent-%COMP%]{background:#fff;color:#f13c31;font-size:16px;font-weight:600;border-radius:50px;padding:12px 36px;display:inline-block;margin-top:2px;border:0;cursor:pointer;transition:all .3s ease-in-out}  .close-sideform{background:0 0;border:0;cursor:pointer}  .close-sideform:focus, a.enquiry-btn[_ngcontent-%COMP%]:focus, button.enquiry-btn[_ngcontent-%COMP%]:focus{outline:0}.pad-t-b[_ngcontent-%COMP%]{padding:100px 0}.mrg-t-30[_ngcontent-%COMP%]{margin-top:30px}.mrg-t-40[_ngcontent-%COMP%]{margin-top:40px}.mrg-t-60[_ngcontent-%COMP%]{margin-top:60px}.mrg-t-100[_ngcontent-%COMP%]{margin-top:100px}.mrg-t-200[_ngcontent-%COMP%]{margin-top:200px}.google-conversion-code[_ngcontent-%COMP%] > iframe[_ngcontent-%COMP%]{height:0;display:block}  body.scroll-fixed{overflow:hidden}  body.scroll-fixed #wrapper{-webkit-filter:blur(3px);filter:blur(3px)}  body.scroll-fixed #wrapper:after{content:"";background:rgba(0,0,0,.3);position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%;z-index:9999}.landing-hero-banner[_ngcontent-%COMP%]   .landing-banner-sec[_ngcontent-%COMP%]{width:100%}.landing-hero-banner[_ngcontent-%COMP%]   .landing-banner-sec[_ngcontent-%COMP%]   .landing-row[_ngcontent-%COMP%]{display:flex}.landing-banner-sec[_ngcontent-%COMP%]   .landing-row[_ngcontent-%COMP%]   .banner-text-col[_ngcontent-%COMP%]{width:41.666667%}.landing-banner-sec[_ngcontent-%COMP%]   .landing-row[_ngcontent-%COMP%]   .banner-img-col[_ngcontent-%COMP%]{width:58.333333%}.landing-hero-banner[_ngcontent-%COMP%]{margin:0 auto;width:100%;display:block;height:100%;background-color:#fff;position:relative}.landing-hero-banner[_ngcontent-%COMP%]   .services-right-img[_ngcontent-%COMP%]{height:640px;position:relative}.landing-hero-banner[_ngcontent-%COMP%]   .services-hero-title[_ngcontent-%COMP%]{display:inline-block;width:100%;text-align:left;padding:80px 60px 0 100px}.landing-hero-banner[_ngcontent-%COMP%]   .services-hero-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{letter-spacing:-1px;font-size:60px;line-height:70px;color:#252b33;font-weight:800;margin-bottom:30px}.landing-hero-banner[_ngcontent-%COMP%]   .services-hero-sub-title[_ngcontent-%COMP%]{font-size:24px;color:#252b33;letter-spacing:-.5px;line-height:30px;font-weight:600;margin-bottom:40px}.landing-hero-banner[_ngcontent-%COMP%]   .services-hero-title[_ngcontent-%COMP%]   .approch-sec[_ngcontent-%COMP%]{font-size:16px;color:#252b33;letter-spacing:0;line-height:28px;width:95%}.landing-hero-banner[_ngcontent-%COMP%]   .services-hero-desc[_ngcontent-%COMP%]   .talk-btn[_ngcontent-%COMP%]{color:#fff;background:#f13c31;display:inline-block;font-size:16px;font-weight:600;padding:10px 30px;border-radius:80px;border:2px solid #f13c31;margin-top:40px}.landing-hero-banner[_ngcontent-%COMP%]   .services-hero-desc[_ngcontent-%COMP%]   .talk-btn[_ngcontent-%COMP%]:hover{background:0 0;color:#f13c31}.landing-hero-banner[_ngcontent-%COMP%]   .services-hero-image[_ngcontent-%COMP%]{display:block;height:100%}.landing-hero-banner[_ngcontent-%COMP%]   .services-hero-image[_ngcontent-%COMP%]   .landing-pattern-bg[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;opacity:.1;z-index:9}.landing-hero-banner[_ngcontent-%COMP%]   .services-hero-image[_ngcontent-%COMP%]   .right-hero-image[_ngcontent-%COMP%]{position:absolute;bottom:-60px;padding:5px;z-index:99;width:100%;height:100%;text-align:center}.landing-hero-banner[_ngcontent-%COMP%]   .services-hero-image[_ngcontent-%COMP%]   .single-hero-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:inherit}.free-trail-sec[_ngcontent-%COMP%]{padding:100px 0;background:#f8f8f8}.free-trail-landing[_ngcontent-%COMP%]{padding:150px 0 100px;background-image:linear-gradient(-360deg,#f8f8f8 0,#fff 100%)}.free-trail-sec[_ngcontent-%COMP%]   .trail-left[_ngcontent-%COMP%]{background:linear-gradient(to right,#f13c31 0,#ff9653 100%);padding:30px;border-radius:10px;text-align:center}.free-trail-sec[_ngcontent-%COMP%]   .trail-left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#fff;font-size:32px;line-height:42px;font-weight:800}.free-trail-sec[_ngcontent-%COMP%]   .trail-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff;font-size:16px;font-weight:400;margin:10px 0 0}.free-trail-sec[_ngcontent-%COMP%]   .trail-right[_ngcontent-%COMP%]{padding:0 15px}.free-trail-sec[_ngcontent-%COMP%]   .trail-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;font-weight:400;line-height:26px}.free-trail-sec[_ngcontent-%COMP%]   .trail-right[_ngcontent-%COMP%]   .hire-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;background:#f13c31;display:inline-block;font-size:16px;font-weight:600;padding:10px 30px;border-radius:80px;border:2px solid #f13c31;margin-top:10px}.free-trail-sec[_ngcontent-%COMP%]   .trail-right[_ngcontent-%COMP%]   .hire-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:0 0;color:#f13c31}.we-work-sec[_ngcontent-%COMP%]{height:700px!important}.title-block[_ngcontent-%COMP%]{text-align:center;margin-bottom:40px}.we-work-sec[_ngcontent-%COMP%]   .approch-slider[_ngcontent-%COMP%]{position:relative}.we-work-sec[_ngcontent-%COMP%]   .approch-slider[_ngcontent-%COMP%]   .flex-sec[_ngcontent-%COMP%]{display:flex;align-items:flex-start;height:auto}.we-work-sec[_ngcontent-%COMP%]   .approch-slider[_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%]{padding:15px 0}.we-work-sec[_ngcontent-%COMP%]   .approch-slider[_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]{width:100%;max-width:350px;margin:0 auto}.we-work-sec[_ngcontent-%COMP%]   .approch-slider[_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.we-work-sec[_ngcontent-%COMP%]   .approch-slider[_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%]:focus{outline:0}.we-work-sec[_ngcontent-%COMP%]   .approch-slider[_ngcontent-%COMP%]     .slick-dots{position:relative;text-align:center;bottom:0}.we-work-sec[_ngcontent-%COMP%]   .approch-slider[_ngcontent-%COMP%]     .slick-dots li{position:relative;height:30px;width:30px;text-align:center;display:inline-block;transition:all .3s ease;-webkit-transition:.3s;-moz-transition:.3s;-ms-transition:all .3s ease;-o-transition:.3s;cursor:pointer}.we-work-sec[_ngcontent-%COMP%]   .approch-slider[_ngcontent-%COMP%]     .slick-dots li button{border:2px solid #8a959e;padding:0;width:10px;height:10px;font-size:0;border-radius:50px;background:0 0;cursor:pointer}.we-work-sec[_ngcontent-%COMP%]   .approch-slider[_ngcontent-%COMP%]     .slick-dots li button:focus{outline:0}.we-work-sec[_ngcontent-%COMP%]   .approch-slider[_ngcontent-%COMP%]     .slick-dots li.slick-active button{background-color:#8a959e}.we-work-sec[_ngcontent-%COMP%]   .approch-slider[_ngcontent-%COMP%]   .work-info[_ngcontent-%COMP%]{padding:0 60px 0 0}.we-work-sec[_ngcontent-%COMP%]   .approch-slider[_ngcontent-%COMP%]     .slick-arrow{position:absolute;top:40%;width:40px;height:12px;color:#fff;font-size:40px;font-weight:400;line-height:14px;display:flex;align-items:center;justify-content:center;border-radius:100%;cursor:pointer;z-index:10}.we-work-sec[_ngcontent-%COMP%]   .approch-slider[_ngcontent-%COMP%]     .slick-arrow.pre-arrow{left:-55px;background:url(ic-arrow-back.33577a5427f47283c5bf.svg) no-repeat}.we-work-sec[_ngcontent-%COMP%]   .approch-slider[_ngcontent-%COMP%]     .slick-arrow.next-arrow{right:-55px;background:url(ic-arrow-right.5229d0ece34470ccd6f3.svg) no-repeat}.what-we-sec[_ngcontent-%COMP%]{background:#f8f8f8}.what-we-sec[_ngcontent-%COMP%]   .flex-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.what-we-sec[_ngcontent-%COMP%]   .service-box[_ngcontent-%COMP%]{border:1px solid #d9dee2;padding:30px;border-radius:4px;background:#fff;height:100%}.service-sec[_ngcontent-%COMP%]   .flex-service[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.service-sec[_ngcontent-%COMP%]   p.tag-line[_ngcontent-%COMP%]{width:65%;margin:20px auto 0}.service-sec[_ngcontent-%COMP%]   .service-box[_ngcontent-%COMP%]{padding:60px 40px 0;border-radius:4px;text-align:center}.service-sec[_ngcontent-%COMP%]   .service-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{line-height:32px;margin-top:30px}.service-sec[_ngcontent-%COMP%]   .service-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:208px}.benefit-sec[_ngcontent-%COMP%]{position:relative;overflow-x:hidden}.benefit-sec[_ngcontent-%COMP%]   .no-padding[_ngcontent-%COMP%]{padding:0}.benefit-sec[_ngcontent-%COMP%]   .benefit-left[_ngcontent-%COMP%]{height:852px;background-repeat:no-repeat;background-size:cover;background-position:center center}.benefit-sec[_ngcontent-%COMP%]   .benefit-dec[_ngcontent-%COMP%]{text-align:center;padding:80px 150px}.benefit-sec[_ngcontent-%COMP%]   .benefit-dec[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#fff;font-size:40px;line-height:50px;font-weight:800}.benefit-sec[_ngcontent-%COMP%]   .benefit-dec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff;font-size:16px;font-weight:400;width:90%;margin:20px auto 40px}.benefit-sec[_ngcontent-%COMP%]   .benefit-dec[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{box-shadow:0 20px 30px 0 rgba(0,0,0,.3);border-radius:4px}.benefit-sec[_ngcontent-%COMP%]   .benefit-dec[_ngcontent-%COMP%]   ul.solution-point[_ngcontent-%COMP%]{padding-left:0;margin-top:50px}.benefit-sec[_ngcontent-%COMP%]   .benefit-dec[_ngcontent-%COMP%]   ul.solution-point[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;display:block;color:#fff;font-size:16px;background:url(/assets/images/ckeck-icon.png) no-repeat;padding-left:30px;margin-bottom:10px;text-align:left;font-weight:600;width:48%;float:left}.benefit-sec[_ngcontent-%COMP%]   .benefit-right[_ngcontent-%COMP%]{height:852px;background-size:cover;background-repeat:no-repeat;background-position:center center}.benefit-sec[_ngcontent-%COMP%]   .benefit-right[_ngcontent-%COMP%]   ul.solution-point.left[_ngcontent-%COMP%]{padding-left:45px}.benefit-sec[_ngcontent-%COMP%]   .benefit-right[_ngcontent-%COMP%]   .startup-benifit[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#fff;font-size:40px;font-weight:600}.brands-sec[_ngcontent-%COMP%]   ul.brand-logo[_ngcontent-%COMP%]{position:relative;text-align:center}.brands-sec[_ngcontent-%COMP%]   ul.brand-logo[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-flex;width:19.7%;height:150px;vertical-align:middle}.brands-sec[_ngcontent-%COMP%]   ul.brand-logo[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%}.brands-sec[_ngcontent-%COMP%]   ul.brand-logo[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{opacity:.8}.casestudy-sec[_ngcontent-%COMP%]{background:#f8f8f8}.casestudy-sec[_ngcontent-%COMP%]   .case-box[_ngcontent-%COMP%]{position:relative}.casestudy-sec[_ngcontent-%COMP%]   .case-box[_ngcontent-%COMP%]   .case-col[_ngcontent-%COMP%]{display:block;position:relative;cursor:pointer;transition:all .3s ease-in-out;-webkit-transform:translateY(0);transform:translateY(0)}.casestudy-sec[_ngcontent-%COMP%]   .case-box[_ngcontent-%COMP%]   .case-col[_ngcontent-%COMP%]:hover{-webkit-transform:translateY(-2%);transform:translateY(-2%);box-shadow:0 3px 30px rgba(0,0,0,.3)}.casestudy-sec[_ngcontent-%COMP%]   .case-box[_ngcontent-%COMP%]   .case-col[_ngcontent-%COMP%]:hover   .text-block[_ngcontent-%COMP%]{opacity:1}.casestudy-sec[_ngcontent-%COMP%]   .case-box[_ngcontent-%COMP%]   .case-col[_ngcontent-%COMP%]:hover   .img-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-webkit-filter:blur(3px);filter:blur(3px)}.casestudy-sec[_ngcontent-%COMP%]   .case-box[_ngcontent-%COMP%]   .case-col[_ngcontent-%COMP%]   .img-block[_ngcontent-%COMP%]{border:10px solid #fff;box-shadow:0 0 5px 2px rgba(0,0,0,.1)}.casestudy-sec[_ngcontent-%COMP%]   .case-box[_ngcontent-%COMP%]   .case-col[_ngcontent-%COMP%]   .img-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:relative;width:100%;vertical-align:middle}.casestudy-sec[_ngcontent-%COMP%]   .case-box[_ngcontent-%COMP%]   .case-col[_ngcontent-%COMP%]   .text-block[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0;padding:30px;background:rgba(255,255,255,.8);opacity:0;transition:all .3s ease-in-out}.casestudy-sec[_ngcontent-%COMP%]   .case-box[_ngcontent-%COMP%]   .case-col[_ngcontent-%COMP%]   .text-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#252b33;font-size:16px;line-height:28px;margin-bottom:20px}.casestudy-sec[_ngcontent-%COMP%]   .case-box[_ngcontent-%COMP%]   .case-col[_ngcontent-%COMP%]   .text-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;margin-bottom:10px}.casestudy-sec[_ngcontent-%COMP%]   .work-btn[_ngcontent-%COMP%]{color:#fff!important;background:#f13c31;display:inline-block;font-size:16px;font-weight:600;padding:10px 30px;border-radius:80px;border:2px solid #f13c31;margin-top:50px}.casestudy-sec[_ngcontent-%COMP%]   .work-btn[_ngcontent-%COMP%]:hover{background:0 0;color:#f13c31!important}.casestudy-sec[_ngcontent-%COMP%]   .portfolio-btn[_ngcontent-%COMP%]{text-align:center}.work-row[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{flex-wrap:wrap}.client-testimonial-sec[_ngcontent-%COMP%]{padding:100px 0;text-align:center}.client-testimonial-sec[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]{padding-top:20px;overflow-x:hidden}.client-testimonial-sec[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .slider-width[_ngcontent-%COMP%]{width:770px;margin:0 auto}.client-testimonial-sec[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]     .slick-list{overflow:visible}.client-testimonial-sec[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%]{padding:0 15px;opacity:.6}.client-testimonial-sec[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%]:focus{outline:0}.client-testimonial-sec[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .slick-slide.slick-active[_ngcontent-%COMP%]{opacity:1}.client-testimonial-sec[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .slick-slide.slick-active[_ngcontent-%COMP%]   .testimonial-box[_ngcontent-%COMP%]   .play-btn[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.client-testimonial-sec[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .testimonial-box[_ngcontent-%COMP%]{position:relative}.client-testimonial-sec[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .testimonial-box[_ngcontent-%COMP%]   .thumbnail-video[_ngcontent-%COMP%]{width:100%}.client-testimonial-sec[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .testimonial-box[_ngcontent-%COMP%]   .play-btn[_ngcontent-%COMP%]{position:absolute;left:0;bottom:0;margin:0 auto;display:none;width:100%;padding:60px 30px 20px;background:rgba(0,0,0,.5);background:linear-gradient(180deg,rgba(0,0,0,0) 0,rgba(0,0,0,.5) 100%)}.client-testimonial-sec[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .testimonial-box[_ngcontent-%COMP%]   .play-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block}.client-testimonial-sec[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .testimonial-box[_ngcontent-%COMP%]   .play-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus{outline:0}.client-testimonial-sec[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .testimonial-box[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:100%}.client-testimonial-sec[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .slick-slide.slick-active[_ngcontent-%COMP%]   .testimonial-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#fff;font-size:24px;line-height:28px;font-weight:800;margin-bottom:0}.quote-sec[_ngcontent-%COMP%]{background-repeat:no-repeat;background-size:cover;background-position:center center;height:448px;display:flex;align-items:center}.quote-sec[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#fff;font-size:40px}.quote-sec[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{color:#fff;font-size:16px;text-transform:inherit;width:40%;margin-top:20px;font-weight:400}.quote-sec[_ngcontent-%COMP%]   a.enquiry-btn[_ngcontent-%COMP%], .quote-sec[_ngcontent-%COMP%]   button.enquiry-btn[_ngcontent-%COMP%]{float:left;margin-top:20px}.quote-sec[_ngcontent-%COMP%]   a.enquiry-btn[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%], .quote-sec[_ngcontent-%COMP%]   button.enquiry-btn[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{margin-left:8px}.services-icon-section[_ngcontent-%COMP%]{padding:100px 0;background-color:#f8f8f8}.services-icon-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{justify-content:center}.services-icon-section[_ngcontent-%COMP%]   .icon-block[_ngcontent-%COMP%]{text-align:center;padding:40px 6px;transition:all .3s ease-in-out}.services-icon-section[_ngcontent-%COMP%]   .icon-block[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]{width:50px;height:50px;margin:0 auto;display:flex;display:-ms-flexbox;justify-content:center;align-items:center}.services-icon-section[_ngcontent-%COMP%]   .icon-block[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:48px;height:48px}.services-icon-section[_ngcontent-%COMP%]   .icon-block[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:14px;line-height:22px;color:#252b33;font-weight:500;margin-top:16px}.services-icon-section[_ngcontent-%COMP%]   .icon-block[_ngcontent-%COMP%]:hover{background-color:#fff}  .sidemenu .cbp-spmenu{position:fixed;background:#f1f4f5;overflow:auto}  .sidemenu .cbp-spmenu-vertical{width:525px;height:100%;top:0;z-index:1000}  .sidemenu .cbp-spmenu-right{right:-525px}  .sidemenu .cbp-spmenu-right.cbp-spmenu-open{right:0}  .cbp-spmenu-push{overflow-x:hidden;position:relative;left:0}  .cbp-spmenu-push-toleft{left:-525px;overflow:hidden}  .cbp-spmenu,   .cbp-spmenu-push{transition:all .3s ease}  .cbp-spmenu-open .sidebar-popup{overflow:auto!important}  .cbp-spmenu-open .bg-popup-mode{display:block}  .bg-popup-mode{position:fixed;left:0;top:0;height:100%;width:calc(100% - 525px);background:0 0;z-index:99;display:none}  .service-landing-form .sidebar-sec h4{color:#252b33;font-size:22px;line-height:28px;font-weight:600;padding:0;margin-top:0}  .service-landing-form .close-form .fa{font-size:20px;font-weight:400}  .service-landing-form .cd-modal-content .thanks-text-outer{width:100%;margin:auto;position:absolute;top:50%;left:0;right:0;transform:translate(0,-50%)}  .service-landing-form .cd-modal-content .thanks-text{position:relative}  .service-landing-form .cd-modal-content .thanks-text img{width:40px;top:15px;left:20px;position:absolute}  .service-landing-form .cd-modal-content .thanks-text h2{font-size:40px!important;color:#fff!important;text-transform:capitalize;margin:0;line-height:70px;padding:0!important;border:none!important;font-weight:600}  .service-landing-form .cd-modal-content .thanks-text p{margin:0 0 10px;font-weight:400!important;line-height:normal!important;color:#fff!important}  .service-landing-form .cd-modal-content .thanks-text h5{width:80%;line-height:20px;display:block;font-size:16px;color:#fff;font-weight:400;margin-bottom:10px}  .service-landing-form .cd-modal-content .thanks-text .text{padding-left:85px}  #lets-talk.thanks-popup.sidebar-popup{overflow:hidden;height:100vh}  .cd-modal{position:absolute;top:0;left:0;width:100%;height:100%;visibility:hidden;opacity:0;pointer-events:none;transition:visibility 0s .3s,opacity .3s 0s,z-index 0s .3s}  .cd-modal::after{content:\'\';position:absolute;left:0;bottom:0;width:100%;height:60px;pointer-events:none}  .cd-modal .cd-modal-content{height:100%;width:100%;padding:0;text-align:left;overflow-y:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;box-sizing:border-box;overflow:hidden;position:relative}  .cd-modal-content .thanks-text .cdn-btn-set{overflow:hidden;padding:15px 0 0}  .cd-modal-content .thanks-text .cdn-btn-set .cd-btn{font-size:14px!important;color:#f13c31!important;text-transform:uppercase!important;padding:10px 30px;border-radius:50px;display:inline-block;margin:0 10px 0 0;background:#fff!important;font-weight:600;width:auto!important;text-align:center;float:left;border:2px solid #fff!important}  #lets-talk.lets-talk .contact-details .cdn-btn-set a.cd-btn{font-size:14px!important;color:#f13c31!important;text-transform:uppercase!important;padding:10px 30px;border-radius:50px;display:inline-block;margin:0 10px 0 0;background:#fff!important;font-weight:600;width:auto!important;text-align:center;float:left;border:2px solid #fff!important}  #lets-talk.lets-talk .contact-details .cdn-btn-set a.cd-btn:hover,   .cd-modal-content .thanks-text .cdn-btn-set .cd-btn:hover{background:#f13c31!important;color:#fff!important}  #lets-talk.lets-talk .contact-details .cdn-btn-set a.cd-btn.cd-link,   .cd-modal-content .thanks-text .cdn-btn-set .cd-btn.cd-link{background:0 0!important;color:#fff!important;border-color:transparent!important}  .modal-is-visible .cd-modal{z-index:101;visibility:visible;opacity:1;pointer-events:auto;transition:visibility 0s 0s,opacity .3s 0s,z-index 0s 0s}  .modal-is-visible .cd-modal .cd-modal-content{-webkit-overflow-scrolling:touch}  .cd-modal-action{position:relative}  .cd-modal-action .cd-modal-bg{position:absolute;top:3px;left:50%;width:4em;border-radius:50%;transform:translateZ(0);transform:translateX(-2em);z-index:-1;display:inline-block;height:2.5em;background-color:#f13c31}  .cd-modal-action .btn{position:relative;text-align:center;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;transition:color .2s .3s,width .3s 0s,border-radius 1s 0s;border-radius:50px!important}  .cd-modal-action .btn.gradient-btn:not(.fixed-green) .cd-modal-bg{background:#f13c31}  .cd-modal-action .gradient-btn.btn.to-circle,   .cd-modal-action .to-circle{border-radius:5em!important;width:4em;color:transparent;transition:color .2s .3s,width .3s 0s,border-radius 1s 0s}  .fixed-body .fixed-popup .cd-modal-action .cd-modal-bg{position:fixed;top:0}  .fixed-body .modal-is-visible .cd-modal{position:fixed}  .fixed-body .modal-is-visible .cd-modal .cd-modal-content{padding:0}  .cd-modal-action .cd-modal-bg.is-visible{opacity:1;visibility:visible;z-index:100}  .cd-modal-action .cd-modal-bg.active{position:absolute;top:0;left:0;visibility:visible;opacity:1}  .cd-modal-close{border-bottom:none!important;color:#fff!important;background:0 0!important;font-size:18px!important;text-transform:none!important;margin-top:15px;overflow:hidden;white-space:nowrap;visibility:hidden;opacity:0;transform:translateZ(0);transform:scale(0);transition:transform .3s 0s,visibility 0s .3s,opacity .3s 0s}  .no-touch .cd-modal-close:hover{background-color:rgba(0,0,0,.5)}  .modal-is-visible .cd-modal-close{visibility:visible;opacity:1;transition:transform .3s 0s,visibility 0s 0s,opacity .3s 0s;transform:scale(1)}  .fixed-popup{overflow:auto!important;background:0 0;padding:50px 0}  .fullscreen_search_holder .fullscreen_search_table{background-color:transparent}  body.fixed-body{overflow:hidden;position:fixed;left:0;right:0;top:0;bottom:0;width:100%;height:100%}  footer{z-index:1}.fixed-body[_ngcontent-%COMP%]   .animate-form[_ngcontent-%COMP%], .fixed-body[_ngcontent-%COMP%]   header.fixed[_ngcontent-%COMP%]{z-index:10!important}input[_ngcontent-%COMP%]:-webkit-autofill{transition:background-color 5000s ease-in-out 0s}input[_ngcontent-%COMP%]:-webkit-autofill:active, input[_ngcontent-%COMP%]:-webkit-autofill:focus, input[_ngcontent-%COMP%]:-webkit-autofill:hover{transition:background-color 5000s ease-in-out 0s}  .contact-form-sec{width:510px;margin:0 auto;padding:30px}  .contact-form-sec .form_brand{box-sizing:border-box}  .contact-form-sec .required-sec h3{color:#252b33;font-size:40px;font-weight:400;margin-bottom:20px}  .contact-form-sec .required-sec span.secure{color:#252b33;font-weight:400;font-size:14px;margin-bottom:15px;display:block}  .contact-form-sec .has-error{box-shadow:0 0 10px rgba(255,36,0,.4);border:1px solid #ff2400!important}  .contact-form-sec .group{padding-bottom:15px;position:relative}  .contact-form-sec .group label{margin-bottom:0;display:block;font-size:13px;color:#252b33;font-weight:400}  .contact-form-sec .group label span{color:red}  .contact-form-sec .group input{background-color:#fff;border:1px solid #d9dee2;-webkit-appearance:none;height:40px;display:block;width:100%;padding:0 0 0 15px;font-size:14px;color:#252b33;box-sizing:border-box;border-radius:0}  .contact-form-sec .group input.name{width:48.1%;float:left;margin-right:15px}  .contact-form-sec .group input.last-name{margin-right:0}  .contact-form-sec .group input.isd-code{width:30%;float:left}  .contact-form-sec .group input.contact-number{width:100%;float:right;padding-left:110px!important}  .contact-form-sec .group input:focus{background-color:#fff!important;box-shadow:0 0 10px rgba(0,188,212,.4);border:1px solid #f13c31!important;outline:0;transition:all .3s ease-in-out}  .contact-form-sec .group select{border:1px solid #d9dee2;border-radius:0;height:40px;display:block;width:100%;padding:0 0 0 15px;color:#252b33;background:url(drop-down.c6aab55b09de100f968d.png) right 15px center no-repeat #fff;-moz-appearance:none;-webkit-appearance:none;appearance:none;font-size:14px;box-sizing:border-box}  .contact-form-sec .group select:focus{background-color:#fff!important;box-shadow:0 0 10px rgba(0,188,212,.4);border:1px solid #f13c31!important;outline:0;transition:all .3s ease-in-out}  .contact-form-sec .group textarea{border-radius:0;border:1px solid #d9dee2;display:block;width:100%;padding:10px 0 25px 15px;font-size:14px;color:#252b33;background:#fff;resize:none;box-sizing:border-box;-webkit-appearance:none}  .contact-form-sec .group textarea:focus{background-color:#fff!important;box-shadow:0 0 10px rgba(0,188,212,.4);border:1px solid #f13c31!important;outline:0;transition:all .3s ease-in-out}  .contact-form-sec .bottom-area{position:relative}  .contact-form-sec .bottom-area .submit-btn .submit{color:#fff;background:#f13c31;cursor:pointer;display:inline-block;font-size:16px;font-weight:600;padding:8px 24px;border-radius:80px;border:1px solid #f13c31;margin-top:20px;width:auto!important}  .contact-form-sec .bottom-area .nl-submit-wrap{margin-top:10px;width:50%;float:left}  .contact-form-sec .bottom-area .secure-ftr{float:right;font-size:12px;color:#8a959e;margin-top:40px;font-weight:600}  .contact-form-sec .bottom-area .hiddenRecaptcha.has-error~label.required,   .contact-form-sec .bottom-area   .contact-form-sec .hiddenRecaptcha.has-error~label.required::after{color:#ff2400!important}  .contact-form-sec .bottom-area .hiddenRecaptcha~label.required,   .contact-form-sec .bottom-area   .contact-form-sec .hiddenRecaptcha~label.required::after{position:absolute;top:75px;color:transparent!important;font-weight:400;font-size:14px}  .contact-form-sec .tell-us-title{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px}  .service-landing-form #lets-talk.lets-talk{margin:0}  .contact-form-sec .budget-group{display:flex;display:-ms-flexbox}  .contact-form-sec .budget-group .group{width:100%}  .contact-form-sec .budget-group .minimum-budget{margin-right:15px}  .contact-form-sec .group.file-upload-sec .projectfileupload{position:relative;width:100%;height:40px;border:1px solid #d9dee2;background:#fff}  .contact-form-sec .group.file-upload-sec .projectfileupload.has_danger{border:1px solid red!important}  .contact-form-sec .group.file-upload-sec .projectfileupload p{width:100%;height:100%;text-align:center;color:#252b33;font-size:14px;line-height:37px;font-weight:400;margin-bottom:0}  .contact-form-sec .group.file-upload-sec .projectfileupload input{position:absolute;margin:0;padding:0;width:100%;height:100%;outline:0;opacity:0;cursor:pointer}  .contact-form-sec .group.file-upload-sec .projectfileupload .fa{color:#f13c31!important;position:absolute;right:0;top:0;cursor:pointer;padding:12px}  .contact-form-sec .group.file-upload-sec p.upload-file-size{color:#252b33;font-size:11px;line-height:22px;margin:3px 0 0}  .contact-form-sec .group.file-upload-sec p.upload-file-size.error-validation{color:red!important}@media screen and (-webkit-min-device-pixel-ratio:0){.row[_ngcontent-%COMP%]:after, .row[_ngcontent-%COMP%]:before{display:none}}.work-sec[_ngcontent-%COMP%]{padding:100px 0;position:relative}.work-sec[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:40px;color:#252b33}.work-sec[_ngcontent-%COMP%]   .member-img[_ngcontent-%COMP%]{position:sticky;position:-webkit-sticky;top:0;padding-top:40px}.work-sec[_ngcontent-%COMP%]   .work-flow[_ngcontent-%COMP%]{display:flex;align-items:flex-start;margin-top:60px}.work-sec[_ngcontent-%COMP%]   .work-flow[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;margin-bottom:5px}.work-sec[_ngcontent-%COMP%]   .work-flow[_ngcontent-%COMP%]   .col-left[_ngcontent-%COMP%]{margin-right:20px}.work-sec[_ngcontent-%COMP%]   .work-flow[_ngcontent-%COMP%]   .col-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:relative;z-index:2}.work-sec[_ngcontent-%COMP%]   .work-flow[_ngcontent-%COMP%]   .col-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0}.work-sec[_ngcontent-%COMP%]   .work-flow[_ngcontent-%COMP%]   .col-left[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]     svg g{fill:#f13c31}.our-facts-sec[_ngcontent-%COMP%]{background-color:#f8f8f8;position:relative;overflow:hidden}.flex-facts-box[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;height:100%}.our-facts-sec[_ngcontent-%COMP%]   .fact-box[_ngcontent-%COMP%]{background-color:#fff;border-radius:4px;padding:20px 25px 30px;height:100%;min-height:165px;box-shadow:0 0 4px rgba(0,0,0,.1)}.our-facts-sec[_ngcontent-%COMP%]   .fact-box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#f13c31;font-size:40px;line-height:56px;font-weight:400}.our-facts-sec[_ngcontent-%COMP%]   .fact-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;font-weight:400;line-height:28px;color:#252b33;margin-bottom:0}.our-hiring-model[_ngcontent-%COMP%]{padding-top:100px}.our-hiring-model[_ngcontent-%COMP%]   .title-block[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:20px}  .our-hiring-model .title-block p{padding:0 180px}.our-hiring-model[_ngcontent-%COMP%]   .work-block[_ngcontent-%COMP%]{display:flex;display:-ms-flexbox;flex-wrap:wrap;justify-content:center}.our-hiring-model[_ngcontent-%COMP%]   .work-block[_ngcontent-%COMP%]   .working-time[_ngcontent-%COMP%]{border:1px solid #eee;border-radius:4px;padding:20px;margin:0 15px;text-align:center;box-shadow:0 0 20px 0 rgba(0,0,0,.2)}.our-hiring-model[_ngcontent-%COMP%]   .work-block[_ngcontent-%COMP%]   .working-time[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;font-weight:600;line-height:28px;margin-bottom:6px}  .our-hiring-model .work-block .working-time p{margin-bottom:0;font-size:14px;line-height:20px}.our-hiring-model[_ngcontent-%COMP%]   .work-block[_ngcontent-%COMP%]   .working-day[_ngcontent-%COMP%]{display:flex;display:-ms-flexbox;flex-wrap:wrap;align-items:center}  .our-hiring-model .work-block .working-day .bullet-point{width:4px;height:4px;border-radius:100px;background-color:#252b33;display:inline-block;margin:0 6px}.our-target-customers-section[_ngcontent-%COMP%]{border-bottom:1px solid #eee;padding-bottom:100px}.our-target-customers-section[_ngcontent-%COMP%]   .mobile-app-services[_ngcontent-%COMP%]{margin-top:60px}.our-target-customers-section[_ngcontent-%COMP%]   .mobile-app-services[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:32px 0 16px;font-weight:800;color:#252b33;font-size:24px}.team-masonry-grid[_ngcontent-%COMP%]   .masonry-column[_ngcontent-%COMP%]{margin-top:40px}.team-masonry-grid[_ngcontent-%COMP%]   .image-grid-col[_ngcontent-%COMP%]   .people-img[_ngcontent-%COMP%]{height:122px;width:122px;margin-bottom:10px;display:inline-block}.team-masonry-grid[_ngcontent-%COMP%]   .image-grid-col[_ngcontent-%COMP%]   .people-img[_ngcontent-%COMP%]:nth-child(odd){margin-right:10px}.team-masonry-grid[_ngcontent-%COMP%]   .image-grid-col[_ngcontent-%COMP%]   .people-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:122px;width:122px;-o-object-fit:cover;object-fit:cover;border-radius:5px}.team-masonry-grid[_ngcontent-%COMP%]   .partner-overview[_ngcontent-%COMP%]{padding:24px 15px 24px 24px;border:1px solid rgba(0,0,0,.1);margin-bottom:30px}.team-masonry-grid[_ngcontent-%COMP%]   .partner-overview[_ngcontent-%COMP%]:last-child{margin-bottom:0}.team-masonry-grid[_ngcontent-%COMP%]   .partner-overview[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:20px;line-height:28px;font-weight:600;margin:15px 0}.team-masonry-grid[_ngcontent-%COMP%]   .partner-overview[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0}.faqs-accordian[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border:none;background-color:transparent}.faqs-accordian[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{border:none;background-color:transparent;display:flex;align-items:center;padding:20px 15px 20px 0;cursor:pointer}.faqs-accordian[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a.card-title[_ngcontent-%COMP%]{font-size:18px;line-height:30px;font-weight:600;margin-bottom:0}.card[_ngcontent-%COMP%]   .faqs-collapse[_ngcontent-%COMP%]{border-bottom:1px solid #e5e5e5;display:none}.card[_ngcontent-%COMP%]   .faqs-collapse.faq-display[_ngcontent-%COMP%]{display:block}.accordion[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]:after{font-family:FontAwesome;content:"\\f078";position:absolute;right:0;cursor:pointer}.accordion[_ngcontent-%COMP%]   .card-header.collapsed[_ngcontent-%COMP%]:after{content:"\\f054"}.faqs-collapse[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{padding:0}  .faqs-collapse .card-body p a{color:#f13c31}  .faqs-collapse .card-body ul{padding-left:20px}  .faqs-collapse .card-body ul li{margin-bottom:10px}.cmn-pad-50[_ngcontent-%COMP%]{padding:50px 0}.mr-top-30[_ngcontent-%COMP%]{margin-top:30px}.methodology-title[_ngcontent-%COMP%]{margin-bottom:50px}.methodology-title[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{color:#f13c31!important;font-size:16px;font-weight:600;text-transform:uppercase;margin-bottom:15px}.methodology-pages[_ngcontent-%COMP%]   .pages-link[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:800;font-size:24px;margin:15px 0}.methodology-pages[_ngcontent-%COMP%]   .pages-link[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0;width:85%}.methodology-pages[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .pages-link[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:100%}.methodology-pages[_ngcontent-%COMP%]   .pages-link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:40px;height:40px}  .methodology-pages .pages-link svg g g,   .methodology-pages .pages-link svg g path{fill:#f13c31}.methodology-pages[_ngcontent-%COMP%]   a.page-link-col[_ngcontent-%COMP%]{display:flex;align-items:center;padding:35px 25px;border:1px solid #d9dee2;border-radius:4px;transition:all .3s ease-in-out;height:100%}.methodology-pages[_ngcontent-%COMP%]   a.page-link-col[_ngcontent-%COMP%]:hover{background:#f13c31!important}.methodology-pages[_ngcontent-%COMP%]   a.page-link-col[_ngcontent-%COMP%]:hover   h4[_ngcontent-%COMP%], .methodology-pages[_ngcontent-%COMP%]   a.page-link-col[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%]{color:#fff!important}  .methodology-pages .page-link-col:hover .pages-link svg g g,   .methodology-pages .page-link-col:hover .pages-link svg g path{fill:#fff}.methodology-pages[_ngcontent-%COMP%]   .service[_ngcontent-%COMP%]   .pages-link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:128px}.container-box[_ngcontent-%COMP%]{max-width:1430px;width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.wwd-content-center[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:40px}.wwd-content-center[_ngcontent-%COMP%]{text-align:center}.technology-icon[_ngcontent-%COMP%]{margin-top:40px}.technology-icon[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;display:-ms-flexbox;flex-wrap:wrap;margin-bottom:0}.technology-icon[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;margin:0 8px 8px 0}.technology-icon[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:3px 14px;border-radius:2px;border:1px solid #eee;width:auto;height:56px;display:flex;display:-ms-flexbox;align-items:center;justify-content:center;color:red}.technology-icon[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]{transition:all .3s ease-in-out}.technology-icon[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{opacity:.8}.wwd-service-content-center[_ngcontent-%COMP%]   .wwd-service-bg[_ngcontent-%COMP%]{background-color:#f8f8f8}.wwd-service-content-center[_ngcontent-%COMP%]:last-child{margin-bottom:0}.wwd-service-content-center[_ngcontent-%COMP%]   .wwd-content-center[_ngcontent-%COMP%]{padding:80px 40px}.wwd-service-content-center[_ngcontent-%COMP%]   .wwd-content-center.pad-b-0[_ngcontent-%COMP%]{padding-bottom:0}.wwd-service-content-center[_ngcontent-%COMP%]   .wwd-content-center[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]{margin-top:60px}.wwd-service-content-center[_ngcontent-%COMP%]   .wwd-content-center[_ngcontent-%COMP%]   .technology-icon[_ngcontent-%COMP%]{margin-bottom:0}.wwd-service-content-center[_ngcontent-%COMP%]   .wwd-content-center[_ngcontent-%COMP%]   .technology-icon[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{justify-content:center}.our-target-customers-section[_ngcontent-%COMP%]   .mobile-app-services[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-right:30px}.mobile-app-services[_ngcontent-%COMP%]{margin-top:80px}.mobile-app-services[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:32px 0 16px;font-weight:800;color:#252b33;font-size:24px}.technologies-sec[_ngcontent-%COMP%]{padding:100px 0 0}.technologies-sec[_ngcontent-%COMP%]   .technologies-block[_ngcontent-%COMP%]   .technology-grid[_ngcontent-%COMP%]{justify-content:center}.technologies-sec[_ngcontent-%COMP%]   .technologies-block[_ngcontent-%COMP%]   .tech-box[_ngcontent-%COMP%]{padding:40px 6px;text-align:center;transition:all .3s ease-in-out}.technologies-sec[_ngcontent-%COMP%]   .technologies-block[_ngcontent-%COMP%]   .tech-box[_ngcontent-%COMP%]:hover{background-color:#f8f8f8}.technologies-sec[_ngcontent-%COMP%]   .technologies-block[_ngcontent-%COMP%]   .tech-box[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]{height:50px;width:50px;margin:0 auto;display:flex;display:-ms-flexbox;align-items:center;justify-content:center}.technologies-sec[_ngcontent-%COMP%]   .technologies-block[_ngcontent-%COMP%]   .tech-box[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:50px;height:50px}.technologies-sec[_ngcontent-%COMP%]   .technologies-block[_ngcontent-%COMP%]   .tech-box[_ngcontent-%COMP%]   h4.tech-title[_ngcontent-%COMP%]{font-size:14px;line-height:22px;color:#252b33;font-weight:400;margin-top:10px}.theme-black[_ngcontent-%COMP%]{background:#000}.theme-black[_ngcontent-%COMP%]   b[_ngcontent-%COMP%], .theme-black[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%], .theme-black[_ngcontent-%COMP%]   center[_ngcontent-%COMP%], .theme-black[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .theme-black[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .theme-black[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .theme-black[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .theme-black[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .theme-black[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .theme-black[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .theme-black[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], .theme-black[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .theme-black[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .theme-black[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .theme-black[_ngcontent-%COMP%]   u[_ngcontent-%COMP%], .theme-black[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{color:#fff!important}.theme-black[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]     svg g{fill:#fff}.theme-black[_ngcontent-%COMP%]   .landing-hero-banner[_ngcontent-%COMP%]{background-color:#000}.theme-black[_ngcontent-%COMP%]   .free-trail-landing[_ngcontent-%COMP%], .theme-black[_ngcontent-%COMP%]   .what-we-sec[_ngcontent-%COMP%]{background:#000}.theme-black[_ngcontent-%COMP%]   .casestudy-sec[_ngcontent-%COMP%], .theme-black[_ngcontent-%COMP%]   .service-sec[_ngcontent-%COMP%], .theme-black[_ngcontent-%COMP%]   .we-work-sec[_ngcontent-%COMP%]{background:#202020}.theme-black[_ngcontent-%COMP%]   .what-we-sec[_ngcontent-%COMP%]   .service-box[_ngcontent-%COMP%]{background:#202020;border:1px solid #202020}.theme-black[_ngcontent-%COMP%]   .casestudy-sec[_ngcontent-%COMP%]   .case-box[_ngcontent-%COMP%]   .case-col[_ngcontent-%COMP%]   .text-block[_ngcontent-%COMP%]{background:rgba(21,25,29,.8)}.theme-black[_ngcontent-%COMP%]   .our-facts-sec[_ngcontent-%COMP%]{background-color:#000}.theme-black[_ngcontent-%COMP%]   .our-facts-sec[_ngcontent-%COMP%]   .fact-box[_ngcontent-%COMP%]{background-color:#202020;border:1px solid #202020}  .theme-black .our-facts-sec .fact-box h2{color:#f13c31!important}.theme-black[_ngcontent-%COMP%]   .work-sec[_ngcontent-%COMP%]{background-color:#202020}.theme-black[_ngcontent-%COMP%]   .services-icon-section[_ngcontent-%COMP%]{background-color:#2a2a2a}.theme-black[_ngcontent-%COMP%]   .core-tech-sec[_ngcontent-%COMP%]     svg g, .theme-black[_ngcontent-%COMP%]   .services-icon-section[_ngcontent-%COMP%]   .icon-block[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]     svg g{fill:#fff}.theme-black[_ngcontent-%COMP%]   .services-icon-section[_ngcontent-%COMP%]   .icon-block[_ngcontent-%COMP%]:hover{background-color:#202020}.theme-black[_ngcontent-%COMP%]   .our-target-customers-section[_ngcontent-%COMP%]{border-bottom:0}.theme-black[_ngcontent-%COMP%]   .our-hiring-model[_ngcontent-%COMP%]   .work-block[_ngcontent-%COMP%]   .working-time[_ngcontent-%COMP%]{background-color:#202020;border:0}  .theme-black .our-hiring-model .work-block .working-day .bullet-point{background-color:#fff}  .theme-black .contact-form-sec .group.file-upload-sec .projectfileupload{background:#202020!important;border:1px solid rgba(255,255,255,.1)}.theme-black[_ngcontent-%COMP%]   .technologies-sec[_ngcontent-%COMP%]{padding:100px 0}.theme-black[_ngcontent-%COMP%]   .technologies-sec[_ngcontent-%COMP%]   .technologies-block[_ngcontent-%COMP%]   .tech-box[_ngcontent-%COMP%]:hover{background-color:#202020}  .theme-black .technologies-sec .technologies-block .tech-box .icon-box svg g{fill:#fff}  .theme-black.cbp-spmenu{background:#202020}  .theme-black.cbp-spmenu .contact-form-sec .group label{color:rgba(255,255,255,.5)}  .theme-black.cbp-spmenu .contact-form-sec .group input,   .theme-black.cbp-spmenu .contact-form-sec .group select,   .theme-black.cbp-spmenu .contact-form-sec .group textarea{background-color:#222;border:1px solid rgba(255,255,255,.1);color:#fff}  .theme-black.cbp-spmenu .contact-form-sec input::-webkit-input-placeholder,   .theme-black.cbp-spmenu .contact-form-sec textarea::-webkit-input-placeholder{color:#fff}.theme-black.cbp-spmenu[_ngcontent-%COMP%]   .enquiry-page-form[_ngcontent-%COMP%]   .contact-section[_ngcontent-%COMP%]   .contact-form-sec[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-input-placeholder,   .theme-black.cbp-spmenu .enquiry-page-form .contact-section .contact-form-sec input::-moz-placeholder{color:#fff}.theme-black[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]:after, .theme-black[_ngcontent-%COMP%]   .faqs-accordian[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a.card-title[_ngcontent-%COMP%],   .theme-black.cbp-spmenu .service-landing-form .sidebar-sec h4{color:#fff}  .theme-black.cbp-spmenu .contact-form-sec .bottom-area .secure-ftr{color:#fff}  .theme-black .intl-tel-input .country-list .country{background-color:#222}  .theme-black .intl-tel-input .country-list .country.highlight{background-color:#000}  .theme-black .intl-tel-input .selected-flag .iti-arrow{background:0 0;border-top:4px solid rgba(255,255,255,.5)}  .theme-black .contact-form-sec .group input:focus,   .theme-black .contact-form-sec .group select:focus,   .theme-black .contact-form-sec .group textarea:focus{background-color:#202020!important}  .theme-black .contact-form-sec .group label span{color:red!important}.theme-black[_ngcontent-%COMP%]   .team-masonry-grid[_ngcontent-%COMP%]   .partner-overview[_ngcontent-%COMP%]{border:1px solid rgba(255,255,255,.3)}.theme-black[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .faqs-collapse[_ngcontent-%COMP%]{border-bottom:1px solid rgba(255,255,255,.1)}.theme-black[_ngcontent-%COMP%]   .wwd-service-content-center[_ngcontent-%COMP%]   .wwd-service-bg[_ngcontent-%COMP%]{background-color:#202020!important}  .theme-black .technology-icon ul li svg g{fill:rgba(255,255,255,.6)}.theme-black[_ngcontent-%COMP%]   .methodology-pages[_ngcontent-%COMP%]   a.page-link-col[_ngcontent-%COMP%]{background:0 0;border:1px solid rgba(255,255,255,.4)}@media (max-width:1730px){.landing-hero-banner[_ngcontent-%COMP%]   .services-hero-title[_ngcontent-%COMP%]{padding:80px 15px 0 80px}.landing-hero-banner[_ngcontent-%COMP%]   .services-right-img[_ngcontent-%COMP%]{height:580px}}@media (max-width:1660px){.landing-hero-banner[_ngcontent-%COMP%]   .services-hero-image[_ngcontent-%COMP%]   .right-hero-image[_ngcontent-%COMP%]{bottom:-70px;padding:25px}.free-trail-landing[_ngcontent-%COMP%]{margin-top:50px}}@media (max-width:1550px){.landing-hero-banner[_ngcontent-%COMP%]   .services-hero-title[_ngcontent-%COMP%]{padding:80px 15px 0 50px}.landing-hero-banner[_ngcontent-%COMP%]   .services-hero-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:50px;line-height:60px}}@media (max-width:1440px){.benefit-sec[_ngcontent-%COMP%]   .benefit-dec[_ngcontent-%COMP%]{padding:80px}.landing-hero-banner[_ngcontent-%COMP%]   .services-hero-title[_ngcontent-%COMP%]{padding:50px 15px 0 50px}.landing-hero-banner[_ngcontent-%COMP%]   .services-hero-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:50px;line-height:60px}.landing-hero-banner[_ngcontent-%COMP%]   .services-hero-image[_ngcontent-%COMP%]   .right-hero-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:550px}.landing-hero-banner[_ngcontent-%COMP%]   .services-hero-image[_ngcontent-%COMP%]   .right-hero-image[_ngcontent-%COMP%]{bottom:inherit;display:flex;align-items:center;justify-content:center;height:100%}.free-trail-landing[_ngcontent-%COMP%]{margin-top:0}}@media (max-width:1367px){.banner-sec[_ngcontent-%COMP%]   img.banner-img[_ngcontent-%COMP%]{max-width:800px;display:block}.banner-sec-center[_ngcontent-%COMP%]   img.banner-img[_ngcontent-%COMP%]{max-width:100%;display:block}.benefit-sec[_ngcontent-%COMP%]   .benefit-dec[_ngcontent-%COMP%]{padding:80px 60px}}@media (max-width:1280px){.benefit-sec[_ngcontent-%COMP%]   .benefit-dec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:90%}.we-work-sec[_ngcontent-%COMP%]   .approch-slider[_ngcontent-%COMP%]   .slick-dots[_ngcontent-%COMP%]   li.slick-active[_ngcontent-%COMP%]:before{left:-30px}.landing-hero-banner[_ngcontent-%COMP%]   .services-hero-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:45px;line-height:55px}}@media (max-width:1024px){h2[_ngcontent-%COMP%]{font-size:30px;line-height:40px}p[_ngcontent-%COMP%]{font-size:16px;line-height:28px}.casestudy-sec[_ngcontent-%COMP%]   .case-box[_ngcontent-%COMP%]   .case-col[_ngcontent-%COMP%]   .text-block[_ngcontent-%COMP%]{display:none}.casestudy-sec[_ngcontent-%COMP%]   .case-box[_ngcontent-%COMP%]   .case-col[_ngcontent-%COMP%]:hover   .img-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-webkit-filter:blur(0);filter:blur(0)}.free-trail-sec[_ngcontent-%COMP%]   .trail-left[_ngcontent-%COMP%]{padding:30px}.free-trail-sec[_ngcontent-%COMP%]   .trail-left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:30px;line-height:40px}.benefit-sec[_ngcontent-%COMP%]   .benefit-dec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:100%}.benefit-sec[_ngcontent-%COMP%]   .benefit-dec[_ngcontent-%COMP%]{padding:40px;height:auto}.benefit-sec[_ngcontent-%COMP%]   .benefit-dec[_ngcontent-%COMP%]   ul.solution-point[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:100%;float:none}.quote-sec[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{width:50%}.services-sidemenu[_ngcontent-%COMP%]   .contact-form-sec[_ngcontent-%COMP%]{padding:0}.services-sidemenu[_ngcontent-%COMP%]   .service-landing-form[_ngcontent-%COMP%]   .sidebar-sec[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:20px!important;padding:0}.sidemenu[_ngcontent-%COMP%]   .cbp-spmenu-vertical[_ngcontent-%COMP%]{width:590px}.landing-hero-banner[_ngcontent-%COMP%]   .services-hero-title[_ngcontent-%COMP%]{padding:60px 15px 0;text-align:center}.landing-hero-banner[_ngcontent-%COMP%]   .services-hero-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:35px;line-height:45px;margin-bottom:20px}.landing-hero-banner[_ngcontent-%COMP%]   .services-hero-desc[_ngcontent-%COMP%]   .talk-btn[_ngcontent-%COMP%]{margin-top:20px}.landing-hero-banner[_ngcontent-%COMP%]   .landing-banner-sec[_ngcontent-%COMP%]   .landing-row[_ngcontent-%COMP%]{display:flex;flex-direction:column-reverse;flex-wrap:wrap}.landing-hero-banner[_ngcontent-%COMP%]   .services-right-img[_ngcontent-%COMP%]{height:500px}.landing-banner-sec[_ngcontent-%COMP%]   .landing-row[_ngcontent-%COMP%]   .banner-img-col[_ngcontent-%COMP%], .landing-banner-sec[_ngcontent-%COMP%]   .landing-row[_ngcontent-%COMP%]   .banner-text-col[_ngcontent-%COMP%]{width:100%}.landing-hero-banner[_ngcontent-%COMP%]   .services-hero-title[_ngcontent-%COMP%]   .approch-sec[_ngcontent-%COMP%]{width:70%;margin:0 auto}.landing-hero-banner[_ngcontent-%COMP%]   .services-hero-image[_ngcontent-%COMP%]   .right-hero-image[_ngcontent-%COMP%]{bottom:inherit;display:flex;align-items:center;justify-content:center;height:100%}.landing-hero-banner[_ngcontent-%COMP%]   .services-hero-image[_ngcontent-%COMP%]   .right-hero-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:430px}.we-work-sec[_ngcontent-%COMP%]   .approch-slider[_ngcontent-%COMP%]     .slick-arrow.next-arrow{right:-35px}.we-work-sec[_ngcontent-%COMP%]   .approch-slider[_ngcontent-%COMP%]     .slick-arrow.pre-arrow{left:-35px}.work-sec[_ngcontent-%COMP%]{padding:50px 0}.our-facts-sec[_ngcontent-%COMP%]   .fact-box[_ngcontent-%COMP%]{min-height:190px}.service-sec[_ngcontent-%COMP%]   .service-box[_ngcontent-%COMP%]{padding:40px 10px 0}.we-work-sec[_ngcontent-%COMP%]   .approch-slider[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}  .contact-form-sec .budget-group{display:block}  .contact-form-sec .budget-group .minimum-budget{margin-right:0}.services-icon-section[_ngcontent-%COMP%]{padding:80px 0}.our-hiring-model[_ngcontent-%COMP%]{padding-top:80px}  .our-hiring-model .title-block p{padding:0 100px}.our-target-customers-section[_ngcontent-%COMP%]   .mobile-app-services[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-right:0}.our-target-customers-section[_ngcontent-%COMP%]{padding-bottom:80px}.team-masonry-grid[_ngcontent-%COMP%]   .masonry-column[_ngcontent-%COMP%]   .mas-grid-one[_ngcontent-%COMP%]{display:none}.team-masonry-grid[_ngcontent-%COMP%]   .partner-overview[_ngcontent-%COMP%]{padding:15px;margin-bottom:25px}.team-masonry-grid[_ngcontent-%COMP%]   .partner-overview[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px;line-height:24px}.team-masonry-grid[_ngcontent-%COMP%]   .partner-overview[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;line-height:24px}.team-masonry-grid[_ngcontent-%COMP%]   .masonry-column[_ngcontent-%COMP%]{margin-top:20px}.team-masonry-grid[_ngcontent-%COMP%]   .image-grid-col[_ngcontent-%COMP%]   .people-img[_ngcontent-%COMP%]{margin-bottom:25px}.team-masonry-grid[_ngcontent-%COMP%]   .image-grid-col[_ngcontent-%COMP%]   .people-img[_ngcontent-%COMP%], .team-masonry-grid[_ngcontent-%COMP%]   .image-grid-col[_ngcontent-%COMP%]   .people-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:92px;width:92px}.team-masonry-grid[_ngcontent-%COMP%]   .image-grid-col[_ngcontent-%COMP%]   .people-img[_ngcontent-%COMP%]:nth-child(odd){margin-right:25px}.methodology-pages[_ngcontent-%COMP%]   .pages-link[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:100%}}@media (max-width:992px){h2[_ngcontent-%COMP%]{font-size:30px;line-height:40px}.pad-t-b[_ngcontent-%COMP%]{padding:50px 0}.free-trail-sec[_ngcontent-%COMP%]   .trail-right[_ngcontent-%COMP%]{padding:0 15px}.brands-sec[_ngcontent-%COMP%]   ul.brand-logo[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:33.33%}.quote-sec[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{width:55%}.we-work-sec[_ngcontent-%COMP%]   .approch-slider[_ngcontent-%COMP%]     .slick-arrow.pre-arrow{left:0}.we-work-sec[_ngcontent-%COMP%]   .approch-slider[_ngcontent-%COMP%]     .slick-arrow.next-arrow{right:0}.we-work-sec[_ngcontent-%COMP%]   .approch-slider[_ngcontent-%COMP%]     .slick-arrow{top:inherit;bottom:8px}.we-work-sec[_ngcontent-%COMP%]   .approch-slider[_ngcontent-%COMP%]   .work-info[_ngcontent-%COMP%]{padding:0 10px 0 0}.landing-hero-banner[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{flex-wrap:wrap}.landing-hero-banner[_ngcontent-%COMP%]   .services-hero-title[_ngcontent-%COMP%]   .approch-sec[_ngcontent-%COMP%]{width:100%}.free-trail-landing[_ngcontent-%COMP%]{padding:100px 0}  .sidemenu .cbp-spmenu-vertical{z-index:1051}.work-sec[_ngcontent-%COMP%]{padding:100px 0}.work-sec[_ngcontent-%COMP%]   .member-img[_ngcontent-%COMP%]{display:none}.our-facts-sec[_ngcontent-%COMP%]   .fact-box[_ngcontent-%COMP%]{min-height:200px}#our-facts[_ngcontent-%COMP%]   .mrg-t-60[_ngcontent-%COMP%]{margin-top:30px}.service-sec[_ngcontent-%COMP%]   .service-box[_ngcontent-%COMP%]{padding:40px 40px 0;min-height:460px}.client-testimonial-sec[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .slider-width[_ngcontent-%COMP%]{width:600px}  .our-hiring-model .title-block p{padding:0}.our-target-customers-section[_ngcontent-%COMP%]   .mobile-app-col[_ngcontent-%COMP%]{margin-bottom:30px}.our-target-customers-section[_ngcontent-%COMP%]   .mobile-app-col[_ngcontent-%COMP%]:last-child{margin-bottom:0}.our-hiring-model[_ngcontent-%COMP%]   .work-block[_ngcontent-%COMP%]   .working-time[_ngcontent-%COMP%]:last-child{margin:30px 0 0}.team-masonry-grid[_ngcontent-%COMP%]   .masonry-column.mas-grid-four[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.team-masonry-grid[_ngcontent-%COMP%]   .mas-grid-four[_ngcontent-%COMP%]   .partner-overview[_ngcontent-%COMP%]:first-child{margin-right:25px}.faqs-accordian[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{padding:20px 20px 20px 0}.main-page-header[_ngcontent-%COMP%]{padding:150px 0;height:auto}.mobile-app-col[_ngcontent-%COMP%]{margin-bottom:20px}.our-target-customers-section[_ngcontent-%COMP%]   .mobile-app-services[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:15px 0}.technologies-sec[_ngcontent-%COMP%]{padding:50px 0 0}.theme-black[_ngcontent-%COMP%]   .technologies-sec[_ngcontent-%COMP%]{padding:50px 0}}@media (max-width:767px){.landing-hero-banner[_ngcontent-%COMP%]{height:100%}.landing-hero-banner[_ngcontent-%COMP%]   .services-right-img[_ngcontent-%COMP%]{height:300px}.landing-hero-banner[_ngcontent-%COMP%]   .services-hero-image[_ngcontent-%COMP%]   .right-hero-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:270px}.landing-hero-banner[_ngcontent-%COMP%]   .services-hero-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:30px;line-height:42px;margin-bottom:10px}.quote-sec[_ngcontent-%COMP%]   button.enquiry-btn[_ngcontent-%COMP%]{float:none}.pad-t-b[_ngcontent-%COMP%]{padding:60px 0}.mrg-t-100[_ngcontent-%COMP%]{margin-top:60px}a.enquiry-btn[_ngcontent-%COMP%]{font-size:14px;padding:12px 24px}h3[_ngcontent-%COMP%]{font-size:18px}h2[_ngcontent-%COMP%]{font-size:26px;text-align:center}.sticky[_ngcontent-%COMP%]{background:#fff;box-shadow:none}.sub-title[_ngcontent-%COMP%]{text-align:center}.sidemenu[_ngcontent-%COMP%]   .cbp-spmenu-right[_ngcontent-%COMP%]{right:-760px}.free-trail-sec[_ngcontent-%COMP%]{padding:60px 0}.we-work-sec[_ngcontent-%COMP%]   .approch-slider[_ngcontent-%COMP%]   .flex-sec[_ngcontent-%COMP%]{height:auto}.we-work-sec[_ngcontent-%COMP%]{height:auto!important}.benefit-sec[_ngcontent-%COMP%]   .benefit-dec[_ngcontent-%COMP%]{padding:30px}.benefit-sec[_ngcontent-%COMP%]   .benefit-dec[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:26px}.benefit-sec[_ngcontent-%COMP%]   .benefit-dec[_ngcontent-%COMP%]   ul.solution-point[_ngcontent-%COMP%]{margin-top:30px}.benefit-sec[_ngcontent-%COMP%]   .benefit-right[_ngcontent-%COMP%]   .startup-benifit[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:24px}.benefit-sec[_ngcontent-%COMP%]   .mrg-t-30[_ngcontent-%COMP%]{margin-top:0}.benefit-sec[_ngcontent-%COMP%]   .benefit-left[_ngcontent-%COMP%], .benefit-sec[_ngcontent-%COMP%]   .benefit-right[_ngcontent-%COMP%]{height:auto}.client-testimonial-sec[_ngcontent-%COMP%]{padding:60px 0}.client-testimonial-sec[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .slider-width[_ngcontent-%COMP%]{width:300px}.client-testimonial-sec[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .slick-slide.slick-active[_ngcontent-%COMP%]   .testimonial-box[_ngcontent-%COMP%]   .play-btn[_ngcontent-%COMP%]{padding:5px 10px}.client-testimonial-sec[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .slick-slide.slick-active[_ngcontent-%COMP%]   .testimonial-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px;line-height:22px}.client-testimonial-sec[_ngcontent-%COMP%]   .testimonial-slider[_ngcontent-%COMP%]   .slick-slide.slick-active[_ngcontent-%COMP%]   .testimonial-box[_ngcontent-%COMP%]   .play-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:25px}.free-trail-sec[_ngcontent-%COMP%]   .trail-left[_ngcontent-%COMP%]{padding:20px}.free-trail-sec[_ngcontent-%COMP%]   .trail-left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:26px;line-height:36px}.free-trail-sec[_ngcontent-%COMP%]   .trail-right[_ngcontent-%COMP%]{padding:30px 0 0;text-align:center}.casestudy-sec[_ngcontent-%COMP%], .service-sec[_ngcontent-%COMP%]{text-align:center}.service-sec[_ngcontent-%COMP%]   .service-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:5px;font-size:24px}.casestudy-sec[_ngcontent-%COMP%]   .case-box[_ngcontent-%COMP%]   .text-block[_ngcontent-%COMP%]{display:none}.casestudy-sec[_ngcontent-%COMP%]   .case-box[_ngcontent-%COMP%]   .case-col[_ngcontent-%COMP%]:hover{-webkit-transform:translateY(0);transform:translateY(0)}.case-col[_ngcontent-%COMP%]:hover   .img-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-webkit-filter:blur(0)!important;filter:blur(0)!important}.brands-sec[_ngcontent-%COMP%]   ul.brand-logo[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:50%;padding:0 20px;margin:20px 0;height:100px}.title-block[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}.quote-sec[_ngcontent-%COMP%]{text-align:center;height:100%}.quote-sec[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:30px}.quote-sec[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{width:100%;margin-bottom:10px;margin-top:10px}.quote-sec[_ngcontent-%COMP%]   a.enquiry-btn[_ngcontent-%COMP%]{float:none;margin-top:0}.footer-sec[_ngcontent-%COMP%]{padding:40px 0 0}.sidemenu[_ngcontent-%COMP%]   .cbp-spmenu-vertical[_ngcontent-%COMP%]{width:100%}#lets-talk.lets-talk.services-sidebar-form[_ngcontent-%COMP%]{margin:30px 0!important;height:100%}.services-sidebar-form[_ngcontent-%COMP%]   .enquiry-page-form[_ngcontent-%COMP%]{padding:50px 15px 30px}  .contact-form-sec{padding:0}  .contact-form-sec .tell-us-title{align-items:flex-start}  .contact-form-sec .group input.name{width:47.8%;margin-right:0}  .contact-form-sec .group input.first-name{margin-right:15px}  .contact-form-sec .group input.last-name{margin-bottom:0}  .contact-form-sec .tell-us-title img{max-width:inherit}.service-landing-form[_ngcontent-%COMP%]   .sidebar-sec[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:18px;padding:0 15px}.we-work-sec[_ngcontent-%COMP%]   .approch-slider[_ngcontent-%COMP%]   .work-info[_ngcontent-%COMP%]{padding:0;text-align:center}.we-work-sec[_ngcontent-%COMP%]   .approch-slider[_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]{margin-bottom:25px;max-width:220px;min-height:180px}.what-we-sec[_ngcontent-%COMP%]   .service-box[_ngcontent-%COMP%]{text-align:center;padding:20px}.work-sec[_ngcontent-%COMP%]{padding:60px 0}.our-facts-sec[_ngcontent-%COMP%]   .fact-box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .work-sec[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:30px}.work-sec[_ngcontent-%COMP%]   .work-flow[_ngcontent-%COMP%]{text-align:center;display:block;margin-top:40px}.work-sec[_ngcontent-%COMP%]   .work-flow[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:16px;width:100%}.work-sec[_ngcontent-%COMP%]   .work-flow[_ngcontent-%COMP%]   .col-left[_ngcontent-%COMP%]{margin-bottom:20px}.our-facts-sec[_ngcontent-%COMP%]   .fact-box[_ngcontent-%COMP%]{text-align:center;padding:10px 15px;min-height:120px}.our-facts-sec[_ngcontent-%COMP%]   .fact-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;line-height:20px}.service-sec[_ngcontent-%COMP%]{text-align:center}.service-sec[_ngcontent-%COMP%]   .service-box[_ngcontent-%COMP%]{padding:40px 0 0;min-height:inherit}.service-sec[_ngcontent-%COMP%]   .service-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:inline-block}  .casestudy-sec .our-work-services-slider .slick-list{padding:0 8% 0 0}.benefit-sec[_ngcontent-%COMP%]   .benefit-dec[_ngcontent-%COMP%]{text-align:left}.benefit-sec[_ngcontent-%COMP%]   .benefit-dec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 auto 30px}.services-icon-section[_ngcontent-%COMP%]{padding:60px 0}.services-icon-section[_ngcontent-%COMP%]   .icon-block[_ngcontent-%COMP%]{padding:30px 6px}.our-hiring-model[_ngcontent-%COMP%]{padding-top:60px}.our-hiring-model[_ngcontent-%COMP%]   .title-block[_ngcontent-%COMP%]{margin-bottom:0}.our-hiring-model[_ngcontent-%COMP%]   .work-block[_ngcontent-%COMP%]   .working-time[_ngcontent-%COMP%]{margin:30px 0 0;width:100%;text-align:center}.our-target-customers-section[_ngcontent-%COMP%]   .mobile-app-col[_ngcontent-%COMP%]{text-align:center}.our-target-customers-section[_ngcontent-%COMP%]   .mobile-app-services[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;line-height:30px;margin:16px 0}.our-hiring-model[_ngcontent-%COMP%]   .work-block[_ngcontent-%COMP%]   .working-day[_ngcontent-%COMP%]{justify-content:center}.our-target-customers-section[_ngcontent-%COMP%]{padding-bottom:60px}.team-masonry-grid[_ngcontent-%COMP%]   .masonry-column.mas-grid-one[_ngcontent-%COMP%], .team-masonry-grid[_ngcontent-%COMP%]   .masonry-column.mas-grid-two[_ngcontent-%COMP%]   .image-grid-col[_ngcontent-%COMP%]{display:none}.team-masonry-grid[_ngcontent-%COMP%]   .masonry-column.mas-grid-two[_ngcontent-%COMP%]   .partner-overview[_ngcontent-%COMP%]{margin-bottom:0}.team-masonry-grid[_ngcontent-%COMP%]   .partner-overview[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}.team-masonry-grid[_ngcontent-%COMP%]   .partner-overview[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:20px;line-height:28px}.team-masonry-grid[_ngcontent-%COMP%]   .partner-overview[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:28px}.team-masonry-grid[_ngcontent-%COMP%]   .masonry-column.mas-grid-four[_ngcontent-%COMP%]{display:block}.team-masonry-grid[_ngcontent-%COMP%]   .mas-grid-four[_ngcontent-%COMP%]   .partner-overview[_ngcontent-%COMP%]:first-child{margin-right:0}.main-page-header[_ngcontent-%COMP%]{padding:80px 0 0;height:auto}.wwd-service-content-center[_ngcontent-%COMP%]   .wwd-content-center[_ngcontent-%COMP%]{padding:40px 20px}.mobile-app-services[_ngcontent-%COMP%]{margin-top:30px}.mobile-app-services[_ngcontent-%COMP%]   .mobile-app-col[_ngcontent-%COMP%]{margin-bottom:30px;text-align:center}.mobile-app-services[_ngcontent-%COMP%]   .mobile-app-col[_ngcontent-%COMP%]:last-child{margin-bottom:0}.methodology-title[_ngcontent-%COMP%]{margin-bottom:20px}}@media (max-width:480px){  .contact-form-sec,   .sidemenu .cbp-spmenu-vertical{width:100%}}@media (max-width:360px){  .contact-form-sec .group input.name{width:47.4%}.landing-hero-banner[_ngcontent-%COMP%]   .services-hero-title[_ngcontent-%COMP%]{padding:40px 15px 0}.landing-hero-banner[_ngcontent-%COMP%]   .services-hero-image[_ngcontent-%COMP%], .landing-hero-banner[_ngcontent-%COMP%]   .services-hero-image[_ngcontent-%COMP%]   .landing-pattern-bg[_ngcontent-%COMP%]{height:200px}.landing-hero-banner[_ngcontent-%COMP%]   .services-hero-image[_ngcontent-%COMP%]   .right-hero-image[_ngcontent-%COMP%]{bottom:0}}@media only screen and (min-device-width:320px) and (max-device-width:767px) and (-webkit-min-device-pixel-ratio:2) and (orientation:landscape){.cbp-spmenu-right[_ngcontent-%COMP%]{right:-700px}.landing-hero-banner[_ngcontent-%COMP%]   .services-hero-title[_ngcontent-%COMP%]{padding:60px 30px 0}}']],
                data: {}
            });
        function h(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 4, "picture", [], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 0, "source", [["type", "image/webp"]], [[1, "defaultImage", 0], [1, "lazyLoad", 0]], null, null, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 0, "source", [], [[1, "defaultImage", 0], [1, "lazyLoad", 0], [8, "type", 0]], null, null, null, null)), (n()(),
                            t["\u0275eld"](3, 0, null, null, 1, "img", [], [[8, "alt", 0]], null, null, null, null)), t["\u0275did"](4, 1720320, null, 0, u.a, [t.ElementRef, t.NgZone, t.PLATFORM_ID, [2, "options"]], {
                                lazyImage: [0, "lazyImage"],
                                defaultImage: [1, "defaultImage"]
                            }, null)], function (n, l) {
                                n(l, 4, 0, null == l.parent.parent.parent.context.$implicit ? null : null == l.parent.parent.parent.context.$implicit.banner_image ? null : l.parent.parent.parent.context.$implicit.banner_image.url, l.component.defaultImage)
                            }, function (n, l) {
                                var e = l.component;
                                n(l, 1, 0, e.defaultImage, e.commonService.getWebp(null == l.parent.parent.parent.context.$implicit ? null : null == l.parent.parent.parent.context.$implicit.banner_image ? null : l.parent.parent.parent.context.$implicit.banner_image.url)),
                                    n(l, 2, 0, e.defaultImage, null == l.parent.parent.parent.context.$implicit ? null : null == l.parent.parent.parent.context.$implicit.banner_image ? null : l.parent.parent.parent.context.$implicit.banner_image.url, t["\u0275inlineInterpolate"](1, "image/", e.commonService.getImgtype(null == l.parent.parent.parent.context.$implicit ? null : null == l.parent.parent.parent.context.$implicit.banner_image ? null : l.parent.parent.parent.context.$implicit.banner_image.url), "")),
                                    n(l, 3, 0, t["\u0275inlineInterpolate"](1, "", null == l.parent.parent.parent.context.$implicit ? null : null == l.parent.parent.parent.context.$implicit.banner_image ? null : l.parent.parent.parent.context.$implicit.banner_image.alt, ""))
                            })
        }
        function C(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 8, "div", [["class", "services-hero-image"]], null, null, null, null, null)), t["\u0275did"](1, 278528, null, 0, c.NgStyle, [t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                    ngStyle: [0, "ngStyle"]
                }, null), t["\u0275pod"](2, {
                    "background-image": 0
                }), (n()(),
                    t["\u0275eld"](3, 0, null, null, 2, "div", [["class", "landing-pattern-bg"]], null, null, null, null, null)), t["\u0275did"](4, 278528, null, 0, c.NgStyle, [t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                        ngStyle: [0, "ngStyle"]
                    }, null), t["\u0275pod"](5, {
                        background: 0
                    }), (n()(),
                        t["\u0275eld"](6, 0, null, null, 2, "div", [["class", "right-hero-image"]], null, null, null, null, null)), (n()(),
                            t["\u0275and"](16777216, null, null, 1, null, h)), t["\u0275did"](8, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                ngIf: [0, "ngIf"]
                            }, null)], function (n, l) {
                                var e = n(l, 2, 0, l.component.setBackgroundGradient(null == l.parent.parent.context.$implicit ? null : l.parent.parent.context.$implicit.banner_background_color1, null == l.parent.parent.context.$implicit ? null : l.parent.parent.context.$implicit.banner_background_color2));
                                n(l, 1, 0, e);
                                var t = n(l, 5, 0, "url(" + (null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.banner_background_image ? null : l.parent.parent.context.$implicit.banner_background_image.url) + ")");
                                n(l, 4, 0, t),
                                    n(l, 8, 0, null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.banner_image ? null : l.parent.parent.context.$implicit.banner_image.url)
                            }, null)
        }
        function O(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 4, "picture", [], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 0, "source", [["type", "image/webp"]], [[1, "defaultImage", 0], [1, "lazyLoad", 0]], null, null, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 0, "source", [], [[1, "defaultImage", 0], [1, "lazyLoad", 0], [8, "type", 0]], null, null, null, null)), (n()(),
                            t["\u0275eld"](3, 0, null, null, 1, "img", [], [[8, "alt", 0]], null, null, null, null)), t["\u0275did"](4, 1720320, null, 0, u.a, [t.ElementRef, t.NgZone, t.PLATFORM_ID, [2, "options"]], {
                                lazyImage: [0, "lazyImage"],
                                defaultImage: [1, "defaultImage"]
                            }, null)], function (n, l) {
                                n(l, 4, 0, null == l.parent.parent.parent.context.$implicit ? null : null == l.parent.parent.parent.context.$implicit.banner_image ? null : l.parent.parent.parent.context.$implicit.banner_image.url, l.component.defaultImage)
                            }, function (n, l) {
                                var e = l.component;
                                n(l, 1, 0, e.defaultImage, e.commonService.getWebp(null == l.parent.parent.parent.context.$implicit ? null : null == l.parent.parent.parent.context.$implicit.banner_image ? null : l.parent.parent.parent.context.$implicit.banner_image.url)),
                                    n(l, 2, 0, e.defaultImage, null == l.parent.parent.parent.context.$implicit ? null : null == l.parent.parent.parent.context.$implicit.banner_image ? null : l.parent.parent.parent.context.$implicit.banner_image.url, t["\u0275inlineInterpolate"](1, "image/", e.commonService.getImgtype(null == l.parent.parent.parent.context.$implicit ? null : null == l.parent.parent.parent.context.$implicit.banner_image ? null : l.parent.parent.parent.context.$implicit.banner_image.url), "")),
                                    n(l, 3, 0, t["\u0275inlineInterpolate"](1, "", null == l.parent.parent.parent.context.$implicit ? null : null == l.parent.parent.parent.context.$implicit.banner_image ? null : l.parent.parent.parent.context.$implicit.banner_image.alt, ""))
                            })
        }
        function M(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 3, "div", [["class", "services-hero-image"]], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 2, "div", [["class", "single-hero-image"]], null, null, null, null, null)), (n()(),
                        t["\u0275and"](16777216, null, null, 1, null, O)), t["\u0275did"](3, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                            ngIf: [0, "ngIf"]
                        }, null)], function (n, l) {
                            n(l, 3, 0, null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.banner_image ? null : l.parent.parent.context.$implicit.banner_image.url)
                        }, null)
        }
        function P(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 15, "section", [["class", "landing-hero-banner"]], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 14, "div", [["class", "landing-banner-sec"]], null, null, null, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 13, "div", [["class", "landing-row"]], null, null, null, null, null)), (n()(),
                            t["\u0275eld"](3, 0, null, null, 7, "div", [["class", "banner-text-col"]], null, null, null, null, null)), (n()(),
                                t["\u0275eld"](4, 0, null, null, 6, "div", [["class", "services-hero-title"]], null, null, null, null, null)), (n()(),
                                    t["\u0275eld"](5, 0, null, null, 0, "h1", [], [[8, "innerHTML", 1]], null, null, null, null)), (n()(),
                                        t["\u0275eld"](6, 0, null, null, 4, "div", [["class", "services-hero-desc"]], null, null, null, null, null)), (n()(),
                                            t["\u0275eld"](7, 0, null, null, 0, "p", [["class", "approch-sec"]], [[8, "innerHTML", 1]], null, null, null, null)), (n()(),
                                                t["\u0275eld"](8, 0, null, null, 2, "a", [["class", "talk-btn"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (n, l, e) {
                                                    var i = !0;
                                                    return "click" === l && (i = !1 !== t["\u0275nov"](n, 9).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && i),
                                                        i
                                                }, null, null)), t["\u0275did"](9, 671744, null, 0, a.o, [a.m, a.a, c.LocationStrategy], {
                                                    routerLink: [0, "routerLink"]
                                                }, null), (n()(),
                                                    t["\u0275ted"](-1, null, ["Let's Talk"])), (n()(),
                                                        t["\u0275eld"](11, 0, null, null, 4, "div", [["class", "banner-img-col services-right-img"]], null, null, null, null, null)), (n()(),
                                                            t["\u0275and"](16777216, null, null, 1, null, C)), t["\u0275did"](13, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                ngIf: [0, "ngIf"]
                                                            }, null), (n()(),
                                                                t["\u0275and"](16777216, null, null, 1, null, M)), t["\u0275did"](15, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                    ngIf: [0, "ngIf"]
                                                                }, null)], function (n, l) {
                                                                    n(l, 9, 0, "/" + l.component.commonService.replaceRootURLToBlank(null == l.parent.context.$implicit ? null : l.parent.context.$implicit.banner_contact_button_link)),
                                                                        n(l, 13, 0, 1 == (null == l.parent.context.$implicit ? null : l.parent.context.$implicit.show_background_image)),
                                                                        n(l, 15, 0, 0 == (null == l.parent.context.$implicit ? null : l.parent.context.$implicit.show_background_image))
                                                                }, function (n, l) {
                                                                    n(l, 5, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.title),
                                                                        n(l, 7, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.description),
                                                                        n(l, 8, 0, t["\u0275nov"](l, 9).target, t["\u0275nov"](l, 9).href)
                                                                })
        }
        function v(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 103, "section", [["class", "dedicated-partner-sec pad-t-b"]], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 5, "div", [["class", "container"]], null, null, null, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 4, "div", [["class", "title-block"]], null, null, null, null, null)), (n()(),
                            t["\u0275eld"](3, 0, null, null, 1, "p", [["class", "sub-title"]], null, null, null, null, null)), (n()(),
                                t["\u0275ted"](4, null, ["", ""])), (n()(),
                                    t["\u0275eld"](5, 0, null, null, 1, "h2", [], null, null, null, null, null)), (n()(),
                                        t["\u0275ted"](6, null, ["", ""])), (n()(),
                                            t["\u0275eld"](7, 0, null, null, 96, "div", [["class", "container"]], null, null, null, null, null)), (n()(),
                                                t["\u0275eld"](8, 0, null, null, 95, "div", [["class", "row team-masonry-grid"]], null, null, null, null, null)), (n()(),
                                                    t["\u0275eld"](9, 0, null, null, 37, "div", [["class", "col-md-4 col-lg-3 col-xl-3 masonry-column mas-grid-one"]], null, null, null, null, null)), (n()(),
                                                        t["\u0275eld"](10, 0, null, null, 36, "div", [["class", "image-grid-col"]], null, null, null, null, null)), (n()(),
                                                            t["\u0275eld"](11, 0, null, null, 2, "div", [["class", "people-img"]], null, null, null, null, null)), (n()(),
                                                                t["\u0275eld"](12, 0, null, null, 1, "img", [], [[8, "alt", 0]], null, null, null, null)), t["\u0275did"](13, 1720320, null, 0, u.a, [t.ElementRef, t.NgZone, t.PLATFORM_ID, [2, "options"]], {
                                                                    lazyImage: [0, "lazyImage"],
                                                                    defaultImage: [1, "defaultImage"]
                                                                }, null), (n()(),
                                                                    t["\u0275eld"](14, 0, null, null, 2, "div", [["class", "people-img"]], null, null, null, null, null)), (n()(),
                                                                        t["\u0275eld"](15, 0, null, null, 1, "img", [], [[8, "alt", 0]], null, null, null, null)), t["\u0275did"](16, 1720320, null, 0, u.a, [t.ElementRef, t.NgZone, t.PLATFORM_ID, [2, "options"]], {
                                                                            lazyImage: [0, "lazyImage"],
                                                                            defaultImage: [1, "defaultImage"]
                                                                        }, null), (n()(),
                                                                            t["\u0275eld"](17, 0, null, null, 2, "div", [["class", "people-img"]], null, null, null, null, null)), (n()(),
                                                                                t["\u0275eld"](18, 0, null, null, 1, "img", [], [[8, "alt", 0]], null, null, null, null)), t["\u0275did"](19, 1720320, null, 0, u.a, [t.ElementRef, t.NgZone, t.PLATFORM_ID, [2, "options"]], {
                                                                                    lazyImage: [0, "lazyImage"],
                                                                                    defaultImage: [1, "defaultImage"]
                                                                                }, null), (n()(),
                                                                                    t["\u0275eld"](20, 0, null, null, 2, "div", [["class", "people-img"]], null, null, null, null, null)), (n()(),
                                                                                        t["\u0275eld"](21, 0, null, null, 1, "img", [], [[8, "alt", 0]], null, null, null, null)), t["\u0275did"](22, 1720320, null, 0, u.a, [t.ElementRef, t.NgZone, t.PLATFORM_ID, [2, "options"]], {
                                                                                            lazyImage: [0, "lazyImage"],
                                                                                            defaultImage: [1, "defaultImage"]
                                                                                        }, null), (n()(),
                                                                                            t["\u0275eld"](23, 0, null, null, 2, "div", [["class", "people-img"]], null, null, null, null, null)), (n()(),
                                                                                                t["\u0275eld"](24, 0, null, null, 1, "img", [], [[8, "alt", 0]], null, null, null, null)), t["\u0275did"](25, 1720320, null, 0, u.a, [t.ElementRef, t.NgZone, t.PLATFORM_ID, [2, "options"]], {
                                                                                                    lazyImage: [0, "lazyImage"],
                                                                                                    defaultImage: [1, "defaultImage"]
                                                                                                }, null), (n()(),
                                                                                                    t["\u0275eld"](26, 0, null, null, 2, "div", [["class", "people-img"]], null, null, null, null, null)), (n()(),
                                                                                                        t["\u0275eld"](27, 0, null, null, 1, "img", [], [[8, "alt", 0]], null, null, null, null)), t["\u0275did"](28, 1720320, null, 0, u.a, [t.ElementRef, t.NgZone, t.PLATFORM_ID, [2, "options"]], {
                                                                                                            lazyImage: [0, "lazyImage"],
                                                                                                            defaultImage: [1, "defaultImage"]
                                                                                                        }, null), (n()(),
                                                                                                            t["\u0275eld"](29, 0, null, null, 2, "div", [["class", "people-img"]], null, null, null, null, null)), (n()(),
                                                                                                                t["\u0275eld"](30, 0, null, null, 1, "img", [], [[8, "alt", 0]], null, null, null, null)), t["\u0275did"](31, 1720320, null, 0, u.a, [t.ElementRef, t.NgZone, t.PLATFORM_ID, [2, "options"]], {
                                                                                                                    lazyImage: [0, "lazyImage"],
                                                                                                                    defaultImage: [1, "defaultImage"]
                                                                                                                }, null), (n()(),
                                                                                                                    t["\u0275eld"](32, 0, null, null, 2, "div", [["class", "people-img"]], null, null, null, null, null)), (n()(),
                                                                                                                        t["\u0275eld"](33, 0, null, null, 1, "img", [], [[8, "alt", 0]], null, null, null, null)), t["\u0275did"](34, 1720320, null, 0, u.a, [t.ElementRef, t.NgZone, t.PLATFORM_ID, [2, "options"]], {
                                                                                                                            lazyImage: [0, "lazyImage"],
                                                                                                                            defaultImage: [1, "defaultImage"]
                                                                                                                        }, null), (n()(),
                                                                                                                            t["\u0275eld"](35, 0, null, null, 2, "div", [["class", "people-img"]], null, null, null, null, null)), (n()(),
                                                                                                                                t["\u0275eld"](36, 0, null, null, 1, "img", [], [[8, "alt", 0]], null, null, null, null)), t["\u0275did"](37, 1720320, null, 0, u.a, [t.ElementRef, t.NgZone, t.PLATFORM_ID, [2, "options"]], {
                                                                                                                                    lazyImage: [0, "lazyImage"],
                                                                                                                                    defaultImage: [1, "defaultImage"]
                                                                                                                                }, null), (n()(),
                                                                                                                                    t["\u0275eld"](38, 0, null, null, 2, "div", [["class", "people-img"]], null, null, null, null, null)), (n()(),
                                                                                                                                        t["\u0275eld"](39, 0, null, null, 1, "img", [], [[8, "alt", 0]], null, null, null, null)), t["\u0275did"](40, 1720320, null, 0, u.a, [t.ElementRef, t.NgZone, t.PLATFORM_ID, [2, "options"]], {
                                                                                                                                            lazyImage: [0, "lazyImage"],
                                                                                                                                            defaultImage: [1, "defaultImage"]
                                                                                                                                        }, null), (n()(),
                                                                                                                                            t["\u0275eld"](41, 0, null, null, 2, "div", [["class", "people-img"]], null, null, null, null, null)), (n()(),
                                                                                                                                                t["\u0275eld"](42, 0, null, null, 1, "img", [], [[8, "alt", 0]], null, null, null, null)), t["\u0275did"](43, 1720320, null, 0, u.a, [t.ElementRef, t.NgZone, t.PLATFORM_ID, [2, "options"]], {
                                                                                                                                                    lazyImage: [0, "lazyImage"],
                                                                                                                                                    defaultImage: [1, "defaultImage"]
                                                                                                                                                }, null), (n()(),
                                                                                                                                                    t["\u0275eld"](44, 0, null, null, 2, "div", [["class", "people-img"]], null, null, null, null, null)), (n()(),
                                                                                                                                                        t["\u0275eld"](45, 0, null, null, 1, "img", [], [[8, "alt", 0]], null, null, null, null)), t["\u0275did"](46, 1720320, null, 0, u.a, [t.ElementRef, t.NgZone, t.PLATFORM_ID, [2, "options"]], {
                                                                                                                                                            lazyImage: [0, "lazyImage"],
                                                                                                                                                            defaultImage: [1, "defaultImage"]
                                                                                                                                                        }, null), (n()(),
                                                                                                                                                            t["\u0275eld"](47, 0, null, null, 26, "div", [["class", "col-md-4 col-lg-3 col-xl-3 masonry-column mas-grid-two"]], null, null, null, null, null)), (n()(),
                                                                                                                                                                t["\u0275eld"](48, 0, null, null, 6, "div", [["class", "partner-overview"]], null, null, null, null, null)), (n()(),
                                                                                                                                                                    t["\u0275eld"](49, 0, null, null, 1, "img", [], [[8, "alt", 0]], null, null, null, null)), t["\u0275did"](50, 1720320, null, 0, u.a, [t.ElementRef, t.NgZone, t.PLATFORM_ID, [2, "options"]], {
                                                                                                                                                                        lazyImage: [0, "lazyImage"],
                                                                                                                                                                        defaultImage: [1, "defaultImage"]
                                                                                                                                                                    }, null), (n()(),
                                                                                                                                                                        t["\u0275eld"](51, 0, null, null, 1, "h4", [], null, null, null, null, null)), (n()(),
                                                                                                                                                                            t["\u0275ted"](52, null, ["", ""])), (n()(),
                                                                                                                                                                                t["\u0275eld"](53, 0, null, null, 1, "p", [], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275ppd"](54, 1), (n()(),
                                                                                                                                                                                    t["\u0275eld"](55, 0, null, null, 18, "div", [["class", "image-grid-col"]], null, null, null, null, null)), (n()(),
                                                                                                                                                                                        t["\u0275eld"](56, 0, null, null, 2, "div", [["class", "people-img"]], null, null, null, null, null)), (n()(),
                                                                                                                                                                                            t["\u0275eld"](57, 0, null, null, 1, "img", [], [[8, "alt", 0]], null, null, null, null)), t["\u0275did"](58, 1720320, null, 0, u.a, [t.ElementRef, t.NgZone, t.PLATFORM_ID, [2, "options"]], {
                                                                                                                                                                                                lazyImage: [0, "lazyImage"],
                                                                                                                                                                                                defaultImage: [1, "defaultImage"]
                                                                                                                                                                                            }, null), (n()(),
                                                                                                                                                                                                t["\u0275eld"](59, 0, null, null, 2, "div", [["class", "people-img"]], null, null, null, null, null)), (n()(),
                                                                                                                                                                                                    t["\u0275eld"](60, 0, null, null, 1, "img", [], [[8, "alt", 0]], null, null, null, null)), t["\u0275did"](61, 1720320, null, 0, u.a, [t.ElementRef, t.NgZone, t.PLATFORM_ID, [2, "options"]], {
                                                                                                                                                                                                        lazyImage: [0, "lazyImage"],
                                                                                                                                                                                                        defaultImage: [1, "defaultImage"]
                                                                                                                                                                                                    }, null), (n()(),
                                                                                                                                                                                                        t["\u0275eld"](62, 0, null, null, 2, "div", [["class", "people-img"]], null, null, null, null, null)), (n()(),
                                                                                                                                                                                                            t["\u0275eld"](63, 0, null, null, 1, "img", [], [[8, "alt", 0]], null, null, null, null)), t["\u0275did"](64, 1720320, null, 0, u.a, [t.ElementRef, t.NgZone, t.PLATFORM_ID, [2, "options"]], {
                                                                                                                                                                                                                lazyImage: [0, "lazyImage"],
                                                                                                                                                                                                                defaultImage: [1, "defaultImage"]
                                                                                                                                                                                                            }, null), (n()(),
                                                                                                                                                                                                                t["\u0275eld"](65, 0, null, null, 2, "div", [["class", "people-img"]], null, null, null, null, null)), (n()(),
                                                                                                                                                                                                                    t["\u0275eld"](66, 0, null, null, 1, "img", [], [[8, "alt", 0]], null, null, null, null)), t["\u0275did"](67, 1720320, null, 0, u.a, [t.ElementRef, t.NgZone, t.PLATFORM_ID, [2, "options"]], {
                                                                                                                                                                                                                        lazyImage: [0, "lazyImage"],
                                                                                                                                                                                                                        defaultImage: [1, "defaultImage"]
                                                                                                                                                                                                                    }, null), (n()(),
                                                                                                                                                                                                                        t["\u0275eld"](68, 0, null, null, 2, "div", [["class", "people-img"]], null, null, null, null, null)), (n()(),
                                                                                                                                                                                                                            t["\u0275eld"](69, 0, null, null, 1, "img", [], [[8, "alt", 0]], null, null, null, null)), t["\u0275did"](70, 1720320, null, 0, u.a, [t.ElementRef, t.NgZone, t.PLATFORM_ID, [2, "options"]], {
                                                                                                                                                                                                                                lazyImage: [0, "lazyImage"],
                                                                                                                                                                                                                                defaultImage: [1, "defaultImage"]
                                                                                                                                                                                                                            }, null), (n()(),
                                                                                                                                                                                                                                t["\u0275eld"](71, 0, null, null, 2, "div", [["class", "people-img"]], null, null, null, null, null)), (n()(),
                                                                                                                                                                                                                                    t["\u0275eld"](72, 0, null, null, 1, "img", [], [[8, "alt", 0]], null, null, null, null)), t["\u0275did"](73, 1720320, null, 0, u.a, [t.ElementRef, t.NgZone, t.PLATFORM_ID, [2, "options"]], {
                                                                                                                                                                                                                                        lazyImage: [0, "lazyImage"],
                                                                                                                                                                                                                                        defaultImage: [1, "defaultImage"]
                                                                                                                                                                                                                                    }, null), (n()(),
                                                                                                                                                                                                                                        t["\u0275eld"](74, 0, null, null, 14, "div", [["class", "col-md-4 col-lg-3 col-xl-3 masonry-column"]], null, null, null, null, null)), (n()(),
                                                                                                                                                                                                                                            t["\u0275eld"](75, 0, null, null, 6, "div", [["class", "partner-overview"]], null, null, null, null, null)), (n()(),
                                                                                                                                                                                                                                                t["\u0275eld"](76, 0, null, null, 1, "img", [], [[8, "alt", 0]], null, null, null, null)), t["\u0275did"](77, 1720320, null, 0, u.a, [t.ElementRef, t.NgZone, t.PLATFORM_ID, [2, "options"]], {
                                                                                                                                                                                                                                                    lazyImage: [0, "lazyImage"],
                                                                                                                                                                                                                                                    defaultImage: [1, "defaultImage"]
                                                                                                                                                                                                                                                }, null), (n()(),
                                                                                                                                                                                                                                                    t["\u0275eld"](78, 0, null, null, 1, "h4", [], null, null, null, null, null)), (n()(),
                                                                                                                                                                                                                                                        t["\u0275ted"](79, null, ["", ""])), (n()(),
                                                                                                                                                                                                                                                            t["\u0275eld"](80, 0, null, null, 1, "p", [], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275ppd"](81, 1), (n()(),
                                                                                                                                                                                                                                                                t["\u0275eld"](82, 0, null, null, 6, "div", [["class", "partner-overview"]], null, null, null, null, null)), (n()(),
                                                                                                                                                                                                                                                                    t["\u0275eld"](83, 0, null, null, 1, "img", [], [[8, "alt", 0]], null, null, null, null)), t["\u0275did"](84, 1720320, null, 0, u.a, [t.ElementRef, t.NgZone, t.PLATFORM_ID, [2, "options"]], {
                                                                                                                                                                                                                                                                        lazyImage: [0, "lazyImage"],
                                                                                                                                                                                                                                                                        defaultImage: [1, "defaultImage"]
                                                                                                                                                                                                                                                                    }, null), (n()(),
                                                                                                                                                                                                                                                                        t["\u0275eld"](85, 0, null, null, 1, "h4", [], null, null, null, null, null)), (n()(),
                                                                                                                                                                                                                                                                            t["\u0275ted"](86, null, ["", ""])), (n()(),
                                                                                                                                                                                                                                                                                t["\u0275eld"](87, 0, null, null, 1, "p", [], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275ppd"](88, 1), (n()(),
                                                                                                                                                                                                                                                                                    t["\u0275eld"](89, 0, null, null, 14, "div", [["class", "col-md-12 col-lg-3 col-xl-3 masonry-column mas-grid-four"]], null, null, null, null, null)), (n()(),
                                                                                                                                                                                                                                                                                        t["\u0275eld"](90, 0, null, null, 6, "div", [["class", "partner-overview"]], null, null, null, null, null)), (n()(),
                                                                                                                                                                                                                                                                                            t["\u0275eld"](91, 0, null, null, 1, "img", [], [[8, "alt", 0]], null, null, null, null)), t["\u0275did"](92, 1720320, null, 0, u.a, [t.ElementRef, t.NgZone, t.PLATFORM_ID, [2, "options"]], {
                                                                                                                                                                                                                                                                                                lazyImage: [0, "lazyImage"],
                                                                                                                                                                                                                                                                                                defaultImage: [1, "defaultImage"]
                                                                                                                                                                                                                                                                                            }, null), (n()(),
                                                                                                                                                                                                                                                                                                t["\u0275eld"](93, 0, null, null, 1, "h4", [], null, null, null, null, null)), (n()(),
                                                                                                                                                                                                                                                                                                    t["\u0275ted"](94, null, ["", ""])), (n()(),
                                                                                                                                                                                                                                                                                                        t["\u0275eld"](95, 0, null, null, 1, "p", [], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275ppd"](96, 1), (n()(),
                                                                                                                                                                                                                                                                                                            t["\u0275eld"](97, 0, null, null, 6, "div", [["class", "partner-overview"]], null, null, null, null, null)), (n()(),
                                                                                                                                                                                                                                                                                                                t["\u0275eld"](98, 0, null, null, 1, "img", [], [[8, "alt", 0]], null, null, null, null)), t["\u0275did"](99, 1720320, null, 0, u.a, [t.ElementRef, t.NgZone, t.PLATFORM_ID, [2, "options"]], {
                                                                                                                                                                                                                                                                                                                    lazyImage: [0, "lazyImage"],
                                                                                                                                                                                                                                                                                                                    defaultImage: [1, "defaultImage"]
                                                                                                                                                                                                                                                                                                                }, null), (n()(),
                                                                                                                                                                                                                                                                                                                    t["\u0275eld"](100, 0, null, null, 1, "h4", [], null, null, null, null, null)), (n()(),
                                                                                                                                                                                                                                                                                                                        t["\u0275ted"](101, null, ["", ""])), (n()(),
                                                                                                                                                                                                                                                                                                                            t["\u0275eld"](102, 0, null, null, 1, "p", [], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275ppd"](103, 1)], function (n, l) {
                                                                                                                                                                                                                                                                                                                                var e = l.component;
                                                                                                                                                                                                                                                                                                                                n(l, 13, 0, null == e.partnerSection ? null : null == e.partnerSection.team_members[0] ? null : null == e.partnerSection.team_members[0].team_member_1 ? null : e.partnerSection.team_members[0].team_member_1.url, e.defaultImage),
                                                                                                                                                                                                                                                                                                                                    n(l, 16, 0, null == e.partnerSection ? null : null == e.partnerSection.team_members[0] ? null : null == e.partnerSection.team_members[0].team_member_2 ? null : e.partnerSection.team_members[0].team_member_2.url, e.defaultImage),
                                                                                                                                                                                                                                                                                                                                    n(l, 19, 0, null == e.partnerSection ? null : null == e.partnerSection.team_members[0] ? null : null == e.partnerSection.team_members[0].team_member_3 ? null : e.partnerSection.team_members[0].team_member_3.url, e.defaultImage),
                                                                                                                                                                                                                                                                                                                                    n(l, 22, 0, null == e.partnerSection ? null : null == e.partnerSection.team_members[0] ? null : null == e.partnerSection.team_members[0].team_member_4 ? null : e.partnerSection.team_members[0].team_member_4.url, e.defaultImage),
                                                                                                                                                                                                                                                                                                                                    n(l, 25, 0, null == e.partnerSection ? null : null == e.partnerSection.team_members[0] ? null : null == e.partnerSection.team_members[0].team_member_5 ? null : e.partnerSection.team_members[0].team_member_5.url, e.defaultImage),
                                                                                                                                                                                                                                                                                                                                    n(l, 28, 0, null == e.partnerSection ? null : null == e.partnerSection.team_members[0] ? null : null == e.partnerSection.team_members[0].team_member_6 ? null : e.partnerSection.team_members[0].team_member_6.url, e.defaultImage),
                                                                                                                                                                                                                                                                                                                                    n(l, 31, 0, null == e.partnerSection ? null : null == e.partnerSection.team_members[1] ? null : null == e.partnerSection.team_members[1].team_member_1 ? null : e.partnerSection.team_members[1].team_member_1.url, e.defaultImage),
                                                                                                                                                                                                                                                                                                                                    n(l, 34, 0, null == e.partnerSection ? null : null == e.partnerSection.team_members[1] ? null : null == e.partnerSection.team_members[1].team_member_2 ? null : e.partnerSection.team_members[1].team_member_2.url, e.defaultImage),
                                                                                                                                                                                                                                                                                                                                    n(l, 37, 0, null == e.partnerSection ? null : null == e.partnerSection.team_members[1] ? null : null == e.partnerSection.team_members[1].team_member_3 ? null : e.partnerSection.team_members[1].team_member_3.url, e.defaultImage),
                                                                                                                                                                                                                                                                                                                                    n(l, 40, 0, null == e.partnerSection ? null : null == e.partnerSection.team_members[1] ? null : null == e.partnerSection.team_members[1].team_member_4 ? null : e.partnerSection.team_members[1].team_member_4.url, e.defaultImage),
                                                                                                                                                                                                                                                                                                                                    n(l, 43, 0, null == e.partnerSection ? null : null == e.partnerSection.team_members[1] ? null : null == e.partnerSection.team_members[1].team_member_5 ? null : e.partnerSection.team_members[1].team_member_5.url, e.defaultImage),
                                                                                                                                                                                                                                                                                                                                    n(l, 46, 0, null == e.partnerSection ? null : null == e.partnerSection.team_members[1] ? null : null == e.partnerSection.team_members[1].team_member_6 ? null : e.partnerSection.team_members[1].team_member_6.url, e.defaultImage),
                                                                                                                                                                                                                                                                                                                                    n(l, 50, 0, null == e.partnerSection ? null : null == e.partnerSection.feature_section[0] ? null : null == e.partnerSection.feature_section[0].feature_image ? null : e.partnerSection.feature_section[0].feature_image.url, e.defaultImage),
                                                                                                                                                                                                                                                                                                                                    n(l, 58, 0, null == e.partnerSection ? null : null == e.partnerSection.team_members[2] ? null : null == e.partnerSection.team_members[2].team_member_1 ? null : e.partnerSection.team_members[2].team_member_1.url, e.defaultImage),
                                                                                                                                                                                                                                                                                                                                    n(l, 61, 0, null == e.partnerSection ? null : null == e.partnerSection.team_members[2] ? null : null == e.partnerSection.team_members[2].team_member_2 ? null : e.partnerSection.team_members[2].team_member_2.url, e.defaultImage),
                                                                                                                                                                                                                                                                                                                                    n(l, 64, 0, null == e.partnerSection ? null : null == e.partnerSection.team_members[2] ? null : null == e.partnerSection.team_members[2].team_member_3 ? null : e.partnerSection.team_members[2].team_member_3.url, e.defaultImage),
                                                                                                                                                                                                                                                                                                                                    n(l, 67, 0, null == e.partnerSection ? null : null == e.partnerSection.team_members[2] ? null : null == e.partnerSection.team_members[2].team_member_4 ? null : e.partnerSection.team_members[2].team_member_4.url, e.defaultImage),
                                                                                                                                                                                                                                                                                                                                    n(l, 70, 0, null == e.partnerSection ? null : null == e.partnerSection.team_members[2] ? null : null == e.partnerSection.team_members[2].team_member_5 ? null : e.partnerSection.team_members[2].team_member_5.url, e.defaultImage),
                                                                                                                                                                                                                                                                                                                                    n(l, 73, 0, null == e.partnerSection ? null : null == e.partnerSection.team_members[2] ? null : null == e.partnerSection.team_members[2].team_member_6 ? null : e.partnerSection.team_members[2].team_member_6.url, e.defaultImage),
                                                                                                                                                                                                                                                                                                                                    n(l, 77, 0, null == e.partnerSection ? null : null == e.partnerSection.feature_section[1] ? null : null == e.partnerSection.feature_section[1].feature_image ? null : e.partnerSection.feature_section[1].feature_image.url, e.defaultImage),
                                                                                                                                                                                                                                                                                                                                    n(l, 84, 0, null == e.partnerSection ? null : null == e.partnerSection.feature_section[2] ? null : null == e.partnerSection.feature_section[2].feature_image ? null : e.partnerSection.feature_section[2].feature_image.url, e.defaultImage),
                                                                                                                                                                                                                                                                                                                                    n(l, 92, 0, null == e.partnerSection ? null : null == e.partnerSection.feature_section[3] ? null : null == e.partnerSection.feature_section[3].feature_image ? null : e.partnerSection.feature_section[3].feature_image.url, e.defaultImage),
                                                                                                                                                                                                                                                                                                                                    n(l, 99, 0, null == e.partnerSection ? null : null == e.partnerSection.feature_section[4] ? null : null == e.partnerSection.feature_section[4].feature_image ? null : e.partnerSection.feature_section[4].feature_image.url, e.defaultImage)
                                                                                                                                                                                                                                                                                                                            }, function (n, l) {
                                                                                                                                                                                                                                                                                                                                var e = l.component;
                                                                                                                                                                                                                                                                                                                                n(l, 4, 0, null == e.partnerSection ? null : e.partnerSection.subtitle),
                                                                                                                                                                                                                                                                                                                                    n(l, 6, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.title),
                                                                                                                                                                                                                                                                                                                                    n(l, 12, 0, t["\u0275inlineInterpolate"](1, "", null == e.partnerSection ? null : null == e.partnerSection.team_members[0] ? null : null == e.partnerSection.team_members[0].team_member_1 ? null : e.partnerSection.team_members[0].team_member_1.alt, "")),
                                                                                                                                                                                                                                                                                                                                    n(l, 15, 0, t["\u0275inlineInterpolate"](1, "", null == e.partnerSection ? null : null == e.partnerSection.team_members[0] ? null : null == e.partnerSection.team_members[0].team_member_2 ? null : e.partnerSection.team_members[0].team_member_2.alt, "")),
                                                                                                                                                                                                                                                                                                                                    n(l, 18, 0, t["\u0275inlineInterpolate"](1, "", null == e.partnerSection ? null : null == e.partnerSection.team_members[0] ? null : null == e.partnerSection.team_members[0].team_member_3 ? null : e.partnerSection.team_members[0].team_member_3.alt, "")),
                                                                                                                                                                                                                                                                                                                                    n(l, 21, 0, t["\u0275inlineInterpolate"](1, "", null == e.partnerSection ? null : null == e.partnerSection.team_members[0] ? null : null == e.partnerSection.team_members[0].team_member_4 ? null : e.partnerSection.team_members[0].team_member_4.alt, "")),
                                                                                                                                                                                                                                                                                                                                    n(l, 24, 0, t["\u0275inlineInterpolate"](1, "", null == e.partnerSection ? null : null == e.partnerSection.team_members[0] ? null : null == e.partnerSection.team_members[0].team_member_5 ? null : e.partnerSection.team_members[0].team_member_5.alt, "")),
                                                                                                                                                                                                                                                                                                                                    n(l, 27, 0, t["\u0275inlineInterpolate"](1, "", null == e.partnerSection ? null : null == e.partnerSection.team_members[0] ? null : null == e.partnerSection.team_members[0].team_member_6 ? null : e.partnerSection.team_members[0].team_member_6.alt, "")),
                                                                                                                                                                                                                                                                                                                                    n(l, 30, 0, t["\u0275inlineInterpolate"](1, "", null == e.partnerSection ? null : null == e.partnerSection.team_members[1] ? null : null == e.partnerSection.team_members[1].team_member_1 ? null : e.partnerSection.team_members[1].team_member_1.alt, "")),
                                                                                                                                                                                                                                                                                                                                    n(l, 33, 0, t["\u0275inlineInterpolate"](1, "", null == e.partnerSection ? null : null == e.partnerSection.team_members[1] ? null : null == e.partnerSection.team_members[1].team_member_2 ? null : e.partnerSection.team_members[1].team_member_2.alt, "")),
                                                                                                                                                                                                                                                                                                                                    n(l, 36, 0, t["\u0275inlineInterpolate"](1, "", null == e.partnerSection ? null : null == e.partnerSection.team_members[1] ? null : null == e.partnerSection.team_members[1].team_member_3 ? null : e.partnerSection.team_members[1].team_member_3.alt, "")),
                                                                                                                                                                                                                                                                                                                                    n(l, 39, 0, t["\u0275inlineInterpolate"](1, "", null == e.partnerSection ? null : null == e.partnerSection.team_members[1] ? null : null == e.partnerSection.team_members[1].team_member_4 ? null : e.partnerSection.team_members[1].team_member_4.alt, "")),
                                                                                                                                                                                                                                                                                                                                    n(l, 42, 0, t["\u0275inlineInterpolate"](1, "", null == e.partnerSection ? null : null == e.partnerSection.team_members[1] ? null : null == e.partnerSection.team_members[1].team_member_5 ? null : e.partnerSection.team_members[1].team_member_5.alt, "")),
                                                                                                                                                                                                                                                                                                                                    n(l, 45, 0, t["\u0275inlineInterpolate"](1, "", null == e.partnerSection ? null : null == e.partnerSection.team_members[1] ? null : null == e.partnerSection.team_members[1].team_member_6 ? null : e.partnerSection.team_members[1].team_member_6.alt, "")),
                                                                                                                                                                                                                                                                                                                                    n(l, 49, 0, t["\u0275inlineInterpolate"](1, "", null == e.partnerSection ? null : null == e.partnerSection.feature_section[0] ? null : null == e.partnerSection.feature_section[0].feature_image ? null : e.partnerSection.feature_section[0].feature_image.alt, "")),
                                                                                                                                                                                                                                                                                                                                    n(l, 52, 0, null == e.partnerSection ? null : null == e.partnerSection.feature_section[0] ? null : e.partnerSection.feature_section[0].title);
                                                                                                                                                                                                                                                                                                                                var i = t["\u0275unv"](l, 53, 0, n(l, 54, 0, t["\u0275nov"](l.parent.parent.parent, 0), null == e.partnerSection ? null : null == e.partnerSection.feature_section[0] ? null : e.partnerSection.feature_section[0].description));
                                                                                                                                                                                                                                                                                                                                n(l, 53, 0, i),
                                                                                                                                                                                                                                                                                                                                    n(l, 57, 0, t["\u0275inlineInterpolate"](1, "", null == e.partnerSection ? null : null == e.partnerSection.team_members[2] ? null : null == e.partnerSection.team_members[2].team_member_1 ? null : e.partnerSection.team_members[2].team_member_1.alt, "")),
                                                                                                                                                                                                                                                                                                                                    n(l, 60, 0, t["\u0275inlineInterpolate"](1, "", null == e.partnerSection ? null : null == e.partnerSection.team_members[2] ? null : null == e.partnerSection.team_members[2].team_member_2 ? null : e.partnerSection.team_members[2].team_member_2.alt, "")),
                                                                                                                                                                                                                                                                                                                                    n(l, 63, 0, t["\u0275inlineInterpolate"](1, "", null == e.partnerSection ? null : null == e.partnerSection.team_members[2] ? null : null == e.partnerSection.team_members[2].team_member_3 ? null : e.partnerSection.team_members[2].team_member_3.alt, "")),
                                                                                                                                                                                                                                                                                                                                    n(l, 66, 0, t["\u0275inlineInterpolate"](1, "", null == e.partnerSection ? null : null == e.partnerSection.team_members[2] ? null : null == e.partnerSection.team_members[2].team_member_4 ? null : e.partnerSection.team_members[2].team_member_4.alt, "")),
                                                                                                                                                                                                                                                                                                                                    n(l, 69, 0, t["\u0275inlineInterpolate"](1, "", null == e.partnerSection ? null : null == e.partnerSection.team_members[2] ? null : null == e.partnerSection.team_members[2].team_member_5 ? null : e.partnerSection.team_members[2].team_member_5.alt, "")),
                                                                                                                                                                                                                                                                                                                                    n(l, 72, 0, t["\u0275inlineInterpolate"](1, "", null == e.partnerSection ? null : null == e.partnerSection.team_members[2] ? null : null == e.partnerSection.team_members[2].team_member_6 ? null : e.partnerSection.team_members[2].team_member_6.alt, "")),
                                                                                                                                                                                                                                                                                                                                    n(l, 76, 0, t["\u0275inlineInterpolate"](1, "", null == e.partnerSection ? null : null == e.partnerSection.feature_section[1] ? null : null == e.partnerSection.feature_section[1].feature_image ? null : e.partnerSection.feature_section[1].feature_image.alt, "")),
                                                                                                                                                                                                                                                                                                                                    n(l, 79, 0, null == e.partnerSection ? null : null == e.partnerSection.feature_section[1] ? null : e.partnerSection.feature_section[1].title);
                                                                                                                                                                                                                                                                                                                                var o = t["\u0275unv"](l, 80, 0, n(l, 81, 0, t["\u0275nov"](l.parent.parent.parent, 0), null == e.partnerSection ? null : null == e.partnerSection.feature_section[1] ? null : e.partnerSection.feature_section[1].description));
                                                                                                                                                                                                                                                                                                                                n(l, 80, 0, o),
                                                                                                                                                                                                                                                                                                                                    n(l, 83, 0, t["\u0275inlineInterpolate"](1, "", null == e.partnerSection ? null : null == e.partnerSection.feature_section[2] ? null : null == e.partnerSection.feature_section[2].feature_image ? null : e.partnerSection.feature_section[2].feature_image.alt, "")),
                                                                                                                                                                                                                                                                                                                                    n(l, 86, 0, null == e.partnerSection ? null : null == e.partnerSection.feature_section[2] ? null : e.partnerSection.feature_section[2].title);
                                                                                                                                                                                                                                                                                                                                var u = t["\u0275unv"](l, 87, 0, n(l, 88, 0, t["\u0275nov"](l.parent.parent.parent, 0), null == e.partnerSection ? null : null == e.partnerSection.feature_section[2] ? null : e.partnerSection.feature_section[2].description));
                                                                                                                                                                                                                                                                                                                                n(l, 87, 0, u),
                                                                                                                                                                                                                                                                                                                                    n(l, 91, 0, t["\u0275inlineInterpolate"](1, "", null == e.partnerSection ? null : null == e.partnerSection.feature_section[3] ? null : null == e.partnerSection.feature_section[3].feature_image ? null : e.partnerSection.feature_section[3].feature_image.alt, "")),
                                                                                                                                                                                                                                                                                                                                    n(l, 94, 0, null == e.partnerSection ? null : null == e.partnerSection.feature_section[3] ? null : e.partnerSection.feature_section[3].title);
                                                                                                                                                                                                                                                                                                                                var c = t["\u0275unv"](l, 95, 0, n(l, 96, 0, t["\u0275nov"](l.parent.parent.parent, 0), null == e.partnerSection ? null : null == e.partnerSection.feature_section[3] ? null : e.partnerSection.feature_section[3].description));
                                                                                                                                                                                                                                                                                                                                n(l, 95, 0, c),
                                                                                                                                                                                                                                                                                                                                    n(l, 98, 0, t["\u0275inlineInterpolate"](1, "", null == e.partnerSection ? null : null == e.partnerSection.feature_section[4] ? null : null == e.partnerSection.feature_section[4].feature_image ? null : e.partnerSection.feature_section[4].feature_image.alt, "")),
                                                                                                                                                                                                                                                                                                                                    n(l, 101, 0, null == e.partnerSection ? null : null == e.partnerSection.feature_section[4] ? null : e.partnerSection.feature_section[4].title);
                                                                                                                                                                                                                                                                                                                                var a = t["\u0275unv"](l, 102, 0, n(l, 103, 0, t["\u0275nov"](l.parent.parent.parent, 0), null == e.partnerSection ? null : null == e.partnerSection.feature_section[4] ? null : e.partnerSection.feature_section[4].description));
                                                                                                                                                                                                                                                                                                                                n(l, 102, 0, a)
                                                                                                                                                                                                                                                                                                                            })
        }
        function w(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 4, "picture", [], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 0, "source", [["type", "image/webp"]], [[1, "defaultImage", 0], [1, "lazyLoad", 0]], null, null, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 0, "source", [], [[1, "defaultImage", 0], [1, "lazyLoad", 0], [8, "type", 0]], null, null, null, null)), (n()(),
                            t["\u0275eld"](3, 0, null, null, 1, "img", [["class", "banner-img third"]], [[8, "alt", 0]], null, null, null, null)), t["\u0275did"](4, 1720320, null, 0, u.a, [t.ElementRef, t.NgZone, t.PLATFORM_ID, [2, "options"]], {
                                lazyImage: [0, "lazyImage"],
                                defaultImage: [1, "defaultImage"]
                            }, null)], function (n, l) {
                                n(l, 4, 0, null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.banner_image ? null : l.parent.parent.context.$implicit.banner_image.url, l.component.defaultImage)
                            }, function (n, l) {
                                var e = l.component;
                                n(l, 1, 0, e.defaultImage, e.commonService.getWebp(null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.banner_image ? null : l.parent.parent.context.$implicit.banner_image.url)),
                                    n(l, 2, 0, e.defaultImage, null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.banner_image ? null : l.parent.parent.context.$implicit.banner_image.url, t["\u0275inlineInterpolate"](1, "image/", e.commonService.getImgtype(null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.banner_image ? null : l.parent.parent.context.$implicit.banner_image.url), "")),
                                    n(l, 3, 0, t["\u0275inlineInterpolate"](1, "", null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.banner_image ? null : l.parent.parent.context.$implicit.banner_image.alt, ""))
                            })
        }
        function k(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 7, "section", [["class", "banner-sec-center"]], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 6, "div", [["class", "container"]], null, null, null, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 5, "div", [["class", "main-banner"]], null, null, null, null, null)), (n()(),
                            t["\u0275eld"](3, 0, null, null, 4, "div", [["class", "banner-center"]], null, null, null, null, null)), (n()(),
                                t["\u0275eld"](4, 0, null, null, 0, "h1", [["class", "first"]], [[8, "innerHTML", 1]], null, null, null, null)), (n()(),
                                    t["\u0275eld"](5, 0, null, null, 0, "p", [["class", "banner-text second"]], [[8, "innerHTML", 1]], null, null, null, null)), (n()(),
                                        t["\u0275and"](16777216, null, null, 1, null, w)), t["\u0275did"](7, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                            ngIf: [0, "ngIf"]
                                        }, null)], function (n, l) {
                                            n(l, 7, 0, null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.banner_image ? null : l.parent.context.$implicit.banner_image.url)
                                        }, function (n, l) {
                                            n(l, 4, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.title),
                                                n(l, 5, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.description)
                                        })
        }
        function y(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 4, "picture", [], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 0, "source", [["type", "image/webp"]], [[1, "defaultImage", 0], [1, "lazyLoad", 0]], null, null, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 0, "source", [], [[1, "defaultImage", 0], [1, "lazyLoad", 0], [8, "type", 0]], null, null, null, null)), (n()(),
                            t["\u0275eld"](3, 0, null, null, 1, "img", [["class", "banner-img"]], [[8, "alt", 0]], null, null, null, null)), t["\u0275did"](4, 1720320, null, 0, u.a, [t.ElementRef, t.NgZone, t.PLATFORM_ID, [2, "options"]], {
                                lazyImage: [0, "lazyImage"],
                                defaultImage: [1, "defaultImage"]
                            }, null)], function (n, l) {
                                n(l, 4, 0, null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.banner_image ? null : l.parent.parent.context.$implicit.banner_image.url, l.component.defaultImage)
                            }, function (n, l) {
                                var e = l.component;
                                n(l, 1, 0, e.defaultImage, e.commonService.getWebp(null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.banner_image ? null : l.parent.parent.context.$implicit.banner_image.url)),
                                    n(l, 2, 0, e.defaultImage, null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.banner_image ? null : l.parent.parent.context.$implicit.banner_image.url, t["\u0275inlineInterpolate"](1, "image/", e.commonService.getImgtype(null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.banner_image ? null : l.parent.parent.context.$implicit.banner_image.url), "")),
                                    n(l, 3, 0, t["\u0275inlineInterpolate"](1, "", null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.banner_image ? null : l.parent.parent.context.$implicit.banner_image.alt, ""))
                            })
        }
        function I(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 13, "section", [["class", "banner-sec"]], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 12, "div", [["class", "container"]], null, null, null, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 11, "div", [["class", "row"]], null, null, null, null, null)), (n()(),
                            t["\u0275eld"](3, 0, null, null, 7, "div", [["class", "col-sm-6 col-md-6 box-m-t"]], null, null, null, null, null)), (n()(),
                                t["\u0275eld"](4, 0, null, null, 1, "h1", [], null, null, null, null, null)), (n()(),
                                    t["\u0275ted"](5, null, ["", ""])), (n()(),
                                        t["\u0275eld"](6, 0, null, null, 0, "p", [["class", "banner-text"]], [[8, "innerHTML", 1]], null, null, null, null)), (n()(),
                                            t["\u0275eld"](7, 0, null, null, 3, "div", [["class", "banner-talk-btn"]], null, null, null, null, null)), (n()(),
                                                t["\u0275eld"](8, 0, null, null, 2, "a", [["class", "talk-btn"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (n, l, e) {
                                                    var i = !0;
                                                    return "click" === l && (i = !1 !== t["\u0275nov"](n, 9).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && i),
                                                        i
                                                }, null, null)), t["\u0275did"](9, 671744, null, 0, a.o, [a.m, a.a, c.LocationStrategy], {
                                                    routerLink: [0, "routerLink"]
                                                }, null), (n()(),
                                                    t["\u0275ted"](10, null, ["", ""])), (n()(),
                                                        t["\u0275eld"](11, 0, null, null, 2, "div", [["class", "col-sm-6 col-md-6"]], null, null, null, null, null)), (n()(),
                                                            t["\u0275and"](16777216, null, null, 1, null, y)), t["\u0275did"](13, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                ngIf: [0, "ngIf"]
                                                            }, null)], function (n, l) {
                                                                n(l, 9, 0, "/" + l.component.commonService.replaceRootURLToBlank(null == l.parent.context.$implicit ? null : l.parent.context.$implicit.banner_contact_button_link)),
                                                                    n(l, 13, 0, null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.banner_image ? null : l.parent.context.$implicit.banner_image.url)
                                                            }, function (n, l) {
                                                                n(l, 5, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.title),
                                                                    n(l, 6, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.description),
                                                                    n(l, 8, 0, t["\u0275nov"](l, 9).target, t["\u0275nov"](l, 9).href),
                                                                    n(l, 10, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.banner_contact_button_text)
                                                            })
        }
        function S(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (n()(),
                    t["\u0275ted"](1, null, [" ", ""]))], null, function (n, l) {
                        n(l, 1, 0, null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.free_trial ? null : l.parent.parent.context.$implicit.free_trial.subtitle)
                    })
        }
        function R(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (n()(),
                    t["\u0275ted"](1, null, [" ", ""]))], null, function (n, l) {
                        var e = l.component;
                        n(l, 1, 0, null == e.trialSection ? null : e.trialSection.free_trial_section_subtitle)
                    })
        }
        function z(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 0, "p", [], [[8, "innerHTML", 1]], null, null, null, null))], null, function (n, l) {
                    n(l, 0, 0, null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.free_trial ? null : l.parent.parent.context.$implicit.free_trial.description)
                })
        }
        function T(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 0, "p", [], [[8, "innerHTML", 1]], null, null, null, null))], null, function (n, l) {
                    var e = l.component;
                    n(l, 0, 0, null == e.trialSection ? null : e.trialSection.free_trial_section_description)
                })
        }
        function N(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 3, "div", [["class", "hire-btn"]], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 2, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (n, l, e) {
                        var i = !0;
                        return "click" === l && (i = !1 !== t["\u0275nov"](n, 2).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && i),
                            i
                    }, null, null)), t["\u0275did"](2, 671744, null, 0, a.o, [a.m, a.a, c.LocationStrategy], {
                        routerLink: [0, "routerLink"]
                    }, null), (n()(),
                        t["\u0275ted"](3, null, ["", ""]))], function (n, l) {
                            n(l, 2, 0, "/" + l.component.commonService.replaceRootURLToBlank(null == l.parent.parent.parent.context.$implicit ? null : null == l.parent.parent.parent.context.$implicit.free_trial ? null : l.parent.parent.parent.context.$implicit.free_trial.free_trial_hire_button_link))
                        }, function (n, l) {
                            n(l, 1, 0, t["\u0275nov"](l, 2).target, t["\u0275nov"](l, 2).href),
                                n(l, 3, 0, null == l.parent.parent.parent.context.$implicit ? null : null == l.parent.parent.parent.context.$implicit.free_trial ? null : l.parent.parent.parent.context.$implicit.free_trial.free_trial_hire_button_text)
                        })
        }
        function L(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (n()(),
                    t["\u0275and"](16777216, null, null, 1, null, N)), t["\u0275did"](2, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                        ngIf: [0, "ngIf"]
                    }, null), (n()(),
                        t["\u0275and"](0, null, null, 0))], function (n, l) {
                            n(l, 2, 0, null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.free_trial ? null : l.parent.parent.context.$implicit.free_trial.free_trial_hire_button_link)
                        }, null)
        }
        function V(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 3, "div", [["class", "hire-btn"]], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 2, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (n, l, e) {
                        var i = !0;
                        return "click" === l && (i = !1 !== t["\u0275nov"](n, 2).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && i),
                            i
                    }, null, null)), t["\u0275did"](2, 671744, null, 0, a.o, [a.m, a.a, c.LocationStrategy], {
                        routerLink: [0, "routerLink"]
                    }, null), (n()(),
                        t["\u0275ted"](3, null, ["", ""]))], function (n, l) {
                            n(l, 2, 0, "/" + l.component.commonService.replaceRootURLToBlank(null == l.parent.parent.parent.context.$implicit ? null : null == l.parent.parent.parent.context.$implicit.free_trial ? null : l.parent.parent.parent.context.$implicit.free_trial.free_trial_hire_button_link))
                        }, function (n, l) {
                            var e = l.component;
                            n(l, 1, 0, t["\u0275nov"](l, 2).target, t["\u0275nov"](l, 2).href),
                                n(l, 3, 0, null == e.trialSection ? null : e.trialSection.free_trial_section_button_text)
                        })
        }
        function F(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (n()(),
                    t["\u0275and"](16777216, null, null, 1, null, V)), t["\u0275did"](2, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                        ngIf: [0, "ngIf"]
                    }, null), (n()(),
                        t["\u0275and"](0, null, null, 0))], function (n, l) {
                            n(l, 2, 0, null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.free_trial ? null : l.parent.parent.context.$implicit.free_trial.free_trial_hire_button_link)
                        }, null)
        }
        function q(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 21, "section", [["class", "free-trail-sec"]], null, null, null, null, null)), t["\u0275did"](1, 278528, null, 0, c.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), (n()(),
                    t["\u0275eld"](2, 0, null, null, 19, "div", [["class", "container"]], null, null, null, null, null)), (n()(),
                        t["\u0275eld"](3, 0, null, null, 18, "div", [["class", "row align-items-center"]], null, null, null, null, null)), (n()(),
                            t["\u0275eld"](4, 0, null, null, 7, "div", [["class", "col-sm-6 col-md-6 box-m-t"]], null, null, null, null, null)), (n()(),
                                t["\u0275eld"](5, 0, null, null, 6, "div", [["class", "trail-left"]], null, null, null, null, null)), (n()(),
                                    t["\u0275eld"](6, 0, null, null, 1, "h2", [], null, null, null, null, null)), (n()(),
                                        t["\u0275ted"](7, null, ["", ""])), (n()(),
                                            t["\u0275and"](16777216, null, null, 1, null, S)), t["\u0275did"](9, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                ngIf: [0, "ngIf"]
                                            }, null), (n()(),
                                                t["\u0275and"](16777216, null, null, 1, null, R)), t["\u0275did"](11, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                    ngIf: [0, "ngIf"]
                                                }, null), (n()(),
                                                    t["\u0275eld"](12, 0, null, null, 9, "div", [["class", "col-sm-6 col-md-6"]], null, null, null, null, null)), (n()(),
                                                        t["\u0275eld"](13, 0, null, null, 8, "div", [["class", "trail-right"]], null, null, null, null, null)), (n()(),
                                                            t["\u0275and"](16777216, null, null, 1, null, z)), t["\u0275did"](15, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                ngIf: [0, "ngIf"]
                                                            }, null), (n()(),
                                                                t["\u0275and"](16777216, null, null, 1, null, T)), t["\u0275did"](17, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                    ngIf: [0, "ngIf"]
                                                                }, null), (n()(),
                                                                    t["\u0275and"](16777216, null, null, 1, null, L)), t["\u0275did"](19, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                        ngIf: [0, "ngIf"]
                                                                    }, null), (n()(),
                                                                        t["\u0275and"](16777216, null, null, 1, null, F)), t["\u0275did"](21, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                            ngIf: [0, "ngIf"]
                                                                        }, null)], function (n, l) {
                                                                            n(l, 1, 0, "free-trail-sec", "gradient" == (null == l.parent.context.$implicit ? null : l.parent.context.$implicit.image_position) ? "free-trail-landing" : ""),
                                                                                n(l, 9, 0, 1 == (null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.free_trial ? null : l.parent.context.$implicit.free_trial.update_trial_content)),
                                                                                n(l, 11, 0, 0 == (null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.free_trial ? null : l.parent.context.$implicit.free_trial.update_trial_content)),
                                                                                n(l, 15, 0, 1 == (null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.free_trial ? null : l.parent.context.$implicit.free_trial.update_trial_content)),
                                                                                n(l, 17, 0, 0 == (null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.free_trial ? null : l.parent.context.$implicit.free_trial.update_trial_content)),
                                                                                n(l, 19, 0, 1 == (null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.free_trial ? null : l.parent.context.$implicit.free_trial.update_trial_content)),
                                                                                n(l, 21, 0, 0 == (null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.free_trial ? null : l.parent.context.$implicit.free_trial.update_trial_content))
                                                                        }, function (n, l) {
                                                                            n(l, 7, 0, null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.free_trial ? null : l.parent.context.$implicit.free_trial.title)
                                                                        })
        }
        function D(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 4, "div", [["class", "working-time"]], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 1, "h3", [], null, null, null, null, null)), (n()(),
                        t["\u0275ted"](2, null, ["", ""])), (n()(),
                            t["\u0275eld"](3, 0, null, null, 1, "div", [["class", "working-day"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275ppd"](4, 1)], null, function (n, l) {
                                n(l, 2, 0, null == l.context.$implicit ? null : l.context.$implicit.working_time_title);
                                var e = t["\u0275unv"](l, 3, 0, n(l, 4, 0, t["\u0275nov"](l.parent.parent.parent.parent, 0), null == l.context.$implicit ? null : l.context.$implicit.working_day));
                                n(l, 3, 0, e)
                            })
        }
        function A(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 0, "img", [["class", "svg-convert"]], [[8, "src", 4], [8, "alt", 0]], [[null, "load"]], function (n, l, e) {
                    var t = !0;
                    return "load" === l && (t = !1 !== n.component.commonService.callSVGConverterScript(null == n.parent.parent.parent.context.$implicit ? null : n.parent.parent.parent.context.$implicit.our_hiring_models.length, n.parent.parent.parent.context.index) && t),
                        t
                }, null, null))], null, function (n, l) {
                    n(l, 0, 0, null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.hiring_model_image ? null : l.parent.context.$implicit.hiring_model_image.url, t["\u0275inlineInterpolate"](1, "", null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.hiring_model_image ? null : l.parent.context.$implicit.hiring_model_image.alt, ""))
                })
        }
        function E(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 6, "div", [["class", "col-12 col-md-12 col-lg-4 mobile-app-col"]], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 2, "div", [["class", "services-icon"]], null, null, null, null, null)), (n()(),
                        t["\u0275and"](16777216, null, null, 1, null, A)), t["\u0275did"](3, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                            ngIf: [0, "ngIf"]
                        }, null), (n()(),
                            t["\u0275eld"](4, 0, null, null, 1, "h3", [], null, null, null, null, null)), (n()(),
                                t["\u0275ted"](5, null, ["", ""])), (n()(),
                                    t["\u0275eld"](6, 0, null, null, 0, "p", [], [[8, "innerHTML", 1]], null, null, null, null))], function (n, l) {
                                        n(l, 3, 0, null == l.context.$implicit ? null : null == l.context.$implicit.hiring_model_image ? null : l.context.$implicit.hiring_model_image.url)
                                    }, function (n, l) {
                                        n(l, 5, 0, null == l.context.$implicit ? null : l.context.$implicit.hiring_model_name),
                                            n(l, 6, 0, null == l.context.$implicit ? null : l.context.$implicit.hiring_model_description)
                                    })
        }
        function K(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 13, "section", [["class", "our-hiring-model"]], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 12, "div", [["class", "container"]], null, null, null, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 3, "div", [["class", "title-block"]], null, null, null, null, null)), (n()(),
                            t["\u0275eld"](3, 0, null, null, 1, "h2", [], null, null, null, null, null)), (n()(),
                                t["\u0275ted"](4, null, ["", ""])), (n()(),
                                    t["\u0275eld"](5, 0, null, null, 0, "div", [], [[8, "innerHTML", 1]], null, null, null, null)), (n()(),
                                        t["\u0275eld"](6, 0, null, null, 2, "div", [["class", "work-block"]], null, null, null, null, null)), (n()(),
                                            t["\u0275and"](16777216, null, null, 1, null, D)), t["\u0275did"](8, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                                                ngForOf: [0, "ngForOf"]
                                            }, null), (n()(),
                                                t["\u0275eld"](9, 0, null, null, 4, "div", [["class", "our-target-customers-section"]], null, null, null, null, null)), (n()(),
                                                    t["\u0275eld"](10, 0, null, null, 3, "div", [["class", "mobile-app-services"]], null, null, null, null, null)), (n()(),
                                                        t["\u0275eld"](11, 0, null, null, 2, "div", [["class", "row"]], null, null, null, null, null)), (n()(),
                                                            t["\u0275and"](16777216, null, null, 1, null, E)), t["\u0275did"](13, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                                                                ngForOf: [0, "ngForOf"]
                                                            }, null)], function (n, l) {
                                                                n(l, 8, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.working_time_details),
                                                                    n(l, 13, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.our_hiring_models)
                                                            }, function (n, l) {
                                                                n(l, 4, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.our_hiring_model_section_title),
                                                                    n(l, 5, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.our_hiring_model_section_description)
                                                            })
        }
        function Z(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 0, "img", [["class", "svg-convert"]], [[8, "src", 4], [8, "alt", 0]], [[null, "load"]], function (n, l, e) {
                    var t = !0;
                    return "load" === l && (t = !1 !== n.component.commonService.callSVGConverterScript(null == n.parent.parent.parent.context.$implicit ? null : n.parent.parent.parent.context.$implicit.expertise_data.length, n.parent.context.index) && t),
                        t
                }, null, null))], null, function (n, l) {
                    n(l, 0, 0, null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.expertise_image ? null : l.parent.context.$implicit.expertise_image.url, t["\u0275inlineInterpolate"](1, "", null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.expertise_image ? null : l.parent.context.$implicit.expertise_image.alt, ""))
                })
        }
        function j(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 8, "div", [["class", "work-flow"]], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 3, "div", [["class", "col-left"]], null, null, null, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 2, "div", [["class", "icon-box"]], null, null, null, null, null)), (n()(),
                            t["\u0275and"](16777216, null, null, 1, null, Z)), t["\u0275did"](4, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                ngIf: [0, "ngIf"]
                            }, null), (n()(),
                                t["\u0275eld"](5, 0, null, null, 3, "div", [["class", "col-right"]], null, null, null, null, null)), (n()(),
                                    t["\u0275eld"](6, 0, null, null, 1, "h3", [], null, null, null, null, null)), (n()(),
                                        t["\u0275ted"](7, null, ["", ""])), (n()(),
                                            t["\u0275eld"](8, 0, null, null, 0, "p", [], [[8, "innerHTML", 1]], null, null, null, null))], function (n, l) {
                                                n(l, 4, 0, null == l.context.$implicit ? null : null == l.context.$implicit.expertise_image ? null : l.context.$implicit.expertise_image.url)
                                            }, function (n, l) {
                                                n(l, 7, 0, null == l.context.$implicit ? null : l.context.$implicit.expertise_title),
                                                    n(l, 8, 0, null == l.context.$implicit ? null : l.context.$implicit.expertise_description)
                                            })
        }
        function B(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 8, "section", [["class", "work-sec"]], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 7, "div", [["class", "container"]], null, null, null, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 4, "div", [["class", "title-block-left"]], null, null, null, null, null)), (n()(),
                            t["\u0275eld"](3, 0, null, null, 1, "p", [["class", "sub-title"]], null, null, null, null, null)), (n()(),
                                t["\u0275ted"](4, null, ["", ""])), (n()(),
                                    t["\u0275eld"](5, 0, null, null, 1, "h2", [], null, null, null, null, null)), (n()(),
                                        t["\u0275ted"](6, null, ["", ""])), (n()(),
                                            t["\u0275and"](16777216, null, null, 1, null, j)), t["\u0275did"](8, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                                                ngForOf: [0, "ngForOf"]
                                            }, null)], function (n, l) {
                                                n(l, 8, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.expertise_data)
                                            }, function (n, l) {
                                                n(l, 4, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.why_indianic_section_title),
                                                    n(l, 6, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.why_indianic_section_heading)
                                            })
        }
        function H(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 5, "div", [["class", "col-6 col-md-4 col-lg-3 mrg-t-30"]], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 4, "div", [["class", "fact-box"]], null, null, null, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 1, "p", [], null, null, null, null, null)), (n()(),
                            t["\u0275ted"](3, null, ["", ""])), (n()(),
                                t["\u0275eld"](4, 0, null, null, 1, "h2", [], null, null, null, null, null)), (n()(),
                                    t["\u0275ted"](5, null, ["", ""]))], null, function (n, l) {
                                        n(l, 3, 0, null == l.context.$implicit ? null : l.context.$implicit.proven_track_records_counting),
                                            n(l, 5, 0, null == l.context.$implicit ? null : l.context.$implicit.proven_track_records_counting_description)
                                    })
        }
        function G(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 9, "section", [["class", "our-facts-sec pad-t-b"]], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 8, "div", [["class", "container"]], null, null, null, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 4, "div", [["class", "title-block-left"]], null, null, null, null, null)), (n()(),
                            t["\u0275eld"](3, 0, null, null, 1, "p", [["class", "sub-title"]], null, null, null, null, null)), (n()(),
                                t["\u0275ted"](4, null, ["", ""])), (n()(),
                                    t["\u0275eld"](5, 0, null, null, 1, "h2", [], null, null, null, null, null)), (n()(),
                                        t["\u0275ted"](6, null, ["", ""])), (n()(),
                                            t["\u0275eld"](7, 0, null, null, 2, "div", [["class", "row flex-facts-box"]], null, null, null, null, null)), (n()(),
                                                t["\u0275and"](16777216, null, null, 1, null, H)), t["\u0275did"](9, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                                                    ngForOf: [0, "ngForOf"]
                                                }, null)], function (n, l) {
                                                    var e = l.component;
                                                    n(l, 9, 0, null == e.trackRecords ? null : e.trackRecords.proven_track_records_data)
                                                }, function (n, l) {
                                                    var e = l.component;
                                                    n(l, 4, 0, null == e.trackRecords ? null : e.trackRecords.proven_track_records_title),
                                                        n(l, 6, 0, null == e.trackRecords ? null : e.trackRecords.proven_track_records_heading)
                                                })
        }
        function U(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 3, "picture", [], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 0, "source", [["type", "image/webp"]], [[8, "srcset", 4]], null, null, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 0, "source", [], [[8, "srcset", 4], [8, "type", 0]], null, null, null, null)), (n()(),
                            t["\u0275eld"](3, 0, null, null, 0, "img", [], [[8, "srcset", 4], [8, "alt", 0]], null, null, null, null))], null, function (n, l) {
                                var e = l.component;
                                n(l, 1, 0, e.commonService.getWebp(null == l.parent.context.$implicit ? null : l.parent.context.$implicit.image)),
                                    n(l, 2, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.image, t["\u0275inlineInterpolate"](1, "image/", e.commonService.getImgtype(null == l.parent.context.$implicit ? null : l.parent.context.$implicit.image), "")),
                                    n(l, 3, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.image, t["\u0275inlineInterpolate"](1, "", null == l.parent.context.$implicit ? null : l.parent.context.$implicit.title, ""))
                            })
        }
        function W(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 10, "div", [["class", "slide"]], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 9, "div", [["class", "row"]], null, null, null, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 3, "div", [["class", "col-md-6 col-sm-12 flex-sec"]], null, null, null, null, null)), (n()(),
                            t["\u0275eld"](3, 0, null, null, 2, "div", [["class", "img-box"]], null, null, null, null, null)), (n()(),
                                t["\u0275and"](16777216, null, null, 1, null, U)), t["\u0275did"](5, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                    ngIf: [0, "ngIf"]
                                }, null), (n()(),
                                    t["\u0275eld"](6, 0, null, null, 4, "div", [["class", "col-md-6 col-sm-12 flex-sec"]], null, null, null, null, null)), (n()(),
                                        t["\u0275eld"](7, 0, null, null, 3, "div", [["class", "work-info"]], null, null, null, null, null)), (n()(),
                                            t["\u0275eld"](8, 0, null, null, 1, "h3", [], null, null, null, null, null)), (n()(),
                                                t["\u0275ted"](9, null, ["", ""])), (n()(),
                                                    t["\u0275eld"](10, 0, null, null, 0, "p", [], [[8, "innerHTML", 1]], null, null, null, null))], function (n, l) {
                                                        n(l, 5, 0, null == l.context.$implicit ? null : l.context.$implicit.image)
                                                    }, function (n, l) {
                                                        n(l, 9, 0, null == l.context.$implicit ? null : l.context.$implicit.title),
                                                            n(l, 10, 0, null == l.context.$implicit ? null : l.context.$implicit.description)
                                                    })
        }
        function Y(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 10, "section", [["class", "we-work-sec pad-t-b"], ["id", "capabilities"]], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 9, "div", [["class", "container"]], null, null, null, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 4, "div", [["class", "title-block"]], null, null, null, null, null)), (n()(),
                            t["\u0275eld"](3, 0, null, null, 1, "p", [["class", "sub-title"]], null, null, null, null, null)), (n()(),
                                t["\u0275ted"](4, null, ["", ""])), (n()(),
                                    t["\u0275eld"](5, 0, null, null, 1, "h2", [], null, null, null, null, null)), (n()(),
                                        t["\u0275ted"](6, null, ["", ""])), (n()(),
                                            t["\u0275eld"](7, 0, null, null, 3, "div", [["class", "approch-slider"]], null, null, null, null, null)), (n()(),
                                                t["\u0275eld"](8, 0, null, null, 2, "div", [["class", "we-work-slider"]], null, null, null, null, null)), (n()(),
                                                    t["\u0275and"](16777216, null, null, 1, null, W)), t["\u0275did"](10, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                                                        ngForOf: [0, "ngForOf"]
                                                    }, null)], function (n, l) {
                                                        n(l, 10, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.approach_slider)
                                                    }, function (n, l) {
                                                        n(l, 4, 0, l.parent.context.$implicit.sub_title),
                                                            n(l, 6, 0, l.parent.context.$implicit.title)
                                                    })
        }
        function Q(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 4, "div", [["class", "col-sm-12 col-md-6 col-lg-4 mrg-t-30"]], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 3, "div", [["class", "service-box"]], null, null, null, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 1, "h3", [], null, null, null, null, null)), (n()(),
                            t["\u0275ted"](3, null, ["", ""])), (n()(),
                                t["\u0275eld"](4, 0, null, null, 0, "p", [], [[8, "innerHTML", 1]], null, null, null, null))], null, function (n, l) {
                                    n(l, 3, 0, null == l.context.$implicit ? null : l.context.$implicit.service_title),
                                        n(l, 4, 0, l.context.$implicit.description)
                                })
        }
        function J(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 9, "section", [["class", "what-we-sec pad-t-b"]], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 8, "div", [["class", "container"]], null, null, null, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 4, "div", [["class", "title-block"]], null, null, null, null, null)), (n()(),
                            t["\u0275eld"](3, 0, null, null, 1, "p", [["class", "sub-title"]], null, null, null, null, null)), (n()(),
                                t["\u0275ted"](4, null, ["", ""])), (n()(),
                                    t["\u0275eld"](5, 0, null, null, 1, "h2", [], null, null, null, null, null)), (n()(),
                                        t["\u0275ted"](6, null, ["", ""])), (n()(),
                                            t["\u0275eld"](7, 0, null, null, 2, "div", [["class", "row flex-row"]], null, null, null, null, null)), (n()(),
                                                t["\u0275and"](16777216, null, null, 1, null, Q)), t["\u0275did"](9, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                                                    ngForOf: [0, "ngForOf"]
                                                }, null)], function (n, l) {
                                                    n(l, 9, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.services_box)
                                                }, function (n, l) {
                                                    n(l, 4, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.sub_title),
                                                        n(l, 6, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.title)
                                                })
        }
        function X(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 1, "p", [["class", "sub-title"]], null, null, null, null, null)), (n()(),
                    t["\u0275ted"](1, null, [" ", ""]))], null, function (n, l) {
                        n(l, 1, 0, null == l.parent.parent.context.$implicit ? null : l.parent.parent.context.$implicit.technologies_section_title)
                    })
        }
        function nn(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 1, "h2", [], null, null, null, null, null)), (n()(),
                    t["\u0275ted"](1, null, [" ", ""]))], null, function (n, l) {
                        n(l, 1, 0, null == l.parent.parent.context.$implicit ? null : l.parent.parent.context.$implicit.technologies_section_heading)
                    })
        }
        function ln(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 7, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (n, l, e) {
                    var i = !0;
                    return "click" === l && (i = !1 !== t["\u0275nov"](n, 1).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && i),
                        i
                }, null, null)), t["\u0275did"](1, 671744, null, 0, a.o, [a.m, a.a, c.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (n()(),
                    t["\u0275eld"](2, 0, null, null, 5, "div", [["class", "tech-box"]], null, null, null, null, null)), (n()(),
                        t["\u0275eld"](3, 0, null, null, 2, "div", [["class", "icon-box"]], null, null, null, null, null)), (n()(),
                            t["\u0275eld"](4, 0, null, null, 1, "img", [["class", "svg-convert"]], [[8, "alt", 0]], [[null, "load"]], function (n, l, e) {
                                var t = !0;
                                return "load" === l && (t = !1 !== n.component.commonService.callSVGConverterScript(null == n.parent.parent.parent.parent.context.$implicit ? null : n.parent.parent.parent.parent.context.$implicit.technologies_details.length, n.parent.parent.context.index) && t),
                                    t
                            }, null, null)), t["\u0275did"](5, 1720320, null, 0, u.a, [t.ElementRef, t.NgZone, t.PLATFORM_ID, [2, "options"]], {
                                lazyImage: [0, "lazyImage"],
                                defaultImage: [1, "defaultImage"]
                            }, null), (n()(),
                                t["\u0275eld"](6, 0, null, null, 1, "h4", [["class", "tech-title"]], null, null, null, null, null)), (n()(),
                                    t["\u0275ted"](7, null, ["", " "]))], function (n, l) {
                                        var e = l.component;
                                        n(l, 1, 0, "/" + e.commonService.replaceRootURLToBlank(l.parent.parent.context.$implicit.technology_page_url)),
                                            n(l, 5, 0, null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.technology_image ? null : l.parent.parent.context.$implicit.technology_image.url, e.defaultImage)
                                    }, function (n, l) {
                                        n(l, 0, 0, t["\u0275nov"](l, 1).target, t["\u0275nov"](l, 1).href),
                                            n(l, 4, 0, null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.technology_image ? null : l.parent.parent.context.$implicit.technology_image.alt),
                                            n(l, 7, 0, null == l.parent.parent.context.$implicit ? null : l.parent.parent.context.$implicit.technology_name)
                                    })
        }
        function en(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 1, "img", [["class", "svg-convert"]], [[8, "alt", 0]], [[null, "load"]], function (n, l, e) {
                    var t = !0;
                    return "load" === l && (t = !1 !== n.component.commonService.callSVGConverterScript(null == n.parent.parent.parent.parent.parent.context.$implicit ? null : n.parent.parent.parent.parent.parent.context.$implicit.technologies_details.length, n.parent.parent.parent.context.index) && t),
                        t
                }, null, null)), t["\u0275did"](1, 1720320, null, 0, u.a, [t.ElementRef, t.NgZone, t.PLATFORM_ID, [2, "options"]], {
                    lazyImage: [0, "lazyImage"],
                    defaultImage: [1, "defaultImage"]
                }, null)], function (n, l) {
                    n(l, 1, 0, null == l.parent.parent.parent.context.$implicit ? null : null == l.parent.parent.parent.context.$implicit.technology_image ? null : l.parent.parent.parent.context.$implicit.technology_image.url, l.component.defaultImage)
                }, function (n, l) {
                    n(l, 0, 0, null == l.parent.parent.parent.context.$implicit ? null : null == l.parent.parent.parent.context.$implicit.technology_image ? null : l.parent.parent.parent.context.$implicit.technology_image.alt)
                })
        }
        function tn(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 5, "div", [["class", "tech-box"]], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 2, "div", [["class", "icon-box"]], null, null, null, null, null)), (n()(),
                        t["\u0275and"](16777216, null, null, 1, null, en)), t["\u0275did"](3, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                            ngIf: [0, "ngIf"]
                        }, null), (n()(),
                            t["\u0275eld"](4, 0, null, null, 1, "h4", [["class", "tech-title"]], null, null, null, null, null)), (n()(),
                                t["\u0275ted"](5, null, ["", " "]))], function (n, l) {
                                    n(l, 3, 0, null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.technology_image ? null : l.parent.parent.context.$implicit.technology_image.url)
                                }, function (n, l) {
                                    n(l, 5, 0, null == l.parent.parent.context.$implicit ? null : l.parent.parent.context.$implicit.technology_name)
                                })
        }
        function on(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 4, "div", [["class", "col-4 col-sm-4 col-md-3 col-lg-2"]], null, null, null, null, null)), (n()(),
                    t["\u0275and"](16777216, null, null, 1, null, ln)), t["\u0275did"](2, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                        ngIf: [0, "ngIf"]
                    }, null), (n()(),
                        t["\u0275and"](16777216, null, null, 1, null, tn)), t["\u0275did"](4, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                            ngIf: [0, "ngIf"]
                        }, null)], function (n, l) {
                            n(l, 2, 0, "" != l.parent.context.$implicit.technology_page_url),
                                n(l, 4, 0, "" == l.parent.context.$implicit.technology_page_url)
                        }, null)
        }
        function un(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (n()(),
                    t["\u0275and"](16777216, null, null, 1, null, on)), t["\u0275did"](2, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                        ngIf: [0, "ngIf"]
                    }, null), (n()(),
                        t["\u0275and"](0, null, null, 0))], function (n, l) {
                            n(l, 2, 0, 1 != (null == l.context.$implicit ? null : l.context.$implicit.hide_on_solution_pages))
                        }, null)
        }
        function cn(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 10, "section", [["class", "technologies-sec"]], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 9, "div", [["class", "container"]], null, null, null, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 4, "div", [["class", "title-block"]], null, null, null, null, null)), (n()(),
                            t["\u0275and"](16777216, null, null, 1, null, X)), t["\u0275did"](4, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                ngIf: [0, "ngIf"]
                            }, null), (n()(),
                                t["\u0275and"](16777216, null, null, 1, null, nn)), t["\u0275did"](6, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                    ngIf: [0, "ngIf"]
                                }, null), (n()(),
                                    t["\u0275eld"](7, 0, null, null, 3, "div", [["class", "technologies-block"]], null, null, null, null, null)), (n()(),
                                        t["\u0275eld"](8, 0, null, null, 2, "div", [["class", "row technology-grid"]], null, null, null, null, null)), (n()(),
                                            t["\u0275and"](16777216, null, null, 1, null, un)), t["\u0275did"](10, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                                                ngForOf: [0, "ngForOf"]
                                            }, null)], function (n, l) {
                                                n(l, 4, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.technologies_section_title),
                                                    n(l, 6, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.technologies_section_heading),
                                                    n(l, 10, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.technologies_details)
                                            }, null)
        }
        function an(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 4, "picture", [], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 0, "source", [["type", "image/webp"]], [[1, "defaultImage", 0], [1, "lazyLoad", 0]], null, null, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 0, "source", [], [[1, "defaultImage", 0], [1, "lazyLoad", 0], [8, "type", 0]], null, null, null, null)), (n()(),
                            t["\u0275eld"](3, 0, null, null, 1, "img", [["class", "img-responsive"]], [[8, "alt", 0]], null, null, null, null)), t["\u0275did"](4, 1720320, null, 0, u.a, [t.ElementRef, t.NgZone, t.PLATFORM_ID, [2, "options"]], {
                                lazyImage: [0, "lazyImage"],
                                defaultImage: [1, "defaultImage"]
                            }, null)], function (n, l) {
                                n(l, 4, 0, null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.image ? null : l.parent.context.$implicit.image.url, l.component.defaultImage)
                            }, function (n, l) {
                                var e = l.component;
                                n(l, 1, 0, e.defaultImage, e.commonService.getWebp(null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.image ? null : l.parent.context.$implicit.image.url)),
                                    n(l, 2, 0, e.defaultImage, null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.image ? null : l.parent.context.$implicit.image.url, t["\u0275inlineInterpolate"](1, "image/", e.commonService.getImgtype(null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.image ? null : l.parent.context.$implicit.image.url), "")),
                                    n(l, 3, 0, t["\u0275inlineInterpolate"](1, "", null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.image ? null : l.parent.context.$implicit.image.alt, ""))
                            })
        }
        function rn(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 6, "div", [["class", "col-sm-12 col-md-6 col-lg-4"]], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 5, "div", [["class", "service-box"]], null, null, null, null, null)), (n()(),
                        t["\u0275and"](16777216, null, null, 1, null, an)), t["\u0275did"](3, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                            ngIf: [0, "ngIf"]
                        }, null), (n()(),
                            t["\u0275eld"](4, 0, null, null, 1, "h3", [], null, null, null, null, null)), (n()(),
                                t["\u0275ted"](5, null, ["", ""])), (n()(),
                                    t["\u0275eld"](6, 0, null, null, 0, "p", [], [[8, "innerHTML", 1]], null, null, null, null))], function (n, l) {
                                        n(l, 3, 0, null == l.context.$implicit ? null : null == l.context.$implicit.image ? null : l.context.$implicit.image.url)
                                    }, function (n, l) {
                                        n(l, 5, 0, null == l.context.$implicit ? null : l.context.$implicit.heading),
                                            n(l, 6, 0, null == l.context.$implicit ? null : l.context.$implicit.text)
                                    })
        }
        function pn(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 9, "section", [["class", "service-sec pad-t-b"]], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 8, "div", [["class", "container"]], null, null, null, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 4, "div", [["class", "title-block"]], null, null, null, null, null)), (n()(),
                            t["\u0275eld"](3, 0, null, null, 1, "p", [["class", "sub-title"]], null, null, null, null, null)), (n()(),
                                t["\u0275ted"](4, null, ["", ""])), (n()(),
                                    t["\u0275eld"](5, 0, null, null, 1, "h2", [], null, null, null, null, null)), (n()(),
                                        t["\u0275ted"](6, null, ["", ""])), (n()(),
                                            t["\u0275eld"](7, 0, null, null, 2, "div", [["class", "row flex-service"]], null, null, null, null, null)), (n()(),
                                                t["\u0275and"](16777216, null, null, 1, null, rn)), t["\u0275did"](9, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                                                    ngForOf: [0, "ngForOf"]
                                                }, null)], function (n, l) {
                                                    n(l, 9, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.capabilities_block)
                                                }, function (n, l) {
                                                    n(l, 4, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.sub_title),
                                                        n(l, 6, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.title)
                                                })
        }
        function gn(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 4, "picture", [], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 0, "source", [["type", "image/webp"]], [[1, "defaultImage", 0], [1, "lazyLoad", 0]], null, null, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 0, "source", [], [[1, "defaultImage", 0], [1, "lazyLoad", 0], [8, "type", 0]], null, null, null, null)), (n()(),
                            t["\u0275eld"](3, 0, null, null, 1, "img", [["class", "img-responsive"]], [[8, "alt", 0]], null, null, null, null)), t["\u0275did"](4, 1720320, null, 0, u.a, [t.ElementRef, t.NgZone, t.PLATFORM_ID, [2, "options"]], {
                                lazyImage: [0, "lazyImage"],
                                defaultImage: [1, "defaultImage"]
                            }, null)], function (n, l) {
                                n(l, 4, 0, null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.indianic_service_image ? null : l.parent.context.$implicit.indianic_service_image.url, l.component.defaultImage)
                            }, function (n, l) {
                                var e = l.component;
                                n(l, 1, 0, e.defaultImage, e.commonService.getWebp(null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.indianic_service_image ? null : l.parent.context.$implicit.indianic_service_image.url)),
                                    n(l, 2, 0, e.defaultImage, null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.indianic_service_image ? null : l.parent.context.$implicit.indianic_service_image.url, t["\u0275inlineInterpolate"](1, "image/", e.commonService.getImgtype(null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.indianic_service_image ? null : l.parent.context.$implicit.indianic_service_image.url), "")),
                                    n(l, 3, 0, t["\u0275inlineInterpolate"](1, "", null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.indianic_service_image ? null : l.parent.context.$implicit.indianic_service_image.alt, ""))
                            })
        }
        function sn(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 6, "div", [["class", "col-sm-12 col-md-6 col-lg-4"]], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 5, "div", [["class", "service-box"]], null, null, null, null, null)), (n()(),
                        t["\u0275and"](16777216, null, null, 1, null, gn)), t["\u0275did"](3, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                            ngIf: [0, "ngIf"]
                        }, null), (n()(),
                            t["\u0275eld"](4, 0, null, null, 1, "h3", [], null, null, null, null, null)), (n()(),
                                t["\u0275ted"](5, null, ["", ""])), (n()(),
                                    t["\u0275eld"](6, 0, null, null, 0, "p", [], [[8, "innerHTML", 1]], null, null, null, null))], function (n, l) {
                                        n(l, 3, 0, null == l.context.$implicit ? null : null == l.context.$implicit.indianic_service_image ? null : l.context.$implicit.indianic_service_image.url)
                                    }, function (n, l) {
                                        n(l, 5, 0, null == l.context.$implicit ? null : l.context.$implicit.indianic_service_title),
                                            n(l, 6, 0, null == l.context.$implicit ? null : l.context.$implicit.indianic_service_description)
                                    })
        }
        function mn(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 9, "section", [["class", "service-sec pad-t-b"]], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 8, "div", [["class", "container"]], null, null, null, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 4, "div", [["class", "title-block"]], null, null, null, null, null)), (n()(),
                            t["\u0275eld"](3, 0, null, null, 1, "p", [["class", "sub-title"]], null, null, null, null, null)), (n()(),
                                t["\u0275ted"](4, null, ["", ""])), (n()(),
                                    t["\u0275eld"](5, 0, null, null, 1, "h2", [], null, null, null, null, null)), (n()(),
                                        t["\u0275ted"](6, null, ["", ""])), (n()(),
                                            t["\u0275eld"](7, 0, null, null, 2, "div", [["class", "row flex-service"]], null, null, null, null, null)), (n()(),
                                                t["\u0275and"](16777216, null, null, 1, null, sn)), t["\u0275did"](9, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                                                    ngForOf: [0, "ngForOf"]
                                                }, null)], function (n, l) {
                                                    var e = l.component;
                                                    n(l, 9, 0, null == e.indianicServices ? null : e.indianicServices.indianic_services_details)
                                                }, function (n, l) {
                                                    var e = l.component;
                                                    n(l, 4, 0, null == e.indianicServices ? null : e.indianicServices.indianic_services_section_title),
                                                        n(l, 6, 0, null == e.indianicServices ? null : e.indianicServices.indianic_services_section_heading)
                                                })
        }
        function dn(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 4, "picture", [], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 0, "source", [["type", "image/webp"]], [[1, "defaultImage", 0], [1, "lazyLoad", 0]], null, null, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 0, "source", [], [[1, "defaultImage", 0], [1, "lazyLoad", 0], [8, "type", 0]], null, null, null, null)), (n()(),
                            t["\u0275eld"](3, 0, null, null, 1, "img", [], [[8, "alt", 0]], null, null, null, null)), t["\u0275did"](4, 1720320, null, 0, u.a, [t.ElementRef, t.NgZone, t.PLATFORM_ID, [2, "options"]], {
                                lazyImage: [0, "lazyImage"],
                                defaultImage: [1, "defaultImage"]
                            }, null)], function (n, l) {
                                n(l, 4, 0, null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.services_solutions_image ? null : l.parent.context.$implicit.services_solutions_image.url, l.component.defaultImage)
                            }, function (n, l) {
                                var e = l.component;
                                n(l, 1, 0, e.defaultImage, e.commonService.getWebp(null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.services_solutions_image ? null : l.parent.context.$implicit.services_solutions_image.url)),
                                    n(l, 2, 0, e.defaultImage, null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.services_solutions_image ? null : l.parent.context.$implicit.services_solutions_image.url, t["\u0275inlineInterpolate"](1, "image/", e.commonService.getImgtype(null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.services_solutions_image ? null : l.parent.context.$implicit.services_solutions_image.url), "")),
                                    n(l, 3, 0, t["\u0275inlineInterpolate"](1, "", null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.services_solutions_image ? null : l.parent.context.$implicit.services_solutions_image.alt, ""))
                            })
        }
        function _n(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 1, "li", [], null, null, null, null, null)), (n()(),
                    t["\u0275ted"](1, null, [" ", " "]))], null, function (n, l) {
                        n(l, 1, 0, null == l.context.$implicit ? null : l.context.$implicit.services_solutions_features)
                    })
        }
        function fn(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 13, "div", [["class", "col-sm-6 col-md-6 no-padding"]], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 12, "div", [], null, null, null, null, null)), t["\u0275did"](2, 278528, null, 0, c.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                        ngClass: [0, "ngClass"]
                    }, null), t["\u0275did"](3, 278528, null, 0, c.NgStyle, [t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                        ngStyle: [0, "ngStyle"]
                    }, null), t["\u0275pod"](4, {
                        "background-image": 0
                    }), (n()(),
                        t["\u0275eld"](5, 0, null, null, 8, "div", [["class", "enterprice-benifit"]], null, null, null, null, null)), (n()(),
                            t["\u0275eld"](6, 0, null, null, 1, "h3", [], null, null, null, null, null)), (n()(),
                                t["\u0275ted"](7, null, ["", ""])), (n()(),
                                    t["\u0275eld"](8, 0, null, null, 0, "p", [], [[8, "innerHTML", 1]], null, null, null, null)), (n()(),
                                        t["\u0275and"](16777216, null, null, 1, null, dn)), t["\u0275did"](10, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                            ngIf: [0, "ngIf"]
                                        }, null), (n()(),
                                            t["\u0275eld"](11, 0, null, null, 2, "ul", [["class", "solution-point"]], null, null, null, null, null)), (n()(),
                                                t["\u0275and"](16777216, null, null, 1, null, _n)), t["\u0275did"](13, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                                                    ngForOf: [0, "ngForOf"]
                                                }, null)], function (n, l) {
                                                    n(l, 2, 0, 0 == l.context.index ? "benefit-left benefit-dec" : "benefit-right benefit-dec");
                                                    var e = n(l, 4, 0, "url(" + (null == l.context.$implicit ? null : null == l.context.$implicit.services_solutions_background_image ? null : l.context.$implicit.services_solutions_background_image.url) + ")");
                                                    n(l, 3, 0, e),
                                                        n(l, 10, 0, null == l.context.$implicit ? null : null == l.context.$implicit.services_solutions_image ? null : l.context.$implicit.services_solutions_image.url),
                                                        n(l, 13, 0, null == l.context.$implicit ? null : l.context.$implicit.services_solutions_features_list)
                                                }, function (n, l) {
                                                    n(l, 7, 0, null == l.context.$implicit ? null : l.context.$implicit.services_solutions_title),
                                                        n(l, 8, 0, null == l.context.$implicit ? null : l.context.$implicit.services_solutions_description)
                                                })
        }
        function xn(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 4, "section", [["class", "benefit-sec"]], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 3, "div", [["class", "container-fluid no-padding"]], null, null, null, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 2, "div", [["class", "row"]], null, null, null, null, null)), (n()(),
                            t["\u0275and"](16777216, null, null, 1, null, fn)), t["\u0275did"](4, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                                ngForOf: [0, "ngForOf"]
                            }, null)], function (n, l) {
                                var e = l.component;
                                n(l, 4, 0, null == e.solutionDetails ? null : e.solutionDetails.services_solutions_details)
                            }, null)
        }
        function bn(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 0, "img", [["class", "svg-convert"]], [[8, "src", 4], [8, "alt", 0]], [[null, "load"]], function (n, l, e) {
                    var t = !0;
                    return "load" === l && (t = !1 !== n.component.commonService.callSVGConverterScript(null == n.parent.parent.parent.parent.context.$implicit ? null : n.parent.parent.parent.parent.context.$implicit.hiring_technologies.length, n.parent.parent.context.index) && t),
                        t
                }, null, null))], null, function (n, l) {
                    n(l, 0, 0, null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.hiring_technology_icon ? null : l.parent.parent.context.$implicit.hiring_technology_icon.url, t["\u0275inlineInterpolate"](1, "", null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.hiring_technology_icon ? null : l.parent.parent.context.$implicit.hiring_technology_icon.alt, ""))
                })
        }
        function hn(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 6, "a", [], [[8, "href", 4]], null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 5, "div", [["class", "icon-block"]], null, null, null, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 2, "div", [["class", "icon-box"]], null, null, null, null, null)), (n()(),
                            t["\u0275and"](16777216, null, null, 1, null, bn)), t["\u0275did"](4, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                ngIf: [0, "ngIf"]
                            }, null), (n()(),
                                t["\u0275eld"](5, 0, null, null, 1, "h4", [], null, null, null, null, null)), (n()(),
                                    t["\u0275ted"](6, null, ["", ""]))], function (n, l) {
                                        n(l, 4, 0, null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.hiring_technology_icon ? null : l.parent.context.$implicit.hiring_technology_icon.url)
                                    }, function (n, l) {
                                        n(l, 0, 0, l.component.commonService.replaceRootURLToBlank(null == l.parent.context.$implicit ? null : l.parent.context.$implicit.hiring_technology_page_link)),
                                            n(l, 6, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.hiring_technology_name)
                                    })
        }
        function Cn(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 0, "img", [["class", "svg-convert"]], [[8, "src", 4], [8, "alt", 0]], [[null, "load"]], function (n, l, e) {
                    var t = !0;
                    return "load" === l && (t = !1 !== n.component.commonService.callSVGConverterScript(null == n.parent.parent.parent.parent.context.$implicit ? null : n.parent.parent.parent.parent.context.$implicit.hiring_technologies.length, n.parent.parent.context.index) && t),
                        t
                }, null, null))], null, function (n, l) {
                    n(l, 0, 0, null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.hiring_technology_icon ? null : l.parent.parent.context.$implicit.hiring_technology_icon.url, t["\u0275inlineInterpolate"](1, "", null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.hiring_technology_icon ? null : l.parent.parent.context.$implicit.hiring_technology_icon.alt, ""))
                })
        }
        function On(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 5, "div", [["class", "icon-block"]], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 2, "div", [["class", "icon-box"]], null, null, null, null, null)), (n()(),
                        t["\u0275and"](16777216, null, null, 1, null, Cn)), t["\u0275did"](3, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                            ngIf: [0, "ngIf"]
                        }, null), (n()(),
                            t["\u0275eld"](4, 0, null, null, 1, "h4", [], null, null, null, null, null)), (n()(),
                                t["\u0275ted"](5, null, ["", ""]))], function (n, l) {
                                    n(l, 3, 0, null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.hiring_technology_icon ? null : l.parent.context.$implicit.hiring_technology_icon.url)
                                }, function (n, l) {
                                    n(l, 5, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.hiring_technology_name)
                                })
        }
        function Mn(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 4, "div", [["class", "col-4 col-sm-4 col-md-4 col-lg-2"]], null, null, null, null, null)), (n()(),
                    t["\u0275and"](16777216, null, null, 1, null, hn)), t["\u0275did"](2, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                        ngIf: [0, "ngIf"]
                    }, null), (n()(),
                        t["\u0275and"](16777216, null, null, 1, null, On)), t["\u0275did"](4, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                            ngIf: [0, "ngIf"]
                        }, null)], function (n, l) {
                            n(l, 2, 0, "" != (null == l.context.$implicit ? null : l.context.$implicit.hiring_technology_page_link)),
                                n(l, 4, 0, "" == (null == l.context.$implicit ? null : l.context.$implicit.hiring_technology_page_link))
                        }, null)
        }
        function Pn(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 10, null, null, null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 9, "section", [["class", "services-icon-section"]], null, null, null, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 8, "div", [["class", "container"]], null, null, null, null, null)), (n()(),
                            t["\u0275eld"](3, 0, null, null, 4, "div", [["class", "title-block"]], null, null, null, null, null)), (n()(),
                                t["\u0275eld"](4, 0, null, null, 1, "p", [["class", "sub-title"]], null, null, null, null, null)), (n()(),
                                    t["\u0275ted"](5, null, ["", ""])), (n()(),
                                        t["\u0275eld"](6, 0, null, null, 1, "h2", [], null, null, null, null, null)), (n()(),
                                            t["\u0275ted"](7, null, ["", ""])), (n()(),
                                                t["\u0275eld"](8, 0, null, null, 2, "div", [["class", "row"]], null, null, null, null, null)), (n()(),
                                                    t["\u0275and"](16777216, null, null, 1, null, Mn)), t["\u0275did"](10, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                                                        ngForOf: [0, "ngForOf"]
                                                    }, null)], function (n, l) {
                                                        n(l, 10, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.hiring_technologies)
                                                    }, function (n, l) {
                                                        n(l, 5, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.hiring_technologies_section_title),
                                                            n(l, 7, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.hiring_technologies_section_subtitle)
                                                    })
        }
        function vn(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 1, "img", [["class", "svg-convert"]], [[8, "alt", 0]], [[null, "load"]], function (n, l, e) {
                    var t = !0
                        , i = n.component;
                    return "load" === l && (t = !1 !== i.commonService.callSVGConverterScript(null == i.trustedBy ? null : null == i.trustedBy.data ? null : i.trustedBy.data.trusted_brands_details.length, n.parent.parent.parent.context.index) && t),
                        t
                }, null, null)), t["\u0275did"](1, 1720320, null, 0, u.a, [t.ElementRef, t.NgZone, t.PLATFORM_ID, [2, "options"]], {
                    lazyImage: [0, "lazyImage"],
                    defaultImage: [1, "defaultImage"]
                }, null)], function (n, l) {
                    n(l, 1, 0, null == l.parent.parent.parent.context.$implicit ? null : null == l.parent.parent.parent.context.$implicit.trusted_brands_logo ? null : l.parent.parent.parent.context.$implicit.trusted_brands_logo.url, null == l.parent.parent.parent.context.$implicit ? null : null == l.parent.parent.parent.context.$implicit.trusted_brands_logo ? null : l.parent.parent.parent.context.$implicit.trusted_brands_logo.url)
                }, function (n, l) {
                    n(l, 0, 0, t["\u0275inlineInterpolate"](1, "", null == l.parent.parent.parent.context.$implicit ? null : null == l.parent.parent.parent.context.$implicit.trusted_brands_logo ? null : l.parent.parent.parent.context.$implicit.trusted_brands_logo.alt, ""))
                })
        }
        function wn(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (n, l, e) {
                    var i = !0;
                    return "click" === l && (i = !1 !== t["\u0275nov"](n, 1).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && i),
                        i
                }, null, null)), t["\u0275did"](1, 671744, null, 0, a.o, [a.m, a.a, c.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (n()(),
                    t["\u0275and"](16777216, null, null, 1, null, vn)), t["\u0275did"](3, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                        ngIf: [0, "ngIf"]
                    }, null)], function (n, l) {
                        n(l, 1, 0, "/" + l.component.commonService.replaceRootURLToBlank(l.parent.parent.context.$implicit.trusted_brands_logo_page_link)),
                            n(l, 3, 0, null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.trusted_brands_logo ? null : l.parent.parent.context.$implicit.trusted_brands_logo.url)
                    }, function (n, l) {
                        n(l, 0, 0, t["\u0275nov"](l, 1).target, t["\u0275nov"](l, 1).href)
                    })
        }
        function $n(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 1, "img", [["class", "svg-convert"]], [[8, "alt", 0]], [[null, "load"]], function (n, l, e) {
                    var t = !0
                        , i = n.component;
                    return "load" === l && (t = !1 !== i.commonService.callSVGConverterScript(null == i.brandlogo ? null : null == i.brandlogo.data ? null : i.brandlogo.data.trusted_brands_details.length, n.parent.parent.context.index) && t),
                        t
                }, null, null)), t["\u0275did"](1, 1720320, null, 0, u.a, [t.ElementRef, t.NgZone, t.PLATFORM_ID, [2, "options"]], {
                    lazyImage: [0, "lazyImage"],
                    defaultImage: [1, "defaultImage"]
                }, null)], function (n, l) {
                    n(l, 1, 0, null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.trusted_brands_logo ? null : l.parent.parent.context.$implicit.trusted_brands_logo.url, null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.trusted_brands_logo ? null : l.parent.parent.context.$implicit.trusted_brands_logo.url)
                }, function (n, l) {
                    n(l, 0, 0, t["\u0275inlineInterpolate"](1, "", null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.trusted_brands_logo ? null : l.parent.parent.context.$implicit.trusted_brands_logo.alt, ""))
                })
        }
        function kn(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 4, "div", [["class", "logo-img"]], null, null, null, null, null)), (n()(),
                    t["\u0275and"](16777216, null, null, 1, null, wn)), t["\u0275did"](2, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                        ngIf: [0, "ngIf"]
                    }, null), (n()(),
                        t["\u0275and"](16777216, null, null, 1, null, $n)), t["\u0275did"](4, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                            ngIf: [0, "ngIf"]
                        }, null)], function (n, l) {
                            n(l, 2, 0, "" != l.parent.context.$implicit.trusted_brands_logo_page_link),
                                n(l, 4, 0, "" != (null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.trusted_brands_logo ? null : l.parent.context.$implicit.trusted_brands_logo.url) && "" == (null == l.parent.context.$implicit ? null : l.parent.context.$implicit.trusted_brands_logo_page_link))
                        }, null)
        }
        function yn(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 2, "li", [], null, null, null, null, null)), (n()(),
                    t["\u0275and"](16777216, null, null, 1, null, kn)), t["\u0275did"](2, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                        ngIf: [0, "ngIf"]
                    }, null)], function (n, l) {
                        n(l, 2, 0, null == l.context.$implicit ? null : null == l.context.$implicit.trusted_brands_logo ? null : l.context.$implicit.trusted_brands_logo.url)
                    }, null)
        }
        function In(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 9, "section", [["class", "brands-sec pad-t-b"]], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 8, "div", [["class", "container"]], null, null, null, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 4, "div", [["class", "title-block"]], null, null, null, null, null)), (n()(),
                            t["\u0275eld"](3, 0, null, null, 1, "p", [["class", "sub-title"]], null, null, null, null, null)), (n()(),
                                t["\u0275ted"](4, null, ["", ""])), (n()(),
                                    t["\u0275eld"](5, 0, null, null, 1, "h2", [], null, null, null, null, null)), (n()(),
                                        t["\u0275ted"](6, null, ["", ""])), (n()(),
                                            t["\u0275eld"](7, 0, null, null, 2, "ul", [["class", "brand-logo"]], null, null, null, null, null)), (n()(),
                                                t["\u0275and"](16777216, null, null, 1, null, yn)), t["\u0275did"](9, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                                                    ngForOf: [0, "ngForOf"]
                                                }, null)], function (n, l) {
                                                    var e = l.component;
                                                    n(l, 9, 0, null == e.trustedBy ? null : null == e.trustedBy.data ? null : e.trustedBy.data.trusted_brands_details)
                                                }, function (n, l) {
                                                    var e = l.component;
                                                    n(l, 4, 0, null == e.trustedBy ? null : null == e.trustedBy.data ? null : e.trustedBy.data.trusted_brands_title),
                                                        n(l, 6, 0, null == e.trustedBy ? null : null == e.trustedBy.data ? null : e.trustedBy.data.trusted_brands_heading)
                                                })
        }
        function Sn(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 3, "picture", [], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 0, "source", [["type", "image/webp"]], [[8, "srcset", 4]], null, null, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 0, "source", [], [[8, "srcset", 4], [8, "type", 0]], null, null, null, null)), (n()(),
                            t["\u0275eld"](3, 0, null, null, 0, "img", [["class", "img-responsive"]], [[8, "src", 4], [8, "alt", 0]], null, null, null, null))], null, function (n, l) {
                                var e = l.component;
                                n(l, 1, 0, e.commonService.getWebp(null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.image ? null : l.parent.parent.context.$implicit.image.url)),
                                    n(l, 2, 0, null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.image ? null : l.parent.parent.context.$implicit.image.url, t["\u0275inlineInterpolate"](1, "image/", e.commonService.getImgtype(null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.image ? null : l.parent.parent.context.$implicit.image.url), "")),
                                    n(l, 3, 0, null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.image ? null : l.parent.parent.context.$implicit.image.url, t["\u0275inlineInterpolate"](1, "", null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.image ? null : l.parent.parent.context.$implicit.image.alt, ""))
                            })
        }
        function Rn(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 2, "div", [["class", "img-block"]], null, null, null, null, null)), (n()(),
                    t["\u0275and"](16777216, null, null, 1, null, Sn)), t["\u0275did"](2, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                        ngIf: [0, "ngIf"]
                    }, null)], function (n, l) {
                        n(l, 2, 0, null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.image ? null : l.parent.context.$implicit.image.url)
                    }, null)
        }
        function zn(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 4, "picture", [], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 0, "source", [["type", "image/webp"]], [[1, "defaultImage", 0], [1, "lazyLoad", 0]], null, null, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 0, "source", [], [[1, "defaultImage", 0], [1, "lazyLoad", 0], [8, "type", 0]], null, null, null, null)), (n()(),
                            t["\u0275eld"](3, 0, null, null, 1, "img", [["class", "img-responsive"]], [[8, "alt", 0]], null, null, null, null)), t["\u0275did"](4, 1720320, null, 0, u.a, [t.ElementRef, t.NgZone, t.PLATFORM_ID, [2, "options"]], {
                                lazyImage: [0, "lazyImage"],
                                defaultImage: [1, "defaultImage"]
                            }, null)], function (n, l) {
                                n(l, 4, 0, null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.image ? null : l.parent.parent.context.$implicit.image.url, l.component.defaultImage)
                            }, function (n, l) {
                                var e = l.component;
                                n(l, 1, 0, e.defaultImage, e.commonService.getWebp(null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.image ? null : l.parent.parent.context.$implicit.image.url)),
                                    n(l, 2, 0, e.defaultImage, null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.image ? null : l.parent.parent.context.$implicit.image.url, t["\u0275inlineInterpolate"](1, "image/", e.commonService.getImgtype(null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.image ? null : l.parent.parent.context.$implicit.image.url), "")),
                                    n(l, 3, 0, t["\u0275inlineInterpolate"](1, "", null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.image ? null : l.parent.parent.context.$implicit.image.alt, ""))
                            })
        }
        function Tn(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 2, "div", [["class", "img-block"]], null, null, null, null, null)), (n()(),
                    t["\u0275and"](16777216, null, null, 1, null, zn)), t["\u0275did"](2, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                        ngIf: [0, "ngIf"]
                    }, null)], function (n, l) {
                        n(l, 2, 0, null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.image ? null : l.parent.context.$implicit.image.url)
                    }, null)
        }
        function Nn(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 11, "div", [["class", "col-sm-12 col-md-6 col-lg-4"]], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 10, "div", [["class", "case-box mrg-t-40"]], null, null, null, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 9, "a", [["class", "case-col"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (n, l, e) {
                            var i = !0;
                            return "click" === l && (i = !1 !== t["\u0275nov"](n, 3).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && i),
                                i
                        }, null, null)), t["\u0275did"](3, 671744, null, 0, a.o, [a.m, a.a, c.LocationStrategy], {
                            routerLink: [0, "routerLink"]
                        }, null), (n()(),
                            t["\u0275and"](16777216, null, null, 1, null, Rn)), t["\u0275did"](5, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                ngIf: [0, "ngIf"]
                            }, null), (n()(),
                                t["\u0275and"](16777216, null, null, 1, null, Tn)), t["\u0275did"](7, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                    ngIf: [0, "ngIf"]
                                }, null), (n()(),
                                    t["\u0275eld"](8, 0, null, null, 3, "div", [["class", "text-block"]], null, null, null, null, null)), (n()(),
                                        t["\u0275eld"](9, 0, null, null, 1, "h3", [], null, null, null, null, null)), (n()(),
                                            t["\u0275ted"](10, null, ["", ""])), (n()(),
                                                t["\u0275eld"](11, 0, null, null, 0, "p", [], [[8, "innerHTML", 1]], null, null, null, null))], function (n, l) {
                                                    var e = l.component;
                                                    n(l, 3, 0, "/" + e.commonService.replaceRootURLToBlank(null == l.context.$implicit ? null : l.context.$implicit.link)),
                                                        n(l, 5, 0, e.isMobile),
                                                        n(l, 7, 0, !e.isMobile)
                                                }, function (n, l) {
                                                    var e = l.component;
                                                    n(l, 2, 0, t["\u0275nov"](l, 3).target, t["\u0275nov"](l, 3).href),
                                                        n(l, 10, 0, null == l.context.$implicit ? null : l.context.$implicit.title),
                                                        n(l, 11, 0, e.lineWordWrap(null == l.context.$implicit ? null : l.context.$implicit.text))
                                                })
        }
        function Ln(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 15, "section", [["class", "casestudy-sec pad-t-b"]], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 14, "div", [["class", "container"]], null, null, null, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 4, "div", [["class", "title-block"]], null, null, null, null, null)), (n()(),
                            t["\u0275eld"](3, 0, null, null, 1, "p", [["class", "sub-title"]], null, null, null, null, null)), (n()(),
                                t["\u0275ted"](4, null, ["", ""])), (n()(),
                                    t["\u0275eld"](5, 0, null, null, 1, "h2", [], null, null, null, null, null)), (n()(),
                                        t["\u0275ted"](6, null, ["", ""])), (n()(),
                                            t["\u0275eld"](7, 0, null, null, 3, "div", [["class", "work-row"]], null, null, null, null, null)), (n()(),
                                                t["\u0275eld"](8, 0, null, null, 2, "div", [["class", "row our-work-services-slider"]], null, null, null, null, null)), (n()(),
                                                    t["\u0275and"](16777216, null, null, 1, null, Nn)), t["\u0275did"](10, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                                                        ngForOf: [0, "ngForOf"]
                                                    }, null), (n()(),
                                                        t["\u0275eld"](11, 0, null, null, 0, "div", [["class", "clearfix"]], null, null, null, null, null)), (n()(),
                                                            t["\u0275eld"](12, 0, null, null, 3, "div", [["class", "portfolio-btn"]], null, null, null, null, null)), (n()(),
                                                                t["\u0275eld"](13, 0, null, null, 2, "a", [["class", "work-btn"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (n, l, e) {
                                                                    var i = !0;
                                                                    return "click" === l && (i = !1 !== t["\u0275nov"](n, 14).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && i),
                                                                        i
                                                                }, null, null)), t["\u0275did"](14, 671744, null, 0, a.o, [a.m, a.a, c.LocationStrategy], {
                                                                    routerLink: [0, "routerLink"]
                                                                }, null), (n()(),
                                                                    t["\u0275ted"](15, null, ["", ""]))], function (n, l) {
                                                                        var e = l.component;
                                                                        n(l, 10, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.portfolio),
                                                                            n(l, 14, 0, "/" + e.commonService.replaceRootURLToBlank(null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.button ? null : l.parent.context.$implicit.button.link))
                                                                    }, function (n, l) {
                                                                        n(l, 4, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.sub_title),
                                                                            n(l, 6, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.title),
                                                                            n(l, 13, 0, t["\u0275nov"](l, 14).target, t["\u0275nov"](l, 14).href),
                                                                            n(l, 15, 0, null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.button ? null : l.parent.context.$implicit.button.label)
                                                                    })
        }
        function Vn(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 3, "picture", [], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 0, "source", [["type", "image/webp"]], [[8, "srcset", 4]], null, null, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 0, "source", [], [[8, "srcset", 4], [8, "type", 0]], null, null, null, null)), (n()(),
                            t["\u0275eld"](3, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null))], null, function (n, l) {
                                var e = l.component;
                                n(l, 1, 0, e.commonService.getWebp(null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.success_stories_image ? null : l.parent.context.$implicit.success_stories_image.url)),
                                    n(l, 2, 0, null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.success_stories_image ? null : l.parent.context.$implicit.success_stories_image.url, t["\u0275inlineInterpolate"](1, "image/", e.commonService.getImgtype(null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.success_stories_image ? null : l.parent.context.$implicit.success_stories_image.url), "")),
                                    n(l, 3, 0, null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.success_stories_image ? null : l.parent.context.$implicit.success_stories_image.url, t["\u0275inlineInterpolate"](1, "", null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.success_stories_image ? null : l.parent.context.$implicit.success_stories_image.alt, ""))
                            })
        }
        function Fn(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 9, "div", [], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 8, "div", [["class", "testimonial-box"]], null, null, null, null, null)), (n()(),
                        t["\u0275and"](16777216, null, null, 1, null, Vn)), t["\u0275did"](3, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                            ngIf: [0, "ngIf"]
                        }, null), (n()(),
                            t["\u0275eld"](4, 0, null, null, 5, "div", [["class", "play-btn"]], null, null, null, null, null)), (n()(),
                                t["\u0275eld"](5, 0, null, null, 1, "a", [["class", "video-btn-play-client fancybox-media"], ["data-fancybox", ""]], [[8, "href", 4]], null, null, null, null)), (n()(),
                                    t["\u0275eld"](6, 0, null, null, 0, "img", [["src", "../../assets/images/video-play.svg"]], [[8, "title", 0], [8, "alt", 0]], null, null, null, null)), (n()(),
                                        t["\u0275eld"](7, 0, null, null, 2, "div", [["class", "client-name text-right"]], null, null, null, null, null)), (n()(),
                                            t["\u0275eld"](8, 0, null, null, 1, "h3", [], null, null, null, null, null)), (n()(),
                                                t["\u0275ted"](9, null, ["", ""]))], function (n, l) {
                                                    n(l, 3, 0, null == l.context.$implicit ? null : null == l.context.$implicit.success_stories_image ? null : l.context.$implicit.success_stories_image.url)
                                                }, function (n, l) {
                                                    n(l, 5, 0, t["\u0275inlineInterpolate"](1, "", null == l.context.$implicit ? null : l.context.$implicit.success_stories_video_url, "")),
                                                        n(l, 6, 0, null == l.context.$implicit ? null : null == l.context.$implicit.success_stories_image ? null : l.context.$implicit.success_stories_image.title, null == l.context.$implicit ? null : null == l.context.$implicit.success_stories_image ? null : l.context.$implicit.success_stories_image.alt),
                                                        n(l, 9, 0, null == l.context.$implicit ? null : l.context.$implicit.success_stories_client_name)
                                                })
        }
        function qn(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 10, "section", [["class", "client-testimonial-sec"]], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 5, "div", [["class", "container"]], null, null, null, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 4, "div", [["class", "title-block"]], null, null, null, null, null)), (n()(),
                            t["\u0275eld"](3, 0, null, null, 1, "p", [["class", "sub-title"]], null, null, null, null, null)), (n()(),
                                t["\u0275ted"](4, null, ["", ""])), (n()(),
                                    t["\u0275eld"](5, 0, null, null, 1, "h2", [], null, null, null, null, null)), (n()(),
                                        t["\u0275ted"](6, null, ["", ""])), (n()(),
                                            t["\u0275eld"](7, 0, null, null, 3, "div", [["class", "testimonial-slider"]], null, null, null, null, null)), (n()(),
                                                t["\u0275eld"](8, 0, null, null, 2, "div", [["class", "clients-slider slider-width"]], null, null, null, null, null)), (n()(),
                                                    t["\u0275and"](16777216, null, null, 1, null, Fn)), t["\u0275did"](10, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                                                        ngForOf: [0, "ngForOf"]
                                                    }, null)], function (n, l) {
                                                        var e = l.component;
                                                        n(l, 10, 0, null == e.successStories ? null : e.successStories.success_stories)
                                                    }, function (n, l) {
                                                        var e = l.component;
                                                        n(l, 4, 0, null == e.successStories ? null : e.successStories.success_stories_section_title),
                                                            n(l, 6, 0, null == e.successStories ? null : e.successStories.success_stories_section_heading)
                                                    })
        }
        function Dn(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 8, "section", [["class", "quote-sec pad-t-b"], ["style", "background-image:url('assets/images/request-quote-bg.jpg')"]], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 7, "div", [["class", "container"]], null, null, null, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 1, "h2", [], null, null, null, null, null)), (n()(),
                            t["\u0275ted"](3, null, ["", ""])), (n()(),
                                t["\u0275eld"](4, 0, null, null, 1, "p", [["class", "sub-title"]], [[8, "innerHTML", 1]], null, null, null, null)), (n()(),
                                    t["\u0275ted"](-1, null, ["S"])), (n()(),
                                        t["\u0275eld"](6, 0, null, null, 2, "button", [["class", "enquiry-btn show-right-push show_enqiry_form"], ["id", "services-btn"]], null, null, null, null, null)), (n()(),
                                            t["\u0275ted"](7, null, ["", ""])), (n()(),
                                                t["\u0275eld"](8, 0, null, null, 0, "i", [["class", "fa fa-long-arrow-right"]], null, null, null, null, null))], null, function (n, l) {
                                                    var e = l.component;
                                                    n(l, 3, 0, null == e.requestAQuoteSection ? null : e.requestAQuoteSection.request_a_quote_section_subtitle),
                                                        n(l, 4, 0, null == e.requestAQuoteSection ? null : e.requestAQuoteSection.request_a_quote_section_description),
                                                        n(l, 7, 0, null == e.requestAQuoteSection ? null : e.requestAQuoteSection.request_a_quote_section_button_text)
                                                })
        }
        function An(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 1, "h2", [], null, null, null, null, null)), (n()(),
                    t["\u0275ted"](1, null, ["", ""]))], null, function (n, l) {
                        n(l, 1, 0, null == l.parent.parent.context.$implicit ? null : l.parent.parent.context.$implicit.section_title)
                    })
        }
        function En(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 5, "div", [["class", "faqs-collapse"]], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 3, "div", [], null, null, null, null, null)), t["\u0275did"](2, 278528, null, 0, c.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                        ngClass: [0, "ngClass"]
                    }, null), (n()(),
                        t["\u0275eld"](3, 0, null, null, 1, "a", [["class", "card-title"]], null, null, null, null, null)), (n()(),
                            t["\u0275ted"](4, null, [" ", " "])), (n()(),
                                t["\u0275eld"](5, 0, null, null, 0, "div", [["class", "card-body collapse"]], [[8, "innerHTML", 1]], null, null, null, null))], function (n, l) {
                                    n(l, 2, 0, 0 != l.component.fj ? "collapsed card-header" : "card-header")
                                }, function (n, l) {
                                    n(l, 4, 0, null == l.context.$implicit ? null : l.context.$implicit.title),
                                        n(l, 5, 0, null == l.context.$implicit ? null : l.context.$implicit.description)
                                })
        }
        function Kn(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 14, "section", [["class", "dedicated-faqs pad-t-b"]], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 13, "div", [["class", "container"]], null, null, null, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 2, "div", [["class", "title-block"]], null, null, null, null, null)), (n()(),
                            t["\u0275and"](16777216, null, null, 1, null, An)), t["\u0275did"](4, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                ngIf: [0, "ngIf"]
                            }, null), (n()(),
                                t["\u0275eld"](5, 0, null, null, 6, "div", [["class", "faqs-accordian"]], null, null, null, null, null)), (n()(),
                                    t["\u0275eld"](6, 0, null, null, 5, "div", [["class", "row"]], null, null, null, null, null)), (n()(),
                                        t["\u0275eld"](7, 0, null, null, 4, "div", [["class", "col-md-12"]], null, null, null, null, null)), (n()(),
                                            t["\u0275eld"](8, 0, null, null, 3, "div", [["class", "accordion"], ["id", "accordion"]], null, null, null, null, null)), (n()(),
                                                t["\u0275eld"](9, 0, null, null, 2, "div", [["class", "card"]], null, null, null, null, null)), (n()(),
                                                    t["\u0275and"](16777216, null, null, 1, null, En)), t["\u0275did"](11, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                                                        ngForOf: [0, "ngForOf"]
                                                    }, null), (n()(),
                                                        t["\u0275eld"](12, 0, null, null, 2, "div", [["class", "faqs-btn text-center mrg-t-40"]], null, null, null, null, null)), (n()(),
                                                            t["\u0275eld"](13, 0, null, null, 1, "a", [["class", "view-all-btn talk-btn"], ["href", "#"], ["id", "loadMore"]], null, null, null, null, null)), (n()(),
                                                                t["\u0275ted"](-1, null, ["Show All"]))], function (n, l) {
                                                                    n(l, 4, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.section_title),
                                                                        n(l, 11, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.faqs_details)
                                                                }, null)
        }
        function Zn(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 2, "div", [["class", "green-btn"]], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 1, "a", [], [[8, "href", 4]], null, null, null, null)), (n()(),
                        t["\u0275ted"](2, null, ["", ""]))], null, function (n, l) {
                            n(l, 1, 0, l.component.commonService.replaceRootURLToBlank(null == l.parent.parent.context.$implicit ? null : l.parent.parent.context.$implicit.what_we_do_banner_button_link)),
                                n(l, 2, 0, null == l.parent.parent.context.$implicit ? null : l.parent.parent.context.$implicit.what_we_do_banner_button_text)
                        })
        }
        function jn(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 8, null, null, null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 7, "section", [["class", "main-page-header inner-page-header"]], null, null, null, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 6, "div", [["class", "container"]], null, null, null, null, null)), (n()(),
                            t["\u0275eld"](3, 0, null, null, 5, "div", [["class", "page-header-content"]], null, null, null, null, null)), (n()(),
                                t["\u0275eld"](4, 0, null, null, 1, "h1", [], null, null, null, null, null)), (n()(),
                                    t["\u0275ted"](5, null, ["", ""])), (n()(),
                                        t["\u0275eld"](6, 0, null, null, 0, "p", [], [[8, "innerHTML", 1]], null, null, null, null)), (n()(),
                                            t["\u0275and"](16777216, null, null, 1, null, Zn)), t["\u0275did"](8, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                ngIf: [0, "ngIf"]
                                            }, null)], function (n, l) {
                                                n(l, 8, 0, "" != (null == l.parent.context.$implicit ? null : l.parent.context.$implicit.what_we_do_banner_button_link))
                                            }, function (n, l) {
                                                n(l, 5, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.what_we_do_pages_banner_title),
                                                    n(l, 6, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.what_we_do_pages_banner_description)
                                            })
        }
        function Bn(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 0, "img", [["class", "svg-convert"]], [[8, "src", 4], [8, "alt", 0]], [[null, "load"]], function (n, l, e) {
                    var t = !0;
                    return "load" === l && (t = !1 !== n.component.commonService.callSVGConverterScript(null == n.parent.parent.parent.parent.parent.context.$implicit ? null : n.parent.parent.parent.parent.parent.context.$implicit.center_content_with_image_section_technologies.length, n.parent.parent.context.index) && t),
                        t
                }, null, null))], null, function (n, l) {
                    n(l, 0, 0, null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.technologies_image ? null : l.parent.parent.context.$implicit.technologies_image.url, t["\u0275inlineInterpolate"](1, "", null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.technologies_image ? null : l.parent.parent.context.$implicit.technologies_image.alt, ""))
                })
        }
        function Hn(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 2, "a", [], [[8, "href", 4]], null, null, null, null)), (n()(),
                    t["\u0275and"](16777216, null, null, 1, null, Bn)), t["\u0275did"](2, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                        ngIf: [0, "ngIf"]
                    }, null)], function (n, l) {
                        n(l, 2, 0, null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.technologies_image ? null : l.parent.context.$implicit.technologies_image.url)
                    }, function (n, l) {
                        n(l, 0, 0, l.component.commonService.replaceRootURLToBlank(null == l.parent.context.$implicit ? null : l.parent.context.$implicit.page_link_of_technologies))
                    })
        }
        function Gn(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 0, "img", [["class", "svg-convert"]], [[8, "src", 4], [8, "alt", 0]], [[null, "load"]], function (n, l, e) {
                    var t = !0;
                    return "load" === l && (t = !1 !== n.component.commonService.callSVGConverterScript(null == n.parent.parent.parent.parent.parent.context.$implicit ? null : n.parent.parent.parent.parent.parent.context.$implicit.center_content_with_image_section_technologies.length, n.parent.parent.context.index) && t),
                        t
                }, null, null))], null, function (n, l) {
                    n(l, 0, 0, null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.technologies_image ? null : l.parent.parent.context.$implicit.technologies_image.url, t["\u0275inlineInterpolate"](1, "", null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.technologies_image ? null : l.parent.parent.context.$implicit.technologies_image.alt, ""))
                })
        }
        function Un(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 2, "a", [], null, null, null, null, null)), (n()(),
                    t["\u0275and"](16777216, null, null, 1, null, Gn)), t["\u0275did"](2, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                        ngIf: [0, "ngIf"]
                    }, null)], function (n, l) {
                        n(l, 2, 0, null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.technologies_image ? null : l.parent.context.$implicit.technologies_image.url)
                    }, null)
        }
        function Wn(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 5, null, null, null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 4, "li", [], null, null, null, null, null)), (n()(),
                        t["\u0275and"](16777216, null, null, 1, null, Hn)), t["\u0275did"](3, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                            ngIf: [0, "ngIf"]
                        }, null), (n()(),
                            t["\u0275and"](16777216, null, null, 1, null, Un)), t["\u0275did"](5, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                ngIf: [0, "ngIf"]
                            }, null)], function (n, l) {
                                n(l, 3, 0, "" != (null == l.context.$implicit ? null : l.context.$implicit.page_link_of_technologies)),
                                    n(l, 5, 0, "" == (null == l.context.$implicit ? null : l.context.$implicit.page_link_of_technologies))
                            }, null)
        }
        function Yn(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 3, "div", [["class", "technology-icon"]], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 2, "ul", [], null, null, null, null, null)), (n()(),
                        t["\u0275and"](16777216, null, null, 1, null, Wn)), t["\u0275did"](3, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                            ngForOf: [0, "ngForOf"]
                        }, null)], function (n, l) {
                            n(l, 3, 0, null == l.parent.parent.context.$implicit ? null : l.parent.parent.context.$implicit.center_content_with_image_section_technologies)
                        }, null)
        }
        function Qn(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 4, "picture", [], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 0, "source", [["type", "image/webp"]], [[1, "defaultImage", 0], [1, "lazyLoad", 0]], [[null, "load"]], function (n, l, e) {
                        var t = !0
                            , i = n.component;
                        return "load" === l && (t = !1 !== i.commonService.callSVGConverterScript(null == i.brandlogo ? null : null == i.brandlogo.data ? null : i.brandlogo.data.trusted_brands_details.length, n.parent.parent.context.index) && t),
                            t
                    }, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 0, "source", [], [[1, "defaultImage", 0], [1, "lazyLoad", 0], [8, "type", 0]], [[null, "load"]], function (n, l, e) {
                            var t = !0
                                , i = n.component;
                            return "load" === l && (t = !1 !== i.commonService.callSVGConverterScript(null == i.brandlogo ? null : null == i.brandlogo.data ? null : i.brandlogo.data.trusted_brands_details.length, n.parent.parent.context.index) && t),
                                t
                        }, null, null)), (n()(),
                            t["\u0275eld"](3, 0, null, null, 1, "img", [], [[8, "alt", 0]], null, null, null, null)), t["\u0275did"](4, 1720320, null, 0, u.a, [t.ElementRef, t.NgZone, t.PLATFORM_ID, [2, "options"]], {
                                lazyImage: [0, "lazyImage"],
                                defaultImage: [1, "defaultImage"]
                            }, null)], function (n, l) {
                                n(l, 4, 0, null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.center_content_with_image_section_image ? null : l.parent.parent.context.$implicit.center_content_with_image_section_image.url, l.component.defaultImage)
                            }, function (n, l) {
                                var e = l.component;
                                n(l, 1, 0, e.defaultImage, e.commonService.getWebp(null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.center_content_with_image_section_image ? null : l.parent.parent.context.$implicit.center_content_with_image_section_image.url)),
                                    n(l, 2, 0, e.defaultImage, null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.center_content_with_image_section_image ? null : l.parent.parent.context.$implicit.center_content_with_image_section_image.url, t["\u0275inlineInterpolate"](1, "image/", e.commonService.getImgtype(null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.center_content_with_image_section_image ? null : l.parent.parent.context.$implicit.center_content_with_image_section_image.url), "")),
                                    n(l, 3, 0, t["\u0275inlineInterpolate"](1, "", null == l.parent.parent.context.$implicit ? null : null == l.parent.parent.context.$implicit.center_content_with_image_section_image ? null : l.parent.parent.context.$implicit.center_content_with_image_section_image.alt, ""))
                            })
        }
        function Jn(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 17, null, null, null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 16, "section", [["class", "wwd-service-content-center cmn-pad-50"]], [[8, "id", 0]], null, null, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 15, "div", [["class", "container-box"]], null, null, null, null, null)), (n()(),
                            t["\u0275eld"](3, 0, null, null, 14, "div", [["class", "wwd-service-bg"]], null, null, null, null, null)), (n()(),
                                t["\u0275eld"](4, 0, null, null, 13, "div", [], null, null, null, null, null)), t["\u0275did"](5, 278528, null, 0, c.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                                    ngClass: [0, "ngClass"]
                                }, null), (n()(),
                                    t["\u0275eld"](6, 0, null, null, 11, "div", [["class", "row"]], null, null, null, null, null)), (n()(),
                                        t["\u0275eld"](7, 0, null, null, 6, "div", [["class", "col-12 col-md-12 col-lg-10 col-xl-8 m-auto"]], null, null, null, null, null)), (n()(),
                                            t["\u0275eld"](8, 0, null, null, 1, "h2", [], null, null, null, null, null)), (n()(),
                                                t["\u0275ted"](9, null, ["", ""])), (n()(),
                                                    t["\u0275eld"](10, 0, null, null, 1, "p", [], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275ppd"](11, 1), (n()(),
                                                        t["\u0275and"](16777216, null, null, 1, null, Yn)), t["\u0275did"](13, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                            ngIf: [0, "ngIf"]
                                                        }, null), (n()(),
                                                            t["\u0275eld"](14, 0, null, null, 3, "div", [["class", "col-12"]], null, null, null, null, null)), (n()(),
                                                                t["\u0275eld"](15, 0, null, null, 2, "div", [["class", "img-box"]], null, null, null, null, null)), (n()(),
                                                                    t["\u0275and"](16777216, null, null, 1, null, Qn)), t["\u0275did"](17, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                        ngIf: [0, "ngIf"]
                                                                    }, null)], function (n, l) {
                                                                        n(l, 5, 0, null != l.parent.context.$implicit && l.parent.context.$implicit.section_image_position_bottom ? "wwd-content-center pad-b-0" : "wwd-content-center"),
                                                                            n(l, 13, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.center_content_with_image_section_technologies),
                                                                            n(l, 17, 0, "" != (null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.center_content_with_image_section_image ? null : l.parent.context.$implicit.center_content_with_image_section_image.url))
                                                                    }, function (n, l) {
                                                                        n(l, 1, 0, t["\u0275inlineInterpolate"](1, "", null == l.parent.context.$implicit ? null : l.parent.context.$implicit.center_content_with_image_section_id, "")),
                                                                            n(l, 9, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.center_content_with_image_section_title);
                                                                        var e = t["\u0275unv"](l, 10, 0, n(l, 11, 0, t["\u0275nov"](l.parent.parent.parent, 0), null == l.parent.context.$implicit ? null : l.parent.context.$implicit.center_content_with_image_section_description));
                                                                        n(l, 10, 0, e)
                                                                    })
        }
        function Xn(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 0, "img", [["class", "svg-convert"]], [[8, "src", 4], [8, "alt", 0]], [[null, "load"]], function (n, l, e) {
                    var t = !0;
                    return "load" === l && (t = !1 !== n.component.commonService.callSVGConverterScript(null == n.parent.parent.parent.context.$implicit ? null : n.parent.parent.parent.context.$implicit.targeted_customers.length, n.parent.context.index) && t),
                        t
                }, null, null))], null, function (n, l) {
                    n(l, 0, 0, null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.targeted_customer_image ? null : l.parent.context.$implicit.targeted_customer_image.url, t["\u0275inlineInterpolate"](1, "", null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.targeted_customer_image ? null : l.parent.context.$implicit.targeted_customer_image.alt, ""))
                })
        }
        function nl(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 6, "div", [["class", "col-12 col-md-12 col-lg-4 mobile-app-col"]], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 2, "div", [["class", "services-icon"]], null, null, null, null, null)), (n()(),
                        t["\u0275and"](16777216, null, null, 1, null, Xn)), t["\u0275did"](3, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                            ngIf: [0, "ngIf"]
                        }, null), (n()(),
                            t["\u0275eld"](4, 0, null, null, 1, "h3", [], null, null, null, null, null)), (n()(),
                                t["\u0275ted"](5, null, ["", ""])), (n()(),
                                    t["\u0275eld"](6, 0, null, null, 0, "p", [], [[8, "innerHTML", 1]], null, null, null, null))], function (n, l) {
                                        n(l, 3, 0, null == l.context.$implicit ? null : null == l.context.$implicit.targeted_customer_image ? null : l.context.$implicit.targeted_customer_image.url)
                                    }, function (n, l) {
                                        n(l, 5, 0, null == l.context.$implicit ? null : l.context.$implicit.targeted_customer_name),
                                            n(l, 6, 0, null == l.context.$implicit ? null : l.context.$implicit.targeted_customer_description)
                                    })
        }
        function ll(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 9, null, null, null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 8, "section", [["class", "our-target-customers-section cmn-pad-50"]], null, null, null, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 7, "div", [["class", "container"]], null, null, null, null, null)), (n()(),
                            t["\u0275eld"](3, 0, null, null, 2, "div", [["class", "wwd-content-center"]], null, null, null, null, null)), (n()(),
                                t["\u0275eld"](4, 0, null, null, 1, "h2", [], null, null, null, null, null)), (n()(),
                                    t["\u0275ted"](5, null, ["", ""])), (n()(),
                                        t["\u0275eld"](6, 0, null, null, 3, "div", [["class", "mobile-app-services"]], null, null, null, null, null)), (n()(),
                                            t["\u0275eld"](7, 0, null, null, 2, "div", [["class", "row"]], null, null, null, null, null)), (n()(),
                                                t["\u0275and"](16777216, null, null, 1, null, nl)), t["\u0275did"](9, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                                                    ngForOf: [0, "ngForOf"]
                                                }, null)], function (n, l) {
                                                    n(l, 9, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.targeted_customers)
                                                }, function (n, l) {
                                                    n(l, 5, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.three_column_section_title)
                                                })
        }
        function el(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 7, "a", [["class", "page-link-col"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (n, l, e) {
                    var i = !0;
                    return "click" === l && (i = !1 !== t["\u0275nov"](n, 1).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && i),
                        i
                }, null, null)), t["\u0275did"](1, 671744, null, 0, a.o, [a.m, a.a, c.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (n()(),
                    t["\u0275eld"](2, 0, null, null, 5, "div", [["class", "pages-link"]], null, null, null, null, null)), (n()(),
                        t["\u0275eld"](3, 0, null, null, 0, "img", [["class", "svg-convert"]], [[8, "src", 4]], [[null, "load"]], function (n, l, e) {
                            var t = !0;
                            return "load" === l && (t = !1 !== n.component.commonService.callSVGConverterScript(1, 0) && t),
                                t
                        }, null, null)), (n()(),
                            t["\u0275eld"](4, 0, null, null, 1, "h4", [], null, null, null, null, null)), (n()(),
                                t["\u0275ted"](5, null, ["", ""])), (n()(),
                                    t["\u0275eld"](6, 0, null, null, 1, "p", [], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275ppd"](7, 1)], function (n, l) {
                                        n(l, 1, 0, "/" + l.component.commonService.replaceRootURLToBlank(null == l.parent.context.$implicit ? null : l.parent.context.$implicit.page_link))
                                    }, function (n, l) {
                                        n(l, 0, 0, t["\u0275nov"](l, 1).target, t["\u0275nov"](l, 1).href),
                                            n(l, 3, 0, null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.image ? null : l.parent.context.$implicit.image.url),
                                            n(l, 5, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.title);
                                        var e = t["\u0275unv"](l, 6, 0, n(l, 7, 0, t["\u0275nov"](l.parent.parent.parent.parent.parent.parent, 0), null == l.parent.context.$implicit ? null : l.parent.context.$implicit.description));
                                        n(l, 6, 0, e)
                                    })
        }
        function tl(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 6, "a", [["class", "page-link-col"], ["href", "#"]], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 5, "div", [["class", "pages-link"]], null, null, null, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 0, "img", [["class", "svg-convert"]], [[8, "src", 4]], [[null, "load"]], function (n, l, e) {
                            var t = !0;
                            return "load" === l && (t = !1 !== n.component.commonService.callSVGConverterScript(1, 0) && t),
                                t
                        }, null, null)), (n()(),
                            t["\u0275eld"](3, 0, null, null, 1, "h4", [], null, null, null, null, null)), (n()(),
                                t["\u0275ted"](4, null, ["", ""])), (n()(),
                                    t["\u0275eld"](5, 0, null, null, 1, "p", [], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275ppd"](6, 1)], null, function (n, l) {
                                        n(l, 2, 0, null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.image ? null : l.parent.context.$implicit.image.url),
                                            n(l, 4, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.title);
                                        var e = t["\u0275unv"](l, 5, 0, n(l, 6, 0, t["\u0275nov"](l.parent.parent.parent.parent.parent.parent, 0), null == l.parent.context.$implicit ? null : l.parent.context.$implicit.description));
                                        n(l, 5, 0, e)
                                    })
        }
        function il(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 6, null, null, null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 5, "div", [], null, null, null, null, null)), t["\u0275did"](2, 278528, null, 0, c.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                        ngClass: [0, "ngClass"]
                    }, null), (n()(),
                        t["\u0275and"](16777216, null, null, 1, null, el)), t["\u0275did"](4, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                            ngIf: [0, "ngIf"]
                        }, null), (n()(),
                            t["\u0275and"](16777216, null, null, 1, null, tl)), t["\u0275did"](6, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                ngIf: [0, "ngIf"]
                            }, null)], function (n, l) {
                                n(l, 2, 0, (null == l.context.$implicit ? null : l.context.$implicit.section_class) + " col-md-6 col-lg-6 mr-top-30"),
                                    n(l, 4, 0, "" != (null == l.context.$implicit ? null : l.context.$implicit.page_link)),
                                    n(l, 6, 0, "" == (null == l.context.$implicit ? null : l.context.$implicit.page_link))
                            }, null)
        }
        function ol(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 3, "div", [["class", "methodology-pages"]], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 2, "div", [["class", "row"]], null, null, null, null, null)), (n()(),
                        t["\u0275and"](16777216, null, null, 1, null, il)), t["\u0275did"](3, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                            ngForOf: [0, "ngForOf"]
                        }, null)], function (n, l) {
                            n(l, 3, 0, null == l.parent.parent.context.$implicit ? null : l.parent.parent.context.$implicit.section_feature_list)
                        }, null)
        }
        function ul(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 7, "a", [["class", "page-link-col"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (n, l, e) {
                    var i = !0;
                    return "click" === l && (i = !1 !== t["\u0275nov"](n, 1).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && i),
                        i
                }, null, null)), t["\u0275did"](1, 671744, null, 0, a.o, [a.m, a.a, c.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (n()(),
                    t["\u0275eld"](2, 0, null, null, 5, "div", [["class", "pages-link"]], null, null, null, null, null)), (n()(),
                        t["\u0275eld"](3, 0, null, null, 0, "img", [["class", "svg-convert"]], [[8, "src", 4]], [[null, "load"]], function (n, l, e) {
                            var t = !0;
                            return "load" === l && (t = !1 !== n.component.commonService.callSVGConverterScript(1, 0) && t),
                                t
                        }, null, null)), (n()(),
                            t["\u0275eld"](4, 0, null, null, 1, "h4", [], null, null, null, null, null)), (n()(),
                                t["\u0275ted"](5, null, ["", ""])), (n()(),
                                    t["\u0275eld"](6, 0, null, null, 1, "p", [], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275ppd"](7, 1)], function (n, l) {
                                        n(l, 1, 0, "/" + l.component.commonService.replaceRootURLToBlank(null == l.parent.context.$implicit ? null : l.parent.context.$implicit.page_link))
                                    }, function (n, l) {
                                        n(l, 0, 0, t["\u0275nov"](l, 1).target, t["\u0275nov"](l, 1).href),
                                            n(l, 3, 0, null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.image ? null : l.parent.context.$implicit.image.url),
                                            n(l, 5, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.title);
                                        var e = t["\u0275unv"](l, 6, 0, n(l, 7, 0, t["\u0275nov"](l.parent.parent.parent.parent.parent.parent, 0), null == l.parent.context.$implicit ? null : l.parent.context.$implicit.description));
                                        n(l, 6, 0, e)
                                    })
        }
        function cl(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 6, "a", [["class", "page-link-col"], ["href", "#"]], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 5, "div", [["class", "pages-link"]], null, null, null, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 0, "img", [["class", "svg-convert"]], [[8, "src", 4]], [[null, "load"]], function (n, l, e) {
                            var t = !0;
                            return "load" === l && (t = !1 !== n.component.commonService.callSVGConverterScript(1, 0) && t),
                                t
                        }, null, null)), (n()(),
                            t["\u0275eld"](3, 0, null, null, 1, "h4", [], null, null, null, null, null)), (n()(),
                                t["\u0275ted"](4, null, ["", ""])), (n()(),
                                    t["\u0275eld"](5, 0, null, null, 1, "p", [], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275ppd"](6, 1)], null, function (n, l) {
                                        n(l, 2, 0, null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.image ? null : l.parent.context.$implicit.image.url),
                                            n(l, 4, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.title);
                                        var e = t["\u0275unv"](l, 5, 0, n(l, 6, 0, t["\u0275nov"](l.parent.parent.parent.parent.parent.parent, 0), null == l.parent.context.$implicit ? null : l.parent.context.$implicit.description));
                                        n(l, 5, 0, e)
                                    })
        }
        function al(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 6, null, null, null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 5, "div", [], null, null, null, null, null)), t["\u0275did"](2, 278528, null, 0, c.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                        ngClass: [0, "ngClass"]
                    }, null), (n()(),
                        t["\u0275and"](16777216, null, null, 1, null, ul)), t["\u0275did"](4, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                            ngIf: [0, "ngIf"]
                        }, null), (n()(),
                            t["\u0275and"](16777216, null, null, 1, null, cl)), t["\u0275did"](6, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                ngIf: [0, "ngIf"]
                            }, null)], function (n, l) {
                                n(l, 2, 0, (null == l.context.$implicit ? null : l.context.$implicit.section_class) + " col-12 col-md-6 col-lg-4 mr-top-30"),
                                    n(l, 4, 0, "" != (null == l.context.$implicit ? null : l.context.$implicit.page_link)),
                                    n(l, 6, 0, "" == (null == l.context.$implicit ? null : l.context.$implicit.page_link))
                            }, null)
        }
        function rl(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 3, "div", [["class", "methodology-pages"]], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 2, "div", [["class", "row"]], null, null, null, null, null)), (n()(),
                        t["\u0275and"](16777216, null, null, 1, null, al)), t["\u0275did"](3, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                            ngForOf: [0, "ngForOf"]
                        }, null)], function (n, l) {
                            n(l, 3, 0, null == l.parent.parent.context.$implicit ? null : l.parent.parent.context.$implicit.section_feature_list)
                        }, null)
        }
        function pl(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 11, null, null, null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 10, "section", [["class", "our-methodology-sec cmn-pad-50"]], null, null, null, null, null)), (n()(),
                        t["\u0275eld"](2, 0, null, null, 9, "div", [["class", "container"]], null, null, null, null, null)), (n()(),
                            t["\u0275eld"](3, 0, null, null, 4, "div", [["class", "methodology-title text-center"]], null, null, null, null, null)), (n()(),
                                t["\u0275eld"](4, 0, null, null, 1, "h6", [], null, null, null, null, null)), (n()(),
                                    t["\u0275ted"](5, null, ["", ""])), (n()(),
                                        t["\u0275eld"](6, 0, null, null, 1, "h2", [], null, null, null, null, null)), (n()(),
                                            t["\u0275ted"](7, null, ["", ""])), (n()(),
                                                t["\u0275and"](16777216, null, null, 1, null, ol)), t["\u0275did"](9, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                    ngIf: [0, "ngIf"]
                                                }, null), (n()(),
                                                    t["\u0275and"](16777216, null, null, 1, null, rl)), t["\u0275did"](11, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                        ngIf: [0, "ngIf"]
                                                    }, null)], function (n, l) {
                                                        n(l, 9, 0, (null == l.parent.context.$implicit ? null : l.parent.context.$implicit.section_feature_list.length) % 2 == 0),
                                                            n(l, 11, 0, (null == l.parent.context.$implicit ? null : l.parent.context.$implicit.section_feature_list.length) % 2 == 1)
                                                    }, function (n, l) {
                                                        n(l, 5, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.section_sub_title),
                                                            n(l, 7, 0, null == l.parent.context.$implicit ? null : l.parent.context.$implicit.section_title)
                                                    })
        }
        function gl(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 48, null, null, null, null, null, null, null)), (n()(),
                    t["\u0275and"](16777216, null, null, 1, null, P)), t["\u0275did"](2, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                        ngIf: [0, "ngIf"]
                    }, null), (n()(),
                        t["\u0275and"](16777216, null, null, 1, null, v)), t["\u0275did"](4, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                            ngIf: [0, "ngIf"]
                        }, null), (n()(),
                            t["\u0275and"](16777216, null, null, 1, null, k)), t["\u0275did"](6, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                ngIf: [0, "ngIf"]
                            }, null), (n()(),
                                t["\u0275and"](16777216, null, null, 1, null, I)), t["\u0275did"](8, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                    ngIf: [0, "ngIf"]
                                }, null), (n()(),
                                    t["\u0275and"](16777216, null, null, 1, null, q)), t["\u0275did"](10, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                        ngIf: [0, "ngIf"]
                                    }, null), (n()(),
                                        t["\u0275and"](16777216, null, null, 1, null, K)), t["\u0275did"](12, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                            ngIf: [0, "ngIf"]
                                        }, null), (n()(),
                                            t["\u0275and"](16777216, null, null, 1, null, B)), t["\u0275did"](14, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                ngIf: [0, "ngIf"]
                                            }, null), (n()(),
                                                t["\u0275and"](16777216, null, null, 1, null, G)), t["\u0275did"](16, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                    ngIf: [0, "ngIf"]
                                                }, null), (n()(),
                                                    t["\u0275and"](16777216, null, null, 1, null, Y)), t["\u0275did"](18, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                        ngIf: [0, "ngIf"]
                                                    }, null), (n()(),
                                                        t["\u0275and"](16777216, null, null, 1, null, J)), t["\u0275did"](20, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                            ngIf: [0, "ngIf"]
                                                        }, null), (n()(),
                                                            t["\u0275and"](16777216, null, null, 1, null, cn)), t["\u0275did"](22, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                ngIf: [0, "ngIf"]
                                                            }, null), (n()(),
                                                                t["\u0275and"](16777216, null, null, 1, null, pn)), t["\u0275did"](24, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                    ngIf: [0, "ngIf"]
                                                                }, null), (n()(),
                                                                    t["\u0275and"](16777216, null, null, 1, null, mn)), t["\u0275did"](26, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                        ngIf: [0, "ngIf"]
                                                                    }, null), (n()(),
                                                                        t["\u0275and"](16777216, null, null, 1, null, xn)), t["\u0275did"](28, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                            ngIf: [0, "ngIf"]
                                                                        }, null), (n()(),
                                                                            t["\u0275and"](16777216, null, null, 1, null, Pn)), t["\u0275did"](30, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                                ngIf: [0, "ngIf"]
                                                                            }, null), (n()(),
                                                                                t["\u0275and"](16777216, null, null, 1, null, In)), t["\u0275did"](32, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                                    ngIf: [0, "ngIf"]
                                                                                }, null), (n()(),
                                                                                    t["\u0275and"](16777216, null, null, 1, null, Ln)), t["\u0275did"](34, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                                        ngIf: [0, "ngIf"]
                                                                                    }, null), (n()(),
                                                                                        t["\u0275and"](16777216, null, null, 1, null, qn)), t["\u0275did"](36, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                                            ngIf: [0, "ngIf"]
                                                                                        }, null), (n()(),
                                                                                            t["\u0275and"](16777216, null, null, 1, null, Dn)), t["\u0275did"](38, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                                                ngIf: [0, "ngIf"]
                                                                                            }, null), (n()(),
                                                                                                t["\u0275and"](16777216, null, null, 1, null, Kn)), t["\u0275did"](40, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                                                    ngIf: [0, "ngIf"]
                                                                                                }, null), (n()(),
                                                                                                    t["\u0275and"](16777216, null, null, 1, null, jn)), t["\u0275did"](42, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                                                        ngIf: [0, "ngIf"]
                                                                                                    }, null), (n()(),
                                                                                                        t["\u0275and"](16777216, null, null, 1, null, Jn)), t["\u0275did"](44, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                                                            ngIf: [0, "ngIf"]
                                                                                                        }, null), (n()(),
                                                                                                            t["\u0275and"](16777216, null, null, 1, null, ll)), t["\u0275did"](46, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                                                                ngIf: [0, "ngIf"]
                                                                                                            }, null), (n()(),
                                                                                                                t["\u0275and"](16777216, null, null, 1, null, pl)), t["\u0275did"](48, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                                                                    ngIf: [0, "ngIf"]
                                                                                                                }, null), (n()(),
                                                                                                                    t["\u0275and"](0, null, null, 0))], function (n, l) {
                                                                                                                        var e = l.component;
                                                                                                                        n(l, 2, 0, "banner" == (null == l.context.$implicit ? null : l.context.$implicit.acf_fc_layout) && "gradient" == (null == l.context.$implicit ? null : l.context.$implicit.image_position)),
                                                                                                                            n(l, 4, 0, "show_why_indianic_section" == (null == l.context.$implicit ? null : l.context.$implicit.acf_fc_layout)),
                                                                                                                            n(l, 6, 0, "banner" == (null == l.context.$implicit ? null : l.context.$implicit.acf_fc_layout) && "center" == (null == l.context.$implicit ? null : l.context.$implicit.image_position)),
                                                                                                                            n(l, 8, 0, "banner" == (null == l.context.$implicit ? null : l.context.$implicit.acf_fc_layout) && "right" == (null == l.context.$implicit ? null : l.context.$implicit.image_position)),
                                                                                                                            n(l, 10, 0, "banner" == (null == l.context.$implicit ? null : l.context.$implicit.acf_fc_layout)),
                                                                                                                            n(l, 12, 0, "our_hiring_models_module" == (null == l.context.$implicit ? null : l.context.$implicit.acf_fc_layout)),
                                                                                                                            n(l, 14, 0, "why_indianic_module" == (null == l.context.$implicit ? null : l.context.$implicit.acf_fc_layout)),
                                                                                                                            n(l, 16, 0, "proven_track_records_module" == (null == l.context.$implicit ? null : l.context.$implicit.acf_fc_layout) && 1 == l.context.$implicit.proven_track_records_module),
                                                                                                                            n(l, 18, 0, "approach" == (null == l.context.$implicit ? null : l.context.$implicit.acf_fc_layout)),
                                                                                                                            n(l, 20, 0, "what_we_do" == (null == l.context.$implicit ? null : l.context.$implicit.acf_fc_layout)),
                                                                                                                            n(l, 22, 0, "technology_expertise_section" == (null == l.context.$implicit ? null : l.context.$implicit.acf_fc_layout)),
                                                                                                                            n(l, 24, 0, "capabilities" == (null == l.context.$implicit ? null : l.context.$implicit.acf_fc_layout)),
                                                                                                                            n(l, 26, 0, "indianic_services_module" == (null == l.context.$implicit ? null : l.context.$implicit.acf_fc_layout) && 1 == l.context.$implicit.indianic_services_module),
                                                                                                                            n(l, 28, 0, "show_services_solutions_module" == (null == l.context.$implicit ? null : l.context.$implicit.acf_fc_layout) && 1 == (null == l.context.$implicit ? null : l.context.$implicit.show_services_solutions_module)),
                                                                                                                            n(l, 30, 0, "hiring_technologies_module" == (null == l.context.$implicit ? null : l.context.$implicit.acf_fc_layout)),
                                                                                                                            n(l, 32, 0, "show_trusted_brands_module" == (null == l.context.$implicit ? null : l.context.$implicit.acf_fc_layout) && 1 == (null == l.context.$implicit ? null : l.context.$implicit.show_trusted_brands_module)),
                                                                                                                            n(l, 34, 0, "our_work" == (null == l.context.$implicit ? null : l.context.$implicit.acf_fc_layout)),
                                                                                                                            n(l, 36, 0, "show_success_stories" == (null == l.context.$implicit ? null : l.context.$implicit.acf_fc_layout) && 1 == (null == l.context.$implicit ? null : l.context.$implicit.show_success_stories_on_page)),
                                                                                                                            n(l, 38, 0, (null == e.pagedata[0] ? null : null == e.pagedata[0].acf ? null : e.pagedata[0].acf.show_portfolio_form) && "show_request_a_quote_section" == (null == l.context.$implicit ? null : l.context.$implicit.acf_fc_layout)),
                                                                                                                            n(l, 40, 0, "faqs_section" == (null == l.context.$implicit ? null : l.context.$implicit.acf_fc_layout)),
                                                                                                                            n(l, 42, 0, "main_menu_banner_section" == (null == l.context.$implicit ? null : l.context.$implicit.acf_fc_layout)),
                                                                                                                            n(l, 44, 0, "center_content_with_image_section" == (null == l.context.$implicit ? null : l.context.$implicit.acf_fc_layout)),
                                                                                                                            n(l, 46, 0, "three_column_section_with_background_image" == (null == l.context.$implicit ? null : l.context.$implicit.acf_fc_layout)),
                                                                                                                            n(l, 48, 0, "approach_section" == (null == l.context.$implicit ? null : l.context.$implicit.acf_fc_layout))
                                                                                                                    }, null)
        }
        function sl(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 5, "li", [], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 4, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (n, l, e) {
                        var i = !0;
                        return "click" === l && (i = !1 !== t["\u0275nov"](n, 2).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && i),
                            i
                    }, null, null)), t["\u0275did"](2, 671744, null, 0, a.o, [a.m, a.a, c.LocationStrategy], {
                        routerLink: [0, "routerLink"]
                    }, null), (n()(),
                        t["\u0275eld"](3, 0, null, null, 0, "span", [["class", "bullets"]], null, null, null, null, null)), (n()(),
                            t["\u0275eld"](4, 0, null, null, 1, "span", [["class", "page-name"]], null, null, null, null, null)), (n()(),
                                t["\u0275ted"](5, null, ["", ""]))], function (n, l) {
                                    var e = l.component;
                                    n(l, 2, 0, "/" + e.commonService.replaceRootURLToBlank(null == e.pagedata[0] ? null : null == e.pagedata[0].acf ? null : e.pagedata[0].acf.bc_page_link))
                                }, function (n, l) {
                                    var e = l.component;
                                    n(l, 1, 0, t["\u0275nov"](l, 2).target, t["\u0275nov"](l, 2).href),
                                        n(l, 5, 0, null == e.pagedata[0] ? null : null == e.pagedata[0].acf ? null : e.pagedata[0].acf.bc_page_name)
                                })
        }
        function ml(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 5, "li", [], null, null, null, null, null)), (n()(),
                    t["\u0275eld"](1, 0, null, null, 4, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (n, l, e) {
                        var i = !0;
                        return "click" === l && (i = !1 !== t["\u0275nov"](n, 2).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && i),
                            i
                    }, null, null)), t["\u0275did"](2, 671744, null, 0, a.o, [a.m, a.a, c.LocationStrategy], {
                        routerLink: [0, "routerLink"]
                    }, null), (n()(),
                        t["\u0275eld"](3, 0, null, null, 0, "span", [["class", "bullets"]], null, null, null, null, null)), (n()(),
                            t["\u0275eld"](4, 0, null, null, 1, "span", [["class", "page-name"]], null, null, null, null, null)), (n()(),
                                t["\u0275ted"](-1, null, ["Technology"]))], function (n, l) {
                                    n(l, 2, 0, "/technology")
                                }, function (n, l) {
                                    n(l, 1, 0, t["\u0275nov"](l, 2).target, t["\u0275nov"](l, 2).href)
                                })
        }
        function dl(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 25, null, null, null, null, null, null, null)), (n()(),
                    t["\u0275and"](16777216, null, null, 1, null, gl)), t["\u0275did"](2, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                        ngForOf: [0, "ngForOf"]
                    }, null), (n()(),
                        t["\u0275eld"](3, 0, null, null, 22, "div", [["class", "breadcrums-sec"]], null, null, null, null, null)), (n()(),
                            t["\u0275eld"](4, 0, null, null, 4, "div", [["class", "breadcrum-btn"]], null, null, null, null, null)), (n()(),
                                t["\u0275eld"](5, 0, null, null, 0, "img", [["class", "navigate-arrow nav-arrow-black"], ["src", "assets/images/navigate-arrow.svg"]], null, null, null, null, null)), (n()(),
                                    t["\u0275eld"](6, 0, null, null, 0, "img", [["class", "navigate-arrow nav-arrow-white"], ["src", "assets/images/navigate-arrow-white.svg"]], null, null, null, null, null)), (n()(),
                                        t["\u0275eld"](7, 0, null, null, 1, "span", [["class", "navigate"]], null, null, null, null, null)), (n()(),
                                            t["\u0275ted"](-1, null, ["Navigate"])), (n()(),
                                                t["\u0275eld"](9, 0, null, null, 16, "div", [["class", "breadcrum-box"]], null, null, null, null, null)), (n()(),
                                                    t["\u0275eld"](10, 0, null, null, 15, "div", [["class", "breadcrum-list"]], null, null, null, null, null)), (n()(),
                                                        t["\u0275eld"](11, 0, null, null, 14, "ul", [], null, null, null, null, null)), (n()(),
                                                            t["\u0275eld"](12, 0, null, null, 4, "li", [["class", "disable"]], null, null, null, null, null)), (n()(),
                                                                t["\u0275eld"](13, 0, null, null, 0, "span", [["class", "bullets"]], null, null, null, null, null)), (n()(),
                                                                    t["\u0275eld"](14, 0, null, null, 2, "span", [["class", "page-name"]], null, null, null, null, null)), (n()(),
                                                                        t["\u0275ted"](15, null, ["", ""])), t["\u0275ppd"](16, 1), (n()(),
                                                                            t["\u0275and"](16777216, null, null, 1, null, sl)), t["\u0275did"](18, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                                ngIf: [0, "ngIf"]
                                                                            }, null), (n()(),
                                                                                t["\u0275and"](16777216, null, null, 1, null, ml)), t["\u0275did"](20, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                                                    ngIf: [0, "ngIf"]
                                                                                }, null), (n()(),
                                                                                    t["\u0275eld"](21, 0, null, null, 4, "li", [["class", "home"]], null, null, null, null, null)), (n()(),
                                                                                        t["\u0275eld"](22, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (n, l, e) {
                                                                                            var i = !0;
                                                                                            return "click" === l && (i = !1 !== t["\u0275nov"](n, 23).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && i),
                                                                                                i
                                                                                        }, null, null)), t["\u0275did"](23, 671744, null, 0, a.o, [a.m, a.a, c.LocationStrategy], {
                                                                                            routerLink: [0, "routerLink"]
                                                                                        }, null), (n()(),
                                                                                            t["\u0275eld"](24, 0, null, null, 0, "span", [["class", "bullets"]], null, null, null, null, null)), (n()(),
                                                                                                t["\u0275eld"](25, 0, null, null, 0, "img", [["class", "home-icon svg-convert"], ["src", "assets/images/navigate-home-icon.svg"]], null, null, null, null, null))], function (n, l) {
                                                                                                    var e = l.component;
                                                                                                    n(l, 2, 0, null == e.pagedata[0] ? null : null == e.pagedata[0].acf ? null : e.pagedata[0].acf.technology_service_landing_page),
                                                                                                        n(l, 18, 0, null == e.pagedata[0] ? null : null == e.pagedata[0].acf ? null : e.pagedata[0].acf.bc_page_name),
                                                                                                        n(l, 20, 0, 0 != (null == e.pagedata[0] ? null : e.pagedata[0].parent)),
                                                                                                        n(l, 23, 0, "/")
                                                                                                }, function (n, l) {
                                                                                                    var e = l.component
                                                                                                        , i = t["\u0275unv"](l, 15, 0, n(l, 16, 0, t["\u0275nov"](l.parent, 1), null == e.pagedata[0] ? null : null == e.pagedata[0].title ? null : e.pagedata[0].title.rendered));
                                                                                                    n(l, 15, 0, i),
                                                                                                        n(l, 22, 0, t["\u0275nov"](l, 23).target, t["\u0275nov"](l, 23).href)
                                                                                                })
        }
        function _l(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 1, "app-bottom-form", [], null, [[null, "click"], ["window", "scroll"]], function (n, l, e) {
                    var i = !0;
                    return "click" === l && (i = !1 !== t["\u0275nov"](n, 1).onClick(e) && i),
                        "window:scroll" === l && (i = !1 !== t["\u0275nov"](n, 1).checkScroll() && i),
                        i
                }, r.b, r.a)), t["\u0275did"](1, 4308992, null, 0, p.a, [t.Injector, a.a], {
                    showPortfolioForm: [0, "showPortfolioForm"],
                    showForm: [1, "showForm"],
                    isService: [2, "isService"],
                    show_enquiry_form_heading: [3, "show_enquiry_form_heading"],
                    enquiry_form_heading: [4, "enquiry_form_heading"],
                    enquiry_form_sub_heading: [5, "enquiry_form_sub_heading"]
                }, null)], function (n, l) {
                    var e = l.component;
                    n(l, 1, 0, null == e.pagedata[0] ? null : null == e.pagedata[0].acf ? null : e.pagedata[0].acf.show_portfolio_form, null == e.pagedata[0] ? null : null == e.pagedata[0].acf ? null : e.pagedata[0].acf.select_form_to_display, e.servicePage, null == e.pagedata[0] ? null : null == e.pagedata[0].acf ? null : e.pagedata[0].acf.show_form_heading, null == e.pagedata[0] ? null : null == e.pagedata[0].acf ? null : e.pagedata[0].acf.heading, null == e.pagedata[0] ? null : null == e.pagedata[0].acf ? null : e.pagedata[0].acf.sub_heading)
                }, null)
        }
        function fl(n) {
            return t["\u0275vid"](0, [t["\u0275pid"](0, g.c, [s.c]), t["\u0275pid"](0, g.d, []), (n()(),
                t["\u0275eld"](2, 0, null, null, 10, null, null, null, null, null, null, null)), (n()(),
                    t["\u0275eld"](3, 0, null, null, 7, "div", [["class", "cbp-spmenu-push"], ["id", "wrapper"]], null, null, null, null, null)), (n()(),
                        t["\u0275eld"](4, 0, null, null, 0, "link", [["async", ""], ["rel", "stylesheet"]], [[8, "href", 5]], null, null, null, null)), (n()(),
                            t["\u0275eld"](5, 0, null, null, 0, "link", [["async", ""], ["rel", "stylesheet"]], [[8, "href", 5]], null, null, null, null)), (n()(),
                                t["\u0275eld"](6, 0, null, null, 0, "link", [["async", ""], ["rel", "stylesheet"]], [[8, "href", 5]], null, null, null, null)), (n()(),
                                    t["\u0275eld"](7, 0, null, null, 3, "div", [["data-height", "330"]], null, null, null, null, null)), t["\u0275did"](8, 278528, null, 0, c.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                                        ngClass: [0, "ngClass"]
                                    }, null), (n()(),
                                        t["\u0275and"](16777216, null, null, 1, null, dl)), t["\u0275did"](10, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                            ngIf: [0, "ngIf"]
                                        }, null), (n()(),
                                            t["\u0275and"](16777216, null, null, 1, null, _l)), t["\u0275did"](12, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                                                ngIf: [0, "ngIf"]
                                            }, null)], function (n, l) {
                                                var e = l.component;
                                                n(l, 8, 0, e.commonService.IsDarkMode ? "title_outer title_without_animation with_image insert-remove-container black-white-theme theme-black" : "title_outer title_without_animation with_image insert-remove-container black-white-theme theme-white"),
                                                    n(l, 10, 0, e.pagedata),
                                                    n(l, 12, 0, e.isBrowser && e.pagedata)
                                            }, function (n, l) {
                                                var e = l.component;
                                                n(l, 4, 0, e.style2),
                                                    n(l, 5, 0, e.style3),
                                                    n(l, 6, 0, e.intlTelInput)
                                            })
        }
        function xl(n) {
            return t["\u0275vid"](0, [(n()(),
                t["\u0275eld"](0, 0, null, null, 1, "app-services", [], null, [[null, "click"], ["window", "scroll"]], function (n, l, e) {
                    var i = !0;
                    return "click" === l && (i = !1 !== t["\u0275nov"](n, 1).onClick(e) && i),
                        "window:scroll" === l && (i = !1 !== t["\u0275nov"](n, 1).checkScroll() && i),
                        i
                }, fl, b)), t["\u0275did"](1, 4308992, null, 0, f, [s.c, t.Injector, a.a, _.a, x.b], null, null)], function (n, l) {
                    n(l, 1, 0)
                }, null)
        }
        var bl = t["\u0275ccf"]("app-services", f, xl, {}, {}, [])
            , hl = e("gIcY")
            , Cl = e("z0F3")
            , Ol = function () {
                return function () { }
            }()
            , Ml = e("UOu5");
        e.d(l, "ServicesModuleNgFactory", function () {
            return Pl
        });
        var Pl = t["\u0275cmf"](i, [], function (n) {
            return t["\u0275mod"]([t["\u0275mpd"](512, t.ComponentFactoryResolver, t["\u0275CodegenComponentFactoryResolver"], [[8, [o.a, bl]], [3, t.ComponentFactoryResolver], t.NgModuleRef]), t["\u0275mpd"](4608, c.NgLocalization, c.NgLocaleLocalization, [t.LOCALE_ID, [2, c["\u0275angular_packages_common_common_a"]]]), t["\u0275mpd"](4608, hl.t, hl.t, []), t["\u0275mpd"](4608, Cl.i, Cl.i, [t.PLATFORM_ID, [2, Cl.b], [2, Cl.a], [2, Cl.c]]), t["\u0275mpd"](1073742336, c.CommonModule, c.CommonModule, []), t["\u0275mpd"](1073742336, a.p, a.p, [[2, a.v], [2, a.m]]), t["\u0275mpd"](1073742336, Ol, Ol, []), t["\u0275mpd"](1073742336, hl.r, hl.r, []), t["\u0275mpd"](1073742336, hl.d, hl.d, []), t["\u0275mpd"](1073742336, Cl.l, Cl.l, []), t["\u0275mpd"](1073742336, Cl.j, Cl.j, []), t["\u0275mpd"](1073742336, u.b, u.b, []), t["\u0275mpd"](1073742336, Ml.a, Ml.a, []), t["\u0275mpd"](1073742336, g.a, g.a, []), t["\u0275mpd"](1073742336, i, i, []), t["\u0275mpd"](1024, a.k, function () {
                return [[{
                    path: "",
                    component: f
                }]]
            }, []), t["\u0275mpd"](256, "options", {
                preset: u.c
            }, [])])
        })
    }
}]);






(window.webpackJsonp = window.webpackJsonp || []).push([[5], {
    L6id: function (n, t, l) {
        "use strict";
        l.r(t);
        var e = l("CcnG")
            , o = function () {
                return function () { }
            }()
            , i = l("pMnS")
            , c = l("ZYCi")
            , u = l("Ip0R")
            , a = l("JbCa")
            , r = l("XpAg")
            , s = l("UuUw")
            , g = l("maxO")
            , p = l("ZYjt")
            , d = l("mrSG")
            , m = l("EVdn")
            , _ = l("agoJ")
            , h = l("QSRU")
            , f = l("ABfF")
            , b = function (n) {
                function t(t, l, e, o, i, c) {
                    var u = n.call(this, e) || this;
                    return u.sanitizer = t,
                        u.route = l,
                        u.injector = e,
                        u.deviceService = o,
                        u.platform = i,
                        u.meta = c,
                        u.slug = "",
                        u.showClass = !1,
                        u.clickedUnderstand = !1,
                        u.now = new Date,
                        u.animationSpeed = 1.5,
                        u.isFirstScreenLoaded = !1,
                        u.isPageLoaderLottie = !0,
                        u.config = f.a,
                        u.isWebpSupport = !0,
                        u.isVideo = !1,
                        u.hideInMobile = !1,
                        u.getVideoHeightFlag = !0,
                        u.pagedata = [],
                        u.style1 = u.sanitizer.bypassSecurityTrustResourceUrl("../../assets/css/style.css"),
                        u.slick = u.sanitizer.bypassSecurityTrustResourceUrl("../../assets/css/landing_pages_css/slick.css" + u.commonService.versionName),
                        u.owl = u.sanitizer.bypassSecurityTrustResourceUrl("../../assets/css/owl.carousel.min.css" + u.commonService.versionName),
                        u.fancyBox = u.sanitizer.bypassSecurityTrustResourceUrl("../../assets/css/landing_pages_css/jquery.fancybox.min.css" + u.commonService.versionName),
                        u.lottieConfigLight = {
                            path: "/assets/images/lottie/home_lotti_light.json",
                            renderer: "canvas",
                            autoplay: !0,
                            loop: !0
                        },
                        u.lottieConfigDark = {
                            path: "/assets/images/lottie/home_lotti_dark.json",
                            renderer: "canvas",
                            autoplay: !0,
                            loop: !0
                        },
                        u.pageLoaderLottieConfig = {
                            path: "/assets/images/lottie/home-loader.json",
                            renderer: "canvas",
                            autoplay: !0,
                            loop: !0
                        },
                        u
                }
                return Object(d.c)(t, n),
                    t.prototype.handleAnimation = function (n) {
                        this.anim = n,
                            this.animationSpeed = this.animationSpeed,
                            this.anim.setSpeed(this.animationSpeed)
                    }
                    ,
                    t.prototype.setSpeed = function (n) {
                        this.animationSpeed = n,
                            this.anim.setSpeed(n)
                    }
                    ,
                    t.prototype.ngOnInit = function () {
                        var n = this;
                        this.isMobile = this.deviceService.isMobile(),
                            this.isBrowser() ? (this.getBrowser() || (this.isWebpSupport = !1),
                                setTimeout(function () {
                                    m.getScript("assets/js/jquery.marquee.min.js" + n.commonService.versionName)
                                }, 2e3)) : this.isMobile ? this.hideInMobile = !1 : (this.hideInMobile = !0,
                                    this.getRemainingHomeContent()),
                            this.commonService.callApi("wp/v2/welcome-landing", {}, "get", !1, !0).then(function (t) {
                                n.isBrowser() && (m(".preloader").hide(),
                                    window.scrollTo(0, 0)),
                                    t && t.length ? n.meta.updateMeta(t[0].yoast_meta, t[0].link) : n.router.navigate(["/not_found"]),
                                    n.welcomeContent = t[0]
                            }),
                            this.showModal = !1
                    }
                    ,
                    t.prototype.homeScroll = function () {
                        this.isFirstScreenLoaded || (this.getRemainingHomeContent(),
                            this.isFirstScreenLoaded = !0),
                            this.deviceService.isMobile() || this.deviceService.isTablet() || !this.isVideo || this.minimizeVideo()
                    }
                    ,
                    t.prototype.isOutOfViewport = function (n) {
                        if (this.isBrowser())
                            return m(window).scrollTop() > m(n).offset().top + m(n).outerHeight() - this.getVideoHeight
                    }
                    ,
                    t.prototype.minimizeVideo = function () {
                        if (this.isBrowser()) {
                            var n = m(".home-video-section");
                            this.getVideoHeightFlag ? this.getVideoHeight = m(".home-video-section").height() : this.getVideoHeightFlag = !1,
                                this.isOutOfViewport(".discovery-process-section") ? (m(".home-video-float-section").height(this.getVideoHeight),
                                    n.addClass("video-scroll")) : (n.removeClass("video-scroll"),
                                        m(".home-video-float-section").height(0)),
                                this.getVideoHeightFlag = !1
                        }
                    }
                    ,
                    t.prototype.maximiseVideo = function () {
                        if (this.isBrowser()) {
                            var n = document.querySelector("video")
                                , t = m(window)
                                , l = t.pageXOffset || document.documentElement.scrollLeft
                                , e = t.pageYOffset || document.documentElement.scrollTop;
                            n.requestFullscreen(),
                                document.addEventListener("fullscreenchange", function (n) {
                                    document.fullscreenEnabled && window.scrollTo(l, e)
                                })
                        }
                    }
                    ,
                    t.prototype.playPauseHomeVideo = function (n) {
                        this.isBrowser() && ("stop" === n ? this.isVideo = !1 : (this.isVideo = !0,
                            m("video").attr("paused", !1)))
                    }
                    ,
                    t.prototype.toggleVideo = function (n) {
                        this.videoplayer.paused ? this.videoplayer.play() : this.videoplayer.pause(),
                            !document.URL.includes("blog") && window
                    }
                    ,
                    t.prototype.getRemainingHomeContent = function () {
                        var n = this;
                        this.route.params && this.route.paramMap.subscribe(function (t) {
                            n.slug = n.route.snapshot.params.slug,
                                n.slug || (n.slug = "home-landing"),
                                n.commonService.callApi("wp/v2/pages/?slug=" + n.slug, {}, "get", !1, !0).then(function (t) {
                                    t && t.length ? n.meta.updateMeta(t[0].yoast_meta, t[0].link) : n.router.navigate(["/not_found"]),
                                        n.pagedata = t[0].acf.landing_content,
                                        n.isPageLoaderLottie = !1,
                                        n.isBrowser() && n.commonService.AddMyPageData(document.URL, n.slug);
                                    for (var l = 0, e = n.pagedata; l < e.length; l++) {
                                        var o = e[l];
                                        "home_page_jugaad_section" == o.acf_fc_layout && (n.iframeSrc = o.home_page_jugaad_video_url),
                                            "show_clients_on_home_page" == o.acf_fc_layout && o.show_clients_on_home_page ? n.commonService.callApi("wp/v2/client-settings/", {}, "get", !1, !0).then(function (t) {
                                                n.clientTestimonialVideos = t.acf,
                                                    Object(u.isPlatformBrowser)(n.platform) && (m.getScript("assets/js/homepage.js" + n.commonService.versionName),
                                                        m.getScript("assets/js/landing_page_js/jquery.fancybox.min.js" + n.commonService.versionName))
                                            }) : Object(u.isPlatformBrowser)(n.platform),
                                            "show_portfolio_on_home_page" == o.acf_fc_layout && o.show_portfolio_on_home_page && n.commonService.callApi("wp/v2/portfolio-settings/", {}, "get", !1, !0).then(function (t) {
                                                n.caseStudies = t.acf
                                            }),
                                            "show_technologies_tabbing" == o.acf_fc_layout && o.show_technologies_tabbing && n.commonService.callApi("wp/v2/technology-settings/", {}, "get", !1, !0).then(function (t) {
                                                n.technologiesList = t.acf,
                                                    n.technologiesList.technologies_types.length > 0 && n.filterTechnologyData(n.technologiesList.technologies_types[0].class)
                                            })
                                    }
                                    Object(u.isPlatformBrowser)(n.platform) && setTimeout(function () {
                                        n.iframeSrc && (setTimeout(function () {
                                            m("<iframe>").attr("id", "ytplayer").attr("frameborder", "0").attr("allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture").attr("src", n.iframeSrc).attr("height", "100%").attr("width", "100%").appendTo("#iframe_div")
                                        }, 3e3),
                                            m(".my_video_btn_onload").addClass("video-btn-play"))
                                    }, 2e3)
                                })
                        })
                    }
                    ,
                    t.prototype.filterTechnologyData = function (n) {
                        this.filterTechnologiesData = this.technologiesList.technologies_details.filter(function (t) {
                            return t.technology_type == n && t
                        })
                    }
                    ,
                    t.prototype.ngAfterViewInit = function () {
                        var n = this;
                        if (this.now = new Date,
                            this.isBrowser())
                            var t = setInterval(function () {
                                n.getToken("country_code") && (clearInterval(t),
                                    n.getPopup())
                            }, 100)
                    }
                    ,
                    t.prototype.getPopup = function () {
                        var n = this;
                        this.commonService.callApi("wp/v2/popup", {}, "get", !1, !0).then(function (t) {
                            n.popUpData = t.popup_content,
                                1 == t.status && Object(u.isPlatformBrowser)(n.platform) && (n.clickedUnderstand = JSON.parse(n.commonService.getToken("understand")),
                                    n.user_current_timestamp = n.commonService.getToken("user_current_time"),
                                    n.user_current_timestamp_30days_validate = n.now.getTime() + 2592e6,
                                    n.user_current_timestamp ? n.user_current_timestamp > n.user_current_timestamp_30days_validate && setTimeout(function () {
                                        n.commonService.setToken("popup", "true"),
                                            n.commonService.setToken("user_current_time", n.now.getTime()),
                                            n.showModal = JSON.parse(n.commonService.getToken("popup")),
                                            n.showClass = !0,
                                            m("body").addClass("modal-open")
                                    }, 1e3) : setTimeout(function () {
                                        n.commonService.setToken("popup", "true"),
                                            n.commonService.setToken("user_current_time", n.now.getTime()),
                                            n.showModal = JSON.parse(n.commonService.getToken("popup")),
                                            n.showClass = !0,
                                            m("body").addClass("modal-open")
                                    }, 1e3))
                        })
                    }
                    ,
                    t.prototype.setBackgroundGradient = function (n, t) {
                        return "linear-gradient(225deg, " + n + " 0%, " + t + " 100%)"
                    }
                    ,
                    t.prototype.setBackgroundGradientServices = function (n, t) {
                        return "linear-gradient(180deg, " + n + " 0%, " + t + " 100%)"
                    }
                    ,
                    t.prototype.understand = function (n) {
                        Object(u.isPlatformBrowser)(this.platform) && m("body").removeClass("modal-open"),
                            this.commonService.setToken("understand", "true"),
                            this.clickedUnderstand = JSON.parse(this.commonService.getToken("understand")),
                            this.showClass = !1
                    }
                    ,
                    t.prototype.FilterurlforJugadvideo = function (n) {
                        return this.sanitizer.bypassSecurityTrustResourceUrl(n)
                    }
                    ,
                    t.prototype.getredirectUrl = function (n) {
                        if (n) {
                            var t = n.split("/");
                            return "/" + t[t.length - 2]
                        }
                    }
                    ,
                    t.prototype.getVideoSrc = function (n) {
                        if (n) {
                            var t = void 0;
                            return null != n.match(/\.(jpeg)$/) && (t = n.split(".jpeg")),
                                null != n.match(/\.(jpg)$/) && (t = n.split(".jpg")),
                                null != n.match(/\.(png)$/) && (t = n.split(".png")),
                                this.getBrowser() ? t[0] + ".webp" : n
                        }
                    }
                    ,
                    t.prototype.getBrowser = function () {
                        if (this.isBrowser())
                            return -1 != navigator.userAgent.indexOf("Chrome") || -1 != navigator.userAgent.indexOf("Firefox")
                    }
                    ,
                    t.prototype.removeCss = function () {
                        Object(u.isPlatformBrowser)(this.platform) && m("body").removeClass("modal-open")
                    }
                    ,
                    t
            }(h.a)
            , C = l("5Ccn")
            , x = e["\u0275crt"]({
                encapsulation: 0,
                styles: [['*[_ngcontent-%COMP%]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}body[_ngcontent-%COMP%]{font-family:Poppins,sans-serif}img[_ngcontent-%COMP%]{max-width:100%}li[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{list-style:none;margin:0}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin:0}h1[_ngcontent-%COMP%]{font-size:60px;color:#252b33;font-weight:800;line-height:70px;letter-spacing:-1px}h2[_ngcontent-%COMP%]{font-size:40px;color:#252b33;font-weight:800;line-height:55px;letter-spacing:-.5px}h3[_ngcontent-%COMP%]{font-size:24px;color:#252b33;font-weight:600;line-height:34px}p[_ngcontent-%COMP%]{font-size:16px;color:#252b33;font-weight:400;line-height:28px}a[_ngcontent-%COMP%]{transition:all .3s ease-in-out}a[_ngcontent-%COMP%]:focus{outline:0}.link-button[_ngcontent-%COMP%]{padding:10px 30px;background:#f13c31;color:#fff;font-size:16px;border-radius:30px;border:2px solid #f13c31;font-weight:600;display:inline-block}.link-button[_ngcontent-%COMP%]:hover{background:0 0;color:#f13c31}.button-box[_ngcontent-%COMP%]{margin-top:60px}h2.mrg-b[_ngcontent-%COMP%]{margin-bottom:80px}.home-loader[_ngcontent-%COMP%]{width:200px;margin:0 auto;padding-top:60px}.hero-banner-section[_ngcontent-%COMP%]{height:calc(100vh - 90px)}.hero-banner-section[_ngcontent-%COMP%]   .hero-banner[_ngcontent-%COMP%]{height:calc(100vh - 205px);display:flex;display:-ms-flexbox;align-items:center}.hero-banner-section[_ngcontent-%COMP%]   .hero-banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{width:90%;margin-bottom:30px}.hero-banner-section[_ngcontent-%COMP%]   .hero-banner[_ngcontent-%COMP%]   .top-title[_ngcontent-%COMP%]{font-size:16px;color:#252b33;font-weight:400;line-height:28px;display:block;margin-bottom:16px}.hero-banner-section[_ngcontent-%COMP%]   .hero-banner[_ngcontent-%COMP%]   .button-box[_ngcontent-%COMP%]{margin-top:40px}.hero-banner-section[_ngcontent-%COMP%]   .hero-banner[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{align-items:center}.hero-banner-section[_ngcontent-%COMP%]   .hero-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:inherit}.home-top-sec[_ngcontent-%COMP%]{display:flex;margin-left:-15px;margin-right:-15px}.home-top-sec[_ngcontent-%COMP%]   .col-left-right[_ngcontent-%COMP%]{display:flex;align-items:center;width:50%;padding-left:15px;padding-right:15px}.hero-banner-section[_ngcontent-%COMP%]   .hero-banner[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .main-page-header[_ngcontent-%COMP%]   .page-header-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#252b33;text-decoration:none}.client-logo-listing[_ngcontent-%COMP%]{background-color:#fafafa;padding:25px 0;height:115px;width:100%;overflow:hidden;position:relative;z-index:1}.client-logo-listing[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;align-items:center;height:100%}.client-logo-listing[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:0 50px;display:block}  .client-logo-listing .js-marquee-wrapper:hover ul li span{transition:all .5s linear 0s;-webkit-filter:blur(3px);-moz-filter:blur(3px);-o-filter:blur(3px);-ms-filter:blur(3px);filter:blur(3px)}  .client-logo-listing .js-marquee-wrapper:hover ul li span:hover{-webkit-filter:blur(0);-moz-filter:blur(0);-o-filter:blur(0);-ms-filter:blur(0);filter:blur(0)}  .client-logo-listing .js-marquee-wrapper{display:flex;align-items:center;height:100%}.svg-sprite[_ngcontent-%COMP%]{background-image:url(brand-logo-black-sprite.35c12f64f4aa41d1e471.svg);background-repeat:no-repeat;display:block;height:70px}.theme-black[_ngcontent-%COMP%]   .svg-sprite[_ngcontent-%COMP%]{background-image:url(brand-logo-white-sprite.41aeba7153e4035d29dd.svg)}.svg-sprite.logo-brand-black-oracle[_ngcontent-%COMP%]{background-position:0 0;width:145px}.svg-sprite.logo-brand-black-mtn[_ngcontent-%COMP%]{background-position:-175px 0;width:121px}.svg-sprite.logo-brand-black-mtu[_ngcontent-%COMP%]{background-position:-326px 0;width:114px}.svg-sprite.logo-brand-black-bcg[_ngcontent-%COMP%]{background-position:-470px 0;width:153px}.svg-sprite.logo-brand-black-sanchobbdo[_ngcontent-%COMP%]{background-position:-653px 0;width:119px}.svg-sprite.logo-brand-black-gulfstream[_ngcontent-%COMP%]{background-position:-802px 0;width:150px}.svg-sprite.logo-brand-black-daman[_ngcontent-%COMP%]{background-position:-982px 0;width:82px}.svg-sprite.logo-brand-black-astrazeneca[_ngcontent-%COMP%]{background-position:-1094px 0;width:157px}.svg-sprite.logo-brand-black-vfsglobal[_ngcontent-%COMP%]{background-position:-1281px 0;width:168px}.svg-sprite.logo-brand-black-haas[_ngcontent-%COMP%]{background-position:-1479px 0;width:75px}.svg-sprite.logo-brand-black-tata[_ngcontent-%COMP%]{background-position:-1584px 0;width:74px}.svg-sprite.logo-brand-black-yahoo[_ngcontent-%COMP%]{background-position:-1688px 0;width:116px}.svg-sprite.logo-brand-black-smithfield[_ngcontent-%COMP%]{background-position:-1834px 0;width:154px}.svg-sprite.logo-brand-black-best-buy[_ngcontent-%COMP%]{background-position:-2018px 0;width:86px}.svg-sprite.logo-brand-black-essilor[_ngcontent-%COMP%]{background-position:-2134px 0;width:85px}.svg-sprite.logo-brand-black-cosmopolitan[_ngcontent-%COMP%]{background-position:-2249px 0;width:144px}.svg-sprite.logo-brand-black-abbott[_ngcontent-%COMP%]{background-position:-2423px 0;width:58px}.svg-sprite.logo-brand-black-unsw[_ngcontent-%COMP%]{background-position:-2511px 0;width:130px}.svg-sprite.logo-brand-black-lifetechnologies[_ngcontent-%COMP%]{background-position:-2671px 0;width:131px}.svg-sprite.logo-brand-black-jacksoncoker[_ngcontent-%COMP%]{background-position:-2832px 0;width:134px}.svg-sprite.logo-brand-black-mcdonalds[_ngcontent-%COMP%]{background-position:-2996px 0;width:88px}.svg-sprite.logo-brand-black-vodafone[_ngcontent-%COMP%]{background-position:-3114px 0;width:96px}.svg-sprite.logo-brand-black-adidas[_ngcontent-%COMP%]{background-position:-3240px 0;width:93px}.svg-sprite.logo-brand-black-ndtv[_ngcontent-%COMP%]{background-position:-3363px 0;width:116px}.svg-sprite.logo-brand-black-kotak[_ngcontent-%COMP%]{background-position:-3509px 0;width:167px}.svg-sprite.logo-brand-black-macys[_ngcontent-%COMP%]{background-position:-3706px 0;width:143px}.svg-sprite.logo-brand-black-cartier[_ngcontent-%COMP%]{background-position:-3879px 0;width:131px}.svg-sprite.logo-brand-black-rimac[_ngcontent-%COMP%]{background-position:-4040px 0;width:134px}.svg-sprite.logo-cambridge-v3[_ngcontent-%COMP%]{background-position:-4200px 0;width:260px}.svg-sprite.logo-brand-black-mumayizv2[_ngcontent-%COMP%]{background-position:-4488px 0;width:44px}#home-client-logo[_ngcontent-%COMP%]{padding:25px 50px;background-color:#fafafa}.about-company-section[_ngcontent-%COMP%]{margin-top:120px}.about-company-section[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]{width:95%}.about-company-section[_ngcontent-%COMP%]   .about-link[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:5px}.about-company-section[_ngcontent-%COMP%]   .about-link[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#f13c31;font-size:18px;font-weight:600;line-height:28px;letter-spacing:-.45px;position:relative}.about-company-section[_ngcontent-%COMP%]   .about-link[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{position:absolute;content:"";height:3px;width:0;left:0;right:0;bottom:-2px;background-color:transparent;color:#f13c31;border-bottom:2px solid #f13c31;transition:all .3s ease-in-out;transform:translate(0,0) translateZ(0);-webkit-transform:translate(0,0) translateZ(0)}.about-company-section[_ngcontent-%COMP%]   .about-link[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:after{width:100%}.about-company-section[_ngcontent-%COMP%]   .about-link[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#f13c31}.home-video-section[_ngcontent-%COMP%]{margin-top:80px}.home-video-section[_ngcontent-%COMP%]   .home-video-box[_ngcontent-%COMP%]{position:relative}.home-video-section[_ngcontent-%COMP%]   .home-video-box[_ngcontent-%COMP%]:not(.hide-control)   .video-btn-play[_ngcontent-%COMP%]{background:url(play-btn-video.7931438a2edd6ea91aaf.svg) no-repeat;width:90px;height:90px;position:absolute;top:50%;left:0;right:0;z-index:1;transform:translateY(-50%);margin:0 auto;cursor:pointer;visibility:visible}.home-video-section[_ngcontent-%COMP%]   .home-video-box[_ngcontent-%COMP%]:not(.hide-control)   .video-btn-pause[_ngcontent-%COMP%]{display:none}.home-video-section.video-scroll[_ngcontent-%COMP%]{position:fixed;top:100px;right:40px;width:360px;height:200px;transform:translateY(0);-webkit-animation:.25s forwards fade-in-up;animation:.25s forwards fade-in-up;z-index:999;margin-top:0;box-shadow:0 0 10px 0 rgba(0,0,0,.5)}.home-video-section[_ngcontent-%COMP%]   .scroll-video-btn[_ngcontent-%COMP%], .home-video-section.video-scroll[_ngcontent-%COMP%]   .home-video-box[_ngcontent-%COMP%]:not(.hide-control)   .video-btn-play[_ngcontent-%COMP%]{display:none}.home-video-section.video-scroll[_ngcontent-%COMP%]   .scroll-video-btn[_ngcontent-%COMP%]{display:block;position:absolute;right:5px;z-index:9;background:#fff;padding:5px;top:5px;border-radius:100%;cursor:pointer}.home-video-section[_ngcontent-%COMP%]   .video-full-screen[_ngcontent-%COMP%]{background:url(ic-white-full-screen.dbb5690d24520cff8a58.svg) no-repeat;height:14px;width:14px;position:absolute;bottom:15px;right:7px;cursor:pointer;display:none}.home-video-section[_ngcontent-%COMP%]:hover   .video-full-screen[_ngcontent-%COMP%]{display:block}video[_ngcontent-%COMP%]::-webkit-media-controls-current-time-display, video[_ngcontent-%COMP%]::-webkit-media-controls-mute-button, video[_ngcontent-%COMP%]::-webkit-media-controls-play-button, video[_ngcontent-%COMP%]::-webkit-media-controls-time-remaining-display, video[_ngcontent-%COMP%]::-webkit-media-controls-timeline, video[_ngcontent-%COMP%]::-webkit-media-controls-toggle-closed-captions-button, video[_ngcontent-%COMP%]::-webkit-media-controls-volume-slider{display:none}.discovery-process-section[_ngcontent-%COMP%]{margin:120px 0}.discovery-process-section[_ngcontent-%COMP%]   .process-box[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]{margin-bottom:42px;position:relative;display:flex;display:-ms-flexbox;align-items:center;height:48px;overflow:hidden}.discovery-process-section[_ngcontent-%COMP%]   .process-box[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{background-color:#fff;z-index:1;padding-right:42px}.discovery-process-section[_ngcontent-%COMP%]   .process-box[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]:after{content:"";border:1px dashed #252b33;width:100%;position:absolute;top:50%;right:12px;transform:translateY(-50%)}.discovery-process-section[_ngcontent-%COMP%]   .process-block[_ngcontent-%COMP%]:last-child   .process-box[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]:after{display:none}.discovery-process-section[_ngcontent-%COMP%]   .process-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:16px}.our-services-section[_ngcontent-%COMP%]{padding:120px 0;background-color:#fafafa}.our-services-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center}.our-services-section[_ngcontent-%COMP%]   .service-box[_ngcontent-%COMP%]{text-align:center;padding:80px 40px 40px;margin:0 20px;display:block;height:100%;border-radius:4px;transition:all .8s cubic-bezier(.2,.8,.2,1) 0s}.our-services-section[_ngcontent-%COMP%]   .service-box[_ngcontent-%COMP%]:hover   .img-box[_ngcontent-%COMP%]{transform:translateY(-10px)}.our-services-section[_ngcontent-%COMP%]   .service-box[_ngcontent-%COMP%]:hover   h4[_ngcontent-%COMP%]{transform:translateY(-7px)}.our-services-section[_ngcontent-%COMP%]   .service-box[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%]{transform:translateY(-4px)}.our-services-section[_ngcontent-%COMP%]   .service-box[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]{margin-bottom:60px;display:flex;display:-ms-flexbox;align-items:center;justify-content:center;height:250px;transition:all .8s cubic-bezier(.2,.8,.2,1) 0s}.our-services-section[_ngcontent-%COMP%]   .service-box[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;width:auto}.our-services-section[_ngcontent-%COMP%]   .service-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:20px;line-height:30px;font-weight:600;color:#252b33;margin-bottom:16px;transition:all .8s cubic-bezier(.2,.8,.2,1) 0s}.our-services-section[_ngcontent-%COMP%]   .service-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#252b33;transition:all .8s cubic-bezier(.2,.8,.2,1) 0s}.our-services-section[_ngcontent-%COMP%]   .service-box[_ngcontent-%COMP%]   .read-more-btn[_ngcontent-%COMP%]{color:#f13c31!important;font-size:16px;font-weight:600;line-height:24px;position:relative;display:inline-block;opacity:0;margin-top:16px;transition:all .3s ease-in-out}.our-services-section[_ngcontent-%COMP%]   .service-box[_ngcontent-%COMP%]   .read-more-btn[_ngcontent-%COMP%]:after{position:absolute;content:"";height:3px;width:0;left:0;right:0;bottom:-2px;background-color:transparent;color:#f13c31;border-bottom:2px solid #f13c31;transition:all .3s ease-in-out;transform:translate(0,0) translateZ(0);-webkit-transform:translate(0,0) translateZ(0)}.our-services-section[_ngcontent-%COMP%]   .service-box[_ngcontent-%COMP%]:hover > .read-more-btn[_ngcontent-%COMP%]:after{width:100%}.our-services-section[_ngcontent-%COMP%]   .service-box[_ngcontent-%COMP%]:hover   .read-more-btn[_ngcontent-%COMP%]{opacity:1;transform:translateY(-3px)}  .our-services-section .our-services-slider-owl .owl-stage-outer{padding-left:20px}  .our-services-section .our-services-slider-owl .owl-stage{display:flex;flex-direction:row;height:100%}  .our-services-section .our-services-slider-owl .our-services-inner{height:100%}.technologies-section[_ngcontent-%COMP%]{margin-top:120px}.technologies-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center}.technologies-section[_ngcontent-%COMP%]   .technologies-tab[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{justify-content:center}.technologies-section[_ngcontent-%COMP%]   .technologies-tab[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]{border-bottom:1px solid #eee}.technologies-section[_ngcontent-%COMP%]   .technologies-tab[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{color:#252b33;font-size:16px;font-weight:600;padding:0 20px 24px;border-radius:0;border:none;border-bottom:1px solid transparent;background-color:transparent}.technologies-section[_ngcontent-%COMP%]   .technologies-tab[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{color:#f13c31;border-bottom:1px solid #f13c31}.technologies-section[_ngcontent-%COMP%]   .technologies-tab[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]{margin-top:46px}.technologies-section[_ngcontent-%COMP%]   .technologies-tab[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{justify-content:center}.technologies-section[_ngcontent-%COMP%]   .technologies-tab[_ngcontent-%COMP%]   .icon-block[_ngcontent-%COMP%]{display:block;text-align:center;padding:34px 6px;margin-bottom:30px}.technologies-section[_ngcontent-%COMP%]   .technologies-tab[_ngcontent-%COMP%]   .icon-block[_ngcontent-%COMP%]:hover{background-color:#fafafa}.technologies-section[_ngcontent-%COMP%]   .technologies-tab[_ngcontent-%COMP%]   .icon-block[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]{height:50px;display:flex;display:-ms-flexbox;justify-content:center;align-items:center}.technologies-section[_ngcontent-%COMP%]   .technologies-tab[_ngcontent-%COMP%]   .icon-block[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:14px;line-height:24px;color:#252b33;margin-top:16px}.case-study-section[_ngcontent-%COMP%]{margin:120px 0}.case-study-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center;padding-bottom:20px}.case-study-box[_ngcontent-%COMP%]{margin-top:60px}.cs-main[_ngcontent-%COMP%]{display:block;transition:all .3s ease-in-out}.cs-main[_ngcontent-%COMP%]:hover{text-decoration:none;transform:translate(3px,-3px)}.cs-main[_ngcontent-%COMP%]   .cs-info[_ngcontent-%COMP%]{position:relative;padding:60px 40px 60px 60px;border-radius:4px}.case-study-block[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.cs-detail[_ngcontent-%COMP%]{width:100%;max-width:455px}.cs-detail[_ngcontent-%COMP%]   .cs-title[_ngcontent-%COMP%]{color:#fff;font-size:14px;text-transform:uppercase;font-weight:600;margin-bottom:20px;letter-spacing:3px}.cs-detail[_ngcontent-%COMP%]   .cs-description[_ngcontent-%COMP%]{color:#fff;font-size:40px;font-weight:800;line-height:52px;letter-spacing:-1.3px;text-align:left;padding-bottom:0}.cs-detail[_ngcontent-%COMP%]   .cs-subtitle[_ngcontent-%COMP%]{color:#fff;font-size:20px;font-weight:400;letter-spacing:0;line-height:33px;margin-bottom:0}.client-sec-para[_ngcontent-%COMP%]{color:#fff;margin-top:15px}.cs-detail[_ngcontent-%COMP%]   .client-says[_ngcontent-%COMP%]{background:rgba(255,255,255,.2);border-radius:6px;padding:30px;margin-top:40px}.cs-detail[_ngcontent-%COMP%]   .client-says[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:16px;color:#fff;letter-spacing:0;line-height:28px;font-weight:400}.cs-detail[_ngcontent-%COMP%]   .client-says[_ngcontent-%COMP%]   .client-box[_ngcontent-%COMP%]{margin-top:30px}.cs-detail[_ngcontent-%COMP%]   .client-says[_ngcontent-%COMP%]   .client-thumb[_ngcontent-%COMP%]{width:48px;height:48px;display:flex;align-items:center;justify-content:center}.cs-detail[_ngcontent-%COMP%]   .client-says[_ngcontent-%COMP%]   .client-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:48px;height:48px;border-radius:100%}.cs-detail[_ngcontent-%COMP%]   .client-says[_ngcontent-%COMP%]   .client-des[_ngcontent-%COMP%]{padding-left:15px}.cs-detail[_ngcontent-%COMP%]   .client-says[_ngcontent-%COMP%]   .client-des[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:18px;color:#fff;letter-spacing:0;font-weight:600}.cs-detail[_ngcontent-%COMP%]   .client-says[_ngcontent-%COMP%]   .client-des[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;color:rgba(255,255,255,.5);letter-spacing:0;font-weight:400}.case-study-block[_ngcontent-%COMP%]   .cs-thumb-img[_ngcontent-%COMP%]{position:absolute;right:40px;bottom:0}.case-study-block[_ngcontent-%COMP%]   .cs-thumb-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.case-study-section[_ngcontent-%COMP%]   .button-box[_ngcontent-%COMP%]{text-align:center}.jugaad-section[_ngcontent-%COMP%]{background-color:#fafafa;padding:120px 0;text-align:center}.jugaad-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:30px}.jugaad-video[_ngcontent-%COMP%]{width:100%;margin:80px auto 0;border:1px solid #fff}.video[_ngcontent-%COMP%]:focus{outline:0}#jugaad-video[_ngcontent-%COMP%]{position:relative;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;opacity:1}.jugaad-video-sec[_ngcontent-%COMP%]{position:relative;margin:0 auto}.jugaad-video-sec[_ngcontent-%COMP%]:not(.hide-control)   .jugaad-video-btn-play[_ngcontent-%COMP%]{background:url(play-btn-video.7931438a2edd6ea91aaf.svg) no-repeat;width:90px;height:90px;position:absolute;top:50%;left:0;right:0;z-index:9;transform:translateY(-50%);margin:0 auto;cursor:pointer}.jugaad-video-sec[_ngcontent-%COMP%]   .jugaad-video-img-play[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1}.satisfaction-guarantee[_ngcontent-%COMP%]{padding:120px 0}.satisfaction-guarantee[_ngcontent-%COMP%]   .satisfaction-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:16px;color:#252b33;margin-bottom:30px}.satisfaction-guarantee[_ngcontent-%COMP%]   .satisfaction-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:30px}.satisfaction-guarantee[_ngcontent-%COMP%]   .satisfaction-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:16px}.client-testimonial-section[_ngcontent-%COMP%]{overflow:hidden}.client-testimonial-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center}.home-client-testimonial[_ngcontent-%COMP%]{width:740px;margin:0 auto}.home-client-testimonial[_ngcontent-%COMP%]   .testimonial-box[_ngcontent-%COMP%]{position:relative}.home-client-testimonial[_ngcontent-%COMP%]   .testimonial-box[_ngcontent-%COMP%]   .client-video[_ngcontent-%COMP%]{position:absolute;left:0;right:0;bottom:0;padding:60px 30px 20px;background:rgba(0,0,0,.5);background:linear-gradient(180deg,rgba(0,0,0,0) 0,rgba(0,0,0,.5) 100%)}.home-client-testimonial[_ngcontent-%COMP%]   .testimonial-box[_ngcontent-%COMP%]   .client-video[_ngcontent-%COMP%]   .client-name[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#fff;font-size:24px;line-height:28px;font-weight:800}.home-client-testimonial[_ngcontent-%COMP%]   .testimonial-box[_ngcontent-%COMP%]   .client-video[_ngcontent-%COMP%]   .client-name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff;font-size:14px;line-height:20px}.home-client-testimonial[_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%]{padding:0 15px}.home-client-testimonial[_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%]   .client-video[_ngcontent-%COMP%]{display:none}.home-client-testimonial[_ngcontent-%COMP%]   .slick-slide.slick-active[_ngcontent-%COMP%]   .client-video[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%}  .home-client-testimonial .slick-list{overflow:visible}.home-contact-section[_ngcontent-%COMP%]{margin-top:0;background:url(globe-bg-img.983eef5b137f10118dcb.jpg) center center/cover no-repeat;height:810px}.theme-black[_ngcontent-%COMP%]   .home-contact-section[_ngcontent-%COMP%]{margin-top:0;background:url(globe-bg-img-darkv1.5e7ab89de2b9d2937905.jpg) center center/cover no-repeat;height:810px}.home-contact-section[_ngcontent-%COMP%]   .contact-section-box[_ngcontent-%COMP%]{background:#fff;padding:80px;box-shadow:0 16px 54px 0 rgba(0,0,0,.1);border-radius:4px;margin:120px 0}.home-contact-section[_ngcontent-%COMP%]   .contact-section-box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{padding:6px 0 24px;font-weight:600}  .home-contact-section .contact-section-box h2 span{font-weight:800}.home-contact-section[_ngcontent-%COMP%]   .contact-section-box[_ngcontent-%COMP%]   .button-box[_ngcontent-%COMP%]{margin-top:40px}.home-contact-section[_ngcontent-%COMP%]   .contact-section-box[_ngcontent-%COMP%]   .button-box[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{margin-left:16px}.theme-black[_ngcontent-%COMP%]   .home-contact-section[_ngcontent-%COMP%]   .contact-section-box[_ngcontent-%COMP%]   .button-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{transition:all .3s ease-in-out}.theme-black[_ngcontent-%COMP%]   .home-contact-section[_ngcontent-%COMP%]   .contact-section-box[_ngcontent-%COMP%]   .button-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{color:#f13c31!important}  .vanta-canvas{top:100px}  .theme-black.body-bg-color{background-color:#000}.theme-black[_ngcontent-%COMP%]     h1, .theme-black[_ngcontent-%COMP%]     h2, .theme-black[_ngcontent-%COMP%]     h3, .theme-black[_ngcontent-%COMP%]     h4, .theme-black[_ngcontent-%COMP%]     h5, .theme-black[_ngcontent-%COMP%]     h6, .theme-black[_ngcontent-%COMP%]     li, .theme-black[_ngcontent-%COMP%]     li a, .theme-black[_ngcontent-%COMP%]     p, .theme-black[_ngcontent-%COMP%]   b[_ngcontent-%COMP%], .theme-black[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%], .theme-black[_ngcontent-%COMP%]   center[_ngcontent-%COMP%], .theme-black[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], .theme-black[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .theme-black[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .theme-black[_ngcontent-%COMP%]   u[_ngcontent-%COMP%], .theme-black[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{color:#fff!important}.theme-black[_ngcontent-%COMP%]   .client-logo-listing[_ngcontent-%COMP%]{background-color:#202020}  .theme-black .client-logo-listing ul li span svg g{fill:#fff}.theme-black[_ngcontent-%COMP%]   .about-company-section[_ngcontent-%COMP%]   .about-link[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#f13c31!important}.theme-black[_ngcontent-%COMP%]   .discovery-process-section[_ngcontent-%COMP%]   .process-box[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{background-color:#000}.theme-black[_ngcontent-%COMP%]   .discovery-process-section[_ngcontent-%COMP%]   .process-box[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]:after{border:1px dashed #fff}.theme-black[_ngcontent-%COMP%]   .our-services-section[_ngcontent-%COMP%]{background-color:#202020}.theme-black[_ngcontent-%COMP%]   .technologies-section[_ngcontent-%COMP%]   .technologies-tab[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]{border-bottom:1px solid rgba(255,255,255,.1)}.theme-black[_ngcontent-%COMP%]   .technologies-section[_ngcontent-%COMP%]   .technologies-tab[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{color:#f13c31!important}  .theme-black .technologies-section .technologies-tab .icon-block .icon-box svg g{fill:#fff}  .theme-black .technologies-section .technologies-tab .icon-block .icon-box svg polygon{fill:#fff}  .theme-black .technologies-section .technologies-tab .icon-block .icon-box svg path{fill:#fff}  .theme-black .technologies-section .technologies-tab .icon-block .icon-box svg use{fill:#fff}.theme-black[_ngcontent-%COMP%]   .jugaad-section[_ngcontent-%COMP%], .theme-black[_ngcontent-%COMP%]   .technologies-section[_ngcontent-%COMP%]   .technologies-tab[_ngcontent-%COMP%]   .icon-block[_ngcontent-%COMP%]:hover{background-color:#202020}.theme-black[_ngcontent-%COMP%]   .jugaad-video[_ngcontent-%COMP%]{border:1px solid #202020}.theme-black[_ngcontent-%COMP%]   .home-contact-section[_ngcontent-%COMP%]   .contact-section-box[_ngcontent-%COMP%]{background:#202020}.theme-black[_ngcontent-%COMP%]   .our-services-section[_ngcontent-%COMP%]   .service-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .theme-black[_ngcontent-%COMP%]   .our-services-section[_ngcontent-%COMP%]   .service-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#252b33!important}@media only screen and (max-width:1440px){h1[_ngcontent-%COMP%]{font-size:50px;line-height:60px;margin-bottom:30px}.hero-banner-section[_ngcontent-%COMP%]   .hero-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:450px}.our-services-section[_ngcontent-%COMP%]   .service-box[_ngcontent-%COMP%]{padding:60px 30px 30px}}@media only screen and (min-device-width:1024px) and (max-device-width:1366px) and (-webkit-min-device-pixel-ratio:2) and (orientation:portrait){.hero-banner-section[_ngcontent-%COMP%]{height:auto;padding:60px 0 0}.hero-banner-section[_ngcontent-%COMP%]   .hero-banner[_ngcontent-%COMP%]{height:auto}.client-logo-listing[_ngcontent-%COMP%]{margin-top:100px}}@media only screen and (max-width:1280px){.our-services-section[_ngcontent-%COMP%]   .service-box[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]{margin-bottom:40px}}@media only screen and (max-width:1024px){h2[_ngcontent-%COMP%]{font-size:30px;line-height:40px}.button-box[_ngcontent-%COMP%]{margin-top:50px}h2.mrg-b[_ngcontent-%COMP%]{margin-bottom:40px}.about-company-section[_ngcontent-%COMP%], .technologies-section[_ngcontent-%COMP%]{margin-top:80px}.case-study-section[_ngcontent-%COMP%], .discovery-process-section[_ngcontent-%COMP%]{margin:80px 0}.jugaad-section[_ngcontent-%COMP%], .our-services-section[_ngcontent-%COMP%], .satisfaction-guarantee[_ngcontent-%COMP%]{padding:80px 0}.home-video-section[_ngcontent-%COMP%]{margin-top:60px}.home-video-section.video-scroll[_ngcontent-%COMP%]{display:none}.about-company-section[_ngcontent-%COMP%]   .about-link[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{width:100%}#home-client-logo[_ngcontent-%COMP%]{padding:25px 15px}#home-client-logo[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{overflow-x:auto}#home-client-logo[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 30px}.our-services-section[_ngcontent-%COMP%]   .service-box[_ngcontent-%COMP%]{padding:40px 30px}.our-services-section[_ngcontent-%COMP%]   .service-box[_ngcontent-%COMP%]:hover   .img-box[_ngcontent-%COMP%], .our-services-section[_ngcontent-%COMP%]   .service-box[_ngcontent-%COMP%]:hover   h4[_ngcontent-%COMP%], .our-services-section[_ngcontent-%COMP%]   .service-box[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%]{transform:translateY(0)}.our-services-section[_ngcontent-%COMP%]   .service-box[_ngcontent-%COMP%]   .read-more-btn[_ngcontent-%COMP%]{opacity:1}.our-services-section[_ngcontent-%COMP%]   .service-box[_ngcontent-%COMP%]:hover   .read-more-btn[_ngcontent-%COMP%]{transform:translateY(0)}.our-services-section[_ngcontent-%COMP%]   .service-box[_ngcontent-%COMP%]   .read-more-btn[_ngcontent-%COMP%]:after{width:100%}.technologies-section[_ngcontent-%COMP%]   .technologies-tab[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]{margin-top:30px}.technologies-section[_ngcontent-%COMP%]   .technologies-tab[_ngcontent-%COMP%]   .icon-block[_ngcontent-%COMP%]{padding:20px 6px}.case-study-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{padding-bottom:0}.cs-main[_ngcontent-%COMP%]   .cs-info[_ngcontent-%COMP%]{padding:40px}.case-study-block[_ngcontent-%COMP%]   .cs-thumb-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:340px;margin:0 auto}.case-study-block[_ngcontent-%COMP%]   .cs-thumb-img[_ngcontent-%COMP%]{right:40px}.cs-detail[_ngcontent-%COMP%]   .cs-title[_ngcontent-%COMP%]{margin-bottom:10px}.cs-detail[_ngcontent-%COMP%]   .cs-description[_ngcontent-%COMP%]{font-size:30px;line-height:42px;margin:0 0 10px}.cs-detail[_ngcontent-%COMP%]   .client-says[_ngcontent-%COMP%]   .client-box[_ngcontent-%COMP%]{margin-top:20px}.cs-detail[_ngcontent-%COMP%]   .client-says[_ngcontent-%COMP%]   .client-des[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:16px}.cs-detail[_ngcontent-%COMP%]   .cs-subtitle[_ngcontent-%COMP%]{font-size:16px;line-height:26px}.cs-detail[_ngcontent-%COMP%]   .client-says[_ngcontent-%COMP%]{margin-top:20px;padding:15px}.cs-detail[_ngcontent-%COMP%]   .client-says[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:16px;line-height:26px}.cs-main[_ngcontent-%COMP%]:hover{text-decoration:none;transform:translate(0,0)}.jugaad-video[_ngcontent-%COMP%]{margin:60px auto 0}.home-contact-section[_ngcontent-%COMP%], .theme-black[_ngcontent-%COMP%]   .home-contact-section[_ngcontent-%COMP%]{height:600px}.home-contact-section[_ngcontent-%COMP%]   .contact-section-box[_ngcontent-%COMP%]{padding:40px;margin:80px 0}}@media only screen and (max-width:992px){.hero-banner-section[_ngcontent-%COMP%]{height:auto;margin-top:60px}.hero-banner-section[_ngcontent-%COMP%]   .hero-banner[_ngcontent-%COMP%]{height:auto}.hero-banner-section[_ngcontent-%COMP%]   .hero-banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{width:60%}.hero-banner-section[_ngcontent-%COMP%]   .hero-image[_ngcontent-%COMP%]{margin:0 0 40px;text-align:center}.hero-banner-section[_ngcontent-%COMP%]   .hero-banner[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]{margin-bottom:60px}.home-top-sec[_ngcontent-%COMP%]{flex-direction:column-reverse}.home-top-sec[_ngcontent-%COMP%]   .col-left-right[_ngcontent-%COMP%]{display:block;width:100%}.discovery-process-section[_ngcontent-%COMP%]   .process-box[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]{margin-bottom:20px}.discovery-process-section[_ngcontent-%COMP%]   .process-box[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{padding-right:0}.discovery-process-section[_ngcontent-%COMP%]   .process-box[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]:after{display:none}.discovery-process-section[_ngcontent-%COMP%]   .process-block[_ngcontent-%COMP%]{margin-bottom:40px}.discovery-process-section[_ngcontent-%COMP%]   .process-block[_ngcontent-%COMP%]:last-child{margin-bottom:0}.discovery-process-section[_ngcontent-%COMP%]   .button-box[_ngcontent-%COMP%]{margin-top:0}.our-services-section[_ngcontent-%COMP%]   .service-box[_ngcontent-%COMP%]{padding:40px 30px;margin:0 30px;width:auto}.our-services-section[_ngcontent-%COMP%]   .service-box[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]{margin-bottom:30px}.technologies-section[_ngcontent-%COMP%]   .technologies-tab[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]{flex-wrap:nowrap;width:100%;overflow-x:auto;overflow-y:hidden;justify-content:flex-start}.technologies-section[_ngcontent-%COMP%]   .technologies-tab[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{width:auto;white-space:nowrap;margin-bottom:0}.technologies-section[_ngcontent-%COMP%]   .technologies-tab[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{padding:0 20px 16px}.cs-detail[_ngcontent-%COMP%]{max-width:50%}.cs-detail[_ngcontent-%COMP%]   .cs-description[_ngcontent-%COMP%]{font-size:24px;line-height:34px}.cs-detail[_ngcontent-%COMP%]   .cs-subtitle[_ngcontent-%COMP%]{font-size:14px;line-height:20px}.cs-detail[_ngcontent-%COMP%]   .client-says[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:14px;line-height:22px}.case-study-block[_ngcontent-%COMP%]   .cs-thumb-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:280px;margin:0 auto}.home-client-testimonial[_ngcontent-%COMP%]{width:600px;margin:0 auto}.home-contact-section[_ngcontent-%COMP%]   .contact-section-box[_ngcontent-%COMP%]{margin:55px 0}}@media only screen and (max-width:767px){h1[_ngcontent-%COMP%]{font-size:40px;line-height:50px;margin-bottom:20px}h2[_ngcontent-%COMP%]{font-size:26px;line-height:34px}h3[_ngcontent-%COMP%]{font-size:20px;line-height:30px}.button-box[_ngcontent-%COMP%]{margin-top:40px}.link-button[_ngcontent-%COMP%]{font-size:14px;padding:6px 18px}h2.mrg-b[_ngcontent-%COMP%]{margin-bottom:40px}.about-company-section[_ngcontent-%COMP%], .technologies-section[_ngcontent-%COMP%]{margin-top:60px}.case-study-section[_ngcontent-%COMP%], .discovery-process-section[_ngcontent-%COMP%]{margin:60px 0}.jugaad-section[_ngcontent-%COMP%], .our-services-section[_ngcontent-%COMP%], .satisfaction-guarantee[_ngcontent-%COMP%]{padding:60px 0}.hero-banner-section[_ngcontent-%COMP%]{margin-top:30px}.hero-banner-section[_ngcontent-%COMP%]   .hero-banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}.hero-banner-section[_ngcontent-%COMP%]   .hero-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:320px;text-align:center}.hero-banner-section[_ngcontent-%COMP%]   .hero-banner[_ngcontent-%COMP%]   .top-title[_ngcontent-%COMP%]{display:none}  .hero-banner-section .hero-banner .mobile-text-none{display:none}.hero-banner-section[_ngcontent-%COMP%]   .hero-banner[_ngcontent-%COMP%]   .button-box[_ngcontent-%COMP%]{margin-top:30px}.hero-banner-section[_ngcontent-%COMP%]   .hero-image[_ngcontent-%COMP%]{margin:0 0 20px}.hero-banner-section[_ngcontent-%COMP%]   .hero-banner[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]{margin-bottom:60px}.client-logo-listing[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:0 30px}#home-client-logo[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 15px}.about-company-section[_ngcontent-%COMP%]   .about-link[_ngcontent-%COMP%]{margin-top:16px}.home-video-section[_ngcontent-%COMP%]{margin-top:40px}.about-company-section[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]{width:100%}.home-video-section[_ngcontent-%COMP%]   .home-video-box[_ngcontent-%COMP%]:not(.hide-control)   .video-btn-play[_ngcontent-%COMP%]{width:60px;height:60px;background-size:cover}.discovery-process-section[_ngcontent-%COMP%]   .process-box[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]{margin-bottom:16px}.our-services-section[_ngcontent-%COMP%]   .service-box[_ngcontent-%COMP%]{padding:40px 30px;margin:0 10px;width:auto}  .our-services-section .our-services-slider-owl .owl-stage-outer{padding-left:5px}.our-services-section[_ngcontent-%COMP%]   .service-box[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]{height:200px}.our-services-section[_ngcontent-%COMP%]   .service-box[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:80%}.case-study-box[_ngcontent-%COMP%]{margin:0 10px}.case-study-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:40px}.case-study-block[_ngcontent-%COMP%]{display:block}.cs-main[_ngcontent-%COMP%]   .cs-info[_ngcontent-%COMP%]{padding:30px 30px 0}.cs-detail[_ngcontent-%COMP%]{text-align:center;padding:0 0 30px;max-width:100%}.cs-detail[_ngcontent-%COMP%]   .cs-description[_ngcontent-%COMP%]{text-align:center}.case-study-block[_ngcontent-%COMP%]   .cs-thumb-img[_ngcontent-%COMP%]{position:relative;right:inherit;text-align:center}.cs-detail[_ngcontent-%COMP%]   .client-says[_ngcontent-%COMP%]{display:none}.our-work-block-slider[_ngcontent-%COMP%]{margin:0 -15px}  .our-work-block-slider .slick-list{padding:0 8% 0 5px}.jugaad-video[_ngcontent-%COMP%]{margin:40px auto 0}.jugaad-video-sec[_ngcontent-%COMP%]:not(.hide-control)   .jugaad-video-btn-play[_ngcontent-%COMP%]{width:60px;height:60px;background-size:cover}.jugaad-section[_ngcontent-%COMP%]{text-align:left}.satisfaction-guarantee[_ngcontent-%COMP%]   .satisfaction-img[_ngcontent-%COMP%]{margin-bottom:60px}.home-client-testimonial[_ngcontent-%COMP%]{width:300px;margin:0 auto}.home-client-testimonial[_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%]{padding:0 8px}.home-client-testimonial[_ngcontent-%COMP%]   .testimonial-box[_ngcontent-%COMP%]   .client-video[_ngcontent-%COMP%]{padding:10px}.home-client-testimonial[_ngcontent-%COMP%]   .testimonial-box[_ngcontent-%COMP%]   .client-video[_ngcontent-%COMP%]   .client-name[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px;line-height:22px}.home-client-testimonial[_ngcontent-%COMP%]   .testimonial-box[_ngcontent-%COMP%]   .client-video[_ngcontent-%COMP%]   .client-name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px}.home-client-testimonial[_ngcontent-%COMP%]   .testimonial-box[_ngcontent-%COMP%]   .client-video[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:42px}.home-contact-section[_ngcontent-%COMP%]{margin-top:0;height:590px;background:#fff}.theme-black[_ngcontent-%COMP%]   .home-contact-section[_ngcontent-%COMP%]{background:#000;margin-top:0;height:590px}.home-contact-section[_ngcontent-%COMP%]   .contact-section-box[_ngcontent-%COMP%]{padding:30px;margin:60px 0;text-align:center}.home-contact-section[_ngcontent-%COMP%]   .contact-section-box[_ngcontent-%COMP%]   .button-box[_ngcontent-%COMP%]{margin-top:30px}}@media only screen and (max-width:320px){.hero-banner-section[_ngcontent-%COMP%]   .hero-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}.home-client-testimonial[_ngcontent-%COMP%]{width:260px;margin:0 auto}.home-contact-section[_ngcontent-%COMP%]{height:730px}}']],
                data: {}
            });
        function O(n) {
            return e["\u0275vid"](0, [(n()(),
                e["\u0275eld"](0, 0, null, null, 2, "a", [], [[1, "aria-label", 0], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (n, t, l) {
                    var o = !0;
                    return "click" === t && (o = !1 !== e["\u0275nov"](n, 1).onClick(l.button, l.ctrlKey, l.metaKey, l.shiftKey) && o),
                        o
                }, null, null)), e["\u0275did"](1, 671744, null, 0, c.o, [c.m, c.a, u.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (n()(),
                    e["\u0275eld"](2, 0, null, null, 0, "span", [], [[8, "className", 0]], null, null, null, null))], function (n, t) {
                        n(t, 1, 0, "/" + t.component.commonService.replaceRootURLToBlank(null == t.parent.context.$implicit ? null : t.parent.context.$implicit.trusted_brands_logo_page_link))
                    }, function (n, t) {
                        n(t, 0, 0, e["\u0275inlineInterpolate"](1, "", t.parent.context.$implicit.trusted_brands_logo.title, ""), e["\u0275nov"](t, 1).target, e["\u0275nov"](t, 1).href),
                            n(t, 2, 0, e["\u0275inlineInterpolate"](1, "", t.parent.context.$implicit.trusted_brands_logo.title, " svg_sprite_bg svg-sprite"))
                    })
        }
        function P(n) {
            return e["\u0275vid"](0, [(n()(),
                e["\u0275eld"](0, 0, null, null, 1, "a", [["onclick", "return false;"]], [[1, "aria-label", 0]], null, null, null, null)), (n()(),
                    e["\u0275eld"](1, 0, null, null, 0, "span", [], [[8, "className", 0]], null, null, null, null))], null, function (n, t) {
                        n(t, 0, 0, e["\u0275inlineInterpolate"](1, "", t.parent.context.$implicit.trusted_brands_logo.title, "")),
                            n(t, 1, 0, e["\u0275inlineInterpolate"](1, "", t.parent.context.$implicit.trusted_brands_logo.title, " svg_sprite_bg svg-sprite"))
                    })
        }
        function M(n) {
            return e["\u0275vid"](0, [(n()(),
                e["\u0275eld"](0, 0, null, null, 4, "li", [], null, null, null, null, null)), (n()(),
                    e["\u0275and"](16777216, null, null, 1, null, O)), e["\u0275did"](2, 16384, null, 0, u.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                        ngIf: [0, "ngIf"]
                    }, null), (n()(),
                        e["\u0275and"](16777216, null, null, 1, null, P)), e["\u0275did"](4, 16384, null, 0, u.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                            ngIf: [0, "ngIf"]
                        }, null)], function (n, t) {
                            n(t, 2, 0, "" != (null == t.context.$implicit ? null : t.context.$implicit.trusted_brands_logo_page_link)),
                                n(t, 4, 0, "" == (null == t.context.$implicit ? null : t.context.$implicit.trusted_brands_logo_page_link))
                        }, null)
        }
        function v(n) {
            return e["\u0275vid"](0, [(n()(),
                e["\u0275eld"](0, 0, null, null, 23, "section", [["class", "hero-banner-section"]], null, null, null, null, null)), (n()(),
                    e["\u0275eld"](1, 0, null, null, 18, "div", [["class", "hero-banner"]], null, null, null, null, null)), (n()(),
                        e["\u0275eld"](2, 0, null, null, 17, "div", [["class", "container"]], null, null, null, null, null)), (n()(),
                            e["\u0275eld"](3, 0, null, null, 16, "div", [["class", "home-top-sec"]], null, null, null, null, null)), (n()(),
                                e["\u0275eld"](4, 0, null, null, 11, "div", [["class", "banner-left col-left-right"]], null, null, null, null, null)), (n()(),
                                    e["\u0275eld"](5, 0, null, null, 10, "div", [["class", "hero-content"]], null, null, null, null, null)), (n()(),
                                        e["\u0275eld"](6, 0, null, null, 1, "span", [["class", "top-title"]], null, null, null, null, null)), (n()(),
                                            e["\u0275ted"](7, null, ["", ""])), (n()(),
                                                e["\u0275eld"](8, 0, null, null, 1, "h1", [], null, null, null, null, null)), (n()(),
                                                    e["\u0275ted"](9, null, ["", ""])), (n()(),
                                                        e["\u0275eld"](10, 0, null, null, 1, "div", [], [[8, "innerHTML", 1]], null, null, null, null)), e["\u0275ppd"](11, 1), (n()(),
                                                            e["\u0275eld"](12, 0, null, null, 3, "div", [["class", "button-box"]], null, null, null, null, null)), (n()(),
                                                                e["\u0275eld"](13, 0, null, null, 2, "a", [["class", "link-button"]], [[1, "aria-label", 0], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (n, t, l) {
                                                                    var o = !0;
                                                                    return "click" === t && (o = !1 !== e["\u0275nov"](n, 14).onClick(l.button, l.ctrlKey, l.metaKey, l.shiftKey) && o),
                                                                        o
                                                                }, null, null)), e["\u0275did"](14, 671744, null, 0, c.o, [c.m, c.a, u.LocationStrategy], {
                                                                    routerLink: [0, "routerLink"]
                                                                }, null), (n()(),
                                                                    e["\u0275ted"](15, null, ["", ""])), (n()(),
                                                                        e["\u0275eld"](16, 0, null, null, 3, "div", [["class", "banner-right col-left-right"]], null, null, null, null, null)), (n()(),
                                                                            e["\u0275eld"](17, 0, null, null, 2, "div", [["class", "hero-image"]], null, null, null, null, null)), (n()(),
                                                                                e["\u0275eld"](18, 0, null, null, 1, "img", [], [[8, "alt", 0]], null, null, null, null)), e["\u0275did"](19, 1720320, null, 0, a.a, [e.ElementRef, e.NgZone, e.PLATFORM_ID, [2, "options"]], {
                                                                                    lazyImage: [0, "lazyImage"],
                                                                                    defaultImage: [1, "defaultImage"]
                                                                                }, null), (n()(),
                                                                                    e["\u0275eld"](20, 0, null, null, 3, "div", [["class", "client-logo-listing"]], null, null, null, null, null)), (n()(),
                                                                                        e["\u0275eld"](21, 0, null, null, 2, "ul", [], null, null, null, null, null)), (n()(),
                                                                                            e["\u0275and"](16777216, null, null, 1, null, M)), e["\u0275did"](23, 278528, null, 0, u.NgForOf, [e.ViewContainerRef, e.TemplateRef, e.IterableDiffers], {
                                                                                                ngForOf: [0, "ngForOf"]
                                                                                            }, null)], function (n, t) {
                                                                                                var l = t.component;
                                                                                                n(t, 14, 0, "/" + l.commonService.replaceRootURLToBlank(null == l.welcomeContent ? null : null == l.welcomeContent.home_banner_group ? null : l.welcomeContent.home_banner_group.home_banner_button_page_link)),
                                                                                                    n(t, 19, 0, null == l.welcomeContent ? null : null == l.welcomeContent.home_banner_group ? null : null == l.welcomeContent.home_banner_group.home_banner_image ? null : l.welcomeContent.home_banner_group.home_banner_image.url, l.defaultImage),
                                                                                                    n(t, 23, 0, null == l.welcomeContent ? null : null == l.welcomeContent.trusted_brands_group ? null : l.welcomeContent.trusted_brands_group.trusted_brands_details)
                                                                                            }, function (n, t) {
                                                                                                var l = t.component;
                                                                                                n(t, 7, 0, null == l.welcomeContent ? null : null == l.welcomeContent.home_banner_group ? null : l.welcomeContent.home_banner_group.home_banner_heading),
                                                                                                    n(t, 9, 0, null == l.welcomeContent ? null : null == l.welcomeContent.home_banner_group ? null : l.welcomeContent.home_banner_group.home_banner_title);
                                                                                                var o = e["\u0275unv"](t, 10, 0, n(t, 11, 0, e["\u0275nov"](t.parent, 0), null == l.welcomeContent ? null : null == l.welcomeContent.home_banner_group ? null : l.welcomeContent.home_banner_group.home_banner_description));
                                                                                                n(t, 10, 0, o),
                                                                                                    n(t, 13, 0, e["\u0275inlineInterpolate"](1, "", null == l.welcomeContent ? null : null == l.welcomeContent.home_banner_group ? null : l.welcomeContent.home_banner_group.home_banner_title, ""), e["\u0275nov"](t, 14).target, e["\u0275nov"](t, 14).href),
                                                                                                    n(t, 15, 0, null == l.welcomeContent ? null : null == l.welcomeContent.home_banner_group ? null : l.welcomeContent.home_banner_group.home_banner_button_text),
                                                                                                    n(t, 18, 0, e["\u0275inlineInterpolate"](1, "", null == l.welcomeContent ? null : null == l.welcomeContent.home_banner_group ? null : null == l.welcomeContent.home_banner_group.home_banner_image ? null : l.welcomeContent.home_banner_group.home_banner_image.title, ""))
                                                                                            })
        }
        function k(n) {
            return e["\u0275vid"](0, [(n()(),
                e["\u0275eld"](0, 0, null, null, 3, "li", [], null, null, null, null, null)), (n()(),
                    e["\u0275eld"](1, 0, null, null, 2, "a", [], [[1, "aria-label", 0], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (n, t, l) {
                        var o = !0;
                        return "click" === t && (o = !1 !== e["\u0275nov"](n, 2).onClick(l.button, l.ctrlKey, l.metaKey, l.shiftKey) && o),
                            o
                    }, null, null)), e["\u0275did"](2, 671744, null, 0, c.o, [c.m, c.a, u.LocationStrategy], {
                        routerLink: [0, "routerLink"]
                    }, null), (n()(),
                        e["\u0275ted"](3, null, [" ", " "]))], function (n, t) {
                            n(t, 2, 0, "/" + t.component.commonService.replaceRootURLToBlank(null == t.context.$implicit ? null : t.context.$implicit.more_info_page_link))
                        }, function (n, t) {
                            n(t, 1, 0, e["\u0275inlineInterpolate"](1, "", null == t.context.$implicit ? null : t.context.$implicit.more_info_page_title, ""), e["\u0275nov"](t, 2).target, e["\u0275nov"](t, 2).href),
                                n(t, 3, 0, null == t.context.$implicit ? null : t.context.$implicit.more_info_page_title)
                        })
        }
        function y(n) {
            return e["\u0275vid"](0, [(n()(),
                e["\u0275eld"](0, 0, null, null, 0, "source", [["type", "video/webm"]], [[8, "src", 4]], null, null, null, null))], null, function (n, t) {
                    var l = t.component;
                    n(t, 0, 0, null == l.welcomeContent ? null : null == l.welcomeContent.home_about_us_group ? null : l.welcomeContent.home_about_us_group.home_about_us_video_url_webm)
                })
        }
        function w(n) {
            return e["\u0275vid"](0, [(n()(),
                e["\u0275eld"](0, 0, null, null, 0, "source", [["type", "video/mp4"]], [[8, "src", 4]], null, null, null, null))], null, function (n, t) {
                    var l = t.component;
                    n(t, 0, 0, null == l.welcomeContent ? null : null == l.welcomeContent.home_about_us_group ? null : l.welcomeContent.home_about_us_group.home_about_us_video_url)
                })
        }
        function $(n) {
            return e["\u0275vid"](0, [(n()(),
                e["\u0275eld"](0, 0, null, null, 0, "div", [["class", "video-full-screen"]], null, [[null, "click"]], function (n, t, l) {
                    var e = !0;
                    return "click" === t && (e = !1 !== n.component.maximiseVideo() && e),
                        e
                }, null, null))], null, null)
        }
        function I(n) {
            return e["\u0275vid"](0, [(n()(),
                e["\u0275eld"](0, 0, null, null, 2, "div", [["class", "home-loader"]], null, null, null, null, null)), (n()(),
                    e["\u0275eld"](1, 0, null, null, 1, "lottie-animation-view", [], null, null, null, r.b, r.a)), e["\u0275did"](2, 114688, null, 0, s.a, [e.PLATFORM_ID], {
                        options: [0, "options"],
                        width: [1, "width"],
                        height: [2, "height"]
                    }, null)], function (n, t) {
                        var l = t.component;
                        n(t, 2, 0, l.pageLoaderLottieConfig, l.auto, l.auto)
                    }, null)
        }
        function R(n) {
            return e["\u0275vid"](0, [(n()(),
                e["\u0275eld"](0, 0, null, null, 26, "section", [["class", "about-company-section"]], null, null, null, null, null)), (n()(),
                    e["\u0275eld"](1, 0, null, null, 25, "div", [["class", "container"]], null, null, null, null, null)), (n()(),
                        e["\u0275eld"](2, 0, null, null, 1, "h2", [["class", "mrg-b"]], null, null, null, null, null)), (n()(),
                            e["\u0275ted"](3, null, ["", ""])), (n()(),
                                e["\u0275eld"](4, 0, null, null, 8, "div", [["class", "row"]], null, null, null, null, null)), (n()(),
                                    e["\u0275eld"](5, 0, null, null, 2, "div", [["class", "col-12 col-md-9"]], null, null, null, null, null)), (n()(),
                                        e["\u0275eld"](6, 0, null, null, 1, "div", [["class", "about-content"]], null, null, null, null, null)), (n()(),
                                            e["\u0275eld"](7, 0, null, null, 0, "p", [], [[8, "innerHTML", 1]], null, null, null, null)), (n()(),
                                                e["\u0275eld"](8, 0, null, null, 4, "div", [["class", "col-12 col-md-3"]], null, null, null, null, null)), (n()(),
                                                    e["\u0275eld"](9, 0, null, null, 3, "div", [["class", "about-link"]], null, null, null, null, null)), (n()(),
                                                        e["\u0275eld"](10, 0, null, null, 2, "ul", [], null, null, null, null, null)), (n()(),
                                                            e["\u0275and"](16777216, null, null, 1, null, k)), e["\u0275did"](12, 278528, null, 0, u.NgForOf, [e.ViewContainerRef, e.TemplateRef, e.IterableDiffers], {
                                                                ngForOf: [0, "ngForOf"]
                                                            }, null), (n()(),
                                                                e["\u0275eld"](13, 0, null, null, 0, "div", [["class", "home-video-float-section"]], null, null, null, null, null)), (n()(),
                                                                    e["\u0275eld"](14, 0, null, null, 10, "div", [["class", "home-video-section"]], null, null, null, null, null)), (n()(),
                                                                        e["\u0275eld"](15, 0, null, null, 0, "img", [["alt", "stop"], ["class", "scroll-video-btn"], ["src", "../assets/images/locker-close-icon.svg"]], null, [[null, "click"]], function (n, t, l) {
                                                                            var e = !0
                                                                                , o = n.component;
                                                                            return "click" === t && (e = !1 !== o.playPauseHomeVideo(o.btnType = "stop") && e),
                                                                                e
                                                                        }, null, null)), (n()(),
                                                                            e["\u0275eld"](16, 0, null, null, 8, "div", [["class", "home-video-box"]], null, null, null, null, null)), (n()(),
                                                                                e["\u0275eld"](17, 0, null, null, 0, "div", [["class", " my_video_btn_onload"]], null, [[null, "click"]], function (n, t, l) {
                                                                                    var e = !0;
                                                                                    return "click" === t && (e = !1 !== n.component.playPauseHomeVideo() && e),
                                                                                        e
                                                                                }, null, null)), (n()(),
                                                                                    e["\u0275eld"](18, 0, null, null, 4, "video", [["attr.paused", "true"], ["class", "testimonial-video homepage_video"], ["loop", ""], ["onloadedmetadata", "this.muted=true"], ["playsinline", ""], ["webkit-playsinline", ""], ["width", "100%"]], [[8, "poster", 4]], null, null, null, null)), (n()(),
                                                                                        e["\u0275and"](16777216, null, null, 1, null, y)), e["\u0275did"](20, 16384, null, 0, u.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                                                                                            ngIf: [0, "ngIf"]
                                                                                        }, null), (n()(),
                                                                                            e["\u0275and"](16777216, null, null, 1, null, w)), e["\u0275did"](22, 16384, null, 0, u.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                                                                                                ngIf: [0, "ngIf"]
                                                                                            }, null), (n()(),
                                                                                                e["\u0275and"](16777216, null, null, 1, null, $)), e["\u0275did"](24, 16384, null, 0, u.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                                                                                                    ngIf: [0, "ngIf"]
                                                                                                }, null), (n()(),
                                                                                                    e["\u0275and"](16777216, null, null, 1, null, I)), e["\u0275did"](26, 16384, null, 0, u.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                                                                                                        ngIf: [0, "ngIf"]
                                                                                                    }, null)], function (n, t) {
                                                                                                        var l = t.component;
                                                                                                        n(t, 12, 0, null == l.welcomeContent ? null : null == l.welcomeContent.home_about_us_group ? null : l.welcomeContent.home_about_us_group.home_about_us_more_info_links),
                                                                                                            n(t, 20, 0, l.isVideo),
                                                                                                            n(t, 22, 0, l.isVideo),
                                                                                                            n(t, 24, 0, l.isVideo),
                                                                                                            n(t, 26, 0, l.isPageLoaderLottie)
                                                                                                    }, function (n, t) {
                                                                                                        var l = t.component;
                                                                                                        n(t, 3, 0, null == l.welcomeContent ? null : null == l.welcomeContent.home_about_us_group ? null : l.welcomeContent.home_about_us_group.home_about_us_section_title),
                                                                                                            n(t, 7, 0, null == l.welcomeContent ? null : null == l.welcomeContent.home_about_us_group ? null : l.welcomeContent.home_about_us_group.home_about_us_section_content),
                                                                                                            n(t, 18, 0, l.getVideoSrc(null == l.welcomeContent ? null : null == l.welcomeContent.home_about_us_group ? null : null == l.welcomeContent.home_about_us_group.home_about_us_video_poster_image ? null : l.welcomeContent.home_about_us_group.home_about_us_video_poster_image.url))
                                                                                                    })
        }
        function T(n) {
            return e["\u0275vid"](0, [(n()(),
                e["\u0275eld"](0, 0, null, null, 6, "div", [["class", "col-12 col-md-6 col-lg-3 process-block"]], null, null, null, null, null)), (n()(),
                    e["\u0275eld"](1, 0, null, null, 5, "div", [["class", "process-box"]], null, null, null, null, null)), (n()(),
                        e["\u0275eld"](2, 0, null, null, 1, "div", [["class", "icon-box"]], null, null, null, null, null)), (n()(),
                            e["\u0275eld"](3, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), (n()(),
                                e["\u0275eld"](4, 0, null, null, 1, "h3", [], null, null, null, null, null)), (n()(),
                                    e["\u0275ted"](5, null, ["", ""])), (n()(),
                                        e["\u0275eld"](6, 0, null, null, 0, "p", [], [[8, "innerHTML", 1]], null, null, null, null))], null, function (n, t) {
                                            n(t, 3, 0, null == t.context.$implicit ? null : null == t.context.$implicit.work_process_image ? null : t.context.$implicit.work_process_image.url, e["\u0275inlineInterpolate"](1, "", null == t.context.$implicit ? null : null == t.context.$implicit.work_process_image ? null : t.context.$implicit.work_process_image.title, "")),
                                                n(t, 5, 0, null == t.context.$implicit ? null : t.context.$implicit.work_process_name),
                                                n(t, 6, 0, null == t.context.$implicit ? null : t.context.$implicit.work_process_description)
                                        })
        }
        function j(n) {
            return e["\u0275vid"](0, [(n()(),
                e["\u0275eld"](0, 0, null, null, 3, "div", [["class", "button-box"]], null, null, null, null, null)), (n()(),
                    e["\u0275eld"](1, 0, null, null, 2, "a", [["class", "link-button"]], [[1, "aria-label", 0], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (n, t, l) {
                        var o = !0;
                        return "click" === t && (o = !1 !== e["\u0275nov"](n, 2).onClick(l.button, l.ctrlKey, l.metaKey, l.shiftKey) && o),
                            o
                    }, null, null)), e["\u0275did"](2, 671744, null, 0, c.o, [c.m, c.a, u.LocationStrategy], {
                        routerLink: [0, "routerLink"]
                    }, null), (n()(),
                        e["\u0275ted"](3, null, [" ", " "]))], function (n, t) {
                            n(t, 2, 0, "/" + t.component.commonService.replaceRootURLToBlank(null == t.parent.parent.context.$implicit ? null : t.parent.parent.context.$implicit.work_process_button_page_link))
                        }, function (n, t) {
                            n(t, 1, 0, e["\u0275inlineInterpolate"](1, "", null == t.parent.parent.context.$implicit ? null : t.parent.parent.context.$implicit.work_process_button_text, ""), e["\u0275nov"](t, 2).target, e["\u0275nov"](t, 2).href),
                                n(t, 3, 0, null == t.parent.parent.context.$implicit ? null : t.parent.parent.context.$implicit.work_process_button_text)
                        })
        }
        function S(n) {
            return e["\u0275vid"](0, [(n()(),
                e["\u0275eld"](0, 0, null, null, 8, "section", [["class", "discovery-process-section"]], null, null, null, null, null)), (n()(),
                    e["\u0275eld"](1, 0, null, null, 7, "div", [["class", "container"]], null, null, null, null, null)), (n()(),
                        e["\u0275eld"](2, 0, null, null, 1, "h2", [["class", "mrg-b"]], null, null, null, null, null)), (n()(),
                            e["\u0275ted"](3, null, ["", ""])), (n()(),
                                e["\u0275eld"](4, 0, null, null, 2, "div", [["class", "row"]], null, null, null, null, null)), (n()(),
                                    e["\u0275and"](16777216, null, null, 1, null, T)), e["\u0275did"](6, 278528, null, 0, u.NgForOf, [e.ViewContainerRef, e.TemplateRef, e.IterableDiffers], {
                                        ngForOf: [0, "ngForOf"]
                                    }, null), (n()(),
                                        e["\u0275and"](16777216, null, null, 1, null, j)), e["\u0275did"](8, 16384, null, 0, u.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                                            ngIf: [0, "ngIf"]
                                        }, null)], function (n, t) {
                                            n(t, 6, 0, null == t.parent.context.$implicit ? null : t.parent.context.$implicit.home_work_process_details),
                                                n(t, 8, 0, null == t.parent.context.$implicit ? null : t.parent.context.$implicit.work_process_button_page_link)
                                        }, function (n, t) {
                                            n(t, 3, 0, null == t.parent.context.$implicit ? null : t.parent.context.$implicit.home_work_process_section_title)
                                        })
        }
        function L(n) {
            return e["\u0275vid"](0, [(n()(),
                e["\u0275eld"](0, 0, null, null, 11, "div", [["class", "our-services-inner"]], null, null, null, null, null)), (n()(),
                    e["\u0275eld"](1, 0, null, null, 10, "a", [["class", "service-box"]], [[8, "href", 4]], null, null, null, null)), e["\u0275did"](2, 278528, null, 0, u.NgStyle, [e.KeyValueDiffers, e.ElementRef, e.Renderer2], {
                        ngStyle: [0, "ngStyle"]
                    }, null), e["\u0275pod"](3, {
                        "background-image": 0
                    }), (n()(),
                        e["\u0275eld"](4, 0, null, null, 1, "div", [["class", "img-box"]], null, null, null, null, null)), (n()(),
                            e["\u0275eld"](5, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), (n()(),
                                e["\u0275eld"](6, 0, null, null, 1, "h4", [], null, null, null, null, null)), (n()(),
                                    e["\u0275ted"](7, null, ["", ""])), (n()(),
                                        e["\u0275eld"](8, 0, null, null, 1, "p", [], null, null, null, null, null)), (n()(),
                                            e["\u0275ted"](9, null, ["", ""])), (n()(),
                                                e["\u0275eld"](10, 0, null, null, 1, "span", [["class", "read-more-btn"]], null, null, null, null, null)), (n()(),
                                                    e["\u0275ted"](-1, null, ["Read More"]))], function (n, t) {
                                                        var l = n(t, 3, 0, t.component.setBackgroundGradientServices(null == t.context.$implicit ? null : t.context.$implicit.services_background_color, null == t.context.$implicit ? null : t.context.$implicit.services_background_color_for_gradient));
                                                        n(t, 2, 0, l)
                                                    }, function (n, t) {
                                                        n(t, 1, 0, "/" + t.component.commonService.replaceRootURLToBlank(null == t.context.$implicit ? null : t.context.$implicit.services_detail_page_link)),
                                                            n(t, 5, 0, null == t.context.$implicit ? null : t.context.$implicit.services_image.url, null == t.context.$implicit ? null : null == t.context.$implicit.servicesDetails ? null : t.context.$implicit.servicesDetails.services_image.title),
                                                            n(t, 7, 0, null == t.context.$implicit ? null : t.context.$implicit.services_name),
                                                            n(t, 9, 0, null == t.context.$implicit ? null : t.context.$implicit.services_description)
                                                    })
        }
        function N(n) {
            return e["\u0275vid"](0, [(n()(),
                e["\u0275eld"](0, 0, null, null, 6, "section", [["class", "our-services-section"]], null, null, null, null, null)), (n()(),
                    e["\u0275eld"](1, 0, null, null, 2, "div", [["class", "container"]], null, null, null, null, null)), (n()(),
                        e["\u0275eld"](2, 0, null, null, 1, "h2", [["class", "mrg-b"]], null, null, null, null, null)), (n()(),
                            e["\u0275ted"](3, null, ["", ""])), (n()(),
                                e["\u0275eld"](4, 0, null, null, 2, "div", [["class", "owl-carousel owl-theme our-services-slider-owl"]], null, null, null, null, null)), (n()(),
                                    e["\u0275and"](16777216, null, null, 1, null, L)), e["\u0275did"](6, 278528, null, 0, u.NgForOf, [e.ViewContainerRef, e.TemplateRef, e.IterableDiffers], {
                                        ngForOf: [0, "ngForOf"]
                                    }, null)], function (n, t) {
                                        n(t, 6, 0, null == t.parent.context.$implicit ? null : t.parent.context.$implicit.our_services_details)
                                    }, function (n, t) {
                                        n(t, 3, 0, null == t.parent.context.$implicit ? null : t.parent.context.$implicit.home_our_services)
                                    })
        }
        function V(n) {
            return e["\u0275vid"](0, [(n()(),
                e["\u0275eld"](0, 0, null, null, 3, "li", [["class", "nav-item"]], null, [[null, "click"]], function (n, t, l) {
                    var e = !0;
                    return "click" === t && (e = !1 !== n.component.filterTechnologyData(null == n.context.$implicit ? null : n.context.$implicit.class) && e),
                        e
                }, null, null)), (n()(),
                    e["\u0275eld"](1, 0, null, null, 2, "a", [["data-toggle", "tab"], ["role", "tab"]], [[8, "href", 4], [1, "aria-label", 0]], null, null, null, null)), e["\u0275did"](2, 278528, null, 0, u.NgClass, [e.IterableDiffers, e.KeyValueDiffers, e.ElementRef, e.Renderer2], {
                        ngClass: [0, "ngClass"]
                    }, null), (n()(),
                        e["\u0275ted"](3, null, [" ", " "]))], function (n, t) {
                            n(t, 2, 0, 0 == t.context.index ? "nav-link active" : "nav-link")
                        }, function (n, t) {
                            n(t, 1, 0, e["\u0275inlineInterpolate"](1, "#", null == t.context.$implicit ? null : t.context.$implicit.class, ""), e["\u0275inlineInterpolate"](1, "", null == t.context.$implicit ? null : t.context.$implicit.name, "")),
                                n(t, 3, 0, null == t.context.$implicit ? null : t.context.$implicit.name)
                        })
        }
        function z(n) {
            return e["\u0275vid"](0, [(n()(),
                e["\u0275eld"](0, 0, null, null, 5, "a", [["class", "icon-block"]], [[1, "aria-label", 0], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (n, t, l) {
                    var o = !0;
                    return "click" === t && (o = !1 !== e["\u0275nov"](n, 1).onClick(l.button, l.ctrlKey, l.metaKey, l.shiftKey) && o),
                        o
                }, null, null)), e["\u0275did"](1, 671744, null, 0, c.o, [c.m, c.a, u.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (n()(),
                    e["\u0275eld"](2, 0, null, null, 1, "div", [["class", "icon-box"]], null, null, null, null, null)), (n()(),
                        e["\u0275eld"](3, 0, null, null, 0, "img", [["class", "svg-convert"]], [[8, "src", 4], [8, "alt", 0]], [[null, "load"]], function (n, t, l) {
                            var e = !0
                                , o = n.component;
                            return "load" === t && (e = !1 !== o.commonService.callSVGConverterScript(o.filterTechnologiesData.length, n.parent.context.index) && e),
                                e
                        }, null, null)), (n()(),
                            e["\u0275eld"](4, 0, null, null, 1, "h5", [], null, null, null, null, null)), (n()(),
                                e["\u0275ted"](5, null, ["", ""]))], function (n, t) {
                                    n(t, 1, 0, "/" + t.component.commonService.replaceRootURLToBlank(null == t.parent.context.$implicit ? null : t.parent.context.$implicit.technology_page_url))
                                }, function (n, t) {
                                    n(t, 0, 0, e["\u0275inlineInterpolate"](1, "", null == t.parent.context.$implicit ? null : null == t.parent.context.$implicit.technology_image ? null : t.parent.context.$implicit.technology_image.title, ""), e["\u0275nov"](t, 1).target, e["\u0275nov"](t, 1).href),
                                        n(t, 3, 0, null == t.parent.context.$implicit ? null : null == t.parent.context.$implicit.technology_image ? null : t.parent.context.$implicit.technology_image.url, null == t.parent.context.$implicit ? null : null == t.parent.context.$implicit.technology_image ? null : t.parent.context.$implicit.technology_image.title),
                                        n(t, 5, 0, null == t.parent.context.$implicit ? null : t.parent.context.$implicit.technology_name)
                                })
        }
        function F(n) {
            return e["\u0275vid"](0, [(n()(),
                e["\u0275eld"](0, 0, null, null, 4, "a", [["class", "icon-block"]], [[1, "aria-label", 0]], null, null, null, null)), (n()(),
                    e["\u0275eld"](1, 0, null, null, 1, "div", [["class", "icon-box"]], null, null, null, null, null)), (n()(),
                        e["\u0275eld"](2, 0, null, null, 0, "img", [["class", "svg-convert"]], [[8, "src", 4], [8, "alt", 0]], [[null, "load"]], function (n, t, l) {
                            var e = !0
                                , o = n.component;
                            return "load" === t && (e = !1 !== o.commonService.callSVGConverterScript(o.filterTechnologiesData.length, n.parent.context.index) && e),
                                e
                        }, null, null)), (n()(),
                            e["\u0275eld"](3, 0, null, null, 1, "h5", [], null, null, null, null, null)), (n()(),
                                e["\u0275ted"](4, null, ["", ""]))], null, function (n, t) {
                                    n(t, 0, 0, e["\u0275inlineInterpolate"](1, "", null == t.parent.context.$implicit ? null : null == t.parent.context.$implicit.technology_image ? null : t.parent.context.$implicit.technology_image.title, "")),
                                        n(t, 2, 0, null == t.parent.context.$implicit ? null : null == t.parent.context.$implicit.technology_image ? null : t.parent.context.$implicit.technology_image.url, null == t.parent.context.$implicit ? null : null == t.parent.context.$implicit.technology_image ? null : t.parent.context.$implicit.technology_image.title),
                                        n(t, 4, 0, null == t.parent.context.$implicit ? null : t.parent.context.$implicit.technology_name)
                                })
        }
        function B(n) {
            return e["\u0275vid"](0, [(n()(),
                e["\u0275eld"](0, 0, null, null, 4, "div", [["class", "col-4 col-sm-4 col-md-3 col-lg-2"]], null, null, null, null, null)), (n()(),
                    e["\u0275and"](16777216, null, null, 1, null, z)), e["\u0275did"](2, 16384, null, 0, u.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                        ngIf: [0, "ngIf"]
                    }, null), (n()(),
                        e["\u0275and"](16777216, null, null, 1, null, F)), e["\u0275did"](4, 16384, null, 0, u.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                            ngIf: [0, "ngIf"]
                        }, null)], function (n, t) {
                            n(t, 2, 0, "" != (null == t.context.$implicit ? null : t.context.$implicit.technology_page_url)),
                                n(t, 4, 0, "" == (null == t.context.$implicit ? null : t.context.$implicit.technology_page_url))
                        }, null)
        }
        function D(n) {
            return e["\u0275vid"](0, [(n()(),
                e["\u0275eld"](0, 0, null, null, 13, "section", [["class", "technologies-section"]], null, null, null, null, null)), (n()(),
                    e["\u0275eld"](1, 0, null, null, 12, "div", [["class", "container"]], null, null, null, null, null)), (n()(),
                        e["\u0275eld"](2, 0, null, null, 1, "h2", [["class", "mrg-b"]], null, null, null, null, null)), (n()(),
                            e["\u0275ted"](3, null, ["", ""])), (n()(),
                                e["\u0275eld"](4, 0, null, null, 9, "div", [["class", "technologies-tab"]], null, null, null, null, null)), (n()(),
                                    e["\u0275eld"](5, 0, null, null, 2, "ul", [["class", "nav nav-tabs"], ["role", "tablist"]], null, null, null, null, null)), (n()(),
                                        e["\u0275and"](16777216, null, null, 1, null, V)), e["\u0275did"](7, 278528, null, 0, u.NgForOf, [e.ViewContainerRef, e.TemplateRef, e.IterableDiffers], {
                                            ngForOf: [0, "ngForOf"]
                                        }, null), (n()(),
                                            e["\u0275eld"](8, 0, null, null, 5, "div", [["class", "tab-content"]], null, null, null, null, null)), (n()(),
                                                e["\u0275eld"](9, 0, null, null, 4, "div", [["role", "tabpanel"]], [[8, "id", 0]], null, null, null, null)), e["\u0275did"](10, 278528, null, 0, u.NgClass, [e.IterableDiffers, e.KeyValueDiffers, e.ElementRef, e.Renderer2], {
                                                    ngClass: [0, "ngClass"]
                                                }, null), (n()(),
                                                    e["\u0275eld"](11, 0, null, null, 2, "div", [["class", "row"]], null, null, null, null, null)), (n()(),
                                                        e["\u0275and"](16777216, null, null, 1, null, B)), e["\u0275did"](13, 278528, null, 0, u.NgForOf, [e.ViewContainerRef, e.TemplateRef, e.IterableDiffers], {
                                                            ngForOf: [0, "ngForOf"]
                                                        }, null)], function (n, t) {
                                                            var l = t.component;
                                                            n(t, 7, 0, null == l.technologiesList ? null : l.technologiesList.technologies_types),
                                                                n(t, 10, 0, "tab-pane fade show in active"),
                                                                n(t, 13, 0, l.filterTechnologiesData)
                                                        }, function (n, t) {
                                                            var l = t.component;
                                                            n(t, 3, 0, null == l.technologiesList ? null : l.technologiesList.technologies_section_heading),
                                                                n(t, 9, 0, e["\u0275inlineInterpolate"](1, "", null == l.techType ? null : l.techType.class, ""))
                                                        })
        }
        function K(n) {
            return e["\u0275vid"](0, [(n()(),
                e["\u0275eld"](0, 0, null, null, 5, null, null, null, null, null, null, null)), (n()(),
                    e["\u0275eld"](1, 0, null, null, 4, "picture", [], null, null, null, null, null)), (n()(),
                        e["\u0275eld"](2, 0, null, null, 0, "source", [["type", "image/webp"]], [[1, "defaultImage", 0], [1, "lazyLoad", 0]], null, null, null, null)), (n()(),
                            e["\u0275eld"](3, 0, null, null, 0, "source", [], [[1, "defaultImage", 0], [1, "lazyLoad", 0], [8, "type", 0]], null, null, null, null)), (n()(),
                                e["\u0275eld"](4, 0, null, null, 1, "img", [], [[8, "alt", 0]], null, null, null, null)), e["\u0275did"](5, 1720320, null, 0, a.a, [e.ElementRef, e.NgZone, e.PLATFORM_ID, [2, "options"]], {
                                    lazyImage: [0, "lazyImage"],
                                    defaultImage: [1, "defaultImage"]
                                }, null)], function (n, t) {
                                    n(t, 5, 0, null == t.parent.context.$implicit ? null : null == t.parent.context.$implicit.portfolio_project_image ? null : t.parent.context.$implicit.portfolio_project_image.url, t.component.defaultImage)
                                }, function (n, t) {
                                    var l = t.component;
                                    n(t, 2, 0, l.defaultImage, l.commonService.getWebp(null == t.parent.context.$implicit ? null : null == t.parent.context.$implicit.portfolio_project_image ? null : t.parent.context.$implicit.portfolio_project_image.url)),
                                        n(t, 3, 0, l.defaultImage, null == t.parent.context.$implicit ? null : null == t.parent.context.$implicit.portfolio_project_image ? null : t.parent.context.$implicit.portfolio_project_image.url, e["\u0275inlineInterpolate"](1, "image/", l.commonService.getImgtype(null == t.parent.context.$implicit ? null : null == t.parent.context.$implicit.portfolio_project_image ? null : t.parent.context.$implicit.portfolio_project_image.url), "")),
                                        n(t, 4, 0, e["\u0275inlineInterpolate"](1, "", null == t.parent.context.$implicit ? null : null == t.parent.context.$implicit.portfolio_project_image ? null : t.parent.context.$implicit.portfolio_project_image.alt, ""))
                                })
        }
        function U(n) {
            return e["\u0275vid"](0, [(n()(),
                e["\u0275eld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (n()(),
                    e["\u0275eld"](1, 0, null, null, 3, "picture", [], null, null, null, null, null)), (n()(),
                        e["\u0275eld"](2, 0, null, null, 0, "source", [["type", "image/webp"]], [[8, "srcset", 4]], null, null, null, null)), (n()(),
                            e["\u0275eld"](3, 0, null, null, 0, "source", [], [[8, "srcset", 4], [8, "type", 0]], null, null, null, null)), (n()(),
                                e["\u0275eld"](4, 0, null, null, 0, "img", [], [[8, "alt", 0], [8, "src", 4]], null, null, null, null))], null, function (n, t) {
                                    var l = t.component;
                                    n(t, 2, 0, l.commonService.getWebp(null == t.parent.context.$implicit ? null : null == t.parent.context.$implicit.portfolio_project_image ? null : t.parent.context.$implicit.portfolio_project_image.url)),
                                        n(t, 3, 0, null == t.parent.context.$implicit ? null : null == t.parent.context.$implicit.portfolio_project_image ? null : t.parent.context.$implicit.portfolio_project_image.url, e["\u0275inlineInterpolate"](1, "image/", l.commonService.getImgtype(null == t.parent.context.$implicit ? null : null == t.parent.context.$implicit.portfolio_project_image ? null : t.parent.context.$implicit.portfolio_project_image.url), "")),
                                        n(t, 4, 0, e["\u0275inlineInterpolate"](1, "", null == t.parent.context.$implicit ? null : null == t.parent.context.$implicit.portfolio_project_image ? null : t.parent.context.$implicit.portfolio_project_image.alt, ""), null == t.parent.context.$implicit ? null : null == t.parent.context.$implicit.portfolio_project_image ? null : t.parent.context.$implicit.portfolio_project_image.url)
                                })
        }
        function H(n) {
            return e["\u0275vid"](0, [(n()(),
                e["\u0275eld"](0, 0, null, null, 31, "div", [["class", "case-study-box"]], null, null, null, null, null)), (n()(),
                    e["\u0275eld"](1, 0, null, null, 30, "a", [["class", "cs-main"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (n, t, l) {
                        var o = !0;
                        return "click" === t && (o = !1 !== e["\u0275nov"](n, 2).onClick(l.button, l.ctrlKey, l.metaKey, l.shiftKey) && o),
                            o
                    }, null, null)), e["\u0275did"](2, 671744, null, 0, c.o, [c.m, c.a, u.LocationStrategy], {
                        routerLink: [0, "routerLink"]
                    }, null), (n()(),
                        e["\u0275eld"](3, 0, null, null, 28, "div", [["class", "cs-info"]], null, null, null, null, null)), e["\u0275did"](4, 278528, null, 0, u.NgStyle, [e.KeyValueDiffers, e.ElementRef, e.Renderer2], {
                            ngStyle: [0, "ngStyle"]
                        }, null), e["\u0275pod"](5, {
                            "background-image": 0
                        }), (n()(),
                            e["\u0275eld"](6, 0, null, null, 25, "div", [["class", "case-study-block"]], null, null, null, null, null)), (n()(),
                                e["\u0275eld"](7, 0, null, null, 19, "div", [["class", "cs-detail"]], null, null, null, null, null)), (n()(),
                                    e["\u0275eld"](8, 0, null, null, 1, "p", [["class", "cs-title"]], null, null, null, null, null)), (n()(),
                                        e["\u0275ted"](9, null, [" ", " "])), (n()(),
                                            e["\u0275eld"](10, 0, null, null, 1, "h2", [["class", "cs-description"]], null, null, null, null, null)), (n()(),
                                                e["\u0275ted"](11, null, ["", ""])), (n()(),
                                                    e["\u0275eld"](12, 0, null, null, 14, "div", [["class", "client-says"]], null, null, null, null, null)), (n()(),
                                                        e["\u0275eld"](13, 0, null, null, 1, "h5", [], null, null, null, null, null)), (n()(),
                                                            e["\u0275ted"](14, null, ["", ""])), (n()(),
                                                                e["\u0275eld"](15, 0, null, null, 11, "div", [["class", "d-inline-flex client-box"]], null, null, null, null, null)), (n()(),
                                                                    e["\u0275eld"](16, 0, null, null, 5, "div", [["class", "client-thumb"]], null, null, null, null, null)), (n()(),
                                                                        e["\u0275eld"](17, 0, null, null, 4, "picture", [], null, null, null, null, null)), (n()(),
                                                                            e["\u0275eld"](18, 0, null, null, 0, "source", [["type", "image/webp"]], [[1, "defaultImage", 0], [1, "lazyLoad", 0]], null, null, null, null)), (n()(),
                                                                                e["\u0275eld"](19, 0, null, null, 0, "source", [], [[1, "defaultImage", 0], [1, "lazyLoad", 0], [8, "type", 0]], null, null, null, null)), (n()(),
                                                                                    e["\u0275eld"](20, 0, null, null, 1, "img", [], [[8, "alt", 0]], null, null, null, null)), e["\u0275did"](21, 1720320, null, 0, a.a, [e.ElementRef, e.NgZone, e.PLATFORM_ID, [2, "options"]], {
                                                                                        lazyImage: [0, "lazyImage"],
                                                                                        defaultImage: [1, "defaultImage"]
                                                                                    }, null), (n()(),
                                                                                        e["\u0275eld"](22, 0, null, null, 4, "div", [["class", "client-des"]], null, null, null, null, null)), (n()(),
                                                                                            e["\u0275eld"](23, 0, null, null, 1, "h6", [], null, null, null, null, null)), (n()(),
                                                                                                e["\u0275ted"](24, null, ["", ""])), (n()(),
                                                                                                    e["\u0275eld"](25, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(),
                                                                                                        e["\u0275ted"](26, null, ["", ""])), (n()(),
                                                                                                            e["\u0275eld"](27, 0, null, null, 4, "div", [["class", "cs-thumb-img"]], null, null, null, null, null)), (n()(),
                                                                                                                e["\u0275and"](16777216, null, null, 1, null, K)), e["\u0275did"](29, 16384, null, 0, u.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                                                                                                                    ngIf: [0, "ngIf"]
                                                                                                                }, null), (n()(),
                                                                                                                    e["\u0275and"](16777216, null, null, 1, null, U)), e["\u0275did"](31, 16384, null, 0, u.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                                                                                                                        ngIf: [0, "ngIf"]
                                                                                                                    }, null)], function (n, t) {
                                                                                                                        var l = t.component;
                                                                                                                        n(t, 2, 0, "/" + l.commonService.replaceRootURLToBlank(null == t.context.$implicit ? null : t.context.$implicit.portfolio_project_details_page_link));
                                                                                                                        var e = n(t, 5, 0, l.setBackgroundGradient(null == t.context.$implicit ? null : t.context.$implicit.portfolio_section_background_color, null == t.context.$implicit ? null : t.context.$implicit.portfolio_section_background_color2_for_gradient));
                                                                                                                        n(t, 4, 0, e),
                                                                                                                            n(t, 21, 0, null == t.context.$implicit ? null : null == t.context.$implicit.portfolio_project_client_picture ? null : t.context.$implicit.portfolio_project_client_picture.url, l.defaultImage),
                                                                                                                            n(t, 29, 0, !l.isMobile),
                                                                                                                            n(t, 31, 0, l.isMobile)
                                                                                                                    }, function (n, t) {
                                                                                                                        var l = t.component;
                                                                                                                        n(t, 1, 0, e["\u0275nov"](t, 2).target, e["\u0275nov"](t, 2).href),
                                                                                                                            n(t, 9, 0, null == t.context.$implicit ? null : t.context.$implicit.portfolio_project_name),
                                                                                                                            n(t, 11, 0, null == t.context.$implicit ? null : t.context.$implicit.portfolio_project_title),
                                                                                                                            n(t, 14, 0, null == t.context.$implicit ? null : t.context.$implicit.portfolio_project_client_comment),
                                                                                                                            n(t, 18, 0, l.defaultImage, l.commonService.getWebp(null == t.context.$implicit ? null : null == t.context.$implicit.portfolio_project_client_picture ? null : t.context.$implicit.portfolio_project_client_picture.url)),
                                                                                                                            n(t, 19, 0, l.defaultImage, null == t.context.$implicit ? null : null == t.context.$implicit.portfolio_project_client_picture ? null : t.context.$implicit.portfolio_project_client_picture.url, e["\u0275inlineInterpolate"](1, "image/", l.commonService.getImgtype(null == t.context.$implicit ? null : null == t.context.$implicit.portfolio_project_client_picture ? null : t.context.$implicit.portfolio_project_client_picture.url), "")),
                                                                                                                            n(t, 20, 0, e["\u0275inlineInterpolate"](1, "", null == t.context.$implicit ? null : null == t.context.$implicit.portfolio_project_client_picture ? null : t.context.$implicit.portfolio_project_client_picture.alt, "")),
                                                                                                                            n(t, 24, 0, null == t.context.$implicit ? null : t.context.$implicit.portfolio_project_client_name),
                                                                                                                            n(t, 26, 0, null == t.context.$implicit ? null : t.context.$implicit.portfolio_project_client_designation)
                                                                                                                    })
        }
        function A(n) {
            return e["\u0275vid"](0, [(n()(),
                e["\u0275eld"](0, 0, null, null, 3, "div", [["class", "button-box"]], null, null, null, null, null)), (n()(),
                    e["\u0275eld"](1, 0, null, null, 2, "a", [["class", "link-button"]], [[1, "aria-label", 0], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (n, t, l) {
                        var o = !0;
                        return "click" === t && (o = !1 !== e["\u0275nov"](n, 2).onClick(l.button, l.ctrlKey, l.metaKey, l.shiftKey) && o),
                            o
                    }, null, null)), e["\u0275did"](2, 671744, null, 0, c.o, [c.m, c.a, u.LocationStrategy], {
                        routerLink: [0, "routerLink"]
                    }, null), (n()(),
                        e["\u0275ted"](3, null, ["", ""]))], function (n, t) {
                            var l = t.component;
                            n(t, 2, 0, "/" + l.commonService.replaceRootURLToBlank(null == l.caseStudies ? null : l.caseStudies.home_portfolio_button_link))
                        }, function (n, t) {
                            var l = t.component;
                            n(t, 1, 0, e["\u0275inlineInterpolate"](1, "", null == l.caseStudies ? null : l.caseStudies.home_portfolio_button_name, ""), e["\u0275nov"](t, 2).target, e["\u0275nov"](t, 2).href),
                                n(t, 3, 0, null == l.caseStudies ? null : l.caseStudies.home_portfolio_button_name)
                        })
        }
        function Y(n) {
            return e["\u0275vid"](0, [(n()(),
                e["\u0275eld"](0, 0, null, null, 8, "section", [["class", "case-study-section"]], null, null, null, null, null)), (n()(),
                    e["\u0275eld"](1, 0, null, null, 7, "div", [["class", "container"]], null, null, null, null, null)), (n()(),
                        e["\u0275eld"](2, 0, null, null, 1, "h2", [], null, null, null, null, null)), (n()(),
                            e["\u0275ted"](3, null, ["", ""])), (n()(),
                                e["\u0275eld"](4, 0, null, null, 2, "div", [["class", "our-work-block-slider"]], null, null, null, null, null)), (n()(),
                                    e["\u0275and"](16777216, null, null, 1, null, H)), e["\u0275did"](6, 278528, null, 0, u.NgForOf, [e.ViewContainerRef, e.TemplateRef, e.IterableDiffers], {
                                        ngForOf: [0, "ngForOf"]
                                    }, null), (n()(),
                                        e["\u0275and"](16777216, null, null, 1, null, A)), e["\u0275did"](8, 16384, null, 0, u.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                                            ngIf: [0, "ngIf"]
                                        }, null)], function (n, t) {
                                            var l = t.component;
                                            n(t, 6, 0, null == l.caseStudies ? null : l.caseStudies.home_portfolio_details),
                                                n(t, 8, 0, null == l.caseStudies ? null : l.caseStudies.home_portfolio_button_link)
                                        }, function (n, t) {
                                            var l = t.component;
                                            n(t, 3, 0, null == l.caseStudies ? null : l.caseStudies.home_portfolio_section_title)
                                        })
        }
        function E(n) {
            return e["\u0275vid"](0, [(n()(),
                e["\u0275eld"](0, 0, null, null, 3, "div", [["class", "button-box"]], null, null, null, null, null)), (n()(),
                    e["\u0275eld"](1, 0, null, null, 2, "a", [["class", "link-button"]], [[1, "aria-label", 0], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (n, t, l) {
                        var o = !0;
                        return "click" === t && (o = !1 !== e["\u0275nov"](n, 2).onClick(l.button, l.ctrlKey, l.metaKey, l.shiftKey) && o),
                            o
                    }, null, null)), e["\u0275did"](2, 671744, null, 0, c.o, [c.m, c.a, u.LocationStrategy], {
                        routerLink: [0, "routerLink"]
                    }, null), (n()(),
                        e["\u0275ted"](3, null, ["", ""]))], function (n, t) {
                            n(t, 2, 0, "/" + t.component.commonService.replaceRootURLToBlank(null == t.parent.parent.context.$implicit ? null : t.parent.parent.context.$implicit.home_page_jugaad_section_button_link))
                        }, function (n, t) {
                            n(t, 1, 0, e["\u0275inlineInterpolate"](1, "", null == t.parent.parent.context.$implicit ? null : t.parent.parent.context.$implicit.home_page_jugaad_section_button_text, ""), e["\u0275nov"](t, 2).target, e["\u0275nov"](t, 2).href),
                                n(t, 3, 0, null == t.parent.parent.context.$implicit ? null : t.parent.parent.context.$implicit.home_page_jugaad_section_button_text)
                        })
        }
        function q(n) {
            return e["\u0275vid"](0, [(n()(),
                e["\u0275eld"](0, 0, null, null, 12, "section", [["class", "jugaad-section"]], null, null, null, null, null)), (n()(),
                    e["\u0275eld"](1, 0, null, null, 11, "div", [["class", "container"]], null, null, null, null, null)), (n()(),
                        e["\u0275eld"](2, 0, null, null, 1, "h2", [], null, null, null, null, null)), (n()(),
                            e["\u0275ted"](3, null, ["", ""])), (n()(),
                                e["\u0275eld"](4, 0, null, null, 0, "p", [], [[8, "innerHTML", 1]], null, null, null, null)), (n()(),
                                    e["\u0275eld"](5, 0, null, null, 5, "div", [["class", "jugaad-video"], ["id", "video-home-jugaad"]], null, null, null, null, null)), (n()(),
                                        e["\u0275eld"](6, 0, null, null, 4, "div", [["class", "jugaad-video-sec embed-responsive embed-responsive-16by9"]], null, null, null, null, null)), (n()(),
                                            e["\u0275eld"](7, 0, null, null, 0, "div", [["class", "jugaad-video-btn-play"]], null, null, null, null, null)), (n()(),
                                                e["\u0275eld"](8, 0, null, null, 1, "div", [["class", "jugaad-video-img-play"]], null, null, null, null, null)), (n()(),
                                                    e["\u0275eld"](9, 0, null, null, 0, "img", [["alt", "video"]], [[8, "src", 4]], null, null, null, null)), (n()(),
                                                        e["\u0275eld"](10, 0, null, null, 0, "div", [["id", "iframe_div"]], null, null, null, null, null)), (n()(),
                                                            e["\u0275and"](16777216, null, null, 1, null, E)), e["\u0275did"](12, 16384, null, 0, u.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                                                                ngIf: [0, "ngIf"]
                                                            }, null)], function (n, t) {
                                                                n(t, 12, 0, null == t.parent.context.$implicit ? null : t.parent.context.$implicit.home_page_jugaad_section_button_link)
                                                            }, function (n, t) {
                                                                var l = t.component;
                                                                n(t, 3, 0, null == t.parent.context.$implicit ? null : t.parent.context.$implicit.home_page_jugaad_section_title),
                                                                    n(t, 4, 0, null == t.parent.context.$implicit ? null : t.parent.context.$implicit.home_page_jugaad_section_content),
                                                                    n(t, 9, 0, l.getVideoSrc(null == t.parent.context.$implicit ? null : null == t.parent.context.$implicit.home_page_jugaad_video_poster_image ? null : t.parent.context.$implicit.home_page_jugaad_video_poster_image.url))
                                                            })
        }
        function Z(n) {
            return e["\u0275vid"](0, [(n()(),
                e["\u0275eld"](0, 0, null, null, 3, "div", [["class", "button-box"]], null, null, null, null, null)), (n()(),
                    e["\u0275eld"](1, 0, null, null, 2, "a", [["class", "link-button"]], [[1, "aria-label", 0], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (n, t, l) {
                        var o = !0;
                        return "click" === t && (o = !1 !== e["\u0275nov"](n, 2).onClick(l.button, l.ctrlKey, l.metaKey, l.shiftKey) && o),
                            o
                    }, null, null)), e["\u0275did"](2, 671744, null, 0, c.o, [c.m, c.a, u.LocationStrategy], {
                        routerLink: [0, "routerLink"]
                    }, null), (n()(),
                        e["\u0275ted"](3, null, ["", ""]))], function (n, t) {
                            n(t, 2, 0, "/" + t.component.commonService.replaceRootURLToBlank(null == t.parent.parent.context.$implicit ? null : t.parent.parent.context.$implicit.guarantee_section_trail_button_link))
                        }, function (n, t) {
                            n(t, 1, 0, e["\u0275inlineInterpolate"](1, "", null == t.parent.parent.context.$implicit ? null : t.parent.parent.context.$implicit.guarantee_section_trail_button_text, ""), e["\u0275nov"](t, 2).target, e["\u0275nov"](t, 2).href),
                                n(t, 3, 0, null == t.parent.parent.context.$implicit ? null : t.parent.parent.context.$implicit.guarantee_section_trail_button_text)
                        })
        }
        function J(n) {
            return e["\u0275vid"](0, [(n()(),
                e["\u0275eld"](0, 0, null, null, 14, "section", [["class", "satisfaction-guarantee"]], null, null, null, null, null)), (n()(),
                    e["\u0275eld"](1, 0, null, null, 13, "div", [["class", "container"]], null, null, null, null, null)), (n()(),
                        e["\u0275eld"](2, 0, null, null, 12, "div", [["class", "row align-items-center"]], null, null, null, null, null)), (n()(),
                            e["\u0275eld"](3, 0, null, null, 8, "div", [["class", "col-12 col-md-6 order-2 order-md-1"]], null, null, null, null, null)), (n()(),
                                e["\u0275eld"](4, 0, null, null, 7, "div", [["class", "satisfaction-content"]], null, null, null, null, null)), (n()(),
                                    e["\u0275eld"](5, 0, null, null, 1, "h5", [], null, null, null, null, null)), (n()(),
                                        e["\u0275ted"](6, null, ["", ""])), (n()(),
                                            e["\u0275eld"](7, 0, null, null, 1, "h2", [], null, null, null, null, null)), (n()(),
                                                e["\u0275ted"](8, null, ["", ""])), (n()(),
                                                    e["\u0275eld"](9, 0, null, null, 0, "p", [], [[8, "innerHTML", 1]], null, null, null, null)), (n()(),
                                                        e["\u0275and"](16777216, null, null, 1, null, Z)), e["\u0275did"](11, 16384, null, 0, u.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                                                            ngIf: [0, "ngIf"]
                                                        }, null), (n()(),
                                                            e["\u0275eld"](12, 0, null, null, 2, "div", [["class", "col-12 col-md-6 order-1 order-md-2"]], null, null, null, null, null)), (n()(),
                                                                e["\u0275eld"](13, 0, null, null, 1, "div", [["class", "satisfaction-img"]], null, null, null, null, null)), (n()(),
                                                                    e["\u0275eld"](14, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null))], function (n, t) {
                                                                        n(t, 11, 0, null == t.parent.context.$implicit ? null : t.parent.context.$implicit.guarantee_section_trail_button_link)
                                                                    }, function (n, t) {
                                                                        n(t, 6, 0, null == t.parent.context.$implicit ? null : t.parent.context.$implicit.guarantee_section_heading),
                                                                            n(t, 8, 0, null == t.parent.context.$implicit ? null : t.parent.context.$implicit.guarantee_section_title),
                                                                            n(t, 9, 0, null == t.parent.context.$implicit ? null : t.parent.context.$implicit.guarantee_section_content),
                                                                            n(t, 14, 0, null == t.parent.context.$implicit ? null : null == t.parent.context.$implicit.guarantee_section_image ? null : t.parent.context.$implicit.guarantee_section_image.url, null == t.parent.context.$implicit ? null : null == t.parent.context.$implicit.guarantee_section_image ? null : t.parent.context.$implicit.guarantee_section_image.title)
                                                                    })
        }
        function G(n) {
            return e["\u0275vid"](0, [(n()(),
                e["\u0275eld"](0, 0, null, null, 9, "div", [], null, null, null, null, null)), (n()(),
                    e["\u0275eld"](1, 0, null, null, 8, "div", [["class", "testimonial-box"]], null, null, null, null, null)), (n()(),
                        e["\u0275eld"](2, 0, null, null, 1, "div", [["class", "client-img"]], null, null, null, null, null)), (n()(),
                            e["\u0275eld"](3, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), (n()(),
                                e["\u0275eld"](4, 0, null, null, 5, "div", [["class", "client-video"]], null, null, null, null, null)), (n()(),
                                    e["\u0275eld"](5, 0, null, null, 1, "a", [["attr.aria-label", "Play"], ["class", "video-btn-play-client fancybox-media"], ["data-fancybox", ""]], [[8, "href", 4]], null, null, null, null)), (n()(),
                                        e["\u0275eld"](6, 0, null, null, 0, "img", [["alt", "play"], ["src", "../../assets/images/video-play.svg"], ["title", "Play"]], null, null, null, null, null)), (n()(),
                                            e["\u0275eld"](7, 0, null, null, 2, "div", [["class", "client-name text-right"]], null, null, null, null, null)), (n()(),
                                                e["\u0275eld"](8, 0, null, null, 1, "h3", [], null, null, null, null, null)), (n()(),
                                                    e["\u0275ted"](9, null, ["", ""]))], null, function (n, t) {
                                                        n(t, 3, 0, null == t.context.$implicit ? null : null == t.context.$implicit.success_stories_image ? null : t.context.$implicit.success_stories_image.url, null == t.context.$implicit ? null : null == t.context.$implicit.success_stories_image ? null : t.context.$implicit.success_stories_image.title),
                                                            n(t, 5, 0, e["\u0275inlineInterpolate"](1, "", null == t.context.$implicit ? null : t.context.$implicit.success_stories_video_url, "")),
                                                            n(t, 9, 0, null == t.context.$implicit ? null : t.context.$implicit.success_stories_client_name)
                                                    })
        }
        function W(n) {
            return e["\u0275vid"](0, [(n()(),
                e["\u0275eld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (n()(),
                    e["\u0275and"](16777216, null, null, 1, null, G)), e["\u0275did"](2, 278528, null, 0, u.NgForOf, [e.ViewContainerRef, e.TemplateRef, e.IterableDiffers], {
                        ngForOf: [0, "ngForOf"]
                    }, null), (n()(),
                        e["\u0275and"](0, null, null, 0))], function (n, t) {
                            var l = t.component;
                            n(t, 2, 0, null == l.clientTestimonialVideos ? null : l.clientTestimonialVideos.success_stories)
                        }, null)
        }
        function X(n) {
            return e["\u0275vid"](0, [(n()(),
                e["\u0275eld"](0, 0, null, null, 6, "section", [["class", "client-testimonial-section"]], null, null, null, null, null)), (n()(),
                    e["\u0275eld"](1, 0, null, null, 2, "div", [["class", "container"]], null, null, null, null, null)), (n()(),
                        e["\u0275eld"](2, 0, null, null, 1, "h2", [["class", "mrg-b"]], null, null, null, null, null)), (n()(),
                            e["\u0275ted"](3, null, ["", ""])), (n()(),
                                e["\u0275eld"](4, 0, null, null, 2, "div", [["class", "home-client-testimonial"]], null, null, null, null, null)), (n()(),
                                    e["\u0275and"](16777216, null, null, 1, null, W)), e["\u0275did"](6, 16384, null, 0, u.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                                        ngIf: [0, "ngIf"]
                                    }, null)], function (n, t) {
                                        n(t, 6, 0, t.component.clientTestimonialVideos)
                                    }, function (n, t) {
                                        var l = t.component;
                                        n(t, 3, 0, null == l.clientTestimonialVideos ? null : l.clientTestimonialVideos.success_stories_section_heading)
                                    })
        }
        function Q(n) {
            return e["\u0275vid"](0, [(n()(),
                e["\u0275eld"](0, 0, null, null, 4, "div", [["class", "button-box"]], null, null, null, null, null)), (n()(),
                    e["\u0275eld"](1, 0, null, null, 3, "a", [["class", "link-button"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (n, t, l) {
                        var o = !0;
                        return "click" === t && (o = !1 !== e["\u0275nov"](n, 2).onClick(l.button, l.ctrlKey, l.metaKey, l.shiftKey) && o),
                            o
                    }, null, null)), e["\u0275did"](2, 671744, null, 0, c.o, [c.m, c.a, u.LocationStrategy], {
                        routerLink: [0, "routerLink"]
                    }, null), (n()(),
                        e["\u0275ted"](3, null, [" ", " "])), (n()(),
                            e["\u0275eld"](4, 0, null, null, 0, "span", [["_ngcontent-c1", ""], ["class", "fa fa-long-arrow-right"]], null, null, null, null, null))], function (n, t) {
                                n(t, 2, 0, "/" + t.component.commonService.replaceRootURLToBlank(null == t.parent.parent.context.$implicit ? null : t.parent.parent.context.$implicit.home_globe_button_link))
                            }, function (n, t) {
                                n(t, 1, 0, e["\u0275nov"](t, 2).target, e["\u0275nov"](t, 2).href),
                                    n(t, 3, 0, null == t.parent.parent.context.$implicit ? null : t.parent.parent.context.$implicit.home_globe_button_text)
                            })
        }
        function nn(n) {
            return e["\u0275vid"](0, [(n()(),
                e["\u0275eld"](0, 0, null, null, 10, "section", [["class", "home-contact-section"]], null, null, null, null, null)), (n()(),
                    e["\u0275eld"](1, 0, null, null, 9, "div", [["class", "container"]], null, null, null, null, null)), (n()(),
                        e["\u0275eld"](2, 0, null, null, 8, "div", [["class", "row"]], null, null, null, null, null)), (n()(),
                            e["\u0275eld"](3, 0, null, null, 7, "div", [["class", "col-12 col-md-8 col-lg-7"]], null, null, null, null, null)), (n()(),
                                e["\u0275eld"](4, 0, null, null, 6, "div", [["class", "contact-section-box"]], null, null, null, null, null)), (n()(),
                                    e["\u0275eld"](5, 0, null, null, 1, "p", [], null, null, null, null, null)), (n()(),
                                        e["\u0275ted"](6, null, ["", ""])), (n()(),
                                            e["\u0275eld"](7, 0, null, null, 0, "h2", [], [[8, "innerHTML", 1]], null, null, null, null)), (n()(),
                                                e["\u0275eld"](8, 0, null, null, 0, "p", [], [[8, "innerHTML", 1]], null, null, null, null)), (n()(),
                                                    e["\u0275and"](16777216, null, null, 1, null, Q)), e["\u0275did"](10, 16384, null, 0, u.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                                                        ngIf: [0, "ngIf"]
                                                    }, null)], function (n, t) {
                                                        n(t, 10, 0, null == t.parent.context.$implicit ? null : t.parent.context.$implicit.home_globe_button_link)
                                                    }, function (n, t) {
                                                        n(t, 6, 0, null == t.parent.context.$implicit ? null : t.parent.context.$implicit.home_globe_section_title),
                                                            n(t, 7, 0, null == t.parent.context.$implicit ? null : t.parent.context.$implicit.home_globe_section_heading),
                                                            n(t, 8, 0, null == t.parent.context.$implicit ? null : t.parent.context.$implicit.home_globe_section_description)
                                                    })
        }
        function tn(n) {
            return e["\u0275vid"](0, [(n()(),
                e["\u0275eld"](0, 0, null, null, 16, null, null, null, null, null, null, null)), (n()(),
                    e["\u0275and"](16777216, null, null, 1, null, S)), e["\u0275did"](2, 16384, null, 0, u.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                        ngIf: [0, "ngIf"]
                    }, null), (n()(),
                        e["\u0275and"](16777216, null, null, 1, null, N)), e["\u0275did"](4, 16384, null, 0, u.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                            ngIf: [0, "ngIf"]
                        }, null), (n()(),
                            e["\u0275and"](16777216, null, null, 1, null, D)), e["\u0275did"](6, 16384, null, 0, u.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                                ngIf: [0, "ngIf"]
                            }, null), (n()(),
                                e["\u0275and"](16777216, null, null, 1, null, Y)), e["\u0275did"](8, 16384, null, 0, u.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                                    ngIf: [0, "ngIf"]
                                }, null), (n()(),
                                    e["\u0275and"](16777216, null, null, 1, null, q)), e["\u0275did"](10, 16384, null, 0, u.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                                        ngIf: [0, "ngIf"]
                                    }, null), (n()(),
                                        e["\u0275and"](16777216, null, null, 1, null, J)), e["\u0275did"](12, 16384, null, 0, u.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                                            ngIf: [0, "ngIf"]
                                        }, null), (n()(),
                                            e["\u0275and"](16777216, null, null, 1, null, X)), e["\u0275did"](14, 16384, null, 0, u.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                                                ngIf: [0, "ngIf"]
                                            }, null), (n()(),
                                                e["\u0275and"](16777216, null, null, 1, null, nn)), e["\u0275did"](16, 16384, null, 0, u.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                                                    ngIf: [0, "ngIf"]
                                                }, null), (n()(),
                                                    e["\u0275and"](0, null, null, 0))], function (n, t) {
                                                        n(t, 2, 0, "home_work_process_section" == (null == t.context.$implicit ? null : t.context.$implicit.acf_fc_layout)),
                                                            n(t, 4, 0, "home_our_services" == (null == t.context.$implicit ? null : t.context.$implicit.acf_fc_layout)),
                                                            n(t, 6, 0, "show_technologies_tabbing" == (null == t.context.$implicit ? null : t.context.$implicit.acf_fc_layout)),
                                                            n(t, 8, 0, "show_portfolio_on_home_page" == (null == t.context.$implicit ? null : t.context.$implicit.acf_fc_layout)),
                                                            n(t, 10, 0, "home_page_jugaad_section" == (null == t.context.$implicit ? null : t.context.$implicit.acf_fc_layout)),
                                                            n(t, 12, 0, "guarantee_section" == (null == t.context.$implicit ? null : t.context.$implicit.acf_fc_layout)),
                                                            n(t, 14, 0, "show_clients_on_home_page" == (null == t.context.$implicit ? null : t.context.$implicit.acf_fc_layout)),
                                                            n(t, 16, 0, "home_contact_us_section" == (null == t.context.$implicit ? null : t.context.$implicit.acf_fc_layout))
                                                    }, null)
        }
        function ln(n) {
            return e["\u0275vid"](0, [e["\u0275pid"](0, g.c, [p.c]), e["\u0275qud"](402653184, 1, {
                videoplayer: 0
            }), (n()(),
                e["\u0275eld"](2, 0, null, null, 0, "link", [["async", ""], ["rel", "stylesheet"]], [[8, "href", 5]], null, null, null, null)), (n()(),
                    e["\u0275eld"](3, 0, null, null, 0, "link", [["async", ""], ["rel", "stylesheet"]], [[8, "href", 5]], null, null, null, null)), (n()(),
                        e["\u0275eld"](4, 0, null, null, 0, "link", [["async", ""], ["rel", "stylesheet"]], [[8, "href", 5]], null, null, null, null)), (n()(),
                            e["\u0275eld"](5, 0, null, null, 7, "div", [], null, null, null, null, null)), e["\u0275did"](6, 278528, null, 0, u.NgClass, [e.IterableDiffers, e.KeyValueDiffers, e.ElementRef, e.Renderer2], {
                                ngClass: [0, "ngClass"]
                            }, null), (n()(),
                                e["\u0275and"](16777216, null, null, 1, null, v)), e["\u0275did"](8, 16384, null, 0, u.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                                    ngIf: [0, "ngIf"]
                                }, null), (n()(),
                                    e["\u0275and"](16777216, null, null, 1, null, R)), e["\u0275did"](10, 16384, null, 0, u.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                                        ngIf: [0, "ngIf"]
                                    }, null), (n()(),
                                        e["\u0275and"](16777216, null, null, 1, null, tn)), e["\u0275did"](12, 278528, null, 0, u.NgForOf, [e.ViewContainerRef, e.TemplateRef, e.IterableDiffers], {
                                            ngForOf: [0, "ngForOf"]
                                        }, null)], function (n, t) {
                                            var l = t.component;
                                            n(t, 6, 0, l.commonService.IsDarkMode ? "insert-remove-container body-bg-color black-white-theme theme-black" : "insert-remove-container body-bg-color black-white-theme theme-white"),
                                                n(t, 8, 0, l.welcomeContent),
                                                n(t, 10, 0, l.welcomeContent && !l.hideInMobile),
                                                n(t, 12, 0, l.pagedata)
                                        }, function (n, t) {
                                            var l = t.component;
                                            n(t, 2, 0, l.slick),
                                                n(t, 3, 0, l.owl),
                                                n(t, 4, 0, l.fancyBox)
                                        })
        }
        function en(n) {
            return e["\u0275vid"](0, [(n()(),
                e["\u0275eld"](0, 0, null, null, 1, "app-home", [], null, [[null, "click"], ["window", "scroll"]], function (n, t, l) {
                    var o = !0;
                    return "click" === t && (o = !1 !== e["\u0275nov"](n, 1).onClick(l) && o),
                        "window:scroll" === t && (o = !1 !== e["\u0275nov"](n, 1).homeScroll() && o),
                        o
                }, ln, x)), e["\u0275did"](1, 4308992, null, 0, b, [p.c, c.a, e.Injector, C.b, e.PLATFORM_ID, _.a], null, null)], function (n, t) {
                    n(t, 1, 0)
                }, null)
        }
        var on = e["\u0275ccf"]("app-home", b, en, {}, {}, [])
            , cn = l("gIcY")
            , un = l("z0F3")
            , an = l("UOu5")
            , rn = function () {
                return function () { }
            }();
        l.d(t, "HomeModuleNgFactory", function () {
            return sn
        });
        var sn = e["\u0275cmf"](o, [], function (n) {
            return e["\u0275mod"]([e["\u0275mpd"](512, e.ComponentFactoryResolver, e["\u0275CodegenComponentFactoryResolver"], [[8, [i.a, on]], [3, e.ComponentFactoryResolver], e.NgModuleRef]), e["\u0275mpd"](4608, u.NgLocalization, u.NgLocaleLocalization, [e.LOCALE_ID, [2, u["\u0275angular_packages_common_common_a"]]]), e["\u0275mpd"](4608, cn.t, cn.t, []), e["\u0275mpd"](4608, un.i, un.i, [e.PLATFORM_ID, [2, un.b], [2, un.a], [2, un.c]]), e["\u0275mpd"](1073742336, u.CommonModule, u.CommonModule, []), e["\u0275mpd"](1073742336, cn.r, cn.r, []), e["\u0275mpd"](1073742336, cn.d, cn.d, []), e["\u0275mpd"](1073742336, un.l, un.l, []), e["\u0275mpd"](1073742336, un.j, un.j, []), e["\u0275mpd"](1073742336, c.p, c.p, [[2, c.v], [2, c.m]]), e["\u0275mpd"](1073742336, a.b, a.b, []), e["\u0275mpd"](1073742336, an.a, an.a, []), e["\u0275mpd"](1073742336, g.a, g.a, []), e["\u0275mpd"](1073742336, rn, rn, []), e["\u0275mpd"](1073742336, o, o, []), e["\u0275mpd"](256, "options", {
                preset: a.c
            }, []), e["\u0275mpd"](1024, c.k, function () {
                return [[{
                    path: "",
                    component: b
                }]]
            }, [])])
        })
    },
    agoJ: function (n, t, l) {
        "use strict";
        l.d(t, "a", function () {
            return s
        });
        var e = l("ZYCi")
            , o = l("VnD/")
            , i = l("67Y/")
            , c = l("psW0")
            , u = l("ABfF")
            , a = l("CcnG")
            , r = l("ZYjt")
            , s = function () {
                function n(n, t, l, e) {
                    this.titleService = n,
                        this.meta = t,
                        this.router = l,
                        this.activatedRoute = e,
                        this.config = u.a
                }
                return n.prototype.updateMeta = function (n, t) {
                    if (null != n) {
                        this.updateTitle(n.yoast_wpseo_title),
                            this.meta.updateTag({
                                name: "keywords",
                                content: this.checkNullPointer(n.yoast_wpseo_metakeywords)
                            }),
                            this.meta.updateTag({
                                name: "description",
                                content: this.checkNullPointer(n.yoast_wpseo_metadesc)
                            }),
                            "" != n.yoast_wpseo_opengraph_title && this.meta.updateTag({
                                property: "og:title",
                                content: this.checkNullPointer(n.yoast_wpseo_opengraph_title)
                            }),
                            "" != n.yoast_wpseo_opengraph_description && this.meta.updateTag({
                                property: "og:description",
                                content: this.checkNullPointer(n.yoast_wpseo_opengraph_description)
                            }),
                            "" != n.yoast_wpseo_opengraph_image && this.meta.updateTag({
                                property: "og:image",
                                content: this.checkNullPointer(n.yoast_wpseo_opengraph_image)
                            }),
                            this.meta.updateTag({
                                property: "og:url",
                                content: this.checkNullPointer(this.seoReplaceRootURLToBlank(t))
                            }),
                            this.meta.updateTag({
                                name: "focuskw",
                                content: this.checkNullPointer(n.yoast_wpseo_focuskw)
                            }),
                            this.meta.updateTag({
                                name: "linkdex",
                                content: this.checkNullPointer(n.yoast_wpseo_linkdex)
                            });
                        var l = "index"
                            , e = "follow";
                        "1" == n.yoast_wpseo_meta_robots_nofollow && (e = "nofollow"),
                            "1" == n.yoast_wpseo_meta_robots_noindex && (l = "noindex"),
                            this.meta.updateTag({
                                name: "robots",
                                content: this.checkNullPointer(l + ", " + e)
                            }),
                            this.meta.updateTag({
                                name: "redirect",
                                content: this.checkNullPointer(n.yoast_wpseo_redirect)
                            }),
                            this.meta.updateTag({
                                name: "twitter:title",
                                content: this.checkNullPointer(n.yoast_wpseo_twitter_title)
                            }),
                            this.meta.updateTag({
                                name: "twitter:description",
                                content: this.checkNullPointer(n.yoast_wpseo_twitter_description)
                            }),
                            this.meta.updateTag({
                                name: "twitter:image",
                                content: this.checkNullPointer(n.yoast_wpseo_twitter_image)
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
                    n.prototype.seoReplaceRootURLToBlank = function (n) {
                        return n ? this.config.baseSiteURL + "/" + n.replace(this.config.rootUrl, "") : n
                    }
                    ,
                    n.prototype.updateBlogMeta = function (n, t, l) {
                        if (null != n) {
                            this.updateTitle(n._aioseop_title),
                                this.meta.updateTag({
                                    name: "description",
                                    content: this.checkNullPointer(n._aioseop_description)
                                }),
                                "" != n._aioseop_title && this.meta.updateTag({
                                    property: "og:title",
                                    content: this.checkNullPointer(n._aioseop_title)
                                }),
                                "" != n._aioseop_description && this.meta.updateTag({
                                    property: "og:description",
                                    content: this.checkNullPointer(n._aioseop_description)
                                }),
                                "" != l && this.meta.updateTag({
                                    property: "og:image",
                                    content: this.checkNullPointer(l)
                                }),
                                this.meta.updateTag({
                                    property: "og:url",
                                    content: this.checkNullPointer(this.seoReplaceRootURLToBlank(t))
                                });
                            var e = "index"
                                , o = "follow";
                            "on" == n._aioseop_nofollow && (o = "nofollow"),
                                "on" == n._aioseop_noindex && (e = "noindex"),
                                this.meta.updateTag({
                                    name: "robots",
                                    content: this.checkNullPointer(e + ", " + o)
                                }),
                                this.meta.updateTag({
                                    name: "language",
                                    content: "english"
                                })
                        }
                    }
                    ,
                    n.prototype.checkNullPointer = function (n) {
                        return null != n ? n : ""
                    }
                    ,
                    n.prototype.updateTitle = function (n) {
                        var t = this;
                        n ? this.titleService.setTitle(n) : this.router.events.pipe(Object(o.a)(function (n) {
                            return n instanceof e.d
                        }), Object(i.a)(function () {
                            return t.activatedRoute
                        }), Object(i.a)(function (n) {
                            for (; n.firstChild;)
                                n = n.firstChild;
                            return n
                        }), Object(o.a)(function (n) {
                            return "primary" === n.outlet
                        }), Object(c.a)(function (n) {
                            return n.data
                        })).subscribe(function (n) {
                            t.titleService.setTitle(n.title)
                        })
                    }
                    ,
                    n.ngInjectableDef = a.defineInjectable({
                        factory: function () {
                            return new n(a.inject(r.j), a.inject(r.i), a.inject(e.m), a.inject(e.a))
                        },
                        token: n,
                        providedIn: "root"
                    }),
                    n
            }()
    },
    maxO: function (n, t, l) {
        "use strict";
        l.d(t, "c", function () {
            return e
        }),
            l.d(t, "e", function () {
                return o
            }),
            l.d(t, "d", function () {
                return i
            }),
            l.d(t, "b", function () {
                return c
            }),
            l.d(t, "a", function () {
                return u
            });
        var e = function () {
            function n(n) {
                this.sanitized = n
            }
            return n.prototype.transform = function (n, t) {
                return this.sanitized.bypassSecurityTrustHtml(n)
            }
                ,
                n
        }()
            , o = function () {
                function n(n) {
                    this.sanitized = n
                }
                return n.prototype.transform = function (n, t) {
                    return n.length > 55 ? n.substr(0, 55) + "..." : n
                }
                    ,
                    n
            }()
            , i = function () {
                function n() { }
                return n.prototype.transform = function (n) {
                    return n.length > 30 ? n.substring(0, 30) + "..." : n
                }
                    ,
                    n
            }()
            , c = function () {
                function n() { }
                return n.prototype.transform = function (n, t) {
                    var l = "";
                    if (null != n.type)
                        for (var e = 0, o = n.type; e < o.length; e++) {
                            var i = o[e];
                            l = l + (i = (i = i.replace(" ", "-").toLowerCase()).split(" ").join("-")) + " "
                        }
                    if (null != n.technology)
                        for (var c = 0, u = n.technology; c < u.length; c++) {
                            var a = u[c];
                            l = l + (a = (a = a.replace(" ", "-").toLowerCase()).split(" ").join("-")) + " "
                        }
                    if (null != n.industry)
                        for (var r = 0, s = n.industry; r < s.length; r++) {
                            var g = s[r];
                            l = l + (g = (g = g.replace(" ", "-").toLowerCase()).split(" ").join("-")) + " "
                        }
                    return "brands" != t ? "col-12 col-sm-6 col-md-6 col-lg-4 cs-mar-top-60 filter-result " + l : "col-12 col-sm-6 col-md-6 col-lg-4 mar-top-100 filter-result " + l
                }
                    ,
                    n
            }()
            , u = function () {
                return function () { }
            }()
    }
}]);
