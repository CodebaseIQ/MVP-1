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
    Form,
    Input,
    Label,
    Left,
    Right
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';

class PhoneLoginScreen extends Component{
    static navigationOptions = {
        header: null
    };

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onNext(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'EnterCode'}));
    }

    onSignup(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'Interest'}));
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
                    <Text style={styles.descText}>Enter your Phone number.</Text>
                    <Form style={styles.form}>
                        <Item stackedLabel style={styles.formItem}>
                            <Label style={styles.formLabel}>NUMBER</Label>
                            <Input style={styles.formInput} keyboardType="numeric"/>
                        </Item>
                    </Form>
                    <Text style={styles.descText2}>
                        Tap Next to get an SMS confirmation from Account Kit powered by Facebook. <Text style={styles.learnMoreBtn}>Learn more</Text>
                    </Text>
                    <Button block style={styles.loginBtn} onPress={() => this.onNext()}>
                        <Text style={styles.loginBtnText}>Next</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

export default connect()(PhoneLoginScreen);