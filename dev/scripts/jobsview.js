import React from 'react';
import ReactDOM from 'react-dom';
import SearchResult from './searchResult';
import SlideOutInfo from './SlideOutInfo';

class JobsView extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.jobsAppliedFor);

        this.state = {
            jobApplicationView: "savedJobs",
            currentlySelectedJob : null
        }   

        this.showApplied = this.showApplied.bind(this);
        this.showSaved = this.showSaved.bind(this);
        this.renderJobsAppliedFor = this.renderJobsAppliedFor.bind(this);
        this.showJobDetails = this.showJobDetails.bind(this);
        this.renderJobDetails = this.renderJobDetails.bind(this);
    }
    showApplied () {
        this.setState({
            jobApplicationView: "appliedJobs"
        }) 
    }
    showSaved () {
        this.setState ({
            jobApplicationView: "savedJobs"
        })
    }

    showJobDetails(e){
        // console.log(this.props.jobsAppliedFor[e.target.id]);
        this.setState({
            currentlySelectedJob: this.props.jobsAppliedFor[e.target.id]
        })
        
    }

    renderJobDetails() {
        return (
            <SlideOutInfo data={this.state.currentlySelectedJob} view={this.state.jobApplicationView} />
        )
    }

    renderJobsAppliedFor(){
        return (
            <div>
                <h2>Jobs Applied For:</h2>
                {Object.values(this.props.jobsAppliedFor).map((item)=>{
                    return (
                        <div>
                        {/* <h3>{item.company}</h3> */}
                        <SearchResult data={item} onClick={this.showJobDetails}/>
                    </div>
                    )
                })}
                {this.state.currentlySelectedJob ? this.renderJobDetails(): null}

            </div>
        )
    }

    render(){
        return (
            <div> 
                <button onClick={this.showSaved}>saved</button>
                <button onClick={this.showApplied}>applied</button>
                {/* <h2>Jobs Applied For:</h2> */}
                
                {this.state.jobApplicationView === "appliedJobs" ?
                    this.renderJobsAppliedFor()
                :
                <div>
                    <p> saved jobs </p>
                </div>
                
            }
                
            </div>
        );
    }
}

export default JobsView;