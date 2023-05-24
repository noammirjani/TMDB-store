
function MovieInfoRow({ label, value, icon }) {
    return (
        <div className="grid grid-cols-3 gap-x-4 mb-2">
            <div className="col-span-1 lg:text-right">{label}</div>
            <div className="col-span-2">
                {icon && <span>{icon} </span>}
                {value}
            </div>
        </div>
    );
}

export default MovieInfoRow;