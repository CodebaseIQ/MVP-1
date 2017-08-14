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

class EditProfileScreen extends Component{
    static navigationOptions = {
        header: null
    };

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onSave(){

    }

    render(){
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
                                    <Input style={styles.formInput}/>
                                </Item>
                            </Col>
                            <Col style={styles.zipcodeContainer}>
                                <Item stackedLabel style={styles.formItem}>
                                    <Label style={styles.formLabel}>ZIP CODE</Label>
                                    <Input style={styles.formInput}/>
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
                                <Button transparent style={styles.rightBtn} onPress={() => alert("Clicked")}>
                                    <Thumbnail square source={require('../../assets/marriedSelected.png')} style={styles.manIcon}/>
                                </Button>
                            </Right>
                            <Right style={styles.listItemRight}>
                                <Button transparent style={styles.rightBtn} onPress={() => alert("Clicked")}>
                                    <Thumbnail square source={require('../../assets/marriedSelected.png')} style={styles.manIcon}/>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem style={styles.listItem}>
                            <Body>
                                <Text style={styles.listItemText}>MARITAL STATUS</Text>
                            </Body>
                            <Right style={styles.listItemRight}>
                                <Button transparent style={styles.rightBtn} onPress={() => alert("Clicked")}>
                                    <Thumbnail square source={require('../../assets/marriedSelected.png')} style={styles.manIcon}/>
                                </Button>
                            </Right>
                            <Right style={styles.listItemRight}>
                                <Button transparent style={styles.rightBtn} onPress={() => alert("Clicked")}>
                                    <Thumbnail square source={require('../../assets/marriedSelected.png')} style={styles.manIcon}/>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem style={styles.listItem}>
                            <Body>
                                <Text style={styles.listItemText}>DO YOU HAVE KIDS?</Text>
                            </Body>
                            <Right style={styles.listItemRight}>
                                <Button transparent style={styles.rightBtn} onPress={() => alert("Clicked")}>
                                    <Thumbnail square source={require('../../assets/marriedSelected.png')} style={styles.manIcon}/>
                                </Button>
                            </Right>
                            <Right style={styles.listItemRight}>
                                <Button transparent style={styles.rightBtn} onPress={() => alert("Clicked")}>
                                    <Thumbnail square source={require('../../assets/marriedSelected.png')} style={styles.manIcon}/>
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
                            <Input style={styles.formInput}/>
                        </Item>
                    </Form>
                    <Text style={styles.interestText}>My interests</Text>
                    <Grid>
                        <Row>
                            <Col>
                                <ListItem style={styles.checkListItem}>
                                    <CheckBox checked={true} />
                                    <Body>
                                        <Text>Bowling</Text>
                                    </Body>
                                </ListItem>
                            </Col>
                            <Col>
                                <ListItem style={styles.checkListItem}>
                                    <CheckBox checked={true} />
                                    <Body>
                                        <Text>League</Text>
                                    </Body>
                                </ListItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ListItem style={styles.checkListItem}>
                                    <CheckBox checked={true} />
                                    <Body>
                                        <Text>Laser Tag</Text>
                                    </Body>
                                </ListItem>
                            </Col>
                            <Col>
                                <ListItem style={styles.checkListItem}>
                                    <CheckBox checked={true} />
                                    <Body>
                                        <Text>Kids Party</Text>
                                    </Body>
                                </ListItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ListItem style={styles.checkListItem}>
                                    <CheckBox checked={true} />
                                    <Body>
                                        <Text>Arcade</Text>
                                    </Body>
                                </ListItem>
                            </Col>
                            <Col>
                                <ListItem style={styles.checkListItem}>
                                    <CheckBox checked={true} />
                                    <Body>
                                        <Text>Food</Text>
                                    </Body>
                                </ListItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ListItem style={styles.checkListItem}>
                                    <CheckBox checked={true} />
                                    <Body>
                                        <Text>Cosmic Bowling</Text>
                                    </Body>
                                </ListItem>
                            </Col>
                            <Col>
                                <ListItem style={styles.checkListItem}>
                                    <CheckBox checked={true} />
                                    <Body>
                                        <Text>Group Event</Text>
                                    </Body>
                                </ListItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ListItem style={styles.checkListItem}>
                                    <CheckBox checked={true} />
                                    <Body>
                                        <Text>Adult Party</Text>
                                    </Body>
                                </ListItem>
                            </Col>
                        </Row>
                    </Grid>
                    <View style={{height: 44}}/>
                </Content>
            </Container>
        );
    }
}

export default connect()(EditProfileScreen);