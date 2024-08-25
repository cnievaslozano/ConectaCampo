import React, { useEffect, useState } from "react";
import Layout from "@components/layout/Layout";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import SearchProductGrid from "@components/products/SearchProductGrid";
import SearchFilters from "@components/search/SearchFilters"; // Actualizado
import FilterByCategory from "@components/search/FilterByCategory";

const Search = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialKey = searchParams.get("name") ?? "";
  const initialSort = searchParams.get("sort") ?? "";
  const [key, setKey] = useState(initialKey);
  const [sortOrder, setSortOrder] = useState(initialSort);
  const [resultOnEnter, setResultOnEnter] = useState(initialKey);

  useEffect(() => {
    setKey(initialKey);
    setSortOrder(initialSort);
  }, [initialKey, initialSort]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const queryParams = new URLSearchParams();
      if (key) queryParams.append("name", key);
      if (sortOrder) queryParams.append("sort", sortOrder);
      navigate(`/search?${queryParams.toString()}`);
      setResultOnEnter(e.currentTarget.value);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKey(e.currentTarget.value);
  };

  return (
    <Layout>
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4 min-h-[670px]">
        <aside className="lg:col-span-1 bg-gray-100 p-8 rounded-lg shadow-lg h-fit">
          <SearchFilters sortOrder={sortOrder} onSortChange={setSortOrder} />
        </aside>
        <section className="lg:col-span-3 ml-12">
          <input
            type="text"
            value={key}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="w-full p-2 border border-gray-300 rounded mb-4"
            placeholder="Introduce el nombre del producto"
          />
          <h3 className="my-4 text-xl font-semibold text-gray-700">
            Resultados de "{resultOnEnter}"
          </h3>
          <SearchProductGrid />
        </section>
      </section>
    </Layout>
  );
};

export default Search;
