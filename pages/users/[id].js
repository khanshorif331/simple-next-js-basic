import React from 'react'

const User = () => {
	return (
		<div>
			<h1>Name : </h1>
		</div>
	)
}

export default User

// This function gets called at build time
export async function getStaticPaths() {
	// Call an external API endpoint to get posts
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	const users = await res.json()

	// Get the paths we want to pre-render based on posts
	const paths = users.map(user => ({
		params: { id: user.id },
	}))

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: false }
}
