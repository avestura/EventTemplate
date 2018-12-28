document.addEventListener("DOMContentLoaded", function(event) {
    const initBanner = () => {
        $content = document.getElementsByClassName('content-body')[0];
        $intro = document.getElementById('intro');

        if($intro && $content){
            $intro.style.height = ($content.clientHeight - 50) + "px";
        }
    };

    const toggleMenu = () => {
        $sideMenu = document.getElementsByClassName('sidebar')[0];
        $sideContent = document.getElementsByClassName('side-content')[0];
        if($sideMenu && $sideContent){
            if($sideMenu.classList.contains('open')){
                $sideMenu.classList.remove('open');
                $sideContent.classList.remove('open');
            }
            else{
                $sideMenu.classList.add('open');
                $sideContent.classList.add('open');
            }
            toggleNavbar();
        }
        
    };

    $hamburger = document.getElementsByClassName('hamburger')[0];
    if($hamburger){
        $hamburger.addEventListener("click", toggleMenu);
    }

    $chev = document.getElementsByClassName('top-menu-chev')[0];
    $nav = document.getElementsByClassName('navbar')[0];

    const toggleNavbar = () => {
        if($nav){
            $icon = document.getElementById('chev-icon');

            if($nav.classList.contains('open')){
                $nav.classList.remove('open');
                $icon.classList.remove('fa-chevron-up');
                $icon.classList.add('fa-chevron-down');
            }
            else{
                $nav.classList.add('open');
                $icon.classList.remove('fa-chevron-down');
                $icon.classList.add('fa-chevron-up');
            }
        }
    };
    
    if($chev){
        $chev.addEventListener('click', toggleNavbar);
    }

    initBanner();
});