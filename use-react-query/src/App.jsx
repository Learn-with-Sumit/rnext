import ProductList from "./components/ProductList"
import ProductDetails from "./components/ProductDetails"
import AddProduct from "./components/AddProduct"
function App() {

  return (
    <div className="flex m-2">
      <AddProduct />
      <ProductList />
      <ProductDetails id={5}/>
    </div>
  )
}

export default App
