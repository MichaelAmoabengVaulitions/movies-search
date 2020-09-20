import { StyleSheet } from 'react-native'
import { BLACK, WHITE } from '../../theme/colors'
import { SCREEN_HEIGHT } from '../../theme/dimensions'

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 15
  },
  poster: {
    height: 340,
    width: 320,
    borderRadius: 15,
    shadowColor: BLACK,
    shadowOpacity: 0.26,
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 18,
    marginTop: SCREEN_HEIGHT / 8
  },
  description: {
    fontSize: 20,
    fontWeight: '700',
    color: WHITE,
    textAlign: 'center',
    marginVertical: 20
  }
})