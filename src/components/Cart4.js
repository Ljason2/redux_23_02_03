import { useDispatch, useSelector } from "react-redux";
import {changeNum} from '../redux/num'




function Cart4(){
   let state=useSelector(state=> state)
   let dispatch=useDispatch();
    console.log(state)
    return(
        <div>
        <p>{state.num}</p>
        <p><button
        onClick={()=> dispatch(changeNum(10))}
        >10+</button>
        
        <button
        onClick={()=> dispatch(changeNum(100))}
        >100+</button>
        </p>
        </div>
    )
}

// 위에서 state는 객체로서 state들의 집합을 가리킨다.
// state를 사용할 때에는 state.state이름 이런 방식으로 
// state를 쓸 수 있다.



export default Cart4;