import React, { Component } from 'react';
import { connect } from 'react-redux';
import { db } from '../../firebase';
import { SetApiKeyGoogleMaps } from '../../store/actions/routes';
const defaultApiKeyGoogleMaps = "AIzaSyDWK777rQdjC_qMbmp1hp-ODuIdBW99CAg";

class Settings extends Component {
 
  constructor (props) {
    super(props);

    this.state = {
      apiKeyGoogleMaps: props.apiKeyGoogleMaps,
      status: 'none'
    }
  
  }
  componentDidMount() {
      
    db.GetApiKeyGoogleMaps()
    .then(credentials => {

      if ( credentials.val() === null ) {
        db.SetCredentials(defaultApiKeyGoogleMaps);

        this.props.SetApiKeyGoogleMaps(defaultApiKeyGoogleMaps);

      }else{

        this.props.SetApiKeyGoogleMaps(credentials.val());

      }
    });
  }

  componentWillReceiveProps(next){

    if ( this.state.apiKeyGoogleMaps !== next.apiKeyGoogleMaps ){

      this.setState({apiKeyGoogleMaps: next.apiKeyGoogleMaps})

    }

  }

  onSubmit = (event) => {
    const {
      apiKeyGoogleMaps,
    } = this.state;

    db.SetCredentials(apiKeyGoogleMaps)
    .then(() => { 
      this.setState({status: 'saved'})
      this.props.SetApiKeyGoogleMaps(apiKeyGoogleMaps);
      window.location.reload()
    })
    .catch(() => {this.setState({status: 'error'})});

    event.preventDefault();
  }
  render() {

    const { apiKeyGoogleMaps, status } = this.state;

    const isInvalid = apiKeyGoogleMaps === null || apiKeyGoogleMaps.trim().length === 0;

    console.log('apiKeyGoogleMaps', apiKeyGoogleMaps)
    return (
     
      <div className="container container-view">
        { status === 'error' ?
          <div className="alert alert-danger alert-dismissible fade show" role="alert">
            An error occurred. Please try again
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          :
          status === 'saved' &&

           <div className="alert alert-success alert-dismissible fade show" role="alert">
            Your ApiKey was saved
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        }
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Api Key Google Maps</label>
                <input 
                  onChange={event => this.setState({apiKeyGoogleMaps: event.target.value})}
                  type="text" 
                  className="form-control" placeholder="YOUR GOOGLE API KEY GOES HERE" value={apiKeyGoogleMaps}/>
              </div>
              <div className="form-group row">
                <div className="col-sm-10">
                  <button type="submit" disabled={isInvalid} className="btn btn-primary">Save</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    apiKeyGoogleMaps: state.routes.apiKeyGoogleMaps
  }
}

export default connect(state => ( mapStateToProps ), { SetApiKeyGoogleMaps })(Settings);
