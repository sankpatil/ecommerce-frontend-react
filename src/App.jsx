
import GlobalError from './components/common/GlobalError'
import GlobalLoader from './components/common/GlobalLoader'
import Products from './components/products/Products'


function App() {
  return (
   <>
   <GlobalLoader/>
   <GlobalError/>
   <Products/>
  
   </>
  )
}

export default App