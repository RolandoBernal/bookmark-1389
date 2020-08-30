import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
// import bookmarksData from "../../data/bookmarksData";

function BookmarkItem(props) {

  return (
    <div className="bookmark-item">
      <a
        href={props.item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="bookmark-title"
      >
        {props.item.title}
      </a>
      <div className="bookmark-url-copy">
        <input
          type="text"
          value={props.item.url}
          id={props.item.elementId}
          className="bookmark-url"
          readOnly={true}
        />
        <div className="tooltip">
          <button
            className="copy-btn"
            onClick={() => props.copyUrl(props.item.elementId, props.item.tooltipId)}
            onMouseOut={() => props.displayTooltip(props.item.tooltipId)}
          >
            <span>
              <FontAwesomeIcon icon={faClipboard} />
              <span className="tooltiptext" id={props.item.tooltipId}>Copy to clipboard.</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookmarkItem;