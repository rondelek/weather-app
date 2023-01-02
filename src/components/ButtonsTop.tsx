type Cities = {
  city: object;
};

export default function ButtonsTop({ setQuery }: any) {
  const cities: { id: number; title: string }[] = [
    {
      id: 1,
      title: "Edinburgh",
    },
    {
      id: 2,
      title: "Paris",
    },
    {
      id: 3,
      title: "Warsaw",
    },
    {
      id: 4,
      title: "Barcelona",
    },
    {
      id: 5,
      title: "Rome",
    },
  ];

  return (
    <div className="w-full flex justify-between text-white border-b">
      {cities.map((city: { id: number; title: string }) => {
        return (
          <button
            key={city.id}
            className="mb-4 text-sm sm:text-md"
            onClick={() => setQuery({ q: city.title })}
          >
            {city.title}
          </button>
        );
      })}
    </div>
  );
}
