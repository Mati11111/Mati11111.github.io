import SummaryData from "./summaryData";
import { TextDisplay } from "../../utils/textDisplay.js";
const aboutMe = [
    { eng: "About me >>" },
    { esp: "Sobre mi >>" },
];

const summary = [
    { eng: "Personal Summary >>" },
    { esp: "Curriculum Resumen >>" },
];

function SummarySection({ isTraslatedLanguage }) {
    return (
        <div className='summary-container'>
            <div className='summary-title'>
                {isTraslatedLanguage ? (
                    //eng version
                    <p>
                        <TextDisplay
                            text={aboutMe[0].eng}
                        />
                    </p>
                ) :
                    //spa version
                    <p>
                        <TextDisplay text={aboutMe[1].esp}/>
                    </p>
                }

            </div>
            <div className='sumaries-container'>
                {SummaryData.map((data, index) => {
                    return (
                        <div key={index}>
                            {
                                data.id === 'leftContent' ? (
                                    <div className='summary-left'>
                                        {isTraslatedLanguage ? (
                                            <p>
                                                <TextDisplay
                                                    text={data.contentEn}
                                                    delay={10}
                                                />
                                            </p>
                                        ) : <p>
                                            <TextDisplay
                                                text={data.content}
                                                delay={10}                                  
                                            />
                                        </p>
                                        }
                                    </div>
                                ) : data.id === 'rightContent' ? (
                                    <div className='summary-right'>
                                        {isTraslatedLanguage ? (
                                            <p>
                                                <TextDisplay
                                                    text={data.contentEn}
                                                    delay={10}
                                                />
                                            </p>
                                        ) : <p>
                                            <TextDisplay
                                                text={data.content}
                                                delay={10}
                                            />
                                        </p>
                                        }
                                    </div>
                                ) : null
                            }
                        </div>
                    );
                })}
            </div>
            <div className='summary-curriculum'>
                {SummaryData.map((data, index) => {
                    return (
                        <div key={index}>
                            {
                                data.id === 'URL' ? (
                                    <a
                                        target="_blank" rel="noopener noreferrer"
                                        href={data.curriculumURL}
                                    >
                                        {isTraslatedLanguage ? (
                                            //eng version
                                            <p>
                                                <TextDisplay text={summary[0].eng} />
                                            </p>
                                        ) :
                                            //spa version
                                            <p><TextDisplay text={summary[1].esp} />
                                            </p>
                                        }
                                    </a>
                                ) : null
                            }
                        </div>
                    );
                })}
            </div>
        </div >
    );
};
export default SummarySection;