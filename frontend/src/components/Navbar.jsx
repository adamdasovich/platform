import React from 'react'
import { Badge } from '@material-ui/core'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
//import { useSelector } from 'react-redux'
//import { Link } from 'react-router-dom'

const Container = styled.div
` height: 100%;
  font-family: Arial, Helvetica, sans-serif;
  
`

const Wrapper = styled.div
` padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`

const Left = styled.div
`
flex: 1;
display: flex;
align-items: center;
`
const Input = styled.input`
	  border: none;
	  
`
const Center = styled.div
`
flex: 1;
text-align: center;
`
const Logo = styled.h1`
  font-weight: bold;
  color: blue;
  
`

const Right = styled.div
`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;

`

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;

`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
 
  `

const Navbar = () => {
  const quantity = 4
  return (
	<Container style={{background: 'lightGreen'}}>
		<Wrapper>
			<Left>
					<SearchContainer style={{background: 'white'}}>
						<Input placeholder='Search' />
					<Search style={{color:'blue', fontSize:16}}/>
					</ SearchContainer>				
			</Left>
			<Center>
				<Logo>Weeds B Gone</Logo>
			</Center>
			<Right>
				<MenuItem>Register</MenuItem>
				<MenuItem>Sign In</MenuItem>
				{/*<Link to='/cart'>*/}
				<MenuItem>
				<Badge 
					overlap='rectangular' 
					badgeContent={quantity} 
					color="primary"
				>
      				<ShoppingCartOutlined />
    			</Badge>	
				</MenuItem>
				{/*</Link>*/}				
			</Right>
		</Wrapper>		
	</Container>
  )
}

export default Navbar