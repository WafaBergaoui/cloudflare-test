import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import S from "./style.module.scss";

const UploadVideo = ({ show, setShow }) => {
    const handleClose = () => setShow(false);

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
            <Modal className={S.modalStyle} show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className={S.title} >Importer des vidéos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input className={S.uploadVideoBTN} type="file" onChange={onChange} />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default UploadVideo;