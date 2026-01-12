 import "./Mprodect.css" ;

function Myprodect({title,price,features }){
    // const list = features.map((features)=> <li key={features}>{features}</li>);
      let isDiscount = price > 20000;
   let abc = {backgroundColor: isDiscount? "green":"blue"};

    return (
        <div className ="Myprodect"style={abc} >
        <h3>{title}</h3>
        <h5>Price : {price}</h5>
        {/* <p>{features.map((features)=> <li key={features}>{features}</li>)}</p> */}
        {isDiscount &&<p> Discount of 5%</p> }
        </div>
    )
}
export default Myprodect;                    