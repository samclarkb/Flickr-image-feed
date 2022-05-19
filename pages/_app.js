import '../styles/globals.css'
import React from 'react'

function MyApp({ Component, pageProps }) {
	const { Component, ...pageProps } = this.props
	return <Component {...pageProps} />
}

export default MyApp
