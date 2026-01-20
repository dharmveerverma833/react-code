function printWorld(){
     return console.log("hello");
}

function printBye(enent){
    console.log("Bye!");
    console.log(enent);
}
function printLorem(){
    console.log("Dharm veer verma")
}


export default function Button(){
    return(
     <div>
     <button onClick={printWorld}>clickme</button>
     <p onClick={printBye}>this is a paragraf</p> 
     <p onMouseOver={printLorem}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam iste ad error, enim nesciunt, voluptatum, adipisci dignissimos aliquam dolorum optio deserunt architecto omnis quos cumque veritatis dolore. Sit, atque commodi?</p>
     </div>
    )
};