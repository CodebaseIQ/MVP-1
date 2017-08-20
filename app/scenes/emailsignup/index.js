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
    Right,
    View,
    Grid,
    Col,
    List,
    ListItem
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import styles from './styles';
import { StatusBar } from 'react-native';

class EmailSignupScreen extends Component{
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);

        this.state = {
            progress: 1,
            step: 0,
            hidePass: true,
            gender: true,
            marital: false,
            kids: false
        }
    }

    onBack(){
        if(this.state.progress > 1){
            this.setState({
                progress: this.state.progress - 1,
                step: this.state.step - 1
            });
        }else{
            var { dispatch } = this.props;
            dispatch(NavigationActions.back());
        }        
    }

    onNext(){
        if(this.state.progress < 2){
            this.setState({
                progress: this.state.progress + 1,
                step: this.state.step + 1
            });
        }else{
            //onSign Up
            var { dispatch } = this.props;
            dispatch(NavigationActions.navigate({routeName: 'Tab'}));
        }        
    }

    onLogin(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'Login', params: {type: 'login'}}));
    }

    togglePass(){
        this.setState({
            hidePass: !this.state.hidePass
        });
    }

    toggleGender(gender){
        this.setState({
            gender: gender
        });
    }

    toggleMarital(marital){
        this.setState({
           marital: marital 
        });
    }

    toggleKids(kids){
        this.setState({
            kids: kids
        });
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
                        <Button transparent onPress={() => this.onLogin()}>
                            <Text style={styles.signupBtnText}>Log In</Text>
                        </Button>
                    </Right>
                </Header>
                <Content style={styles.content}>
                    <View style={styles.progressContainer}>
                        <View style={[styles.progress, { width: width / 2 * this.state.progress}]}/>
                    </View>
                    {this.state.step == 0?
                    <View style={styles.blockContainer}>
                        <Text style={styles.signupTitle}>Sign Up</Text>
                        <Text style={styles.descText}>Please, enter your information.</Text>
                        <Form style={styles.form}>
                            <Item stackedLabel style={styles.formItem}>
                                <Label style={styles.formLabel}>EMAIL</Label>
                                <Input style={styles.formInput}/>
                            </Item>
                            <Grid>
                                <Col style={styles.birthdayInputContainer}>
                                    <Item stackedLabel style={styles.formItem}>
                                        <Label style={styles.formLabel}>BIRTHDAY</Label>
                                        <Input style={styles.formInput}/>
                                    </Item>
                                </Col>
                                <Col style={styles.zipcodeInputContainer}>
                                    <Item stackedLabel style={styles.formItem}>
                                        <Label style={styles.formLabel}>ZIP CODE</Label>
                                        <Input style={styles.formInput} keyboardType="numeric"/>
                                    </Item>
                                </Col>
                            </Grid>
                            <List style={styles.listForm}>
                                <ListItem style={styles.listFormItem}>   
                                    <Body>                           
                                        <Text style={styles.listFormItemText}>GENDER</Text>
                                    </Body>
                                    <Right>
                                        <Button transparent style={styles.rightBtn} onPress={() => this.toggleGender(true)}>
                                            {this.state.gender?
                                            <Thumbnail square source={require('../../assets/profile/femaleSelected.png')} style={styles.manIcon}/>:
                                            <Thumbnail square source={require('../../assets/profile/femaleNormal.png')} style={styles.manIcon}/>
                                            }
                                        </Button>
                                    </Right>
                                    <Right>
                                        <Button transparent style={styles.rightBtn} onPress={() => this.toggleGender(false)}>
                                            {this.state.gender?
                                            <Thumbnail square source={require('../../assets/profile/maleNormal.png')} style={styles.manIcon}/>:
                                            <Thumbnail square source={require('../../assets/profile/maleSelected.png')} style={styles.manIcon}/>
                                            }
                                        </Button>
                                    </Right>
                                </ListItem>
                                <ListItem style={styles.listFormItem}>   
                                    <Body>                           
                                        <Text style={styles.listFormItemText}>MARITAL STATUS</Text>
                                    </Body>
                                    <Right>
                                        <Button transparent style={styles.rightBtn} onPress={() => this.toggleMarital(true)}>
                                            {this.state.marital?
                                            <Thumbnail square source={require('../../assets/profile/marriedSelected.png')} style={styles.manIcon}/>:
                                            <Thumbnail square source={require('../../assets/profile/marriedNormal.png')} style={styles.manIcon}/>
                                            }
                                        </Button>
                                    </Right>
                                    <Right>
                                        <Button transparent style={styles.rightBtn} onPress={() => this.toggleMarital(false)}>
                                            {this.state.marital?
                                            <Thumbnail square source={require('../../assets/profile/maleNormal.png')} style={styles.manIcon}/>:
                                            <Thumbnail square source={require('../../assets/profile/maleSelected.png')} style={styles.manIcon}/>
                                            }
                                        </Button>
                                    </Right>
                                </ListItem>
                                <ListItem style={styles.listFormItem}>   
                                    <Body>                           
                                        <Text style={styles.listFormItemText}>DO YOU HAVE KIDS?</Text>
                                    </Body>
                                    <Right>
                                        <Button transparent style={styles.rightBtn} onPress={() => this.toggleKids(true)}>
                                            {this.state.kids?
                                            <Thumbnail square source={require('../../assets/profile/yesSelected.png')} style={styles.manIcon}/>:
                                            <Thumbnail square source={require('../../assets/profile/yesNormal.png')} style={styles.manIcon}/>
                                            }
                                        </Button>
                                    </Right>
                                    <Right>
                                        <Button transparent style={styles.rightBtn} onPress={() => this.toggleKids(false)}>
                                            {this.state.kids?
                                            <Thumbnail square source={require('../../assets/profile/noNormal.png')} style={styles.manIcon}/>:
                                            <Thumbnail square source={require('../../assets/profile/noSelected.png')} style={styles.manIcon}/>
                                            }
                                        </Button>
                                    </Right>
                                </ListItem>
                            </List>
                        </Form>
                        <Button block style={styles.nextBtn} onPress={() => this.onNext()}>
                            <Text style={styles.nextBtnText}>Continue</Text>
                        </Button>
                    </View>: null}
                    {this.state.step==1?
                    <View style={styles.blockContainer}>
                        <Text style={styles.signupTitle}>Create a password</Text>
                        <Text style={styles.passwordDescText}>Your password must include at least one symbol and be eight or more characters long.</Text>
                        <Form style={styles.form}>
                            <Item stackedLabel style={styles.formItem}>
                                {this.state.hidePass?
                                <Label onPress={() => this.togglePass()} style={styles.passwordShowBtn}>Show</Label>:
                                <Label onPress={() => this.togglePass()} style={styles.passwordShowBtn}>Hide</Label>
                                }
                                <Label style={styles.formLabel}>PASSWORD</Label>
                                <Input style={styles.formInput} secureTextEntry={this.state.hidePass}/>
                            </Item>
                        </Form>
                        <Button block style={styles.nextBtn} onPress={() => this.onNext()}>
                            <Text style={styles.nextBtnText}>Sign Up</Text>
                        </Button>
                    </View>: null}
                </Content>
            </Container>
        );
    }
}

export default connect()(EmailSignupScreen);