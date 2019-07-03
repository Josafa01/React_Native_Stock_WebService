import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableHighlight } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { connect } from 'react-redux';
import { watchLogin, getName, LoginUser, getEmail, getPass } from '../actions/AuthActions';

export class Login extends Component {
    static navigationOptions = {
        title:'Login',
        header:null
    }

    constructor(props) {
        super(props);
        this.state = {

        };

        this.login = this.login.bind(this);
        this.watchStatus = this.watchStatus.bind(this);
        this.signUpScreen = this.signUpScreen.bind(this);
    }

    componentDidUpdate() {
        this.watchStatus();
    }

    watchStatus() {
        if(this.props.isLogged === 1) {
            this.props.navigation.dispatch(StackActions.reset({
                index:0,
                actions:[
                    NavigationActions.navigate({routeName:'Home'})
                ]
            }));
        }
    }

    signUpScreen() {
        this.props.navigation.navigate('SignUp');
    }

    login() {
        this.props.LoginUser(
            this.props.email,
            this.props.pass
        );
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.logo}>React Native Stock</Text>
                <TextInput style={styles.input} value={this.props.email} onChangeText={this.props.getEmail} placeholder="E-mail" placeholderTextColor="#70C0FF" underlineColorAndroid="transparent" />
                <TextInput style={styles.input} value={this.props.pass} onChangeText={this.props.getPass} placeholder="Senha" secureTextEntry={true}  placeholderTextColor="#70C0FF" underlineColorAndroid="transparent" />
                <TouchableHighlight onPress={this.login} style={styles.loginButton} underlayColor="transparent">
                    <Text style={styles.loginButtonText}>LOGIN</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.signUpScreen} style={styles.signLink} underlayColor="transparent">
                    <Text style={styles.signLinkText}>Clique Aqui para cadastrar-se!</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#333333',
        marginTop:-100
    },
    logo:{
        fontSize:32,
        color:'#758AFF',
        marginBottom:30,
    },
    input:{
        width:"90%",
        height:50,
        backgroundColor:'rgba(255,255,255,0.15)',
        borderRadius:5,
        color:'#F3F3F3',
        fontSize:17,
        marginBottom:12,
        paddingLeft:20
    },
    loginButton: {
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
    loginButtonText:{
        color:'#758AFF',
        fontSize:15
    },
    signLink:{
        width:"90%",
        height:50,
        backgroundColor:'transparent',
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'
    },
    signLinkText:{
        color:'#70C0FF',
        fontSize:15
    }
});

const mapStateToProps = (state) => {
    return {
        email:state.auth.email,
        pass:state.auth.pass,
        isLogged:state.auth.isLogged
    }
}

const LoginConnect = connect(mapStateToProps, {watchLogin, LoginUser, getName, getEmail, getPass})(Login);
export default LoginConnect;