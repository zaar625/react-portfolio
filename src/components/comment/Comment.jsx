import React ,{useState, useRef, useEffect} from 'react'
import './comment.scss'
import { db } from '../../firebase/firebaseInit'

const Comment = () => {
    const input = useRef(null)//인풋 초기화
    
    const date = new Date();
    
    const [userData, setUserData] = useState([]);//유저 게시글 객체들 집합
    
    const [blogItem, setBlogItem] = useState({
    user:'',
    content:'',
    data:date.getTime(),
    });  //input value저장  
    
    const limit = 5 //페이지당 게시글 수 초기 값
    
    const [dataShow, setDataShow] = useState([])
    console.log(dataShow)

    let pages = 1

    let range = []

    const [currPage, setCurrPage] = useState(0)

    const selectPage = page => {
        const start = Number(limit) * page
        const end = start + Number(limit)

        setDataShow(userData.slice(start, end))

        setCurrPage(page)
    }

    if (limit !== undefined) {
        let page = Math.floor(userData.length / Number(limit))//0
        pages = userData.length % Number(limit) === 0 ? page : page + 1//3/5=1
        range = [...Array(pages).keys()] //[0,1]
    }

    useEffect(()=>{
        // 마운트 되면 파이어베이스 데이터 받아오기
        const postData = async()=>{
            let PostData = [];

            const data = await db.collection('userCard').get()
            data.forEach((doc)=>{
                PostData.push(doc.data())
            })
            setUserData(PostData)
            setDataShow(PostData.slice(0, Number(limit)))
        }
        postData();
    },[])
    //인풋값 뽑아내기    
    const onChange = (e) => {
        const { value, name } = e.target; 
        setBlogItem({
        ...blogItem, 
        [name]: value 
        });
    }
    //파이어베이스에 업로드하기
    const Upload =()=>{
        db.collection("userCard").add(blogItem)
        .then((result) => {
            alert('성공하였습니다.')
            input.current.value =null;
            })
            .catch((error)=>{
            alert('실패')
            })
    }


    return (
        <div className='comment cardstyle col-12'>
            <div className='comment__header'>
                <h3>Comment</h3>
                <div></div>
            </div>
            <div className='comment__write col-12'>
                <div className='comment__write__user col-2'>
                    <input ref={input} name="user" onChange={onChange} type="text" placeholder="User Name" id="user"/>
                    <label>title</label>
                </div>
                <div className='comment__write__comment col-5'>
                    <textarea  name="content" type="text" onChange={onChange}  placeholder="Write  your comment" id="content"/>
                    <label>comment</label>
                </div>
                <button className='comment__write__send col-1' id="send" onClick={Upload}>
                    <i class='bx bx-send'></i>
                </button>
            </div>
            <div className='comment__show'>
            {//유저 게시글 가져오기
                dataShow.map((item, index) => ( <CommentView item={item} key={index}/>))
            }
            </div>
            <div className='comment__pagination'>
                {
                    pages >= 1 ? 
                        range.map((item, index) => (
                            <div key={index} className={`comment__pagination-item ${currPage === index ? 'active' : ''}`} onClick={() => selectPage(index)}>
                                {item + 1}
                            </div>
                        ))
                    : null
                }
            </div>
        </div>
    )
}

const CommentView = (props) =>{
    return (
        <div className='commentView col-2'>
            <div className='commentView__header'>
                <div className='commentView__header__userName'>{props.item.user}</div>
                <div className='commentView__header__date'>2022.05.25</div>
            </div>
            <div className='line'></div>
            <div className='commentView__content'>{props.item.content}</div>
            <span className='commentView__footer'>Delete</span>
        </div>
    )
}


export default Comment
