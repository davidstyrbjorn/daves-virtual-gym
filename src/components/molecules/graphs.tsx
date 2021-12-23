import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { LineChart, ProgressChart } from "react-native-chart-kit";
import { Text } from "react-native-elements";
import { textStyle } from "../../styles/text-style";

const Graphs : React.FC<{}> = () => {
    return (
        <>
            <View style={styles.graphSection}>
                <LineChart
                    data={{
                    labels: ["Jan", "Feb", "Mar", "Apr"],
                    datasets: [
                        {
                        data: [
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                        ]
                        }
                    ]
                    }}
                    width={Dimensions.get("window").width*0.75} // from react-native
                    height={175}
                    yAxisSuffix="kg"
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                        backgroundColor: "#ffffff",
                        backgroundGradientFrom: "#ffffff",
                        backgroundGradientTo: "#ffffff",
                        backgroundGradientToOpacity: 0.8,
                        backgroundGradientFromOpacity: 0.8,
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ff00ff"
                        }
                    }}
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />           
            </View>

            <View style={styles.progressSection}>
                <Text style={textStyle('black').text}>Progress denna vecka 5/7</Text>
                <ProgressChart
                    data={{
                        data: [5/7]  
                    }}
                    width={Dimensions.get("window").width*0.75}
                    height={100}
                    strokeWidth={10}
                    radius={32}
                    chartConfig={{
                        backgroundGradientToOpacity: 0.0,
                        backgroundGradientFromOpacity: 0.0,
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 0, 150, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 56
                        }
                    }}
                    hideLegend={true}
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    graphSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    progressSection: {
        flex: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        alignSelf: 'center',
        marginVertical: 10,
        borderRadius: 30
    },
});

export default Graphs;