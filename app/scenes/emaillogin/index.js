import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Body,
    Text,
    Button,
    Header,
    Title,
    Thumbnail,
    Left,
    Right,
    Form,
    Item,
    Label,
    Input
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';

class EmailLoginScreen extends Component{
    static navigationOptions = {
        header: null
    };

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onForgot(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'Forgot'}));
    }

    onSignup(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'Interest'}));
    }

    onLogin(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'Tab'}));
    }

    render(){
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
                    <Text style={styles.descText}>Enter your email and password</Text>
                    <Form style={styles.form}>
                        <Item stackedLabel style={styles.formItem}>
                            <Label style={styles.formLabel}>EMAIL</Label>
                            <Input style={styles.formInput} keyboardType="email-address"/>
                        </Item>
                        <Item stackedLabel style={styles.formItem}>
                            <Label style={styles.forgotBtn} onPress={() => this.onForgot()}>Forgot</Label>
                            <Label style={styles.formLabel}>PASSWORD</Label>
                            <Input style={styles.formInput} secureTextEntry={true}/>
                        </Item>
                    </Form>
                    <Button block style={styles.loginBtn} onPress={() => this.onLogin()}>
                        <Text style={styles.loginBtnText}>Log In</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

export default connect()(EmailLoginScreen);