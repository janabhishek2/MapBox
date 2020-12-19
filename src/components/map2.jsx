import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import ReactMapGL,{Marker,Popup} from 'react-map-gl';
class Map2 extends Component {
    state = { 
        viewPort:{
            latitude:22.326640,
        longitude: 114.265620,
        zoom: 15,
        width:'1200px',
        height:'500px'
        },
        selected:0
     }
    
    render() { 
        const styles={marginTop:100};
        const deselcted=0;
        return (<div className="container" style={styles}>
        <ReactMapGL onViewportChange={(viewPort)=>{this.setState({viewPort})}} mapStyle="mapbox://styles/janabhishek2/ckiw5zews2i0u19o77nc2gm7p" {...this.state.viewPort} mapboxApiAccessToken="pk.eyJ1IjoiamFuYWJoaXNoZWsyIiwiYSI6ImNraXc1Z3c0ZTNnM2gydnFqdHdrOGxpcGEifQ.t1mXdjR57fjDVeuIJEguxg">

            <Marker latitude={22.326640} longitude={114.265620} ><button onClick={()=>{
                const selected=1;
                this.setState({selected});
            }} className="btn btn-sm"><img src="https://codelabs.developers.google.com/codelabs/advanced-android-training-google-maps/img/3077e66f9f7a1a46.png" width="15" height="20"/></button></Marker>
            {this.state.selected==1 ? <Popup onClose={()=>{this.setState({selected:deselcted})}} latitude={22.326640} longitude={114.265620}><div>
                <b>Con Fusion</b>
                <p>121, Clear Water Bay Road <br/>
                    Kowloon</p>
                </div></Popup> :null}

        </ReactMapGL>

<div className="d-flex justify-content-center">
<button className="btn btn-info m-3 btn-lg" onClick={()=>{
            const viewPort={ latitude:22.326640,
                longitude: 114.265620,
                zoom: 13,
                width:'1200px',
                height:'500px'};
                this.setState({viewPort});
        }}>Click To Show the restaurant on Map !</button>
</div>
       
    </div>  );
    }
}
 
export default Map2;