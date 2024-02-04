import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import CustomersList from "./pages/CustomersList";
import CustomersList1 from "./pages/CustomersList1";
import DeliveryChallan from "./pages/DeliveryChallan";
import OperationalCost from "./pages/OperationalCost";
import AddInvoice from "./pages/AddInvoice";
import AddInvoice1 from "./pages/AddInvoice1";
import AddInvoice2 from "./pages/AddInvoice2";
import InvoicesList from "./pages/InvoicesList";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/customers-list1":
        title = "";
        metaDescription = "";
        break;
      case "/customers-list":
        title = "";
        metaDescription = "";
        break;
      case "/delivery-challan":
        title = "";
        metaDescription = "";
        break;
      case "/operational-cost":
        title = "";
        metaDescription = "";
        break;
      case "/add-invoice1":
        title = "";
        metaDescription = "";
        break;
      case "/add-invoice2":
        title = "";
        metaDescription = "";
        break;
      case "/add-invoice":
        title = "";
        metaDescription = "";
        break;
      case "/invoices-list":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/customers-list1" element={<CustomersList />} />
      <Route path="/customers-list" element={<CustomersList1 />} />
      <Route path="/delivery-challan" element={<DeliveryChallan />} />
      <Route path="/operational-cost" element={<OperationalCost />} />
      <Route path="/add-invoice1" element={<AddInvoice />} />
      <Route path="/add-invoice2" element={<AddInvoice1 />} />
      <Route path="/add-invoice" element={<AddInvoice2 />} />
      <Route path="/invoices-list" element={<InvoicesList />} />
    </Routes>
  );
}
export default App;
