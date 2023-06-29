import React,{useState} from 'react'
import "../App.css"

const Multiselect = ({valuess,readonly}) => {


    //EVERY LOGIC IS WORKING FINE AS EXPECTED BUT THE SELECTED CHECKBOX VALUE IS NOT GETTING DISPLAYED ON MY PAGE ON LINE 102 BELOW







  //const dropdownlist = document.querySelector(".dropdown-list")

    const [values,setValues] = useState({a1: valuess})
    const [dropdown,setDropdown] = useState(false)
    const[disp,setDisp] = useState([])
    //const [isChecked,setIsChecked] = useState(false)

    const handleChange = (e)=>{
      const {checked, value:checkboxValue} = e.target
      //setIsChecked(checked)
      if(checked){
        setValues((prev) => ({ ...prev, a1: [...prev.a1, checkboxValue] }));
        setDisp((prev)=>[...prev,checkboxValue])
        //console.log(disp)
      }
      else{
        setValues((prev) => ({...prev,a1: prev.a1.filter((val) => val !== checkboxValue),}));
      
        setDisp(disp.filter((val)=> val!==checkboxValue ))

        }
    };

    function handleClick(){
      setDropdown((prev)=> !prev)
    }

    function handleCheckboxChange(e){
      e.stopPropagation()
      handleChange(e)
    }

  return (
    <>
    <div className='multiselect'>
      
        <div className='multiselect-values' onClick={handleClick}>
          {values.length>0 ? 
          {disp}
    
              : "Select Options... "}
               {/* Object.values(values).map(arr=>(
            <div key={arr}>
              {arr.map(item=>(
                {item}
              ))}
            </div>
          ))  */}
          
          
        </div>
        {dropdown && (
          <div className='dropdown-list'>
            <input 
            type="checkbox" 
            id="option1" 
            value= "Option 1"
            disabled={readonly}
            onChange={handleCheckboxChange}
           
            />{''} India
<br/>
            <input 
            type="checkbox" 
            id="option2" 
            value="Option 2"
            disabled={readonly}
            onChange={handleCheckboxChange}
            
            /> {''}Bangladesh
            <br/>

            <input 
            type="checkbox" 
            id="option3" 
            value="Option 3"
            disabled={readonly}
            onChange={handleCheckboxChange}
            
            /> {''}Pakistan

          </div>
        )}
       
      
        </div>
        <div className='display'>
         {disp.length> 0 ?disp.map((val)=> (
          <p key={val}>{val}</p> 
         )):""}
           </div>
           </>
  );
};



export default Multiselect;