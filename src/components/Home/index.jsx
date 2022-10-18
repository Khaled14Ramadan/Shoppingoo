import { useSelector } from "react-redux";


const Home = () => {
  const counter = useSelector(state=>state.counter.counter);

  return (
    <div className="text-white fw-bold fs-1">counter : {counter}</div>
  )
}

export default Home;