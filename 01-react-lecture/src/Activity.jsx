import MyActivity from "./MyActivity";

export default function Activity(){
     let style ={
    display :"flex",
    flexWrap:"wrap",
    justifyContent:"center",
    alignItems:"center",
  }
  let tableStyle = {
        height:"372px",
        width:"100%",
        backgroundColor:"red",
  }
    return(
        <>
        <div style={tableStyle }>
          <h2 style={{ paddingTop:"20px" }}> Blockbuster Deals on Computer Accsssories | Shop Now </h2>
          <div style={style}>
             <MyActivity tital="Lgitech MX Master" idx={0} />
             <MyActivity tital="Apple pencil (2nd Gen)" idx={1} />
             <MyActivity tital="Zebronis" idx={2} />
             <MyActivity tital="Petronics" idx={3} />
           </div>
           </div>
        </>
    )
}