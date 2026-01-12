import Myprodect from "./Myprodect";
function ProductTab(){
    let options = ["hi-tech","long-battery", "performance"];
    // let options2 = { a:"hi-tech", b:"long-battery", c:"performance"};

    return(                  
        <>
       <Myprodect title="Leptop" price={50000} features={options} />
       <Myprodect title="Mobile" price={20000} features={options} />
       <Myprodect title="Tablet" price={"offer"&& 30000} features={options} />     
        </>
    );
}
export default ProductTab;