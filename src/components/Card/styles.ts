import { StyleSheet } from 'react-native'
import { BLACK, WHITE } from '../../theme/colors'

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 10,
    shadowColor: BLACK,
    shadowOpacity: 0.26,
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 10,
    elevation: 3,
    margin: 15,
    height: 140,
    backgroundColor: WHITE,
    alignItems: 'center',
    overflow: 'hidden'
  },
  poster: {
    height: 100,
    width: 100
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: '700',
    color: WHITE,
    textAlign: 'center',
  },
  fallback: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    color: WHITE,
    textAlign: 'center',
  },

})