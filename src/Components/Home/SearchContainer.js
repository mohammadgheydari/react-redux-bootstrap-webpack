import React, { Component } from 'react';
import FlightioTabs from "../Helper/Tabs/Tabs"
import "./index.scss";
import UnderSearchbox from "./UnderSearchbox"

class SearchContainer extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className="search-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-10 ml-auto  mr-auto ">
                                <h1 className="text-white text-center mt-4 mb-5 homePageHeading">خرید اینترنتی بلیط هواپیما، قطار و رزرو هتل</h1>
                                <FlightioTabs />
                            </div>
                        </div>
                    </div>
                </div>
                <UnderSearchbox />
            </React.Fragment>
        );
    }
}

export default SearchContainer;