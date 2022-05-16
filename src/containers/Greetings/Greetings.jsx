import React, {Component} from 'react';
import icon from '../../assets/img/icon-128.png';
import axios from "axios";
import StatsComponent from "./Stats";
import ReactLoading from 'react-loading';

class GreetingComponent extends Component {

    state = {
        result: []
    }
    isLoading=true


    componentDidMount() {
        var bodyFormData = new FormData();
        bodyFormData.append('url',this.props.url)
        axios.post('http://127.0.0.1:5000/api/resource', bodyFormData, {mode:'no-cors'})
            .then((res) => {
                console.log(res.data)
                const result = res.data;
                this.isLoading=false
                this.setState({ result });
            })
    }
    isLoadingIn(){
        if (this.isLoading) {
            return <ReactLoading type={'spokes'} color={'#DCDCDC'} height={'60%'} width={'100%'} />
            }
            return <StatsComponent result={this.state.result}></StatsComponent>;
        }


    render(){
        return (
            <div>
                <div style={{content:'center',paddingTop:'10px'}}>
                    <h1 style={{fontSize:'30px',color:'#87CEFA'}}>Youtube Sentiment Analysis</h1>
                    {this.isLoadingIn()}
                </div>
                {/*<div style={{display: 'center',float:'center'}}></div>*/}

            </div>

        );
    }

}

export default GreetingComponent;
