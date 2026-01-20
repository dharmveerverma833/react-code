export default function Counter(){
    let count = 0;
    function incCounter() {
     count+= 1;
     console.log(count)

    }
    return(
        <>
        <h3>count = {count}</h3>
        <button>count</button>
        </>
    )
}