import {
    TextInput,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Keyboard,
    ScrollView,
} from 'react-native';
import ButtonSend from '../components/buttons/ButtonSend';
import { useRoute } from '@react-navigation/native';
import { doc, updateDoc, addDoc, collection, getDocs, increment } from "firebase/firestore";
import { db } from '../firebase/config';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { uk } from 'date-fns/locale';


function CommentsScreen() {

    [comment, setComment] = useState('');
    [allComments, setAllComments] = useState('');

    const { params } = useRoute();
    const { nickname } = useSelector((state) => state.auth);

    const { avatar } = useSelector((state) => state.auth);

    useEffect(() => { 
        getAllComments();
    },[]);

    const onPost = async () => {
        try {
            const postId = params && params.postId;
            if (!postId) {
                console.log('postId отсутствует в params');
                return;
            }

            const postRef = doc(db, 'posts', postId);
            const commentsCollectionRef = collection(postRef, 'comments');

            await addDoc(commentsCollectionRef, {
                nickname,
                comment,
                date: format(new Date(), 'dd MMMM, yyyy | HH:mm', { locale: uk }),
            });

            await updateDoc(postRef, {
                commentsCount: increment(1),
            });
            console.log("документ создан");
        } catch (error) {
            console.log(error);
        }

        setComment('');
    };

    const getAllComments = async () => {
        try {
            const postId = params && params.postId;
            if (!postId) {
                console.log('postId отсутствует в params');
                return;
            }

            const postRef = doc(db, 'posts', postId);
            const commentsCollectionRef = collection(postRef, 'comments');

            const snapshot = await getDocs(commentsCollectionRef);
            const commentsData = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setAllComments(commentsData); // если вам нужно сохранить комментарии в состоянии компонента
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.commentsScreen}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
                keyboardVerticalOffset={176}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView
                        style={{
                            flex: 1,
                            // alignItems: 'center',
                            width: '100%',
                            // height: 400,
                            // justifyContent: 'center',
                            // borderWidth:1
                        }}>
                        <View style={styles.commentsScreen__form}>
                            <View style={styles.commentsScreen__comments}>
                                <View
                                    style={styles.commentsScreen__containerImg}>
                                    <Image
                                        source={{ uri: params.uri }}
                                        style={styles.commentsScreen__img}
                                        // style={{width: 200, height: 200}}
                                    />
                                </View>
                            </View>
                        </View>
                        
                        <View style={styles.commentsScreen__commentsBox}>
                            {allComments.length > 0 ? (
                                allComments.map((comment, index) => (
                                    <View
                                        key={comment.id}
                                        style={[
                                            index % 2 === 0
                                                ? styles.commentsScreen__commentEven
                                                : styles.commentsScreen__comment
                                        ]}>
                                        <View style={styles.commentsScreen__avatarBox}>
                                            <Image
                                                style={styles.commentsScreen__avatar}
                                                source={{uri: avatar}}
                                            />
                                        </View>

                                        <View style={[
                                            index % 2 === 0
                                                ? styles.commentsScreen__textBoxEven
                                                : styles.commentsScreen__textBox
                                        ]}>
                                            <Text style={styles.commentsScreen__commentText}>
                                                {comment.comment}
                                            </Text>
                                            <Text style={[
                                                index % 2 === 0
                                                ? styles.commentsScreen__commentDateEven
                                                : styles.commentsScreen__commentDate
                                            ]}>
                                                {comment.date} {/* Если у вас есть поле с датой комментария, используйте его */}
                                            </Text>
                                        </View>
                                    </View>
                                ))
                            ) : (
                                <Text>No comments yet</Text>
                            )}
                        </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            <View style={styles.commentsScreen__tabBar}>
                <TextInput
                    value={comment}
                    onChangeText={setComment}
                    style={styles.commentsScreen__input}
                    placeholder='Коментувати...'
                    placeholderTextColor='#BDBDBD'
                />
                <TouchableOpacity
                    onPress={onPost}
                    style={styles.commentsScreen__btnSendContainer}
                >
                    <ButtonSend />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    commentsScreen: {
        height: '100%',
        width: '100%',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
    },
    commentsScreen__form: {
        marginTop: 32,
        alignItems: 'center',
    },
    commentsScreen__comments: {
        height: 240,
    },
    commentsScreen__containerImg: {
        height: 240,
        borderRadius: 8,
        backgroundColor: '#E8E8E8',
    },
    commentsScreen__img: {
        width: 343,
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 8,
    },
    commentsScreen__commentsBox: {
        marginTop: 32,
        width: '100%',
        height: '100%',
        // borderWidth:1
    },
        commentsScreen__comment: {
        flexDirection: 'row',
        marginBottom: 24,
    },
    commentsScreen__commentEven: {
        marginBottom: 24,
        flexDirection: 'row-reverse',
    },
    commentsScreen__avatarBox: {
        borderRadius: 100,
        height: 28,
        width: 28,
        overflow: 'hidden',
    },
    commentsScreen__avatar: {
        width: 28,
        height: 28,
    },
    commentsScreen__textBox: {
        width: 299,
        paddingTop: 16,
        paddingBottom: 16,
        paddingRight: 16,
        paddingLeft: 16,
        marginLeft: 16,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        borderTopRightRadius: 6,
        backgroundColor: '#00000008',
    },
        commentsScreen__textBoxEven: {
        width: 299,
        paddingTop: 16,
        paddingBottom: 16,
        paddingRight: 16,
        paddingLeft: 16,
        marginRight: 16,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        borderTopLeftRadius: 6,
        backgroundColor: '#00000008',
    },
    commentsScreen__commentText: {
        fontSize: 13,
        color: '#212121',
    },
    commentsScreen__commentDate: {
        fontSize: 10,
        color: '#BDBDBD',
        marginTop: 8,
        marginLeft: 'auto',
    },
        commentsScreen__commentDateEven: {
        fontSize: 10,
        color: '#BDBDBD',
        marginTop: 8,
        marginRight: 'auto',
    },
    commentsScreen__tabBar: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: -16,
    },
    commentsScreen__input: {
        backgroundColor: '#E8E8E8',
        fontSize: 16,
        width: 343,
        height: 50,
        borderRadius: 25,
        padding: 16,
    },
    commentsScreen__btnSendContainer: {
        top: -42,
        left: 145,
    },
});

export default CommentsScreen