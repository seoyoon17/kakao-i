// 서브메뉴 열기
function subMenuOpen(target) {
    for (let i = 0; i < 2; i++) {
        if( i != target ) {
            document.querySelectorAll('.sub_menu')[i].style = "display:none;";
        }
    }
        document.querySelectorAll('.sub_menu')[target].style = "display: block;";
    }
    // 서브메뉴 닫기
    function subMenuClose(target) {
        document.querySelectorAll('.sub_menu')[target].style = "display: none;";
    }
    // 서브메뉴에 마우스가 머물땐 유지
    function subMenuKeep(target) {
        document.querySelectorAll('.sub_menu')[target].style = "display: block;";
    }

    // 헤더 부분 마우스 엔터시, 헤더 배경 흰색, 헤더 메뉴 글씨 색상 #666 및 검정색으로 변경
    $('.gnb').mouseenter(function () {
        $('.gnb').css('background-color', '#fff');
        $('.gnb_menu_item a').css('color', '#666');
        $('.gnb_logo a, .gnb_link_items').css('color', 'black');
        $('.gnb_link_icon').css('filter', 'opacity(.5) drop-shadow(0 0 0 black)');
    })
    
    // 헤더 부분 마우스 리브시, 헤더 배경 X, 헤더 메뉴 글씨 색상 하얀색으로 변경
    $('.gnb').mouseleave(function () {
        $('.gnb').css('background', 'none');
        $('.gnb_logo a, .gnb_link_items, .gnb_menu_item a').css('color', '#fff');
        $('.gnb_link_icon').css('filter', 'none');
    })

    
    // 스크롤이 헤더의 높이값보다 클경우 헤더 배경 흰색, 헤더 메뉴 글씨 색상 #666 및 검정색으로 변경하고
    // 스크롤이 헤더의 높이값보다 작을경우 헤더 배경 X, 헤더 메뉴 글씨 색상 하얀색으로 변경
    $(window).scroll(function () {
        var height = $(document).scrollTop(); //실시간으로 스크롤의 높이를 측정

        if (height > 60) {
            $('.gnb').css('background-color', '#fff');
            $('.gnb_menu_item a').css('color', '#666');
            $('.gnb_logo a, .gnb_link_items').css('color', 'black');
            $('.gnb_link_icon').css('filter', 'opacity(.5) drop-shadow(0 0 0 black)');
            $('.gnb').off();
        } else if (height <= 60 || height == 0) {
            $('.gnb').css('background', 'none');
            $('.gnb_logo a, .gnb_link_items, .gnb_menu_item a').css('color', '#fff');
            $('.gnb_link_icon').css('filter', 'none');

            // 헤더 부분 마우스 엔터시, 헤더 배경 흰색, 헤더 메뉴 글씨 색상 #666 및 검정색으로 변경
            $('.gnb').mouseenter(function () {
                $('.gnb').css('background-color', '#fff');
                $('.gnb_menu_item a').css('color', '#666');
                $('.gnb_logo a, .gnb_link_items').css('color', 'black');
                $('.gnb_link_icon').css('filter', 'opacity(.5) drop-shadow(0 0 0 black)');
            })
            
            // 헤더 부분 마우스 리브시, 헤더 배경 X, 헤더 메뉴 글씨 색상 하얀색으로 변경
            $('.gnb').mouseleave(function () {
                $('.gnb').css('background', 'none');
                $('.gnb_logo a, .gnb_link_items, .gnb_menu_item a').css('color', '#fff');
                $('.gnb_link_icon').css('filter', 'none');
            })
        }
    });
    
    

    
    function slideChange(target) {
        console.log(target);
    
        for (i = 0; i < 2; i++) {
            if (i != target) {
                document.getElementsByClassName('hero_slide')[i].style = "display:none";
    
                document.getElementsByClassName('hero_slide_button')[i].style = "background-color: rgba(255,255,255,0.4);";
    
            }
        }
    
        document.getElementsByClassName('hero_slide')[target].style = "display:block; animation:fade_in 0.5s forwards;";
    
        document.getElementsByClassName('hero_slide_button')[target].style = "background-color: grey;";
    
    }
    
    // JS (max-width 1440px) 
    // footer m Btn Cross
    
    let openstate = false;
    // const footerBtn = document.querySelector('.line_m_btn');
    const footerBtn = document.querySelector('.info_related_m_tit');
    function footerCross() {
    
        if (openstate) {
            document.querySelector('.info_related_m').style = "height: 40px;"
            document.querySelector('.info_related_m_tit').style = "border-bottom: none"
            document.querySelector('.line1').style = " opacity: 1; transform: rotate(-90deg) translate(-1px, 0.1px); background-color: rgb(186, 186, 186);"
            document.querySelector('.line2').style = " background-color: rgb(186, 186, 186);"
            openstate = false;
    
        }
        else {
            document.querySelector('.info_related_m').style = "height: 200px;"
            document.querySelector('.info_related_m_tit').style = "border-bottom: 1px solid rgb(250,250,250);"
            document.querySelector('.line1').style = "transform: rotate(0deg); background-color: rgb(51,51,51); opacity: 0;"
            document.querySelector('.line2').style = "background-color: rgb(51,51,51);"
            openstate = true;
        }
    
    }
    footerBtn.addEventListener('click', () => {
        footerCross();
    });
    
    
    // JS (max-width 767px) 
    // gnboverM()
    
    let navbarm = document.querySelector('.gnb_m_wrap');
    // const navbarHeightm = navbarm.getBoundingClientRect().height;
    
    navbarm.addEventListener('mouseover', () => {
    
        function gnbOverM() {
    
            document.querySelector('.gnb_m').style = "background-color:white; box-shadow: 0 0 6px 0 rgba(75,75,75,0.8); transition: all 0.6s ease;";
            document.querySelector('.gnb_m_logo').src = "img/logo_black.png";
    
            for (let i = 0; i < 3; i++) {
                document.querySelectorAll('.gnb_m_burger div')[i].style = "background-color: rgb(16, 16, 16); ";
            }
        }
    
        if (window.scrollY <= 60) {
            gnbOverM();
        }
    });
    
    // gnb_m_out
    navbarm.addEventListener('mouseout', onMouseOut)
    
    function onMouseOut() {
    
        function gnbOutM() {
            document.querySelector('.gnb_m').style = "background-color:transparent; transition: all 0.6s ease;";
            document.querySelector('.gnb_m_logo').src = "img/logo_white.png";
    
            for (let i = 0; i < 3; i++) {
                document.querySelectorAll('.gnb_m_burger div')[i].style = "background-color: rgb(252, 252, 252);";
            }
    
        }
        if (window.scrollY <= 60) {
            gnbOutM();
        }
    
    }
    
    
    // 스크롤 움직일 때 gnb over & out
    document.addEventListener('scroll', () => {
    
        // Scroll Down
        function gnbScrollDownM() {
            document.querySelector('.gnb_m').style = "background-color:white; box-shadow: 0 0 6px 0 rgba(75,75,75,0.8); transition: all 0.6s ease;";
            document.querySelector('.gnb_m_logo').src = "img/logo_black.png";
    
            for (let i = 0; i < 3; i++) {
                document.querySelectorAll('.gnb_m_burger div')[i].style = "background-color: rgb(16, 16, 16); ";
            }
        }
    
        // Scroll Up
        function gnbScrollUpM() {
            document.querySelector('.gnb_m').style = "background-color:transparent; transition: all 0.6s ease;";
            document.querySelector('.gnb_m_logo').src = "img/logo_white.png";
    
            for (let i = 0; i < 3; i++) {
                document.querySelectorAll('.gnb_m_burger div')[i].style = "background-color: rgb(252, 252, 252);";
            }
        }
    
        // 조건문 실행
        if (window.scrollY > 59) {
            gnbScrollDownM();
        }
    
        else {
            gnbScrollUpM();
        }
    });
    
    
    // gnb_m_hidden
    
    
    const navSlide = () => {
        const burger = document.querySelector('.gnb_m_burger');
        const nav = document.querySelector('.gnb_m');
        const navLinks = document.querySelectorAll('.gnb_m_navlink');
        const body = document.querySelector('body');
    
        burger.addEventListener('click', () => {
    
            //burger toggle
            nav.classList.toggle('nav-active')
            if (nav.className === 'gnb_m nav-active') {
                navbarm.removeEventListener('mouseout', onMouseOut)
                body.style.overflow = "hidden";
            }
            else {
                navbarm.addEventListener('mouseout', onMouseOut)
                body.style.overflow = "auto";
            }
            console.log(nav.className === 'gnb_m nav-active')
            //links animation
            navLinks.forEach((link, index) => {
                console.log(index);
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.4s ease-in forwards ${index / 4 + 0.8
                        }s`;
                }
            });
    
            //burger cross
            burger.classList.toggle('toggle');
        });
    };
    
    navSlide();
    
    
    
    //  back to top btn
    const button = document.querySelector('.btn_click');
    const scrollInto = document.querySelector('.btn_click');
    button.addEventListener('click', () => {
        navbarm.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
    
    
    // footer circleShow()
    function circleShow(target) {

        document.querySelectorAll('.circle')[target].style = "visibility: visible;  animation: circle_show 2s both; transition: all 0.2s ease;";

    }

    // footer circleNone()
    function circleNone(target) {

        document.querySelectorAll('.circle')[target].style = "visibility: hidden; animation: circle_close 2s both; transition: all 0.2s ease;";

    }

        // 추가
    // hero_slide 화살표
    function hero_circle_big(target) {
        document.getElementsByClassName('hero_circle')[target].style = "animation: circle_bigger 0.2s forwards;"
        document.getElementsByClassName('arrow')[target].style = "display:block; line-height: 24px;"
    }

    function hero_circle_small(target) {
        document.getElementsByClassName('hero_circle')[target].style = "animation: circle_smaller 0.2s forwards;"
        document.getElementsByClassName('arrow')[target].style = "display:none;"
    }

    // gnb_m accordion 
    let openstate2 = [false, false];

    function contentShow(target) {
        // 이벤트 발생 이외의 다른 요소는 초기화
        for (let i=0; i<2; i++) {
                    
            if (i != target) {
            document.querySelectorAll('.gnb_m_acc')[i].style = "height: 61px; opacity:1;";
            openstate2[i] = false;
        }
        }

        // 이벤트 발생 요소에 대한 실행 처리
        if (openstate2[target]) {
            document.querySelectorAll('.gnb_m_acc')[target].style = "height: 61px; opacity:1;"
            openstate2[target] = false;
        }
        else {
            document.querySelectorAll('.gnb_m_acc')[target].style = "max-height: 400px; opacity:1;"
            openstate2[target] = true;
        }
    }
