
// sidebar
const sidebarNav = [ 
    {
        link:'/',
        icon:<i className='bx bx-id-card'></i>,
        text:'About SY'
    },
    {
        link:'/portfolio',
        icon:<i className='bx bx-image' ></i>,
        text:'SY Portfolio'
    },
    {
        link:'/mini',
        icon:<i className='bx bx-image-add' ></i>,
        text:'SY Mini Project'
    },
    {
        link:'/contact',
        icon:<i className='bx bx-smile'></i>,
        text:'Contact me'
    }
]

// worker

export const work_description = [
    {
        title:'Coffeenie',
        date:'2019.09 ~ 2021.08',
        department:'사업지원팀(Business Support Team)',
        keywork: ['직영매장 운영관리', 'KPI 지표관리', '신규입사자 및 가맹교육', '음료개발 및 구매'],
        workdetail:['시즌 음료 및 푸드 개발을 통해 본사 이익률 증가', '원자재 구매 및 단가 협상', '신규 입사자 및 가맹사업주 교육', '교육 프로세스 수립', '직영 매장별 정산(지표관리) 및 인력관리']

    },
    {
        title:'Satrbucks Korea',
        date:'2017.07 ~ 2018.10',
        department:'매장관리자(Store leader)',
        keywork: ['고객서비스', 'KPI 지표관리', '매장운영관리', '신규파트너 교육'],
        workdetail:['분기별 고객 커피세미나 진행', '통일된 고객 서비스 제공을 위한 신규 파트너 서비스 교육', '발주 및 이관·출고를 통한 푸드 매출 관리 ',  '외부 감사 대비 위생관리 유지']
    },
    {
        title:'Me-In shop',
        date:'2016.06 ~ 2017.06',
        department:'개인사업자(Owner)',
        keywork: ['고객 서비스', '디스플레이', '상품트렌드 분석', '상품 매입 및 판매'],
        workdetail:['지속적인 고객 유치를 위한 고객서비스', '상품 재고관리 및 매입']
    },
    {
        title:'Zara',
        date:'2015.09 ~ 2016.06',
        department:'매장관리자(Store leader)',
        keywork: ['고객 서비스', '매출관리', '디스플레이 및 재고관리'],
        workdetail:['상품 디스플레이', '상품별 판매 매출 분석', '상품별 재고 관리 및 반품, 이관·출고 관리']
    },
]

