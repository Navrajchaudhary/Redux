import React from 'react'
import Search from '../components/Search'
import Tabs from '../components/Tabs'
import ResultsGrid from '../components/ResultsGrid'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'


const HomePage = () => {

    const { query, loading } = useSelector((store) => store.search)

    return (
        <div>
            <Navbar/>
            <Search />

            {query !== '' ? <><Tabs />
                <ResultsGrid /></> : ''}
        </div>
    )
}

export default HomePage
