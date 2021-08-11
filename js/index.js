
    let fixedMenu = document.querySelector('#fixedMenu'),
    fixedMenuP = document.querySelectorAll('#fixedMenu > p'),
    scrollBox = document.querySelector('.scrollBox'),
    mainFixed = document.querySelector('#mainFixed'),
    blueBG= document.querySelector('.blueBG'),
    aboutMe = document.querySelector('.aboutMe'),
    title = document.querySelectorAll('.title'),
    content = document.querySelectorAll('.content'),
    video = document.querySelectorAll('video'),
    portIMG = document.querySelectorAll('.portIMG'),
    portBlabla = document.querySelector('#portBlabla'),
    nav = document.querySelector('#nav>ul')
    navLi = document.querySelectorAll('#nav>ul>li'),
    bar = document.querySelector('#bar')

    console.log(bar)

/////
let scrollValue = 0; 

function clickedMenu() {
    if (fixedMenuP[2].style.display!='none' ) {
        mainFixed.style.animation = 'brightness 1.5s .2s'
        mainFixed.style.transform = 'perspective(600px) rotateY(50deg)';
        mainFixed.style.boxShadow = '50px 50px 100px grey'
        fixedMenuP[0].style.transform = 'rotate(45deg)';
        fixedMenuP[1].style.transform = 'rotate(-45deg)';
        fixedMenuP[1].style.top = '30%';
        fixedMenuP[2].style.display = 'none';
        nav.style.left = '77%'
    } else {
        mainFixed.style.animation = 'brightness 1s .4s'
        mainFixed.style.transform = 'none';
        fixedMenuP[0].style.transform = 'none';
        fixedMenuP[1].style.transform = 'none';
        fixedMenuP[1].style.top = '50%';
        fixedMenuP[2].style.display = 'inline-block';
        nav.style.left='100%'

    }
}
navLi[1].addEventListener('click',()=>{
    window.scrollTo( 0, 5500 );
    console.log('g')
})
navLi[2].addEventListener('click',()=>{
    window.scrollTo( 0, 9200 );
    console.log('g')
})
navLi[3].addEventListener('click',()=>{
    window.scrollTo( 0, 12700 );
    console.log('g')
})
navLi[4].addEventListener('click',()=>{
    window.scrollTo( 0, 21900 );
    console.log('g')
})


