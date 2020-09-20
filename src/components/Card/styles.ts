import { StyleSheet } from 'react-native'

import { BLACK, WHITE } from '../../theme/colors'

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 15,
    shadowColor: BLACK,
    shadowOpacity: 0.26,
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 18,
    elevation: 3,
    margin: 15,
    padding: 15,
    height: 140,
    backgroundColor: WHITE,
    alignItems: 'center',
    overflow: 'hidden',
  },
  poster: {
    height: '100%',
    width: '100%',
  },
  posterContainer: {
    height: 100,
    width: 100,
    borderRadius: 8,
    overflow: 'hidden',
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