export const project_description = [
    {
        title:'BBYB shop',
        des:'일상생활에서 편리하게 사용하고 있는  쇼핑사이트를 바탕으로 여러가지 기능면을 벤치마킹하면서 직접 실습으로 공부 하고자 제작하게 되었습니다.',
        skill: ['html', 'scss', 'react', 'redux-toolkit','firebase'],
        fuc:[
            {
            title:'장바구니 구현', 
            des:'- 리액트의 상태관리인 Redux에 관하여 공부하게 되었고, Cart 페이지를 Redux-toolkit으로 적용하였습니다.'
            },
            {
            title:'회원가입 · 로그인 구현', 
            des:'- firbase를 이용하여 회원가입, 로그인, 로그아웃을 구현하였으며 SNS 계정으로도 가능하도록 만들었습니다. 해당 과정에서 쿠키·세션에 대해 좀 더 이해할 수 있었습니다.  '
            },
            {
            title:'게시판 구현', 
            des:'- firebase를 이용하여 게시판 게시, 수정, 삭제 기능을 구현하였습니다. '
            },
            {
            title:'필터 기능 구현', 
            des:'- 해당 상품의 컬러, 카테고리를 필터링 할 수 있도록 구현하였습니다.  '
            },
            {
            title:'모달창 및 반응형 레이아웃 구현', 
            des:''
            },
        ],
        url:{
                github:'https://github.com/zaar625/Ecommerce',
                site:'https://bbybshop.netlify.app/'
            }
        
    },
    {
        title:'React & Vue Movie',
        des:'프레임워크를 익히고, 더나아가 API를 이용하여 데이터를 받아오는 방법을 익히고자 제작하게 되었습니다. 또한 프레임워크를 선택함에 있어 리액트와 뷰의 차이점을 느끼고자 동일한 프로젝트를 리액트 버전과 뷰 버전으로 제작하였습니다.',
        skill: ['react', 'vue', 'scss', 'axios','swiper'],
        fuc:[
            {
            title:'장바구니 구현', 
            des:'리액트의 상태관리인 Redux에 관하여 공부하게 되었고, Cart 페이지를 Redux-toolkit으로 적용하였습니다.'
            },
            {
            title:'예고편 모달창 구현', 
            des:'리액트의 상태관리인 Redux에 관하여 공부하게 되었고, Cart 페이지를 Redux-toolkit으로 적용하였습니다.'
            },
            {
            title:'모달창 구현', 
            des:'리액트의 상태관리인 Redux에 관하여 공부하게 되었고, Cart 페이지를 Redux-toolkit으로 적용하였습니다.'
            },    
        ],
        url:{
                github:'https://github.com/zaar625/React-movie-app',
                site:'https://react-ver.netlify.app/'
            }
    },
    {
        title:'Interactive Intro',
        des:'처음 프론트앤드로 방향을 잡았을때, 첫 목표가 "애플 홈페이지 처럼 인터렉티브한 소개페이지를 만들어 보고 싶다"였습니다. 애플 홈페이지 만큼은 아니지만, 캔버스와 트랜지션을 이용하여 스크롤값에 따라 변화하도록 순수 자바스크립트로 구현하였습니다.',
        skill: ['html', 'css', 'Javascript', 'canvas'],
        fuc:[
            {
            title:'장바구니 구현', 
            des:'리액트의 상태관리인 Redux에 관하여 공부하게 되었고, Cart 페이지를 Redux-toolkit으로 적용하였습니다.'
            },
            {
            title:'로그인 구현', 
            des:'리액트의 상태관리인 Redux에 관하여 공부하게 되었고, Cart 페이지를 Redux-toolkit으로 적용하였습니다.'
            },
            {
            title:'모달창 구현', 
            des:'리액트의 상태관리인 Redux에 관하여 공부하게 되었고, Cart 페이지를 Redux-toolkit으로 적용하였습니다.'
            },    
        ],
        url:{
                github:'https://github.com/zaar625/main-pp',
                site:'https://lee-intro.netlify.app/'
            }
    },
    {
        title:'Responsive site',
        des:'html과 css를 익히고, scss를 익히고자 해당 프로젝트에 적용하였습니다. ',
        skill: ['html', 'scss', 'Javascript', 'ScrollReveal.js'],
        fuc:[
            {
            title:'장바구니 구현', 
            des:'리액트의 상태관리인 Redux에 관하여 공부하게 되었고, Cart 페이지를 Redux-toolkit으로 적용하였습니다.'
            },
            {
            title:'로그인 구현', 
            des:'리액트의 상태관리인 Redux에 관하여 공부하게 되었고, Cart 페이지를 Redux-toolkit으로 적용하였습니다.'
            },
            {
            title:'모달창 구현', 
            des:'리액트의 상태관리인 Redux에 관하여 공부하게 되었고, Cart 페이지를 Redux-toolkit으로 적용하였습니다.'
            },    
        ],
        url:{
                github:'https://github.com/zaar625/portfolio_responsive_plant',
                site:'https://zaar625.github.io/portfolio_responsive_plant/'
            }
    },
    {
        title:'Web - standard',
        des:'책과 함께 클론코딩을 하며, 기본지식을 습득하고 재 제작하였습니다. 해당과정에서 웹표준, IR기법, jquery의 기본, css의 다양한 속성들을 사용하여 어떻게 이펙트를 나타내고 사용하는지 직접 익히게 되었고, 다양한 라이브러리들이 있다는 것을 알게해주었던 작품입니다. ',
        skill: ['html', 'css', 'Javascript', 'slick.js','lightgallery'],
        fuc:[
            {
            title:'장바구니 구현', 
            des:'리액트의 상태관리인 Redux에 관하여 공부하게 되었고, Cart 페이지를 Redux-toolkit으로 적용하였습니다.'
            },
            {
            title:'로그인 구현', 
            des:'리액트의 상태관리인 Redux에 관하여 공부하게 되었고, Cart 페이지를 Redux-toolkit으로 적용하였습니다.'
            },
            {
            title:'모달창 구현', 
            des:'리액트의 상태관리인 Redux에 관하여 공부하게 되었고, Cart 페이지를 Redux-toolkit으로 적용하였습니다.'
            },    
        ],
        url:{
                github:'https://github.com/zaar625/responsive_web_01',
                site:'https://zaar625.github.io/HTML_basic/'
            }
    },
  
]



export default sidebarNav