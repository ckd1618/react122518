import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {

    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        });
    }
    
    render() {
        console.log(this.props);
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}

const mapStateToProps= (state) => {
    //state here is combineReducers function from the /reducers/index.js file, which is basically your store
    return {songs: state.songs};
    //this line above will show up as props inside of this very component, see the line under renderList, it references props.songs
}


export default connect(mapStateToProps, { selectSong: selectSong })(SongList);
//the first () following connect are passed in as props to the second (SongList)
//you can use es2015 syntax to shorten it down to:
//export default connect(mapStateToProps, { selectSong })(SongList);