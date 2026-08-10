import React from 'react'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'
import { clearCollection } from '../Redux/features/collectionSlice'
import { toast, Bounce } from 'react-toastify';

const CollectionPage = () => {

  const items = useSelector((store) => store.collection)

  const dispatch = useDispatch()



  const clearAllCollection = () => {
    dispatch(clearCollection())
    toast.success('Removed collections ✅', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    })
  }


  return (
    <>
      <Navbar />


      <div className='p-5'>
        {items.items.length > 0 ? <div className='flex justify-between items-center  mb-10'>
          <h2 className='text-2xl font-bold'>Your Collections</h2>
          <button onClick={clearAllCollection} className='bg-red-500 px-2 py-1 rounded cursor-pointer active:scale-95'>Clear Collections</button>
        </div> : <div className='text-xl text-center mt-20'>No collection added </div>}

        <div className='flex flex-wrap gap-5'>
          {items.items.map((item, idx) => {
            return <CollectionCard key={idx} item={item} />
          })}
        </div>

      </div>
    </>
  )
}

export default CollectionPage
