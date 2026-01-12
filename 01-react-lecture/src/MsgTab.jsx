import MsgBox from "./MsgBox";

export default function MsgTab(){
    let style = {
        height:"50px",
        margin:"20px",
        padding:"14px",
        color:"red",
        fontSize:"20px",
        border:"10px solid white",
        borderRadius:"10px",
        backgroundColor:"blue"
    };
    return(
        <>
        <MsgBox userName="dharmveerverma833" textColor={style}/>
         <MsgBox userName="techdharmveerverma833" textColor={style}/>
        </>
    )
};