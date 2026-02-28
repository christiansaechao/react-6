import { useState, useEffect } from "react";

type ParamTypes<T> = T[] 

const useApi = (url: string, params: ParamTypes) => {
  const [data, setData] = useState();

  useEffect(() => {
    (() => {
      const response = await fetch(url/params);
      setData();
    })();
  }, []);

  const [count, setCount] = useState(0);

  function increment() {
    setCount(0);
    setCount(prev => prev + 1);
  }

  useEffect(() => {

    setInterval(() => {
        console.log("time")
    }, 1000);


    WebSocket.OPEN () => server => chatroom

    return () => {
        WebSocket.CLOSED();
    }
  }, [])

  return data;
};
