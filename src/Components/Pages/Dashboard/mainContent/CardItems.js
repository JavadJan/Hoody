import React from 'react'

export const CardItems = ({ item }) => {
    function handleSelect(params) {
        console.log('go to chat')
    }
    return (
        <div className="item-card">
            <div className='item-img'>
                <img src={item.linkImage} alt="" />
            </div>

            <div className='item-content'>
                <h4>{item.owner}</h4>
                <h5>{item.price=== 0 ? 'Free' : item.price}</h5>
                <p>
                    <i className="uil uil-map-marker"></i>{item.distance}
                </p>
                <p onClick={() => {handleSelect()}}>
                    Got to direct <i className="fa-regular fa-comment-dots"></i>
                </p>
                {/* <p className='save'><i className="fa-regular fa-star"></i> <span className='details'>read more</span> </p> */}
            </div>
        </div>
    )
}
