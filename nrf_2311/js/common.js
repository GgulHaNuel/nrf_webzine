document.addEventListener('DOMContentLoaded', function () {
    function SCROLLNAV() {
        let barClick = 0;
        if (window.pageYOffset >= 100) {
            document.querySelector('#new_hd').classList.add('active');
            document.querySelector('.mo_nav').classList.add('active');
        } else {
            document.querySelector('#new_hd').classList.remove('active');
            document.querySelector('.mo_nav').classList.remove('active');
        }
    }
    SCROLLNAV();

    window.addEventListener('scroll', SCROLLNAV);

    function NAVCLICK() {
        $('.hd_navbox > li > a').click(function () {
            // var headerHeight = $('header').outerHeight();
            $('html,body').animate(
                {
                    // scrollTop: $(this.hash).offset().top - headerHeight,
                    scrollTop: $(this.hash).offset().top,
                },
                500
            );
        });
    }
    NAVCLICK();

    function MOBARS() {
        $('.mo_bars > button').click(function () {
            $('.mo_nav').slideDown(300);
        });

        $('.mo_close > button').click(function () {
            $('.mo_nav').slideUp(300);
        });
    }
    MOBARS();

    function QUICK_BTN() {
        let quickClick = 0;
        $('.quick_btn > a ').click(function () {
            if (quickClick == 0) {
                $('.quick_deps').slideDown(300);
                quickClick = 1;
            } else if (quickClick == 1) {
                $('.quick_deps').slideUp(300);
                quickClick = 0;
            }
        });

        $('.wrap_container').click(function () {
            $('.quick_deps').slideUp(300);
            quickClick = 0;
        });
    }
    QUICK_BTN();

    function TOPBTN() {
        var scrollDuration = 600; // 스크롤 지속 시간 (밀리초)

        var scrollStep = -window.scrollY / (scrollDuration / 15);
        var scrollInterval = setInterval(function () {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    }
    TOPBTN();

    document.querySelector('.top_btn > a').addEventListener('click', function (event) {
        event.preventDefault(); // 기본 동작 막기 (링크 이동 방지)

        TOPBTN();
    });
});
