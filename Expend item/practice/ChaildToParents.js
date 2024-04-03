// so know in this video we are going to learn how can we send our chaild data to our parents container
//first of all we see how to get props 

function Chaild (props){
    const sndIt={bhavesh:"My name is chaild data " , Name:"bhavesh"}
    return (
        <div>
        <h1> Lifting state </h1>
        <button onClick={()=>props.send(sndIt.bhavesh)} className="btn btn-primary">  SEND ME  </button>
        </div>
    )}
export default Chaild ;