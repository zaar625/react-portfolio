import { useRef } from "react";
import { useEffect } from "react";
import './modal.scss'

const Modal = ()=> {

    const pop = useRef(null);
    const popupCheck = useRef(null);

    useEffect(() => {
        if (!document.cookie.includes('pop=ondDay')) {
            pop.current.classList.add('on');
        }
    }, []);

    function closePop() {
        if (popupCheck.current.checked) {
            document.cookie = "pop=ondDay; path=/; max-age=86400";
        } else {
            document.cookie = "pop=ondDay; path=/; max-age=-1";
        }
        pop.current.classList.remove('on');
        pop.current.classList.add('off');
    }

    return (
        <div ref={pop} className="modal">
            <div className="modal__container col-5">
                <div className="modal__container__contents">
                    <p className="intro">
                        <strong>안녕하세요. 담당자님.<br/>React.js + Typescript를 활용한 <br/>저의 웹 포트폴리오 사이트를 방문해 주셔서 감사합니다.!</strong>
                        제가 여태까지 배운 내용들을 최대한 해당 포트폴리오에 담고자 노력하였습니다. 
                    </p>
                    <p className="intro__sub">
                        포트폴리오의 제작과정인 디자인과 기능구현에 대한 자세한 안내 페이지는 아래 가이드 버튼을 클릭하시면 보실 수 있습니다.
                    </p>
                    <div className="btnBox">
                        <a target="_blank" rel="noreferrer" className="btn" href="https://www.figma.com/file/bi26XF7a9UVRbkESgPIfIK" title="React.js를 활용한 웹 포트폴리오 사이트 안내 페이지 바로가기">GUIDE
                        </a>
                    </div>
                    <p>
                        해당 사이트의 깃허브도 공개하였으니, 제가 작성한 코드도 확인 가능합니다.
                    </p>
                    <div className="btnBox">
                        <a className="btn" href="https://github.com/amerimnos/react_portfolio" target="_black">
                            바로가기
                           <i class='bx bxl-github'></i>
                        </a>
                    </div>
                    <p>
                       아울러 제가 공부한 내용이나 이력서는 노션으로 정리되어 있으니 참고해주시면 감사하겠습니다.
                    </p>
                    <div className="btnBox">
                        <a target="_blank" rel="noreferrer" className="btn" href="https://youtube.com/playlist?list=PLZ1bji2Kya5O-zguxeDkXCyu0lmlliVij" title="React.js를 활용한 웹 포트폴리오 제작기 바로가기">바로가기
                        </a>
                    </div>
                </div>
                <div className="modal__container__check">
                    <label htmlFor="popupCheck">하루 동안 안 보기
                        <input ref={popupCheck} type="checkbox" id="popupCheck" tabIndex="0" onKeyDown={
                            e => { if (e.key === "Enter") e.target.click(); }
                        } />
                    </label>

                    <button onClick={closePop} className="close">닫기</button>
                </div>
            </div>
        </div >
    )
}

export default Modal;