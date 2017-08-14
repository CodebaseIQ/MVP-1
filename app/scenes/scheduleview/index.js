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
    Right,
    View,
    List,
    ListItem,
    Grid,
    Col,
    Icon,
    Footer,
    CheckBox
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';

class ScheduleViewScreen extends Component{
    static navigationOptions = {
        header: null
    };

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
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
                    <Body>
                        <Title style={styles.title}>Schedule</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Text></Text>
                        </Button>
                    </Right>
                </Header>
                <View style={styles.calendar}>
                    <Grid>
                        <Col style={styles.calendarItem}>
                            <Text style={styles.dayText}>Thu</Text>
                            <View style={[styles.dateContainer, styles.dateActiveContainer]}>
                                <Text style={styles.dateText}>22</Text>
                            </View>
                        </Col>
                        <Col style={styles.calendarItem}>
                            <Text style={styles.dayText}>Fri</Text>
                            <View style={styles.dateContainer}>
                                <Text style={styles.dateText}>22</Text>
                            </View>
                        </Col>
                        <Col style={styles.calendarItem}>
                            <Text style={styles.dayText}>Sat</Text>
                            <View style={styles.dateContainer}>
                                <Text style={styles.dateText}>24</Text>
                            </View>
                        </Col>
                        <Col style={styles.calendarItem}>
                            <Text style={styles.dayText}>Sun</Text>
                            <View style={styles.dateContainer}>
                                <Text style={styles.dateText}>25</Text>
                            </View>
                        </Col>
                        <Col style={styles.calendarItem}>
                            <Text style={styles.dayText}>Mon</Text>
                            <View style={styles.dateContainer}>
                                <Text style={styles.dateText}>26</Text>
                            </View>
                        </Col>
                        <Col style={styles.calendarItem}>
                            <Text style={styles.dayText}>Tue</Text>
                            <View style={styles.dateContainer}>
                                <Text style={styles.dateText}>27</Text>
                            </View>
                        </Col>
                        <Col style={styles.calendarItem}>
                            <Text style={styles.dayText}>Wed</Text>
                            <View style={styles.dateContainer}>
                                <Text style={styles.dateText}>28</Text>
                            </View>
                        </Col>
                    </Grid>
                    <Text style={styles.fullDateText}>Thursday, 22 July, 2017</Text>
                </View>
                <Content style={styles.content}>                    
                    <List style={styles.list}>
                        <ListItem style={styles.listItem}>                            
                            <Body>
                                <Text style={styles.listItemText}>5:00 pm - 6:00 pm</Text>
                            </Body>
                            <Right>
                                <CheckBox checked={true} />
                            </Right>
                        </ListItem>
                        <ListItem style={styles.listItem}>                            
                            <Body>
                                <Text style={styles.listItemText}>7:00 pm - 8:00 pm</Text>
                            </Body>
                            <Right>
                                <CheckBox checked={true} />
                            </Right>
                        </ListItem>
                        <ListItem style={styles.listItem}>                            
                            <Body>
                                <Text style={styles.listItemText}>8:00 pm - 9:00 pm</Text>
                            </Body>
                            <Right>
                                <CheckBox checked={true} />
                            </Right>
                        </ListItem>
                        <ListItem style={styles.listItem}>                            
                            <Body>
                                <Text style={styles.listItemText}>9:00 pm - 10:00 pm</Text>
                            </Body>
                            <Right>
                                <CheckBox checked={true} />
                            </Right>
                        </ListItem>
                    </List>
                </Content>
                <Footer style={styles.footer}>
                    <Button block style={styles.bookBtn}>
                        <Text style={styles.bootBtnText}>Request to book</Text>
                    </Button>
                </Footer>
            </Container>
        );
    }
}

export default connect()(ScheduleViewScreen);