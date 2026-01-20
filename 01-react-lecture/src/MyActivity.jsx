import Price from "./price"

export default function MyActivity({tital,idx}){
     let style = {
        border:"7px solid black",
        backgroundColor:"lightgray",
        color:"black",
        // padding:"5px 0 2px 0",
        margin:"40px 20px 0 20px",
        borderRadius:"10px",
        width:"200px",
        height:"220px",
        textAlign:"center"

    }
    let oldPrices= ["12,495","11,900","1,599","599"];
    let newPrices=["8,999","9,199","899","278"];
    let description =[["8,000 Dpi","5Programmable Buttons"],
    ["intutive surface","Designed iPad Pro"],
    ["designed for iPad Pro","Designed for iPad Pro"],
    ["wireless", "Orientation"]]
  return(
   <>
    <div style={style}>
    <h3>{tital}</h3>
    <h5>{description[idx][0]}</h5>
    <p>{description[idx][1]}</p>
    <Price oldPrices={oldPrices[idx]} newPrices={newPrices[idx]}/>
    </div>
  </>
  )
};

