import { StyleSheet } from 'react-native'
import { RED_WARNING } from '../../theme/colors'
import { SCREEN_HEIGHT } from '../../theme/dimensions'

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  message: {
    fontSize: 14,
    fontWeight: '700',
    color: RED_WARNING,
    textAlign: 'center',
    marginTop: SCREEN_HEIGHT / 2
  }
})