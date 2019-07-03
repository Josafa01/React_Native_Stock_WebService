import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions, StackActions } from 'react-navigation';
import { watchLogin } from '../actions/AuthActions';

export class Preload extends Component {
    static navigationOptions = {
        title:'',
        header:null
    }

    constructor(props) {
        super(props);
        this.state = {

        };

        this.verifyStatus = this.verifyStatus.bind(this);
    }

    verifyStatus() {

        let status = this.props.isLogged;

        switch(status) {
            case 1:
                this.props.navigation.dispatch(StackActions.reset({
                    index:0,
                    actions:[
                        NavigationActions.navigate({routeName:'Home'})
                    ]
                }));
               break;
            case 2:
                this.props.navigation.dispatch(StackActions.reset({
                    index:0,
                    actions:[
                        NavigationActions.navigate({routeName:'Login'})
                    ]
                }));
                break;
            default:
                this.props.navigation.dispatch(StackActions.reset({
                    index:0,
                    actions:[
                        NavigationActions.navigate({routeName:'Login'})
                    ]
                }));       
            
        }
    }

    componentDidMount() {
        this.props.watchLogin();
    }

    componentDidUpdate() {
        this.verifyStatus();
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>Iniciando.....</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

const mapStateToProps = (state) => {
    return {
        isLogged:state.auth.isLogged
    }
}

const PreloadConnect = connect(mapStateToProps, {watchLogin})(Preload);
export default PreloadConnect;