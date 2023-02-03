import { useSelector,useDispatch } from "react-redux";
import { changeCounter} from "../store2"


function Cart2(){


    let state= useSelector((state)=> state)
    let dispatch = useDispatch();
    return(
        <div>Cart2
        <div>
        {state.counter}
        <p>
        <button
        onClick={()=> dispatch(changeCounter()) }
        >
            +
        </button>
        </p>
        </div>
<div>

    <ul>
       {state.cart.map((item)=>{return <li key={item.id}> <dfn>{item.name}</dfn>
        <span>{item.id}</span>
       </li>})}
        
    </ul>
</div>

        </div>
    )
}



export default Cart2;