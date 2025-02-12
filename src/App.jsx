import { Afun } from "./components/afun"
import Func from "./components/rfun"

function App(){
  const name ="pavani"
  const std =["pavs","mahi","bhanu"]
  const age =[1,3,5,7,9,0,8,7,4]
  console.log("hi this is my first name")
  return(
    <>
    <h1>{name}</h1>
    <p> students</p>
    <div> {std}</div>
    <div>{age}</div>
    <Func/>
    <Afun/>
    </>
  )
}
export default App