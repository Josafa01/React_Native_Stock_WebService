import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableHighlight } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { connect } from 'react-redux';
import { watchLogin, InsertNewUser, getName, getEmail, getPass } from '../actions/AuthActions';

export class SignUp extends Component {
    static navigationOptions = {
        title:'SignUp',
        header:null
    }

    constructor(props) {
        super(props);
        this.state = {

        };
    
        this.loginScreen = this.loginScreen.bind(this);
        this.watchStatus = this.watchStatus.bind(this);
        this.InsertNewUser = this.InsertNewUser.bind(this);
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

    loginScreen() {
        this.props.navigation.goBack();
    }

    InsertNewUser() {
        this.props.InsertNewUser(
            this.props.name,
            this.props.email,
            this.props.pass
        );
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.logo}>Cadastro de Usuário</Text>
                <TextInput style={styles.input} value={this.props.name} onChangeText={this.props.getName} placeholder="Nome" placeholderTextColor="#70C0FF" underlineColorAndroid="transparent" />
                <TextInput style={styles.input} value={this.props.email} onChangeText={this.props.getEmail} placeholder="E-mail" placeholderTextColor="#70C0FF" underlineColorAndroid="transparent" />
                <TextInput style={styles.input} value={this.props.pass} onChangeText={this.props.getPass} placeholder="Senha" secureTextEntry={true}  placeholderTextColor="#70C0FF" underlineColorAndroid="transparent" />
                <TouchableHighlight onPress={this.InsertNewUser} style={styles.loginButton} underlayColor="#000000">
                    <Text style={styles.singUpButtonText}>Cadastrar</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.loginScreen} style={styles.loginLink} underlayColor="transparent">
                    <Text style={styles.loginLinkText}>Voltar para Login</Text>
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
        marginBottom:30
    },
    input:{
        width:"90%",
        height:50,
        backgroundColor:'rgba(255,255,255,0.15)',
        borderRadius:5,
        color:'#FFFFFF',
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
    singUpButtonText:{
        color:'#758AFF',
        fontSize:15
    },
    loginLink:{
        width:"90%",
        height:50,
        backgroundColor:'transparent',
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'
    },
    loginLinkText:{
        color:'#70C0FF',
        fontSize:15
    }
});

const mapStateToProps = (state) => {
    return {
        name:state.auth.name,
        email:state.auth.email,
        pass:state.auth.pass,
        isLogged:state.auth.isLogged
    }
}

const SignUpConnect = connect(mapStateToProps, {watchLogin, InsertNewUser, getName, getEmail, getPass})(SignUp);
export default SignUpConnect;