const year = new Date().getFullYear();
const copy = "\u00A9";

export default function Footer() {
  return (
    <footer>
      <p>
        Copyright {copy} {year}
      </p>
    </footer>
  );
}
