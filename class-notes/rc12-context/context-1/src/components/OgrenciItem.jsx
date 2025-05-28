import { useContext } from "react"
import {StudentContext} from "../App"



const OgrenciItem = () => {
  //!3-(context consumer) globalde tanımladığım (context alanında) değerleri buraya çağırmak
  const{students,changeColor}= useContext(StudentContext)
  
  
   

useContext(StudentContext)
  return <div>
      {students.map((a)=>(
        <div key={a.id} style={{background:a.color}}>
          <h3>NAME:{a.name}</h3>
          <h4>EMAİL:{a.email}</h4>
          <h4>AGE:{a.age}</h4>
          Color:<input type="text" value={a.color}
          onChange={(e)=>changeColor(a.id,e.target.value)}/>
        </div>
      ))}
    </div>
  
}

export default OgrenciItem