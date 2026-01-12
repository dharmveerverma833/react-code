import Price from "./price"

export default function MyActivity({tital,idx}){
     let style = {
        border:"7px solid black",
        backgroundColor:"lightgray",
        color:"black",
        padding:"5px 0 2px 0",
        margin:"40px 20px 0 20px",
        borderRadius:"10px",
        width:"200px",
        height:"200px",
        textAlign:"center"

    }
    let oldPrices= ["12,495","11,900","1,599","599"];
    let newPrices=["8,999","9,199","899","278"];
    let description =["8,000 Dpi","intutive surface","designed for iPad Pro","wireless"]
  return(
   <>
    <div style={style}>
    <h3>{tital}</h3>
    <h5>{description[idx]}</h5>
    <Price oldPrices={oldPrices[idx]} newPrices={newPrices[idx]}/>
    </div>
  </>
  )
};

