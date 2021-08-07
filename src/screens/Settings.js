import React from 'react'
import { StyleSheet,View, Text, Button, TouchableOpacity } from 'react-native'

export default class Home extends React.Component {
    constructor() {
      super();
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text>Settings</Text>
                <TouchableOpacity onPress={() => navigation.pop() } style={{ marginVertical: 20 }}>
                    <Text>Go Back</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        padding:24,
        flexDirection: 'column',
        alignItems: 'center'
    }
})