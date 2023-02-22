import { useQuery, gql } from '@apollo/client';
import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Category from "./Pages/Category/category";
import Cart from "./Pages/Cart/cart";
import CartOverlay from "./Pages/CartOverlay/cartOverlay";
import CurrencySwitcher from "./Pages/CurrencySwitcher/currencySwitcher";
import PDP from "./Pages/PDP/PDP";

export default function App() {

const GET_CATEGORIES = gql`
  query {
    categories {
      name
    }
  }
`;

const { loading, error, data } = useQuery(GET_CATEGORIES);

if (loading) return <p>Loading...</p>;
if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <Routes>
          <Route path="/" element={<Category navData={data.categories} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cartOverlay" element={<CartOverlay />} />
          <Route path="/PDP" element={<PDP />} />
          <Route path="/currencySwitcher" element={<CurrencySwitcher />} />
      </Routes>
    </>
  );
}