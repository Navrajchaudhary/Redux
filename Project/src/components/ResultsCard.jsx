import React from 'react'
import { useDispatch } from 'react-redux'
import { addCollection } from '../Redux/features/collectionSlice'
import { toast , Bounce} from 'react-toastify';

const ResultsCard = ({ item }) => {

    const dispatch = useDispatch()

    const isPhoto = item.type === 'photos'

    const addToCollection = (item) => {
        dispatch(addCollection(item))
        toast.success('Added to collections ✅', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    }

    return (
        <div className="w-[23%]">
            <div className="relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 shadow-lg">

                {/* Media */}
                <a
                    href={item.links}
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="h-90 w-full overflow-hidden">
                        {isPhoto ? (
                            <img
                                src={item.src}
                                alt={item.title || 'Image'}
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            <video
                                src={item.src}
                                className="h-full w-full object-cover"
                                autoPlay
                                muted
                                loop
                                controls
                            />
                        )}
                    </div>
                </a>

                {/* Footer */}
                <div className="flex items-center justify-between gap-4 p-4">
                    <h1 className="flex-1 line-clamp-2 text-base font-medium text-white">
                        {item.title}
                    </h1>

                    <button
                        onClick={() => addToCollection(item)}
                        className="shrink-0 rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition-all duration-200 hover:bg-blue-700 active:scale-95 cursor-pointer"
                    >
                        Save
                    </button>
                </div>

            </div>
        </div>
    )
}

export default ResultsCard
