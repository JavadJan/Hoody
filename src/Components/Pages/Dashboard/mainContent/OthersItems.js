import React from 'react'
import image1 from '../../../../assets/image1.jpg'
import img1 from '../../../../assets/img1.jpg'
import img2 from '../../../../assets/img2.jpg'
import img3 from '../../../../assets/img3.jpg'
import { Iframe } from './Iframe'

export const OthersItems = () => {
    const style = { border: 0 }
    const src = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12109.26968137635!2d22.9416259!3d40.64493285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgr!4v1666177116930!5m2!1sen!2sgr'
    const width = '100%'
    const height = '100%'
    const load = 'lazy'
    const referrerPolicy = "no-referrer-when-downgrade"
    return (
        <div className='others-items'>
            {/* <div className='google-map'> */}
            
                  {/* <Iframe
                    src={src}
                    width={width}
                    height={height}
                    style={style}
                    allowFullScreen={""}
                    load={load}
                    referrerPolicy={referrerPolicy} />   */}
            {/* </div> */}
            
            <div className='map'>
                <div className='location'>
                    <div className='your-location'>
                        <i className="fas fa-location"></i>
                    </div>
                    <div className='flash-down'>
                        <i className="uil uil-angle-down"></i>
                    </div>
                    <div className="search-box-loc">
                        <input type="text" placeholder='Search location ...' />
                        {/* style="font-family:Arial, FontAwesome" */}
                        {/* placeholder="&#xF002;" */}
                        <span htmlFor="" className="search-icon">
                            <i className="fas fa-search"></i>
                        </span>
                    </div>
                </div>

                <div className="item-categories">
                    <ul>
                        <li>Costume</li>
                        <li>Sports</li>
                        <li>Appliance Home</li>
                        <li>Toys</li>
                        <li>Electronic</li>
                        <li>Gaming</li>
                        <li>Discount</li>
                    </ul>
                </div>

                <div className='items-box'>
                    {/* 1 */}
                    <div className="item-card">
                        <div className='item-img'>
                            <img src={image1} alt="" />
                        </div>

                        <div className='item-content'>
                            <h4>name</h4>
                            <h5>Price: 10$</h5>
                            <p>
                                <i className="uil uil-map-marker"></i> 500 m
                            </p>
                            <p>
                                <i className="fa-regular fa-comment-dots"></i> message
                            </p>
                            <p className='save'><i className="fa-regular fa-star"></i> <span className='details'>read more</span> </p>
                        </div>
                    </div>
                    {/* 1 */}


                    <div className="item-card">
                        <div className='item-img'>
                            <img src={image1} alt="" />
                        </div>

                        <div className='item-content'>
                            <h4>name</h4>
                            <h5>Price: free</h5>
                            <p>
                                <i className="uil uil-map-marker"></i> 500 m
                            </p>
                            <p>
                                <i className="fa-regular fa-comment-dots"></i> message
                            </p>
                            <p className='save'><i className="fa-regular fa-star"></i> <span className='details'>read more</span> </p>
                        </div>
                    </div>

                    <div className="item-card">
                        <div className='item-img'>
                            <img src={image1} alt="" />
                        </div>

                        <div className='item-content'>
                            <h4>name</h4>
                            <h5>Price: 10$</h5>
                            <p>
                                <i className="uil uil-map-marker"></i> 500 m
                            </p>
                            <p>
                                <i className="fa-regular fa-comment-dots"></i> message
                            </p>
                            <p className='save'><i className="fa-regular fa-star"></i> <span className='details'>read more</span> </p>
                        </div>
                    </div>

                    <div className="item-card">
                        <div className='item-img'>
                            <img src={image1} alt="" />
                        </div>

                        <div className='item-content'>
                            <h4>name</h4>
                            <h5>Price: free</h5>
                            <p>
                                <i className="uil uil-map-marker"></i> 500 m
                            </p>
                            <p>
                                <i className="fa-regular fa-comment-dots"></i> message
                            </p>
                            <p className='save'><i className="fa-regular fa-star"></i> <span className='details'>read more</span> </p>
                        </div>
                    </div>

                    <div className="item-card">
                        <div className='item-img'>
                            <img src={image1} alt="" />
                        </div>

                        <div className='item-content'>
                            <h4>name</h4>
                            <h5>Price: free</h5>
                            <p>
                                <i className="uil uil-map-marker"></i> 500 m
                            </p>
                            <p>
                                <i className="fa-regular fa-comment-dots"></i> message
                            </p>
                            <p className='save'><i className="fa-regular fa-star"></i> <span className='details'>read more</span> </p>
                        </div>
                    </div>

                    <div className="item-card">
                        <div className='item-img'>
                            <img src={image1} alt="" />
                        </div>

                        <div className='item-content'>
                            <h4>name</h4>
                            <h5>Price: free</h5>
                            <p>
                                <i className="uil uil-map-marker"></i> 500 m
                            </p>
                            <p>
                                <i className="fa-regular fa-comment-dots"></i> message
                            </p>
                            <p className='save'><i className="fa-regular fa-star"></i> <span className='details'>read more</span> </p>
                        </div>
                    </div>

                    <div className="item-card">
                        <div className='item-img'>
                            <img src={image1} alt="" />
                        </div>

                        <div className='item-content'>
                            <h4>name</h4>
                            <h5>Price: free</h5>
                            <p>
                                <i className="uil uil-map-marker"></i> 500 m
                            </p>
                            <p>
                                <i className="fa-regular fa-comment-dots"></i> message
                            </p>
                            <p className='save'><i className="fa-regular fa-star"></i> <span className='details'>read more</span> </p>
                        </div>
                    </div>


                </div>
            </div>




        </div>
    )
}
