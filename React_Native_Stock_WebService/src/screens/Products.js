import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { connect } from 'react-redux';
import { watchLogin, LogOut } from '../actions/AuthActions';

export class Products extends Component {
    static navigationOptions = {
        title:'Products',
		header:null
    }

    constructor(props) {
        super(props);
        this.state = {

        };

        this.back_Screen = this.back_Screen.bind(this);
    }

    back_Screen() {
        this.props.navigation.goBack();
    }

 
    render() {
        return(
            <View style={styles.container}>
                <TouchableHighlight onPress={this.back_Screen} style={styles.blocks_menu_Button} underlayColor="transparent">
                    <Text style={styles.blocks_menu_Button_ButtonText}>VOLTAR</Text>
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
    }
});

const mapStateToProps = (state) => {
    return {
        isLogged:state.auth.isLogged
    }
}

const ProductsConnect = connect(mapStateToProps, {watchLogin})(Products);
export default ProductsConnect;