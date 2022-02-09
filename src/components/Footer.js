const date = new Date();
const year = date.getFullYear();

export default function Footer() {
  return <footer>&copy; {year} Brannon Lee</footer>;
}
