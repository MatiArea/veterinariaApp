import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
  container: {
    height: '90%',
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#808080',
    borderRadius: 20,
  },
  shadowContainer: {
    height: 100,
    borderRadius: 20,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 0.5,
    marginVertical: '2%',
    marginHorizontal: '1%',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fff',
  },
  icon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  iconImage: {
    height: 70,
    width: 70,
    resizeMode: 'cover',
    borderRadius: 20,
  },
})
