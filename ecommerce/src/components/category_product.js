import React from 'react'

import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components';


const CategoryProduct = ({ id, title, image, specs, features, price, stock }) => {
    //can use the navigate function to navigate to the other routes
    const navigate = useNavigate();
  return (
      <article>
          <ProductTitle>
              <Link to={`Products/${id}`}>{title}</Link>
          </ProductTitle>
          <figure>
              <ProductImageContainer>
                  <ProductImageContainerImage src={`./assets/${image}`} alt={title}/>
              </ProductImageContainer>
          </figure>

          <aside>
              <ProductInfo>
                  <ProductInfoheader>Dimensions</ProductInfoheader>
                  <label>{specs.dimensions}</label>
              </ProductInfo>
              {specs.capacity &&
                  <ProductInfo >
                      <ProductInfoheader>Capacity</ProductInfoheader>
                      <label>{specs.capacity}</label>
                  </ProductInfo>
              }

              <ProductInfo>
                  <ProductInfoheader>Features</ProductInfoheader>
                  <ul>
                      {features?.map((f,i) => {
                          return <ProductInfoListItem key={`feature${i}`}>{f}</ProductInfoListItem>
                      })}
                  </ul>
              </ProductInfo>
          </aside>

          <aside>
              <ProductInfoFinancePrice>
                  &pound;{price}
              </ProductInfoFinancePrice>
              <ProductInfoStock>
                  <ProductInfoStockLabel>Stock Level:{stock}</ProductInfoStockLabel>
                  <ProductInfoStockLabel>Free Delivery</ProductInfoStockLabel>
              </ProductInfoStock>

              <ProductInfoAction>
                  <ProductInfoActionButton onClick={()=>navigate(`Products/${id}`)}>View Products</ProductInfoActionButton>
                  <ProductInfoActionButton onClick={()=>navigate(`basket`)}>Add to Basket</ProductInfoActionButton>
              </ProductInfoAction>
            
          </aside>
          
   </article>
  )
}

export default CategoryProduct;


const ProductTitle = styled.div`
    grid-column: 1 / span 3;
    color: darkslategray;
    font-weight: bold;
    font-size: 1.5em;
    padding-left: 10px;
`

const ProductImageContainer = styled.div`
    padding: 10px;
    width: 60%;
`

const ProductImageContainerImage = styled.img`
   width: 100%;
    height: 100%;
`

const ProductInfo = styled.div`
display: flex;
    flex-direction: column;
`
const ProductInfoheader = styled.h3`
  color: darkslategray;
    font-size: 1em;
    font-weight: bold;
    padding-top: 10px;
    padding-bottom: 5px;
`

const ProductInfoListItem = styled.li`
padding-top: 5px;
`

const ProductInfoFinancePrice = styled.div`
color: darkslategray;
    font-size: 2em;
    font-weight: bold;
    padding-top: 10px;
`

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
`

const ProductInfoStockLabel = styled.label`
 padding-bottom: 5px;
`

const ProductInfoAction = styled.div`
 display: flex;
    flex-direction: column;
`

const ProductInfoActionButton = styled.button`
width: 160px;
    height: 30px;
    border-radius: 10px;
    margin-top: 20px;
    background-color: lightgray;
    border:  solid 1px slategrey;
    font-weight: bold;
`