// Code SimpleComponent Here
import React from 'react';

export default  class SimpleComponent extends React.Component{

    state={
        mood: "happy"
    }

    handleClick=()=>{
        let moodChange=this.state.mood
        moodChange === "happy"? moodChange="sad": moodChange="happy"

        this.setState({
            mood: moodChange
        })
    }

    render(){

        return(
            <div onClick={this.handleClick}> 
                {this.state.mood}
            </div>
        )
    }

}
