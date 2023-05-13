
function CardExtend({onClose}){

    return(
        <>
            <div className="modal">
                <div>I'm a modal dialog</div>
                <button onClick={onClose}>Close</button>
            </div>
        </>
    );
}

export default CardExtend;