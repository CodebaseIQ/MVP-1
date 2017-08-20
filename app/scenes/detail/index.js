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
    Footer
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import MapView from 'react-native-maps';
import styles from './styles';
import { StatusBar } from 'react-native';

class DetailScreen extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);

        this.state = {
            isSaved: false
        };
    }

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onSchedule(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'ScheduleView'}));
    }

    onReserve(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'Payment'}));
    }

    onShare(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'Share'}));
    }

    onSave(){
        this.setState({
            isSaved: !this.state.isSaved
        });
    }

    render(){
        StatusBar.setBarStyle('light-content');
        return (
            <Container style={styles.container}>
                <Button style={styles.saveBtn} onPress={() => this.onSave()}>
                    {this.state.isSaved?
                    <Thumbnail square source={require('../../assets/saved/icFavoriteActive.png')} style={styles.saveBtnIcon}/>:
                    <Thumbnail square source={require('../../assets/home/icFavoriteBlackNormal.png')} style={styles.saveBtnIcon}/>
                    }
                </Button>
                <Button style={styles.shareBtn} onPress={() => this.onShare()}>
                    <Thumbnail square source={require('../../assets/home/icNavShare.png')} style={styles.shareBtnIcon}/>
                </Button>
                <Thumbnail square source={require('../../assets/home/1.png')} style={styles.image}>
                    <View style={styles.disccountContainer}>
                        <Text style={styles.disccountPercent}>50%</Text>
                        <Text style={styles.disccountText}>OFF</Text>
                    </View>                    
                </Thumbnail>
                <Header style={styles.header}>                    
                    <Left>
                        <Button transparent onPress={() => this.onBack()}>
                            <Thumbnail square source={require('../../assets/icNavBackBlack.png')} style={styles.backBtnIcon}/>
                        </Button>
                    </Left>                                    
                </Header>
                <Content style={styles.content}>
                    <Text style={styles.title}>Bowling</Text>
                    <Text style={styles.estimateTimeText}>Ends in 4 days 5 hours</Text>
                    <List style={styles.list}>
                        <ListItem style={styles.listItem}>
                            <Grid>
                                <Col>
                                    <Text style={styles.originPrice}>$80.00</Text>
                                </Col>
                                <Col>
                                    <Text style={styles.currentPrice}>$40.00</Text>
                                </Col>
                            </Grid>
                        </ListItem>
                        <ListItem style={styles.listItem}>
                            <Body>
                            <Text style={styles.aboutText}>About</Text>
                            <Text style={styles.aboutDescText}>
                                Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nam porttitor blandit…  <Text style={styles.moreBtn}>read more</Text>
                            </Text>
                            </Body>
                        </ListItem>
                        <ListItem style={styles.listItem}>
                            <Body>
                                <Text style={styles.btnText}>Reviews</Text>
                            </Body>
                            <Right>
                                <Icon name="arrow-forward"/>
                            </Right>
                        </ListItem>
                        <ListItem style={styles.listItem} onPress={() => this.onSchedule()}>
                            <Body>
                                <Text style={styles.btnText}>View Schedule</Text>
                            </Body>
                            <Right>
                                <Icon name="arrow-forward"/>
                            </Right>
                        </ListItem>
                        <ListItem style={styles.listItem}>
                            <Body>
                                <Text style={styles.btnText}>Company Website</Text>
                            </Body>
                            <Right>
                                <Icon name="arrow-forward"/>
                            </Right>
                        </ListItem>
                        <ListItem style={styles.listItem}>
                            <Body>
                                <Text style={styles.locationText}>
                                    <Icon name="md-pin" style={styles.pinIcon}/>   Boronia St & Anzac Parade, NSW 2033
                                </Text>
                            </Body>
                        </ListItem>                        
                    </List>
                    <MapView
                        style={styles.mapview}
                            initialRegion={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.0025,
                                longitudeDelta: 0.00121
                            }}>
                        <MapView.Circle
                            center={{
                                latitude: 37.78825,
                                longitude: -122.4324
                            }}
                            radius={34}
                            strokeWidth={1}
                            strokeColor="rgb(230,54,166)"
                            fillColor="rgba(230,54,166,0.24)"
                        />
                    </MapView>
                </Content>
                <Footer style={styles.footer}>
                    <Button block style={styles.reserveBtn} onPress={() => this.onReserve()}>
                        <Text style={styles.reserveBtnText}>Book Reservation</Text>
                    </Button>
                </Footer>
            </Container>
        );
    }
}

export default connect()(DetailScreen);