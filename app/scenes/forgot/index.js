import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Body,
    Text,
    Button,
    Title,
    Thumbnail,
    Header,
    Item,
    Label,
    Left,
    Form,
    Input
} from 'native-base';
import {
    Alert
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { StatusBar } from 'react-native';

class ForgotScreen extends Component{
    static navigationOptions = {
        header: null
    };

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onNext(){
        Alert.alert(
            'Check Your Email',
            'We sent an email to fuzzlove@icould.com. Tap the link in that email to reset your password',
            [{
                text: 'OK',
                onPress: () => {

                }
            }],
            {cancelable: false}
        );
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
                </Header>
                <Content style={styles.content}>
                    <Text style={styles.loginText}>Forgot your password?</Text>
                    <Text style={styles.descText}>Enter your email to find your account.</Text>
                    <Form style={styles.form}>
                        <Item stackedLabel style={styles.formItem}>
                            <Label style={styles.formLabel}>EMAIL</Label>
                            <Input style={styles.formInput}/>
                        </Item>
                    </Form>         
                    <Button block style={styles.nextBtn} onPress={() => this.onNext()}>
                        <Text style={styles.nextBtnText}>Next</Text>
                    </Button>          
                </Content>
            </Container>
        );
    }
}

export default connect()(ForgotScreen);