window.addEventListener('scroll',()=>{
    scrollTop = document.documentElement.scrollTop;
    console.log(scrollTop);
    content[7].style.top = `100%`;
    if (scrollTop <= 600) {
        let per=Math.floor(scrollTop / (document.body.scrollHeight - window.outerHeight) * -100 ) *0.1
        console.log(per)
        scrollBox.style.transform = `scale(${1+per})`;
        scrollBox.style.opacity ='1';
        blueBG.querySelector('p').style.opacity = 1;
    }
    if (scrollTop >= 1500) {

        blueBG.querySelector('p').style.opacity = 0;
        // console.log(blueBG.querySelector('p'));
        blueBG.querySelector('p').innerHTML = `
        <div class="blueBG" src="img/blueBG.jpg">
        <p id="hello">반갑습니다 :)<br>
        저는 <span id="helloName">김지유</span>입니다.<br>
        <span id="helloFront">프론트엔드 신입</span>에<br>
        지원하였습니다.
        </p>
        </div>`
    }
    if (scrollTop >= 2400) {
        blueBG.querySelector('p').innerHTML = `<p>저를 소개드리자면..</p>`
        blueBG.querySelector('p').style.opacity = 1;
        scrollBox.style.top ='0%';
        content[2].style.top = '100%'
    }

    if(scrollTop >= 3400) {
        let per =Math.floor(scrollTop / (document.body.scrollHeight - window.outerHeight) * -100 ) * 5
        scrollBox.style.top = `${per}%`;
        content[2].style.top = '100%'
    }
    if(scrollTop >= 3400 && scrollTop <= 4399) {
        title[0].style.display = 'none';
        title[0].style.fontSize = '200vh'
        content[2].style.top = '100%'
    }

    if (scrollTop >= 4400 && scrollTop <= 4900) {
        title[0].style.display = 'flex'
        let per =Math.floor(scrollTop / (document.body.scrollHeight - window.outerHeight) * 100 ) *3.8;
        console.log(per);
        title[0].style.fontSize = `${90 - per}vh`
        content[0].style.top = '100%'
        content[1].style.top = '100%';
        content[2].style.top = '100%'
    }
    if (scrollTop >= 5400) {
        content[0].style.top = '25vh'
        content[0].style.opacity = 1;
        content[1].style.top = '100%';
    }
    if (scrollTop >= 6400) {
        title[0].style.display = 'none';
        title[0].style.fontSize = '200vh'
        let per =Math.floor(scrollTop / (document.body.scrollHeight - window.outerHeight) * -100 ) * 1.5
        content[0].style.top = `${per}%`;
        content[0].style.opacity = 0;
        content[1].style.top = '100%';
    }
    if(scrollTop >= 6400 && scrollTop <= 7599) {
        title[1].style.display = 'none';
        title[1].style.fontSize = '200vh'
    }
    if (scrollTop >= 7600 && scrollTop <= 8200) {
        title[1].style.display = 'flex'
        let per =Math.floor(scrollTop / (document.body.scrollHeight - window.outerHeight) * 100 ) *2.2;
        title[1].style.fontSize = `${90 - per}vh`;
        content[1].style.top = '100%'
    }

    if (scrollTop >= 8800) {
        content[1].style.top = '25vh'
        content[1].style.opacity = 1;
        content[2].style.top = '100%'
    }

    if (scrollTop >= 9800) {
        title[1].style.display = 'none';
        title[1].style.fontSize = '200vh'
        let per =Math.floor(scrollTop / (document.body.scrollHeight - window.outerHeight) * -100 ) * 1.5
        content[1].style.top = `${per}%`;
        content[1].style.opacity = 0;
        content[2].style.top = '100%'
    }

    if (scrollTop>=9800 && scrollTop <= 10999) {
        title[2].style.display = 'none';
        title[2].style.fontSize = '200vh'
        content[2].style.top = '100%'
    }

    if (scrollTop>=11000 && scrollTop <=11600) {
        title[2].style.display = 'flex'
        let per =Math.floor(scrollTop / (document.body.scrollHeight - window.outerHeight) * 100 )*3.7;
        title[2].style.fontSize = `${200 - per}vh`;
        content[2].style.top = '100%'
    }

    if (scrollTop >= 12200) {
        content[2].style.top = '25vh'
        content[2].style.opacity = 1;
        content[3].style.top = '100%'
        content[3].style.opacity = 0;
        portIMG[0].style.backgroundImage = `url('img/port1.png')`;
        portBlabla.innerHTML =`
        <h3>종이의 집 팬페이지</h3>
        <p>개발기간:1인 소요기간:1주<br/>
        Javascript / SCSS / HTML</p>
        <p>
            넷플릭스 스페인 액션드라마 '종이의 집' <br>
            팬 사이트를 JavaScript를 통해 구현하여<br>
            스크롤 및 마우스 이벤트를<br>
            중심으로 영어 및 일본어<br>
            웹사이트를 구현하였습니다. 
        </p>
        <a class="goNow" href="https://yuz2577.github.io/moneyHS_jiyu/" target="_blank">바로가기</a>`;
    }

    if (scrollTop >= 13200) {
        content[3].style.top = '5vh'
        content[3].style.opacity = 1;
        video[0].addEventListener('mouseenter',()=>{
            video[0].play();
        })
    }

    if (scrollTop >= 14200) {
        content[3].style.top = '100%'
        content[3].style.opacity = 0;
        portIMG[0].style.backgroundImage = `url('img/port2.png')`;
        portBlabla.innerHTML =
        `
        <h3>가오갤 팬 사이트(게임)</h3>
        <p>개발기간:1인 소요기간:2주<br/>
        Javascript / SCSS / HTML</p>
        <p>
        마블의 가디언즈 오브 갤럭시의 캐릭터들을<br>
        게임 캐릭터로 설정하여, 갤로그 형식의 웹게임을<br>
        JavaScript로 구현하였습니다.<br>
        offset값과 Math함수를 최대한 활용하여 이루어진<br>
        코드로, JavaScript의 여러 동작기능들을<br>
        이해하는데에 도움이 되었습니다
        </p>
        <a class="goNow" href="https://github.com/yuz2577/gardians_of_jiyu" target="_blank">바로가기</a>`;
        content[4].style.top = '100%'
    }

    if (scrollTop >= 15200) {
        content[4].style.top = '5vh'
        content[4].style.opacity = 1;
        video[1].addEventListener('mouseenter',()=>{
            video[1].play();
        })
    }

    if (scrollTop >= 16200) {
        content[4].style.top = '100%'
        content[4].style.opacity = 0;
        portIMG[0].style.backgroundImage = `url('img/port3.png')`;
        portBlabla.innerHTML =
        `
        <h3>React카카오프렌즈샵 카피 사이트</h3>
        <p>개발기간:1인 소요기간:2주<br/>
        React / ReactBootstrap / SCSS</p>
        <p>
        React로 구현한 카카오프렌즈샵 카피 사이트로, <br>
        React의 흐름을 이해하기 위해 제작하였습니다. <br>
        리뷰와 장바구니 담기, 찜목록, 검색, 필터 기능을 <br>
        구현하였으며, React Bootstrap을 활용하여 <br>
        스타일을 구성하였습니다.
        </p>
        <a class="goNow" href="https://yuz2577.github.io/" target="_blank">바로가기</a>`;
        content[5].style.top = '100%'
    }

    if (scrollTop >= 17200) {
        content[5].style.top = '5vh'
        content[5].style.opacity = 1;
        video[2].addEventListener('mouseenter',()=>{
            video[2].play();
        })
    }

    if (scrollTop >= 18200) {
        content[5].style.top = '100%'
        content[5].style.opacity = 0;
        portIMG[0].style.backgroundImage = `url('img/port4.png')`;
        portBlabla.innerHTML =
        `
        <h3>개인 포트폴리오 페이지</h3>
        <p>개발기간:1인 소요기간:2일<br/>
        Javascript / SCSS / HTML</p>
        <p>
        개인 포트폴리오 페이지로, 스크롤값을 활용한<br>
        인터랙티브 웹 페이지를 제작하였습니다. <br>
        </p>
        <a class="goNow">바로가기</a>`;
        content[6].style.top = '100%'
        
    }

    if (scrollTop >= 19200) {
        content[6].style.top = '5vh'
        content[6].style.opacity = 1;
        video[3].addEventListener('mouseenter',()=>{
            video[3].play();
        })
        content[7].style.top = `100%`;
        content[7].style.opacity ='0'
    }

    if(scrollTop>=20200) {
        content[6].style.top = '-100%';
        content[6].style.opacity = 0;
        content[2].style.top = '-100%';
        title[2].style.display ='none'

    }

    if (scrollTop>=21200) {
        content[7].style.top = `0`;
        content[7].style.opacity ='1'
    }
    // scrollBox.style.opacity = '0'
    let scrollPer = Math.floor(scrollTop / (document.body.scrollHeight - window.outerHeight) * 100);
    bar.style.height = `${scrollPer}%`
})

for (let i=3; i<7; i++) {
    content[i].addEventListener('click',()=>{
        content[i].style.top ='100%'
        console.log('gg')
    })
}