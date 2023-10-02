import Table from 'react-bootstrap/Table';
import CompaerPlansElements from "./CompaerPlansElements"

function ComparePlans() {

    
const plans = {
    Public: [1,1,1],
    Private: [0,1,1],
    Permissions: [1,1,1],
    Sharing: [0,1,1],
    "Unlimited members": [0,1,1],
    "Extra security": [0,0,1]
  }
  
  
    return (<>
   
        <Table variant="dark" >
      <thead>
        <tr>
          <th></th>
          <th>Free</th>
          <th>Pro</th>
          <th>Enterprise</th>
        </tr>
      </thead>
      <tbody>
        {
        Object.entries(plans).reduce((jsx, el) => {
    
            let [key, value] = el
            jsx.push(<CompaerPlansElements name = {key} flags = {value} />)
            return jsx
          },[])
        }
       
      </tbody>
    </Table>
    </>
        
    )
}

export default ComparePlans