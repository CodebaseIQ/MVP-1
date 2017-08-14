import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Body,
    Button,
    Title,
    Thumbnail,
    Header,
    Label,
    Left,
    Form,
    Input,
    View,
    Grid,
    Col,
    Text,
    List,
    ListItem,
    Right,
    Icon,
    Switch
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';

class SettingScreen extends Component{
    static navigationOptions = {
        header: null
    };

    render(){
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Body>
                        <Title style={styles.headerTitle}>Settings</Title>
                    </Body>
                </Header>
                <Content style={styles.content}>
                    <List>
                        <ListItem style={styles.listItem}>
                            <Body>
                                <Text>Notifications</Text>
                            </Body>
                            <Right>
                                <Switch value={true}/>
                            </Right>
                        </ListItem>
                        <ListItem style={styles.listItem}>
                            <Body>
                                <Text>Currency</Text>
                            </Body>
                            <Right>
                                <Text style={styles.currencyText}>USD ($)</Text>
                            </Right>
                        </ListItem>
                        <ListItem style={styles.listItem}>
                            <Body>
                                <Text>Change Password</Text>
                            </Body>
                            <Right>
                                <Icon name="arrow-forward"/>
                            </Right>
                        </ListItem>
                        <ListItem style={styles.listItem}>
                            <Body>
                                <Text>About Us</Text>
                            </Body>
                            <Right>
                                <Icon name="arrow-forward"/>
                            </Right>
                        </ListItem>
                        <ListItem style={styles.listItem}>
                            <Body>
                                <Text>Terms of Service</Text>
                            </Body>
                            <Right>
                                <Icon name="arrow-forward"/>
                            </Right>
                        </ListItem>
                        <ListItem style={styles.listItem}>
                            <Body>
                                <Text>Version 1.2.0</Text>
                            </Body>
                        </ListItem>
                        <ListItem style={styles.listItem}>
                            <Body>
                                <Text>Log Out</Text>
                            </Body>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}

export default connect()(SettingScreen);