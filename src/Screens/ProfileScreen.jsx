import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import Background from '../components/background/Background';
import userBig from '../images/userBig.jpg'
import ButtonLogOut from '../components/buttons/ButtonLogOut';
import forest from '../images/forest.png';
import message from '../images/message-circle.jpg';
import like from '../images/like.jpg';
import navi from '../images/map-pin.jpg';
import sunset from '../images/sunset.jpg';
import house from '../images/house.jpg';
import ButtonDelAvatar from '../components/buttons/ButtonDelAvatar';
import TabBarAlt from '../components/tabBar/TabBarAlt';

function ProfileScreen() {

    function onComment() { 
        console.log('откроет комменты')
    };

    function onLike() { 
        console.log('добавит лайк')
    };

    return (
        <>
            <Background/>
            <View style={styles.profile}>
                <Image
                    source={userBig}
                    style={styles.profile__avatar}
                />
                <View style={styles.profile__btnDel}>
                    <ButtonDelAvatar />
                </View>
                <View style={styles.profile__btnLogOut}>
                    <ButtonLogOut />
                </View>
                    <Text style={styles.profile__title}>Natali Romanova</Text>
                </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.profile__postsContainer}>
                <View style={styles.profile__postBox}>
                    <View style={styles.profile__image}>
                        <Image source={forest}/>
                    </View>
                    <Text style={styles.profile__text}>Ліс</Text>
                    <View style={styles.profile__stat}>
                        <TouchableOpacity onPress={onComment}>
                            <Image
                                style={styles.profile__Ico}
                                source={message} />
                        </TouchableOpacity>                            
                        <Text style={styles.profile__Qty}>8</Text>
                        <TouchableOpacity onPress={onLike}>
                            <Image
                                style={styles.profile__Ico}
                                source={like} />
                        </TouchableOpacity>
                        <Text style={styles.profile__Qty}>153</Text>
                        <TouchableOpacity style={styles.profile__navi}>
                            <Image
                                tyle={styles.profile__Ico}
                                source={navi} />
                            <Text style={styles.profile__textNavi}>Ukraine</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.profile__postBox}>
                    <View style={styles.profile__image}>
                        <Image source={sunset}/>
                    </View>
                    <Text style={styles.profile__text}>Захід на чорному морі</Text>
                    <View style={styles.profile__stat}>
                        <TouchableOpacity onPress={onComment}>
                            <Image
                                style={styles.profile__Ico}
                                source={message} />
                        </TouchableOpacity>                            
                        <Text style={styles.profile__Qty}>3</Text>
                        <TouchableOpacity onPress={onLike}>
                            <Image
                                style={styles.profile__Ico}
                                source={like} />
                        </TouchableOpacity>
                        <Text style={styles.profile__Qty}>200</Text>
                        <TouchableOpacity style={styles.profile__navi}>
                            <Image
                                tyle={styles.profile__Ico}
                                source={navi} />
                            <Text style={styles.profile__textNavi}>Ukraine</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.profile__postBox}>
                    <View style={styles.profile__image}>
                        <Image source={house}/>
                    </View>
                    <Text style={styles.profile__text}>Старий будиночок у Венеції</Text>
                    <View style={styles.profile__stat}>
                        <TouchableOpacity onPress={onComment}>
                            <Image
                                style={styles.profile__Ico}
                                source={message} />
                        </TouchableOpacity>                            
                        <Text style={styles.profile__Qty}>50</Text>
                        <TouchableOpacity onPress={onLike}>
                            <Image
                                style={styles.profile__Ico}
                                source={like} />
                        </TouchableOpacity>
                        <Text style={styles.profile__Qty}>200</Text>
                        <TouchableOpacity style={styles.profile__navi}>
                            <Image
                                tyle={styles.profile__Ico}
                                source={navi} />
                            <Text style={styles.profile__textNavi}>Italy</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <TabBarAlt />
        </>   
    )
};

const styles = StyleSheet.create({
    profile: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: "#FFFFFF",
        top: 147,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    profile__avatar: {
        position: 'absolute',
        width: 120,
        height: 120,
        top: -60,
        backgroundColor: "#F6F6F6",
        borderRadius: 16,
    },
    profile__btnDel: {
        top: 21,
        left: 60,
    },
    profile__title: {
        fontFamily: 'RobotoMedium',
        fontSize: 30,
        height: 35,
        marginTop: 32,
        textAlign: 'center',
    },
    profile__btnLogOut: {
        bottom: 3,
        left: 184,
        width: 24,
        height: 24,
    },
    profile__postsContainer: {
        position: 'absolute',
        top: 286,
        height: 556,
        // borderWidth: 1
        // width: '100%',

    },
    profile__postBox: {
        width: 343,
        marginBottom: 32,
    },
    profile__image: {
        borderRadius: 8,
    },
    profile__text: {
        fontWeight: 500,
        fontSize: 16,
    },
    profile__stat: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 24,
    },
    profile__Ico: {
        width: 24,
        height: 24,
        marginRight: 6,
    },
    profile__Qty: {
        fontSize: 16,
        color: '#212121',
        marginRight: 24,
    },
    profile__navi: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 117,
    },
    profile__textNavi: {
        textDecorationLine: 'underline',
        fontSize: 16,
        color: '#212121',
        marginLeft: 6,
    },
});

export default ProfileScreen;