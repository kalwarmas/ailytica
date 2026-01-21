var DashboardJs = function () {

    function registerScrollTopEvent() {
        $('#btn-back-to-top').on('click', function () {
            backToTop();
        });

    }

    function scrollFunction() {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            $('#btn-back-to-top').show();
        } else {
            $('#btn-back-to-top').hide();
        }
    }

    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    function slickConfig()
    {

        $('.customer-logos').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: false,
            dots: false,
            pauseOnHover: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 1
                    }
                }
    
            ]
        });
    }

function submitContactUsForm()
{
    var $nameElem = $('#txtName');
    var $emailElem = $('#txtEmail');
    var $phoneNumberElem = $('#txtPhoneNumber');
    var $messageElem = $('#txtMessage');

    var isValidName = GlobalJs.validateElem($nameElem);
    var isValidEmail =GlobalJs.validateElem($emailElem); 
    var isValidPhoneNumber = GlobalJs.validateElem($phoneNumberElem);
    var isValidMsg = GlobalJs.validateElem($messageElem);

    if( isValidName && isValidEmail && isValidPhoneNumber &&isValidMsg)
    {
        $('.emailSentMsg').show();
        $('html, body').animate({
            scrollTop: $(".section-heading").offset().top
        }, 500);

        $nameElem.val('');
        $emailElem.val('');
        $phoneNumberElem.val('');
        $messageElem.val('');
        setTimeout(() => {
            $('.emailSentMsg').hide();
        }, 5000);
    }
}

    return {
        init: function () {
            registerScrollTopEvent();
            window.onscroll = function () {
                scrollFunction();
            };
            slickConfig();
        },
        getTopBannerHeight: function () {
            return $('.topBanner').height() + 'px';
        },
        showExplainingText: function (hoveredElem) {
            $(hoveredElem).hide();
            $(hoveredElem).closest('explainingText').show();
        },
        submitContactUsForm: function()
        {
            submitContactUsForm();
        }

    };
}();
 