import React from "react";


function SvgBtn({specialClasses, iconPaths}) {

    function getIcons(){
        if (Array.isArray(iconPaths)) {
            return iconPaths.map((path, index) => <path key={index} d={path} />);
        } else {
            return <path d={iconPaths} />;
        }
    }

    return (
        <button className={`btn ${specialClasses}`} type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className={`bi bi-cart3`} viewBox="0 0 16 16">
                {getIcons()}
            </svg>
        </button>
    );
}

export default SvgBtn;
