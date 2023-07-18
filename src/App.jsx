import React, { useEffect, useState } from "react";

const TOKEN = import.meta.env.VITE_TOKEN;

export const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?&api_key=${TOKEN}`
        );
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="p-4 text-white">
      {data ? (
        <div className="flex flex-col">
          <h1 className="text-3xl flex justify-center p-4">
            Une image par jour directement via le site de la Nasa
          </h1>
          <div className="flex justify-center">
            <div className="flex flex-col ">
              <img
                className="max-h-[800px] w-auto"
                src={data.url}
                alt={data.title}
              />
              <div className="flex flex-row justify-between pt-2">
                <p>{data.title}</p>
                <p>{data.date}</p>
              </div>
            </div>
          </div>
          <p className="pt-10">{data.explanation}</p>
        </div>
      ) : (
        <p>Chargement...</p>
      )}
    </section>
  );
};