import { Outlet } from "react-router-dom";
import Header from "./LayoutComponents/Header/Header";
import PageFooter from "./LayoutComponents/Footer/Footer";
import styles from "./styles.module.css";

function LayoutPage() {
  return (
    <>
      <Header />
      <div className={styles.pageContent}>
        <Outlet />
      </div>{" "}
      <PageFooter />
    </>
  );
}

export default LayoutPage;
