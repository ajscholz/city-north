import React from 'react'
import Layout from './src/components/layout'

import './src/styles/global.css'
import 'typeface-bebas-neue'
import 'typeface-montserrat'

console.log('hello')
export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
