import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setQuery } from '../Redux/features/searchSlice';

const Search = () => {

  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const handelSubmit = (e) => {
    e.preventDefault()
    dispatch(setQuery(text))
    setText('')
  }

 return (
  <div className=" bg-linear-to-t from-slate-950 via-gray-900 to-slate-950 py-8">
    <form
      onSubmit={handelSubmit}
      className="max-w-4xl mx-auto px-5"
    >
      <div className="flex items-center bg-white rounded-2xl shadow-xl overflow-hidden">

        <input
          type="text"
          placeholder="🔍 Search photos, videos, wallpapers..."
          className="flex-1 px-6 py-4 text-lg outline-none text-gray-700 placeholder:text-gray-400"
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-5 font-semibold transition duration-200 active:scale-95 cursor-pointer"
        >
          Search
        </button>

      </div>
    </form>
  </div>
);
}

export default Search
