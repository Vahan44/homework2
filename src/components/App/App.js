import "./App.css"
import Container from 'react-bootstrap/Container';  
import Cart from "../card/Cart"
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
const App = () => {


const data = [{ name: "Free", price: "0", text: `10 users included 2 GB of storage Email support Help center access and enjoy it free`, btn: "Sign up for free"},
{ name: "Pro", price: "15", text: `20 users included 10 GB of storage Priority email support Help center access`, btn: "Get started"},
{ name: "Enterprise", price: "29", text: `30 users included 15 GB of storage Phone and email support Help center access`, btn: "Get started", col: "primary"}
]



  return (<Container style={{"padding-bottom": "50px" }}>
  <NavBar/>
    <Container className="d-flex flex-column pb-5">
      <Container className="justify-content-center text-center   mt-5 col-8">
       <Header/>
      </Container>

      <Container style = {{height: "320px", width: "1000px"}}className="col-11  pt-0 d-flex flex-row justify-content-around mt-4">
       <Cart obj = {data[0]}/>
       <Cart obj = {data[1]}/>
       <Cart obj = {data[2]}/>        
      </Container>
    </Container>
  </Container>
  )
}

export default App;