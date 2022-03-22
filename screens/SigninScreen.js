import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import TermsAndConditionModal from '../shared/TermsAndConditionModal';
import authService from '../services/auth';
import { userDetails } from '../store/actions';
import Loader from '../components/Loader';
import theme from '../theme';

export default function SigninScreen({ navigation }) {
  const appData = useSelector(state => state.app);
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const handleLogin = async (email, password) => {
    try {
      setLoading(true);
      const { data } = await authService.login(email, password);
      dispatch(userDetails({ ...appData, ...data }));
      setLoading(false);
      navigation.reset({
        index: 0,
        routes: [{ name: 'DashboardNavigation' }]
      });
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message);
    }
  };

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, backgroundColor: '#fff' }}
      keyboardShouldPersistTaps='handled'>
      <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Loader isLoading={loading} />
          <View style={styles.hero}>
            <Image
              source={require('../assets/default.png')}
              style={styles.image}
            />
            <Text style={styles.title}>SureBucks</Text>
            <Text style={styles.subtitle}>
              Get a quick consult in 5 minutes
            </Text>
          </View>
          <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            validationSchema={yup.object().shape({
              email: yup
                .string()
                .required('Email is required')
                .email('Email is invalid'),
              password: yup.string().required('Password is required')
            })}
            onSubmit={({ email, password }, actions) => {
              handleLogin(email, password);
            }}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched
            }) => (
              <View style={styles.main}>
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder='Email*'
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                  {errors.email && touched.email && (
                    <Text style={styles.errorText}>{errors.email}</Text>
                  )}
                  <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder='Password*'
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                  {errors.password && touched.password && (
                    <Text style={styles.errorText}>{errors.password}</Text>
                  )}
                </View>
                {error && <Text style={styles.errorText}>{error}</Text>}
                <Pressable
                  onPress={() => {
                    Keyboard.dismiss();
                    handleSubmit();
                  }}
                  style={({ pressed }) => [
                    {
                      backgroundColor: pressed
                        ? theme.color.primaryLight
                        : theme.color.primary
                    },
                    styles.button
                  ]}>
                  <Text style={styles.buttonText}>Sign in</Text>
                </Pressable>
                <Text style={styles.text} onPress={() => setModalVisible(true)}>
                  By proceeding you also agree to the{' '}
                  <Text style={{ textDecorationLine: 'underline' }}>
                    Terms of Service and Privacy Policy
                  </Text>
                </Text>
              </View>
            )}
          </Formik>
        </View>
      </TouchableWithoutFeedback>
      <TermsAndConditionModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  hero: {
    paddingTop: 40,
    alignItems: 'center'
  },
  main: {
    height: 300,
    paddingHorizontal: 20,
    paddingVertical: 30,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.color.primary,
    textAlign: 'center',
    paddingHorizontal: 50
  },
  subtitle: {
    color: theme.color.primaryLight,
    textAlign: 'center',
    paddingHorizontal: 50,
    paddingVertical: 20,
    fontSize: 16,
    fontWeight: '600'
  },
  image: {
    height: 80,
    width: 80,
    resizeMode: 'contain'
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: theme.color.primaryLight,
    fontWeight: '600'
  },
  errorText: {
    fontSize: 12,
    color: '#f00',
    fontWeight: '600',
    marginBottom: 5
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 30,
    padding: 14,
    borderRadius: 50
  },
  buttonText: {
    fontSize: 18,
    color: '#fff'
  },
  input: {
    height: 40,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 10,
    marginBottom: 10
  }
});
