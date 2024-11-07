import React, {Suspense } from 'react'

import Search from '../../components/search'

export default function ProductList({ searchParams }) {

  return (
    <div className=''>
      <Suspense fallback={<div>Loading Products...Please Wait!</div>}>
        <Search searchParams={searchParams}/>
      </Suspense>
     
    </div>
  )
}
