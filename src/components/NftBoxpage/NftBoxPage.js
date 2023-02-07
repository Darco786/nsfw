import React from 'react'
import NftSearch from '../NftSearch/NftSearch'
import {BsThreeDots} from 'react-icons/bs'
import {FaEthereum} from 'react-icons/fa'
import Nft1 from '../../assets/nfts/nft2.png'

function NftBoxPage() {
  return (
    <>
    <NftSearch/>
    <section className='nft-con-sec'>
        <div className='container'>
            <div className='nft-grid'>

                <div className='nft-card-box'>
                    <img src={Nft1} alt=""/>
                    <div className='title'>
                        <h2>Purples</h2>
                        <span><BsThreeDots/></span>

                    </div>
                    <span>@loremipsum</span>
                    <div className='price'>
                        <p>4 ETH</p>

                        <span><FaEthereum/></span>
                    </div>
                    <div>
                        <a href="/">Buy Now</a>
                    </div>
                </div>


            </div>

        </div>
        
    </section>
    </>
  
  )
}

export default NftBoxPage