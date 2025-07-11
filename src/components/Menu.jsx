// components/Menu.jsx
import React, { useEffect, useState } from 'react';

function Menu() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=c')
      .then(res => res.json())
      .then(data => {
        setItems(data.meals);
        setLoading(false);
      })
      .catch(err => console.error('Error:', err));
  }, []);
  // Pagination logic
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  const changePage = (page) => setCurrentPage(page);

  return (
    <div className="pt-24 px-6 min-h-screen bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-300">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">🍽️ Our Menu</h1>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentItems.map(item => (
              <div key={item.idMeal} className="bg-white p-4 rounded shadow hover:shadow-lg transition">
                <img src={item.strMealThumb} alt={item.strMeal} className="w-full h-48 object-cover rounded-lg" />
                <h2 className="text-lg font-bold mt-2 text-gray-800">Item:{item.strMeal}</h2>
                <h2 className="text-lg font-bold mt-2 text-gray-800">Country:{item.strArea}</h2>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => changePage(page)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                  currentPage === page ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-200'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Menu;
