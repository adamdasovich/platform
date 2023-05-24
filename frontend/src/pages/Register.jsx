import styled from "styled-components"

import { useState,useEffect } from "react"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
	rgba(255, 255, 255, 0.5),
	rgba(255, 255, 255, 0.5)
	),
	url("https://cdn.shopify.com/s/files/1/1257/6551/files/WBG_2_a164e906-cef0-46c5-922a-c779ffc0eb8a.jpg?v=1670879224&width=1500") center;
	
	display: flex;
	justify-content: center;
	align-items: center;
	background-size: cover;
	`

const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
  
`

const Title = styled.h1`
  font-size: 24px;	
  font-weight: 300;
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`

const Agreement = styled.div`
  font-size: 12px;
  margin: 20px 0;
`

const Checkbox = styled.input`
  margin-right: 5px;
`

const Desc = styled.span`
  color: black;
`

const Button = styled.button`
  width: 40%;
  border: border-box;
  padding: 15px 20px;
  background-color: yellowgreen;
  color: black;
  border: 3px solid black;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 20px;
  &:hover {
	background-color: orange;
	  }

`

const Register = () => {
	const [username, setUsername] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	useEffect(() => {
		return () => {
			setUsername("")
			setEmail("")
			setPassword("")
		}
	}, [])
	

	const handleSubmit = (e) => {	
		e.preventDefault()
		setUsername("")
		setEmail("")
		setPassword("")
	}
	console.log(username, email, password)

  return (	
	<Container>
		<Wrapper>
			<Title>CREATE AN ACCOUNT</Title>
			<Form>
				<Input placeholder="username" />
				<Input placeholder="email" />
				<Input placeholder="password" />
				<Input placeholder="confirm password" />
				<Agreement>
					<Checkbox type="checkbox" />
					<Desc>
						By creating an account, I consent to the processing of my personal
						data in accordance with the <b>PRIVACY POLICY</b>
					</Desc>
				</Agreement>
				<Button onClick={(e)=>handleSubmit} >CREATE</Button>
			</Form>
		</Wrapper>
	</Container>
  )
}

export default Register