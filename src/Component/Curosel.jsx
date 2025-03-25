import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Carousel.css';

const HomePage = ({ onCreateAccount, onAlreadyRegister }) => {
    return (
        <div className="page-content">
            <h1 className="form-title">Welcome to Our Platform</h1>
            <p className="form-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="form-buttons">
                <Button
                    variant="success"
                    className="create-account w-100 mb-2"
                    onClick={onCreateAccount}
                >
                    Create Account
                </Button>
                <Button
                    variant="primary"
                    className="already-register w-100"
                    onClick={onAlreadyRegister}
                >
                    Already Register
                </Button>
            </div>
        </div>
    );
};


const SecondPage = () => {
    return (
        <div className="page-content">
            <h1 className="form-title">Second Page</h1>
            <p className="form-description">
                This is the content of the second page.
                You can replace this with your specific page content.
            </p>
        </div>
    );
};


const Carousel = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const pages = [
        <HomePage
            key="home"
            onCreateAccount={() => console.log('Create Account')}
            onAlreadyRegister={() => console.log('Already Register')}
        />,
        <SecondPage key="second" />
    ];

    const handleNextPage = () => {
        setCurrentPage((prev) => (prev + 1) % pages.length);
    };

    const handlePrevPage = () => {
        setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);
    };


    const isFirstPage = currentPage === 0;
    const isLastPage = currentPage === pages.length - 1;

    return (
        <div className="form-container">
            {pages[currentPage]}

            <div className="carousel-container">
                <div className="carousel-navigation">
                    <Button
                        variant="outline-primary"
                        onClick={handlePrevPage}
                        disabled={isFirstPage}
                        className="carousel-arrow left-arrow"
                    >

                        <i className="bi bi-arrow-left me-2"></i>
                        Previous
                    </Button>

                    <div className="page-indicator">
                        {pages.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${index === currentPage ? 'active' : ''}`}
                                onClick={() => setCurrentPage(index)}
                            />
                        ))}
                    </div>

                    <Button
                        variant="outline-primary"
                        onClick={handleNextPage}
                        disabled={isLastPage}
                        className="carousel-arrow right-arrow"
                    >
                        Next

                        <i className="bi bi-arrow-right ms-2"></i>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Carousel;