import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Search = () => {
  const [searchParams] = useSearchParams();

  const url = "http://localhost:3001/products?" + searchParams;

  const { data: items, loading, error } = useFetch(url);

  console.log(items, "items");

  return (
    <div>
      <h1>Resultados disponíveis</h1>
      <ul className="products">
        {error && <p>Ocorreu um erro....</p>}
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <h2>Nome: {item.name}</h2> <p>R$: {item.price}</p>
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Search;
