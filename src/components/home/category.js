import Card from "../constants/card";

const Category = () => {
  const products = [
    {
      id: 1,
      title: "Cake",
      image:
        "https://img.pikbest.com/png-images/qiantu/strawberry-cake-dessert-doodle-decoration-illustration-cartoon-children_2738160.png!sw800", // You can replace this with a real image of cake
      categoryUrl: "/categories/cake", // Link to the cake category page
    },
    {
      id: 2,
      title: "Biscuit",
      image:
        "https://img.freepik.com/premium-vector/cookies-illustration_385450-313.jpg", // Replace with an actual image of biscuits
      categoryUrl: "/categories/biscuit", // Link to the biscuit category page
    },
    {
      id: 3,
      title: "Bread",
      image:
        "https://png.pngtree.com/png-vector/20191126/ourmid/pngtree-image-of-a-loaf-of-bread-vector-or-color-illustration-png-image_2039616.jpg", // Replace with an actual image of bread
      categoryUrl: "/categories/bread", // Link to the bread category page
    },
    {
      id: 4,
      title: "Donut",
      image:
        "https://img.freepik.com/free-vector/vector-colorful-icon-pink-doughnut-isolated-white-background_134830-1096.jpg?semt=ais_hybrid", // Replace with an actual image of bread
      categoryUrl: "/categories/bread", // Link to the bread category page
    },
    {
      id: 5,
      title: "Fast Food",
      image:
        "https://png.pngtree.com/png-vector/20191030/ourmid/pngtree-burger-vector-illustration-with-filled-line-design-burger-clip-art-png-image_1923564.jpg", // Replace with an actual image of bread
      categoryUrl: "/categories/bread", // Link to the bread category page
    },
  ];

  return (
    <section className="py-8">
      <h2 className="mb-7 text-center text-4xl font-bold text-stone-900">
        Categories
      </h2>
      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        {products.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            categoryName={product.title}
            imageSrc={product.image}
            categoryUrl={product.categoryUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Category;
