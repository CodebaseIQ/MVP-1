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
import { NavigationActions } from 'react-navigation';
import styles from './styles';

class EnterCodeScreen extends Component{
    static navigationOptions = {
        header: null
    };

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
                    <Text style={styles.descText}>Enter your code.</Text>
                    <View style={styles.codeContainer}>
                        <Input style={styles.codeItem} maxLength={1} keyboardType="numeric" returnKeyType="next"/>
                        <Input style={styles.codeItem} maxLength={1} keyboardType="numeric" returnKeyType="next"/>
                        <Input style={styles.codeItem} maxLength={1} keyboardType="numeric" returnKeyType="next"/>
                        <Input style={styles.codeItem} maxLength={1} keyboardType="numeric" returnKeyType="next"/>
                        <Input style={styles.codeItem} maxLength={1} keyboardType="numeric" returnKeyType="next"/>
                        <Input style={styles.codeItem} maxLength={1} keyboardType="numeric" returnKeyType="done"/>
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