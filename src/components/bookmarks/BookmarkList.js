/* eslint-disable no-undef */
import React from "react";
import BookmarkItem from "./BookmarkItem";
import bookmarksData from "../../data/bookmarksData";

class BookmarkList extends React.Component {
  // constructor is a method that's built in classes in JS
  constructor() {
    super();
    this.state = {
      bookmarks: bookmarksData,
      isCopied: false
    };
    this.copyUrl = this.copyUrl.bind(this);
    this.displayTooltip = this.displayTooltip.bind(this);
  }
  copyUrl = (a, b) => {
    // alert(a);
    this.setState(prevState => ({
      isCopied: !prevState.isCopied
    }));
    /* Get the text field */
    const copyText = document.getElementById(a);
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    /* Alert the copied text */
    // console.log("copyText: ", copyText.value);
    // alert("Copied the text: " + copyText.value);

    const tooltip = document.getElementById(b);
    // console.log("tooltip: ", tooltip);
    // tooltip.innerHTML = "Copied: " + copyText.value;
    tooltip.innerHTML = "Copied!";
    // console.log("tooltip: ", tooltip.innerHTML);

  }

  displayTooltip = (a) => {
    // alert(a);
    // console.log("a: ", a);
    const tooltip = document.getElementById(a);
    // console.log("tooltip: ", tooltip);
    tooltip.innerHTML = "Copy to clipboard.";
    // console.log("tooltip: ", tooltip.innerHTML);
  }

  // Extra Methods can be written here.

  // render is a reserved method name for React.js
  render() {
    const bookmarkItems = this.state.bookmarks.map(item => (
      <BookmarkItem
        key={item.id}
        item={item}
        copyUrl={this.copyUrl}
        isCopied={this.state.isCopied}
        displayTooltip={this.displayTooltip}
      />
    ));
    return (
      <div className="bookmark-list-container">
        <div className="bookmark-list">{bookmarkItems}</div>
      </div>
    );
  }
}

export default BookmarkList;