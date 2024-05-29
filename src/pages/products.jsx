import CardProduct from "../components/Fragments/CardProduct";
const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header src="/images/dinasty.jpg"></CardProduct.Header>
        <CardProduct.Body title="Dinasty-90"></CardProduct.Body>
        <CardProduct.Footer></CardProduct.Footer>
      </CardProduct>
      <CardProduct>
        <CardProduct.Header src="/images/dinasty-130.jpg"></CardProduct.Header>
        <CardProduct.Body title="Dinasty-130"></CardProduct.Body>
        <CardProduct.Footer></CardProduct.Footer>
      </CardProduct>
      <CardProduct>
        <CardProduct.Header src="/images/olympus-160.01.jpg"></CardProduct.Header>
        <CardProduct.Body title="Olympus 160.01"></CardProduct.Body>
        <CardProduct.Footer></CardProduct.Footer>
      </CardProduct>
    </div>
  );
};

export default ProductsPage;
