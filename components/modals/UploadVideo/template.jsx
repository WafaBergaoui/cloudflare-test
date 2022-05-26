import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import S from "./style.module.scss";

const UploadVideo = ({ modalOpen, setModalOpen }) => {

    const onChange = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        const file = event.target.files[0];
        formData.append('inputFile', file);

        console.log("data file", formData);

        try {
            const res = await fetch('https://cloudflare-test-ajl.pages.dev/api/admin/videos/', {
                mode: 'no-cors',
                method: "POST",
                body: formData,
                headers: ({ 
                    'Accept': "application/json",
                    "Content-Type": "application/json"
                }),
            });
            const upload = await res.json();
            console.log(upload);
            return upload.uploadURL

        } catch (error) {
            console.log("error", error);
        }
    }

    return (
        <>
            <Modal className={S.modalStyle} toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
                <div >
                    <h5 className={S.title} id="exampleModalLabel">
                        Importer des vidéos
                    </h5>
                    <button
                        aria-label="Close"
                        className={S.closeBtn}
                        type="button"
                        onClick={() => setModalOpen(!modalOpen)}
                    >
                        <span aria-hidden={true}>×</span>
                    </button>
                </div>
                <ModalBody>
                    <input className={S.uploadVideoBTN} type="file" onChange={onChange} />
                </ModalBody>
            </Modal>
        </>
    );
};

// UploadVideo.getInitialProps = async () => {
//     const res = await fetch('https://cloudflare-test-ajl.pages.dev/api/admin/videos', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: formData,
//     });
//     const data = await res.json();
//     console.log(data);
// }

export default UploadVideo;

