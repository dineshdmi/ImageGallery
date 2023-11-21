import React, { useState, useEffect } from 'react';
import { Spin, Card, Row, Col } from 'antd';
import './Image.css';

const ImageLoader = ({ imageUrls }) => {
    const [loadedImages, setLoadedImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadImages = async () => {
            const imagePromises = imageUrls.map(url =>
                new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = url;
                    img.onload = () => resolve(img);
                    img.onerror = () => reject(new Error(`Failed to load image from ${url}`));
                })
            );

            try {
                const images = await Promise.all(imagePromises);
                setLoadedImages(images);
            } catch (error) {
                console.error('Error loading images:', error);
            } finally {
                setLoading(false);
            }
        };

        loadImages();
    }, [imageUrls]);

    return (
        <Spin spinning={loading}>
            <Row gutter={[16, 16]} className="image-gallery">
                {loadedImages.map((image, index) => (
                    <Col key={index} xs={24} sm={12} md={8} lg={6}>
                        <Card
                            className="image-card"
                            cover={<img src={image.src} alt={`Image ${index}`} className="image" />}
                        />
                    </Col>
                ))}
            </Row>
        </Spin>
    );
};

const ImageGallery = () => {
    const imageUrls = [
        'https://t3.ftcdn.net/jpg/01/70/81/82/240_F_170818276_Ss6Y0em1zetuCkcb1Z6aXzPJeYwKvzcE.jpg',
        'https://t4.ftcdn.net/jpg/02/17/63/97/240_F_217639719_SxjxC4qyRoJQJdwmWtgQrvzTUX0SF3HY.jpg',
        'https://thumbs.dreamstime.com/b/tiger-portrait-horizontal-11392212.jpg',
        'https://t4.ftcdn.net/jpg/02/10/54/59/360_F_210545946_H8K0CJih9ToRMqbBczgr2BLWJYcrNb1V.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlWDahd6WU2sxs5QvZtfMvGtNXCzSCwDI8hMtoGM3j&s',
        'https://t4.ftcdn.net/jpg/03/32/46/23/240_F_332462369_64Y5qJ7tLTS95Ycak2t8aWwEC6Hvleph.jpg',
        'https://t3.ftcdn.net/jpg/01/67/91/06/240_F_167910603_ZDT3fopDnxU9PwCLu8iRrzakY4xgPLCp.jpg',
        'https://t4.ftcdn.net/jpg/02/63/04/43/240_F_263044355_kzoLByQ9SbncIn8yrzVn8HCVNOvJGWIq.jpg',
        // Add more image URLs as needed
    ];

    return (
        <div className="app-container">
            <h1 className='text'>Random </h1>
            <h3 className='text1'>40 Images has been found</h3>
            <ImageLoader imageUrls={imageUrls} />
        </div>
    );
};

export default ImageGallery;