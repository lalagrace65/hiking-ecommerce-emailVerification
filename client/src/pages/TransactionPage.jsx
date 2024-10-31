import React from 'react'
import Sidebar from '../components/Sidebar'


export default function TransactionPage() {
  return (
    <div className='flex'>
        <Sidebar/>
        <div className='flex-1 p-4'>
          <h1 className="mb-4 text-xl font-semibold">Transaction Page</h1>
        </div>
    </div>
  )
}