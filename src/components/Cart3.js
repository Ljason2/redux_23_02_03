import {useSelector, useDispatch} from "react-redux"
import {changeName} from "../store3"


function Cart3(){

    let state =useSelector(state=> state);
    let dispatch =useDispatch();
    console.log(state)

    return(
        <div>
        <p>
            {state.user}
            <button
            onClick={()=>dispatch(changeName("안녕")) }
            >이름바꾸기</button> 
        </p> 

        </div>

    )
}



export default Cart3;