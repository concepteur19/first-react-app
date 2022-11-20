function App() {

  const name = "zobel";
  const surname = "nguening"
  const currentYear = new Date().getFullYear()
  return (
    <div>
      <p>Created by {surname + " " + name} </p>
      <p>Copyright {currentYear} </p>
    </div>
  );
}

export default App;
