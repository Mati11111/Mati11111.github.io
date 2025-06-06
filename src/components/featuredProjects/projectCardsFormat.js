import React, { useState, useEffect } from 'react';

import { Fade } from 'react-awesome-reveal';
import { Slide } from 'react-slideshow-image';

import ProjectCardsData from './projectCardsData';

import { ReactComponent as Close } from '../../imgs/logos/close-icon.svg';
import { ReactComponent as Next } from '../../imgs/logos/next-slider-icon.svg';
import { ReactComponent as Prev } from '../../imgs/logos/prev-slider-icon.svg';

import { TextDisplay } from '../../utils/textDisplay.js';

const featuredContent = [
    { titleEng: "Featured Projects" },
    { titleEsp: "Proyectos destacados" },
];


function centerPopup() {
    var popup = document.querySelector('.project-preview-container');

    var width = window.innerWidth;
    var height = window.innerHeight;

    var popupWidth = popup.offsetWidth;
    var popupHeight = popup.offsetHeight;

    var left = (width - popupWidth) / 2;
    var top = (height - popupHeight) / 2;

    popup.style.left = `${left}px`;
    popup.style.top = `${top}px`;
}


function ProjectFormat({ isTraslatedLanguage }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isProjectOpen, setProjectOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    function handleCloseOverlay() {
        const overlays = [...document.getElementsByClassName('overlay')];
        window.addEventListener('click', ({ target }) => {
            const overlay = target.closest('.overlay');
            const clickedOnClosedOverlay = overlay
                && !overlay.classList.contains('inactive')

            overlays.forEach(p => p.classList.remove('inactive'));

            if (clickedOnClosedOverlay) {
                overlay.classList.add('inactive');
                document.body.style.overflow = 'auto';
                setProjectOpen(false);
            }
        });
    }

    useEffect(() => {
        if (isProjectOpen) {
            centerPopup();
        }
    }, [isProjectOpen]);

    const handleProjectOpen = (id) => {
        setSelectedId(id);
        setProjectOpen(true);
        document.body.style.overflow = 'hidden';
        handleCloseOverlay()
    }

    const handleProjectClose = () => {
        setProjectOpen(false);
        document.body.style.overflow = 'auto';
    }

    const handleStartChange = (from, to) => {
        setCurrentSlide(to);
    };

    const project = ProjectCardsData.find(project => project.id === selectedId);

    const slideSettings = {
        autoplay: false,
        slidesToShow: 3,
        canSwipe: false,
        defaultIndex: 0,
        transitionDuration: 500,
        prevArrow: (
            <button className='slideButtonPrev'>
                <Prev className='prev-btn' />
            </button>
        ),
        nextArrow: (
            <button className='slideButtonNext'>
                <Next className='next-btn' />
            </button>
        ),
        onStartChange: handleStartChange
    };

    return (
        <div className='featured-container'>
            <Fade
                direction='down'
                className='fade-effect'
                triggerOnce='true'
                fraction='1'
            >
                <div className='featured-title'>
                    <div className='circle-title' ></div>
                    <hr className='left-hr' />
                    {isTraslatedLanguage ? (
                        //eng 
                        <p>
                            <TextDisplay
                                text={featuredContent[0].titleEng}
                            />
                        </p>
                    ) :
                        //spa
                        <p>
                            <TextDisplay
                                text={featuredContent[1].titleEsp}
                            />
                        </p>
                    }
                    <hr className='right-hr' />
                </div>
            </Fade>
            <div className="slide-container">
                <div className={`${isProjectOpen ? 'overlay' : 'overlay-inactive'}`}>
                    {isProjectOpen && (
                        <div className='project-preview-container'>
                            <div className='project-preview'>
                                <div className='project-preview-left'>
                                    <div className='project-preview-title'>
                                        <div className='circle-title' ></div>
                                        <hr className='left-hr' />
                                        {isTraslatedLanguage ? (
                                            //eng
                                            <p>
                                                {project.titleEn}
                                            </p>
                                        ) :
                                            //spa
                                            <p>
                                                {project.title}
                                            </p>
                                        }
                                    </div>
                                    {isTraslatedLanguage ? (
                                        //eng
                                        <p>{project.contentEn}
                                        </p>
                                    ) :
                                        //spa
                                        <p>
                                            {project.content}
                                        </p>
                                    }
                                    <p className='project-review-link'>
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href={project.link}
                                        >
                                            &gt;&gt;{project.link}
                                        </a>
                                    </p>
                                </div>
                                <hr className='right-hr' />
                                <div className='project-preview-right'>
                                    <img src={project.image} alt="Project" />
                                    <img src={project.image2} alt="Project" />
                                    <div className='previewImageOverlay'/>
                                </div>
                            </div>
                            <p onClick={handleProjectClose} className='overlay-close-button'>
                                <Close alt="Close" />
                            </p>
                        </div>
                    )}
                </div>
                <Slide {...slideSettings}>
                    {ProjectCardsData.map((project, index) => {
                        const nextSlide = (currentSlide + 1) % ProjectCardsData.length;
                        return (
                            <div
                                className={`project-card ${currentSlide === index ? '' : nextSlide === index ? 'middle-card' : ''}`}
                                key={index}
                            >
                                {isTraslatedLanguage ? (
                                    //eng
                                    <p className="project-title">
                                        {project.titleEn}
                                    </p>
                                ) :
                                    //spa
                                    <p className="project-title">
                                        {project.title}
                                    </p>
                                }
                                <hr />
                                <div className="project-info">
                                    <div className="project-img-container" onClick={() => handleProjectOpen(project.id)}>
                                        <img src={project.image} alt={project.title} />
                                    </div>
                                    <div className="project-description">
                                        {isTraslatedLanguage ? (
                                            //eng
                                            <p>
                                                {project.contentEn}
                                            </p>
                                        ) :
                                            //spa
                                            <p>
                                                {project.content}
                                            </p>
                                        }
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Slide>
            </div>
        </div>
    );
}

export default ProjectFormat;
