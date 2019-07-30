import React, { Component } from "react";
import {StyleSheet ,View, Button, Text, TouchableOpacity, GestureResponderEvent} from "react-native";
import { NavigationScreenProps, NavigationProp } from "react-navigation";

interface IButtonScreenProps {
    message: string,
    marginVertical: number,
    backgroundColor: string,
    nextPage: string,
    handleOnPress: (event: GestureResponderEvent) => void
}

export default class BigButton extends Component<IButtonScreenProps>{
    render() {
        const message = this.props.message;
        const marginVertical = this.props.marginVertical;
        const backgroundColor = this.props.backgroundColor;
        const nextPage = this.props.nextPage;
        return(
            <View>onPress
                <TouchableOpacity onPress={this.props.handleOnPress} activeOpacity={2}>
                    <View style={{
                        marginVertical: marginVertical,
                        paddingHorizontal: 40,
                        paddingVertical: 30,
                        backgroundColor: backgroundColor,
                    }}>
                        <Text style={{
                            fontSize: 40,
                            textAlign: "center"
                        }}>
                            {message}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}


{/*}

  <TouchableOpacity onPress={() => navigate('JoinID')} activeOpacity={2}>
    <View style={bigButton.darkblue}>
        <Text style={styles.headline}>join ID</Text>
    </View>
  </TouchableOpacity> 

*/}





