import useProducts from "@hooks/useProducts";
import { GridList } from "@components/common";
import { Product } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import { TProduct } from "@types";

const Products = () => {
  const { loading, error , productsFullInfo } = useProducts();
  
  return (
    <>
      {/* <Heading title={`${productPrefix?.toUpperCase()} Products`} /> */}
      <Loading status={loading} error={error} type="product">
        <GridList<TProduct>
          emptyMessage="There are no products"
          records={productsFullInfo}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </>
  );
};

export default Products;