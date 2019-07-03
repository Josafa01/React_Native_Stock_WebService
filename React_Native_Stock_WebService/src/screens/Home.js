import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { watchLogin, LogOut } from '../actions/AuthActions';

export class Home extends Component {
    static navigationOptions = {
        title:'Home'
    }

    constructor(props) {
        super(props);
        this.state = {

        };

        this.logout = this.logout.bind(this);
    }

    logout() {
        this.props.LogOut();
        this.backLoginScreen();
    }

    backLoginScreen() {
        this.props.navigation.navigate('Login');
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>Home...</Text>
                <TouchableHighlight onPress={this.logout} style={styles.logOutButton} underlayColor="transparent">
                    <Text style={styles.logOutButtonText}>LOGIN</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    logOutButton: {
        width:"90%",
        height:50,
        backgroundColor:'transparent',
        borderRadius:5,
        borderWidth:2,
        borderColor:'#758AFF',
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'
    },
    logOutButtonText:{
        color:'#758AFF',
        fontSize:15
    }
});

const mapStateToProps = (state) => {
    return {
        isLogged:state.auth.isLogged
    }
}

const HomeConnect = connect(mapStateToProps, {watchLogin, LogOut})(Home);
export default HomeConnect;
