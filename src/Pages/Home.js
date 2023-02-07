import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import NftNavList from '../components/NftNavList/NftNavList'
import NftUserHome from '../components/nftUserHome/nftUserHome'

function Home() {
  return (
    <>
    <Navbar/>
    <NftUserHome/>
    <NftNavList/>
    </>
  )
}

export default Home