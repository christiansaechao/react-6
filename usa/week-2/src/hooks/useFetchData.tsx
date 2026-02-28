import { useEffect, useState } from "react";

export const useFetchData = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<string>("");
  const [error, setError] = useState(null);
  const [name, setName] = useState<string>("eevee");

  async function getData() {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name}`,
      ).then((res) => res.json());

      setData(response.name);

      console.log(response);
    } catch (err: any) {
      setError(err.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return { loading, data, error, setLoading, setError, getData, setName, name };
};
