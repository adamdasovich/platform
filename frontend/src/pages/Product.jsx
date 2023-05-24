import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

import { axiosIntance } from '../config';

//const api = axios.create({
//	baseURL: "http://localhost:5000/api",
//});

const Container = styled.div
` height: 100px;  
`
const Wrapper = styled.div
` padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  `

  const ImageContainer = styled.div
  ` flex: 1;
  `

  const Image = styled.img
  ` width: 100%;
  	height: 90vh;
  	object-fit: cover;
  `
  const InfoContainer = styled.div
  ` flex: 1;
	padding: 0px 50px;
	  `	
  const Title = styled.h1
  ` font-weight: 200;
  `
  const Desc = styled.p
  `
  margin: 20px 0px;
  `
  const Price = styled.span
  ` font-weight: 100;
  	font-size: 40px;
  `

  const FilterContainer = styled.div
  ` width: 50%;
	margin: 30px 0px;
	display: flex;
	justify-content: space-between;
	  `
const Filter = styled.div
` 	display: flex;
	align-items: center;
`

const FilterTitle = styled.span
` font-size: 20px;
	font-weight: 200;
`

const FilterColor = styled.div
` width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${props => props.color};
	margin: 0px 5px;
	cursor: pointer;
`

const FilterSize = styled.select
` margin-left: 10px;
	padding: 5px;
`

const AddContainer = styled.div
` width: 50%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const AmountContainer = styled.div
` display: flex;
	align-items: center;
	font-weight: 700;
`

const Amount = styled.span
` width: 30px;
	height: 30px;
	border-radius: 10px;
	border: 1px solid teal;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0px 5px;
`

const Button = styled.button
` padding: 15px;
	border: 2px solid teal;
	background-color: white;
	cursor: pointer;
	font-weight: 500;
	`
const Add = styled.span
` margin-left: 10px;
`

const Remove = styled.span
` margin-right: 10px;
`

const FilterSizeOption = styled.option
`
`	


const Product = () => {
	const location = useLocation()
	const id = location.pathname.split("/")[2]

	const [product, setProduct] = useState({})
	const [quantity, setQuantity] = useState(1)

	useEffect(() => {
		const getProduct = async () => {
			try {
				const res = await axiosIntance.get('/products/' + id)
				setProduct(res.data[0])
			} catch (err) {
				console.log(err)
			}
		}
		getProduct()
	}, [id])

	console.log(product.id)

	const handleQuantity = (type) => {
		if (type === "dec") {
			quantity > 1 && setQuantity(quantity - 1)
		} else {
			setQuantity(quantity + 1)
		}
	}

	const handleClick = () => {
		
	}


  return (
	<Container>
		<Navbar />
		<Wrapper>
			<ImageContainer>
				<Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
			</ImageContainer>
			<InfoContainer>
				<Title>{product.name}</Title>
				<Desc>{product.description}</Desc>
				<Price>{product.price}</Price>
				<FilterContainer>
					<Filter>
						<FilterTitle>Color</FilterTitle>
						<FilterColor color="black" />
						<FilterColor color="darkblue" />
						<FilterColor color="gray" />
					</Filter>

					<Filter>
						<FilterTitle>Size</FilterTitle>
						<FilterSize>
							<FilterSizeOption>XS</FilterSizeOption>
							<FilterSizeOption>S</FilterSizeOption>
							<FilterSizeOption>M</FilterSizeOption>
							<FilterSizeOption>L</FilterSizeOption>
							<FilterSizeOption>XL</FilterSizeOption>
						</FilterSize>
					</Filter>
				</FilterContainer>
				<AddContainer>
					<AmountContainer>
						<Remove onClick={()=>handleQuantity('dec')}>-</Remove>
						<Amount>{quantity}</Amount>
						<Add onClick={()=>handleQuantity('inc')}>+</Add>
					</AmountContainer>
					<Button onClick={()=>handleClick}>ADD TO CART</Button>
				</AddContainer>
			</InfoContainer>
		</Wrapper>

	</Container>
  )
}

export default Product
