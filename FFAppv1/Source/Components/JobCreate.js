import React, {Component} from 'react'
import {connect} from 'react-redux'
import {jobUpdate, jobCreate, fetchJobs} from '../Actions'
import {Card, CardSection, Button} from './Common'
import JobForm from './JobForm'

class JobCreate extends Component {

  onButtonPress(){
    const {name, email, category} = this.props

    this.props.jobCreate({name, email, category: category || 'Programmer'})
  }

  display(){
    this.props.fetchJobs({category: 'marketing'})
  }


  render(){
    return (
      <Card>
        <JobForm {...this.props}/>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.display.bind(this)}>
            Console log
          </Button>
        </CardSection>
      
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const {name, email, category} = state.jobForm
  return {name, email, category} 
}

export default connect(mapStateToProps,{jobUpdate, jobCreate, fetchJobs})(JobCreate)