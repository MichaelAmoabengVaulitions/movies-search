import { StyleSheet } from 'react-native'

import { GRAY, RED_WARNING } from '../../theme/colors'
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
    marginTop: SCREEN_HEIGHT / 3,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
    borderWidth: 1,
    borderColor: GRAY,
    borderRadius: 12,
    height: 50,
    marginTop: 60,
    padding: 10,
  },
  inputField: {
    marginLeft: 10,
  },
})
