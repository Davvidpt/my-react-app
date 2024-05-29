import CardProduct from "../components/Fragments/CardProduct";


const products = [
  {
    id: 1,
    title: "Dinasty-90",
    src: "/images/dinasty-130.jpg",
  },
  {
    id: 2,
    title: "Dinasty-90",
    src: "/images/dinasty.jpg",
  },
  {
    id: 3,
    title: "Dinasty-90",
    src: "/images/olympus-160.02.jpg",
  },
]
const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => (
      <CardProduct>
     <CardProduct.Header src={product.src} />
     <CardProduct.Body  title={product.title}/>
     <CardProduct.Footer />
     </CardProduct>
      ))}
    </div>
  );
};

export default ProductsPage;
