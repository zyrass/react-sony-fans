import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
// import Footer from "../components/Footer/Footer";
import styles from "./App.module.scss";

function App() {
  return (
    <main className={`${styles.main}`}>
      <Header />
      <div className="flex-fill p-50">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </main>
  );
}

export default App;
