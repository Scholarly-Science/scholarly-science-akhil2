import React from 'react';
import './Research.css';

function ModalApplyNow() {
    return (
        <div className="research__popupRightContainer">
            <div className="research__popupRightContainerFirstItem">
                <h4>Careers that excite you.</h4>
                <p>
                    We analyze your skills, goals, and interests to
                    connect you with jobs like these.
                </p>
                <div className="research__popupRightContainerFirstItemButton">
                    Apply now
                </div>
            </div>
            {/* <div className="research__popupRightContainerSecondItem">
            <p>
                Automatic speech recognition or simply speech
                recognition involves graphically representing the
                frequency of these speech waves as a function of
                time. It is an automatic speech processing area,
                which allows machines to comprehend the speech of a
                user and convert it into a sequence of words using a
                software program. This creates a sort of natural
                communication between a machine and humans.
            </p>
            </div> */}
        </div>
    )
}

export default ModalApplyNow
