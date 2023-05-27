import Footer from'./footer.jsx'
import Header from'./header.jsx'
import Principal from'./principal.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import Form_contacto from './formulario.jsx'
import Coach from './coach.jsx'
function App() {
  return (
<div className="">
      <Header></Header>
      <Principal></Principal>
 <Coach></Coach>
      <Form_contacto></Form_contacto>
      <Footer></Footer>
    </div>

  
  );
}

export default App;
