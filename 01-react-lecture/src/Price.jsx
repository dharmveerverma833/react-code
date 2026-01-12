export default function Price({oldPrices,newPrices}){
        let oldStyle ={
        textDecoration:"line-through",
    }
    let style ={
        border:"2px solid black",
        margin:"0 auto",
        width:"180px",
        backgroundColor:"yellow",
    }
    let newStyle={
        fontWeight:"bold"
    }
    return(
        <>
        <div style={style}>
        <span style={oldStyle}>Rs.{oldPrices}</span>
        &nbsp; &nbsp;/ &nbsp; &nbsp;
        <span style={newStyle}>Rs.{newPrices}</span>
        </div>
        </>
    )
}