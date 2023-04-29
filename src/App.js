import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Button from "./components/Button";
import Input from "./components/Input";
import PageHeader from './components/PageHeader'
import Spinner from './components/Spinner'
import Tabs from './components/Tabs'
import Modal from './components/Modal'
import Select from './components/Select'
import Autocomplete from './components/Autocomplete'
import Table from './components/Table'
import Card from './components/Card'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/button" element={<Button />} />
          <Route path="/input" element={<Input />} />
          <Route path="/pageheader" element={<PageHeader />} />
          <Route path="/spinner" element={<Spinner />} />
          <Route path="/tabs" element={<Tabs />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/select" element={<Select />} />
          <Route path="/autocomplete" element={<Autocomplete />} />
          <Route path="/table" element={<Table />} />
          <Route path="/card" element={<Card />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
