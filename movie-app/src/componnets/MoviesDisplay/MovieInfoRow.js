/**
 * MovieInfoRow Component
 *
 * A component that displays a single row of movie information.
 * It includes a label, value, and an optional icon.
 */

/**
 * MovieInfoRow Component
 *
 * @param {Object} props - The component props.
 * @param {string} props.label - The label for the movie information.
 * @param {string} props.value - The value of the movie information.
 * @param {string} [props.icon] - The optional icon for the movie information.
 * @returns {JSX.Element} The rendered component.
 */
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