import React from 'react'
import AllOfProduct from './AllOfProduct'
import Collection from './Collection'
import CollectionCustomer from './CollectionCustomer'

const ContentProductpage = () => {
     return (
          <div className='flex flex-col items-center'>
               <AllOfProduct />
               <Collection />
               <CollectionCustomer />
          </div>
     )
}

export default ContentProductpage