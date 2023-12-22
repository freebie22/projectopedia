import React from "react";

export default class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentYear : 0
        }
    }

    componentDidMount() {
        this.setState(() => {
            return {
                currentYear: ((new Date(Date.now())).getFullYear())
            }
        })
    }

    render() {
        return (
              <div className="footer fixed-bottom text-center mt-1 p-3 bg-dark" style={{display: "flex", justifyContent: "center"}}>
                    <span className="h5 text-white">Happy coding from Artem! @{this.state.currentYear}</span>
            </div>)
    }
}