import React, { Component } from 'react';



class App extends Component {
    constructor() {
        super();
        this.state = {
            posts : [],
            comments : []
        };
    }


    componentDidMount() {
        fetchPosts().then((response) => {
            this.setState({
                posts : response.posts
            });
        });

        fetchComments().then((response) => {
            this.setState({
                comments : response.comments
            });
        });
    }

    render() {
        return (
           <div>
               <h1>Hello World</h1>
           </div>  
        );
    }
}

export default App;