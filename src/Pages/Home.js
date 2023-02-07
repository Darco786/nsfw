import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import NftBoxPage from '../components/NftBoxpage/NftBoxPage'
import NftNavList from '../components/NftNavList/NftNavList'
import NftUserHome from '../components/nftUserHome/nftUserHome'

function Home() {
  return (
    <>
    <Navbar/>
    <NftUserHome/>
    <NftNavList/>
    <NftBoxPage/>
    </>
  )
}

export default Home