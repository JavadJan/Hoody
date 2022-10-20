import React from 'react'

export const OthersItems = () => {
    return (
        <div className='others-items'>
            <div className='location'>
                <div className='your-location'>
                    <i className="fas fa-location"></i>
                </div>
                <div className="search-box-loc">
                    <input type="text" placeholder='Search location ...' Style="font-family:Arial, FontAwesome" />
                    {/* placeholder="&#xF002;" */}
                    <span htmlFor="" className="search-icon">
                        <i className="fas fa-search"></i>
                    </span>
                </div>
            </div>

        </div>
    )
}
