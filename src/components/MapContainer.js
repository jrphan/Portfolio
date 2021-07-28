import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, {Component} from 'react';
import styled from 'styled-components';
 
export class MapContainer extends Component {
  render() {
    return (
      <MapStyled>
        <Map google={this.props.google} zoom={14}>
  
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
        </Map>
      </MapStyled>
    );
  }
}

const MapStyled = styled.div `
    width: 50vw;
    height: 50vh;
`;

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAuoO_ge7xYU3dYC3Ozf-4AFNeuy1RBaCM')
})(MapContainer)

