import React, { useState } from 'react';
import Modal from 'react-modal';
import './Downloads.css'; // Make sure to create this CSS file for styling
import Header from '../../common/header/Header';
import fireCertificate from '../../assest/files/FIRE_CERTIFICATE.pdf';
import appendix from '../../assest/files/APPENDIX_-_IX.pdf';
import prospectus from '../../assest/files/Prospectus_final.pdf';
import acdemics from '../../assest/files/ACADEMIC_CALENDAR_24-25.pdf';

Modal.setAppElement('#root'); // Set the app element for accessibility

const Downloads = () => {
  const [previewUrl, setPreviewUrl] = useState(null);

  const items = [
    { id: 1, name: 'Academic Calender', url: acdemics },
    { id: 2, name: 'Prospectus', url: prospectus },
    { id: 3, name: 'Appendix', url: appendix },
    { id: 4, name: 'Fire certificate', url: fireCertificate },
  ];

  const handlePreview = (url) => {
    setPreviewUrl(url);
  };

  const closeModal = () => {
    setPreviewUrl(null);
  };

  return (
    <>
      <Header />
      <div className="downloads-container">
        {items.map(item => (
          <div key={item.id} className="download-item">
            <a href={item.url} download>{item.name}</a>
            <button onClick={() => handlePreview(item.url)}>Preview</button>
          </div>
        ))}
      </div>
      <Modal
        isOpen={!!previewUrl}
        onRequestClose={closeModal}
        contentLabel="File Preview"
        className="downloadmodal"
        overlayClassName="overlay"
      >
        <button onClick={closeModal} className="close-button">×</button>
        <iframe src={previewUrl} title="File Preview" className="preview-iframe"></iframe>
      </Modal>
    </>
  );
};

export default Downloads;