export const Product = ({ product }: { product: Product }) => {
  return (
    <>
      <div>
        <h3>{product.name}</h3>
        <p>
          <a href={product.url}>{product.url}</a>
        </p>
      </div>
    </>
  );
};
