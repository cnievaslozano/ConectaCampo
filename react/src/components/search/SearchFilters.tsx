import React, { useState } from "react";
import Button from "@components/common/Button";

const SearchFilters = () => {
  const [sortOrder, setSortOrder] = useState("");
  const [popular, setPopular] = useState(false);
  const [newest, setNewest] = useState(false);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  const handlePopularChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPopular(e.target.checked);
  };

  const handleNewestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewest(e.target.checked);
  };

  return (
    <>
      <div className="mb-4">
        <label htmlFor="sort" className="block font-bold text-gray-700 mb-2">
          Ordenar Por:
        </label>
        <select
          id="sort"
          name="sort"
          className="w-full p-2 border border-gray-300 rounded"
          value={sortOrder}
          onChange={handleSortChange}
        >
          <option value="">Seleccionar opción</option>
          <option value="price-desc">Más caro a más barato</option>
          <option value="price-asc">Más barato a más caro</option>
          <option value="recent">Más recientes</option>
          <option value="oldest">Más antiguos</option>
          <option value="popular">Más populares</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-bold text-gray-700 mt-6 mb-4">
          Categorías
        </label>
        <div className="grid grid-cols-2 gap-4">
          {[
            { id: "2frutas", label: "Frutas" },
            { id: "1verduras", label: "Verduras" },
            { id: "3lacteos", label: "Lácteos" },
            { id: "5granos", label: "Granos" },
            { id: "6hogitech", label: "Hierbas" },
            { id: "7frutos", label: "Semillas" },
            { id: "7aceites", label: "Aceites" },
            { id: "8miel", label: "Miel" },
          ].map(({ id, label }) => (
            <div className="flex items-center" key={id}>
              <input
                type="checkbox"
                id={id}
                name={id}
                // Aquí puedes usar una función para manejar el cambio
                // checked={yourCheckedState}
                // onChange={handleCategoryChange}
                className="mr-2"
              />
              <label htmlFor={id}>{label}</label>
            </div>
          ))}
        </div>
      </div>

      <Button text="Buscar" className="w-full" />
    </>
  );
};

export default SearchFilters;
