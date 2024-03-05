/**
 * These are props that dont pass down below Tamagui styled components
 */
export const skipProps = {
  untilMeasured: 1,
  animation: 1,
  space: 1,
  animateOnly: 1,
  disableClassName: 1,
  debug: 1,
  componentName: 1,
  disableOptimization: 1,
  tag: 1,
  style: 1, // handled after loop so pseudos set usedKeys and override it if necessary
  group: 1,
  themeInverse: 1,
  animatePresence: 1,
}

if (process.env.NODE_ENV === 'test') {
  skipProps['data-test-renders'] = 1
}

// native only skips
if (process.env.TAMAGUI_TARGET === 'native') {
  Object.assign(skipProps, {
    whiteSpace: 1,
    wordWrap: 1,
    textOverflow: 1,
    textDecorationDistance: 1,
    cursor: 1,
    contain: 1,
    boxSizing: 1,
    boxShadow: 1,
    outlineStyle: 1,
    outlineOffset: 1,
    outlineWidth: 1,
    outlineColor: 1,
    filter: 1,
    backdropFilter: 1,
    backgroundImage: 1,
    mixBlendMode: 1,
    backgroundOrigin: 1,
    backgroundPosition: 1,
    backgroundRepeat: 1,
    backgroundColor: 1,
    backgroundSize: 1,
    backgroundClip: 1,
    backgroundBlendMode: 1,
    backgroundAttachment: 1,
    background: 1,
    clipPath: 1,
    caretColor: 1,
    transformStyle: 1,
    mask: 1,
    maskImage: 1,
    textEmphasis: 1,
    borderImage: 1,
    float: 1,
    overflowBlock: 1,
    overflowInline: 1,

    maskBorder: 1,
    maskBorderMode: 1,
    maskBorderOutset: 1,
    maskBorderRepeat: 1,
    maskBorderSlice: 1,
    maskBorderSource: 1,
    maskBorderWidth: 1,
    maskClip: 1,
    maskComposite: 1,
    maskMode: 1,
    maskOrigin: 1,
    maskPosition: 1,
    maskRepeat: 1,
    maskSize: 1,
    maskType: 1,
  })
} else {
  if (process.env.NODE_ENV !== 'production') {
    // native only, not web props
    // we only skip them in dev to avoid warnings, in prod they silently drop
    Object.assign(skipProps, {
      ellipsizeMode: 1,
      accessibilityElementsHidden: 1,
      accessibilityIgnoresInvertColors: 1,
      accessibilityLanguage: 1,
      adjustsFontSizeToFit: 1,
      allowFontScaling: 1,
      dataDetectorType: 1,
      dynamicTypeRamp: 1,
      elevationAndroid: 1,
      hapticFeedback: 1,
      hapticStyle: 1,
      importantForAccessibility: 1,
      lineBreakStrategyIOS: 1,
      maxFontSizeMultiplier: 1,
      minimumFontScale: 1,
      needsOffscreenAlphaCompositing: 1,
      nextFocusDown: 1,
      nextFocusForward: 1,
      nextFocusLeft: 1,
      nextFocusRight: 1,
      nextFocusUp: 1,
      onMagicTap: 1,
      selectionColor: 1,
      shouldRasterizeIOS: 1,
      suppressHighlighting: 1,
      textBreakStrategy: 1,
    })
  }
}
