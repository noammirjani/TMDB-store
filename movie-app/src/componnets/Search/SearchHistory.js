import React, {useEffect} from 'react';
import { Button, Modal } from 'react-bootstrap';
import UserMessage from "../MoviesDisplay/UserMessage";
import {useHistoryDispatch, useHistoryState} from "../Context/HistoryProvider";
import SearchHistoryTable from "./SearchHistoryTable";

/**
 * Component for displaying search history.
 *
 * @param {boolean} modal - Indicates whether the modal is visible or not.
 * @param {function} setModal - Function to update the visibility of the modal.
 * @param {function} setUrl - Function to update the URL.
 * @param {Array} data - Data containing search information.
 * @returns {JSX.Element} SearchHistory component.
 */
function SearchHistory({modal, setModal, setUrl, data}) {
    const historyDispatch = useHistoryDispatch();
    const history = useHistoryState();

    const userInfo = "There are no previous searches";

    /**
     * Adds the search to the history when all required data is present.
     */
    useEffect(() => {
        const addToSearch = () => {
            if (data.searchValue !== "" && data.filterUrl !== "" &&
                (data.selectedFilterType === "movie name" || data.selectedFilterType === "actor name")) {
                historyDispatch({type: 'added', searchData:data});
            }
        }
        addToSearch()

    }, [setUrl, data, historyDispatch]);

    /**
     * Handles re-running a search by updating the URL.
     *
     * @param {number} index - Index of the search history item to re-run.
     */
    const handleReRunSearch = (index) => {
        setModal(false);
        setUrl(history[index].url);
    }

    /**
     * Removes a row from the search history.
     *
     * @param {number} removeIndex - Index of the search history item to remove.
     */
    const handleRemoveRow = (removeIndex) => {
        historyDispatch({ type: 'remove', removeIndex });
    }

    /**
     * Handles deleting all search history items.
     */
    const handleDeleteAll = ()  => {
        historyDispatch({type: 'clear'});
    }

    return (
        <Modal contentClassName="bg-dark" size="xl" show={modal} centered>
            <Modal.Body>
                {history.length > 0 && (
                    <SearchHistoryTable history={history}
                                        handleReRunSearch={handleReRunSearch}
                                        handleRemoveRow={handleRemoveRow}
                    />
                )}
                {history.length === 0 && <UserMessage userInfo={userInfo} isAlert={false} />}
            </Modal.Body>
            <Modal.Footer>
                <div>
                    {history.length > 0 && (
                        <Button variant="danger" onClick={handleDeleteAll}>Remove All Searches</Button>)}
                </div>
                <div>
                    <Button variant="secondary" onClick={() => setModal(false)}>Close</Button>
                </div>
            </Modal.Footer>
        </Modal>
    );
}

export default SearchHistory;

