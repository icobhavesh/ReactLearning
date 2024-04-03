import './Expend.css'
function Expend(props){
    return(<>
    <div className="container">
     <button>{props.title}</button>
     <button>date</button>
     <button>fees</button>
    </div>
    </>
    )
}
export default Expend;