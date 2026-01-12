 import "./Mprodect.css" ;

function Myprodect({title,price,features }){
    // const list = features.map((features)=> <li key={features}>{features}</li>);
    return (
        <div className ="Myprodect">
        <h3>{title}</h3>
        <h5>Price : {price}</h5>
        <p>{features.map((features)=> <li key={features}>{features}</li>)}</p>
        <p></p>
        </div>
    )
}
export default Myprodect;                    