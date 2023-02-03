import {useSelector} from 'react-redux' 





function Cart1(){
    // let state = useSelector((state)=>{return state})
    // state를 사용하게 해주는 역할 
    let state = useSelector((state)=>state)
    console.log(state)
    return(
        <div>
        {state.user}
        </div>
    )
}



export default Cart1;