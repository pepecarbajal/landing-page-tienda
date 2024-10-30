// src/Components/CategorySelector.js
import React from 'react';

export default function CategorySelector({ categories, selectedCategory, onSelectCategory, onToggleFavorites, showFavorites }) {
  return (
    <nav className="bg-white mt-20 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          <select 
            className="w-[250px] border border-gray-300 rounded-md px-3 py-2"
            value={selectedCategory} 
            onChange={(e) => onSelectCategory(e.target.value)} 
          >
            <option value="Todas">Todas</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <button 
            onClick={onToggleFavorites} 
            className={`ml-4 px-4 py-2 rounded-md text-white ${showFavorites ? 'bg-red-600' : 'bg-red-500'}`}
          >
            {showFavorites ? "Productos" : "Favoritos"}
          </button>
        </div>
      </div>
    </nav>
  );
}
