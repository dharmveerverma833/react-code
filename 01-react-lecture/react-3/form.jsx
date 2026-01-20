function formSubmit(event){
    event.preventDefault();
    console.log("your form successfully submit");
}


export default function Form() {
return(
    <form>
    <input  placeholder="Enter a Details" />
    <button onClick={formSubmit}>submit</button>
    </form>
)
 };