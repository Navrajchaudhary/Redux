import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../Redux/features/searchSlice'

const Tabs = () => {

    const tabs = ['Photos', 'Vedios']

    const dispatch = useDispatch()
    const activeTab = useSelector((state)=> state.search.activeTab)

  return (
  <div className="flex justify-center my-4">
    <div className="flex items-center gap-3 bg-gray-900 p-2 rounded-2xl shadow-lg">
      {tabs.map((elem, idx) => (
        <button
          key={idx}
          onClick={() => dispatch(setActiveTab(elem))}
          className={`
            px-6 py-2.5 rounded-xl
            text-sm font-semibold uppercase tracking-wide
            transition-all duration-300 cursor-pointer
            ${
              activeTab === elem
                ? "bg-blue-600 text-white shadow-md shadow-emerald-500/30"
                : "text-gray-300 hover:bg-gray-800 hover:text-white"
            }
          `}
        >
          {elem}
        </button>
      ))}
    </div>
  </div>
);
}

export default Tabs
