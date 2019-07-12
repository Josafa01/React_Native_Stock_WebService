import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { connect } from 'react-redux';
import { watchLogin, LogOut } from '../actions/AuthActions';

export class Home extends Component {
    static navigationOptions = {
        title:'Home',
		header:null
    }

    constructor(props) {
        super(props);
        this.state = {

        };

        this.logout = this.logout.bind(this);
        this.pg_products = this.pg_products.bind(this);
        this.pg_config = this.pg_config.bind(this);
    }

    logout() {
        this.props.LogOut();
        this.backLoginScreen();
    }

    backLoginScreen() {
        this.props.navigation.navigate('Login');
    }

    pg_products() {
        this.props.navigation.navigate('Products');
    }

    pg_config() {
        this.props.navigation.navigate('Config');
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.blocks_menu}/>
                    <TouchableHighlight onPress={this.pg_products} style={styles.blocks_menu_Button} underlayColor="transparent">
                        <Text style={styles.blocks_menu_Button_ButtonText}>PRODUTOS</Text>
                    </TouchableHighlight>
                
                <View style={styles.blocks_menu}/>
                    <TouchableHighlight onPress={this.pg_config} style={styles.blocks_menu_Button} underlayColor="transparent">
                        <Text style={styles.blocks_menu_Button_ButtonText}>PERFIL</Text>
                    </TouchableHighlight>
                
                <View style={styles.blocks_menu}/>
                    <TouchableHighlight onPress={this.logout} style={styles.blocks_menu_Button} underlayColor="transparent">
                        <Text style={styles.blocks_menu_Button_ButtonText}>SAIR</Text>
                    </TouchableHighlight>
                
            </View>
        );
     }
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center', 
        justifyContent:'center',
        marginTop:-120,
        backgroundColor:'#333333',
    },
    blocks_menu_Button: {
        width:130,
        height:130,
        backgroundColor:'#003366',
        borderRadius:5,
        marginTop:20,
        borderWidth:2,
        borderColor:'#0059b3',
        justifyContent:'center',
        alignItems:'center',
    },
    blocks_menu_Button_ButtonText:{
        color:'#FFFFFF',
        fontWeight: 'bold',
        fontSize: 20,
    },
    blocks_menu:{
        width: 20, 
        height: 20
    }
});

const mapStateToProps = (state) => {
    return {
        isLogged:state.auth.isLogged
    }
}

const HomeConnect = connect(mapStateToProps, {watchLogin, LogOut})(Home);
export default HomeConnect;