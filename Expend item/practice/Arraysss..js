// import {Table} from 'react -bootstrap'
function Data (){
    const student=[
    { Name:"bhavesh",id:1, age:"21"}, 
    { Name:"siddharth",id:2, age:"23"},
    { Name:"shivanee",id:13, age:"24"},
    
]
    return (
        <div>
          <h1>HELLO WORLD </h1>
          {/* <table border="3" style={{ alignitem:"center",color:"blue",margin:"100px", padding:"100px"}}> */}
          <table className= "table table-hover-Success" style={{color:"blue" ,Backgroundcolor:"red"}}> 
                     <tbody>
            <tr>
            <td>Name</td>
            <td>id</td>
            <td>age</td>
          </tr>
          {
            student.map((item,i)=>
           
          
           item.age>"20"?  
            
            <tr key={i}>   
           <td>{item.Name.toUpperCase()}</td>
           <td>{item.id}</td>
           <td>{item.age}</td>
            </tr> :null 
           
            )
          }
          </tbody>
          </table>
          <button type="button" className="btn btn-default">Default</button>
  <button type="button" className="btn btn-primary">Primary</button>
  <button type="button" className="btn btn-success">Success</button>
  <button type="button" className="btn btn-info">Info</button>
  <button type="button" className="btn btn-warning">Warning</button>
  <button type="button" className="btn btn-danger">Danger</button>
  <button type="button" className="btn btn-link">Link</button>  

        </div>
    )
}
export default  Data;