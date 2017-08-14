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
import { Dimensions, DatePickerIOS } from 'react-native';
const { width, height } = Dimensions.get('window');
import styles from './styles';

class PhoneSignupScreen extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);

        this.state = {
            progress: 1,
            step: 0,
            hidePass: true,
            date: new Date(),
            showDatePicker: false
        };
    }

    onBack(){
        if(this.state.step > 1){
            this.setState({
                progress: this.state.progress - 1,
                step: this.state.step - 1
            });
        }else if(this.state.step == 1){
            this.setState({
                step: this.state.step - 1
            });
        }else{
            var { dispatch } = this.props;
            dispatch(NavigationActions.back());
        }        
    }

    onNext(progress, step){
        if(this.state.step < 3){
            this.setState({
                progress: this.state.progress + progress,
                step: this.state.step + step
            });
        }else{
            //sign up
            var { dispatch } = this.props;
            dispatch(NavigationActions.navigate({routeName: 'Tab'}));
        }
    }

    onLogin(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'Login', params: { type: 'login' }}));
    }

    togglePass(){
        this.setState({
            hidePass: !this.state.hidePass
        });
    }

    onFocus(){
        this.setState({
            showDatePicker: true
        });
    }

    onBlur(){
        this.setState({
            showDatePicker: false
        });
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
                        <Button transparent onPress={() => this.onLogin()}>
                            <Text style={styles.signupBtnText}>Log In</Text>
                        </Button>
                    </Right>
                </Header>
                <Content style={styles.content}>
                    <View style={styles.progressContainer}>
                        <View style={[styles.progress, {width: width /3 * this.state.progress}]}/>
                    </View>
                    {this.state.step == 0?
                    <View style={styles.blockContainer}>
                        <Text style={styles.signupTitle}>Sign Up</Text>
                        <Text style={styles.descText}>Enter your phone number.</Text>
                        <Form style={styles.form}>
                            <Item stackedLabel style={styles.formItem}>
                                <Label style={styles.formLabel}>NUMBER</Label>
                                <Input style={styles.formInput} keyboardType="numeric"/>
                            </Item>
                        </Form>
                        <Text style={styles.phoneText1}>
                            Tap Next to get an SMS confirmation from Account Kit powered by Facebook. <Text style={styles.moreBtn}>Learn more</Text>
                        </Text>
                        <Button block style={styles.nextBtn} onPress={() => this.onNext(0, 1)}>
                            <Text style={styles.nextBtnText}>Next</Text>
                        </Button>
                    </View>: null}
                    {this.state.step == 1?
                    <View style={styles.blockContainer}>
                        <Text style={styles.signupTitle}>Sign Up</Text>
                        <Text style={styles.descText}>Enter your code.</Text>
                        <View style={styles.codeContainer}>
                            <Input style={styles.codeItem} keyboardType="numeric" maxLength={1}/>
                            <Input style={styles.codeItem} keyboardType="numeric" maxLength={1}/>
                            <Input style={styles.codeItem} keyboardType="numeric" maxLength={1}/>
                            <Input style={styles.codeItem} keyboardType="numeric" maxLength={1}/>
                            <Input style={styles.codeItem} keyboardType="numeric" maxLength={1}/>
                            <Input style={styles.codeItem} keyboardType="numeric" maxLength={1}/>                            
                        </View>                        
                        <Text style={styles.sendBtnText}>Send New Code</Text>
                        <Text style={styles.sendDescText}>
                            Tap Continue to accept Facebook’s <Text style={styles.termBtnText}>Terms, Data Policy, cookie use</Text> and the <Text style={styles.termBtnText}>Privacy Policy</Text> and <Text style={styles.termBtnText}>Terms of Service</Text> of Pinaka.
                        </Text>
                        <Button block style={styles.nextBtn} onPress={() => this.onNext(1,1)}>
                            <Text style={styles.nextBtnText}>Continue</Text>
                        </Button>
                    </View>: null}
                    {this.state.step == 2?
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
                                        <Input style={[styles.formInput,{ width: width / 2 - 28}]} onPress={() => this.onFocus()} onBlur={() => this.onBlur()}/>
                                    </Item>
                                </Col>
                                <Col style={styles.zipcodeInputContainer}>
                                    <Item stackedLabel style={styles.formItem}>
                                        <Label style={styles.formLabel}>ZIP CODE</Label>
                                        <Input style={styles.formInput}/>
                                    </Item>
                                </Col>
                            </Grid>
                            <List style={styles.listForm}>
                                <ListItem style={styles.listFormItem}>   
                                    <Body>                           
                                        <Text style={styles.listFormItemText}>GENDER</Text>
                                    </Body>
                                    <Right>
                                        <Button transparent style={styles.rightBtn} onPress={() => alert("Clicked")}>
                                            <Thumbnail square source={require('../../assets/marriedSelected.png')} style={styles.manIcon}/>
                                        </Button>
                                    </Right>
                                    <Right>
                                        <Button transparent style={styles.rightBtn} onPress={() => alert("Clicked")}>
                                            <Thumbnail square source={require('../../assets/single_2.png')} style={styles.manIcon}/>
                                        </Button>
                                    </Right>
                                </ListItem>
                                <ListItem style={styles.listFormItem}>   
                                    <Body>                           
                                        <Text style={styles.listFormItemText}>MARITAL STATUS</Text>
                                    </Body>
                                    <Right>
                                        <Button transparent style={styles.rightBtn} onPress={() => alert("Clicked")}>
                                            <Thumbnail square source={require('../../assets/marriedSelected.png')} style={styles.manIcon}/>
                                        </Button>
                                    </Right>
                                    <Right>
                                        <Button transparent style={styles.rightBtn} onPress={() => alert("Clicked")}>
                                            <Thumbnail square source={require('../../assets/single_2.png')} style={styles.manIcon}/>
                                        </Button>
                                    </Right>
                                </ListItem>
                                <ListItem style={styles.listFormItem}>   
                                    <Body>                           
                                        <Text style={styles.listFormItemText}>DO YOU HAVE KIDS?</Text>
                                    </Body>
                                    <Right>
                                        <Button transparent style={styles.rightBtn} onPress={() => alert("Clicked")}>
                                            <Thumbnail square source={require('../../assets/yesNormal.png')} style={styles.manIcon}/>
                                        </Button>
                                    </Right>
                                    <Right>
                                        <Button transparent style={styles.rightBtn} onPress={() => alert("Clicked")}>
                                            <Thumbnail square source={require('../../assets/noSelected.png')} style={styles.manIcon}/>
                                        </Button>
                                    </Right>
                                </ListItem>
                            </List>
                        </Form>
                        <Button block style={styles.nextBtn} onPress={() => this.onNext(1,1)}>
                            <Text style={styles.nextBtnText}>Continue</Text>
                        </Button>
                    </View>: null}
                    {this.state.step==3?
                    <View style={styles.blockContainer}>
                        <Text style={styles.signupTitle}>Create a password</Text>
                        <Text style={styles.passwordDescText}>Your password must include at least one symbol and be eight or more characters long.</Text>
                        <Form style={styles.form}>
                            <Item stackedLabel style={styles.formItem}>
                                {this.state.hidePass?
                                <Label style={styles.passwordShowBtn} onPress={() => this.togglePass()}>Show</Label>:
                                <Label style={styles.passwordShowBtn} onPress={() => this.togglePass()}>Hide</Label>}
                                <Label style={styles.formLabel}>PASSWORD</Label>
                                <Input style={styles.formInput} secureTextEntry={this.state.hidePass}/>
                            </Item>
                        </Form>
                        <Button block style={styles.nextBtn} onPress={() => this.onNext(1,1)}>
                            <Text style={styles.nextBtnText}>Sign Up</Text>
                        </Button>
                    </View>: null}
                </Content>
                {this.state.showDatePicker?
                <DatePickerIOS
                    date={this.state.date}
                    mode="date"
                    style={{backgroundColor: 'rgba(255,255,255,0.7)'}}
                />: null}
            </Container>
        );
    }
}

export default connect()(PhoneSignupScreen);