import React from 'react'
import logo1 from '../../../../assets/logo1.png'
import './Modal.scss'

export const ModalMap = ({ openMap, setOpenMap }) => {
    const srcMap = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12109.26968137635!2d22.9416259!3d40.64493285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgr!4v1668249436974!5m2!1sen!2sgr"
    const H = '400px'
    const W = '400px'
    const lazy = "lazy"
    const referrerpolicy = "no-referrer-when-downgrade"
    const border = "border:0;"

    if (!openMap) return null
    console.log('openMap', openMap)
    async function closeModal() {

        //when close the modal userItem component should refresh
        // await getItemsById(id).then((data) => {
        //     setItems(data)
        // })
        setOpenMap(false)

    }
    return (
        <div id="myModal" className="modal">
            <div className="modal-content">

                <div className='modal-head'>
                    <img src={logo1} alt="" />
                    <span className="close" onClick={closeModal}>&times;</span>
                </div>
                <div>
                    map
                    <iframe
                        src={srcMap}
                        width={W}
                        height={H}
                        style={border}
                        allowfullscreen=""
                        loading={lazy}
                        referrerpolicy={referrerpolicy}
                    ></iframe>
                </div>


            </div>
        </div>
    )
}
