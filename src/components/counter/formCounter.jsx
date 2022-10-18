import Button from './buttons';
import Counter from './counter';
import React , {useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCount } from '../../redux/counterSlice';
// import { counterSlice } from './../../redux/counterSlice';

const FormCounter = ()=>{
  // const [count , setCount]=useState(0);
  const [check , setCheck] = useState(false);
  const counter = useSelector(state=>state.counter.counter);
  // console.log(counter);
  const dispatch = useDispatch();

  const increamentCounter=()=>{
    // let x = count+1;
    // setCount(x);
    dispatch(updateCount(1));
    setCheck(false);
  }

  const decreamentCounter =()=>{
    if(counter > 0){
      dispatch(updateCount(-1));
    }
    else {
      setCheck(true);
    }
  }


    return (<>    
    <div className="buttons">
        <Button st='btnI' operation={increamentCounter} text = '+' />
        <Counter count={counter}/>
        <Button st='btnD' operation = {decreamentCounter} text = '-'/>
    </div>

    {
      check ?
      <div className='notZero'>can't decrease counter is zero</div>
      :
      ''
    }
    </>)
}

export default FormCounter;