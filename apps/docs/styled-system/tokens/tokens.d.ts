/* eslint-disable */
export type Token = "colors.black" | "colors.gray.100" | "colors.gray.200" | "colors.gray.300" | "colors.gray.400" | "colors.gray.500" | "colors.gray.600" | "colors.blue.100" | "colors.blue.200" | "colors.blue.300" | "colors.purple.100" | "colors.purple.200" | "colors.purple.300" | "colors.purple.400" | "colors.red.100" | "colors.red.200" | "colors.orange.100" | "colors.green.100" | "colors.yellow.100" | "colors.white" | "gradients.purple" | "fonts.default" | "fontWeights.bold" | "fontWeights.semi-bold" | "fontWeights.medium" | "fontWeights.regular" | "fontWeights.light" | "colors.link" | "colors.information.error" | "colors.information.success" | "colors.information.warning" | "colors.grayscale.bgLightGrey" | "colors.grayscale.spacerLight" | "colors.grayscale.spacer" | "colors.grayscale.disabled" | "colors.grayscale.border" | "colors.grayscale.hintText" | "colors.colorPalette" | "colors.colorPalette.100" | "colors.colorPalette.200" | "colors.colorPalette.300" | "colors.colorPalette.400" | "colors.colorPalette.500" | "colors.colorPalette.600" | "colors.colorPalette.error" | "colors.colorPalette.success" | "colors.colorPalette.warning" | "colors.colorPalette.bgLightGrey" | "colors.colorPalette.spacerLight" | "colors.colorPalette.spacer" | "colors.colorPalette.disabled" | "colors.colorPalette.border" | "colors.colorPalette.hintText"

export type ColorPalette = "black" | "gray" | "blue" | "purple" | "red" | "orange" | "green" | "yellow" | "white" | "link" | "information" | "grayscale"

export type ColorToken = "black" | "gray.100" | "gray.200" | "gray.300" | "gray.400" | "gray.500" | "gray.600" | "blue.100" | "blue.200" | "blue.300" | "purple.100" | "purple.200" | "purple.300" | "purple.400" | "red.100" | "red.200" | "orange.100" | "green.100" | "yellow.100" | "white" | "link" | "information.error" | "information.success" | "information.warning" | "grayscale.bgLightGrey" | "grayscale.spacerLight" | "grayscale.spacer" | "grayscale.disabled" | "grayscale.border" | "grayscale.hintText" | "colorPalette" | "colorPalette.100" | "colorPalette.200" | "colorPalette.300" | "colorPalette.400" | "colorPalette.500" | "colorPalette.600" | "colorPalette.error" | "colorPalette.success" | "colorPalette.warning" | "colorPalette.bgLightGrey" | "colorPalette.spacerLight" | "colorPalette.spacer" | "colorPalette.disabled" | "colorPalette.border" | "colorPalette.hintText"

export type GradientToken = "purple"

export type FontToken = "default"

export type FontWeightToken = "bold" | "semi-bold" | "medium" | "regular" | "light"

export type Tokens = {
		colors: ColorToken
		gradients: GradientToken
		fonts: FontToken
		fontWeights: FontWeightToken
} & { [token: string]: never }

export type TokenCategory = "aspectRatios" | "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "cursor" | "shadows" | "spacing" | "radii" | "borders" | "borderWidths" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"