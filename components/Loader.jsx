import React from 'react'
import Image from 'next/image'
import '@styles/loader.css'
const Loader = () => {
    return (
        <div className='feed_load_image'>
            <Image
                src={`https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif`}
                width={40}
                height={40}
                alt='loading-image'
            />
        </div>
    )
}

export default Loader