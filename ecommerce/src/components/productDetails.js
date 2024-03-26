import React from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../fetcher";
import styled from "styled-components";



const ProductDetails = () => {
  const [product, setProduct] = React.useState({ errorMessage: "", data: {} });
  const { productId } = useParams();

  React.useEffect(() => {
    const fetchdata = async () => {
      const responseObject = await getProductsById(productId);
      setProduct(responseObject);
    };
    fetchdata();
  }, [productId]);
    
    const createMarkup = () => {
    return {__html:product.data.description}
    }
    
    const ProductDescription = styled.div`
grid-column: 1 / span 3;
`;

const ProductTitle = styled.div`
  grid-column: 1 / span 3;
  color: darkslategray;
  font-weight: bold;
  font-size: 1.5em;
  padding-left: 10px;
`;

const ProductImageContainer = styled.div`
  padding: 10px;
  width: 60%;
`;

const ProductImageContainerImage = styled.img`
  width: 100%;
  height: 100%;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const ProductInfoheader = styled.h3`
  color: darkslategray;
  font-size: 1em;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 5px;
`;

const ProductInfoListItem = styled.li`
  padding-top: 5px;
`;

const ProductInfoFinancePrice = styled.div`
  color: darkslategray;
  font-size: 2em;
  font-weight: bold;
  padding-top: 10px;
`;

const ProductInfoStock = styled.div`
  padding-left: 10px;
  margin-top: 20px;
  padding-top: 10px;
  background-color: lightgrey;
  height: 20%;
  width: 30%;
  border-radius: 5px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
`;

const ProductInfoStockLabel = styled.label`
  padding-bottom: 5px;
`;

const ProductInfoAction = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductInfoActionButton = styled.button`
  width: 160px;
  height: 30px;
  border-radius: 10px;
  margin-top: 20px;
  background-color: lightgray;
  border: solid 1px slategrey;
  font-weight: bold;
`;
  return (
    <article>
      <ProductTitle>{product.data.title}</ProductTitle>
      <figure>
        <ProductImageContainer>
          <ProductImageContainerImage
            src={`../assets/${product.data.image}`}
            alt={product.data.title}
          />
        </ProductImageContainer>
      </figure>

      <aside>
        <ProductInfo>
          <ProductInfoheader>Dimensions</ProductInfoheader>
          <label>{product.data.specs && product.data.specs.dimensions}</label>
        </ProductInfo>

        {product.data.specs && product.data.specs.capacity && (
          <ProductInfo>
            <ProductInfoheader>Capacity</ProductInfoheader>
            <label>{product.data.specs.capacity}</label>
          </ProductInfo>
        )}

        <ProductInfo>
          <ProductInfoheader>Features</ProductInfoheader>
          <ul>
            {product.data.features?.map((f, i) => {
              return <ProductInfoListItem key={`feature${i}`}>{f}</ProductInfoListItem>;
            })}
          </ul>
        </ProductInfo>
      </aside>

      <aside>
        <ProductInfoFinancePrice>
          &pound;{product.data.price}
        </ProductInfoFinancePrice>
        <ProductInfoStock >
          <ProductInfoStockLabel>Stock Level:{product.data.stock}</ProductInfoStockLabel>
          <ProductInfoStockLabel>Free Delivery</ProductInfoStockLabel>
        </ProductInfoStock>

        <ProductInfoAction>
          <ProductInfoActionButton>Add to Basket </ProductInfoActionButton>
        </ProductInfoAction>
      </aside>
      <ProductDescription dangerouslySetInnerHTML={createMarkup()}></ProductDescription>
    </article>
  );
};

export default ProductDetails;

