import { projectImages } from "../assets"

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
        link:'/project',
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
        title:'coffeenie',
        date:'2019.09 ~ 2021.08',
        department:'사업지원팀(Business Support Team)',
        keywork: ['직영매장 운영관리', 'KPI 지표관리', '신규입사자 및 가맹교육', '음료개발 및 구매'],
        workdetail:['시즌 음료 및 푸드 개발', '원자재 구매 및 단가 협상', '신규 입사자 및 가맹사업주 교육', '교육 프로세스 정립', '직영 매장별 정산(지표관리)']

    },
    {
        title:'Satrbucks',
        date:'2019.09 ~ 2021.08',
        department:'사업지원팀(Business Support Team)',
        keywork: ['직영매장 운영관리', 'KPI 지표관리', '신규입사자 및 가맹교육', '음료개발 및 구매'],
        workdetail:['시즌 음료 및 푸드 개발', '원자재 구매 및 단가 협상', '신규 입사자 및 가맹사업주 교육', '교육 프로세스 정립', '직영 매장별 정산(지표관리)']
    },
    {
        title:'Me-In shop',
        date:'2019.09 ~ 2021.08',
        department:'사업지원팀(Business Support Team)',
        keywork: ['직영매장 운영관리', 'KPI 지표관리', '신규입사자 및 가맹교육', '음료개발 및 구매'],
        workdetail:['시즌 음료 및 푸드 개발', '원자재 구매 및 단가 협상', '신규 입사자 및 가맹사업주 교육', '교육 프로세스 정립', '직영 매장별 정산(지표관리)']
    },
    {
        title:'Zara',
        date:'2010.09 ~ 2023.08',
        department:'사업지원팀(Business Support Team)',
        keywork: ['직영매장 운영관리', 'ddd교육', '음료개발 및 구매'],
        workdetail:['시즌 음료 및 푸드 개발', '원자재 구매 및 단가 협상', '신규 입사자 및 가맹사업주 교육', '교육 프로세스 정립', '직영 매장별 정산(지표관리)']
    },
]

export const project_description = [
    {
        title:'bbyb shop',
        bg: projectImages[0],
        des:'일상생활에서 편리하게 사용하고 있는  쇼핑사이트를 바탕으로 여러가지 기능면을 벤치마킹하면서  **직접 실습**으로 공부 하고자 제작하게 되었습니다.',
        skill: ['html', 'scss', 'react', 'redux-toolkit','firebase'],
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
        url:[
            {
                github:'깃헙',
                site:'사이트'
            }
        ]
    },
    {
        title:'비비 shop',
        des:'일상생활에서 편리하게 사용하고 있는  쇼핑사이트를 바탕으로 여러가지 기능면을 벤치마킹하면서  **직접 실습**으로 공부 하고자 제작하게 되었습니다.',
        skill: ['html', 'scss', 'react', 'redux-toolkit','firebase'],
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
        url:[
            {
                github:'깃헙',
                site:'사이트'
            }
        ]
    },
    {
        title:'바바 shop',
        des:'일상생활에서 편리하게 사용하고 있는  쇼핑사이트를 바탕으로 여러가지 기능면을 벤치마킹하면서  **직접 실습**으로 공부 하고자 제작하게 되었습니다.',
        skill: ['html', 'scss', 'react', 'redux-toolkit','firebase'],
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
        url:[
            {
                github:'깃헙',
                site:'사이트'
            }
        ]
    },
    {
        title:'보보 shop',
        des:'일상생활에서 편리하게 사용하고 있는  쇼핑사이트를 바탕으로 여러가지 기능면을 벤치마킹하면서  **직접 실습**으로 공부 하고자 제작하게 되었습니다.',
        skill: ['html', 'scss', 'react', 'redux-toolkit','firebase'],
        fun:[
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
        url:[
            {
                github:'깃헙',
                site:'사이트'
            }
        ]
    },
]



export default sidebarNav