import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const SearchResultsPage = () => {
  const router = useRouter();
  const { query } = router.query; // Get the query from the URL

  // State for search results
  const [filteredResults, setFilteredResults] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Filters state
  const [searchTerm, setSearchTerm] = useState(query || ""); // Search term state
  const [selectedPrice, setSelectedPrice] = useState(""); // Price filter state
  const [selectedCategory, setSelectedCategory] = useState(""); // Category filter state

  // Function to fetch data based on the search term, price, and category
  const fetchData = async () => {
    setLoading(true);
    setError(null); // Reset error state before fetching

    try {
      const response = await fetch(
        `http://192.168.1.6:8000/product?name=${searchTerm}&price=${selectedPrice}&category=${selectedCategory}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setFilteredResults(data); // Store fetched results
    } catch (err) {
      setError(err.message); // Set error state if fetch fails
    } finally {
      setLoading(false); // Set loading to false after fetch completes
    }
  };

  // Fetch data on initial load or when search term, price, or category changes
  useEffect(() => {
    if (searchTerm || query) {
      fetchData();
    }
  }, [searchTerm, selectedPrice, selectedCategory, query]); // Dependencies array

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Update the search term when user types
  };

  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value); // Update price filter
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value); // Update category filter
  };

  const handleBackButtonClick = () => {
    router.push("/"); // Navigate to home page
  };

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <button
        onClick={handleBackButtonClick}
        className="absolute top-4 right-4 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
        Back to Home
      </button>
      {/* Show search input and results based on whether query exists */}
      <h1 className="text-2xl font-bold mb-4">
        {query ? `Search Results for: ${searchTerm}` : "Search for Products"}
      </h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 text-sm text-gray-900"
      />

      {/* Filters Section */}
      <div className="flex space-x-4 mb-6">
        {/* Price Filter */}
        <select
          value={selectedPrice}
          onChange={handlePriceChange}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm"
        >
          <option value="">Filter by Price</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>

        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm"
        >
          <option value="">Filter by Category</option>
          <option value="cake">cake</option>
          <option value="candy">candy</option>
          <option value="fruit">fruit</option>
          <option value="cupcake">cupcake</option>
        </select>
      </div>

      {/* Show loading state */}
      {loading && <p>Loading...</p>}

      {/* Show error message if there's an error */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Show results if data is fetched successfully */}
      {filteredResults.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredResults.map((item) => (
            <div key={item.id} className="border p-4 rounded-md shadow-lg">
              <img
                src={item.image}
                alt={item.product}
                className="w-full h-40 object-cover rounded-md"
              />
              <h4 className="text-sm font-medium mt-2">{item.product}</h4>
              <p className="text-xs text-gray-600">${item.price}</p>
              <button className="mt-2 text-sm text-blue-500 hover:underline">
                View Product
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResultsPage;
