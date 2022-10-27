import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={`${styles.footer} d-flex justify-around align-center`}>
      <span>Copyright &copy; - 2022/2023 tous droits réservé</span>
      <span>By Alain Guillon</span>
    </footer>
  );
}

export default Footer;
