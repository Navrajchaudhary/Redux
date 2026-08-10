import React, { useEffect } from 'react'
import { fetchPhotos, fetchVedios } from '../api/mediaApi';
import { useDispatch, useSelector } from 'react-redux';
import { setError, setLoading, setQuery, setResults } from '../Redux/features/searchSlice';
import ResultsCard from './ResultsCard';

const ResultsGrid = () => {

    const { query, activeTab, results, loading, error } = useSelector((store) => store.search)

    const dispatch = useDispatch()



    useEffect(function () {

        const getData = async () => {

            try {

                if (!query) return

                dispatch(setLoading())

                let data

                if (activeTab == "Photos") {
                    const res = await fetchPhotos(query)
                    data = res.results.map((item) => ({
                        id: item.id,
                        type: 'photos',
                        title: item.alt_description,
                        thumnails: item.urls.small,
                        src: item.urls.full,
                        links: item.links.html
                    }))


                }
                if (activeTab == "Vedios") {
                    const res = await fetchVedios(query)
                    data = res.videos.map((item) => ({
                        id: item.id,
                        type: 'vedios',
                        title: item.user.name || 'Vedio',
                        thumnails: item.image,
                        src: item.video_files[1].link,
                        links: item.url
                    }))
                }

                dispatch(setResults(data))
            } catch (err) {
                dispatch(setError(err.message))
            }
        }
        getData()
    }, [query, activeTab])

    return (
        <div>
            {loading ? <div className="flex flex-col items-center justify-center h-[70vh] gap-4">
                <div className="flex gap-2">
                    <span className="w-4 h-4 rounded-full bg-blue-600 animate-bounce"></span>
                    <span className="w-4 h-4 rounded-full bg-blue-600 animate-bounce [animation-delay:150ms]"></span>
                    <span className="w-4 h-4 rounded-full bg-blue-600 animate-bounce [animation-delay:300ms]"></span>
                </div>

                <p className="text-gray-500 font-medium">
                    Loading media...
                </p>
            </div> : <div className='flex items-center flex-wrap gap-5 px-5'>
                {results.map((item, idx) => {
                    return <ResultsCard key={idx} item={item} />
                })}
            </div>}
            {error ? <div>{error}</div> : ''}


        </div>
    )
}

export default ResultsGrid
