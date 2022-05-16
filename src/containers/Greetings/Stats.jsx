import React, {Component} from "react";
import { PieChart } from 'react-minimal-pie-chart';

class StatsComponent extends Component {
    negativeCount;
    positiveCount;
    ratioComments;
    estDislikes;
    adjustedEstDislikes;
//     [
//         {
//             "EstimatedDislikes": 1692,
//             "EstimatedDislikesSentiment": 41833
//         },
// {
//     "NEGATIVE": 48,
//     "POSITIVE": 52,
//     "RATIO": 0.9230769230769231
// }
// ]

    render() {
        return (

            <div>
                <div style={{display: 'inline-flex'}}>
                    <div>
                        <p style={{fontWeight: 'bold'}}>Estimated Dislikes</p>
                        <p>{(this.props.result.dislikes).toLocaleString()}</p>
                    </div>
                    <div>
                        <p style={{fontWeight: 'bold'}}>Adjusted Dislikes</p>
                        <p>{(this.props.result.adjustedDis).toLocaleString()}</p>
                    </div>
                    <div>
                        <p style={{fontWeight: 'bold'}}>Comments Ratio</p>
                        <p>{(this.props.result.commentRatio).toFixed(3)}</p>
                    </div>

                {/*<p>Adjusted Dislikes : {this.props.result.adjustedDis}</p>*/}
                {/*<p>Comments Ratio : {(this.props.result.commentRatio).toFixed(3)}</p>*/}
                </div>

                <PieChart
                    data={[
                        { label: 'Negative Comments', value: this.props.result.negative, color: '#e65c5c' },
                        { label: 'Positive Comments', value: this.props.result.positive, color: '#6ce65c' },
                    ]}
                    label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
                    labelStyle={(index) => ({
                        fontSize: '10px',
                        fontFamily: 'sans-serif',
                        color: '#FFFFFF',
                        fontWeight: 'bold'
                    })}
                    lineWidth={80} rounded
                    animate
                    style={{ height: '200px' }}
                />


            </div>

        );}

}
export default StatsComponent;
//trenduri