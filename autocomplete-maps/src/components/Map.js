import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import SearchPlaces from './SearchPlaces';
import { connect } from 'react-redux';
import { Spin } from 'antd';

// put API keys here
// enable Geocode, Places and Maps JS API
const API_KEY = '';

function Map(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: API_KEY,
    libraries: ['places'],
  });

  if (!isLoaded) return <Spin tip='Loading...' />;
  const { lat, lng } = props;
  return (
    <>
      <div className='places-container'>
        <SearchPlaces />
      </div>

      <GoogleMap zoom={10} center={{ lat, lng }} mapContainerClassName='map-container'>
        <MarkerF position={{ lat, lng }} />
      </GoogleMap>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    lat: state.position.lat,
    lng: state.position.lng,
  };
};

export default connect(mapStateToProps, null)(Map);
