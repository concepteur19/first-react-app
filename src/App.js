import './index.css';
import Heading from './Components/Heading';


function App() {

  const name = "zobel";
  const surname = "nguening"
  const currentYear = new Date().getFullYear()
  const customstyle = {
    border: "1px solid blue",
    borderRadius: "7px",
    boxShadow: "0px 3px 6px",
    marginRight:"10px"
  }
  return (
    <div>
      <p>Created by {surname + " " + name} </p>
      <Heading/>
      <div>
        <img style={customstyle} className="food-img" src="http://www.alicepegie.com/wp-content/uploads/2020/09/Le-Pile-de-Pommes-de-Terre-1.jpg" alt="pilé de pomme de terre" />
        <img className="food-img" src="https://www.naturayum.com/wp-content/uploads/2021/09/Koki-beans1.jpg" alt="koki" />
        <img className="food-img" src="https://i0.wp.com/africa-cuisine.com/wp-content/uploads/2022/02/Poulet-Directeur-Ge%CC%81ne%CC%81ral.jpg?fit=1125%2C1104&ssl=1" alt="poulet DG" />
      </div>
      <p>Copyright {currentYear} </p>
    </div>
  );
}

export default App;
