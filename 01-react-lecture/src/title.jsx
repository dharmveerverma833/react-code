 export function Title(){
    return(
        <>
          <h1>hello miss </h1>
          <h2>how are you </h2>
          <h4>miss you village life</h4>
          <Multiple/>
        </>
    )
}

function Multiple(){
    let a = 5;
   let  items =[];
    for(let i= a;i<=10*a; i+=a){
        if(i == 20){
            break;
        }
        items.push(<li>{i}</li>);
    }
    return(
        <>
        <h1>table are print</h1>
         <ul>{items}</ul>
         </>
    )
}

export default Title;