import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
const [shortDimension, longDimension] = width < height ? [width, height] : [height, width]

const guidelineBaseWidth = 375
const guidelineBaseHeight = 812

const horizontalScale = (size) => (shortDimension / guidelineBaseWidth) * size
const verticalScale = (size) => (longDimension / guidelineBaseHeight) * size
const moderateScale = (size, factor = 0.5) => size + (horizontalScale(size) - size) * factor
// scale fontsize
const scaleWidth = width / guidelineBaseWidth
const scaleHeight = height / guidelineBaseHeight
const scale = Math.min(scaleWidth, scaleHeight)
const fontSize =
  (size) => Math.ceil((size * scale))

export { horizontalScale, verticalScale, moderateScale, fontSize }
