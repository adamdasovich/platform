import styled from "styled-components"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { axiosIntance } from '../config';
import { useEffect } from "react";

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
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		confirm_password: ''
	})
	const [checkEmail, setCheckEmail] = useState(false)
	
	const navigate = useNavigate()

	useEffect(() => {
		const checkUser = async () => {
			try {
				const res = await axiosIntance.get(`customers/email/${formData.email}`)
				const checkEmail = res.data[0].email
				setCheckEmail(checkEmail)				
			} catch (error) {
				console.log(error)
			}
		}
		checkUser()
		if (checkEmail) {
			alert('Email already exists')
			navigate('/login')
		}
	}, [formData.email, checkEmail, navigate])

	const submitHandler = async (e) => {	
		e.preventDefault()
		const { name, email, password, confirm_password } = formData
		if (name && email && password && (password === confirm_password)) {
			navigate('/')
		} else if (password !== confirm_password) {
			alert('Password does not match')
			return
		} else {
			alert('Please fill in all the fields')
			return			
		}
		try {
			const res = await axiosIntance.post('/auth/register', {
				name,
				email,
				password
			})
			console.log(res)
		} catch (error) {
			console.log(error)
		}		
	}

  return (	
	<Container>
		<Wrapper>
			<Title>CREATE AN ACCOUNT</Title>
			<Form onSubmit={submitHandler}>
				<Input 
					placeholder="name"
					type="text"
					onChange={e => setFormData({...formData, name: e.target.value})} 
					required
				/>
				<Input 
					placeholder="email" 
					type='email'
					onChange={e => setFormData({...formData, email: e.target.value})}
					required
				/>
				<Input 
					placeholder="password" 
					type='password'
					onChange={e => setFormData({...formData, password: e.target.value})}
					required 
				/>
				<Input 
					placeholder="confirm password"
					type='confirm_password'
					onChange={e => setFormData({...formData, confirm_password: e.target.value})}
					required
				/>
				<Agreement>
					<Checkbox type="checkbox" />
					<Desc>
						By creating an account, I consent to the processing of my personal
						data in accordance with the <b>PRIVACY POLICY</b>
					</Desc>
				</Agreement>
				<Button type='submit' >CREATE</Button>
			</Form>
		</Wrapper>
	</Container>
  )
}


export default Register