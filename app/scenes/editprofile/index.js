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
    Left,
    Form,
    Item,
    Label,
    View,
    Grid,
    Row,
    Col,
    List,
    ListItem,
    Icon,
    Right,
    CheckBox,
    Input,
    Footer
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { StatusBar, Dimensions } from 'react-native';
import  PDatePicker from '../datepicker/';
const { width, height } = Dimensions.get('window');

class EditProfileScreen extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);

        this.state = {
            gender: true,
            marital: false,
            kids: false,
            interests: [true, true, true, true, true, true, true, true, true],
            showDatePicker: false,
            date: new Date()
        };
    }

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onSave(){

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

    onValueChange(index){
        this.state.interests[index] = !this.state.interests[index];
        this.setState({
            kids: this.state.kids
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

    showDateFormat(){
        return this.state.date.getFullYear() + "-" + (this.state.date.getMonth() < 9? ("0" + (this.state.date.getMonth() + 1)):(this.state.date.getMonth()+ 1)) + "-" + (this.state.date.getDate() < 9? ("0" + (this.state.date.getDate())): (this.state.date.getDate()));
    }

    render(){
        StatusBar.setBarStyle('dark-content');
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={() => this.onBack()}>
                            <Thumbnail square source={require('../../assets/icNavBackBlack1.png')} style={styles.backBtnIcon}/>
                        </Button>
                    </Left>
                    <Right>
                        <Button transparent onPress={() => this.onSave()}>
                            <Text style={styles.saveBtnText}>Save</Text>
                        </Button>
                    </Right>
                </Header>
                <Content style={styles.content}>
                    <Body>
                        <Thumbnail source={require('../../assets/home/1.png')} style={styles.image}/>
                        <Text  onPress={() => alert("change photo")} style={styles.changeText}>Change photo</Text>
                    </Body>
                    <Text style={styles.detailText}>
                        Private details
                    </Text>
                    <Form style={styles.form}>
                        <Item stackedLabel style={styles.formItem}>
                            <Label style={styles.formLabel}>YOUR NAME</Label>
                            <Input style={styles.formInput}/>
                        </Item>
                        <Grid>
                            <Col style={styles.birthdayContainer}>
                                <Item stackedLabel style={styles.formItem}>
                                    <Label style={styles.formLabel}>BIRTHDAY</Label>
                                    <Text  onPress={() => this.onDatePicker()} style={[styles.formInput,{ width: width/2 -28, lineHeight: 48}]}>{this.showDateFormat()}</Text>
                                </Item>
                            </Col>
                            <Col style={styles.zipcodeContainer}>
                                <Item stackedLabel style={styles.formItem}>
                                    <Label style={styles.formLabel}>ZIP CODE</Label>
                                    <Input style={styles.formInput} keyboardType="numeric"/>
                                </Item>
                            </Col>
                        </Grid>
                    </Form>
                    <List style={styles.list}>
                        <ListItem style={styles.listItem}>
                            <Body>
                                <Text style={styles.listItemText}>GENDER</Text>
                            </Body>
                            <Right style={styles.listItemRight}>
                                <Button transparent style={styles.rightBtn} onPress={() => this.toggleGender(true)}>
                                    {this.state.gender?
                                    <Thumbnail square source={require('../../assets/profile/femaleSelected.png')} style={styles.manIcon}/>:
                                    <Thumbnail square source={require('../../assets/profile/femaleNormalLight.png')} style={styles.manIcon}/>
                                    }
                                </Button>
                            </Right>
                            <Right style={styles.listItemRight}>
                                <Button transparent style={styles.rightBtn} onPress={() => this.toggleGender(false)}>
                                    {this.state.gender?
                                    <Thumbnail square source={require('../../assets/profile/maleNormalLight.png')} style={styles.manIcon}/>:
                                    <Thumbnail square source={require('../../assets/profile/maleSelected.png')} style={styles.manIcon}/>
                                    }
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem style={styles.listItem}>
                            <Body>
                                <Text style={styles.listItemText}>MARITAL STATUS</Text>
                            </Body>
                            <Right style={styles.listItemRight}>
                                <Button transparent style={styles.rightBtn} onPress={() => this.toggleMarital(true)}>
                                    {this.state.marital?
                                    <Thumbnail square source={require('../../assets/profile/marriedSelected.png')} style={styles.manIcon}/>:
                                    <Thumbnail square source={require('../../assets/profile/marriedNormalLight.png')} style={styles.manIcon}/>
                                    }
                                </Button>
                            </Right>
                            <Right style={styles.listItemRight}>
                                <Button transparent style={styles.rightBtn} onPress={() => this.toggleMarital(false)}>
                                    {this.state.marital?
                                    <Thumbnail square source={require('../../assets/profile/femaleNormalLight.png')} style={styles.manIcon}/>:
                                    <Thumbnail square source={require('../../assets/profile/femaleSelected.png')} style={styles.manIcon}/>
                                    }
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem style={styles.listItem}>
                            <Body>
                                <Text style={styles.listItemText}>DO YOU HAVE KIDS?</Text>
                            </Body>
                            <Right style={styles.listItemRight}>
                                <Button transparent style={styles.rightBtn} onPress={() => this.toggleKids(true)}>
                                    {this.state.kids?
                                    <Thumbnail square source={require('../../assets/profile/yesSelected.png')} style={styles.manIcon}/>:
                                    <Thumbnail square source={require('../../assets/profile/yesNormalLight.png')} style={styles.manIcon}/>
                                    }
                                </Button>
                            </Right>
                            <Right style={styles.listItemRight}>
                                <Button transparent style={styles.rightBtn} onPress={() => this.toggleKids(false)}>
                                        {this.state.kids?
                                        <Thumbnail square source={require('../../assets/profile/noNormalLight.png')} style={styles.manIcon}/>:
                                        <Thumbnail square source={require('../../assets/profile/noSelected.png')} style={styles.manIcon}/>
                                        }
                                </Button>
                            </Right>
                        </ListItem>
                    </List>
                    <Form style={styles.form}>
                        <Item stackedLabel style={styles.formItem}>
                            <Label style={styles.formLabel}>EMAIL</Label>
                            <Input style={styles.formInput}/>
                        </Item>
                        <Item stackedLabel style={styles.formItem}>
                            <Label style={styles.formLabel}>PHONE</Label>
                            <Input style={styles.formInput} keyboardType="numeric"/>
                        </Item>
                    </Form>
                    <Text style={styles.interestText}>My interests</Text>
                    <Grid>
                        <Row>
                            <Col>
                                <ListItem style={styles.checkListItem}>
                                    <CheckBox checked={this.state.interests[0]} onPress={() => this.onValueChange(0)}/>
                                    <Body>
                                        <Text>Bowling</Text>
                                    </Body>
                                </ListItem>
                            </Col>
                            <Col>
                                <ListItem style={styles.checkListItem}>
                                    <CheckBox checked={this.state.interests[1]} onPress={() => this.onValueChange(1)}/>
                                    <Body>
                                        <Text>League</Text>
                                    </Body>
                                </ListItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ListItem style={styles.checkListItem}>
                                    <CheckBox checked={this.state.interests[2]} onPress={() => this.onValueChange(2)} />
                                    <Body>
                                        <Text>Laser Tag</Text>
                                    </Body>
                                </ListItem>
                            </Col>
                            <Col>
                                <ListItem style={styles.checkListItem}>
                                    <CheckBox checked={this.state.interests[3]} onPress={() => this.onValueChange(3)}/>
                                    <Body>
                                        <Text>Kids Party</Text>
                                    </Body>
                                </ListItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ListItem style={styles.checkListItem}>
                                    <CheckBox checked={this.state.interests[4]} onPress={() => this.onValueChange(4)}/>
                                    <Body>
                                        <Text>Arcade</Text>
                                    </Body>
                                </ListItem>
                            </Col>
                            <Col>
                                <ListItem style={styles.checkListItem}>
                                    <CheckBox checked={this.state.interests[5]} onPress={() => this.onValueChange(5)}/>
                                    <Body>
                                        <Text>Food</Text>
                                    </Body>
                                </ListItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ListItem style={styles.checkListItem}>
                                    <CheckBox checked={this.state.interests[6]} onPress={() => this.onValueChange(6)}/>
                                    <Body>
                                        <Text>Cosmic Bowling</Text>
                                    </Body>
                                </ListItem>
                            </Col>
                            <Col>
                                <ListItem style={styles.checkListItem}>
                                    <CheckBox checked={this.state.interests[7]} onPress={() => this.onValueChange(7)}/>
                                    <Body>
                                        <Text>Group Event</Text>
                                    </Body>
                                </ListItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ListItem style={styles.checkListItem}>
                                    <CheckBox checked={this.state.interests[8]} onPress={() => this.onValueChange(8)} />
                                    <Body>
                                        <Text>Adult Party</Text>
                                    </Body>
                                </ListItem>
                            </Col>
                        </Row>
                    </Grid>
                    <View style={{height: 44}}/>
                </Content>
                {this.state.showDatePicker?
                <PDatePicker date={this.state.date}  onCancel={() => this.onCancel()} onDone={(date) => this.onDone(date)}/> : null
                }
            </Container>
        );
    }
}

export default connect()(EditProfileScreen);