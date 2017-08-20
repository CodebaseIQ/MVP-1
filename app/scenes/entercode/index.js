import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    Container,
    Content,
    Body,
    Text,
    Button,
    Thumbnail,
    Header,
    Item,
    Form,
    Input,
    Label,
    Left,
    Right,
    View
 } from 'native-base';
 import {
     TextInput
 } from 'react-native';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { StatusBar } from 'react-native';

class EnterCodeScreen extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);

        this.state = {
            num1: "",
            num2: "",
            num3: "",
            num4: "",
            num5: "",
            num6: ""
        };
    }

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onSignup(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'Interest'}));
    }

    onLogin(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'Tab'}));
    }

    onChangeText(text, index){
        switch(index){
            case 1:
                this.setState({
                    num1: text
                });
                this.refs[2].focus();
                break;
            case 2:
                this.setState({
                    num2: text
                });
                this.refs[3].focus();
                break;
            case 3:
                this.setState({
                    num3: text
                });
                this.refs[4].focus();
                break;
            case 4:
                this.setState({
                    num4: text
                });
                this.refs[5].focus();
                break;
            case 5:
                this.setState({
                    num5: text
                });
                this.refs[6].focus();
                break;
            case 6:
                this.setState({
                    num6: text
                });
                break;
        };
    }

    render(){
        StatusBar.setBarStyle('light-content');
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                        <Left>
                            <Button transparent onPress={() => this.onBack()}>
                                <Thumbnail square source={require('../../assets/icNavBackBlack.png')} style={styles.backBtnIcon}/>
                            </Button>
                        </Left>
                        <Right>
                            <Button transparent onPress={() => this.onSignup()}>
                                <Text style={styles.signupBtnText}>Sign Up</Text>
                            </Button>
                        </Right>
                </Header>
                <Content style={styles.content}>
                    <Text style={styles.loginText}>Log In</Text>
                    <Text style={styles.descText}>Enter your code.</Text>
                    <View style={styles.codeContainer}>
                        <TextInput ref='1' style={styles.codeItem} maxLength={1} keyboardType="numeric" returnKeyType="next" value={this.state.num1} onChangeText={(text) => this.onChangeText(text, 1)}/>
                        <TextInput ref='2' style={styles.codeItem} maxLength={1} keyboardType="numeric" returnKeyType="next" value={this.state.num2} onChangeText={(text) => this.onChangeText(text, 2)}/>
                        <TextInput ref='3' style={styles.codeItem} maxLength={1} keyboardType="numeric" returnKeyType="next" value={this.state.num3} onChangeText={(text) => this.onChangeText(text, 3)}/>
                        <TextInput ref='4' style={styles.codeItem} maxLength={1} keyboardType="numeric" returnKeyType="next" value={this.state.num4} onChangeText={(text) => this.onChangeText(text, 4)}/>
                        <TextInput ref='5' style={styles.codeItem} maxLength={1} keyboardType="numeric" returnKeyType="next" value={this.state.num5} onChangeText={(text) => this.onChangeText(text, 5)}/>
                        <TextInput ref='6' style={styles.codeItem} maxLength={1} keyboardType="numeric" returnKeyType="done" value={this.state.num6} onChangeText={(text) => this.onChangeText(text, 6)}/>
                    </View>
                    <Button transparent style={styles.sendNewBtn} block>
                        <Text style={styles.sendNewBtnText}>Send New Code</Text>
                    </Button>
                    <Text style={styles.termsText}>
                        Tap Continue to accept Facebook’s <Text style={styles.termBtn}>Terms, Data Policy, cookie use</Text> and <Text style={styles.termBtn}>the Privacy Policy and Terms of Service</Text> of Pinaka.
                    </Text>
                    <Button block style={styles.nextBtn} onPress={() => this.onLogin()}>
                        <Text style={styles.nextBtnText}>Continue</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

export default connect()(EnterCodeScreen);