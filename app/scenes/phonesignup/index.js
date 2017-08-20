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
import { Dimensions, DatePickerIOS, TextInput } from 'react-native';
const { width, height } = Dimensions.get('window');
import styles from './styles';
import { StatusBar } from 'react-native';
import  PDatePicker from '../datepicker/';

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
            showDatePicker: false,
            gender: true,
            marital: false,
            kids: false,
            num1: "",
            num2: "",
            num3: "",
            num4: "",
            num5: "",
            num6: ""
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

    onCancel(){
        this.setState({
            showDatePicker: false
        });
    }
    
    onDone(date){
        this.setState({
            date: new Date(date),
            showDatePicker: false
        });
    }

    onDatePicker(){
        this.setState({
            showDatePicker: true
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
        })
    }

    toggleKids(kids){
        this.setState({
            kids: kids
        });
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
        }
    }

    showDateFormat(){
        return this.state.date.getFullYear() + "-" + (this.state.date.getMonth() < 9? ("0" + (this.state.date.getMonth() + 1)):(this.state.date.getMonth()+ 1)) + "-" + (this.state.date.getDate() < 9? ("0" + (this.state.date.getDate())): (this.state.date.getDate()));
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
                            <TextInput ref="1" style={styles.codeItem} keyboardType="numeric" maxLength={1} onChangeText={(text) => this.onChangeText(text, 1)}/>
                            <TextInput ref="2" style={styles.codeItem} keyboardType="numeric" maxLength={1} onChangeText={(text) => this.onChangeText(text, 2)}/>
                            <TextInput ref="3" style={styles.codeItem} keyboardType="numeric" maxLength={1} onChangeText={(text) => this.onChangeText(text, 3)}/>
                            <TextInput ref="4" style={styles.codeItem} keyboardType="numeric" maxLength={1} onChangeText={(text) => this.onChangeText(text, 4)}/>
                            <TextInput ref="5" style={styles.codeItem} keyboardType="numeric" maxLength={1} onChangeText={(text) => this.onChangeText(text, 5)}/>
                            <TextInput ref="6" style={styles.codeItem} keyboardType="numeric" maxLength={1} onChangeText={(text) => this.onChangeText(text, 6)}/>                            
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
                                        <Text  onPress={() => this.onDatePicker()} style={[styles.formInput,{ width: width/2 -41, lineHeight: 48}]}>{this.showDateFormat()}</Text>
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
                <PDatePicker date={this.state.date}  onCancel={() => this.onCancel()} onDone={(date) => this.onDone(date)}/> : null
                }           
            </Container>
        );
    }
}

export default connect()(PhoneSignupScreen);